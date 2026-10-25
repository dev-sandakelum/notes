import type { ComponentType } from "react";
import type { VizKind } from "@/content/types";

/**
 * Central registry of every interactive player on the site.
 *
 * One source of truth for:
 *   - the stable fullscreen path  /notes/play/<slug>  (opened in a new tab
 *     by the "Fullscreen" button on every player),
 *   - the pretty title + home chapter ("Back to chapter" link),
 *   - the lazy component loader shared by the inline (LazyViz) and the
 *     fullscreen route,
 *   - optional URL query params the fullscreen page forwards as props
 *     (e.g. /notes/play/postfix-evaluation?expr=5 3 + 8 2 - *).
 */

export type PlayerProps = { caption?: string } & Record<string, unknown>;

export interface PlayerQueryParam {
  /** URL query parameter name, e.g. "expr". */
  param: string;
  /** Prop name forwarded to the component, e.g. "initialExpr". */
  prop: string;
  /** Human hint shown on the fullscreen page. */
  hint: string;
}

export interface PlayerEntry {
  slug: string;
  title: string;
  /** Inline home of the player (book + chapter). */
  chapterHref: string;
  /** Short chapter label for the "Back to chapter" link. */
  chapterLabel: string;
  /** The viz kind this player serves (for the fullscreen buttons). */
  kind: VizKind;
  /** Lazy component loader. */
  load: () => Promise<ComponentType<PlayerProps>>;
  /** Optional query params forwarded as props. */
  query?: PlayerQueryParam[];
}

