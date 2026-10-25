"use client";

import { useMemo, useState, type FormEvent } from "react";
import { AlertTriangle, Lightbulb, PartyPopper } from "lucide-react";
import { StepPlayer } from "./step-player";
import {
  recordPostfixEval,
  tokenizePostfix,
  type PostfixFrame,
  type PostfixPhase,
} from "./player-steps";
import { btnPrimary } from "./viz-ui";

/**
 * (c) Postfix evaluation player · fine-grained rebuild · STABLE LAYOUT.
 *
 * The frame sequence comes from the REAL algorithm (recordPostfixEval):
 * every token contributes multiple sub-frames · operands are read, lifted
 * off the expression and pushed; operators pop into labelled RIGHT/LEFT
 * slots, build the equation (so the pop order is visible), compute, and
 * push the result back. Errors (underflow / bad token / leftovers) are
 * terminal frames you can step through, not crashes.
 *
 * LAYOUT CONTRACT (never changes size between frames):
 *   [tokens strip]  — chips restyle in place, count is fixed per expression
 *   [stage row]     — fixed-width, fixed-height stack | two reserved slots:
 *                     · WHY slot   (fixed height, long text scrolls inside)
 *                     · WORK slot  (fixed height; operator panel, answer
 *                       badge and error alert swap INSIDE it as layers)
 *   [status line]   — fixed height (reserved by StepPlayer)
 *   [controls]      — constant position, always
 *   [input]         — expression form + examples
 *
 * The stack column is sized for the DEEPEST stack of the current
 * expression (precomputed from the recording), items animate in/out
 * inside that reserved box, and the "n items" counter never wraps.
 * Everything animates with transform/opacity only and honours
 * prefers-reduced-motion + the shared speed control.
 */
const DEFAULT_EXPR = "5 3 + 8 2 - *";

const EXAMPLES: { expr: string; label: string }[] = [
  { expr: "5 3 + 8 2 - *", label: "5 3 + 8 2 - *" },
  { expr: "2 3 4 * +", label: "2 3 4 * +" },
  { expr: "6 2 / 3 - 4 +", label: "6 2 / 3 - 4 +" },
  { expr: "5 +", label: "5 +  (underflow)" },
  { expr: "5 3", label: "5 3  (leftovers)" },
];

/** Phases that belong to an operator's pop/combine sequence. */
const OP_PHASES: PostfixPhase[] = [
  "pop-right",
  "pop-left",
  "equation",
  "compute",
  "push-result",
];

/** Stack item height (h-10) + row gap (gap-1.5) in px. */
const STACK_ROW = 46;

function fmt(n: number): string {
  return Number.isInteger(n) ? String(n) : String(Math.round(n * 100) / 100);
}

function opSym(t: string): string {
  return t === "-" ? "−" : t === "*" ? "×" : t === "/" ? "÷" : t;
}

interface Built {
  tokens: string[];
  frames: PostfixFrame[];
  /** Deepest stack across the recording — sizes the fixed stack slot. */
  maxDepth: number;
}

function build(expr: string): Built {
  const tokens = tokenizePostfix(expr);
  const frames = recordPostfixEval(tokens);
  const maxDepth = Math.max(1, ...frames.map((f) => f.stack.length));
  return { tokens, frames, maxDepth };
}

export function PostfixEvalPlayer({
  caption,
  initialExpr,
}: {
  caption?: string;
  /** Optional starting expression (fullscreen route: ?expr=…). */
  initialExpr?: string;
}) {
  const startExpr = initialExpr && initialExpr.trim() ? initialExpr : DEFAULT_EXPR;
  const [built, setBuilt] = useState<Built>(() => build(startExpr));
  const [input, setInput] = useState(startExpr);

  const load = (ex: string) => {
    setInput(ex);
    setBuilt(build(ex));
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    load(input);
  };

  const { frames, tokens, maxDepth } = built;

  return (
    <StepPlayer<PostfixFrame>
      steps={frames}
      describe={(s) => s.desc}
      render={(s) => <PostfixStage frame={s} tokens={tokens} maxDepth={maxDepth} />}
      title="Postfix evaluation player"
      baseInterval={850}
      resetKey={tokens.join(" ")}
      caption={caption}
      footer={
        <div className="mt-3 border-t border-hairline pt-3">
          <ExpressionForm input={input} setInput={setInput} onSubmit={submit} />
          <div className="mt-2 flex flex-wrap items-center gap-2">
            {EXAMPLES.map((ex) => (
              <button
                key={ex.expr}
                type="button"
                className="chip"
                onClick={() => load(ex.expr)}
                title={ex.label}
              >
                {ex.label}
              </button>
            ))}
          </div>
        </div>
      }
    />
  );
}

