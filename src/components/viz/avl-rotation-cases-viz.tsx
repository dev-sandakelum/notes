"use client";

import { Play } from "lucide-react";
import { TreeGraph, type TreeGraphNodeState } from "./tree-graph";
import { PLAY_CASE_EVENT } from "./avl-rotations-viz";
import {
  AFTER,
  CASES,
  CASE_ORDER,
  KEY_TAKEAWAY,
  LL_BEFORE,
  LR_BEFORE,
  RL_BEFORE,
  ROLES,
  RR_BEFORE,
  caseTreeToGraph,
  type NTree,
  type RotCase,
} from "./avl-cases-data";

/**
 * The four rotation case cards (ch10, replaces the original callouts
 * whose before/after mini SVGs never survived the migration).
 *
 * 2×2 grid at ≥ 1100px, single column below. Each card carries the case
 * name and rotation-type chips, the condition with real numbers, a
 * BEFORE → AFTER diagram pair on the shared <TreeGraph /> (z/y/x tagged,
 * unbalanced node ringed red, rotated nodes in role colours), numbered
 * plain-English steps, a one-line takeaway and a "Play this case"
 * button that loads the case into the animated rotation player above.
 * Accent colours: LL blue, RR violet, LR amber, RL teal.
 */

const BEFORE_TREE: Record<RotCase, NTree> = {
  LL: LL_BEFORE,
  RR: RR_BEFORE,
  LR: LR_BEFORE,
  RL: RL_BEFORE,
};

/** Node colour per role (matches the role tag colours). */
const ROLE_STATE: Record<"z" | "y" | "x", TreeGraphNodeState> = {
  z: "error",
  y: "newly",
  x: "found",
};

function roleStates(roles: { z: number; y: number; x: number }): Record<string, TreeGraphNodeState> {
  return {
    [String(roles.z)]: ROLE_STATE.z,
    [String(roles.y)]: ROLE_STATE.y,
    [String(roles.x)]: ROLE_STATE.x,
  };
}

function CaseCard({ id }: { id: RotCase }) {
  const def = CASES[id];
  const roles = ROLES[id];
  const states = roleStates(roles);

  const playThisCase = () => {
    window.dispatchEvent(new CustomEvent<RotCase>(PLAY_CASE_EVENT, { detail: id }));
  };

  return (
    <article
      className="flex flex-col rounded-2xl border border-hairline bg-paper-raised p-4"
      style={{ borderTop: `4px solid ${def.accent}` }}
    >
      <h4 className="font-display text-[1.05rem] font-bold leading-snug text-ink">
        {def.name}
      </h4>

      {/* Rotation-type chips */}
      <div className="mt-2 flex flex-wrap gap-1.5">
        {def.chips.map((c) => (
          <span
            key={c}
            className="rounded-full px-2.5 py-0.5 text-xs font-semibold text-white"
            style={{ background: def.accent }}
          >
            {c}
          </span>
        ))}
      </div>

      {/* Condition with the real numbers */}
      <p className="mt-2.5 rounded-lg bg-paper-sunken px-3 py-1.5 text-center font-mono text-[0.83rem] font-bold text-ink">
        {def.condition}
      </p>

      {/* BEFORE → AFTER diagram pair */}
      <div className="mt-3 grid grid-cols-[1fr_auto_1fr] items-center gap-1.5">
        <figure className="min-w-0">
          <TreeGraph
            root={caseTreeToGraph(BEFORE_TREE[id], roles)}
            nodeStates={states}
            nodeRadius={22}
            levelHeight={64}
            siblingGap={18}
            minNodeRadius={14}
            padding={20}
            animateEntry={false}
            ariaLabel={`${id} case before: ${def.condition}`}
          />
          <figcaption className="mt-1 text-center text-[0.72rem] font-semibold uppercase tracking-wide text-ink-muted">
            Before
          </figcaption>
        </figure>
        <span aria-hidden className="px-0.5 text-lg font-extrabold" style={{ color: def.accent }}>
          →
        </span>
        <figure className="min-w-0">
          <TreeGraph
            root={caseTreeToGraph(AFTER, roles)}
            nodeStates={states}
            nodeRadius={22}
            levelHeight={64}
            siblingGap={18}
            minNodeRadius={14}
            padding={20}
            animateEntry={false}
            ariaLabel={`${id} case after: the balanced tree 20(10(5,15),30(25,35))`}
          />
          <figcaption className="mt-1 text-center text-[0.72rem] font-semibold uppercase tracking-wide text-ink-muted">
            After
          </figcaption>
        </figure>
      </div>

      {/* Numbered steps */}
      <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm leading-relaxed text-ink">
        {def.cardSteps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ol>

      {/* Takeaway */}
      <p className="mt-3 rounded-lg border-l-4 bg-paper-sunken px-3 py-2 text-sm text-ink-muted" style={{ borderColor: def.accent }}>
        {def.takeaway}
      </p>

      {/* Play this case */}
      <button
        type="button"
        onClick={playThisCase}
        className="btn mt-3 self-start text-white"
        style={{
          background: def.accent,
          ["--shadow-btn" as string]: `0 6px 14px ${def.accent}55`,
        }}
      >
        <Play className="size-4" aria-hidden />
        Play this case
      </button>
    </article>
  );
}

export function AvlRotationCasesViz({ caption }: { caption?: string }) {
  return (
    <figure className="print-avoid-break my-6 border border-hairline p-4 viz-shell">
      <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-ink-muted">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-danger bg-danger-soft px-2.5 py-0.5 text-danger">
          <span className="font-mono font-bold">z</span> unbalanced, BF ±2
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-visit bg-visit-soft px-2.5 py-0.5 text-visit">
          <span className="font-mono font-bold">y</span> heavy child
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-ok bg-ok-soft px-2.5 py-0.5 text-ok">
          <span className="font-mono font-bold">x</span> heavy grandchild
        </span>
        <span>T0–T3 are the keys 5, 15, 25, 35.</span>
      </div>

      <div className="mt-3 grid gap-4 min-[1100px]:grid-cols-2">
        {CASE_ORDER.map((id) => (
          <CaseCard key={id} id={id} />
        ))}
      </div>

      <p className="mt-4 rounded-lg border border-(--accent) bg-paper-sunken px-3 py-2 text-center text-sm font-medium text-ink">
        {KEY_TAKEAWAY}
      </p>

      {caption ? (
        <figcaption className="mt-2 border-t border-hairline pt-2 text-center text-caption italic text-ink-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
