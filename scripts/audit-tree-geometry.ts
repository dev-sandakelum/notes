/**
 * Geometry audit for every treeDiagram block on the site.
 * Flags:
 *  - vertical single-child edges (child exactly below parent, |dx| < 6)
 *  - node pairs closer than min edge-to-edge gap (touching / crowding)
 *  - nodes whose circles overlap
 * Run: bun run scripts/audit-tree-geometry.ts
 */
import { books, getChapter } from "../src/content/index";
import type { TreeDiagramBlock } from "../src/content/types";
import { layoutTreeDiagram } from "../src/components/book/tree-layout";

function resolveNodes(blk: TreeDiagramBlock) {
  if (blk.tree) {
    const laid = layoutTreeDiagram(blk.tree);
    return { nodes: laid.nodes as { id: string; label: string; x: number; y: number; r?: number }[], edges: laid.edges };
  }
  return { nodes: blk.nodes ?? [], edges: blk.edges ?? [] };
}

const MIN_GAP = 18; // px edge-to-edge below which we flag crowding
const VERTICAL_DX = 6; // |dx| below which an edge counts as vertical

let flagged = 0;
let total = 0;
for (const book of books) {
  for (const ch of book.chapters) {
    const data = getChapter(book.slug, ch.slug);
    if (!data) continue;
    data.blocks.forEach((b, bi) => {
      if (b.type !== "treeDiagram") return;
      total++;
      const blk = b as TreeDiagramBlock;
      const { nodes: blkNodes, edges: blkEdges } = resolveNodes(blk);
      const byId = new Map(blkNodes.map((n) => [n.id, n]));
      const issues: string[] = [];
      // vertical edges
      for (const [from, to] of blkEdges) {
        const a = byId.get(from);
        const c = byId.get(to);
        if (!a || !c) continue;
        if (Math.abs(a.x - c.x) < VERTICAL_DX) {
          const childCount = blkEdges.filter(([f]) => f === from).length;
          if (childCount === 1) {
            issues.push(`vertical single-child edge ${a.label}->${c.label} (dx=${(a.x - c.x).toFixed(1)})`);
          }
        }
      }
      // crowding / overlap between any two nodes
      for (let i = 0; i < blkNodes.length; i++) {
        for (let j = i + 1; j < blkNodes.length; j++) {
          const p = blkNodes[i];
          const q = blkNodes[j];
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          const gap = d - (p.r ?? 21) - (q.r ?? 21);
          if (gap < 0) issues.push(`OVERLAP ${p.label}~${q.label} (gap=${gap.toFixed(1)})`);
          else if (gap < MIN_GAP) issues.push(`crowded ${p.label}~${q.label} (gap=${gap.toFixed(1)})`);
        }
      }
      if (issues.length) {
        flagged++;
        console.log(`/${book.slug}/${ch.slug} block#${bi} (${blkNodes.length} nodes, mode=${blk.tree ? "auto" : "explicit"})`);
        for (const s of issues) console.log(`   - ${s}`);
      }
    });
  }
}
console.log(`\n${flagged} of ${total} treeDiagram blocks flagged.`);
