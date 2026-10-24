"use client";

import { useEffect, useRef, useState } from "react";
import { ListPlus, Plus, RotateCw } from "lucide-react";
import {
  TreeGraph,
  type TreeGraphNode,
  type TreeGraphNodeState,
} from "./tree-graph";

/**
 * AVL rebalance playground (ch10) — mounts where the original notes
 * promised an interactive playground that never survived the
 * migration (an empty <svg id="treeSvg">).
 *
 * Every insert plays the plain BST walk first (one comparison at a
 * time), then recomputes heights and balance factors: when the lowest
 * unbalanced ancestor z hits BF ±2 the status line names the case
 * (LL / RR / LR / RL) and the rotation(s) glide the tree back into
 * shape via TreeGraph position transitions. Every node wears its
 * current BF as a badge — ok green within ±1, warn amber at ±2, danger
 * beyond. Deterministic empty SSR tree; ≤ 12 nodes; duplicates
 * rejected like any BST.
 */

interface TNode {
  key: number;
  left: TNode | null;
  right: TNode | null;
}

type Tone = "default" | "ok" | "warn" | "danger";
interface Msg {
  text: string;
  tone: Tone;
}
type States = Record<string, TreeGraphNodeState>;

interface Snap {
  at: number;
  tree: TNode | null;
  states: States;
  msg: Msg;
}

const LIMIT = 12; // node cap for readability
const STEP = 450; // ms per comparison on the walk down
const SETTLE = 700; // ms to let a result sink in
const PRESET = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // ascending stress sequence
const FAST = 280; // ms per comparison for the preset demo

const btnPrimary =
  "inline-flex items-center gap-1.5 rounded-md bg-ink text-paper px-3 h-9 text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:pointer-events-none";
const btnGhost =
  "inline-flex items-center gap-1.5 rounded-md border border-hairline text-ink px-3 h-9 text-sm hover:border-hairline-strong transition-colors disabled:opacity-50 disabled:pointer-events-none";
const inputCls =
  "border border-hairline rounded-md bg-paper px-3 h-9 font-mono text-sm text-ink w-44 placeholder:text-ink-faint disabled:opacity-50";

const toneCls = (tone: Tone) =>
  tone === "ok"
    ? "text-ok"
    : tone === "danger"
      ? "text-danger"
      : tone === "warn"
        ? "text-warn"
        : "text-ink-muted";

/* ------------------------------------------------------------------ */
/* Pure AVL logic (exported for the /tmp verification harness)          */
/*                                                                     */
/* Chapter convention (ch10): height of an empty subtree = −1, height  */
/* of a leaf = 0. BF = height(left) − height(right).                    */
/* ------------------------------------------------------------------ */

/** Height in edges — leaf 0, empty −1. */
export function heightOf(n: TNode | null): number {
  return n ? 1 + Math.max(heightOf(n.left), heightOf(n.right)) : -1;
}

export function bfOf(n: TNode): number {
  return heightOf(n.left) - heightOf(n.right);
}

/** Unicode-signed balance factor: +2 / 0 / −1 … */
export function fmtBF(b: number): string {
  return b > 0 ? `+${b}` : b < 0 ? `−${-b}` : "0";
}

export function walkPath(
  root: TNode | null,
  key: number
): { path: number[]; found: boolean } {
  const path: number[] = [];
  let n = root;
  while (n) {
    path.push(n.key);
    if (key === n.key) return { path, found: true };
    n = key < n.key ? n.left : n.right;
  }
  return { path, found: false };
}

/** Persistent BST insert (no duplicates). */
export function insertTree(
  node: TNode | null,
  key: number
): { tree: TNode; dup: boolean } {
  if (!node) return { tree: { key, left: null, right: null }, dup: false };
  if (key === node.key) return { tree: node, dup: true };
  if (key < node.key) {
    const r = insertTree(node.left, key);
    return { tree: { ...node, left: r.tree }, dup: r.dup };
  }
  const r = insertTree(node.right, key);
  return { tree: { ...node, right: r.tree }, dup: r.dup };
}

