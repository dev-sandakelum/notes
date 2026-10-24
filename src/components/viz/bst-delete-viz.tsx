"use client";

import { useEffect, useRef, useState } from "react";
import { Dice5, RotateCw, Trash2 } from "lucide-react";
import {
  TreeGraph,
  type TreeGraphNode,
  type TreeGraphNodeState,
} from "./tree-graph";
import { btnDanger, btnGhost, btnPrimary, inputCls } from "./viz-ui";

/**
 * BST deletion playground (ch09, "Interactive playground").
 *
 * Rebuilt from the original interactive note (tree 5): click a node (or
 * type a value), pick a replacement method (in-order successor or
 * in-order predecessor), press Delete and watch the animation walk all
 * three cases. The preloaded sample tree guarantees the two-children
 * case exists. Every step is narrated in the console log below the tree.
 */

interface TNode {
  key: number;
  left: TNode | null;
  right: TNode | null;
}

type Method = "successor" | "predecessor";
type States = Record<string, TreeGraphNodeState>;
type LogTone = "ok" | "err" | "info" | "";

interface Msg {
  text: string;
  tone: LogTone;
}
interface Snap {
  at: number;
  tree: TNode | null;
  states: States;
  msg: Msg;
  pulse?: string[];
}

const SAMPLE_KEYS = [50, 30, 70, 20, 40, 60, 80, 35, 65];
const LIMIT = 15;
const STEP = 500; // ms per walk step
const SETTLE = 800; // ms per case beat

/* ---------- pure helpers ---------- */

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

function countTree(n: TNode | null): number {
  return n ? 1 + countTree(n.left) + countTree(n.right) : 0;
}

function buildTree(keys: number[]): TNode | null {
  let t: TNode | null = null;
  for (const k of keys) t = insertTree(t, k).tree;
  return t;
}

/** Smallest key in the subtree (leftmost node). */
function minKey(n: TNode): number {
  while (n.left) n = n.left;
  return n.key;
}

/** Largest key in the subtree (rightmost node). */
function maxKey(n: TNode): number {
  while (n.right) n = n.right;
  return n.key;
}

function deleteTree(
  node: TNode | null,
  key: number,
  method: Method
): {
  tree: TNode | null;
  found: boolean;
  kind: "" | "leaf" | "one" | "two";
  child?: number;
  repl?: number;
} {
  if (!node) return { tree: null, found: false, kind: "" };
  if (key < node.key) {
    const r = deleteTree(node.left, key, method);
    if (!r.found) return { tree: node, found: false, kind: "" };
    return { ...r, tree: { ...node, left: r.tree } };
  }
  if (key > node.key) {
    const r = deleteTree(node.right, key, method);
    if (!r.found) return { tree: node, found: false, kind: "" };
    return { ...r, tree: { ...node, right: r.tree } };
  }
  if (!node.left && !node.right) return { tree: null, found: true, kind: "leaf" };
  if (!node.left && node.right) return { tree: node.right, found: true, kind: "one", child: node.right.key };
  if (!node.right && node.left) return { tree: node.left, found: true, kind: "one", child: node.left.key };
  if (method === "successor") {
    const repl = minKey(node.right as TNode);
    const r = deleteTree(node.right, repl, method);
    return { tree: { key: repl, left: node.left, right: r.tree }, found: true, kind: "two", repl };
  }
  const repl = maxKey(node.left as TNode);
  const r = deleteTree(node.left, repl, method);
  return { tree: { key: repl, left: r.tree, right: node.right }, found: true, kind: "two", repl };
}

function toGraph(n: TNode, side?: "left" | "right", pulse?: Set<string>): TreeGraphNode {
  const kids: TreeGraphNode[] = [];
  if (n.left) kids.push(toGraph(n.left, "left", pulse));
  if (n.right) kids.push(toGraph(n.right, "right", pulse));
  const node: TreeGraphNode = {
    key: String(n.key),
    label: String(n.key),
    side,
    pulse: pulse?.has(String(n.key)),
  };
  if (kids.length) node.children = kids;
  return node;
}

/* ---------- component ---------- */

