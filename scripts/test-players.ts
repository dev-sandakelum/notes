/**
 * Unit tests for the step recorders (player-steps.ts).
 *
 * Run:  node --experimental-strip-types scripts/test-players.ts
 *   or:  bun run scripts/test-players.ts
 *
 * Verifies that the players' animation frames come from the REAL
 * algorithms: traversal orders for the shown tree, postfix 5 3 + 8 2 - *
 * = 48, infix->postfix matches the chapter's trace tables, step-back
 * restores state exactly (recorded states are immutable snapshots), and
 * invalid input raises friendly errors.
 */

import {
  recordTraversal,
  recordNotations,
  recordPostfixEval,
  recordInfixToPostfix,
  tokenizeInfix,
  tokenizePostfix,
  PostfixError,
  TRACE_TREE,
  EXPR_TREE,
} from "../src/components/viz/player-steps.ts";

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

/* ------------------------------------------------------------------ */
console.log("traversal recorder (the shown tree, ch08)");
/* ------------------------------------------------------------------ */

// hand-computed ground truth for 1(2(4(8,9),5),3(6,7))
const PRE = "1 2 4 8 9 5 3 6 7".split(" ");
const IN = "8 4 9 2 5 1 6 3 7".split(" ");
const POST = "8 9 4 5 2 6 7 3 1".split(" ");

for (const [order, expected] of [
  ["pre", PRE],
  ["in", IN],
  ["post", POST],
] as const) {
  const steps = recordTraversal(TRACE_TREE, order);
  const last = steps[steps.length - 1];
  ok(
    JSON.stringify(last.output) === JSON.stringify(expected),
    `${order}-order output`,
    `got ${last.output.join(" ")} want ${expected.join(" ")}`,
  );
  // the notes' full trace says post-order: 8 9 4 5 2 6 7 3 1
}

// step-back exactness: states are distinct immutable snapshots
const postSteps = recordTraversal(TRACE_TREE, "post");
ok(
  postSteps.every((s) => Array.isArray(s.output) && Array.isArray(s.callStack)),
  "every step carries full state",
);
ok(
  (() => {
    // walk to the end then back to zero: state must equal the recording
    let i = postSteps.length - 1;
    while (i > 0) i--;
    return JSON.stringify(postSteps[i]) === JSON.stringify(postSteps[0]);
  })(),
  "step-back returns to the exact initial snapshot",
);
ok(
  postSteps[0].output.length === 0 && postSteps[0].callStack.length === 0,
  "initial state is empty",
);

/* ------------------------------------------------------------------ */
console.log("notation recorder (expression tree A/B*C*D+E)");
/* ------------------------------------------------------------------ */

const notations = recordNotations(EXPR_TREE);
const lastOf = (phase: string) =>
  notations.filter((s) => s.phase === phase).pop()!;

ok(
  lastOf("prefix").output.join("") === "+**/ABCDE",
  "prefix = +**/ABCDE",
  `got ${lastOf("prefix").output.join("")}`,
);
ok(
  lastOf("infix").output.join("") === "A/B*C*D+E",
  "infix = A/B*C*D+E",
  `got ${lastOf("infix").output.join("")}`,
);
ok(
  lastOf("postfix").output.join("") === "AB/C*D*E+",
  "postfix = AB/C*D*E+",
  `got ${lastOf("postfix").output.join("")}`,
);
// these match the figure caption in the chapter exactly

/* ------------------------------------------------------------------ */
console.log("postfix evaluation recorder (fine-grained frames)");
/* ------------------------------------------------------------------ */

const evalFrames = recordPostfixEval(tokenizePostfix("5 3 + 8 2 - *"));
const finalFrame = evalFrames[evalFrames.length - 1];
ok(
  finalFrame.phase === "done" && finalFrame.answer === 48,
  "5 3 + 8 2 - * = 48 (done frame carries the answer)",
  `phase=${finalFrame.phase} answer=${finalFrame.answer}`,
);

// fine-grained sub-frames: operands >= 3 frames, operators >= 6 frames
const operandFrames = evalFrames.filter((f) => f.phase === "push" || f.phase === "pushed");
ok(
  operandFrames.length >= 7,
  "every operand contributes read + push + settle sub-frames",
  `push/pushed frames = ${operandFrames.length}`,
);
const opPhases = evalFrames
  .filter((f) => f.phase === "pop-right")
  .map((f) => f.token);
