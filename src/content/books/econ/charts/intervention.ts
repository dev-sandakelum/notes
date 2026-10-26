import type { EconChartSpec } from "@/content/types";

/**
 * Government-intervention charts (Lesson 04 / Tutorial 04).
 *
 * All geometry is derived from the equations below — every equilibrium,
 * shortage, surplus, tax wedge and welfare area is computed here and
 * re-verified by the unit tests, so the drawing, the data table and the
 * caption can never disagree.
 */

/* ------------------------------------------------------------------ */
/* Shared teaching market for ceilings/floors/DWL (Lesson 04 numbers)  */
/* ------------------------------------------------------------------ */

export const BASE_MARKET = {
  qd: (p: number) => 100 - 5 * p,
  qs: (p: number) => 5 * p,
  /** Inverse demand: P = 20 − 0.2Q */
  pDemand: (q: number) => 20 - 0.2 * q,
  /** Inverse supply: P = 0.2Q */
  pSupply: (q: number) => 0.2 * q,
} as const;

/** Free equilibrium of the base market: (50, 10). */
export const BASE_EQ = { q: 50, p: 10 };

/* ------------------------------------------------------------------ */
/* 1. Buffer stock — the flagship "everything computed" chart           */
/* ------------------------------------------------------------------ */

/**
 * Short-run harvest supply is perfectly inelastic (the chapter's own
 * key-features box: "supply is perfectly inelastic in the short run"),
 * so the harvest fixes Q and the buffer stock moves it horizontally.
 *
 * Demand:            Q = 320 − 10P   (P = 32 − 0.1Q)
 * Bad harvest:       Q = 70          → E_bad = (70, 25), above TP
 * Good harvest:      Q = 180         → E_good = (180, 14), below TP
 * Target price:      TP = 20         → Q_TP = D⁻¹(20) = 120
 * Release (bad):     70 + 50  = 120  → price falls back to TP
 * Buy-up (good):     180 − 60 = 120  → price rises back to TP
 */
export const BUFFER_STOCK = {
  demandQ: (p: number) => 320 - 10 * p,
  demandP: (q: number) => 32 - 0.1 * q,
  qBad: 70,
  qGood: 180,
  tp: 20,
  release: 50,
  buyUp: 60,
} as const;

const bsQtp = BUFFER_STOCK.demandQ(BUFFER_STOCK.tp); // 120
const bsPbad = BUFFER_STOCK.demandP(BUFFER_STOCK.qBad); // 25
const bsPgood = BUFFER_STOCK.demandP(BUFFER_STOCK.qGood); // 14

