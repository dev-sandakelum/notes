import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "05-introduction-to-functions",
    "number": 5,
    "title": "Introduction to Functions",
    "subtitle": "Definition · Arrow diagrams · Vertical line test · Domain & range · Types of functions",
    "kind": "topic",
    "words": 579,
    "minutes": 3
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "what-is-a-function",
      "text": "What is a function?"
    },
    {
      "type": "paragraph",
      "html": "A <b>function <span class=\"m\">f</span> from a set X to a set Y</b> is a rule that assigns to <b>each element <span class=\"m\">x</span> in X exactly one element <span class=\"m\">y</span> in Y</b>. We write <span class=\"m\">y = f(x)</span> — “y equals f of x” — where x is the <b>input (independent variable)</b> and y is the <b>output (dependent variable)</b>. The word <i>exactly one</i> is the whole definition: a function may not send one input to two different outputs."
    },
    {
      "type": "paragraph",
      "html": "A function can also be described as a <b>set of ordered pairs (x, y)</b> such that for any x-value there is only one y-value — meaning <b>no repeated x-values with different y-values</b>. The set <span class=\"m\">{(1,3), (2,5), (3,7)}</span> is a function, but <span class=\"m\">{(1,3), (1,4), (2,5)}</span> is not, because the input 1 maps to both 3 and 4."
    },
    {
      "type": "figure",
      "svg": "<svg class=\"fig\" viewBox=\"0 0 640 210\" role=\"img\" aria-label=\"Arrow diagrams: function and non-function\">\n    <ellipse cx=\"120\" cy=\"105\" rx=\"78\" ry=\"88\" fill=\"var(--primary)\" opacity=\".10\"></ellipse>\n    <ellipse cx=\"330\" cy=\"105\" rx=\"78\" ry=\"88\" fill=\"var(--accent)\" opacity=\".10\"></ellipse>\n    <text x=\"120\" y=\"34\" class=\"lbl\" text-anchor=\"middle\">X</text><text x=\"330\" y=\"34\" class=\"lbl\" text-anchor=\"middle\">Y</text>\n    <text x=\"120\" y=\"85\" text-anchor=\"middle\">1</text><text x=\"120\" y=\"125\" text-anchor=\"middle\">2</text><text x=\"120\" y=\"165\" text-anchor=\"middle\">3</text>\n    <text x=\"330\" y=\"65\" text-anchor=\"middle\">a</text><text x=\"330\" y=\"125\" text-anchor=\"middle\">b</text><text x=\"330\" y=\"175\" text-anchor=\"middle\">c</text>\n    <line x1=\"150\" y1=\"80\" x2=\"300\" y2=\"61\" stroke=\"var(--primary)\" stroke-width=\"2\"></line><polygon points=\"300,61 291,60 296,53\" fill=\"var(--primary)\"></polygon>\n    <line x1=\"150\" y1=\"120\" x2=\"300\" y2=\"120\" stroke=\"var(--primary)\" stroke-width=\"2\"></line><polygon points=\"300,120 291,117 294,126\" fill=\"var(--primary)\"></polygon>\n    <line x1=\"150\" y1=\"160\" x2=\"300\" y2=\"170\" stroke=\"var(--primary)\" stroke-width=\"2\"></line><polygon points=\"300,170 291,166 293,175\" fill=\"var(--primary)\"></polygon>\n    <text x=\"225\" y=\"205\" text-anchor=\"middle\" fill=\"var(--success)\" class=\"lbl\">✓ a function — each input has ONE output</text>\n    <ellipse cx=\"520\" cy=\"105\" rx=\"78\" ry=\"88\" fill=\"var(--danger)\" opacity=\".08\"></ellipse>\n    <text x=\"520\" y=\"34\" class=\"lbl\" text-anchor=\"middle\">X</text>\n    <text x=\"520\" y=\"85\" text-anchor=\"middle\">1</text><text x=\"520\" y=\"145\" text-anchor=\"middle\">2</text>\n    <line x1=\"550\" y1=\"80\" x2=\"622\" y2=\"55\" stroke=\"var(--danger)\" stroke-width=\"2\"></line><polygon points=\"622,55 613,54 618,47\" fill=\"var(--danger)\"></polygon>\n    <line x1=\"550\" y1=\"80\" x2=\"622\" y2=\"115\" stroke=\"var(--danger)\" stroke-width=\"2\"></line><polygon points=\"622,115 613,111 616,121\" fill=\"var(--danger)\"></polygon>\n    <text x=\"628\" y=\"58\" text-anchor=\"middle\">a</text><text x=\"628\" y=\"122\" text-anchor=\"middle\">b</text>\n    <text x=\"520\" y=\"205\" text-anchor=\"middle\" fill=\"var(--danger)\" class=\"lbl\">✗ not a function — input 1 has two outputs</text>\n  </svg>",
      "alt": "Arrow diagrams: function and non-function",
      "caption": "Arrow diagrams: every element of X must fire exactly one arrow."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "the-vertical-line-test",
      "text": "The vertical line test"
    },
    {
      "type": "paragraph",
      "html": "A graph represents a function <b>if and only if no vertical line can be drawn that cuts the graph in more than one point</b>. This is just the picture version of “one input → one output”. Any graph that loops back on itself (like a circle) fails the test."
    },
    {
      "type": "figure",
      "svg": "<svg class=\"fig\" viewBox=\"0 0 560 200\" role=\"img\" aria-label=\"Vertical line test\">\n    <line x1=\"30\" y1=\"170\" x2=\"250\" y2=\"170\" class=\"axisln\"></line><line x1=\"140\" y1=\"185\" x2=\"140\" y2=\"15\" class=\"axisln\"></line>\n    <path class=\"curve\" d=\"M 50 160 Q 140 20 230 160\"></path>\n    <line x1=\"95\" y1=\"185\" x2=\"95\" y2=\"15\" stroke=\"var(--danger)\" stroke-width=\"1.8\" stroke-dasharray=\"5 4\"></line>\n    <text x=\"140\" y=\"196\" text-anchor=\"middle\" font-size=\"11\">✓ passes — one cut per vertical line</text>\n    <line x1=\"310\" y1=\"170\" x2=\"530\" y2=\"170\" class=\"axisln\"></line><line x1=\"420\" y1=\"185\" x2=\"420\" y2=\"15\" class=\"axisln\"></line>\n    <circle cx=\"420\" cy=\"100\" r=\"58\" fill=\"none\" stroke=\"var(--danger)\" stroke-width=\"2.6\"></circle>\n    <line x1=\"420\" y1=\"185\" x2=\"420\" y2=\"15\" stroke=\"var(--danger)\" stroke-width=\"1.8\" stroke-dasharray=\"5 4\"></line>\n    <text x=\"420\" y=\"196\" text-anchor=\"middle\" font-size=\"11\">✗ fails — the line cuts the circle twice</text>\n  </svg>",
      "alt": "Vertical line test",
      "caption": "The vertical line test applied to a parabola (left) and a circle (right)."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "domain-and-range",
      "text": "Domain and range"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">Domain</div><div class=\"f-b\">The set of all allowed <b>inputs</b> x</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Range</div><div class=\"f-b\">The set of all actual <b>outputs</b> f(x)</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Watch out for</div><div class=\"f-b\">√ needs x ≥  &nbsp;·&nbsp; 1/x needs x ≠ 0</div></div>\n  </div>",
      "alt": "Formula reference cards"
    },
    {
      "type": "example",
      "title": "Worked example — domain, range & evaluating",
      "bodyHtml": "<p>For <span class=\"m\">f(x) = x² − 3x + 2</span>: find f(0), f(2), f(−1). State the natural domain, and the domain and range of <span class=\"m\">g(x) = <span class=\"frac\"><span>1</span><span>x − 4</span></span></span> and <span class=\"m\">h(x) = √x</span>.</p>",
      "solutionHtml": "<p><span class=\"m\">f(0) = 0 − 0 + 2 = 2</span>; &nbsp; <span class=\"m\">f(2) = 4 − 6 + 2 = 0</span>; &nbsp; <span class=\"m\">f(−1) = 1 + 3 + 2 = 6</span>.</p>\n      <ul>\n        <li><b>f(x) = x² − 3x + 2</b>: any x may be squared and multiplied, so the domain is <b>all real numbers</b>; the range (parabola opening up, vertex at x = 1.5, f(1.5) = −0.25) is <span class=\"m\">y ≥ −<span class=\"frac\"><span>1</span><span>4</span></span></span>.</li>\n        <li><b>g(x) = 1/(x − 4)</b>: division by zero is forbidden, so the domain is <b>x ≠ 4</b> (all reals except 4); the range is <b>y ≠ 0</b>.</li>\n        <li><b>h(x) = √x</b>: cannot take the square root of a negative number, so the domain is <b>x ≥ 0</b> and the range is <b>y ≥ 0</b>.</li>\n      </ul>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "types-of-functions-visual-gallery",
      "text": "Types of functions — visual gallery"
    },
    {
      "type": "paragraph",
      "html": "The function family poster below is one of the most useful revision images in the course. Learn to recognise each <b>shape</b> and match it to its general form — graph-reading questions are near-guaranteed in exams."
    },
    {
      "type": "table",
      "head": [
        "Name",
        "Form",
        "Shape / key features"
      ],
      "rows": [
        [
          "<b>Linear</b>",
          "f(x) = ax + b",
          "A straight line; crosses the y-axis at b."
        ],
        [
          "<b>Quadratic</b>",
          "f(x) = ax² + bx + c",
          "Parabola (U-shape if a &gt; 0, n-shape if a &lt; 0)."
        ],
        [
          "<b>Polynomial</b>",
          "f(x) = aₙxⁿ + … + a₀",
          "Smooth waves; degree n controls the turns."
        ],
        [
          "<b>Rational</b>",
          "f(x) = <span class=\"frac\"><span>p(x)</span><span>q(x)</span></span>",
          "Hyperbola-like (e.g. 1/x); breaks where q(x) = 0."
        ],
        [
          "<b>Exponential</b>",
          "f(x) = eᵁ",
          "Rapid growth; passes through (0, 1); never touches x-axis."
        ],
        [
          "<b>Logarithmic</b>",
          "f(x) = ln x",
          "Grows slowly; only defined for x &gt; 0; passes through (1, 0)."
        ],
        [
          "<b>Irrational</b>",
          "f(x) = √x",
          "Half-parabola lying on its side; starts at the origin."
        ],
        [
          "<b>Sine</b>",
          "f(x) = sin x",
          "Wave oscillating between −1 and 1; period 360°."
        ],
        [
          "<b>Cosine</b>",
          "f(x) = cos x",
          "Same wave shifted; starts at its maximum 1."
        ]
      ],
      "nowrapCols": [
        1
      ]
    },
    {
      "type": "figure",
      "svg": "<svg class=\"fig lg\" viewBox=\"0 0 720 470\" role=\"img\" aria-label=\"Gallery of function types\">\n    <!-- linear -->\n    <g><rect x=\"8\" y=\"8\" width=\"224\" height=\"140\" rx=\"10\" fill=\"none\" stroke=\"var(--border)\"></rect>\n    <line x1=\"20\" y1=\"118\" x2=\"220\" y2=\"38\" class=\"axisln\" stroke-width=\"1.2\"></line><line x1=\"30\" y1=\"140\" x2=\"30\" y2=\"20\" class=\"axisln\" stroke-width=\"1.2\"></line>\n    <path class=\"curve\" d=\"M 30 130 L 210 34\"></path>\n    <text x=\"120\" y=\"66\" text-anchor=\"middle\" class=\"lbl\">Linear</text><text x=\"120\" y=\"82\" text-anchor=\"middle\" font-size=\"11\">f(x) = ax + b</text></g>\n    <!-- quadratic -->\n    <g><rect x=\"248\" y=\"8\" width=\"224\" height=\"140\" rx=\"10\" fill=\"none\" stroke=\"var(--border)\"></rect>\n    <line x1=\"360\" y1=\"20\" x2=\"360\" y2=\"140\" class=\"axisln\" stroke-width=\"1.2\"></line><line x1=\"260\" y1=\"130\" x2=\"460\" y2=\"130\" class=\"axisln\" stroke-width=\"1.2\"></line>\n    <path class=\"curve\" d=\"M 275 30 Q 360 180 445 30\"></path>\n    <text x=\"360\" y=\"46\" text-anchor=\"middle\" class=\"lbl\">Quadratic</text><text x=\"360\" y=\"62\" text-anchor=\"middle\" font-size=\"11\">f(x) = ax² + bx + c</text></g>\n    <!-- rational -->\n    <g><rect x=\"488\" y=\"8\" width=\"224\" height=\"140\" rx=\"10\" fill=\"none\" stroke=\"var(--border)\"></rect>\n    <line x1=\"600\" y1=\"20\" x2=\"600\" y2=\"140\" class=\"axisln\" stroke-width=\"1.2\"></line><line x1=\"500\" y1=\"80\" x2=\"700\" y2=\"80\" class=\"axisln\" stroke-width=\"1.2\"></line>\n    <path class=\"curve\" d=\"M 505 30 C 570 30 588 55 594 76 M 606 84 C 612 105 630 132 695 132\"></path>\n    <text x=\"600\" y=\"46\" text-anchor=\"middle\" class=\"lbl\">Rational</text><text x=\"600\" y=\"62\" text-anchor=\"middle\" font-size=\"11\">f(x) = p(x)/q(x), e.g. 1/x</text></g>\n    <!-- exponential -->\n    <g><rect x=\"8\" y=\"168\" width=\"224\" height=\"140\" rx=\"10\" fill=\"none\" stroke=\"var(--border)\"></rect>\n    <line x1=\"30\" y1=\"290\" x2=\"220\" y2=\"290\" class=\"axisln\" stroke-width=\"1.2\"></line><line x1=\"40\" y1=\"298\" x2=\"40\" y2=\"180\" class=\"axisln\" stroke-width=\"1.2\"></line>\n    <path class=\"curve\" d=\"M 44 287 C 90 284 140 250 200 190\"></path>\n    <text x=\"120\" y=\"208\" text-anchor=\"middle\" class=\"lbl\">Exponential</text><text x=\"120\" y=\"224\" text-anchor=\"middle\" font-size=\"11\">f(x) = eᵁ</text></g>\n    <!-- log -->\n    <g><rect x=\"248\" y=\"168\" width=\"224\" height=\"140\" rx=\"10\" fill=\"none\" stroke=\"var(--border)\"></rect>\n    <line x1=\"260\" y1=\"290\" x2=\"460\" y2=\"290\" class=\"axisln\" stroke-width=\"1.2\"></line><line x1=\"320\" y1=\"298\" x2=\"320\" y2=\"180\" class=\"axisln\" stroke-width=\"1.2\"></line>\n    <path class=\"curve\" d=\"M 324 288 C 370 284 400 260 440 195\"></path>\n    <text x=\"360\" y=\"208\" text-anchor=\"middle\" class=\"lbl\">Logarithmic</text><text x=\"360\" y=\"224\" text-anchor=\"middle\" font-size=\"11\">f(x) = ln x</text></g>\n    <!-- sqrt -->\n    <g><rect x=\"488\" y=\"168\" width=\"224\" height=\"140\" rx=\"10\" fill=\"none\" stroke=\"var(--border)\"></rect>\n    <line x1=\"500\" y1=\"290\" x2=\"700\" y2=\"290\" class=\"axisln\" stroke-width=\"1.2\"></line><line x1=\"510\" y1=\"298\" x2=\"510\" y2=\"180\" class=\"axisln\" stroke-width=\"1.2\"></line>\n    <path class=\"curve\" d=\"M 512 289 Q 560 286 620 210\"></path>\n    <text x=\"600\" y=\"208\" text-anchor=\"middle\" class=\"lbl\">Irrational</text><text x=\"600\" y=\"224\" text-anchor=\"middle\" font-size=\"11\">f(x) = √x</text></g>\n    <!-- sine -->\n    <g><rect x=\"8\" y=\"328\" width=\"340\" height=\"134\" rx=\"10\" fill=\"none\" stroke=\"var(--border)\"></rect>\n    <line x1=\"20\" y1=\"395\" x2=\"336\" y2=\"395\" class=\"axisln\" stroke-width=\"1.2\"></line>\n    <path class=\"curve\" d=\"M 24 395 C 46 340 76 340 98 395 C 120 450 150 450 172 395 C 194 340 224 340 246 395 C 268 450 298 450 320 395\"></path>\n    <text x=\"178\" y=\"362\" text-anchor=\"middle\" class=\"lbl\">Sine</text><text x=\"178\" y=\"436\" text-anchor=\"middle\" font-size=\"11\">f(x) = sin x</text></g>\n    <!-- cosine -->\n    <g><rect x=\"372\" y=\"328\" width=\"340\" height=\"134\" rx=\"10\" fill=\"none\" stroke=\"var(--border)\"></rect>\n    <line x1=\"384\" y1=\"395\" x2=\"700\" y2=\"395\" class=\"axisln\" stroke-width=\"1.2\"></line>\n    <path class=\"curve\" d=\"M 388 352 C 412 428 448 428 472 395 C 496 362 528 362 552 395 C 576 428 608 428 632 395 C 656 362 688 362 696 384\"></path>\n    <text x=\"542\" y=\"362\" text-anchor=\"middle\" class=\"lbl\">Cosine</text><text x=\"542\" y=\"436\" text-anchor=\"middle\" font-size=\"11\">f(x) = cos x</text></g>\n  </svg>",
      "alt": "Gallery of function types",
      "caption": "The nine function families — recognise the shape, recall the formula."
    },
    {
      "type": "quiz",
      "title": "Topic 5 Quiz — Functions",
      "count": 7,
      "quizSlug": "05-introduction-to-functions"
    }
  ]
};

export default chapter;
