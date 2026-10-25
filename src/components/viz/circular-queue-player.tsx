"use client";

import { useMemo, useState } from "react";
import { Lightbulb, PlayCircle, Trash2 } from "lucide-react";
import { StepPlayer } from "./step-player";
import {
  emptyCircularQueue,
  recordCircularQueueOps,
  wrapAroundScenario,
  type CircularQueueFrame,
  type CircularQueueState,
} from "./player-steps";
import { buildRingGeometry, type RingGeometry } from "./circular-queue-geometry";
import { btnGhost, btnPrimary } from "./viz-ui";

/**
 * Circular queue player: a ring of slots with FRONT and REAR markers that
 * slide around it, driven by frames from the real algorithm · including
 * the live (rear + 1) % N arithmetic, wrap-around moments, and the
 * full/empty detection frames. Enqueue/dequeue buttons run single
 * operations; the scripted scenario button plays a full wrap-around
 * story (fill, drain, wrap, full, empty).
 *
 * The ring geometry (slot size, radius, viewBox, marker placement) is
 * computed from N by circular-queue-geometry.ts so NOTHING is ever
 * clipped — labels sit outside the ring and never collide, for any N.
 */
const SIZES = [3, 4, 5, 6, 8, 10, 12, 16];

export function CircularQueuePlayer({
  caption,
  initialScenario,
}: {
  caption?: string;
  /** Fullscreen route: ?scenario=wrap auto-loads the wrap-around demo. */
  initialScenario?: string;
}) {
  const [size, setSize] = useState(5);
  const [state, setState] = useState<CircularQueueState>(() => emptyCircularQueue(5));
  const [value, setValue] = useState("42");
  const [recording, setRecording] = useState(() => ({
    frames: recordCircularQueueOps(emptyCircularQueue(5), [
      { op: "enqueue", value: 10 },
      { op: "enqueue", value: 20 },
    ]),
    id: 0,
  }));

  const runOps = (ops: Parameters<typeof recordCircularQueueOps>[1], from?: CircularQueueState) => {
    const base = from ?? state;
    const frames = recordCircularQueueOps(base, ops);
    setState(frames[frames.length - 1].state);
    setRecording((r) => ({ frames, id: r.id + 1 }));
  };

  const reset = (n = size) => {
    const fresh = emptyCircularQueue(n);
    setSize(n);
    setState(fresh);
    setRecording((r) => ({
      frames: recordCircularQueueOps(fresh, [{ op: "enqueue", value: 10 }]),
      id: r.id + 1,
    }));
  };

  const loadScenario = () => runOps(wrapAroundScenario(), state);

  // fullscreen ?scenario=wrap · auto-load once on mount
  const [scenarioLoaded, setScenarioLoaded] = useState(false);
  if (initialScenario === "wrap" && !scenarioLoaded) {
    setScenarioLoaded(true);
    const frames = recordCircularQueueOps(state, wrapAroundScenario());
    setState(frames[frames.length - 1].state);
    setRecording((r) => ({ frames, id: r.id + 1 }));
  }

  const numericValue = Number(value);
  const canEnqueue = Number.isFinite(numericValue);

  const toolbar = (
    <label className="flex items-center gap-1.5 text-caption text-ink-muted">
      <span className="sr-only">Queue capacity</span>
      <span aria-hidden>Slots</span>
      <select
        value={size}
        onChange={(e) => reset(Number(e.target.value))}
        className="input-viz w-16 font-mono"
        aria-label="Queue capacity (N slots)"
      >
        {SIZES.map((n) => (
          <option key={n} value={n}>
            N={n}
          </option>
        ))}
      </select>
    </label>
  );

  return (
    <StepPlayer<CircularQueueFrame>
      steps={recording.frames}
      describe={(s) => s.desc}
      render={(s) => <RingStage frame={s} size={size} />}
      title="Circular queue player"
      baseInterval={1000}
      resetKey={recording.id}
      caption={caption}
      toolbar={toolbar}
      footer={
        <div className="mt-3 border-t border-hairline pt-3 no-print">
          <div className="flex flex-wrap items-center gap-2">
            <input
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="input-viz w-20 font-mono"
              aria-label="Value to enqueue"
            />
            <button
              type="button"
              disabled={!canEnqueue}
              onClick={() => runOps([{ op: "enqueue", value: numericValue }])}
              className={btnPrimary}
            >
              Enqueue
            </button>
            <button
              type="button"
              onClick={() => runOps([{ op: "dequeue" }])}
              className={btnGhost}
            >
              <Trash2 className="size-3.5" aria-hidden />
              Dequeue
            </button>
            <button type="button" onClick={loadScenario} className={btnGhost}>
              <PlayCircle className="size-3.5" aria-hidden />
              Play wrap-around scenario
            </button>
            <button type="button" onClick={() => reset()} className={`${btnGhost} ml-auto`}>
              Reset
            </button>
          </div>
          <p className="mt-2 text-caption text-ink-faint">
            The scenario fills the ring, drains it, wraps rear back to slot 0,
            hits FULL, then drains to EMPTY · every detection frame included.
          </p>
        </div>
      }
    />
  );
}

