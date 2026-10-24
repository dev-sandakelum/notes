import Link from "next/link";
import { BookOpen, Clock, FileQuestion } from "lucide-react";
import type { BookMeta } from "@/content/types";

const PREVIEW_CHAPTERS = 4;
const PREVIEW_TAGS = 3;

/**
 * A single book in the gallery grid. The whole card is one link to
 * `/notes/{slug}` — hover lifts it by 2px and strengthens the hairline
 * (transform + border-color only, 150ms).
 */
export function BookCard({ book }: { book: BookMeta }) {
  const minutes = book.chapters.reduce((sum, chapter) => sum + chapter.minutes, 0);
  const preview = book.chapters.slice(0, PREVIEW_CHAPTERS);
  const moreChapters = book.chapters.length - preview.length;
  const tags = book.tags.slice(0, PREVIEW_TAGS);

  return (
    <Link
      href={`/notes/${book.slug}`}
      aria-label={`${book.code} ${book.title} — ${book.chapters.length} chapters, ${book.questionCount} questions`}
      className="group flex h-full flex-col rounded-md border border-hairline bg-paper-raised p-4 transition-[border-color,transform] duration-150 ease-out hover:-translate-y-0.5 hover:border-hairline-strong sm:p-5"
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-hairline px-2 py-0.5 font-mono text-caption text-ink">
          {book.code}
        </span>
        {book.department ? (
          <span className="rounded-full border border-hairline px-2 py-0.5 text-caption text-ink-muted">
            {book.department}
          </span>
        ) : null}
        <span className="ml-auto text-caption text-ink-muted">{book.subject}</span>
      </div>

      <h3 className="mt-3 font-display text-section text-ink">{book.title}</h3>
      <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-ink-muted">{book.tagline}</p>

      <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-caption text-ink-muted">
        <span className="inline-flex items-center gap-1">
          <BookOpen className="h-3.5 w-3.5 text-ink-faint" aria-hidden="true" />
          {book.chapters.length} chapters
        </span>
        <span className="inline-flex items-center gap-1">
          <FileQuestion className="h-3.5 w-3.5 text-ink-faint" aria-hidden="true" />
          {book.questionCount} questions
        </span>
        <span className="inline-flex items-center gap-1">
          <Clock className="h-3.5 w-3.5 text-ink-faint" aria-hidden="true" />~{minutes} min
        </span>
      </p>

      <div className="mt-4 flex-1 border-t border-hairline pt-3">
        <ul className="space-y-1">
          {preview.map((chapter) => (
            <li key={chapter.slug} className="flex items-baseline gap-2 text-caption">
              <span className="w-5 shrink-0 text-right font-mono text-ink-muted">{chapter.number}</span>
              <span className="truncate text-ink-muted">{chapter.title}</span>
            </li>
          ))}
        </ul>
        {moreChapters > 0 ? (
          <p className="mt-1 pl-7 text-caption text-ink-muted">+{moreChapters} more</p>
        ) : null}
      </div>

      {tags.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-1.5 border-t border-hairline pt-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-hairline px-2 py-0.5 text-caption text-ink-muted transition-colors duration-150 group-hover:border-hairline-strong"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </Link>
  );
}
