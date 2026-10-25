"use client";

import { useState, type FormEvent } from "react";
import { StepPlayer } from "./step-player";
import {
  recordInfixToPostfix,
  tokenizeInfix,
  PostfixError,
  type InfixPostfixStep,
} from "./player-steps";
import { btnPrimary } from "./viz-ui";

/**
 * (d) Infix → postfix conversion player (the shunting-yard stack method
 * behind the chapter's "Converting infix → postfix" trace table).
 *
 * Operands go straight to the output; operators wait on a visual operator
 * stack (higher-or-equal precedence pops first); parentheses pop until
 * the matching "(". Steps come from the real algorithm
 * (player-steps.recordInfixToPostfix).
 *
 * Default example: A + B * C - D → A B C * + D −
 */
const DEFAULT_EXPR = "A + B * C - D";

interface Built {
  tokens: string[];
  steps: InfixPostfixStep[];
  /** Deepest operator stack — sizes the fixed stack slot. */
  maxDepth: number;
}

function build(expr: string): Built {
  const tokens = tokenizeInfix(expr);
  const steps = recordInfixToPostfix(tokens);
  const maxDepth = Math.max(1, ...steps.map((s) => s.stack.length));
  return { tokens, steps, maxDepth };
}

function errText(e: unknown): string {
  return e instanceof PostfixError
    ? e.message
    : "Could not convert that expression.";
}

export function InfixPostfixPlayer({ caption }: { caption?: string }) {
  const [built, setBuilt] = useState<Built>(() => build(DEFAULT_EXPR));
  const [input, setInput] = useState(DEFAULT_EXPR);
  const [error, setError] = useState<string | null>(null);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    try {
      setBuilt(build(input));
      setError(null);
    } catch (e) {
      setError(errText(e));
    }
  };

  const load = (ex: string) => {
    setInput(ex);
    try {
      setBuilt(build(ex));
      setError(null);
    } catch (e) {
      setError(errText(e));
    }
  };

  if (error) {
    return (
      <figure className="viz-shell print-avoid-break my-6 border border-hairline p-4">
        <p className="mb-2 text-caption font-semibold uppercase tracking-wider text-ink-faint">
          Infix → postfix player
        </p>
        <InfixForm input={input} setInput={setInput} onSubmit={submit} />
        <p role="alert" className="viz-status danger mt-3">
          {error}
        </p>
        <button type="button" className={`${btnPrimary} mt-2`} onClick={() => load(DEFAULT_EXPR)}>
          Reset to A + B * C - D
        </button>
      </figure>
    );
  }

  const { steps, tokens } = built;

  return (
    <StepPlayer<InfixPostfixStep>
      steps={steps}
      describe={(s) => s.desc}
      render={(s) => <InfixStage step={s} tokens={tokens} maxDepth={built.maxDepth} />}
      title="Infix → postfix player"
      baseInterval={1000}
      resetKey={tokens.join(" ")}
      caption={caption}
      footer={
        <div className="mt-3 border-t border-hairline pt-3">
          <InfixForm input={input} setInput={setInput} onSubmit={submit} />
          <div className="mt-2 flex flex-wrap items-center gap-2">
            {["A + B * C - D", "( A + B ) * C", "A ^ B * C"].map((ex) => (
              <button key={ex} type="button" className="chip" onClick={() => load(ex)}>
                {ex}
              </button>
            ))}
          </div>
        </div>
      }
    />
  );
}

function InfixForm({
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
      <label htmlFor="infix-expr" className="shrink-0 text-caption font-semibold text-ink-muted">
        Infix expression
      </label>
      <input
        id="infix-expr"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        spellCheck={false}
        autoComplete="off"
        className="input-viz min-w-0 flex-1 font-mono"
        placeholder="e.g. A + B * C - D"
      />
      <button type="submit" className={`${btnPrimary} shrink-0`}>
        Convert
      </button>
    </form>
  );
}

function InfixStage({
  step,
  tokens,
  maxDepth,
}: {
  step: InfixPostfixStep;
  tokens: string[];
  maxDepth: number;
}) {
  return (
    <div className="flex flex-col gap-4">
      {/* token strip */}
      <div className="flex flex-wrap items-center gap-1.5" aria-label="Tokens">
        {tokens.map((t, i) => {
          const consumed = i < step.consumed;
          const current = i === step.consumed - 1 && step.current !== null;
          return (
            <span
              key={i}
              className={`sp-token rounded-md border px-2 py-0.5 font-mono text-caption ${
                current
                  ? "border-(--accent) bg-(--accent-soft) font-bold text-(--accent-ink)"
                  : consumed
                    ? "border-hairline text-ink-faint opacity-55"
                    : "border-hairline text-ink-muted"
              }`}
            >
              {t}
            </span>
          );
        })}
      </div>

      <div className="grid items-start gap-4 sm:grid-cols-2">
        {/* operator stack (top on top) — fixed slot sized for the
            deepest stack of this expression; items swap inside */}
        <div>
          <p className="mb-1.5 text-caption font-semibold uppercase tracking-wider text-ink-faint">
            Operator stack <span className="normal-case">(top ↑)</span>
          </p>
          <div
            className="flex flex-col-reverse justify-start gap-1"
            style={{ height: maxDepth * 36 - 4 }}
            aria-label="Operator stack"
          >
            {step.stack.length === 0 ? (
              <span className="font-mono text-caption text-ink-faint">empty</span>
            ) : (
              step.stack.map((t, i) => {
                const isTop = i === step.stack.length - 1;
                return (
                  <span
                    key={`${i}-${t}`}
                    className={`sp-stack-item sp-in inline-flex h-8 w-10 items-center justify-center rounded-md border-2 font-mono text-caption font-bold ${
                      isTop
                        ? "border-(--accent) bg-(--accent-soft) text-(--accent-ink)"
                        : "border-hairline bg-paper-raised text-ink"
                    }`}
                  >
                    {t}
                  </span>
                );
              })
            )}
          </div>
        </div>

        {/* output */}
        <div>
          <p className="mb-1.5 text-caption font-semibold uppercase tracking-wider text-ink-faint">
            Output
          </p>
          <p className="min-h-[3.2rem] rounded-md border border-hairline bg-paper-sunken px-2.5 py-1.5 font-mono text-caption leading-7 break-words text-ink">
            {step.output.length ? step.output.join(" ") : "\u00a0"}
          </p>
        </div>
      </div>
    </div>
  );
}