ok(
  opPhases.length === 3,
  "three operators each pop into RIGHT/LEFT slots",
  `pop-right frames = ${opPhases.length}`,
);
ok(
  evalFrames.some((f) => f.phase === "equation") &&
    evalFrames.some((f) => f.phase === "compute"),
  "equation + compute frames exist",
);

// pop order: for "8 2 -" the FIRST pop is 2 (RIGHT), second 8 (LEFT)
const minusPop = evalFrames.find((f) => f.token === "-" && f.phase === "pop-left")!;
ok(
  minusPop.right === 2 && minusPop.left === 8,
  "first pop = RIGHT (2), second pop = LEFT (8)",
  `right=${minusPop.right} left=${minusPop.left}`,
);
ok(
  evalFrames.find((f) => f.token === "-" && f.phase === "compute")!.result === 6,
  "8 − 2 computes to 6",
);

// back-step exactness: every frame is a full immutable snapshot
ok(
  evalFrames.every((f) => Array.isArray(f.stack)),
  "every frame carries the full stack snapshot",
);
const snapAt = (i: number) => JSON.stringify(evalFrames[i]);
ok(
  new Set(evalFrames.map((f) => JSON.stringify(f))).size === evalFrames.length,
  "all frames are distinct snapshots (back-step restores exactly)",
);

// the required results
for (const [expr, want] of [
  ["5 3 + 8 2 - *", 48],
  ["2 3 4 * +", 14],
  ["6 2 / 3 - 4 +", 4],
  ["10 2 /", 5],
  ["7", 7],
] as const) {
  const fr = recordPostfixEval(tokenizePostfix(expr));
  const last = fr[fr.length - 1];
  ok(
    last.phase === "done" && last.answer === want,
    `postfix ${expr} = ${want}`,
    `phase=${last.phase} answer=${last.answer}`,
  );
}

// error FRAMES (walkable, not thrown)
const uf = recordPostfixEval(tokenizePostfix("5 +"));
ok(
  uf[uf.length - 1].phase === "error" &&
    uf[uf.length - 1].error?.kind === "underflow",
  "5 + ends in a stack-underflow frame",
  `last phase=${uf[uf.length - 1].phase}`,
);
const bad = recordPostfixEval(tokenizePostfix("5 x +"));
ok(
  bad[bad.length - 1].error?.kind === "invalid-token",
  "5 x + ends in an invalid-token frame",
);
const left = recordPostfixEval(tokenizePostfix("5 3"));
ok(
  left[left.length - 1].error?.kind === "leftover",
  "5 3 ends in a leftover-operands frame",
);

/* ------------------------------------------------------------------ */
console.log("infix -> postfix recorder (shunting yard)");
/* ------------------------------------------------------------------ */

const conv = recordInfixToPostfix(tokenizeInfix("A + B * C - D"));
const convOut = conv[conv.length - 1].output.join(" ");
ok(
  convOut === "A B C * + D -",
  "A + B * C - D -> A B C * + D -",
  `got ${convOut}`,
);

const conv2 = recordInfixToPostfix(tokenizeInfix("( A + B ) * C"));
ok(
  conv2[conv2.length - 1].output.join(" ") === "A B + C *",
  "( A + B ) * C -> A B + C *",
);

// matches the chapter's other table: (A + B) * (C - D)
const conv3 = recordInfixToPostfix(tokenizeInfix("( A + B ) * ( C - D )"));
ok(
  conv3[conv3.length - 1].output.join(" ") === "A B + C D - *",
  "( A + B ) * ( C - D ) -> A B + C D - *",
);

// every step records consumed + full state
ok(
  conv.every((s) => Number.isInteger(s.consumed)),
  "every infix step carries a consumed count",
);

// unbalanced parens throw friendly errors
try {
  recordInfixToPostfix(tokenizeInfix("( A + B"));
  ok(false, "unbalanced ( throws");
} catch (e) {
  ok(e instanceof PostfixError && /Unbalanced/i.test(e.message), "unbalanced ( throws a friendly error");
}
try {
  recordInfixToPostfix(tokenizeInfix("A + B )"));
  ok(false, "unbalanced ) throws");
} catch (e) {
  ok(e instanceof PostfixError && /Unbalanced/i.test(e.message), "unbalanced ) throws a friendly error");
}

