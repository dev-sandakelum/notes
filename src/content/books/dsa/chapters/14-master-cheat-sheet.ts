import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "14-master-cheat-sheet",
    "number": 14,
    "title": "Master Cheat Sheet",
    "subtitle": "Everything on one page — the night-before summary",
    "kind": "cheatsheet",
    "words": 544,
    "minutes": 3
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "complexity-table-everything-you-must-know",
      "text": "Complexity table — everything you must know"
    },
    {
      "type": "table",
      "head": [
        "Operation / Algorithm",
        "Complexity"
      ],
      "rows": [
        [
          "Array access by index / hash insert &amp; search (avg)",
          "O(1)"
        ],
        [
          "Linear search / linked list search / worst BST search",
          "O(n)"
        ],
        [
          "Binary search / balanced BST (AVL) search, insert, delete",
          "O(log n)"
        ],
        [
          "Bubble, selection, insertion sort (worst)",
          "O(n²)"
        ],
        [
          "Merge sort, quick sort (expected), heap sort",
          "O(n log n)"
        ],
        [
          "Quick sort worst case",
          "O(n²)"
        ],
        [
          "Heap sort space (non-recursive) / stack &amp; queue push/pop",
          "O(1)"
        ]
      ],
      "nowrapCols": [
        1
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "data-structures-one-line-identities",
      "text": "Data structures — one-line identities"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">Stack</div><div class=\"f-b\">LIFO · one end (TOP) · top = −1 empty · N−1 full · N overflow</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Queue</div><div class=\"f-b\">FIFO · rear in, front out · count = rear − front + 1 · circular = ring buffer</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Circular queue full</div><div class=\"f-b\">(rear == SIZE−1 &amp;&amp; front == 0) || (front == rear+1)</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Linked list</div><div class=\"f-b\">struct node {data; *next} · malloc · last→NULL (circular: last→head)</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Doubly linked list</div><div class=\"f-b\">{prev, data, next} · sentinels header/trailer · delete in O(1) given node</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Binary tree</div><div class=\"f-b\">≤ 2 children · max 2<sup>L</sup> nodes at level L · max 2<sup>levels</sup>−1 nodes</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Strictly binary</div><div class=\"f-b\">every non-leaf has 2 children · n leaves ⇒ 2n−1 nodes</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Complete binary</div><div class=\"f-b\">strictly binary + all leaves at level d · 2<sup>d</sup> leaves + 2<sup>d</sup>−1 internal</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">BST</div><div class=\"f-b\">left &lt; node &lt; right · inorder = sorted · duplicates not allowed</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">BST delete (2 children)</div><div class=\"f-b\">inorder predecessor (max of left) or successor (min of right)</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">AVL</div><div class=\"f-b\">BF = h<sub>L</sub> − h<sub>R</sub> ∈ {−1, 0, +1} · rotations LL, RR, LR, RL · O(log n)</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Red-Black</div><div class=\"f-b\">root black · no red-red · equal black-height paths · insert red</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Heap</div><div class=\"f-b\">complete + parent≤/≥children · children of i at 2i+1, 2i+2 · parent (i−1)/2</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Heapify</div><div class=\"f-b\">sift down assuming subtrees are heaps · BuildHeap from index n/2</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Hashing</div><div class=\"f-b\">index = key % size · collision → synonyms → linear probing</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Notations</div><div class=\"f-b\">O = worst (upper) · Ω = best (lower) · Θ = tight</div></div>\n  </div>",
      "alt": "Formula reference cards"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "traversals-and-notations-one-glance",
      "text": "Traversals & notations — one glance"
    },
    {
      "type": "table",
      "head": [
        "Order",
        "Sequence",
        "Use it for"
      ],
      "rows": [
        [
          "<b>Preorder</b>",
          "Root → Left → Right",
          "Prefix expression · copying trees"
        ],
        [
          "<b>Inorder</b>",
          "Left → Root → Right",
          "Infix expression · <b>sorted BST output</b>"
        ],
        [
          "<b>Postorder</b>",
          "Left → Right → Root",
          "Postfix expression · deleting trees"
        ],
        [
          "<b>Level order</b>",
          "Level by level",
          "Breadth-first processing"
        ],
        [
          "<b>Infix → Postfix</b>",
          "A + B * C → A B C * +",
          "Precedence: ^ &gt; * / &gt; + − (equal: left→right, except ^ right→left)"
        ]
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "numbers-worth-memorizing",
      "text": "Numbers worth memorizing"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">Postfix evaluation</div><div class=\"f-b\">1 2 4 * + 3 + = <b>12</b> (operand→push · operator→pop2, compute, push)</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Balanced tree search</div><div class=\"f-b\">L levels = log₂(N+1) · N=15 → 4 levels · height 3</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">LL list vs tree</div><div class=\"f-b\">1024 items: linked-list search ≈ 1024 steps · balanced tree ≈ 10</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">AVL build 1…8</div><div class=\"f-b\">Root ends as 4 after the RR rotations at 1 and 2</div></div>\n  </div>",
      "alt": "Formula reference cards"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "definitions-in-one-line-each",
      "text": "Definitions in one line each"
    },
    {
      "type": "table",
      "head": [
        "Term",
        "One-liner"
      ],
      "rows": [
        [
          "<b>Algorithm</b>",
          "Step-by-step procedure applied to data to achieve a goal"
        ],
        [
          "<b>Data structure</b>",
          "Representation of data enabling efficient access &amp; manipulation"
        ],
        [
          "<b>ADT</b>",
          "Data + operations, independent of implementation"
        ],
        [
          "<b>Stack / Queue</b>",
          "LIFO at one end / FIFO rear-in front-out"
        ],
        [
          "<b>Tree</b>",
          "Non-linear: nodes + edges, one root, hierarchical"
        ],
        [
          "<b>Heap</b>",
          "Complete binary tree + heap order (min or max)"
        ],
        [
          "<b>Hash function</b>",
          "Key → table index; fixed-length digest output"
        ],
        [
          "<b>Stable sort</b>",
          "Preserves relative order of equal keys (quick sort is not)"
        ]
      ]
    }
  ]
};

export default chapter;
