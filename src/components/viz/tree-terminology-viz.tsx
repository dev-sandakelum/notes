"use client";

import { useState } from "react";
import { Eraser } from "lucide-react";
import {
  TreeGraph,
  type TreeGraphNode,
  type TreeGraphNodeState,
} from "./tree-graph";
import { btnGhost } from "./viz-ui";

/**
 * Interactive terminology explorer for the ch07 general tree.
 *
 * The static A–N specimen from the original figure (A→B,C,F · B→D,E ·
 * C→G,H · D→I,J · G→K,L · K→M,N) rendered with the shared <TreeGraph />.
 * Clicking a node colour-codes every relation — parent, children,
 * siblings, ancestors, descendants, the subtree it roots — dims the
 * unrelated nodes and fills a fact sheet using the chapter's own
 * conventions (root level = 0, depth = edges up to the root, height of
 * a node = edges down to its deepest leaf, so a leaf has height 0).
 */

/* ------------------------------------------------------------------ */
/* The specimen (extracted verbatim from the original figure's SVG)    */
/* ------------------------------------------------------------------ */

const SPECIMEN: Record<string, string[]> = {
  A: ["B", "C", "F"],
  B: ["D", "E"],
  C: ["G", "H"],
  D: ["I", "J"],
  G: ["K", "L"],
  K: ["M", "N"],
};

const ROOT = "A";
const ALL_KEYS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
];

const childrenOf = (k: string): string[] => SPECIMEN[k] ?? [];

const parentOf = (k: string): string | null => {
  for (const [p, kids] of Object.entries(SPECIMEN)) {
    if (kids.includes(k)) return p;
  }
  return null;
};

const siblingsOf = (k: string): string[] => {
  const p = parentOf(k);
  return p ? childrenOf(p).filter((c) => c !== k) : [];
};

/** Root first, node itself excluded — "ancestors of G: A, C". */
const ancestorsOf = (k: string): string[] => {
  const acc: string[] = [];
  let cur = parentOf(k);
  while (cur) {
    acc.push(cur);
    cur = parentOf(cur);
  }
  return acc.reverse();
};

/** Level order (breadth first), node itself excluded — "descendants of G: K, L, M, N". */
const descendantsOf = (k: string): string[] => {
  const out: string[] = [];
  const queue = [...childrenOf(k)];
  while (queue.length) {
    const n = queue.shift() as string;
    out.push(n);
    queue.push(...childrenOf(n));
  }
  return out;
};

/** Chapter convention: root sits at level 0, level = depth. */
const levelOf = (k: string): number => ancestorsOf(k).length;

/** Edges on the longest downward path to a leaf — a leaf is height 0. */
const heightOf = (k: string): number => {
  const kids = childrenOf(k);
  if (!kids.length) return 0;
  return 1 + Math.max(...kids.map(heightOf));
};

/* ------------------------------------------------------------------ */
/* Relation colouring (TreeGraph states)                               */
/* ------------------------------------------------------------------ */

type States = Record<string, TreeGraphNodeState>;

/**
 * Selected → mark tint · parent + ancestors → ink emphasis · children →
 * violet · siblings → danger (TreeGraph has no amber state) ·
 * descendants → green · everything unrelated dims to 22 %.
 */
function relationStates(sel: string): States {
  const st: States = {};
  const parent = parentOf(sel);
  const kids = childrenOf(sel);
  const sibs = siblingsOf(sel);
  const anc = ancestorsOf(sel);
  const desc = descendantsOf(sel);
  for (const k of ALL_KEYS) {
    if (k === sel) st[k] = "selected";
    else if (parent !== null && k === parent) st[k] = "path";
    else if (kids.includes(k)) st[k] = "visiting";
    else if (sibs.includes(k)) st[k] = "error";
    else if (anc.includes(k)) st[k] = "path";
    else if (desc.includes(k)) st[k] = "found";
    else st[k] = "dim";
  }
  return st;
}

/* ------------------------------------------------------------------ */
/* Legend + fact-sheet chip styling                                     */
/* ------------------------------------------------------------------ */

const REL_COLORS: Record<string, string> = {
  selected: "bg-mark",
  path: "bg-ink",
  visiting: "bg-visit",
  error: "bg-danger",
  found: "bg-ok",
};

const LEGEND: { label: string; dot: string; chip: string }[] = [
  {
    label: "Selected / subtree root",
    dot: REL_COLORS.selected,
    chip: "bg-mark text-ink border-ink",
  },
  {
    label: "Parent · ancestors",
    dot: REL_COLORS.path,
    chip: "bg-paper-sunken text-ink border-2 border-ink",
  },
  {
    label: "Children",
    dot: REL_COLORS.visiting,
    chip: "bg-visit-soft text-visit border-visit",
  },
  {
    label: "Siblings",
    dot: REL_COLORS.error,
    chip: "bg-danger-soft text-danger border-danger",
  },
  {
    label: "Descendants",
    dot: REL_COLORS.found,
    chip: "bg-ok-soft text-ok border-ok",
  },
];

