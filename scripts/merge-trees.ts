/**
 * Tree-notes merge: folds the standalone tree/DSA HTML files into the
 * migrated DSA book chapters (per user decision: "tree is part of dsa").
 *
 * Sources & targets:
 *   tree-study-hub (1).html
 *     chapter-m1 Terminology        -> 07-trees-and-binary-trees
 *     chapter-m2 Tree Field Guide   -> 07-trees-and-binary-trees
 *     chapter-m3 BST ordered spec.  -> 09-binary-search-trees
 *     chapter-m4 Traversals & Not.  -> 08-tree-traversals
 *     chapter-m7 Red-Black Trees    -> 10-avl-trees-and-balanced-trees
 *   tree 5.html  (BST deletion)     -> 09-binary-search-trees
 *   tree 6.html  (AVL rotations)    -> 10-avl-trees-and-balanced-trees
 *   Skipped: chapter-m5/m6 (duplicates of tree 5/6), tree 3.html (dupe of m3),
 *   3.html (interactive sorting stage; ch.12 already has the sorting viz).
 *
 * Quiz questions from the tree files are APPENDED to the matching chapter
 * quiz data files (kept separate, per user decision).
 *
 * Usage: bun run scripts/merge-trees.ts [--src /tmp/trash-repo/dsa]
 */
import * as cheerio from "cheerio";
import * as fs from "node:fs";
import * as path from "node:path";

const argv = process.argv.slice(2);
function arg(name: string, fallback: string): string {
  const i = argv.indexOf(`--${name}`);
  return i >= 0 && argv[i + 1] ? argv[i + 1] : fallback;
}
const SRC = arg("src", "/tmp/trash-repo/dsa");
const BOOK_DIR = path.resolve("src/content/books/dsa");

/* ---------------- shared helpers (aligned with migrate-html.ts) ------- */

const EMOJI_ENTITY_RE =
  /&#(?:129504|127891|128269|128683|128300|128171|127919|65039|11014|11015|[0-9]{5});/g;
const EMOJI_CHAR_RE =
  /[\u{1F000}-\u{1FAFF}\u{2705}\u{270F}\u{FE0F}\u{20E3}\u{2B50}\u{2B06}\u{2B07}]/gu;

