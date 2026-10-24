"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import type { BookMeta, Subject } from "@/content/types";
import { BookCard } from "./book-card";

const ALL_SUBJECTS = "All";
type SubjectFilter = Subject | typeof ALL_SUBJECTS;

const SEARCH_DEBOUNCE_MS = 150;

function unique<T>(values: T[]): T[] {
  return Array.from(new Set(values));
}

/**
 * Search + subject/tag filters + the responsive book card grid.
 * Subject AND search AND (OR over active tags) as documented in the brief.
 */
export function GalleryExplorer({ books }: { books: BookMeta[] }) {
  const searchRef = useRef<HTMLInputElement>(null);
  const [rawQuery, setRawQuery] = useState("");
  const [query, setQuery] = useState("");
  const [subject, setSubject] = useState<SubjectFilter>(ALL_SUBJECTS);
  const [activeTags, setActiveTags] = useState<string[]>([]);

  // Debounce the search input (~150ms).
  useEffect(() => {
    const timer = setTimeout(() => setQuery(rawQuery), SEARCH_DEBOUNCE_MS);
    return () => clearTimeout(timer);
  }, [rawQuery]);

  // "/" anywhere (outside a text field) focuses the search input.
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.defaultPrevented || event.key !== "/") return;
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      const target = event.target;
      if (
        target instanceof HTMLElement &&
        (target.isContentEditable || target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.tagName === "SELECT")
      ) {
        return;
      }
      event.preventDefault();
      searchRef.current?.focus();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const subjects = useMemo(() => unique(books.map((book) => book.subject)), [books]);
  const tags = useMemo(() => unique(books.flatMap((book) => book.tags)), [books]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return books.filter((book) => {
      if (subject !== ALL_SUBJECTS && book.subject !== subject) return false;
      if (activeTags.length > 0 && !activeTags.some((tag) => book.tags.includes(tag))) return false;
      if (q.length > 0) {
        const haystack = [
          book.title,
          book.code,
          book.tagline,
          book.subject,
          ...book.chapters.map((chapter) => chapter.title),
        ]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [books, query, subject, activeTags]);

  const filtersActive =
    query.trim().length > 0 || subject !== ALL_SUBJECTS || activeTags.length > 0;

  function clearFilters() {
    setRawQuery("");
    setQuery("");
    setSubject(ALL_SUBJECTS);
    setActiveTags([]);
    searchRef.current?.focus();
  }

  function toggleTag(tag: string) {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  }

  const pill = (active: boolean) =>
    `inline-flex items-center rounded-full border px-3 py-1 text-caption transition-colors duration-150 ${
      active
        ? "border-(--accent) bg-(--accent) text-white"
        : "border-hairline bg-paper-raised text-ink-muted hover:border-hairline-strong hover:text-ink"
    }`;

  const chip = (active: boolean) =>
    `inline-flex items-center rounded-full border px-2.5 py-0.5 text-caption font-medium transition-colors duration-150 ${
      active
        ? "border-(--accent2) bg-(--accent2-soft) text-(--accent2-ink)"
        : "border-hairline bg-paper-raised text-ink-muted hover:border-hairline-strong hover:text-ink"
    }`;

  return (
    <section aria-labelledby="gallery-heading">
      <h2 id="gallery-heading" className="sr-only">
        Browse the bookshelf
      </h2>

      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <div className="relative w-full md:flex-1">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint"
            aria-hidden="true"
          />
          <input
            ref={searchRef}
            type="text"
            value={rawQuery}
            onChange={(event) => setRawQuery(event.target.value)}
            placeholder="Search notes, subjects, tags…"
            aria-label="Search notes"
            autoComplete="off"
            className="h-10 w-full rounded-[10px] border-2 border-hairline bg-paper-raised pl-9 pr-9 text-sm text-ink outline-none transition-colors duration-150 placeholder:text-ink-faint focus-visible:border-(--accent)"
          />
          {rawQuery.length > 0 ? (
            <button
              type="button"
              onClick={() => {
                setRawQuery("");
                setQuery("");
                searchRef.current?.focus();
              }}
              aria-label="Clear search"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1 text-ink-muted transition-colors duration-150 hover:text-ink"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          ) : (
            <kbd className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 items-center rounded border border-hairline bg-paper-sunken px-1.5 font-mono text-[11px] leading-4 text-ink-faint sm:flex">
              /
            </kbd>
          )}
        </div>

        <div
          role="group"
          aria-label="Filter by subject"
          className="flex flex-wrap items-center gap-2 md:justify-end"
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
      </div>

      <div role="group" aria-label="Filter by tag" className="mt-3 flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            aria-pressed={activeTags.includes(tag)}
            onClick={() => toggleTag(tag)}
            className={chip(activeTags.includes(tag))}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between gap-4 border-b border-hairline pb-2">
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
            Clear filters
          </button>
        ) : null}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {filtered.map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 py-20 text-center">
          <p className="text-sm text-ink-muted">No books match the current search and filters.</p>
          <button
            type="button"
            onClick={clearFilters}
            className="inline-flex items-center gap-2 rounded-[10px] border border-hairline bg-paper-raised px-4 py-2 text-sm font-medium text-ink transition-colors duration-150 hover:border-hairline-strong"
          >
            <X className="h-4 w-4 text-ink-muted" aria-hidden="true" />
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
}