export function countTree(n: TNode | null): number {
  return n ? 1 + countTree(n.left) + countTree(n.right) : 0;
}

export function findNode(root: TNode, key: number): TNode | null {
  let n: TNode | null = root;
  while (n) {
    if (key === n.key) return n;
    n = key < n.key ? n.left : n.right;
  }
  return null;
}

/**
 * After inserting into `root`, the only nodes whose BF can have changed
 * are the ancestors of the new leaf — `path` holds them root-first.
 * Returns the LOWEST one (nearest the new leaf) with |BF| ≥ 2, or null.
 */
export function lowestUnbalanced(
  root: TNode,
  path: number[]
): { key: number; bf: number } | null {
  for (let i = path.length - 1; i >= 0; i--) {
    const n = findNode(root, path[i]);
    if (!n) continue;
    const b = bfOf(n);
    if (Math.abs(b) >= 2) return { key: n.key, bf: b };
  }
  return null;
}

/** Right rotation at `z`: its left child y rises, z drops to the right. */
export function rotateRight(z: TNode): TNode {
  const y = z.left;
  if (!y) return z;
  return {
    key: y.key,
    left: y.left,
    right: { key: z.key, left: y.right, right: z.right },
  };
}

/** Left rotation at `z`: its right child y rises, z drops to the left. */
export function rotateLeft(z: TNode): TNode {
  const y = z.right;
  if (!y) return z;
  return {
    key: y.key,
    left: { key: z.key, left: z.left, right: y.left },
    right: y.right,
  };
}

/** Persistent replacement of the subtree rooted at `key`. */
export function replaceSubtree(root: TNode, key: number, sub: TNode): TNode {
  if (root.key === key) return sub;
  if (key < root.key) {
    return { ...root, left: root.left ? replaceSubtree(root.left, key, sub) : null };
  }
  return {
    ...root,
    right: root.right ? replaceSubtree(root.right, key, sub) : null,
  };
}

export interface Rebalance {
  tree: TNode;
  caseName: "LL" | "RR" | "LR" | "RL";
  /** Tree after the child rotation — double cases only. */
  mid: TNode | null;
  yKey: number;
  xKey: number;
}

/**
 * Fixes the subtree rooted at zKey (BF ±2). Single cases rotate once at
 * z; double cases rotate at y FIRST (returning the intermediate `mid`)
 * and then at z. Heights come out |BF| ≤ 1 everywhere.
 */
export function rebalance(root: TNode, zKey: number): Rebalance {
  const z = findNode(root, zKey);
  if (!z) return { tree: root, caseName: "LL", mid: null, yKey: 0, xKey: 0 };
  const leftHeavy = bfOf(z) > 0;
  const y = leftHeavy ? z.left : z.right;
  if (!y) return { tree: root, caseName: "LL", mid: null, yKey: 0, xKey: 0 };
  const yLeft = bfOf(y) >= 0;

  if (leftHeavy && yLeft) {
    // LL — one right rotation at z
    return {
      tree: replaceSubtree(root, zKey, rotateRight(z)),
      caseName: "LL",
      mid: null,
      yKey: y.key,
      xKey: y.left ? y.left.key : y.key,
    };
  }
  if (!leftHeavy && !yLeft) {
    // RR — one left rotation at z
    return {
      tree: replaceSubtree(root, zKey, rotateLeft(z)),
      caseName: "RR",
      mid: null,
      yKey: y.key,
      xKey: y.right ? y.right.key : y.key,
    };
  }
  if (leftHeavy) {
    // LR — left rotation at y, then right rotation at z
    const xKey = y.right ? y.right.key : y.key;
    const mid = replaceSubtree(root, y.key, rotateLeft(y));
    const z2 = findNode(mid, zKey);
    const tree = z2 ? replaceSubtree(mid, zKey, rotateRight(z2)) : mid;
    return { tree, caseName: "LR", mid, yKey: y.key, xKey };
  }
  // RL — right rotation at y, then left rotation at z
  const xKey = y.left ? y.left.key : y.key;
  const mid = replaceSubtree(root, y.key, rotateRight(y));
  const z2 = findNode(mid, zKey);
  const tree = z2 ? replaceSubtree(mid, zKey, rotateLeft(z2)) : mid;
  return { tree, caseName: "RL", mid, yKey: y.key, xKey };
}

