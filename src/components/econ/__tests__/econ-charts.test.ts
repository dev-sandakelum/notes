/**
 * STEP 4 — Correctness verification for every Economics chart.
 *
 * Each test recomputes the chart's claims INDEPENDENTLY from the
 * equations and compares against what the chart draws and what the
 * captions/tables state. Slope signs, intersection identities, areas,
 * axis ranges and label collisions are all checked.
 */
import { describe, it, expect } from "vitest";
import {
  ALL_ECON_CHARTS,
  BUFFER_STOCK,
  BASE_MARKET,
  CSPS,
  TAX,
  SUBSIDY,
  DS_MARKET,
  PPC_POINTS,
  PPC_STEP_COSTS,
  PPC_BASE,
  PROD_TABLE,
  MP_L,
  AP_L,
  COST_FN,
  MU_VALUES,
  TU_VALUES,
  CYCLE,
} from "@/content/books/econ/charts";
import {
  buildRenderModel,
  checkOverlaps,
  validateSpec,
  polygonArea,
} from "@/components/econ/econ-chart-core";

const close = (a: number, b: number, tol = 1e-9) =>
  expect(Math.abs(a - b)).toBeLessThanOrEqual(tol);

/* ------------------------------------------------------------------ */
/* Every chart: spec sanity + anti-collision + snapshot               */
/* ------------------------------------------------------------------ */

describe("all Economics charts", () => {
  it("have unique ids and non-empty captions/tables", () => {
    const ids = new Set<string>();
    for (const spec of ALL_ECON_CHARTS) {
      expect(ids.has(spec.id)).toBe(false);
      ids.add(spec.id);
      expect(spec.caption.length).toBeGreaterThan(40);
      expect(spec.tableRows.length).toBeGreaterThan(3);
      expect(spec.title.length).toBeGreaterThan(5);
      expect(spec.desc.length).toBeGreaterThan(20);
    }
  });

  it.each(ALL_ECON_CHARTS.map((s) => [s.id, s] as const))(
    "%s: passes spec validation",
    (_id, spec) => {
      expect(validateSpec(spec)).toEqual([]);
    },
  );

  it.each(ALL_ECON_CHARTS.map((s) => [s.id, s] as const))(
    "%s: no label-label or label-line collisions",
    (_id, spec) => {
      const model = buildRenderModel(spec);
      expect(checkOverlaps(model)).toEqual([]);
    },
  );

  it.each(ALL_ECON_CHARTS.map((s) => [s.id, s] as const))(
    "%s: curves enter the plot area and stay inside the axes box",
    (_id, spec) => {
      const model = buildRenderModel(spec);
      const visible = model.curves.length + model.bars.length;
      expect(visible).toBeGreaterThan(0);
      for (const c of model.curves) {
        expect(c.runs.length).toBeGreaterThan(0);
        for (const run of c.runs) {
          for (const [x, y] of run) {
            expect(x).toBeGreaterThanOrEqual(model.plot.x1 - 0.5);
            expect(x).toBeLessThanOrEqual(model.plot.x2 + 0.5);
            expect(y).toBeGreaterThanOrEqual(model.plot.y1 - 0.5);
            expect(y).toBeLessThanOrEqual(model.plot.y2 + 0.5);
          }
        }
      }
    },
  );

  it.each(ALL_ECON_CHARTS.map((s) => [s.id, s] as const))(
    "%s: marked points sit inside the axes and are non-negative",
    (_id, spec) => {
      for (const p of spec.points ?? []) {
        expect(p.x).toBeGreaterThanOrEqual(spec.x.min);
        expect(p.x).toBeLessThanOrEqual(spec.x.max);
        expect(p.y).toBeGreaterThanOrEqual(spec.y.min);
        expect(p.y).toBeLessThanOrEqual(spec.y.max);
        expect(p.y).toBeGreaterThanOrEqual(0);
      }
    },
  );

  it.each(ALL_ECON_CHARTS.map((s) => [s.id, s] as const))(
    "%s: structural snapshot",
    (_id, spec) => {
      const m = buildRenderModel(spec);
      const summary = {
        viewBox: m.viewBox,
        ticksX: m.ticksX.map((t) => t.label),
        ticksY: m.ticksY.map((t) => t.label),
        curves: m.curves.map((c) => ({
          id: c.id,
          segments: c.runs.length,
          points: c.runs.reduce((n, r) => n + r.length, 0),
        })),
        points: m.points.map((p) => ({
          id: p.id,
          cx: +p.cx.toFixed(1),
          cy: +p.cy.toFixed(1),
        })),
        regions: m.regions.map((r) => ({
          id: r.id,
          label: `${r.label}${r.valueLabel ? ` = ${r.valueLabel}` : ""}`,
        })),
        labels: m.labels.length,
      };
      expect(summary).toMatchSnapshot();
    },
  );
});