export const BUFFER_STOCK_CHART: EconChartSpec = {
  id: "buffer-stock",
  title: "Buffer stock stabilising the price at the target price TP",
  desc: `Demand is Q = 320 − 10P. A bad harvest fixes supply at Q = 70, where the price would rise to ${bsPbad}. The government releases 50 units, moving quantity to ${BUFFER_STOCK.qBad} + ${BUFFER_STOCK.release} = ${bsQtp} where demand meets the target price of Rs ${BUFFER_STOCK.tp}. A good harvest fixes supply at Q = 180, where the price would fall to ${bsPgood}; the government buys up 60 units so consumers buy ${BUFFER_STOCK.qGood} − ${BUFFER_STOCK.buyUp} = ${bsQtp} and the price rises back to Rs ${BUFFER_STOCK.tp}.`,
  x: { label: "Quantity bought & sold (units)", min: 0, max: 340, ticks: [0, 40, 80, 120, 160, 200, 240, 280, 320] },
  y: { label: "Price (Rs per unit)", min: 0, max: 34, ticks: [0, 8, 16, 24, 32] },
  curves: [
    {
      id: "D",
      label: "D",
      kind: "linear",
      linear: { m: -0.1, b: 32 },
      domain: [0, 318],
      color: "primary",
      eq: "Q = 320 − 10P",
      labelAt: 240,
    },
    {
      id: "S-bad",
      label: "S bad",
      kind: "points",
      points: [
        [BUFFER_STOCK.qBad, 4],
        [BUFFER_STOCK.qBad, 31],
      ],
      domain: [BUFFER_STOCK.qBad, BUFFER_STOCK.qBad],
      color: "danger",
      eq: "Q = 70 (short-run harvest, perfectly inelastic)",
    },
    {
      id: "S-good",
      label: "S good",
      kind: "points",
      points: [
        [BUFFER_STOCK.qGood, 4],
        [BUFFER_STOCK.qGood, 31],
      ],
      domain: [BUFFER_STOCK.qGood, BUFFER_STOCK.qGood],
      color: "accent",
      eq: "Q = 180 (short-run harvest, perfectly inelastic)",
    },
    {
      id: "S-buffer",
      label: "S at Q TP",
      kind: "points",
      points: [
        [bsQtp, 4],
        [bsQtp, 31],
      ],
      domain: [bsQtp, bsQtp],
      color: "muted",
      dash: true,
      weight: 0.8,
      eq: "Q = 120 (after releasing 50 or buying up 60)",
    },
  ],
  refLines: [
    {
      axis: "y",
      at: BUFFER_STOCK.tp,
      label: `TP = ${BUFFER_STOCK.tp}`,
      color: "success",
      dash: true,
      extendTo: 290,
    },
  ],
  points: [
    {
      x: BUFFER_STOCK.qBad,
      y: bsPbad,
      label: "E bad",
      valueLabel: `(${BUFFER_STOCK.qBad}, ${bsPbad})`,
      guides: "both",
      xAxisLabel: "Q bad",
      yAxisLabel: "P bad",
      color: "danger",
      hideValueInLabel: true,
    },
    {
      x: bsQtp,
      y: BUFFER_STOCK.tp,
      label: "T",
      valueLabel: `(${bsQtp}, ${BUFFER_STOCK.tp})`,
      guides: "x",
      xAxisLabel: "Q TP",
      color: "success",
    },
    {
      x: BUFFER_STOCK.qGood,
      y: bsPgood,
      label: "E good",
      valueLabel: `(${BUFFER_STOCK.qGood}, ${bsPgood})`,
      guides: "both",
      xAxisLabel: "Q good",
      yAxisLabel: "P good",
      color: "accent",
      dx: 10,
      dy: -12,
    },
  ],
  arrows: [
    {
      from: [BUFFER_STOCK.qBad, 2.4],
      to: [bsQtp, 2.4],
      label: `release ${BUFFER_STOCK.release}`,
      double: true,
      color: "danger",
    },
    {
      from: [BUFFER_STOCK.qGood, 2.4],
      to: [bsQtp, 2.4],
      label: `buy up ${BUFFER_STOCK.buyUp}`,
      double: true,
      color: "accent",
    },
  ],
  tableRows: [
    { label: "Demand", value: "Q = 320 − 10P (P = 32 − 0.1Q)" },
    { label: "Bad-harvest supply (short run)", value: "Q = 70 (perfectly inelastic)" },
    { label: "Good-harvest supply (short run)", value: "Q = 180 (perfectly inelastic)" },
    { label: "Target price", value: `TP = Rs ${BUFFER_STOCK.tp} → quantity on demand = ${bsQtp}` },
    { label: "Bad harvest, no action", value: `E bad = (${BUFFER_STOCK.qBad}, Rs ${bsPbad}) — price above TP` },
    { label: "Release from store", value: `${BUFFER_STOCK.qBad} + ${BUFFER_STOCK.release} = ${bsQtp} → price back to TP = Rs ${BUFFER_STOCK.tp}` },
    { label: "Good harvest, no action", value: `E good = (${BUFFER_STOCK.qGood}, Rs ${bsPgood}) — price below TP` },
    { label: "Buy up into store", value: `${BUFFER_STOCK.qGood} − ${BUFFER_STOCK.buyUp} = ${bsQtp} → price back to TP = Rs ${BUFFER_STOCK.tp}` },
  ],
  caption: `Buffer stock in action (short-run harvest supply is perfectly inelastic). Demand is Q = 320 − 10P. After a bad harvest the market sits at E bad = (${BUFFER_STOCK.qBad}, Rs ${bsPbad}), above the target price; the government releases ${BUFFER_STOCK.release} units, so quantity moves to Q TP = ${BUFFER_STOCK.qBad} + ${BUFFER_STOCK.release} = ${bsQtp}, where demand meets TP = Rs ${BUFFER_STOCK.tp}. After a good harvest the market sits at E good = (${BUFFER_STOCK.qGood}, Rs ${bsPgood}), below target; the government buys up ${BUFFER_STOCK.buyUp} units, so consumers buy Q TP = ${BUFFER_STOCK.qGood} − ${BUFFER_STOCK.buyUp} = ${bsQtp} and the price rises back to Rs ${BUFFER_STOCK.tp}. Either way the market clears at (${bsQtp}, Rs ${BUFFER_STOCK.tp}).`,
  size: { w: 720, h: 480 },
};

/* ------------------------------------------------------------------ */
/* 2. Price ceiling (maximum price) — Lesson 04 Q1 numbers             */
/* ------------------------------------------------------------------ */

const cPmax = 8;
const cQs = BASE_MARKET.qs(cPmax); // 40
const cQd = BASE_MARKET.qd(cPmax); // 60
const cShortage = cQd - cQs; // 20
const cBlackMarket = BASE_MARKET.pDemand(cQs); // 12

