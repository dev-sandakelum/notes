/**
 * Shared data for the AVL rotation material (ch10), items 3 and 5.
 *
 * One numeric example set, used by BOTH the animated rotation player
 * (AvlRotationsViz) and the static case cards (AvlRotationCasesViz):
 *
 *   Case | z  | y  | x  | Rotation(s)
 *   LL   | 30 | 20 | 10 | right at 30
 *   RR   | 10 | 20 | 30 | left at 10
 *   LR   | 30 | 10 | 20 | left at 10, then right at 30
 *   RL   | 10 | 30 | 20 | right at 30, then left at 10
 *
 * T0-T3 are the keys 5, 15, 25, 35 (left-to-right) in every case, and
 * all four cases end as the same balanced tree 20(10(5,15),30(25,35)).
 * Balance factors are computed from the real tree at every step.
 */

import { bfTone, type TreeGraphNode } from "./tree-graph";

export type RotCase = "LL" | "RR" | "LR" | "RL";

export interface NTree {
  k: number;
  l?: NTree;
  r?: NTree;
}

export const t = (k: number, l?: NTree, r?: NTree): NTree => ({ k, l, r });

/** Height in edges, chapter convention: empty = −1, leaf = 0. */
export function heightOf(n: NTree | undefined): number {
  if (!n) return -1;
  return 1 + Math.max(heightOf(n.l), heightOf(n.r));
}

export function bfOfTree(n: NTree): number {
  return heightOf(n.l) - heightOf(n.r);
}

/** Unicode-signed balance factor: +2 / 0 / −1 … */
export function fmtBF(b: number): string {
  return b > 0 ? `+${b}` : b < 0 ? `−${-b}` : "0";
}

/* ------------------------------------------------------------------ */
/* The trees                                                           */
/* ------------------------------------------------------------------ */

// LL: 30(20(10(5,15),25),35) → 20(10(5,15),30(25,35))
export const LL_BEFORE = t(30, t(20, t(10, t(5), t(15)), t(25)), t(35));
// RR: 10(5,20(15,30(25,35))) → 20(10(5,15),30(25,35))
export const RR_BEFORE = t(10, t(5), t(20, t(15), t(30, t(25), t(35))));
// LR: 30(10(5,20(15,25)),35) → 30(20(10(5,15),25),35) → 20(10(5,15),30(25,35))
export const LR_BEFORE = t(30, t(10, t(5), t(20, t(15), t(25))), t(35));
export const LR_MID = t(30, t(20, t(10, t(5), t(15)), t(25)), t(35));
// RL: 10(5,30(20(15,25),35)) → 10(5,20(15,30(25,35))) → 20(10(5,15),30(25,35))
export const RL_BEFORE = t(10, t(5), t(30, t(20, t(15), t(25)), t(35)));
export const RL_MID = t(10, t(5), t(20, t(15), t(30, t(25), t(35))));

/** Every case ends here: 20(10(5,15),30(25,35)). */
export const AFTER = t(20, t(10, t(5), t(15)), t(30, t(25), t(35)));

/* ------------------------------------------------------------------ */
/* Case definitions                                                    */
/* ------------------------------------------------------------------ */

export interface RotStep {
  label: string;
  desc: string;
  tree: NTree;
  /** Node pulsed during this step ("z" | "y" | "x" key). */
  focus?: number;
  dwell?: number;
}

export interface RotCaseDef {
  id: RotCase;
  /** Card / chip heading, sentence case. */
  name: string;
  /** Rotation-type chips shown on the card. */
  chips: string[];
  /** Accent colour (LL blue, RR violet, LR amber, RL teal). */
  accent: string;
  /** Condition with the real numbers, e.g. "BF(30) = +2 and BF(20) ≥ 0". */
  condition: string;
  /** One-paragraph summary with the numbers. */
  blurb: string;
  /** Numbered plain-English steps for the static card. */
  cardSteps: string[];
  /** One-line takeaway for the static card. */
  takeaway: string;
  /** Player step list. */
  steps: RotStep[];
}

export const CASE_ORDER: RotCase[] = ["LL", "RR", "LR", "RL"];

