# Economics Charts — Verification Report

**Scope:** every chart, diagram and numeric table in the Business Economics
notes (TCS2112) — chapters 01–10, quizzes, worked examples, cheat sheet.
**Method:** independent recomputation of every numeric claim, a new
data-driven `<EconChart />` system generating all charts from equations,
unit tests (Vitest) verifying geometry, intersections, areas and label
collisions, plus automated layout checks and browser verification in
light/dark at mobile, tablet and desktop widths.

**Test results: 176/176 tests passing** (`bun run test`), **17/17 charts
clean** (`bun run test:charts`), production build green.

---

## 1. What was built

| Piece | Location |
|---|---|
| `<EconChart />` component (SVG, responsive, light/dark, tooltips, "show numbers" data table, generated captions) | `src/components/econ/econ-chart.tsx` |
| Pure geometry engine (scales, monotone cubic interpolation, clipping, tick generation, label anti-collision, overlap checker, spec validator) | `src/components/econ/econ-chart-core.ts` |
| `EconChartSpec` content model (curves by equation/points/bars, points, ref-lines, regions, arrows, zones) | `src/content/types.ts` |
| 17 chart specs, all numbers computed from equations | `src/content/books/econ/charts/` |
| Unit tests (per-chart math + independent recomputation of every worked example and quiz answer + structural snapshots) | `src/components/econ/__tests__/` |
| Chart validation script (spec + label-label + label-line collisions) | `scripts/check-econ-charts.ts` |
| `econChart` block type wired into the chapter renderer | `src/components/book/block-renderer.tsx` |

Every chart now draws from **equations**: intersections, equilibria, guide
values, shaded areas and the caption text are all computed from the same
numbers, so the drawing, the on-page data table and the caption cannot
disagree. Axis ticks carry numeric values with units; every marked point
shows dashed guides to both axes with the values printed at the axis; curve
labels sit at the ends of their curves; each chart has a title, a
description (screen-reader), a hover tooltip with exact values, and a
"Show numbers & equations" table listing the equations and computed key
values.

---

## 2. Audit of the original figures (before)

| # | Location (old) | Chart type | Problems found |
|---|---|---|---|
| 1 | ch02 · PPC frontier | PPC with points A–F | Point F(5,0) drawn at x=470 but the stated scale (x = 70+90·X) puts it at 520; freehand Bézier did not pass through the tabled points; no axis ticks; no units |
| 2 | ch02 · PPC shifts | 3 PPCs | Entirely freehand, no numbers, shift magnitudes arbitrary |
| 3 | ch03 · D/S equilibrium | D + S crossing | No numbers anywhere (P₀/Q₀ unlabelled values); no ticks |
| 4 | ch04 · Buffer stock | D + two S + TP | Teal arc arrows instead of quantity brackets; no Q_bad/Q_TP/Q_good or P values; "Price" axis title collided with tick labels; release/buy quantities not tied to any equations |
| 5 | ch04 · Price ceiling | D + S + max price | Garbled subscript labels (Pₙₐₓ, Qₜ, Pₚₙ?); Q positions eyeballed (Qs line at x=205 vs true 174 for the drawn curves); no values |
| 6 | ch04 · Price floor | D + S + min price | Same garbled labels; Qd line at 230 vs true ~209; no values |
| 7 | ch04 · CS/PS | D + S + triangles | Garbled intercept labels (Pₛₙₚₔ, Pₛₓ); no area values |
| 8 | ch04 · DWL of ceiling | D + S + triangles | B-triangle vertex (150,158) not on the demand curve; Q₁ guide at the wrong quantity; no values |
| 9 | ch04 · Per-unit tax | D + S + S_tax | **The "new equilibrium" point (232,118) is not on the demand curve** (D(232) = 140 for the drawn line); the producer point (232,193) is not on S (S(232) = 170); DWL triangle built from those wrong points |
| 10 | ch04 · Per-unit subsidy | D + S + S_sub | **New equilibrium (305,126) lies on neither D nor S_sub**; producer point (305,196) not on S; DWL triangle wrong |
| 11 | ch05 · TP + MP/AP | dual panel | Freehand curves; MP peak/AP-max/MP=0 only roughly placed; no numbers |
| 12 | ch05 · TC/TVC/TFC + unit costs | dual panel | Freehand; the marked "MC = min AVC" point (500,180) is where MC(500) ≈ 158 ≠ 180 for the drawn curves; no values |
| 13 | ch05 · LRATC | envelope | Freehand; MES unnumbered |
| 14 | ch06 · TU/MU | bars + curve | **TU-max circle at x=510 but MU = 0 at x=450** (inconsistent); zero-MU bar missing; no values |
| 15 | ch07 · Business cycle | wave + trend | Freehand; no values |
| 16 | ch03 · Circular flow | flow diagram | Conceptual (non-numeric) — **kept as-is** |

