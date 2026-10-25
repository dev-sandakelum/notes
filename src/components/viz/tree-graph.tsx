"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type JSX,
} from "react";

/**
 * Shared animated SVG tree renderer.
 *
 * One declarative component for every tree visualizer in the book (BST
 * builder, deletion playground, AVL rotator, traversal trainer, …): the
 * caller supplies a plain recursive node tree plus a `key → state` map and
 * TreeGraph handles the tidy layout, state coloring, pop-in entry
 * animation and, thanks to inline geometry styles, smoothly animated
 * reflows when the tree structure changes.
 *
 * Layout rules (user spec, round 2):
 *  - a parent with two children is centred above them;
 *  - a lone LEFT child always sits down-LEFT of its parent and a lone
 *    RIGHT child down-RIGHT (≥ 0.75 × node diameter sideways), so skewed
 *    BSTs render as diagonal staircases, never vertical columns;
 *  - subtrees never overlap: sibling contours are packed with a minimum
 *    edge-to-edge horizontal gap (same-level nodes stay ≥ 20px apart);
 *  - edges run from node border to node border, not centre to centre.
 *
 * Node size is a fixed design token (~56px diameter) and never scales
 * with the container. The SVG is drawn at the layout's real pixel size
 * and centred; on narrow screens it shrinks only down to ~40px nodes and
 * then scrolls horizontally inside its wrapper.
 */

export type TreeGraphNodeState =
  | "default"
  | "dim"
  | "visiting"
  | "found"
  | "error"
  | "selected"
  | "path"
  | "newly";

/** Role tag colours (rotation player): z red, y violet, x green. */
export type TreeGraphTagTone = "z" | "y" | "x";

export interface TreeGraphNode {
  /** Stable identity — used as the React key and in `nodeStates`. */
  key: string;
  /** Text inside the node. */
  label: string;
  /**
   * Small badge rendered top-right (e.g. balance factor "+1"). When the
   * text parses as a signed number the tone is derived automatically from
   * the shared colour rule: 0 green, ±1 amber, ±2 and beyond red.
   */
  badge?: string;
  badgeTone?: "ok" | "warn" | "danger";
  /** Small coloured role tag rendered top-left ("z", "y", "x"). */
  tag?: string;
  tagTone?: TreeGraphTagTone;
  /** Ring the node in red (e.g. the offending node in a comparison). */
  ring?: boolean;
  /** Pulse the node (target/delete emphasis). */
  pulse?: boolean;
  /**
   * Which slot this child occupies — "left" or "right". Required on lone
   * children so a lone left child is drawn down-left and a lone right
   * child down-right. N-ary trees may omit it.
   */
  side?: "left" | "right";
  /** Ordered, left-to-right (binary callers: left first, then right). */
  children?: TreeGraphNode[];
}