export const CASES: Record<RotCase, RotCaseDef> = {
  LL: {
    id: "LL",
    name: "LL case: single right rotation",
    chips: ["LL", "single rotation", "right"],
    accent: "#2563eb",
    condition: "BF(30) = +2 and BF(20) ≥ 0",
    blurb:
      "Insert into the LEFT subtree of the LEFT child. BF(30) = +2 and BF(20) = +1, " +
      "so one RIGHT rotation at 30 fixes it. 20 becomes the subtree root, 30 swings " +
      "down to the right, and 20's old right child 25 becomes 30's new left child. " +
      "Result: 20(10(5,15),30(25,35)), balanced.",
    cardSteps: [
      "The new key lands in the left subtree of 30's left child; the 30 → 20 → 10 path leans left, left.",
      "BF(30) = +2 and BF(20) = +1, so this is the LL case.",
      "RIGHT rotation at 30: 20 rises to head the subtree.",
      "30 swings down to 20's right; 20's old right child 25 becomes 30's new left child.",
      "5, 15 and 35 stay put. Every BF is now 0.",
    ],
    takeaway: "One right rotation at 30 turns 30(20(10(5,15),25),35) into 20(10(5,15),30(25,35)).",
    steps: [
      {
        label: "Before",
        desc:
          "The new key landed in the left subtree of 30's left child. The 30 → 20 → 10 " +
          "path leans left, left. BF(30) = +2, BF(20) = +1, every other node is 0.",
        tree: LL_BEFORE,
      },
      {
        label: "Highlight z",
        desc:
          "z = 30 is the lowest unbalanced ancestor: BF(30) = +2. The left side is two " +
          "levels taller than the right (20's subtree has height 2, node 35 has height 0).",
        tree: LL_BEFORE,
        focus: 30,
      },
      {
        label: "Highlight y",
        desc:
          "y = 20, the left child of 30 (the heavy side). BF(20) = +1 ≥ 0, so the heavy " +
          "grandchild is also on the left: a straight left line, the LL case. One right rotation cures it.",
        tree: LL_BEFORE,
        focus: 20,
      },
      {
        label: "Highlight x",
        desc:
          "x = 10, the left child of 20. The new key landed inside its subtree (5 or 15).",
        tree: LL_BEFORE,
        focus: 10,
      },
      {
        label: "RIGHT rotation at 30",
        desc:
          "20 rises to head the subtree. 30 swings down to 20's right, and 20's old right " +
          "child 25 is handed to 30 as its new left child. 5, 15 and 35 stay put.",
        tree: AFTER,
        dwell: 2600,
      },
      {
        label: "After",
        desc:
          "The subtree rooted at 20 is balanced: BF(20) = 0, BF(10) = 0, BF(30) = 0. " +
          "Nothing outside the subtree moved.",
        tree: AFTER,
      },
    ],
  },
  RR: {
    id: "RR",
    name: "RR case: single left rotation",
    chips: ["RR", "single rotation", "left"],
    accent: "#7c3aed",
    condition: "BF(10) = −2 and BF(20) ≤ 0",
    blurb:
      "Insert into the RIGHT subtree of the RIGHT child. BF(10) = −2 and BF(20) = −1, " +
      "so rotate LEFT at 10. 20 becomes the subtree root, 10 swings down-left, and " +
      "20's old left child 15 becomes 10's right child. " +
      "Result: 20(10(5,15),30(25,35)), balanced.",
    cardSteps: [
      "The new key lands in the right subtree of 10's right child; the 10 → 20 → 30 path leans right, right.",
      "BF(10) = −2 and BF(20) = −1, so this is the RR case.",
      "LEFT rotation at 10: 20 rises to head the subtree.",
      "10 swings down to 20's left; 20's old left child 15 becomes 10's new right child.",
      "5, 25 and 35 stay put. Every BF is now 0.",
    ],
    takeaway: "One left rotation at 10 turns 10(5,20(15,30(25,35))) into 20(10(5,15),30(25,35)).",
    steps: [
      {
        label: "Before",
        desc:
          "The new key landed in the right subtree of 10's right child. The 10 → 20 → 30 " +
          "path leans right, right. BF(10) = −2, BF(20) = −1, every other node is 0.",
        tree: RR_BEFORE,
      },
      {
        label: "Highlight z",
        desc:
          "z = 10 is the lowest unbalanced ancestor: BF(10) = −2. The right side is two " +
          "levels taller than the left (20's subtree has height 2, node 5 has height 0).",
        tree: RR_BEFORE,
        focus: 10,
      },
      {
        label: "Highlight y",
        desc:
          "y = 20, the right child of 10 (the heavy side). BF(20) = −1 ≤ 0, so the heavy " +
          "grandchild is also on the right: a straight right line, the RR case. One left rotation cures it.",
        tree: RR_BEFORE,
        focus: 20,
      },
      {
        label: "Highlight x",
        desc:
          "x = 30, the right child of 20. The new key landed inside its subtree (25 or 35).",
        tree: RR_BEFORE,
        focus: 30,
      },
      {
        label: "LEFT rotation at 10",
        desc:
          "20 rises to head the subtree. 10 swings down to 20's left, and 20's old left " +
          "child 15 is handed to 10 as its new right child. 5, 25 and 35 stay put.",
        tree: AFTER,
        dwell: 2600,
      },
      {
        label: "After",
        desc:
          "The subtree rooted at 20 is balanced: BF(20) = 0, BF(10) = 0, BF(30) = 0. " +
          "Nothing outside the subtree moved.",
        tree: AFTER,
      },
    ],
  },
  LR: {
    id: "LR",
    name: "LR case: double rotation (left, then right)",
    chips: ["LR", "double rotation", "left then right"],
    accent: "#d97706",
    condition: "BF(30) = +2 and BF(10) < 0",
    blurb:
      "Insert into the RIGHT subtree of the LEFT child. BF(30) = +2 and BF(10) = −1, " +
      "a zig-zag. Two rotations: LEFT at 10 first (20 rises above 10, straightening the " +
      "bend into a left-left line), then RIGHT at 30. " +
      "Result: 20(10(5,15),30(25,35)), balanced.",
    cardSteps: [
      "The new key lands in the right subtree of 30's left child; the 30 → 10 → 20 path zig-zags.",
      "BF(30) = +2 and BF(10) = −1, so this is the LR case.",
      "Rotation 1: LEFT at 10. 20 rises above 10; 10 swings down-left; 20's old left child 15 becomes 10's right child.",
      "The zig-zag is now a straight left line, but BF(30) is still +2.",
      "Rotation 2: RIGHT at 30 (the LL move). 20 rises to head the subtree; 25 becomes 30's new left child. Every BF is now 0.",
    ],
    takeaway:
      "Left at 10, then right at 30: 30(10(5,20(15,25)),35) becomes 20(10(5,15),30(25,35)).",
    steps: [
      {
        label: "Before",
        desc:
          "The new key landed in the right subtree of 30's left child. The 30 → 10 → 20 " +
          "path zig-zags (left, then right). BF(30) = +2, BF(10) = −1, every other node is 0.",
        tree: LR_BEFORE,
      },
      {
        label: "Highlight z",
        desc:
          "z = 30 is the lowest unbalanced ancestor: BF(30) = +2. The left side is two " +
          "levels taller than the right.",
        tree: LR_BEFORE,
        focus: 30,
      },
      {
        label: "Highlight y",
        desc:
          "y = 10, the left child of 30, but BF(10) = −1 < 0: the heavy grandchild sits on " +
          "10's RIGHT. A zig-zag, not a straight line, so this is the LR case. Two rotations: fix the bend first.",
        tree: LR_BEFORE,
        focus: 10,
      },
      {
        label: "Highlight x",
        desc:
          "x = 20, the right child of 10. The new key landed inside its subtree (15 or 25).",
        tree: LR_BEFORE,
        focus: 20,
      },
      {
        label: "Rotation 1 (left at 10)",
        desc:
          "LEFT rotation at 10: 20 rises above 10, 10 swings down-left, and 20's old left " +
          "child 15 becomes 10's right child. The zig-zag is now a straight left line, " +
          "but BF(30) is still +2.",
        tree: LR_MID,
        dwell: 3000,
      },
      {
        label: "Rotation 2 (right at 30)",
        desc:
          "RIGHT rotation at 30, the LL move on the straightened line: 20 rises to head " +
          "the subtree, 30 swings down to 20's right, and 20's old right child 25 becomes " +
          "30's new left child.",
        tree: AFTER,
        dwell: 2600,
      },
      {
        label: "After",
        desc:
          "The subtree rooted at 20 is balanced: BF(20) = 0, BF(10) = 0, BF(30) = 0. " +
          "Nothing outside the subtree moved.",
        tree: AFTER,
      },
    ],
  },
  RL: {
    id: "RL",
    name: "RL case: double rotation (right, then left)",
    chips: ["RL", "double rotation", "right then left"],
    accent: "#0d9488",
    condition: "BF(10) = −2 and BF(30) > 0",
    blurb:
      "Insert into the LEFT subtree of the RIGHT child. BF(10) = −2 and BF(30) = +1, " +
      "a zig-zag the other way. Two rotations: RIGHT at 30 first (20 rises above 30), " +
      "then LEFT at 10. " +
      "Result: 20(10(5,15),30(25,35)), balanced.",
    cardSteps: [
      "The new key lands in the left subtree of 10's right child; the 10 → 30 → 20 path zig-zags.",
      "BF(10) = −2 and BF(30) = +1, so this is the RL case.",
      "Rotation 1: RIGHT at 30. 20 rises above 30; 30 swings down-right; 20's old right child 25 becomes 30's new left child.",
      "The zig-zag is now a straight right line, but BF(10) is still −2.",
      "Rotation 2: LEFT at 10 (the RR move). 20 rises to head the subtree; 15 becomes 10's new right child. Every BF is now 0.",
    ],
    takeaway:
      "Right at 30, then left at 10: 10(5,30(20(15,25),35)) becomes 20(10(5,15),30(25,35)).",
    steps: [
      {
        label: "Before",
        desc:
          "The new key landed in the left subtree of 10's right child. The 10 → 30 → 20 " +
          "path zig-zags (right, then left). BF(10) = −2, BF(30) = +1, every other node is 0.",
        tree: RL_BEFORE,
      },
      {
        label: "Highlight z",
        desc:
          "z = 10 is the lowest unbalanced ancestor: BF(10) = −2. The right side is two " +
          "levels taller than the left.",
        tree: RL_BEFORE,
        focus: 10,
      },
      {
        label: "Highlight y",
        desc:
          "y = 30, the right child of 10, but BF(30) = +1 > 0: the heavy grandchild sits on " +
          "30's LEFT. A zig-zag the other way, so this is the RL case. Two rotations: fix the bend first.",
        tree: RL_BEFORE,
        focus: 30,
      },
      {
        label: "Highlight x",
        desc:
          "x = 20, the left child of 30. The new key landed inside its subtree (15 or 25).",
        tree: RL_BEFORE,
        focus: 20,
      },
      {
        label: "Rotation 1 (right at 30)",
        desc:
          "RIGHT rotation at 30: 20 rises above 30, 30 swings down-right, and 20's old " +
          "right child 25 becomes 30's new left child. The zig-zag is now a straight " +
          "right line, but BF(10) is still −2.",
        tree: RL_MID,
        dwell: 3000,
      },
      {
        label: "Rotation 2 (left at 10)",
        desc:
          "LEFT rotation at 10, the RR move on the straightened line: 20 rises to head " +
          "the subtree, 10 swings down to 20's left, and 20's old left child 15 becomes " +
          "10's new right child.",
        tree: AFTER,
        dwell: 2600,
      },
      {
        label: "After",
        desc:
          "The subtree rooted at 20 is balanced: BF(20) = 0, BF(10) = 0, BF(30) = 0. " +
          "Nothing outside the subtree moved.",
        tree: AFTER,
      },
    ],
  },
};

