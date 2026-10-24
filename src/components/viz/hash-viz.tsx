"use client";

import { useEffect, useRef, useState } from "react";
import { Plus, RotateCw, Search, Trash2 } from "lucide-react";

/**
 * Hash table simulator.
 * Ports the original DSA lecture-notes widget: 11 slots, h(key) = key % 11,
 * insert/search/delete with a linear-probing (forward walking) animation,
 * and tombstones on delete so searches keep probing past deleted slots.
 */

const SIZE = 11;

type CellState = "empty" | "filled" | "del";
interface Cell {
  state: CellState;
  key: number | null;
}

type Tone = "default" | "ok" | "warn" | "danger";
interface Msg {
  text: string;
  tone: Tone;
}
interface SlotResult {
  /** slot index for insert/search hit; −1 not found; −2 table full (insert) */
  idx: number;
  /** empty slot where an unsuccessful search stopped */
  stop: number;
  home: number;
  visited: number[];
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

const freshCells = (): Cell[] =>
  Array.from({ length: SIZE }, () => ({ state: "empty" as CellState, key: null }));

function findSlot(cells: Cell[], key: number, forInsert: boolean): SlotResult {
  const home = ((key % SIZE) + SIZE) % SIZE;
  let i = home;
  const visited: number[] = [];
  for (;;) {
    const c = cells[i];
    if (forInsert) {
      if (c.state !== "filled") return { idx: i, stop: i, visited, home };
    } else {
      if (c.state === "empty") return { idx: -1, stop: i, visited, home };
      if (c.state === "filled" && c.key === key) return { idx: i, stop: i, visited, home };
    }
    visited.push(i);
    i = (i + 1) % SIZE;
    if (visited.length > SIZE) return { idx: forInsert ? -2 : -1, stop: i, visited, home };
  }
}

export function HashViz({ caption }: { caption?: string }) {
  const [cells, setCells] = useState<Cell[]>(freshCells);
  const [input, setInput] = useState("");
  const [probe, setProbe] = useState<number | null>(null);
  const [hit, setHit] = useState<{ idx: number; tone: "ok" | "danger" } | null>(null);
  const [msg, setMsg] = useState<Msg>({
    text: `Table size ${SIZE} · index = key mod ${SIZE} · try 42, 53, 64…`,
    tone: "default",
  });
  const busy = useRef(false);
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

  const parseKey = (): number | null => {
    const t = input.trim();
    if (!t) return null;
    const v = Number(t);
    return Number.isInteger(v) ? v : null;
  };

  const startWalk = (visited: number[]): number => {
    // Animate the probe walk; returns the delay at which to run the commit.
    setHit(null);
    visited.forEach((idx, i) => later(() => setProbe(idx), i * 240));
    later(() => setProbe(null), visited.length * 240);
    return visited.length * 240;
  };

  const doInsert = () => {
    if (busy.current) {
      setMsg({ text: "One moment: finishing the previous probe…", tone: "warn" });
      return;
    }
    const v = parseKey();
    if (v === null) {
      setMsg({ text: "Enter a whole number to insert.", tone: "warn" });
      return;
    }
    const r = findSlot(cells, v, true);
    if (r.idx === -2) {
      setMsg({ text: "⚠ Table completely full: insert rejected.", tone: "danger" });
      return;
    }
    const commit = () => {
      setCells((prev) => {
        const next = prev.map((c) => ({ ...c }));
        next[r.idx] = { state: "filled", key: v };
        return next;
      });
      setProbe(null);
      setHit({ idx: r.idx, tone: "ok" });
      setMsg({
        text:
          `${v} % ${SIZE} = ${r.home}` +
          (r.visited.length
            ? ` · collision! probed ${[...r.visited, r.idx].join(" → ")}`
            : " · no collision, direct hit") +
          ` → stored at [${r.idx}]`,
        tone: "ok",
      });
      setInput("");
      busy.current = false;
    };
    if (!r.visited.length) {
      commit();
      return;
    }
    busy.current = true;
    const at = startWalk(r.visited);
    later(commit, at);
  };

  const doSearch = () => {
    if (busy.current) {
      setMsg({ text: "One moment: finishing the previous probe…", tone: "warn" });
      return;
    }
    const v = parseKey();
    if (v === null) {
      setMsg({ text: "Enter a whole number to search.", tone: "warn" });
      return;
    }
    const r = findSlot(cells, v, false);
    busy.current = true;
    const at = startWalk(r.visited);
    later(() => {
      setProbe(null);
      if (r.idx >= 0) {
        setHit({ idx: r.idx, tone: "ok" });
        setMsg({
          text:
            `${v} % ${SIZE} = ${r.home} · FOUND at [${r.idx}]` +
            (r.visited.length ? ` after probing past ${r.visited.join(", ")}` : " directly"),
          tone: "ok",
        });
      } else {
        setHit(null);
        setMsg({
          text:
            `${v} % ${SIZE} = ${r.home} · NOT FOUND: ` +
            (r.visited.length >= SIZE
              ? `probed all ${SIZE} slots without a match`
              : `search stopped at empty slot [${r.stop}]`),
          tone: "danger",
        });
      }
      busy.current = false;
    }, at);
  };

  const doDelete = () => {
    if (busy.current) {
      setMsg({ text: "One moment: finishing the previous probe…", tone: "warn" });
      return;
    }
    const v = parseKey();
    if (v === null) {
      setMsg({ text: "Enter a whole number to delete.", tone: "warn" });
      return;
    }
    const r = findSlot(cells, v, false);
    busy.current = true;
    const path = r.idx >= 0 ? [...r.visited, r.idx] : r.visited;
    const at = startWalk(r.visited);
    later(() => {
      setProbe(null);
      if (r.idx >= 0) {
        setCells((prev) => {
          const next = prev.map((c) => ({ ...c }));
          next[r.idx] = { state: "del", key: null };
          return next;
        });
        setHit({ idx: r.idx, tone: "danger" });
        setMsg({
          text:
            `Deleted ${v} from [${r.idx}]. Slot specially marked (del), not plain empty, ` +
            `so searches keep probing past it.`,
          tone: "warn",
        });
        setInput("");
      } else {
        setHit(null);
        setMsg({
          text:
            `${v} % ${SIZE} = ${r.home} · not found: nothing to delete` +
            (path.length ? ` (probed ${path.join(" → ")})` : ""),
          tone: "danger",
        });
      }
      busy.current = false;
    }, at);
  };

  const reset = () => {
    clearTimers();
    busy.current = false;
    setCells(freshCells());
    setProbe(null);
    setHit(null);
    setMsg({
      text: `Table reset · size ${SIZE} · index = key mod ${SIZE} · try 42, 53, 64…`,
      tone: "default",
    });
  };

  const filledCount = cells.filter((c) => c.state === "filled").length;

  return (
    <figure className="border border-hairline rounded-md bg-paper-raised p-4 print-avoid-break viz-shell">
      <div className="no-print flex flex-wrap items-center justify-center gap-2">
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") doInsert();
          }}
          aria-label="Key (number)"
          placeholder="key"
          className={inputCls}
        />
        <button type="button" onClick={doInsert} className={btnPrimary}>
          <Plus className="size-4" aria-hidden />
          Insert
        </button>
        <button type="button" onClick={doSearch} className={btnGhost}>
          <Search className="size-4" aria-hidden />
          Search
        </button>
        <button type="button" onClick={doDelete} className={btnGhost}>
          <Trash2 className="size-4" aria-hidden />
          Delete
        </button>
        <button type="button" onClick={reset} className={btnGhost}>
          <RotateCw className="size-4" aria-hidden />
          Reset
        </button>
      </div>

      <div
        className="mt-4 grid grid-cols-11 gap-1.5"
        role="img"
        aria-label={`Hash table of ${SIZE} slots, ${filledCount} filled, index = key mod ${SIZE}`}
      >
        {cells.map((c, i) => {
          const probing = i === probe;
          const hitHere = hit !== null && hit.idx === i;
          let cls = "border-hairline bg-paper text-ink-faint";
          let val = "·";
          if (c.state === "filled") {
            cls = "border-hairline-strong bg-paper-sunken text-ink";
            val = String(c.key);
          } else if (c.state === "del") {
            cls = "border-dashed border-danger bg-paper text-ink-faint";
            val = "del";
          }
          if (probing) cls = "border-warn bg-warn-soft text-ink";
          if (hitHere)
            cls =
              hit!.tone === "ok"
                ? "border-ok bg-ok-soft text-ink"
                : "border-danger bg-danger-soft text-ink";
          return (
            <div
              key={i}
              className={`flex h-14 flex-col items-center justify-center rounded-md border transition-colors duration-150 ${cls}`}
            >
              <span className="font-mono text-[10px] leading-none text-ink-faint">[{i}]</span>
              <span className="mt-1 font-mono text-sm leading-none">{val}</span>
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