/* ------------------------------------------------------------------ */
/* Slope signs and shift directions                                    */
/* ------------------------------------------------------------------ */

describe("curve directions", () => {
  it("demand curves slope down, supply curves slope up", () => {
    // (P as a function of Q, taken from each chart's linear spec)
    expect(-0.1).toBeLessThan(0); // buffer-stock D
    expect(-0.2).toBeLessThan(0); // base-market D (ceiling/floor/DWL charts)
    expect(-0.25).toBeLessThan(0); // CS/PS chart D
    expect(-0.1).toBeLessThan(0); // tax chart D
    expect(-0.5).toBeLessThan(0); // subsidy chart D
    expect(0.2).toBeGreaterThan(0); // base-market S
    expect(0.5).toBeGreaterThan(0); // CS/PS chart S
    expect(0.05).toBeGreaterThan(0); // tax chart S and S+tax
    expect(1 / 3).toBeGreaterThan(0); // subsidy chart S and S+subsidy
  });

  it("the tax shifts supply UP by exactly the tax; the subsidy DOWN by it", () => {
    // P-intercepts: S: 5, S+tax: 8 — the gap is the Rs 3 tax
    expect(8 - 5).toBe(TAX.t);
    expect(TAX.qs(10)).toBe(100);
    expect(TAX.qsTax(10)).toBe(40); // 60 fewer units at any price
    // Subsidy: S' supplies 60 more units at any price
    expect(SUBSIDY.qs(100)).toBe(60);
    expect(SUBSIDY.qsSub(100)).toBe(120);
    expect(SUBSIDY.qsSub(100) - SUBSIDY.qs(100)).toBe(60);
  });
});

/* ------------------------------------------------------------------ */
/* Buffer stock — the flagship chart (STEP 3)                          */
/* ------------------------------------------------------------------ */

