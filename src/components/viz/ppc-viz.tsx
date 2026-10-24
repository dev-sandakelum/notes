"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";

/**
 * Production Possibility Curve (Economics — TCS2112).
 * Concave frontier (quarter ellipse) between two goods: Butter on the
 * x-axis, Guns on the y-axis. One slider allocates resources between the
 * goods; a toggle idles 20% of resources and moves the point inside the
 * curve. The unattainable region is shaded and labelled.
 */

const W = 400;
const H = 300;
const padL = 44;
const padR = 14;
const padT = 26;
const padB = 42;
const x0 = padL; // origin (bottom-left, pixels)
const y0 = H - padB;
const plotW = W - padL - padR;
const plotH = H - padT - padB;
const maxX = 100; // Butter units
const maxY = 80; // Guns units

const sx = (x: number) => x0 + (x / maxX) * plotW;
const sy = (y: number) => y0 - (y / maxY) * plotH;

const X_TICKS = [0, 25, 50, 75, 100];
const Y_TICKS = [0, 20, 40, 60, 80];

export function PpcViz({ caption }: { caption?: string }) {
  const [share, setShare] = useState(60); // % of resources to consumer goods (Butter)
  const [idle, setIdle] = useState(false);

  // Frontier point for this allocation (quarter-ellipse parameterisation).
  const theta = ((100 - share) / 100) * (Math.PI / 2);
  const fx = maxX * Math.cos(theta);
  const fy = maxY * Math.sin(theta);
  const cx = idle ? fx * 0.8 : fx;
  const cy = idle ? fy * 0.8 : fy;

  const pX = sx(cx);
  const pY = sy(cy);
  const fX = sx(fx);
  const fY = sy(fy);

  const msg = idle
    ? `Only 80% of potential output: the economy sits INSIDE the frontier. It could reach ${Math.round(fx)} butter and ${Math.round(fy)} guns by fully employing its resources.`
    : `Point (${Math.round(fx)}, ${Math.round(fy)}) lies ON the frontier: resources are fully and efficiently employed (productive efficiency).`;

  const pointLabelRight = pX < x0 + plotW - 70;

  return (
    <figure className="border border-hairline rounded-md bg-paper-raised p-4 print-avoid-break viz-shell">
      <div className="no-print flex flex-wrap items-center justify-center gap-2">
        <div className="flex w-full max-w-md items-center gap-3">
          <span className="w-56 shrink-0 text-caption text-ink-muted">
            Resources to consumer goods (Butter)
          </span>
          <Slider
            className="flex-1"
            value={[share]}
            min={0}
            max={100}
            step={5}
            aria-label="Share of resources to consumer goods (Butter)"
            onValueChange={([v]) => setShare(v)}
          />
          <span className="w-10 text-right font-mono text-sm">{share}%</span>
        </div>
        <button
          type="button"
          aria-pressed={idle}
          onClick={() => setIdle(!idle)}
          className={`inline-flex h-9 items-center gap-1.5 rounded-md border px-3 text-sm transition-colors ${
            idle
              ? "border-warn bg-warn-soft text-warn"
              : "border-hairline text-ink hover:border-hairline-strong"
          }`}
        >
          Idle resources: {idle ? "ON" : "OFF"}
        </button>
      </div>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={`Production possibility frontier: current output ${Math.round(cx)} butter and ${Math.round(cy)} guns, ${idle ? "inside (inefficient)" : "on (efficient)"} the curve`}
        className="mx-auto mt-3 block h-auto w-full"
      >
        {/* gridlines */}
        {X_TICKS.map((t) => (
          <line
            key={`gx-${t}`}
            x1={sx(t)}
            y1={sy(0)}
            x2={sx(t)}
            y2={sy(maxY)}
            className="stroke-[var(--fig-soft)]"
            strokeWidth={1}
          />
        ))}
        {Y_TICKS.map((t) => (
          <line
            key={`gy-${t}`}
            x1={sx(0)}
            y1={sy(t)}
            x2={sx(maxX)}
            y2={sy(t)}
            className="stroke-[var(--fig-soft)]"
            strokeWidth={1}
          />
        ))}

        {/* unattainable corner (outside the frontier) */}
        <path
          d={`M ${x0} ${sy(maxY)} L ${sx(maxX)} ${sy(maxY)} L ${sx(maxX)} ${y0} A ${plotW} ${plotH} 0 0 0 ${x0} ${sy(maxY)} Z`}
          fill="var(--fig-soft)"
          fillOpacity={0.5}
        />
        <text
          x={x0 + plotW * 0.84}
          y={y0 - plotH * 0.94}
          textAnchor="middle"
          fontSize={10}
          className="fill-[var(--fig-axis)]"
        >
          Unattainable
        </text>
        <text
          x={x0 + plotW * 0.38}
          y={y0 - plotH * 0.22}
          textAnchor="middle"
          fontSize={10}
          className="fill-[var(--fig-axis)]"
        >
          Attainable
        </text>

        {/* frontier (concave to the origin) */}
        <path
          d={`M ${sx(maxX)} ${y0} A ${plotW} ${plotH} 0 0 0 ${x0} ${sy(maxY)}`}
          fill="none"
          className="stroke-[var(--fig-primary)]"
          strokeWidth={2}
        />
        <text
          x={x0 + plotW * 0.62}
          y={y0 - plotH * 0.82}
          fontSize={11}
          className="fill-[var(--ink-muted)]"
        >
          PPC
        </text>

        {/* idle-resources ghost point + connector */}
        {idle ? (
          <>
            <line
              x1={pX}
              y1={pY}
              x2={fX}
              y2={fY}
              strokeDasharray="3 3"
              className="stroke-[var(--ok)]"
              strokeWidth={1.5}
            />
            <circle
              cx={fX}
              cy={fY}
              r={4}
              fill="none"
              className="stroke-[var(--ok)]"
              strokeWidth={1.5}
            />
          </>
        ) : null}

        {/* current economy point */}
        <circle
          cx={pX}
          cy={pY}
          r={5.5}
          stroke="var(--paper-raised)"
          strokeWidth={1.5}
          style={{
            fill: idle ? "var(--warn)" : "var(--ok)",
            transition: "fill .15s",
          }}
        />
        <text
          x={pointLabelRight ? pX + 10 : pX - 10}
          y={pY - 8}
          textAnchor={pointLabelRight ? "start" : "end"}
          fontSize={10}
          className="fill-[var(--ink-muted)]"
        >
          {idle ? "idle resources" : "efficient"}
        </text>

        {/* axes + arrowheads */}
        <line
          x1={x0 - 4}
          y1={y0}
          x2={sx(maxX)}
          y2={y0}
          className="stroke-[var(--fig-axis)]"
          strokeWidth={1.5}
        />
        <line
          x1={x0}
          y1={y0 + 4}
          x2={x0}
          y2={sy(maxY)}
          className="stroke-[var(--fig-axis)]"
          strokeWidth={1.5}
        />
        <polygon
          points={`${sx(maxX)},${y0} ${sx(maxX) - 7},${y0 - 3.5} ${sx(maxX) - 7},${y0 + 3.5}`}
          fill="var(--fig-axis)"
        />
        <polygon
          points={`${x0},${sy(maxY)} ${x0 - 3.5},${sy(maxY) + 7} ${x0 + 3.5},${sy(maxY) + 7}`}
          fill="var(--fig-axis)"
        />

        {/* tick labels */}
        {X_TICKS.map((t) => (
          <text
            key={`tx-${t}`}
            x={sx(t)}
            y={y0 + 14}
            textAnchor="middle"
            fontSize={9}
            className="fill-[var(--fig-axis)] font-mono"
          >
            {t}
          </text>
        ))}
        {Y_TICKS.map((t) => (
          <text
            key={`ty-${t}`}
            x={x0 - 6}
            y={sy(t) + 3}
            textAnchor="end"
            fontSize={9}
            className="fill-[var(--fig-axis)] font-mono"
          >
            {t}
          </text>
        ))}

        {/* axis titles */}
        <text
          x={x0 + plotW / 2}
          y={H - 6}
          textAnchor="middle"
          fontSize={11}
          className="fill-[var(--ink-muted)]"
        >
          Butter (consumer goods)
        </text>
        <text
          x={14}
          y={y0 - plotH / 2}
          textAnchor="middle"
          fontSize={11}
          className="fill-[var(--ink-muted)]"
          transform={`rotate(-90 14 ${y0 - plotH / 2})`}
        >
          Guns (capital goods)
        </text>
      </svg>

      <div
        aria-live="polite"
        className={`mt-3 min-h-[1.5rem] text-center text-sm ${idle ? "text-warn" : "text-ok"}`}
      >
        {msg}
      </div>
      <div className="text-center font-mono text-caption text-ink-muted">
        Output: Butter = {Math.round(cx)}, Guns = {Math.round(cy)}
        {idle ? ` · potential: ${Math.round(fx)}, ${Math.round(fy)}` : ""}
      </div>

      {caption ? (
        <figcaption className="mt-1 border-t border-hairline pt-2 text-center text-caption italic text-ink-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