/* ------------------------------------------------------------------ */
/* Ring stage: SVG ring of slots + live status panel                    */
/* ------------------------------------------------------------------ */

function RingStage({ frame, size }: { frame: CircularQueueFrame; size: number }) {
  const N = size;
  const { state } = frame;

  // Marker visibility mirrors the frame semantics; the geometry (and so
  // the viewBox) is derived from N ONLY — identical for every frame, so
  // the SVG never resizes between steps.
  const showFront = state.count > 0 || frame.phase === "advance-front";
  const showRear = state.rear >= 0;
  const geo: RingGeometry = useMemo(
    () =>
      buildRingGeometry(
        N,
        showFront ? state.front : null,
        showRear ? state.rear : null,
      ),
    // geometry depends only on N + which slots have markers; the viewBox
    // itself is the worst case for N, so frame-to-frame swaps never
    // change the svg size.
    [N, showFront, showRear, state.front, state.rear],
  );

  const isFull = frame.phase === "full";
  const isEmpty = frame.phase === "empty";
  const writing = frame.phase === "write" || frame.phase === "advance-rear";

  return (
    <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:justify-center">
      {/* the ring — viewBox computed from ALL elements + padding, so
          nothing is ever clipped; overflow visible as a final safety. */}
      <svg
        viewBox={`0 0 ${geo.size} ${geo.size}`}
        overflow="visible"
        role="img"
        aria-label={`Circular queue ring with ${N} slots; front at slot ${state.front}, rear at slot ${state.rear}, ${state.count} elements stored`}
        className="mx-auto h-auto w-full max-w-[min(100%,420px)] sm:w-[52%] sm:max-w-[440px]"
      >
        {/* ring guide */}
        <circle
          cx={geo.cx}
          cy={geo.cy}
          r={geo.radius}
          fill="none"
          stroke="var(--hairline)"
          strokeWidth="1.5"
          strokeDasharray="4 5"
        />
        {geo.slots.map(({ i, x, y, ix, iy }) => {
          const v = state.slots[i];
          const isActive = frame.activeSlot === i;
          return (
            <g key={i}>
              {/* slot box */}
              <rect
                x={x - geo.slotW / 2}
                y={y - geo.slotH / 2}
                width={geo.slotW}
                height={geo.slotH}
                rx="8"
                className={isActive ? "cq-slot cq-slot-active" : "cq-slot"}
              />
              {/* index label — inside the ring, clear of all markers */}
              <text
                x={ix}
                y={iy}
                textAnchor="middle"
                dominantBaseline="central"
                className="cq-index"
                fontSize={geo.indexFont}
              >
                {i}
              </text>
              {/* value */}
              {v !== null ? (
                <text
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize={geo.valueFont}
                  className={`cq-value ${isActive && writing ? "cq-pop" : ""}`}
                >
                  {v}
                </text>
              ) : (
                <text
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize={geo.valueFont}
                  className="cq-empty"
                >
                  ·
                </text>
              )}
            </g>
          );
        })}

        {/* FRONT / REAR markers — outside the ring, radially beyond their
            slot, each with an arrow pointing back at it; same-slot markers
            split tangentially so they never overlap. */}
        {([geo.front, geo.rear] as const).map((m, k) =>
          m ? (
            <g
              key={m.kind}
              className="cq-marker"
              style={{ transform: `translate(${m.lx}px, ${m.ly}px)` }}
            >
              <line
                x1={m.tailX - m.lx}
                y1={m.tailY - m.ly}
                x2={m.tipX - m.lx}
                y2={m.tipY - m.ly}
                className={k === 0 ? "cq-marker-front" : "cq-marker-rear"}
              />
              <polygon
                points={m.head.map(([px, py]) => `${px - m.lx},${py - m.ly}`).join(" ")}
                className={k === 0 ? "cq-marker-front" : "cq-marker-rear"}
              />
              <text
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={geo.markerFont}
                className={k === 0 ? "cq-front-text" : "cq-rear-text"}
              >
                {m.kind === "front" ? "FRONT" : "REAR"}
              </text>
            </g>
          ) : null,
        )}
      </svg>

      {/* live panel — every slot reserves its space so the panel height
          never changes between frames (status/calc/why always wrap, never clip) */}
      <div className="flex w-full max-w-[22rem] flex-col gap-2.5">
        <div className="grid grid-cols-3 gap-2">
          <Stat label="front" value={String(state.front)} tone="front" />
          <Stat label="rear" value={state.rear < 0 ? "−1" : String(state.rear)} tone="rear" />
          <Stat label="count / N" value={`${state.count} / ${N}`} tone="plain" />
        </div>

        {/* calc line: FIXED slot (wraps or scrolls inside, never clips,
            never resizes) */}
        <p className="h-[3.8rem] overflow-y-auto rounded-md border border-hairline bg-[var(--code-bg)] px-3 py-2 font-mono text-caption leading-relaxed text-[var(--code-ink)] break-words thin-scroll">
          {frame.calc ?? "\u00a0"}
        </p>

        {/* full/empty alerts share ONE fixed slot (content swaps inside) */}
        <div className="h-[3.8rem]" role={isFull || isEmpty ? "alert" : undefined}>
          {isFull ? (
            <p className="h-full rounded-lg border-2 border-(--danger) bg-danger-soft px-3 py-2 text-caption font-semibold text-danger">
              Queue FULL · count == N == {N}. Enqueue refused.
            </p>
          ) : isEmpty ? (
            <p className="h-full rounded-lg border-2 border-(--warn) bg-warn-soft px-3 py-2 text-caption font-semibold text-warn">
              Queue EMPTY · count == 0. Dequeue refused.
            </p>
          ) : (
            <p className="h-full px-1 py-2 text-caption text-ink-faint" aria-hidden>
               
            </p>
          )}
        </div>

        {/* why panel: fixed height, text scrolls inside */}
        <div className="h-[6.6rem] rounded-lg border border-l-4 border-(--accent) border-l-(--accent) bg-paper-sunken p-3">
          <p className="mb-1 flex items-center gap-1.5 text-caption font-semibold uppercase tracking-wider text-(--accent-ink)">
            <Lightbulb className="size-3.5" aria-hidden />
            Why
          </p>
          <p className="h-[3.9rem] overflow-y-auto text-caption leading-relaxed text-ink thin-scroll">{frame.why ?? "\u00a0"}</p>
        </div>
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "front" | "rear" | "plain";
}) {
  const cls =
    tone === "front"
      ? "text-(--accent-ink)"
      : tone === "rear"
        ? "text-(--visit)"
        : "text-ink";
  return (
    <div className="rounded-md border border-hairline bg-paper-raised px-2 py-1.5 text-center">
      <p className="font-mono text-[0.6rem] uppercase tracking-wide text-ink-faint">{label}</p>
      <p className={`font-mono text-lg font-bold tabular-nums ${cls}`}>{value}</p>
    </div>
  );
}