function stripEmoji(text: string): string {
  return text
    .replace(/&#8203;/g, "")
    .replace(EMOJI_ENTITY_RE, (m) => (m === "&#65039;" ? "" : " "))
    .replace(EMOJI_CHAR_RE, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/&amp;/g, "and")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

interface Ctx {
  usedIds: Set<string>;
  questions: QuizQuestionOut[];
}

interface QuizQuestionOut {
  prompt: string;
  options: string[];
  answer: number;
  explanation: string;
}

function proc(html: string): string {
  return html
    .replace(EMOJI_ENTITY_RE, (m) => (m === "&#65039;" ? "" : " "))
    .replace(EMOJI_CHAR_RE, "")
    .replace(/<span class="(?:g|ok)">/g, '<span class="tok-ok">')
    .replace(/<span class="(?:r|bad)">/g, '<span class="tok-bad">')
    .replace(/<span class="(?:y|num)">/g, '<span class="tok-num">')
    .replace(/<span class="c-com">/g, '<span class="tok-cm">')
    .replace(/<span class="kw">/g, '<span class="tok-kw">')
    .replace(/<span class="fn">/g, '<span class="tok-fn">')
    .replace(/<span class="st">/g, '<span class="tok-str">')
    .replace(/<span class="nu">/g, '<span class="tok-num">')
    .replace(/<span class="cm">/g, '<span class="tok-cm">')
    .replace(/<code class="k">/g, "<code>")
    .replace(/<code>/g, "<code>")
    .replace(/\s{2,}/g, " ");
}

function heading(ctx: Ctx, text: string, depth: 3 | 4) {
  const clean = stripEmoji(text).replace(/\s+/g, " ").trim();
  if (!clean) return null;
  let id = slugify(clean);
  let n = 2;
  while (ctx.usedIds.has(id)) id = `${slugify(clean)}-${n++}`;
  ctx.usedIds.add(id);
  return { type: "heading" as const, depth, id, text: clean };
}

/* ---------------- generic tree-file walker ----------------------------- */

interface TreeBlocks {
  blocks: unknown[];
  questions: QuizQuestionOut[];
}

function walk(
  $: cheerio.CheerioAPI,
  $parent: cheerio.Cheerio<cheerio.AnyNode>,
  ctx: Ctx,
  depth = 0
): TreeBlocks {
  const blocks: unknown[] = [];
  const questions: QuizQuestionOut[] = [];
  const SKIP_CLS = [
    "toc",
    "controls",
    "log",
    "legend",
    "top",
    "inspector",
    "thumb",
    "rail",
    "chapter-strip",
    "cs-left",
    "cs-right",
    "cs-num",
    "cs-title",
    "cs-time",
    "cs-done",
    "method-pick",
    "demo",
    "stats",
    "stage-bar",
    "code-bar",
    "kicker",
    "hero",
    "masthead",
  ];

  $parent.children().each((_i, el) => {
    const $el = $(el);
    const tag = ((el as unknown as { tagName?: string }).tagName || "").toLowerCase();
    const cls = $el.attr("class") || "";
    const classes = cls.split(/\s+/).filter(Boolean);

    if (classes.some((c) => SKIP_CLS.includes(c))) return;
    if (["button", "nav", "br", "svg-defs"].includes(tag)) return;
    if (tag === "header") return;
    if (classes.includes("card") && classes.includes("quiz")) {
      // quiz card
      const prompt = proc($el.find(".q").first().html() || "")
        .trim()
        .replace(/^&#8203;/, "")
        .replace(/^\d+\s+/, ""); // orphan keycap numbering
      const explanation = stripEmoji($el.attr("data-exp") || "");
      const options: string[] = [];
      let answer = 0;
      $el.find(".opt").each((j, opt) => {
        options.push(stripEmoji($(opt).text()));
        if ($(opt).attr("data-c") === "1") answer = j;
      });
      if (prompt && options.length) questions.push({ prompt, options, answer, explanation });
      return;
    }

    if (tag === "h1") return;
    if (tag === "h2" || tag === "h3" || tag === "h4") {
      const h = heading(ctx, $el.text(), tag === "h2" ? 3 : 4);
      if (h) blocks.push(h);
      return;
    }

    if (tag === "p") {
      const html = proc($el.html() || "").trim();
      if (html && !classes.includes("q")) blocks.push({ type: "paragraph", html });
      return;
    }

    if (tag === "ul" || tag === "ol" || classes.includes("steps")) {
      const items: string[] = [];
      $el.children("li").each((_j, li) => {
        const h = proc($(li).html() || "").trim();
        if (h) items.push(h);
      });
      if (items.length)
        blocks.push({ type: "list", ordered: tag === "ol" || classes.includes("steps"), items });
      return;
    }

    if (classes.includes("callout") || classes.includes("findbox") || classes.includes("mnemo") || classes.includes("formula")) {
      const variant = classes.includes("warn")
        ? "warn"
        : classes.includes("findbox") || classes.includes("mnemo")
          ? "tip"
          : "info";
      const title = classes.includes("findbox")
        ? "How to find"
        : classes.includes("mnemo")
          ? "Memory hook"
          : classes.includes("formula")
            ? "Formula"
            : "Note";
      const html = proc($el.html() || "").trim();
      if (html) blocks.push({ type: "callout", variant, title, html });
      return;
    }

    if (tag === "pre") {
      let inner = $el.html() || "";
      // unwrap a single <code> child
      inner = inner.replace(/^<code>([\s\S]*)<\/code>$/, "$1");
      const html = proc(inner);
      blocks.push({ type: "code", language: "c", html });
      return;
    }

    if (classes.includes("tblwrap") || classes.includes("tbl-wrap")) {
      const $table = $el.find("table").first();
      const head: string[] = [];
      const rows: string[][] = [];
      $table.find("tr").each((_tri, tr) => {
        const $tr = $(tr);
        const isHead = $tr.find("th").length > 0;
        const cells: string[] = [];
        $tr.find(isHead ? "th" : "td").each((_ci, c) => cells.push(proc($(c).html() || "")));
        if (isHead) head.push(...cells);
        else rows.push(cells);
      });
      blocks.push({ type: "table", head, rows });
      return;
    }

    if (tag === "table") {
      const head: string[] = [];
      const rows: string[][] = [];
      $el.find("tr").each((_tri, tr) => {
        const $tr = $(tr);
        const isHead = $tr.find("th").length > 0;
        const cells: string[] = [];
        $tr.find(isHead ? "th" : "td").each((_ci, c) => cells.push(proc($(c).html() || "")));
        if (isHead) head.push(...cells);
        else rows.push(cells);
      });
      blocks.push({ type: "table", head, rows });
      return;
    }

    if (tag === "svg") {
      const svg = $.html($el as never);
      const alt = ($el.attr("aria-label") || "").trim() || "Diagram";
      blocks.push({ type: "figure", svg, alt });
      return;
    }

    /* term section (hub m1) */
    if (classes.includes("term")) {
      const t = heading(ctx, $el.find(".term-head h2").first().text() || $el.attr("id") || "", 3);
      if (t) blocks.push(t);
      const r = walk($, $el, ctx, depth + 1);
      blocks.push(...r.blocks);
      questions.push(...r.questions);
      return;
    }

    /* entry article (hub m2/m3) */
    if (classes.includes("entry")) {
      const h = heading(ctx, $el.find("h3").first().text() || "", 4);
      if (h) blocks.push(h);
      const r = walk($, $el, ctx, depth + 1);
      blocks.push(...r.blocks);
      questions.push(...r.questions);
      return;
    }

    /* case cards (tree 5/6, hub m7) */
    if (classes.includes("case") || classes.includes("casecard")) {
      const title = stripEmoji($el.find("h3").first().text()).trim() || "Case";
      const $clone = $el.clone();
      $clone.find("h3, .ico").remove();
      const html = proc($clone.html() || "").trim();
      if (html) blocks.push({ type: "callout", variant: "info", title, html });
      return;
    }

    /* generic card: keep inner content */
    if (classes.includes("card") || classes.includes("sec") || classes.includes("section")) {
      const r = walk($, $el, ctx, depth + 1);
      blocks.push(...r.blocks);
      questions.push(...r.questions);
      return;
    }

    /* example spans (hub m1: "Example: A") */
    if (classes.includes("example")) {
      const html = proc($el.html() || "").trim();
      if (html) blocks.push({ type: "paragraph", html: `<i>${html}</i>` });
      return;
    }

    /* fact line (hub m2) */
    if (classes.includes("fact")) {
      const html = proc($el.html() || "").trim();
      if (html) blocks.push({ type: "paragraph", html });
      return;
    }

    /* grid wrappers: recurse */
    if (tag === "div" || tag === "section" || tag === "article" || tag === "main" || tag === "figure") {
      const r = walk($, $el, ctx, depth + 1);
      blocks.push(...r.blocks);
      questions.push(...r.questions);
      return;
    }

    // inline leftovers
    if (["b", "i", "span", "small", "sub", "sup", "em", "strong"].includes(tag)) return;
  });

  return { blocks, questions };
}

/* ---------------- word count ------------------------------------------ */

function textOfBlocks(blocks: unknown[]): string {
  return blocks
    .map((b) => {
      const o = b as Record<string, unknown>;
      if (o.type === "heading") return String(o.text);
      if (o.type === "paragraph" || o.type === "callout") return String(o.html);
      if (o.type === "list") return ((o.items as string[]) || []).join(" ");
      if (o.type === "code") return String(o.html);
      if (o.type === "table")
        return [...((o.head as string[]) || []), ...((o.rows as string[][]) || []).flat()].join(" ");
      if (o.type === "callout") return String(o.html);
      if (o.type === "figure") return String(o.alt);
      return "";
    })
    .join(" ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/* ---------------- file rewriting --------------------------------------- */

interface ChapterFile {
  meta: {
    slug: string;
    number: number;
    title: string;
    subtitle?: string;
    kind: string;
    words: number;
    minutes: number;
  };
  blocks: unknown[];
}

interface QuizFile {
  slug: string;
  title: string;
  questions: QuizQuestionOut[];
}

function writeChapter(ch: ChapterFile): void {
  const body = JSON.stringify(ch, null, 2);
  const ts = `import type { ChapterData } from "@/content/types";\n\nconst chapter: ChapterData = ${body};\n\nexport default chapter;\n`;
  fs.writeFileSync(path.join(BOOK_DIR, "chapters", `${ch.meta.slug}.ts`), ts);
}

function writeQuiz(q: QuizFile): void {
  const ts = `import type { QuizData } from "@/content/types";\n\nconst quiz: QuizData = ${JSON.stringify(q, null, 2)};\n\nexport default quiz;\n`;
  fs.writeFileSync(path.join(BOOK_DIR, "quizzes", `${q.slug}.ts`), ts);
}

/* ---------------- main -------------------------------------------------- */

interface MergeSpec {
  chapterFile: string;
  quizFile: string;
  fragments: { source: string; divider: string; extract: ($: cheerio.CheerioAPI) => TreeBlocks }[];
}

function hubChapterExtractor(chapterId: string) {
  return ($: cheerio.CheerioAPI): TreeBlocks => {
    const $ch = $(`#${chapterId}`);
    const ctx: Ctx = { usedIds: new Set(), questions: [] };
    const r = walk($, $ch, ctx);
    return r;
  };
}

function fileExtractor(selector?: string) {
  return ($: cheerio.CheerioAPI): TreeBlocks => {
    const ctx: Ctx = { usedIds: new Set(), questions: [] };
    const $root = selector ? $(selector).first() : $("body");
    const r = walk($, $root, ctx);
    return r;
  };
}

function loadHtml(file: string): cheerio.CheerioAPI {
  return cheerio.load(fs.readFileSync(path.join(SRC, file), "utf-8"));
}

async function main(): Promise<void> {
  const hub = loadHtml("tree-study-hub (1).html");
  const tree5 = loadHtml("tree 5.html");
  const tree6 = loadHtml("tree 6.html");

  const specs: MergeSpec[] = [
    {
      chapterFile: "07-trees-and-binary-trees.ts",
      quizFile: "07-trees-and-binary-trees.ts",
      fragments: [
        {
          source: "hub m1 — Terminology",
          divider: "Tree terminology — field notes",
          extract: hubChapterExtractor("chapter-m1"),
        },
        {
          source: "hub m2 — The Tree Field Guide",
          divider: "The tree — field guide",
          extract: hubChapterExtractor("chapter-m2"),
        },
      ],
    },
    {
      chapterFile: "08-tree-traversals.ts",
      quizFile: "08-tree-traversals.ts",
      fragments: [
        {
          source: "hub m4 — Traversals & Notations",
          divider: "Traversals & notations — deeper notes",
          extract: hubChapterExtractor("chapter-m4"),
        },
      ],
    },
    {
      chapterFile: "09-binary-search-trees.ts",
      quizFile: "09-binary-search-trees.ts",
      fragments: [
        {
          source: "hub m3 — BST ordered specimen",
          divider: "The ordered specimen — BST field notes",
          extract: hubChapterExtractor("chapter-m3"),
        },
        {
          source: "tree 5 — BST deletion",
          divider: "Deleting a node — the two replacement methods",
          extract: ($: cheerio.CheerioAPI) => {
            const ctx: Ctx = { usedIds: new Set(), questions: [] };
            return walk($, $(".container").first(), ctx);
          },
        },
      ],
    },
    {
      chapterFile: "10-avl-trees-and-balanced-trees.ts",
      quizFile: "10-avl-trees-and-balanced-trees.ts",
      fragments: [
        {
          source: "tree 6 — AVL rotations",
          divider: "Balance factor & the four rotations",
          extract: ($: cheerio.CheerioAPI) => {
            const ctx: Ctx = { usedIds: new Set(), questions: [] };
            return walk($, $(".container").first(), ctx);
          },
        },
        {
          source: "hub m7 — Red-Black trees",
          divider: "Red-black trees",
          extract: hubChapterExtractor("chapter-m7"),
        },
      ],
    },
  ];

  let totalQuestions = 0;
  let totalBlocks = 0;

  for (const spec of specs) {
    const ch = (await import(path.join(BOOK_DIR, "chapters", spec.chapterFile))).default as ChapterFile;
    const quizPath = path.join(BOOK_DIR, "quizzes", spec.quizFile);
    const quizExists = fs.existsSync(quizPath);
    const quiz = quizExists
      ? ((await import(quizPath)).default as QuizFile)
      : ({ slug: spec.quizFile.replace(/\.ts$/, ""), title: "Extra practice", questions: [] } as QuizFile);

    /* usedIds from existing headings to avoid id collisions */
    const ctxIds = new Set<string>(
      (ch.blocks as { type?: string; id?: string }[])
        .filter((b) => b.type === "heading")
        .map((b) => b.id as string)
    );

    for (const frag of spec.fragments) {
      const tree = frag.source.startsWith("hub") ? hub : frag.source.startsWith("tree 5") ? tree5 : tree6;
      const extracted = frag.extract(tree);
      const divider = heading({ usedIds: ctxIds, questions: [] }, frag.divider, 3);
      if (divider) ch.blocks.push(divider);
      /* Source fix (A2): fragment heading ids must not collide with the
         chapter's existing headings nor with earlier merged fragments. */
      const seenIds = new Set(ctxIds);
      for (const blk of extracted.blocks as { type?: string; id?: string }[]) {
        if (blk.type !== "heading" || !blk.id) continue;
        if (seenIds.has(blk.id)) {
          let n = 2;
          let id = `${blk.id}-${n}`;
          while (seenIds.has(id)) id = `${blk.id}-${++n}`;
          blk.id = id;
        }
        seenIds.add(blk.id);
        ctxIds.add(blk.id);
      }
      ch.blocks.push(...extracted.blocks);
      quiz.questions.push(...extracted.questions);
      totalQuestions += extracted.questions.length;
      totalBlocks += extracted.blocks.length;
      console.log(
        `  ${spec.chapterFile} <- ${frag.source}: +${extracted.blocks.length} blocks, +${extracted.questions.length} questions`
      );
    }

    const words = textOfBlocks(ch.blocks).split(/\s+/).filter(Boolean).length;
    ch.meta.words = words;
    ch.meta.minutes = Math.max(1, Math.round(words / 200));
    writeChapter(ch);
    writeQuiz(quiz);
  }

  /* update book.ts question count */
  const bookPath = path.join(BOOK_DIR, "book.ts");
  const book = (await import(bookPath)).default as {
    slug: string;
    questionCount: number;
    chapters: { slug: string; words: number; minutes: number }[];
  };
  book.questionCount += totalQuestions;
  const chFiles = fs.readdirSync(path.join(BOOK_DIR, "chapters"));
  for (const cf of chFiles) {
    const chap = (await import(path.join(BOOK_DIR, "chapters", cf))).default as ChapterFile;
    const meta = book.chapters.find((c) => c.slug === chap.meta.slug);
    if (meta) {
      meta.words = chap.meta.words;
      meta.minutes = chap.meta.minutes;
    }
  }
  const ts = `import type { BookMeta } from "@/content/types";\n\nconst book: BookMeta = ${JSON.stringify(book, null, 2)};\n\nexport default book;\n`;
  fs.writeFileSync(bookPath, ts);

  console.log(`\nMerged ${totalBlocks} blocks and ${totalQuestions} quiz questions into the DSA book.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
