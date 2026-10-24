import type {
  Block,
  Block as BlockType,
  QuizData,
} from "@/content/types";
import { Quiz } from "@/components/book/quiz";
import { QuizTeaser } from "@/components/book/quiz-drawer";
import { Flashcards } from "@/components/book/flashcards";
import { Reveal } from "@/components/book/reveal";
import { LazyViz } from "@/components/viz/lazy";
import {
  AlertTriangle,
  BookMarked,
  Info,
  Lightbulb,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Small building blocks (server components)                            */
/* ------------------------------------------------------------------ */

const CALLOUT_STYLE: Record<
  string,
  { icon: React.ReactNode; label: string; box: string; iconColor: string }
> = {
  info: {
    icon: <Info className="h-4 w-4" aria-hidden />,
    label: "Note",
    box: "border-l-info bg-info-soft",
    iconColor: "text-info",
  },
  tip: {
    icon: <Lightbulb className="h-4 w-4" aria-hidden />,
    label: "Tip",
    box: "border-l-ok bg-ok-soft",
    iconColor: "text-ok",
  },
  warn: {
    icon: <AlertTriangle className="h-4 w-4" aria-hidden />,
    label: "Warning",
    box: "border-l-warn bg-warn-soft",
    iconColor: "text-warn",
  },
  exam: {
    icon: <BookMarked className="h-4 w-4" aria-hidden />,
    label: "Exam alert",
    box: "border-l-danger bg-danger-soft",
    iconColor: "text-danger",
  },
};

function Callout({
  variant,
  title,
  html,
}: {
  variant: string;
  title: string;
  html: string;
}) {
  const style = CALLOUT_STYLE[variant] ?? CALLOUT_STYLE.info;
  return (
    <aside
      className={`print-avoid-break my-5 rounded-md border border-hairline border-l-[3px] ${style.box} px-4 py-3`}
    >
      <p
        className={`mb-1 flex items-center gap-1.5 text-caption font-semibold uppercase tracking-wide ${style.iconColor}`}
      >
        {style.icon}
        {title || style.label}
      </p>
      <div
        className="prose-book text-[0.95rem]"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </aside>
  );
}

function CodeBlock({
  language,
  html,
  header,
}: {
  language: string;
  html: string;
  header?: { file?: string; tag?: string };
}) {
  return (
    <figure className="print-avoid-break my-5 overflow-hidden rounded-md border border-hairline">
      {header ? (
        <figcaption className="flex items-center justify-between gap-2 border-b border-hairline bg-paper-sunken px-4 py-2">
          <span className="font-mono text-caption text-ink">
            {header.file}
          </span>
          {header.tag ? (
            <span className="rounded-full border border-hairline px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wide text-ink-muted">
              {header.tag}
            </span>
          ) : null}
        </figcaption>
      ) : null}
      <div className="overflow-x-auto bg-[var(--code-bg)] thin-scroll">
        <pre className="px-4 py-3.5 font-mono text-[0.82rem] leading-relaxed text-[var(--code-ink)]">
          <code dangerouslySetInnerHTML={{ __html: html }} />
        </pre>
      </div>
      <span className="sr-only">Code example in {language}</span>
    </figure>
  );
}

function TableBlockView({
  head,
  rows,
  highlightRows,
  nowrapCols,
}: {
  head: string[];
  rows: string[][];
  highlightRows?: number[];
  nowrapCols?: number[];
}) {
  const highlight = new Set(highlightRows ?? []);
  const nowrap = new Set(nowrapCols ?? []);
  return (
    <div className="print-avoid-break my-5 overflow-x-auto rounded-md border border-hairline thin-scroll">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-hairline bg-paper-sunken">
            {head.map((h, i) => (
              <th
                key={i}
                scope="col"
                className={`px-3.5 py-2.5 text-left text-caption font-semibold uppercase tracking-wide text-ink-muted ${
                  nowrap.has(i) ? "whitespace-nowrap" : ""
                }`}
                dangerouslySetInnerHTML={{ __html: wrapBigO(h) }}
              />
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              className={`border-b border-hairline last:border-b-0 ${
                highlight.has(ri) ? "bg-mark/40 dark:bg-mark/30" : ""
              }`}
            >
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`px-3.5 py-2.5 align-top ${
                    nowrap.has(ci) ? "whitespace-nowrap" : ""
                  }`}
                  dangerouslySetInnerHTML={{ __html: wrapBigO(cell) }}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ExampleView({
  title,
  bodyHtml,
  solutionHtml,
}: {
  title: string;
  bodyHtml: string;
  solutionHtml: string | null;
}) {
  return (
    <section className="print-avoid-break my-6 rounded-md border border-hairline bg-paper-raised">
      <header className="flex items-center gap-2.5 border-b border-hairline px-4 py-2.5">
        <span className="rounded-sm bg-ink px-1.5 py-0.5 font-mono text-[0.62rem] font-bold uppercase tracking-widest text-paper">
          Worked
        </span>
        <h4 className="font-display text-[0.95rem] font-semibold leading-snug">
          {title}
        </h4>
      </header>
      <div
        className="prose-book px-4 py-3"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
      {solutionHtml ? (
        <div className="px-4 pb-4">
          <Reveal label="Show solution">
            <div dangerouslySetInnerHTML={{ __html: solutionHtml }} />
          </Reveal>
        </div>
      ) : null}
    </section>
  );
}

function AccordionView({
  items,
}: {
  items: { title: string; html: string }[];
}) {
  return (
    <div className="my-5 divide-y divide-hairline overflow-hidden rounded-md border border-hairline bg-paper-raised">
      {items.map((item, i) => (
        <details key={i} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-medium hover:bg-paper-sunken [&::-webkit-details-marker]:hidden">
            {item.title}
            <ChevronIcon />
          </summary>
          <div
            className="prose-book border-t border-hairline px-4 py-3 text-[0.95rem]"
            dangerouslySetInnerHTML={{ __html: item.html }}
          />
        </details>
      ))}
    </div>
  );
}

/* Wrap Big-O / Θ / Ω complexity tokens in colored chips (F12).
   Skips anything already inside <code> spans. */
const BIGO_RE = /(?<![A-Za-z0-9_])(O|Θ|Ω)\s*\(([^()<>\n]{1,30})\)/g;
function wrapBigO(html: string): string {
  return html
    .split(/(<code[\s\S]*?<\/code>)/g)
    .map((part) =>
      part.startsWith("<code")
        ? part
        : part.replace(BIGO_RE, (_m, sym: string, body: string) =>
            `<span class="bigo">${sym}(${body})</span>`,
          ),
    )
    .join("");
}

function ChevronIcon() {
  return (
    <svg
      className="h-4 w-4 flex-none text-ink-muted transition-transform duration-150 group-open:rotate-180"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function FigureView({
  svg,
  alt,
  caption,
}: {
  svg: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="print-avoid-break my-6 overflow-x-auto rounded-md border border-hairline bg-paper-raised p-4 thin-scroll">
      <div
        className="fig-embed"
        role="img"
        aria-label={alt}
        dangerouslySetInnerHTML={{ __html: svg }}
      />
      {caption ? (
        <figcaption className="mt-2.5 text-center text-caption text-ink-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function HtmlFigureView({
  html,
  alt,
  caption,
}: {
  html: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="print-avoid-break my-6 overflow-x-auto rounded-md border border-hairline bg-paper-raised p-4 thin-scroll">
      <div
        className="fig-embed text-[0.95rem]"
        role="img"
        aria-label={alt}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      {caption ? (
        <figcaption className="mt-2.5 text-center text-caption text-ink-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

/* ------------------------------------------------------------------ */
/* Renderer                                                             */
/* ------------------------------------------------------------------ */

export function BlockRenderer({
  blocks,
  quiz,
  quizMode = "inline",
  quizStorageKey,
}: {
  blocks: BlockType[];
  /** Loaded quiz data (one per chapter), rendered at its quizRef position */
  quiz?: QuizData | null;
  /**
   * "inline" renders the full Quiz at the quizRef position (exam chapters);
   * "drawer" renders a lightweight teaser — the quiz itself opens in the
   * right-side QuizDrawer mounted by the chapter page.
   */
  quizMode?: "inline" | "drawer";
  /** localStorage key the Quiz persists its progress under */
  quizStorageKey?: string;
}) {
  return (
    <>
      {blocks.map((block, i) => {
        const b = block as Block;
        switch (b.type) {
          case "heading": {
            const Tag = b.depth === 3 ? "h3" : "h4";
            return (
              <Tag
                key={i}
                id={b.id}
                className={
                  b.depth === 3
                    ? "mt-10 mb-3 scroll-mt-24 border-b-2 border-(--accent) pb-2 font-display text-section font-semibold leading-tight text-ink"
                    : "mt-8 mb-2.5 scroll-mt-24 font-display text-subsection font-semibold leading-snug text-ink"
                }
              >
                {b.text}
              </Tag>
            );
          }
          case "paragraph":
            return (
              <p
                key={i}
                className="prose-book my-3.5"
                dangerouslySetInnerHTML={{ __html: b.html }}
              />
            );
          case "list": {
            const ListTag = b.ordered ? "ol" : "ul";
            return (
              <ListTag
                key={i}
                className={`prose-book my-4 space-y-1.5 pl-6 ${
                  b.ordered
                    ? "list-decimal marker:font-mono marker:text-ink-muted"
                    : "list-disc marker:text-ink-faint"
                }`}
              >
                {b.items.map((item, j) => (
                  <li
                    key={j}
                    className="pl-1 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                ))}
              </ListTag>
            );
          }
          case "callout":
            return (
              <Callout
                key={i}
                variant={b.variant}
                title={b.title}
                html={b.html}
              />
            );
          case "code":
            return (
              <CodeBlock
                key={i}
                language={b.language}
                html={b.html}
                header={b.header}
              />
            );
          case "table":
            return (
              <TableBlockView
                key={i}
                head={b.head}
                rows={b.rows}
                highlightRows={b.highlightRows}
                nowrapCols={b.nowrapCols}
              />
            );
          case "example":
            return (
              <ExampleView
                key={i}
                title={b.title}
                bodyHtml={b.bodyHtml}
                solutionHtml={b.solutionHtml}
              />
            );
          case "accordion":
            return <AccordionView key={i} items={b.items} />;
          case "figure":
            return (
              <FigureView
                key={i}
                svg={b.svg}
                alt={b.alt}
                caption={b.caption}
              />
            );
          case "htmlFigure":
            return (
              <HtmlFigureView
                key={i}
                html={b.html}
                alt={b.alt}
                caption={b.caption}
              />
            );
          case "viz":
            return <LazyViz key={i} kind={b.kind} caption={b.caption} />;
          case "flashcards":
            return (
              <details
                key={i}
                className="group my-6 overflow-hidden rounded-md border border-hairline bg-paper-raised"
              >
                {/* summary replaces the old h3 visually; keep a hidden heading
                    for document semantics */}
                <h3 className="sr-only">Flashcards</h3>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 hover:bg-paper-sunken [&::-webkit-details-marker]:hidden">
                  <span className="flex min-w-0 flex-wrap items-baseline gap-x-2">
                    <span className="font-display text-sm font-semibold text-ink">
                      Flashcards
                    </span>
                    <span className="text-caption text-ink-muted">
                      · {b.cards.length}{" "}
                      {b.cards.length === 1 ? "card" : "cards"}
                    </span>
                  </span>
                  <span className="flex shrink-0 items-center gap-2">
                    <span className="text-caption text-ink-faint group-open:hidden">
                      tap to expand
                    </span>
                    <ChevronIcon />
                  </span>
                </summary>
                <div className="border-t border-hairline p-4">
                  <Flashcards cards={b.cards} />
                </div>
              </details>
            );
          case "quiz":
            if (quizMode === "drawer") {
              // Topic chapters: quiz lives in the right-side drawer; show a
              // teaser at the old position instead (rendered even if the
              // chapter's quiz data failed to load — the drawer handles that).
              return <QuizTeaser key={i} title={b.title} count={b.count} />;
            }
            return quiz ? (
              <section key={i} className="my-10">
                <Quiz quiz={quiz} storageKey={quizStorageKey} />
              </section>
            ) : null;
          default:
            return null;
        }
      })}
    </>
  );
}
