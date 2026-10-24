#!/usr/bin/env python3
"""Round 3 content surgery:

1. Fix 7 mismatched tables (ch08 trace tables -> caption field; maths/12 trig
   2-row glued header; mis/01 lost rowspan; mis/03 flattened side-by-side).
2. Convert 6 lost-newline ASCII code blocks in ch08 + 1 list-item pre into
   proper ascii blocks with reconstructed line breaks.
3. Convert the 4 static tree figures (ch07, ch08, ch09, ch11) into
   treeDiagram blocks rendered by the shared <TreeDiagram />.

Every replacement matches the exact original string, so a second run is a
no-op (idempotent).
"""
import re
import sys

FILES = {
    "ch08": "src/content/books/dsa/chapters/08-tree-traversals.ts",
    "maths12": "src/content/books/maths/chapters/12-trigonometry.ts",
    "mis01": "src/content/books/mis/chapters/01-information-systems-in-global-business-today.ts",
    "mis03": "src/content/books/mis/chapters/03-using-is-to-achieve-competitive-advantage.ts",
    "ch07": "src/content/books/dsa/chapters/07-trees-and-binary-trees.ts",
    "ch09": "src/content/books/dsa/chapters/09-binary-search-trees.ts",
    "ch11": "src/content/books/dsa/chapters/11-heaps-and-heap-sort.ts",
}

changes = []


def sub(path, old, new, tag, count=1):
    src = open(path, encoding="utf-8").read()
    if old not in src:
        changes.append((tag, "MISSING (already applied?)"))
        return False
    out = src.replace(old, new, count)
    open(path, "w", encoding="utf-8").write(out)
    changes.append((tag, "ok"))
    return True


def esc(s):
    """JS string literal body for embedding inside a .ts file."""
    return s.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n")


# =====================================================================
# 1. TABLE FIXES
# =====================================================================

ch08 = FILES["ch08"]

# --- 1a. Evaluating postfix trace table: 4-col header, 3-value rows ---
old = '''      "type": "table",
      "head": [
        "Trace: <code>5 3 + 8 2 - *</code> = (5+3) \u00d7 (8\u22122)",
        "Symbol",
        "Action",
        "Stack"
      ],'''
new = '''      "type": "table",
      "caption": "Trace: <code>5 3 + 8 2 - *</code> = (5+3) \u00d7 (8\u22122)",
      "head": [
        "Symbol",
        "Action",
        "Stack"
      ],'''
sub(ch08, old, new, "ch08 postfix-trace table -> caption")

# --- 1b. Evaluating prefix trace table ---
old_head = re.search(
    r'"head": \[\s*"Trace: <code>\* \+ 5 3 - 8 2</code> \(right \u2192 left\)",\s*"Symbol",\s*"Action",\s*"Stack"\s*\]',
    open(ch08, encoding="utf-8").read(),
)
if old_head:
    sub(
        ch08,
        old_head.group(0),
        '"caption": "Trace: <code>* + 5 3 - 8 2</code> (right \u2192 left)",\n      "head": [\n        "Symbol",\n        "Action",\n        "Stack"\n      ]',
        "ch08 prefix-trace table -> caption",
    )

# --- 1c. infix->postfix trace table (5-col header) ---
sub(
    ch08,
    '''      "head": [
        "Trace: <code>A + B * C - D</code>",
        "Symbol",
        "Action",
        "Stack",
        "Output"
      ],''',
    '''      "caption": "Trace: <code>A + B * C - D</code>",
      "head": [
        "Symbol",
        "Action",
        "Stack",
        "Output"
      ],''',
    "ch08 infix-postfix trace table -> caption",
)

# --- 1d. parenthesized trace table ---
sub(
    ch08,
    '''      "head": [
        "Trace with parentheses: <code>(A + B) * C</code>",
        "Symbol",
        "Action",
        "Stack",
        "Output"
      ],''',
    '''      "caption": "Trace with parentheses: <code>(A + B) * C</code>",
      "head": [
        "Symbol",
        "Action",
        "Stack",
        "Output"
      ],''',
    "ch08 parenthesized trace table -> caption",
)

