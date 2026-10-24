"use client";

import { useState, type FormEvent } from "react";
import { StepPlayer } from "./step-player";
import {
  recordPostfixEval,
  tokenizePostfix,
  PostfixError,
  type PostfixStep,
} from "./player-steps";
import { btnPrimary } from "./viz-ui";

/**
 * (c) Postfix evaluation player.
 *
 * Scans tokens left → right on a visual stack: operands push (slide in),
 * operators pop two (the FIRST pop is highlighted as the RIGHT operand),
 * apply, and push the intermediate result. Steps come from the real stack
 * algorithm (player-steps.recordPostfixEval), so the trace is exact.
 *
 * The expression is editable: invalid input (stack underflow, unknown
 * tokens, leftover operands) shows a friendly error without crashing.
 * Default example: 5 3 + 8 2 - * = 48.
 */
const DEFAULT_EXPR = "5 3 + 8 2 - *";

interface Built {
  tokens: string[];
  steps: PostfixStep[];
}

function build(expr: string): Built {
  const tokens = tokenizePostfix(expr);
  return { tokens, steps: recordPostfixEval(tokens) };
}

function errText(e: unknown): string {
  return e instanceof PostfixError
    ? e.message
    : "Could not evaluate that expression.";
}

export function PostfixEvalPlayer({ caption }: { caption?: string }) {
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
          Postfix evaluation player
        </p>
        <ExpressionForm input={input} setInput={setInput} onSubmit={submit} />
        <p role="alert" className="viz-status danger mt-3">
          {error}
        </p>
        <button type="button" className={`${btnPrimary} mt-2`} onClick={() => load(DEFAULT_EXPR)}>
          Reset to 5 3 + 8 2 - *
        </button>
      </figure>
    );
  }

  const { steps, tokens } = built;

  return (
    <StepPlayer<PostfixStep>
      steps={steps}
      describe={(s) => s.desc}
      render={(s) => (
        <PostfixStage step={s} tokens={tokens} />
      )}
      title="Postfix evaluation player"
      baseInterval={850}
      resetKey={tokens.join(" ")}
      caption={caption}
      footer={
        <div className="mt-3 border-t border-hairline pt-3">
          <ExpressionForm input={input} setInput={setInput} onSubmit={submit} />
          <div className="mt-2 flex flex-wrap items-center gap-2">
            {["5 3 + 8 2 - *", "2 3 4 * +", "6 2 / 3 - 4 +"].map((ex) => (
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

function PostfixStage({ step, tokens }: { step: PostfixStep; tokens: string[] }) {
  const popped = step.popped; // [right, left] during operator steps
  const isOperatorStep = popped !== undefined;
  const stackLen = step.stack.length;

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

      <div className="grid items-start gap-4 sm:grid-cols-[minmax(0,1fr)_auto]">
        {/* visual stack (top on the right end) */}
        <div>
          <p className="mb-1.5 text-caption font-semibold uppercase tracking-wider text-ink-faint">
            Stack <span className="normal-case">(top →)</span>
          </p>
          <div className="flex min-h-[3.2rem] flex-wrap-reverse items-center gap-1.5" aria-label="Operand stack">
            {step.stack.length === 0 ? (
              <span className="font-mono text-caption text-ink-faint">empty</span>
            ) : (
              step.stack.map((v, i) => {
                const isTop = i === stackLen - 1;
                const justPushed =
                  isTop && step.result !== undefined && step.current !== null;
                return (
                  <span
                    key={`${i}-${v}`}
                    className={`sp-stack-item sp-in flex h-9 min-w-[2.4rem] items-center justify-center rounded-md border-2 px-1.5 font-mono text-caption font-bold ${
                      isTop
                        ? "border-(--accent) bg-(--accent-soft) text-(--accent-ink)"
                        : "border-hairline bg-paper-raised text-ink"
                    } ${justPushed ? "ring-2 ring-(--ok)" : ""}`}
                  >
                    {v}
                  </span>
                );
              })
            )}
          </div>
          <p className="mt-1 font-mono text-caption text-ink-faint">
            {isOperatorStep
              ? `popped: ${popped[0]} (right), ${popped[1]} (left)`
              : "\u00a0"}
          </p>
        </div>

        {/* popped operands + result panel */}
        <div className="flex flex-col gap-2 sm:min-w-[13rem]">
          {isOperatorStep ? (
            <div className="rounded-lg border border-hairline bg-paper-sunken p-3">
              <p className="mb-1 text-caption font-semibold uppercase tracking-wider text-ink-faint">
                Pop order matters
              </p>
              <p className="font-mono text-sm text-ink">
                1st pop = <b className="text-(--danger)">{popped[0]}</b> (RIGHT)
                <br />
                2nd pop = <b className="text-(--ok)">{popped[1]}</b> (LEFT)
              </p>
            </div>
          ) : null}
          {step.result !== undefined ? (
            <div className="rounded-lg border border-(--ok) bg-ok-soft p-3">
              <p className="text-caption font-semibold uppercase tracking-wider text-ok">
                Intermediate result
              </p>
              <p className="font-mono text-lg font-bold text-ok">{step.result}</p>
            </div>
          ) : null}
          {step.consumed === tokens.length && step.stack.length === 1 ? (
            <div className="rounded-lg border-2 border-(--ok) bg-ok-soft p-3">
              <p className="text-caption font-semibold uppercase tracking-wider text-ok">
                Answer
              </p>
              <p className="font-mono text-2xl font-bold text-ok">
                {step.stack[0]}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
