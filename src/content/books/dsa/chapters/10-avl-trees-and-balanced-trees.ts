import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "10-avl-trees-and-balanced-trees",
    "number": 10,
    "title": "AVL Trees & Balanced Trees",
    "subtitle": "Lecture 8/9 · AVL trees 2026",
    "kind": "topic",
    "words": 1582,
    "minutes": 8
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "self-balancing-search-trees",
      "text": "Self-balancing search trees"
    },
    {
      "type": "paragraph",
      "html": "Plain BSTs degenerate when data arrives in order. The family of <b>balanced search trees</b> fixes this: <b>AVL trees</b>, 2-3 trees, 2-3-4 trees, B-trees, and <b>Red-Black trees</b>."
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Definition",
      "html": "An <b>AVL tree</b> is a <b>self-balancing binary search tree</b>. The <b>balance factor (BF)</b> of every node must be <b>−1, 0 or +1</b>:<br><b>BF = height(left subtree) − height(right subtree)</b>. Every AVL tree is a BST, but not every BST is an AVL tree."
    },
    {
      "type": "viz",
      "kind": "avlTree",
      "caption": "A valid AVL tree — balance factor ∈ {−1, 0, +1} at every node"
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Exam alert",
      "html": "You will be shown a BST and asked “is this an AVL tree?” — compute BF for <b>every node</b>. One node with BF = ±2 disqualifies it. A right subtree of height 3 vs left of height 1 (BF = −2) means <b>not AVL</b>."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "maintaining-balance",
      "text": "Maintaining balance"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "Inserting a node can raise a tree's height by <b>at most 1</b>; removing can lower it by at most 1.",
        "After every insert/delete, walk <b>back up to the root</b> updating heights; if a new balance factor reaches <b>±2</b>, restore balance with a <b>rotation</b> around that node.",
        "Insertion into an AVL tree runs in <b>O(log n)</b>; new nodes are always inserted as <b>leaves</b> (BST logic first, then rebalance)."
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "the-four-rotations",
      "text": "The four rotations"
    },
    {
      "type": "table",
      "head": [
        "Case",
        "When it happens",
        "Cure"
      ],
      "rows": [
        [
          "<b>LL</b>",
          "Inserted into <b>Left subtree of Left child</b> → BF(parent) = +2",
          "Single <b>Right</b> rotation"
        ],
        [
          "<b>RR</b>",
          "Inserted into <b>Right subtree of Right child</b> → BF = −2",
          "Single <b>Left</b> rotation"
        ],
        [
          "<b>LR</b>",
          "Inserted into <b>Right subtree of Left child</b>",
          "Left rotation on child, then Right rotation on parent"
        ],
        [
          "<b>RL</b>",
          "Inserted into <b>Left subtree of Right child</b>",
          "Right rotation on child, then Left rotation on parent"
        ]
      ],
      "highlightRows": [
        0,
        1,
        2,
        3
      ]
    },
    {
      "type": "paragraph",
      "html": "The player below speaks a compact notation: <b>z</b> = the unbalanced node (BF ±2); <b>y</b> = its child on the heavy side; <b>x</b> = the child of y on the side where the new node was inserted; <b>T₀–T₃</b> = the four subtrees hanging off x, y, z. Compact rule: LL → rotate right · RR → rotate left · LR/RL → two rotations (opposite then same)."
    },
    {
      "type": "viz",
      "kind": "avlRotations",
      "caption": "Rotation case player — LL, RR, LR and RL step by step"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>LL — insert into the LEFT subtree of the LEFT child</b> (z → y → x all lean left; BF(z) = +2, BF(y) = +1). Cure: one <b>right rotation at z</b> — y rises to head the subtree, z drops to y's right, and y's old right child T₂ passes to z as its new left child. After: y(x(T₀, T₁), z(T₂, T₃)) — every |BF| ≤ 1.",
        "<b>RR — insert into the RIGHT subtree of the RIGHT child</b> (z → y → x all lean right; BF(z) = −2, BF(y) = −1). Cure: one <b>left rotation at z</b> — y rises to head the subtree, z drops to y's left, and y's old left child T₁ passes to z as its new right child. After: y(z(T₀, T₁), x(T₂, T₃)).",
        "<b>LR — insert into the RIGHT subtree of the LEFT child</b> (the z → y → x path zig-zags; BF(z) = +2, BF(y) = −1). Cure: <b>two rotations</b> — first a <b>left rotation at y</b> straightens the bend into a plain left-left line, then a <b>right rotation at z</b> finishes the job. After: x(y(T₀, T₁), z(T₂, T₃)).",
        "<b>RL — insert into the LEFT subtree of the RIGHT child</b> (the zig-zag runs the other way; BF(z) = −2, BF(y) = +1). Cure: <b>two rotations</b> — first a <b>right rotation at y</b>, then a <b>left rotation at z</b>. After: x(z(T₀, T₁), y(T₂, T₃))."
      ]
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "Naming mnemonic",
      "html": "The rotation name describes the <b>insertion path</b> from the unbalanced node: L-L → one right rotation · R-R → one left rotation · L-R → left rotation on the child, then right on the node · R-L → right on the child, then left on the node."
    },
    {
      "type": "example",
      "title": "Build an AVL tree by inserting 1…8",
      "bodyHtml": "<p>Insert 1, 2, 3 → after 3, root 1 has BF = −2 (RR case) → single left rotation ⇒ 2 becomes root (1 left, 3 right).</p>",
      "solutionHtml": "<p>4 goes right of 3. Insert 5: node 3 has BF = −2 (RR) → left rotation around 3 ⇒ subtree now 4(3,5). Insert 6: root 2 has BF = −2 (RR) → left rotation ⇒ <b>4 becomes the new root</b> with left subtree 2(1,3) and right 5(–,6). Insert 7: BF(5) = −2 → left rotation ⇒ 6(5,7). Insert 8: BF(7) = −2 → left rotation ⇒ 8 takes 7's place as 6's right child. Final root = <b>4</b> — perfectly balanced.</p>"
    },
    {
      "type": "accordion",
      "items": [
        {
          "title": "Exercise — is this a balanced tree? (from lecture)▾",
          "html": "<p>Node 8's subtree has height 3 while node 18's subtree has height 1 → the root's BF = 3 − 1 = <b>+2</b> ⇒ <b>not an AVL tree</b>. Also check every node: one violation is enough to disqualify.</p>"
        }
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "avl-vs-plain-bst",
      "text": "AVL vs plain BST"
    },
    {
      "type": "table",
      "head": [
        "Aspect",
        "BST",
        "AVL"
      ],
      "rows": [
        [
          "BST property",
          "✓",
          "✓"
        ],
        [
          "Balance factor ≤ 1",
          "✗ (can degenerate)",
          "✓ enforced by rotations"
        ],
        [
          "Search worst case",
          "O(n)",
          "O(log n)"
        ],
        [
          "Insert / delete",
          "Simple",
          "Same logic + height updates + possible rotation"
        ]
      ],
      "nowrapCols": [
        1,
        2
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "red-black-trees-introduction",
      "text": "Red-Black trees (introduction)"
    },
    {
      "type": "paragraph",
      "html": "A Red-Black tree is another BST variant where <b>every node is coloured RED or BLACK</b>. Its rules:"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "It must be a <b>Binary Search Tree</b>.",
        "The <b>ROOT must be BLACK</b>.",
        "Children of a <b>RED node must be BLACK</b> — no two consecutive red nodes.",
        "Every root-to-leaf path has the <b>same number of BLACK nodes</b>.",
        "Every <b>new node is inserted RED</b>.",
        "Every leaf (<b>NULL node</b>) is BLACK."
      ]
    },
    {
      "type": "paragraph",
      "html": "After each insertion, check the properties; fix violations with a <b>Recolor</b>, or a <b>Rotation followed by Recolor</b>. Insertion logic: if the parent is BLACK → done. If the parent is RED: check the parent's sibling — if BLACK/NULL, rotate + recolor; if RED, recolor and recheck upward."
    },
    {
      "type": "flashcards",
      "cards": [
        {
          "front": "<span class=\"fc-q\">Balance factor = ?</span>",
          "back": "<div class=\"fc-a\">height(left subtree) − height(right subtree)</div>",
          "category": "Formula"
        },
        {
          "front": "<span class=\"fc-q\">Valid balance factors in an AVL tree?</span>",
          "back": "<div class=\"fc-a\">Only −1, 0 and +1</div>",
          "category": "Rule"
        },
        {
          "front": "<span class=\"fc-q\">BF = +2, insertion in Left-Left → ?</span>",
          "back": "<div class=\"fc-a\">Single RIGHT (LL) rotation</div>",
          "category": "Rotation"
        },
        {
          "front": "<span class=\"fc-q\">Colour of a newly inserted node?</span>",
          "back": "<div class=\"fc-a\">RED — always (and the root is always BLACK)</div>",
          "category": "Red-Black"
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Topic 9 Quiz — AVL Trees",
      "count": 8,
      "quizSlug": "10-avl-trees-and-balanced-trees"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "balance-factor-and-the-four-rotations",
      "text": "Balance factor & the four rotations"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "what-is-an-avl-tree",
      "text": "What is an AVL Tree?"
    },
    {
      "type": "paragraph",
      "html": "Invented by <b>Adelson-Velsky &amp; Landis</b> (1962) — the <b>first self-balancing BST</b> in history."
    },
    {
      "type": "paragraph",
      "html": "A normal BST can degenerate into a <b>linked list</b> (e.g. inserting 1,2,3,…,10) making search <b>O(n)</b>. An AVL tree detects imbalance and <b>repairs itself with rotations</b>, so search stays <b>O(log n)</b> — always."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "balance-factor-bf-the-heart-of-avl",
      "text": "⚖ Balance Factor (BF) — The Heart of AVL"
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Formula",
      "html": "BF(node) = Height(Left subtree) − Height(Right subtree)"
    },
    {
      "type": "paragraph",
      "html": "Height of an <b>empty subtree = −1</b> &nbsp;•&nbsp; Height of a <b>leaf = 0</b>"
    },
    {
      "type": "table",
      "head": [
        "BF value",
        "Meaning",
        "Status"
      ],
      "rows": [
        [
          "<b>0</b>",
          "Both subtrees equal height",
          " Perfect"
        ],
        [
          "<b>+1</b>",
          "Left is 1 level taller",
          " Allowed"
        ],
        [
          "<b>−1</b>",
          "Right is 1 level taller",
          " Allowed"
        ],
        [
          "<b>≥ +2</b>",
          "Left-heavy",
          "❌ Rotate!"
        ],
        [
          "<b>≤ −2</b>",
          "Right-heavy",
          "❌ Rotate!"
        ]
      ]
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "Memory hook",
      "html": "<b>The AVL rule:</b> EVERY node must have BF ∈ <b>{−1, 0, +1}</b>. A leaf's BF is always <b>0</b>."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "spot-the-difference",
      "text": "Spot the Difference"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "valid-avl-tree",
      "text": "Valid AVL Tree"
    },
    {
      "type": "figure",
      "svg": "<svg viewBox=\"0 0 235 178\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><line x1=\"118\" y1=\"34\" x2=\"72\" y2=\"96\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"/><line x1=\"118\" y1=\"34\" x2=\"164\" y2=\"96\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"/><line x1=\"72\" y1=\"96\" x2=\"44\" y2=\"158\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"/><line x1=\"72\" y1=\"96\" x2=\"100\" y2=\"158\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"/><circle cx=\"118\" cy=\"34\" r=\"17\" fill=\"var(--fig-soft)\" stroke=\"var(--fig-primary)\" stroke-width=\"2\"/><text x=\"118\" y=\"35\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"var(--ink)\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">30</text><circle cx=\"72\" cy=\"96\" r=\"17\" fill=\"var(--fig-soft)\" stroke=\"var(--fig-primary)\" stroke-width=\"2\"/><text x=\"72\" y=\"97\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"var(--ink)\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">20</text><circle cx=\"164\" cy=\"96\" r=\"17\" fill=\"var(--fig-soft)\" stroke=\"var(--fig-primary)\" stroke-width=\"2\"/><text x=\"164\" y=\"97\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"var(--ink)\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">40</text><circle cx=\"44\" cy=\"158\" r=\"17\" fill=\"var(--fig-soft)\" stroke=\"var(--fig-primary)\" stroke-width=\"2\"/><text x=\"44\" y=\"159\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"var(--ink)\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">10</text><circle cx=\"100\" cy=\"158\" r=\"17\" fill=\"var(--fig-soft)\" stroke=\"var(--fig-primary)\" stroke-width=\"2\"/><text x=\"100\" y=\"159\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"var(--ink)\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">25</text><text x=\"142\" y=\"26\" text-anchor=\"middle\" fill=\"var(--ok)\" font-size=\"11\" font-weight=\"700\" font-family=\"monospace\">+1</text><text x=\"96\" y=\"88\" text-anchor=\"middle\" fill=\"var(--ok)\" font-size=\"11\" font-weight=\"700\" font-family=\"monospace\">0</text><text x=\"188\" y=\"88\" text-anchor=\"middle\" fill=\"var(--ok)\" font-size=\"11\" font-weight=\"700\" font-family=\"monospace\">0</text><text x=\"68\" y=\"150\" text-anchor=\"middle\" fill=\"var(--ok)\" font-size=\"11\" font-weight=\"700\" font-family=\"monospace\">0</text><text x=\"124\" y=\"150\" text-anchor=\"middle\" fill=\"var(--ok)\" font-size=\"11\" font-weight=\"700\" font-family=\"monospace\">0</text></svg>",
      "alt": "Valid AVL tree: 30 with left child 20 (children 10 and 25) and right child 40 — every balance factor is 0 or +1."
    },
    {
      "type": "paragraph",
      "html": "All BF ∈ {−1, 0, +1} → balanced ✔"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "not-an-avl-tree",
      "text": "❌ NOT an AVL Tree"
    },
    {
      "type": "figure",
      "svg": "<svg viewBox=\"0 0 235 178\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><line x1=\"55\" y1=\"40\" x2=\"117\" y2=\"98\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"/><line x1=\"117\" y1=\"98\" x2=\"179\" y2=\"156\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"/><circle cx=\"55\" cy=\"40\" r=\"17\" fill=\"var(--danger-soft)\" stroke=\"var(--danger)\" stroke-width=\"2\"/><text x=\"55\" y=\"41\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"var(--ink)\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">10</text><circle cx=\"117\" cy=\"98\" r=\"17\" fill=\"var(--fig-soft)\" stroke=\"var(--fig-primary)\" stroke-width=\"2\"/><text x=\"117\" y=\"99\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"var(--ink)\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">20</text><circle cx=\"179\" cy=\"156\" r=\"17\" fill=\"var(--fig-soft)\" stroke=\"var(--fig-primary)\" stroke-width=\"2\"/><text x=\"179\" y=\"157\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"var(--ink)\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">30</text><text x=\"79\" y=\"32\" text-anchor=\"middle\" fill=\"var(--danger)\" font-size=\"11\" font-weight=\"700\" font-family=\"monospace\">−2</text><text x=\"141\" y=\"90\" text-anchor=\"middle\" fill=\"var(--ok)\" font-size=\"11\" font-weight=\"700\" font-family=\"monospace\">−1</text><text x=\"203\" y=\"148\" text-anchor=\"middle\" fill=\"var(--ok)\" font-size=\"11\" font-weight=\"700\" font-family=\"monospace\">0</text></svg>",
      "alt": "Not an AVL tree: 10 has only a right chain 20 then 30 — BF(10) is −2, so the AVL rule is broken and a rotation is required."
    },
    {
      "type": "paragraph",
      "html": "It's a valid BST, but BF = −2 breaks the AVL rule → rotation needed!"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "the-4-rotation-cases-when-bf-hits-2",
      "text": "The 4 Rotation Cases (when BF hits ±2)"
    },
    {
      "type": "paragraph",
      "html": "The case name = the shape of the problem path. Red node = unbalanced (|BF| = 2)."
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "↻ LL Case — Single RIGHT Rotation",
      "html": "<span class=\"cond\">BF = +2 and left child BF ≥ 0</span> <div class=\"miniRow\"> <div><svg id=\"svgLLb\" class=\"mini\" viewBox=\"0 0 235 178\"></svg><p class=\"cap\">Before</p></div> <div class=\"arrow\">→</div> <div><svg id=\"svgLLa\" class=\"mini\" viewBox=\"0 0 235 178\"></svg><p class=\"cap\">After ↻</p></div> </div> <p class=\"cap\">Inserted in the <b>L</b>eft of the <b>L</b>eft child → rotate right once.</p>"
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "↺ RR Case — Single LEFT Rotation",
      "html": "<span class=\"cond\">BF = −2 and right child BF ≤ 0</span> <div class=\"miniRow\"> <div><svg id=\"svgRRb\" class=\"mini\" viewBox=\"0 0 235 178\"></svg><p class=\"cap\">Before</p></div> <div class=\"arrow\">→</div> <div><svg id=\"svgRRa\" class=\"mini\" viewBox=\"0 0 235 178\"></svg><p class=\"cap\">After ↺</p></div> </div> <p class=\"cap\">Inserted in the <b>R</b>ight of the <b>R</b>ight child → rotate left once.</p>"
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "↺↻ LR Case — Double Rotation",
      "html": "<span class=\"cond\">BF = +2 and left child BF &lt; 0</span> <div class=\"miniRow\"> <div><svg id=\"svgLRb\" class=\"mini\" viewBox=\"0 0 235 178\"></svg><p class=\"cap\">Before</p></div> <div class=\"arrow\">→</div> <div><svg id=\"svgLRa\" class=\"mini\" viewBox=\"0 0 235 178\"></svg><p class=\"cap\">After ↺↻</p></div> </div> <p class=\"cap\">Zig-zag shape → LEFT-rotate the left child, then RIGHT-rotate the node.</p>"
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "↻↺ RL Case — Double Rotation",
      "html": "<span class=\"cond\">BF = −2 and right child BF &gt; 0</span> <div class=\"miniRow\"> <div><svg id=\"svgRLb\" class=\"mini\" viewBox=\"0 0 235 178\"></svg><p class=\"cap\">Before</p></div> <div class=\"arrow\">→</div> <div><svg id=\"svgRLa\" class=\"mini\" viewBox=\"0 0 235 178\"></svg><p class=\"cap\">After ↻↺</p></div> </div> <p class=\"cap\">Zig-zag shape → RIGHT-rotate the right child, then LEFT-rotate the node.</p>"
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "Memory hook",
      "html": "<b>Memory trick:</b> <b>L</b><b>L</b> = straight Left line → one <b>Right</b> rotation • <b>R</b><b>R</b> = straight Right line → one <b>Left</b> rotation • <b>LR</b> / <b>RL</b> = zig-zag → <b>two</b> rotations (fix the bend first!).<br> Why does one rotation always fix it? The rotation promotes the middle value of the three nodes — which is exactly what sorted order demands!"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "interactive-avl-playground",
      "text": "Interactive AVL Playground"
    },
    {
      "type": "paragraph",
      "html": "Insert values and watch the <b>BF badges</b> update. When a badge hits |BF| = 2, the status line names the case (LL, RR, LR or RL) and the tree <b>rotates itself</b> — step by step!"
    },
    {
      "type": "viz",
      "kind": "avlInsert",
      "caption": "AVL rebalance playground — insert keys and watch the rotations"
    },
    {
      "type": "paragraph",
      "html": "Try: Reset → insert <b>65</b> then <b>10</b> (no rotation) → then insert <b>5</b> (LL rotation!). Or press <b>Insert 1…10</b> for the classic ascending stress sequence."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "avl-vs-normal-bst",
      "text": "AVL vs Normal BST"
    },
    {
      "type": "table",
      "head": [
        "Feature",
        "Normal BST",
        "AVL Tree"
      ],
      "rows": [
        [
          "Balance rule",
          "None",
          "<b>BF ∈ {−1, 0, +1}</b> for every node"
        ],
        [
          "Worst-case search",
          "O(n) — skewed tree",
          "O(log n) — guaranteed"
        ],
        [
          "Self-balancing",
          "❌",
          " via LL/RR/LR/RL rotations"
        ],
        [
          "Extra storage per node",
          "—",
          "Height (or BF)"
        ],
        [
          "Insert/Delete cost",
          "O(h)",
          "O(log n) + O(1)–O(log n) rotations"
        ],
        [
          "Best for",
          "Mostly random data",
          "Search-heavy, sorted-prone data"
        ]
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "test-yourself",
      "text": "Test Yourself"
    },
    {
      "type": "paragraph",
      "html": "Click an answer — instant feedback!"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "red-black-trees",
      "text": "Red-black trees"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "what-is-a-red-black-tree",
      "text": "What is a Red-Black Tree?"
    },
    {
      "type": "paragraph",
      "html": "Invented by <b>Rudolf Bayer (1972)</b>, refined by <b>Guibas &amp; Sedgewick (1978)</b>. A BST where every node carries a <b>color bit</b> used to stay <i>approximately</i> balanced."
    },
    {
      "type": "paragraph",
      "html": "Less strictly balanced than AVL, but <b>far fewer rotations</b> on updates → the industry favorite for frequent <b>insert/delete</b> workloads."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "the-5-golden-rules",
      "text": "The 5 Golden Rules"
    },
    {
      "type": "paragraph",
      "html": "Every Red-Black tree must satisfy ALL of them — the playground checks them for you!"
    },
    {
      "type": "table",
      "head": [
        "#",
        "Rule",
        "Meaning"
      ],
      "rows": [
        [
          "1",
          "<b>Color rule</b>",
          "Every node is <span class=\"pill r\">RED</span> or <span class=\"pill\" style=\"background:#111827;color:#fff;\">BLACK</span>"
        ],
        [
          "2",
          "<b>Root rule</b>",
          "The <b>root is always BLACK</b>"
        ],
        [
          "3",
          "<b>NIL rule</b>",
          "Every empty leaf (NIL) counts as <b>BLACK</b>"
        ],
        [
          "4",
          "<b>No Red-Red </b>",
          "A <b>RED node can never have a RED child</b>"
        ],
        [
          "5",
          "<b>Black-Height </b>",
          "Every root→NIL path contains the <b>same number of BLACK nodes</b>"
        ]
      ]
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "Memory hook",
      "html": "<b>Why it works:</b> Rule 5 makes all paths equal in <i>blacks</i>, Rule 4 caps reds at 1-per-black → <b>longest path ≤ 2 × shortest path</b> → height ≤ 2·log₂(n+1) → all operations <b>O(log n)</b>, guaranteed.<br> Mnemonic: <i>\"Roots are black, reds don't stack, blacks are counted on every track.\"</i>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "spot-the-difference",
      "text": "Spot the Difference"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "valid-red-black-tree",
      "text": "Valid Red-Black Tree"
    },
    {
      "type": "figure",
      "svg": "<svg viewBox=\"0 0 300 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><line x1=\"150\" y1=\"24\" x2=\"95\" y2=\"68\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"/><line x1=\"150\" y1=\"24\" x2=\"205\" y2=\"68\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"/><line x1=\"95\" y1=\"68\" x2=\"58\" y2=\"112\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"/><line x1=\"95\" y1=\"68\" x2=\"110\" y2=\"112\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"/><line x1=\"205\" y1=\"68\" x2=\"182\" y2=\"112\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"/><line x1=\"205\" y1=\"68\" x2=\"248\" y2=\"112\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"/><line x1=\"248\" y1=\"112\" x2=\"222\" y2=\"156\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"/><line x1=\"248\" y1=\"112\" x2=\"274\" y2=\"156\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"/><circle cx=\"150\" cy=\"24\" r=\"14\" fill=\"var(--ink)\" stroke=\"var(--ink-faint)\" stroke-width=\"2\"/><text x=\"150\" y=\"25\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"var(--paper)\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">13</text><circle cx=\"95\" cy=\"68\" r=\"14\" fill=\"#dc2626\" stroke=\"#b91c1c\" stroke-width=\"2\"/><text x=\"95\" y=\"69\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">8</text><circle cx=\"205\" cy=\"68\" r=\"14\" fill=\"#dc2626\" stroke=\"#b91c1c\" stroke-width=\"2\"/><text x=\"205\" y=\"69\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">17</text><circle cx=\"58\" cy=\"112\" r=\"14\" fill=\"var(--ink)\" stroke=\"var(--ink-faint)\" stroke-width=\"2\"/><text x=\"58\" y=\"113\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"var(--paper)\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">1</text><circle cx=\"110\" cy=\"112\" r=\"14\" fill=\"var(--ink)\" stroke=\"var(--ink-faint)\" stroke-width=\"2\"/><text x=\"110\" y=\"113\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"var(--paper)\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">11</text><circle cx=\"182\" cy=\"112\" r=\"14\" fill=\"var(--ink)\" stroke=\"var(--ink-faint)\" stroke-width=\"2\"/><text x=\"182\" y=\"113\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"var(--paper)\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">15</text><circle cx=\"248\" cy=\"112\" r=\"14\" fill=\"var(--ink)\" stroke=\"var(--ink-faint)\" stroke-width=\"2\"/><text x=\"248\" y=\"113\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"var(--paper)\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">25</text><circle cx=\"222\" cy=\"156\" r=\"14\" fill=\"#dc2626\" stroke=\"#b91c1c\" stroke-width=\"2\"/><text x=\"222\" y=\"157\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">22</text><circle cx=\"274\" cy=\"156\" r=\"14\" fill=\"#dc2626\" stroke=\"#b91c1c\" stroke-width=\"2\"/><text x=\"274\" y=\"157\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">27</text></svg>",
      "alt": "A valid red-black tree: black root 13, red children 8 and 17, black nodes 1, 11, 15 and 25, red leaves 22 and 27 — every root-to-NIL path has exactly three black nodes."
    },
    {
      "type": "paragraph",
      "html": "Root black • no red-red • every root→NIL path has exactly <b>3 blacks</b> ✔"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "invalid-rule-4-broken",
      "text": "❌ Invalid (Rule 4 broken)"
    },
    {
      "type": "figure",
      "svg": "<svg viewBox=\"0 0 300 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><line x1=\"140\" y1=\"40\" x2=\"85\" y2=\"102\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"/><line x1=\"140\" y1=\"40\" x2=\"195\" y2=\"102\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"/><line x1=\"195\" y1=\"102\" x2=\"243\" y2=\"160\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"/><ellipse cx=\"219\" cy=\"131\" rx=\"52\" ry=\"52\" fill=\"none\" stroke=\"var(--danger)\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/><circle cx=\"140\" cy=\"40\" r=\"15\" fill=\"var(--ink)\" stroke=\"var(--ink-faint)\" stroke-width=\"2\"/><text x=\"140\" y=\"41\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"var(--paper)\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">10</text><circle cx=\"85\" cy=\"102\" r=\"15\" fill=\"var(--ink)\" stroke=\"var(--ink-faint)\" stroke-width=\"2\"/><text x=\"85\" y=\"103\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"var(--paper)\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">5</text><circle cx=\"195\" cy=\"102\" r=\"15\" fill=\"#dc2626\" stroke=\"#b91c1c\" stroke-width=\"2\"/><text x=\"195\" y=\"103\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">20</text><circle cx=\"243\" cy=\"160\" r=\"15\" fill=\"#dc2626\" stroke=\"#b91c1c\" stroke-width=\"2\"/><text x=\"243\" y=\"161\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">30</text><text x=\"219\" y=\"58\" text-anchor=\"middle\" fill=\"var(--danger)\" font-size=\"12.5\" font-weight=\"700\">red-red ✗</text></svg>",
      "alt": "Invalid red-black tree: red node 20 has a red child 30, breaking the no-red-red rule, and the two sides have unequal black heights."
    },
    {
      "type": "paragraph",
      "html": "20<span style=\"color:#ef4444;\">RED</span> → 30<span style=\"color:#ef4444;\">RED</span>: a red-red pair! Also unequal black counts."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "insertion-always-insert-red",
      "text": "➕ Insertion — Always Insert RED!"
    },
    {
      "type": "paragraph",
      "html": "A red node can only break <b>Rule 4</b> locally (easy fix). A black node would break Rule 5 on <i>every</i> path — much worse!"
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Case A — Uncle is RED → RECOLOR",
      "html": "<span class=\"cond\">No rotation needed!</span> <div class=\"miniRow\"> <div><svg id=\"svgRecB\" class=\"mini\" viewBox=\"0 0 300 180\"></svg><p class=\"cap\">Before: red-red violation </p></div> <div class=\"arrow\">→</div> <div><svg id=\"svgRecA\" class=\"mini\" viewBox=\"0 0 300 180\"></svg><p class=\"cap\">After: recolor &amp; push red up</p></div> </div> <ol class=\"steps\"> <li>Parent &amp; Uncle → <b>BLACK</b></li> <li>Grandparent → <b>RED</b></li> <li>Continue checking <b>from the grandparent</b> (redness moves up)</li> <li>If grandparent is root → recolor root <b>BLACK</b> (Rule 2) and stop</li> </ol>"
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "⚫ Case B — Uncle is BLACK → ROTATE + RECOLOR",
      "html": "<span class=\"cond\">Same LL / RR / LR / RL shapes as AVL!</span> <div class=\"miniRow\"> <div><svg id=\"svgRotB\" class=\"mini\" viewBox=\"0 0 300 180\"></svg><p class=\"cap\">Before: RR shape, uncle black</p></div> <div class=\"arrow\">→</div> <div><svg id=\"svgRotA\" class=\"mini\" viewBox=\"0 0 300 180\"></svg><p class=\"cap\">After: rotate + recolor ↺</p></div> </div> <ol class=\"steps\"> <li><b>LL</b> → RIGHT-rotate grandparent | <b>RR</b> → LEFT-rotate grandparent</li> <li><b>LR / RL</b> → two rotations (straighten the zig-zag first)</li> <li>Recolor: middle node → <b>BLACK</b>, its two children → <b>RED</b></li> <li> After a rotation fix, the violation is <b>gone for good</b> (no cascade!)</li> </ol>"
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "Memory hook",
      "html": "<b>Memory trick:</b> <b>Red uncle → paint it.</b> <b>Black uncle → rotate it.</b><br>Recoloring may <i>cascade upward</i>; a rotation always <i>terminates</i> the fix."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "deletion-the-short-version",
      "text": "➖ Deletion (The Short Version)"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "Standard BST delete — two children? Replace with <b>in-order successor</b> (which adopts the deleted node's color).",
        "If the removed node was <b>RED</b> → black-heights unchanged → <b>no fix-up needed</b>",
        "If it was <b>BLACK</b> → one path lost a black node → the missing black is treated as a <b>\"double-black\"</b>.",
        "Double-black is fixed by examining the <b>sibling</b>: recolor / rotate cases (1–4), pushing or transferring blackness until Rule 5 is restored."
      ]
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "Memory hook",
      "html": "<b>Exam tip:</b> deletion fix-up is the most complex part of RB trees — exams usually focus on <b>properties + insertion</b>. Try deletions in the playground and watch the sibling cases fire!"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "interactive-playground",
      "text": "Red-Black Fixup — Worked Example"
    },
    {
      "type": "paragraph",
      "html": "When an insertion creates a <b>red-red pair</b>, the tree looks at the <b>uncle</b> first: a <b>red uncle</b> → cheap <b>recolor</b> (parent and uncle turn black, the grandparent turns red; if that grandparent is the root it is repainted black at the end). A <b>black uncle</b> → rotate, using the <b>same four rotation cases as AVL trees</b>."
    },
    {
      "type": "figure",
      "svg": "<svg viewBox=\"0 0 700 320\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><g transform=\"translate(8,24)\"><line x1=\"117\" y1=\"44\" x2=\"72\" y2=\"116\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"/><line x1=\"117\" y1=\"44\" x2=\"162\" y2=\"116\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"/><line x1=\"72\" y1=\"116\" x2=\"44\" y2=\"190\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"/><circle cx=\"117\" cy=\"44\" r=\"16\" fill=\"var(--ink)\" stroke=\"var(--ink-faint)\" stroke-width=\"2\"/><text x=\"117\" y=\"45\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"var(--paper)\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">13</text><circle cx=\"72\" cy=\"116\" r=\"16\" fill=\"#dc2626\" stroke=\"#b91c1c\" stroke-width=\"2\"/><text x=\"72\" y=\"117\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">8</text><circle cx=\"162\" cy=\"116\" r=\"16\" fill=\"#dc2626\" stroke=\"#b91c1c\" stroke-width=\"2\"/><text x=\"162\" y=\"117\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">17</text><circle cx=\"44\" cy=\"190\" r=\"16\" fill=\"#dc2626\" stroke=\"#b91c1c\" stroke-width=\"2\"/><text x=\"44\" y=\"191\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">1</text><text x=\"117\" y=\"252\" text-anchor=\"middle\" fill=\"var(--ink-muted)\" font-size=\"12.5\" font-weight=\"600\">1 · Insert 1 (red)</text><line x1=\"352\" y1=\"44\" x2=\"307\" y2=\"116\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"/><line x1=\"352\" y1=\"44\" x2=\"397\" y2=\"116\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"/><line x1=\"307\" y1=\"116\" x2=\"279\" y2=\"190\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"/><ellipse cx=\"293\" cy=\"153\" rx=\"46\" ry=\"46\" fill=\"none\" stroke=\"var(--danger)\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/><circle cx=\"352\" cy=\"44\" r=\"16\" fill=\"var(--ink)\" stroke=\"var(--ink-faint)\" stroke-width=\"2\"/><text x=\"352\" y=\"45\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"var(--paper)\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">13</text><circle cx=\"307\" cy=\"116\" r=\"16\" fill=\"#dc2626\" stroke=\"#b91c1c\" stroke-width=\"2\"/><text x=\"307\" y=\"117\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">8</text><circle cx=\"397\" cy=\"116\" r=\"16\" fill=\"#dc2626\" stroke=\"#b91c1c\" stroke-width=\"2\"/><text x=\"397\" y=\"117\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">17</text><circle cx=\"279\" cy=\"190\" r=\"16\" fill=\"#dc2626\" stroke=\"#b91c1c\" stroke-width=\"2\"/><text x=\"279\" y=\"191\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">1</text><text x=\"352\" y=\"252\" text-anchor=\"middle\" fill=\"var(--ink-muted)\" font-size=\"12.5\" font-weight=\"600\">2 · Red-red violation</text><line x1=\"587\" y1=\"44\" x2=\"542\" y2=\"116\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"/><line x1=\"587\" y1=\"44\" x2=\"632\" y2=\"116\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"/><line x1=\"542\" y1=\"116\" x2=\"514\" y2=\"190\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"/><circle cx=\"587\" cy=\"44\" r=\"16\" fill=\"#dc2626\" stroke=\"#b91c1c\" stroke-width=\"2\"/><text x=\"587\" y=\"45\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">13</text><circle cx=\"542\" cy=\"116\" r=\"16\" fill=\"var(--ink)\" stroke=\"var(--ink-faint)\" stroke-width=\"2\"/><text x=\"542\" y=\"117\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"var(--paper)\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">8</text><circle cx=\"632\" cy=\"116\" r=\"16\" fill=\"var(--ink)\" stroke=\"var(--ink-faint)\" stroke-width=\"2\"/><text x=\"632\" y=\"117\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"var(--paper)\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">17</text><circle cx=\"514\" cy=\"190\" r=\"16\" fill=\"#dc2626\" stroke=\"#b91c1c\" stroke-width=\"2\"/><text x=\"514\" y=\"191\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">1</text><text x=\"587\" y=\"252\" text-anchor=\"middle\" fill=\"var(--ink-muted)\" font-size=\"12.5\" font-weight=\"600\">3 · Recolor: 8,17 → black, 13 → red</text></g></svg>",
      "alt": "Worked example of red-black insertion fixup across three panels: a red node 1 is inserted under red parent 8; the red-red violation is resolved by recoloring parent 8 and uncle 17 black and grandparent 13 red.",
      "caption": "Red-black insert fixup: when parent AND uncle are red, recolor both black and make the grandparent red (a red root is repainted black at the end). A black uncle triggers the same rotations as AVL."
    },
    {
      "type": "paragraph",
      "html": "For live rotation practice, use the <b>AVL rebalance playground</b> earlier in this chapter — the rotation mechanics are identical. Red-black trees simply pick the cheaper fix first: recolor when the uncle is red, rotate when it is black."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "red-black-vs-avl",
      "text": "Red-Black vs AVL"
    },
    {
      "type": "table",
      "head": [
        "Feature",
        "AVL Tree",
        "Red-Black Tree"
      ],
      "rows": [
        [
          "Balance strictness",
          "Strict — BF ∈ {−1, 0, +1}",
          "Loose — longest ≤ 2× shortest path"
        ],
        [
          "Height",
          "~1.44·log n",
          "≤ 2·log n"
        ],
        [
          "Search speed",
          " Faster (flatter tree)",
          "Slightly slower"
        ],
        [
          "Insert / Delete",
          "More rotations",
          " Fewer rotations — faster"
        ],
        [
          "Balance info stored",
          "Height / BF per node",
          "1 color bit per node"
        ],
        [
          "Real-world use",
          "Rare",
          " std::map, TreeMap, Linux kernel"
        ],
        [
          "Best for",
          "Search-heavy workloads",
          "Insert/delete-heavy workloads"
        ]
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "test-yourself",
      "text": "Test Yourself"
    },
    {
      "type": "paragraph",
      "html": "Click an answer — instant feedback!"
    }
  ]
};

export default chapter;