The interactive PPC viz (`ppc-viz.tsx`) was already data-driven and
correct — unchanged.

---

## 3. Per-chart verification (after)

Legend: **Equations** — what drives the chart. **Computed key values** —
verified by tests. **Issues fixed** — from the audit. All 17 charts pass:
spec validation (points/curves inside axes, no negative values), 0
label-label collisions, 0 label-line collisions, structural snapshot.

### 3.1 `ppc-frontier` (ch02)
- **Equations:** frontier through A(0,15) B(1,14) C(2,12) D(3,9) E(4,5) F(5,0), monotone-cubic interpolated.
- **Computed:** opportunity cost per extra smartphone = 1, 2, 3, 4, 5 laptops (rising → concave). G(2,5) inside, H(3,11) outside.
- **Fixed:** F now sits exactly at (5,0); the curve passes through every tabled point; ticks 0–5 / 0–15 with units.
- **Tests:** point coordinates, rising OC, inside/outside checks. ✅

### 3.2 `ppc-shifts` (ch02)
- **Equations:** base = Tutorial 02 Q5 table; growth = 1.2×, decline = 0.8× both axes.
- **Computed:** at 40t rice: 125 (base) → 150 (growth) → 100 (decline) clothes.
- **Fixed:** was freehand; all three curves now generated from the table.
- **Tests:** base table equality. ✅

