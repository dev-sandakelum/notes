import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "08-quadratic-graphs",
    "number": 8,
    "title": "Quadratic Graphs",
    "subtitle": "Parabola features · Plotting · Maximum & minimum values · Sketching",
    "kind": "topic",
    "words": 629,
    "minutes": 3
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "shape-of-a-quadratic-graph",
      "text": "Shape of a quadratic graph"
    },
    {
      "type": "paragraph",
      "html": "The graph of a quadratic function <span class=\"m\">y = ax² + bx + c</span> is a <b>parabola</b>. If <b>a &gt; 0</b> it opens upwards (U-shape) and has a <b>minimum</b> point; if <b>a &lt; 0</b> it opens downwards (n-shape) and has a <b>maximum</b> point. The larger |a| is, the narrower the parabola. Once the graph is drawn, four key features answer almost every question:"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>The roots</b> — where the curve crosses the x-axis (the x-intercepts).",
        "<b>The y-intercept</b> — where it crosses the y-axis (simply <span class=\"m\">y = c</span>).",
        "<b>The vertex</b> — the turning point (minimum or maximum).",
        "<b>The axis of symmetry</b> — the vertical mirror line through the vertex."
      ]
    },
    {
      "type": "figure",
      "svg": "<svg class=\"fig\" viewBox=\"0 0 470 300\" role=\"img\" aria-label=\"Parabola key features\">\n    <line x1=\"25\" y1=\"250\" x2=\"450\" y2=\"250\" class=\"axisln\"></line><polygon points=\"450,250 441,246 441,254\" fill=\"var(--axis)\"></polygon>\n    <line x1=\"70\" y1=\"275\" x2=\"70\" y2=\"20\" class=\"axisln\"></line><polygon points=\"70,20 66,29 74,29\" fill=\"var(--axis)\"></polygon>\n    <text x=\"436\" y=\"268\" class=\"axl\">x</text><text x=\"82\" y=\"32\" class=\"axl\">y</text>\n    <path class=\"curve\" d=\"M 105 40 Q 240 460 385 40\"></path>\n    <line x1=\"240\" y1=\"250\" x2=\"240\" y2=\"176\" class=\"dashed\" stroke=\"var(--accent)\"></line>\n    <text x=\"246\" y=\"170\" class=\"lbl\" fill=\"var(--accent)\">vertex (turning point)</text>\n    <text x=\"222\" y=\"290\" text-anchor=\"middle\" fill=\"var(--accent)\" font-size=\"12\">axis of symmetry</text>\n    <line x1=\"240\" y1=\"262\" x2=\"240\" y2=\"278\" stroke=\"var(--accent)\" stroke-width=\"2.4\"></line>\n    <circle cx=\"130\" cy=\"250\" r=\"5\" fill=\"var(--success)\"></circle><circle cx=\"350\" cy=\"250\" r=\"5\" fill=\"var(--success)\"></circle>\n    <text x=\"126\" y=\"238\" fill=\"var(--success)\" font-weight=\"700\" font-size=\"12\">root</text>\n    <text x=\"338\" y=\"238\" fill=\"var(--success)\" font-weight=\"700\" font-size=\"12\">root</text>\n    <circle cx=\"70\" cy=\"200\" r=\"5\" fill=\"var(--warn)\"></circle>\n    <text x=\"84\" y=\"198\" fill=\"var(--warn)\" font-weight=\"700\" font-size=\"12\">y-intercept = c</text>\n    <text x=\"150\" y=\"70\" class=\"lbl\">y = ax² + bx + c, a &gt; 0</text>\n  </svg>",
      "alt": "Parabola key features",
      "caption": "Anatomy of a U-shaped parabola: roots, y-intercept, vertex and axis of symmetry."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "maximum-and-minimum-values",
      "text": "Maximum and minimum values"
    },
    {
      "type": "paragraph",
      "html": "Moving from left to right along a U-shaped curve, the graph <b>falls, turns at the minimum point, then rises</b> — the gradient changes from negative to zero to positive. On an n-shaped curve it <b>rises, turns at the maximum, then falls</b> — the gradient goes positive → zero → negative. The turning point always lies on the axis of symmetry:"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">Axis of symmetry</div><div class=\"f-b\">x = −<span class=\"frac\"><span>b</span><span>2a</span></span></div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Vertex</div><div class=\"f-b\"><span class=\"bigp\">(</span>−<span class=\"frac\"><span>b</span><span>2a</span></span>, f(−<span class=\"frac\"><span>b</span><span>2a</span></span>)<span class=\"bigp\">)</span></div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Min / max value</div><div class=\"f-b\">y = c − <span class=\"frac\"><span>b²</span><span>4a</span></span></div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Direction</div><div class=\"f-b\">a &gt; 0: minimum · a &lt; 0: maximum</div></div>\n  </div>",
      "alt": "Formula reference cards"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "plotting-a-quadratic-graph-from-a-table-of-values",
      "text": "Plotting a quadratic graph from a table of values"
    },
    {
      "type": "paragraph",
      "html": "Substitute each x-value into the function to get the corresponding y-value, plot the points, then join them with a <b>smooth curve</b> (never a ruler, never dot-to-dot straight lines). Always use a symmetric range of x-values around the vertex if possible."
    },
    {
      "type": "example",
      "title": "Worked example — plotting y = x² − 2x − 3",
      "bodyHtml": "<p>Complete the table for x = −2 to 4, plot the graph, and read off the roots, the y-intercept and the vertex.</p>",
      "solutionHtml": "<div class=\"tbl-wrap\"><table class=\"tbl\">\n        <thead><tr><th>x</th><td>−2</td><td>−1</td><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td></tr></thead>\n        <tbody><tr><th>y</th><td>5</td><td>0</td><td>−3</td><td>−4</td><td>−3</td><td>0</td><td>5</td></tr></tbody>\n      </table></div>\n      <div class=\"figwrap\">\n      <svg class=\"fig\" viewBox=\"0 0 470 290\" role=\"img\" aria-label=\"Graph of y = x squared minus 2x minus 3\">\n        <line x1=\"25\" y1=\"150\" x2=\"450\" y2=\"150\" class=\"axisln\"></line><polygon points=\"450,150 441,146 441,154\" fill=\"var(--axis)\"></polygon>\n        <line x1=\"120\" y1=\"270\" x2=\"120\" y2=\"25\" class=\"axisln\"></line><polygon points=\"120,25 116,34 124,34\" fill=\"var(--axis)\"></polygon>\n        <text x=\"436\" y=\"168\" class=\"axl\">x</text><text x=\"132\" y=\"37\" class=\"axl\">y</text>\n        <text x=\"114\" y=\"166\" text-anchor=\"end\" font-size=\"11\">0</text>\n        <text x=\"212\" y=\"166\" text-anchor=\"middle\" font-size=\"11\">1</text>\n        <text x=\"304\" y=\"166\" text-anchor=\"middle\" font-size=\"11\">2</text>\n        <text x=\"396\" y=\"166\" text-anchor=\"middle\" font-size=\"11\">3</text>\n        <text x=\"44\" y=\"86\" font-size=\"11\" text-anchor=\"middle\">−3</text>\n        <text x=\"44\" y=\"246\" font-size=\"11\" text-anchor=\"middle\">4</text>\n        <line x1=\"212\" y1=\"150\" x2=\"212\" y2=\"200\" class=\"dashed\" stroke=\"var(--axis)\"></line><line x1=\"120\" y1=\"200\" x2=\"212\" y2=\"200\" class=\"dashed\" stroke=\"var(--axis)\"></line>\n        <path class=\"curve\" d=\"M 36 30 C 120 250 190 235 212 200 C 240 155 330 30 404 30\"></path>\n        <circle cx=\"120\" cy=\"200\" r=\"5\" fill=\"var(--warn)\"></circle><text x=\"98\" y=\"216\" fill=\"var(--warn)\" font-weight=\"700\" font-size=\"12\">(0,−3)</text>\n        <circle cx=\"128\" cy=\"150\" r=\"5\" fill=\"var(--success)\"></circle><circle cx=\"396\" cy=\"150\" r=\"5\" fill=\"var(--success)\"></circle>\n        <text x=\"120\" y=\"138\" fill=\"var(--success)\" font-weight=\"700\" font-size=\"12\">−1</text><text x=\"390\" y=\"138\" fill=\"var(--success)\" font-weight=\"700\" font-size=\"12\">3</text>\n        <circle cx=\"212\" cy=\"200\" r=\"5\" fill=\"var(--accent)\"></circle><text x=\"222\" y=\"216\" fill=\"var(--accent)\" font-weight=\"700\" font-size=\"12\">vertex (1,−4)</text>\n      </svg>\n      <div class=\"figcap\">y = x² − 2x − 3: roots x = −1 and 3, y-intercept −3, vertex (1, −4).</div>\n      </div>\n      <p>Reading the graph: the curve crosses the x-axis at <b>x = −1 and x = 3</b> (the roots of x² − 2x − 3 = 0), the y-intercept is <b>−3</b> (the value of c), and the minimum point is the <b>vertex (1, −4)</b> — axis of symmetry x = 1.</p>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "solving-quadratic-equations-graphically",
      "text": "Solving quadratic equations graphically"
    },
    {
      "type": "paragraph",
      "html": "A quadratic graph gives <b>estimated solutions</b> even when exact algebra is awkward. Two techniques appear in exams: <b>(i)</b> to solve <span class=\"m\">ax² + bx + c = 0</span>, read where the parabola crosses the x-axis; <b>(ii)</b> to solve something like <span class=\"m\">x² = 2x + 3</span>, plot both sides — the parabola <span class=\"m\">y = x²</span> and the line <span class=\"m\">y = 2x + 3</span> — and read the <b>x-coordinates of the intersection points</b>."
    },
    {
      "type": "figure",
      "svg": "<svg class=\"fig\" viewBox=\"0 0 470 280\" role=\"img\" aria-label=\"Intersection of parabola and line\">\n    <line x1=\"25\" y1=\"140\" x2=\"450\" y2=\"140\" class=\"axisln\"></line><polygon points=\"450,140 441,136 441,144\" fill=\"var(--axis)\"></polygon>\n    <line x1=\"90\" y1=\"255\" x2=\"90\" y2=\"20\" class=\"axisln\"></line><polygon points=\"90,20 86,29 94,29\" fill=\"var(--axis)\"></polygon>\n    <text x=\"436\" y=\"158\" class=\"axl\">x</text><text x=\"102\" y=\"32\" class=\"axl\">y</text>\n    <path class=\"curve\" d=\"M 105 22 Q 240 460 385 22\"></path>\n    <path class=\"curve2\" d=\"M 40 230 L 400 60\"></path>\n    <circle cx=\"141\" cy=\"204\" r=\"5.5\" fill=\"var(--danger)\"></circle><circle cx=\"349\" cy=\"95\" r=\"5.5\" fill=\"var(--danger)\"></circle>\n    <text x=\"118\" y=\"226\" fill=\"var(--danger)\" font-weight=\"700\" font-size=\"12\">(−1, 1)</text>\n    <text x=\"356\" y=\"90\" fill=\"var(--danger)\" font-weight=\"700\" font-size=\"12\">(3, 9)</text>\n    <text x=\"300\" y=\"40\" fill=\"var(--primary)\" class=\"lbl\">y = x²</text>\n    <text x=\"378\" y=\"132\" fill=\"var(--accent)\" class=\"lbl\">y = 2x + 3</text>\n  </svg>",
      "alt": "Intersection of parabola and line",
      "caption": "Solving x² = 2x + 3 graphically: intersections at x = −1 and x = 3."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "sketching-quadratic-graphs-quickly",
      "text": "Sketching quadratic graphs quickly"
    },
    {
      "type": "paragraph",
      "html": "A sketch needs no plotted table — just four pieces of information, in this order: <b>(1)</b> direction (sign of a), <b>(2)</b> the y-intercept c, <b>(3)</b> the roots from factorising (or note “no real roots”), <b>(4)</b> the vertex from <span class=\"m\">x = −b/2a</span>. Mark them clearly with dotted guidelines and label the axes."
    },
    {
      "type": "figure",
      "svg": "<svg class=\"fig\" viewBox=\"0 0 660 220\" role=\"img\" aria-label=\"Three discriminant cases\">\n    <line x1=\"30\" y1=\"170\" x2=\"210\" y2=\"170\" class=\"axisln\"></line><line x1=\"120\" y1=\"200\" x2=\"120\" y2=\"30\" class=\"axisln\"></line>\n    <path class=\"curve\" d=\"M 50 40 Q 120 300 190 40\"></path>\n    <circle cx=\"78\" cy=\"170\" r=\"4.5\" fill=\"var(--success)\"></circle><circle cx=\"162\" cy=\"170\" r=\"4.5\" fill=\"var(--success)\"></circle>\n    <text x=\"120\" y=\"214\" text-anchor=\"middle\" font-size=\"11.5\">b²−4ac &gt; 0: two roots</text>\n    <line x1=\"250\" y1=\"170\" x2=\"430\" y2=\"170\" class=\"axisln\"></line><line x1=\"340\" y1=\"200\" x2=\"340\" y2=\"30\" class=\"axisln\"></line>\n    <path class=\"curve\" d=\"M 270 40 Q 340 300 410 40\"></path>\n    <circle cx=\"340\" cy=\"170\" r=\"4.5\" fill=\"var(--warn)\"></circle>\n    <text x=\"340\" y=\"214\" text-anchor=\"middle\" font-size=\"11.5\">b²−4ac = 0: one root</text>\n    <line x1=\"470\" y1=\"170\" x2=\"650\" y2=\"170\" class=\"axisln\"></line><line x1=\"560\" y1=\"200\" x2=\"560\" y2=\"30\" class=\"axisln\"></line>\n    <path class=\"curve\" d=\"M 490 40 Q 560 230 630 40\"></path>\n    <text x=\"560\" y=\"214\" text-anchor=\"middle\" font-size=\"11.5\">b²−4ac &lt; 0: no real roots</text>\n  </svg>",
      "alt": "Three discriminant cases",
      "caption": "How the discriminant appears on the graph — the three cases every examiner loves."
    },
    {
      "type": "example",
      "title": "Worked example — max/min value",
      "bodyHtml": "<p>Find the maximum or minimum value of <span class=\"m\">y = 2x² + 8x − 3</span> and state where it occurs.</p>",
      "solutionHtml": "<p>a = 2 &gt; 0, so the parabola is U-shaped and has a <b>minimum</b>. Axis of symmetry: <span class=\"m\">x = −<span class=\"frac\"><span>8</span><span>2(2)</span></span> = −2</span>.</p>\n      <p>Minimum value: <span class=\"m\">y = 2(−2)² + 8(−2) − 3 = 8 − 16 − 3 = −11</span>.</p>\n      <p>The <b>minimum value is −11</b>, occurring at the vertex <b>(−2, −11)</b>. (Check with the formula: c − b²/4a = −3 − 64/8 = −11 ✓)</p>"
    },
    {
      "type": "quiz",
      "title": "Topic 8 Quiz — Quadratic Graphs",
      "count": 6,
      "quizSlug": "08-quadratic-graphs"
    },
    {
      "type": "viz",
      "kind": "parabola",
      "caption": "Adjust a, b and c to see how each coefficient moves, stretches and flips the parabola."
    }
  ]
};

export default chapter;
