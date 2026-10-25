import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "11-heaps-and-heap-sort",
    "number": 11,
    "title": "Heaps & heap sort",
    "subtitle": "Lecture 15 · Heap & Heap sort",
    "kind": "topic",
    "words": 786,
    "minutes": 4
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "what-is-a-heap",
      "text": "What is a heap?"
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Definition",
      "html": "A heap is a <b>binary tree ADT</b> with two special properties: <b>1) Shape</b>: it must be a <b>complete binary tree</b> (all levels full except possibly the last, which is filled <b>strictly left to right</b>); <b>2) Order</b>: every parent is ≤ all of its children (<b>min-heap</b>) or ≥ all of its children (<b>max-heap</b>)."
    },
    {
      "type": "table",
      "head": [
        "Heap type",
        "Rule (every parent incl. root)",
        "Root holds"
      ],
      "rows": [
        [
          "<b>Min-heap</b>",
          "Parent ≤ its children",
          "The minimum"
        ],
        [
          "<b>Max-heap</b>",
          "Parent ≥ its children",
          "The maximum"
        ]
      ],
      "nowrapCols": [
        2
      ]
    },
    {
      "type": "treeDiagram",
      "alt": "Max heap and min heap",
      "caption": "58 ≥ 31, 40 ≥ 13, 25, 9, 3 everywhere ✓ · 5 ≤ 13, 12 ≤ 20, 25, 16, 19 everywhere ✓",
      "labels": [
        { "text": "MAX-HEAP", "x": 142, "y": 215 },
        { "text": "MIN-HEAP", "x": 442, "y": 215 }
      ],
      "maxWidth": 540,
      "nodes": [
        { "id": "n0", "label": "58", "x": 142, "y": 44, "r": 23 },
        { "id": "n1", "label": "31", "x": 74, "y": 104, "r": 23 },
        { "id": "n2", "label": "40", "x": 210, "y": 104, "r": 23 },
        { "id": "n3", "label": "13", "x": 40, "y": 164, "r": 22 },
        { "id": "n4", "label": "25", "x": 108, "y": 164, "r": 22 },
        { "id": "n5", "label": "9", "x": 176, "y": 164, "r": 22 },
        { "id": "n6", "label": "3", "x": 244, "y": 164, "r": 22 },
        { "id": "n7", "label": "5", "x": 442, "y": 44, "r": 23 },
        { "id": "n8", "label": "13", "x": 374, "y": 104, "r": 23 },
        { "id": "n9", "label": "12", "x": 510, "y": 104, "r": 23 },
        { "id": "n10", "label": "20", "x": 340, "y": 164, "r": 22 },
        { "id": "n11", "label": "25", "x": 408, "y": 164, "r": 22 },
        { "id": "n12", "label": "16", "x": 476, "y": 164, "r": 22 },
        { "id": "n13", "label": "19", "x": 544, "y": 164, "r": 22 }
      ],
      "edges": [
        ["n0", "n1"],
        ["n0", "n2"],
        ["n1", "n3"],
        ["n1", "n4"],
        ["n2", "n5"],
        ["n2", "n6"],
        ["n7", "n8"],
        ["n7", "n9"],
        ["n8", "n10"],
        ["n8", "n11"],
        ["n9", "n12"],
        ["n9", "n13"]
      ]
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "important-heap-facts",
      "text": "Important heap facts"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Duplicates are allowed</b>: no restriction against them.",
        "A heap does <b>NOT</b> follow BST rules: the left child does not have to be smaller than the right child.",
        "Only the <b>parent-vs-children</b> ordering matters; ordering between siblings is irrelevant.",
        "A tree that is complete but violates order is <b>not</b> a heap; a heap-shaped tree that is not complete is not a heap either."
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "operations",
      "text": "Operations"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Insertion (growing)</b>: a new node can only be added at the <b>left-most available spot at the lowest level</b>; then bubble it up (swap with parent) if the order property is violated. After inserting 85 under a max-heap, sifting up restores the heap.",
        "<b>Deletion (shrinking)</b>: heaps normally remove the <b>root</b> (the largest/smallest value). Move the <b>last node</b> to the root, then <b>sift down</b>.",
        "<b>Find max/min</b>: it is always at the root: O(1)."
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "array-implementation-the-index-formulas",
      "text": "Array implementation: the index formulas"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"cells\">\n      <div class=\"cell\"><span class=\"idx\">0</span>80</div>\n      <div class=\"cell\"><span class=\"idx\">1</span>18</div>\n      <div class=\"cell\"><span class=\"idx\">2</span>40</div>\n      <div class=\"cell\"><span class=\"idx\">3</span>13</div>\n      <div class=\"cell\"><span class=\"idx\">4</span>5</div>\n      <div class=\"cell\"><span class=\"idx\">5</span>25</div>\n      <div class=\"cell\"><span class=\"idx\">6</span>1</div>\n      <div class=\"cell\"><span class=\"idx\">7</span>2</div>\n      <div class=\"cell\"><span class=\"idx\">8</span>9</div>\n    </div>\n    <div class=\"dia-cap\">A max-heap stored as an array: 80's children live at 2(0)+1 = 1 and 2(0)+2 = 2</div>",
      "alt": "A max-heap stored as an array: 80's children live at 2(0)+1 = 1 and 2(0)+2 = 2",
      "caption": "A max-heap stored as an array: 80's children live at 2(0)+1 = 1 and 2(0)+2 = 2"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">Left child of i</div><div class=\"f-b\"><code>2*i + 1</code></div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Right child of i</div><div class=\"f-b\"><code>2*i + 2</code></div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Parent of i</div><div class=\"f-b\"><code>(i − 1) / 2</code> &nbsp;(integer division)</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Leaves start at</div><div class=\"f-b\">index n/2 … n−1</div></div>\n  </div>",
      "alt": "Formula reference cards"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "heapify-build-heap-heap-sort",
      "text": "Heapify, build-heap, heap sort"
    },
    {
      "type": "paragraph",
      "html": "<b>Heapify(A, i)</b>: assume both subtrees of i are already heaps; pick the <b>largest child</b>, compare with the parent, swap if needed, and recurse: this “sift-down” makes i's subtree a heap."
    },
    {
      "type": "code",
      "language": "c",
      "html": "<span class=\"tok-fn\">Heapify</span>(A, i) {\n    l = left(i);  r = right(i);\n    <span class=\"tok-kw\">if</span> (l &lt;= heapsize &amp;&amp; A[l] &gt; A[i])  largest = l;   <span class=\"tok-kw\">else</span> largest = i;\n    <span class=\"tok-kw\">if</span> (r &lt;= heapsize &amp;&amp; A[r] &gt; A[largest]) largest = r;\n    <span class=\"tok-kw\">if</span> (largest != i) { <span class=\"tok-fn\">swap</span>(A[i], A[largest]); <span class=\"tok-fn\">Heapify</span>(A, largest); }\n}\n<span class=\"tok-fn\">BuildHeap</span>(A) {                        <span class=\"tok-cm\">/* bottom-up: leaves are already heaps */</span>\n    heapsize = length(A);\n    <span class=\"tok-kw\">for</span> (i = length/2 <span class=\"tok-kw\">downto</span> <span class=\"tok-num\">1</span>) <span class=\"tok-fn\">Heapify</span>(A, i);\n}\n<span class=\"tok-fn\">HeapSort</span>(A) {                          <span class=\"tok-cm\">/* max-heap → ascending sort */</span>\n    <span class=\"tok-fn\">BuildHeap</span>(A);\n    <span class=\"tok-kw\">for</span> (i = length <span class=\"tok-kw\">downto</span> <span class=\"tok-num\">2</span>) {\n        <span class=\"tok-fn\">swap</span>(A[<span class=\"tok-num\">1</span>], A[i]);               <span class=\"tok-cm\">/* biggest element to its final spot */</span>\n        heapsize--; <span class=\"tok-fn\">Heapify</span>(A, <span class=\"tok-num\">1</span>);      <span class=\"tok-cm\">/* restore heap on the rest          */</span>\n    }\n}"
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Exam alert",
      "html": "Heap sort's <b>two phases</b>: build a heap from the array, then repeatedly extract the root. To sort <b>ascending → use a MAX-heap</b>; to sort <b>descending → use a MIN-heap</b>. Complexity: <b>O(n log n)</b> in worst, best AND average case; <b>space O(1)</b> because it is not recursive. The Linux kernel uses it for this guaranteed behaviour."
    },
    {
      "type": "example",
      "title": "Convert [16, 4, 7, 1, 12, 19] into a heap",
      "bodyHtml": "<p>Picture the array as a complete tree, then heapify bottom-up.</p>",
      "solutionHtml": "<p>Tree: 16(4(1,12), 7(19)). Node 7 &lt; 19 → swap ⇒ 16(4(1,12), 19(7)) · Node 4 &lt; 12 → swap ⇒ 16(12(1,4), 19(7)) · Root 16 &lt; 19 → swap ⇒ 19(12(1,4), 16(7)). Final array: <b>[19, 12, 16, 4, 1, 7]</b>.</p>"
    },
    {
      "type": "example",
      "title": "Heap sort on [19, 12, 16, 4, 1, 7] (from the built heap)",
      "bodyHtml": "",
      "solutionHtml": "<p>1. Swap root 19 with last (7) → sorted {19} · heap [7,12,16,4,1] → heapify ⇒ [16,12,7,4,1].<br>\n      2. Swap 16 with last (1) → sorted {16,19} · heap [1,12,7,4] ⇒ [12,4,7,1] after heapify (swap 1↔12, then 1↔4… actually 12's children 4,7: 7 &gt; 4 ⇒ [12,4,7,1]→heapify root: 12 stays).<br>\n      3. Swap 12 with last (1) → sorted {12,16,19} · [1,4,7] ⇒ heapify ⇒ [7,4,1].<br>\n      4. Swap 7 with 1 ⇒ [4,1] heapify ⇒ [4,1]. Swap 4 with 1 ⇒ [1] ⇒ done.<br>\n      <b>Final sorted: 1, 4, 7, 12, 16, 19</b>, each extraction moves the current maximum to the end of the shrinking heap.</p>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "applications-of-heaps",
      "text": "Applications of heaps"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "Finding the <b>smallest/largest</b> element quickly; order statistics.",
        "Implementing <b>priority queues</b> (used inside graph algorithms).",
        "Beating quick sort's worst case O(n²), heap sort keeps O(n log n).",
        "Interval scheduling (maximize tasks with start/finish times); security &amp; embedded systems (Linux kernel)."
      ]
    },
    {
      "type": "flashcards",
      "cards": [
        {
          "front": "<span class=\"fc-q\">A heap must be a ______ binary tree</span>",
          "back": "<div class=\"fc-a\">Complete: full levels, last level filled left to right</div>",
          "category": "Shape"
        },
        {
          "front": "<span class=\"fc-q\">Children of index i?</span>",
          "back": "<div class=\"fc-a\">2i+1 (left) and 2i+2 (right)</div>",
          "category": "Array"
        },
        {
          "front": "<span class=\"fc-q\">Sorting ascending requires a…</span>",
          "back": "<div class=\"fc-a\">MAX-heap (root maximum goes to the end first)</div>",
          "category": "Sort"
        },
        {
          "front": "<span class=\"fc-q\">Heap sort time / space?</span>",
          "back": "<div class=\"fc-a\">O(n log n) in ALL cases · O(1) space (not recursive)</div>",
          "category": "Complexity"
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Topic 10 Quiz: Heaps & Heap Sort",
      "count": 8,
      "quizSlug": "11-heaps-and-heap-sort"
    }
  ]
};

export default chapter;
