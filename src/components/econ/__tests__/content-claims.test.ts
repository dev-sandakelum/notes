/**
 * STEP 4 — Independent recomputation of the numeric worked examples,
 * quizzes and captions in the Economics notes.
 *
 * Every number the notes state is recomputed here from its own inputs;
 * the assertions document the corrected values that the notes now carry.
 */
import { describe, it, expect } from "vitest";

const close = (a: number, b: number, tol = 1e-9) =>
  expect(Math.abs(a - b)).toBeLessThanOrEqual(tol);

/* ------------------------------------------------------------------ */
/* Chapter 03 — demand & supply                                        */
/* ------------------------------------------------------------------ */

describe("ch03 worked examples", () => {
  it("deriving demand equations (a)–(d)", () => {
    // (a) slope (2−8)/(2−0.5) = −4, through (0.5, 8): a = 10
    expect((2 - 8) / (2 - 0.5)).toBe(-4);
    expect(8 + 4 * 0.5).toBe(10);
    expect(10 - 4 * 2).toBe(2); // check P=2 → Q=2
    // (b) (0−100)/(5−0) = −20 → Qd = 100 − 20P
    expect((0 - 100) / 5).toBe(-20);
    // (c) (0−28)/(280−0) = −0.1 → Qd = 28 − 0.1P
    expect((0 - 28) / 280).toBe(-0.1);
    expect(28 - 0.1 * 140).toBe(14);
    // (d) (0−150)/(50−0) = −3 → Qd = 150 − 3P
    expect((0 - 150) / 50).toBe(-3);
  });

  it("Lesson 03 exercises: schedule equilibrium (7.5, 5) and Ex 2 (280, 2740)", () => {
    expect(20 - 2 * 7.5).toBe(5);
    expect(-10 + 2 * 7.5).toBe(5);
    // Exercise 2
    expect(3300 - 2 * 280).toBe(2740);
    expect(500 + 8 * 280).toBe(2740);
  });

  it("Tutorial Q3 rice market: P = 26, Q = 90", () => {
    expect(350 - 10 * 26).toBe(90);
    expect(-40 + 5 * 26).toBe(90);
  });

  it("Tutorial Q4 market aggregation: P ≈ 9.54, Q ≈ 984.6", () => {
    const qd = (p: number) => 80 * (60 - 5 * p);
    const qs = (p: number) => 40 * (-4 + 3 * p);
    expect(qd(9.5385)).toBeCloseTo(qs(9.5385), -1);
    const P = 4960 / 520;
    close(P, 9.5385, 0.001);
    close(qd(P), 984.6, 0.1);
  });

  it("Tutorial Q5 schedule (with the corrected 400): P ≈ 45.29, shortage 87.5 at Rs 35", () => {
    const qd = (p: number) => 525 - 2.5 * p;
    const qs = (p: number) => 140 + 6 * p;
    // linearity of the corrected table
    expect(qd(10)).toBe(500);
    expect(qd(50)).toBe(400);
    expect(qs(10)).toBe(200);
    expect(qs(50)).toBe(440);
    const P = 385 / 8.5;
    close(P, 45.29, 0.01);
    close(qd(P), 411.76, 0.01);
    close(qs(P), 411.76, 0.01);
    close(qd(35) - qs(35), 87.5, 1e-9);
  });
});

/* ------------------------------------------------------------------ */
/* Chapter 04 — intervention                                           */
/* ------------------------------------------------------------------ */