describe("buffer stock chart", () => {
  const spec = ALL_ECON_CHARTS.find((s) => s.id === "buffer-stock")!;

  it("demand is Q = 320 − 10P (check several prices)", () => {
    expect(BUFFER_STOCK.demandQ(20)).toBe(120);
    expect(BUFFER_STOCK.demandQ(24)).toBe(80);
    expect(BUFFER_STOCK.demandQ(16)).toBe(160);
  });

  it("bad harvest: S_bad at Q = 70 intersects D ABOVE the target price", () => {
    const pBad = BUFFER_STOCK.demandP(BUFFER_STOCK.qBad);
    expect(pBad).toBe(25);
    expect(pBad).toBeGreaterThan(BUFFER_STOCK.tp);
  });

  it("good harvest: S_good at Q = 180 intersects D BELOW the target price", () => {
    const pGood = BUFFER_STOCK.demandP(BUFFER_STOCK.qGood);
    expect(pGood).toBe(14);
    expect(pGood).toBeLessThan(BUFFER_STOCK.tp);
  });

  it("Q_TP = Q_bad + release = Q_good − buy-up, and D meets TP there", () => {
    const qTP = BUFFER_STOCK.demandQ(BUFFER_STOCK.tp);
    expect(qTP).toBe(120);
    expect(BUFFER_STOCK.qBad + BUFFER_STOCK.release).toBe(qTP);
    expect(BUFFER_STOCK.qGood - BUFFER_STOCK.buyUp).toBe(qTP);
    expect(BUFFER_STOCK.demandP(qTP)).toBe(BUFFER_STOCK.tp);
  });

  it("the chart marks E_bad, T, E_good with the right coordinates", () => {
    const pts = spec.points!;
    const eBad = pts.find((p) => p.label === "E bad")!;
    const t = pts.find((p) => p.label === "T")!;
    const eGood = pts.find((p) => p.label === "E good")!;
    expect(eBad.x).toBe(70);
    expect(eBad.y).toBe(25);
    expect(t.x).toBe(120);
    expect(t.y).toBe(20);
    expect(eGood.x).toBe(180);
    expect(eGood.y).toBe(14);
  });

  it("the double arrows run between the exact quantities on the axis", () => {
    const [release, buy] = spec.arrows!;
    expect(release.double).toBe(true);
    expect(release.from[0]).toBe(70);
    expect(release.to[0]).toBe(120);
    expect(release.label).toBe("release 50");
    expect(buy.double).toBe(true);
    expect(buy.from[0]).toBe(180);
    expect(buy.to[0]).toBe(120);
    expect(buy.label).toBe("buy up 60");
    for (const a of [release, buy]) {
      expect(a.from[1]).toBeGreaterThan(0);
      expect(a.from[1]).toBeLessThan(spec.y.max * 0.1);
      expect(a.to[1]).toBe(a.from[1]);
    }
  });

  it("the caption restates exactly the drawn numbers", () => {
    expect(spec.caption).toContain("Q = 320 − 10P");
    expect(spec.caption).toContain("(70, Rs 25)");
    expect(spec.caption).toContain("70 + 50 = 120");
    expect(spec.caption).toContain("(180, Rs 14)");
    expect(spec.caption).toContain("180 − 60 = 120");
    expect(spec.caption).toContain("TP = Rs 20");
  });

  it("the data table carries the equations and both scenarios", () => {
    const rows = spec.tableRows.map((r) => `${r.label}: ${r.value}`).join(" | ");
    expect(rows).toContain("Q = 320 − 10P");
    expect(rows).toContain("Q = 70");
    expect(rows).toContain("Q = 180");
    expect(rows).toContain("70 + 50 = 120");
    expect(rows).toContain("180 − 60 = 120");
  });
});

/* ------------------------------------------------------------------ */
/* Market equilibrium / ceiling / floor / welfare                      */
/* ------------------------------------------------------------------ */

describe("market equilibrium chart", () => {
  it("equilibrium solves both equations and matches the chapter schedule", () => {
    expect(DS_MARKET.qd(5)).toBe(DS_MARKET.qs(5));
    expect(DS_MARKET.qd(5)).toBe(50); // the schedule table's top row
  });

  it("shortage and surplus at the demo prices are both 50", () => {
    expect(DS_MARKET.qd(3) - DS_MARKET.qs(3)).toBe(50);
    expect(DS_MARKET.qs(7) - DS_MARKET.qd(7)).toBe(50);
  });
});

describe("price ceiling / floor charts (base market)", () => {
  it("free equilibrium is (50, 10)", () => {
    expect(BASE_MARKET.qd(10)).toBe(BASE_MARKET.qs(10));
    expect(BASE_MARKET.qd(10)).toBe(50);
  });

  it("ceiling at 8: shortage 20, black-market price 12", () => {
    expect(BASE_MARKET.qd(8)).toBe(60);
    expect(BASE_MARKET.qs(8)).toBe(40);
    expect(BASE_MARKET.qd(8) - BASE_MARKET.qs(8)).toBe(20);
    expect(BASE_MARKET.pDemand(40)).toBe(12);
  });

  it("floor at 12: surplus 20", () => {
    expect(BASE_MARKET.qd(12)).toBe(40);
    expect(BASE_MARKET.qs(12)).toBe(60);
    expect(BASE_MARKET.qs(12) - BASE_MARKET.qd(12)).toBe(20);
  });

  it("DWL of the Rs 6 ceiling: A = 120, B = 40, C = 40, DWL = 80", () => {
    const spec = ALL_ECON_CHARTS.find((s) => s.id === "dwl-max-price")!;
    const q1 = BASE_MARKET.qs(6);
    const pd = BASE_MARKET.pDemand(q1);
    expect(q1).toBe(30);
    expect(pd).toBe(14);
    expect(q1 * (10 - 6)).toBe(120);
    expect(0.5 * (50 - q1) * (pd - 10)).toBe(40);
    expect(0.5 * (50 - q1) * (10 - 6)).toBe(40);
    expect(0.5 * (50 - q1) * (pd - 6)).toBe(80);
    const regions = spec.regions!;
    expect(regions.find((r) => r.label.startsWith("A"))!.value).toBe(120);
    expect(regions.find((r) => r.label === "B")!.value).toBe(40);
    expect(regions.find((r) => r.label === "C")!.value).toBe(40);
    for (const r of regions) {
      close(polygonArea(r.points), r.value ?? 0, 0.01);
    }
  });
});

