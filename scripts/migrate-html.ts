/**
 * Migration script: converts the original interactive HTML lecture notes
 * (github.com/dev-sandakelum/trash) into typed TS data files under
 * src/content/books/<slug>/.
 *
 * Usage: bun run scripts/migrate-html.ts [--src /tmp/trash-repo] [--out src/content]
 *
 * Emits:
 *   books/<slug>/book.ts                     — BookMeta
 *   books/<slug>/chapters/<nn-slug>.ts       — ChapterData (blocks)
 *   books/<slug>/quizzes/<nn-slug>.ts        — QuizData (kept separate)
 *   index.ts                                 — registry
 * Plus a coverage report (stdout): block counts + unmatched elements.
 */
import * as cheerio from "cheerio";
import * as fs from "node:fs";
import * as path from "node:path";

/* ------------------------------------------------------------------ */
/* Config                                                              */
/* ------------------------------------------------------------------ */

interface BookConfig {
  file: string;
  slug: string;
  code: string;
  title: string;
  tagline: string;
  subject: "Computer Science" | "Economics" | "Mathematics";
  department?: "DICT" | "DMS";
  tags: string[];
  /** Append interactive viz blocks to matching chapters (by slug) */
  vizInjections?: { chapterMatch: RegExp; kind: string; caption: string }[];
}

