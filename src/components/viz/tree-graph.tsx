"use client";

import type { CSSProperties, JSX } from "react";

/**
 * Shared animated SVG tree renderer.
 *
 * One declarative component for every tree visualizer in the book (BST
 * builder, traversal trainer, AVL rotator, …): caller supplies a plain
 * recursive node tree plus a `key → state` map, TreeGraph handles the
 * tidy layout (leaves get fixed slots, parents centered over their
 * children), state coloring, pop-in entry animation and — thanks to
 * inline geometry styles — smoothly animated reflows when the tree
 * structure changes.
 */

export type TreeGraphNodeState =
  | "default"
  | "dim"
  | "visiting"
  | "found"
  | "error"
  | "selected"
  | "path";

export interface TreeGraphNode {
  /** Stable identity — used as the React key and in `nodeStates`. */
  key: string;
  /** Text inside the node. */
  label: string;
  /** Small badge rendered top-right (e.g. balance factor "+1"). */
  badge?: string;
  badgeTone?: "ok" | "warn" | "danger";
  /** Ordered, left-to-right. */
  children?: TreeGraphNode[];
}

export interface TreeGraphProps {
  root: TreeGraphNode;
  nodeStates?: Record<string, TreeGraphNodeState>;
  /** Node circle radius in px. Default 27 (54px-diameter nodes). */
  nodeRadius?: number;
  /** Vertical distance between levels. Default 84. */
  levelHeight?: number;
  /** Horizontal distance between neighbouring leaf slots. Default 64. */
  siblingGap?: number;
  /** Canvas padding. Default 30. */
  padding?: number;
  /**
   * Nodes pop in (scale 0→1 + fade, 220ms, staggered 40ms by depth) and
   * edges draw in (stroke-dashoffset, 320ms). Default true. Reflow
   * transitions (transform / geometry) run regardless.
   */
  animateEntry?: boolean;
  /** When present, nodes become focusable buttons (click / Enter / Space). */
  onNodeClick?: (key: string) => void;
  /** svg role="img" aria-label. */
  ariaLabel?: string;
  className?: string;
}

/* ------------------------------------------------------------------ */
/* Layout                                                              */
/* ------------------------------------------------------------------ */

interface LaidNode {
  node: TreeGraphNode;
  x: number;
  y: number;
  depth: number;
}

interface LaidEdge {
  parent: LaidNode;
  child: LaidNode;
  len: number;
}

interface Laid {
  nodes: LaidNode[];
  edges: LaidEdge[];
  width: number;
  height: number;
}

interface LayoutOpts {
  radius: number;
  levelHeight: number;
  siblingGap: number;
  padding: number;
}

/**
 * Tidy layout, no crossings: leaves are dealt fixed x slots left-to-right
 * (`padding + (slot + 0.5) * siblingGap`), every parent is centered over
 * its first/last child. y = padding + depth * levelHeight.
 */
function layoutTree(root: TreeGraphNode, o: LayoutOpts): Laid {
  const nodes: LaidNode[] = [];
  const edges: LaidEdge[] = [];
  let leaves = 0;
  let maxDepth = 0;
  let maxX = 0;

  const place = (node: TreeGraphNode, depth: number): LaidNode => {
    maxDepth = Math.max(maxDepth, depth);
    const laid: LaidNode = { node, x: 0, y: o.padding + depth * o.levelHeight, depth };
    const kids = node.children ?? [];
    if (kids.length === 0) {
      laid.x = o.padding + (leaves + 0.5) * o.siblingGap;
      leaves += 1;
    } else {
      const placed = kids.map((kid) => {
        const child = place(kid, depth + 1);
        edges.push({ parent: laid, child, len: 0 });
        return child;
      });
      laid.x = (placed[0].x + placed[placed.length - 1].x) / 2;
    }
    maxX = Math.max(maxX, laid.x);
    nodes.push(laid);
    return laid;
  };

  place(root, 0);
  for (const e of edges) {
    e.len = Math.hypot(e.parent.x - e.child.x, e.parent.y - e.child.y);
  }
  const width = Math.max(
    o.padding + leaves * o.siblingGap + o.padding,
    maxX + o.radius + o.padding
  );
  const height = 2 * o.padding + maxDepth * o.levelHeight + o.radius;
  return { nodes, edges, width, height };
}