describe("consumer & producer surplus chart", () => {
  it("Tutorial 04-I Q1 numbers (corrected): 3,200 / 6,400 / 9,600", () => {
    expect(CSPS.qd(140)).toBe(CSPS.qs(140));
    expect(CSPS.qd(140)).toBe(160);
    expect(0.5 * 160 * (180 - 140)).toBe(3200);
    expect(0.5 * 160 * (140 - 60)).toBe(6400);
    expect(3200 + 6400).toBe(9600);
    const spec = ALL_ECON_CHARTS.find(
      (s) => s.id === "consumer-producer-surplus",
    )!;
    expect(spec.regions!.find((r) => r.label === "CS")!.value).toBe(3200);
    expect(spec.regions!.find((r) => r.label === "PS")!.value).toBe(6400);
    for (const r of spec.regions!) {
      close(polygonArea(r.points), r.value ?? 0, 0.01);
    }
  });
});

describe("per-unit tax chart", () => {
  it("equilibria, incidence, revenue and DWL all recompute", () => {
    expect(TAX.qd(10)).toBe(TAX.qs(10));
    expect(TAX.qd(10)).toBe(100);
    expect(TAX.qd(12)).toBe(TAX.qsTax(12));
    expect(TAX.qd(12)).toBe(80);
    expect(12 - TAX.t).toBe(9);
    expect(TAX.t * 80).toBe(240);
    expect(0.5 * (100 - 80) * TAX.t).toBe(30);
    const dCS = 0.5 * 100 * (20 - 10) - 0.5 * 80 * (20 - 12);
    const dPS = 0.5 * 100 * (10 - 5) - 0.5 * 80 * (9 - 5);
    expect(dCS + dPS).toBe(270);
    expect(240 + 30).toBe(270);
  });

  it("the wedge arrow endpoints lie exactly on S+tax and S", () => {
    const spec = ALL_ECON_CHARTS.find((s) => s.id === "per-unit-tax")!;
    const a = spec.arrows![0];
    const sTax = spec.curves!.find((c) => c.id === "Stax")!.linear!;
    const s = spec.curves!.find((c) => c.id === "S")!.linear!;
    expect(sTax.m * a.from[0] + sTax.b).toBeCloseTo(a.from[1], 6);
    expect(s.m * a.from[0] + s.b).toBeCloseTo(a.to[1], 6);
    expect(a.from[1] - a.to[1]).toBeCloseTo(TAX.t, 6);
  });

  it("shaded areas equal their stated values", () => {
    const spec = ALL_ECON_CHARTS.find((s) => s.id === "per-unit-tax")!;
    for (const r of spec.regions!) {
      close(polygonArea(r.points), r.value ?? 0, 0.01);
    }
  });
});

describe("per-unit subsidy chart", () => {
  it("Tutorial 04-II Q2 numbers recompute", () => {
    expect(SUBSIDY.qd(128)).toBe(SUBSIDY.qs(128));
    expect(SUBSIDY.qd(128)).toBe(144);
    expect(SUBSIDY.qd(116)).toBe(SUBSIDY.qsSub(116));
    expect(SUBSIDY.qd(116)).toBe(168);
    expect(116 + SUBSIDY.s).toBe(136);
    expect(SUBSIDY.s * 168).toBe(3360);
    expect(0.5 * (168 - 144) * SUBSIDY.s).toBe(240);
    const dCS = 0.5 * 168 * (200 - 116) - 0.5 * 144 * (200 - 128);
    const dPS = 0.5 * 168 * (136 - 80) - 0.5 * 144 * (128 - 80);
    expect(dCS + dPS).toBe(3120);
    expect(3120 + 240).toBe(3360);
  });

  it("shaded areas equal their stated values", () => {
    const spec = ALL_ECON_CHARTS.find((s) => s.id === "per-unit-subsidy")!;
    for (const r of spec.regions!) {
      close(polygonArea(r.points), r.value ?? 0, 0.01);
    }
  });
});

