"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { QuizData, QuizQuestion } from "@/content/types";
import { Check, Sparkles, X } from "lucide-react";

interface QuizProps {
  quiz: QuizData;
  /**
   * When provided, answer progress is persisted to localStorage under this
   * key (used by both the right-side quiz drawer and inline exam quizzes).
   */
  storageKey?: string;
}

interface SavedQuizState {
  answers: (number | null)[];
  checked: boolean;
}

/**
 * Validate an unknown localStorage payload against this quiz's shape.
 * Any deviation (wrong shape, stale length, out-of-range picks) rejects the
 * whole entry so we never render misleading progress.
 */
function parseSavedQuizState(
  raw: unknown,
  questions: QuizQuestion[],
): SavedQuizState | null {
  if (typeof raw !== "object" || raw === null || Array.isArray(raw)) {
    return null;
  }
  const { answers, checked } = raw as {
    answers?: unknown;
    checked?: unknown;
  };
  if (!Array.isArray(answers) || answers.length !== questions.length) {
    return null;
  }
  if (typeof checked !== "boolean") return null;
  const parsed: (number | null)[] = [];
  for (let i = 0; i < answers.length; i++) {
    const value = answers[i];
    if (value === null) {
      parsed.push(null);
      continue;
    }
    if (
      typeof value !== "number" ||
      !Number.isInteger(value) ||
      value < 0 ||
      value >= questions[i].options.length
    ) {
      return null;
    }
    parsed.push(value);
  }
  return { answers: parsed, checked };
}

/**
 * Interactive quiz block for chapter content.
 *
 * Prompts and explanations are trusted inline HTML authored at build time
 * (see scripts/migrate-html.ts) — rendered via dangerouslySetInnerHTML.
 * Note: `.prose-book` in globals.css is unlayered CSS, so it beats Tailwind
 * utilities; size/color overrides on prose wrappers are done with inline
 * styles referencing the design tokens.
 */
