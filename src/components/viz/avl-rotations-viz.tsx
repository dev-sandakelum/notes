"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play, RotateCw, SkipForward } from "lucide-react";
import {
  TreeGraph,
  type TreeGraphNodeState,
} from "./tree-graph";
import { btnGhost, btnPrimary } from "./viz-ui";
import {
  CASES,
  CASE_ORDER,
  KEY_TAKEAWAY,
  ROLES,
  caseTreeToGraph,
  type RotCase,
} from "./avl-cases-data";

/**
 * Rotation case player (ch10) with the real numeric example set:
 *
 *   Case | z  | y  | x  | Rotation(s)      | Before
 *   LL   | 30 | 20 | 10 | right at 30      | 30(20(10(5,15),25),35)
 *   RR   | 10 | 20 | 30 | left at 10       | 10(5,20(15,30(25,35)))
 *   LR   | 30 | 10 | 20 | left, then right | 30(10(5,20(15,25)),35)
 *   RL   | 10 | 30 | 20 | right, then left | 10(5,30(20(15,25),35))
 *
 * The keys 5, 15, 25, 35 play T0-T3, every case ends as the balanced
 * tree 20(10(5,15),30(25,35)), and balance-factor badges are recomputed
 * from the real structure after every step (all 0 at the end). z, y and
 * x wear small coloured role tags next to their keys.
 */

const DWELL = 1700;

/** Node colour per role (matches the role tag colours). */
const ROLE_STATE: Record<"z" | "y" | "x", TreeGraphNodeState> = {
  z: "error",
  y: "newly",
  x: "found",
};

/** Window event fired by the case cards' "Play this case" buttons. */
export const PLAY_CASE_EVENT = "avlcase:play";

