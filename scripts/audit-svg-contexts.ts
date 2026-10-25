/**
 * Audit: find blocks whose HTML strings contain inline <svg> and report
 * which rendering context (styled .fig-embed vs unstyled .prose-book)
 * they will appear in. Also flags tree-like SVGs (class vtx/treesvg).
 *
 * Run: bun run scripts/audit-svg-contexts.ts
 */
import { books, getChapter } from "../src/content/index";

type AnyBlock = { type: string; [k: string]: unknown };

const STYLED = new Set(["figure", "htmlFigure"]); // .fig-embed context

function walk(blocks: AnyBlock[]) {
  const hits: { block: string; key: string; svgs: number; classes: string[] }[] = [];
  for (const b of blocks) {
    for (const key of ["bodyHtml", "solutionHtml", "html", "items", "svg"]) {
      const v = (b as Record<string, unknown>)[key];
      if (typeof v === "string" && v.includes("<svg")) {
        const classes = [...v.matchAll(/class="([^"]+)"/g)].map((m) => m[1]);
        hits.push({ block: b.type, key, svgs: (v.match(/<svg/g) ?? []).length, classes });
      } else if (Array.isArray(v)) {
        // accordion items
        for (const item of v as { html?: string; title?: string }[]) {
          if (typeof item.html === "string" && item.html.includes("<svg")) {
            const classes = [...item.html.matchAll(/class="([^"]+)"/g)].map((m) => m[1]);
            hits.push({ block: `${b.type}[${item.title?.slice(0, 40)}]`, key: "item.html", svgs: (item.html.match(/<svg/g) ?? []).length, classes });
          }
        }
      }
    }
  }
  return hits;
}

let problems = 0;
for (const book of books) {
  for (const ch of book.chapters) {
    const data = getChapter(book.slug, ch.slug);
    if (!data) continue;
    const hits = walk(data.blocks as AnyBlock[]);
    for (const h of hits) {
      const styled = STYLED.has(h.block);
      const treeish = h.classes.some((c) => /vtx|treesvg|vlbl/.test(c));
      const flag = styled ? "ok(styled)" : treeish ? "PROBLEM(tree-in-unstyled)" : "check(unstyled-svg)";
      if (!styled) problems++;
      console.log(
        `${flag}  /${book.slug}/${ch.slug}  ${h.block}  ${h.key}  svgs=${h.svgs}  treeish=${treeish}  classes=${[...new Set(h.classes)].slice(0, 8).join(",")}`
      );
    }
  }
}
console.log(`\nUnstyled-context SVG blocks: ${problems}`);
