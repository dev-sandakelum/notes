import type { EconChartSpec } from "@/content/types";

/**
 * Production & cost charts (Lesson 05 / Tutorial 05).
 * Every curve below is generated from the worked-example data or a
 * closed-form cost function; minima and crossings are computed, not
 * eyeballed.
 */

/* ------------------------------------------------------------------ */
/* 1. Total product (from the Lesson 05 production table)              */
/* ------------------------------------------------------------------ */

export const PROD_TABLE: { L: number[]; TP: number[] } = {
  L: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  TP: [80, 170, 270, 368, 430, 480, 504, 504, 495, 470],
};

export const MP_L = PROD_TABLE.TP.map(
  (tp, i) => tp - (i === 0 ? 0 : PROD_TABLE.TP[i - 1]),
); // [80, 90, 100, 98, 62, 50, 24, 0, −9, −25]
export const AP_L = PROD_TABLE.TP.map((tp, i) => tp / (i + 1)); // [80, 85, 90, 92, ...]

const tpMax = Math.max(...PROD_TABLE.TP); // 504
const tpMaxL = PROD_TABLE.L[PROD_TABLE.TP.indexOf(tpMax)]; // 8

export const TOTAL_PRODUCT_CHART: EconChartSpec = {
  id: "total-product",
  title: "Total product curve with the three production zones",
  desc: `Total product for 1–10 workers: 80, 170, 270, 368, 430, 480, 504, 504, 495, 470. TP peaks at ${tpMax} units with ${tpMaxL} workers, exactly where marginal product is zero, and falls when MP turns negative (L = 9, 10).`,
  x: { label: "Labour (workers)", min: 0, max: 11, ticks: [0, 2, 4, 6, 8, 10] },
  y: { label: "Total product (units)", min: 0, max: 560, ticks: [0, 100, 200, 300, 400, 500] },
  vZones: [
    { from: 0, to: 3, label: "increasing returns", color: "success" },
    { from: 3, to: 8, label: "diminishing returns", color: "warn" },
    { from: 8, to: 11, label: "negative returns", color: "danger" },
  ],
  curves: [
    {
      id: "TP",
      label: "TP",
      kind: "points",
      points: PROD_TABLE.L.map((l, i) => [l, PROD_TABLE.TP[i]] as [number, number]),
      domain: [1, 10],
      color: "primary",
      smooth: true,
      eq: "TP from the Lesson 05 table",
      labelAt: 5,
      labelOffset: 16,
    },
  ],
  points: [
    { x: 3, y: 270, label: "MP peak", valueLabel: "(L=3, 270)", guides: "none", color: "accent", dx: 10, dy: -8 },
    { x: tpMaxL, y: tpMax, label: "TP max", valueLabel: `(L=${tpMaxL}, ${tpMax})`, guides: "both", xAxisLabel: "L = 8", yAxisLabel: "TP max", color: "success", dx: 14, dy: -12 },
  ],
  tableRows: [
    { label: "TP (L = 1…10)", value: PROD_TABLE.TP.join(", ") },
    { label: "MP = ΔTP", value: MP_L.join(", ") },
    { label: "AP = TP/L", value: AP_L.map((v) => Math.round(v)).join(", ") },
    { label: "TP maximum", value: `${tpMax} units at L = ${tpMaxL}, where MP = 0` },
    { label: "Zones", value: "increasing returns L ≤ 3 (MP rising), diminishing 3 < L < 8 (MP falling, positive), negative L > 8 (MP < 0)" },
  ],
  caption: `Total product rises with labour — at an increasing rate while MP rises (to 270 units at L = 3), then at a decreasing rate — peaks at TP max = ${tpMax} units when L = ${tpMaxL} (MP = 0), and falls to 470 at L = 10 once MP is negative (−9, −25). Point G inside a PPC is the analogue of operating below this curve.`,
};

/* ------------------------------------------------------------------ */
/* 2. Marginal & average product                                       */
/* ------------------------------------------------------------------ */

