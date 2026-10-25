/**
 * Pure geometry for the circular-queue ring player.
 *
 * The old stage hardcoded a 340x340 viewBox and dropped the FRONT/REAR
 * markers at a fixed distance that landed EXACTLY on the viewBox edge,
 * so labels clipped ("REAR" rendered as "RE", FRONT vanished above the
 * top slot). This module computes EVERYTHING from N:
 *
 *   - slot size + ring radius scale with N (chord between adjacent slot
 *     centres >= slot width + gap, with a floor radius for tiny rings);
 *   - FRONT/REAR labels sit OUTSIDE the ring, radially beyond their own
 *     slot, each with an arrow pointing back at the slot;
 *   - when FRONT and REAR share a slot the two labels split tangentially
 *     (+/-RING_SPLIT_DEG around the slot angle) so they never overlap;
 *     adjacent slots never collide by construction (verified for N=3..16
 *     in scripts/test-players.ts);
 *   - index labels sit INSIDE the ring (radially inward of each slot) so
 *     they can never collide with the outside markers;
 *   - the viewBox is derived from the WORST-CASE marker extent for the
 *     given N, so it is identical for every frame (no SVG resizing
 *     between steps) and always contains every element + padding.
 *
 * Pure math only — no React, no DOM — so the unit tests can verify all
 * of it headlessly.
 */

export interface RingSlot {
  i: number;
  /** slot centre */
  x: number;
  y: number;
  /** index label centre (inside the ring, radially inward) */
  ix: number;
  iy: number;
  angle: number;
}

export interface RingMarker {
  kind: "front" | "rear";
  /** label centre */
  lx: number;
  ly: number;
  /** arrow tail -> tip (label toward slot) */
  tailX: number;
  tailY: number;
  tipX: number;
  tipY: number;
  /** arrowhead triangle (tip + two base points) */
  head: [number, number][];
}

export interface RingGeometry {
  N: number;
  /** viewBox = "0 0 size size" (centred on cx = cy = size/2) */
  size: number;
  cx: number;
  cy: number;
  /** ring guide radius (slot CENTRES lie on this circle) */
  radius: number;
  slotW: number;
  slotH: number;
  /** font sizes (svg units) */
  valueFont: number;
  indexFont: number;
  markerFont: number;
  slots: RingSlot[];
  front: RingMarker | null;
  rear: RingMarker | null;
}

/** Min distance between the FRONT and REAR label centres (svg units). */
const LABEL_MIN_SEPARATION = 56;
/** Tangential split (degrees either side of the slot angle) when both
 *  markers point at the SAME slot. */
const RING_SPLIT_DEG = 14;
/** Estimated half-width of the widest marker label ("FRONT", bold mono). */
const LABEL_HALF_W = 19;
/** Half-height of a marker label. */
const LABEL_HALF_H = 7;
/** Padding around everything, inside the viewBox. */
const PAD = 9;

function slotSize(N: number): { w: number; h: number } {
  if (N <= 6) return { w: 52, h: 44 };
  if (N <= 10) return { w: 46, h: 40 };
  return { w: 40, h: 36 };
}

/**
 * Build the full ring geometry for N slots with optional FRONT/REAR
 * markers on the given slot indexes (pass null to hide a marker).
 */
export function buildRingGeometry(
  N: number,
  frontSlot: number | null,
  rearSlot: number | null,
): RingGeometry {
  if (N < 2) throw new Error("ring needs at least 2 slots");

  const { w: slotW, h: slotH } = slotSize(N);
  // chord between adjacent slot centres must fit the slot + a gap
  const radius = Math.max(84, (slotW + 12) / (2 * Math.sin(Math.PI / N)));
  // label centre: outside the slot, far enough for arrow + text
  const labelR = radius + slotH / 2 + 46;
  const size = Math.ceil(2 * (labelR + LABEL_HALF_W + PAD));
  const cx = size / 2;
  const cy = size / 2;

  const valueFont = N <= 6 ? 15 : N <= 10 ? 14 : 13;
  const indexFont = N <= 10 ? 9 : 10;
  const markerFont = 12;

  const angleOf = (i: number) => -Math.PI / 2 + (i * 2 * Math.PI) / N;

  const slots: RingSlot[] = Array.from({ length: N }, (_, i) => {
    const a = angleOf(i);
    const x = cx + radius * Math.cos(a);
    const y = cy + radius * Math.sin(a);
    // index label: radially INSIDE the slot, clear of the ring guide
    const ia = radius - slotH / 2 - 12;
    return {
      i,
      x,
      y,
      ix: cx + ia * Math.cos(a),
      iy: cy + ia * Math.sin(a),
      angle: a,
    };
  });

  const makeMarker = (
    kind: "front" | "rear",
    slot: number,
    splitDeg: number,
  ): RingMarker => {
    const phi = angleOf(slot);
    const theta = phi + (splitDeg * Math.PI) / 180;
    const lx = cx + labelR * Math.cos(theta);
    const ly = cy + labelR * Math.sin(theta);
    // arrow: from just inside the label toward the slot's near edge
    const sx = cx + radius * Math.cos(phi);
    const sy = cy + radius * Math.sin(phi);
    const dx = sx - lx;
    const dy = sy - ly;
    const len = Math.hypot(dx, dy) || 1;
    const ux = dx / len;
    const uy = dy / len;
    const tailX = lx + ux * 22;
    const tailY = ly + uy * 22;
    const tipX = sx - ux * (slotH / 2 + 4);
    const tipY = sy - uy * (slotH / 2 + 4);
    // arrowhead: tip at (tip), base 9 back along the shaft, +/-4.5 across
    const bx = tipX - ux * 9;
    const by = tipY - uy * 9;
    const px = -uy;
    const py = ux;
    const head: [number, number][] = [
      [tipX, tipY],
      [bx + px * 4.5, by + py * 4.5],
      [bx - px * 4.5, by - py * 4.5],
    ];
    return { kind, lx, ly, tailX, tailY, tipX, tipY, head };
  };

  // Same slot: split the two labels tangentially so they never overlap.
  const same = frontSlot !== null && rearSlot !== null && frontSlot === rearSlot;
  const front =
    frontSlot === null
      ? null
      : makeMarker("front", frontSlot, same ? -RING_SPLIT_DEG : 0);
  const rear =
    rearSlot === null
      ? null
      : makeMarker("rear", rearSlot, same ? RING_SPLIT_DEG : 0);

  return {
    N,
    size,
    cx,
    cy,
    radius,
    slotW,
    slotH,
    valueFont,
    indexFont,
    markerFont,
    slots,
    front,
    rear,
  };
}

/**
 * Worst-case geometry check used by the unit tests: every element of
 * every marker/slot combination stays inside the viewBox with margin.
 * Exported so tests can reuse the exact estimates used for the viewBox.
 */
export function ringLabelSeparation(g: RingGeometry): number | null {
  if (!g.front || !g.rear) return null;
  return Math.hypot(g.front.lx - g.rear.lx, g.front.ly - g.rear.ly);
}

/** Estimated label bbox (label text is horizontal, anchored middle). */
export function ringLabelBBox(m: RingMarker): {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
} {
  return {
    x1: m.lx - LABEL_HALF_W,
    y1: m.ly - LABEL_HALF_H,
    x2: m.lx + LABEL_HALF_W,
    y2: m.ly + LABEL_HALF_H,
  };
}

export const RING_LABEL_MIN_SEPARATION = LABEL_MIN_SEPARATION;
