"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { QuizData } from "@/content/types";
import { ClipboardList, GraduationCap, X } from "lucide-react";
import { Quiz } from "@/components/book/quiz";

/**
 * Quiz drawer (user spec C5): topic-chapter quizzes live in a right-side
 * slide-over instead of interrupting the reading flow. A floating tab on the
 * right edge (and a small "Optional quiz" teaser card at the quiz's old
 * position) open the drawer. The panel and the Quiz inside it stay mounted
 * while closed, so open/close never resets in-progress answers, and progress
 * persists to localStorage across visits.
 */

/** Dispatched by QuizTeaser to request that the drawer opens. */
const OPEN_EVENT = "notequiz:open";

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(", ");

export function QuizDrawer({
  quiz,
  bookSlug,
  chapterSlug,
}: {
  quiz: QuizData;
  bookSlug: string;
  chapterSlug: string;
}) {
  const uid = useId();
  const panelId = `${uid}-quiz-drawer`;
  const [open, setOpen] = useState(false);
  const launcherRef = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLElement | null>(null);

  const count = quiz.questions.length;

  // QuizTeaser cards dispatch `notequiz:open` to open the drawer.
  useEffect(() => {
    const onOpenRequest = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, onOpenRequest);
    return () => window.removeEventListener(OPEN_EVENT, onOpenRequest);
  }, []);

  // While open: Escape closes; Tab is trapped inside the dialog.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab") return;
      const panel = panelRef.current;
      if (!panel) return;
      const focusables = Array.from(
        panel.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;
      const inside = panel.contains(active);
      if (event.shiftKey) {
        if (!inside || active === first) {
          event.preventDefault();
          last.focus();
        }
      } else if (!inside || active === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // While open: lock body scroll + focus the close button; on close restore
  // both and return focus to the launcher.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      launcherRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      {/* Floating launcher tab pinned to the right viewport edge */}
      <button
        ref={launcherRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={panelId}
        className="no-print fixed right-0 top-1/3 z-30 flex flex-col items-center gap-2 rounded-l-lg bg-ink py-3.5 pl-2.5 pr-2 text-paper shadow-md transition-transform duration-200 hover:-translate-x-0.5"
      >
        <ClipboardList className="size-4 shrink-0" aria-hidden="true" />
        <span className="text-caption font-semibold [writing-mode:vertical-rl]">
          Quiz · {count} questions
        </span>
      </button>

      {/* Backdrop — mounted always, fades in and out */}
      <div
        role="presentation"
        onClick={() => setOpen(false)}
        className={`no-print fixed inset-0 z-40 bg-ink/30 transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer panel — always mounted so answers survive open/close.
          `inert` while closed keeps the hidden quiz out of the tab order. */}
      <aside
        ref={panelRef}
        id={panelId}
        role="dialog"
        aria-modal="true"
        aria-label={quiz.title}
        inert={!open}
        className={`no-print fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col border-l border-hairline bg-paper-raised shadow-xl transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex shrink-0 items-start justify-between gap-3 border-b border-hairline px-5 py-4">
          <div className="min-w-0">
            <p className="text-caption font-semibold uppercase tracking-wider text-ink-faint">
              Topic quiz
            </p>
            <h2 className="mt-0.5 font-display text-subsection font-semibold leading-snug text-ink">
              {quiz.title}
            </h2>
            <p className="mt-0.5 text-caption text-ink-muted">
              {count} {count === 1 ? "question" : "questions"}
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close quiz panel"
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-md border border-hairline text-ink-muted transition-colors hover:border-hairline-strong hover:text-ink"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </header>

        <div className="thin-scroll min-h-0 flex-1 overflow-y-auto px-5 py-5">
          <Quiz
            quiz={quiz}
            storageKey={`notequiz:${bookSlug}:${chapterSlug}`}
          />
        </div>

        <footer className="shrink-0 border-t border-hairline bg-paper-sunken px-5 py-3">
          <p className="text-caption text-ink-faint">
            Your progress is saved in this browser.
          </p>
        </footer>
      </aside>
    </>
  );
}

/**
 * Small inline card rendered at the quiz's old position in the reading flow.
 * It invites — not interrupts — and opens the QuizDrawer via a custom event.
 */
export function QuizTeaser({ title, count }: { title: string; count: number }) {
  return (
    <section className="no-print my-10 rounded-md border border-dashed border-hairline-strong bg-paper-raised px-4 py-4 sm:px-5">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
        <span
          className="flex size-9 shrink-0 items-center justify-center rounded-sm bg-paper-sunken text-ink-muted"
          aria-hidden="true"
        >
          <ClipboardList className="size-4" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-ink">
            <span className="text-ink-muted">Optional quiz — </span>
            {title}
          </p>
          <p className="mt-0.5 text-caption text-ink-muted">
            {count} {count === 1 ? "question" : "questions"}
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            window.dispatchEvent(new CustomEvent(OPEN_EVENT));
          }}
          aria-label="Open quiz panel"
          className="inline-flex min-h-[40px] shrink-0 items-center gap-2 rounded-md border border-hairline bg-paper px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-hairline-strong"
        >
          <GraduationCap className="size-4" aria-hidden="true" />
          Open quiz
        </button>
      </div>
    </section>
  );
}