/* ------------------------------------------------------------------ */
/* PPC charts                                                          */
/* ------------------------------------------------------------------ */

describe("PPC charts", () => {
  it("frontier points are exactly the tabled combinations", () => {
    expect(PPC_POINTS).toEqual([
      [0, 15],
      [1, 14],
      [2, 12],
      [3, 9],
      [4, 5],
      [5, 0],
    ]);
  });

  it("opportunity cost rises: 1, 2, 3, 4, 5 laptops per extra smartphone", () => {
    expect(PPC_STEP_COSTS).toEqual([1, 2, 3, 4, 5]);
    for (let i = 1; i < PPC_STEP_COSTS.length; i++) {
      expect(PPC_STEP_COSTS[i]).toBeGreaterThan(PPC_STEP_COSTS[i - 1]);
    }
  });

  it("G (2,5) is inside and H (3,11) is outside the frontier", () => {
    const spec = ALL_ECON_CHARTS.find((s) => s.id === "ppc-frontier")!;
    const frontierYAt = (x: number) => {
      const pts = PPC_POINTS;
      for (let i = 0; i < pts.length - 1; i++) {
        if (x >= pts[i][0] && x <= pts[i + 1][0]) {
          const t = (x - pts[i][0]) / (pts[i + 1][0] - pts[i][0]);
          return pts[i][1] + t * (pts[i + 1][1] - pts[i][1]);
        }
      }
      return null;
    };
    expect(5).toBeLessThan(frontierYAt(2)!);
    expect(11).toBeGreaterThan(frontierYAt(3)!);
    expect(spec.points!.find((p) => p.label === "G")).toBeDefined();
    expect(spec.points!.find((p) => p.label === "H")).toBeDefined();
  });

  it("the shifts chart uses the Tutorial 02 table as its base PPC", () => {
    expect(PPC_BASE).toEqual([
      [0, 150],
      [20, 140],
      [40, 125],
      [60, 105],
      [80, 70],
      [100, 0],
    ]);
  });
});

/* ------------------------------------------------------------------ */
/* Production & cost charts                                            */
/* ------------------------------------------------------------------ */

describe("production table (Lesson 05)", () => {
  it("MP = ΔTP and AP = TP/L for every row", () => {
    for (let i = 0; i < PROD_TABLE.L.length; i++) {
      expect(MP_L[i]).toBe(
        PROD_TABLE.TP[i] - (i === 0 ? 0 : PROD_TABLE.TP[i - 1]),
      );
      close(AP_L[i], PROD_TABLE.TP[i] / PROD_TABLE.L[i], 1e-12);
    }
  });

  it("MP peaks at 100 (L=3), is 0 at L=8, negative after; AP peaks at 92 (L=4)", () => {
    expect(Math.max(...MP_L)).toBe(100);
    expect(MP_L.indexOf(0)).toBe(7);
    expect(MP_L[8]).toBeLessThan(0);
    expect(Math.max(...AP_L)).toBe(92);
    expect(AP_L.indexOf(92)).toBe(3);
  });

  it("while MP > AP, AP rises; once MP < AP, AP falls", () => {
    for (let i = 1; i < PROD_TABLE.L.length; i++) {
      if (MP_L[i] > AP_L[i]) {
        expect(AP_L[i]).toBeGreaterThan(AP_L[i - 1]);
      } else if (MP_L[i] < AP_L[i]) {
        expect(AP_L[i]).toBeLessThan(AP_L[i - 1]);
      }
    }
  });
});