export function AvlRotationsViz({ caption }: { caption?: string }) {
  const [caseName, setCaseName] = useState<RotCase>("LL");
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [pulseOn, setPulseOn] = useState(false);
  const figureRef = useRef<HTMLElement>(null);

  const def = CASES[caseName];
  const steps = def.steps;
  const current = steps[Math.min(step, steps.length - 1)];
  const atEnd = step >= steps.length - 1;
  const roles = ROLES[caseName];

  /* The case cards' "Play this case" buttons ask us to load a case. */
  useEffect(() => {
    const onPlayCase = (ev: Event) => {
      const detail = (ev as CustomEvent<RotCase>).detail;
      if (!detail || !CASE_ORDER.includes(detail)) return;
      setCaseName(detail);
      setStep(0);
      setPlaying(true);
      figureRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    };
    window.addEventListener(PLAY_CASE_EVENT, onPlayCase);
    return () => window.removeEventListener(PLAY_CASE_EVENT, onPlayCase);
  }, []);

  /* Auto-advance while playing (timeout chaining, cleaned up on any change). */
  useEffect(() => {
    if (!playing || atEnd) return;
    const id = window.setTimeout(
      () => setStep((s) => Math.min(s + 1, steps.length - 1)),
      current.dwell ?? DWELL
    );
    return () => window.clearTimeout(id);
  }, [playing, step, atEnd, steps.length, current.dwell]);

  /* Playback stops by itself on the final step (rAF-deferred). */
  useEffect(() => {
    if (!playing || !atEnd) return;
    const raf = requestAnimationFrame(() => setPlaying(false));
    return () => cancelAnimationFrame(raf);
  }, [playing, atEnd]);

  /* Focus nodes pulse (role state ↔ selected) until the step ends. */
  useEffect(() => {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (current.focus === undefined || reduced) return;
    const id = window.setInterval(() => setPulseOn((v) => !v), 420);
    return () => {
      window.clearInterval(id);
      setPulseOn(false);
    };
  }, [caseName, step, current.focus]);

  const states: Record<string, TreeGraphNodeState> = {
    [roles.z]: ROLE_STATE.z,
    [roles.y]: ROLE_STATE.y,
    [roles.x]: ROLE_STATE.x,
  };
  if (current.focus !== undefined) {
    states[String(current.focus)] = pulseOn
      ? "selected"
      : ROLE_STATE[
          current.focus === roles.z ? "z" : current.focus === roles.y ? "y" : "x"
        ];
  }

  const root = caseTreeToGraph(current.tree, roles);

  const pickCase = (c: RotCase) => {
    setCaseName(c);
    setStep(0);
    setPlaying(false);
  };
  const playPause = () => {
    if (playing) {
      setPlaying(false);
      return;
    }
    if (atEnd) setStep(0); // replay from the top
    setPlaying(true);
  };
  const stepForward = () => {
    setPlaying(false);
    setStep((s) => Math.min(s + 1, steps.length - 1));
  };
  const reset = () => {
    setPlaying(false);
    setStep(0);
  };

  return (
    <figure
      ref={figureRef}
      className="print-avoid-break my-6 border border-hairline p-4 viz-shell"
      style={{ ["--case-accent" as string]: def.accent }}
    >
      {/* Case pills */}
      <div
        role="group"
        aria-label="Rotation case"
        className="no-print flex flex-wrap items-center justify-center gap-2"
      >
        {CASE_ORDER.map((c) => {
          const active = caseName === c;
          const accent = CASES[c].accent;
          return (
            <button
              key={c}
              type="button"
              aria-pressed={active}
              onClick={() => pickCase(c)}
              style={active ? { background: accent, borderColor: accent } : undefined}
              className={
                active
                  ? "h-9 rounded-[10px] border px-4 font-mono text-sm font-bold text-white transition-colors"
                  : "chip h-9 font-mono font-bold"
              }
            >
              {c}
            </button>
          );
        })}
      </div>

      <p className="mt-3 text-center text-sm leading-relaxed text-ink-muted">
        {def.blurb}
      </p>

      <div className="tree-wrap mt-3">
        <TreeGraph
          root={root}
          nodeStates={states}
          ariaLabel={`${caseName} rotation example with keys ${caseName === "LL" || caseName === "LR" ? "30" : "10"}, 20 and ${caseName === "LL" || caseName === "LR" ? "10" : "30"}; the leaves 5, 15, 25 and 35 play T0 to T3`}
        />
      </div>

      {/* Step player controls */}
      <div className="no-print mt-2 flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={playPause}
          className={btnPrimary}
          style={{ background: def.accent, ["--shadow-btn" as string]: `0 6px 14px ${def.accent}55` }}
        >
          {playing ? (
            <>
              <Pause className="size-4" aria-hidden />
              Pause
            </>
          ) : (
            <>
              <Play className="size-4" aria-hidden />
              {atEnd && step > 0 ? "Replay" : "Play"}
            </>
          )}
        </button>
        <button type="button" onClick={stepForward} disabled={atEnd} className={btnGhost}>
          <SkipForward className="size-4" aria-hidden />
          Step →
        </button>
        <button type="button" onClick={reset} className={btnGhost}>
          <RotateCw className="size-4" aria-hidden />
          Reset
        </button>
        <span className="ml-1 font-mono text-sm text-ink-muted">
          Step {Math.min(step, steps.length - 1) + 1} / {steps.length}
        </span>
      </div>

      {/* Step description */}
      <p
        aria-live="polite"
        className="viz-status default mt-3 text-center"
      >
        <span className="font-semibold text-white">{current.label}:</span>{" "}
        {current.desc}
      </p>

      {/* Legend */}
      <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-danger bg-danger-soft px-2.5 py-0.5 text-xs text-danger">
          <span className="font-mono font-bold">z</span> unbalanced, BF ±2
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-visit bg-visit-soft px-2.5 py-0.5 text-xs text-visit">
          <span className="font-mono font-bold">y</span> heavy child
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-ok bg-ok-soft px-2.5 py-0.5 text-xs text-ok">
          <span className="font-mono font-bold">x</span> heavy grandchild
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-paper-raised px-2.5 py-0.5 text-xs text-ink-muted">
          <span className="font-mono font-bold">T0–T3</span> keys 5, 15, 25, 35
        </span>
      </div>
      <div className="mt-1.5 flex flex-wrap items-center justify-center gap-2 text-xs text-ink-muted">
        <span>BF badge colours:</span>
        <span className="inline-flex items-center gap-1">
          <span className="dot inline-block size-2.5 rounded-full bg-ok" />0
        </span>
        <span className="inline-flex items-center gap-1">
          <span className="dot inline-block size-2.5 rounded-full bg-warn" />±1
        </span>
        <span className="inline-flex items-center gap-1">
          <span className="dot inline-block size-2.5 rounded-full bg-danger" />±2
        </span>
      </div>

      {/* Key takeaway */}
      <p className="mt-3 rounded-lg border border-(--case-accent) bg-paper-sunken px-3 py-2 text-center text-sm font-medium text-ink">
        {KEY_TAKEAWAY}
      </p>

      {caption ? (
        <figcaption className="mt-2 border-t border-hairline pt-2 text-center text-caption italic text-ink-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