describe("ch04 worked examples", () => {
  it("Lesson Q1 ceiling and Q2 floor (base market)", () => {
    expect(100 - 5 * 8).toBe(60);
    expect(5 * 8).toBe(40);
    expect(100 - 5 * 12).toBe(40);
    expect(5 * 12).toBe(60);
  });

  it("Lesson Q3 tax: Pc 12, Qt 80, Ps 9, revenue 240, DWL 30, CS/PS check", () => {
    expect(-100 + 20 * 10).toBe(100);
    expect(-160 + 20 * 12).toBe(80);
    expect(200 - 10 * 12).toBe(80);
    expect(3 * 80).toBe(240);
    expect(0.5 * 20 * 3).toBe(30);
    const dCS = 0.5 * 100 * 10 - 0.5 * 80 * 8;
    const dPS = 0.5 * 100 * 5 - 0.5 * 80 * 4;
    expect(dCS).toBe(180);
    expect(dPS).toBe(90);
    expect(dCS + dPS).toBe(270);
  });

  it("Lesson Q4 subsidy: Pc 10, Ps 14, Qt 50, cost 200, DWL 20, welfare check", () => {
    expect(100 - 5 * 12).toBe(40);
    expect(-20 + 5 * (10 + 4)).toBe(50);
    expect(100 - 5 * 10).toBe(50);
    expect(4 * 50).toBe(200);
    expect(0.5 * 10 * 4).toBe(20);
    expect(0.5 * 40 * 8).toBe(160); // CS before
    expect(0.5 * 50 * 10).toBe(250); // CS after
    expect(0.5 * 40 * 8).toBe(160); // PS before
    expect(0.5 * 50 * 10).toBe(250); // PS after
    expect(250 + 250 - (160 + 160)).toBe(180); // gain 180 = cost 200 − DWL 20
  });

  it("Exercises E2–E4", () => {
    // E2 floor 700
    expect(9000 - 10 * 700).toBe(2000);
    expect(-1000 + 10 * 700).toBe(6000);
    expect(6000 - 2000).toBe(4000);
    // E3 tax 2
    expect(150 - 10 * 12).toBe(30);
    expect(-110 + 10 * 13).toBe(20);
    expect(2 * 20).toBe(40);
    expect(0.5 * 10 * 2).toBe(10);
    // E4 subsidy 2.5
    expect(70 - 2 * 18.75).toBe(32.5);
    expect(-5 + 2 * 18.75).toBe(32.5);
    expect(2.5 * 32.5).toBe(81.25);
    expect(0.5 * 2.5 * 2.5).toBe(3.125);
  });

  it("Tutorial 04-I Q1 (corrected): CS 3,200, PS 6,400, total 9,600", () => {
    expect(0.5 * 160 * 40).toBe(3200);
    expect(0.5 * 160 * 80).toBe(6400);
    expect(3200 + 6400).toBe(9600);
    // equilibrium
    expect(720 - 4 * 140).toBe(160);
    expect(-120 + 2 * 140).toBe(160);
  });

  it("Tutorial 04-I Q2 rice: equilibrium, ceiling effects, black market, DWL", () => {
    expect(1320 - 6 * 200).toBe(120);
    expect(-680 + 4 * 200).toBe(120);
    expect(0.5 * 120 * 20).toBe(1200);
    expect(0.5 * 120 * 30).toBe(1800);
    // ceiling 180
    expect(1320 - 6 * 180).toBe(240);
    expect(-680 + 4 * 180).toBe(40);
    expect(240 - 40).toBe(200);
    expect(0.5 * 40 * 40).toBe(800);
    expect(0.5 * 40 * 10).toBe(200);
    // black-market price: 40 = 1320 − 6P → P = 1280/6
    close(1280 / 6, 213.33, 0.01);
    expect(0.5 * 40 * (220 - 1280 / 6)).toBeCloseTo(133.33, 1);
    close(0.5 * 80 * (1280 / 6 - 180), 1333.33, 0.1);
  });

  it("Tutorial 04-I Q3 dairy: floor effects and government purchase", () => {
    expect(180 - 2 * 65).toBe(50);
    expect(-15 + 65).toBe(50);
    expect(0.5 * 50 * 25).toBe(625);
    expect(0.5 * 50 * 50).toBe(1250);
    // floor 72
    expect(180 - 2 * 72).toBe(36);
    expect(-15 + 72).toBe(57);
    expect(57 - 36).toBe(21);
    expect(0.5 * 36 * 18).toBe(324);
    expect(72 * 36 - (15 * 36 + 0.5 * 36 * 36)).toBe(1404);
    // DWL without purchase: ∫36..50 (75 − 1.5q) dq
    const dwl = (75 * 50 - 0.75 * 2500) - (75 * 36 - 0.75 * 1296);
    close(dwl, 147, 1e-9);
    // government buys 21 at 72
    expect(21 * 72).toBe(1512);
    expect(0.5 * 57 * 57).toBe(1624.5);
    // DWL with purchase: ∫36..57 (1.5q − 75) dq
    const dwl2 = Math.abs((0.75 * 57 * 57 - 75 * 57) - (0.75 * 1296 - 75 * 36));
    close(dwl2, 110.25, 1e-9);
  });

  it("Tutorial 04-II Q1 sugar tax (all six parts)", () => {
    expect(260 - 3 * 80).toBe(20);
    expect(-140 + 2 * 80).toBe(20);
    close(0.5 * 20 * (260 / 3 - 80), 66.67, 0.01);
    expect(0.5 * 20 * 10).toBe(100);
    // after tax
    expect(-150 + 2 * 82).toBe(14);
    expect(260 - 3 * 82).toBe(14);
    close(0.5 * 14 * (260 / 3 - 82), 32.67, 0.01);
    expect(0.5 * 14 * 7).toBe(49);
    expect(5 * 14).toBe(70);
    expect(0.5 * 6 * 5).toBe(15);
  });

  it("Tutorial 04-II Q2 milk subsidy (all five parts)", () => {
    expect(400 - 2 * 128).toBe(144);
    expect(-240 + 3 * 128).toBe(144);
    expect(0.5 * 144 * 72).toBe(5184);
    expect(0.5 * 144 * 48).toBe(3456);
    expect(-180 + 3 * 116).toBe(168);
    expect(400 - 2 * 116).toBe(168);
    expect(0.5 * 168 * 84).toBe(7056);
    expect(0.5 * 168 * 56).toBe(4704);
    expect(20 * 168).toBe(3360);
    expect(0.5 * 24 * 20).toBe(240);
    expect(7056 + 4704 - 5184 - 3456).toBe(3120);
  });
});