export function Quiz({ quiz, storageKey }: QuizProps) {
  const uid = useId();
  const [answers, setAnswers] = useState<(number | null)[]>(() =>
    quiz.questions.map(() => null),
  );
  const [checked, setChecked] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const skipPersistRef = useRef(false);

  const total = quiz.questions.length;

  // Hydrate once after mount (client only — localStorage is never touched
  // during render; the rAF deferral keeps this off the hydration pass).
  useEffect(() => {
    if (!storageKey) return;
    const raf = requestAnimationFrame(() => {
      let saved: SavedQuizState | null = null;
      try {
        const raw = window.localStorage.getItem(storageKey);
        if (raw) saved = parseSavedQuizState(JSON.parse(raw), quiz.questions);
      } catch {
        /* corrupt or unavailable storage — fall through to defaults */
      }
      if (saved) {
        setAnswers(saved.answers);
        setChecked(saved.checked);
      }
      setHydrated(true);
    });
    return () => cancelAnimationFrame(raf);
  }, [storageKey, quiz.questions]);

  // Persist on every state change — gated on `hydrated` so the initial
  // render never clobbers a saved session before it has been read.
  useEffect(() => {
    if (!storageKey || !hydrated) return;
    if (skipPersistRef.current) {
      skipPersistRef.current = false;
      return;
    }
    try {
      window.localStorage.setItem(
        storageKey,
        JSON.stringify({ answers, checked } satisfies SavedQuizState),
      );
    } catch {
      /* storage unavailable — progress stays session-only */
    }
  }, [storageKey, hydrated, answers, checked]);

  if (total === 0) return null;

  const score = quiz.questions.reduce(
    (sum, question, i) => (answers[i] === question.answer ? sum + 1 : sum),
    0,
  );
  const passed = score / total >= 0.8;
  const hasAnswered = answers.some((a) => a !== null);

  function select(questionIndex: number, optionIndex: number) {
    if (checked) return;
    setAnswers((prev) => {
      const next = prev.slice();
      next[questionIndex] = optionIndex;
      return next;
    });
  }

  function reset() {
    setAnswers(quiz.questions.map(() => null));
    setChecked(false);
    if (storageKey) {
      // Clear the stored entry; the skip flag stops the persist effect from
      // immediately writing the freshly-pristine state back out.
      skipPersistRef.current = true;
      try {
        window.localStorage.removeItem(storageKey);
      } catch {
        /* storage unavailable — nothing to clear */
      }
    }
  }

  return (
    <section
      aria-label={quiz.title}
      className="overflow-hidden rounded-md border border-hairline bg-paper-raised"
    >
      <header className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2 border-b border-hairline px-4 py-4 sm:px-5">
        <div className="min-w-0">
          <h3 className="font-display text-section font-semibold tracking-tight text-ink">
            {quiz.title}
          </h3>
          <p className="mt-1 text-caption text-ink-muted">
            {total} {total === 1 ? "question" : "questions"}
          </p>
        </div>
        {checked && (
          <span
            className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1 text-caption font-semibold ${
              passed
                ? "border-ok/30 bg-ok-soft text-ok"
                : "border-warn/30 bg-warn-soft text-warn"
            }`}
          >
            <Sparkles className="size-3.5" aria-hidden="true" />
            Score {score} / {total}
          </span>
        )}
      </header>

      {/* Polite screen-reader announcement of the result */}
      <p aria-live="polite" className="sr-only">
        {checked ? `You scored ${score} of ${total}.` : ""}
      </p>

      {quiz.questions.map((question, qi) => {
        const picked = answers[qi] ?? null;
        const unanswered = checked && picked === null;

        return (
          <div
            key={qi}
            className="border-b border-hairline px-4 py-4 last:border-b-0 sm:px-5"
          >
            <div
              className="prose-book font-medium [&_p:first-child]:mt-0 [&_p:last-child]:mb-0"
              dangerouslySetInnerHTML={{ __html: question.prompt }}
            />

            {unanswered && (
              <span className="mt-2 inline-flex items-center rounded-full border border-warn/40 bg-warn-soft px-2.5 py-0.5 text-caption font-medium text-warn">
                Not answered
              </span>
            )}

            <div className="mt-3 grid gap-2">
              {question.options.map((option, oi) => {
                const selected = picked === oi;
                const correct = checked && question.answer === oi;
                const wrong = checked && selected && !correct;

                const labelClass = [
                  "flex min-h-[44px] w-full items-start gap-3 rounded-md border px-3 py-2.5 text-sm",
                  "has-[:focus-visible]:border-ink",
                  wrong
                    ? "cursor-default border-danger bg-danger-soft text-danger"
                    : correct
                      ? "cursor-default border-ok bg-ok-soft text-ok"
                      : selected
                        ? "cursor-pointer border-ink bg-paper-sunken text-ink"
                        : "cursor-pointer border-hairline bg-paper text-ink hover:border-hairline-strong",
                  checked && !correct && !wrong ? "opacity-60" : "",
                ]
                  .filter(Boolean)
                  .join(" ");

                return (
                  <label key={oi} className={labelClass}>
                    <input
                      type="radio"
                      name={`${uid}-q${qi}`}
                      checked={selected}
                      onChange={() => select(qi, oi)}
                      disabled={checked}
                      className="mt-0.5 size-4 shrink-0 accent-ink"
                    />
                    <span className="min-w-0 flex-1 leading-snug">
                      {option}
                    </span>
                    {correct && (
                      <Check
                        className="mt-0.5 size-4 shrink-0"
                        aria-hidden="true"
                      />
                    )}
                    {wrong && (
                      <X className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                    )}
                  </label>
                );
              })}
            </div>

            {checked && (
              <div className="mt-3 border-t border-hairline pt-3">
                <span className="font-mono text-caption font-medium uppercase tracking-wider text-ink-faint">
                  Why
                </span>
                <div
                  className="prose-book mt-1 [&_p:first-child]:mt-0 [&_p:last-child]:mb-0"
                  style={{ color: "var(--ink-muted)", fontSize: "0.9375rem" }}
                  dangerouslySetInnerHTML={{ __html: question.explanation }}
                />
              </div>
            )}
          </div>
        );
      })}

      <footer className="flex flex-wrap items-center justify-end gap-3 border-t border-hairline bg-paper-sunken px-4 py-3 sm:px-5">
        <button
          type="button"
          onClick={reset}
          disabled={!checked && !hasAnswered}
          className="inline-flex min-h-[40px] items-center rounded-md border border-hairline bg-paper-raised px-4 py-2 text-sm font-medium text-ink hover:border-hairline-strong disabled:cursor-not-allowed disabled:opacity-50"
        >
          Reset
        </button>
        <button
          type="button"
          onClick={() => setChecked(true)}
          disabled={checked}
          className="inline-flex min-h-[40px] items-center rounded-md bg-ink px-4 py-2 text-sm font-medium text-paper transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Check answers
        </button>
      </footer>
    </section>
  );
}