/* ------------------------------------------------------------------ */
/* State palette                                                       */
/* ------------------------------------------------------------------ */

interface Palette {
  fill: string;
  stroke: string;
  label: string;
  strokeWidth: number;
  opacity: number;
}

function statePalette(state: TreeGraphNodeState): Palette {
  switch (state) {
    case "visiting":
      return {
        fill: "var(--visit-soft)",
        stroke: "var(--visit)",
        label: "var(--visit)",
        strokeWidth: 2,
        opacity: 1,
      };
    case "found":
      return {
        fill: "var(--ok-soft)",
        stroke: "var(--ok)",
        label: "var(--ink)",
        strokeWidth: 2,
        opacity: 1,
      };
    case "error":
      return {
        fill: "var(--danger-soft)",
        stroke: "var(--danger)",
        label: "var(--ink)",
        strokeWidth: 2,
        opacity: 1,
      };
    case "selected":
      return {
        fill: "var(--mark)",
        stroke: "var(--ink)",
        label: "var(--ink)",
        strokeWidth: 2,
        opacity: 1,
      };
    case "path":
      return {
        fill: "var(--paper-sunken)",
        stroke: "var(--ink)",
        label: "var(--ink)",
        strokeWidth: 3,
        opacity: 1,
      };
    case "dim":
      return {
        fill: "var(--paper-raised)",
        stroke: "var(--ink)",
        label: "var(--ink)",
        strokeWidth: 2,
        opacity: 0.22,
      };
    default:
      return {
        fill: "var(--paper-raised)",
        stroke: "var(--ink)",
        label: "var(--ink)",
        strokeWidth: 2,
        opacity: 1,
      };
  }
}

function edgeColor(childState: TreeGraphNodeState): string {
  switch (childState) {
    case "visiting":
      return "var(--visit)";
    case "path":
      return "var(--ink)";
    case "found":
      return "var(--ok)";
    case "error":
      return "var(--danger)";
    default:
      return "var(--hairline-strong)";
  }
}

/* ------------------------------------------------------------------ */
/* Inline <style> (kept inside the svg so it is SSR'd with it)          */
/* ------------------------------------------------------------------ */

const BASE_CSS = `
.tg-btn { cursor: pointer; }
.tg-btn:hover circle { stroke-width: 2.5px; }
.tg-btn:focus { outline: none; }
.tg-btn:focus-visible circle { stroke-width: 3.5px; }
`;

const ANIM_CSS = `
@keyframes tg-pop {
  from { opacity: 0; transform: scale(0); }
  to { opacity: 1; transform: scale(1); }
}
@keyframes tg-draw {
  from { stroke-dashoffset: var(--tg-len, 9999); }
  to { stroke-dashoffset: 0; }
}
.tg-anim-node {
  animation: tg-pop 220ms cubic-bezier(0.2, 1.28, 0.44, 1) both;
  transform-box: fill-box;
  transform-origin: center;
}
.tg-anim-edge { animation: tg-draw 320ms ease both; }
@media (prefers-reduced-motion: reduce) {
  .tg-anim-node, .tg-anim-edge { animation: none !important; }
}
`;

/* x1/y1/x2/y2 are valid CSS geometry props in Chromium — React appends
   "px" to the numeric values, which keeps them animatable/transitionable. */
