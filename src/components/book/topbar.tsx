import Link from "next/link";
import type { BookMeta } from "@/content/types";
import { ThemeToggle } from "./theme-toggle";
import { MobileMenuTrigger } from "./mobile-menu-trigger";
import { ReadingProgress } from "./reading-progress";

/**
 * Sticky top bar that lives inside the main column, *below* and to the right
 * of the sidebar. On mobile it renders a menu button (the sidebar collapses
 * to a drawer). On desktop the menu button is hidden.
 *
 * The breadcrumb `Note Gallery / <course code>` is intentionally short — the
 * chapter-level breadcrumb ("Note Gallery / ICT2113 / Chapter 1") is owned
 * by the chapter page header so they can never overlap each other.
 */
export function Topbar({ book }: { book: BookMeta }) {
  return (
    <header className="sticky top-0 z-30 border-b border-hairline bg-paper/95 backdrop-blur no-print">
      <div className="flex h-14 items-center gap-3 px-4 sm:px-6 lg:px-8">
        <MobileMenuTrigger book={book} />
        <div className="min-w-0 flex-1">
          <p className="flex items-center gap-1.5 font-mono text-caption text-ink-faint">
            <Link href="/" className="transition-colors hover:text-ink">
              Note Gallery
            </Link>
            <span aria-hidden>/</span>
            <Link
              href={`/notes/${book.slug}`}
              className="text-ink-muted transition-colors hover:text-ink"
            >
              {book.code}
            </Link>
          </p>
        </div>
        <ThemeToggle />
      </div>
      <ReadingProgress />
    </header>
  );
}
