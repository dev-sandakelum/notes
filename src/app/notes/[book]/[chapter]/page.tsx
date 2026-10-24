import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { books, getBook, getChapter, getQuiz } from "@/content";
import type { HeadingBlock, QuizRefBlock } from "@/content/types";
import { BlockRenderer } from "@/components/book/block-renderer";
import { QuizDrawer } from "@/components/book/quiz-drawer";
import { MarkComplete } from "@/components/book/mark-complete";
import { TableOfContents } from "@/components/book/table-of-contents";
import { ClipboardList, Clock, ArrowLeft, ArrowRight, ScrollText } from "lucide-react";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams(): { book: string; chapter: string }[] {
  return books.flatMap((b) =>
    b.chapters.map((c) => ({ book: b.slug, chapter: c.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ book: string; chapter: string }>;
}): Promise<Metadata> {
  const { book, chapter } = await params;
  const bookMeta = getBook(book);
  const chapterData = getChapter(book, chapter);
  if (!bookMeta || !chapterData) return {};
  return {
    title: `${chapterData.meta.title} — ${bookMeta.code}`,
    description: chapterData.meta.subtitle ?? bookMeta.tagline,
  };
}

const KIND_LABEL: Record<string, string> = {
  topic: "Chapter",
  cheatsheet: "Revision sheet",
  exam: "Practice exam",
};

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ book: string; chapter: string }>;
}) {
  const { book: bookSlug, chapter: chapterSlug } = await params;
  const book = getBook(bookSlug);
  const chapter = getChapter(bookSlug, chapterSlug);
  if (!book || !chapter) notFound();

  const quizRef = chapter.blocks.find(
    (b): b is QuizRefBlock => b.type === "quiz"
  );
  const quiz = quizRef ? getQuiz(bookSlug, quizRef.quizSlug) ?? null : null;
  // Exam chapters keep the quiz inline in the reading flow; every other kind
  // (topic / cheatsheet) moves it into the right-side quiz drawer.
  const isExam = chapter.meta.kind === "exam";
  const quizStorageKey = `notequiz:${book.slug}:${chapter.meta.slug}`;

  const headings = chapter.blocks
    .filter((b): b is HeadingBlock => b.type === "heading")
    .map((b) => ({ id: b.id, text: b.text, depth: b.depth }));

  const idx = book.chapters.findIndex((c) => c.slug === chapterSlug);
  const prev = idx > 0 ? book.chapters[idx - 1] : null;
  const next = idx < book.chapters.length - 1 ? book.chapters[idx + 1] : null;
  const KindIcon =
    chapter.meta.kind === "exam"
      ? ClipboardList
      : chapter.meta.kind === "cheatsheet"
        ? ScrollText
        : null;

  return (
    <main className="mx-auto w-full max-w-[1280px] px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_220px]">
        <article className="min-w-0">
          {/* Chapter header */}
          <header className="mb-8 border-b border-hairline pb-6">
            <nav
              aria-label="Breadcrumb"
              className="mb-4 flex flex-wrap items-center gap-1.5 font-mono text-caption text-ink-faint no-print"
            >
              <Link href="/" className="transition-colors hover:text-ink">
                Note Gallery
              </Link>
              <span aria-hidden>/</span>
              <Link
                href={`/notes/${book.slug}`}
                className="transition-colors hover:text-ink"
              >
                {book.code}
              </Link>
              <span aria-hidden>/</span>
              <span className="text-ink-muted">
                Chapter {chapter.meta.number}
              </span>
            </nav>
            <div className="flex flex-wrap items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-(--accent) font-mono text-sm font-bold text-paper">
                {chapter.meta.number}
              </span>
              {KindIcon ? (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-hairline px-2.5 py-1 text-caption text-ink-muted">
                  <KindIcon className="h-3.5 w-3.5" aria-hidden />
                  {KIND_LABEL[chapter.meta.kind]}
                </span>
              ) : null}
              <span className="inline-flex items-center gap-1.5 text-caption text-ink-faint">
                <Clock className="h-3.5 w-3.5" aria-hidden />~{chapter.meta.minutes}{" "}
                min read
              </span>
            </div>
            <h1 className="mt-3 font-display text-book-title font-semibold leading-tight text-ink">
              {chapter.meta.title}
            </h1>
            {chapter.meta.subtitle ? (
              <p className="mt-2 font-display text-lg italic text-ink-muted">
                {chapter.meta.subtitle}
              </p>
            ) : null}
            <div className="mt-5 flex flex-wrap items-center gap-3 no-print">
              <MarkComplete bookSlug={book.slug} chapterSlug={chapter.meta.slug} />
            </div>
          </header>

          {/* Content — ~960px reading column; tables/diagrams use the full width */}
          <div className="max-w-[60rem]">
            <BlockRenderer
              blocks={chapter.blocks}
              quiz={isExam ? quiz : null}
              quizMode={isExam ? "inline" : "drawer"}
              quizStorageKey={quizStorageKey}
            />
          </div>

          {/* Prev / next */}
          <nav
            aria-label="Chapter navigation"
            className="mt-14 grid gap-3 border-t border-hairline pt-8 sm:grid-cols-2 no-print"
          >
            {prev ? (
              <Link
                href={`/notes/${book.slug}/${prev.slug}`}
                className="group flex items-center gap-3 rounded-md border border-hairline bg-paper-raised px-4 py-3 transition-colors hover:border-hairline-strong"
              >
                <ArrowLeft
                  className="h-4 w-4 flex-none text-ink-faint transition-transform group-hover:-translate-x-0.5"
                  aria-hidden
                />
                <span className="min-w-0">
                  <span className="block text-caption text-ink-faint">
                    Previous · {prev.number}
                  </span>
                  <span className="block truncate text-sm font-medium text-ink">
                    {prev.title}
                  </span>
                </span>
              </Link>
            ) : (
              <span aria-hidden className="hidden sm:block" />
            )}
            {next ? (
              <Link
                href={`/notes/${book.slug}/${next.slug}`}
                className="group flex items-center justify-end gap-3 rounded-md border border-hairline bg-paper-raised px-4 py-3 text-right transition-colors hover:border-hairline-strong"
              >
                <span className="min-w-0">
                  <span className="block text-caption text-ink-faint">
                    Next · {next.number}
                  </span>
                  <span className="block truncate text-sm font-medium text-ink">
                    {next.title}
                  </span>
                </span>
                <ArrowRight
                  className="h-4 w-4 flex-none text-ink-faint transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
            ) : null}
          </nav>
        </article>

        {/* Sticky TOC rail */}
        <TableOfContents headings={headings} />
      </div>

      {/* Topic-chapter quiz lives in the right-side drawer (C5) */}
      {quiz && !isExam ? (
        <QuizDrawer
          quiz={quiz}
          bookSlug={book.slug}
          chapterSlug={chapter.meta.slug}
        />
      ) : null}
    </main>
  );
}
