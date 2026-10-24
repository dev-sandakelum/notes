"use client";

import { useEffect, useState } from "react";
import { Pause, Play, RotateCw, SkipForward } from "lucide-react";
import {
  TreeGraph,
  type TreeGraphNode,
  type TreeGraphNodeState,
} from "./tree-graph";

/**
 * Rotation case player (ch10) — replaces the original LL/RR figure
 * whose labels collided, whose x node clipped at the viewBox edge and
 * whose summary line ran off the canvas.
 *
 * One pill per case (LL / RR / LR / RL); each case plays a fixed step
 * list — before → highlight z → highlight y → highlight x → the
 * rotation(s) → after — on a single <TreeGraph /> whose stable node
 * keys (z, y, x, t0–t3) make every restructure glide into place.
 * Double cases pause on the intermediate state between their two
 * rotations. z renders danger-red, y violet, x green, the four
 * placeholder subtrees T₀–T₃ dim.
 */

type RotCase = "LL" | "RR" | "LR" | "RL";

interface NTree {
  k: string;
  l?: NTree;
  r?: NTree;
}

interface Badge {
  text: string;
  tone: "ok" | "warn" | "danger";
}

interface RotStep {
  label: string;
  desc: string;
  tree: NTree;
  /** Node pulsed during this step. */
  focus?: "z" | "y" | "x";
  badges?: Record<string, Badge>;
  dwell?: number;
}

interface RotCaseDef {
  blurb: string;
  steps: RotStep[];
}

/* ------------------------------------------------------------------ */
/* Structures                                                          */
/* ------------------------------------------------------------------ */

const t = (k: string, l?: NTree, r?: NTree): NTree => ({ k, l, r });

const T0 = t("t0");
const T1 = t("t1");
const T2 = t("t2");
const T3 = t("t3");

// Single cases: z(y(x(T0,T1),T2),T3) → y(x(T0,T1),z(T2,T3))
const LL_BEFORE = t("z", t("y", t("x", T0, T1), T2), T3);
const LL_AFTER = t("y", t("x", T0, T1), t("z", T2, T3));

// z(T0,y(T1,x(T2,T3))) → y(z(T0,T1),x(T2,T3))
const RR_BEFORE = t("z", T0, t("y", T1, t("x", T2, T3)));
const RR_AFTER = t("y", t("z", T0, T1), t("x", T2, T3));

// LR: z(y(T0,x(T1,T2)),T3) → z(x(y(T0,T1),T2),T3) → x(y(T0,T1),z(T2,T3))
const LR_BEFORE = t("z", t("y", T0, t("x", T1, T2)), T3);
const LR_MID = t("z", t("x", t("y", T0, T1), T2), T3);
const LR_AFTER = t("x", t("y", T0, T1), t("z", T2, T3));

// RL: z(T0,y(x(T1,T2),T3)) → z(T0,x(T1,y(T2,T3))) → x(z(T0,T1),y(T2,T3))
const RL_BEFORE = t("z", T0, t("y", t("x", T1, T2), T3));
const RL_MID = t("z", T0, t("x", T1, t("y", T2, T3)));
const RL_AFTER = t("x", t("z", T0, T1), t("y", T2, T3));

/* ------------------------------------------------------------------ */
/* Case scripts                                                        */
/* ------------------------------------------------------------------ */

const BADGE_LL_BEFORE = {
  z: { text: "+2", tone: "danger" as const },
  y: { text: "+1", tone: "warn" as const },
  x: { text: "0", tone: "ok" as const },
};
const BADGE_RR_BEFORE = {
  z: { text: "−2", tone: "danger" as const },
  y: { text: "−1", tone: "warn" as const },
  x: { text: "0", tone: "ok" as const },
};
const BADGE_AFTER = (root: string, a: string, b: string) => ({
  [root]: { text: "0", tone: "ok" as const },
  [a]: { text: "0", tone: "ok" as const },
  [b]: { text: "0", tone: "ok" as const },
});

