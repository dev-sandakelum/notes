import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { getBook } from "@/content";
import { ChapterNav } from "@/components/book/chapter-nav";
import { Topbar } from "@/components/book/topbar";
import { ReadingProgress } from "@/components/book/reading-progress";

/**
 * Book shell — two siblings on desktop:
 *
 *   ┌─ <ChapterNav> (sticky aside, full viewport height, internal scroll) ─┐
 *   │  All books › <book code>                                              │
 *   │  <book title>                                                         │
 *   │  0 of 15 read  ▓░░░░░                                                  │
 *   │  ─── Chapters ───                                                      │
 *   │  1 Introduction                                                        │
 *   │  2 Stacks                       (active chapter highlighted)           │
 *   │  ...                                                                    │
 *   └────────────────────────────────────────────────────────────────────────┘
 *   ┌─ <main column> ──────────────────────────────────────────────────────┐
 *   │  <Topbar> Note Gallery / ICT2113 / Chapter 1   <ReadingProgress> ────│
 *   │  <children/>                                                          │
 *   └────────────────────────────────────────────────────────────────────────┘
 *
 * On mobile the aside collapses to a Sheet slide-over drawer opened from a
 * menu button inside the topbar. The topbar never overlaps the sidebar
 * because they live in separate grid tracks.
 */
export default async function BookLayout({
  children,
  params,
}: {
  params: Promise<{ book: string }>;
  children: ReactNode;
}) {
  const { book: bookSlug } = await params;
  const book = getBook(bookSlug);
  if (!book) notFound();

  return (
    <div className="min-h-screen bg-paper">
      {/* Sidebar column: sticky full-height, internal scroll.
          Sibling of the main column — never nested inside the topbar. */}
      <ChapterNav book={book} />

      {/* Main column — left-padded on desktop to clear the fixed sidebar,
          full-width on mobile. Right-padded too, so the reading column and
          the sticky TOC rail always keep breathing room from the screen
          edge (never flush against it / clipped under the scrollbar). */}
      <div className="lg:pl-72 lg:pr-6 xl:pr-8">
        <Topbar book={book} />
        {children}
      </div>
    </div>
  );
}