/* ------------------------------------------------------------------ */
/* Chapter 02 & 08 — PPC and trade                                     */
/* ------------------------------------------------------------------ */

describe("ch02 PPC examples", () => {
  it("opportunity cost table: A→B 2, B→D 7, D→B 4 bikes", () => {
    expect(14 - 12).toBe(2);
    expect(12 - 5).toBe(7);
    expect(6 - 2).toBe(4);
  });

  it("tutorial Q5 OCs: 10, 15, 20, 35, 70 and the inefficient point", () => {
    expect(150 - 140).toBe(10);
    expect(140 - 125).toBe(15);
    expect(125 - 105).toBe(20);
    expect(105 - 70).toBe(35);
    expect(70 - 0).toBe(70);
    // (40,60) inside: at 40 rice the frontier allows 125 clothes
    expect(60).toBeLessThan(125);
    // (60,80) still inside: at 60 rice the frontier allows 105
    expect(80).toBeLessThan(105);
  });
});

describe("ch08 comparative advantage", () => {
  it("opportunity costs and specialisation (SL → clothing, Thailand → rice)", () => {
    expect(100 / 50).toBe(2); // SL OC of 1 rice = 2 clothing
    expect(50 / 100).toBe(0.5); // SL OC of 1 clothing = 0.5 rice
    expect(120 / 80).toBe(1.5); // Thailand OC of 1 rice
    close(80 / 120, 0.67, 0.01);
    // Thailand has absolute advantage in both
    expect(80).toBeGreaterThan(50);
    expect(120).toBeGreaterThan(100);
    // trade price band: 1.5 < price < 2 clothing per rice
    expect(1.5).toBeLessThan(2);
  });
});

/* ------------------------------------------------------------------ */
/* Chapter 05 — production & cost tables                               */
/* ------------------------------------------------------------------ */

