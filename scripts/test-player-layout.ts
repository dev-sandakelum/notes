/**
 * LAYOUT STABILITY REGRESSION TEST (Task R2-5).
 *
 * Plays every StepPlayer route frame-by-frame (and the circular-queue
 * wrap scenario slot-by-slot) and asserts:
 *
 *   1. the player card's (figure.viz-shell) height NEVER changes
 *      between frames of the same recording;
 *   2. the controls bar's bounding box (top + height) NEVER changes;
 *   3. additionally for postfix: the same holds for the error
 *      expressions (underflow / leftovers).
 *
 * "Playwright or similar": drives a real Chromium via the agent-browser
 * CLI (CDP), same harness as scripts/final-sweep.ts. Requires a running
 * server (dev or prod standalone); BASE env overrides the default
 * http://localhost:3000.
 *
 * Usage: bun scripts/test-player-layout.ts
 */
const BASE = process.env.BASE ?? "http://localhost:3000";

const { execSync } = await import("node:child_process");
const sh = (cmd: string) => {
  try {
    return execSync(cmd, { encoding: "utf8", timeout: 180000 }).trim();
  } catch (e) {
    return `ERR: ${(e.stdout ?? e.message ?? "").toString().slice(0, 300)}`;
  }
};

/** One eval in the page; returns parsed JSON or the raw string.
 *  (agent-browser's CLI arg chokes on newlines — always compact.) */
const ev = (js: string) => {
  const oneLine = js.replace(/\n\s*/g, " ");
  const out = sh(`agent-browser eval ${JSON.stringify(oneLine)}`);
  if (out.startsWith('"') && out.endsWith('"')) {
    try {
      return JSON.parse(JSON.parse(out));
    } catch {
      return out;
    }
  }
  return out;
};

const WIDTHS = [375, 768];

/**
 * Steps through every frame of the CURRENT recording with the Step
 * button, recording the figure height + controls box each frame.
 * Returns { frames, deltaHeight, controlVariants }.
 */
const STEP_SWEEP = `(async () => {
  const fig = document.querySelector('figure.viz-shell');
  if (!fig) return JSON.stringify({ error: 'no figure' });
  const controls = fig.querySelector('.mt-3.flex.flex-wrap');
  const stepBtn = () => [...document.querySelectorAll('button')]
    .find(x => x.getAttribute('aria-label') === 'Step forward');
  const hs = []; const ct = [];
  const sweep = async () => {
    for (let i = 0; i < 80; i++) {
      const b = stepBtn();
      if (!b || b.disabled) break;
      b.click();
      await new Promise(r => setTimeout(r, 70));
      hs.push(Math.round(fig.getBoundingClientRect().height));
      if (controls) {
        const cr = controls.getBoundingClientRect();
        ct.push(Math.round(cr.top) + '/' + Math.round(cr.height));
      }
    }
  };
  await sweep();
  if (!hs.length) return JSON.stringify({ error: 'no frames' });
  return JSON.stringify({
    frames: hs.length,
    delta: Math.max(...hs) - Math.min(...hs),
    ctrlVariants: [...new Set(ct)].length,
  });
})()`;

/** Circular queue: scrub the whole wrap-around scenario. */
const CQ_SWEEP = `(async () => {
  const fig = document.querySelector('figure.viz-shell');
  if (!fig) return JSON.stringify({ error: 'no figure' });
  const controls = fig.querySelector('.mt-3.flex.flex-wrap');
  const btn = [...document.querySelectorAll('button')]
    .find(b => b.textContent.includes('Play wrap-around'));
  if (btn) { btn.click(); await new Promise(r => setTimeout(r, 300)); }
  const range = [...document.querySelectorAll('input[type=range]')]
    .find(r => r.getAttribute('aria-label')?.includes('Scrub'));
  if (!range) return JSON.stringify({ error: 'no scrubber' });
  const setter = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype, 'value').set;
  const hs = []; const ct = [];
  for (let i = 0; i <= Number(range.max); i++) {
    setter.call(range, String(i));
    range.dispatchEvent(new Event('input', { bubbles: true }));
    await new Promise(r => setTimeout(r, 25));
    hs.push(Math.round(fig.getBoundingClientRect().height));
    if (controls) {
      const cr = controls.getBoundingClientRect();
      ct.push(Math.round(cr.top) + '/' + Math.round(cr.height));
    }
  }
  if (!hs.length) return JSON.stringify({ error: 'no frames' });
  return JSON.stringify({
    frames: hs.length,
    delta: Math.max(...hs) - Math.min(...hs),
    ctrlVariants: [...new Set(ct)].length,
  });
})()`;