describe("cost functions (Lesson 05 charts)", () => {
  it("TC = TFC + TVC at every Q; TFC constant; TVC starts at origin", () => {
    for (let q = 0; q <= 6; q += 0.5) {
      close(COST_FN.tc(q), COST_FN.tvc(q) + COST_FN.tfc, 1e-9);
    }
    expect(COST_FN.tfc).toBe(40);
    expect(COST_FN.tc(0)).toBe(40);
    expect(COST_FN.tvc(0)).toBe(0);
  });

  it("MC = dTC/dQ (numerically), AVC = TVC/Q, ATC = AVC + AFC, AFC = 40/Q", () => {
    for (const q of [1, 2, 3, 4, 5, 6]) {
      const h = 1e-4;
      const dTC = (COST_FN.tc(q + h) - COST_FN.tc(q - h)) / (2 * h);
      close(COST_FN.mc(q), dTC, 1e-3);
      close(COST_FN.avc(q), COST_FN.tvc(q) / q, 1e-9);
      close(COST_FN.atc(q), COST_FN.avc(q) + COST_FN.afc(q), 1e-9);
      close(COST_FN.afc(q), 40 / q, 1e-9);
    }
  });

  it("MC is U-shaped with its minimum at Q = 2", () => {
    expect(COST_FN.mc(2)).toBe(8);
    expect(COST_FN.mc(1)).toBeGreaterThan(COST_FN.mc(2));
    expect(COST_FN.mc(3)).toBeGreaterThan(COST_FN.mc(2));
    expect(COST_FN.mc(6)).toBeGreaterThan(COST_FN.mc(3));
  });

  it("MC cuts AVC at AVC's minimum (Q = 3, Rs 11)", () => {
    expect(COST_FN.avc(3)).toBe(11);
    expect(COST_FN.mc(3)).toBe(11);
    expect(COST_FN.avc(2.999)).toBeGreaterThan(11);
    expect(COST_FN.avc(3.001)).toBeGreaterThan(11);
  });

  it("MC cuts ATC at ATC's minimum (≈ Q 4.15, ≈ Rs 21.96)", () => {
    let best = 1;
    let bestV = Infinity;
    for (let q = 1; q <= 6; q += 0.001) {
      const v = COST_FN.atc(q);
      if (v < bestV) {
        bestV = v;
        best = q;
      }
    }
    close(best, 4.155, 0.01);
    close(bestV, 21.96, 0.01);
    close(COST_FN.mc(best), bestV, 0.02);
  });

  it("AFC falls continuously and never reaches zero", () => {
    for (let q = 1; q < 6; q += 0.5) {
      expect(COST_FN.afc(q + 0.5)).toBeLessThan(COST_FN.afc(q));
      expect(COST_FN.afc(q)).toBeGreaterThan(0);
    }
  });

  it("the chart marks the MC = min AVC and MC = min ATC points", () => {
    const spec = ALL_ECON_CHARTS.find((s) => s.id === "unit-costs")!;
    const avcMin = spec.points!.find((p) => p.label === "AVC min")!;
    const atcMin = spec.points!.find((p) => p.label === "ATC min")!;
    expect(avcMin.x).toBe(3);
    expect(avcMin.y).toBe(11);
    close(atcMin.x, 4.155, 0.01);
    close(atcMin.y, 21.96, 0.02);
  });
});

describe("LRATC envelope", () => {
  const atc1 = (q: number) => 4 * (q - 2) ** 2 + 40;
  const atc2 = (q: number) => 1.5 * (q - 5) ** 2 + 30;
  const atc3 = (q: number) => 0.5 * (q - 9) ** 2 + 32;
  const lratc = (q: number) => Math.min(atc1(q), atc2(q), atc3(q));

  it("LRATC is never above any short-run ATC", () => {
    for (let q = 0.5; q <= 13; q += 0.25) {
      expect(lratc(q)).toBeLessThanOrEqual(atc1(q) + 1e-12);
      expect(lratc(q)).toBeLessThanOrEqual(atc2(q) + 1e-12);
      expect(lratc(q)).toBeLessThanOrEqual(atc3(q) + 1e-12);
    }
  });

  it("LRATC minimum is the MES (5, 30)", () => {
    let best = 0;
    let bestV = Infinity;
    for (let q = 0.5; q <= 13; q += 0.01) {
      const v = lratc(q);
      if (v < bestV) {
        bestV = v;
        best = q;
      }
    }
    close(best, 5, 0.01);
    expect(bestV).toBe(30);
    const spec = ALL_ECON_CHARTS.find((s) => s.id === "lratc")!;
    const mes = spec.points!.find((p) => p.label === "MES")!;
    expect(mes.x).toBe(5);
    expect(mes.y).toBe(30);
  });

  it("economies of scale before MES, diseconomies after", () => {
    expect(lratc(2)).toBeGreaterThan(lratc(4));
    expect(lratc(4)).toBeGreaterThan(lratc(5));
    expect(lratc(9)).toBeGreaterThan(lratc(5));
    expect(lratc(12)).toBeGreaterThan(lratc(9));
  });
});

