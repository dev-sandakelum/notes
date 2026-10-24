"use client";

import { useEffect, useRef, useState } from "react";
import { Plus, RotateCw, Search, Trash2 } from "lucide-react";
import {
  TreeGraph,
  type TreeGraphNode,
  type TreeGraphNodeState,
} from "./tree-graph";
import { btnGhost, btnPrimary, inputCls, statusCls } from "./viz-ui";

/**
 * BST builder visualizer (rebuilt on the shared <TreeGraph /> renderer).
 * Insert walks every key down the tree one animated comparison at a
 * time; search animates the same walk (with two green pulses on a hit);
 * delete explains its three cases: leaf, one child (splice) and two
 * children (in-order successor). Deterministic initial tree, ≤ 15 nodes,
 * duplicates rejected with an error flash.
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

/** One animated frame: full tree + node states + status line text. */
interface Snap {
  at: number;
  tree: TNode | null;
  states: States;
  msg: Msg;
}

const LIMIT = 15; // node limit, like the original widget
const STEP = 450; // ms per comparison on the walk down
const SETTLE = 650; // ms to let a result sink in
const INITIAL_KEYS = [50, 30, 70, 20, 40, 60, 80]; // fixed insert order (SSR-safe)

/* ---------- pure tree helpers (persistent-style, immutable) ---------- */

function insertTree(node: TNode | null, key: number): { tree: TNode; dup: boolean } {
  if (!node) return { tree: { key, left: null, right: null }, dup: false };
  if (key === node.key) return { tree: node, dup: true };
  if (key < node.key) {
    const r = insertTree(node.left, key);
    return { tree: { ...node, left: r.tree }, dup: r.dup };
  }
  const r = insertTree(node.right, key);
  return { tree: { ...node, right: r.tree }, dup: r.dup };
}

function walkPath(root: TNode | null, key: number): { path: number[]; found: boolean } {
  const path: number[] = [];
  let n = root;
  while (n) {
    path.push(n.key);
    if (key === n.key) return { path, found: true };
    n = key < n.key ? n.left : n.right;
  }
  return { path, found: false };
}

function minKey(n: TNode): number {
  while (n.left) n = n.left;
  return n.key;
}

function deleteTree(
  node: TNode | null,
  key: number
): { tree: TNode | null; found: boolean; kind: "" | "leaf" | "one" | "two"; succ?: number } {
  if (!node) return { tree: null, found: false, kind: "" };
  if (key < node.key) {
    const r = deleteTree(node.left, key);
    if (!r.found) return { tree: node, found: false, kind: "" };
    return { tree: { ...node, left: r.tree }, found: true, kind: r.kind, succ: r.succ };
  }
  if (key > node.key) {
    const r = deleteTree(node.right, key);
    if (!r.found) return { tree: node, found: false, kind: "" };
    return { tree: { ...node, right: r.tree }, found: true, kind: r.kind, succ: r.succ };
  }
  if (!node.left && !node.right) return { tree: null, found: true, kind: "leaf" };
  if (!node.left) return { tree: node.right, found: true, kind: "one" };
  if (!node.right) return { tree: node.left, found: true, kind: "one" };
  const succ = minKey(node.right);
  const r = deleteTree(node.right, succ);
  return { tree: { key: succ, left: node.left, right: r.tree }, found: true, kind: "two", succ };
}

function countTree(n: TNode | null): number {
  return n ? 1 + countTree(n.left) + countTree(n.right) : 0;
}

function buildInitial(): TNode | null {
  let t: TNode | null = null;
  for (const k of INITIAL_KEYS) t = insertTree(t, k).tree;
  return t;
}

function toGraph(n: TNode, side?: "left" | "right"): TreeGraphNode {
  const kids: TreeGraphNode[] = [];
  if (n.left) kids.push(toGraph(n.left, "left"));
  if (n.right) kids.push(toGraph(n.right, "right"));
  const node: TreeGraphNode = {
    key: String(n.key),
    label: String(n.key),
    side,
  };
  if (kids.length) node.children = kids;
  return node;
}

/** `37 < 50 → go left` — the comparison line shown during insert walks. */
function cmpLine(target: number, at: number): string {
  const left = target < at;
  return `${target} ${left ? "<" : ">"} ${at} → go ${left ? "left" : "right"}`;
}

/** Same comparison, but search/delete walks can end in equality. */
function seekLine(verb: string, target: number, at: number): string {
  if (target === at) return `${verb} ${target}: ${target} = ${at} → found it`;
  const left = target < at;
  return `${verb} ${target}: ${target} ${left ? "<" : ">"} ${at} → go ${left ? "left" : "right"}`;
}

/* ---------- component ---------- */