describe("ch05 worked examples", () => {
  it("production table (Lesson 05) MP/AP consistency", () => {
    const TP = [80, 170, 270, 368, 430, 480, 504, 504, 495, 470];
    const MP = TP.map((v, i) => v - (i === 0 ? 0 : TP[i - 1]));
    expect(MP).toEqual([80, 90, 100, 98, 62, 50, 24, 0, -9, -25]);
    for (let i = 0; i < TP.length; i++) {
      close(TP[i] / (i + 1), [80, 85, 90, 92, 86, 80, 72, 63, 55, 47][i], 1e-9);
    }
  });

  it("cost table Q01: every row satisfies the identities", () => {
    const rows = [
      { q: 1, tfc: 3000, tvc: 150, tc: 3150, mc: 150, afc: 3000, avc: 150, atc: 3150 },
      { q: 2, tfc: 3000, tvc: 300, tc: 3300, mc: 150, afc: 1500, avc: 150, atc: 1650 },
      { q: 3, tfc: 3000, tvc: 540, tc: 3540, mc: 240, afc: 1000, avc: 180, atc: 1180 },
      { q: 4, tfc: 3000, tvc: 800, tc: 3800, mc: 260, afc: 750, avc: 200, atc: 950 },
      { q: 5, tfc: 3000, tvc: 960, tc: 3960, mc: 160, afc: 600, avc: 192, atc: 792 },
    ];
    let prevTC = 3000;
    for (const r of rows) {
      expect(r.tfc + r.tvc).toBe(r.tc);
      expect(r.tc - prevTC).toBe(r.mc);
      expect(r.tfc / r.q).toBe(r.afc);
      expect(r.tvc / r.q).toBe(r.avc);
      expect(r.tc / r.q).toBe(r.atc);
      expect(r.afc + r.avc).toBe(r.atc);
      prevTC = r.tc;
    }
  });

  it("cost table Q02 corrected cells: MC(4) = 350, ATC(5) = 140", () => {
    expect(810 - 460).toBe(350);
    expect(700 / 5).toBe(140);
    // row identities for the corrected rows
    expect(310 + 500).toBe(810);
    expect(450 + 250).toBe(700);
    expect(810 / 4).toBe(202.5);
    expect(450 / 5).toBe(90);
  });

  it("Tutorial Q2 garment: MP/AP arrays and the three zones", () => {
    const TP = [24, 72, 138, 216, 300, 384, 462, 528, 576, 600, 594, 552];
    const MP = TP.map((v, i) => v - (i === 0 ? 0 : TP[i - 1]));
    expect(MP).toEqual([24, 48, 66, 78, 84, 84, 78, 66, 48, 24, -6, -42]);
    const AP = TP.map((v, i) => v / (i + 1));
    expect(AP.map((v) => Math.round(v))).toEqual([
      24, 36, 46, 54, 60, 64, 66, 66, 64, 60, 54, 46,
    ]);
    expect(Math.max(...TP)).toBe(600); // TP max at L = 10 (MP negative at 11)
    expect(MP[10]).toBeLessThan(0);
  });

  it("Tutorial Q3 sugar costs: TVC/TC table from TFC = 1500", () => {
    const tvc: Record<number, number> = { 0: 0, 1: 250, 3: 500, 4: 750, 9: 3200, 10: 3500 };
    const tc: Record<number, number> = { 2: 1850, 5: 3500, 6: 3750, 7: 4000, 8: 4500 };
    const merged: Record<number, number> = {};
    for (const [q, v] of Object.entries(tvc)) merged[+q] = v + 1500;
    for (const [q, v] of Object.entries(tc)) merged[+q] = v;
    expect(merged).toEqual({
      0: 1500, 1: 1750, 2: 1850, 3: 2000, 4: 2250,
      5: 3500, 6: 3750, 7: 4000, 8: 4500, 9: 4700, 10: 5000,
    });
  });
});

/* ------------------------------------------------------------------ */
/* Chapter 06 — utility maximisation (the corrected answers)           */
/* ------------------------------------------------------------------ */

describe("ch06 utility examples (corrected)", () => {
  const MUA = [10, 8, 7, 6, 5, 4, 3];
  const MUB = [24, 20, 18, 16, 12, 6, 4];

  it("$10 income: optimum is 2A + 4B with 96 utils (equi-marginal 8 = 8)", () => {
    const tu = (a: number, b: number) =>
      MUA.slice(0, a).reduce((s, v) => s + v, 0) +
      MUB.slice(0, b).reduce((s, v) => s + v, 0);
    // budget feasibility
    expect(2 * 1 + 4 * 2).toBe(10);
    expect(tu(2, 4)).toBe(96);
    expect(tu(4, 3)).toBe(93);
    expect(tu(2, 4)).toBeGreaterThan(tu(4, 3));
    // equi-marginal: MU_A(2)/P_A = 8/1 = 8 = MU_B(4)/P_B = 16/2
    expect(MUA[1] / 1).toBe(8);
    expect(MUB[3] / 2).toBe(8);
    // brute-force optimum over the full grid
    let best = { a: 0, b: 0, u: -1 };
    for (let a = 0; a <= 7; a++) {
      for (let b = 0; b <= 7; b++) {
        if (a * 1 + b * 2 <= 10 && tu(a, b) > best.u) best = { a, b, u: tu(a, b) };
      }
    }
    expect(best.a).toBe(2);
    expect(best.b).toBe(4);
    expect(best.u).toBe(96);
  });

  it("slide 49: optimum is 4A + 2B with 62 utils (beats 3A + 3B = 60)", () => {
    const TUA = [22, 32, 40, 46, 48];
    const TUB = [10, 16, 20, 22, 20];
    const tu = (a: number, b: number) => TUA[a - 1] + TUB[b - 1];
    expect(4 * 5 + 2 * 3).toBe(26); // exact budget
    expect(tu(4, 2)).toBe(62);
    expect(tu(3, 3)).toBe(60);
    expect(tu(4, 2)).toBeGreaterThan(tu(3, 3));
    // brute force over the affordable grid
    let best = { a: 0, b: 0, u: -1 };
    for (let a = 0; a <= 5; a++) {
      for (let b = 0; b <= 5; b++) {
        if (a * 5 + b * 3 <= 26 && tu(Math.max(a, 1), Math.max(b, 1)) > best.u && (a > 0 || b > 0)) {
          best = { a, b, u: TUA[Math.max(a, 1) - 1] * (a > 0 ? 1 : 0) + TUB[Math.max(b, 1) - 1] * (b > 0 ? 1 : 0) };
        }
      }
    }
    expect(best).toEqual({ a: 4, b: 2, u: 62 });
  });

  it("Sunil's Rs 40: both 5A+3B and 4A+4B give 960 utils", () => {
    const TUA = [140, 260, 360, 440, 500];
    const TUB = [180, 340, 460, 520, 540];
    expect(5 * 5 + 3 * 5).toBe(40);
    expect(4 * 5 + 4 * 5).toBe(40);
    expect(TUA[4] + TUB[2]).toBe(960);
    expect(TUA[3] + TUB[3]).toBe(960);
  });

  it("Kamal's Rs 12: X3+Y5 and X4+Y4 both give 54 utils", () => {
    const TUX = [10, 18, 24, 28, 31];
    const TUY = [8, 15, 21, 26, 30];
    expect(3 * 2 + 5 * 1).toBe(11);
    expect(4 * 2 + 4 * 1).toBe(12);
    expect(TUX[2] + TUY[4]).toBe(54);
    expect(TUX[3] + TUY[3]).toBe(54);
    expect(TUX[4] + TUY[0]).toBe(39); // the new exam distractor (X=5, Y=1)
  });
});