const mpPeak = Math.max(...MP_L); // 100
const apMax = Math.max(...AP_L); // 92
const apMaxL = PROD_TABLE.L[AP_L.indexOf(apMax)]; // 4

export const MP_AP_CHART: EconChartSpec = {
  id: "mp-ap",
  title: "Marginal product and average product with the three zones",
  desc: `Marginal product (80, 90, 100, 98, 62, 50, 24, 0, −9, −25) rises to its peak of 100 at 3 workers, then falls, hits zero at 8 workers and turns negative. Average product peaks at 92 at 4 workers, and MP cuts AP at AP's maximum.`,
  x: { label: "Labour (workers)", min: 0, max: 11, ticks: [0, 2, 4, 6, 8, 10] },
  y: { label: "MP, AP (units per worker)", min: -35, max: 110, ticks: [0, 25, 50, 75, 100] },
  zeroLine: true,
  vZones: [
    { from: 0, to: 3, label: "increasing", color: "success", labelY: "bottom" },
    { from: 3, to: 8, label: "diminishing", color: "warn", labelY: "bottom" },
    { from: 8, to: 11, label: "negative", color: "danger", labelY: "bottom" },
  ],
  curves: [
    {
      id: "MP",
      label: "MP",
      kind: "points",
      points: PROD_TABLE.L.map((l, i) => [l, MP_L[i]] as [number, number]),
      domain: [1, 10],
      color: "accent",
      eq: "MP = ΔTP/ΔL",
      labelAt: 9.2,
      labelOffset: 3,
    },
    {
      id: "AP",
      label: "AP",
      kind: "points",
      points: PROD_TABLE.L.map((l, i) => [l, AP_L[i]] as [number, number]),
      domain: [1, 10],
      color: "primary",
      smooth: true,
      eq: "AP = TP/L",
      labelAt: 9.6,
      labelOffset: 3,
    },
  ],
  points: [
    { x: 3, y: mpPeak, label: "MP max", valueLabel: `(3, ${mpPeak})`, guides: "both", xAxisLabel: "L = 3", yAxisLabel: "", color: "accent", dx: 10, dy: -10 },
    { x: apMaxL, y: apMax, label: "AP max", valueLabel: `(${apMaxL}, ${apMax})`, guides: "both", xAxisLabel: "L = 4", yAxisLabel: "", color: "primary", dx: 12, dy: -12 },
    { x: 8, y: 0, label: "MP = 0", valueLabel: "(8, 0)", guides: "x", xAxisLabel: "L = 8", color: "danger", dx: 10, dy: -12 },
  ],
  tableRows: [
    { label: "MP (L = 1…10)", value: MP_L.join(", ") },
    { label: "AP (L = 1…10)", value: AP_L.map((v) => Math.round(v)).join(", ") },
    { label: "MP maximum", value: `${mpPeak} at L = 3 (end of increasing returns)` },
    { label: "AP maximum", value: `${apMax} at L = ${apMaxL} — MP (${MP_L[3]}) is still above AP here and drops below it at L = 5, so MP cuts AP at AP's peak` },
    { label: "MP = 0", value: "at L = 8, where TP peaks (504)" },
    { label: "Rule", value: "MP > AP → AP rising; MP < AP → AP falling; MP = AP at AP max" },
  ],
  caption: `MP rises to ${mpPeak} (L = 3), falls through zero at L = 8 and turns negative; AP peaks at ${apMax} (L = ${apMaxL}) exactly where MP crosses it from above. While MP > AP (L = 1–4) AP rises; once MP < AP (L ≥ 5) AP falls — the three zones are increasing returns (L ≤ 3), diminishing returns (3 < L < 8) and negative returns (L > 8).`,
};

/* ------------------------------------------------------------------ */
/* 3. Total cost curves (from a closed-form cost function)             */
/* ------------------------------------------------------------------ */

