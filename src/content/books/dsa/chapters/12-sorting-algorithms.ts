import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "12-sorting-algorithms",
    "number": 12,
    "title": "Sorting algorithms",
    "subtitle": "Lecture 10 (I & II) · Labs 8–9",
    "kind": "topic",
    "words": 977,
    "minutes": 5
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "why-sorting-matters",
      "text": "Why sorting matters"
    },
    {
      "type": "paragraph",
      "html": "<b>Sorting</b> means arranging data in a particular format (numerical or lexicographical). Its importance: <b>data searching can be optimized to a very high level if the data is stored sorted</b>, and sorted data is more readable."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "sorting-visualizer-see-all-five-algorithms-race",
      "text": "Sorting visualizer: see all five algorithms race"
    },
    {
      "type": "viz",
      "kind": "sorting"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "bubble-sort",
      "text": "Bubble sort"
    },
    {
      "type": "paragraph",
      "html": "Repeatedly step through the list comparing <b>adjacent pairs</b>; swap if out of order. After pass k, the k largest values have “bubbled” to the end. Sorting needs <b>one whole pass without any swap</b> to be recognized as complete."
    },
    {
      "type": "code",
      "language": "c",
      "html": "<span class=\"tok-kw\">for</span> (i = <span class=\"tok-num\">0</span>; i &lt; n<span class=\"tok-num\">-1</span>; i++)\n    <span class=\"tok-kw\">for</span> (j = <span class=\"tok-num\">0</span>; j &lt; n-i<span class=\"tok-num\">-1</span>; j++)\n        <span class=\"tok-kw\">if</span> (arr[j] &gt; arr[j+<span class=\"tok-num\">1</span>]) {        <span class=\"tok-cm\">/* swapping condition  */</span>\n            temp = arr[j]; arr[j] = arr[j+<span class=\"tok-num\">1</span>]; arr[j+<span class=\"tok-num\">1</span>] = temp;\n        }"
    },
    {
      "type": "example",
      "title": "Bubble sort (5 1 4 2 8)",
      "bodyHtml": "",
      "solutionHtml": "<p><b>Pass 1:</b> (5,1)→swap→1 5 4 2 8 · (5,4)→swap→1 4 5 2 8 · (5,2)→swap→1 4 2 5 8 · (5,8)→ok.<br>\n      <b>Pass 2:</b> (1,4)ok · (4,2)→swap→1 2 4 5 8 · rest ok.<br>\n      <b>Pass 3:</b> no swaps, but the algorithm needs this whole clean pass to <i>know</i> it is sorted.<br>\n      Comparisons for 6 elements worst case: 5+4+3+2+1; for N: N(N+1)/2 ≈ N² → <b>O(n²)</b>.</p>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "selection-sort",
      "text": "Selection sort"
    },
    {
      "type": "paragraph",
      "html": "Find the <b>smallest</b> remaining number and exchange it with position 0; repeat for positions 1, 2, … The sorted region grows from the left. Same O(n²) comparisons as bubble sort, but <b>far fewer swaps</b> (at most n−1), so it is faster in practice."
    },
    {
      "type": "example",
      "title": "Selection sort (56, 42, 5, 87, 34, 23)",
      "bodyHtml": "",
      "solutionHtml": "<p>Min of all = 5 ↔ 56 → <b>5</b>, 42, 56, 87, 34, 23<br>\n      Min of rest = 23 ↔ 42 → 5, <b>23</b>, 56, 87, 34, 42<br>\n      Min = 34 ↔ 56 → 5, 23, <b>34</b>, 87, 56, 42<br>\n      Min = 42 ↔ 87 → 5, 23, 34, <b>42</b>, 56, 87<br>\n      Min = 56 ↔ 56 → done: 5 23 34 42 56 87</p>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "insertion-sort",
      "text": "Insertion sort"
    },
    {
      "type": "paragraph",
      "html": "Maintain a <b>sorted lower part</b> of the array; take the next element (the “hole”), shift larger elements right, and drop it into its place, exactly how you sort playing cards in your hand."
    },
    {
      "type": "code",
      "language": "c",
      "html": "<span class=\"tok-kw\">for</span> (k = <span class=\"tok-num\">1</span>; k &lt; n; k++) {\n    temp = arr[k];                 <span class=\"tok-cm\">/* value to insert        */</span>\n    j = k - <span class=\"tok-num\">1</span>;\n    <span class=\"tok-kw\">while</span> (temp &lt; arr[j] &amp;&amp; j &gt;= <span class=\"tok-num\">0</span>) {\n        arr[j+<span class=\"tok-num\">1</span>] = arr[j];          <span class=\"tok-cm\">/* shift larger value up  */</span>\n        j--;\n    }\n    arr[j+<span class=\"tok-num\">1</span>] = temp;                <span class=\"tok-cm\">/* drop into the hole     */</span>\n}"
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "Why keep insertion sort?",
      "html": "It is O(n²) in the worst case but <b>brilliant on nearly-sorted data</b> (approaching O(n)), and it is the natural choice for small inputs."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "can-we-do-better-than-n",
      "text": "Can we do better than n²?"
    },
    {
      "type": "paragraph",
      "html": "Selection, insertion and bubble are all proportional to <b>n²</b>. Other sorts achieve <b>n log n</b>: merge sort, quick sort, heap sort. Since log n ≪ n, an n log n sort wins massively as n grows, e.g. n = 1,000,000: n² = 10¹² vs n log n ≈ 2×10⁷."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "merge-sort-divide-and-conquer",
      "text": "Merge sort: divide & conquer"
    },
    {
      "type": "paragraph",
      "html": "Merge sort is recursive and needs <b>one extra array</b> in memory. The divide-and-conquer template: <b>1) Divide</b> the input into two halves (solve directly if tiny); <b>2) Recur</b> on each half; <b>3) Conquer</b>: merge the two sorted halves."
    },
    {
      "type": "code",
      "language": "c",
      "html": "<span class=\"tok-kw\">void</span> <span class=\"tok-fn\">mergesort</span>(<span class=\"tok-kw\">int</span> a[], <span class=\"tok-kw\">int</span> i, <span class=\"tok-kw\">int</span> j) {\n    <span class=\"tok-kw\">if</span> (i &lt; j) {\n        <span class=\"tok-kw\">int</span> mid = (i + j) / <span class=\"tok-num\">2</span>;\n        <span class=\"tok-fn\">mergesort</span>(a, i, mid);          <span class=\"tok-cm\">/* left recursion  */</span>\n        <span class=\"tok-fn\">mergesort</span>(a, mid+<span class=\"tok-num\">1</span>, j);        <span class=\"tok-cm\">/* right recursion */</span>\n        <span class=\"tok-fn\">merge</span>(a, i, mid, mid+<span class=\"tok-num\">1</span>, j);     <span class=\"tok-cm\">/* merge two runs  */</span>\n    }\n}\n<span class=\"tok-cm\">/* merge: repeatedly copy the smaller front element of the two\n   sorted lists into temp[], then copy back: O(n) per merge */</span>"
    },
    {
      "type": "example",
      "title": "Merge sort (10, 5, 8, 2, 12, 6, 3, 4)",
      "bodyHtml": "",
      "solutionHtml": "<p><b>Split:</b> [10 5 8 2 12 6 3 4] → [10 5 8 2] [12 6 3 4] → [10 5][8 2] [12 6][3 4] → [10][5] [8][2] [12][6] [3][4].<br>\n      <b>Merge:</b> [5 10] · [2 8] · [6 12] · [3 4] → [2 5 8 10] · [3 4 6 12] → <b>[2 3 4 5 6 8 10 12]</b>.<br>\n      Complexity: <b>O(N·log N)</b>: log N levels of splitting, N work merging each level.</p>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "quick-sort-partition-and-recurse",
      "text": "Quick sort: partition & recurse"
    },
    {
      "type": "paragraph",
      "html": "Pick a <b>pivot</b> p; move all values <b>less than p</b> to its left and all values ≥ p to its right; then quicksort each side. It is a comparison sort, <b>in-place</b> (tiny extra memory), and usually the <b>fastest</b> in practice, but <b>not stable</b> (equal elements may reorder)."
    },
    {
      "type": "code",
      "language": "c",
      "html": "<span class=\"tok-cm\">/* partition a[left..right]: pivot = a[left] */</span>\npivot = a[left];  l = left + <span class=\"tok-num\">1</span>;  r = right;\n<span class=\"tok-kw\">while</span> (l &lt; r) {\n    <span class=\"tok-kw\">while</span> (l &lt; right &amp;&amp; a[l] &lt; pivot)  l++;\n    <span class=\"tok-kw\">while</span> (r &gt; left  &amp;&amp; a[r] &gt;= pivot) r--;\n    <span class=\"tok-kw\">if</span> (l &lt; r) <span class=\"tok-fn\">swap</span>(a[l], a[r]);\n}\na[left] = a[r];  a[r] = pivot;      <span class=\"tok-cm\">/* pivot lands at its final index */</span>"
    },
    {
      "type": "table",
      "head": [
        "Algorithm",
        "Time",
        "Notes"
      ],
      "rows": [
        [
          "Selection sort",
          "O(n²)",
          "in-place · slow (good for small inputs)"
        ],
        [
          "Insertion sort",
          "O(n²)",
          "in-place · slow (good for small inputs)"
        ],
        [
          "<b>Quicksort</b>",
          "O(n log n) expected",
          "in-place, randomized · <b>fastest</b> for large inputs · worst O(n²)"
        ],
        [
          "Heapsort",
          "O(n log n)",
          "in-place · fast (good for large inputs)"
        ],
        [
          "Mergesort",
          "O(n log n)",
          "sequential data access · fast for huge inputs · needs extra array"
        ]
      ],
      "highlightRows": [
        2
      ],
      "nowrapCols": [
        1
      ]
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Exam alert",
      "html": "Quick sort worst case <b>O(n²)</b> (already sorted + bad pivot); expected O(n log n). Space complexity O(n log n). Merge sort = stable + predictable O(n log n) but extra memory. Bubble/selection/insertion = O(n²) with selection making the fewest swaps."
    },
    {
      "type": "flashcards",
      "cards": [
        {
          "front": "<span class=\"fc-q\">How does bubble sort know it's done?</span>",
          "back": "<div class=\"fc-a\">A full pass with zero swaps</div>",
          "category": "Bubble"
        },
        {
          "front": "<span class=\"fc-q\">Why is selection often faster than bubble?</span>",
          "back": "<div class=\"fc-a\">At most n−1 swaps: far fewer writes</div>",
          "category": "Selection"
        },
        {
          "front": "<span class=\"fc-q\">The 3 divide-and-conquer steps?</span>",
          "back": "<div class=\"fc-a\">Divide → Recur → Conquer (merge)</div>",
          "category": "Merge"
        },
        {
          "front": "<span class=\"fc-q\">Quick sort's basic idea?</span>",
          "back": "<div class=\"fc-a\">Partition around a pivot, then recursively sort both sides</div>",
          "category": "Quick"
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Topic 11 Quiz: Sorting Algorithms",
      "count": 9,
      "quizSlug": "12-sorting-algorithms"
    }
  ]
};

export default chapter;
