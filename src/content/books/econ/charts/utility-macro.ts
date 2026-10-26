import type { EconChartSpec } from "@/content/types";

/**
 * Utility charts (Lesson 06) and the business cycle (Lesson 07).
 */

/* ------------------------------------------------------------------ */
/* Total utility & marginal utility — the water/thirst story           */
/* ------------------------------------------------------------------ */

/** MU of successive glasses (utils) — matches the quiz explanation. */
export const MU_VALUES = [10, 8, 6, 4, 2, 0, -2];

/** TU = cumulative MU: 10, 18, 24, 28, 30, 30, 28. */
export const TU_VALUES = MU_VALUES.reduce<number[]>((acc, mu, i) => {
  acc.push((acc[i - 1] ?? 0) + mu);
  return acc;
}, []);

const tuMax = Math.max(...TU_VALUES); // 30
const tuMaxUnit = MU_VALUES.indexOf(0) + 1; // 6 — TU peaks where MU = 0 (TU is flat at 30 across units 5–6)

export const TU_MU_CHART: EconChartSpec = {
  id: "tu-mu",
  title: "Total utility rising to a maximum while marginal utility falls to zero",
  desc: `Marginal utility of glasses 1–7 is 10, 8, 6, 4, 2, 0, −2 utils, so total utility is ${TU_VALUES.join(", ")}. TU reaches its maximum of ${tuMax} utils at glass ${tuMaxUnit}, where MU = 0; the 7th glass has negative MU and TU falls to 28.`,
  x: { label: "Glasses consumed per meal", min: 0, max: 8, ticks: [1, 2, 3, 4, 5, 6, 7] },
  y: { label: "Utils", min: -8, max: 34, ticks: [-5, 0, 10, 20, 30] },
  zeroLine: true,
  curves: [
    {
      id: "MU",
      label: "MU",
      kind: "bars",
      bars: MU_VALUES.map((h, i) => ({ x: i + 1, h })),
      domain: [1, 7],
      color: "accent",
      eq: "MU = 10, 8, 6, 4, 2, 0, −2",
    },
    {
      id: "TU",
      label: "TU",
      kind: "points",
      points: TU_VALUES.map((tu, i) => [i + 1, tu] as [number, number]),
      domain: [1, 7],
      color: "primary",
      smooth: true,
      weight: 1.2,
      eq: "TU = 10, 18, 24, 28, 30, 30, 28 (cumulative MU)",
      labelAt: 3.6,
      labelOffset: 3,
    },
  ],
  points: [
    { x: tuMaxUnit, y: tuMax, label: "TU max", valueLabel: `(${tuMaxUnit}, ${tuMax})`, guides: "both", xAxisLabel: "unit 6", yAxisLabel: "TU max", color: "success", dx: 12, dy: -12 },
    { x: 6, y: 0, label: "MU = 0", valueLabel: "(6, 0)", guides: "none", color: "danger", dx: 10, dy: -12 },
  ],
  labels: [
    { text: "diminishing MU", x: 3.5, y: 14, anchor: "middle", color: "muted" },
    { text: "negative MU (disutility)", x: 7, y: -5.5, anchor: "middle", color: "danger" },
  ],
  tableRows: [
    { label: "MU (glasses 1–7)", value: MU_VALUES.join(", ") },
    { label: "TU (glasses 1–7)", value: TU_VALUES.join(", ") },
    { label: "TU maximum", value: `${tuMax} utils at glass ${tuMaxUnit}, exactly where MU = 0` },
    { label: "Beyond saturation", value: "glass 7 has MU = −2 → TU falls from 30 to 28 (disutility)" },
    { label: "Law of diminishing MU", value: "each extra glass adds less satisfaction — why demand curves slope down" },
  ],
  caption: `The water-thirst story with numbers: MU = ${MU_VALUES.join(", ")} utils, so TU = ${TU_VALUES.join(", ")}. Total utility peaks at ${tuMax} utils with the ${tuMaxUnit}th glass (MU = 0) and falls to 28 when the 7th glass gives −2 utils (disutility). A rational consumer stops at MU = 0 even for a free good.`,
};

/* ------------------------------------------------------------------ */
/* Business cycle around a growth trend                                */
/* ------------------------------------------------------------------ */

/** Trend: 100 × 1.04^t. Cycle: ±5% sine with an 8-year period. */
export const CYCLE = {
  trend: (t: number) => 100 * 1.04 ** t,
  amplitude: 0.05,
  period: 8,
  actual: (t: number) =>
    100 * 1.04 ** t * (1 + 0.05 * Math.sin((2 * Math.PI * t) / 8)),
} as const;

