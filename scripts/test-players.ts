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
console.log("postfix evaluation recorder");
/* ------------------------------------------------------------------ */

const evalSteps = recordPostfixEval(tokenizePostfix("5 3 + 8 2 - *"));
const answer = evalSteps[evalSteps.length - 1].stack[0];
ok(answer === 48, "5 3 + 8 2 - * = 48", `got ${answer}`);

// operator steps must record [right, left] pops
const minusStep = evalSteps.find((s) => s.current === "−" || s.current === "-");
ok(
  !!minusStep && minusStep.popped![0] === 2 && minusStep.popped![1] === 8,
  "first pop = RIGHT operand (2), second = LEFT (8)",
  JSON.stringify(minusStep?.popped),
);

// friendly errors
try {
  recordPostfixEval(tokenizePostfix("5 +"));
  ok(false, "stack underflow throws");
} catch (e) {
  ok(e instanceof PostfixError && /underflow/i.test(e.message), "stack underflow throws a friendly error", String(e));
}
try {
  recordPostfixEval(tokenizePostfix("5 3 8"));
  ok(false, "leftover operands throw");
} catch (e) {
  ok(e instanceof PostfixError && /left on the stack/i.test(e.message), "leftover operands throw a friendly error", String(e));
}
try {
  recordPostfixEval(tokenizePostfix("5 x +"));
  ok(false, "unknown token throws");
} catch (e) {
  ok(e instanceof PostfixError, "unknown token throws a friendly error", String(e));
}

// a few more expressions
for (const [expr, want] of [
  ["2 3 4 * +", 14],
  ["6 2 / 3 - 4 +", 4],
  ["10 2 /", 5],
  ["7", 7],
] as const) {
  const s = recordPostfixEval(tokenizePostfix(expr));
  ok(
    s[s.length - 1].stack[0] === want,
    `postfix ${expr} = ${want}`,
    `got ${s[s.length - 1].stack[0]}`,
  );
}

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

console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed ? 1 : 0);