const BOOKS: BookConfig[] = [
  {
    file: "DSA_Complete_Interactive_Notes.html",
    slug: "dsa",
    code: "ICT2113",
    title: "Data Structures & Algorithms",
    tagline:
      "Every lecture, lab and diagram from the course — stacks to hashing, with live visualizers.",
    subject: "Computer Science",
    department: "DICT",
    tags: [
      "data structures",
      "algorithms",
      "complexity",
      "trees",
      "sorting",
      "hashing",
    ],
  },
  {
    file: "ICT2122_OOP_Complete_Interactive_Notes.html",
    slug: "oop",
    code: "ICT2122",
    title: "Object Oriented Programming",
    tagline:
      "Classes to JDBC — the full OOP course with worked Java examples and flashcards.",
    subject: "Computer Science",
    department: "DICT",
    tags: [
      "java",
      "classes",
      "inheritance",
      "polymorphism",
      "interfaces",
      "exceptions",
    ],
  },
  {
    file: "OOD_Complete_Interactive_Notes.html",
    slug: "ood",
    code: "ICT2152",
    title: "Object Oriented Analysis & Design",
    tagline:
      "UML modelling from basic concepts to interaction diagrams, with diagram galleries.",
    subject: "Computer Science",
    department: "DICT",
    tags: [
      "uml",
      "use cases",
      "class diagrams",
      "sequence diagrams",
      "modelling",
    ],
  },
  {
    file: "ICT2162_MIS_Complete_Interactive_Notes.html",
    slug: "mis",
    code: "ICT2162",
    title: "Management Information Systems",
    tagline:
      "Laudon & Laudon in nine lectures — e-business, ERP, CRM, AI and IS security.",
    subject: "Computer Science",
    department: "DICT",
    tags: [
      "information systems",
      "e-business",
      "erp",
      "crm",
      "decision making",
      "security",
    ],
  },
  {
    file: "TCS2112-Business-Economics-Interactive-Notes.html",
    slug: "econ",
    code: "TCS2112",
    title: "Business Economics",
    tagline:
      "Scarcity to international trade — worked tutorials and formula sheets throughout.",
    subject: "Economics",
    department: "DMS",
    tags: [
      "microeconomics",
      "supply & demand",
      "production cost",
      "macroeconomics",
      "trade",
    ],
    vizInjections: [
      {
        chapterMatch: /production-possibility/,
        kind: "ppc",
        caption:
          "Drag the sliders to move the economy along the frontier — points on the curve are efficient, points inside waste resources.",
      },
    ],
  },
  {
    file: "1113.html",
    slug: "maths",
    code: "TMS1113",
    title: "Foundation of Mathematics",
    tagline:
      "Numbers to vectors — every foundation topic with worked examples and formula cards.",
    subject: "Mathematics",
    tags: [
      "algebra",
      "functions",
      "matrices",
      "trigonometry",
      "vectors",
      "set theory",
    ],
    vizInjections: [
      {
        chapterMatch: /quadratic-graphs/,
        kind: "parabola",
        caption:
          "Adjust a, b and c to see how each coefficient moves, stretches and flips the parabola.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

type AnyNode = ReturnType<cheerio.CheerioAPI> extends never ? never : unknown;

const argv = process.argv.slice(2);
function arg(name: string, fallback: string): string {
  const i = argv.indexOf(`--${name}`);
  return i >= 0 && argv[i + 1] ? argv[i + 1] : fallback;
}
const SRC = arg("src", "/tmp/trash-repo");
const OUT = path.resolve(arg("out", "src/content"));

/** Emoji to strip (keep typographic marks: → ✓ ✗ ✕ ↑ ↓ ↔ ⇄ ⇒ ⋮) */
const EMOJI_ENTITY_RE =
  /&#(?:129504|127891|128269|128683|128300|128171|127919|65039|11014|11015);/g;
const EMOJI_CHAR_RE =
  /[\u{1F000}-\u{1FAFF}\u{2705}\u{270F}\u{FE0F}\u{2B50}\u{2B06}\u{2B07}]/gu;

function stripEmoji(text: string): string {
  return text
    .replace(EMOJI_ENTITY_RE, "")
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

function tsLiteral(value: unknown): string {
  return JSON.stringify(value, null, 2);
}

interface Report {
  blocks: Record<string, number>;
  unmatched: Record<string, number>;
  quizzes: number;
  questions: number;
  flashcards: number;
  solutionsRevealed: number;
  figures: number;
  htmlFigures: number;
  viz: Record<string, number>;
}

function newReport(): Report {
  return {
    blocks: {},
    unmatched: {},
    quizzes: 0,
    questions: 0,
    flashcards: 0,
    solutionsRevealed: 0,
    figures: 0,
    htmlFigures: 0,
    viz: {},
  };
}

/* ------------------------------------------------------------------ */
/* Inline HTML processing                                              */
/* ------------------------------------------------------------------ */

interface WalkCtx {
  bookSlug: string;
  linkMap: Map<string, string>;
  usedIds: Set<string>;
  report: Report;
}

function processInline(html: string, ctx: WalkCtx): string {
  let out = html;
  out = out.replace(EMOJI_ENTITY_RE, "").replace(EMOJI_CHAR_RE, "");
  // code token spans -> tok-*
  out = out
    .replace(/<span class="kw">/g, '<span class="tok-kw">')
    .replace(/<span class="fn">/g, '<span class="tok-fn">')
    .replace(/<span class="st">/g, '<span class="tok-str">')
    .replace(/<span class="nu">/g, '<span class="tok-num">')
    .replace(/<span class="cm">/g, '<span class="tok-cm">');
  // inline code chips
  out = out.replace(/<code class="k">/g, "<code>");
  // rewrite internal anchors to chapter routes
  out = out.replace(
    /<a href="#([^"]+)"([^>]*)>/g,
    (m: string, id: string, rest: string) => {
      const target = ctx.linkMap.get(id);
      if (target) return `<a href="/notes/${ctx.bookSlug}/${target}"${rest}>`;
      return m;
    }
  );
  // unwrap anchors still pointing at unknown internal ids
  out = out.replace(
    /<a href="#[^"]+"[^>]*>(.*?)<\/a>/gs,
    (_m: string, inner: string) => inner
  );
  return out;
}

/* ------------------------------------------------------------------ */
/* Block extractors                                                    */
/* ------------------------------------------------------------------ */

function extractTable(
  $: cheerio.CheerioAPI,
  $el: cheerio.Cheerio<never>,
  ctx: WalkCtx
) {
  const $table = $el.find("table").first();
  const head: string[] = [];
  const rows: string[][] = [];
  const highlightRows: number[] = [];
  const nowrapCols = new Set<number>();
  $table.find("tr").each((_tri, tr) => {
    const $tr = $(tr);
    const cells: string[] = [];
    const isHeaderRow = $tr.find("th").length > 0;
    $tr.find(isHeaderRow ? "th" : "td").each((ci, cell) => {
      const $cell = $(cell);
      if ($cell.hasClass("m")) nowrapCols.add(ci);
      cells.push(processInline($cell.html() || "", ctx));
    });
    if (isHeaderRow) {
      head.push(...cells);
    } else {
      if ($tr.hasClass("hl")) highlightRows.push(rows.length);
      rows.push(cells);
    }
  });
  return {
    type: "table" as const,
    head,
    rows,
    ...(highlightRows.length ? { highlightRows } : {}),
    ...(nowrapCols.size ? { nowrapCols: [...nowrapCols] } : {}),
  };
}

function extractExample(
  $: cheerio.CheerioAPI,
  $el: cheerio.Cheerio<never>,
  ctx: WalkCtx
) {
  const $clone = $el.clone();
  const $head = $clone.find(".ex-head").first();
  const $tag = $head.find(".tag").first();
  const tagText = $tag.length ? stripEmoji($tag.text()).trim() : "";
  $tag.remove();
  $head.find(".exb").remove();
  const headText = stripEmoji($head.text()).replace(/\s+/g, " ").trim();
  const title = tagText ? `${tagText} — ${headText}` : headText;
  $clone.find(".ex-head").remove();
  const $sol = $clone.find(".solution").first();
  let solutionHtml: string | null = null;
  if ($sol.length) {
    $sol.find(".sol-label").remove();
    solutionHtml = processInline($sol.html() || "", ctx).trim();
    if (solutionHtml) ctx.report.solutionsRevealed++;
  }
  $clone.find(".solution, .reveal-btn, .sol-label, .btn").remove();
  const bodyHtml = processInline($clone.html() || "", ctx).trim();
  return { type: "example" as const, title, bodyHtml, solutionHtml };
}

function extractQuiz(
  $: cheerio.CheerioAPI,
  $el: cheerio.Cheerio<never>,
  chapterSlug: string,
  ctx: WalkCtx
) {
  const title = stripEmoji($el.find(".quiz-title").first().text()).trim();
  const questions: {
    prompt: string;
    options: string[];
    answer: number;
    explanation: string;
  }[] = [];
  $el.find(".q").each((_i, q) => {
    const $q = $(q);
    const prompt = processInline($q.find(".qt").first().html() || "", ctx);
    const options: string[] = [];
    $q.find(".opts label").each((_j, label) => {
      const $span = $(label).find("span").first();
      options.push(
        processInline(
          ($span.length ? $span.html() : $(label).html()) || "",
          ctx
        )
      );
    });
    const answer = parseInt($q.attr("data-a") || "0", 10);
    const explanation = processInline($q.find(".exp").first().html() || "", ctx);
    questions.push({ prompt, options, answer, explanation });
  });
  ctx.report.quizzes++;
  ctx.report.questions += questions.length;
  return {
    ref: { type: "quiz" as const, title, count: questions.length, quizSlug: chapterSlug },
    data: { slug: chapterSlug, title, questions },
  };
}

function extractFlashcards(
  $: cheerio.CheerioAPI,
  $el: cheerio.Cheerio<never>,
  ctx: WalkCtx
) {
  const cards: { front: string; back: string; category?: string }[] = [];
  $el.find(".fc").each((_i, fc) => {
    const $fc = $(fc);
    const category =
      stripEmoji($fc.find(".fc-cat").first().text()).trim() || undefined;
    const $front = $fc.find(".fc-front").first().clone();
    $front.find(".fc-cat, .fc-hint").remove();
    const front = processInline($front.html() || "", ctx).trim();
    const $back = $fc.find(".fc-back").first().clone();
    $back.find(".fc-cat, .fc-hint").remove();
    const back = processInline($back.html() || "", ctx).trim();
    cards.push({ front, back, ...(category ? { category } : {}) });
  });
  ctx.report.flashcards += cards.length;
  return { type: "flashcards" as const, cards };
}

function extractFigure(
  $: cheerio.CheerioAPI,
  $svg: cheerio.Cheerio<never>,
  capText: string | null,
  ctx: WalkCtx
) {
  const svg = $.html($svg as never);
  const alt = ($svg.attr("aria-label") || "").trim() || capText || "Diagram";
  ctx.report.figures++;
  return {
    type: "figure" as const,
    svg,
    alt,
    ...(capText ? { caption: capText } : {}),
  };
}

/* ------------------------------------------------------------------ */
/* Walker                                                              */
/* ------------------------------------------------------------------ */

const SKIP_CLASSES = ["complete-btn", "hero", "stats", "viz-msg", "quiz-foot"];
const SKIP_TAGS = ["button", "br", "footer", "script", "style", "link", "input", "select"];

interface WalkResult {
  blocks: unknown[];
  quizzes: { ref: unknown; data: unknown }[];
}

function walkChildren(
  $: cheerio.CheerioAPI,
  $parent: cheerio.Cheerio<never>,
  ctx: WalkCtx,
  depth = 0
): WalkResult {
  const blocks: unknown[] = [];
  const quizzes: { ref: unknown; data: unknown }[] = [];
  $parent.children().each((_i, el) => {
    const $el = $(el);
    const tag =
      ((el as unknown as { tagName?: string }).tagName || "").toLowerCase();
    const cls = $el.attr("class") || "";
    const classes = cls.split(/\s+/).filter(Boolean);

    if (classes.some((c) => SKIP_CLASSES.includes(c))) return;
    if (SKIP_TAGS.includes(tag)) return;
    // bare inline fragments escaped into top level (leftovers) — drop
    if (["b", "i", "sub", "sup", "small", "span", "em", "strong", "code"].includes(tag)) {
      ctx.report.unmatched[`inline:${tag}`] = (ctx.report.unmatched[`inline:${tag}`] || 0) + 1;
      return;
    }
    if (depth === 0 && (tag === "h1" || tag === "h2")) return;

    /* headings ----------------------------------------------------- */
    if (tag === "h3" || tag === "h4") {
      const $clone = $el.clone();
      $clone.find(".hno").remove();
      const text = stripEmoji($clone.text()).replace(/\s+/g, " ").trim();
      if (!text) return;
      let id = slugify(text);
      let n = 2;
      while (ctx.usedIds.has(id)) id = `${slugify(text)}-${n++}`;
      ctx.usedIds.add(id);
      blocks.push({ type: "heading", depth: tag === "h3" ? 3 : 4, id, text });
      ctx.report.blocks.heading = (ctx.report.blocks.heading || 0) + 1;
      return;
    }

    /* paragraph ---------------------------------------------------- */
    if ((tag === "p" && !classes.length) || classes.includes("eq")) {
      const html = processInline($el.html() || "", ctx).trim();
      if (html) blocks.push({ type: "paragraph", html });
      ctx.report.blocks.paragraph = (ctx.report.blocks.paragraph || 0) + 1;
      return;
    }

    /* stray figcaption as sibling of a figure ----------------------- */
    if (classes.includes("figcap") || classes.includes("d-cap")) {
      const cap = stripEmoji($el.text()).trim();
      const prev = blocks[blocks.length - 1] as { caption?: string } | undefined;
      if (cap && prev && (prev as { type?: string }).type === "figure") {
        prev.caption = cap;
      }
      return;
    }

    /* lists -------------------------------------------------------- */
    if (tag === "ul" || tag === "ol") {
      const items: string[] = [];
      $el.children("li").each((_j, li) => {
        const h = processInline($(li).html() || "", ctx).trim();
        if (h) items.push(h);
      });
      if (items.length) {
        blocks.push({ type: "list", ordered: tag === "ol", items });
        ctx.report.blocks.list = (ctx.report.blocks.list || 0) + 1;
      }
      return;
    }

    /* callout ------------------------------------------------------ */
    if (classes.includes("callout")) {
      const variant = classes.includes("co-tip")
        ? "tip"
        : classes.includes("co-warn")
          ? "warn"
          : classes.includes("co-exam")
            ? "exam"
            : "info";
      const title = stripEmoji($el.find(".co-t").first().text()).trim();
      const $clone = $el.clone();
      $clone.find(".co-t").remove();
      const html = processInline($clone.html() || "", ctx).trim();
      blocks.push({ type: "callout", variant, title, html });
      ctx.report.blocks.callout = (ctx.report.blocks.callout || 0) + 1;
      return;
    }

    /* code --------------------------------------------------------- */
    if (tag === "pre" && classes.includes("code")) {
      const html = processInline($el.html() || "", ctx);
      blocks.push({ type: "code", language: "c", html });
      ctx.report.blocks.code = (ctx.report.blocks.code || 0) + 1;
      return;
    }
    if (classes.includes("cb")) {
      const file = stripEmoji($el.find(".cb-head span").first().text()).trim();
      const tagText = stripEmoji($el.find(".cb-head .lang").first().text()).trim();
      const $pre = $el.find("pre.code").first();
      if ($pre.length) {
        const html = processInline($pre.html() || "", ctx);
        blocks.push({
          type: "code",
          language: (tagText || "java").toLowerCase(),
          ...(file
            ? { header: { file, ...(tagText ? { tag: tagText } : {}) } }
            : {}),
          html,
        });
        ctx.report.blocks.code = (ctx.report.blocks.code || 0) + 1;
      }
      return;
    }

    /* table -------------------------------------------------------- */
    if (classes.includes("tbl-wrap") || classes.includes("tblwrap")) {
      blocks.push(extractTable($, $el, ctx));
      ctx.report.blocks.table = (ctx.report.blocks.table || 0) + 1;
      return;
    }
    if (tag === "table") {
      blocks.push(extractTable($, $el, ctx));
      ctx.report.blocks.table = (ctx.report.blocks.table || 0) + 1;
      return;
    }

    /* example ------------------------------------------------------ */
    if (classes.includes("example") || classes.includes("exercise")) {
      blocks.push(extractExample($, $el, ctx));
      ctx.report.blocks.example = (ctx.report.blocks.example || 0) + 1;
      return;
    }

    /* accordion ---------------------------------------------------- */
    if (classes.includes("acc")) {
      const items: { title: string; html: string }[] = [];
      $el.children().each((_j, item) => {
        const $item = $(item);
        const itemCls = $item.attr("class") || "";
        if (itemCls.includes("acc-btn")) {
          const title = stripEmoji($item.text()).replace(/\s+/g, " ").trim();
          const $body = $item.nextAll(".acc-body").first();
          if ($body.length && title) {
            const html = processInline($body.html() || "", ctx).trim();
            if (html) items.push({ title, html });
          }
        }
      });
      if (items.length) {
        blocks.push({ type: "accordion", items });
        ctx.report.blocks.accordion = (ctx.report.blocks.accordion || 0) + 1;
      }
      return;
    }

    /* figures ------------------------------------------------------ */
    if (classes.includes("figwrap")) {
      const $svg = $el.find("svg").first();
      const capText = stripEmoji($el.find(".figcap").first().text()).trim() || null;
      if ($svg.length) {
        blocks.push(extractFigure($, $svg, capText, ctx));
        ctx.report.blocks.figure = (ctx.report.blocks.figure || 0) + 1;
      }
      return;
    }
    if (tag === "svg") {
      blocks.push(extractFigure($, $el, null, ctx));
      ctx.report.blocks.figure = (ctx.report.blocks.figure || 0) + 1;
      return;
    }

    /* quiz --------------------------------------------------------- */
    if (classes.includes("quiz")) {
      const chapterSlug = $el.attr("data-chapter-slug") || "quiz";
      const quiz = extractQuiz($, $el, chapterSlug, ctx);
      blocks.push(quiz.ref);
      quizzes.push(quiz);
      ctx.report.blocks.quizRef = (ctx.report.blocks.quizRef || 0) + 1;
      return;
    }

    /* flashcards --------------------------------------------------- */
    if (classes.includes("fc-grid")) {
      blocks.push(extractFlashcards($, $el, ctx));
      ctx.report.blocks.flashcards = (ctx.report.blocks.flashcards || 0) + 1;
      return;
    }

    /* html figures -------------------------------------------------- */
    if (classes.includes("fgrid")) {
      if ($el.find(".fc").length) {
        // DSA/econ put flashcard decks inside .fgrid
        blocks.push(extractFlashcards($, $el, ctx));
        ctx.report.blocks.flashcards = (ctx.report.blocks.flashcards || 0) + 1;
      } else {
        const html = processInline($.html($el as never), ctx);
        blocks.push({ type: "htmlFigure", html, alt: "Formula reference cards" });
        ctx.report.htmlFigures++;
      }
      return;
    }
    if (
      classes.includes("umlbox") ||
      classes.includes("ub-grid") ||
      classes.includes("flowchain")
    ) {
      const html = processInline($.html($el as never), ctx);
      blocks.push({
        type: "htmlFigure",
        html,
        alt: "UML / process diagram from the original notes",
      });
      ctx.report.htmlFigures++;
      return;
    }
    if (classes.includes("topic-grid")) {
      const html = processInline($.html($el as never), ctx);
      blocks.push({ type: "htmlFigure", html, alt: "Course topic map" });
      ctx.report.htmlFigures++;
      return;
    }
    if (classes.includes("flow") || classes.includes("grid2")) {
      const html = processInline($.html($el as never), ctx);
      const cap = $el.find(".figcap, .dia-cap").first().text().trim();
      blocks.push({
        type: "htmlFigure",
        html,
        alt: "Diagram from the original notes",
        ...(cap ? { caption: stripEmoji(cap) } : {}),
      });
      ctx.report.htmlFigures++;
      return;
    }

    /* definition list -> list --------------------------------------- */
    if (classes.includes("deflist")) {
      const items: string[] = [];
      $el.find(".defitem").each((_j, di) => {
        const h = processInline($(di).html() || "", ctx).trim();
        if (h) items.push(h);
      });
      if (items.length) {
        blocks.push({ type: "list", ordered: false, items });
        ctx.report.blocks.list = (ctx.report.blocks.list || 0) + 1;
      }
      return;
    }

    /* sorting visualizer -------------------------------------------- */
    if (classes.includes("sortviz")) {
      const caption = stripEmoji($el.find(".dia-cap").first().text());
      blocks.push({
        type: "viz",
        kind: "sorting",
        ...(caption ? { caption } : {}),
      });
      ctx.report.viz.sorting = (ctx.report.viz.sorting || 0) + 1;
      return;
    }

    /* dia: interactive viz OR static html diagram -------------------- */
    if (classes.includes("dia") || classes.includes("diagram")) {
      const inner = $el.html() || "";
      const caption = stripEmoji(
        $el.find(".dia-cap, .d-cap").first().text()
      );
      let kind: string | null = null;
      if (inner.includes("stackCells") || $el.attr("id") === "stackVizBox")
        kind = "stack";
      else if (inner.includes("queueCells") || $el.attr("id") === "queueVizBox")
        kind = "queue";
      else if (inner.includes("hashCells") || $el.attr("id") === "hashVizBox")
        kind = "hash";
      else if (inner.includes("bstTree") || $el.attr("id") === "bstBox")
        kind = "bst";
      else if (inner.includes("travOut")) kind = "bstTraversal";
      if (kind) {
        blocks.push({
          type: "viz",
          kind,
          ...(caption ? { caption } : {}),
        });
        ctx.report.viz[kind] = (ctx.report.viz[kind] || 0) + 1;
      } else {
        const $svg = $el.find("svg").first();
        if ($svg.length) {
          blocks.push(
            extractFigure($, $svg, caption || null, ctx)
          );
          ctx.report.blocks.figure = (ctx.report.blocks.figure || 0) + 1;
        } else {
          const $clone = $el.clone();
          $clone.find(".viz-ctl, .btn, .viz-msg").remove();
          const html = processInline($clone.html() || "", ctx).trim();
          if (html) {
            blocks.push({
              type: "htmlFigure",
              html,
              alt: caption || "Diagram from the original notes",
              ...(caption ? { caption } : {}),
            });
            ctx.report.htmlFigures++;
          }
        }
      }
      return;
    }

    /* wrapper divs: recurse transparently ----------------------------- */
    if (tag === "div") {
      const r = walkChildren($, $el, ctx, depth + 1);
      blocks.push(...r.blocks);
      quizzes.push(...r.quizzes);
      const key = `div${cls ? `.${classes[0]}` : ""}`;
      ctx.report.unmatched[key] = (ctx.report.unmatched[key] || 0) + 1;
      return;
    }

    const key = `${tag}${cls ? `.${classes[0]}` : ""}`;
    ctx.report.unmatched[key] = (ctx.report.unmatched[key] || 0) + 1;
  });
  return { blocks, quizzes };
}

/* ------------------------------------------------------------------ */
/* Word counting                                                       */
/* ------------------------------------------------------------------ */

function textOfBlocks(blocks: unknown[]): string {
  return blocks
    .map((b) => {
      const obj = b as Record<string, unknown>;
      switch (obj.type) {
        case "heading":
          return String(obj.text);
        case "paragraph":
        case "callout":
          return String(obj.html);
        case "list":
          return ((obj.items as string[]) || []).join(" ");
        case "code":
          return String(obj.html);
        case "table":
          return [
            ...((obj.head as string[]) || []),
            ...((obj.rows as string[][]) || []).flat(),
          ].join(" ");
        case "example":
          return `${obj.title} ${obj.bodyHtml} ${obj.solutionHtml ?? ""}`;
        case "accordion":
          return ((obj.items as { title: string; html: string }[]) || [])
            .map((i) => `${i.title} ${i.html}`)
            .join(" ");
        case "figure":
          return String(obj.alt);
        case "htmlFigure":
          return String(obj.html);
        case "flashcards":
          return ((obj.cards as { front: string; back: string }[]) || [])
            .map((c) => `${c.front} ${c.back}`)
            .join(" ");
        case "quizRef":
          return String(obj.title);
        default:
          return "";
      }
    })
    .join(" ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z]+;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/* ------------------------------------------------------------------ */
/* Book migration                                                      */
/* ------------------------------------------------------------------ */

function migrateBook(cfg: BookConfig): Report {
  const filePath = path.join(SRC, cfg.file);
  const html = fs.readFileSync(filePath, "utf-8");
  const $ = cheerio.load(html);
  const report = newReport();

  const lead = stripEmoji($("p.lead").first().text() || cfg.tagline);

  /* pass 1: section map --------------------------------------------- */
  const linkMap = new Map<string, string>();
  const sections: { id: string; title: string }[] = [];
  $("section.topic").each((_i, s) => {
    const $s = $(s);
    const id = $s.attr("id") || "";
    const h2 = stripEmoji($s.find(".topic-head h2").first().text()).trim();
    sections.push({ id, title: h2 });
  });
  sections.forEach((s, idx) => {
    const num = idx + 1;
    const slug =
      `${String(num).padStart(2, "0")}-${slugify(s.title) || "introduction"}`;
    linkMap.set(s.id, slug);
  });

  /* pass 2: walk ------------------------------------------------------ */
  const chapterMetas: unknown[] = [];
  const chaptersDir = path.join(OUT, "books", cfg.slug, "chapters");
  const quizzesDir = path.join(OUT, "books", cfg.slug, "quizzes");
  fs.mkdirSync(chaptersDir, { recursive: true });
  fs.mkdirSync(quizzesDir, { recursive: true });

  sections.forEach((_s, idx) => {
    const $s = $("section.topic").eq(idx);
    const num = idx + 1;
    const slug = linkMap.get(sections[idx].id)!;
    const subtitleRaw = stripEmoji(
      $s.find(".topic-head .src").first().text()
    ).trim();
    const title = sections[idx].title || "Introduction";
    const isCheat = /cheat|revision|formula/i.test(title);
    const isExam = /exam/i.test(title);
    const kind = isExam ? "exam" : isCheat ? "cheatsheet" : "topic";

    const ctx: WalkCtx = {
      bookSlug: cfg.slug,
      linkMap,
      usedIds: new Set(),
      report,
    };

    $s.find(".quiz").each((_j, q) => $(q).attr("data-chapter-slug", slug));
    $s.find(".topic-head, .complete-btn, .hero, .stats").remove();

    const { blocks, quizzes } = walkChildren($, $s, ctx);

    (cfg.vizInjections || []).forEach((inj) => {
      if (inj.chapterMatch.test(slug)) {
        blocks.push({ type: "viz", kind: inj.kind, caption: inj.caption });
        report.viz[inj.kind] = (report.viz[inj.kind] || 0) + 1;
      }
    });

    const words = textOfBlocks(blocks).split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(1, Math.round(words / 200));

    const meta = {
      slug,
      number: num,
      title,
      ...(subtitleRaw ? { subtitle: subtitleRaw } : {}),
      kind,
      words,
      minutes,
    };
    chapterMetas.push(meta);

    const chapterTs = `import type { ChapterData } from "@/content/types";\n\nconst chapter: ChapterData = ${tsLiteral(
      { meta, blocks }
    )};\n\nexport default chapter;\n`;
    fs.writeFileSync(path.join(chaptersDir, `${slug}.ts`), chapterTs);

    quizzes.forEach((q) => {
      const quizTs = `import type { QuizData } from "@/content/types";\n\nconst quiz: QuizData = ${tsLiteral(
        q.data
      )};\n\nexport default quiz;\n`;
      fs.writeFileSync(
        path.join(quizzesDir, `${(q.data as { slug: string }).slug}.ts`),
        quizTs
      );
    });
  });

  /* book.ts ----------------------------------------------------------- */
  const bookMeta = {
    slug: cfg.slug,
    code: cfg.code,
    title: cfg.title,
    tagline: cfg.tagline,
    description: lead,
    subject: cfg.subject,
    ...(cfg.department ? { department: cfg.department } : {}),
    tags: cfg.tags,
    chapters: chapterMetas,
    questionCount: report.questions,
    flashcardCount: report.flashcards,
  };
  const bookTs = `import type { BookMeta } from "@/content/types";\n\nconst book: BookMeta = ${tsLiteral(
    bookMeta
  )};\n\nexport default book;\n`;
  fs.writeFileSync(path.join(OUT, "books", cfg.slug, "book.ts"), bookTs);

  return report;
}

/* ------------------------------------------------------------------ */
/* Main                                                                */
/* ------------------------------------------------------------------ */

function main(): void {
  const allReports: { slug: string; report: Report }[] = [];
  for (const cfg of BOOKS) {
    console.log(`\n=== ${cfg.slug} (${cfg.file}) ===`);
    try {
      const r = migrateBook(cfg);
      allReports.push({ slug: cfg.slug, report: r });
      console.log(`  quizzes: ${r.quizzes}, questions: ${r.questions}`);
      console.log(`  blocks: ${JSON.stringify(r.blocks)}`);
      console.log(`  viz: ${JSON.stringify(r.viz)}`);
      console.log(
        `  figures: ${r.figures} svg, ${r.htmlFigures} html, flashcards: ${r.flashcards}, reveals: ${r.solutionsRevealed}`
      );
      const unmatched = Object.entries(r.unmatched).filter(
        ([k]) => !k.startsWith("div")
      );
      if (unmatched.length)
        console.log(
          `  UNMATCHED: ${JSON.stringify(Object.fromEntries(unmatched))}`
        );
      const wrappers = Object.entries(r.unmatched).filter(([k]) =>
        k.startsWith("div")
      );
      if (wrappers.length)
        console.log(
          `  wrapper divs recursed: ${JSON.stringify(
            Object.fromEntries(wrappers)
          )}`
        );
    } catch (err) {
      console.error(`  FAILED: ${err}`);
      process.exitCode = 1;
    }
  }

  /* registry — explicit per-file imports (bundler-safe) ----------------- */
  const chapterImports: string[] = [];
  const chapterEntries: string[] = [];
  const quizImports: string[] = [];
  const quizEntries: string[] = [];
  for (const cfg of BOOKS) {
    const chaptersDir = path.join(OUT, "books", cfg.slug, "chapters");
    const quizzesDir = path.join(OUT, "books", cfg.slug, "quizzes");
    const chFiles = fs
      .readdirSync(chaptersDir)
      .filter((f) => f.endsWith(".ts"))
      .sort();
    chFiles.forEach((f) => {
      const name = `${cfg.slug}_ch_${f.replace(/\.ts$/, "").replace(/[^a-zA-Z0-9]/g, "_")}`;
      chapterImports.push(`import ${name} from "./books/${cfg.slug}/chapters/${f.replace(/\.ts$/, "")}";`);
      chapterEntries.push(`  ["/${cfg.slug}/${f.replace(/\.ts$/, "")}", ${name}],`);
    });
    if (fs.existsSync(quizzesDir)) {
      const qFiles = fs
        .readdirSync(quizzesDir)
        .filter((f) => f.endsWith(".ts"))
        .sort();
      qFiles.forEach((f) => {
        const name = `${cfg.slug}_q_${f.replace(/\.ts$/, "").replace(/[^a-zA-Z0-9]/g, "_")}`;
        quizImports.push(`import ${name} from "./books/${cfg.slug}/quizzes/${f.replace(/\.ts$/, "")}";`);
        quizEntries.push(`  ["/${cfg.slug}/${f.replace(/\.ts$/, "")}", ${name}],`);
      });
    }
  }
  const bookImports = BOOKS.map(
    (b) => `import ${b.slug}Book from "./books/${b.slug}/book";`
  ).join("\n");
  const indexTs = `${bookImports}
${chapterImports.join("\n")}
${quizImports.join("\n")}
import type { BookMeta, ChapterData, QuizData } from "./types";

export const books: BookMeta[] = [
  ${BOOKS.map((b) => `${b.slug}Book`).join(",\n  ")}
];

const chapterRegistry = new Map<string, ChapterData>([
${chapterEntries.join("\n")}
]);

const quizRegistry = new Map<string, QuizData>([
${quizEntries.join("\n")}
]);

export function getBook(slug: string): BookMeta | undefined {
  return books.find((b) => b.slug === slug);
}

export function getChapter(bookSlug: string, chapterSlug: string): ChapterData | undefined {
  return chapterRegistry.get(\`/\${bookSlug}/\${chapterSlug}\`);
}

export function getQuiz(bookSlug: string, quizSlug: string): QuizData | undefined {
  return quizRegistry.get(\`/\${bookSlug}/\${quizSlug}\`);
}

export const galleryStats = {
  books: books.length,
  chapters: books.reduce((n, b) => n + b.chapters.length, 0),
  questions: books.reduce((n, b) => n + b.questionCount, 0),
  minutes: books.reduce((n, b) => n + b.chapters.reduce((m, c) => m + c.minutes, 0), 0),
};
`;
  fs.writeFileSync(path.join(OUT, "index.ts"), indexTs);

  console.log("\n=== TOTALS ===");
  const totals = allReports.reduce(
    (acc, { report }) => {
      acc.questions += report.questions;
      acc.flashcards += report.flashcards;
      acc.figures += report.figures + report.htmlFigures;
      acc.quizzes += report.quizzes;
      return acc;
    },
    { questions: 0, flashcards: 0, figures: 0, quizzes: 0 }
  );
  console.log(JSON.stringify(totals, null, 2));
  console.log(`\nDone. Registry: ${path.join(OUT, "index.ts")}`);
}

main();