function ExpressionForm({
  input,
  setInput,
  onSubmit,
}: {
  input: string;
  setInput: (v: string) => void;
  onSubmit: (e: FormEvent) => void;
}) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2 sm:flex-row sm:items-center no-print">
      <label
        htmlFor="postfix-expr"
        className="shrink-0 text-caption font-semibold text-ink-muted"
      >
        Postfix expression
      </label>
      <input
        id="postfix-expr"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        spellCheck={false}
        autoComplete="off"
        className="input-viz min-w-0 flex-1 font-mono"
        placeholder="e.g. 5 3 + 8 2 - *"
        aria-describedby="postfix-expr-help"
      />
      <button type="submit" className={`${btnPrimary} shrink-0`}>
        Evaluate
      </button>
      <span id="postfix-expr-help" className="sr-only">
        Space-separated numbers and operators + - * /. Press Evaluate to reload the player.
      </span>
    </form>
  );
}

/* ------------------------------------------------------------------ */
/* Stage — fixed named regions; content swaps inside reserved slots     */
/* ------------------------------------------------------------------ */

function PostfixStage({
  frame,
  tokens,
  maxDepth,
}: {
  frame: PostfixFrame;
  tokens: string[];
  maxDepth: number;
}) {
  const inOp = OP_PHASES.includes(frame.phase);
  const opVisible = inOp || frame.phase === "read-operator";
  const animating = frame.phase === "push" || frame.phase === "push-result";

  return (
    <div className="flex flex-col gap-4">
      {/* [tokens strip] — chips restyle in place; height fixed per expression */}
      <div className="flex min-h-[1.75rem] flex-wrap items-center gap-1.5" aria-label="Tokens">
        {tokens.map((t, i) => {
          const done =
            i < frame.tokenIndex ||
            frame.phase === "done" ||
            (frame.phase === "error" && frame.error?.kind === "leftover");
          const current = i === frame.tokenIndex;
          return (
            <span
              key={i}
              className={`sp-token rounded-md border px-2 py-0.5 font-mono text-caption ${
                current
                  ? "border-(--accent) bg-(--accent-soft) font-bold text-(--accent-ink)"
                  : done
                    ? "border-hairline text-ink-faint opacity-55"
                    : "border-hairline text-ink-muted"
              } ${current && animating ? "pf-token-lift" : ""}`}
            >
              {t}
            </span>
          );
        })}
        {tokens.length === 0 ? (
          <span className="font-mono text-caption text-ink-faint">empty expression</span>
        ) : null}
      </div>

      {/* [stage row] — stack (fixed) | right column (two reserved slots) */}
      <div className="grid items-start gap-4 sm:grid-cols-[9.5rem_minmax(0,1fr)]">
        {/* VERTICAL stack · fixed width + height sized for maxDepth ·
            items animate in and out INSIDE the reserved box */}
        <div className="flex flex-col">
          <p className="mb-1.5 text-caption font-semibold uppercase tracking-wider text-ink-faint">
            Operand stack
          </p>
          <div className="pf-stack mx-auto w-full rounded-lg border border-hairline bg-paper-sunken p-2.5">
            <p className="mb-1.5 flex items-center gap-1.5 whitespace-nowrap text-caption font-bold uppercase tracking-wider text-(--accent-ink)">
              <span aria-hidden className="inline-block h-3.5 w-px bg-(--accent)" />
              TOP of stack
            </p>
            {/* reserved box: maxDepth rows tall, never resizes between frames */}
            <div
              className="flex flex-col justify-start gap-1.5"
              style={{ height: maxDepth * STACK_ROW - 6 }}
              aria-label="Operand stack, top to bottom"
            >
              {frame.stack.length === 0 ? (
                <span className="py-2 font-mono text-caption text-ink-faint">(empty)</span>
              ) : (
                [...frame.stack]
                  .map((v, i) => ({ v, i }))
                  .reverse()
                  .map(({ v, i }) => {
                    const isTop = i === frame.stack.length - 1;
                    const justPushed = i === frame.pushIndex && animating;
                    return (
                      <span
                        key={`${i}-${v}`}
                        className={`sp-stack-item flex h-10 items-center justify-center rounded-md border-2 px-3 font-mono text-caption font-bold ${
                          isTop
                            ? "border-(--accent) bg-(--accent-soft) text-(--accent-ink)"
                            : "border-hairline bg-paper-raised text-ink"
                        } ${justPushed ? "pf-push-in ring-2 ring-(--ok)" : ""}`}
                      >
                        {fmt(v)}
                      </span>
                    );
                  })
              )}
            </div>
            <p className="mt-1.5 whitespace-nowrap text-right font-mono text-[0.62rem] uppercase tracking-wide text-ink-faint">
              bottom
            </p>
          </div>
          {/* counter — one line, never wraps */}
          <p className="mt-1.5 whitespace-nowrap text-center font-mono text-caption text-ink-faint">
            {frame.stack.length} item{frame.stack.length === 1 ? "" : "s"}
          </p>
        </div>

        {/* right column — WHY slot + WORK slot, both fixed height */}
        <div className="flex min-w-0 flex-col gap-2.5">
          {/* WHY slot: reserved height, long text scrolls inside */}
          <div className="rounded-lg border border-l-4 border-(--accent) border-l-(--accent) bg-paper-sunken p-3">
            <p className="mb-1 flex items-center gap-1.5 text-caption font-semibold uppercase tracking-wider text-(--accent-ink)">
              <Lightbulb className="size-3.5 shrink-0" aria-hidden />
              Why this happens
            </p>
            <p className="h-[5.2rem] overflow-y-auto text-caption leading-relaxed text-ink thin-scroll">
              {frame.why}
            </p>
          </div>

          {/* WORK slot: one fixed-height box; the operator panel, the
              final answer and errors swap INSIDE it as layers — the box
              (and therefore the whole player) never changes size. */}
          <div className="relative rounded-lg border border-hairline bg-paper-raised p-3">
            <div className="flex min-h-[9.2rem] flex-col">
              {/* layer: operator slots + equation (dimmed when idle) */}
              <div
                className={`flex min-h-0 flex-1 flex-col transition-opacity duration-200 ${
                  opVisible ? "opacity-100" : "opacity-30"
                }`}
                aria-hidden={!opVisible}
              >
                <p className="mb-2 text-caption font-semibold uppercase tracking-wider text-ink-faint">
                  Pop order matters
                </p>
                <div className="flex items-center justify-center gap-2 font-mono">
                  <Slot label="LEFT" sub="pop #2" tone="ok" value={frame.left} />
                  <span className="text-xl font-bold text-(--accent)" aria-hidden>
                    {frame.token ? opSym(frame.token) : "·"}
                  </span>
                  <Slot label="RIGHT" sub="pop #1" tone="danger" value={frame.right} />
                </div>
                {/* equation line — ALWAYS mounted in its reserved row
                    (placeholder dot when not computed yet) so the slot
                    never changes height */}
                <p
                  className={`mt-2.5 min-h-[1.55rem] text-center font-mono text-sm font-bold ${
                    frame.phase === "compute" || frame.phase === "push-result"
                      ? "text-ok pf-celebrate"
                      : "text-ink-muted"
                  }`}
                >
                  {frame.result !== null ? (
                    <>
                      {fmt(frame.left!)} {opSym(frame.token!)} {fmt(frame.right!)} ={" "}
                      <b className="text-ok">{fmt(frame.result)}</b>
                    </>
                  ) : (
                    <span className="text-ink-faint" aria-hidden>
                      ·
                    </span>
                  )}
                </p>
              </div>
            </div>

            {/* layer: final answer — overlay badge INSIDE the work slot */}
            {frame.phase === "done" ? (
              <div className="pf-layer-in absolute inset-0 flex flex-col items-center justify-center gap-1 rounded-lg border-2 border-(--ok) bg-ok-soft p-3">
                <p className="flex items-center gap-1.5 text-caption font-semibold uppercase tracking-wider text-ok">
                  <PartyPopper className="size-4" aria-hidden />
                  Answer
                </p>
                <p className="font-mono text-3xl font-bold text-ok">
                  {fmt(frame.answer!)}
                </p>
              </div>
            ) : null}

            {/* layer: terminal error — also inside the work slot */}
            {frame.phase === "error" ? (
              <div
                role="alert"
                className="pf-layer-in absolute inset-0 flex flex-col items-center justify-center gap-1 overflow-y-auto rounded-lg border-2 border-(--danger) bg-danger-soft p-3 thin-scroll"
              >
                <p className="flex items-center gap-1.5 text-caption font-semibold uppercase tracking-wider text-danger">
                  <AlertTriangle className="size-4" aria-hidden />
                  {frame.error?.kind === "underflow"
                    ? "Stack underflow"
                    : frame.error?.kind === "invalid-token"
                      ? "Invalid token"
                      : "Leftover operands"}
                </p>
                <p className="max-h-[5.4rem] text-center text-caption leading-relaxed text-ink thin-scroll">
                  {frame.error?.message}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

function Slot({
  label,
  sub,
  tone,
  value,
}: {
  label: string;
  sub: string;
  tone: "ok" | "danger";
  value: number | null;
}) {
  const labelCls = tone === "ok" ? "text-ok" : "text-danger";
  const boxCls =
    value !== null
      ? tone === "ok"
        ? "pf-slot-in border-(--ok) bg-ok-soft text-ink"
        : "pf-slot-in border-(--danger) bg-danger-soft text-ink"
      : "border-dashed border-hairline-strong text-ink-faint";
  return (
    <span className="flex flex-col items-center gap-1">
      <span className={`font-mono text-[0.6rem] font-bold uppercase tracking-wide ${labelCls}`}>
        {label}
        <span className="ml-1 font-normal text-ink-faint">({sub})</span>
      </span>
      <span
        className={`flex h-10 min-w-[3.6rem] items-center justify-center rounded-md border-2 font-mono text-sm font-bold ${boxCls}`}
      >
        {value !== null ? fmt(value) : "·"}
      </span>
    </span>
  );
}
