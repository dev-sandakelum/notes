"use client";

import { useMemo, useState } from "react";
import { X } from "lucide-react";
import type { BookMeta, Subject } from "@/content/types";
import { BookCard } from "./book-card";

const ALL_SUBJECTS = "All";
type SubjectFilter = Subject | typeof ALL_SUBJECTS;

function unique<T>(values: T[]): T[] {
  return Array.from(new Set(values));
}

/**
 * Subject filter pills + the responsive book card grid.
 * One control row: All / each subject present in the library.
 */
export function GalleryExplorer({ books }: { books: BookMeta[] }) {
  const [subject, setSubject] = useState<SubjectFilter>(ALL_SUBJECTS);

  const subjects = useMemo(() => unique(books.map((book) => book.subject)), [books]);

  const filtered = useMemo(
    () =>
      subject === ALL_SUBJECTS
        ? books
        : books.filter((book) => book.subject === subject),
    [books, subject],
  );

  const filtersActive = subject !== ALL_SUBJECTS;

  function clearFilters() {
    setSubject(ALL_SUBJECTS);
  }

  const pill = (active: boolean) =>
    `inline-flex items-center rounded-full border px-3 py-1 text-caption transition-colors duration-150 ${
      active
        ? "border-(--accent) bg-(--accent) text-white"
        : "border-hairline bg-paper-raised text-ink-muted hover:border-hairline-strong hover:text-ink"
    }`;

  return (
    <section aria-labelledby="gallery-heading">
      <h2 id="gallery-heading" className="sr-only">
        Browse the bookshelf
      </h2>

      <div
        role="group"
        aria-label="Filter by subject"
        className="flex flex-wrap items-center gap-2"
      >
        <button
          type="button"
          aria-pressed={subject === ALL_SUBJECTS}
          onClick={() => setSubject(ALL_SUBJECTS)}
          className={pill(subject === ALL_SUBJECTS)}
        >
          All
        </button>
        {subjects.map((s) => (
          <button
            key={s}
            type="button"
            aria-pressed={subject === s}
            onClick={() => setSubject(s)}
            className={pill(subject === s)}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between gap-4 border-b border-hairline pb-2">
        <p aria-live="polite" className="text-caption text-ink-muted">
          {filtered.length} of {books.length} books
        </p>
        {filtersActive ? (
          <button
            type="button"
            onClick={clearFilters}
            className="inline-flex items-center gap-1 rounded-md px-1 text-caption text-ink-muted transition-colors duration-150 hover:text-ink"
          >
            <X className="h-3.5 w-3.5" aria-hidden="true" />
            Clear filter
          </button>
        ) : null}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {filtered.map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 py-20 text-center">
          <p className="text-sm text-ink-muted">No books for this subject.</p>
          <button
            type="button"
            onClick={clearFilters}
            className="inline-flex items-center gap-2 rounded-[10px] border border-hairline bg-paper-raised px-4 py-2 text-sm font-medium text-ink transition-colors duration-150 hover:border-hairline-strong"
          >
            <X className="h-4 w-4 text-ink-muted" aria-hidden="true" />
            Show all books
          </button>
        </div>
      )}
    </section>
  );
}