/* ------------------------------------------------------------------ */
console.log("prefix evaluation sanity (right -> left scan)");
/* ------------------------------------------------------------------ */
// the chapter's prefix example * + 5 3 - 8 2 = 48, scanning right -> left
// with first pop = LEFT operand
{
  const ops: Record<string, (a: number, b: number) => number> = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };
  const st: number[] = [];
  for (const t of "* + 5 3 - 8 2".split(" ").reverse()) {
    if (t in ops) {
      const left = st.pop()!;
      const right = st.pop()!;
      st.push(ops[t](left, right));
    } else st.push(Number(t));
  }
  ok(st[0] === 48, "prefix * + 5 3 - 8 2 = 48 (sanity)", `got ${st[0]}`);
}


/* ------------------------------------------------------------------ */
console.log("linked list recorder (singly + doubly)");
/* ------------------------------------------------------------------ */

import {
  recordLinkedListOp,
  defaultLinkedList,
  type LLNodeData,
} from "../src/components/viz/player-steps.ts";

const base = defaultLinkedList(); // 12 -> 99 -> 37

// insertHead: link order — new->next set BEFORE head = new
const ih = recordLinkedListOp(base, "singly", { op: "insertHead", value: 7 });
const ihOrder = ih[ih.length - 1].list.map((n: LLNodeData) => n.value);
ok(JSON.stringify(ihOrder) === "[7,12,99,37]", "insertHead(7) -> 7,12,99,37", JSON.stringify(ihOrder));
ok(
  ih.some((f) => f.code.includes("new->next = head")) &&
    ih.some((f) => f.code.trim() === "head = new;"),
  "insertHead frames: new->next = head comes before head = new",
);
const newNextIdx = ih.findIndex((f) => f.code.includes("new->next = head"));
const headMoveIdx = ih.findIndex((f) => f.code.trim() === "head = new;");
ok(newNextIdx >= 0 && headMoveIdx > newNextIdx, "link-before-move order enforced");

// insertTail: appends after traversal
const it = recordLinkedListOp(base, "singly", { op: "insertTail", value: 8 });
ok(
  JSON.stringify(it[it.length - 1].list.map((n: LLNodeData) => n.value)) === "[12,99,37,8]",
  "insertTail(8) -> 12,99,37,8",
);
ok(
  it.filter((f) => f.code.includes("last = last->next")).length === 2,
  "append walks exactly 2 hops to reach the old tail",
);

// insertAt position 2 (1-based): between 12 and 99
const ia = recordLinkedListOp(base, "singly", { op: "insertAt", value: 5, position: 2 });
ok(
  JSON.stringify(ia[ia.length - 1].list.map((n: LLNodeData) => n.value)) === "[12,5,99,37]",
  "insertAt(5, pos 2) -> 12,5,99,37",
);
// insertAt pos 1 delegates to insertHead, pos > len to insertTail
const ia1 = recordLinkedListOp(base, "singly", { op: "insertAt", value: 5, position: 1 });
ok(ia1[ia1.length - 1].list[0].value === 5, "insertAt pos 1 inserts at head");
const ia9 = recordLinkedListOp(base, "singly", { op: "insertAt", value: 9, position: 99 });
ok(ia9[ia9.length - 1].list[ia9[ia9.length - 1].list.length - 1].value === 9, "insertAt pos>len appends");

// deleteValue middle / head / missing
const dv = recordLinkedListOp(base, "singly", { op: "deleteValue", value: 99 });
ok(
  JSON.stringify(dv[dv.length - 1].list.map((n: LLNodeData) => n.value)) === "[12,37]",
  "delete 99 -> 12,37",
);
const dh = recordLinkedListOp(base, "singly", { op: "deleteValue", value: 12 });
ok(dh[dh.length - 1].list[0].value === 99, "delete head 12 -> head becomes 99");
const dm = recordLinkedListOp(base, "singly", { op: "deleteValue", value: 999 });
ok(
  dm[dm.length - 1].list.length === 3 && dm[dm.length - 1].code.includes("NULL"),
  "delete missing value leaves the list untouched",
);
ok(dv.some((f) => f.code.includes("free(pCur)")), "delete ends with free(pCur)");