export interface TreeGraphProps {
  root: TreeGraphNode;
  nodeStates?: Record<string, TreeGraphNodeState>;
  /** Node circle radius in px. Design token: 28 (56px nodes). */
  nodeRadius?: number;
  /** Vertical distance between levels. Default 84. */
  levelHeight?: number;
  /**
   * Minimum edge-to-edge horizontal gap between nodes, in px. Default 24
   * (spec minimum: 20).
   */
  siblingGap?: number;
  /**
   * Sideways centre offset for a lone child, in px. Default 0.75 × the
   * node diameter.
   */
  loneOffset?: number;
  /** Canvas padding. Default 30. */
  padding?: number;
  /**
   * Nodes never render smaller than this radius: the diagram shrinks to
   * fit narrow containers down to this size, then scrolls horizontally.
   * Default 20 (40px nodes).
   */
  minNodeRadius?: number;
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
/* Shared balance-factor colour rule                                   */
/* ------------------------------------------------------------------ */

/** 0 = green, ±1 = amber, ±2 and beyond = red. One rule, every widget. */
export function bfTone(bf: number): "ok" | "warn" | "danger" {
  const a = Math.abs(bf);
  return a === 0 ? "ok" : a === 1 ? "warn" : "danger";
}

/** Derives the badge tone from a badge string like "+1", "0" or "−2". */
function badgeToneOf(text: string): "ok" | "warn" | "danger" | null {
  const m = /^[−+-]?\d+$/.exec(text.trim());
  if (!m) return null;
  const v = Number(text.replace("−", "-"));
  return bfTone(v);
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
  /** Border-to-border trimmed endpoints. */
  x1: number;
  y1: number;
  x2: number;
  y2: number;
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
  loneOffset: number;
  padding: number;
}

/**
 * Per-depth horizontal extents of a subtree, relative to its root at
 * x = 0 (node extents included). Used to pack siblings without overlap.
 */
type Contour = Array<[min: number, max: number]>;

function mergeInto(target: Contour, src: Contour, shift: number): void {
  for (let k = 0; k < src.length; k++) {
    const lo = src[k][0] + shift;
    const hi = src[k][1] + shift;
    if (k < target.length) {
      if (lo < target[k][0]) target[k][0] = lo;
      if (hi > target[k][1]) target[k][1] = hi;
    } else {
      target.push([lo, hi]);
    }
  }
}

/**
 * Contour-packed tidy layout. Post-order pass assigns every node an x
 * relative to its parent; a pre-order pass converts to absolute coords.
 */
function layoutTree(root: TreeGraphNode, o: LayoutOpts): Laid {
  const rel = new Map<TreeGraphNode, number>();
  const nodes: LaidNode[] = [];
  const edges: LaidEdge[] = [];
  let maxDepth = 0;
  let hasBadge = false;

  const place = (node: TreeGraphNode): Contour => {
    if (node.badge || node.tag || node.ring) hasBadge = true;
    const kids = node.children ?? [];
    const own: Contour = [[-o.radius, o.radius]];

    if (kids.length === 0) {
      return own;
    }

    if (kids.length === 1 && (kids[0].side === "left" || kids[0].side === "right")) {
      /* Lone child: offset sideways in its own direction. (The offset is
         stored AFTER place() so a leaf child keeps it — the leaf branch
         never resets `rel`.) */
      const kid = kids[0];
      const dir = kid.side === "left" ? -1 : 1;
      const offset = dir * Math.max(o.loneOffset, o.siblingGap * 0.5 + o.radius);
      const childContour = place(kid);
      rel.set(kid, offset);
      mergeInto(own, childContour, offset);
      return own;
    }

    /* Two or more children (or a side-less lone child): pack contours. */
    const contours = kids.map((kid) => {
      const c = place(kid);
      return c;
    });
    const positions: number[] = [0];
    for (let i = 1; i < kids.length; i++) {
      let need = -Infinity;
      const common = Math.min(contours[i - 1].length, contours[i].length);
      for (let k = 0; k < common; k++) {
        need = Math.max(need, contours[i - 1][k][1] - contours[i][k][0]);
      }
      positions[i] = positions[i - 1] + need + o.siblingGap;
    }
    const mid = (positions[0] + positions[positions.length - 1]) / 2;
    for (let i = 0; i < kids.length; i++) {
      rel.set(kids[i], positions[i] - mid);
      mergeInto(own, contours[i], positions[i] - mid);
    }
    return own;
  };

  place(root);

  const hPad = o.padding + (hasBadge ? 16 : 0);
  const topPad = o.padding + (hasBadge ? 24 : 0);

  const abs = (node: TreeGraphNode, depth: number, ax: number): void => {
    maxDepth = Math.max(maxDepth, depth);
    const x = ax + (rel.get(node) ?? 0);
    const laid: LaidNode = {
      node,
      x,
      y: topPad + depth * o.levelHeight,
      depth,
    };
    nodes.push(laid);
    for (const kid of node.children ?? []) {
      abs(kid, depth + 1, x);
    }
  };
  abs(root, 0, hPad);

  /* Contours can extend left of the root: shift everything so the
     leftmost node clears the padding (nothing is ever clipped). */
  let minX = Infinity;
  let maxX = -Infinity;
  for (const n of nodes) {
    minX = Math.min(minX, n.x);
    maxX = Math.max(maxX, n.x);
  }
  const shift = minX < hPad ? hPad - minX : 0;
  if (shift !== 0) {
    for (const n of nodes) n.x += shift;
    maxX += shift;
  }

  /* Edges run border-to-border, so they are built from the final
     positions. */
  const byKeyParent = new Map<TreeGraphNode, LaidNode>();
  for (const n of nodes) byKeyParent.set(n.node, n);
  for (const n of nodes) {
    for (const kid of n.node.children ?? []) {
      const child = byKeyParent.get(kid);
      if (!child) continue;
      const dx = child.x - n.x;
      const dy = child.y - n.y;
      const len = Math.hypot(dx, dy) || 1;
      const ux = dx / len;
      const uy = dy / len;
      edges.push({
        parent: n,
        child,
        len,
        x1: n.x + ux * o.radius,
        y1: n.y + uy * o.radius,
        x2: child.x - ux * o.radius,
        y2: child.y - uy * o.radius,
      });
    }
  }

  const width = Math.max(
    maxX + o.radius + hPad,
    2 * o.radius + 2 * hPad
  );
  const height = topPad + maxDepth * o.levelHeight + 2 * o.radius + o.padding;
  return { nodes, edges, width, height };
}

/* ------------------------------------------------------------------ */
/* State palette (reference: indigo nodes, amber path, green found,    */
/* red target, violet recent)                                          */
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
        fill: "var(--warn-soft)",
        stroke: "var(--warn)",
        label: "var(--ink)",
        strokeWidth: 3,
        opacity: 1,
      };
    case "found":
      return {
        fill: "var(--ok-soft)",
        stroke: "var(--ok)",
        label: "var(--ink)",
        strokeWidth: 2.5,
        opacity: 1,
      };
    case "error":
      return {
        fill: "var(--danger-soft)",
        stroke: "var(--danger)",
        label: "var(--ink)",
        strokeWidth: 2.5,
        opacity: 1,
      };
    case "selected":
      return {
        fill: "var(--accent-soft)",
        stroke: "var(--accent)",
        label: "var(--ink)",
        strokeWidth: 4.5,
        opacity: 1,
      };
    case "newly":
      return {
        fill: "var(--visit-soft)",
        stroke: "var(--visit)",
        label: "var(--ink)",
        strokeWidth: 2.5,
        opacity: 1,
      };
    case "path":
      return {
        fill: "var(--paper-raised)",
        stroke: "var(--warn)",
        label: "var(--ink)",
        strokeWidth: 2.5,
        opacity: 1,
      };
    case "dim":
      return {
        fill: "var(--paper-sunken)",
        stroke: "var(--hairline-strong)",
        label: "var(--ink-muted)",
        strokeWidth: 1.5,
        opacity: 0.45,
      };
    default:
      return {
        fill: "var(--node-fill)",
        stroke: "var(--node-stroke)",
        label: "var(--ink)",
        strokeWidth: 2,
        opacity: 1,
      };
  }
}