/**
 * Short-run technology used for the cost charts:
 *   TC = Q³ − 6Q² + 20Q + 40  (so TFC = 40, TVC = Q³ − 6Q² + 20Q)
 */
export const COST_FN = {
  tvc: (q: number) => q ** 3 - 6 * q ** 2 + 20 * q,
  tc: (q: number) => q ** 3 - 6 * q ** 2 + 20 * q + 40,
  tfc: 40,
  mc: (q: number) => 3 * q ** 2 - 12 * q + 20,
  avc: (q: number) => q ** 2 - 6 * q + 20,
  atc: (q: number) => q ** 2 - 6 * q + 20 + 40 / q,
  afc: (q: number) => 40 / q,
} as const;

const sample = (f: (q: number) => number, from: number, to: number, n = 60) => {
  const pts: [number, number][] = [];
  for (let i = 0; i <= n; i++) {
    const q = from + ((to - from) * i) / n;
    pts.push([q, f(q)]);
  }
  return pts;
};

const tcPts = sample(COST_FN.tc, 0, 6);
const tvcPts = sample(COST_FN.tvc, 0, 6);
const tcAt4 = COST_FN.tc(4); // 88
const tvcAt4 = COST_FN.tvc(4); // 48
const tvcAt45 = COST_FN.tvc(4.5); // 59.625
const tcAt45 = COST_FN.tc(4.5); // 99.625

export const TOTAL_COSTS_CHART: EconChartSpec = {
  id: "total-costs",
  title: "Total cost, total fixed cost and total variable cost",
  desc: `With TFC = Rs 40 and TVC = Q³ − 6Q² + 20Q, total cost is TC = TVC + TFC. TVC starts at the origin and rises slowly at first (while MC falls) then accelerates; TC is TVC lifted vertically by the constant TFC = Rs 40 — at Q = 4.5 the gap is ${tcAt45.toFixed(1)} − ${tvcAt45.toFixed(1)} = 40.`,
  x: { label: "Output (units)", min: 0, max: 6.4, ticks: [0, 1, 2, 3, 4, 5, 6] },
  y: { label: "Cost (Rs, total)", min: 0, max: 180, ticks: [0, 40, 80, 120, 160] },
  curves: [
    { id: "TFC", label: "TFC", kind: "linear", linear: { m: 0, b: COST_FN.tfc }, domain: [0, 6], color: "muted", eq: "TFC = 40 (constant)", labelAt: 1, labelOffset: 4 },
    { id: "TVC", label: "TVC", kind: "points", points: tvcPts, domain: [0, 6], color: "accent", smooth: true, eq: "TVC = Q³ − 6Q² + 20Q", labelAt: 5.4, labelOffset: 2 },
    { id: "TC", label: "TC", kind: "points", points: tcPts, domain: [0, 6], color: "primary", smooth: true, eq: "TC = TVC + TFC = Q³ − 6Q² + 20Q + 40", labelAt: 5.4, labelOffset: 2 },
  ],
  points: [
    { x: 4, y: tcAt4, label: "TC(4)", valueLabel: `(4, ${tcAt4})`, guides: "both", xAxisLabel: "Q = 4", yAxisLabel: "TC", color: "primary", dx: 12, dy: -10 },
    { x: 4, y: tvcAt4, label: "TVC(4)", valueLabel: `(4, ${tvcAt4})`, guides: "none", color: "accent", dx: 12, dy: 12 },
  ],
  arrows: [
    { from: [2.5, COST_FN.tvc(2.5)], to: [2.5, COST_FN.tc(2.5)], label: "TFC = 40", double: true, color: "muted", labelDy: -34 },
  ],
  tableRows: [
    { label: "Total fixed cost", value: "TFC = Rs 40 at every Q (incl. Q = 0)" },
    { label: "Total variable cost", value: "TVC = Q³ − 6Q² + 20Q (starts at origin)" },
    { label: "Total cost", value: "TC = TFC + TVC = Q³ − 6Q² + 20Q + 40" },
    { label: "At Q = 4", value: `TVC = ${tvcAt4}, TFC = 40 → TC = ${tcAt4}` },
    { label: "Gap between TC and TVC", value: `always TFC: at Q = 4.5, ${tcAt45.toFixed(2)} − ${tvcAt45.toFixed(2)} = 40` },
  ],
  caption: `Short-run total costs: TVC = Q³ − 6Q² + 20Q rises slowly at first (marginal cost is falling) then accelerates; TFC = Rs 40 is the same at every output; TC = TFC + TVC runs parallel to TVC, the vertical gap always being Rs 40 (at Q = 4.5: ${tcAt45.toFixed(2)} − ${tvcAt45.toFixed(2)} = 40). At Q = 4, TVC = ${tvcAt4} and TC = ${tcAt4}.`,
};

