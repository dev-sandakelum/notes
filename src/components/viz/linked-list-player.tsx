"use client";

import { useMemo, useState } from "react";
import { ArrowLeftRight, Lightbulb, Search, Trash2, Undo2 } from "lucide-react";
import { StepPlayer } from "./step-player";
import {
  recordLinkedListOp,
  defaultLinkedList,
  type LinkedListFrame,
  type LinkedListOp,
  type ListKind,
  type LLNodeData,
  LL_NULL,
} from "./player-steps";
import { btnGhost, btnPrimary } from "./viz-ui";

/**
 * Linked list operations player (singly + doubly).
 *
 * Every operation (insert head/tail/position, delete, search, reverse) is
 * RECORDED from the real C-style pointer updates · in the exact order the
 * pointers are rewired (new->next BEFORE head = new) · and replayed frame
 * by frame on the shared StepPlayer. Nodes, arrows, HEAD/TAIL pointers and
 * the floating "new" node narrate each frame; the list carries over
 * between operations so you can build and tear it down step by step.
 */
type OpName = LinkedListOp["op"];

const OPS: { name: OpName; label: string; needsValue: boolean; needsPos?: boolean }[] = [
  { name: "insertHead", label: "Insert head", needsValue: true },
  { name: "insertTail", label: "Insert tail", needsValue: true },
  { name: "insertAt", label: "Insert at", needsValue: true, needsPos: true },
  { name: "deleteValue", label: "Delete", needsValue: true },
  { name: "search", label: "Search", needsValue: true },
  { name: "reverse", label: "Reverse", needsValue: false },
];

export function LinkedListPlayer({ caption }: { caption?: string }) {
  const [kind, setKind] = useState<ListKind>("singly");
  const [list, setList] = useState<LLNodeData[]>(defaultLinkedList);
  const [value, setValue] = useState("7");
  const [position, setPosition] = useState("2");
  const [recording, setRecording] = useState(() => ({
    frames: recordLinkedListOp(defaultLinkedList(), "singly", { op: "search", value: 37 }),
    id: 0,
  }));

  const run = (oper: LinkedListOp) => {
    const frames = recordLinkedListOp(list, kind, oper);
    // The recording's final frame IS the deterministic outcome · commit it
    // immediately; playback is purely visualisation of the pointer updates.
    setList(frames[frames.length - 1].list);
    setRecording((r) => ({ frames, id: r.id + 1 }));
  };

  const toggleKind = (k: ListKind) => {
    if (k === kind) return;
    setKind(k);
    const frames = recordLinkedListOp(list, k, { op: "search", value: list[0]?.value ?? 0 });
    setRecording((r) => ({ frames, id: r.id + 1 }));
  };

  const reset = () => {
    const fresh = defaultLinkedList();
    setList(fresh);
    setRecording((r) => ({
      frames: recordLinkedListOp(fresh, kind, { op: "search", value: 37 }),
      id: r.id + 1,
    }));
  };

  const numericValue = Number(value);
  const canRun = Number.isFinite(numericValue);

  const toolbar = (
    <div
      role="group"
      aria-label="List type"
      className="flex overflow-hidden rounded-full border border-hairline text-caption"
    >
      {(["singly", "doubly"] as const).map((k) => (
        <button
          key={k}
          type="button"
          aria-pressed={kind === k}
          onClick={() => toggleKind(k)}
          className={`px-3 py-1 font-medium transition-colors duration-150 ${
            kind === k
              ? "bg-(--accent) text-white"
              : "bg-paper-raised text-ink-muted hover:text-ink"
          }`}
        >
          {k === "singly" ? "Singly" : "Doubly"}
        </button>
      ))}
    </div>
  );

  return (
    <StepPlayer<LinkedListFrame>
      steps={recording.frames}
      describe={(s) => s.desc}
      render={(s) => <ListStage frame={s} />}
      title="Linked list operations"
      baseInterval={950}
      resetKey={recording.id}
      caption={caption}
      toolbar={toolbar}
      footer={
        <div className="mt-3 border-t border-hairline pt-3 no-print">
          <div className="flex flex-wrap items-center gap-2">
            <label className="flex items-center gap-1.5 text-caption font-semibold text-ink-muted">
              Value
              <input
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="input-viz w-20 font-mono"
                aria-label="Node value"
              />
            </label>
            <label className="flex items-center gap-1.5 text-caption font-semibold text-ink-muted">
              Pos
              <input
                type="number"
                min={1}
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                className="input-viz w-16 font-mono"
                aria-label="Insert position (1-based)"
              />
            </label>
            <span className="flex flex-wrap gap-1.5">
              {OPS.filter((o) => !(o.name === "reverse" && kind === "doubly")).map((o) => (
                <button
                  key={o.name}
                  type="button"
                  disabled={!canRun && o.needsValue}
                  onClick={() => {
                    const v = Number(value);
                    if (o.name === "insertAt") {
                      const pos = Math.max(1, Number(position) || 1);
                      run({ op: "insertAt", value: v, position: pos });
                    } else if (o.name === "reverse") {
                      run({ op: "reverse" });
                    } else {
                      run({ op: o.name, value: v });
                    }
                  }}
                  className={o.name === "deleteValue" ? btnGhost : btnPrimary}
                >
                  {o.name === "deleteValue" ? (
                    <Trash2 className="size-3.5" aria-hidden />
                  ) : o.name === "search" ? (
                    <Search className="size-3.5" aria-hidden />
                  ) : o.name === "reverse" ? (
                    <ArrowLeftRight className="size-3.5" aria-hidden />
                  ) : null}
                  {o.label}
                </button>
              ))}
            </span>
            <button type="button" onClick={reset} className={`${btnGhost} ml-auto`}>
              <Undo2 className="size-3.5" aria-hidden />
              Reset list
            </button>
          </div>
          <p className="mt-2 text-caption text-ink-faint">
            Pick an operation · the frames come from the real pointer updates, in
            the exact order C code rewires them.
          </p>
        </div>
      }
    />
  );
}

