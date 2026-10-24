import type { CSSProperties, ReactNode } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getBook } from "@/content";
import { ChapterNav } from "@/components/book/chapter-nav";
import { ReadingProgress } from "@/components/book/reading-progress";
import { ThemeToggle } from "@/components/book/theme-toggle";

/** Per-book accent color (F12): sidebar chips, progress bars, heading rules. */
const BOOK_ACCENTS: Record<string, string> = {
  dsa: "#0d9488", // teal
  oop: "#7c3aed", // violet
  ood: "#ea580c", // orange
  mis: "#0891b2", // cyan
  econ: "#e11d48", // rose
  maths: "#d97706", // amber
};

export default async function BookLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ book: string }>;
}) {
  const { book: bookSlug } = await params;
  const book = getBook(bookSlug);
  if (!book) notFound();

  const accentStyle = {
    "--accent": BOOK_ACCENTS[book.slug] ?? "#0d9488",
  } as CSSProperties;

  return (
    <div className="min-h-screen bg-paper" style={accentStyle}>
      <div className="lg:pl-72">
        <header className="sticky top-0 z-40 border-b border-hairline bg-paper no-print">
          <div className="flex h-14 items-center gap-3 px-4 lg:px-8">
            {/* renders the desktop fixed sidebar + the mobile menu trigger */}
            <ChapterNav book={book} />
            <div className="min-w-0 flex-1">
              <p className="flex items-center gap-1.5 font-mono text-caption text-ink-faint">
                <Link href="/" className="transition-colors hover:text-ink">
                  Note Gallery
                </Link>
                <span aria-hidden>/</span>
                <span className="text-ink-muted">{book.code}</span>
              </p>
            </div>
            <ThemeToggle />
          </div>
          <ReadingProgress />
        </header>
        {children}
      </div>
    </div>
  );
}