/** Load a postfix expression into the input and submit. */
const SET_EXPR = (expr: string) => `(async () => {
  const input = document.getElementById('postfix-expr');
  if (!input) return JSON.stringify({ error: 'no input' });
  const setter = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype, 'value').set;
  setter.call(input, ${JSON.stringify(expr)});
  input.dispatchEvent(new Event('input', { bubbles: true }));
  input.closest('form').dispatchEvent(
    new Event('submit', { bubbles: true, cancelable: true }));
  await new Promise(r => setTimeout(r, 350));
  return 'ok';
})()`;

interface Case {
  route: string;
  label: string;
  /** null = use the step sweep; else a custom page-setup eval. */
  setup?: string;
}

const CASES: Case[] = [
  { route: "/notes/play/postfix-evaluation", label: "postfix (default 5 3 + 8 2 - *)" },
  { route: "/notes/play/postfix-evaluation", label: "postfix (underflow 5 +)", setup: "SET_EXPR:5 +" },
  { route: "/notes/play/postfix-evaluation", label: "postfix (leftovers 5 3)", setup: "SET_EXPR:5 3" },
  { route: "/notes/play/postfix-evaluation", label: "postfix (6 2 / 3 - 4 +)", setup: "SET_EXPR:6 2 / 3 - 4 +" },
  { route: "/notes/play/infix-to-postfix", label: "infix to postfix" },
  { route: "/notes/play/tree-traversals", label: "traversal trace" },
  { route: "/notes/play/notation-builder", label: "notation builder" },
  { route: "/notes/play/linked-list-insert", label: "linked list (default recording)" },
  { route: "/notes/play/circular-queue", label: "circular queue (wrap scenario)" },
];

let failures = 0;
let totalFrames = 0;
console.log(
  "LAYOUT STABILITY (height + controls bbox constant across every frame)\n",
);

for (const c of CASES) {
  const sweepJs = c.route.includes("circular-queue") ? CQ_SWEEP : STEP_SWEEP;
  for (const w of WIDTHS) {
    sh("agent-browser set viewport " + w + " 800");
    sh(`agent-browser open ${BASE}${c.route}`);
    sh("agent-browser wait --load networkidle");
    // silence the first-visit splash for this session
    ev(
      `try{sessionStorage.setItem('notes-splash-shown','1');document.documentElement.dataset.splash='off';document.querySelector('.splash-root')?.remove();}catch(e){}; 'ok'`,
    );
    if (c.setup?.startsWith("SET_EXPR:")) {
      ev(SET_EXPR(c.setup.slice("SET_EXPR:".length)));
    }
    const res = ev(sweepJs) as Record<string, unknown>;
    const frames = typeof res?.frames === "number" ? res.frames : 0;
    const delta = typeof res?.delta === "number" ? res.delta : -1;
    const ctrl = typeof res?.ctrlVariants === "number" ? res.ctrlVariants : -1;
    totalFrames += frames;
    const ok = frames > 0 && delta === 0 && ctrl === 1;
    if (!ok) failures++;
    console.log(
      (ok ? "ok  " : "FAIL").padEnd(5),
      c.label.padEnd(40),
      `${w}px`.padStart(6),
      `frames ${String(frames).padStart(3)}`,
      `Δheight ${String(delta).padStart(3)}px`,
      `controls variants ${ctrl}`,
      ok ? "" : `  <-- ${JSON.stringify(res).slice(0, 160)}`,
    );
  }
}

console.log(
  `\n${totalFrames} frames checked across ${CASES.length} players x ${WIDTHS.length} widths`,
);
if (failures === 0) {
  console.log("ALL LAYOUT STABILITY CHECKS PASSED");
  process.exit(0);
} else {
  console.log(`${failures} CHECK(S) FAILED`);
  process.exit(1);
}