type LineStyle = CSSProperties &
  Record<"x1" | "y1" | "x2" | "y2" | `--${string}`, string | number>;

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export function TreeGraph(props: TreeGraphProps): JSX.Element {
  const {
    root,
    nodeStates = {},
    nodeRadius = 27,
    levelHeight = 84,
    siblingGap = 64,
    padding = 30,
    animateEntry = true,
    onNodeClick,
    ariaLabel,
    className,
  } = props;

  const laid = layoutTree(root, { radius: nodeRadius, levelHeight, siblingGap, padding });
  const stateOf = (key: string): TreeGraphNodeState => nodeStates[key] ?? "default";

  return (
    <svg
      viewBox={`0 0 ${Math.ceil(laid.width)} ${Math.ceil(laid.height)}`}
      role="img"
      aria-label={ariaLabel ?? "Tree diagram"}
      className={`block h-auto w-full${className ? ` ${className}` : ""}`}
    >
      <style>{BASE_CSS + (animateEntry ? ANIM_CSS : "")}</style>

      {/* Edges first, so nodes sit on top of them. */}
      {laid.edges.map((e) => {
        const color = edgeColor(stateOf(e.child.node.key));
        const style: LineStyle = {
          x1: e.parent.x,
          y1: e.parent.y,
          x2: e.child.x,
          y2: e.child.y,
          stroke: color,
          strokeWidth: 2,
          "--tg-len": e.len,
          ...(animateEntry ? { strokeDasharray: e.len } : {}),
          transition:
            "x1 320ms ease, y1 320ms ease, x2 320ms ease, y2 320ms ease, stroke 200ms ease",
        };
        return (
          <line
            key={`e:${e.parent.node.key}|${e.child.node.key}`}
            x1={e.parent.x}
            y1={e.parent.y}
            x2={e.child.x}
            y2={e.child.y}
            className={animateEntry ? "tg-anim-edge" : undefined}
            style={style}
          />
        );
      })}

      {/* Nodes — the <g> transform is a style so reflows animate. */}
      {laid.nodes.map((n) => {
        const node = n.node;
        const pal = statePalette(stateOf(node.key));
        const contents = (
          <>
            <circle
              r={nodeRadius}
              style={{
                fill: pal.fill,
                stroke: pal.stroke,
                strokeWidth: pal.strokeWidth,
                transition: "fill 200ms ease, stroke 200ms ease, stroke-width 200ms ease",
              }}
            />
            <text
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={16}
              fontWeight={700}
              style={{ fill: pal.label, transition: "fill 200ms ease" }}
            >
              {node.label}
            </text>
            {node.badge ? renderBadge(node, nodeRadius) : null}
          </>
        );
        return (
          <g
            key={`n:${node.key}`}
            className={onNodeClick ? "tg-btn" : undefined}
            role={onNodeClick ? "button" : undefined}
            tabIndex={onNodeClick ? 0 : undefined}
            aria-label={onNodeClick ? `Node ${node.label}` : undefined}
            onClick={onNodeClick ? () => onNodeClick(node.key) : undefined}
            onKeyDown={
              onNodeClick
                ? (ev) => {
                    if (ev.key === "Enter" || ev.key === " ") {
                      ev.preventDefault();
                      onNodeClick(node.key);
                    }
                  }
                : undefined
            }
            style={{
              transform: `translate(${n.x}px, ${n.y}px)`,
              opacity: pal.opacity,
              transition: "transform 320ms ease, opacity 200ms ease",
            }}
          >
            {animateEntry ? (
              <g className="tg-anim-node" style={{ animationDelay: `${n.depth * 40}ms` }}>
                {contents}
              </g>
            ) : (
              contents
            )}
          </g>
        );
      })}
    </svg>
  );
}

function renderBadge(node: TreeGraphNode, radius: number): JSX.Element {
  const tone = node.badgeTone ?? "ok";
  const color = `var(--${tone})`;
  const soft = `var(--${tone}-soft)`;
  const w = Math.max(18, (node.badge ?? "").length * 6.4 + 8);
  const cx = radius * 0.55;
  const cy = -radius * 0.75;
  return (
    <g>
      <rect
        x={cx - w / 2}
        y={cy - 8}
        width={w}
        height={16}
        rx={8}
        style={{ fill: soft, stroke: color, strokeWidth: 1.5 }}
      />
      <text
        x={cx}
        y={cy}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={10}
        fontWeight={600}
        className="font-mono"
        style={{ fill: color }}
      >
        {node.badge}
      </text>
    </g>
  );
}
