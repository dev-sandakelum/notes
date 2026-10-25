"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Pause, Play, Shuffle, StepForward } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { SpeedControl, SpeedPresetChips, usePlaybackSpeed } from "./step-player";

/**
 * Sorting race visualizer.
 * Ports the original DSA lecture-notes widget: bars + 5 algorithms
 * (bubble, selection, insertion, merge, quick), speed slider,
 * play/pause/step, shuffle, size slider (8–32).
 * Ops are precomputed for the chosen algorithm, then played back one
 * per tick: compare = warn, swap/write = danger, settled = ok.
 */

type Algo = "bubble" | "selection" | "insertion" | "merge" | "quick";
type Op =
  | { t: "cmp"; i: number; j: number }
  | { t: "swap"; i: number; j: number }
  | { t: "set"; k: number; v: number }
  | { t: "settle"; i: number };

type Tone = "default" | "ok" | "warn";
interface Msg {
  text: string;
  tone: Tone;
}
interface Hl {
  a: number | null;
  b: number | null;
  kind: "cmp" | "swap" | "set" | null;
}
interface View {
  arr: number[];
  done: number[];
  hlA: number | null;
  hlB: number | null;
  hlKind: Hl["kind"];
  opIdx: number;
  opsLen: number;
}
interface Sim {
  arr: number[];
  ops: Op[];
  opIdx: number;
  done: Set<number>;
  hlA: number | null;
  hlB: number | null;
  hlKind: Hl["kind"];
}

const ALGOS: { id: Algo; label: string }[] = [
  { id: "bubble", label: "Bubble" },
  { id: "selection", label: "Selection" },
  { id: "insertion", label: "Insertion" },
  { id: "merge", label: "Merge" },
  { id: "quick", label: "Quick" },
];
const ALGO_LABEL: Record<Algo, string> = {
  bubble: "Bubble",
  selection: "Selection",
  insertion: "Insertion",
  merge: "Merge",
  quick: "Quick",
};

const SIZE_DEFAULT = 20;

