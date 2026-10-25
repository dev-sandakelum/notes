import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "07-trees-and-binary-trees",
    "number": 7,
    "title": "Trees & binary trees",
    "subtitle": "Lecture 6 · Lab 6",
    "kind": "topic",
    "words": 2192,
    "minutes": 11
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "why-trees",
      "text": "Why trees?"
    },
    {
      "type": "paragraph",
      "html": "Arrays and linked lists are <b>linear</b>, searching them takes relatively long. We can extend the idea of linked structures to one that has <b>multiple relations among its nodes</b>: a <b>tree</b>. Trees are the standard structure for <b>hierarchical</b> data and for fast searching."
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Definition",
      "html": "A tree is a widely used <b>non-linear</b> data structure consisting of a set of <b>nodes</b> and a set of <b>edges</b> connecting pairs of nodes. A tree <b>can be empty</b> (no nodes). One node is the <b>root</b>; every other node descends from it."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "terminology-the-vocabulary-of-every-exam-question",
      "text": "Terminology: the vocabulary of every exam question"
    },
    {
      "type": "viz",
      "kind": "terminology",
      "caption": "Interactive tree terminology explorer: click any node"
    },
    {
      "type": "table",
      "head": [
        "Term",
        "Meaning",
        "In the tree above"
      ],
      "rows": [
        [
          "<b>Root</b>",
          "Node without a parent",
          "A"
        ],
        [
          "<b>Parent</b>",
          "Has child nodes in subtrees",
          "B is parent of D, E"
        ],
        [
          "<b>Child</b>",
          "Nodes with 0+ children descending from a parent",
          "D and E are children of B"
        ],
        [
          "<b>Siblings</b>",
          "Nodes sharing the same parent",
          "D, E are siblings"
        ],
        [
          "<b>Leaf / external node</b>",
          "Node without children (degree 0)",
          "E, I, J, M, N…"
        ],
        [
          "<b>Internal node</b>",
          "Node with at least one child",
          "A, B, C, D, F, G, K"
        ],
        [
          "<b>Ancestors</b>",
          "Parent, grandparent, … up to root",
          "Ancestors of M: K, G, C, A"
        ],
        [
          "<b>Descendants</b>",
          "Child, grandchild, …",
          "Descendants of G: K, L, M, N"
        ],
        [
          "<b>Subtree</b>",
          "A node together with all its descendants",
          "Subtree rooted at B"
        ],
        [
          "<b>Depth of a node</b>",
          "Number of ancestors (path length to root)",
          "Depth of M is 4… M has 4 ancestors"
        ],
        [
          "<b>Height of a tree</b>",
          "Maximum depth of any node",
          "Height = 4"
        ],
        [
          "<b>Degree of a node</b>",
          "Number of its children / subtrees",
          "Degree of A is 3; of C is 1"
        ],
        [
          "<b>Degree of a tree</b>",
          "Maximum degree of any node",
          "3"
        ],
        [
          "<b>Level</b>",
          "Number of nodes along the path from root",
          "Levels 0 (A) … 4 (M, N)"
        ]
      ],
      "highlightRows": [
        0
      ]
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Exam alert",
      "html": "You are routinely given a drawn tree and asked to list root, leaves, internal nodes, siblings, ancestors, descendants, degree, height or the subtrees of a given node. Practise reading all of these off a diagram in seconds. <b>Height of a node</b> = path length to its most distant <i>descendant</i>; <b>depth</b> = path length <i>up to the root</i>."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "applications-of-trees",
      "text": "Applications of trees"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Operating systems</b>: file &amp; directory hierarchies (Windows, Unix, DOS).",
        "Compiler design / text processing; evaluating mathematical expressions.",
        "Searching algorithms; router algorithms; workflow for digital image compositing; analysis of electrical circuits."
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "binary-trees",
      "text": "Binary trees"
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Definition",
      "html": "A binary tree is a tree whose elements have <b>at most 2 children</b>; the <b>left</b> child and the <b>right</b> child. Binary trees are excellent for <b>searching large amounts of information</b> (databases index records this way); used for searching it is called a <b>binary search tree</b>."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "properties-of-binary-trees-memorize",
      "text": "Properties of binary trees (memorize)"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">Nodes at level L</div><div class=\"f-b\">At most <b>2<sup>L</sup></b> nodes · level 0 → 1, level 1 → 2, level 2 → 4</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Growth rule</div><div class=\"f-b\">If level L has m nodes, level L+1 has at most <b>2m</b></div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Nodes for height H</div><div class=\"f-b\">A binary tree of height H (L = H+1 levels) has at most <b>2<sup>L</sup> − 1</b> nodes</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Balanced search</div><div class=\"f-b\">Worst-case search visits ≤ L = <b>log₂(N+1)</b> levels → O(log N)</div></div>\n  </div>",
      "alt": "Formula reference cards"
    },
    {
      "type": "example",
      "title": "4-level complete tree",
      "bodyHtml": "<p>A full binary tree with 4 levels: 2⁴ − 1 = <b>15 nodes total</b>, of which 2³ = 8 are leaves and 2³ − 1 = 7 are non-leaf. Levels = log₂(15+1) = 4; height (links in longest path) = 3.</p>",
      "solutionHtml": null
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "representations-and-c-implementation",
      "text": "Representations & C implementation"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Array representation</b>: store each element at the position corresponding to its number; simple but wastes space for sparse trees.",
        "<b>Linked representation</b> (most popular): each node is an object with an element field plus two link fields; the space needed by an n-node tree is n × sizeof(node)."
      ]
    },
    {
      "type": "code",
      "language": "c",
      "html": "<span class=\"tok-kw\">struct</span> node {\n    <span class=\"tok-kw\">int</span>          data;\n    <span class=\"tok-kw\">struct</span> node *left;    <span class=\"tok-cm\">/* NULL if no left  child */</span>\n    <span class=\"tok-kw\">struct</span> node *right;   <span class=\"tok-cm\">/* NULL if no right child */</span>\n};\n\n<span class=\"tok-kw\">struct</span> node* <span class=\"tok-fn\">newNode</span>(<span class=\"tok-kw\">int</span> data) {\n    <span class=\"tok-kw\">struct</span> node* node = (<span class=\"tok-kw\">struct</span> node*) <span class=\"tok-fn\">malloc</span>(<span class=\"tok-kw\">sizeof</span>(<span class=\"tok-kw\">struct</span> node));\n    node-&gt;data  = data;\n    node-&gt;left  = NULL;\n    node-&gt;right = NULL;\n    <span class=\"tok-kw\">return</span>(node);\n}\n\n<span class=\"tok-cm\">/* build      1        */</span>\n<span class=\"tok-cm\">/*           / \\                  */</span>\n<span class=\"tok-cm\">/*          2   3                 */</span>\n<span class=\"tok-cm\">/*         /                      */</span>\n<span class=\"tok-cm\">/*        4                       */</span>\n<span class=\"tok-kw\">struct</span> node *root  = <span class=\"tok-fn\">newNode</span>(<span class=\"tok-num\">1</span>);\nroot-&gt;left         = <span class=\"tok-fn\">newNode</span>(<span class=\"tok-num\">2</span>);\nroot-&gt;right        = <span class=\"tok-fn\">newNode</span>(<span class=\"tok-num\">3</span>);\nroot-&gt;left-&gt;left   = <span class=\"tok-fn\">newNode</span>(<span class=\"tok-num\">4</span>);"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "classifications-of-binary-trees",
      "text": "Classifications of binary trees"
    },
    {
      "type": "table",
      "head": [
        "Type",
        "Rule",
        "Fact"
      ],
      "rows": [
        [
          "<b>Strictly binary</b>",
          "Every non-leaf node has <b>exactly two</b> children",
          "n leaves ⇒ always <b>2n − 1</b> nodes"
        ],
        [
          "<b>Complete</b>",
          "Strictly binary <b>with all leaves at level d</b>",
          "2<sup>d</sup> leaves, 2<sup>d</sup>−1 non-leaf nodes"
        ],
        [
          "<b>Almost complete</b>",
          "Leaves at level d <b>or</b> d−1; if a node has a right descendant at level d, its left leaf descendants are also at level d",
          "Filling left-to-right strictly"
        ]
      ]
    },
    {
      "type": "callout",
      "variant": "warn",
      "title": "Careful",
      "html": "A tree can be complete-looking but fail “almost complete”: if node F has a right descendant at the last level <b>but not all of its left leaf descendants are at level d</b>; it is NOT almost complete."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "expression-trees",
      "text": "Expression trees"
    },
    {
      "type": "paragraph",
      "html": "Arithmetic expressions are stored as binary trees: <b>operators are internal nodes, operands are leaves</b>. The three depth-first traversals of an expression tree produce the three notations (see Topic 7)."
    },
    {
      "type": "flashcards",
      "cards": [
        {
          "front": "<span class=\"fc-q\">Max nodes at level L?</span>",
          "back": "<div class=\"fc-a\">2<sup>L</sup>: level 0 has 1, level 1 has 2…</div>",
          "category": "Fact"
        },
        {
          "front": "<span class=\"fc-q\">Strictly binary tree with n leaves has…?</span>",
          "back": "<div class=\"fc-a\">2n − 1 nodes</div>",
          "category": "Fact"
        },
        {
          "front": "<span class=\"fc-q\">Node with no children is called…?</span>",
          "back": "<div class=\"fc-a\">A leaf (external / terminal node), degree 0</div>",
          "category": "Term"
        },
        {
          "front": "<span class=\"fc-q\">Worst-case search in a balanced tree?</span>",
          "back": "<div class=\"fc-a\">log₂(N+1) levels: proportional to log₂ N</div>",
          "category": "Search"
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Topic 6 Quiz: Trees & Binary Trees",
      "count": 8,
      "quizSlug": "07-trees-and-binary-trees"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "tree-terminology-field-notes",
      "text": "Tree terminology: field notes"
    },
    {
      "type": "treeDiagram",
      "alt": "General tree with root A, children B and C, and leaves F, G, H, I and J",
      "maxWidth": 560,
      "tree": {
        "id": "n0",
        "label": "A",
        "children": [
          {
            "id": "n1",
            "label": "B",
            "side": "left",
            "children": [
              {
                "id": "n3",
                "label": "D",
                "side": "left",
                "children": [
                  { "id": "n6", "label": "G", "side": "left" },
                  { "id": "n7", "label": "H", "side": "right" }
                ]
              },
              {
                "id": "n4",
                "label": "E",
                "side": "right",
                "children": [
                  { "id": "n8", "label": "I", "side": "left" },
                  { "id": "n9", "label": "J", "side": "right" }
                ]
              }
            ]
          },
          {
            "id": "n2",
            "label": "C",
            "side": "right",
            "children": [
              { "id": "n5", "label": "F", "side": "right" }
            ]
          }
        ]
      }
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "root",
      "text": "Root"
    },
    {
      "type": "paragraph",
      "html": "The topmost node of the tree; the starting point of the structure. It is the <strong>only node with no parent</strong>, and every non-empty tree has exactly one."
    },
    {
      "type": "paragraph",
      "html": "<i>Example: A</i>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "siblings",
      "text": "Siblings"
    },
    {
      "type": "paragraph",
      "html": "Nodes that <strong>share the same parent</strong>."
    },
    {
      "type": "paragraph",
      "html": "<i>Example: B &amp; C · D &amp; E · G &amp; H · I &amp; J</i>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "internal-nodes",
      "text": "Internal nodes"
    },
    {
      "type": "paragraph",
      "html": "Nodes with <strong>at least one child</strong>; the non-terminal, branch nodes of the tree."
    },
    {
      "type": "paragraph",
      "html": "<i>Example: A, B, C, D, E</i>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "external-nodes-leaf-nodes",
      "text": "External nodes (leaf nodes)"
    },
    {
      "type": "paragraph",
      "html": "Nodes with <strong>no children</strong>: degree 0. Also called terminal nodes."
    },
    {
      "type": "paragraph",
      "html": "<i>Example: F, G, H, I, J</i>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "ancestors",
      "text": "Ancestors"
    },
    {
      "type": "paragraph",
      "html": "All nodes lying on the <strong>path from the root down to that node</strong>, excluding the node itself."
    },
    {
      "type": "paragraph",
      "html": "<i>Ancestors of H → D, B, A</i>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "descendants",
      "text": "Descendants"
    },
    {
      "type": "paragraph",
      "html": "All nodes in the <strong>subtree rooted at that node</strong>, excluding the node itself."
    },
    {
      "type": "paragraph",
      "html": "<i>Descendants of B → D, E, G, H, I, J</i>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "depth-of-a-node",
      "text": "Depth of a node"
    },
    {
      "type": "paragraph",
      "html": "The number of edges on the path from the root to the node. Depth of the root is always <strong>0</strong>."
    },
    {
      "type": "paragraph",
      "html": "<i>Depth of H = 3 (A → B → D → H)</i>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "height-of-a-node-tree",
      "text": "Height of a node / tree"
    },
    {
      "type": "paragraph",
      "html": "<strong>Height of a node:</strong> edges on the longest downward path from it to a leaf. <strong>Height of a tree:</strong> height of the root, i.e. the maximum depth in the tree. Height of any leaf is 0."
    },
    {
      "type": "paragraph",
      "html": "<i>Height of B = 2 · Height of tree = 3</i>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "degree-of-a-node",
      "text": "Degree of a node"
    },
    {
      "type": "paragraph",
      "html": "The <strong>number of children</strong> a node has."
    },
    {
      "type": "paragraph",
      "html": "<i>Degree of A = 2 · Degree of C = 1 · Degree of F = 0</i>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "degree-of-a-tree",
      "text": "Degree of a tree"
    },
    {
      "type": "paragraph",
      "html": "The <strong>maximum degree among all nodes</strong> in the tree."
    },
    {
      "type": "paragraph",
      "html": "<i>Max degree = 2 → binary tree (3 would make it ternary)</i>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "subtree",
      "text": "Subtree"
    },
    {
      "type": "paragraph",
      "html": "A node together with <strong>all its descendants</strong>, every node can be viewed as the root of its own subtree."
    },
    {
      "type": "paragraph",
      "html": "<i>Subtree rooted at D → {D, G, H}</i>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "quick-recap",
      "text": "Quick recap"
    },
    {
      "type": "table",
      "head": [
        "Term",
        "Meaning",
        "Example"
      ],
      "rows": [
        [
          "Root",
          "Topmost node, no parent",
          "A"
        ],
        [
          "Siblings",
          "Same parent",
          "D, E"
        ],
        [
          "Internal node",
          "Has ≥ 1 child",
          "A, B, C, D, E"
        ],
        [
          "External node",
          "No children (leaf)",
          "F, G, H, I, J"
        ],
        [
          "Ancestors",
          "Path from node to root",
          "of G: D, B, A"
        ],
        [
          "Descendants",
          "All nodes below it",
          "of B: D, E, G, H, I, J"
        ],
        [
          "Depth",
          "Edges from root to node",
          "depth(G) = 3"
        ],
        [
          "Height",
          "Longest path down to a leaf",
          "tree height = 3"
        ],
        [
          "Degree of node",
          "Number of children",
          "degree(A) = 2"
        ],
        [
          "Degree of tree",
          "Max node degree",
          "2"
        ],
        [
          "Subtree",
          "Node + all descendants",
          "subtree(D) = {D, G, H}"
        ]
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "the-tree-field-guide",
      "text": "The tree: field guide"
    },
    {
      "type": "paragraph",
      "html": "A tree is a non-linear, hierarchical data structure: a set of nodes joined by edges in which exactly one node; the root, has no parent, and every other node has exactly one. That single-parent rule is what forbids cycles and gives the tree its character: follow any parent link upward and you must, sooner or later, arrive at the root."
    },
    {
      "type": "paragraph",
      "html": "Because the shape is recursive: every node roots a subtree of its own; the vocabulary matters. The eleven terms below describe <em>where</em> a node sits and <em>how much</em> hangs from it. Every example refers to the same specimen, so watch one shape accumulate meaning, term by term."
    },
    {
      "type": "paragraph",
      "html": "The specimen is interactive: click any node, at any point, to read its full record. Values update live."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "root-radix",
      "text": "Root radix"
    },
    {
      "type": "paragraph",
      "html": "The single node from which the whole structure grows. It has <em>no parent</em>, and every other node in the tree is reached by descending from it, which also means every other node is one of its descendants. Remove the root and you no longer have a tree: you have a small forest of its subtrees."
    },
    {
      "type": "paragraph",
      "html": "parent(root) = none &nbsp;·&nbsp; depth(root) = 0"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "siblings-germani",
      "text": "Siblings germani"
    },
    {
      "type": "paragraph",
      "html": "Nodes that share the same parent. B and C are siblings (both children of A); so are D and E, G and H, I and J, but F is an only child. One caution worth writing down: <em>siblings are defined by parentage, not by level.</em> D and F both sit on level 2, yet they answer to different parents (B and C), so they are not siblings."
    },
    {
      "type": "paragraph",
      "html": "siblings(D) = {E} &nbsp;·&nbsp; siblings(F) = ∅"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "internal-nodes-nodi-interni",
      "text": "Internal nodes nodi interni"
    },
    {
      "type": "paragraph",
      "html": "Nodes with <em>at least one child</em>; the branch wood of the structure, sometimes called non-terminal or branch nodes. On this specimen: A, B, C, D, E. Note that internal does not mean “two children”: C is internal with exactly one."
    },
    {
      "type": "paragraph",
      "html": "internal = {A, B, C, D, E}: 5 nodes &nbsp;·&nbsp; degree ≥ 1"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "external-nodes-folia",
      "text": "External nodes folia"
    },
    {
      "type": "paragraph",
      "html": "Nodes with <em>no children</em>: degree 0, also called leaves or terminal nodes, because every path through the tree ends at one of them. Here: F, G, H, I, J. A pleasing identity holds for any binary tree: the number of leaves equals the number of two-child nodes plus one, on this specimen, 5 = 4 + 1."
    },
    {
      "type": "paragraph",
      "html": "leaf ⇔ degree 0 &nbsp;·&nbsp; leaves = {F, G, H, I, J}"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "ancestors-majores",
      "text": "Ancestors majores"
    },
    {
      "type": "paragraph",
      "html": "All the nodes on the path from the root down to a given node, excluding the node itself. The ancestors of H are D (its parent), then B, then A: every ancestor list climbs strictly upward and ends at the root, which itself has none. “Ancestor” and “descendant” are converse relations. B is an ancestor of H precisely because H is a descendant of B."
    },
    {
      "type": "paragraph",
      "html": "ancestors(H) = D ← B ← A"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "descendants-posteri",
      "text": "Descendants posteri"
    },
    {
      "type": "paragraph",
      "html": "Everything inside the subtree rooted at a node, the node itself excluded: its children, its children’s children, and so on down to the leaves. The descendants of B are D, E, G, H, I, J, six nodes. A leaf, having nothing beneath it, has no descendants."
    },
    {
      "type": "paragraph",
      "html": "descendants(B) = {D, E, G, H, I, J}: 6"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "depth-of-a-node-profunditas",
      "text": "Depth of a node profunditas"
    },
    {
      "type": "paragraph",
      "html": "The number of <em>edges</em> on the path from the root down to the node. The root sits at depth 0, and each step down a branch adds one, so depth measures how far a node is buried. Nodes of equal depth form a level; H, three edges below A, lives on level 3 together with G, I and J. (Counting conventions differ: see the footnote.)"
    },
    {
      "type": "paragraph",
      "html": "depth(H) = 3 &nbsp;(A → B → D → H)"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "height-altitudo",
      "text": "Height altitudo"
    },
    {
      "type": "paragraph",
      "html": "The height of a <em>node</em> is the number of edges on the longest downward path from it to a leaf, a leaf is height 0, D is 1, B is 2. The height of the <em>tree</em> is the height of its root, which is also the maximum depth of any node: 3 here, along A → B → D → G. Depth is measured upward from the root, height downward from the node; the same path counted from opposite ends."
    },
    {
      "type": "paragraph",
      "html": "height(tree) = height(root) = max depth = 3"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "degree-of-a-node-gradus",
      "text": "Degree of a node gradus"
    },
    {
      "type": "paragraph",
      "html": "The number of children a node has, nothing subtler than that. deg(A) = 2, deg(C) = 1, deg(F) = 0. A node of degree 0 is precisely a leaf, so “external node” restates “degree 0” in other words."
    },
    {
      "type": "paragraph",
      "html": "deg(A) = 2 &nbsp;·&nbsp; deg(C) = 1 &nbsp;·&nbsp; deg(F) = 0"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "degree-of-a-tree-gradus-maximus",
      "text": "Degree of a tree gradus maximus"
    },
    {
      "type": "paragraph",
      "html": "The maximum degree over <em>all</em> nodes in the tree; the width of its widest family. Here the maximum is 2, shared by A, B and E, so this specimen is a binary tree; a maximum of 3 would make it ternary, and so on. The degree of a tree bounds how many children a node <em>may</em> have, not how many it must."
    },
    {
      "type": "paragraph",
      "html": "degree(tree) = max over v of deg(v) = 2 → binary tree"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "subtree-arbor-partialis",
      "text": "Subtree arbor partialis"
    },
    {
      "type": "paragraph",
      "html": "Any node of the tree together with all of its descendants and the edges between them. Every node can be regarded as the root of the subtree it defines, which is why trees are the canonical <em>recursive</em> structure: a tree is a root plus a collection of subtrees. The subtree rooted at D is {D, G, H}, a perfectly good tree of its own."
    },
    {
      "type": "paragraph",
      "html": "subtree(D) = {D, G, H} &nbsp;·&nbsp; 3 nodes · 2 edges"
    },
  ]
};

export default chapter;
