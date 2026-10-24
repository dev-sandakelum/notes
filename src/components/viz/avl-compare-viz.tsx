"use client";

import { TreeGraph, bfTone, type TreeGraphNode } from "./tree-graph";
import { t } from "./avl-cases-data";

/**
 * "Spot the difference" (ch10): a valid AVL tree next to an invalid one,
 * same size, side by side (two columns at ≥ 900px, stacked below that).
 * Balance factors use the shared pill badge and colour rule everywhere
 * (0 green, ±1 amber, ±2 red), and the offending node is ringed in red
 * with a one-line caption explaining why.
 */

interface VNode {
  k: number;
  l?: VNode;
  r?: VNode;
  ring?: boolean;
}

const VALID: VNode = t(30, t(20, t(10), t(25)), t(40));
const INVALID: VNode = { k: 10, r: { k: 20, r: { k: 30, ring: true } } };

function toGraph(n: VNode, side?: "left" | "right"): TreeGraphNode {
  const kids: TreeGraphNode[] = [];
  if (n.l) kids.push(toGraph(n.l, "left"));
  if (n.r) kids.push(toGraph(n.r, "right"));
  const h = (x?: VNode): number => {
    if (!x) return -1;
    return 1 + Math.max(h(x.l), h(x.r));
  };
  const bf = h(n.l) - h(n.r);
  const g: TreeGraphNode = {
    key: String(n.k),
    label: String(n.k),
    badge: bf > 0 ? `+${bf}` : bf < 0 ? `−${-bf}` : "0",
    badgeTone: bfTone(bf),
    side,
    ring: n.ring,
  };
  if (kids.length) g.children = kids;
  return g;
}

function Panel({
  title,
  ok,
  caption,
  tree,
}: {
  title: string;
  ok: boolean;
  caption: string;
  tree: VNode;
}) {
  return (
    <section
      className={`rounded-2xl border bg-paper-raised p-4 ${
        ok ? "border-ok" : "border-danger"
      }`}
    >
      <h4
        className={`text-center font-display text-[1rem] font-bold ${
          ok ? "text-ok" : "text-danger"
        }`}
      >
        {title}
      </h4>
      <div className="mt-2">
        <TreeGraph
          root={toGraph(tree)}
          levelHeight={76}
          animateEntry={false}
          ariaLabel={caption}
        />
      </div>
      <p className="mt-2 border-t border-hairline pt-2 text-center text-sm text-ink-muted">
        {caption}
      </p>
    </section>
  );
}

export function AvlCompareViz({ caption }: { caption?: string }) {
  return (
    <figure className="print-avoid-break my-6 border border-hairline p-4 viz-shell">
      <div className="compare2">
        <Panel
          title="Valid AVL tree"
          ok
          caption="Every node has BF 0 or +1 (30: +1, all others 0), so the AVL rule holds."
          tree={VALID}
        />
        <Panel
          title="Not an AVL tree"
          ok={false}
          caption="BF(10) = −2 (right side two levels taller), so the AVL rule is broken and a rotation is required."
          tree={INVALID}
        />
      </div>

      <p className="mt-3 text-center text-sm text-ink-muted">
        A valid BST is not automatically a valid AVL tree. Compute the
        balance factor of every node; one node with BF ±2 disqualifies the
        tree.
      </p>

      {caption ? (
        <figcaption className="mt-2 border-t border-hairline pt-2 text-center text-caption italic text-ink-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
