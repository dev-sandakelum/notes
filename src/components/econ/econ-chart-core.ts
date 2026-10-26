/**
 * EconChart core — pure geometry engine for data-driven economics diagrams.
 *
 * Everything here is framework-free and deterministic: scales, curve
 * sampling (linear / monotone cubic / bars), clipping, tick generation,
 * label layout and the anti-collision checks used by the unit tests.
 * The React wrapper (econ-chart.tsx) only renders what this module
 * computes, so the drawing can never disagree with the numbers.
 */

import type {
  EconChartSpec,
  EconCurveSpec,
  EconColor,
} from "@/content/types";

/* ------------------------------------------------------------------ */
/* Small numeric helpers                                               */
/* ------------------------------------------------------------------ */

export function fmtNum(v: number, maxDecimals = 2): string {
  if (!Number.isFinite(v)) return "—";
  const r = Math.round(v * 10 ** maxDecimals) / 10 ** maxDecimals;
  return String(r);
}

/** Solve P = m1·Q + b1 and P = m2·Q + b2 for (Q, P). */
export function solveLinear2(
  m1: number,
  b1: number,
  m2: number,
  b2: number,
): { q: number; p: number } | null {
  if (m1 === m2) return null;
  const q = (b2 - b1) / (m1 - m2);
  return { q, p: m1 * q + b1 };
}

/** Shoelace area of a polygon in data units (absolute value). */
export function polygonArea(pts: [number, number][]): number {
  let a = 0;
  for (let i = 0; i < pts.length; i++) {
    const [x1, y1] = pts[i];
    const [x2, y2] = pts[(i + 1) % pts.length];
    a += x1 * y2 - x2 * y1;
  }
  return Math.abs(a) / 2;
}

export function centroid(pts: [number, number][]): [number, number] {
  const n = pts.length;
  let x = 0;
  let y = 0;
  for (const p of pts) {
    x += p[0];
    y += p[1];
  }
  return [x / n, y / n];
}

/** "Nice" tick values covering [min, max] (approx target count). */
export function niceTicks(min: number, max: number, target = 6): number[] {
  const span = max - min;
  if (span <= 0) return [min];
  const raw = span / target;
  const mag = 10 ** Math.floor(Math.log10(raw));
  const norm = raw / mag;
  const step =
    (norm >= 7.5 ? 10 : norm >= 3.5 ? 5 : norm >= 1.5 ? 2 : 1) * mag;
  const out: number[] = [];
  const start = Math.ceil(min / step - 1e-9) * step;
  for (let v = start; v <= max + step * 1e-6; v += step) {
    out.push(Math.round(v / step) * step);
  }
  return out;
}

/* ------------------------------------------------------------------ */
/* Monotone cubic interpolation (Fritsch–Carlson)                      */
/* ------------------------------------------------------------------ */

/**
 * Smooth interpolation through (x, y) samples that never overshoots the
 * data — PPCs, TP curves and cost curves keep their exact shape.
 */
export function monotoneCubic(
  pts: [number, number][],
  perSegment = 14,
): [number, number][] {
  const n = pts.length;
  if (n < 3) return pts.slice();
  const xs = pts.map((p) => p[0]);
  const ys = pts.map((p) => p[1]);
  const dx: number[] = [];
  const slope: number[] = [];
  for (let i = 0; i < n - 1; i++) {
    dx.push(xs[i + 1] - xs[i]);
    slope.push(dx[i] === 0 ? 0 : (ys[i + 1] - ys[i]) / dx[i]);
  }
  const m: number[] = new Array(n).fill(0);
  m[0] = slope[0];
  m[n - 1] = slope[n - 2];
  for (let i = 1; i < n - 1; i++) {
    if (slope[i - 1] * slope[i] <= 0) {
      m[i] = 0;
    } else {
      const w1 = 2 * dx[i] + dx[i - 1];
      const w2 = dx[i] + 2 * dx[i - 1];
      m[i] = (w1 + w2) / (w1 / slope[i - 1] + w2 / slope[i]);
    }
  }
  const out: [number, number][] = [];
  for (let i = 0; i < n - 1; i++) {
    const steps = Math.max(2, perSegment);
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const t2 = t * t;
      const t3 = t2 * t;
      const h00 = 2 * t3 - 3 * t2 + 1;
      const h10 = t3 - 2 * t2 + t;
      const h01 = -2 * t3 + 3 * t2;
      const h11 = t3 - t2;
      out.push([
        xs[i] + dx[i] * t,
        h00 * ys[i] +
          h10 * dx[i] * m[i] +
          h01 * ys[i + 1] +
          h11 * dx[i] * m[i + 1],
      ]);
    }
  }
  return out;
}

/* ------------------------------------------------------------------ */
/* Curve sampling (data units → polyline, then clipped in pixels)      */
/* ------------------------------------------------------------------ */

export function sampleCurve(c: EconCurveSpec): [number, number][] {
  if (c.kind === "linear" && c.linear) {
    const { m, b } = c.linear;
    return [
      [c.domain[0], m * c.domain[0] + b],
      [c.domain[1], m * c.domain[1] + b],
    ];
  }
  if (c.kind === "points" && c.points) {
    const inDomain = c.points.filter(
      (p) => p[0] >= c.domain[0] - 1e-9 && p[0] <= c.domain[1] + 1e-9,
    );
    const src = inDomain.length >= 2 ? inDomain : c.points;
    return c.smooth && src.length >= 3 ? monotoneCubic(src) : src.slice();
  }
  return [];
}

/** Intersections of a (sampled) curve with a line P = m·Q + b. */
export function intersectCurveLine(
  c: EconCurveSpec,
  m: number,
  b: number,
): [number, number][] {
  const pts = sampleCurve(c);
  const out: [number, number][] = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const [x1, y1] = pts[i];
    const [x2, y2] = pts[i + 1];
    const f1 = y1 - (m * x1 + b);
    const f2 = y2 - (m * x2 + b);
    if (f1 === 0) out.push([x1, y1]);
    if (f1 * f2 < 0) {
      const t = f1 / (f1 - f2);
      out.push([x1 + t * (x2 - x1), y1 + t * (y2 - y1)]);
    }
  }
  return out.filter(
    (p, i) =>
      i === 0 ||
      Math.hypot(p[0] - out[i - 1][0], p[1] - out[i - 1][1]) > 1e-6,
  );
}