export const PRICE_CEILING_CHART: EconChartSpec = {
  id: "price-ceiling",
  title: "A maximum price creates a shortage and a possible black market",
  desc: `Demand Qd = 100 − 5P and supply Qs = 5P cross at E = (50, Rs 10). At the maximum price Rs 8, quantity supplied falls to 40 and quantity demanded rises to 60, a shortage of 20 units. If the 40 available units are resold, the black-market price is Rs 12, the price at which quantity demanded equals 40.`,
  x: { label: "Quantity (units)", min: 0, max: 110, ticks: [0, 20, 40, 60, 80, 100] },
  y: { label: "Price (Rs)", min: 0, max: 22, ticks: [0, 5, 10, 15, 20] },
  curves: [
    { id: "D", label: "D", kind: "linear", linear: { m: -0.2, b: 20 }, domain: [0, 100], color: "primary", eq: "Qd = 100 − 5P", labelAt: 88 },
    { id: "S", label: "S", kind: "linear", linear: { m: 0.2, b: 0 }, domain: [0, 105], color: "accent", eq: "Qs = 5P", labelAt: 88 },
  ],
  refLines: [
    { axis: "y", at: cPmax, label: `Max price = ${cPmax}`, color: "danger", dash: false },
  ],
  points: [
    { x: BASE_EQ.q, y: BASE_EQ.p, label: "E", valueLabel: `(${BASE_EQ.q}, ${BASE_EQ.p})`, guides: "both", xAxisLabel: "Q0", yAxisLabel: "P0", color: "success" },
    { x: cQs, y: cPmax, label: "Qs", valueLabel: `(${cQs}, ${cPmax})`, guides: "x", xAxisLabel: "Qs", color: "danger", dx: -12, dy: -8 },
    { x: cQd, y: cPmax, label: "Qd", valueLabel: `(${cQd}, ${cPmax})`, guides: "x", xAxisLabel: "Qd", color: "danger", dx: 12, dy: 14 },
    { x: cQs, y: cBlackMarket, label: "Black market", valueLabel: `(${cQs}, ${cBlackMarket})`, guides: "y", yAxisLabel: "P bm", color: "warn", dx: 14, dy: -26 },
  ],
  arrows: [
    { from: [cQs, cPmax], to: [cQd, cPmax], label: "", double: true, color: "danger" },
  ],
  labels: [
    { text: `shortage = ${cShortage} units`, x: 30, y: 9.4, anchor: "middle", color: "danger", size: "tag" },
  ],
  tableRows: [
    { label: "Demand", value: "Qd = 100 − 5P" },
    { label: "Supply", value: "Qs = 5P" },
    { label: "Free equilibrium", value: `E = (Q0 = ${BASE_EQ.q}, P0 = Rs ${BASE_EQ.p})` },
    { label: "Maximum price (binding, < 10)", value: `Rs ${cPmax}` },
    { label: "At Rs 8", value: `Qd = ${cQd}, Qs = ${cQs} → shortage = ${cShortage} units (only ${cQs} trade)` },
    { label: "Black-market price", value: `P where Qd = ${cQs}: 100 − 5P = ${cQs} → Rs ${cBlackMarket}` },
  ],
  caption: `A maximum price of Rs ${cPmax} in the market Qd = 100 − 5P, Qs = 5P (equilibrium E = (${BASE_EQ.q}, Rs ${BASE_EQ.p})): supply contracts to Qs = ${cQs} while demand expands to Qd = ${cQd}, creating a shortage of ${cShortage} units — rationing, queues, and a possible black market at Rs ${cBlackMarket} (the price at which buyers would take all ${cQs} units).`,
};

/* ------------------------------------------------------------------ */
/* 3. Price floor (minimum price) — Lesson 04 Q2 numbers               */
/* ------------------------------------------------------------------ */

const fMin = 12;
const fQd = BASE_MARKET.qd(fMin); // 40
const fQs = BASE_MARKET.qs(fMin); // 60
const fSurplus = fQs - fQd; // 20

export const PRICE_FLOOR_CHART: EconChartSpec = {
  id: "price-floor",
  title: "A minimum price creates a surplus",
  desc: `In the same market (Qd = 100 − 5P, Qs = 5P, equilibrium (50, Rs 10)), a minimum price of Rs 12 raises quantity supplied to 60 and cuts quantity demanded to 40, leaving a surplus of 20 units.`,
  x: { label: "Quantity (units)", min: 0, max: 110, ticks: [0, 20, 40, 60, 80, 100] },
  y: { label: "Price (Rs)", min: 0, max: 22, ticks: [0, 5, 10, 15, 20] },
  curves: [
    { id: "D", label: "D", kind: "linear", linear: { m: -0.2, b: 20 }, domain: [0, 100], color: "primary", eq: "Qd = 100 − 5P", labelAt: 88 },
    { id: "S", label: "S", kind: "linear", linear: { m: 0.2, b: 0 }, domain: [0, 105], color: "accent", eq: "Qs = 5P", labelAt: 88 },
  ],
  refLines: [
    { axis: "y", at: fMin, label: `Min price = ${fMin}`, color: "danger", dash: false },
  ],
  points: [
    { x: BASE_EQ.q, y: BASE_EQ.p, label: "E", valueLabel: `(${BASE_EQ.q}, ${BASE_EQ.p})`, guides: "both", xAxisLabel: "Q0", yAxisLabel: "P0", color: "success", hideValueInLabel: true },
    { x: fQd, y: fMin, label: "Qd", valueLabel: `(${fQd}, ${fMin})`, guides: "x", xAxisLabel: "Qd", color: "primary", dx: -12, dy: 12 },
    { x: fQs, y: fMin, label: "Qs", valueLabel: `(${fQs}, ${fMin})`, guides: "x", xAxisLabel: "Qs", color: "accent", dx: 40, dy: 14 },
  ],
  arrows: [
    { from: [fQd, fMin], to: [fQs, fMin], label: "", double: true, color: "danger" },
  ],
  labels: [
    { text: `surplus = ${fSurplus}`, x: 50, y: 15, anchor: "middle", color: "danger", size: "tag" },
  ],
  tableRows: [
    { label: "Demand", value: "Qd = 100 − 5P" },
    { label: "Supply", value: "Qs = 5P" },
    { label: "Free equilibrium", value: `E = (Q0 = ${BASE_EQ.q}, P0 = Rs ${BASE_EQ.p})` },
    { label: "Minimum price (binding, > 10)", value: `Rs ${fMin}` },
    { label: "At Rs 12", value: `Qd = ${fQd}, Qs = ${fQs} → surplus = ${fSurplus} units (only ${fQd} bought by consumers)` },
  ],
  caption: `A minimum price of Rs ${fMin} in the same market: quantity demanded falls to Qd = ${fQd} while quantity supplied rises to Qs = ${fQs}, leaving a surplus of ${fSurplus} units that the government must buy up (buffer stock) or production must be restricted.`,
};

