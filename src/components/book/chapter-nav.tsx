"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { BookMeta, ChapterMeta } from "@/content/types";
import { useBookProgress } from "./use-book-progress";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { BookOpen, Check, ClipboardList, List, Menu, ScrollText } from "lucide-react";

function ChapterList({
  book,
  chapters,
  completed,
  onNavigate,
}: {
  book: BookMeta;
  chapters: ChapterMeta[];
  completed: Set<string>;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  return (
    <nav aria-label={`Chapters of ${book.title}`} className="flex flex-col gap-0.5 p-3 pb-16">
      <p className="px-2 pb-2 pt-1 text-caption font-semibold uppercase tracking-wider text-ink-faint">
        Chapters
      </p>
      {chapters.map((ch) => {
        const href = `/notes/${book.slug}/${ch.slug}`;
        const active = pathname === href;
        const done = completed.has(ch.slug);
        const Icon =
          ch.kind === "exam"
            ? ClipboardList
            : ch.kind === "cheatsheet"
              ? ScrollText
              : BookOpen;
        return (
          <Link
            key={ch.slug}
            href={href}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={`group flex items-center gap-2.5 rounded-md px-2.5 py-2 text-[0.85rem] leading-snug transition-colors ${
              active
                ? "bg-paper-sunken font-medium text-ink"
                : "text-ink-muted hover:bg-paper-sunken hover:text-ink"
            }`}
          >
            <span
              className={`flex h-6 w-6 flex-none items-center justify-center rounded-sm font-mono text-[0.68rem] ${
                active
                  ? "bg-(--accent) text-paper"
                  : done
                    ? "border border-ok font-bold text-ok"
                    : "border border-hairline text-ink-faint group-hover:text-ink-muted"
              }`}
            >
              {ch.number}
            </span>
            <Icon className="h-3.5 w-3.5 flex-none opacity-70" aria-hidden />
            <span className="flex-1 truncate">{ch.title}</span>
            {done ? (
              <Check
                className="h-3.5 w-3.5 flex-none text-ok"
                aria-label="Completed"
              />
            ) : null}
          </Link>
        );
      })}
    </nav>
  );
}

/**
 * Book chapter navigation: fixed sidebar on desktop, Sheet drawer on mobile.
 */
export function ChapterNav({ book }: { book: BookMeta }) {
  const [open, setOpen] = useState(false);
  const { completed } = useBookProgress(book.slug);
  const doneCount = completed.size;

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 flex-col border-r border-hairline bg-paper-raised no-print lg:flex">
        <div className="border-b border-hairline px-4 py-4">
          <Link
            href="/"
            className="mb-3 inline-flex items-center gap-1.5 text-caption text-ink-muted transition-colors hover:text-ink"
          >
            <List className="h-3.5 w-3.5" aria-hidden />
            All books
          </Link>
          <p className="font-mono text-caption text-ink-faint">{book.code}</p>
          <Link
            href={`/notes/${book.slug}`}
            className="font-display text-[1.05rem] font-semibold leading-snug text-ink hover:underline"
          >
            {book.title}
          </Link>
          <p className="mt-1.5 text-caption text-ink-muted">
            {doneCount} of {book.chapters.length} read
          </p>
          <div
            className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-paper-sunken"
            role="progressbar"
            aria-valuenow={doneCount}
            aria-valuemax={book.chapters.length}
            aria-label="Chapters completed"
          >
            <div
              className="h-full rounded-full bg-(--accent) transition-transform duration-200"
              style={{
                width: `${book.chapters.length ? (doneCount / book.chapters.length) * 100 : 0}%`,
              }}
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto thin-scroll">
          <ChapterList book={book} chapters={book.chapters} completed={completed} />
        </div>
      </aside>

      {/* Mobile drawer */}
      <div className="lg:hidden no-print">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-hairline text-ink transition-colors hover:border-hairline-strong"
              aria-label="Open chapter menu"
            >
              <Menu className="h-4.5 w-4.5" aria-hidden />
            </button>
          </SheetTrigger>
          <SheetContent
            side="left"
            aria-describedby={undefined}
            className="w-80 overflow-y-auto border-hairline bg-paper p-0 thin-scroll"
          >
            <SheetTitle className="border-b border-hairline px-4 py-4 text-left font-display text-base font-semibold">
              {book.title}
            </SheetTitle>
            <ChapterList
              book={book}
              chapters={book.chapters}
              completed={completed}
              onNavigate={() => setOpen(false)}
            />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