/* ------------------------------------------------------------------ */
/* Text metrics (deterministic estimates used for layout + tests)      */
/* ------------------------------------------------------------------ */

const NARROW = new Set("iIljtfr.,:;'`|!()[]{}/\\ ".split(""));
const WIDE = new Set("mMwW@%&".split(""));

export function estTextWidth(text: string, fontSize: number): number {
  let w = 0;
  for (const ch of text) {
    if (NARROW.has(ch)) w += 0.34;
    else if (WIDE.has(ch)) w += 0.86;
    else if (ch >= "A" && ch <= "Z") w += 0.66;
    else if (ch >= "0" && ch <= "9") w += 0.58;
    else w += 0.56;
  }
  return w * fontSize;
}

export interface LabelBox {
  id: string;
  text: string;
  x: number; // anchor x
  y: number; // baseline y
  anchor: "start" | "middle" | "end";
  fontSize: number;
  color?: EconColor | "ink";
  weight?: number;
  halo?: boolean;
  rotate?: boolean;
}

export function labelBBox(l: LabelBox): {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
} {
  const w = estTextWidth(l.text, l.fontSize);
  if (l.rotate) {
    return {
      x1: l.x - l.fontSize * 0.75 - 2,
      y1: l.y - w / 2 - 2,
      x2: l.x + l.fontSize * 0.75 + 2,
      y2: l.y + w / 2 + 2,
    };
  }
  const x1 =
    l.anchor === "end" ? l.x - w : l.anchor === "middle" ? l.x - w / 2 : l.x;
  return {
    x1: x1 - 2,
    y1: l.y - l.fontSize * 0.92,
    x2: x1 + w + 2,
    y2: l.y + l.fontSize * 0.28,
  };
}

/* ------------------------------------------------------------------ */
/* Segment / rectangle intersection                                    */
/* ------------------------------------------------------------------ */

function segIntersectsRect(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  r: { x1: number; y1: number; x2: number; y2: number },
): boolean {
  let t0 = 0;
  let t1 = 1;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const p = [-dx, dx, -dy, dy];
  const q = [x1 - r.x1, r.x2 - x1, y1 - r.y1, r.y2 - y1];
  for (let i = 0; i < 4; i++) {
    if (p[i] === 0) {
      if (q[i] < 0) return false;
    } else {
      const t = q[i] / p[i];
      if (p[i] < 0) {
        if (t > t1) return false;
        if (t > t0) t0 = t;
      } else {
        if (t < t0) return false;
        if (t < t1) t1 = t;
      }
    }
  }
  return true;
}

interface Rect {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

/** Liang–Barsky: clipped [a′, b′] or null when fully outside. */
function clipSegment(a: [number, number], b: [number, number], r: Rect): [number, number][] | null {
  let t0 = 0;
  let t1 = 1;
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  const p = [-dx, dx, -dy, dy];
  const q = [a[0] - r.x1, r.x2 - a[0], a[1] - r.y1, r.y2 - a[1]];
  for (let i = 0; i < 4; i++) {
    if (p[i] === 0) {
      if (q[i] < 0) return null;
    } else {
      const t = q[i] / p[i];
      if (p[i] < 0 && t > t1) return null;
      if (p[i] < 0 && t > t0) t0 = t;
      if (p[i] > 0 && t < t0) return null;
      if (p[i] > 0 && t < t1) t1 = t;
    }
  }
  const a2: [number, number] = [a[0] + t0 * dx, a[1] + t0 * dy];
  const b2: [number, number] = [a[0] + t1 * dx, a[1] + t1 * dy];
  return [a2, b2];
}

/** Clip a pixel polyline to a rectangle, splitting into visible runs. */
function clipPolyline(pts: [number, number][], r: Rect): [number, number][][] {
  const runs: [number, number][][] = [];
  let cur: [number, number][] = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const seg = clipSegment(pts[i], pts[i + 1], r);
    if (seg) {
      const [a, b] = seg;
      if (cur.length === 0) {
        cur.push(a);
      } else {
        const last = cur[cur.length - 1];
        if (Math.abs(last[0] - a[0]) > 0.01 || Math.abs(last[1] - a[1]) > 0.01) {
          if (cur.length >= 2) runs.push(cur);
          cur = [a];
        }
      }
      cur.push(b);
    } else if (cur.length) {
      if (cur.length >= 2) runs.push(cur);
      cur = [];
    }
  }
  if (cur.length >= 2) runs.push(cur);
  return runs;
}

/* ------------------------------------------------------------------ */
/* Layout + render model                                               */
/* ------------------------------------------------------------------ */

export interface RenderModel {
  spec: EconChartSpec;
  viewBox: { w: number; h: number };
  plot: Rect;
  sx: (v: number) => number;
  sy: (v: number) => number;
  invSx: (px: number) => number;
  invSy: (py: number) => number;
  ticksX: { pos: number; label: string; value: number }[];
  ticksY: { pos: number; label: string; value: number }[];
  curves: {
    id: string;
    runs: [number, number][][];
    color: EconColor;
    dash: boolean;
    weight: number;
    label: string;
    labelPos: { x: number; y: number; anchor: "start" | "middle" | "end" } | null;
  }[];
  bars: {
    id: string;
    x: number;
    y: number;
    w: number;
    h: number;
    color: EconColor;
    valueLabel: string;
    labelPos: { x: number; y: number };
    negative: boolean;
  }[];
  regions: {
    id: string;
    points: [number, number][];
    label: string;
    valueLabel: string;
    color: EconColor;
    opacity: number;
    labelPos: { x: number; y: number };
    leader: { x1: number; y1: number; x2: number; y2: number } | null;
  }[];
  refLines: {
    id: string;
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    color: EconColor;
    dash: boolean;
    label: string;
    labelPos: { x: number; y: number; anchor: "start" | "middle" | "end" };
  }[];
  guides: { x1: number; y1: number; x2: number; y2: number }[];
  points: {
    id: string;
    cx: number;
    cy: number;
    color: EconColor;
    label: string;
    valueLabel: string;
    hideValueInLabel: boolean;
    labelPos: { x: number; y: number; anchor: "start" | "end" };
  }[];
  axisValueLabels: {
    axis: "x" | "y";
    pos: number;
    symbol: string;
    value: string;
  }[];
  arrows: {
    id: string;
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    double: boolean;
    color: EconColor;
    label: string;
    labelPos: { x: number; y: number };
  }[];
  vZones: {
    x1: number;
    x2: number;
    y1: number;
    y2: number;
    label: string;
    color: EconColor;
    labelPos: { x: number; y: number };
  }[];
  labels: LabelBox[];
  zeroLine: { x1: number; y1: number; x2: number; y2: number } | null;
}