/* ------------------------------------------------------------------ */
/* 4. Consumer & producer surplus — Tutorial 04-I Q1 (corrected)       */
/* ------------------------------------------------------------------ */

/**
 * Vegetable market: Qd = 720 − 4P, Qs = −120 + 2P.
 * Equilibrium: 840 = 6P → P0 = 140, Q0 = 160.
 * Intercepts: demand 180, supply 60.
 * CS = ½·160·(180−140) = 3,200  ·  PS = ½·160·(140−60) = 6,400
 * (The notes previously printed 32,000 / 64,000 / 96,000 — a 10× slip.)
 */
export const CSPS = {
  qd: (p: number) => 720 - 4 * p,
  qs: (p: number) => -120 + 2 * p,
} as const;

const vP0 = 140;
const vQ0 = CSPS.qd(vP0); // 160
const vPdInt = 180;
const vPsInt = 60;
const vCS = 0.5 * vQ0 * (vPdInt - vP0); // 3,200
const vPS = 0.5 * vQ0 * (vP0 - vPsInt); // 6,400
const vTS = vCS + vPS; // 9,600

export const CONSUMER_PRODUCER_SURPLUS_CHART: EconChartSpec = {
  id: "consumer-producer-surplus",
  title: "Consumer surplus and producer surplus at equilibrium",
  desc: `Vegetable market Qd = 720 − 4P, Qs = −120 + 2P: equilibrium at (160, Rs 140). Consumer surplus is the triangle under the demand curve above Rs 140, worth Rs 3,200; producer surplus is the triangle above the supply curve below Rs 140, worth Rs 6,400. Total surplus is Rs 9,600.`,
  x: { label: "Quantity (kg per week)", min: 0, max: 760, ticks: [0, 80, 160, 240, 320, 400, 480, 560, 640, 720] },
  y: { label: "Price (Rs)", min: 0, max: 200, ticks: [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200] },
  curves: [
    { id: "D", label: "D", kind: "linear", linear: { m: -0.25, b: vPdInt }, domain: [0, 720], color: "primary", eq: "Qd = 720 − 4P", labelAt: 560 },
    { id: "S", label: "S", kind: "linear", linear: { m: 0.5, b: vPsInt }, domain: [0, 270], color: "accent", eq: "Qs = −120 + 2P", labelAt: 230 },
  ],
  regions: [
    {
      points: [
        [0, vPdInt],
        [vQ0, vP0],
        [0, vP0],
      ],
      label: "CS",
      value: vCS,
      valueLabel: "Rs 3,200",
      color: "primary",
      opacity: 0.18,
    },
    {
      points: [
        [0, vPsInt],
        [vQ0, vP0],
        [0, vP0],
      ],
      label: "PS",
      value: vPS,
      valueLabel: "Rs 6,400",
      color: "accent",
      opacity: 0.2,
    },
  ],
  points: [
    { x: vQ0, y: vP0, label: "E", valueLabel: `(${vQ0}, ${vP0})`, guides: "both", xAxisLabel: "Q0", yAxisLabel: "P0", color: "success" },
  ],
  tableRows: [
    { label: "Demand", value: "Qd = 720 − 4P (price intercept Rs 180)" },
    { label: "Supply", value: "Qs = −120 + 2P (price intercept Rs 60)" },
    { label: "Equilibrium", value: `720 − 4P = −120 + 2P → P0 = Rs ${vP0}, Q0 = ${vQ0}` },
    { label: "Consumer surplus", value: `CS = ½ × ${vQ0} × (${vPdInt} − ${vP0}) = Rs ${vCS.toLocaleString("en-US")}` },
    { label: "Producer surplus", value: `PS = ½ × ${vQ0} × (${vP0} − ${vPsInt}) = Rs ${vPS.toLocaleString("en-US")}` },
    { label: "Total surplus", value: `CS + PS = Rs ${vTS.toLocaleString("en-US")} (maximised at equilibrium)` },
  ],
  caption: `Consumer and producer surplus at equilibrium in the vegetable market (Qd = 720 − 4P, Qs = −120 + 2P): E = (Q0 = ${vQ0}, P0 = Rs ${vP0}). CS = ½ × ${vQ0} × (${vPdInt} − ${vP0}) = Rs ${vCS.toLocaleString("en-US")} and PS = ½ × ${vQ0} × (${vP0} − ${vPsInt}) = Rs ${vPS.toLocaleString("en-US")}, so total surplus is Rs ${vTS.toLocaleString("en-US")} — the competitive equilibrium maximises it.`,
};