/* ------------------------------------------------------------------ */
/* 4. Unit cost curves (MC, ATC, AVC, AFC from the same technology)    */
/* ------------------------------------------------------------------ */

/** MC = AVC at AVC's minimum: both equal Q² − 6Q + 20 evaluated at Q = 3 → 11. */
const avcMinQ = 3;
const avcMin = COST_FN.avc(avcMinQ); // 11
/** Minimise ATC numerically: ATC′ = 2Q − 6 − 40/Q² = 0 → Q ≈ 4.155. */
const atcMinQ = (() => {
  let lo = 3.5;
  let hi = 5;
  for (let i = 0; i < 60; i++) {
    const mid = (lo + hi) / 2;
    const d = 2 * mid - 6 - 40 / (mid * mid);
    if (d < 0) lo = mid;
    else hi = mid;
  }
  return (lo + hi) / 2;
})(); // ≈ 4.1548
const atcMin = COST_FN.atc(atcMinQ); // ≈ 21.96
const mcMinQ = 2;
const mcMin = COST_FN.mc(mcMinQ); // 8

export const UNIT_COSTS_CHART: EconChartSpec = {
  id: "unit-costs",
  title: "Marginal and average cost curves",
  desc: `Unit costs from TFC = 40, TVC = Q³ − 6Q² + 20Q: MC = 3Q² − 12Q + 20 is U-shaped with minimum Rs 8 at Q = 2; AVC = Q² − 6Q + 20 bottoms out at Rs 11 at Q = 3 exactly where MC cuts it; ATC = AVC + AFC bottoms out at about Rs 21.96 at Q ≈ 4.15 where MC cuts it; AFC = 40/Q falls continuously.`,
  x: { label: "Output (units)", min: 1, max: 6.3, ticks: [1, 2, 3, 4, 5, 6] },
  y: { label: "Cost (Rs per unit)", min: 0, max: 62, ticks: [0, 10, 20, 30, 40, 50, 60] },
  curves: [
    { id: "AFC", label: "AFC", kind: "points", points: sample(COST_FN.afc, 1, 6), domain: [1, 6], color: "muted", eq: "AFC = 40/Q", labelAt: 2, labelOffset: 2 },
    { id: "AVC", label: "AVC", kind: "points", points: sample(COST_FN.avc, 1, 6), domain: [1, 6], color: "accent", eq: "AVC = Q² − 6Q + 20", labelAt: 5.6, labelOffset: 2 },
    { id: "ATC", label: "ATC", kind: "points", points: sample(COST_FN.atc, 1, 6), domain: [1, 6], color: "primary", eq: "ATC = AVC + AFC = Q² − 6Q + 20 + 40/Q", labelAt: 5.8, labelOffset: 2 },
    { id: "MC", label: "MC", kind: "points", points: sample(COST_FN.mc, 1, 6), domain: [1, 6], color: "danger", eq: "MC = 3Q² − 12Q + 20", labelAt: 5.8, labelOffset: 2 },
  ],
  points: [
    { x: 3, y: avcMin, label: "AVC min", valueLabel: `(${avcMinQ}, ${avcMin})`, guides: "both", xAxisLabel: "Q = 3", yAxisLabel: "Rs 11", color: "accent", hideValueInLabel: true, dx: -12, dy: -26 },
    { x: atcMinQ, y: atcMin, label: "ATC min", valueLabel: `(${atcMinQ.toFixed(2)}, ${atcMin.toFixed(2)})`, guides: "both", xAxisLabel: "Q = 4.15", yAxisLabel: "Rs 21.96", color: "primary", hideValueInLabel: true, dx: -34, dy: -18 },
  ],
  tableRows: [
    { label: "MC", value: "MC = 3Q² − 12Q + 20 → minimum Rs 8 at Q = 2" },
    { label: "AVC", value: `AVC = Q² − 6Q + 20 → minimum Rs ${avcMin} at Q = ${avcMinQ}, where MC = ${COST_FN.mc(avcMinQ)} = AVC` },
    { label: "ATC", value: `ATC = Q² − 6Q + 20 + 40/Q → minimum ≈ Rs ${atcMin.toFixed(2)} at Q ≈ ${atcMinQ.toFixed(2)}, where MC = ${COST_FN.mc(atcMinQ).toFixed(2)} ≈ ATC` },
    { label: "AFC", value: "AFC = 40/Q → falls continuously, never reaches zero" },
    { label: "Why U-shaped", value: "MP rises then falls → MC falls then rises; MC pulls the averages: MC below AVC/ATC pulls them down, above pulls them up" },
  ],
  caption: `Unit costs: MC (Rs ${mcMin} minimum at Q = ${mcMinQ}) cuts AVC at its minimum (Q = ${avcMinQ}, Rs ${avcMin}) and ATC at its minimum (Q ≈ ${atcMinQ.toFixed(2)}, Rs ${atcMin.toFixed(2)}) — the exam favourite. AFC = 40/Q falls continuously as the fixed cost is spread over more units, and ATC = AVC + AFC always lies above AVC with the gap shrinking toward AFC.`,
};

