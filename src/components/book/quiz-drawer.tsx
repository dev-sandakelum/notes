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
      {/* Mobile/tablet launcher: compact icon-only FAB (bottom-right).
          Desktop (xl+) uses the <QuizRailLauncher /> in the TOC rail instead,
          so the launcher can never cover the TOC or the reading column.
          The chapter main adds bottom padding so the last content can
          scroll clear of the FAB. */}
      <button
        ref={launcherRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={`Open topic quiz (${count} questions)`}
        className="no-print fixed bottom-5 right-4 z-30 inline-flex size-12 items-center justify-center rounded-full bg-(--accent) text-white shadow-card-lg transition-transform duration-200 hover:-translate-y-0.5 xl:hidden"
      >
        <ClipboardList className="size-5 shrink-0" aria-hidden="true" />
      </button>

      {/* Fixed layer: backdrop + clipped panel track.

          The panel lives inside an overflow-hidden full-viewport track so
          its closed-state translate-x-full can NEVER extend the page's
          scrollable area (a transformed fixed element still contributes
          to scrollWidth, which caused 258-844px of phantom horizontal
          scroll on chapter pages). Backdrop fades via opacity only. */}
      <div
        className={`no-print fixed inset-0 z-40 ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          role="presentation"
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-ink/30 transition-opacity duration-300 ${
            open ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        />
        <div className="absolute inset-0 overflow-hidden">
          {/* Drawer panel — always mounted so answers survive open/close.
              `inert` while closed keeps the hidden quiz out of the tab order. */}
          <aside
            ref={panelRef}
            id={panelId}
            role="dialog"
            aria-modal="true"
            aria-label={quiz.title}
            inert={!open}
            className={`absolute inset-y-0 right-0 flex w-full max-w-md flex-col rounded-l-2xl border-l border-hairline bg-paper-raised shadow-2xl transition-transform duration-300 ease-in-out ${
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
        </div>
      </div>
    </>
  );
}

/**
 * Small inline card rendered at the quiz's old position in the reading flow.
 * It invites — not interrupts — and opens the QuizDrawer via a custom event.
 */
export function QuizTeaser({ title, count }: { title: string; count: number }) {
  return (
    <section className="no-print my-10 rounded-2xl border border-dashed border-hairline-strong bg-paper-raised px-4 py-4 shadow-card sm:px-5">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
        <span
          className="flex size-9 shrink-0 items-center justify-center rounded-sm bg-paper-sunken text-ink-muted"
          aria-hidden="true"
        >
          <ClipboardList className="size-4" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-ink">
            <span className="text-ink-muted">Optional quiz: </span>
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
          className="btn btn-primary"
        >
          <GraduationCap className="size-4" aria-hidden="true" />
          Open quiz
        </button>
      </div>
    </section>
  );
}

/**
 * Desktop (xl+) launcher that sits at the top of the "On this page" TOC
 * rail — it lives INSIDE the right-hand column, so it can never overlap
 * the TOC links or the reading column at any desktop width. Opens the
 * QuizDrawer via the same custom event the teaser uses.
 *
 * Rendered by the chapter page above <TableOfContents />; hidden below xl
 * where the floating FAB takes over.
 */
export function QuizRailLauncher({ count }: { count: number }) {
  return (
    <button
      type="button"
      onClick={() => {
        window.dispatchEvent(new CustomEvent(OPEN_EVENT));
      }}
      className="no-print mb-4 flex w-full items-center gap-2.5 rounded-lg border border-hairline bg-paper-raised px-3 py-2.5 text-left shadow-card transition-colors hover:border-(--accent) hover:bg-(--accent-soft) xl:block hidden"
    >
      <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-(--accent) text-white">
        <ClipboardList className="size-4" aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-bold text-ink">Topic quiz</span>
        <span className="block text-caption text-ink-muted">
          {count} {count === 1 ? "question" : "questions"} · saved in this
          browser
        </span>
      </span>
    </button>
  );
}
