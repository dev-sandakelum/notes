"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import {
  ChevronLeft,
  ChevronRight,
  Minus,
  Pause,
  Play,
  Plus,
  RotateCcw,
} from "lucide-react";
import { btnGhost, btnPrimary } from "./viz-ui";

/**
 * Generic step-player chrome shared by every interactive trace widget:
 *
 *   - play / pause, step forward, step back, reset
 *   - shared speed control: logarithmic slider 0.1x – 5x, preset chips,
 *     +/− buttons, keyboard [ and ] — persisted in localStorage so the
 *     inline and fullscreen versions share one setting
 *   - speed scales BOTH the auto-play interval (baseInterval / speed) and
 *     every CSS animation/transition in the stage via the --speed custom
 *     property (durations are written as calc(Xms / var(--speed, 1)))
 *   - scrubber showing "Step n of N"
 *   - keyboard: Space = play/pause, ArrowRight / ArrowLeft = step,
 *     Home = reset, [ / ] = slower / faster (the widget is one tab stop)
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

/* ------------------------------------------------------------------ */
/* Shared playback speed (one setting across every player instance)     */
/* ------------------------------------------------------------------ */

export const SPEED_MIN = 0.1;
export const SPEED_MAX = 5;
export const SPEED_PRESETS = [0.1, 0.25, 0.5, 1, 2, 3, 5] as const;
/** localStorage key — same origin, so inline + fullscreen tabs share it. */
export const SPEED_STORAGE_KEY = "noteplayer:speed";
/** Same-tab instance sync (storage events only fire in OTHER tabs). */
const SPEED_EVENT = "noteplayer:speed-change";

const SLIDER_MAX = 1000;

export function clampSpeed(v: number): number {
  if (!Number.isFinite(v)) return 1;
  return Math.min(SPEED_MAX, Math.max(SPEED_MIN, v));
}

/** "0.25x", "1x", "5x" — ONE consistent format everywhere. */
export function formatSpeed(v: number): string {
  return `${Number(v.toFixed(2))}x`;
}

/** Linear slider position (0..1000) for a speed (logarithmic mapping). */
export function speedToSlider(v: number): number {
  const t = Math.log(clampSpeed(v) / SPEED_MIN) / Math.log(SPEED_MAX / SPEED_MIN);
  return Math.round(t * SLIDER_MAX);
}

/** Speed for a linear slider position (0..1000). */
export function sliderToSpeed(pos: number): number {
  const v = SPEED_MIN * Math.pow(SPEED_MAX / SPEED_MIN, pos / SLIDER_MAX);
  return clampSpeed(Number(v.toFixed(2)));
}

/** Nearest preset strictly below / above the current speed. */
export function speedStepDown(v: number): number {
  const below = [...SPEED_PRESETS].reverse().find((p) => p < v - 1e-9);
  return below ?? SPEED_MIN;
}
export function speedStepUp(v: number): number {
  const above = SPEED_PRESETS.find((p) => p > v + 1e-9);
  return above ?? SPEED_MAX;
}

/**
 * Playback speed state shared by every player on the site.
 * Reads the persisted value after mount (SSR-safe), keeps localStorage in
 * sync, and mirrors changes to other player instances in this tab (custom
 * event) and other tabs (storage event) — including fullscreen pages.
 */
