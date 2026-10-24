"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  RotateCcw,
} from "lucide-react";
import { btnGhost, btnPrimary } from "./viz-ui";

/**
 * Generic step-player chrome shared by every interactive trace widget:
 *
 *   - play / pause, step forward, step back, reset
 *   - speed control 0.5x - 2x
 *   - scrubber showing "Step n of N"
 *   - keyboard: Space = play/pause, ArrowRight / ArrowLeft = step,
 *     Home = reset (the whole widget is one tab stop)
 *   - aria-live description of the current step
 *
 * The STATE for each step is precomputed by the caller (see
 * player-steps.ts) — the player only indexes into the recording, so
 * stepping back restores the exact recorded state.
 *
 * Animations are the responsibility of the `render` callback: it receives
 * the immutable state for the current step and should animate with
 * transform / opacity only (stack items slide, nodes pulse). A
 * `prefers-reduced-motion` check disables the CSS-driven pulses via the
 * `sp-reduced` class on the shell.
 */

export interface StepPlayerShellProps<S> {
  /** Recorded states; steps[0] is the initial (reset) state. */
  steps: S[];
  /** Short description of each step, for aria-live + the status line. */
  describe: (s: S, index: number) => string;
  /** Visual for a given state. */
  render: (s: S, index: number) => ReactNode;
  /** Accessible name of the whole widget. */
  title: string;
  /** Base step duration in ms at 1x speed (default 900). */
  baseInterval?: number;
  /** Extra toolbar controls (e.g. order selector, expression input). */
  toolbar?: ReactNode;
  /** Fixed footer status (e.g. final answer chip). */
  footer?: ReactNode;
  caption?: string;
  /** Called when playback reaches the end (or leaves it). */
  onAtEnd?: (atEnd: boolean) => void;
  /** Reset key: when this changes, the player resets to step 0. */
  resetKey?: string | number;
}

export function StepPlayer<S>({
  steps,
  describe,
  render,
  title,
  baseInterval = 900,
  toolbar,
  footer,
  caption,
  onAtEnd,
  resetKey,
}: StepPlayerShellProps<S>) {
  const [index, setIndex] = useState(0);
  const [internalPlaying, setInternalPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [reduced, setReduced] = useState(false);
  const shellRef = useRef<HTMLDivElement>(null);

  const n = steps.length;
  const atEnd = index >= n - 1;
  /** Derived: playback stops by itself at the last step. */
  const playing = internalPlaying && !atEnd;

  // Reset when the caller swaps the whole recording — the React "adjust
  // state during render" pattern (no setState inside an effect).
  const [prevKey, setPrevKey] = useState(resetKey);
  if (prevKey !== resetKey) {
    setPrevKey(resetKey);
    setIndex(0);
    setInternalPlaying(false);
  }

  // reduced-motion preference
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  // playback timer
  useEffect(() => {
    if (!internalPlaying || atEnd) return;
    const id = window.setTimeout(() => {
      setIndex((i) => Math.min(i + 1, n - 1));
    }, baseInterval / speed);
    return () => window.clearTimeout(id);
  }, [internalPlaying, index, speed, baseInterval, n, atEnd]);

  useEffect(() => {
    onAtEnd?.(atEnd);
  }, [atEnd, onAtEnd]);

  const stepForward = useCallback(
    () => setIndex((i) => Math.min(i + 1, n - 1)),
    [n],
  );
  const stepBack = useCallback(() => {
    setInternalPlaying(false);
    setIndex((i) => Math.max(i - 1, 0));
  }, []);
  const reset = useCallback(() => {
    setInternalPlaying(false);
    setIndex(0);
  }, []);
  const toggle = useCallback(() => {
    if (atEnd) {
      // replay from the start when pressing play at the end
      setIndex(0);
      setInternalPlaying(true);
      return;
    }
    setInternalPlaying((p) => !p);
  }, [atEnd]);

  // keyboard controls (widget is a single tab stop)
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === " " || e.key === "Spacebar") {
      e.preventDefault();
      toggle();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setInternalPlaying(false);
      stepForward();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      stepBack();
    } else if (e.key === "Home") {
      e.preventDefault();
      reset();
    }
  };

  const step = steps[Math.min(index, n - 1)];
  const desc = useMemo(() => describe(step, index), [describe, step, index]);

  return (
    <figure className="viz-shell print-avoid-break my-6 border border-hairline p-4">
      <div
        ref={shellRef}
        tabIndex={0}
        role="group"
        aria-label={title}
        onKeyDown={onKeyDown}
        className={`sp-shell outline-none focus-visible:ring-2 focus-visible:ring-(--accent) ${
          reduced ? "sp-reduced" : ""
        }`}
      >
        {/* header */}
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <span className="text-caption font-semibold uppercase tracking-wider text-ink-faint">
            {title}
          </span>
          {toolbar}
        </div>

        {/* stage */}
        <div className="sp-stage">{render(step, index)}</div>

        {/* status line */}
        <p
          aria-live="polite"
          className="viz-status mt-3 min-h-[1.6rem] text-caption text-ink-muted"
        >
          {desc}
        </p>

        {/* controls */}
        <div className="mt-3 flex flex-wrap items-center gap-2 no-print">
          <button
            type="button"
            onClick={toggle}
            aria-label={playing ? "Pause" : "Play"}
            className={btnPrimary}
          >
            {playing ? (
              <Pause className="size-3.5" aria-hidden />
            ) : (
              <Play className="size-3.5" aria-hidden />
            )}
            {playing ? "Pause" : atEnd ? "Replay" : "Play"}
          </button>
          <button
            type="button"
            onClick={stepBack}
            disabled={index === 0}
            aria-label="Step back"
            className={btnGhost}
          >
            <ChevronLeft className="size-3.5" aria-hidden />
            Back
          </button>
          <button
            type="button"
            onClick={() => {
              setInternalPlaying(false);
              stepForward();
            }}
            disabled={atEnd}
            aria-label="Step forward"
            className={btnGhost}
          >
            Step
            <ChevronRight className="size-3.5" aria-hidden />
          </button>
          <button
            type="button"
            onClick={reset}
            aria-label="Reset"
            className={btnGhost}
          >
            <RotateCcw className="size-3.5" aria-hidden />
            Reset
          </button>

          {/* speed */}
          <label className="ml-auto inline-flex items-center gap-2 text-caption text-ink-muted">
            <span aria-hidden>Speed</span>
            <span className="sr-only">Playback speed</span>
            <input
              type="range"
              min={0.5}
              max={2}
              step={0.25}
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              aria-label="Playback speed"
              className="sp-range w-24"
            />
            <span className="font-mono tabular-nums">{speed}x</span>
          </label>
        </div>

        {/* scrubber */}
        <div className="mt-2.5 flex items-center gap-3 no-print">
          <input
            type="range"
            min={0}
            max={Math.max(0, n - 1)}
            step={1}
            value={index}
            onChange={(e) => {
              setInternalPlaying(false);
              setIndex(Number(e.target.value));
            }}
            aria-label={`Scrub to step, currently step ${index + 1} of ${n}`}
            className="sp-range w-full"
          />
          <span className="flex-none font-mono text-caption tabular-nums text-ink-muted">
            Step {index + 1} of {n}
          </span>
        </div>

        <p className="mt-2 hidden text-caption text-ink-faint sm:block no-print">
          Keyboard: Space play/pause · ← step back · → step forward · Home reset
        </p>

        {footer}
      </div>
      {caption ? (
        <figcaption className="mt-2 border-t border-hairline pt-2 text-center text-caption italic text-ink-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
