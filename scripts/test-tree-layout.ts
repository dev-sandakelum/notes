/**
 * Unit tests for the shared static-tree layout (book/tree-layout.ts).
 *
 * Run: bun run scripts/test-tree-layout.ts
 *
 * Invariants (from the Task 4 spec):
 *  1. a lone LEFT child is offset to the LEFT of its parent, a lone RIGHT
 *     child to the RIGHT — never directly below (no vertical edges);
 *  2. no two nodes overlap and same-depth nodes keep >= siblingGap px
 *     edge-to-edge;
 *  3. a parent with two children is centred above them;
 *  4. deeper levels get strictly larger y;
 *  5. the geometry is normalised to x >= 0.
 */
import { layoutTreeDiagram } from "../src/components/book/tree-layout";
import type { TreeDiagramTreeNode } from "../src/content/types";

let passed = 0;
let failed = 0;
function ok(cond: boolean, name: string, detail = "") {
  if (cond) {
    passed++;
    console.log(`  ok  ${name}`);
  } else {
    failed++;
    console.log(`  FAIL  ${name}${detail ? " — " + detail : ""}`);
  }
}

/* --- spec tree: the ch07 field-notes shape ------------------------- */
const FIELD_NOTES: TreeDiagramTreeNode = {
  id: "A",
  label: "A",
  children: [
    {
      id: "B",
      label: "B",
      side: "left",
      children: [
        {
          id: "D",
          label: "D",
          side: "left",
          children: [
            { id: "G", label: "G", side: "left" },
            { id: "H", label: "H", side: "right" },
          ],
        },
        {
          id: "E",
          label: "E",
          side: "right",
          children: [
            { id: "I", label: "I", side: "left" },
            { id: "J", label: "J", side: "right" },
          ],
        },
      ],
    },
    {
      id: "C",
      label: "C",
      side: "right",
      children: [{ id: "F", label: "F", side: "right" }],
    },
  ],
};

const GAP = 24;
const laid = layoutTreeDiagram(FIELD_NOTES, { siblingGap: GAP, levelHeight: 78 });
const byId = new Map(laid.nodes.map((n) => [n.id, n]));

console.log("lone-child sides (field-notes tree)");
const A = byId.get("A")!;
const C = byId.get("C")!;
const F = byId.get("F")!;
ok(F.x > C.x, "lone RIGHT child F sits right of C", `F.x=${F.x} C.x=${C.x}`);
ok(Math.abs(F.x - C.x) >= 21 * 1.5, "F offset >= 1.5 x radius", `dx=${F.x - C.x}`);
ok(F.y > C.y, "F one level below C");
ok(C.x > A.x, "C (right child) sits right of A");

console.log("no vertical single-child edges");
for (const [from, to] of laid.edges) {
  const p = byId.get(from)!;
  const c = byId.get(to)!;
  const kidsOfParent = laid.edges.filter(([f]) => f === from).length;
  if (kidsOfParent === 1) {
    ok(
      Math.abs(p.x - c.x) >= 21 * 1.5 - 0.01,
      `lone-child edge ${from}->${to} is not vertical`,
      `dx=${(p.x - c.x).toFixed(1)}`,
    );
  }
}

console.log("spacing: no overlaps, same-depth gap >= siblingGap");
let overlaps = 0;
let tight = 0;
for (let i = 0; i < laid.nodes.length; i++) {
  for (let j = i + 1; j < laid.nodes.length; j++) {
    const p = laid.nodes[i];
    const q = laid.nodes[j];
    const gap = Math.hypot(p.x - q.x, p.y - q.y) - p.r - q.r;
    if (gap < 0) overlaps++;
    if (p.y === q.y && gap < GAP - 0.01) tight++;
  }
}
ok(overlaps === 0, "no overlapping nodes", `${overlaps} overlaps`);
ok(tight === 0, "same-depth nodes keep >= siblingGap", `${tight} tight pairs`);

console.log("structure: parent centred above two children, levels ordered");
for (const [from, to] of laid.edges) {
  const p = byId.get(from)!;
  const c = byId.get(to)!;
  ok(c.y > p.y, `child ${to} strictly below parent ${from}`);
}
const B = byId.get("B")!;
const D = byId.get("D")!;
const E = byId.get("E")!;
ok(
  Math.abs((D.x + E.x) / 2 - B.x) < 0.01,
  "B centred above D and E",
  `mid=${(D.x + E.x) / 2} B.x=${B.x}`,
);
ok(laid.nodes.every((n) => n.x - n.r >= -0.01), "geometry normalised to x >= 0");

console.log("left/right mirror: a lone LEFT child offsets left");
const LONE_LEFT: TreeDiagramTreeNode = {
  id: "P",
  label: "P",
  children: [{ id: "L", label: "L", side: "left" }],
};
const lm = layoutTreeDiagram(LONE_LEFT);
const P = lm.nodes.find((n) => n.id === "P")!;
const L = lm.nodes.find((n) => n.id === "L")!;
ok(L.x < P.x, "lone left child L sits left of P", `L.x=${L.x} P.x=${P.x}`);

console.log("skewed chain (left spine) renders as a diagonal staircase");
// build left chain of 4
let chain: TreeDiagramTreeNode = { id: "c4", label: "4" };
for (let k = 3; k >= 1; k--) {
  chain = { id: `c${k}`, label: String(k), children: [{ ...chain, side: "left" }] };
}
const cm = layoutTreeDiagram(chain);
let monotone = true;
for (let k = 1; k < 4; k++) {
  const a = cm.nodes.find((n) => n.id === `c${k}`)!;
  const b = cm.nodes.find((n) => n.id === `c${k + 1}`)!;
  if (!(b.x < a.x)) monotone = false;
}
ok(monotone, "left chain steps down-left at every level");

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