# --- 1e. maths/12 trigonometry: 2-row header glued into one ---
sub(
    FILES["maths12"],
    '''      "head": [
        "\u03b8",
        "0\u00b0",
        "30\u00b0",
        "45\u00b0",
        "60\u00b0",
        "90\u00b0",
        "sin \u03b8",
        "cos \u03b8",
        "tan \u03b8"
      ],''',
    '''      "head": [
        "\u03b8",
        "0\u00b0",
        "30\u00b0",
        "45\u00b0",
        "60\u00b0",
        "90\u00b0"
      ],''',
    "maths/12 trig table head 9 -> 6 cols",
)

# --- 1f. mis/01: lost rowspan continuation rows ---
sub(
    FILES["mis01"],
    '''        [
          "<b>Management science</b>",
          "Development of models for decision-making and management practices"
        ],
        [
          "<b>Operations research</b>",
          "Mathematical techniques for optimizing parameters: transportation, inventory control, transaction costs"
        ],''',
    '''        [
          "",
          "<b>Management science</b>",
          "Development of models for decision-making and management practices"
        ],
        [
          "",
          "<b>Operations research</b>",
          "Mathematical techniques for optimizing parameters: transportation, inventory control, transaction costs"
        ],''',
    "mis/01 rowspan continuation cells",
)

# --- 1g. mis/03: flattened side-by-side value chain -> paired 4-col rows ---
sub(
    FILES["mis03"],
    '''      "type": "table",
      "head": [
        "Primary activities",
        "What it covers",
        "Support activities",
        ""
      ],
      "rows": [
        [
          "<b>1 \u00b7 Inbound logistics</b>",
          "Receiving, storing, stock control of raw materials"
        ],
        [
          "<b>2 \u00b7 Operations</b>",
          "Conversion of input to finished goods, production system, capacity utilization"
        ],
        [
          "<b>3 \u00b7 Outbound logistics</b>",
          "Storing, testing, packaging and distribution of the finished goods"
        ],
        [
          "<b>4 \u00b7 Marketing &amp; sales</b>",
          "Promotional activities: informing customers and persuading them to buy"
        ],
        [
          "<b>5 \u00b7 [After-sales] Services</b>",
          "Maintenance, repairing, guarantees, advisory services"
        ],
        [
          "<b>6 \u00b7 Procurement</b>",
          "Purchase of inputs for primary activities"
        ],
        [
          "<b>7 \u00b7 Technological development (R&amp;D)</b>",
          "Product and process design, continuous improvement, innovation"
        ],
        [
          "<b>8 \u00b7 Human resources</b>",
          "Recruitment, training &amp; development, motivation and rewarding"
        ],
        [
          "<b>9 \u00b7 Firm infrastructure</b>",
          "Structure, culture, management planning, finance"
        ]
      ]''',
    '''      "type": "table",
      "head": [
        "Primary activities",
        "What it covers",
        "Support activities",
        "What it covers"
      ],
      "rows": [
        [
          "<b>1 \u00b7 Inbound logistics</b>",
          "Receiving, storing, stock control of raw materials",
          "<b>6 \u00b7 Procurement</b>",
          "Purchase of inputs for primary activities"
        ],
        [
          "<b>2 \u00b7 Operations</b>",
          "Conversion of input to finished goods, production system, capacity utilization",
          "<b>7 \u00b7 Technological development (R&amp;D)</b>",
          "Product and process design, continuous improvement, innovation"
        ],
        [
          "<b>3 \u00b7 Outbound logistics</b>",
          "Storing, testing, packaging and distribution of the finished goods",
          "<b>8 \u00b7 Human resources</b>",
          "Recruitment, training &amp; development, motivation and rewarding"
        ],
        [
          "<b>4 \u00b7 Marketing &amp; sales</b>",
          "Promotional activities: informing customers and persuading them to buy",
          "<b>9 \u00b7 Firm infrastructure</b>",
          "Structure, culture, management planning, finance"
        ],
        [
          "<b>5 \u00b7 [After-sales] Services</b>",
          "Maintenance, repairing, guarantees, advisory services",
          "",
          ""
        ]
      ]''',
    "mis/03 value chain paired rows",
)

