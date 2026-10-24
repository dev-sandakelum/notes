import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "03-algorithms-and-complexity",
    "number": 3,
    "title": "Algorithms & complexity",
    "subtitle": "Lecture 10 (Part I) · Algorithms & Sorting techniques",
    "kind": "topic",
    "words": 623,
    "minutes": 3
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "properties-every-algorithm-must-satisfy",
      "text": "Properties every algorithm must satisfy"
    },
    {
      "type": "table",
      "head": [
        "#",
        "Property",
        "Meaning"
      ],
      "rows": [
        [
          "1",
          "<b>Input</b>",
          "Zero or more inputs supplied externally"
        ],
        [
          "2",
          "<b>Output</b>",
          "At least one output produced"
        ],
        [
          "3",
          "<b>Definiteness</b>",
          "Every step is clear and well defined"
        ],
        [
          "4",
          "<b>Finiteness</b>",
          "Finitely many steps: it must terminate"
        ],
        [
          "5",
          "<b>Correctness</b>",
          "Every step generates correct output"
        ]
      ]
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Exam alert",
      "html": "The five properties (Input, Output, Definiteness, Finiteness, Correctness) are a standard list question."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "performance-analysis",
      "text": "Performance analysis"
    },
    {
      "type": "paragraph",
      "html": "When several algorithms solve the same problem we choose the best using <b>performance analysis</b>: the process of calculating the <b>space</b> and <b>time</b> required by the algorithm."
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Space complexity</b>: total memory needed: program instructions, constants, variables (plus recursion stack). E.g. <code>return b*b;</code> needs 2 bytes for <code>b</code> + 2 bytes for the return value = a fixed 4 bytes → <b>constant space complexity</b>.",
        "<b>Time complexity</b>: computer time to execute. Depends on machine, compiler, algorithm and input; we therefore analyze the <b>number of elementary steps</b> as a function of input size n, and usually report the <b>worst case</b>."
      ]
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "Analysis rules",
      "html": "Simple statement sequence <code>s1; s2; …</code> → <b>O(1)</b>. A single loop over n items → <b>O(n)</b>. Nested loops (n × n) → <b>O(n²)</b>. Even <code>for j…for k&lt;j</code> (triangular) is still <b>O(n²)</b>."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "asymptotic-notations",
      "text": "Asymptotic notations"
    },
    {
      "type": "paragraph",
      "html": "Because exact times are machine-dependent, we express growth with standard <b>asymptotic notations</b>, keeping only the <b>most significant term</b>: for 5n² + 2n + 1 we keep only n²."
    },
    {
      "type": "table",
      "head": [
        "Notation",
        "Bound",
        "Meaning"
      ],
      "rows": [
        [
          "<b>Big-O &nbsp;O(g(n))</b>",
          "<b>Upper</b>",
          "Maximum time for all inputs: the <b>worst case</b>. f(n) ≤ c·g(n) for all n ≥ n₀, c &gt; 0"
        ],
        [
          "<b>Big-Ω &nbsp;Ω(g(n))</b>",
          "<b>Lower</b>",
          "Minimum time: the <b>best case</b> lower bound"
        ],
        [
          "<b>Big-Θ &nbsp;Θ(g(n))</b>",
          "<b>Tight</b>",
          "Both bounds: the <b>average</b> / exact growth rate"
        ]
      ],
      "highlightRows": [
        0
      ]
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">O(1): constant</div><div class=\"f-b\">Printing <code>arr[0]</code>. Size of input is irrelevant.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">O(log n): logarithmic</div><div class=\"f-b\">Binary search. Halving each step.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">O(n): linear</div><div class=\"f-b\">One loop printing all n elements.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">O(n²): quadratic</div><div class=\"f-b\">Nested loops: all ordered pairs. O(3n²+3n+7) = O(n²).</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">O(n log n)</div><div class=\"f-b\">Merge sort, quick sort (expected), heap sort.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Balanced tree search</div><div class=\"f-b\">log₂(N+1) levels → O(log n), vs O(n) for a linked list.</div></div>\n  </div>",
      "alt": "Formula reference cards"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "counting-steps-a-worked-example",
      "text": "Counting steps: a worked example"
    },
    {
      "type": "example",
      "title": "Analyzing a sum loop",
      "bodyHtml": "<pre class=\"code\"><span class=\"tok-num\">1</span>  i = <span class=\"tok-num\">1</span>;  sum = <span class=\"tok-num\">0</span>;        <span class=\"tok-cm\">/* 1 unit each  → 2 total     */</span>\n<span class=\"tok-num\">2</span>  <span class=\"tok-kw\">while</span> (i &lt;= N) {          <span class=\"tok-cm\">/* 1 init + (N+1) tests + N incs */</span>\n<span class=\"tok-num\">3</span>      sum = sum + <span class=\"tok-num\">3</span>;      <span class=\"tok-cm\">/* 4 units × N executions      */</span>\n<span class=\"tok-num\">4</span>  }                          <span class=\"tok-cm\">/* … plus loop bookkeeping     */</span></pre>\n    <p>Total cost = 6N + 4 → the most significant term is N → <b>O(N)</b>.</p>",
      "solutionHtml": "<p>Lines 1 and 4 cost one unit each (2). Line 2 costs 2N + 2 (initialization, N+1 tests, N increments). Line 3 executes N times × 4 units = 4N. Sum: 2 + 2N + 2 + 4N = 6N + 4. Asymptotically only N matters → <b>O(N)</b>.</p>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "worst-average-and-best-case",
      "text": "Worst, average and best case"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Worst case</b>: longest running time for any input of size n; an upper-bound guarantee. Sorting data that is in reverse order.",
        "<b>Best case</b>, e.g. sorting data that is already sorted.",
        "<b>Average case</b>: may be difficult to define what “average” means.",
        "The worst case <i>can occur fairly often</i>, e.g. searching a database for a missing record."
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "running-times-you-should-know-cold",
      "text": "Running times you should know cold"
    },
    {
      "type": "table",
      "head": [
        "Operation",
        "Big-O"
      ],
      "rows": [
        [
          "Linear search",
          "O(N)"
        ],
        [
          "Binary search",
          "O(log N)"
        ],
        [
          "Insertion in <b>unordered</b> array",
          "O(1)"
        ],
        [
          "Insertion in <b>ordered</b> array",
          "O(N)"
        ],
        [
          "Deletion in unordered / ordered array",
          "O(N)"
        ]
      ],
      "nowrapCols": [
        1
      ]
    },
    {
      "type": "flashcards",
      "cards": [
        {
          "front": "<span class=\"fc-q\">Big-O describes which case?</span>",
          "back": "<div class=\"fc-a\">Worst case: the upper bound on running time</div>",
          "category": "Notation"
        },
        {
          "front": "<span class=\"fc-q\">Big-Ω stands for…?</span>",
          "back": "<div class=\"fc-a\">The lower bound (best case) of an algorithm's growth</div>",
          "category": "Notation"
        },
        {
          "front": "<span class=\"fc-q\">Big-Θ means…?</span>",
          "back": "<div class=\"fc-a\">Tight bound: upper and lower bounds coincide</div>",
          "category": "Notation"
        },
        {
          "front": "<span class=\"fc-q\">O(3n² + 3n + 7) = ?</span>",
          "back": "<div class=\"fc-a\">O(n²): polynomials of the same degree are equivalent</div>",
          "category": "Rule"
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Topic 2 Quiz: Algorithms & Complexity",
      "count": 8,
      "quizSlug": "03-algorithms-and-complexity"
    }
  ]
};

export default chapter;