/* ------------------------------------------------------------------ */
/* 5. LRATC envelope with economies/diseconomies of scale              */
/* ------------------------------------------------------------------ */

const atc1 = (q: number) => 4 * (q - 2) ** 2 + 40;
const atc2 = (q: number) => 1.5 * (q - 5) ** 2 + 30;
const atc3 = (q: number) => 0.5 * (q - 9) ** 2 + 32;
const lratc = (q: number) => Math.min(atc1(q), atc2(q), atc3(q));

/** Crossover where ATC₁ = ATC₂ (envelope switches plants). */
const switch1 = (() => {
  let lo = 1.5;
  let hi = 3;
  for (let i = 0; i < 60; i++) {
    const mid = (lo + hi) / 2;
    if (atc1(mid) - atc2(mid) > 0) hi = mid;
    else lo = mid;
  }
  return (lo + hi) / 2;
})(); // ≈ 2.354
const switch2 = (() => {
  let lo = 6;
  let hi = 7.5;
  for (let i = 0; i < 60; i++) {
    const mid = (lo + hi) / 2;
    if (atc2(mid) - atc3(mid) > 0) hi = mid;
    else lo = mid;
  }
  return (lo + hi) / 2;
})(); // ≈ 6.742

const mesQ = 5;
const mesC = atc2(mesQ); // 30