const CASES: Record<RotCase, RotCaseDef> = {
  LL: {
    blurb:
      "Insert into the LEFT subtree of the LEFT child (z → y → x all left). " +
      "BF(z) = +2, BF(y) = +1. One RIGHT rotation at z: y becomes the new root of " +
      "this subtree, z rotates down-right, and y's right child T₂ passes to z's " +
      "left. Result: balanced.",
    steps: [
      {
        label: "Before",
        desc: "The new key landed in the LEFT subtree of z's LEFT child — the z → y → x path leans left, left. BF(z) = +2, BF(y) = +1.",
        tree: LL_BEFORE,
        badges: BADGE_LL_BEFORE,
      },
      {
        label: "Highlight z",
        desc: "z is the lowest unbalanced ancestor of the new node: BF(z) = +2 — the LEFT side is two levels taller than T₃.",
        tree: LL_BEFORE,
        badges: BADGE_LL_BEFORE,
        focus: "z",
      },
      {
        label: "Highlight y",
        desc: "y = z's LEFT child — the heavy side. BF(y) = +1 ≥ 0, so the heavy grandchild is also on the left: a straight left line → LL case → one RIGHT rotation cures it.",
        tree: LL_BEFORE,
        badges: BADGE_LL_BEFORE,
        focus: "y",
      },
      {
        label: "Highlight x",
        desc: "x = the child of y on the inserted side — the new key landed inside x's subtree (x is the new leaf itself when BF(x) = 0).",
        tree: LL_BEFORE,
        badges: BADGE_LL_BEFORE,
        focus: "x",
      },
      {
        label: "RIGHT rotation at z",
        desc: "y rises to head the subtree, z swings down to y's RIGHT, and y's old right child T₂ is handed to z as its new LEFT child. T₀, T₁ and T₃ stay put.",
        tree: LL_AFTER,
        badges: BADGE_LL_BEFORE,
        dwell: 2600,
      },
      {
        label: "After",
        desc: "The subtree rooted at y is balanced — |BF| ≤ 1 at every node (the two lower BFs are 0 or ±1 depending on which subtree grew). Nothing outside the subtree moved.",
        tree: LL_AFTER,
        badges: BADGE_AFTER("y", "x", "z"),
      },
    ],
  },
  RR: {
    blurb:
      "Insert into the RIGHT subtree of the RIGHT child (z → y → x all right). " +
      "BF(z) = −2, BF(y) = −1. One LEFT rotation at z: y becomes the new root of " +
      "this subtree, z rotates down-left, and y's left child T₁ passes to z's " +
      "right. Result: balanced.",
    steps: [
      {
        label: "Before",
        desc: "The new key landed in the RIGHT subtree of z's RIGHT child — the z → y → x path leans right, right. BF(z) = −2, BF(y) = −1.",
        tree: RR_BEFORE,
        badges: BADGE_RR_BEFORE,
      },
      {
        label: "Highlight z",
        desc: "z is the lowest unbalanced ancestor of the new node: BF(z) = −2 — the RIGHT side is two levels taller than T₀.",
        tree: RR_BEFORE,
        badges: BADGE_RR_BEFORE,
        focus: "z",
      },
      {
        label: "Highlight y",
        desc: "y = z's RIGHT child — the heavy side. BF(y) = −1 ≤ 0, so the heavy grandchild is also on the right: a straight right line → RR case → one LEFT rotation cures it.",
        tree: RR_BEFORE,
        badges: BADGE_RR_BEFORE,
        focus: "y",
      },
      {
        label: "Highlight x",
        desc: "x = the child of y on the inserted side — the new key landed inside x's subtree (x is the new leaf itself when BF(x) = 0).",
        tree: RR_BEFORE,
        badges: BADGE_RR_BEFORE,
        focus: "x",
      },
      {
        label: "LEFT rotation at z",
        desc: "y rises to head the subtree, z swings down to y's LEFT, and y's old left child T₁ is handed to z as its new RIGHT child. T₀, T₂ and T₃ stay put.",
        tree: RR_AFTER,
        badges: BADGE_RR_BEFORE,
        dwell: 2600,
      },
      {
        label: "After",
        desc: "The subtree rooted at y is balanced — |BF| ≤ 1 at every node (the two lower BFs are 0 or ±1 depending on which subtree grew). Nothing outside the subtree moved.",
        tree: RR_AFTER,
        badges: BADGE_AFTER("y", "z", "x"),
      },
    ],
  },
  LR: {
    blurb:
      "Insert into the RIGHT subtree of the LEFT child — the path z → y → x zig-zags. " +
      "BF(z) = +2, BF(y) = −1. Two rotations: first a LEFT rotation at y " +
      "straightens the zig-zag into a plain left-left line, then a RIGHT rotation " +
      "at z finishes the job. Result: x heads the subtree — balanced.",
    steps: [
      {
        label: "Before",
        desc: "The new key landed in the RIGHT subtree of z's LEFT child — the z → y → x path zig-zags (left, then right). BF(z) = +2, BF(y) = −1.",
        tree: LR_BEFORE,
        badges: {
          z: { text: "+2", tone: "danger" },
          y: { text: "−1", tone: "warn" },
          x: { text: "0", tone: "ok" },
        },
      },
      {
        label: "Highlight z",
        desc: "z is the lowest unbalanced ancestor of the new node: BF(z) = +2 — the LEFT side is two levels taller than T₃.",
        tree: LR_BEFORE,
        badges: {
          z: { text: "+2", tone: "danger" },
          y: { text: "−1", tone: "warn" },
          x: { text: "0", tone: "ok" },
        },
        focus: "z",
      },
      {
        label: "Highlight y",
        desc: "y = z's LEFT child (the heavy side), but BF(y) = −1 < 0 — the heavy grandchild sits on y's RIGHT. A zig-zag, not a straight line → LR case → TWO rotations: fix the bend first.",
        tree: LR_BEFORE,
        badges: {
          z: { text: "+2", tone: "danger" },
          y: { text: "−1", tone: "warn" },
          x: { text: "0", tone: "ok" },
        },
        focus: "y",
      },
      {
        label: "Highlight x",
        desc: "x = y's RIGHT child — the child of y on the inserted side, where the new key landed.",
        tree: LR_BEFORE,
        badges: {
          z: { text: "+2", tone: "danger" },
          y: { text: "−1", tone: "warn" },
          x: { text: "0", tone: "ok" },
        },
        focus: "x",
      },
      {
        label: "Rotation 1 (left at y)",
        desc: "LEFT rotation at y: x rises above y, y swings down-left, and x's old left child T₁ is handed to y as its new RIGHT child. The zig-zag is now a straight left line — but BF(z) is still +2.",
        tree: LR_MID,
        badges: { z: { text: "+2", tone: "danger" } },
        dwell: 3000,
      },
      {
        label: "Rotation 2 (right at z)",
        desc: "RIGHT rotation at z — exactly the LL move on the straightened line: x rises to head the subtree, z swings down to x's RIGHT, and x's old right child T₂ passes to z as its new LEFT child.",
        tree: LR_AFTER,
        badges: { z: { text: "+2", tone: "danger" } },
        dwell: 2600,
      },
      {
        label: "After",
        desc: "The subtree rooted at x is balanced — y below left, z below right, |BF| ≤ 1 at every node (the two outer BFs are 0 or ±1 depending on which subtree grew).",
        tree: LR_AFTER,
        badges: BADGE_AFTER("x", "y", "z"),
      },
    ],
  },
  RL: {
    blurb:
      "Insert into the LEFT subtree of the RIGHT child — the path z → y → x zig-zags " +
      "the other way. BF(z) = −2, BF(y) = +1. Two rotations: first a RIGHT rotation " +
      "at y, then a LEFT rotation at z. Result: x heads the subtree — balanced.",
    steps: [
      {
        label: "Before",
        desc: "The new key landed in the LEFT subtree of z's RIGHT child — the z → y → x path zig-zags (right, then left). BF(z) = −2, BF(y) = +1.",
        tree: RL_BEFORE,
        badges: {
          z: { text: "−2", tone: "danger" },
          y: { text: "+1", tone: "warn" },
          x: { text: "0", tone: "ok" },
        },
      },
      {
        label: "Highlight z",
        desc: "z is the lowest unbalanced ancestor of the new node: BF(z) = −2 — the RIGHT side is two levels taller than T₀.",
        tree: RL_BEFORE,
        badges: {
          z: { text: "−2", tone: "danger" },
          y: { text: "+1", tone: "warn" },
          x: { text: "0", tone: "ok" },
        },
        focus: "z",
      },
      {
        label: "Highlight y",
        desc: "y = z's RIGHT child (the heavy side), but BF(y) = +1 > 0 — the heavy grandchild sits on y's LEFT. A zig-zag, not a straight line → RL case → TWO rotations: fix the bend first.",
        tree: RL_BEFORE,
        badges: {
          z: { text: "−2", tone: "danger" },
          y: { text: "+1", tone: "warn" },
          x: { text: "0", tone: "ok" },
        },
        focus: "y",
      },
      {
        label: "Highlight x",
        desc: "x = y's LEFT child — the child of y on the inserted side, where the new key landed.",
        tree: RL_BEFORE,
        badges: {
          z: { text: "−2", tone: "danger" },
          y: { text: "+1", tone: "warn" },
          x: { text: "0", tone: "ok" },
        },
        focus: "x",
      },
      {
        label: "Rotation 1 (right at y)",
        desc: "RIGHT rotation at y: x rises above y, y swings down-right, and x's old right child T₂ is handed to y as its new LEFT child. The zig-zag is now a straight right line — but BF(z) is still −2.",
        tree: RL_MID,
        badges: { z: { text: "−2", tone: "danger" } },
        dwell: 3000,
      },
      {
        label: "Rotation 2 (left at z)",
        desc: "LEFT rotation at z — exactly the RR move on the straightened line: x rises to head the subtree, z swings down to x's LEFT, and x's old left child T₁ passes to z as its new RIGHT child.",
        tree: RL_AFTER,
        badges: { z: { text: "−2", tone: "danger" } },
        dwell: 2600,
      },
      {
        label: "After",
        desc: "The subtree rooted at x is balanced — z below left, y below right, |BF| ≤ 1 at every node (the two outer BFs are 0 or ±1 depending on which subtree grew).",
        tree: RL_AFTER,
        badges: BADGE_AFTER("x", "z", "y"),
      },
    ],
  },
};