const join = (xs: string[]) => (xs.length ? xs.join(", ") : "none");

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export function TreeTerminologyViz({ caption }: { caption?: string }) {
  const [sel, setSel] = useState<string | null>(null);

  const tree: TreeGraphNode = {
    key: ROOT,
    label: ROOT,
    children: childrenOf(ROOT).map(buildNode),
  };

  const facts = sel === null ? null : buildFacts(sel);
  const status =
    sel === null
      ? "No node selected. Click any node in the tree to read its full record."
      : `Node ${sel} selected. Parent ${joinOrDash(parentOf(sel))}, children ${join(childrenOf(sel)) || "none"}, subtree has ${1 + descendantsOf(sel).length} nodes.`;

  return (
    <figure className="print-avoid-break my-6 border border-hairline p-4 viz-shell">
      <div className="tree-wrap">
        <TreeGraph
          root={tree}
          nodeStates={sel === null ? {} : relationStates(sel)}
          onNodeClick={(key) => setSel((cur) => (cur === key ? null : key))}
          ariaLabel="General tree with nodes A to N; click a node to explore its terminology"
        />
      </div>

      {/* Legend + clear button */}
      <div className="no-print mt-3 flex flex-wrap items-center justify-center gap-2">
        {LEGEND.map((l) => (
          <span
            key={l.label}
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs ${l.chip}`}
          >
            <span className={`inline-block size-2 rounded-full ${l.dot}`} aria-hidden />
            {l.label}
          </span>
        ))}
        <span className="inline-flex items-center gap-1.5 rounded-full border border-hairline px-2.5 py-0.5 text-xs text-ink-faint">
          Unrelated (dimmed)
        </span>
        <button
          type="button"
          onClick={() => setSel(null)}
          disabled={sel === null}
          className={btnGhost}
        >
          <Eraser className="size-4" aria-hidden />
          Clear selection
        </button>
      </div>

      <p aria-live="polite" className="sr-only">
        {status}
      </p>

      {/* Fact sheet */}
      <div className="mt-3 rounded-md border border-hairline bg-paper-sunken p-3">
        {facts ? (
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {facts.map((f) => (
              <div
                key={f.label}
                className="rounded-md border border-hairline bg-paper-raised px-3 py-2"
              >
                <div className="flex items-center gap-1.5">
                  {f.dot ? (
                    <span
                      className={`inline-block size-2 shrink-0 rounded-full ${f.dot}`}
                      aria-hidden
                    />
                  ) : null}
                  <span className="font-mono text-[11px] uppercase tracking-wide text-ink-faint">
                    {f.label}
                  </span>
                </div>
                <div className="mt-0.5 font-mono text-sm text-ink">{f.value}</div>
              </div>
            ))}
          </div>
        ) : (
          <p className="px-1 py-4 text-center text-sm text-ink-muted">
            Click any node above. Parent, children, siblings, ancestors,
            descendants, its subtree, level, depth, height and degree light up
            together with a full fact sheet.
          </p>
        )}
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

function buildNode(key: string): TreeGraphNode {
  const kids = childrenOf(key);
  return {
    key,
    label: key,
    children: kids.length ? kids.map(buildNode) : undefined,
  };
}

const joinOrDash = (x: string | null): string => x ?? "none";

function buildFacts(sel: string): { label: string; value: string; dot?: string }[] {
  const kids = childrenOf(sel);
  const desc = descendantsOf(sel);
  const internal = kids.length > 0;
  return [
    {
      label: "Node",
      value: `${sel}: ${internal ? "internal node" : "leaf (external node)"}`,
      dot: REL_COLORS.selected,
    },
    { label: "Parent", value: joinOrDash(parentOf(sel)), dot: REL_COLORS.path },
    { label: "Children", value: join(kids), dot: REL_COLORS.visiting },
    { label: "Siblings", value: join(siblingsOf(sel)), dot: REL_COLORS.error },
    { label: "Ancestors", value: join(ancestorsOf(sel)), dot: REL_COLORS.path },
    { label: "Descendants", value: join(desc), dot: REL_COLORS.found },
    {
      label: `Subtree rooted at ${sel}`,
      value: join([sel, ...desc]),
      dot: REL_COLORS.selected,
    },
    { label: "Level", value: String(levelOf(sel)) },
    { label: "Depth", value: String(levelOf(sel)) },
    { label: "Height of node", value: String(heightOf(sel)) },
    { label: "Degree", value: String(kids.length) },
  ];
}
