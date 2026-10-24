"use client";

import { useMemo, useState } from "react";
import { TreeGraph } from "./tree-graph";
import type { TreeGraphNodeState } from "./tree-graph";
import { StepPlayer } from "./step-player";
import {
  recordNotations,
  toGraphNode,
  EXPR_TREE,
  type NotationStep,
} from "./player-steps";

/**
 * (b) Expression tree -> prefix / infix / postfix notation player.
 *
 * Plays the real recorded traversal of the chapter's expression tree
 * A/B*C*D+E three times (pre / in / post), appending each node to the
 * active notation's output as it is visited. The three finished notations
 * match the figure caption exactly.
 */
export function NotationPlayer({ caption }: { caption?: string }) {
  const steps = useMemo(() => recordNotations(EXPR_TREE), []);
  const graph = useMemo(() => toGraphNode(EXPR_TREE), []);

  const describe = (s: NotationStep) => s.desc;

  const render = (s: NotationStep) => {
    const states: Record<string, TreeGraphNodeState> = {};
    for (const k of s.visited) states[k] = "found";
    if (s.current) states[s.current] = "visiting";

    const phaseLabel =
      s.phase === "prefix"
        ? "Prefix (pre-order)"
        : s.phase === "infix"
          ? "Infix (in-order)"
          : "Postfix (post-order)";

    return (
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_190px]">
        <TreeGraph
          root={graph}
          nodeStates={states}
          ariaLabel="Expression tree traversal for notation building"
          nodeRadius={24}
          levelHeight={64}
          siblingGap={18}
          animateEntry={false}
        />
        <div className="flex flex-col gap-3 lg:border-l lg:border-hairline lg:pl-4">
          <div>
            <p className="mb-1.5 text-caption font-semibold uppercase tracking-wider text-ink-faint">
              Phase
            </p>
            <p className="rounded-md border border-(--accent) bg-(--accent-soft) px-2.5 py-1 font-mono text-caption font-semibold text-(--accent-ink)">
              {phaseLabel}
            </p>
          </div>
          <div>
            <p className="mb-1.5 text-caption font-semibold uppercase tracking-wider text-ink-faint">
              {s.phase} output
            </p>
            <p className="min-h-[2rem] rounded-md border border-hairline bg-paper-sunken px-2.5 py-1.5 font-mono text-caption leading-7 break-words text-ink">
              {s.output.length ? s.output.join(" ") : "\u00a0"}
            </p>
          </div>
          <ul className="mt-auto space-y-1 text-caption text-ink-faint">
            <li>
              <span className="font-mono text-ink-muted">pre-order</span> → prefix
            </li>
            <li>
              <span className="font-mono text-ink-muted">in-order</span> → infix
            </li>
            <li>
              <span className="font-mono text-ink-muted">post-order</span> → postfix
            </li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <StepPlayer<NotationStep>
      steps={steps}
      describe={describe}
      render={render}
      title="Notation player"
      baseInterval={800}
      caption={caption}
    />
  );
}
