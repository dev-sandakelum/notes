"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ArrowLeft, Eye, Minus, Plus, RotateCw } from "lucide-react";

/**
 * Stack visualizer — VERTICAL open-top container (redesign D6).
 *
 * A narrow cylinder (~104px) with the OPEN END AT THE TOP: index 0 sits at
 * the bottom of the container and TOP grows upward. Push drops the new
 * element in from above the mouth (one-shot CSS keyframe keyed by a
 * push-sequence id, so re-renders never replay it), pop lifts the top
 * element out and fades it before removing it from state, peek pulses the
 * top cell, and a moving "TOP = i" pointer on the right tracks the stack top
 * ("TOP = −1" rests at the container floor when empty). Push on full /
 * pop·peek on empty shakes the container with a danger message. Initial
 * state is a deterministic empty stack → SSR-safe (Math.random only ever
 * runs inside the push event handler).
 */

const MAX = 6;
const SLOTS = [0, 1, 2, 3, 4, 5];

/* Geometry constants — keep in sync with the Tailwind sizes used below:
   cell h-11 = 44px · row gap-1.5 = 6px → step 50px · pointer pill h-6 = 24px.
   Cylinder = border-t-2 (2) + p-1.5 (6) + 6 rows (264 + 5·6 = 294)
              + p-1.5 (6) + border-b (1) = 309px tall. */
const ROW_STEP = 50;
const PAD_TOP = 8; // border-t-2 (2) + p-1.5 (6) — cylinder top → first row
const CYLINDER_H = 309;
const PILL_H = 24;

/** Vertical offset (px) of the TOP pointer pill: centred on cell `top`,
    resting at the container floor (just below index 0) when the stack is
    empty. Moved via transform so it glides with a CSS transition. */
const pointerY = (top: number) =>
  top >= 0
    ? PAD_TOP + (MAX - 1 - top) * ROW_STEP + (44 - PILL_H) / 2
    : CYLINDER_H - 4 - PILL_H / 2;

type Tone = "default" | "ok" | "warn" | "danger";
interface Msg {
  text: string;
  tone: Tone;
}
interface Cell {
  /** push-sequence id — one-shot drop-in animation key */
  id: number;
  value: string;
}

const fmtTop = (t: number) => (t === -1 ? "−1" : String(t));

const defaultMsg = (): Msg => ({
  text: `Capacity ${MAX} · TOP = −1 · stack is empty`,
  tone: "default",
});

/* One-shot keyframes (globals.css force-resets animation-duration under
   prefers-reduced-motion, so these degrade to instant there). Rule order
   matters when several apply to one cell: lift beats peek beats drop. */
const ANIM_CSS = `
@keyframes stackviz-drop {
  from { transform: translateY(-30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
@keyframes stackviz-peek {
  0%, 100% { transform: scale(1); }
  20% { transform: scale(1.08); }
  40% { transform: scale(1); }
  60% { transform: scale(1.05); }
  80% { transform: scale(1); }
}
@keyframes stackviz-lift {
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(-28px); opacity: 0; }
}
@keyframes stackviz-shake {
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-5px); }
  40% { transform: translateX(5px); }
  60% { transform: translateX(-4px); }
  80% { transform: translateX(4px); }
}
.stackviz-drop { animation: stackviz-drop 350ms cubic-bezier(0.34, 1.56, 0.64, 1) both; }
.stackviz-peek { animation: stackviz-peek 600ms ease-in-out; }
.stackviz-lift { animation: stackviz-lift 280ms ease-in forwards; }
.stackviz-shake { animation: stackviz-shake 300ms ease-in-out; }
`;

const btnPrimary =
  "inline-flex min-h-9 items-center gap-1.5 rounded-md bg-ink text-paper px-3 text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:pointer-events-none";
const btnGhost =
  "inline-flex min-h-9 items-center gap-1.5 rounded-md border border-hairline text-ink px-3 text-sm hover:border-hairline-strong transition-colors disabled:opacity-50 disabled:pointer-events-none";
const inputCls =
  "border border-hairline rounded-md bg-paper px-3 min-h-9 font-mono text-sm text-ink w-24 placeholder:text-ink-faint";