/** Shared takeaway line shown under the player and the cards. */
export const KEY_TAKEAWAY =
  "All four cases end as the same balanced tree: 20(10(5,15),30(25,35)).";

/* ------------------------------------------------------------------ */
/* Tree → TreeGraph conversion (shared by player and cards)           */
/* ------------------------------------------------------------------ */

/** Role of each key in the current case. */
export const ROLES: Record<RotCase, { z: number; y: number; x: number }> = {
  LL: { z: 30, y: 20, x: 10 },
  RR: { z: 10, y: 20, x: 30 },
  LR: { z: 30, y: 10, x: 20 },
  RL: { z: 10, y: 30, x: 20 },
};

/**
 * Converts a case tree to a TreeGraph root: real keys as labels, BF
 * badges computed from the structure, z/y/x role tags, and the
 * unbalanced node ringed red while its |BF| is still 2.
 */
export function caseTreeToGraph(
  node: NTree,
  roles: { z: number; y: number; x: number },
  side?: "left" | "right"
): TreeGraphNode {
  const kids: TreeGraphNode[] = [];
  if (node.l) kids.push(caseTreeToGraph(node.l, roles, "left"));
  if (node.r) kids.push(caseTreeToGraph(node.r, roles, "right"));
  const bf = bfOfTree(node);
  const g: TreeGraphNode = {
    key: String(node.k),
    label: String(node.k),
    badge: fmtBF(bf),
    badgeTone: bfTone(bf),
    side,
  };
  if (node.k === roles.z) {
    g.tag = "z";
    g.tagTone = "z";
    g.ring = Math.abs(bf) >= 2; // ring the unbalanced node while |BF| = 2
  } else if (node.k === roles.y) {
    g.tag = "y";
    g.tagTone = "y";
  } else if (node.k === roles.x) {
    g.tag = "x";
    g.tagTone = "x";
  }
  if (kids.length) g.children = kids;
  return g;
}
