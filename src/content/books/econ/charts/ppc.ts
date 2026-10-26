import type { EconChartSpec } from "@/content/types";

/**
 * Production Possibility Curve charts (Lesson 02 / Tutorial 02).
 * The frontier passes exactly through the tabled combinations.
 */

/* ------------------------------------------------------------------ */
/* 1. PPC with efficient / inefficient / unattainable points           */
/* ------------------------------------------------------------------ */

/**
 * Smartphones (X) vs laptops (Y). Opportunity cost of each extra
 * smartphone rises 1, 2, 3, 4, 5 laptops → concave frontier.
 */
export const PPC_POINTS: [number, number][] = [
  [0, 15],
  [1, 14],
  [2, 12],
  [3, 9],
  [4, 5],
  [5, 0],
];

/** Opportunity cost (laptops per smartphone) between successive points. */
export const PPC_STEP_COSTS = PPC_POINTS.slice(1).map(
  (p, i) => PPC_POINTS[i][1] - p[1],
); // [1, 2, 3, 4, 5]

const ppcPt = (i: number) => PPC_POINTS[i];
const ppcLabel = (i: number, name: string) =>
  `${name} (${ppcPt(i)[0]}, ${ppcPt(i)[1]})`;

export const PPC_FRONTIER_CHART: EconChartSpec = {
  id: "ppc-frontier",
  title: "Production possibility curve: efficient, inefficient and unattainable points",
  desc: `The PPC for smartphones (X) and laptops (Y) passes through A (0, 15), B (1, 14), C (2, 12), D (3, 9), E (4, 5) and F (5, 0). Moving along it, each extra smartphone costs 1, 2, 3, 4 then 5 laptops — increasing opportunity cost. Point G (2, 5) lies inside the curve (inefficient) and H (3, 11) outside (unattainable).`,
  x: { label: "Smartphones (X, millions)", min: 0, max: 5.5, ticks: [0, 1, 2, 3, 4, 5] },
  y: { label: "Laptops (Y, millions)", min: 0, max: 16, ticks: [0, 3, 6, 9, 12, 15] },
  curves: [
    {
      id: "ppc",
      label: "PPC",
      kind: "points",
      points: PPC_POINTS,
      domain: [0, 5],
      color: "primary",
      smooth: true,
      eq: "frontier through (0,15), (1,14), (2,12), (3,9), (4,5), (5,0)",
      labelAt: 1.35,
      labelOffset: 4,
    },
  ],
  points: [
    { x: 0, y: 15, label: "A", valueLabel: "(0, 15)", guides: "none", color: "primary", dx: 12, dy: 2 },
    { x: 1, y: 14, label: "B", valueLabel: "(1, 14)", guides: "none", color: "primary" },
    { x: 2, y: 12, label: "C", valueLabel: "(2, 12)", guides: "none", color: "primary" },
    { x: 3, y: 9, label: "D", valueLabel: "(3, 9)", guides: "none", color: "primary" },
    { x: 4, y: 5, label: "E", valueLabel: "(4, 5)", guides: "none", color: "primary" },
    { x: 5, y: 0, label: "F", valueLabel: "(5, 0)", guides: "none", color: "primary", hideValueInLabel: true, dx: 9, dy: -9 },
    { x: 2, y: 5, label: "G", valueLabel: "(2, 5) inefficient", guides: "none", color: "warn", dx: 10, dy: 4 },
    { x: 3, y: 11, label: "H", valueLabel: "(3, 11) unattainable", guides: "none", color: "danger", dx: 10, dy: -6 },
  ],
  tableRows: [
    { label: "Frontier points A–F", value: "(0,15), (1,14), (2,12), (3,9), (4,5), (5,0)" },
    { label: "Opportunity cost A→B", value: `${PPC_STEP_COSTS[0]} laptop per extra smartphone` },
    { label: "Opportunity cost B→C", value: `${PPC_STEP_COSTS[1]} laptops` },
    { label: "Opportunity cost C→D", value: `${PPC_STEP_COSTS[2]} laptops` },
    { label: "Opportunity cost D→E", value: `${PPC_STEP_COSTS[3]} laptops` },
    { label: "Opportunity cost E→F", value: `${PPC_STEP_COSTS[4]} laptops` },
    { label: "G (2, 5)", value: "inside the PPC — attainable but inefficient (idle resources)" },
    { label: "H (3, 11)", value: "outside the PPC — unattainable with current resources" },
  ],
  caption: `The PPC through A (${ppcPt(0).join(", ")}), B, C, D, E and F (${ppcPt(5).join(", ")}): every extra smartphone costs more and more laptops (${PPC_STEP_COSTS.join(", ")}) — the law of increasing opportunity cost makes the curve concave. Points on the frontier are efficient; G (2, 5) inside is inefficient; H (3, 11) outside is unattainable.`,
  size: { w: 640, h: 500 },
};