# =====================================================================
# 2. ASCII BLOCK CONVERSIONS (ch08) — reconstruct the lost line breaks
# =====================================================================

def ascii_block(lines, alt, caption=None):
    body = ",\n        ".join(f'"{esc(l)}"' for l in lines)
    cap = f',\n      "caption": "{esc(caption)}"' if caption else ""
    return (
        '{\n      "type": "ascii",\n      "alt": "%s",%s\n      "lines": [\n        %s\n      ]\n    }'
        % (esc(alt), cap, body)
    )


def code_block_literal(lang, html):
    return '{\n      "type": "code",\n      "language": "%s",\n      "html": "%s"\n    }' % (lang, esc(html))

# --- 2a. bigger tree (line ~371) ---
old = code_block_literal(
    "c",
    " 1 / \\ 2 3 / \\ / \\ 4 5 6 7 / \\ 8 9",
)
new = ascii_block(
    [
        "        1",
        "      /   \\",
        "     2     3",
        "    / \\   / \\",
        "   4   5 6   7",
        "  / \\",
        " 8   9",
    ],
    "Binary tree with root 1, children 2 and 3, level-3 nodes 4 to 7, and leaves 8 and 9 under 4",
    "The example tree for the full depth-first trace below.",
)
sub(ch08, old, new, "ch08 ascii: bigger tree")

# --- 2b. expression tree (line ~436) ---
old = code_block_literal(
    "c",
    "Expression tree: + Post-order \u2192 A B * C D - + / \\ = postfix of (A*B) + (C-D) * - \u2190 how compilers evaluate / \\ / \\ expressions. A B C D",
)
new = ascii_block(
    [
        "Expression tree:            Post-order \u2192 A B * C D - +",
        "                            = postfix of (A*B) + (C-D)",
        "",
        "        +                   * and - \u2190 how compilers",
        "       / \\                     evaluate expressions.",
        "      *   -",
        "     /\\   /\\",
        "    A  B C  D",
    ],
    "Expression tree for (A times B) plus (C minus D) with its post-order reading",
)
sub(ch08, old, new, "ch08 ascii: expression tree")

# --- 2c. strict comparison (line ~854) ---
old = code_block_literal(
    "c",
    "\u2714 STRICT \u2718 NOT STRICT (B has exactly ONE child) A A / \\ / \\ B C B C / \\ / D E D Properties: leaves L, internal I \u2192 L = I + 1\nTotal nodes n = 2L \u2212 1 \u2192 strict trees always have an ODD node count.",
)
new = ascii_block(
    [
        "\u2714 STRICT                      \u2718 NOT STRICT (B has exactly ONE child)",
        "",
        "     A                            A",
        "    / \\                          / \\",
        "   B   C                        B   C",
        "  / \\   |                      / \\",
        " D   E  (C: 0 kids)            D   E",
        "",
        "Properties: leaves L, internal I \u2192 L = I + 1",
        "Total nodes n = 2L \u2212 1 \u2192 strict trees always have an ODD node count.",
    ],
    "Strict tree (every node has 0 or 2 children) versus a non-strict tree where B has one child",
)
sub(ch08, old, new, "ch08 ascii: strict comparison")