function edgeColor(childState: TreeGraphNodeState): string {
  switch (childState) {
    case "visiting":
    case "path":
      return "var(--warn)";
    case "found":
      return "var(--ok)";
    case "error":
      return "var(--danger)";
    case "selected":
      return "var(--accent)";
    case "newly":
      return "var(--visit)";
    case "dim":
      return "var(--hairline-strong)";
    default:
      return "var(--node-edge)";
  }
}

/* ------------------------------------------------------------------ */
/* Inline <style> (kept inside the svg so it is SSR'd with it)          */
/* ------------------------------------------------------------------ */

const BASE_CSS = `
.tg-btn { cursor: pointer; }
.tg-btn:hover circle { stroke-width: 3px; }
.tg-btn:focus { outline: none; }
.tg-btn:focus-visible circle { stroke-width: 4px; }
@keyframes tg-pulse {
  0%, 100% { stroke-width: 2.5px; }
  50% { stroke-width: 7.5px; }
}
.tg-pulse { animation: tg-pulse 1s ease-in-out infinite; }
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
  animation: tg-pop calc(220ms / var(--speed, 1)) cubic-bezier(0.2, 1.28, 0.44, 1) both;
  transform-box: fill-box;
  transform-origin: center;
}
.tg-anim-edge { animation: tg-draw calc(320ms / var(--speed, 1)) ease both; }
@media (prefers-reduced-motion: reduce) {
  .tg-anim-node, .tg-anim-edge { animation: none !important; }
  .tg-pulse { animation: none !important; }
}
`;