const CASE_ORDER: RotCase[] = ["LL", "RR", "LR", "RL"];

const LABELS: Record<string, string> = {
  z: "z",
  y: "y",
  x: "x",
  t0: "T₀",
  t1: "T₁",
  t2: "T₂",
  t3: "T₃",
};

const BASE_STATE: Record<"z" | "y" | "x", TreeGraphNodeState> = {
  z: "error",
  y: "visiting",
  x: "found",
};

const DWELL = 1700;

const btnPrimary =
  "inline-flex items-center gap-1.5 rounded-md bg-ink text-paper px-3 h-9 text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:pointer-events-none";
const btnGhost =
  "inline-flex items-center gap-1.5 rounded-md border border-hairline text-ink px-3 h-9 text-sm hover:border-hairline-strong transition-colors disabled:opacity-50 disabled:pointer-events-none";

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export function AvlRotationsViz({ caption }: { caption?: string }) {
  const [caseName, setCaseName] = useState<RotCase>("LL");
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [pulseOn, setPulseOn] = useState(false);

  const def = CASES[caseName];
  const steps = def.steps;
  const current = steps[Math.min(step, steps.length - 1)];
  const atEnd = step >= steps.length - 1;

  /* Auto-advance while playing (timeout chaining, cleaned up on any change). */
  useEffect(() => {
    if (!playing || atEnd) return;
    const id = window.setTimeout(
      () => setStep((s) => Math.min(s + 1, steps.length - 1)),
      current.dwell ?? DWELL
    );
    return () => window.clearTimeout(id);
  }, [playing, step, atEnd, steps.length, current.dwell]);

  /* Playback stops by itself on the final step (rAF-deferred). */
  useEffect(() => {
    if (!playing || !atEnd) return;
    const raf = requestAnimationFrame(() => setPlaying(false));
    return () => cancelAnimationFrame(raf);
  }, [playing, atEnd]);

  /* Focus nodes pulse (error/visiting/found ↔ selected) until the step ends.
     pulseOn is only ever true while an interval is live — the cleanup
     below is the single place that resets it. */
  useEffect(() => {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (!current.focus || reduced) return;
    const id = window.setInterval(() => setPulseOn((v) => !v), 420);
    return () => {
      window.clearInterval(id);
      setPulseOn(false);
    };
  }, [caseName, step, current.focus]);

  const states: Record<string, TreeGraphNodeState> = {
    z: BASE_STATE.z,
    y: BASE_STATE.y,
    x: BASE_STATE.x,
    t0: "dim",
    t1: "dim",
    t2: "dim",
    t3: "dim",
  };
  if (current.focus) {
    states[current.focus] = pulseOn ? "selected" : BASE_STATE[current.focus];
  }

  const root = toGraph(current.tree, current.badges ?? {});

  const pickCase = (c: RotCase) => {
    setCaseName(c);
    setStep(0);
    setPlaying(false);
  };
  const playPause = () => {
    if (playing) {
      setPlaying(false);
      return;
    }
    if (atEnd) setStep(0); // replay from the top
    setPlaying(true);
  };
  const stepForward = () => {
    setPlaying(false);
    setStep((s) => Math.min(s + 1, steps.length - 1));
  };
  const reset = () => {
    setPlaying(false);
    setStep(0);
  };

  return (
    <figure className="print-avoid-break my-6 rounded-md border border-hairline bg-paper-raised p-4 viz-shell">
      {/* Case pills */}
      <div
        role="group"
        aria-label="Rotation case"
        className="no-print flex flex-wrap items-center justify-center gap-2"
      >
        {CASE_ORDER.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={caseName === c}
            onClick={() => pickCase(c)}
            className={
              caseName === c
                ? "h-9 rounded-md bg-ink px-4 font-mono text-sm font-bold text-paper transition-colors"
                : "h-9 rounded-md border border-hairline px-4 font-mono text-sm font-bold text-ink hover:border-hairline-strong transition-colors"
            }
          >
            {c}
          </button>
        ))}
      </div>

      <p className="mt-3 text-center text-sm leading-relaxed text-ink-muted">
        {def.blurb}
      </p>

      <div className="mt-2">
        <TreeGraph
          root={root}
          nodeStates={states}
          nodeRadius={24}
          levelHeight={88}
          siblingGap={78}
          ariaLabel={`${caseName} rotation diagram — nodes z, y and x with placeholder subtrees T0 to T3`}
          className="mx-auto h-auto w-full max-h-[310px]"
        />
      </div>

      {/* Step player controls */}
      <div className="no-print mt-2 flex flex-wrap items-center justify-center gap-2">
        <button type="button" onClick={playPause} className={btnPrimary}>
          {playing ? (
            <>
              <Pause className="size-4" aria-hidden />
              Pause
            </>
          ) : (
            <>
              <Play className="size-4" aria-hidden />
              {atEnd && step > 0 ? "Replay" : "Play"}
            </>
          )}
        </button>
        <button
          type="button"
          onClick={stepForward}
          disabled={atEnd}
          className={btnGhost}
        >
          <SkipForward className="size-4" aria-hidden />
          Step →
        </button>
        <button type="button" onClick={reset} className={btnGhost}>
          <RotateCw className="size-4" aria-hidden />
          Reset
        </button>
        <span className="ml-1 font-mono text-sm text-ink-muted">
          Step {Math.min(step, steps.length - 1) + 1} / {steps.length}
        </span>
      </div>

      {/* Step description */}
      <p
        aria-live="polite"
        className="mt-3 min-h-[1.5rem] border-t border-hairline pt-2 text-center text-sm text-ink-muted"
      >
        <span className="font-semibold text-ink">{current.label}:</span>{" "}
        {current.desc}
      </p>

      {/* Legend */}
      <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-danger bg-danger-soft px-2.5 py-0.5 text-xs text-danger">
          <span className="font-mono font-bold">z</span> unbalanced (BF ±2)
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-visit bg-visit-soft px-2.5 py-0.5 text-xs text-visit">
          <span className="font-mono font-bold">y</span> child of z, heavy side
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-ok bg-ok-soft px-2.5 py-0.5 text-xs text-ok">
          <span className="font-mono font-bold">x</span> child of y, inserted side
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-paper-raised px-2.5 py-0.5 text-xs text-ink-faint">
          <span className="font-mono font-bold">T₀–T₃</span> placeholder subtrees
        </span>
      </div>

      {caption ? (
        <figcaption className="mt-2 border-t border-hairline pt-2 text-center text-caption italic text-ink-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

function toGraph(node: NTree, badges: Record<string, Badge>): TreeGraphNode {
  const children: TreeGraphNode[] = [];
  if (node.l) children.push(toGraph(node.l, badges));
  if (node.r) children.push(toGraph(node.r, badges));
  const badge = badges[node.k];
  return {
    key: node.k,
    label: LABELS[node.k] ?? node.k,
    badge: badge?.text,
    badgeTone: badge?.tone,
    children: children.length ? children : undefined,
  };
}
