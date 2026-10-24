"use client";

import { useState } from "react";
import type { BookMeta } from "@/content/types";
import { ChapterList } from "./chapter-list";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

/**
 * Mobile-only menu trigger: renders a hamburger button in the topbar that
 * opens a slide-over drawer containing the same sidebar content as desktop.
 * Hidden on `lg:` breakpoints where the fixed `<ChapterNav>` aside is visible.
 */
export function MobileMenuTrigger({ book }: { book: BookMeta }) {
  const [open, setOpen] = useState(false);

  return (
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
          className="flex w-80 flex-col gap-0 overflow-hidden border-hairline bg-paper p-0 thin-scroll"
        >
          <SheetTitle className="border-b border-hairline px-4 py-4 text-left font-display text-base font-semibold">
            {book.title}
          </SheetTitle>
          <div className="min-h-0 flex-1 overflow-y-auto thin-scroll">
            <ChapterList
              book={book}
              chapters={book.chapters}
              onNavigate={() => setOpen(false)}
            />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
