/**
 * Shared UI class strings for every visualizer widget (reference design
 * system: indigo primary buttons, ghost buttons with 2px edges, pill
 * chips, mono console status lines). One place to change them all.
 */

export const btnPrimary =
  "btn btn-primary disabled:pointer-events-none inline-flex items-center gap-1.5 px-3";

export const btnDanger =
  "btn btn-danger disabled:pointer-events-none inline-flex items-center gap-1.5 px-3";

export const btnGhost =
  "btn btn-ghost disabled:pointer-events-none inline-flex items-center gap-1.5 px-3";

export const inputCls = "input-viz w-44";

export const chipCls = "chip";

/** Status-line tone → class. */
export function statusCls(tone: "default" | "ok" | "warn" | "danger") {
  return `viz-status ${tone}`;
}