# --- 2d. complete comparison (line ~894) ---
old = code_block_literal(
    "c",
    "\u2714 COMPLETE \u2718 NOT COMPLETE A A / \\ / \\ B C B C / \\ / / \\ \\ D E F D E F \u2191 GAP. F exists but its left sibling is missing",
)
new = ascii_block(
    [
        "\u2714 COMPLETE                    \u2718 NOT COMPLETE",
        "",
        "        A                          A",
        "      /   \\                      /   \\",
        "     B     C                    B     C",
        "    / \\   / \\                 / \\     \\",
        "   D   E F   G                D   E     F",
        "                                      \u2191 GAP: F exists but its",
        "                                         left sibling is missing",
    ],
    "Complete binary tree with no gaps versus an incomplete one where F skips its left sibling slot",
)
sub(ch08, old, new, "ch08 ascii: complete comparison")

# --- 2e. tree-array mapping (line ~905) ---
old = code_block_literal(
    "c",
    "Tree: A Array: [A, B, C, D, E, F] / \\ index: 0 1 2 3 4 5 B C / \\ / node at i \u2192 left child = 2i + 1 D E F right child = 2i + 2 parent = (i \u2212 1) / 2",
)
new = ascii_block(
    [
        "Tree:                 Array: [A, B, C, D, E, F]",
        "        A             index:  0  1  2  3  4  5",
        "       / \\",
        "      B   C           node at i \u2192 left child  = 2i + 1",
        "     / \\   \\                 right child = 2i + 2",
        "    D   E   F                 parent      = (i \u2212 1) / 2",
    ],
    "Complete tree stored level-by-level in an array with index arithmetic for children and parent",
)
sub(ch08, old, new, "ch08 ascii: tree-array mapping")

# --- 2f. perfect binary (line ~920) ---
old = code_block_literal(
    "c",
    " A \u2190 level 1: 1 node / \\ B C \u2190 level 2: 2 nodes / \\ / \\ D E F G \u2190 level 3: 4 nodes (all leaves) Nodes = 2^(h+1) \u2212 1 \u00b7 Leaves = 2^h",
)
new = ascii_block(
    [
        "          A            \u2190 level 1: 1 node",
        "        /   \\",
        "       B     C         \u2190 level 2: 2 nodes",
        "      / \\   / \\",
        "     D   E F   G       \u2190 level 3: 4 nodes (all leaves)",
        "",
        "     Nodes = 2^(h+1) \u2212 1 \u00b7 Leaves = 2^h",
    ],
    "Perfect binary tree: every level completely filled",
)
sub(ch08, old, new, "ch08 ascii: perfect binary")

# --- 2g. how-they-overlap list item pre -> ascii block after the list ---
old = (
    '        "Perfect \u2282 Strict and Perfect \u2282 Complete (perfect is both at once)",\n'
    '        "<b>Strict + Complete but NOT perfect:</b>\\n<pre class=\\"ascii\\"> A Strict \u2714 (all 0/2 children) / \\\\ Complete \u2714 (level 3 fills left\u2192right) B C Perfect \u2718 (C is a leaf at level 2) / \\\\ D E</pre>"\n'
    "      ]\n"
    "    },"
)
new = (
    '        "Perfect \u2282 Strict and Perfect \u2282 Complete (perfect is both at once)",\n'
    '        "<b>Strict + Complete but NOT perfect:</b> the tree below qualifies as both \u2014 see the figure after this list."\n'
    "      ]\n"
    "    },\n"
    "    "
    + ascii_block(
        [
            "      A          Strict \u2714 (all 0/2 children)",
            "     / \\         Complete \u2714 (level 3 fills left\u2192right)",
            "    B   C        Perfect \u2718 (C is a leaf at level 2)",
            "   / \\",
            "  D   E",
        ],
        "A tree that is strict and complete but not perfect: node C is a leaf above the last level",
        "Strict \u2714 and Complete \u2714, but Perfect \u2718 \u2014 not every level is full.",
    )
)
sub(ch08, old, new, "ch08 ascii: how-they-overlap")

