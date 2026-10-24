/**
 * Content model for the Note Gallery & Digital Book.
 * All reading content is authored as typed data files under src/content/books/.
 */

export type Subject = "Computer Science" | "Economics" | "Mathematics";
export type Department = "DICT" | "DMS";

export type ChapterKind = "topic" | "cheatsheet" | "exam";

export interface ChapterMeta {
  slug: string;
  /** 1-based position within the book */
  number: number;
  title: string;
  /** Original .src subtitle line under the h2 */
  subtitle?: string;
  kind: ChapterKind;
  words: number;
  /** Estimated reading time in minutes */
  minutes: number;
}

export interface BookMeta {
  slug: string;
  /** Course code, e.g. "ICT2113" */
  code: string;
  title: string;
  tagline: string;
  description: string;
  subject: Subject;
  department?: Department;
  tags: string[];
  chapters: ChapterMeta[];
  questionCount: number;
  flashcardCount: number;
}

/* ------------------------------------------------------------------ */
/* Blocks — one discriminated-union variant per original DOM pattern   */
/* ------------------------------------------------------------------ */

export interface HeadingBlock {
  type: "heading";
  depth: 3 | 4;
  id: string;
  text: string;
}

export interface ParagraphBlock {
  type: "paragraph";
  /** Trusted inline HTML (b, i, em, strong, code, a). Authored at build time. */
  html: string;
}

export interface ListBlock {
  type: "list";
  ordered: boolean;
  /** Items may contain inline HTML */
  items: string[];
}

export type CalloutVariant = "info" | "tip" | "warn" | "exam";

export interface CalloutBlock {
  type: "callout";
  variant: CalloutVariant;
  title: string;
  html: string;
}

export interface CodeBlock {
  type: "code";
  language: string;
  /** Optional header bar (original .cb code box: filename + language tag) */
  header?: { file?: string; tag?: string };
  /** Pre-highlighted HTML using tok-kw/tok-fn/tok-str/tok-num/tok-cm spans */
  html: string;
}

export interface TableBlock {
  type: "table";
  head: string[];
  /** Cells may contain inline HTML */
  rows: string[][];
  /** Indexes of rows to highlight (original tr.hl) */
  highlightRows?: number[];
  /** Column indexes that were white-space:nowrap in the original */
  nowrapCols?: number[];
  caption?: string;
}

export interface ExampleBlock {
  type: "example";
  title: string;
  /** Worked example body (may contain code blocks as HTML) */
  bodyHtml: string;
  /** Hidden solution shown on demand; null when there is no reveal */
  solutionHtml: string | null;
}

export interface AccordionBlock {
  type: "accordion";
  items: { title: string; html: string }[];
}

export interface FigureBlock {
  type: "figure";
  /** Inline SVG markup (viewBox responsive; colors reference theme vars) */
  svg: string;
  alt: string;
  caption?: string;
}

/** HTML/CSS diagram from the original notes (flow steps, node boxes, formula grids) */
export interface HtmlFigureBlock {
  type: "htmlFigure";
  /** Trusted HTML re-skinned via legacy classes under .fig-embed */
  html: string;
  alt: string;
  caption?: string;
}

export type VizKind =
  | "stack"
  | "queue"
  | "bst"
  | "bstTraversal"
  | "sorting"
  | "hash"
  | "ppc"
  | "parabola"
  | "terminology"
  | "avlTree"
  | "avlRotations"
  | "avlInsert";

export interface VizBlock {
  type: "viz";
  kind: VizKind;
  caption?: string;
}

export interface FlashcardsBlock {
  type: "flashcards";
  cards: { front: string; back: string; category?: string }[];
}

export interface QuizRefBlock {
  type: "quiz";
  /** Title shown above the quiz, e.g. "Topic 3 Quiz — Stacks" */
  title: string;
  /** Number of questions (for the subtitle) */
  count: number;
  /** Slug of the quiz data file under books/<book>/quizzes/ */
  quizSlug: string;
}

export type Block =
  | HeadingBlock
  | ParagraphBlock
  | ListBlock
  | CalloutBlock
  | CodeBlock
  | TableBlock
  | ExampleBlock
  | AccordionBlock
  | FigureBlock
  | HtmlFigureBlock
  | VizBlock
  | FlashcardsBlock
  | QuizRefBlock;

/* ------------------------------------------------------------------ */
/* Chapters & quizzes                                                  */
/* ------------------------------------------------------------------ */

export interface ChapterData {
  meta: ChapterMeta;
  blocks: Block[];
}

export interface QuizQuestion {
  prompt: string;
  options: string[];
  /** Index of the correct option */
  answer: number;
  explanation: string;
}

export interface QuizData {
  slug: string;
  title: string;
  questions: QuizQuestion[];
}

/* ------------------------------------------------------------------ */
/* Aggregated gallery entry (computed in content/index.ts)             */
/* ------------------------------------------------------------------ */

export interface GalleryStats {
  books: number;
  chapters: number;
  questions: number;
  minutes: number;
}
