"use client";

import { Check } from "lucide-react";
import { useBookProgress } from "./use-book-progress";

/**
 * "Mark as complete" toggle for a chapter; state persists in localStorage.
 */
export function MarkComplete({
  bookSlug,
  chapterSlug,
}: {
  bookSlug: string;
  chapterSlug: string;
}) {
  const { completed, toggle, hydrated } = useBookProgress(bookSlug);
  const done = completed.has(chapterSlug);

  if (!hydrated) {
    // avoid layout shift: render the final size immediately
    return (
      <span className="inline-flex h-9 items-center rounded-[10px] border border-hairline px-4 opacity-0">
        Mark as complete
      </span>
    );
  }

  return (
    <button
      type="button"
      onClick={() => toggle(chapterSlug)}
      aria-pressed={done}
      className={`inline-flex h-9 items-center gap-2 rounded-[10px] border-2 px-4 text-sm font-bold transition-colors no-print ${
        done
          ? "border-ok bg-ok-soft text-ok"
          : "border-(--node-edge) bg-transparent text-ink-muted hover:border-ink hover:text-ink"
      }`}
    >
      {done ? (
        <>
          <Check className="h-4 w-4" aria-hidden />
          Completed
        </>
      ) : (
        "Mark as complete"
      )}
    </button>
  );
}