const FONT_TICK = 10.5;
const FONT_SM = 10.5;
const FONT_TAG = 11.5;

function curveLabelPos(
  run: [number, number][],
  at: "start" | "end",
  plot: Rect,
  extra: number,
): { x: number; y: number; anchor: "start" | "end" } {
  const idx = at === "start" ? 0 : run.length - 1;
  const end = run[idx];
  const other = run[at === "start" ? Math.min(run.length - 1, 1) : Math.max(0, run.length - 2)];
  const dx = end[0] - other[0];
  const dy = end[1] - other[1];
  const len = Math.hypot(dx, dy) || 1;
  let nx = -dy / len;
  let ny = dx / len;
  const cxMid = (plot.x1 + plot.x2) / 2;
  const cyMid = (plot.y1 + plot.y2) / 2;
  const dist2 = (x: number, y: number) =>
    (x - cxMid) ** 2 + (y - cyMid) ** 2;
  if (dist2(end[0] + nx * 10, end[1] + ny * 10) < dist2(end[0], end[1])) {
    nx = -nx;
    ny = -ny;
  }
  const off = 13 + extra;
  return {
    x: end[0] + nx * off + (nx > 0.35 ? 3 : nx < -0.35 ? -3 : 0),
    y: end[1] + ny * off + 4,
    anchor: nx >= 0 ? "start" : "end",
  };
}

function curveLabelAtQ(
  run: [number, number][],
  targetPx: number,
  plot: Rect,
  extra: number,
): { x: number; y: number; anchor: "start" | "end" } {
  // interpolate the exact point at x = targetPx along the run
  let best: [number, number] | null = null;
  let dir: [number, number] = [1, 0];
  for (let i = 0; i < run.length - 1; i++) {
    const a = run[i];
    const b = run[i + 1];
    const lo = Math.min(a[0], b[0]);
    const hi = Math.max(a[0], b[0]);
    if (targetPx >= lo - 0.5 && targetPx <= hi + 0.5) {
      const t =
        Math.abs(b[0] - a[0]) < 1e-9
          ? 0
          : Math.min(1, Math.max(0, (targetPx - a[0]) / (b[0] - a[0])));
      best = [a[0] + t * (b[0] - a[0]), a[1] + t * (b[1] - a[1])];
      dir = [b[0] - a[0], b[1] - a[1]];
      break;
    }
  }
  if (!best) {
    // target beyond the run: clamp to the nearest end
    const first = run[0];
    const last = run[run.length - 1];
    best =
      Math.abs(first[0] - targetPx) <= Math.abs(last[0] - targetPx)
        ? first
        : last;
    dir = [last[0] - first[0], last[1] - first[1]];
  }
  const len = Math.hypot(dir[0], dir[1]) || 1;
  let nx = -dir[1] / len;
  let ny = dir[0] / len;
  const cxMid = (plot.x1 + plot.x2) / 2;
  const cyMid = (plot.y1 + plot.y2) / 2;
  const dist2 = (x: number, y: number) => (x - cxMid) ** 2 + (y - cyMid) ** 2;
  if (dist2(best[0] + nx * 10, best[1] + ny * 10) < dist2(best[0], best[1])) {
    nx = -nx;
    ny = -ny;
  }
  const off = 13 + extra;
  return {
    x: best[0] + nx * off + (nx > 0.35 ? 3 : nx < -0.35 ? -3 : 0),
    y: best[1] + ny * off + 4,
    anchor: nx >= 0 ? "start" : "end",
  };
}