export const PLAYER_REGISTRY: PlayerEntry[] = [
  {
    slug: "stack-operations",
    title: "Stack operations",
    chapterHref: "/notes/dsa/04-stacks",
    chapterLabel: "Chapter 4 · Stacks",
    kind: "stack",
    load: () => import("./stack-viz").then((m) => m.StackViz),
  },
  {
    slug: "queue-operations",
    title: "Queue operations",
    chapterHref: "/notes/dsa/05-queues",
    chapterLabel: "Chapter 5 · Queues",
    kind: "queue",
    load: () => import("./queue-viz").then((m) => m.QueueViz),
  },
  {
    slug: "tree-terminology",
    title: "Tree terminology explorer",
    chapterHref: "/notes/dsa/07-trees-and-binary-trees",
    chapterLabel: "Chapter 7 · Trees & binary trees",
    kind: "terminology",
    load: () => import("./tree-terminology-viz").then((m) => m.TreeTerminologyViz),
  },
  {
    slug: "traversal-trainer",
    title: "Traversal trainer",
    chapterHref: "/notes/dsa/08-tree-traversals",
    chapterLabel: "Chapter 8 · Tree traversals",
    kind: "bstTraversal",
    load: () => import("./bst-traversal-viz").then((m) => m.BstTraversalViz),
  },
  {
    slug: "tree-traversals",
    title: "Tree traversal trace",
    chapterHref: "/notes/dsa/08-tree-traversals",
    chapterLabel: "Chapter 8 · Tree traversals",
    kind: "traversalPlayer",
    load: () => import("./traversal-player").then((m) => m.TraversalPlayer),
  },
  {
    slug: "notation-builder",
    title: "Prefix · infix · postfix builder",
    chapterHref: "/notes/dsa/08-tree-traversals",
    chapterLabel: "Chapter 8 · Tree traversals",
    kind: "notationPlayer",
    load: () => import("./notation-player").then((m) => m.NotationPlayer),
  },
  {
    slug: "postfix-evaluation",
    title: "Postfix evaluation",
    chapterHref: "/notes/dsa/08-tree-traversals",
    chapterLabel: "Chapter 8 · Tree traversals",
    kind: "postfixEval",
    load: () => import("./postfix-eval-player").then((m) => m.PostfixEvalPlayer),
    query: [
      {
        param: "expr",
        prop: "initialExpr",
        hint: "?expr=5 3 + 8 2 - * · start with a custom postfix expression",
      },
    ],
  },
  {
    slug: "infix-to-postfix",
    title: "Infix → postfix (shunting yard)",
    chapterHref: "/notes/dsa/08-tree-traversals",
    chapterLabel: "Chapter 8 · Tree traversals",
    kind: "infixPostfix",
    load: () => import("./infix-postfix-player").then((m) => m.InfixPostfixPlayer),
  },
  {
    slug: "bst-builder",
    title: "BST builder",
    chapterHref: "/notes/dsa/09-binary-search-trees",
    chapterLabel: "Chapter 9 · Binary search trees",
    kind: "bst",
    load: () => import("./bst-viz").then((m) => m.BstViz),
  },
  {
    slug: "bst-delete",
    title: "BST deletion playground",
    chapterHref: "/notes/dsa/09-binary-search-trees",
    chapterLabel: "Chapter 9 · Binary search trees",
    kind: "bstDelete",
    load: () => import("./bst-delete-viz").then((m) => m.BstDeleteViz),
  },
  {
    slug: "avl-tree",
    title: "AVL tree builder",
    chapterHref: "/notes/dsa/10-avl-trees-and-balanced-trees",
    chapterLabel: "Chapter 10 · AVL trees",
    kind: "avlTree",
    load: () => import("./avl-tree-viz").then((m) => m.AvlTreeViz),
  },
  {
    slug: "avl-rotations",
    title: "AVL rotations",
    chapterHref: "/notes/dsa/10-avl-trees-and-balanced-trees",
    chapterLabel: "Chapter 10 · AVL trees",
    kind: "avlRotations",
    load: () => import("./avl-rotations-viz").then((m) => m.AvlRotationsViz),
  },
  {
    slug: "avl-rotation-cases",
    title: "AVL rotation cases",
    chapterHref: "/notes/dsa/10-avl-trees-and-balanced-trees",
    chapterLabel: "Chapter 10 · AVL trees",
    kind: "avlCases",
    load: () => import("./avl-rotation-cases-viz").then((m) => m.AvlRotationCasesViz),
  },
  {
    slug: "avl-insert",
    title: "AVL insert trace",
    chapterHref: "/notes/dsa/10-avl-trees-and-balanced-trees",
    chapterLabel: "Chapter 10 · AVL trees",
    kind: "avlInsert",
    load: () => import("./avl-insert-viz").then((m) => m.AvlInsertViz),
  },
  {
    slug: "avl-compare",
    title: "BST vs AVL comparison",
    chapterHref: "/notes/dsa/10-avl-trees-and-balanced-trees",
    chapterLabel: "Chapter 10 · AVL trees",
    kind: "avlCompare",
    load: () => import("./avl-compare-viz").then((m) => m.AvlCompareViz),
  },
  {
    slug: "sorting",
    title: "Sorting algorithms",
    chapterHref: "/notes/dsa/12-sorting-algorithms",
    chapterLabel: "Chapter 12 · Sorting algorithms",
    kind: "sorting",
    load: () => import("./sorting-viz").then((m) => m.SortingViz),
  },
  {
    slug: "hash-table",
    title: "Hash table",
    chapterHref: "/notes/dsa/13-hashing",
    chapterLabel: "Chapter 13 · Hashing",
    kind: "hash",
    load: () => import("./hash-viz").then((m) => m.HashViz),
  },
  {
    slug: "linked-list-insert",
    title: "Linked list operations",
    chapterHref: "/notes/dsa/06-linked-lists",
    chapterLabel: "Chapter 6 · Linked lists",
    kind: "linkedList",
    load: () => import("./linked-list-player").then((m) => m.LinkedListPlayer),
  },
  {
    slug: "circular-queue",
    title: "Circular queue",
    chapterHref: "/notes/dsa/05-queues",
    chapterLabel: "Chapter 5 · Queues",
    kind: "circularQueue",
    load: () => import("./circular-queue-player").then((m) => m.CircularQueuePlayer),
    query: [
      {
        param: "scenario",
        prop: "initialScenario",
        hint: "?scenario=wrap · start with the wrap-around demo scenario",
      },
    ],
  },
  {
    slug: "ppc",
    title: "Production possibility curve",
    chapterHref: "/notes/econ/02-production-possibility-curve-ppc",
    chapterLabel: "Econ Chapter 2 · PPC",
    kind: "ppc",
    load: () => import("./ppc-viz").then((m) => m.PpcViz),
  },
  {
    slug: "parabola",
    title: "Parabola explorer",
    chapterHref: "/notes/maths/08-quadratic-graphs",
    chapterLabel: "Maths Chapter 8 · Quadratic graphs",
    kind: "parabola",
    load: () => import("./parabola-viz").then((m) => m.ParabolaViz),
  },
];

export const PLAYER_BY_SLUG: ReadonlyMap<string, PlayerEntry> = new Map(
  PLAYER_REGISTRY.map((e) => [e.slug, e]),
);

export const PLAYER_BY_KIND: ReadonlyMap<VizKind, PlayerEntry> = new Map(
  PLAYER_REGISTRY.map((e) => [e.kind, e]),
);

export function playerFullscreenPath(slug: string): string {
  return `/notes/play/${slug}`;
}