export function usePlaybackSpeed(): [number, (v: number) => void] {
  const [speed, setSpeedState] = useState(1);

  useEffect(() => {
    // Deferred one frame so the first paint matches the SSR markup (the
    // stored speed then applies without a hydration mismatch).
    const raf = requestAnimationFrame(() => {
      try {
        const raw = localStorage.getItem(SPEED_STORAGE_KEY);
        if (raw) setSpeedState(clampSpeed(Number(raw)));
      } catch {
        /* private mode etc. — keep default */
      }
    });
    const sync = (v: number) => setSpeedState(clampSpeed(v));
    const onCustom = (e: Event) => {
      const v = (e as CustomEvent<number>).detail;
      if (typeof v === "number") sync(v);
    };
    const onStorage = (e: StorageEvent) => {
      if (e.key === SPEED_STORAGE_KEY && e.newValue) sync(Number(e.newValue));
    };
    window.addEventListener(SPEED_EVENT, onCustom);
    window.addEventListener("storage", onStorage);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener(SPEED_EVENT, onCustom);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  const setSpeed = useCallback((v: number) => {
    const next = clampSpeed(v);
    setSpeedState(next);
    try {
      localStorage.setItem(SPEED_STORAGE_KEY, String(next));
    } catch {
      /* ignore */
    }
    window.dispatchEvent(new CustomEvent(SPEED_EVENT, { detail: next }));
  }, []);

  return [speed, setSpeed];
}

/* ------------------------------------------------------------------ */
/* Shared speed control UI (one look, one format, every player)         */
/* ------------------------------------------------------------------ */

/** Preset chips row (0.1x … 5x) — shared by SpeedControl and StepPlayer. */
export function SpeedPresetChips({
  speed,
  setSpeed,
  className = "",
}: {
  speed: number;
  setSpeed: (v: number) => void;
  className?: string;
}) {
  return (
    <div
      role="group"
      aria-label="Speed presets"
      className={`flex flex-wrap items-center gap-1.5 ${className}`}
    >
      {SPEED_PRESETS.map((p) => {
        const active = Math.abs(p - speed) < 0.005;
        return (
          <button
            key={p}
            type="button"
            aria-pressed={active}
            onClick={() => setSpeed(p)}
            className={`sp-preset-chip rounded-full border px-2.5 py-0.5 font-mono text-caption transition-colors duration-150 ${
              active
                ? "border-(--accent) bg-(--accent-soft) font-bold text-(--accent-ink)"
                : "border-hairline bg-paper-raised text-ink-muted hover:border-hairline-strong hover:text-ink"
            }`}
          >
            {formatSpeed(p)}
          </button>
        );
      })}
    </div>
  );
}

/**
 * The one speed control used by every player on the site: logarithmic
 * slider 0.1x–5x, preset chips, −/+ buttons, consistent "0.25x" labels.
 * StepPlayer renders it automatically; standalone widgets (sorting, BST
 * traversal trainer, …) mount it with the same usePlaybackSpeed() state.
 */
export function SpeedControl({
  speed,
  setSpeed,
  className = "",
  showPresets = true,
}: {
  speed: number;
  setSpeed: (v: number) => void;
  className?: string;
  showPresets?: boolean;
}) {
  return (
    <div className={className}>
      <div className="inline-flex flex-wrap items-center gap-1.5">
        <span className="sr-only">Playback speed</span>
        <span aria-hidden className="text-caption text-ink-muted">
          Speed
        </span>
        <button
          type="button"
          onClick={() => setSpeed(speedStepDown(speed))}
          disabled={speed <= SPEED_MIN + 1e-9}
          aria-label="Slower (previous speed preset)"
          className={btnGhost}
        >
          <Minus className="size-3.5" aria-hidden />
        </button>
        <input
          type="range"
          min={0}
          max={SLIDER_MAX}
          step={1}
          value={speedToSlider(speed)}
          onChange={(e) => setSpeed(sliderToSpeed(Number(e.target.value)))}
          aria-label="Playback speed"
          aria-valuetext={formatSpeed(speed)}
          className="sp-range w-24 sm:w-32"
        />
        <button
          type="button"
          onClick={() => setSpeed(speedStepUp(speed))}
          disabled={speed >= SPEED_MAX - 1e-9}
          aria-label="Faster (next speed preset)"
          className={btnGhost}
        >
          <Plus className="size-3.5" aria-hidden />
        </button>
        <span
          className="min-w-[3.2rem] text-center font-mono text-caption tabular-nums text-ink"
          aria-hidden
        >
          {formatSpeed(speed)}
        </span>
      </div>
      {showPresets ? (
        <SpeedPresetChips speed={speed} setSpeed={setSpeed} className="mt-2" />
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Player shell                                                         */
/* ------------------------------------------------------------------ */

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
  /** Reserved stage height (px or any CSS length). The stage NEVER
   *  changes height between frames — per-region fixed slots are each
   *  player's responsibility (see postfix-eval-player for the pattern). */
  stageMinHeight?: number | string;
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
  stageMinHeight,
}: StepPlayerShellProps<S>) {
  const [index, setIndex] = useState(0);
  const [internalPlaying, setInternalPlaying] = useState(false);
  const [speed, setSpeed] = usePlaybackSpeed();
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

  // playback timer — speed scales the interval (slow = genuinely slow)
  useEffect(() => {
    if (!internalPlaying || atEnd) return;
    const id = window.setTimeout(() => {
      setIndex((i) => Math.min(i + 1, n - 1));
    }, Math.max(60, baseInterval / speed));
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
    } else if (e.key === "[") {
      e.preventDefault();
      setSpeed(speedStepDown(speed));
    } else if (e.key === "]") {
      e.preventDefault();
      setSpeed(speedStepUp(speed));
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
        className={`sp-shell outline-none ${
          reduced ? "sp-reduced" : ""
        }`}
        /* --speed drives every animation duration inside the stage:
           durations are calc(Xms / var(--speed, 1)). */
        style={{ "--speed": speed } as CSSProperties}
      >
        {/* header — pr-9 reserves the corner for the tiny fullscreen
            button overlaid on the card (lazy.tsx), so they never meet */}
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2 pr-9">
          <span className="text-caption font-semibold uppercase tracking-wider text-ink-faint">
            {title}
          </span>
          {toolbar}
        </div>

        {/* stage — height reserved by the caller when a player's stage
            could otherwise grow between frames (fixed-slot contract) */}
        <div
          className="sp-stage"
          style={stageMinHeight != null ? { minHeight: stageMinHeight } : undefined}
        >
          {render(step, index)}
        </div>

        {/* status line — FIXED height (2 lines) with internal scroll, so
            the controls below can NEVER move between frames. */}
        <p
          aria-live="polite"
          className="viz-status mt-3 h-[3.3rem] overflow-y-auto thin-scroll text-caption text-ink-muted"
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

          {/* speed: − [log slider] + value (shared control, every player) */}
          <SpeedControl
            speed={speed}
            setSpeed={setSpeed}
            showPresets={false}
            className="ml-auto"
          />
        </div>

        {/* speed presets */}
        <SpeedPresetChips
          speed={speed}
          setSpeed={setSpeed}
          className="mt-2 no-print"
        />

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
          Keyboard: Space play/pause · ← step back · → step forward · Home
          reset · [ slower · ] faster
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
