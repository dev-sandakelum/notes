/**
 * Server-side SVG viewBox normalizer.
 *
 * Content figures carry hand-written `viewBox` attributes that were often
 * computed from the drawing grid rather than the actual node geometry, so
 * nodes near the edges get clipped (e.g. the ch08 expression tree: leaves
 * at cy=205 with r=18 inside a 220-tall viewBox).
 *
 * `normalizeSvg` parses the geometry elements (circle / line / rect / text)
 * and EXPANDS the viewBox when any of them fall outside it — never shrinks,
 * so diagrams with intentional whitespace keep their composition. It also
 * drops fixed width/height attributes so the responsive CSS
 * (width: 100%; height: auto) drives the rendered size.
 *
 * Expand-only keeps non-tree diagrams (graphs, UML, flow boxes) untouched
 * unless something genuinely pokes out of the frame.
 */

const PAD = 8; // breathing room beyond the outermost geometry

interface Bounds {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
  empty: boolean;
}

function collectBounds(svg: string): Bounds {
  let minX = Infinity,
    minY = Infinity,
    maxX = -Infinity,
    maxY = -Infinity;
  const add = (x: number, y: number) => {
    if (!Number.isFinite(x) || !Number.isFinite(y)) return;
    minX = Math.min(minX, x);
    minY = Math.min(minY, y);
    maxX = Math.max(maxX, x);
    maxY = Math.max(maxY, y);
  };

  // circles include their radius
  for (const m of svg.matchAll(
    /<circle\b[^>]*\bcx="(-?[\d.]+)"[^>]*\bcy="(-?[\d.]+)"[^>]*\br="([\d.]+)"/g,
  )) {
    add(+m[1] - +m[3], +m[2] - +m[3]);
    add(+m[1] + +m[3], +m[2] + +m[3]);
  }
  // attribute order can differ (r before cx/cy)
  for (const m of svg.matchAll(
    /<circle\b(?![^>]*\bcx=)[^>]*\br="([\d.]+)"[^>]*\bcx="(-?[\d.]+)"[^>]*\bcy="(-?[\d.]+)"/g,
  )) {
    add(+m[2] - +m[1], +m[3] - +m[1]);
    add(+m[2] + +m[1], +m[3] + +m[1]);
  }
  // plain points: line endpoints, rect corners, ellipse centers, text anchors
  for (const m of svg.matchAll(
    /<line\b[^>]*\bx1="(-?[\d.]+)"[^>]*\by1="(-?[\d.]+)"[^>]*\bx2="(-?[\d.]+)"[^>]*\by2="(-?[\d.]+)"/g,
  )) {
    add(+m[1], +m[2]);
    add(+m[3], +m[4]);
  }
  for (const m of svg.matchAll(
    /<rect\b[^>]*\bx="(-?[\d.]+)"[^>]*\by="(-?[\d.]+)"[^>]*\bwidth="([\d.]+)"[^>]*\bheight="([\d.]+)"/g,
  )) {
    add(+m[1], +m[2]);
    add(+m[1] + +m[3], +m[2] + +m[4]);
  }
  for (const m of svg.matchAll(
    /<text\b[^>]*\bx="(-?[\d.]+)"[^>]*\by="(-?[\d.]+)"/g,
  )) {
    // text anchor is a point estimate; treat as a small box around it
    add(+m[1], +m[2] - 12);
    add(+m[1] + 4, +m[2] + 4);
  }

  return { minX, minY, maxX, maxY, empty: !Number.isFinite(minX) };
}

/** Expand (never shrink) an svg string's viewBox to fit its geometry. */
export function normalizeSvg(svg: string): string {
  const vbMatch = svg.match(/<svg\b[^>]*\bviewBox="([^"]+)"/);
  if (!vbMatch) return svg;
  const parts = vbMatch[1].trim().split(/[\s,]+/).map(Number);
  if (parts.length !== 4 || parts.some((n) => !Number.isFinite(n))) return svg;
  const [vx, vy, vw, vh] = parts;

  const b = collectBounds(svg);
  if (b.empty) return svg;

  // required frame (geometry + padding)
  const needX = b.minX - PAD;
  const needY = b.minY - PAD;
  const needR = b.maxX + PAD;
  const needB = b.maxY + PAD;

  // union of the existing viewBox and the required frame
  const outX = Math.min(vx, needX);
  const outY = Math.min(vy, needY);
  const outR = Math.max(vx + vw, needR);
  const outB = Math.max(vy + vh, needB);
  const outW = outR - outX;
  const outH = outB - outY;

  const changed = outX !== vx || outY !== vy || outW !== vw || outH !== vh;
  if (!changed) {
    // still drop fixed width/height so the responsive CSS can drive layout
    return stripSizeAttrs(svg);
  }

  const newVb = `${round(outX)} ${round(outY)} ${round(outW)} ${round(outH)}`;
  let out = svg.replace(vbMatch[0], vbMatch[0].replace(vbMatch[1], newVb));
  out = stripSizeAttrs(out);
  return out;
}

function stripSizeAttrs(svg: string): string {
  return svg.replace(
    /(<svg\b[^>]*?)\s+width="[\d.]+"\s*(?=[^>]*\/?>)/,
    "$1",
  ).replace(
    /(<svg\b[^>]*?)\s+height="[\d.]+"\s*(?=[^>]*\/?>)/,
    "$1",
  );
}

function round(v: number): number {
  return Math.round(v * 10) / 10;
}