/* ---------- presentation helpers ---------- */

function toGraph(n: TNode): TreeGraphNode {
  const kids: TreeGraphNode[] = [];
  if (n.left) kids.push(toGraph(n.left));
  if (n.right) kids.push(toGraph(n.right));
  const b = bfOf(n);
  const tone: "ok" | "warn" | "danger" =
    Math.abs(b) <= 1 ? "ok" : Math.abs(b) === 2 ? "warn" : "danger";
  return {
    key: String(n.key),
    label: String(n.key),
    badge: fmtBF(b),
    badgeTone: tone,
    children: kids.length ? kids : undefined,
  };
}

/** `37 < 50 → go left` — the comparison line shown during walks. */
function cmpLine(target: number, at: number): string {
  const left = target < at;
  return `${target} ${left ? "<" : ">"} ${at} → go ${left ? "left" : "right"}`;
}

function rotationPlan(r: Rebalance, zKey: number): string {
  switch (r.caseName) {
    case "LL":
      return `right rotation at ${zKey}`;
    case "RR":
      return `left rotation at ${zKey}`;
    case "LR":
      return `left rotation at ${r.yKey}, then right rotation at ${zKey}`;
    default:
      return `right rotation at ${r.yKey}, then left rotation at ${zKey}`;
  }
}

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export function AvlInsertViz({ caption }: { caption?: string }) {
  const [tree, setTree] = useState<TNode | null>(null);
  const treeRef = useRef<TNode | null>(null); // committed truth
  const [states, setStates] = useState<States>({});
  const [input, setInput] = useState("");
  const [msg, setMsg] = useState<Msg>({
    text: "Insert keys (space separated) — each one walks down like a plain BST, then the tree rebalances itself.",
    tone: "default",
  });
  const [busy, setBusy] = useState(false);
  const busyRef = useRef(false);
  const timers = useRef<number[]>([]);
  const token = useRef(0); // opRef pattern: stale timers can never commit

  const cancel = () => {
    token.current += 1;
    timers.current.forEach((t) => clearTimeout(t));
    timers.current = [];
  };
  const later = (fn: () => void, ms: number) => {
    const my = token.current;
    timers.current.push(
      window.setTimeout(() => {
        if (my === token.current) fn();
      }, ms)
    );
  };
  useEffect(
    () => () => {
      cancel();
    },
    []
  );

  /** Plays a snapshot list, busy-locks the controls until `endAt`. */
  const play = (snaps: Snap[], endAt: number) => {
    busyRef.current = true;
    setBusy(true);
    cancel();
    for (const s of snaps) {
      later(() => {
        setTree(s.tree);
        setStates(s.states);
        setMsg(s.msg);
      }, s.at);
    }
    later(() => {
      busyRef.current = false;
      setBusy(false);
    }, endAt);
  };

  const parseKeys = (s: string): { valid: number[]; invalid: number } => {
    const toks = s.split(/[\s,]+/).filter(Boolean);
    const valid: number[] = [];
    let invalid = 0;
    for (const tk of toks) {
      const v = Number(tk);
      if (Number.isInteger(v) && v >= -99 && v <= 999) valid.push(v);
      else invalid++;
    }
    return { valid, invalid };
  };

  /** Builds the full snapshot timeline for a list of keys. */
  const buildTimeline = (
    start: TNode | null,
    keys: number[],
    stepMs: number,
    invalidCount = 0
  ): { snaps: Snap[]; endAt: number; tree: TNode | null } => {
    let work = start;
    let at = 0;
    const snaps: Snap[] = [];
    const notes: string[] = [];
    let added = 0;
    let limited = 0;
    const dups: number[] = [];
    let lastAdded: number | null = null;

    for (const k of keys) {
      if (work && countTree(work) >= LIMIT) {
        limited++;
        continue;
      }
      const { path, found } = walkPath(work, k);
      if (found) {
        dups.push(k);
        snaps.push({
          at,
          tree: work,
          states: { [String(k)]: "error" },
          msg: { text: `Duplicate ${k} — BSTs store unique keys`, tone: "warn" },
        });
        at += stepMs * 1.5;
        continue;
      }

      /* 1 — the plain BST walk */
      path.forEach((nk, i) => {
        const st: States = {};
        path.slice(0, i).forEach((p) => {
          st[String(p)] = "path";
        });
        st[String(nk)] = "visiting";
        snaps.push({
          at: at + i * stepMs,
          tree: work,
          states: st,
          msg: { text: cmpLine(k, nk), tone: "default" },
        });
      });
      at += path.length * stepMs;

      /* 2 — the leaf lands (this is the broken moment when it tilts) */
      work = insertTree(work, k).tree;
      const inserted: States = { [String(k)]: "found" };
      path.forEach((p) => {
        inserted[String(p)] = "path";
      });
      snaps.push({
        at,
        tree: work,
        states: inserted,
        msg: {
          text:
            path.length === 0
              ? `Tree was empty — ${k} becomes the root (depth 0)`
              : `Inserted ${k} (depth ${path.length})`,
          tone: "ok",
        },
      });
      at += stepMs;
      added++;
      lastAdded = k;

      /* 3 — heights & balance factors, then the case + rotation(s) */
      const ub = work ? lowestUnbalanced(work, path) : null;
      if (!ub || !work) {
        snaps.push({
          at,
          tree: work,
          states: inserted,
          msg: {
            text: "All balance factors within {−1, 0, +1} — no rotation needed.",
            tone: "ok",
          },
        });
        at += stepMs;
        continue;
      }

      const r = rebalance(work, ub.key);
      snaps.push({
        at,
        tree: work,
        states: { [String(ub.key)]: "error" },
        msg: {
          text: `Insert ${k}: BF(${ub.key}) = ${fmtBF(ub.bf)} → ${r.caseName} case → ${rotationPlan(r, ub.key)}`,
          tone: "danger",
        },
      });
      at += stepMs * 1.6; // let the broken moment register

      if (r.mid) {
        /* double case — two sequential rotations */
        snaps.push({
          at,
          tree: r.mid,
          states: { [String(r.xKey)]: "visiting" },
          msg: {
            text: `Rotation 1 — ${r.caseName === "LR" ? "left" : "right"} at ${r.yKey}: ${r.xKey} rises, the bend straightens (BF(${ub.key}) is still ${fmtBF(ub.bf)})`,
            tone: "warn",
          },
        });
        at += stepMs * 1.8;
        work = r.tree;
        snaps.push({
          at,
          tree: work,
          states: { [String(r.xKey)]: "found" },
          msg: {
            text: `Rotation 2 — ${r.caseName === "LR" ? "right" : "left"} at ${ub.key} → ${r.xKey} heads the subtree · all |BF| ≤ 1`,
            tone: "ok",
          },
        });
        at += SETTLE;
      } else {
        /* single case — one rotation */
        work = r.tree;
        snaps.push({
          at,
          tree: work,
          states: { [String(r.yKey)]: "found" },
          msg: {
            text: `${r.caseName} — ${r.caseName === "LL" ? "right" : "left"} rotation at ${ub.key} → ${r.yKey} now heads the subtree · all |BF| ≤ 1`,
            tone: "ok",
          },
        });
        at += SETTLE;
      }
      snaps.push({
        at,
        tree: work,
        states: {},
        msg: {
          text: `Insert ${k} complete — height ${work ? heightOf(work) : 0} (edges) · every |BF| ≤ 1.`,
          tone: "ok",
        },
      });
      at += stepMs;
    }

    if (added > 1) notes.push(`Inserted ${added} keys.`);
    if (dups.length) notes.push(`Duplicates rejected: ${dups.join(", ")}.`);
    if (limited) notes.push(`Node limit (${LIMIT}) reached — press Reset to start over.`);
    if (invalidCount)
      notes.push(`${invalidCount} token(s) skipped (whole numbers from −99 to 999).`);
    if (notes.length) {
      snaps.push({
        at,
        tree: work,
        states: lastAdded !== null ? { [String(lastAdded)]: "found" } : {},
        msg: { text: notes.join(" "), tone: added ? "ok" : "warn" },
      });
      at += 120;
    }
    return { snaps, endAt: at, tree: work };
  };

  const insertKeys = (keys: number[], invalidCount: number, stepMs = STEP) => {
    if (busyRef.current) return;
    if (!keys.length) {
      if (invalidCount)
        setMsg({
          text: "Enter whole numbers separated by spaces (e.g. 50 25 10).",
          tone: "warn",
        });
      return;
    }
    const { snaps, endAt, tree } = buildTimeline(
      treeRef.current,
      keys,
      stepMs,
      invalidCount
    );
    treeRef.current = tree; // commit synchronously — cancel-safe truth
    play(snaps, endAt);
  };

  const onInsert = () => {
    if (busyRef.current) return;
    const { valid, invalid } = parseKeys(input);
    setInput("");
    insertKeys(valid, invalid);
  };

  const onPreset = () => {
    if (busyRef.current) return;
    cancel();
    /* the stress demo always starts from a fresh tree so it produces
       the classic ascending-1…10 result (root 4) */
    treeRef.current = null;
    setTree(null);
    setStates({});
    insertKeys([...PRESET], 0, FAST);
  };

  const onReset = () => {
    if (busyRef.current) return;
    cancel();
    treeRef.current = null;
    setTree(null);
    setStates({});
    setInput("");
    setMsg({
      text: "Reset — insert keys and watch the tree rebalance itself.",
      tone: "default",
    });
  };

  const count = tree ? countTree(tree) : 0;

  return (
    <figure className="print-avoid-break my-6 rounded-md border border-hairline bg-paper-raised p-4 viz-shell">
      <div className="no-print flex flex-wrap items-center justify-center gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") onInsert();
          }}
          disabled={busy}
          aria-label="AVL keys (space separated)"
          placeholder="e.g. 50 25 10"
          className={inputCls}
        />
        <button type="button" onClick={onInsert} disabled={busy} className={btnPrimary}>
          <Plus className="size-4" aria-hidden />
          Insert
        </button>
        <button type="button" onClick={onPreset} disabled={busy} className={btnGhost}>
          <ListPlus className="size-4" aria-hidden />
          Insert 1…10
        </button>
        <button type="button" onClick={onReset} disabled={busy} className={btnGhost}>
          <RotateCw className="size-4" aria-hidden />
          Reset
        </button>
      </div>

      <div className="mt-3">
        {tree ? (
          <TreeGraph
            root={toGraph(tree)}
            nodeStates={states}
            ariaLabel={`AVL tree with ${count} of at most ${LIMIT} nodes, every node badged with its balance factor`}
            className="mx-auto h-auto w-full max-h-[360px]"
          />
        ) : (
          <div className="rounded-md border border-dashed border-hairline py-12 text-center text-sm text-ink-faint">
            Empty AVL tree — insert keys above (try <span className="font-mono">50 25 10</span>) and
            watch the rotations fire.
          </div>
        )}
      </div>

      <div
        aria-live="polite"
        className={`mt-3 min-h-[1.5rem] text-center text-sm ${toneCls(msg.tone)}`}
      >
        {msg.text}
      </div>

      {caption ? (
        <figcaption className="mt-1 border-t border-hairline pt-2 text-center text-caption italic text-ink-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