export function buildRenderModel(spec: EconChartSpec): RenderModel {
  const W = spec.size?.w ?? 680;
  const H = spec.size?.h ?? 470;

  const xMin = spec.x.min;
  const xMax = spec.x.max;
  const yMin = spec.y.min;
  const yMax = spec.y.max;

  /* --- axis value labels (from point guides) ------------------------- */
  const axisValueLabels: RenderModel["axisValueLabels"] = [];
  for (const p of spec.points ?? []) {
    const g = p.guides ?? "both";
    if (g === "both" || g === "x") {
      axisValueLabels.push({
        axis: "x",
        pos: p.x,
        symbol: p.xAxisLabel ?? "",
        value: fmtNum(p.x),
      });
    }
    if (g === "both" || g === "y") {
      axisValueLabels.push({
        axis: "y",
        pos: p.y,
        symbol: p.yAxisLabel ?? "",
        value: fmtNum(p.y),
      });
    }
  }

  const ticksXRaw = spec.x.ticks ?? niceTicks(xMin, xMax, 7);
  const ticksYRaw = spec.y.ticks ?? niceTicks(yMin, yMax, 6);
  const hasXVals = axisValueLabels.some((l) => l.axis === "x");

  /* --- padding -------------------------------------------------------- */
  const tickStr = (v: number) => fmtNum(v);
  const xTickW = Math.max(
    ...ticksXRaw.map((t) => estTextWidth(tickStr(t), FONT_TICK)),
    14,
  );
  const yTickW = Math.max(
    ...ticksYRaw.map((t) => estTextWidth(tickStr(t), FONT_TICK)),
    8,
  );
  const yValW = Math.max(
    8,
    ...axisValueLabels
      .filter((l) => l.axis === "y")
      .map(
        (l) =>
          Math.max(
            estTextWidth(l.symbol, FONT_TICK),
            estTextWidth(l.value, FONT_TICK),
          ),
      ),
  );
  const padLeft = 34 + Math.max(yTickW, yValW);

  let rightLabelW = 24;
  for (const c of spec.curves ?? []) {
    if (c.kind !== "bars") {
      rightLabelW = Math.max(rightLabelW, estTextWidth(c.label, FONT_TAG) + 10);
    }
  }
  for (const rl of spec.refLines ?? []) {
    if (rl.axis === "y") {
      rightLabelW = Math.max(rightLabelW, estTextWidth(rl.label, FONT_SM) + 14);
    }
  }
  const padRight = rightLabelW + 12;
  const padTop = 20;
  const padBottom = hasXVals ? 64 : 34;

  const plotX1 = padLeft;
  const plotY1 = padTop;
  const plotX2 = W - padRight;
  const plotY2 = H - padBottom;
  const plotW = plotX2 - plotX1;
  const plotH = plotY2 - plotY1;

  const sx = (v: number) => plotX1 + ((v - xMin) / (xMax - xMin)) * plotW;
  const sy = (v: number) => plotY2 - ((v - yMin) / (yMax - yMin)) * plotH;
  const invSx = (px: number) => xMin + ((px - plotX1) / plotW) * (xMax - xMin);
  const invSy = (py: number) => yMin + ((plotY2 - py) / plotH) * (yMax - yMin);

  const rect: Rect = { x1: plotX1, y1: plotY1, x2: plotX2, y2: plotY2 };

  /* --- curves ---------------------------------------------------------- */
  const curves: RenderModel["curves"] = [];
  for (const c of spec.curves ?? []) {
    if (c.kind === "bars") continue;
    const dataPts = sampleCurve(c);
    const px = dataPts.map((p) => [sx(p[0]), sy(p[1])] as [number, number]);
    const runs = clipPolyline(px, rect);
    let labelPos: RenderModel["curves"][number]["labelPos"] = null;
    if (runs.length) {
      const explicit =
        c.labelAt && typeof c.labelAt === "object" ? c.labelAt : null;
      if (explicit) {
        // vertical placement directly above/below the curve at q
        const run = runs.find((r) =>
          r.some((p) => p[0] >= sx(explicit.q) - 1 && p[0] <= sx(explicit.q) + plotW),
        ) ?? runs[0];
        const isVertical = run.every(
          (p, i) => i === 0 || Math.abs(p[0] - run[0][0]) < 0.5,
        );
        let anchor: [number, number];
        if (isVertical) {
          anchor =
            explicit.side === "above"
              ? run.reduce((a, b) => (b[1] < a[1] ? b : a))
              : run.reduce((a, b) => (b[1] > a[1] ? b : a));
        } else {
          anchor = run.reduce((a, b) =>
            Math.abs(b[0] - sx(explicit.q)) < Math.abs(a[0] - sx(explicit.q)) ? b : a,
          );
        }
        const gap = explicit.gap ?? 16;
        labelPos = {
          x: anchor[0],
          y: explicit.side === "above" ? anchor[1] - gap : anchor[1] + gap + 4,
          anchor: "middle",
        };
      } else {
        const run =
          typeof c.labelAt === "number"
            ? runs.find((r) => r.some((p) => Math.abs(p[0] - sx(c.labelAt as number)) < plotW)) ?? runs[runs.length - 1]
            : c.labelAt === "start"
              ? runs[0]
              : runs[runs.length - 1];
        if (run && run.length >= 2) {
          labelPos =
            typeof c.labelAt === "number"
              ? curveLabelAtQ(run, sx(c.labelAt as number), rect, c.labelOffset ?? 0)
              : curveLabelPos(
                  run,
                  (c.labelAt as "start" | "end") ?? "end",
                  rect,
                  c.labelOffset ?? 0,
                );
        }
      }
    }
    curves.push({
      id: c.id,
      runs,
      color: c.color ?? "primary",
      dash: c.dash ?? false,
      weight: c.weight ?? 1,
      label: c.label,
      labelPos,
    });
  }

  /* --- all curve segments (shared by region + point label placement) --- */
  const lineSegs: { x1: number; y1: number; x2: number; y2: number }[] = [];
  for (const c of curves) {
    for (const run of c.runs) {
      for (let i = 0; i < run.length - 1; i++) {
        lineSegs.push({ x1: run[i][0], y1: run[i][1], x2: run[i + 1][0], y2: run[i + 1][1] });
      }
    }
  }

  /* --- bars ------------------------------------------------------------- */
  const bars: RenderModel["bars"] = [];
  for (const c of spec.curves ?? []) {
    if (c.kind !== "bars" || !c.bars) continue;
    const n = c.bars.length;
    const spacing = plotW / Math.max(1, n + 1);
    const w = Math.min(spacing * 0.62, 46);
    c.bars.forEach((b, i) => {
      const cxBar = plotX1 + spacing * (i + 1);
      const y0 = sy(0);
      const y1 = sy(b.h);
      bars.push({
        id: `${c.id}-${i}`,
        x: cxBar - w / 2,
        y: Math.min(y0, y1),
        w,
        h: Math.abs(y1 - y0),
        color: c.color ?? "accent",
        valueLabel: b.h === 0 ? "" : fmtNum(b.h, 1),
        // value sits just inside the bar near the zero line so it can
        // never collide with curves passing near the bar tops
        labelPos: {
          x: cxBar,
          y: b.h >= 0 ? y0 - 6 : y0 + 13,
        },
        negative: b.h < 0,
      });
    });
  }

  /* --- reference lines (needed before regions: they are obstacles) ------ */
  const refLines: RenderModel["refLines"] = [];
  for (const rl of spec.refLines ?? []) {
    if (rl.axis === "y") {
      const y = sy(rl.at);
      const x2 = rl.extendTo != null ? sx(rl.extendTo) : plotX2 - 4;
      refLines.push({
        id: `ref-${rl.label}`,
        x1: plotX1,
        y1: y,
        x2,
        y2: y,
        color: rl.color ?? "muted",
        dash: rl.dash ?? true,
        label: rl.label,
        labelPos: {
          x: x2 - 5,
          y: rl.labelBelow ? y + 13 : y - 5,
          anchor: "end",
        },
      });
    } else {
      const x = sx(rl.at);
      refLines.push({
        id: `refv-${rl.label}`,
        x1: x,
        y1: plotY2,
        x2: x,
        y2: plotY1 + 4,
        color: rl.color ?? "muted",
        dash: rl.dash ?? true,
        label: rl.label,
        labelPos: { x: x - 4, y: plotY1 + 12, anchor: "end" },
      });
    }
  }
  const refSegs = refLines.map((r) => ({ x1: r.x1, y1: r.y1, x2: r.x2, y2: r.y2 }));

  /* --- every guide segment (obstacles for region + point labels) -------- */
  const allGuideSegs: { x1: number; y1: number; x2: number; y2: number }[] = [];
  for (const p of spec.points ?? []) {
    const g = p.guides ?? "both";
    const cx = sx(p.x);
    const cy = sy(p.y);
    if (g === "both" || g === "x") {
      allGuideSegs.push({ x1: cx, y1: cy, x2: cx, y2: plotY2 });
    }
    if (g === "both" || g === "y") {
      allGuideSegs.push({ x1: plotX1, y1: cy, x2: cx, y2: cy });
    }
  }

  /* --- regions ----------------------------------------------------------- */
  const regions: RenderModel["regions"] = [];
  for (const r of spec.regions ?? []) {
    const px = r.points.map((p) => [sx(p[0]), sy(p[1])] as [number, number]);
    const c = centroid(px);
    const text = r.valueLabel ? `${r.label} = ${r.valueLabel}` : r.label;
    const edges = px.map(
      (p, i) => [p, px[(i + 1) % px.length]] as [number, number][],
    );
    const fits = (lx: number, ly: number) => {
      const w = estTextWidth(text, FONT_SM) + 6;
      const h = FONT_SM + 4;
      const box = { x1: lx - w / 2, y1: ly - h, x2: lx + w / 2, y2: ly + 2 };
      if (box.x1 < plotX1 + 1 || box.x2 > plotX2 - 1 || box.y1 < plotY1 + 1 || box.y2 > plotY2 - 1) {
        return false;
      }
      const hitsEdge = edges.some(
        ([a, b]) => segIntersectsRect(a[0], a[1], b[0], b[1], box),
      );
      if (hitsEdge) return false;
      const segs = [...lineSegs, ...refSegs, ...allGuideSegs];
      return !segs.some((s) => segIntersectsRect(s.x1, s.y1, s.x2, s.y2, box));
    };
    let labelPos = { x: c[0], y: c[1] + 3 + (r.labelDy ?? 0) };
    let leader: RenderModel["regions"][number]["leader"] = null;
    if (!fits(labelPos.x, labelPos.y)) {
      let placed = false;
      // spiral search: vertical offsets first, then diagonal ones
      const offsets: [number, number][] = [];
      for (const dy of [-15, 15, -28, 28, -41, 41, -54, 54, -67, 67, -80, 80]) {
        offsets.push([0, dy]);
      }
      for (const dx of [-35, 35, -70, 70, -105, 105]) {
        for (const dy of [-30, 0, 30, -60, 60]) {
          offsets.push([dx, dy]);
        }
      }
      for (const [dx, dy] of offsets) {
        if (fits(c[0] + dx, c[1] + dy)) {
          labelPos = { x: c[0] + dx, y: c[1] + dy };
          if (Math.abs(dy) >= 20 || Math.abs(dx) >= 20) {
            leader = {
              x1: c[0],
              y1: c[1] + (dy > 0 ? -3 : 3),
              x2: labelPos.x,
              y2: labelPos.y + (dy > 0 ? 4 : -4),
            };
          }
          placed = true;
          break;
        }
      }
      if (!placed) {
        // outside placements with leader lines
        const minX = Math.min(...px.map((p) => p[0]));
        const maxX = Math.max(...px.map((p) => p[0]));
        const top = Math.min(...px.map((p) => p[1]));
        const bottom = Math.max(...px.map((p) => p[1]));
        const w = estTextWidth(text, FONT_SM) + 8;
        const cands: {
          pos: { x: number; y: number };
          leader: { x1: number; y1: number; x2: number; y2: number };
        }[] = [
          {
            pos: { x: minX - w / 2 - 10, y: c[1] + 3 },
            leader: { x1: minX - 4, y1: c[1], x2: minX - 8, y2: c[1] },
          },
          {
            pos: { x: maxX + w / 2 + 10, y: c[1] + 3 },
            leader: { x1: maxX + 4, y1: c[1], x2: maxX + 8, y2: c[1] },
          },
          {
            pos: { x: c[0], y: top - 10 },
            leader: { x1: c[0], y1: top - 4, x2: c[0], y2: top - 8 },
          },
          {
            pos: { x: c[0], y: bottom + 18 },
            leader: { x1: c[0], y1: bottom + 4, x2: c[0], y2: bottom + 15 },
          },
        ];
        for (const cand of cands) {
          if (fits(cand.pos.x, cand.pos.y)) {
            labelPos = cand.pos;
            leader = cand.leader;
            placed = true;
            break;
          }
        }
        if (!placed) {
          // absolute last resort: above the polygon (unchecked, but the
          // automated tests will surface any remaining collision)
          labelPos = { x: c[0], y: top - 10 };
          leader = { x1: c[0], y1: top - 4, x2: c[0], y2: labelPos.y + 3 };
        }
      }
    }
    regions.push({
      id: r.label,
      points: px,
      label: r.label,
      valueLabel: r.valueLabel ?? "",
      color: r.color ?? "primary",
      opacity: r.opacity ?? 0.2,
      labelPos,
      leader,
    });
  }

  /* --- point guides + points (with anti-collision nudging) --------------- */
  const guides: RenderModel["guides"] = [];
  const points: RenderModel["points"] = [];
  const labelClears = (
    lx: number,
    ly: number,
    text: string,
    fontSize: number,
    anchor: "start" | "end",
    extraSegs: { x1: number; y1: number; x2: number; y2: number }[],
  ) => {
    const w = estTextWidth(text, fontSize);
    const x1 = anchor === "end" ? lx - w : lx;
    const bx = { x1: x1 - 2, y1: ly - fontSize * 0.92, x2: x1 + w + 2, y2: ly + fontSize * 0.28 };
    const all = [...lineSegs, ...extraSegs];
    return !all.some((s) => segIntersectsRect(s.x1, s.y1, s.x2, s.y2, bx));
  };

  // Guides were precomputed above (before regions); reuse them here.
  guides.push(...allGuideSegs);

  // Arrow shafts are also obstacles for point labels.
  const arrowSegs: { x1: number; y1: number; x2: number; y2: number }[] = [];
  for (const a of spec.arrows ?? []) {
    const ax1 = sx(a.from[0]);
    const ay1 = sy(a.from[1]);
    const ax2 = sx(a.to[0]);
    const ay2 = sy(a.to[1]);
    const alen = Math.hypot(ax2 - ax1, ay2 - ay1) || 1;
    const ux = (ax2 - ax1) / alen;
    const uy = (ay2 - ay1) / alen;
    arrowSegs.push({
      x1: ax1 + ux * 7,
      y1: ay1 + uy * 7,
      x2: ax2 - ux * 7,
      y2: ay2 - uy * 7,
    });
  }
  const obstacleSegs = [...allGuideSegs, ...refSegs, ...arrowSegs];

  // Labels already placed (curve, region, ref-line, bar labels) are
  // obstacles too — point labels must not overlap any other text.
  const placedLabelBoxes: ReturnType<typeof labelBBox>[] = [];
  const addBox = (text: string, x: number, y: number, anchor: "start" | "middle" | "end", fontSize: number) => {
    placedLabelBoxes.push(labelBBox({ id: "", text, x, y, anchor, fontSize }));
  };
  for (const c of curves) {
    if (c.labelPos) addBox(c.label, c.labelPos.x, c.labelPos.y, c.labelPos.anchor, FONT_TAG);
  }
  for (const b of bars) {
    if (b.valueLabel) addBox(b.valueLabel, b.labelPos.x, b.labelPos.y, "middle", 9.5);
  }
  for (const r of regions) {
    addBox(r.valueLabel ? `${r.label} = ${r.valueLabel}` : r.label, r.labelPos.x, r.labelPos.y, "middle", FONT_SM);
  }
  for (const rl of refLines) {
    addBox(rl.label, rl.labelPos.x, rl.labelPos.y, rl.labelPos.anchor, FONT_SM);
  }

  const labelClearsAll = (
    lx: number,
    ly: number,
    text: string,
    fontSize: number,
    anchor: "start" | "end",
  ) => {
    if (!labelClears(lx, ly, text, fontSize, anchor, obstacleSegs)) return false;
    const w = estTextWidth(text, fontSize);
    const x1 = anchor === "end" ? lx - w : lx;
    const bx = {
      x1: x1 - 2,
      y1: ly - fontSize * 0.92,
      x2: x1 + w + 2,
      y2: ly + fontSize * 0.28,
    };
    return !placedLabelBoxes.some(
      (b) =>
        bx.x1 + 2 < b.x2 - 2 &&
        b.x1 + 2 < bx.x2 - 2 &&
        bx.y1 + 2 < b.y2 - 2 &&
        b.y1 + 2 < bx.y2 - 2,
    );
  };

  for (const p of spec.points ?? []) {
    const cx = sx(p.x);
    const cy = sy(p.y);
    const text =
      p.valueLabel && !p.hideValueInLabel
        ? `${p.label} ${p.valueLabel}`
        : p.label;
    const candidates: [number, number][] = [
      [p.dx ?? 9, p.dy ?? -9],
      [2, -18],
      [-11, -6],
      [11, 5],
      [-11, 5],
      [13, -16],
      [-15, -16],
      [16, -6],
      [-18, -6],
      [9, 16],
      [-11, 16],
      [22, -13],
      [-24, -13],
      [36, -12],
      [-40, -12],
      [14, -26],
      [-16, -26],
      [40, 14],
      [-44, 14],
    ];
    const seen = new Set<string>();
    const unique = candidates.filter((c) => {
      const k = c.join(",");
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    });
    let chosen = unique[0];
    for (const cand of unique) {
      const lx = cx + cand[0];
      const ly = cy + cand[1];
      if (labelClearsAll(lx, ly, text, FONT_TAG, cand[0] < 0 ? "end" : "start")) {
        chosen = cand;
        break;
      }
    }
    points.push({
      id: p.label,
      cx,
      cy,
      color: p.color ?? "success",
      label: p.label,
      valueLabel: p.valueLabel ?? "",
      hideValueInLabel: p.hideValueInLabel ?? false,
      labelPos: {
        x: cx + chosen[0],
        y: cy + chosen[1],
        anchor: chosen[0] < 0 ? "end" : "start",
      },
    });
  }

  /* --- arrows --------------------------------------------------------------- */
  const arrows: RenderModel["arrows"] = [];
  for (const a of spec.arrows ?? []) {
    const x1 = sx(a.from[0]);
    const y1 = sy(a.from[1]);
    const x2 = sx(a.to[0]);
    const y2 = sy(a.to[1]);
    const dx = x2 - x1;
    const dy = y2 - y1;
    const len = Math.hypot(dx, dy) || 1;
    // perpendicular of the shaft direction; the default (−12) puts the
    // label above horizontal arrows and to the left of upward arrows
    const px = dy / len;
    const py2 = -dx / len;
    const off = a.labelDy ?? -12;
    arrows.push({
      id: a.label || `arrow-${a.from[0]}-${a.to[0]}`,
      x1,
      y1,
      x2,
      y2,
      double: a.double ?? false,
      color: a.color ?? "muted",
      label: a.label,
      labelPos: {
        x: (x1 + x2) / 2 + px * off + (a.labelDx ?? 0),
        y: (y1 + y2) / 2 + py2 * off,
      },
    });
  }

  /* --- vertical zones --------------------------------------------------------- */
  const vZones: RenderModel["vZones"] = [];
  for (const z of spec.vZones ?? []) {
    vZones.push({
      x1: sx(z.from),
      x2: sx(z.to),
      y1: plotY1,
      y2: plotY2,
      label: z.label,
      color: z.color,
      labelPos: {
        x: (sx(z.from) + sx(z.to)) / 2,
        y: z.labelY === "bottom" ? plotY2 - 10 : plotY1 + 14,
      },
    });
  }

  /* --- ticks (suppress ones too close to axis value labels) ------------------ */
  const xVals = axisValueLabels.filter((l) => l.axis === "x");
  const yVals = axisValueLabels.filter((l) => l.axis === "y");
  const ticksX = ticksXRaw
    .map((t) => ({ pos: sx(t), label: tickStr(t), value: t }))
    .filter((tk) => !xVals.some((v) => Math.abs(sx(v.pos) - tk.pos) < 26));
  const ticksY = ticksYRaw
    .map((t) => ({ pos: sy(t), label: tickStr(t), value: t }))
    .filter((tk) => !yVals.some((v) => Math.abs(sy(v.pos) - tk.pos) < 15));

  /* --- collect every text label (for rendering + collision checks) ------------ */
  const labels: LabelBox[] = [];
  for (const t of ticksX) {
    labels.push({ id: `tx-${t.label}@${t.pos.toFixed(0)}`, text: t.label, x: t.pos, y: plotY2 + 14, anchor: "middle", fontSize: FONT_TICK, color: "muted" });
  }
  for (const t of ticksY) {
    labels.push({ id: `ty-${t.label}@${t.pos.toFixed(0)}`, text: t.label, x: plotX1 - 7, y: t.pos + 3.5, anchor: "end", fontSize: FONT_TICK, color: "muted" });
  }
  for (const av of axisValueLabels) {
    if (av.axis === "x") {
      if (av.symbol) {
        labels.push({ id: `axv-${av.symbol}`, text: av.symbol, x: sx(av.pos), y: plotY2 + 27, anchor: "middle", fontSize: FONT_TICK, color: "ink", weight: 700 });
      }
      labels.push({ id: `axn-${av.value}`, text: av.value, x: sx(av.pos), y: plotY2 + 40, anchor: "middle", fontSize: FONT_TICK, color: "ink", weight: 700, halo: true });
    } else {
      if (av.symbol) {
        labels.push({ id: `ayv-${av.symbol}`, text: av.symbol, x: plotX1 - 8, y: sy(av.pos) - 2, anchor: "end", fontSize: FONT_TICK, color: "ink", weight: 700 });
      }
      labels.push({ id: `ayn-${av.value}`, text: av.value, x: plotX1 - 8, y: sy(av.pos) + 11, anchor: "end", fontSize: FONT_TICK, color: "ink", weight: 700, halo: true });
    }
  }
  labels.push({ id: "x-title", text: spec.x.label, x: (plotX1 + plotX2) / 2, y: plotY2 + (hasXVals ? 57 : 31), anchor: "middle", fontSize: 12, color: "muted" });
  labels.push({ id: "y-title", text: spec.y.label, x: 15, y: (plotY1 + plotY2) / 2, anchor: "middle", fontSize: 12, color: "muted", rotate: true });
  for (const c of curves) {
    if (c.labelPos) {
      labels.push({ id: `cl-${c.id}`, text: c.label, x: c.labelPos.x, y: c.labelPos.y, anchor: c.labelPos.anchor, fontSize: FONT_TAG, color: c.color, weight: 700, halo: true });
    }
  }
  for (const b of bars) {
    if (b.valueLabel) {
      labels.push({ id: `bl-${b.id}`, text: b.valueLabel, x: b.labelPos.x, y: b.labelPos.y, anchor: "middle", fontSize: 9.5, color: b.negative ? "danger" : b.color, weight: 700, halo: true });
    }
  }
  for (const r of regions) {
    const text = r.valueLabel ? `${r.label} = ${r.valueLabel}` : r.label;
    labels.push({ id: `rg-${r.id}`, text, x: r.labelPos.x, y: r.labelPos.y, anchor: "middle", fontSize: FONT_SM, color: r.color, weight: 700, halo: true });
  }
  for (const rl of refLines) {
    labels.push({ id: `rl-${rl.id}`, text: rl.label, x: rl.labelPos.x, y: rl.labelPos.y, anchor: rl.labelPos.anchor, fontSize: FONT_SM, color: rl.color, weight: 700, halo: true });
  }
  for (const p of points) {
    const text =
      p.valueLabel && !p.hideValueInLabel
        ? `${p.label} ${p.valueLabel}`
        : p.label;
    labels.push({ id: `pt-${p.id}`, text, x: p.labelPos.x, y: p.labelPos.y, anchor: p.labelPos.anchor, fontSize: FONT_TAG, color: p.color, weight: 700, halo: true });
  }
  for (const a of arrows) {
    if (a.label) {
      labels.push({ id: `ar-${a.id}`, text: a.label, x: a.labelPos.x, y: a.labelPos.y, anchor: "middle", fontSize: FONT_SM, color: a.color, weight: 700, halo: true });
    }
  }
  for (const z of vZones) {
    labels.push({ id: `vz-${z.label}`, text: z.label, x: z.labelPos.x, y: z.labelPos.y, anchor: "middle", fontSize: FONT_SM, color: z.color, weight: 700, halo: true });
  }
  for (const l of spec.labels ?? []) {
    labels.push({
      id: `lb-${l.text.slice(0, 14)}-${l.x.toFixed(1)}-${l.y.toFixed(1)}`,
      text: l.text,
      x: sx(l.x),
      y: sy(l.y),
      anchor: l.anchor ?? "middle",
      fontSize: l.size === "tag" ? FONT_TAG : FONT_SM,
      color: l.color,
      halo: true,
    });
  }

  const zeroLine =
    spec.zeroLine && yMin < 0 && yMax > 0
      ? { x1: plotX1, y1: sy(0), x2: plotX2, y2: sy(0) }
      : null;

  return {
    spec,
    viewBox: { w: W, h: H },
    plot: rect,
    sx,
    sy,
    invSx,
    invSy,
    ticksX,
    ticksY,
    curves,
    bars,
    regions,
    refLines,
    guides,
    points,
    axisValueLabels,
    arrows,
    vZones,
    labels,
    zeroLine,
  };
}