/* ------------------------------------------------------------------ */
/* 5. Deadweight loss of a maximum price                               */
/* ------------------------------------------------------------------ */

/**
 * Same teaching market (Qd = 100 − 5P, Qs = 5P, E = (50, 10)).
 * Max price Rs 6: only Q1 = Qs(6) = 30 units trade.
 *   Buyers' max for the 30th unit: Pd(30) = 14.
 *   A = transfer to buyers  = 30 × (10 − 6) = 120
 *   B = lost consumer surplus = ½ × 20 × (14 − 10) = 40
 *   C = lost producer surplus = ½ × 20 × (10 − 6) = 40
 *   DWL = B + C = ½ × (50 − 30) × (14 − 6) = 80
 */
const wPmax = 6;
const wQ1 = BASE_MARKET.qs(wPmax); // 30
const wQ0 = BASE_EQ.q; // 50
const wP0 = BASE_EQ.p; // 10
const wPd = BASE_MARKET.pDemand(wQ1); // 14
const wA = wQ1 * (wP0 - wPmax); // 120
const wB = 0.5 * (wQ0 - wQ1) * (wPd - wP0); // 40
const wC = 0.5 * (wQ0 - wQ1) * (wP0 - wPmax); // 40
const wDWL = wB + wC; // 80

export const DWL_MAX_PRICE_CHART: EconChartSpec = {
  id: "dwl-max-price",
  title: "Deadweight loss of a maximum price",
  desc: `With a Rs 6 ceiling in the market Qd = 100 − 5P, Qs = 5P, only 30 units trade. Buyers who still buy gain area A = Rs 120 (they pay 6 instead of 10), but triangle B = Rs 40 of consumer surplus and triangle C = Rs 40 of producer surplus vanish: deadweight loss B + C = Rs 80.`,
  x: { label: "Quantity (units)", min: 0, max: 110, ticks: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100] },
  y: { label: "Price (Rs)", min: 0, max: 22, ticks: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20] },
  curves: [
    { id: "D", label: "D", kind: "linear", linear: { m: -0.2, b: 20 }, domain: [0, 100], color: "primary", eq: "Qd = 100 − 5P", labelAt: 88 },
    { id: "S", label: "S", kind: "linear", linear: { m: 0.2, b: 0 }, domain: [0, 105], color: "accent", eq: "Qs = 5P", labelAt: 88 },
  ],
  refLines: [
    { axis: "y", at: wPmax, label: `Max price = ${wPmax}`, color: "danger", dash: false },
  ],
  regions: [
    {
      points: [
        [0, wP0],
        [wQ1, wP0],
        [wQ1, wPmax],
        [0, wPmax],
      ],
      label: "A (gain to buyers)",
      value: wA,
      valueLabel: "Rs 120",
      color: "success",
      opacity: 0.12,
    },
    {
      points: [
        [wQ1, wPd],
        [wQ0, wP0],
        [wQ1, wP0],
      ],
      label: "B",
      value: wB,
      valueLabel: "40",
      color: "danger",
      opacity: 0.22,
    },
    {
      points: [
        [wQ1, wP0],
        [wQ0, wP0],
        [wQ1, wPmax],
      ],
      label: "C",
      value: wC,
      valueLabel: "40",
      color: "danger",
      opacity: 0.14,
    },
  ],
  points: [
    { x: wQ0, y: wP0, label: "E", valueLabel: `(${wQ0}, ${wP0})`, guides: "x", xAxisLabel: "Q0", color: "success", dx: 10, dy: -14 },
    { x: wQ1, y: wPmax, label: "Q1", valueLabel: `(${wQ1}, ${wPmax})`, guides: "both", xAxisLabel: "Q1", yAxisLabel: "P max", color: "danger", dx: -14, dy: 14 },
    { x: wQ1, y: wPd, label: "Pd", valueLabel: `(${wQ1}, ${wPd})`, guides: "y", yAxisLabel: "P d", color: "warn", hideValueInLabel: true, dx: 9, dy: -9 },
  ],
  tableRows: [
    { label: "Market", value: "Qd = 100 − 5P, Qs = 5P → E = (50, Rs 10)" },
    { label: "Maximum price", value: `Rs ${wPmax} → only Qs = ${wQ1} units trade` },
    { label: "Buyers' valuation of the last unit", value: `Pd(${wQ1}) = 20 − 0.2 × ${wQ1} = Rs ${wPd}` },
    { label: "A — transfer to buyers", value: `${wQ1} × (${wP0} − ${wPmax}) = Rs ${wA}` },
    { label: "B — lost consumer surplus", value: `½ × (${wQ0} − ${wQ1}) × (${wPd} − ${wP0}) = Rs ${wB}` },
    { label: "C — lost producer surplus", value: `½ × (${wQ0} − ${wQ1}) × (${wP0} − ${wPmax}) = Rs ${wC}` },
    { label: "Deadweight loss", value: `DWL = B + C = ½ × (${wQ0} − ${wQ1}) × (${wPd} − ${wPmax}) = Rs ${wDWL}` },
  ],
  caption: `Deadweight loss of the Rs ${wPmax} ceiling: only Q1 = ${wQ1} units trade. Buyers who still buy gain area A = ${wQ1} × (${wP0} − ${wPmax}) = Rs ${wA}, but society loses triangles B = Rs ${wB} and C = Rs ${wC}, so DWL = ½ × (${wQ0} − ${wQ1}) × (${wPd} − ${wPmax}) = Rs ${wDWL}. Consumers who cannot buy lose B; producers lose A + C = Rs ${wA + wC}.`,
};

