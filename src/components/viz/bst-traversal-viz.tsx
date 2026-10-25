"use client";

import { useEffect, useRef, useState } from "react";
import { Redo2, RotateCw } from "lucide-react";
import {
  TreeGraph,
  type TreeGraphNode,
  type TreeGraphNodeState,
} from "./tree-graph";
import { btnGhost } from "./viz-ui";
import { SpeedControl, SpeedPresetChips, usePlaybackSpeed } from "./step-player";

/**
 * BST traversal trainer (rebuilt on the shared <TreeGraph /> renderer:
 * big readable nodes + tidy centered layout). A random 7–9 node BST,
 * Preorder / Inorder / Postorder / Level-order runs — each node flashes
 * "visiting" then settles to a "found" tint while the visit order builds
 * up as mono chips underneath. Speed slider (ms per visit) + Replay of
 * the last order.
 */

interface TNode {
  key: number;
  left: TNode | null;
  right: TNode | null;
}

type Order = "pre" | "in" | "post" | "level";

const ORDERS: { id: Order; label: string }[] = [
  { id: "pre", label: "Preorder" },
  { id: "in", label: "Inorder" },
  { id: "post", label: "Postorder" },
  { id: "level", label: "Level-order" },
];
const ORDER_LABEL: Record<Order, string> = {
  pre: "Preorder",
  in: "Inorder",
  post: "Postorder",
  level: "Level-order",
};

/** Deterministic first tree (SSR-safe); "New tree" uses Math.random. */
const FIXED_SEQUENCE = [50, 30, 70, 20, 40, 60, 80, 35];

const SPEED_BASE_MS = 450; // ms per visited node at 1x (shared speed scales it)

/* ---------- pure helpers ---------- */

function insertTree(node: TNode | null, key: number): TNode {
  if (!node) return { key, left: null, right: null };
  if (key < node.key) return { ...node, left: insertTree(node.left, key) };
  return { ...node, right: insertTree(node.right, key) };
}

function countTree(n: TNode | null): number {
  return n ? 1 + countTree(n.left) + countTree(n.right) : 0;
}

function traverse(root: TNode, order: Order): number[] {
  const res: number[] = [];
  if (order === "level") {
    const q: TNode[] = [root];
    while (q.length) {
      const n = q.shift()!;
      res.push(n.key);
      if (n.left) q.push(n.left);
      if (n.right) q.push(n.right);
    }
    return res;
  }
  const go = (n: TNode | null) => {
    if (!n) return;
    if (order === "pre") res.push(n.key);
    go(n.left);
    if (order === "in") res.push(n.key);
    go(n.right);
    if (order === "post") res.push(n.key);
  };
  go(root);
  return res;
}

function toGraph(n: TNode, side?: "left" | "right"): TreeGraphNode {
  const kids: TreeGraphNode[] = [];
  if (n.left) kids.push(toGraph(n.left, "left"));
  if (n.right) kids.push(toGraph(n.right, "right"));
  const node: TreeGraphNode = { key: String(n.key), label: String(n.key), side };
  if (kids.length) node.children = kids;
  return node;
}

function randomTreeFrom(rand: () => number): TNode | null {
  const n = 7 + Math.floor(rand() * 3); // 7–9 nodes
  const pool = new Set<number>();
  while (pool.size < n) pool.add(1 + Math.floor(rand() * 99));
  let t: TNode | null = null;
  for (const k of pool) t = insertTree(t, k);
  return t;
}

/* ---------- component ---------- */

