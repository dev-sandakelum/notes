"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import type { VizKind } from "@/content/types";
import { PlayerFullscreenButton, PlayerFullscreenProvider, slugForKind } from "./fullscreen-button";
import { PlayerSkeleton } from "@/components/loading/skeletons";

/* Route-level code splitting: each visualization is its own lazy chunk. */
const registry: Record<VizKind, React.ComponentType<{ caption?: string }>> = {
  stack: dynamic(() => import("./stack-viz").then((m) => m.StackViz)),
  queue: dynamic(() => import("./queue-viz").then((m) => m.QueueViz)),
  bst: dynamic(() => import("./bst-viz").then((m) => m.BstViz)),
  bstTraversal: dynamic(() =>
    import("./bst-traversal-viz").then((m) => m.BstTraversalViz)
  ),
  sorting: dynamic(() => import("./sorting-viz").then((m) => m.SortingViz)),
  hash: dynamic(() => import("./hash-viz").then((m) => m.HashViz)),
  ppc: dynamic(() => import("./ppc-viz").then((m) => m.PpcViz)),
  parabola: dynamic(() => import("./parabola-viz").then((m) => m.ParabolaViz)),
  terminology: dynamic(() =>
    import("./tree-terminology-viz").then((m) => m.TreeTerminologyViz)
  ),
  avlTree: dynamic(() => import("./avl-tree-viz").then((m) => m.AvlTreeViz)),
  avlRotations: dynamic(() =>
    import("./avl-rotations-viz").then((m) => m.AvlRotationsViz)
  ),
  avlInsert: dynamic(() =>
    import("./avl-insert-viz").then((m) => m.AvlInsertViz)
  ),
  bstDelete: dynamic(() =>
    import("./bst-delete-viz").then((m) => m.BstDeleteViz)
  ),
  avlCases: dynamic(() =>
    import("./avl-rotation-cases-viz").then((m) => m.AvlRotationCasesViz)
  ),
  avlCompare: dynamic(() =>
    import("./avl-compare-viz").then((m) => m.AvlCompareViz)
  ),
  traversalPlayer: dynamic(() =>
    import("./traversal-player").then((m) => m.TraversalPlayer)
  ),
  notationPlayer: dynamic(() =>
    import("./notation-player").then((m) => m.NotationPlayer)
  ),
  postfixEval: dynamic(() =>
    import("./postfix-eval-player").then((m) => m.PostfixEvalPlayer)
  ),
  infixPostfix: dynamic(() =>
    import("./infix-postfix-player").then((m) => m.InfixPostfixPlayer)
  ),
  linkedList: dynamic(() =>
    import("./linked-list-player").then((m) => m.LinkedListPlayer)
  ),
  circularQueue: dynamic(() =>
    import("./circular-queue-player").then((m) => m.CircularQueuePlayer)
  ),
};

/**
 * Mounts a visualization only when it scrolls near the viewport
 * (IntersectionObserver) so below-the-fold charts cost nothing up front.
 * The placeholder keeps a stable min-height to protect CLS.
 */
export function LazyViz({ kind, caption }: { kind: VizKind; caption?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      const raf = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(raf);
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Comp = registry[kind];
  const slug = slugForKind(kind);

  return (
    // The wrapper hugs the player card exactly (the figure's own margins
    // collapse through this padding/border-free block), so an absolutely
    // positioned child lands precisely INSIDE the card's top-right corner.
    <div ref={ref} className="relative min-h-[200px]">
      {visible ? (
        <PlayerFullscreenProvider slug={slug ?? ""}>
          <Comp caption={caption} />
          {/* Fullscreen: same player, own stable route, new tab — tiny
              icon-only button overlaid in the card corner, zero layout. */}
          {slug ? <PlayerFullscreenButton /> : null}
        </PlayerFullscreenProvider>
      ) : (
        <PlayerSkeleton />
      )}
    </div>
  );
}