/* ------------------------------------------------------------------ */
/* 6. Per-unit tax — Lesson 04 Q3 / quiz numbers                        */
/* ------------------------------------------------------------------ */

/**
 * Qd = 200 − 10P, Qs = −100 + 20P, tax t = 3.
 * E0: 300 = 30P → P0 = 10, Q0 = 100.
 * New supply: Qs' = −100 + 20(P − 3) = −160 + 20P.
 * New equilibrium: 360 = 30P → Pc = 12, Qt = 80; producers keep Ps = 9.
 * Revenue = 3 × 80 = 240 · DWL = ½ × 20 × 3 = 30.
 * CS 500 → 320 · PS 250 → 160 (loss 270 = 240 + 30 ✓).
 */
export const TAX = {
  qd: (p: number) => 200 - 10 * p,
  qs: (p: number) => -100 + 20 * p,
  qsTax: (p: number) => -160 + 20 * p,
  t: 3,
} as const;

const tP0 = 10;
const tQ0 = TAX.qd(tP0); // 100
const tPc = 12;
const tQt = TAX.qd(tPc); // 80
const tPs = tPc - TAX.t; // 9
const tRevenue = TAX.t * tQt; // 240
const tDWL = 0.5 * (tQ0 - tQt) * TAX.t; // 30
const tCS0 = 0.5 * tQ0 * (20 - tP0); // 500
const tCS1 = 0.5 * tQt * (20 - tPc); // 320
const tPS0 = 0.5 * tQ0 * (tP0 - 5); // 250
const tPS1 = 0.5 * tQt * (tPs - 5); // 160
/** Vertical wedge between S+tax and S at Q = 150 (both computed). */
const tWedgeTop = 8 + 0.05 * 150; // 15.5
const tWedgeBottom = 5 + 0.05 * 150; // 12.5