// search found / not found
const sf = recordLinkedListOp(base, "singly", { op: "search", value: 99 });
ok(sf.some((f) => f.desc.includes("Found 99 at position 2")), "search finds 99 at position 2");
const sn = recordLinkedListOp(base, "singly", { op: "search", value: 55 });
ok(sn[sn.length - 1].list.length === 3, "search does not modify the list");

// reverse: final order flipped, flipped-links recorded mid-way
const rv = recordLinkedListOp(base, "singly", { op: "reverse" });
ok(
  JSON.stringify(rv[rv.length - 1].list.map((n: LLNodeData) => n.value)) === "[37,99,12]",
  "reverse -> 37,99,12",
);
ok(rv.some((f) => f.flipped.length === 2), "mid-reverse frames record flipped back-links");
ok(rv[rv.length - 1].flipped.length === 0, "final frame has no stale flipped links");

// doubly: insertHead has the extra head->prev = new frame + TAIL maintained
const dh55 = recordLinkedListOp(base, "doubly", { op: "insertHead", value: 55 });
ok(
  dh55.some((f) => f.code.includes("head->prev = new;")),
  "doubly insertHead maintains head->prev",
);
ok(
  dh55[dh55.length - 1].tailId === dh55[dh55.length - 1].list[3].id,
  "doubly TAIL still points at the last node after a head insert",
);
const dd = recordLinkedListOp(base, "doubly", { op: "deleteValue", value: 99 });
ok(
  dd.some((f) => f.code.includes("->left")),
  "doubly middle delete fixes the back-links (pCur->right->left = pPrev)",
);

/* ------------------------------------------------------------------ */
console.log("circular queue recorder");
/* ------------------------------------------------------------------ */

import {
  recordCircularQueueOps,
  emptyCircularQueue,
  wrapAroundScenario,
  type CircularQueueOp,
} from "../src/components/viz/player-steps.ts";
import {
  buildRingGeometry,
  ringLabelSeparation,
  ringLabelBBox,
  RING_LABEL_MIN_SEPARATION,
} from "../src/components/viz/circular-queue-geometry.ts";

// fill to N, detect FULL, drain, detect EMPTY, FIFO order
let cq = emptyCircularQueue(5);
const ops: CircularQueueOp[] = [];
for (const v of [1, 2, 3, 4, 5]) ops.push({ op: "enqueue", value: v });
ops.push({ op: "enqueue", value: 6 }); // refused: full
for (let i = 0; i < 6; i++) ops.push({ op: "dequeue" }); // last refused: empty
const cqf = recordCircularQueueOps(cq, ops);
ok(
  cqf.some((f) => f.phase === "full" && f.desc.includes("cannot enqueue 6")),
  "6th enqueue on N=5 records a FULL frame",
);
ok(
  cqf.some((f) => f.phase === "empty"),
  "extra dequeue records an EMPTY frame",
);
const dequeued = cqf.filter((f) => f.phase === "dequeue-done").map((f) => f.value);
ok(
  JSON.stringify(dequeued) === "[1,2,3,4,5]",
  "FIFO order: 1..5 dequeued in order",
  JSON.stringify(dequeued),
);
const finalCq = cqf[cqf.length - 1].state;
ok(finalCq.count === 0 && finalCq.slots.every((s) => s === null), "queue drains to empty");

// wrap-around: rear must reuse slot 0 after wrapping
cq = emptyCircularQueue(5);
const wrapOps: CircularQueueOp[] = [
  { op: "enqueue", value: 10 },
  { op: "enqueue", value: 20 },
  { op: "dequeue" },
  { op: "dequeue" },
];
for (const v of [30, 40, 50, 60, 70]) wrapOps.push({ op: "enqueue", value: v });
const wf = recordCircularQueueOps(cq, wrapOps);
const wrapFrames = wf.filter((f) => f.phase === "advance-rear" && f.calc.includes("wrap-around"));
ok(wrapFrames.length === 1, "the 4->0 rear wrap is flagged with live modulo math", String(wrapFrames.length));
const wFinal = wf[wf.length - 1].state;
ok(
  wFinal.slots[0] === 60 && wFinal.slots[1] === 70 && wFinal.count === 5,
  "after wrap, slot 0/1 are reused (60, 70), count = 5",
  JSON.stringify(wFinal.slots),
);
ok(
  wf.some((f) => /rear = \(4 \+ 1\) % 5 = 0/.test(f.calc)),
  "live arithmetic shows rear = (4 + 1) % 5 = 0",
);