/* ------------------------------------------------------------------ */
/* Stage: node boxes, arrows, HEAD/TAIL/curr/prev, floating new node     */
/* ------------------------------------------------------------------ */

function ListStage({ frame }: { frame: LinkedListFrame }) {
  const doubly = frame.kind === "doubly";
  const byId = useMemo(
    () => new Map(frame.list.map((n) => [n.id, n])),
    [frame.list],
  );
  const label = (id: string | null): string =>
    id === null || id === LL_NULL ? "NULL" : String(byId.get(id)?.value ?? "?");

  return (
    <div className="flex flex-col gap-3">
      {/* the list */}
      <div className="overflow-x-auto thin-scroll pb-1">
        <div className="flex min-w-max items-end gap-1.5 px-1 pt-7">
          {frame.list.map((n, i) => {
            const isHead = frame.headId === n.id;
            const isTail = frame.tailId === n.id;
            const isCurr = frame.currId === n.id;
            const isPrev = frame.prevId === n.id;
            const isActive = frame.active.includes(n.id);
            const isRemoving = frame.removing.includes(n.id);
            /* reversed-link arrows: the RIGHT node's next points at its
               predecessor · that is what flips the arrow between the pair */
            const rightNode = frame.list[i + 1];
            const arrowBack = Boolean(rightNode && frame.flipped.includes(rightNode.id));
            return (
              <div key={n.id} className="flex items-end gap-1.5">
                <div className="flex flex-col items-center">
                  {/* HEAD / TAIL markers */}
                  <span className="flex h-6 flex-col items-center justify-end gap-0.5">
                    {isHead ? (
                      <span className="ll-pointer text-(--accent-ink)">HEAD ↓</span>
                    ) : null}
                    {isTail && !isHead ? (
                      <span className="ll-pointer text-(--visit)">TAIL ↓</span>
                    ) : null}
                    {isHead && isTail ? (
                      <span className="ll-pointer text-(--visit)">TAIL ↓</span>
                    ) : null}
                  </span>
                  <div
                    className={`ll-box flex overflow-hidden rounded-md border-2 ${
                      isRemoving
                        ? "ll-removing border-(--danger) bg-danger-soft"
                        : isActive
                          ? "border-(--accent) bg-(--accent-soft) ll-flash"
                          : "border-hairline bg-paper-raised"
                    }`}
                  >
                    {doubly ? (
                      <span className="ll-cell border-r border-hairline bg-paper-sunken font-mono text-[0.62rem] text-ink-faint">
                        {isPrev ? "prev●" : "prev●"}
                      </span>
                    ) : null}
                    <span className="ll-cell px-3 font-mono text-sm font-bold text-ink">
                      {n.value}
                    </span>
                    <span className="ll-cell border-l border-hairline bg-paper-sunken font-mono text-[0.62rem] text-ink-faint">
                      next●
                    </span>
                  </div>
                  {/* curr/prev markers */}
                  <span className="flex h-6 items-start gap-2">
                    {isCurr ? <span className="ll-pointer text-(--accent-ink)">curr</span> : null}
                    {isPrev ? <span className="ll-pointer text-(--visit)">prev</span> : null}
                  </span>
                </div>
                {/* arrow between nodes */}
                {i < frame.list.length - 1 ? (
                  <span
                    className={`pb-6 font-mono text-lg leading-none ${
                      arrowBack
                        ? "text-(--danger)"
                        : "text-ink-muted"
                    }`}
                    aria-hidden
                  >
                    {doubly ? "⇄" : arrowBack ? "←" : "→"}
                  </span>
                ) : null}
              </div>
            );
          })}
          {/* terminator */}
          <div className="flex flex-col items-center">
            <span className="h-6" aria-hidden />
            <span className="rounded-md border border-dashed border-hairline-strong px-2 py-1.5 font-mono text-[0.62rem] text-ink-faint">
              NULL
            </span>
            <span className="h-6" aria-hidden />
          </div>
        </div>
      </div>

      {/* floating new node + its links — FIXED slot so the stage never
          changes height when it appears/disappears (scrolls if long) */}
      <div className="h-[5.4rem] overflow-y-auto thin-scroll">
        {frame.newNode ? (
          <div className="ll-new-in flex flex-wrap items-center gap-2 rounded-lg border border-dashed border-(--accent) bg-(--accent-soft) p-2.5">
            <span className="text-caption font-semibold uppercase tracking-wider text-(--accent-ink)">
              new node
            </span>
            <span className="flex items-center gap-1.5 rounded-md border-2 border-(--accent) bg-paper-raised px-3 py-1 font-mono text-sm font-bold text-ink">
              {frame.newNode.value}
              <span className="border-l border-hairline pl-1.5 font-mono text-[0.62rem] font-normal text-ink-faint">
                next●
              </span>
            </span>
            <span className="font-mono text-caption text-ink-muted">
              new-&gt;next ={" "}
              <b className="text-(--accent-ink)">
                {frame.newNext === null ? "· (not set yet)" : label(frame.newNext)}
              </b>
              {doubly ? (
                <>
                  {" · new-&gt;prev = "}
                  <b className="text-(--visit)">
                    {frame.newPrev === null ? "· (not set yet)" : label(frame.newPrev)}
                  </b>
                </>
              ) : null}
            </span>
          </div>
        ) : null}
      </div>

      {/* C code being executed + why — both slots FIXED height
          (content swaps inside; text scrolls if long) */}
      <div className="grid gap-2.5 sm:grid-cols-[minmax(0,1fr)_minmax(12rem,auto)]">
        <pre className="h-[4.6rem] overflow-auto rounded-md border border-hairline bg-[var(--code-bg)] px-3 py-2 font-mono text-caption leading-relaxed text-[var(--code-ink)] thin-scroll">
          {frame.code ?? " "}
        </pre>
        <div className="h-[8.6rem] overflow-hidden rounded-lg border border-l-4 border-(--accent) border-l-(--accent) bg-paper-sunken p-2.5">
          <p className="mb-1 flex items-center gap-1.5 text-caption font-semibold uppercase tracking-wider text-(--accent-ink)">
            <Lightbulb className="size-3.5" aria-hidden />
            Why
          </p>
          <p className="h-[5.6rem] overflow-y-auto text-caption leading-relaxed text-ink thin-scroll">{frame.why ?? "\u00a0"}</p>
        </div>
      </div>
    </div>
  );
}