/* ------------------------------------------------------------------ */
/* Quizzes — recompute the numeric answers                             */
/* ------------------------------------------------------------------ */

describe("quiz answers", () => {
  it("quiz03 Q6: P = 26 (Q = 90)", () => {
    expect(350 - 10 * 26).toBe(90);
    expect(-40 + 5 * 26).toBe(90);
  });

  it("quiz04 Q4: P = 140 (Q = 160); Q6: revenue = 240", () => {
    expect(720 - 4 * 140).toBe(160);
    expect(-120 + 2 * 140).toBe(160);
    expect(-160 + 20 * 12).toBe(80);
    expect(200 - 10 * 12).toBe(80);
    expect(3 * 80).toBe(240);
  });

  it("quiz05 Q2: MP of the 3rd worker = 14", () => {
    expect(24 - 10).toBe(14);
  });

  it("final exam: Q4 (35), Q6 (80/20), Q8 (200), Q9 (−150+2P), Q12 (54), Q15 (A)", () => {
    expect(105 - 70).toBe(35); // Q4 D→E
    expect(260 - 3 * 80).toBe(20); // Q6
    expect(-140 + 2 * 80).toBe(20);
    expect(1320 - 6 * 180).toBe(240); // Q8
    expect(-680 + 4 * 180).toBe(40);
    expect(240 - 40).toBe(200);
    expect(-140 + 2 * (12 - 5)).toBe(-150 + 2 * 12); // Q9: −140 + 2(P−5) = −150 + 2P
    expect(24 + 30).toBe(54); // Q12
    expect(3).toBeLessThan(5); // Q15: country A has the lower OC of tea
  });

  it("quiz06 Q6 (corrected): 4A + 2B beats 3A + 3B", () => {
    const TUA = [22, 32, 40, 46, 48];
    const TUB = [10, 16, 20, 22, 20];
    expect(TUA[3] + TUB[1]).toBe(62);
    expect(TUA[2] + TUB[2]).toBe(60);
    expect(62).toBeGreaterThan(60);
    expect(4 * 5 + 2 * 3).toBe(26);
  });
});

/* ------------------------------------------------------------------ */
/* Chapter 09 formula sheet spot-checks                                */
/* ------------------------------------------------------------------ */

describe("ch09 formula sheet", () => {
  it("CS/PS/DWL/tax/subsidy formulas reproduce the tutorial numbers", () => {
    // CS = ½ Q0 (Pmax − P0) with the vegetable market
    expect(0.5 * 160 * (180 - 140)).toBe(3200);
    // PS = ½ Q0 (P0 − Pmin)
    expect(0.5 * 160 * (140 - 60)).toBe(6400);
    // Tax: Q1s = Q1(P − t); revenue = t·Qt; DWL = ½(Q0−Qt)t
    expect(-100 + 20 * (12 - 3)).toBe(80);
    expect(3 * 80).toBe(240);
    expect(0.5 * (100 - 80) * 3).toBe(30);
    // Subsidy: Q1s = Q1(P + s)
    expect(-240 + 3 * (116 + 20)).toBe(168);
    expect(0.5 * (168 - 144) * 20).toBe(240);
  });
});
