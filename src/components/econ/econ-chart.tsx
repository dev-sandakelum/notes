"use client";

import { useMemo, useState } from "react";
import type { EconChartSpec, EconColor } from "@/content/types";
import { buildRenderModel, type RenderModel } from "./econ-chart-core";

/* ------------------------------------------------------------------ */
/* Theme mapping — everything goes through CSS variables so the chart  */
/* re-skins automatically in light and dark mode.                       */
/* ------------------------------------------------------------------ */

const COLOR_VAR: Record<EconColor | "ink", string> = {
  primary: "var(--fig-primary)",
  accent: "var(--fig-accent)",
  danger: "var(--danger)",
  success: "var(--ok)",
  warn: "var(--warn)",
  muted: "var(--fig-axis)",
  ink: "var(--ink)",
};

const REGION_FILL: Record<EconColor, string> = {
  primary: "var(--fig-primary)",
  accent: "var(--fig-accent)",
  danger: "var(--danger)",
  success: "var(--ok)",
  warn: "var(--warn)",
  muted: "var(--fig-axis)",
};

function pathFrom(points: [number, number][]): string {
  if (!points.length) return "";
  return (
    `M ${points[0][0].toFixed(2)} ${points[0][1].toFixed(2)}` +
    points
      .slice(1)
      .map((p) => ` L ${p[0].toFixed(2)} ${p[1].toFixed(2)}`)
      .join("")
  );
}

/* Unique marker ids per chart instance (multiple charts per page). */
let uidCounter = 0;

