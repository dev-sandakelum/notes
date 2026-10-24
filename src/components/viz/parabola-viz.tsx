"use client";

import { useId, useState } from "react";
import { Slider } from "@/components/ui/slider";

/**
 * Quadratic graph explorer (Maths — TMS1113).
 * y = ax² + bx + c with three sliders (a, b, c). Live SVG plot with
 * gridlines every 2 units, vertex point + coordinates, dashed axis of
 * symmetry, real-root markers, and a discriminant readout.
 */

const W = 400;
const H = 300;
const padL = 30;
const padR = 12;
const padT = 14;
const padB = 24;
const plotW = W - padL - padR; // x: −10..10
const plotH = H - padT - padB; // y: −12..12

const px = (x: number) => padL + ((x + 10) / 20) * plotW;
const py = (y: number) => H - padB - ((y + 12) / 24) * plotH;

const fmt = (v: number) => String(Math.round(v * 100) / 100).replace("-", "−");

export function ParabolaViz({ caption }: { caption?: string }) {
  const [a, setA] = useState(1);
  const [b, setB] = useState(-2);
  const [c, setC] = useState(-3);
  const rawId = useId();
  const clipId = `plot-${rawId.replace(/[^a-zA-Z0-9]/g, "")}`;

  const isQuad = a !== 0;
  const h = isQuad ? -b / (2 * a) : NaN;
  const k = isQuad ? c - (b * b) / (4 * a) : NaN;
  const disc = b * b - 4 * a * c;
  const sq = Math.sqrt(Math.max(disc, 0));
  const r1 = isQuad ? (-b - sq) / (2 * a) : NaN;
  const r2 = isQuad ? (-b + sq) / (2 * a) : NaN;

  // Sample the curve; y is clipped via clipPath, values bounded for safety.
  const pts: string[] = [];
  for (let i = 0; i <= 100; i++) {
    const x = -10 + i * 0.2;
    const y = Math.max(-60, Math.min(60, a * x * x + b * x + c));
    pts.push(`${px(x).toFixed(1)},${py(y).toFixed(1)}`);
  }
  const curve = `M ${pts.join(" L ")}`;

  // Pretty standard form, e.g. "y = x² − 2x − 3".
  const parts: string[] = [];
  const push = (v: number, suffix: string) => {
    if (v === 0) return;
    const mag = Math.abs(v);
    const m = suffix && mag === 1 ? "" : fmt(mag);
    if (parts.length === 0) parts.push(`${v < 0 ? "−" : ""}${m}${suffix}`);
    else parts.push(`${v < 0 ? "− " : "+ "}${m}${suffix}`);
  };
  push(a, "x²");
  push(b, "x");
  push(c, "");
  const expr = parts.length ? parts.join(" ") : "0";

  const discMsg = !isQuad
    ? { text: "a = 0 → not a quadratic: y = bx + c is a straight line.", tone: "text-warn" }
    : disc > 0.000001
      ? {
          text: `Δ = b² − 4ac = ${fmt(disc)} → two distinct real roots (x = ${fmt(r1)}, ${fmt(r2)})`,
          tone: "text-ok",
        }
      : Math.abs(disc) <= 0.000001
        ? {
            text: `Δ = b² − 4ac = 0 → one repeated root (x = ${fmt(h)}); the curve touches the x-axis`,
            tone: "text-warn",
          }
        : {
            text: `Δ = b² − 4ac = ${fmt(disc)} < 0 → no real roots (the curve never meets the x-axis)`,
            tone: "text-danger",
          };

  const vertexVisible = isQuad && Math.abs(h) <= 10 && Math.abs(k) <= 12;
  const symVisible = isQuad && Math.abs(h) <= 10;
  const labelLeft = h < 4; // keep the vertex label inside the plot

  return (
    <figure className="border border-hairline rounded-md bg-paper-raised p-4 print-avoid-break viz-shell">
      <div className="no-print mx-auto flex w-full max-w-md flex-col gap-2">
        <div className="flex items-center gap-3">
          <span className="w-36 shrink-0 text-caption text-ink-muted">a: curvature, direction</span>
          <Slider
            className="flex-1"
            value={[a]}
            min={-3}
            max={3}
            step={0.1}
            aria-label="Coefficient a"
            onValueChange={([v]) => setA(Math.round(v * 10) / 10)}
          />
          <span className="w-10 text-right font-mono text-sm">{a.toFixed(1)}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-36 shrink-0 text-caption text-ink-muted">b: linear shift</span>
          <Slider
            className="flex-1"
            value={[b]}
            min={-8}
            max={8}
            step={0.5}
            aria-label="Coefficient b"
            onValueChange={([v]) => setB(Math.round(v * 2) / 2)}
          />
          <span className="w-10 text-right font-mono text-sm">{b.toFixed(1)}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-36 shrink-0 text-caption text-ink-muted">c: y-intercept</span>
          <Slider
            className="flex-1"
            value={[c]}
            min={-10}
            max={10}
            step={0.5}
            aria-label="Coefficient c"
            onValueChange={([v]) => setC(Math.round(v * 2) / 2)}
          />
          <span className="w-10 text-right font-mono text-sm">{c.toFixed(1)}</span>
        </div>
      </div>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={`Graph of y = ${expr}. ${discMsg.text}`}
        className="mx-auto mt-3 block h-auto w-full"
      >
        <defs>
          <clipPath id={clipId}>
            <rect x={padL} y={padT} width={plotW} height={plotH} />
          </clipPath>
        </defs>

        {/* gridlines every 2 units */}
        {Array.from({ length: 11 }, (_, i) => -10 + i * 2).map((t) => (
          <line
            key={`gx-${t}`}
            x1={px(t)}
            y1={py(-12)}
            x2={px(t)}
            y2={py(12)}
            className="stroke-[var(--fig-soft)]"
            strokeWidth={1}
          />
        ))}
        {Array.from({ length: 13 }, (_, i) => -12 + i * 2).map((t) => (
          <line
            key={`gy-${t}`}
            x1={px(-10)}
            y1={py(t)}
            x2={px(10)}
            y2={py(t)}
            className="stroke-[var(--fig-soft)]"
            strokeWidth={1}
          />
        ))}

        {/* axes */}
        <line
          x1={px(-10)}
          y1={py(0)}
          x2={px(10)}
          y2={py(0)}
          className="stroke-[var(--fig-axis)]"
          strokeWidth={1.5}
        />
        <line
          x1={px(0)}
          y1={py(-12)}
          x2={px(0)}
          y2={py(12)}
          className="stroke-[var(--fig-axis)]"
          strokeWidth={1.5}
        />
        <text x={px(10) - 4} y={py(0) - 8} textAnchor="end" fontSize={11} className="fill-[var(--fig-axis)]">
          x
        </text>
        <text x={px(0) + 8} y={py(12) + 12} fontSize={11} className="fill-[var(--fig-axis)]">
          y
        </text>

        {/* tick labels every 4 units */}
        {[-8, -4, 4, 8].map((t) => (
          <text
            key={`tx-${t}`}
            x={px(t)}
            y={py(0) + 13}
            textAnchor="middle"
            fontSize={9}
            className="fill-[var(--fig-axis)] font-mono"
          >
            {t}
          </text>
        ))}
        {[-8, -4, 4, 8].map((t) => (
          <text
            key={`ty-${t}`}
            x={px(0) - 6}
            y={py(t) + 3}
            textAnchor="end"
            fontSize={9}
            className="fill-[var(--fig-axis)] font-mono"
          >
            {t}
          </text>
        ))}

        {/* axis of symmetry */}
        {symVisible ? (
          <line
            x1={px(h)}
            y1={py(-12)}
            x2={px(h)}
            y2={py(12)}
            strokeDasharray="5 4"
            className="stroke-[var(--fig-accent)]"
            strokeWidth={1.5}
          />
        ) : null}

        {/* the curve */}
        <path
          d={curve}
          fill="none"
          strokeLinejoin="round"
          clipPath={`url(#${clipId})`}
          className="stroke-[var(--fig-primary)]"
          strokeWidth={2}
        />

        {/* real roots (where y = 0) */}
        {isQuad && disc > 0.000001 ? (
          [r1, r2].map((r, i) =>
            Math.abs(r) <= 10 ? (
              <circle
                key={`root-${i}`}
                cx={px(r)}
                cy={py(0)}
                r={3.5}
                style={{ fill: "var(--danger)", transition: "cx .15s" }}
              />
            ) : null
          )
        ) : null}

        {/* vertex */}
        {vertexVisible ? (
          <>
            <circle
              cx={px(h)}
              cy={py(k)}
              r={4.5}
              stroke="var(--paper-raised)"
              strokeWidth={1.5}
              style={{ fill: "var(--ok)", transition: "cx .15s, cy .15s" }}
            />
            <text
              x={labelLeft ? px(h) + 10 : px(h) - 10}
              y={py(k) + (a > 0 ? -8 : 16)}
              textAnchor={labelLeft ? "start" : "end"}
              fontSize={10}
              className="fill-[var(--ink-muted)] font-mono"
            >
              ({fmt(h)}, {fmt(k)})
            </text>
          </>
        ) : null}
      </svg>

      <div className="mt-3 text-center font-mono text-sm text-ink">y = {expr}</div>
      <div className="mt-1 text-center font-mono text-caption text-ink-muted">
        {isQuad
          ? `vertex (${fmt(h)}, ${fmt(k)}) · axis of symmetry x = ${fmt(h)} · y-intercept (0, ${fmt(c)})`
          : `y-intercept (0, ${fmt(c)})`}
      </div>
      <div aria-live="polite" className={`mt-1 min-h-[1.5rem] text-center text-sm ${discMsg.tone}`}>
        {discMsg.text}
      </div>

      {caption ? (
        <figcaption className="mt-1 border-t border-hairline pt-2 text-center text-caption italic text-ink-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