# =====================================================================
# 3. TREE FIGURE -> treeDiagram CONVERSIONS
# =====================================================================

def parse_tree_svg(svg):
    """Extract nodes and edges from an original treesvg string."""
    circles = []
    for m in re.finditer(
        r'<circle class="vtx" cx="([\d.]+)" cy="([\d.]+)" r="([\d.]+)"></circle><text class="vlbl" x="[\d.]+" y="[\d.]+">(.*?)</text>',
        svg,
    ):
        circles.append({"x": float(m.group(1)), "y": float(m.group(2)), "r": float(m.group(3)), "label": m.group(4)})
    nodes = []
    id_of = {}  # (x,y) -> id
    for i, c in enumerate(circles):
        nid = f"n{i}"
        id_of[(c["x"], c["y"])] = nid
        nodes.append({"id": nid, "label": c["label"], "x": int(c["x"]), "y": int(c["y"]), "r": int(c["r"])})
    edges = []
    for m in re.finditer(
        r'<line class="edge" x1="([\d.]+)" y1="([\d.]+)" x2="([\d.]+)" y2="([\d.]+)"></line>',
        svg,
    ):
        a = id_of.get((float(m.group(1)), float(m.group(2))))
        b = id_of.get((float(m.group(3)), float(m.group(4))))
        if a and b:
            edges.append([a, b])
    return nodes, edges


def tree_diagram_block(svg, alt, caption=None, max_width=560, labels=None):
    nodes, edges = parse_tree_svg(svg)
    node_items = ",\n        ".join(
        '{ "id": "%s", "label": "%s", "x": %d, "y": %d, "r": %d }' % (n["id"], esc(n["label"]), n["x"], n["y"], n["r"])
        for n in nodes
    )
    edge_items = ",\n        ".join('["%s", "%s"]' % (a, b) for a, b in edges)
    cap = f',\n      "caption": "{esc(caption)}"' if caption else ""
    lbl = ""
    if labels:
        lbl = ',\n      "labels": [\n        %s\n      ]' % ",\n        ".join(
            '{ "text": "%s", "x": %d, "y": %d }' % (esc(t), x, y) for t, x, y in labels
        )
    return (
        '{\n      "type": "treeDiagram",\n      "alt": "%s",%s%s\n      "maxWidth": %d,\n      "nodes": [\n        %s\n      ],\n      "edges": [\n        %s\n      ]\n    }'
        % (esc(alt), cap, lbl, max_width, node_items, edge_items)
    )


def figure_literal(svg, alt, caption=None):
    cap = f',\n      "caption": "{esc(caption)}"' if caption else ""
    return '{\n      "type": "figure",\n      "svg": "%s",%s\n      "alt": "%s"\n    }' % (
        esc(svg),
        "",
        esc(alt),
    ) if caption is None else (
        '{\n      "type": "figure",\n      "svg": "%s",\n      "alt": "%s",\n      "caption": "%s"\n    }'
        % (esc(svg), esc(alt), esc(caption))
    )


# --- 3a. ch07 general tree A-J ---
src = open(FILES["ch07"], encoding="utf-8").read()
m = re.search(r'"svg": "((?:[^"\\]|\\.)*)",\n      "alt": "General tree with root A', src)
if m:
    svg = m.group(1).replace('\\"', '"')
    old = figure_literal(svg, "General tree with root A, children B and C, and leaves F, G, H, I and J")
    # The actual literal in the file uses non-escaped quotes already escaped; build replacement by locating the block
    block_start = src.rfind("{", 0, m.start())
    block_end = src.find("},", m.end()) + 1
    old_block = src[block_start:block_end]
    new_block = tree_diagram_block(svg, "General tree with root A, children B and C, and leaves F, G, H, I and J")
    out = src.replace(old_block, new_block, 1)
    open(FILES["ch07"], "w", encoding="utf-8").write(out)
    changes.append(("ch07 tree figure -> treeDiagram", "ok"))
