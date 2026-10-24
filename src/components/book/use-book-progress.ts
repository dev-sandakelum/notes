"use client";

import { useCallback, useEffect, useState } from "react";

const EVENT = "book-progress-changed";

function key(bookSlug: string): string {
  return `book-progress:${bookSlug}`;
}

function read(bookSlug: string): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = window.localStorage.getItem(key(bookSlug));
    return new Set(raw ? (JSON.parse(raw) as string[]) : []);
  } catch {
    return new Set();
  }
}

/**
 * Reading progress per book, persisted in localStorage and synced across
 * components in the same tab via a custom event.
 */
export function useBookProgress(bookSlug: string) {
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setCompleted(read(bookSlug));
      setHydrated(true);
    });
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent<{ slug: string }>).detail;
      if (detail?.slug === bookSlug) setCompleted(read(bookSlug));
    };
    window.addEventListener(EVENT, onChange);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener(EVENT, onChange);
    };
  }, [bookSlug]);

  const toggle = useCallback(
    (chapterSlug: string) => {
      const next = read(bookSlug);
      if (next.has(chapterSlug)) next.delete(chapterSlug);
      else next.add(chapterSlug);
      try {
        window.localStorage.setItem(
          key(bookSlug),
          JSON.stringify([...next])
        );
      } catch {
        /* storage unavailable — progress stays session-only */
      }
      setCompleted(new Set(next));
      window.dispatchEvent(
        new CustomEvent(EVENT, { detail: { slug: bookSlug } })
      );
    },
    [bookSlug]
  );

  return { completed, toggle, hydrated };
}
