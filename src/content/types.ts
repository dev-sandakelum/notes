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
  /**
   * Structured content rendered inside the "Worked" box after bodyHtml
   * (e.g. a shared <TreeDiagram /> figure). Lets worked examples use the
   * same renderers as the main flow instead of raw, unstyled SVG HTML.
   */
  blocks?: Block[];
}

export interface AccordionBlock {
  type: "accordion";
  items: { title: string; html: string }[];
}

/* ------------------------------------------------------------------ */
/* EconChart — data-driven economic diagrams                           */
/*                                                                     */
/* Every Business Economics chart is authored as a serialisable spec:  */
/* axes, curves (equations or computed point sets), reference lines,   */
/* points, arrows, shaded regions and annotations. Geometry (scales,   */
/* intersections, areas, label placement) is COMPUTED from these       */
/* numbers by components/econ/econ-chart-core.ts — never eyeballed.    */
/* ------------------------------------------------------------------ */

export type EconColor =
  | "primary"
  | "accent"
  | "danger"
  | "success"
  | "warn"
  | "muted";

/** A curve drawn from data. All coordinates are (x, y) = (Q, P) data units. */
export interface EconCurveSpec {
  id: string;
  /** Short curve name shown at the end of the curve, e.g. "D", "S", "MC". */
  label: string;
  kind: "linear" | "points" | "bars";
  /**
   * linear: P = m·Q + b (price as a function of quantity).
   * The equation string is shown in the chart's data table.
   */
  linear?: { m: number; b: number };
  /**
   * points: computed (Q, P) samples (from an equation or a table),
   * smoothed with a monotone cubic where requested.
   */
  points?: [number, number][];
  /** bars: histogram bars centred on x with height h (from the zero line). */
  bars?: { x: number; h: number }[];
  /** Q-range over which the curve is drawn (data units). */
  domain: [number, number];
  color?: EconColor;
  dash?: boolean;
  /** Relative stroke width (default 1 → 2.4px). */
  weight?: number;
  /**
   * Where the curve label sits: end of domain (default), start, a
   * specific Q value on the curve (data units), or an explicit
   * above/below placement at a Q value.
   */
  labelAt?: "end" | "start" | number | { q: number; side: "above" | "below"; gap?: number };
  /** Extra pixel offset for the curve label along the curve normal. */
  labelOffset?: number;
  /** Equation string for the data table, e.g. "Q = 320 − 10P". */
  eq?: string;
  /** Smooth points with a monotone cubic instead of a polyline. */
  smooth?: boolean;
}

export interface EconPointSpec {
  x: number;
  y: number;
  /** Main label next to the point, e.g. "E₁". */
  label: string;
  /** Optional value text shown with the label, e.g. "(50, 10)". */
  valueLabel?: string;
  /** Dashed guide lines from the point to the axes. */
  guides?: "both" | "x" | "y" | "none";
  /** Symbol printed at the x-axis together with the value, e.g. "Q₀". */
  xAxisLabel?: string;
  /** Symbol printed at the y-axis together with the value, e.g. "P₀". */
  yAxisLabel?: string;
  color?: EconColor;
  /** Label offset from the point in pixels (default 9, −9). */
  dx?: number;
  dy?: number;
  /**
   * Draw only the short label next to the point (values still appear on
   * the axis guides, in the tooltip and the data table). Use for crowded
   * intersections like E₁ where the full "(Q, P)" text cannot fit.
   */
  hideValueInLabel?: boolean;
}

export interface EconRefLineSpec {
  axis: "x" | "y";
  /** Data value the line sits at (x for vertical, y for horizontal). */
  at: number;
  /** Label drawn at the far end of the line, e.g. "TP = 20". */
  label: string;
  color?: EconColor;
  dash?: boolean;
  /** Stop a horizontal line at this x (data units) instead of the axis. */
  extendTo?: number;
  /** Draw the label above (default) or below a horizontal line. */
  labelBelow?: boolean;
}

/** Shaded region whose polygon is computed from the chart's numbers. */
export interface EconRegionSpec {
  /** Polygon vertices in data units, computed (never eyeballed). */
  points: [number, number][];
  label: string;
  /** Computed area value in data units², shown in the label/legend. */
  value?: number;
  /** Display string for the value, e.g. "Rs 3,200". */
  valueLabel?: string;
  color?: EconColor;
  opacity?: number;
  /** Label offset from the polygon centroid in pixels. */
  labelDy?: number;
}

export interface EconArrowSpec {
  from: [number, number];
  to: [number, number];
  label: string;
  /** Draw arrow heads on both ends (shift/quantity brackets). */
  double?: boolean;
  color?: EconColor;
  /**
   * Perpendicular label offset in pixels. Negative (default −12) puts the
   * label above horizontal arrows and left of upward arrows.
   */
  labelDy?: number;
  /** Extra horizontal shift of the arrow label (pixels). */
  labelDx?: number;
}