### 3.3 `market-equilibrium` (ch03)
- **Equations:** D: Qd = 100 − 10P (exactly the chapter's schedule table); S: Qs = −25 + 15P.
- **Computed:** E = (50, Rs 5) — the top row of the schedule table; at P=3 shortage 50; at P=7 surplus 50.
- **Fixed:** no numbers → full ticks, guides, values; **a wrong D intercept (b=20 instead of the correct inverse-demand b=10) was caught by the new intersection test and fixed**.
- **Tests:** equilibrium solves both equations; E lies on D and on S. ✅

### 3.4 `buffer-stock` (ch04) — the flagship rebuild
- **Equations:** D: Q = 320 − 10P; short-run harvest supply perfectly inelastic (the chapter's own key-features assumption): S_bad: Q = 70, S_good: Q = 180; TP = 20.
- **Computed (all exact):**
  - E_bad = (70, Rs 25) — **above** TP ✔
  - E_good = (180, Rs 14) — **below** TP ✔
  - Q_TP = D⁻¹(20) = 120 = 70 + **50** (release) = 180 − **60** (buy-up) ✔
- **Rebuilt per spec:** teal arcs replaced by horizontal double arrows "release 50" (70→120) and "buy up 60" (180→120) drawn between the exact quantities just above the axis; Q_bad/Q_TP/Q_good and P_bad/P_good/TP labelled with values via dashed guides; S_bad, S_good, D labels at the ends of their curves; "Price (Rs per unit)" axis title placed clear of the TP tick; dashed "S at Q TP" line showing where both scenarios settle.
- **Tests:** all six identities above asserted, arrow endpoints/labels, caption restates the same numbers. ✅

### 3.5 `price-ceiling` (ch04)
- **Equations:** Qd = 100 − 5P, Qs = 5P (Lesson 04 Q1's market).
- **Computed:** E = (50, 10); at max price 8: Qd = 60, Qs = 40, **shortage 20**; black-market price = D⁻¹(40) = **12**.
- **Fixed:** garbled labels; now every value marked, black-market point on D.
- **Tests:** all four claims + point-on-curve. ✅

### 3.6 `price-floor` (ch04)
- **Equations:** same market; min price 12.
- **Computed:** Qd = 40, Qs = 60, **surplus 20**.
- **Tests:** asserted. ✅

### 3.7 `consumer-producer-surplus` (ch04)
- **Equations:** Qd = 720 − 4P, Qs = −120 + 2P (Tutorial 04-I Q1).
- **Computed:** E = (160, 140); **CS = 3,200; PS = 6,400; total = 9,600** — the notes previously printed 32,000 / 64,000 / 96,000 (10× slip, now fixed in the text as well).
- **Tests:** triangle areas via shoelace = stated values; equilibrium identity. ✅

### 3.8 `dwl-max-price` (ch04)
- **Equations:** base market with a Rs 6 ceiling.
- **Computed:** Q₁ = 30 traded; buyers' valuation of the 30th unit = 14; **A = 120** (transfer), **B = 40**, **C = 40**, **DWL = ½·20·8 = 80**.
- **Fixed:** B-triangle vertex now lies exactly on D; all areas shaded with values.
- **Tests:** polygon areas = stated values. ✅

### 3.9 `per-unit-tax` (ch04)
- **Equations:** Qd = 200 − 10P, Qs = −100 + 20P, t = 3 → Qs′ = −160 + 20P (Lesson Q3 = quiz Q6 data).
- **Computed:** E₀ = (100, 10); E₁ = (80, **12**) — verified on both D and S+tax; Ps = 9 (on S); incidence 2/3 consumer, 1/3 producer; **revenue = 240; DWL = 30**; welfare check ΔCS + ΔPS = 180 + 90 = 270 = 240 + 30 ✔.
- **Fixed:** the old figure's "new equilibrium" was not on D and its producer point was not on S — both now exact; tax wedge arrow runs between the two parallel curves with the Rs 3 gap computed.
- **Tests:** all of the above + arrow endpoints on both curves. ✅

### 3.10 `per-unit-subsidy` (ch04)
- **Equations:** Qd = 400 − 2P, Qs = −240 + 3P, s = 20 → Qs′ = −180 + 3P (Tutorial 04-II Q2).
- **Computed:** E₀ = (144, 128); E₁ = (168, **116**) on D and S′; Ps = 136; **cost = 3,360; DWL = 240**; CS+PS gain 3,120 = 3,360 − 240 ✔.
- **Fixed:** same class of geometry errors as the tax chart.
- **Tests:** asserted. ✅

### 3.11 `total-product` + 3.12 `mp-ap` (ch05)
- **Equations:** the Lesson 05 table (L 1–10: TP = 80…470).
- **Computed:** MP = 80, 90, 100, 98, 62, 50, 24, 0, −9, −25; AP = 80, 85, 90, 92, 86, 80, 72, 63, 55, 47; TP max = 504 at L = 8 (MP = 0); MP peak 100 at L = 3; AP peak 92 at L = 4; MP > AP ⇔ AP rising (verified row by row).
- **Fixed:** the dual-panel freehand figure is now two computed charts with the three production zones shaded and labelled.
- **Tests:** MP/AP recomputed from TP; all peak claims. ✅

### 3.13 `total-costs` + 3.14 `unit-costs` (ch05)
- **Equations:** TFC = 40; TVC = Q³ − 6Q² + 20Q; TC = TFC + TVC; MC = 3Q² − 12Q + 20; AVC = Q² − 6Q + 20; ATC = AVC + 40/Q; AFC = 40/Q.
- **Computed:** MC U-shaped, min 8 at Q = 2; **MC = min AVC exactly at (3, 11)**; **MC = min ATC at ≈ (4.15, 21.96)** (bisection); AFC falls continuously; TVC starts at origin; TC − TVC = 40 at every Q (shown by the TFC bracket arrow).
- **Fixed:** the old figure's "MC = min AVC" dot did not lie on either curve; now exact. MC-vs-ATC crossing verified numerically (|MC(Q*) − ATC(Q*)| < 0.02).
- **Tests:** identities, U-shape, both crossings, chart marks. ✅

### 3.15 `lratc` (ch05)
- **Equations:** ATC₁ = 4(Q−2)²+40, ATC₂ = 1.5(Q−5)²+30, ATC₃ = 0.5(Q−9)²+32; LRATC = min of the three.
- **Computed:** envelope switches at Q ≈ 2.35 and 6.74 (bisection); **MES = (5, 30)**; LRATC ≤ every ATC (verified on a grid); falling before MES, rising after.
- **Tests:** all asserted. ✅

### 3.16 `tu-mu` (ch06)
- **Equations:** MU = 10, 8, 6, 4, 2, 0, −2 → TU = 10, 18, 24, 28, 30, 30, 28.
- **Computed:** **TU max = 30 at glass 6, exactly where MU = 0** (the old figure marked TU-max at the wrong glass); 7th glass TU falls to 28.
- **Tests:** running-sum consistency, peak-at-MU=0, monotone MU. ✅

### 3.17 `business-cycle` (ch07)
- **Equations:** trend = 100·1.04^t; actual = trend·(1 + 0.05·sin(2πt/8)).
- **Computed:** peak Yr 2 = 113.6, trough Yr 6 = 120.2, peak Yr 10 = 155.4; phases labelled.
- **Tests:** actual/trend identities, 4% growth. ✅

---

## 4. Worked examples & quizzes — recomputed independently

**Errors found and fixed in the text:**

| Where | Was | Now | Why |
|---|---|---|---|
| Tutorial 04-I Q1 (vegetable CS/PS) | CS 32,000 / PS 64,000 / total 96,000 | **3,200 / 6,400 / 9,600** | ½·160·40 = 3,200 (10× slip) |
| ch06 "$10 income" example | bundle 4A + 3B, 93 utils | **2A + 4B, 96 utils** | brute-force optimum; equi-marginal holds exactly (8 = 8); the walk-through's step 4 bought a "4th A" that the budget path does not reach |
| ch06 slide-49 example | 3A + 3B, 60 utils (with leftover self-correction text left in the notes) | **4A + 2B, 62 utils** (full Rs 26 spent) | 4A+2B beats the ranking-path stop; the messy "wait, check the arithmetic" paragraph replaced with the correct check |
| ch06 Kamal marginal note | "last X gives 1.5 utils/Re" | **3 utils/Re** (6/2) | wrong unit referenced |
| quiz06 Q6 | answer "3A + 3B (TU 60)" | **"4A + 2B (Rs 26, TU 62)"** | same correction as slide 49 |
| final exam Q12 distractor | "X = 4, Y = 4 (TU = 50)" | **"X = 5, Y = 1 (TU = 39)"** | the stated TU was wrong (real TU 54 — which would have made the distractor as good as the keyed answer) |
| ch03 Tutorial Q5 schedule | Qd at P = 50 listed 300 | **400** | the other four rows imply Qd = 525 − 2.5P; 300 broke linearity (flagged below) |
| ch05 cost table Q02 | MC(4) = 110, ATC(5) = 200 | **350, 140** | ΔTC = 810−460 = 350; TC/Q = 700/5 = 140 (cells now match their own rows; note expanded) |

**Missing solutions completed** (recomputed, added to the notes):
ch01 Tutorial MCQ Q2–Q3 and short answers Q2–Q5 · ch02 Tutorial Q2–Q5 ·
ch03 Exercise 2 and Tutorial Q2–Q5 · ch04 Lesson Q2–Q4, Exercises E2–E4,
Tutorial I Q2–Q3, Tutorial II Q2 · ch05 Tutorial Q2–Q3.

**Verified correct (no change needed):** ch03 demand-equation derivations
(a)–(d); ch02 opportunity-cost examples; ch05 Lesson production table and
cost table Q01 (all row identities hold); Tutorial 05 Q1; Tutorial 04-II
Q1 sugar tax (all six parts); ch06 Sunil (both optimal bundles 960 utils)
and Kamal (54 utils); ch08 absolute/comparative advantage; quiz03 Q6;
quiz04 Q4 & Q6; quiz05 Q2; final exam Q4, Q6, Q8, Q9, Q12, Q15; the
ch09 formula sheet identities.

---

## 5. Needs author confirmation

These were **not** silently changed in meaning; each has a proposed fix:

1. **ch03 Tutorial Q5 demand schedule** — the printed Qd at P = 50 (300)
   contradicts the linear demand implied by the other rows. Fixed to 400
   (making Qd = 525 − 2.5P; equilibrium P ≈ 45.29, Q ≈ 411.8, shortage
   87.5 at Rs 35 — all now in the solution). *If the original intended a
   kinked/non-linear demand, the row should revert and the solution be
   re-derived.*
2. **ch02 Tutorial Q4** — "Draw and explain the following using PPFs…"
   ends with no scenario list in the source notes. The scenario bullets
   from the original tutorial are missing; the new solution notes this.
   *Author should supply the intended sub-parts.*
3. **ch04 buffer-stock model** — the rebuild uses the chapter's own
   "supply perfectly inelastic in the short run" assumption (vertical
   harvest supply), which makes the release-50 / buy-up-60 arithmetic
   exact, as specified. *If the lecturer prefers upward-sloping S_bad /
   S_good, the release/buy quantities would move the equilibrium by less
   than the headline numbers and the chart should be re-derived.*
4. **ch05 cost-table Q02** — the original slide table mixes TFC values
   across rows (190/190/190/500/250) and contained the two cells corrected
   above. The solution already explains the inconsistency; the two cells
   now agree with their rows. *If the source slides had different intended
   numbers, the whole table should be re-keyed.*
5. **Final exam Q12** — both X = 3, Y = 5 and X = 4, Y = 4 yield TU = 54;
   the keyed answer is kept and the explanation now mentions the tie. The
   replaced distractor is X = 5, Y = 1 (TU 39). *Author may prefer to
   reword the question to have a unique optimum.*

---

## 6. Verification methods

- **Unit tests (Vitest, 176 passing):** per-chart spec validation; 0
  label-label and 0 label-line collisions (deterministic bounding-box +
  Liang–Barsky segment tests with margins); every marked intersection
  satisfies both curve equations (this caught a real wrong intercept in
  the equilibrium chart); shaded-region polygon areas equal their stated
  values (shoelace); slope signs and shift directions (tax shifts supply
  up by exactly t, subsidy down by s); all worked-example and quiz numbers
  recomputed from their own inputs (including brute-force utility
  optima); 17 structural snapshots pinning ticks, curve geometry, point
  positions and region values.
- **Layout script:** `bun scripts/check-econ-charts.ts` — prints per-chart
  spec issues and any collision pairs; exits non-zero on failure.
- **Production build:** `bun run build` green; server smoke-checked
  (HTTP 200 on all econ chapters).
- **Browser verification (agent-browser + vision model):** desktop
  1280×900 light & dark, mobile 390×844 — all 7 charts on ch04 and 5 on
  ch05 render; curves/points/arrows/axis labels confirmed present and
  non-overlapping; dark-mode contrast good; on mobile the chart keeps a
  560 px minimum width inside a horizontal-scroll container (text stays
  legible; container confirmed scrollable); the "Show numbers &
  equations" toggle opens the data table; no console errors.

## 7. How to run the checks

```bash
bun install
bun run test            # Vitest: 176 tests (math + collisions + snapshots)
bun run test:charts     # layout/overlap report for all 17 charts
bun run verify:econ     # both
bun run build           # production build
```