export function BstTraversalViz({ caption }: { caption?: string }) {
  const [tree, setTree] = useState<TNode | null>(() => {
    let t: TNode | null = null;
    for (const k of FIXED_SEQUENCE) t = insertTree(t, k);
    return t;
  });
  const [states, setStates] = useState<Record<string, TreeGraphNodeState>>({});
  const [outVals, setOutVals] = useState<number[]>([]);
  const [curKey, setCurKey] = useState<string | null>(null);
  const [status, setStatus] = useState(
    "Press an order. Each key lights up as the walk reaches it."
  );
  const [running, setRunning] = useState(false);
  const [lastOrder, setLastOrder] = useState<Order | null>(null);
  const [speed, setSpeed] = usePlaybackSpeed();
  const runningRef = useRef(false);
  const timers = useRef<number[]>([]);
  const token = useRef(0); // stale timers can never commit

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

  const run = (order: Order) => {
    if (runningRef.current || !tree) return;
    const t = tree;
    const label = ORDER_LABEL[order];
    const keys = traverse(t, order);
    cancel();
    runningRef.current = true;
    setRunning(true);
    setLastOrder(order);
    setStates({});
    setOutVals([]);
    setCurKey(null);
    setStatus(`${label}: visiting ${keys[0]}…`);

    const step = Math.max(40, SPEED_BASE_MS / speed); // ms per visit, scales with the shared speed
    const settle = Math.max(70, Math.round(step * 0.55)); // "visiting" flash share
    keys.forEach((k, i) => {
      const key = String(k);
      later(() => {
        setCurKey(key);
        setStates((prev) => ({ ...prev, [key]: "visiting" }));
        setOutVals((prev) => [...prev, k]);
        setStatus(`${label}: visiting ${k}…`);
      }, i * step);
      later(() => {
        setStates((prev) => ({ ...prev, [key]: "found" }));
      }, i * step + settle);
    });
    later(() => {
      setCurKey(null);
      setStatus(
        order === "in"
          ? `${label} complete. Sorted, as always.`
          : `${label} complete. ${keys.length} nodes visited.`
      );
      runningRef.current = false;
      setRunning(false);
    }, keys.length * step + settle);
  };

  const newTree = () => {
    if (runningRef.current) return;
    cancel();
    setTree(randomTreeFrom(Math.random));
    setStates({});
    setOutVals([]);
    setCurKey(null);
    setStatus("New tree. Press an order to traverse it.");
  };

  const chipCls = (cur: boolean) =>
    `inline-flex h-7 min-w-8 items-center justify-center rounded-md border px-2 font-mono text-sm animate-in fade-in zoom-in-95 duration-150 ${
      cur
        ? "border-visit bg-visit-soft text-visit"
        : "border-hairline bg-paper-sunken text-ink"
    }`;

  /* ---------- render ---------- */

  const nodeCount = tree ? countTree(tree) : 0;

  return (
    <figure className="print-avoid-break my-6 border border-hairline p-4 viz-shell">
      <div className="no-print flex flex-wrap items-center justify-center gap-2">
        {ORDERS.map((o) => (
          <button
            key={o.id}
            type="button"
            disabled={running}
            onClick={() => run(o.id)}
            className={btnGhost}
          >
            {o.label}
          </button>
        ))}
        <button
          type="button"
          disabled={running || !lastOrder}
          onClick={() => {
            if (lastOrder) run(lastOrder);
          }}
          className={btnGhost}
        >
          <Redo2 className="size-4" aria-hidden />
          Replay
        </button>
        <button type="button" disabled={running} onClick={newTree} className={btnGhost}>
          <RotateCw className="size-4" aria-hidden />
          New tree
        </button>
      </div>

      <div className="no-print mt-2 flex flex-wrap items-center justify-center gap-3">
        <SpeedControl speed={speed} setSpeed={setSpeed} showPresets={false} />
      </div>
      <SpeedPresetChips
        speed={speed}
        setSpeed={setSpeed}
        className="no-print mt-2 justify-center"
      />

      <div className="tree-wrap mt-3">
        {tree ? (
          <TreeGraph
            root={toGraph(tree)}
            nodeStates={states}
            ariaLabel={`Binary search tree with ${nodeCount} nodes${
              running ? ", traversal running" : ""
            }`}
          />
        ) : (
          <div className="rounded-md border border-dashed border-hairline py-12 text-center text-sm text-ink-faint">
            Building a random tree…
          </div>
        )}
      </div>

      <div
        aria-live="polite"
        className="viz-status default mt-3 text-center"
      >
        {status}
      </div>

      <div
        aria-live="polite"
        className="mt-2 flex min-h-[2.5rem] flex-wrap items-center justify-center gap-1.5"
      >
        {outVals.length === 0 ? (
          <span className="font-mono text-sm text-ink-faint">
            {running ? "\u2026" : "Visited keys appear here, in visit order"}
          </span>
        ) : (
          outVals.map((k) => (
            <span key={String(k)} className={chipCls(curKey === String(k) && k === outVals[outVals.length - 1])}>
              {k}
            </span>
          ))
        )}
      </div>

      {caption ? (
        <figcaption className="mt-1 border-t border-hairline pt-2 text-center text-caption italic text-ink-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