export const PER_UNIT_TAX_CHART: EconChartSpec = {
  id: "per-unit-tax",
  title: "Welfare effects of a per-unit tax on producers",
  desc: `Market Qd = 200 − 10P, Qs = −100 + 20P starts at E0 = (100, Rs 10). A Rs 3 per-unit tax shifts supply to Qs = −160 + 20P; the new equilibrium is (80, Rs 12), and producers keep Rs 9. Consumers pay Rs 2 more, producers receive Rs 1 less, government raises 3 × 80 = Rs 240 and the deadweight loss is ½ × 20 × 3 = Rs 30.`,
  x: { label: "Quantity (units)", min: 0, max: 210, ticks: [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200] },
  y: { label: "Price (Rs)", min: 0, max: 22, ticks: [0, 5, 10, 15, 20] },
  curves: [
    { id: "D", label: "D", kind: "linear", linear: { m: -0.1, b: 20 }, domain: [0, 200], color: "primary", eq: "Qd = 200 − 10P", labelAt: 170 },
    { id: "S", label: "S", kind: "linear", linear: { m: 0.05, b: 5 }, domain: [0, 210], color: "accent", eq: "Qs = −100 + 20P", labelAt: 170 },
    { id: "Stax", label: "S + tax", kind: "linear", linear: { m: 0.05, b: 8 }, domain: [0, 210], color: "danger", dash: true, eq: "Qs′ = −100 + 20(P − 3) = −160 + 20P", labelAt: 170 },
  ],
  regions: [
    {
      points: [
        [0, tPc],
        [tQt, tPc],
        [tQt, tPs],
        [0, tPs],
      ],
      label: "tax revenue",
      value: tRevenue,
      valueLabel: "Rs 240",
      color: "accent",
      opacity: 0.14,
    },
    {
      points: [
        [tQt, tPc],
        [tQ0, tP0],
        [tQt, tPs],
      ],
      label: "DWL",
      value: tDWL,
      valueLabel: "Rs 30",
      color: "danger",
      opacity: 0.22,
    },
  ],
  points: [
    { x: tQ0, y: tP0, label: "E0", valueLabel: `(${tQ0}, ${tP0})`, guides: "both", xAxisLabel: "Q0", yAxisLabel: "P0", color: "success" },
    { x: tQt, y: tPc, label: "E1", valueLabel: `(${tQt}, ${tPc})`, guides: "y", yAxisLabel: "Pc", color: "danger", hideValueInLabel: true, dx: 2, dy: -18 },
    { x: tQt, y: tPs, label: "Ps", valueLabel: `(${tQt}, ${tPs})`, guides: "y", yAxisLabel: "", color: "accent", dx: 10, dy: 14 },
  ],
  arrows: [
    { from: [150, tWedgeTop], to: [150, tWedgeBottom], label: "", double: true, color: "danger" },
  ],
  labels: [
    { text: `tax = Rs ${TAX.t}`, x: 175, y: 15, anchor: "middle", color: "danger", size: "tag" },
  ],
  tableRows: [
    { label: "Demand", value: "Qd = 200 − 10P" },
    { label: "Supply before tax", value: "Qs = −100 + 20P → E0 = (100, Rs 10)" },
    { label: "Supply after Rs 3 tax", value: "Qs′ = −100 + 20(P − 3) = −160 + 20P" },
    { label: "New equilibrium", value: `200 − 10P = −160 + 20P → Pc = Rs ${tPc}, Q1 = ${tQt}` },
    { label: "Producer price", value: `Ps = ${tPc} − ${TAX.t} = Rs ${tPs}` },
    { label: "Incidence", value: `consumers pay Rs ${tPc - tP0} of the tax, producers Rs ${tP0 - tPs}` },
    { label: "Government revenue", value: `${TAX.t} × ${tQt} = Rs ${tRevenue}` },
    { label: "Deadweight loss", value: `½ × (${tQ0} − ${tQt}) × ${TAX.t} = Rs ${tDWL}` },
    { label: "Surplus check", value: `CS ${tCS0} → ${tCS1}, PS ${tPS0} → ${tPS1}: loss ${tCS0 - tCS1 + tPS0 - tPS1} = revenue ${tRevenue} + DWL ${tDWL}` },
  ],
  caption: `A Rs ${TAX.t} per-unit tax on producers shifts supply up to Qs′ = −160 + 20P. The consumer price rises from Rs ${tP0} to Rs ${tPc} and producers keep only Rs ${tPs}, so consumers bear Rs ${tPc - tP0} and producers Rs ${tP0 - tPs} of every Rs ${TAX.t}. Quantity falls from ${tQ0} to ${tQt}; government revenue = ${TAX.t} × ${tQt} = Rs ${tRevenue} and the deadweight-loss triangle = ½ × (${tQ0} − ${tQt}) × ${TAX.t} = Rs ${tDWL}.`,
};

/* ------------------------------------------------------------------ */
/* 7. Per-unit subsidy — Tutorial 04-II Q2 numbers                      */
/* ------------------------------------------------------------------ */

/**
 * Qd = 400 − 2P, Qs = −240 + 3P, subsidy s = 20.
 * E0: 640 = 5P → P0 = 128, Q0 = 144.
 * New supply: Qs' = −240 + 3(P + 20) = −180 + 3P.
 * New equilibrium: 580 = 5P → Pc = 116, Qt = 168; producers get Ps = 136.
 * Cost = 20 × 168 = 3,360 · DWL = ½ × 24 × 20 = 240.
 * CS 5,184 → 7,056 · PS 3,456 → 4,704 (gain 3,120 = 3,360 − 240 ✓).
 */
export const SUBSIDY = {
  qd: (p: number) => 400 - 2 * p,
  qs: (p: number) => -240 + 3 * p,
  qsSub: (p: number) => -180 + 3 * p,
  s: 20,
} as const;

const sP0 = 128;
const sQ0 = SUBSIDY.qd(sP0); // 144
const sPc = 116;
const sQt = SUBSIDY.qd(sPc); // 168
const sPs = sPc + SUBSIDY.s; // 136
const sCost = SUBSIDY.s * sQt; // 3,360
const sDWL = 0.5 * (sQt - sQ0) * SUBSIDY.s; // 240
const sCS0 = 0.5 * sQ0 * (200 - sP0); // 5,184
const sCS1 = 0.5 * sQt * (200 - sPc); // 7,056
const sPS0 = 0.5 * sQ0 * (sP0 - 80); // 3,456
const sPS1 = 0.5 * sQt * (sPs - 80); // 4,704
/** Vertical wedge between S and S+subsidy at Q = 390 (both computed). */
const sWedgeTop = 80 + 390 / 3; // 210
const sWedgeBottom = 60 + 390 / 3; // 190

