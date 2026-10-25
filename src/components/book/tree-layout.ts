import type {
  TreeDiagramNodeData,
  TreeDiagramTreeNode as TreeNode,
} from "@/content/types";

/**
 * Shared tidy-tree layout for STATIC tree figures (<TreeDiagram />).
 *
 * Mirrors the rules of the interactive renderer (viz/tree-graph.tsx) but is
 * a pure, server-safe function with per-node radii and annotations:
 *
 *   - in-order x slots via contour packing (Reingold–Tilford style): each
 *     subtree returns its per-depth [min, max] extent and siblings are
 *     packed with a minimum edge-to-edge horizontal gap;
 *   - a parent with two children is centred above them;
 *   - a lone child is ALWAYS offset sideways — left child down-left,
 *     right child down-right (≥ 1.5 × node radius) — so a single-child
 *     edge is never a perfectly vertical line and left/right is readable;
 *   - nodes never overlap: same-depth nodes keep ≥ siblingGap px between
 *     their edges, and contour packing prevents cross-depth collisions.
 *
 * The caller (TreeDiagram) computes the viewBox from the returned geometry,
 * so nothing can ever be cropped.
 */

export interface TreeLayoutOptions {
  /** Vertical distance between levels. Default 78. */
  levelHeight?: number;
  /**
   * Minimum edge-to-edge horizontal gap between sibling subtrees / nodes.
   * Default 24.
   */
  siblingGap?: number;
  /** Sideways offset for a lone child (default 1.5 × parent radius). */
  loneOffset?: number;
}

export interface LaidOutNode extends TreeDiagramNodeData {
  x: number;
  y: number;
  r: number;
  note?: string;
}

export interface LaidOutTree {
  nodes: LaidOutNode[];
  edges: [string, string][];
  /** Bounding box of the laid-out geometry (node circles included). */
  width: number;
  height: number;
}

interface PlaceCtx {
  levelHeight: number;
  siblingGap: number;
  loneOffset: number;
  rel: Map<TreeNode, number>;
  nodes: LaidOutNode[];
  edges: [string, string][];
}

/** Per-depth horizontal extent of a subtree, relative to its root (x = 0). */
type Extent = Array<[min: number, max: number]>;

function radiusOf(n: TreeNode): number {
  return n.r ?? 21;
}

function mergeInto(target: Extent, src: Extent, shift: number): void {
  for (let k = 0; k < src.length; k++) {
    const lo = src[k][0] + shift;
    const hi = src[k][1] + shift;
    if (k < target.length) {
      if (lo < target[k][0]) target[k][0] = lo;
      if (hi > target[k][1]) target[k][1] = hi;
    } else {
      target.push([lo, hi]);
    }
  }
}

function place(node: TreeNode, depth: number, ctx: PlaceCtx): Extent {
  const r = radiusOf(node);
  const kids = node.children ?? [];
  const own: Extent = [[-r, r]];

  if (kids.length === 0) {
    return own;
  }

  if (kids.length === 1) {
    /* Lone child: offset sideways in its slot direction so the edge is
       never vertical. Children without an explicit side default to the
       right (general trees keep a readable diagonal either way). */
    const kid = kids[0];
    const dir = kid.side === "left" ? -1 : 1;
    const rk = radiusOf(kid);
    const offset =
      dir * Math.max(ctx.loneOffset ?? r * 1.5, r + rk + ctx.siblingGap / 2);
    const childExtent = place(kid, depth + 1, ctx);
    ctx.rel.set(kid, offset);
    mergeInto(own, childExtent, offset);
    return own;
  }

  /* Two or more children: pack each child's contour against the previous
     one with the minimum edge-to-edge gap, then centre the parent above
     the children span (in-order x slots emerge from the packing). */
  const extents = kids.map((kid) => place(kid, depth + 1, ctx));
  const positions: number[] = [0];
  for (let i = 1; i < kids.length; i++) {
    let need = -Infinity;
    const common = Math.min(extents[i - 1].length, extents[i].length);
    for (let k = 0; k < common; k++) {
      need = Math.max(need, extents[i - 1][k][1] - extents[i][k][0]);
    }
    positions[i] = positions[i - 1] + need + ctx.siblingGap;
  }
  const mid = (positions[0] + positions[positions.length - 1]) / 2;
  for (let i = 0; i < kids.length; i++) {
    ctx.rel.set(kids[i], positions[i] - mid);
    mergeInto(own, extents[i], positions[i] - mid);
  }
  return own;
}

/** Lay out a tree; returns positioned nodes and [parentId, childId] edges. */
export function layoutTreeDiagram(
  root: TreeNode,
  opts: TreeLayoutOptions = {},
): LaidOutTree {
  const ctx: PlaceCtx = {
    levelHeight: opts.levelHeight ?? 78,
    siblingGap: opts.siblingGap ?? 24,
    loneOffset: opts.loneOffset ?? radiusOf(root) * 1.5,
    rel: new Map(),
    nodes: [],
    edges: [],
  };

  place(root, 0, ctx);

  /* Pre-order pass: relative offsets -> absolute coordinates. */
  let minX = Infinity;
  let maxX = -Infinity;
  let maxDepth = 0;
  const abs = (node: TreeNode, depth: number, ax: number) => {
    const x = ax + (ctx.rel.get(node) ?? 0);
    const r = radiusOf(node);
    maxDepth = Math.max(maxDepth, depth);
    ctx.nodes.push({
      id: node.id,
      label: node.label,
      x,
      y: depth * ctx.levelHeight,
      r,
      note: node.note,
    });
    minX = Math.min(minX, x - r);
    maxX = Math.max(maxX, x + r);
    for (const kid of node.children ?? []) {
      ctx.edges.push([node.id, kid.id]);
      abs(kid, depth + 1, x);
    }
  };
  abs(root, 0, 0);

  /* Normalise so the geometry starts at x = 0 (TreeDiagram adds its own
     viewBox padding; nothing is cropped either way). */
  if (Number.isFinite(minX) && minX !== 0) {
    const shift = -minX;
    for (const n of ctx.nodes) n.x += shift;
    maxX += shift;
  }

  const last = ctx.nodes[ctx.nodes.length - 1];
  const height = last ? last.y + last.r : 0;
  return {
    nodes: ctx.nodes,
    edges: ctx.edges,
    width: Number.isFinite(maxX) ? maxX : 0,
    height,
  };
}