export function EconChart({ spec }: { spec: EconChartSpec }) {
  const model = useMemo(() => buildRenderModel(spec), [spec]);
  const [showNumbers, setShowNumbers] = useState(false);
  const [hover, setHover] = useState<{ x: number; y: number; text: string } | null>(null);
  const [uid] = useState(() => `ec${++uidCounter}`);

  const W = model.viewBox.w;
  const H = model.viewBox.h;
  const m = model;

  function onPointerMove(e: React.PointerEvent<SVGSVGElement>) {
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const scale = W / rect.width;
    const px = (e.clientX - rect.left) * scale;
    const py = (e.clientY - rect.top) * scale;
    let best: { d: number; p: RenderModel["points"][number] } | null = null;
    for (const p of m.points) {
      const d = Math.hypot(p.cx - px, p.cy - py);
      if (d < 22 && (!best || d < best.d)) best = { d, p };
    }
    if (best) {
      const text = `${best.p.label}${best.p.valueLabel ? ` ${best.p.valueLabel}` : ""}`;
      const flip = best.p.cx > W - 150;
      setHover({
        x: flip ? best.p.cx - 12 : best.p.cx + 12,
        y: best.p.cy - 12,
        text,
      });
    } else {
      setHover(null);
    }
  }

  const tooltipW = hover ? hover.text.length * 6.6 + 14 : 0;

  return (
    <figure className="print-avoid-break my-6 overflow-hidden rounded-xl border border-hairline bg-paper-raised shadow-card">
      <div className="overflow-x-auto thin-scroll">
        <div className="min-w-[560px] px-3 pb-1 pt-4">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            role="img"
            aria-label={spec.title}
            className="mx-auto block h-auto w-full max-w-[760px] select-none"
            onPointerMove={onPointerMove}
            onPointerLeave={() => setHover(null)}
          >
            <title>{spec.title}</title>
            <desc>{spec.desc}</desc>
            <defs>
              {(["muted", "primary", "accent", "danger", "success", "warn"] as const).map((c) => (
                <marker
                  key={c}
                  id={`${uid}-arr-${c}`}
                  viewBox="0 0 10 10"
                  refX="8.5"
                  refY="5"
                  markerWidth="6.5"
                  markerHeight="6.5"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" fill={COLOR_VAR[c]} />
                </marker>
              ))}
            </defs>

            {/* vertical zones */}
            {m.vZones.map((z, i) => (
              <g key={`vz-${i}`}>
                <rect
                  x={z.x1}
                  y={z.y1}
                  width={Math.max(0, z.x2 - z.x1)}
                  height={z.y2 - z.y1}
                  fill={REGION_FILL[z.color]}
                  opacity={0.07}
                />
                <text
                  x={z.labelPos.x}
                  y={z.labelPos.y}
                  textAnchor="middle"
                  fontSize={10.5}
                  fontWeight={700}
                  fill={COLOR_VAR[z.color]}
                  stroke="var(--paper-raised)"
                  strokeWidth={3}
                  paintOrder="stroke"
                >
                  {z.label}
                </text>
              </g>
            ))}

            {/* gridlines */}
            {m.ticksX.map((t, i) => (
              <line key={`gx-${i}`} x1={t.pos} y1={m.plot.y1} x2={t.pos} y2={m.plot.y2} stroke="var(--fig-soft)" strokeWidth={1} />
            ))}
            {m.ticksY.map((t, i) => (
              <line key={`gy-${i}`} x1={m.plot.x1} y1={t.pos} x2={m.plot.x2} y2={t.pos} stroke="var(--fig-soft)" strokeWidth={1} />
            ))}

            {/* shaded regions */}
            {m.regions.map((r, i) => (
              <g key={`rg-${i}`}>
                <polygon
                  points={r.points.map((p) => `${p[0].toFixed(2)},${p[1].toFixed(2)}`).join(" ")}
                  fill={REGION_FILL[r.color]}
                  opacity={r.opacity}
                />
                {r.leader ? (
                  <line
                    x1={r.leader.x1}
                    y1={r.leader.y1}
                    x2={r.leader.x2}
                    y2={r.leader.y2}
                    stroke={COLOR_VAR[r.color]}
                    strokeWidth={1}
                  />
                ) : null}
                <text
                  x={r.labelPos.x}
                  y={r.labelPos.y}
                  textAnchor="middle"
                  fontSize={10.5}
                  fontWeight={700}
                  fill={COLOR_VAR[r.color]}
                  stroke="var(--paper-raised)"
                  strokeWidth={3}
                  paintOrder="stroke"
                >
                  {r.valueLabel ? `${r.label} = ${r.valueLabel}` : r.label}
                </text>
              </g>
            ))}

            {/* bars */}
            {m.bars.map((b) => (
              <rect
                key={b.id}
                x={b.x}
                y={b.y}
                width={b.w}
                height={b.h}
                fill={b.negative ? "var(--danger)" : COLOR_VAR[b.color]}
                opacity={0.55}
              />
            ))}

            {/* guides (dashed) */}
            {m.guides.map((g, i) => (
              <line
                key={`gd-${i}`}
                x1={g.x1}
                y1={g.y1}
                x2={g.x2}
                y2={g.y2}
                stroke="var(--fig-axis)"
                strokeWidth={1.1}
                strokeDasharray="4 4"
              />
            ))}

            {/* reference lines */}
            {m.refLines.map((r, i) => (
              <g key={`rl-${i}`}>
                <line
                  x1={r.x1}
                  y1={r.y1}
                  x2={r.x2}
                  y2={r.y2}
                  stroke={COLOR_VAR[r.color]}
                  strokeWidth={1.6}
                  strokeDasharray={r.dash ? "7 5" : undefined}
                />
                <text
                  x={r.labelPos.x}
                  y={r.labelPos.y}
                  textAnchor={r.labelPos.anchor}
                  fontSize={10.5}
                  fontWeight={700}
                  fill={COLOR_VAR[r.color]}
                  stroke="var(--paper-raised)"
                  strokeWidth={3}
                  paintOrder="stroke"
                >
                  {r.label}
                </text>
              </g>
            ))}

            {/* curves */}
            {m.curves.map((c) =>
              c.runs.map((run, i) => (
                <path
                  key={`${c.id}-${i}`}
                  d={pathFrom(run)}
                  fill="none"
                  stroke={COLOR_VAR[c.color]}
                  strokeWidth={2.4 * c.weight}
                  strokeDasharray={c.dash ? "7 5" : undefined}
                  strokeLinecap="round"
                />
              )),
            )}

            {/* zero line */}
            {m.zeroLine ? (
              <line x1={m.zeroLine.x1} y1={m.zeroLine.y1} x2={m.zeroLine.x2} y2={m.zeroLine.y2} stroke="var(--ink-muted)" strokeWidth={1.4} />
            ) : null}

            {/* arrows */}
            {m.arrows.map((a, i) => (
              <g key={`ar-${i}`}>
                <line
                  x1={a.x1}
                  y1={a.y1}
                  x2={a.x2}
                  y2={a.y2}
                  stroke={COLOR_VAR[a.color]}
                  strokeWidth={2}
                  markerEnd={`url(#${uid}-arr-${a.color})`}
                  markerStart={a.double ? `url(#${uid}-arr-${a.color})` : undefined}
                />
                <text
                  x={a.labelPos.x}
                  y={a.labelPos.y}
                  textAnchor="middle"
                  fontSize={10.5}
                  fontWeight={700}
                  fill={COLOR_VAR[a.color]}
                  stroke="var(--paper-raised)"
                  strokeWidth={3}
                  paintOrder="stroke"
                >
                  {a.label}
                </text>
              </g>
            ))}

            {/* axes with arrowheads */}
            <line x1={m.plot.x1} y1={m.plot.y2} x2={m.plot.x2 + 7} y2={m.plot.y2} stroke="var(--fig-axis)" strokeWidth={1.5} />
            <line x1={m.plot.x1} y1={m.plot.y2} x2={m.plot.x1} y2={m.plot.y1 - 7} stroke="var(--fig-axis)" strokeWidth={1.5} />
            <polygon
              points={`${m.plot.x2 + 13},${m.plot.y2} ${m.plot.x2 + 5},${m.plot.y2 - 3.5} ${m.plot.x2 + 5},${m.plot.y2 + 3.5}`}
              fill="var(--fig-axis)"
            />
            <polygon
              points={`${m.plot.x1},${m.plot.y1 - 13} ${m.plot.x1 - 3.5},${m.plot.y1 - 5} ${m.plot.x1 + 3.5},${m.plot.y1 - 5}`}
              fill="var(--fig-axis)"
            />

            {/* ticks */}
            {m.ticksX.map((t, i) => (
              <g key={`tx-${i}`}>
                <line x1={t.pos} y1={m.plot.y2} x2={t.pos} y2={m.plot.y2 + 4} stroke="var(--fig-axis)" strokeWidth={1.2} />
                <text x={t.pos} y={m.plot.y2 + 14} textAnchor="middle" fontSize={10.5} fill="var(--ink-muted)">
                  {t.label}
                </text>
              </g>
            ))}
            {m.ticksY.map((t, i) => (
              <g key={`ty-${i}`}>
                <line x1={m.plot.x1 - 4} y1={t.pos} x2={m.plot.x1} y2={t.pos} stroke="var(--fig-axis)" strokeWidth={1.2} />
                <text x={m.plot.x1 - 7} y={t.pos + 3.5} textAnchor="end" fontSize={10.5} fill="var(--ink-muted)">
                  {t.label}
                </text>
              </g>
            ))}
            {/* origin */}
            <text x={m.plot.x1 - 7} y={m.plot.y2 + 14} textAnchor="end" fontSize={10.5} fill="var(--ink-muted)">
              0
            </text>

            {/* axis value labels (symbol + value at the axes) */}
            {m.axisValueLabels.map((av, i) =>
              av.axis === "x" ? (
                <g key={`axv-${i}`} textAnchor="middle" fontSize={10.5} fontWeight={700} fill="var(--ink)">
                  {av.symbol ? (
                    <text x={m.sx(av.pos)} y={m.plot.y2 + 27}>
                      {av.symbol}
                    </text>
                  ) : null}
                  <text x={m.sx(av.pos)} y={m.plot.y2 + 40}>
                    {av.value}
                  </text>
                </g>
              ) : (
                <g key={`ayv-${i}`} textAnchor="end" fontSize={10.5} fontWeight={700} fill="var(--ink)">
                  {av.symbol ? (
                    <text x={m.plot.x1 - 8} y={m.sy(av.pos) - 2}>
                      {av.symbol}
                    </text>
                  ) : null}
                  <text x={m.plot.x1 - 8} y={m.sy(av.pos) + 11}>
                    {av.value}
                  </text>
                </g>
              ),
            )}

            {/* axis titles */}
            <text x={(m.plot.x1 + m.plot.x2) / 2} y={m.plot.y2 + (m.axisValueLabels.some((l) => l.axis === "x") ? 57 : 31)} textAnchor="middle" fontSize={12} fill="var(--ink-muted)">
              {spec.x.label}
            </text>
            <text
              x={15}
              y={(m.plot.y1 + m.plot.y2) / 2}
              textAnchor="middle"
              fontSize={12}
              fill="var(--ink-muted)"
              transform={`rotate(-90 15 ${(m.plot.y1 + m.plot.y2) / 2})`}
            >
              {spec.y.label}
            </text>

            {/* bar value labels */}
            {m.bars.map((b) => (
              <text
                key={`bl-${b.id}`}
                x={b.labelPos.x}
                y={b.labelPos.y}
                textAnchor="middle"
                fontSize={9.5}
                fontWeight={700}
                fill={b.negative ? "var(--danger)" : COLOR_VAR[b.color]}
                stroke="var(--paper-raised)"
                strokeWidth={3}
                paintOrder="stroke"
              >
                {b.valueLabel}
              </text>
            ))}

            {/* curve labels */}
            {m.curves.map((c) =>
              c.labelPos ? (
                <text
                  key={`cl-${c.id}`}
                  x={c.labelPos.x}
                  y={c.labelPos.y}
                  textAnchor={c.labelPos.anchor}
                  fontSize={11.5}
                  fontWeight={700}
                  fill={COLOR_VAR[c.color]}
                  stroke="var(--paper-raised)"
                  strokeWidth={3.5}
                  paintOrder="stroke"
                >
                  {c.label}
                </text>
              ) : null,
            )}

            {/* marked points */}
            {m.points.map((p) => (
              <g key={`pt-${p.id}`}>
                <circle cx={p.cx} cy={p.cy} r={5} fill={COLOR_VAR[p.color]} stroke="var(--paper-raised)" strokeWidth={1.6} />
                <text
                  x={p.labelPos.x}
                  y={p.labelPos.y}
                  textAnchor={p.labelPos.anchor}
                  fontSize={11.5}
                  fontWeight={700}
                  fill={COLOR_VAR[p.color]}
                  stroke="var(--paper-raised)"
                  strokeWidth={3.5}
                  paintOrder="stroke"
                >
                  {p.valueLabel ? `${p.label} ${p.valueLabel}` : p.label}
                </text>
              </g>
            ))}

            {/* free annotations */}
            {(spec.labels ?? []).map((l, i) => (
              <text
                key={`lb-${i}`}
                x={m.sx(l.x)}
                y={m.sy(l.y)}
                textAnchor={l.anchor ?? "middle"}
                fontSize={l.size === "tag" ? 11.5 : 10.5}
                fontWeight={l.size === "tag" ? 700 : 400}
                fill={l.color ? COLOR_VAR[l.color] : "var(--ink-muted)"}
                stroke="var(--paper-raised)"
                strokeWidth={3}
                paintOrder="stroke"
              >
                {l.text}
              </text>
            ))}

            {/* hover tooltip */}
            {hover ? (
              <g pointerEvents="none">
                <rect
                  x={hover.x - (hover.x + tooltipW > W ? tooltipW : 0)}
                  y={hover.y - 20}
                  width={tooltipW}
                  height={20}
                  rx={4}
                  fill="var(--ink)"
                  opacity={0.92}
                />
                <text
                  x={hover.x - (hover.x + tooltipW > W ? tooltipW : 0) + 7}
                  y={hover.y - 6}
                  fontSize={11}
                  fontWeight={600}
                  fill="var(--paper-raised)"
                >
                  {hover.text}
                </text>
              </g>
            ) : null}
          </svg>
        </div>
      </div>

      {/* caption: generated from the same spec numbers as the drawing */}
      <figcaption className="border-t border-hairline px-4 py-2.5 text-center text-caption text-ink-muted">
        {spec.caption}
      </figcaption>

      {/* show-numbers toggle + data table */}
      <div className="border-t border-hairline bg-paper-sunken/40 px-4 py-2">
        <button
          type="button"
          aria-expanded={showNumbers}
          onClick={() => setShowNumbers(!showNumbers)}
          className="inline-flex h-8 items-center gap-1.5 rounded-md border border-hairline bg-paper-raised px-3 text-caption font-medium text-ink transition-colors hover:border-hairline-strong"
        >
          <svg
            className={`h-3.5 w-3.5 transition-transform ${showNumbers ? "rotate-180" : ""}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
          {showNumbers ? "Hide numbers & equations" : "Show numbers & equations"}
        </button>
        {showNumbers ? (
          <div className="mt-2 overflow-x-auto thin-scroll">
            <table className="w-full min-w-[420px] border-collapse text-caption">
              <tbody>
                {spec.tableRows.map((row, i) => (
                  <tr key={i} className="border-b border-hairline last:border-b-0">
                    <td className="py-1.5 pr-3 align-top font-medium text-ink">{row.label}</td>
                    <td className="py-1.5 align-top text-ink-muted">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
    </figure>
  );
}