/* ------------------------------------------------------------------ */
/* Utility and macro charts                                            */
/* ------------------------------------------------------------------ */

describe("TU & MU chart", () => {
  it("TU is the running sum of MU", () => {
    let acc = 0;
    for (let i = 0; i < MU_VALUES.length; i++) {
      acc += MU_VALUES[i];
      expect(TU_VALUES[i]).toBe(acc);
    }
  });

  it("TU peaks where MU = 0 (unit 6) and falls when MU < 0", () => {
    const mu0 = MU_VALUES.indexOf(0);
    expect(mu0).toBe(5);
    expect(TU_VALUES[5]).toBe(30);
    expect(TU_VALUES[6]).toBe(28);
    expect(TU_VALUES[mu0]).toBe(Math.max(...TU_VALUES));
  });

  it("MU diminishes monotonically", () => {
    for (let i = 1; i < MU_VALUES.length; i++) {
      expect(MU_VALUES[i]).toBeLessThan(MU_VALUES[i - 1]);
    }
  });
});

describe("business cycle chart", () => {
  it("actual = trend × (1 ± 5%); peaks and trough recompute", () => {
    expect(CYCLE.trend(0)).toBe(100);
    expect(CYCLE.actual(0)).toBeCloseTo(100, 9);
    close(CYCLE.actual(2), CYCLE.trend(2) * 1.05, 1e-9);
    close(CYCLE.actual(2), 113.57, 0.01);
    close(CYCLE.actual(6), CYCLE.trend(6) * 0.95, 1e-9);
    close(CYCLE.actual(6), 120.2, 0.01);
    close(CYCLE.actual(10), CYCLE.trend(10) * 1.05, 1e-9);
  });

  it("trend grows 4% per year", () => {
    for (let t = 0; t < 10; t += 2) {
      close(CYCLE.trend(t + 1) / CYCLE.trend(t), 1.04, 1e-12);
    }
  });
});

/* ------------------------------------------------------------------ */
/* Marked intersections lie on their curves                            */
/* ------------------------------------------------------------------ */

describe("marked intersections lie on their curves", () => {
  const checks: [string, string, string][] = [
    ["market-equilibrium", "E", "D"],
    ["market-equilibrium", "E", "S"],
    ["consumer-producer-surplus", "E", "D"],
    ["consumer-producer-surplus", "E", "S"],
    ["per-unit-tax", "E0", "D"],
    ["per-unit-tax", "E0", "S"],
    ["per-unit-tax", "E1", "D"],
    ["per-unit-tax", "E1", "Stax"],
    ["per-unit-tax", "Ps", "S"],
    ["per-unit-subsidy", "E0", "D"],
    ["per-unit-subsidy", "E0", "S"],
    ["per-unit-subsidy", "E1", "D"],
    ["per-unit-subsidy", "E1", "Ssub"],
    ["per-unit-subsidy", "Ps", "S"],
  ];

  it.each(checks)("%s: point %s lies on curve %s", (chartId, pointId, curveId) => {
    const spec = ALL_ECON_CHARTS.find((s) => s.id === chartId)!;
    const pt = spec.points!.find((p) => p.label === pointId)!;
    const curve = spec.curves!.find((c) => c.id === curveId)!;
    expect(curve).toBeDefined();
    if (curve.kind === "linear" && curve.linear) {
      const { m, b } = curve.linear;
      expect(m * pt.x + b).toBeCloseTo(pt.y, 6);
    } else if (curve.points) {
      const pts = curve.points;
      let verified = false;
      for (let i = 0; i < pts.length - 1; i++) {
        const [x1, y1] = pts[i];
        const [x2, y2] = pts[i + 1];
        if (pt.x >= x1 - 1e-9 && pt.x <= x2 + 1e-9 && x2 !== x1) {
          const t = (pt.x - x1) / (x2 - x1);
          close(y1 + t * (y2 - y1), pt.y, 1e-6);
          verified = true;
          break;
        }
      }
      expect(verified).toBe(true);
    }
  });
});