/* x1/y1/x2/y2 are valid CSS geometry props in Chromium — React appends
   "px" to the numeric values, which keeps them animatable/transitionable. */
type LineStyle = CSSProperties &
  Record<"x1" | "y1" | "x2" | "y2" | `--${string}`, string | number>;

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function TreeGraph(props: TreeGraphProps): JSX.Element {
  const {
    root,
    nodeStates = {},
    nodeRadius = 28,
    levelHeight = 84,
    siblingGap = 24,
    loneOffset = nodeRadius * 1.5,
    padding = 30,
    minNodeRadius = 20,
    animateEntry = true,
    onNodeClick,
    ariaLabel,
    className,
  } = props;

  const wrapRef = useRef<HTMLDivElement>(null);
  const [avail, setAvail] = useState<number | null>(null);

  useIsoLayoutEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const measure = (w: number) => setAvail((prev) => (prev === w ? prev : w));
    measure(el.clientWidth);
    if (typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver((entries) => {
      for (const e of entries) measure(e.contentRect.width);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const laid = layoutTree(root, {
    radius: nodeRadius,
    levelHeight,
    siblingGap,
    loneOffset,
    padding,
  });

  const minScale = Math.min(1, minNodeRadius / nodeRadius);
  const scale =
    avail == null ? null : Math.min(1, Math.max(minScale, avail / laid.width));

  const stateOf = useCallback(
    (key: string): TreeGraphNodeState => nodeStates[key] ?? "default",
    [nodeStates]
  );

  const svgProps =
    scale == null
      ? {
          /* Pre-measurement (SSR / first paint): fit, never overflow. */
          style: { width: `min(100%, ${Math.ceil(laid.width)}px)` } as CSSProperties,
        }
      : {
          width: Math.ceil(laid.width * scale),
          height: Math.ceil(laid.height * scale),
        };

  return (
    <div
      ref={wrapRef}
      className={`overflow-x-auto thin-scroll${className ? ` ${className}` : ""}`}
    >
      <svg
        viewBox={`0 0 ${Math.ceil(laid.width)} ${Math.ceil(laid.height)}`}
        role="img"
        aria-label={ariaLabel ?? "Tree diagram"}
        preserveAspectRatio="xMidYMid meet"
        className="mx-auto block h-auto"
        {...svgProps}
      >
        <style>{BASE_CSS + (animateEntry ? ANIM_CSS : "")}</style>

        {/* Edges first, so nodes sit on top of them. */}
        {laid.edges.map((e) => {
          const color = edgeColor(stateOf(e.child.node.key));
          const style: LineStyle = {
            x1: e.x1,
            y1: e.y1,
            x2: e.x2,
            y2: e.y2,
            stroke: color,
            strokeWidth: 2,
            strokeLinecap: "round",
            "--tg-len": e.len,
            ...(animateEntry ? { strokeDasharray: e.len } : {}),
            transition:
              "x1 calc(320ms / var(--speed, 1)) ease, y1 calc(320ms / var(--speed, 1)) ease, x2 calc(320ms / var(--speed, 1)) ease, y2 calc(320ms / var(--speed, 1)) ease, stroke calc(200ms / var(--speed, 1)) ease",
          };
          return (
            <line
              key={`e:${e.parent.node.key}|${e.child.node.key}`}
              x1={e.x1}
              y1={e.y1}
              x2={e.x2}
              y2={e.y2}
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
              {node.ring ? (
                <circle
                  r={nodeRadius + 6}
                  fill="none"
                  stroke="var(--danger)"
                  strokeWidth={2}
                  strokeDasharray="6 4"
                  style={{ transition: "r calc(320ms / var(--speed, 1)) ease" }}
                />
              ) : null}
              <circle
                r={nodeRadius}
                className={node.pulse ? "tg-pulse" : undefined}
                style={{
                  fill: pal.fill,
                  stroke: pal.stroke,
                  strokeWidth: pal.strokeWidth,
                  transition:
                    "fill calc(200ms / var(--speed, 1)) ease, stroke calc(200ms / var(--speed, 1)) ease, stroke-width calc(200ms / var(--speed, 1)) ease",
                }}
              />
              <text
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={16}
                fontWeight={700}
                style={{ fill: pal.label, transition: "fill calc(200ms / var(--speed, 1)) ease" }}
              >
                {node.label}
              </text>
              {node.tag ? renderTag(node, nodeRadius) : null}
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
                transition: "transform calc(320ms / var(--speed, 1)) ease, opacity calc(200ms / var(--speed, 1)) ease",
              }}
            >
              {animateEntry ? (
                <g
                  className="tg-anim-node"
                  style={{ animationDelay: `${n.depth * 40}ms` }}
                >
                  {contents}
                </g>
              ) : (
                contents
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/** Shared pill badge, top-right (balance factors everywhere). */
function renderBadge(node: TreeGraphNode, radius: number): JSX.Element {
  const tone = node.badgeTone ?? badgeToneOf(node.badge ?? "") ?? "ok";
  const color = `var(--${tone})`;
  const soft = `var(--${tone}-soft)`;
  const text = node.badge ?? "";
  const w = Math.max(20, text.length * 7 + 10);
  const cx = radius * 0.62;
  const cy = -radius * 0.82;
  return (
    <g>
      <rect
        x={cx - w / 2}
        y={cy - 9}
        width={w}
        height={18}
        rx={9}
        style={{
          fill: soft,
          stroke: color,
          strokeWidth: 1.5,
          transition: "fill 200ms ease, stroke 200ms ease",
        }}
      />
      <text
        x={cx}
        y={cy}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={11}
        fontWeight={700}
        className="font-mono"
        style={{ fill: color, transition: "fill 200ms ease" }}
      >
        {text}
      </text>
    </g>
  );
}

/** Small role tag pill, top-left (z / y / x in the rotation player). */
function renderTag(node: TreeGraphNode, radius: number): JSX.Element {
  const tone = node.tagTone ?? "z";
  const cssVar =
    tone === "z" ? "--danger" : tone === "y" ? "--visit" : "--ok";
  const softVar =
    tone === "z" ? "--danger-soft" : tone === "y" ? "--visit-soft" : "--ok-soft";
  const color = `var(${cssVar})`;
  const text = node.tag ?? "";
  const w = Math.max(16, text.length * 8 + 10);
  const cx = -radius * 0.62;
  const cy = -radius * 0.82;
  return (
    <g>
      <rect
        x={cx - w / 2}
        y={cy - 9}
        width={w}
        height={18}
        rx={9}
        style={{
          fill: `var(${softVar})`,
          stroke: color,
          strokeWidth: 1.5,
          transition: "fill 200ms ease, stroke 200ms ease",
        }}
      />
      <text
        x={cx}
        y={cy}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={11}
        fontWeight={800}
        className="font-mono"
        style={{ fill: color, transition: "fill 200ms ease" }}
      >
        {text}
      </text>
    </g>
  );
}
