"use client";

import { useEffect, useRef, useState } from "react";
import { Eye, Minus, Plus, RotateCw } from "lucide-react";

/**
 * Linear queue (array implementation) visualizer.
 * Ports the original DSA lecture-notes widget: 8 cells, enqueue/dequeue,
 * FRONT/REAR pointers and the "false full" problem that motivates
 * circular queues.
 */

const SIZE = 8;

type Tone = "default" | "ok" | "warn" | "danger";
interface Msg {
  text: string;
  tone: Tone;
}

const btnPrimary =
  "inline-flex items-center gap-1.5 rounded-md bg-ink text-paper px-3 h-9 text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:pointer-events-none";
const btnGhost =
  "inline-flex items-center gap-1.5 rounded-md border border-hairline text-ink px-3 h-9 text-sm hover:border-hairline-strong transition-colors disabled:opacity-50 disabled:pointer-events-none";
const inputCls =
  "border border-hairline rounded-md bg-paper px-3 h-9 font-mono text-sm text-ink w-24 placeholder:text-ink-faint";

const toneCls = (tone: Tone) =>
  tone === "ok"
    ? "text-ok"
    : tone === "danger"
      ? "text-danger"
      : tone === "warn"
        ? "text-warn"
        : "text-ink-muted";

const infoMsg = (front: number, rear: number): Msg => {
  const n = rear - front + 1;
  return {
    text:
      `Linear queue of size ${SIZE} · front = ${front}, rear = ${rear} · ` +
      (n <= 0 ? "empty" : `${n} element(s) = rear − front + 1`),
    tone: "default",
  };
};

export function QueueViz({ caption }: { caption?: string }) {
  const [cells, setCells] = useState<(string | null)[]>(() => Array(SIZE).fill(null));
  const [front, setFront] = useState(0);
  const [rear, setRear] = useState(-1);
  const [input, setInput] = useState("");
  const [flash, setFlash] = useState<number | null>(null);
  const [msg, setMsg] = useState<Msg>(infoMsg(0, -1));
  const flashTimer = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (flashTimer.current) clearTimeout(flashTimer.current);
    },
    []
  );

  const pulse = (i: number) => {
    if (flashTimer.current) clearTimeout(flashTimer.current);
    setFlash(i);
    flashTimer.current = window.setTimeout(() => setFlash(null), 450);
  };

  const enqueue = () => {
    if (rear === SIZE - 1) {
      const free = cells.slice(0, front).filter((c) => c === null).length;
      setMsg({
        text:
          free > 0
            ? `⚠ rear = ${SIZE - 1} (SIZE−1): insert impossible although ${free} free cell(s) sit before FRONT — the "false full" problem. This is why circular queues exist!`
            : `⚠ rear = ${SIZE - 1} (SIZE−1): queue genuinely full — all ${SIZE} cells are used.`,
        tone: "warn",
      });
      return;
    }
    const v = (input.trim() || String(Math.floor(Math.random() * 90 + 10))).slice(0, 4);
    const nr = rear + 1;
    setCells((prev) => {
      const next = [...prev];
      next[nr] = v;
      return next;
    });
    setRear(nr);
    setInput("");
    pulse(nr);
    setMsg({
      text: `Enqueued ${v} at rear = ${nr} · size = ${nr - front + 1}`,
      tone: "ok",
    });
  };

  const dequeue = () => {
    if (front > rear) {
      setMsg({
        text: "⚠ UNDERFLOW — queue is empty (front > rear). Dequeue rejected.",
        tone: "danger",
      });
      return;
    }
    const v = cells[front];
    const nf = front + 1;
    setCells((prev) => {
      const next = [...prev];
      next[front] = null;
      return next;
    });
    setFront(nf);
    pulse(front);
    setMsg({
      text: `Dequeued ${v} · front = ${nf} (cells before it are now dead space)`,
      tone: "ok",
    });
  };

  const peek = () => {
    if (front > rear) {
      setMsg({ text: "Front: queue is empty — nothing at the front.", tone: "default" });
      return;
    }
    pulse(front);
    setMsg({
      text: `Front → ${cells[front]} (not removed) · front = ${front}, rear = ${rear}`,
      tone: "ok",
    });
  };

  const reset = () => {
    if (flashTimer.current) clearTimeout(flashTimer.current);
    setFlash(null);
    setCells(Array(SIZE).fill(null));
    setFront(0);
    setRear(-1);
    setMsg(infoMsg(0, -1));
  };

  const count = Math.max(0, rear - front + 1);

  return (
    <figure className="border border-hairline rounded-md bg-paper-raised p-4 print-avoid-break viz-shell">
      <div className="no-print flex flex-wrap items-center justify-center gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") enqueue();
          }}
          aria-label="Value to enqueue (blank = random)"
          placeholder="value"
          className={inputCls}
        />
        <button type="button" onClick={enqueue} className={btnPrimary}>
          <Plus className="size-4" aria-hidden />
          Enqueue
        </button>
        <button type="button" onClick={dequeue} className={btnGhost}>
          <Minus className="size-4" aria-hidden />
          Dequeue
        </button>
        <button type="button" onClick={peek} className={btnGhost}>
          <Eye className="size-4" aria-hidden />
          Front
        </button>
        <button type="button" onClick={reset} className={btnGhost}>
          <RotateCw className="size-4" aria-hidden />
          Reset
        </button>
      </div>

      <div
        className="mt-4 flex flex-wrap items-start justify-center gap-2"
        role="img"
        aria-label={`Linear queue of ${SIZE} cells, ${count} element(s), front at index ${front}, rear at index ${rear}`}
      >
        {cells.map((v, i) => {
          const isFront = i === front && v !== null && front <= rear;
          const isRear = i === rear && v !== null && front <= rear;
          const isFlash = flash === i;
          const cellCls = isFlash
            ? "border-danger bg-danger-soft text-ink"
            : isFront || isRear
              ? "border-ok bg-paper-sunken text-ink"
              : v !== null
                ? "border-hairline-strong bg-paper-sunken text-ink"
                : "border-hairline bg-paper text-ink-faint";
          return (
            <div key={i} className="flex flex-col items-center gap-1">
              <div
                className={`grid h-12 w-12 place-items-center rounded-md border font-mono text-sm transition-colors duration-150 ${cellCls}`}
              >
                {v ?? ""}
              </div>
              <span className="font-mono text-[10px] leading-none text-ink-faint">{i}</span>
              <span className="flex h-8 flex-col items-center">
                <span
                  className={`text-[10px] font-semibold leading-none ${
                    isFront ? "text-ok" : "text-transparent"
                  }`}
                >
                  FRONT
                </span>
                <span
                  className={`mt-1 text-[10px] font-semibold leading-none ${
                    isRear ? "text-ok" : "text-transparent"
                  }`}
                >
                  REAR
                </span>
              </span>
            </div>
          );
        })}
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
