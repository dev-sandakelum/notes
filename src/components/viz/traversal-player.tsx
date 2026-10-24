"use client";

import { useMemo, useState } from "react";
import { TreeGraph } from "./tree-graph";
import type { TreeGraphNodeState } from "./tree-graph";
import { StepPlayer } from "./step-player";
import {
  recordTraversal,
  toGraphNode,
  TRACE_TREE,
  type TraversalOrder,
  type TraversalStep,
} from "./player-steps";

/**
 * (a) Pre-order / in-order / post-order traversal player.
 *
 * Runs the REAL recursive traversal (player-steps.recordTraversal) and
 * plays the recording: the tree highlights the current node, visited
 * nodes are marked in visit order, the output sequence builds live, and
 * the call stack mirrors the active recursion frames. Steps are recorded,
 * so stepping back restores the exact state.
 */
export function TraversalPlayer({ caption }: { caption?: string }) {
  const [order, setOrder] = useState<TraversalOrder>("pre");
  const steps = useMemo(() => recordTraversal(TRACE_TREE, order), [order]);
  const graph = useMemo(() => toGraphNode(TRACE_TREE), []);

  const describe = (s: TraversalStep) => s.desc;

  const render = (s: TraversalStep) => {
    // node states from the recorded step
    const states: Record<string, TreeGraphNodeState> = {};
    // visited nodes (in output order) — the last one is the most recent
    const visitedLabels = new Set(s.output);
    // map labels back to keys for highlighting
    const labelToKeys = new Map<string, string[]>();
    const collect = (n: typeof TRACE_TREE) => {
      const label = n.label ?? n.key;
      const list = labelToKeys.get(label) ?? [];
      list.push(n.key);
      labelToKeys.set(label, list);
      if (n.left) collect(n.left);
      if (n.right) collect(n.right);
    };
    collect(TRACE_TREE);
    for (const label of visitedLabels) {
      for (const k of labelToKeys.get(label) ?? []) states[k] = "found";
    }
    if (s.current) states[s.current] = "visiting";
    // dim finished subtrees: nodes not on the call stack and not visited
    const onStack = new Set(s.callStack);

    return (
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_190px]">
        <TreeGraph
          root={graph}
          nodeStates={states}
          ariaLabel={`Traversal of the example tree, ${order}-order`}
          nodeRadius={24}
          levelHeight={70}
          siblingGap={18}
          animateEntry={false}
        />
        <div className="flex flex-col gap-3 lg:border-l lg:border-hairline lg:pl-4">
          <div>
            <p className="mb-1.5 text-caption font-semibold uppercase tracking-wider text-ink-faint">
              Call stack
            </p>
            <ol className="flex min-h-[2rem] flex-col-reverse gap-1" aria-label="Call stack">
              {s.callStack.length === 0 ? (
                <li className="font-mono text-caption text-ink-faint">empty</li>
              ) : (
                s.callStack.map((k, i) => (
                  <li
                    key={`${k}-${i}`}
                    className={`sp-frame sp-stack-item sp-in rounded-md border px-2 py-1 font-mono text-caption ${
                      i === s.callStack.length - 1
                        ? "border-(--accent) bg-(--accent-soft) font-semibold text-ink"
                        : "border-hairline text-ink-muted"
                    }`}
                  >
                    {k}
                    {i === s.callStack.length - 1 ? "  ← active" : ""}
                  </li>
                ))
              )}
            </ol>
          </div>
          <div>
            <p className="mb-1.5 text-caption font-semibold uppercase tracking-wider text-ink-faint">
              Output
            </p>
            <p className="min-h-[2rem] rounded-md border border-hairline bg-paper-sunken px-2.5 py-1.5 font-mono text-caption leading-7 text-ink">
              {s.output.length ? s.output.join(" ") : "\u00a0"}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <StepPlayer<TraversalStep>
      steps={steps}
      describe={describe}
      render={render}
      title="Traversal player"
      resetKey={order}
      caption={caption}
      toolbar={
        <div
          role="radiogroup"
          aria-label="Traversal order"
          className="flex flex-wrap gap-1.5"
        >
          {(
            [
              ["pre", "Pre-order"],
              ["in", "In-order"],
              ["post", "Post-order"],
            ] as const
          ).map(([o, label]) => (
            <button
              key={o}
              type="button"
              role="radio"
              aria-checked={order === o}
              onClick={() => setOrder(o)}
              className={`rounded-full border px-2.5 py-0.5 font-mono text-caption transition-colors ${
                order === o
                  ? "border-(--accent) bg-(--accent-soft) font-semibold text-(--accent-ink)"
                  : "border-hairline text-ink-muted hover:border-hairline-strong"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      }
    />
  );
}