export interface EconLabelSpec {
  text: string;
  x: number;
  y: number;
  anchor?: "start" | "middle" | "end";
  color?: EconColor;
  size?: "sm" | "tag";
  /** Allow this label to be nudged by the anti-collision pass. */
  float?: boolean;
}

export interface EconAxisSpec {
  label: string;
  min: number;
  max: number;
  /** Explicit tick values; omitted → auto "nice" ticks. */
  ticks?: number[];
  /** Tick label formatter (e.g. prices with "Rs"). */
  tickLabel?: string;
}

export interface EconChartSpec {
  id: string;
  /** Accessible title; also the <title> of the SVG. */
  title: string;
  /** Accessible description with the key computed values. */
  desc: string;
  x: EconAxisSpec;
  y: EconAxisSpec;
  curves?: EconCurveSpec[];
  points?: EconPointSpec[];
  refLines?: EconRefLineSpec[];
  regions?: EconRegionSpec[];
  arrows?: EconArrowSpec[];
  labels?: EconLabelSpec[];
  /** Draw a heavier zero line (charts with negative bars). */
  zeroLine?: boolean;
  /** Vertical zone shading between two x values (production stages). */
  vZones?: {
    from: number;
    to: number;
    label: string;
    color: EconColor;
    /** Draw the zone label at the top (default) or bottom of the plot. */
    labelY?: "top" | "bottom";
  }[];
  /** Rows of the "numbers" table: equations, computed values. */
  tableRows: { label: string; value: string }[];
  /** Caption generated from the same computed numbers as the drawing. */
  caption: string;
  /** Optional wider/taller logical canvas (default 680 × 470). */
  size?: { w: number; h: number };
  /** Hide the y-axis "0" origin label when it would collide. */
  hideOrigin?: boolean;
}

export interface EconChartBlock {
  type: "econChart";
  spec: EconChartSpec;
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

/** Node of a static tree diagram (reusable <TreeDiagram /> figure) */
export interface TreeDiagramNodeData {
  id: string;
  label: string;
  /** Explicit center position in diagram units */
  x: number;
  y: number;
  /** Optional per-node radius (default 21) */
  r?: number;
  /** Optional short annotation drawn under the label */
  note?: string;
}

/**
 * Nested tree for auto-laid-out static figures: positions are COMPUTED by
 * the shared side-aware tidy layout (book/tree-layout.ts) — lone left/right
 * children are offset sideways, siblings keep a minimum gap, and nothing
 * can overlap or render as a vertical single-child edge.
 */
export interface TreeDiagramTreeNode {
  id: string;
  label: string;
  /** Which slot this child occupies in its parent ("left" | "right"). */
  side?: "left" | "right";
  /** Optional short annotation drawn under the label. */
  note?: string;
  /** Optional per-node radius (default 21). */
  r?: number;
  children?: TreeDiagramTreeNode[];
}

/** Static tree figure rendered by the shared <TreeDiagram /> component.
 *  Either pass `tree` (auto layout) or explicit `nodes` + `edges`.
 *  The viewBox is computed from the actual node positions + radii + padding,
 *  so nodes can never be clipped. */
export interface TreeDiagramBlock {
  type: "treeDiagram";
  /** Nested tree — positions computed by the shared tidy layout. */
  tree?: TreeDiagramTreeNode;
  /** Explicit node positions (used when `tree` is absent). */
  nodes?: TreeDiagramNodeData[];
  /** Edges as [fromId, toId] pairs (used when `tree` is absent). */
  edges?: [string, string][];
  alt: string;
  caption?: string;
  /** Optional max rendered width in px (default 560) */
  maxWidth?: number;
  /** Optional free-floating panel labels (e.g. dual-panel figures) */
  labels?: { text: string; x: number; y: number }[];
}

/** Pre-formatted ASCII-art diagram rendered as a styled <pre> figure with
 *  preserved line breaks and horizontal scroll on narrow screens. */
export interface AsciiBlock {
  type: "ascii";
  lines: string[];
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
  | "avlInsert"
  | "bstDelete"
  | "avlCases"
  | "avlCompare"
  | "traversalPlayer"
  | "notationPlayer"
  | "postfixEval"
  | "infixPostfix"
  | "linkedList"
  | "circularQueue";

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
  /** Title shown above the quiz, e.g. "Topic 3 Quiz: Stacks" */
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
  | EconChartBlock
  | FigureBlock
  | HtmlFigureBlock
  | TreeDiagramBlock
  | AsciiBlock
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
