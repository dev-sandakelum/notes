import type { EconChartSpec } from "@/content/types";

/**
 * Demand & supply equilibrium (Lesson 03).
 *
 * The demand curve is the chapter's own schedule table:
 *   P: 5, 4, 3, 2, 1  →  Qd: 50, 60, 70, 80, 90   ⇒ Qd = 100 − 10P
 * Supply chosen so the equilibrium lands exactly on the table's top row:
 *   Qs = −25 + 15P ⇒ E = (Q₀, P₀) = (50, 5)
 * Shortage/surplus demo prices: P = 3 → Qd 70 vs Qs 20 (shortage 50)
 *                                P = 7 → Qs 80 vs Qd 30 (surplus 50)
 */
export const DS_MARKET = {
  qd: (p: number) => 100 - 10 * p,
  qs: (p: number) => -25 + 15 * p,
} as const;

const eqP = 5;
const eqQ = DS_MARKET.qd(eqP); // 50
const lowP = 3;
const lowQd = DS_MARKET.qd(lowP); // 70
const lowQs = DS_MARKET.qs(lowP); // 20
const shortage = lowQd - lowQs; // 50
const highP = 7;
const highQd = DS_MARKET.qd(highP); // 30
const highQs = DS_MARKET.qs(highP); // 80
const surplus = highQs - highQd; // 50

export const MARKET_EQUILIBRIUM_CHART: EconChartSpec = {
  id: "market-equilibrium",
  title: "Demand, supply and market equilibrium",
  desc: `Demand Qd = 100 − 10P crosses supply Qs = −25 + 15P at the equilibrium E = (50, Rs 5). At the low price Rs 3, quantity demanded is 70 against 20 supplied, a shortage of 50 units that pushes the price up; at Rs 7, 80 are supplied against 30 demanded, a surplus of 50 units that pushes the price down.`,
  x: { label: "Quantity (units per week)", min: 0, max: 110, ticks: [0, 20, 40, 60, 80, 100] },
  y: { label: "Price (Rs per unit)", min: 0, max: 22, ticks: [0, 5, 10, 15, 20] },
  curves: [
    { id: "D", label: "D", kind: "linear", linear: { m: -0.1, b: 10 }, domain: [0, 100], color: "primary", eq: "Qd = 100 − 10P (the schedule table above)", labelAt: 80 },
    { id: "S", label: "S", kind: "linear", linear: { m: 1 / 15, b: 25 / 15 }, domain: [5, 105], color: "accent", eq: "Qs = −25 + 15P", labelAt: 80 },
  ],
  refLines: [
    { axis: "y", at: lowP, label: `P = ${lowP}`, color: "danger", dash: true },
    { axis: "y", at: highP, label: `P = ${highP}`, color: "warn", dash: true, labelBelow: true },
  ],
  points: [
    { x: eqQ, y: eqP, label: "E", valueLabel: `(${eqQ}, ${eqP})`, guides: "both", xAxisLabel: "Q0", yAxisLabel: "P0", color: "success" },
  ],
  arrows: [
    { from: [lowQs, lowP], to: [lowQd, lowP], label: "", double: true, color: "danger" },
    { from: [highQs, highP], to: [highQd, highP], label: "", double: true, color: "warn" },
  ],
  labels: [
    { text: `excess demand = ${shortage}`, x: 45, y: 8.2, anchor: "middle", color: "danger", size: "tag" },
    { text: `excess supply = ${surplus}`, x: 75, y: 5.2, anchor: "middle", color: "warn", size: "tag" },
  ],
  tableRows: [
    { label: "Demand (schedule table)", value: "Qd = 100 − 10P → P = 5: Qd = 50; P = 3: Qd = 70; P = 7: Qd = 30" },
    { label: "Supply", value: "Qs = −25 + 15P → P = 5: Qs = 50; P = 3: Qs = 20; P = 7: Qs = 80" },
    { label: "Equilibrium", value: `100 − 10P = −25 + 15P → P0 = Rs ${eqP}, Q0 = ${eqQ}` },
    { label: `At P = ${lowP} (below P0)`, value: `Qd = ${lowQd} > Qs = ${lowQs} → shortage (excess demand) = ${shortage} units → price rises` },
    { label: `At P = ${highP} (above P0)`, value: `Qs = ${highQs} > Qd = ${highQd} → surplus (excess supply) = ${surplus} units → price falls` },
  ],
  caption: `Market equilibrium: demand Qd = 100 − 10P (exactly the schedule table) meets supply Qs = −25 + 15P at E = (Q0 = ${eqQ}, P0 = Rs ${eqP}). At P = ${lowP} quantity demanded (${lowQd}) exceeds quantity supplied (${lowQs}) — a shortage of ${shortage} units pushes the price up; at P = ${highP} quantity supplied (${highQs}) exceeds quantity demanded (${highQd}) — a surplus of ${surplus} units pushes the price down. Only at P0 is there no tendency for price to change.`,
};