/* ------------------------------------------------------------------ */
/* 2. PPC shifts — outward (growth) and inward (decline)               */
/* ------------------------------------------------------------------ */

/** Tutorial 02 Q5 rice–clothes table = the "original" PPC. */
export const PPC_BASE: [number, number][] = [
  [0, 150],
  [20, 140],
  [40, 125],
  [60, 105],
  [80, 70],
  [100, 0],
];

const scalePts = (pts: [number, number][], k: number): [number, number][] =>
  pts.map(([x, y]) => [x * k, y * k]);

/** Growth: +20% on both axes. Decline: −20% on both axes. */
export const PPC_GROWTH = scalePts(PPC_BASE, 1.2);
export const PPC_DECLINE = scalePts(PPC_BASE, 0.8);

const clothesAt = (pts: [number, number][], rice: number) =>
  pts.find(([x]) => x === rice)?.[1];

const gBase = clothesAt(PPC_BASE, 40); // 125
const gGrow = clothesAt(PPC_GROWTH, 48); // 150
const gDecl = clothesAt(PPC_DECLINE, 32); // 100

export const PPC_SHIFTS_CHART: EconChartSpec = {
  id: "ppc-shifts",
  title: "PPC shifting outward (growth) and inward (decline)",
  desc: `Rice–clothes PPC from the Tutorial 02 table. Economic growth shifts the curve outward by 20% on both axes; losing resources shifts it inward by 20%. At 40 tons of rice the original economy can have 125 units of clothes; after growth (48 tons, 150 clothes) it can have more of both.`,
  x: { label: "Rice (tons)", min: 0, max: 130, ticks: [0, 20, 40, 60, 80, 100, 120] },
  y: { label: "Clothes (units)", min: 0, max: 200, ticks: [0, 40, 80, 120, 160, 200] },
  curves: [
    {
      id: "ppc-growth",
      label: "Growth (+20%)",
      kind: "points",
      points: PPC_GROWTH,
      domain: [0, 120],
      color: "success",
      smooth: true,
      eq: "1.2 × original PPC",
      labelAt: { q: 20, side: "above", gap: 26 },
    },
    {
      id: "ppc-base",
      label: "Original PPC",
      kind: "points",
      points: PPC_BASE,
      domain: [0, 100],
      color: "muted",
      dash: true,
      smooth: true,
      eq: "through (0,150), (20,140), (40,125), (60,105), (80,70), (100,0)",
      labelAt: { q: 50, side: "below", gap: 46 },
    },
    {
      id: "ppc-decline",
      label: "Decline (−20%)",
      kind: "points",
      points: PPC_DECLINE,
      domain: [0, 80],
      color: "danger",
      smooth: true,
      eq: "0.8 × original PPC",
      labelAt: { q: 30, side: "below", gap: 40 },
    },
  ],
  tableRows: [
    { label: "Original PPC (Tutorial 02 Q5)", value: "(0,150), (20,140), (40,125), (60,105), (80,70), (100,0)" },
    { label: "Growth (+20% both goods)", value: "(0,180), (24,168), (48,150), (72,126), (96,84), (120,0)" },
    { label: "Decline (−20% both goods)", value: "(0,120), (16,112), (32,100), (48,84), (64,56), (80,0)" },
    { label: "At 20% less rice than the midpoint", value: `original (40, ${gBase}) vs decline (32, ${gDecl})` },
    { label: "Growth comparison", value: `original (40, ${gBase}) vs growth (48, ${gGrow}) — more of both goods` },
  ],
  caption: `Economic growth shifts the PPC outward (+20% on both axes: at 40 tons of rice the economy can have ${gBase} units of clothes, and the growth curve reaches (${PPC_GROWTH[2].join(", ")}) = 20% more of both); losing resources (disaster, emigration) shifts it inward (−20%: only ${gDecl} clothes at 32 tons). Demand changes and unemployment move the economy to a different point on the SAME curve — they do not shift it.`,
  size: { w: 640, h: 500 },
};