export const LRATC_CHART: EconChartSpec = {
  id: "lratc",
  title: "Long-run average cost as the envelope of short-run ATC curves",
  desc: `Three plant sizes: ATC₁ = 4(Q−2)² + 40, ATC₂ = 1.5(Q−5)² + 30 and ATC₃ = 0.5(Q−9)² + 32. The LRATC follows whichever plant is cheapest — it falls (economies of scale) to the minimum efficient scale (5, Rs 30), stays roughly flat, then rises (diseconomies). The envelope switches from ATC₁ to ATC₂ at Q ≈ 2.35 and from ATC₂ to ATC₃ at Q ≈ 6.74.`,
  x: { label: "Units of output", min: 0, max: 13.4, ticks: [0, 2, 4, 6, 8, 10, 12] },
  y: { label: "Cost (Rs per unit)", min: 20, max: 96, ticks: [20, 40, 60, 80] },
  curves: [
    { id: "ATC1", label: "ATC 1", kind: "points", points: sample(atc1, 0.4, 5.2), domain: [0.4, 5.2], color: "muted", dash: true, eq: "ATC₁ = 4(Q−2)² + 40", labelAt: { q: 1.4, side: "below", gap: 18 } },
    { id: "ATC2", label: "ATC 2", kind: "points", points: sample(atc2, 1.6, 10.6), domain: [1.6, 10.6], color: "muted", dash: true, eq: "ATC₂ = 1.5(Q−5)² + 30", labelAt: 8.6, labelOffset: 3 },
    { id: "ATC3", label: "ATC 3", kind: "points", points: sample(atc3, 3.5, 13), domain: [3.5, 13], color: "muted", dash: true, eq: "ATC₃ = 0.5(Q−9)² + 32", labelAt: 12, labelOffset: 3 },
    { id: "LRATC", label: "LRATC", kind: "points", points: sample(lratc, 0.4, 13), domain: [0.4, 13], color: "primary", weight: 1.3, eq: "LRATC = min(ATC₁, ATC₂, ATC₃)", labelAt: 11, labelOffset: 3 },
  ],
  points: [
    { x: switch1, y: atc1(switch1), label: "switch 1→2", valueLabel: `(${switch1.toFixed(2)}, ${atc1(switch1).toFixed(1)})`, guides: "none", color: "muted", hideValueInLabel: true, dx: -11, dy: 16 },
    { x: mesQ, y: mesC, label: "MES", valueLabel: `(${mesQ}, ${mesC})`, guides: "both", xAxisLabel: "Q = 5", yAxisLabel: "Rs 30", color: "success", hideValueInLabel: true, dx: -13, dy: 22 },
    { x: switch2, y: atc2(switch2), label: "switch 2→3", valueLabel: `(${switch2.toFixed(2)}, ${atc2(switch2).toFixed(1)})`, guides: "none", color: "muted", hideValueInLabel: true, dx: 13, dy: -16 },
  ],
  labels: [
    { text: "economies of scale (falling)", x: 2.4, y: 88, anchor: "middle", color: "success" },
    { text: "constant returns", x: 7.2, y: 24.5, anchor: "middle", color: "muted" },
    { text: "diseconomies (rising)", x: 10.6, y: 26, anchor: "middle", color: "danger" },
  ],
  tableRows: [
    { label: "Plant 1", value: "ATC₁ = 4(Q−2)² + 40 (min Rs 40 at Q = 2)" },
    { label: "Plant 2", value: "ATC₂ = 1.5(Q−5)² + 30 (min Rs 30 at Q = 5)" },
    { label: "Plant 3", value: "ATC₃ = 0.5(Q−9)² + 32 (min Rs 32 at Q = 9)" },
    { label: "LRATC", value: "lower envelope of the three ATCs — never above any short-run ATC" },
    { label: "Envelope switches", value: `ATC₁ = ATC₂ at Q ≈ ${switch1.toFixed(2)}; ATC₂ = ATC₃ at Q ≈ ${switch2.toFixed(2)}` },
    { label: "Minimum efficient scale", value: `MES = (${mesQ}, Rs ${mesC}) — smallest output at which LRATC is minimised` },
  ],
  caption: `The LRATC envelope of three plant sizes (ATC₁ min Rs 40, ATC₂ min Rs ${mesC}, ATC₃ min Rs 32): LRATC falls with scale (economies: technical, managerial, marketing, financial) until the minimum efficient scale MES = (${mesQ}, Rs ${mesC}), stays roughly flat (constant returns) and eventually rises (diseconomies: coordination, communication, alienation). For any output the firm picks the cheapest plant, so LRATC can never lie above any short-run ATC.`,
};
