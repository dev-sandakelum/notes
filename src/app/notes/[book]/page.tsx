import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { books, getBook } from "@/content";
import {
  BookOpen,
  ChevronRight,
  ClipboardList,
  Clock,
  FileQuestion,
  Layers,
  ScrollText,
  Sparkles,
} from "lucide-react";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams(): { book: string }[] {
  return books.map((b) => ({ book: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ book: string }>;
}): Promise<Metadata> {
  const { book: slug } = await params;
  const book = getBook(slug);
  if (!book) return {};
  return {
    title: `${book.code} · ${book.title}`,
    description: book.tagline,
  };
}

const KIND_LABEL: Record<string, string> = {
  topic: "Chapter",
  cheatsheet: "Revision sheet",
  exam: "Practice exam",
};

export default async function BookPage({
  params,
}: {
  params: Promise<{ book: string }>;
}) {
  const { book: slug } = await params;
  const book = getBook(slug);
  if (!book) notFound();

  const totalMinutes = book.chapters.reduce((n, c) => n + c.minutes, 0);
  const topics = book.chapters.filter((c) => c.kind === "topic");
  const revision = book.chapters.filter((c) => c.kind !== "topic");
  const first = book.chapters[0];

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8 no-print">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-caption text-ink-muted transition-colors hover:text-ink"
        >
          <Layers className="h-3.5 w-3.5" aria-hidden />
          All books
        </Link>
      </nav>

      {/* Book hero */}
      <header className="mb-10 border-b border-hairline pb-8">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-hairline px-2.5 py-0.5 font-mono text-caption text-ink">
            {book.code}
          </span>
          {book.department ? (
            <span className="rounded-full border border-hairline px-2.5 py-0.5 font-mono text-caption text-ink-muted">
              {book.department}
            </span>
          ) : null}
          <span className="text-caption text-ink-muted">{book.subject}</span>
        </div>
        <h1 className="font-display text-book-title font-semibold leading-tight text-ink">
          {book.title}
        </h1>
        <p className="mt-3 max-w-[65ch] font-display text-lg italic leading-relaxed text-ink-muted">
          {book.tagline}
        </p>
        <p className="prose-book mt-3 max-w-[68ch] text-[0.95rem] text-ink">
          {book.description}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-caption text-ink-muted">
          <span className="inline-flex items-center gap-1.5">
            <BookOpen className="h-3.5 w-3.5" aria-hidden />
            {book.chapters.length} chapters
          </span>
          <span className="inline-flex items-center gap-1.5">
            <FileQuestion className="h-3.5 w-3.5" aria-hidden />
            {book.questionCount} questions
          </span>
          {book.flashcardCount > 0 ? (
            <span className="inline-flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              {book.flashcardCount} flashcards
            </span>
          ) : null}
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" aria-hidden />~{totalMinutes} min
            read
          </span>
        </div>

        {first ? (
          <Link
            href={`/notes/${book.slug}/${first.slug}`}
            className="mt-6 inline-flex h-11 items-center gap-2 rounded-md bg-ink px-5 text-sm font-medium text-paper transition-opacity hover:opacity-90 no-print"
          >
            <BookOpen className="h-4 w-4" aria-hidden />
            Start reading
          </Link>
        ) : null}

        <div className="mt-4 flex flex-wrap gap-1.5">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-paper-sunken px-2.5 py-0.5 text-caption text-ink-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Chapter index */}
      <section aria-labelledby="chapters-heading">
        <h2
          id="chapters-heading"
          className="mb-4 font-display text-section font-semibold text-ink"
        >
          Chapters
        </h2>
        <ol className="divide-y divide-hairline rounded-md border border-hairline bg-paper-raised">
          {topics.map((ch) => (
            <ChapterRow key={ch.slug} bookSlug={book.slug} chapter={ch} />
          ))}
        </ol>

        {revision.length > 0 ? (
          <>
            <h2 className="mb-4 mt-10 font-display text-section font-semibold text-ink">
              Revision
            </h2>
            <ol className="divide-y divide-hairline rounded-md border border-hairline bg-paper-raised">
              {revision.map((ch) => (
                <ChapterRow key={ch.slug} bookSlug={book.slug} chapter={ch} />
              ))}
            </ol>
          </>
        ) : null}
      </section>
    </main>
  );
}

function ChapterRow({
  bookSlug,
  chapter,
}: {
  bookSlug: string;
  chapter: {
    slug: string;
    number: number;
    title: string;
    subtitle?: string;
    kind: string;
    minutes: number;
  };
}) {
  const Icon =
    chapter.kind === "exam"
      ? ClipboardList
      : chapter.kind === "cheatsheet"
        ? ScrollText
        : BookOpen;
  return (
    <li>
      <Link
        href={`/notes/${bookSlug}/${chapter.slug}`}
        className="group flex items-center gap-4 px-4 py-3.5 transition-colors hover:bg-paper-sunken sm:px-5"
      >
        <span className="flex h-8 w-8 flex-none items-center justify-center rounded-sm border border-hairline font-mono text-caption text-ink-muted group-hover:border-hairline-strong">
          {chapter.number}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-[0.95rem] font-medium text-ink">
            {chapter.title}
          </span>
          {chapter.subtitle ? (
            <span className="block truncate text-caption text-ink-muted">
              {chapter.subtitle}
            </span>
          ) : null}
        </span>
        <span className="hidden flex-none items-center gap-1.5 text-caption text-ink-faint sm:inline-flex">
          <Icon className="h-3.5 w-3.5" aria-hidden />
          {KIND_LABEL[chapter.kind] ?? "Chapter"} · {chapter.minutes} min
        </span>
        <ChevronRight
          className="h-4 w-4 flex-none text-ink-faint transition-transform group-hover:translate-x-0.5 group-hover:text-ink-muted"
          aria-hidden
        />
      </Link>
    </li>
  );
}
