/**
 * Dev-time chart validation: builds the render model for every Economics
 * chart spec and reports spec issues + label collisions.
 * Run: bun scripts/check-econ-charts.ts          (summary)
 *      DEBUG=1 bun scripts/check-econ-charts.ts  (with label positions)
 */
import { ALL_ECON_CHARTS } from "../src/content/books/econ/charts";
import {
  buildRenderModel,
  checkOverlaps,
  validateSpec,
  labelBBox,
  type RenderModel,
} from "../src/components/econ/econ-chart-core";

function debug(m: RenderModel, id: string) {
  const l = m.labels.find((x) => x.id === id);
  if (l) {
    const b = labelBBox(l);
    console.log(
      `   # ${id}: text="${l.text}" anchor=${l.anchor} x=${l.x.toFixed(1)} y=${l.y.toFixed(1)} bbox=[${b.x1.toFixed(0)},${b.y1.toFixed(0)} ${b.x2.toFixed(0)},${b.y2.toFixed(0)}]`,
    );
  }
}

let failures = 0;
for (const spec of ALL_ECON_CHARTS) {
  const issues = validateSpec(spec);
  const model = buildRenderModel(spec);
  const overlaps = checkOverlaps(model);
  const status = issues.length === 0 && overlaps.length === 0 ? "OK " : "FAIL";
  if (status === "FAIL") failures++;
  console.log(`\n[${status}] ${spec.id} — ${spec.title}`);
  for (const i of issues) console.log(`   spec: ${i.kind}: ${i.detail}`);
  for (const o of overlaps) {
    console.log(`   ${o.kind}: ${o.a} <-> ${o.b}`);
    if (process.env.DEBUG) {
      debug(model, o.a);
      debug(model, o.b);
    }
  }
  const nCurves = model.curves.length + model.bars.length;
  if (process.env.VERBOSE) {
    console.log(
      `   curves=${nCurves} points=${model.points.length} labels=${model.labels.length} ticksX=${model.ticksX.length} ticksY=${model.ticksY.length}`,
    );
  }
}
console.log(
  `\n${failures === 0 ? "ALL CHARTS CLEAN" : `${failures} chart(s) with problems`}`,
);
process.exit(failures === 0 ? 0 : 1);