else:
    changes.append(("ch07 tree figure -> treeDiagram", "not found"))

# --- 3b. ch08 expression tree ---
src = open(ch08, encoding="utf-8").read()
m = re.search(r'"svg": "((?:[^"\\]|\\.)*)",\n      "alt": "Expression tree for A/B\*C\*D\+E"', src)
if m:
    svg = m.group(1).replace('\\"', '"')
    block_start = src.rfind("{", 0, m.start())
    # caption follows alt
    cap_m = re.search(r'"caption": "Inorder \u2192 A/B\*C\*D\+E \(infix\) \u00b7 Preorder \u2192 \+\*\*/ABCDE \(prefix\) \u00b7 Postorder \u2192 AB/C\*D\*E\+ \(postfix\)"', src)
    block_end = src.find("},", m.end()) + 1
    old_block = src[block_start:block_end]
    new_block = tree_diagram_block(
        svg,
        "Expression tree for A/B*C*D+E",
        "Inorder \u2192 A/B*C*D+E (infix) \u00b7 Preorder \u2192 +**/ABCDE (prefix) \u00b7 Postorder \u2192 AB/C*D*E+ (postfix)",
    )
    out = src.replace(old_block, new_block, 1)
    open(ch08, "w", encoding="utf-8").write(out)
    changes.append(("ch08 expression tree -> treeDiagram", "ok"))
else:
    changes.append(("ch08 expression tree -> treeDiagram", "not found"))

# --- 3c. ch09 BST ---
src = open(FILES["ch09"], encoding="utf-8").read()
m = re.search(r'"svg": "((?:[^"\\]|\\.)*)",\n      "alt": "Binary search tree 50 25 76', src)
if m:
    svg = m.group(1).replace('\\"', '"')
    block_start = src.rfind("{", 0, m.start())
    block_end = src.find("},", m.end()) + 1
    old_block = src[block_start:block_end]
    new_block = tree_diagram_block(
        svg,
        "Binary search tree 50 25 76 12 37 65 89 6 17 32 41 59 72 83 95",
        "Left subtree < node < right subtree, everywhere. Note: BSTs don't have to be symmetrical.",
    )
    out = src.replace(old_block, new_block, 1)
    open(FILES["ch09"], "w", encoding="utf-8").write(out)
    changes.append(("ch09 BST figure -> treeDiagram", "ok"))
else:
    changes.append(("ch09 BST figure -> treeDiagram", "not found"))

# --- 3d. ch11 max/min heap (dual panel with labels) ---
src = open(FILES["ch11"], encoding="utf-8").read()
m = re.search(r'"svg": "((?:[^"\\]|\\.)*)",\n      "alt": "Max heap and min heap"', src)
if m:
    svg = m.group(1).replace('\\"', '"')
    block_start = src.rfind("{", 0, m.start())
    block_end = src.find("},", m.end()) + 1
    old_block = src[block_start:block_end]
    new_block = tree_diagram_block(
        svg,
        "Max heap and min heap",
        "58 \u2265 31, 40 \u2265 13, 25, 9, 3 everywhere \u2713 \u00b7 5 \u2264 13, 12 \u2264 20, 25, 16, 19 everywhere \u2713",
        max_width=540,
        labels=[("MAX-HEAP", 130, 215), ("MIN-HEAP", 400, 215)],
    )
    out = src.replace(old_block, new_block, 1)
    open(FILES["ch11"], "w", encoding="utf-8").write(out)
    changes.append(("ch11 heap figure -> treeDiagram", "ok"))
else:
    changes.append(("ch11 heap figure -> treeDiagram", "not found"))

# =====================================================================
print(f"\n{len(changes)} operations:")
for tag, status in changes:
    print(f"  [{status}] {tag}")
missing = [t for t, s in changes if s != "ok"]
if missing:
    print(f"\nMISSING: {missing}")
    sys.exit(1)
print("\nall applied")