export const PER_UNIT_SUBSIDY_CHART: EconChartSpec = {
  id: "per-unit-subsidy",
  title: "Welfare effects of a per-unit subsidy",
  desc: `Milk-powder market Qd = 400 − 2P, Qs = −240 + 3P starts at E0 = (144, Rs 128). A Rs 20 per-unit subsidy shifts supply to Qs = −180 + 3P; consumers pay Rs 116, producers receive Rs 136 and quantity rises to 168. The government pays 20 × 168 = Rs 3,360 while CS + PS rise by only Rs 3,120, leaving a deadweight loss of Rs 240.`,
  x: { label: "Quantity (units)", min: 0, max: 420, ticks: [0, 50, 100, 150, 200, 250, 300, 350, 400] },
  y: { label: "Price (Rs)", min: 0, max: 220, ticks: [0, 40, 80, 120, 160, 200] },
  curves: [
    { id: "D", label: "D", kind: "linear", linear: { m: -0.5, b: 200 }, domain: [0, 400], color: "primary", eq: "Qd = 400 − 2P", labelAt: 330 },
    { id: "S", label: "S", kind: "linear", linear: { m: 1 / 3, b: 80 }, domain: [0, 390], color: "accent", eq: "Qs = −240 + 3P", labelAt: 330 },
    { id: "Ssub", label: "S′", kind: "linear", linear: { m: 1 / 3, b: 60 }, domain: [0, 390], color: "success", dash: true, eq: "S′ = −240 + 3(P + 20) = −180 + 3P (supply + subsidy)", labelAt: 330, labelOffset: 2 },
  ],
  regions: [
    {
      points: [
        [0, sPs],
        [sQt, sPs],
        [sQt, sPc],
        [0, sPc],
      ],
      label: "govt cost",
      value: sCost,
      valueLabel: "Rs 3,360",
      color: "success",
      opacity: 0.12,
    },
    {
      points: [
        [sQ0, sP0],
        [sQt, sPc],
        [sQt, sPs],
      ],
      label: "DWL",
      value: sDWL,
      valueLabel: "240",
      color: "danger",
      opacity: 0.22,
    },
  ],
  points: [
    { x: sQ0, y: sP0, label: "E0", valueLabel: `(${sQ0}, ${sP0})`, guides: "both", xAxisLabel: "Q0", yAxisLabel: "", color: "success", hideValueInLabel: true, dx: 2, dy: -18 },
    { x: sQt, y: sPc, label: "E1", valueLabel: `(${sQt}, ${sPc})`, guides: "y", yAxisLabel: "", color: "primary", dx: 11, dy: 5 },
    { x: sQt, y: sPs, label: "Ps", valueLabel: `(${sQt}, ${sPs})`, guides: "y", yAxisLabel: "", color: "accent", hideValueInLabel: true, dx: 9, dy: -30 },
  ],
  arrows: [
    { from: [390, sWedgeTop], to: [390, sWedgeBottom], label: "", double: true, color: "success" },
  ],
  labels: [
    { text: `subsidy = Rs ${SUBSIDY.s}`, x: 352, y: 214, anchor: "middle", color: "success", size: "tag" },
  ],
  tableRows: [
    { label: "Demand", value: "Qd = 400 − 2P" },
    { label: "Supply before subsidy", value: "Qs = −240 + 3P → E0 = (144, Rs 128)" },
    { label: "Supply after Rs 20 subsidy", value: "Qs′ = −240 + 3(P + 20) = −180 + 3P" },
    { label: "New equilibrium", value: `400 − 2P = −180 + 3P → Pc = Rs ${sPc}, Q1 = ${sQt}` },
    { label: "Producer price", value: `Ps = ${sPc} + ${SUBSIDY.s} = Rs ${sPs}` },
    { label: "Government cost", value: `${SUBSIDY.s} × ${sQt} = Rs ${sCost.toLocaleString("en-US")}` },
    { label: "Surplus gain vs cost", value: `CS + PS rise by Rs ${(sCS1 - sCS0 + sPS1 - sPS0).toLocaleString("en-US")} (CS ${sCS0.toLocaleString("en-US")} → ${sCS1.toLocaleString("en-US")}, PS ${sPS0.toLocaleString("en-US")} → ${sPS1.toLocaleString("en-US")}) against cost Rs ${sCost.toLocaleString("en-US")}` },
    { label: "Deadweight loss", value: `½ × (${sQt} − ${sQ0}) × ${SUBSIDY.s} = Rs ${sDWL}` },
  ],
  caption: `A Rs ${SUBSIDY.s} per-unit subsidy shifts supply right to Qs′ = −180 + 3P. Consumers pay Pc = Rs ${sPc} (down from Rs ${sP0}) and producers receive Ps = Rs ${sPs} (up from Rs ${sP0}); quantity rises from ${sQ0} to ${sQt}. The government pays ${SUBSIDY.s} × ${sQt} = Rs ${sCost.toLocaleString("en-US")} while CS + PS together rise by only Rs ${(sCS1 - sCS0 + sPS1 - sPS0).toLocaleString("en-US")}, leaving a deadweight loss of ½ × (${sQt} − ${sQ0}) × ${SUBSIDY.s} = Rs ${sDWL}.`,
};
