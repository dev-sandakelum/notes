/* One-off audit: find duplicate heading ids within every chapter (A2). */
import { books, getChapter } from "../src/content";

let total = 0;
for (const b of books) {
  for (const c of b.chapters) {
    const ch = getChapter(b.slug, c.slug);
    if (!ch) {
      console.log("MISSING:", b.slug, c.slug);
      continue;
    }
    const seen = new Set<string>();
    const dupes: string[] = [];
    for (const blk of ch.blocks) {
      if (blk.type !== "heading") continue;
      if (seen.has(blk.id)) dupes.push(blk.id);
      seen.add(blk.id);
    }
    if (dupes.length > 0) {
      total += dupes.length;
      console.log(`${b.slug}/${c.slug}: duplicates -> ${dupes.join(", ")}`);
    }
  }
}
console.log("TOTAL DUPLICATE HEADING IDS:", total);
