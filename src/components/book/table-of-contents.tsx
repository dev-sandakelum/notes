"use client";

import { useEffect, useState } from "react";

/**
 * Sticky in-page table of contents with scroll-spy active state.
 */
export function TableOfContents({
  headings,
}: {
  headings: { id: string; text: string; depth: 3 | 4 }[];
}) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const els = headings
      .map((h) => document.getElementById(h.id))
      .filter((el): el is HTMLElement => el !== null);
    if (els.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -70% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [headings]);

  if (headings.length < 2) return null;

  return (
    <nav
      aria-label="On this page"
      className="sticky top-20 hidden max-h-[calc(100vh-6rem)] overflow-y-auto overflow-x-hidden py-2 pr-2 thin-scroll xl:block no-print"
    >
      <p className="mb-2 text-caption font-semibold uppercase tracking-wider text-ink-faint">
        On this page
      </p>
      <ul className="flex flex-col gap-1 border-l border-hairline">
        {headings.map((h) => (
          <li key={h.id} className="min-w-0">
            <a
              href={`#${h.id}`}
              aria-current={active === h.id ? "true" : undefined}
              className={`-ml-px block break-words [overflow-wrap:break-word] border-l-2 text-[0.8rem] leading-snug transition-colors ${
                h.depth === 4 ? "pl-5" : "pl-3"
              } ${
                active === h.id
                  ? "border-(--accent) font-semibold text-(--accent-ink)"
                  : "border-transparent text-ink-muted hover:border-hairline-strong hover:text-ink"
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