/* ------------------------------------------------------------------ */
/* Anti-collision checks (used by unit tests)                          */
/* ------------------------------------------------------------------ */

export interface OverlapIssue {
  kind: "label-label" | "label-line";
  a: string;
  b: string;
}

/** Margin shrunk into each label so touching ≠ overlapping. */
const SHRINK = 1.5;

export function checkOverlaps(m: RenderModel): OverlapIssue[] {
  const issues: OverlapIssue[] = [];

  const boxes = m.labels.map((l) => ({ l, b: labelBBox(l) }));
  for (let i = 0; i < boxes.length; i++) {
    for (let j = i + 1; j < boxes.length; j++) {
      const a = boxes[i].b;
      const b = boxes[j].b;
      if (
        a.x1 + SHRINK < b.x2 - SHRINK &&
        b.x1 + SHRINK < a.x2 - SHRINK &&
        a.y1 + SHRINK < b.y2 - SHRINK &&
        b.y1 + SHRINK < a.y2 - SHRINK
      ) {
        issues.push({ kind: "label-label", a: boxes[i].l.id, b: boxes[j].l.id });
      }
    }
  }

  const lines: {
    id: string;
    x1: number;
    y1: number;
    x2: number;
    y2: number;
  }[] = [];
  for (const c of m.curves) {
    for (const run of c.runs) {
      for (let i = 0; i < run.length - 1; i++) {
        lines.push({ id: `curve:${c.id}`, x1: run[i][0], y1: run[i][1], x2: run[i + 1][0], y2: run[i + 1][1] });
      }
    }
  }
  for (const g of m.guides) lines.push({ id: "guide", ...g });
  for (const r of m.refLines) lines.push({ id: `ref:${r.label}`, x1: r.x1, y1: r.y1, x2: r.x2, y2: r.y2 });
  for (const a of m.arrows) {
    const dx = a.x2 - a.x1;
    const dy = a.y2 - a.y1;
    const len = Math.hypot(dx, dy) || 1;
    const ux = dx / len;
    const uy = dy / len;
    lines.push({
      id: `arrow:${a.label}`,
      x1: a.x1 + ux * 7,
      y1: a.y1 + uy * 7,
      x2: a.x2 - ux * 7,
      y2: a.y2 - uy * 7,
    });
  }
  lines.push({ id: "axis:x", x1: m.plot.x1, y1: m.plot.y2, x2: m.plot.x2, y2: m.plot.y2 });
  lines.push({ id: "axis:y", x1: m.plot.x1, y1: m.plot.y1, x2: m.plot.x1, y2: m.plot.y2 });
  if (m.zeroLine) lines.push({ id: "zero", ...m.zeroLine });

  for (const { l, b } of boxes) {
    // Tick labels, axis titles and axis value labels live outside the plot:
    // only check them against curves (not axis lines / guides / zero line).
    const outsidePlot =
      l.id.startsWith("tx-") ||
      l.id.startsWith("ty-") ||
      l.id === "x-title" ||
      l.id === "y-title" ||
      l.id.startsWith("axv-") ||
      l.id.startsWith("axn-") ||
      l.id.startsWith("ayv-") ||
      l.id.startsWith("ayn-");
    const inner = {
      x1: b.x1 + SHRINK,
      y1: b.y1 + SHRINK,
      x2: b.x2 - SHRINK,
      y2: b.y2 - SHRINK,
    };
    for (const s of lines) {
      if (
        outsidePlot &&
        (s.id.startsWith("axis") || s.id === "guide" || s.id === "zero" || s.id.startsWith("arrow"))
      ) {
        continue;
      }
      if (l.id.startsWith("bl-") && (s.id === "zero" || s.id.startsWith("axis"))) continue;
      if (segIntersectsRect(s.x1, s.y1, s.x2, s.y2, inner)) {
        issues.push({ kind: "label-line", a: l.id, b: s.id });
      }
    }
  }
  return issues;
}