const cycleSample = (f: (t: number) => number, n = 40): [number, number][] => {
  const pts: [number, number][] = [];
  for (let i = 0; i <= n; i++) {
    const t = (10 * i) / n;
    pts.push([t, f(t)]);
  }
  return pts;
};

const peak1T = 2;
const peak1 = CYCLE.actual(peak1T); // ≈ 113.57
const troughT = 6;
const trough = CYCLE.actual(troughT); // ≈ 120.20
const peak2T = 10;
const peak2 = CYCLE.actual(peak2T); // ≈ 155.43
const trendAt = (t: number) => CYCLE.trend(t);

export const BUSINESS_CYCLE_CHART: EconChartSpec = {
  id: "business-cycle",
  title: "The business cycle around the long-run growth trend",
  desc: `Real GDP (index, base year = 100) fluctuates ±5% around a trend growing 4% per year. Peaks occur at Year 2 (index ${peak1.toFixed(1)}) and Year 10 (${peak2.toFixed(1)}), the trough at Year 6 (${trough.toFixed(1)}). Phases: expansion, peak/boom, contraction/recession, trough, recovery.`,
  x: { label: "Time (years)", min: 0, max: 10.6, ticks: [0, 2, 4, 6, 8, 10] },
  y: { label: "Real GDP (index)", min: 94, max: 162, ticks: [100, 120, 140, 160] },
  curves: [
    {
      id: "trend",
      label: "Trend +4%/yr",
      kind: "points",
      points: cycleSample(CYCLE.trend),
      domain: [0, 10],
      color: "muted",
      dash: true,
      eq: "trend(t) = 100 × 1.04^t",
      labelAt: 7.4,
      labelOffset: 2,
    },
    {
      id: "gdp",
      label: "Actual GDP",
      kind: "points",
      points: cycleSample(CYCLE.actual),
      domain: [0, 10],
      color: "primary",
      weight: 1.2,
      eq: "actual(t) = trend × (1 + 0.05·sin(2πt/8))",
      labelAt: 10,
      labelOffset: 2,
    },
  ],
  points: [
    { x: peak1T, y: peak1, label: "Peak", valueLabel: `(Yr ${peak1T}, ${peak1.toFixed(1)})`, guides: "both", xAxisLabel: "Year 2", yAxisLabel: "113.6", color: "success", hideValueInLabel: true, dx: 12, dy: -26 },
    { x: troughT, y: trough, label: "Trough", valueLabel: `(Yr ${troughT}, ${trough.toFixed(1)})`, guides: "both", xAxisLabel: "Year 6", yAxisLabel: "120.2", color: "danger", dx: 12, dy: 14 },
    { x: peak2T, y: peak2, label: "Peak", valueLabel: `(Yr ${peak2T}, ${peak2.toFixed(1)})`, guides: "x", xAxisLabel: "Year 10", color: "success", dx: -40, dy: -12 },
  ],
  labels: [
    { text: "expansion", x: 1.4, y: 97.5, anchor: "middle", color: "success" },
    { text: "contraction (recession)", x: 4, y: 130, anchor: "middle", color: "danger" },
    { text: "recovery", x: 8, y: 122, anchor: "middle", color: "success" },
  ],
  tableRows: [
    { label: "Long-run trend", value: "trend(t) = 100 × 1.04^t (4% growth per year)" },
    { label: "Actual GDP", value: "trend × (1 + 0.05·sin(2πt/8)) — cycle of ±5%, 8-year period" },
    { label: "Peak, Year 2", value: `index ${peak1.toFixed(1)} = ${CYCLE.trend(peak1T).toFixed(1)} × 1.05` },
    { label: "Trough, Year 6", value: `index ${trough.toFixed(1)} = ${CYCLE.trend(troughT).toFixed(1)} × 0.95` },
    { label: "Peak, Year 10", value: `index ${peak2.toFixed(1)} = ${CYCLE.trend(peak2T).toFixed(1)} × 1.05` },
    { label: "Phases", value: "expansion → peak/boom → contraction/recession → trough → recovery" },
  ],
  caption: `The business cycle: real GDP (index, base year = 100) swings ±5% around a trend growing 4% a year. The economy peaks at Year 2 (index ${peak1.toFixed(1)}), contracts into recession to the trough at Year 6 (${trough.toFixed(1)}), then recovers to the next peak at Year 10 (${peak2.toFixed(1)}). Unemployment rises in contractions and falls in expansions.`,
};
