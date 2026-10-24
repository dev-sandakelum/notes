"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { BookMeta, ChapterMeta } from "@/content/types";
import { useBookProgress } from "./use-book-progress";
import { BookOpen, Check, ClipboardList, ScrollText } from "lucide-react";

/**
 * Sidebar chapter list — rendered inside the desktop `<ChapterNav>` aside
 * *and* inside the mobile drawer. Each row shows the chapter number badge,
 * an icon, the title, and (for completed chapters) a check mark.
 *
 * Active chapter is highlighted via `aria-current="page"` + the accent
 * background; per-chapter read state comes from `useBookProgress`
 * (localStorage-backed, synced across components in the same tab).
 */
export function ChapterList({
  book,
  chapters,
  onNavigate,
}: {
  book: BookMeta;
  chapters: ChapterMeta[];
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const { completed } = useBookProgress(book.slug);

  return (
    <nav
      aria-label={`Chapters of ${book.title}`}
      className="flex flex-col gap-0.5 p-3 pb-16"
    >
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
            className={`group flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[0.85rem] leading-snug transition-colors ${
              active
                ? "bg-(--accent-soft) font-semibold text-ink"
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