export function BstViz({ caption }: { caption?: string }) {
  const [tree, setTree] = useState<TNode | null>(buildInitial);
  const treeRef = useRef<TNode | null>(tree); // committed truth (latest full tree)
  const [states, setStates] = useState<States>({});
  const [input, setInput] = useState("");
  const [msg, setMsg] = useState<Msg>({
    text: "Insert keys (space separated). Each one walks down the tree, comparing as it goes.",
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
    cancel(); // invalidates any stray timer; `later` picks up the new token
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
    for (const t of toks) {
      const v = Number(t);
      if (Number.isInteger(v) && v >= -99 && v <= 999) valid.push(v);
      else invalid++;
    }
    return { valid, invalid };
  };

  const insertKeys = (keys: number[], invalidCount: number) => {
    if (busyRef.current) return;
    let work = treeRef.current;
    let at = 0;
    let added = 0;
    let limited = 0;
    let lastAdded: number | null = null;
    const dups: number[] = [];
    const snaps: Snap[] = [];

    for (const k of keys) {
      if (countTree(work) >= LIMIT) {
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
          msg: { text: `Duplicate ${k}. BSTs store unique keys.`, tone: "warn" },
        });
        at += STEP * 1.5;
        continue;
      }
      path.forEach((nk, i) => {
        const st: States = {};
        path.slice(0, i).forEach((p) => {
          st[String(p)] = "path";
        });
        st[String(nk)] = "visiting";
        snaps.push({
          at: at + i * STEP,
          tree: work,
          states: st,
          msg: { text: cmpLine(k, nk), tone: "default" },
        });
      });
      at += path.length * STEP;
      work = insertTree(work, k).tree;
      const st: States = { [String(k)]: "found" };
      path.forEach((p) => {
        st[String(p)] = "path";
      });
      snaps.push({
        at,
        tree: work,
        states: st,
        msg:
          path.length === 0
            ? { text: `Tree was empty. ${k} becomes the root (depth 0).`, tone: "ok" }
            : { text: `Inserted ${k} (depth ${path.length})`, tone: "ok" },
      });
      at += SETTLE;
      added++;
      lastAdded = k;
    }

    treeRef.current = work; // commit synchronously — cancel-safe truth
    const notes: string[] = [];
    if (added > 1) notes.push(`Inserted ${added} keys.`);
    if (dups.length) notes.push(`Duplicates rejected: ${dups.join(", ")}.`);
    if (limited) notes.push(`Node limit (${LIMIT}) reached. Press Clear to build more.`);
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
    play(snaps, at);
  };

  const searchKey = (k: number) => {
    if (busyRef.current) return;
    const t = treeRef.current;
    if (!t) {
      setMsg({ text: "Tree is empty. Insert some keys first.", tone: "warn" });
      return;
    }
    const { path, found } = walkPath(t, k);
    const snaps: Snap[] = [];
    let at = 0;
    const pathStates: States = {};
    path.forEach((p) => {
      pathStates[String(p)] = "path";
    });

    path.forEach((nk, i) => {
      const st: States = {};
      path.slice(0, i).forEach((p) => {
        st[String(p)] = "path";
      });
      st[String(nk)] = "visiting";
      snaps.push({
        at: i * STEP,
        tree: t,
        states: st,
        msg: { text: seekLine("Searching", k, nk), tone: "default" },
      });
    });
    at += path.length * STEP;

    if (found) {
      const hitMsg: Msg = {
        text: `${k} found after ${path.length} comparison${path.length === 1 ? "" : "s"}`,
        tone: "ok",
      };
      const on: States = { ...pathStates, [String(k)]: "found" };
      snaps.push({ at, tree: t, states: on, msg: hitMsg });
      const P = 260; // two green pulses
      snaps.push({ at: at + P, tree: t, states: pathStates, msg: hitMsg });
      snaps.push({ at: at + 2 * P, tree: t, states: on, msg: hitMsg });
      snaps.push({ at: at + 3 * P, tree: t, states: pathStates, msg: hitMsg });
      snaps.push({ at: at + 4 * P, tree: t, states: on, msg: hitMsg });
      at += 4 * P + 200;
    } else {
      const last = path[path.length - 1];
      const st: States = { ...pathStates, [String(last)]: "error" };
      snaps.push({
        at,
        tree: t,
        states: st,
        msg: { text: `${k} not found. Path walked: ${path.join(" → ")}.`, tone: "danger" },
      });
      at += STEP;
    }
    play(snaps, at);
  };

  const deleteKey = (k: number) => {
    if (busyRef.current) return;
    const t = treeRef.current;
    if (!t) {
      setMsg({ text: "Tree is empty. Nothing to delete.", tone: "warn" });
      return;
    }
    const { path, found } = walkPath(t, k);
    const snaps: Snap[] = [];
    let at = 0;

    path.forEach((nk, i) => {
      const st: States = {};
      path.slice(0, i).forEach((p) => {
        st[String(p)] = "path";
      });
      st[String(nk)] = "visiting";
      snaps.push({
        at: i * STEP,
        tree: t,
        states: st,
        msg: { text: seekLine("Deleting", k, nk), tone: "default" },
      });
    });
    at += path.length * STEP;

    if (!found) {
      const last = path[path.length - 1];
      const st: States = {};
      path.slice(0, -1).forEach((p) => {
        st[String(p)] = "path";
      });
      st[String(last)] = "error";
      snaps.push({
        at,
        tree: t,
        states: st,
        msg: { text: `${k} is not in the tree. Nothing to delete.`, tone: "danger" },
      });
      at += STEP;
    } else {
      const r = deleteTree(t, k);
      if (r.kind === "leaf") {
        snaps.push({
          at,
          tree: t,
          states: { [String(k)]: "selected" },
          msg: { text: `${k} is a leaf. Unlink it.`, tone: "default" },
        });
        at += SETTLE;
        snaps.push({
          at,
          tree: r.tree,
          states: {},
          msg: { text: `Deleted ${k}. Leaf unlinked.`, tone: "ok" },
        });
        at += SETTLE / 2;
      } else if (r.kind === "one" && r.tree) {
        const child = r.tree.key; // the spliced-up subtree root
        snaps.push({
          at,
          tree: t,
          states: { [String(k)]: "selected", [String(child)]: "visiting" },
          msg: { text: `${k} has one child (${child}). Splice it up.`, tone: "default" },
        });
        at += SETTLE;
        snaps.push({
          at,
          tree: r.tree,
          states: { [String(child)]: "found" },
          msg: { text: `Deleted ${k}. ${child} spliced up.`, tone: "ok" },
        });
        at += SETTLE / 2;
      } else if (r.kind === "two" && r.succ !== undefined) {
        const succ = r.succ;
        snaps.push({
          at,
          tree: t,
          states: { [String(k)]: "selected", [String(succ)]: "visiting" },
          msg: { text: `${k} has two children. In-order successor is ${succ}.`, tone: "default" },
        });
        at += SETTLE;
        snaps.push({
          at,
          tree: r.tree,
          states: { [String(succ)]: "found" },
          msg: { text: `Deleted ${k}. Successor ${succ} takes its place.`, tone: "ok" },
        });
        at += SETTLE / 2;
      }
      treeRef.current = r.tree;
    }
    play(snaps, at);
  };

  const clearAll = () => {
    if (busyRef.current) return;
    cancel();
    treeRef.current = null;
    setTree(null);
    setStates({});
    setInput("");
    setMsg({
      text: "Cleared. Insert keys to build a new tree.",
      tone: "default",
    });
  };

  const onInsert = () => {
    if (busyRef.current) return;
    const { valid, invalid } = parseKeys(input);
    if (!valid.length) {
      setMsg({
        text: "Enter whole numbers separated by spaces (e.g. 50 25 76).",
        tone: "warn",
      });
      return;
    }
    setInput("");
    insertKeys(valid, invalid);
  };

  const firstKey = (): number | null => {
    const { valid } = parseKeys(input);
    return valid.length ? valid[0] : null;
  };

  const onSearch = () => {
    if (busyRef.current) return;
    const k = firstKey();
    if (k === null) {
      setMsg({ text: "Enter one number to search.", tone: "warn" });
      return;
    }
    searchKey(k);
  };

  const onDelete = () => {
    if (busyRef.current) return;
    const k = firstKey();
    if (k === null) {
      setMsg({ text: "Enter one number to delete.", tone: "warn" });
      return;
    }
    deleteKey(k);
  };

  /* ---------- render ---------- */

  return (
    <figure className="print-avoid-break my-6 border border-hairline p-4 viz-shell">
      <div className="no-print flex flex-wrap items-center justify-center gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") onInsert();
          }}
          disabled={busy}
          aria-label="BST keys (space separated)"
          placeholder="e.g. 37 10 25"
          className={inputCls}
        />
        <button type="button" onClick={onInsert} disabled={busy} className={btnPrimary}>
          <Plus className="size-4" aria-hidden />
          Insert
        </button>
        <button type="button" onClick={onSearch} disabled={busy} className={btnGhost}>
          <Search className="size-4" aria-hidden />
          Search
        </button>
        <button type="button" onClick={onDelete} disabled={busy} className={btnGhost}>
          <Trash2 className="size-4" aria-hidden />
          Delete
        </button>
        <button type="button" onClick={clearAll} disabled={busy} className={btnGhost}>
          <RotateCw className="size-4" aria-hidden />
          Clear
        </button>
      </div>

      <div className="tree-wrap mt-3">
        {tree ? (
          <TreeGraph
            root={toGraph(tree)}
            nodeStates={states}
            ariaLabel={`Binary search tree with ${countTree(tree)} of at most ${LIMIT} nodes`}
          />
        ) : (
          <div className="rounded-md border border-dashed border-hairline py-12 text-center text-sm text-ink-faint">
            Empty tree. Insert keys above and watch each one walk down, comparing as it goes.
          </div>
        )}
      </div>

      <div
        aria-live="polite"
        className={`mt-3 text-center ${statusCls(msg.tone)}`}
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