/** Tiny seeded PRNG so the first array is deterministic (SSR-safe). */
function mulberry32(seed: number): () => number {
  let t = seed >>> 0;
  return () => {
    t = (t + 0x6d2b79f5) >>> 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function seededArr(): number[] {
  const rand = mulberry32(1987);
  return Array.from({ length: SIZE_DEFAULT }, () => 4 + Math.floor(rand() * 97));
}
const btnPrimary =
  "inline-flex items-center gap-1.5 rounded-md bg-ink text-paper px-3 h-9 text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:pointer-events-none";
const btnGhost =
  "inline-flex items-center gap-1.5 rounded-md border border-hairline text-ink px-3 h-9 text-sm hover:border-hairline-strong transition-colors disabled:opacity-50 disabled:pointer-events-none";
const selectCls =
  "border border-hairline rounded-md bg-paper px-2 h-9 text-sm text-ink hover:border-hairline-strong transition-colors";

const toneCls = (tone: Tone) =>
  tone === "ok" ? "text-ok" : tone === "warn" ? "text-warn" : "text-ink-muted";

/* ---------- op generation (plain, correct implementations) ---------- */

function genOps(algo: Algo, src: number[]): Op[] {
  const a = src.slice();
  const o: Op[] = [];
  if (algo === "bubble") {
    for (let i = 0; i < a.length - 1; i++) {
      for (let j = 0; j < a.length - 1 - i; j++) {
        o.push({ t: "cmp", i: j, j: j + 1 });
        if (a[j] > a[j + 1]) {
          o.push({ t: "swap", i: j, j: j + 1 });
          const x = a[j];
          a[j] = a[j + 1];
          a[j + 1] = x;
        }
      }
      o.push({ t: "settle", i: a.length - 1 - i });
    }
    o.push({ t: "settle", i: 0 });
  } else if (algo === "selection") {
    for (let i = 0; i < a.length - 1; i++) {
      let m = i;
      for (let j = i + 1; j < a.length; j++) {
        o.push({ t: "cmp", i: m, j });
        if (a[j] < a[m]) m = j;
      }
      if (m !== i) {
        o.push({ t: "swap", i, j: m });
        const x = a[i];
        a[i] = a[m];
        a[m] = x;
      }
      o.push({ t: "settle", i });
    }
    o.push({ t: "settle", i: a.length - 1 });
  } else if (algo === "insertion") {
    o.push({ t: "settle", i: 0 });
    for (let i = 1; i < a.length; i++) {
      const key = a[i];
      let j = i - 1;
      o.push({ t: "cmp", i, j });
      while (j >= 0 && a[j] > key) {
        o.push({ t: "set", k: j + 1, v: a[j] });
        a[j + 1] = a[j];
        j--;
        if (j >= 0) o.push({ t: "cmp", i: j, j: j + 1 });
      }
      o.push({ t: "set", k: j + 1, v: key });
      a[j + 1] = key;
      o.push({ t: "settle", i });
    }
  } else if (algo === "merge") {
    const ms = (lo: number, hi: number) => {
      if (lo >= hi) return;
      const mid = (lo + hi) >> 1;
      ms(lo, mid);
      ms(mid + 1, hi);
      const L = a.slice(lo, mid + 1);
      const R = a.slice(mid + 1, hi + 1);
      let p = 0;
      let q = 0;
      let k = lo;
      while (p < L.length && q < R.length) {
        o.push({ t: "cmp", i: lo + p, j: mid + 1 + q });
        if (L[p] <= R[q]) {
          o.push({ t: "set", k, v: L[p] });
          a[k] = L[p];
          p++;
        } else {
          o.push({ t: "set", k, v: R[q] });
          a[k] = R[q];
          q++;
        }
        k++;
      }
      while (p < L.length) {
        o.push({ t: "set", k, v: L[p] });
        a[k] = L[p];
        p++;
        k++;
      }
      while (q < R.length) {
        o.push({ t: "set", k, v: R[q] });
        a[k] = R[q];
        q++;
        k++;
      }
    };
    ms(0, a.length - 1);
    for (let i = 0; i < a.length; i++) o.push({ t: "settle", i });
  } else {
    // quick sort, first-element pivot, Hoare-style partition
    const qs = (lo: number, hi: number) => {
      if (lo >= hi) {
        if (lo === hi) o.push({ t: "settle", i: lo });
        return;
      }
      const pivot = a[lo];
      let l = lo + 1;
      let r = hi;
      while (l <= r) {
        while (l <= r && a[l] < pivot) {
          o.push({ t: "cmp", i: l, j: lo });
          l++;
        }
        while (l <= r && a[r] > pivot) {
          o.push({ t: "cmp", i: r, j: lo });
          r--;
        }
        if (l <= r) {
          o.push({ t: "swap", i: l, j: r });
          const x = a[l];
          a[l] = a[r];
          a[r] = x;
          l++;
          r--;
        }
      }
      o.push({ t: "swap", i: lo, j: r });
      const y = a[lo];
      a[lo] = a[r];
      a[r] = y;
      o.push({ t: "settle", i: r });
      qs(lo, r - 1);
      qs(r + 1, hi);
    };
    qs(0, a.length - 1);
  }
  return o;
}

/* ---------- component ---------- */

export function SortingViz({ caption }: { caption?: string }) {
  const [algo, setAlgo] = useState<Algo>("bubble");
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = usePlaybackSpeed();
  const [size, setSize] = useState(SIZE_DEFAULT);
  const [msg, setMsg] = useState<Msg>({
    text: `${SIZE_DEFAULT} bars ready. Choose an algorithm and press Play.`,
    tone: "default",
  });
  const [view, setView] = useState<View>(() => ({
    arr: seededArr(),
    done: [],
    hlA: null,
    hlB: null,
    hlKind: null,
    opIdx: 0,
    opsLen: 0,
  }));

  // Simulation truth lives in a ref; state mirrors it for rendering.
  // Lazily initialised (on first interaction, never during render) from the
  // same deterministic seed as the initial view, so both agree.
  const sim = useRef<Sim | null>(null);
  const getSim = (): Sim => {
    if (!sim.current) {
      sim.current = {
        arr: seededArr(),
        ops: [],
        opIdx: 0,
        done: new Set<number>(),
        hlA: null,
        hlB: null,
        hlKind: null,
      };
    }
    return sim.current;
  };
  const algoRef = useRef<Algo>(algo);

  const sync = useCallback(() => {
    const s = getSim();
    setView({
      arr: [...s.arr],
      done: [...s.done],
      hlA: s.hlA,
      hlB: s.hlB,
      hlKind: s.hlKind,
      opIdx: s.opIdx,
      opsLen: s.ops.length,
    });
  }, []);

  const ensureOps = useCallback(() => {
    const s = getSim();
    if (s.ops.length === 0 || s.opIdx >= s.ops.length) {
      s.ops = genOps(algoRef.current, s.arr.slice());
      s.opIdx = 0;
      s.done = new Set();
      s.hlA = null;
      s.hlB = null;
      s.hlKind = null;
      sync();
    }
  }, [sync]);

  const applyOne = useCallback(() => {
    const s = getSim();
    if (s.opIdx >= s.ops.length) {
      setPlaying(false);
      return;
    }
    const op = s.ops[s.opIdx++];
    if (op.t === "cmp") {
      s.hlA = op.i;
      s.hlB = op.j;
      s.hlKind = "cmp";
    } else if (op.t === "swap") {
      const x = s.arr[op.i];
      s.arr[op.i] = s.arr[op.j];
      s.arr[op.j] = x;
      s.hlA = op.i;
      s.hlB = op.j;
      s.hlKind = "swap";
    } else if (op.t === "set") {
      s.arr[op.k] = op.v;
      s.hlA = op.k;
      s.hlB = null;
      s.hlKind = "set";
    } else {
      s.done.add(op.i);
      s.hlA = null;
      s.hlB = null;
      s.hlKind = null;
    }
    sync();
    const name = ALGO_LABEL[algoRef.current];
    if (s.opIdx >= s.ops.length) {
      setPlaying(false);
      setMsg({
        text: `${name} sort complete: ${s.ops.length} operations. Compare with the other algorithms.`,
        tone: "ok",
      });
    } else {
      setMsg({
        text:
          `${name} sort · operation ${s.opIdx} / ${s.ops.length} · ` +
          (op.t === "cmp"
            ? "comparing"
            : op.t === "swap"
              ? "swapping"
              : op.t === "set"
                ? "writing"
                : "settling"),
        tone: "default",
      });
    }
  }, [sync]);

  const doShuffle = useCallback(
    (n: number) => {
      setPlaying(false);
      const s = getSim();
      s.arr = Array.from({ length: n }, () => 4 + Math.floor(Math.random() * 97));
      s.ops = [];
      s.opIdx = 0;
      s.done = new Set();
      s.hlA = null;
      s.hlB = null;
      s.hlKind = null;
      sync();
      setMsg({
        text: `Shuffled ${n} bars. Choose an algorithm and press Play.`,
        tone: "default",
      });
    },
    [sync]
  );

  // Playback loop. Speed slider re-creates the interval (cheap).
  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(applyOne, Math.max(30, Math.round(330 / speed)));
    return () => clearInterval(id);
  }, [playing, speed, applyOne]);

  const togglePlay = () => {
    if (playing) {
      setPlaying(false);
      return;
    }
    ensureOps();
    setPlaying(true);
  };

  const step = () => {
    setPlaying(false);
    ensureOps();
    const s = getSim();
    if (s.opIdx < s.ops.length) applyOne();
  };

  const onAlgo = (v: Algo) => {
    setPlaying(false);
    setAlgo(v);
    algoRef.current = v;
    const s = getSim();
    s.ops = [];
    s.opIdx = 0;
    s.done = new Set();
    s.hlA = null;
    s.hlB = null;
    s.hlKind = null;
    sync();
    setMsg({ text: `Algorithm set to ${ALGO_LABEL[v]}. Press Play.`, tone: "default" });
  };

  /* ---------- render ---------- */

  const n = view.arr.length;
  const slot = 24;
  const W = Math.max(n * slot, 1);
  const H = 122;

  const legend = (
    <div className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-caption text-ink-muted">
      <span className="inline-flex items-center gap-1.5">
        <span className="inline-block size-2.5 rounded-sm" style={{ background: "var(--warn)" }} />
        comparing
      </span>
      <span className="inline-flex items-center gap-1.5">
        <span
          className="inline-block size-2.5 rounded-sm"
          style={{ background: "var(--danger)" }}
        />
        swap / write
      </span>
      <span className="inline-flex items-center gap-1.5">
        <span className="inline-block size-2.5 rounded-sm" style={{ background: "var(--ok)" }} />
        sorted
      </span>
    </div>
  );

  return (
    <figure className="border border-hairline rounded-md bg-paper-raised p-4 print-avoid-break viz-shell">
      <div className="no-print flex flex-wrap items-center justify-center gap-2">
        <select
          aria-label="Sorting algorithm"
          value={algo}
          onChange={(e) => onAlgo(e.target.value as Algo)}
          className={selectCls}
        >
          {ALGOS.map((a) => (
            <option key={a.id} value={a.id}>
              {a.label} sort
            </option>
          ))}
        </select>
        <button type="button" onClick={togglePlay} className={btnPrimary}>
          {playing ? (
            <Pause className="size-4" aria-hidden />
          ) : (
            <Play className="size-4" aria-hidden />
          )}
          {playing ? "Pause" : "Play"}
        </button>
        <button type="button" onClick={step} className={btnGhost}>
          <StepForward className="size-4" aria-hidden />
          Step
        </button>
        <button type="button" onClick={() => doShuffle(size)} className={btnGhost}>
          <Shuffle className="size-4" aria-hidden />
          Shuffle
        </button>
      </div>

      <div className="no-print mt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        <div className="flex w-56 items-center gap-3">
          <span className="w-14 shrink-0 text-caption text-ink-muted">Bars</span>
          <Slider
            className="flex-1"
            value={[size]}
            min={8}
            max={32}
            step={1}
            aria-label="Number of bars"
            onValueChange={([v]) => {
              setSize(v);
              doShuffle(v);
            }}
          />
          <span className="w-7 text-right font-mono text-sm">{size}</span>
        </div>
        <div className="flex w-56 items-center gap-3">
          <SpeedControl
            speed={speed}
            setSpeed={setSpeed}
            showPresets={false}
          />
        </div>
      </div>

      <SpeedPresetChips
        speed={speed}
        setSpeed={setSpeed}
        className="no-print mt-2 justify-center"
      />

      <div className="mt-3">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          role="img"
          aria-label={`${ALGO_LABEL[algo]} sort: operation ${view.opIdx} of ${view.opsLen} on ${n} bars`}
          className="h-auto w-full"
        >
            {view.arr.map((v, i) => {
              const isDone = view.done.includes(i);
              const isSwap =
                (view.hlKind === "swap" || view.hlKind === "set") &&
                (i === view.hlA || i === view.hlB);
              const isCmp = view.hlKind === "cmp" && (i === view.hlA || i === view.hlB);
              const fill = isDone
                ? "var(--ok)"
                : isSwap
                  ? "var(--danger)"
                  : isCmp
                    ? "var(--warn)"
                    : "var(--fig-primary)";
              return (
                <g key={i}>
                  <rect
                    x={i * slot + 3}
                    y={108 - v}
                    width={18}
                    height={v}
                    rx={2}
                    style={{ fill, transition: "fill .15s" }}
                  >
                    <title>{`bar ${i + 1}: ${v}`}</title>
                  </rect>
                  {n <= 16 ? (
                    <text
                      x={i * slot + 12}
                      y={119}
                      textAnchor="middle"
                      fontSize={9}
                      className="fill-[var(--fig-accent)] font-mono"
                    >
                      {v}
                    </text>
                  ) : null}
                </g>
              );
            })}
          </svg>
      </div>

      {legend}

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
