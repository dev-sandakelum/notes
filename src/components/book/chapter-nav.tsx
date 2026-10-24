"use client";

import Link from "next/link";
import type { BookMeta } from "@/content/types";
import { useBookProgress } from "./use-book-progress";
import { ChapterList } from "./chapter-list";
import { List } from "lucide-react";

/**
 * Desktop sidebar — a sticky full-height column to the left of the main
 * column. Sibling of (not child of) the topbar, so it can never be clipped
 * by the topbar's `h-14` flex row.
 *
 * Mobile drawer lives separately in `<MobileMenuTrigger>` (rendered inside
 * the topbar), so this component renders *nothing* on screens narrower than
 * the `lg:` breakpoint.
 *
 * Layout:
 *   ┌─ header (book code + title + progress) ─┐
 *   ├─ Chapters ───────────────────────────────┤  ← internal scroll,
 *   │  1 Introduction                           │     max-height = viewport
 *   │  2 Stacks  ✓ (completed)                  │
 *   │  ...                                      │
 *   └──────────────────────────────────────────┘
 */
export function ChapterNav({ book }: { book: BookMeta }) {
  const { completed } = useBookProgress(book.slug);
  const doneCount = completed.size;
  const total = book.chapters.length;
  const pct = total ? Math.round((doneCount / total) * 100) : 0;

  return (
    <aside className="fixed inset-y-0 left-0 z-20 hidden w-72 flex-col border-r border-hairline bg-paper-raised no-print lg:flex">
      {/* Header: book identity + overall progress.
          Generous vertical padding so nothing is clipped by the border. */}
      <div className="border-b border-hairline px-4 py-4">
        <Link
          href="/"
          className="mb-2.5 inline-flex items-center gap-1.5 text-caption text-ink-muted transition-colors hover:text-ink"
        >
          <List className="h-3.5 w-3.5" aria-hidden />
          All books
        </Link>
        <p className="font-mono text-caption text-ink-faint">{book.code}</p>
        <Link
          href={`/notes/${book.slug}`}
          className="font-display text-[1.05rem] font-semibold leading-snug text-ink transition-colors hover:text-(--accent-ink)"
        >
          {book.title}
        </Link>
        <p className="mt-1.5 text-caption text-ink-muted">
          {doneCount} of {total} read
        </p>
        <div
          className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-paper-sunken"
          role="progressbar"
          aria-valuenow={doneCount}
          aria-valuemax={total}
          aria-label="Chapters completed"
        >
          <div
            className="h-full rounded-full bg-(--accent) transition-[width] duration-300"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      {/* Scrollable chapter list. min-h-0 lets the flex child shrink so the
          internal scroll activates instead of overflowing the viewport. */}
      <div className="min-h-0 flex-1 overflow-y-auto thin-scroll">
        <ChapterList book={book} chapters={book.chapters} />
      </div>
    </aside>
  );
}