/* ------------------------------------------------------------------ */
/* Spec-wide sanity validation (used by unit tests)                     */
/* ------------------------------------------------------------------ */

export interface SpecIssue {
  kind: "out-of-range" | "negative-value" | "empty-curve" | "bad-domain";
  detail: string;
}

export function validateSpec(spec: EconChartSpec): SpecIssue[] {
  const issues: SpecIssue[] = [];
  const inX = (v: number) => v >= spec.x.min - 1e-6 && v <= spec.x.max + 1e-6;
  const inY = (v: number) => v >= spec.y.min - 1e-6 && v <= spec.y.max + 1e-6;

  for (const c of spec.curves ?? []) {
    if (c.domain[0] > c.domain[1]) {
      issues.push({
        kind: "bad-domain",
        detail: `curve ${c.id}: domain [${c.domain.join(", ")}]`,
      });
    }
    if (c.kind === "linear" && c.linear) {
      const { m, b } = c.linear;
      const probes = c.domain;
      const ys = probes.map((q) => m * q + b);
      const midY = m * (c.domain[0] + c.domain[1]) / 2 + b;
      if (![...ys, midY].some((p) => inY(p))) {
        issues.push({ kind: "empty-curve", detail: `curve ${c.id} never enters the y-range` });
      }
    }
    if (c.kind === "points" && (!c.points || c.points.length < 2)) {
      issues.push({ kind: "empty-curve", detail: `curve ${c.id} has < 2 points` });
    }
    if (c.kind === "bars" && (!c.bars || c.bars.length === 0)) {
      issues.push({ kind: "empty-curve", detail: `curve ${c.id} has no bars` });
    }
  }
  for (const p of spec.points ?? []) {
    if (!inX(p.x) || !inY(p.y)) {
      issues.push({ kind: "out-of-range", detail: `point ${p.label} (${fmtNum(p.x)}, ${fmtNum(p.y)}) outside axes` });
    }
    if (p.x < 0 || p.y < 0) {
      issues.push({ kind: "negative-value", detail: `point ${p.label} has a negative coordinate` });
    }
  }
  for (const r of spec.regions ?? []) {
    for (const p of r.points) {
      if (!inX(p[0]) || !inY(p[1])) {
        issues.push({ kind: "out-of-range", detail: `region ${r.label} vertex (${fmtNum(p[0])}, ${fmtNum(p[1])}) outside axes` });
      }
    }
  }
  for (const a of spec.arrows ?? []) {
    for (const p of [a.from, a.to]) {
      if (!inX(p[0]) || !inY(p[1])) {
        issues.push({ kind: "out-of-range", detail: `arrow ${a.label} endpoint outside axes` });
      }
    }
  }
  for (const rl of spec.refLines ?? []) {
    if (rl.axis === "y" && !inY(rl.at)) {
      issues.push({ kind: "out-of-range", detail: `ref line ${rl.label} outside y-range` });
    }
    if (rl.axis === "x" && !inX(rl.at)) {
      issues.push({ kind: "out-of-range", detail: `ref line ${rl.label} outside x-range` });
    }
  }
  return issues;
}
