import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "10-avl-trees-and-balanced-trees",
    "number": 10,
    "title": "AVL trees & balanced trees",
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
      "caption": "A valid AVL tree: balance factor ∈ {−1, 0, +1} at every node"
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Exam alert",
      "html": "You will be shown a BST and asked “is this an AVL tree?” Compute BF for <b>every node</b>. One node with BF = ±2 disqualifies it. A right subtree of height 3 vs left of height 1 (BF = −2) means <b>not AVL</b>."
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
      "html": "The player below speaks a compact notation: <b>z</b> = the unbalanced node (BF ±2); <b>y</b> = its child on the heavy side; <b>x</b> = the child of y on the side where the new node was inserted; <b>T₀–T₃</b> = the four subtrees hanging off x, y and z (played by the leaves 5, 15, 25 and 35). Compact rule: LL → rotate right · RR → rotate left · LR/RL → two rotations (opposite then same)."
    },
    {
      "type": "viz",
      "kind": "avlRotations",
      "caption": "Rotation case player: LL, RR, LR and RL step by step"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>LL: insert into the LEFT subtree of the LEFT child</b> (30 → 20 → 10 all lean left; BF(30) = +2, BF(20) = +1). Cure: one <b>right rotation at 30</b>. 20 rises to head the subtree, 30 drops to 20's right, and 20's old right child 25 passes to 30 as its new left child. After: 20(10(5,15),30(25,35)), every |BF| ≤ 1.",
        "<b>RR: insert into the RIGHT subtree of the RIGHT child</b> (10 → 20 → 30 all lean right; BF(10) = −2, BF(20) = −1). Cure: one <b>left rotation at 10</b>. 20 rises to head the subtree, 10 drops to 20's left, and 20's old left child 15 passes to 10 as its new right child. After: 20(10(5,15),30(25,35)).",
        "<b>LR: insert into the RIGHT subtree of the LEFT child</b> (the 30 → 10 → 20 path zig-zags; BF(30) = +2, BF(10) = −1). Cure: <b>two rotations</b>. First a <b>left rotation at 10</b> straightens the bend into a plain left-left line, then a <b>right rotation at 30</b> finishes the job. After: 20(10(5,15),30(25,35)).",
        "<b>RL: insert into the LEFT subtree of the RIGHT child</b> (the 10 → 30 → 20 path zig-zags the other way; BF(10) = −2, BF(30) = +1). Cure: <b>two rotations</b>. First a <b>right rotation at 30</b>, then a <b>left rotation at 10</b>. After: 20(10(5,15),30(25,35))"
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
      "solutionHtml": "<p>4 goes right of 3. Insert 5: node 3 has BF = −2 (RR) → left rotation around 3 ⇒ subtree now 4(3,5). Insert 6: root 2 has BF = −2 (RR) → left rotation ⇒ <b>4 becomes the new root</b> with left subtree 2(1,3) and right 5(–,6). Insert 7: BF(5) = −2 → left rotation ⇒ 6(5,7). Insert 8: BF(7) = −2 → left rotation ⇒ 8 takes 7's place as 6's right child. Final root = <b>4</b>: perfectly balanced.</p>"
    },
    {
      "type": "accordion",
      "items": [
        {
          "title": "Exercise: is this a balanced tree? (from lecture)",
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
      "text": "Red-black trees (introduction)"
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
        "Children of a <b>RED node must be BLACK</b>, no two consecutive red nodes.",
        "Every root-to-leaf path has the <b>same number of BLACK nodes</b>.",
        "Every <b>new node is inserted RED</b>.",
        "Every leaf (<b>NULL node</b>) is BLACK."
      ]
    },
    {
      "type": "paragraph",
      "html": "After each insertion, check the properties; fix violations with a <b>Recolor</b>, or a <b>Rotation followed by Recolor</b>. Insertion logic: if the parent is BLACK → done. If the parent is RED: check the parent's sibling: if BLACK/NULL, rotate + recolor; if RED, recolor and recheck upward."
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
          "back": "<div class=\"fc-a\">RED: always (and the root is always BLACK)</div>",
          "category": "Red-Black"
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Topic 9 Quiz: AVL Trees",
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
      "text": "What is an AVL tree?"
    },
    {
      "type": "paragraph",
      "html": "Invented by <b>Adelson-Velsky &amp; Landis</b> (1962), the <b>first self-balancing BST</b> in history."
    },
    {
      "type": "paragraph",
      "html": "A normal BST can degenerate into a <b>linked list</b> (e.g. inserting 1,2,3,…,10) making search <b>O(n)</b>. An AVL tree detects imbalance and <b>repairs itself with rotations</b>, so search stays <b>O(log n)</b>, always."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "balance-factor-bf-the-heart-of-avl",
      "text": "Balance factor (BF): the heart of AVL"
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
          "Rotate"
        ],
        [
          "<b>≤ −2</b>",
          "Right-heavy",
          "Rotate"
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
      "text": "Spot the difference: AVL"
    },
    {
      "type": "viz",
      "kind": "avlCompare",
      "caption": "Compute the balance factor of every node; one node with BF ±2 disqualifies the tree."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "the-4-rotation-cases-when-bf-hits-2",
      "text": "The four rotation cases (when BF hits ±2)"
    },
    {
      "type": "paragraph",
      "html": "The case name = the shape of the problem path from the unbalanced node z down to the new key. The unbalanced node (|BF| = 2) is ringed in red below."
    },
    {
      "type": "viz",
      "kind": "avlCases",
      "caption": "Press Play this case to load a case into the animated rotation player above."
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "Memory hook",
      "html": "<b>Memory trick:</b> <b>L</b><b>L</b> = straight Left line → one <b>Right</b> rotation • <b>R</b><b>R</b> = straight Right line → one <b>Left</b> rotation • <b>LR</b> / <b>RL</b> = zig-zag → <b>two</b> rotations (fix the bend first).<br> Why does one rotation always fix it? The rotation promotes the middle value of the three nodes, which is exactly what sorted order demands."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "interactive-avl-playground",
      "text": "Interactive AVL playground"
    },
    {
      "type": "paragraph",
      "html": "Insert values and watch the <b>BF badges</b> update. When a badge hits |BF| = 2, the status line names the case (LL, RR, LR or RL) and the tree <b>rotates itself</b>, step by step."
    },
    {
      "type": "viz",
      "kind": "avlInsert",
      "caption": "AVL rebalance playground: insert keys and watch the rotations"
    },
    {
      "type": "paragraph",
      "html": "Try: Reset → insert <b>65</b> then <b>10</b> (no rotation) → then insert <b>5</b> (LL rotation). Or press <b>Insert 1…10</b> for the classic ascending stress sequence."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "avl-vs-normal-bst",
      "text": "AVL vs normal BST"
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
          "O(n) in a skewed tree",
          "O(log n), guaranteed"
        ],
        [
          "Self-balancing",
          "No",
          "Yes, via LL/RR/LR/RL rotations"
        ],
        [
          "Extra storage per node",
          "None",
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
      "text": "Test yourself: AVL"
    },
    {
      "type": "paragraph",
      "html": "Click an answer for instant feedback."
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
      "text": "What is a red-black tree?"
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
      "text": "The five golden rules"
    },
    {
      "type": "paragraph",
      "html": "Every red-black tree must satisfy all five rules, simultaneously."
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
      "id": "spot-the-difference-red-black",
      "text": "Spot the difference: red-black"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"compare2\"><div><svg viewBox=\"0 0 300 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><line x1=\"150\" y1=\"24\" x2=\"95\" y2=\"68\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"/><line x1=\"150\" y1=\"24\" x2=\"205\" y2=\"68\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"/><line x1=\"95\" y1=\"68\" x2=\"58\" y2=\"112\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"/><line x1=\"95\" y1=\"68\" x2=\"110\" y2=\"112\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"/><line x1=\"205\" y1=\"68\" x2=\"182\" y2=\"112\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"/><line x1=\"205\" y1=\"68\" x2=\"248\" y2=\"112\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"/><line x1=\"248\" y1=\"112\" x2=\"222\" y2=\"156\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"/><line x1=\"248\" y1=\"112\" x2=\"274\" y2=\"156\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"/><circle cx=\"150\" cy=\"24\" r=\"14\" fill=\"var(--ink)\" stroke=\"var(--ink-faint)\" stroke-width=\"2\"/><text x=\"150\" y=\"25\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"var(--paper)\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">13</text><circle cx=\"95\" cy=\"68\" r=\"14\" fill=\"#dc2626\" stroke=\"#b91c1c\" stroke-width=\"2\"/><text x=\"95\" y=\"69\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">8</text><circle cx=\"205\" cy=\"68\" r=\"14\" fill=\"#dc2626\" stroke=\"#b91c1c\" stroke-width=\"2\"/><text x=\"205\" y=\"69\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">17</text><circle cx=\"58\" cy=\"112\" r=\"14\" fill=\"var(--ink)\" stroke=\"var(--ink-faint)\" stroke-width=\"2\"/><text x=\"58\" y=\"113\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"var(--paper)\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">1</text><circle cx=\"110\" cy=\"112\" r=\"14\" fill=\"var(--ink)\" stroke=\"var(--ink-faint)\" stroke-width=\"2\"/><text x=\"110\" y=\"113\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"var(--paper)\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">11</text><circle cx=\"182\" cy=\"112\" r=\"14\" fill=\"var(--ink)\" stroke=\"var(--ink-faint)\" stroke-width=\"2\"/><text x=\"182\" y=\"113\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"var(--paper)\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">15</text><circle cx=\"248\" cy=\"112\" r=\"14\" fill=\"var(--ink)\" stroke=\"var(--ink-faint)\" stroke-width=\"2\"/><text x=\"248\" y=\"113\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"var(--paper)\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">25</text><circle cx=\"222\" cy=\"156\" r=\"14\" fill=\"#dc2626\" stroke=\"#b91c1c\" stroke-width=\"2\"/><text x=\"222\" y=\"157\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">22</text><circle cx=\"274\" cy=\"156\" r=\"14\" fill=\"#dc2626\" stroke=\"#b91c1c\" stroke-width=\"2\"/><text x=\"274\" y=\"157\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">27</text></svg><p class=\"cap\">Root black; no red-red pair; every root-to-NIL path has exactly 3 black nodes.</p></div><div><svg viewBox=\"0 0 300 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><line x1=\"140\" y1=\"40\" x2=\"85\" y2=\"102\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"/><line x1=\"140\" y1=\"40\" x2=\"195\" y2=\"102\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"/><line x1=\"195\" y1=\"102\" x2=\"243\" y2=\"160\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"/><ellipse cx=\"219\" cy=\"131\" rx=\"52\" ry=\"52\" fill=\"none\" stroke=\"var(--danger)\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/><circle cx=\"140\" cy=\"40\" r=\"15\" fill=\"var(--ink)\" stroke=\"var(--ink-faint)\" stroke-width=\"2\"/><text x=\"140\" y=\"41\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"var(--paper)\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">10</text><circle cx=\"85\" cy=\"102\" r=\"15\" fill=\"var(--ink)\" stroke=\"var(--ink-faint)\" stroke-width=\"2\"/><text x=\"85\" y=\"103\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"var(--paper)\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">5</text><circle cx=\"195\" cy=\"102\" r=\"15\" fill=\"#dc2626\" stroke=\"#b91c1c\" stroke-width=\"2\"/><text x=\"195\" y=\"103\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">20</text><circle cx=\"243\" cy=\"160\" r=\"15\" fill=\"#dc2626\" stroke=\"#b91c1c\" stroke-width=\"2\"/><text x=\"243\" y=\"161\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">30</text><text x=\"219\" y=\"58\" text-anchor=\"middle\" fill=\"var(--danger)\" font-size=\"12.5\" font-weight=\"700\">red-red ✗</text></svg><p class=\"cap\">Node 20 is red and its child 30 is red: a red-red pair breaks rule 4.</p></div></div>",
      "alt": "Side-by-side comparison. Left: A valid red-black tree: black root 13, red children 8 and 17, black nodes 1, 11, 15 and 25, red leaves 22 and 27, every root-to-NIL path has exactly three black nodes. Right: Invalid red-black tree: red node 20 has a red child 30, breaking the no-red-red rule, and the two sides have unequal black heights.",
      "caption": "One red-red parent-child pair is enough to disqualify a red-black tree."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "insertion-always-insert-red",
      "text": "Insertion: always insert red"
    },
    {
      "type": "paragraph",
      "html": "A red node can only break <b>Rule 4</b> locally, which is a local fix. A black node would break Rule 5 on <i>every</i> path, which is much worse."
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Case A: uncle is red → recolor",
      "html": "<span class=\"cond\">No rotation needed.</span> <div class=\"miniRow\"> <div><svg class=\"mini\" viewBox=\"0 0 300 175\" role=\"img\"><line x1=\"140\" y1=\"30\" x2=\"85\" y2=\"100\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"></line><line x1=\"140\" y1=\"30\" x2=\"195\" y2=\"100\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"></line><line x1=\"85\" y1=\"100\" x2=\"45\" y2=\"160\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"></line><line x1=\"85\" y1=\"100\" x2=\"125\" y2=\"160\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"></line><ellipse cx=\"65\" cy=\"130\" rx=\"52\" ry=\"40\" fill=\"none\" stroke=\"var(--danger)\" stroke-width=\"2\" stroke-dasharray=\"6 4\"></ellipse><circle cx=\"140\" cy=\"30\" r=\"16\" fill=\"var(--ink)\" stroke=\"var(--ink-faint)\" stroke-width=\"2\"></circle><text x=\"140\" y=\"31\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"var(--paper)\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">13</text><circle cx=\"85\" cy=\"100\" r=\"16\" fill=\"#dc2626\" stroke=\"#b91c1c\" stroke-width=\"2\"></circle><text x=\"85\" y=\"101\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">8</text><circle cx=\"195\" cy=\"100\" r=\"16\" fill=\"#dc2626\" stroke=\"#b91c1c\" stroke-width=\"2\"></circle><text x=\"195\" y=\"101\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">17</text><circle cx=\"45\" cy=\"160\" r=\"14\" fill=\"#dc2626\" stroke=\"#b91c1c\" stroke-width=\"2\"></circle><text x=\"45\" y=\"161\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">1</text><circle cx=\"125\" cy=\"160\" r=\"14\" fill=\"var(--ink)\" stroke=\"var(--ink-faint)\" stroke-width=\"2\"></circle><text x=\"125\" y=\"161\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"var(--paper)\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">11</text></svg><p class=\"cap\">Before: red-red violation </p></div> <div class=\"arrow\">→</div> <div><svg class=\"mini\" viewBox=\"0 0 300 175\" role=\"img\"><line x1=\"140\" y1=\"30\" x2=\"85\" y2=\"100\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"></line><line x1=\"140\" y1=\"30\" x2=\"195\" y2=\"100\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"></line><line x1=\"85\" y1=\"100\" x2=\"45\" y2=\"160\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"></line><line x1=\"85\" y1=\"100\" x2=\"125\" y2=\"160\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"></line><circle cx=\"140\" cy=\"30\" r=\"16\" fill=\"#dc2626\" stroke=\"#b91c1c\" stroke-width=\"2\"></circle><text x=\"140\" y=\"31\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">13</text><circle cx=\"85\" cy=\"100\" r=\"16\" fill=\"var(--ink)\" stroke=\"var(--ink-faint)\" stroke-width=\"2\"></circle><text x=\"85\" y=\"101\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"var(--paper)\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">8</text><circle cx=\"195\" cy=\"100\" r=\"16\" fill=\"var(--ink)\" stroke=\"var(--ink-faint)\" stroke-width=\"2\"></circle><text x=\"195\" y=\"101\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"var(--paper)\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">17</text><circle cx=\"45\" cy=\"160\" r=\"14\" fill=\"#dc2626\" stroke=\"#b91c1c\" stroke-width=\"2\"></circle><text x=\"45\" y=\"161\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">1</text><circle cx=\"125\" cy=\"160\" r=\"14\" fill=\"var(--ink)\" stroke=\"var(--ink-faint)\" stroke-width=\"2\"></circle><text x=\"125\" y=\"161\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"var(--paper)\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">11</text></svg><p class=\"cap\">After: recolor &amp; push red up</p></div> </div> <ol class=\"steps\"> <li>Parent &amp; Uncle → <b>BLACK</b></li> <li>Grandparent → <b>RED</b></li> <li>Continue checking <b>from the grandparent</b> (redness moves up)</li> <li>If grandparent is root → recolor root <b>BLACK</b> (Rule 2) and stop</li> </ol>"
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Case B: uncle is black → rotate + recolor",
      "html": "<span class=\"cond\">Same LL / RR / LR / RL shapes as AVL.</span> <div class=\"miniRow\"> <div><svg class=\"mini\" viewBox=\"0 0 300 175\" role=\"img\"><line x1=\"110\" y1=\"30\" x2=\"55\" y2=\"105\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"></line><line x1=\"110\" y1=\"30\" x2=\"185\" y2=\"105\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"></line><line x1=\"185\" y1=\"105\" x2=\"250\" y2=\"160\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"></line><ellipse cx=\"218\" cy=\"133\" rx=\"52\" ry=\"40\" fill=\"none\" stroke=\"var(--danger)\" stroke-width=\"2\" stroke-dasharray=\"6 4\"></ellipse><circle cx=\"110\" cy=\"30\" r=\"16\" fill=\"var(--ink)\" stroke=\"var(--ink-faint)\" stroke-width=\"2\"></circle><text x=\"110\" y=\"31\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"var(--paper)\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">10</text><circle cx=\"55\" cy=\"105\" r=\"14\" fill=\"var(--ink)\" stroke=\"var(--ink-faint)\" stroke-width=\"2\"></circle><text x=\"55\" y=\"106\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"var(--paper)\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">5</text><circle cx=\"185\" cy=\"105\" r=\"16\" fill=\"#dc2626\" stroke=\"#b91c1c\" stroke-width=\"2\"></circle><text x=\"185\" y=\"106\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">20</text><circle cx=\"250\" cy=\"160\" r=\"14\" fill=\"#dc2626\" stroke=\"#b91c1c\" stroke-width=\"2\"></circle><text x=\"250\" y=\"161\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">30</text></svg><p class=\"cap\">Before: RR shape, uncle black</p></div> <div class=\"arrow\">→</div> <div><svg class=\"mini\" viewBox=\"0 0 300 175\" role=\"img\"><line x1=\"150\" y1=\"30\" x2=\"85\" y2=\"105\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"></line><line x1=\"150\" y1=\"30\" x2=\"215\" y2=\"105\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"></line><line x1=\"85\" y1=\"105\" x2=\"45\" y2=\"160\" stroke=\"var(--fig-axis)\" stroke-width=\"2\"></line><circle cx=\"150\" cy=\"30\" r=\"16\" fill=\"var(--ink)\" stroke=\"var(--ink-faint)\" stroke-width=\"2\"></circle><text x=\"150\" y=\"31\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"var(--paper)\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">20</text><circle cx=\"85\" cy=\"105\" r=\"16\" fill=\"#dc2626\" stroke=\"#b91c1c\" stroke-width=\"2\"></circle><text x=\"85\" y=\"106\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">10</text><circle cx=\"215\" cy=\"105\" r=\"16\" fill=\"#dc2626\" stroke=\"#b91c1c\" stroke-width=\"2\"></circle><text x=\"215\" y=\"106\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">30</text><circle cx=\"45\" cy=\"160\" r=\"14\" fill=\"var(--ink)\" stroke=\"var(--ink-faint)\" stroke-width=\"2\"></circle><text x=\"45\" y=\"161\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"var(--paper)\" font-size=\"13\" font-weight=\"700\" font-family=\"monospace\">5</text></svg><p class=\"cap\">After: rotate + recolor ↺</p></div> </div> <ol class=\"steps\"> <li><b>LL</b> → RIGHT-rotate grandparent | <b>RR</b> → LEFT-rotate grandparent</li> <li><b>LR / RL</b> → two rotations (straighten the zig-zag first)</li> <li>Recolor: middle node → <b>BLACK</b>, its two children → <b>RED</b></li> <li> After a rotation fix, the violation is <b>gone for good</b> (no cascade)</li> </ol>"
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
      "text": "Deletion (the short version)"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "Standard BST delete: two children? Replace with <b>in-order successor</b> (which adopts the deleted node's color).",
        "If the removed node was <b>RED</b> → black-heights unchanged → <b>no fix-up needed</b>",
        "If it was <b>BLACK</b> → one path lost a black node → the missing black is treated as a <b>\"double-black\"</b>.",
        "Double-black is fixed by examining the <b>sibling</b>: recolor / rotate cases (1–4), pushing or transferring blackness until Rule 5 is restored."
      ]
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "Memory hook",
      "html": "<b>Exam tip:</b> deletion fix-up is the most complex part of red-black trees; exams usually focus on the properties and insertion."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "interactive-playground",
      "text": "Red-black fixup: worked example"
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
      "html": "For live rotation practice, use the <b>AVL rebalance playground</b> earlier in this chapter; the rotation mechanics are identical. Red-black trees pick the cheaper fix first: recolor when the uncle is red, rotate when it is black."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "red-black-vs-avl",
      "text": "Red-black vs AVL"
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
          "Strict: BF ∈ {−1, 0, +1}",
          "Loose: longest ≤ 2× shortest path"
        ],
        [
          "Height",
          "~1.44·log n",
          "≤ 2·log n"
        ],
        [
          "Search speed",
          "Faster (flatter tree)",
          "Slightly slower"
        ],
        [
          "Insert / Delete",
          "More rotations",
          "Fewer rotations, faster"
        ],
        [
          "Balance info stored",
          "Height / BF per node",
          "1 color bit per node"
        ],
        [
          "Real-world use",
          "Rare",
          "std::map, TreeMap, Linux kernel"
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
      "text": "Test yourself: red-black"
    },
    {
      "type": "paragraph",
      "html": "Click an answer for instant feedback."
    }
  ]
};

export default chapter;