export function BstDeleteViz({ caption }: { caption?: string }) {
  const [tree, setTree] = useState<TNode | null>(() => buildTree(SAMPLE_KEYS));
  const treeRef = useRef<TNode | null>(tree);
  const [states, setStates] = useState<States>({});
  const [pulse, setPulse] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [method, setMethod] = useState<Method>("successor");
  const [selected, setSelected] = useState<string | null>(null);
  const [log, setLog] = useState<Msg[]>([
    { text: "Sample tree loaded: 50 30 70 20 40 60 80 35 65.", tone: "info" },
    { text: "Click a node, pick a method, then press Delete.", tone: "" },
  ]);
  const [busy, setBusy] = useState(false);
  const busyRef = useRef(false);
  const timers = useRef<number[]>([]);
  const token = useRef(0);
  const logRef = useRef<HTMLDivElement>(null);

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
  useEffect(() => () => cancel(), []);

  /* Keep the log scrolled to the latest entry. */
  useEffect(() => {
    const el = logRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [log]);

  const pushLog = (text: string, tone: LogTone = "") => {
    setLog((prev) => [...prev.slice(-30), { text, tone }]);
  };

  const play = (snaps: Snap[], endAt: number) => {
    busyRef.current = true;
    setBusy(true);
    cancel();
    for (const s of snaps) {
      later(() => {
        setTree(s.tree);
        setStates(s.states);
        setPulse(s.pulse ?? []);
        if (s.msg.text) pushLog(s.msg.text, s.msg.tone);
      }, s.at);
    }
    later(() => {
      busyRef.current = false;
      setBusy(false);
    }, endAt);
  };

  /* ---------- delete with animation ---------- */

  const deleteAnimated = (v: number) => {
    if (busyRef.current) return;
    const t = treeRef.current;
    if (!t) {
      pushLog(`The tree is empty. Load the sample tree first.`, "err");
      return;
    }
    const { path, found } = walkPath(t, v);
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
        msg: {
          text: `${v} ${v === nk ? "=" : v < nk ? "<" : ">"} ${nk} → go ${v < nk ? "left" : "right"}`,
          tone: "info",
        },
      });
    });
    at += path.length * STEP;

    if (!found) {
      const last = path[path.length - 1];
      snaps.push({
        at,
        tree: t,
        states: { [String(last)]: "error" },
        pulse: [String(last)],
        msg: { text: `${v} is not in the tree. Nothing to delete.`, tone: "err" },
      });
      at += SETTLE;
      snaps.push({ at, tree: t, states: {}, msg: { text: "", tone: "" } });
      play(snaps, at);
      return;
    }

    const r = deleteTree(t, v, method);
    const kids = countChildren(t, v);

    /* Step: the target, pulsing red. */
    snaps.push({
      at,
      tree: t,
      states: { [String(v)]: "selected" },
      pulse: [String(v)],
      msg: {
        text:
          kids === 0
            ? `Node ${v} is a leaf. Case 1: just remove it.`
            : kids === 1
              ? `Node ${v} has one child. Case 2: the child is spliced into its place.`
              : `Node ${v} has two children. Case 3: replace its key with the in-order ${method}.`,
        tone: "info",
      },
    });
    at += SETTLE;

    if (r.kind === "leaf") {
      snaps.push({
        at,
        tree: r.tree,
        states: {},
        msg: { text: `Deleted ${v}. Leaf unlinked. The tree is still a valid BST.`, tone: "ok" },
      });
      at += SETTLE;
    } else if (r.kind === "one" && r.child !== undefined) {
      snaps.push({
        at,
        tree: r.tree,
        states: { [String(r.child)]: "newly" },
        msg: { text: `Deleted ${v}. Child ${r.child} took its place.`, tone: "ok" },
      });
      at += SETTLE;
    } else if (r.kind === "two" && r.repl !== undefined) {
      const repl = r.repl;
      /* Walk to the replacement inside the target's subtree. */
      const sub = method === "successor" ? findSubtree(t, v)?.right : findSubtree(t, v)?.left;
      const subPath = sub ? walkPath(sub, repl).path : [];
      subPath.forEach((nk, i) => {
        const st: States = { [String(v)]: "selected" };
        subPath.slice(0, i).forEach((p) => {
          st[String(p)] = "path";
        });
        st[String(nk)] = "visiting";
        snaps.push({
          at: at + i * STEP,
          tree: t,
          states: st,
          pulse: [String(v)],
          msg: {
            text: `Looking for the ${method}: ${method === "successor" ? "right subtree, then keep going left" : "left subtree, then keep going right"} → ${nk}.`,
            tone: "info",
          },
        });
      });
      at += subPath.length * STEP;

      snaps.push({
        at,
        tree: t,
        states: { [String(v)]: "selected", [String(repl)]: "found" },
        pulse: [String(v)],
        msg: {
          text: `${method === "successor" ? "Successor" : "Predecessor"} found: ${repl}. It has at most one child, so it is easy to remove.`,
          tone: "info",
        },
      });
      at += SETTLE;

      snaps.push({
        at,
        tree: r.tree,
        states: { [String(repl)]: "newly" },
        msg: {
          text: `Copy ${repl} into ${v}, then remove the old ${repl}. Deleted ${v}. ${method === "successor" ? "Successor" : "Predecessor"} ${repl} takes its place.`,
          tone: "ok",
        },
      });
      at += SETTLE;
    }

    treeRef.current = r.tree;
    setSelected(null);
    setInput("");
    play(snaps, at);
  };

  /* ---------- other actions ---------- */

  const onDelete = () => {
    const v = Number(input);
    if (input.trim() !== "" && Number.isInteger(v)) {
      deleteAnimated(v);
      return;
    }
    if (selected !== null) {
      deleteAnimated(Number(selected));
      return;
    }
    pushLog("Click a node or type a value first.", "err");
  };

  const onNodeClick = (key: string) => {
    if (busyRef.current) return;
    setSelected((cur) => (cur === key ? null : key));
    setInput((cur) => (selected === key ? "" : key));
    if (selected !== key) pushLog(`Selected node ${key}.`);
  };

  const loadSample = () => {
    if (busyRef.current) return;
    cancel();
    treeRef.current = buildTree(SAMPLE_KEYS);
    setTree(treeRef.current);
    setStates({});
    setPulse([]);
    setSelected(null);
    setInput("");
    pushLog("Sample tree loaded: 50 30 70 20 40 60 80 35 65.", "info");
  };

  const randomTree = () => {
    if (busyRef.current) return;
    cancel();
    const n = 8 + Math.floor(Math.random() * 3); // 8-10 nodes
    const pool = new Set<number>();
    while (pool.size < n) pool.add(1 + Math.floor(Math.random() * 99));
    const keys = [...pool];
    treeRef.current = buildTree(keys);
    setTree(treeRef.current);
    setStates({});
    setPulse([]);
    setSelected(null);
    setInput("");
    pushLog(`Random tree loaded: ${keys.join(", ")}.`, "info");
  };

  const count = tree ? countTree(tree) : 0;

  /* ---------- render ---------- */

  const radioCard = (m: Method, title: string, hint: string) => (
    <label
      className={`flex min-w-0 flex-1 cursor-pointer items-center gap-2.5 rounded-xl border-2 px-3.5 py-2.5 transition-colors ${
        method === m
          ? "border-(--accent) bg-(--accent-soft)"
          : "border-(--node-edge) bg-paper-raised hover:border-hairline-strong"
      }`}
    >
      <input
        type="radio"
        name="bst-delete-method"
        value={m}
        checked={method === m}
        onChange={() => setMethod(m)}
        disabled={busy}
        className="size-4 accent-(--accent)"
        aria-label={title}
      />
      <span className="min-w-0">
        <span className="block text-sm font-semibold text-ink">{title}</span>
        <span className="block text-caption text-ink-muted">{hint}</span>
      </span>
    </label>
  );

  return (
    <figure className="print-avoid-break my-6 border border-hairline p-4 viz-shell">
      <p className="text-center text-sm text-ink-muted">
        Click a node to select it (or type a value), pick a method, then press{" "}
        <b>Delete</b> to watch the animation. Nodes: <b className="font-mono">{count}</b>
      </p>

      {/* Method picker */}
      <div
        role="radiogroup"
        aria-label="Replacement method"
        className="no-print mt-3 flex flex-wrap gap-2.5"
      >
        {radioCard(
          "successor",
          "In-order successor",
          "right subtree, then keep left"
        )}
        {radioCard(
          "predecessor",
          "In-order predecessor",
          "left subtree, then keep right"
        )}
      </div>

      {/* Controls */}
      <div className="no-print mt-3 flex flex-wrap items-center justify-center gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") onDelete();
          }}
          disabled={busy}
          aria-label="Value to delete"
          placeholder="Value…"
          className={`${inputCls} w-24`}
          inputMode="numeric"
        />
        <button type="button" onClick={onDelete} disabled={busy} className={btnDanger}>
          <Trash2 className="size-4" aria-hidden />
          Delete
        </button>
        <button type="button" onClick={randomTree} disabled={busy} className={btnGhost}>
          <Dice5 className="size-4" aria-hidden />
          Random tree
        </button>
        <button type="button" onClick={loadSample} disabled={busy} className={btnGhost}>
          <RotateCw className="size-4" aria-hidden />
          Reset
        </button>
      </div>

      {/* Tree */}
      <div className="tree-wrap mt-3">
        {tree ? (
          <TreeGraph
            root={toGraph(tree, undefined, new Set(pulse))}
            nodeStates={states}
            onNodeClick={busy ? undefined : onNodeClick}
            ariaLabel={`Binary search tree with ${count} nodes. Click a node to select it for deletion.`}
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
            <p className="text-sm text-ink-muted">
              The tree is empty. Load a tree to practise deletion.
            </p>
            <button type="button" onClick={loadSample} className={btnPrimary}>
              <RotateCw className="size-4" aria-hidden />
              Load sample tree
            </button>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="legend">
        <span>
          <span className="dot" style={{ background: "var(--accent)" }} />
          Selected / target
        </span>
        <span>
          <span className="dot" style={{ background: "var(--warn)" }} />
          Search path
        </span>
        <span>
          <span className="dot" style={{ background: "var(--ok)" }} />
          Replacement found
        </span>
        <span>
          <span className="dot" style={{ background: "var(--visit)" }} />
          Recently changed
        </span>
      </div>

      {/* Console log */}
      <div ref={logRef} className="viz-log mt-3" aria-live="polite">
        {log.map((l, i) => (
          <div key={i} className={l.tone}>
            {l.text}
          </div>
        ))}
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

function countChildren(root: TNode, key: number): number {
  const n = findSubtree(root, key);
  if (!n) return 0;
  return (n.left ? 1 : 0) + (n.right ? 1 : 0);
}

function findSubtree(root: TNode | null, key: number): TNode | null {
  let n = root;
  while (n) {
    if (key === n.key) return n;
    n = key < n.key ? n.left : n.right;
  }
  return null;
}