const toneCls = (tone: Tone) =>
  tone === "ok"
    ? "text-ok"
    : tone === "danger"
      ? "text-danger"
      : tone === "warn"
        ? "text-warn"
        : "text-ink-muted";

export function StackViz({ caption }: { caption?: string }) {
  /** stack[0] = bottom element … stack[len−1] = TOP */
  const [stack, setStack] = useState<Cell[]>([]);
  const [input, setInput] = useState("");
  /** id of the cell that is currently dropping in (cleared after 350ms) */
  const [dropId, setDropId] = useState<number | null>(null);
  /** id of the cell playing the lift-out animation (pop commits at 280ms) */
  const [liftingId, setLiftingId] = useState<number | null>(null);
  const [peeking, setPeeking] = useState(false);
  const [shakeOn, setShakeOn] = useState(false);
  const [msg, setMsg] = useState<Msg>(defaultMsg);

  const inputId = useId();

  const busy = useRef(false); // pop animation in flight → no double-fire
  const seq = useRef(0); // push sequence counter
  const timers = useRef<number[]>([]);

  const later = (fn: () => void, ms: number) => {
    timers.current.push(window.setTimeout(fn, ms));
  };
  const clearTimers = () => {
    timers.current.forEach((t) => clearTimeout(t));
    timers.current = [];
  };
  useEffect(
    () => () => {
      timers.current.forEach((t) => clearTimeout(t));
      timers.current = [];
    },
    []
  );

  const triggerShake = () => {
    setShakeOn(true);
    later(() => setShakeOn(false), 300);
  };

  const doPush = () => {
    if (busy.current) {
      setMsg({ text: "One moment: lifting the top element out…", tone: "warn" });
      return;
    }
    if (stack.length >= MAX) {
      triggerShake();
      setMsg({
        text: `Stack overflow: capacity ${MAX} reached`,
        tone: "danger",
      });
      return;
    }
    // Random fallback only ever runs inside this event handler.
    const v = (input.trim() || String(Math.floor(Math.random() * 100))).slice(0, 4);
    const id = ++seq.current;
    const at = stack.length; // index the new element lands on
    setPeeking(false);
    setDropId(id);
    setStack((prev) => [...prev, { id, value: v }]);
    setInput("");
    setMsg({ text: `Pushed ${v} · TOP = ${fmtTop(at)}`, tone: "ok" });
    // clear the one-shot drop class once it has played (a newer push
    // replaces dropId, and this guard keeps the newer cell animating)
    later(() => setDropId((cur) => (cur === id ? null : cur)), 350);
  };

  const doPop = () => {
    if (busy.current) {
      setMsg({ text: "One moment: lifting the top element out…", tone: "warn" });
      return;
    }
    if (stack.length === 0) {
      triggerShake();
      setMsg({ text: "Stack underflow: nothing to pop", tone: "danger" });
      return;
    }
    const cell = stack[stack.length - 1];
    busy.current = true;
    setPeeking(false);
    setLiftingId(cell.id);
    setMsg({
      text: `Popped ${cell.value} · TOP = ${fmtTop(stack.length - 2)}`,
      tone: "ok",
    });
    later(() => {
      setStack((prev) => prev.slice(0, -1));
      setLiftingId(null);
      busy.current = false;
    }, 280);
  };

  const doPeek = () => {
    if (busy.current) {
      setMsg({ text: "One moment: lifting the top element out…", tone: "warn" });
      return;
    }
    if (stack.length === 0) {
      triggerShake();
      setMsg({ text: "Stack underflow: nothing to peek", tone: "danger" });
      return;
    }
    setPeeking(true);
    setMsg({ text: `Peek → ${stack[stack.length - 1].value}`, tone: "ok" });
    later(() => setPeeking(false), 600);
  };

  const doReset = () => {
    clearTimers();
    busy.current = false;
    setStack([]);
    setDropId(null);
    setLiftingId(null);
    setPeeking(false);
    setShakeOn(false);
    setMsg(defaultMsg());
  };

  const top = stack.length - 1;
  const topCell = top >= 0 ? stack[top] : null;

  return (
    <figure className="border border-hairline rounded-md bg-paper-raised p-4 print-avoid-break viz-shell">
      <style dangerouslySetInnerHTML={{ __html: ANIM_CSS }} />

      <div className="no-print flex flex-wrap items-center justify-center gap-2">
        <label htmlFor={inputId} className="sr-only">
          Value to push; leave blank for a random number 0–99
        </label>
        <input
          id={inputId}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") doPush();
          }}
          placeholder="value"
          className={inputCls}
        />
        <button type="button" onClick={doPush} className={btnPrimary}>
          <Plus className="size-4" aria-hidden />
          Push
        </button>
        <button type="button" onClick={doPop} className={btnGhost}>
          <Minus className="size-4" aria-hidden />
          Pop
        </button>
        <button type="button" onClick={doPeek} className={btnGhost}>
          <Eye className="size-4" aria-hidden />
          Peek
        </button>
        <button type="button" onClick={doReset} className={btnGhost}>
          <RotateCw className="size-4" aria-hidden />
          Reset
        </button>
      </div>

      <div
        className="mt-4 flex items-start justify-center gap-3"
        role="img"
        aria-label={`Vertical stack container, capacity ${MAX}, ${stack.length} filled, TOP = ${fmtTop(top)}`}
      >
        {/* index labels — 0 at the bottom, mirroring the cell rows */}
        <div aria-hidden className="flex flex-col-reverse gap-1.5 pt-2">
          {SLOTS.map((i) => (
            <span
              key={i}
              className="flex h-11 w-3.5 items-center justify-end font-mono text-[10px] leading-none text-ink-faint"
            >
              {i}
            </span>
          ))}
        </div>

        {/* open-top container: rounded bottom, subtle 2px rim at the mouth */}
        <div
          className={`w-[104px] rounded-b-xl rounded-t-sm border border-t-2 border-hairline border-t-hairline-strong bg-paper-sunken ${
            shakeOn ? "stackviz-shake" : ""
          }`}
        >
          <div className="flex flex-col-reverse gap-1.5 p-1.5">
            {SLOTS.map((i) => {
              const cell = i < stack.length ? stack[i] : null;
              if (!cell) {
                // dashed placeholder keeps the height CLS-stable
                return (
                  <div
                    key={`slot-${i}`}
                    className="h-11 w-full rounded-md border border-dashed border-hairline"
                  />
                );
              }
              const isTop = i === top;
              const dropping = cell.id === dropId;
              const peekPulse = peeking && isTop;
              const lifting = cell.id === liftingId;
              let cls = "border-hairline-strong bg-paper text-ink";
              if (isTop) cls = "border-ok bg-paper text-ink";
              if (peekPulse) cls = "border-ok bg-ok-soft text-ink";
              return (
                <div
                  key={`cell-${cell.id}`}
                  className={`flex h-11 w-full items-center justify-center rounded-md border font-mono text-sm transition-colors duration-150 ${cls}${
                    dropping ? " stackviz-drop" : ""
                  }${peekPulse ? " stackviz-peek" : ""}${lifting ? " stackviz-lift" : ""}`}
                >
                  {cell.value}
                </div>
              );
            })}
          </div>
        </div>

        {/* TOP pointer — glides along the side with a transform transition */}
        <div className="relative h-0 w-28">
          <div
            className="absolute left-0 top-0 transition-transform duration-300 ease-out"
            style={{ transform: `translateY(${pointerY(top)}px)` }}
          >
            <span
              className={`inline-flex h-6 max-w-full items-center gap-1 whitespace-nowrap rounded-md border px-1.5 font-mono text-[10px] leading-none transition-colors duration-150 ${
                topCell
                  ? "border-ok bg-ok-soft text-ok"
                  : "border-hairline bg-paper text-ink-faint"
              }`}
            >
              <ArrowLeft className="size-3.5 shrink-0" aria-hidden />
              TOP = {fmtTop(top)}
              {topCell ? ` · ${topCell.value}` : ""}
            </span>
          </div>
        </div>
      </div>

      <div
        aria-live="polite"
        className={`mt-3 min-h-[1.5rem] text-center text-sm ${toneCls(msg.tone)}`}
      >
        {msg.text}
      </div>

      {caption ? (
        <figcaption className="mt-1 border-t border-hairline pt-2 text-center text-caption italic text-ink-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