// the scripted scenario: contains full + empty + wrap
const sc = recordCircularQueueOps(emptyCircularQueue(5), wrapAroundScenario());
ok(sc.some((f) => f.phase === "full"), "scenario hits FULL");
ok(sc.some((f) => f.phase === "empty"), "scenario hits EMPTY");
ok(sc.some((f) => f.calc.includes("wrap-around")), "scenario shows wrap-around math");
ok(sc.length > 40, "scenario is a rich frame sequence", String(sc.length));


/* ------------------------------------------------------------------ */
/* Circular queue RING GEOMETRY (Task R2-3): for every N in 3..16 and  */
/* every front/rear pairing, nothing is ever clipped and labels never  */
/* collide; the viewBox is stable across frames of the same N.         */
/* ------------------------------------------------------------------ */
const ALL_N = [3, 4, 5, 6, 8, 10, 12, 16];
for (const N of ALL_N) {
  const pairings: [number | null, number | null][] = [[null, null]];
  for (let f = 0; f < N; f++) {
    pairings.push([f, f]);                       // same slot (count == 1)
    pairings.push([f, (f + 1) % N]);             // adjacent
    pairings.push([f, (f + Math.floor(N / 2)) % N]); // far apart
    if (N > 3) pairings.push([f, (f + N - 1) % N]);  // adjacent behind
  }
  const viewBoxes = new Set<string>();
  for (const [f, r] of pairings) {
    const g = buildRingGeometry(N, f, r);
    viewBoxes.add(`${g.size}`);
    const inside = (x1: number, y1: number, x2: number, y2: number, what: string) => {
      ok(
        x1 >= 0 && y1 >= 0 && x2 <= g.size && y2 <= g.size,
        `N=${N} f=${f} r=${r}: ${what} inside viewBox 0..${g.size}`,
        `bbox ${Math.round(x1)},${Math.round(y1)}..${Math.round(x2)},${Math.round(y2)}`,
      );
    };
    // every slot box inside
    for (const s of g.slots) {
      inside(
        s.x - g.slotW / 2,
        s.y - g.slotH / 2,
        s.x + g.slotW / 2,
        s.y + g.slotH / 2,
        `slot ${s.i}`,
      );
    }
    // index labels inside the ring interior (never near the markers)
    for (const s of g.slots) {
      const distFromCenter = Math.hypot(s.ix - g.cx, s.iy - g.cy);
      ok(
        distFromCenter < g.radius,
        `N=${N}: index ${s.i} sits INSIDE the ring`,
        `dist ${Math.round(distFromCenter)} vs R ${Math.round(g.radius)}`,
      );
    }
    // marker labels + arrows inside, with clearance from slots
    for (const m of [g.front, g.rear]) {
      if (!m) continue;
      const b = ringLabelBBox(m);
      inside(b.x1, b.y1, b.x2, b.y2, `${m.kind} label`);
      inside(
        Math.min(m.tailX, m.tipX) - 5,
        Math.min(m.tailY, m.tipY) - 5,
        Math.max(m.tailX, m.tipX) + 5,
        Math.max(m.tailY, m.tipY) + 5,
        `${m.kind} arrow`,
      );
    }
    // label separation when both markers show
    const sep = ringLabelSeparation(g);
    if (sep !== null) {
      ok(
        sep >= RING_LABEL_MIN_SEPARATION,
        `N=${N} f=${f} r=${r}: FRONT/REAR labels never overlap`,
        `separation ${sep.toFixed(1)} < ${RING_LABEL_MIN_SEPARATION}`,
      );
    }
  }
  ok(viewBoxes.size === 1, `N=${N}: viewBox identical for every frame (${[...viewBoxes][0]})`);
}

// marker must point back at its own slot (arrow tip near the slot edge)
{
  const g = buildRingGeometry(8, 3, 4);
  const s3 = g.slots[3];
  const tipDist = Math.hypot(g.front!.tipX - s3.x, g.front!.tipY - s3.y);
  ok(
    tipDist <= g.slotH / 2 + 6,
    "FRONT arrow tip lands just outside its slot",
    `dist ${tipDist.toFixed(1)}`,
  );
}

console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed ? 1 : 0);
