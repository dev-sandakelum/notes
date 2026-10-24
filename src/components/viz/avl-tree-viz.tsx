"use client";

import { TreeGraph, type TreeGraphNode } from "./tree-graph";

/**
 * Static "A valid AVL tree" figure (ch10) — replaces the original SVG
 * whose edges carried invalid cy1/cy2 attributes and never rendered.
 * Tree: 20 → (10 → (5, 15)), (40 → (30, 50)), every node badged with
 * its balance factor. Heights follow the chapter's own convention
 * (height of an empty subtree = −1, height of a leaf = 0), so the
 * leaves sit at height 0, nodes 10 and 40 at height 1, the root at
 * height 2 — and every balance factor is 0.
 */

const STATIC_TREE: TreeGraphNode = {
  key: "20",
  label: "20",
  badge: "0",
  badgeTone: "ok",
  children: [
    {
      key: "10",
      label: "10",
      badge: "0",
      badgeTone: "ok",
      children: [
        { key: "5", label: "5", badge: "0", badgeTone: "ok" },
        { key: "15", label: "15", badge: "0", badgeTone: "ok" },
      ],
    },
    {
      key: "40",
      label: "40",
      badge: "0",
      badgeTone: "ok",
      children: [
        { key: "30", label: "30", badge: "0", badgeTone: "ok" },
        { key: "50", label: "50", badge: "0", badgeTone: "ok" },
      ],
    },
  ],
};

export function AvlTreeViz({ caption }: { caption?: string }) {
  return (
    <figure className="print-avoid-break my-6 rounded-md border border-hairline bg-paper-raised p-4 viz-shell">
      <TreeGraph
        root={STATIC_TREE}
        ariaLabel="AVL tree with root 20, children 10 and 40, leaves 5, 15, 30 and 50 — every balance factor is 0"
        className="mx-auto h-auto w-full max-h-[300px]"
      />

      <div className="mt-3 space-y-1 border-t border-hairline pt-2 text-center">
        <p className="text-caption text-ink-muted">
          <span className="font-mono">
            BF = height(left subtree) − height(right subtree)
          </span>{" "}
          · every node <span className="font-mono">|BF| ≤ 1</span>
        </p>
        <p className="text-caption text-ink-faint">
          Heights with the chapter convention (empty = −1, leaf = 0):{" "}
          <span className="font-mono">20 → 2 · 10, 40 → 1 · 5, 15, 30, 50 → 0</span>{" "}
          — so every balance factor is <span className="font-mono">0</span>.
        </p>
      </div>

      {caption ? (
        <figcaption className="mt-1 text-center text-caption italic text-ink-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
