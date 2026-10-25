import type {
  TreeDiagramNodeData,
  TreeDiagramTreeNode,
} from "@/content/types";
import { layoutTreeDiagram } from "./tree-layout";

/**
 * Reusable static tree figure (server component).
 *
 * Renders nodes + edges as an SVG whose viewBox is COMPUTED from the actual
 * node positions, radii and a padding — never hardcoded — so no node can be
 * clipped, at any container width. Responsive by construction:
 *
 *   - width: 100% (up to `maxWidth`), height: auto → aspect preserved
 *   - preserveAspectRatio="xMidYMid meet" + mx-auto → always centred
 *   - edges are trimmed border-to-border so they never poke past nodes
 *
 * Two authoring modes, ONE renderer:
 *   - `tree`: nested structure — positions computed by the shared
 *     side-aware tidy layout (tree-layout.ts): lone left/right children
 *     offset sideways (never a vertical edge), siblings keep a minimum
 *     edge-to-edge gap, subtrees never overlap.
 *   - `nodes` + `edges`: explicit positions (dual-panel figures etc.).
 *
 * Every tree figure on the site renders through this component (content
 * blocks of type "treeDiagram"), guaranteeing one consistent visual language.
 */
export function TreeDiagram({
  tree,
  nodes: explicitNodes,
  edges: explicitEdges,
  alt,
  caption,
  maxWidth = 560,
  labels,
}: {
  tree?: TreeDiagramTreeNode;
  nodes?: TreeDiagramNodeData[];
  edges?: [string, string][];
  alt: string;
  caption?: string;
  maxWidth?: number;
  labels?: { text: string; x: number; y: number }[];
}) {
  let nodes = explicitNodes ?? [];
  let edges = explicitEdges ?? [];
  if (tree) {
    const laid = layoutTreeDiagram(tree);
    nodes = laid.nodes;
    edges = laid.edges;
  } else if (nodes.length === 0) {
    return null;
  }
  const byId = new Map(nodes.map((n) => [n.id, n]));

  // ---- viewBox from actual geometry (min/max x, y, plus radius + padding) ----
  const PAD = 12;
  let minX = Infinity,
    maxX = -Infinity,
    minY = Infinity,
    maxY = -Infinity;
  const consider = (x: number, y: number, w = 0, h = 0) => {
    minX = Math.min(minX, x - w);
    maxX = Math.max(maxX, x + w);
    minY = Math.min(minY, y - h);
    maxY = Math.max(maxY, y + h);
  };
  for (const n of nodes) {
    const r = n.r ?? 21;
    consider(n.x, n.y, r, r);
    if (n.note) maxY = Math.max(maxY, n.y + r + 16); // note line under the node
  }
  for (const l of labels ?? []) consider(l.x, l.y + 4, 24, 14);
  if (!Number.isFinite(minX)) {
    minX = 0;
    minY = 0;
    maxX = 100;
    maxY = 100;
  }
  const vbX = minX - PAD;
  const vbY = minY - PAD;
  const vbW = maxX - minX + 2 * PAD;
  const vbH = maxY - minY + 2 * PAD;

  // ---- edges trimmed border-to-border (circle geometry, never overlap nodes) ----
  const trimmed = edges.flatMap(([from, to]) => {
    const a = byId.get(from);
    const b = byId.get(to);
    if (!a || !b) return [];
    const ra = a.r ?? 21;
    const rb = b.r ?? 21;
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const len = Math.hypot(dx, dy) || 1;
    const ux = dx / len;
    const uy = dy / len;
    const x1 = a.x + ux * ra;
    const y1 = a.y + uy * ra;
    const x2 = b.x - ux * rb;
    const y2 = b.y - uy * rb;
    return [
      {
        key: `${from}-${to}`,
        x1,
        y1,
        x2,
        y2,
      },
    ];
  });

  return (
    <figure className="print-avoid-break my-6 rounded-xl border border-hairline bg-paper-raised p-4 shadow-card">
      <svg
        viewBox={`${round(vbX)} ${round(vbY)} ${round(vbW)} ${round(vbH)}`}
        role="img"
        aria-label={alt}
        style={{
          width: "100%",
          maxWidth: `${maxWidth}px`,
          height: "auto",
          display: "block",
          margin: "0 auto",
        }}
        className="tree-diagram"
      >
        {trimmed.map((e) => (
          <line
            key={e.key}
            className="td-edge"
            x1={round(e.x1)}
            y1={round(e.y1)}
            x2={round(e.x2)}
            y2={round(e.y2)}
          />
        ))}
        {nodes.map((n) => {
          const r = n.r ?? 21;
          return (
            <g key={n.id}>
              <circle className="td-node" cx={n.x} cy={n.y} r={r} />
              <text className="td-label" x={n.x} y={n.y}>
                {n.label}
              </text>
              {n.note ? (
                <text className="td-note" x={n.x} y={n.y + r + 12}>
                  {n.note}
                </text>
              ) : null}
            </g>
          );
        })}
        {(labels ?? []).map((l, i) => (
          <text key={`lbl-${i}`} className="td-panel" x={l.x} y={l.y}>
            {l.text}
          </text>
        ))}
      </svg>
      {caption ? (
        <figcaption className="mt-2.5 text-center text-caption text-ink-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function round(v: number): number {
  return Math.round(v * 10) / 10;
}
