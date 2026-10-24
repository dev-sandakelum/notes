"use client";

import { useState } from "react";
import type { FlashcardsBlock } from "@/content/types";
import { RotateCw } from "lucide-react";

interface FlashcardsProps {
  cards: FlashcardsBlock["cards"];
}

/**
 * Flip-card grid for revision decks. Front/back text is trusted inline HTML
 * authored at build time — rendered via dangerouslySetInnerHTML.
 *
 * The flip is a transform-only animation (rotateY on the inner wrapper);
 * `.prose-book` is unlayered CSS, so font-size overrides on prose wrappers
 * use inline styles referencing the design tokens.
 */
export function Flashcards({ cards }: FlashcardsProps) {
  const [flipped, setFlipped] = useState<boolean[]>([]);

  if (cards.length === 0) return null;

  const isFlipped = (i: number) => flipped[i] === true;

  function toggle(i: number) {
    setFlipped((prev) => {
      const next = prev.slice();
      next[i] = !next[i];
      return next;
    });
  }

  function resetAll() {
    setFlipped([]);
  }

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <p className="text-caption text-ink-muted">
          {cards.length} {cards.length === 1 ? "card" : "cards"}
        </p>
        <button
          type="button"
          onClick={resetAll}
          disabled={flipped.every((f) => !f)}
          className="inline-flex min-h-[36px] items-center gap-1.5 rounded-md border border-hairline bg-paper-raised px-3 py-1.5 text-caption font-medium text-ink hover:border-hairline-strong disabled:cursor-not-allowed disabled:opacity-50"
        >
          <RotateCw className="size-3.5" aria-hidden="true" />
          Reset all
        </button>
      </div>

      <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {cards.map((card, i) => {
          const faceUp = isFlipped(i);

          return (
            <li key={i}>
              <button
                type="button"
                aria-pressed={faceUp}
                aria-label={`Flashcard ${i + 1} of ${cards.length}: ${faceUp ? "answer shown" : "question"}`}
                onClick={() => toggle(i)}
                className="relative block aspect-[4/3] w-full cursor-pointer [perspective:1200px]"
              >
                <div
                  className="absolute inset-0 transition-transform duration-200 [transform-style:preserve-3d]"
                  style={{
                    transform: faceUp ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* Front */}
                  <div
                    aria-hidden={faceUp}
                    className="absolute inset-0 flex flex-col rounded-md border border-hairline bg-paper-raised p-4 text-left [backface-visibility:hidden] hover:border-hairline-strong"
                  >
                    {card.category && (
                      <span className="shrink-0 self-start rounded-full border border-hairline bg-paper-sunken px-2 py-0.5 font-mono text-[0.6875rem] uppercase tracking-wider text-ink-muted">
                        {card.category}
                      </span>
                    )}
                    <div className="thin-scroll mt-2 flex min-h-0 flex-1 flex-col overflow-y-auto py-1">
                      <div
                        className="prose-book my-auto text-center font-display [&_p:first-child]:mt-0 [&_p:last-child]:mb-0 [&_small]:mt-1.5 [&_small]:block [&_small]:font-mono [&_small]:text-[0.7rem] [&_small]:font-normal [&_small]:uppercase [&_small]:tracking-wider [&_small]:text-ink-faint"
                        style={{ fontSize: "1.0625rem" }}
                        dangerouslySetInnerHTML={{ __html: card.front }}
                      />
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1.5 self-center text-caption text-ink-faint">
                      <RotateCw className="size-3.5" aria-hidden="true" />
                      Tap to flip
                    </span>
                  </div>

                  {/* Back (pre-rotated 180deg) */}
                  <div
                    aria-hidden={!faceUp}
                    className="absolute inset-0 flex flex-col rounded-md border border-hairline bg-paper-sunken p-4 text-left [backface-visibility:hidden] [transform:rotateY(180deg)] hover:border-hairline-strong"
                  >
                    <span className="shrink-0 font-mono text-[0.6875rem] uppercase tracking-wider text-ink-faint">
                      Answer
                    </span>
                    <div className="thin-scroll mt-1.5 min-h-0 flex-1 overflow-y-auto pr-1">
                      <div
                        className="prose-book [&_p:first-child]:mt-0 [&_p:last-child]:mb-0"
                        style={{ fontSize: "0.875rem" }}
                        dangerouslySetInnerHTML={{ __html: card.back }}
                      />
                    </div>
                  </div>
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
