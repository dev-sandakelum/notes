import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "12-trigonometry",
    "number": 12,
    "title": "Trigonometry",
    "subtitle": "Pythagoras · Ratios · Special angles · CAST rule · Identities & compound angles",
    "kind": "topic",
    "words": 736,
    "minutes": 4
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "what-is-trigonometry",
      "text": "What is trigonometry?"
    },
    {
      "type": "paragraph",
      "html": "Trigonometry is the branch of mathematics that deals with the <b>measurement of the sides and angles of triangles</b>, and the relationships between them. There are many applications in engineering where knowledge of trigonometry is needed — forces, waves, navigation and circuits all reduce to triangles."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "the-theorem-of-pythagoras",
      "text": "The theorem of Pythagoras"
    },
    {
      "type": "paragraph",
      "html": "In any <b>right-angled</b> triangle, the square on the hypotenuse equals the sum of the squares on the other two sides:"
    },
    {
      "type": "paragraph",
      "html": "a² + b² = c² &nbsp;<span style=\"font-style:normal;font-size:.85em;color:var(--muted)\">(c = hypotenuse, opposite the right angle)</span>"
    },
    {
      "type": "figure",
      "svg": "<svg class=\"fig sm\" viewBox=\"0 0 320 230\" role=\"img\" aria-label=\"Right triangle with labels\">\n    <path d=\"M 40 190 L 280 190 L 40 40 Z\" fill=\"var(--primary)\" opacity=\".08\" stroke=\"var(--primary)\" stroke-width=\"2.4\"></path>\n    <path d=\"M 40 172 h 18 v 18\" fill=\"none\" stroke=\"var(--text)\" stroke-width=\"2\"></path>\n    <text x=\"150\" y=\"212\" text-anchor=\"middle\">adjacent (b)</text>\n    <text x=\"24\" y=\"115\" text-anchor=\"middle\" transform=\"rotate(-90 24 115)\">opposite (a)</text>\n    <text x=\"175\" y=\"105\" text-anchor=\"middle\" transform=\"rotate(-45 175 105)\">hypotenuse (c)</text>\n    <path d=\"M 262 190 A 36 36 0 0 0 254 168\" fill=\"none\" stroke=\"var(--accent)\" stroke-width=\"2\"></path>\n    <text x=\"268\" y=\"172\" fill=\"var(--accent)\" font-weight=\"700\">θ</text>\n  </svg>",
      "alt": "Right triangle with labels",
      "caption": "The right triangle — every trigonometric definition starts here."
    },
    {
      "type": "example",
      "title": "Worked example — Pythagoras",
      "bodyHtml": "<p>(1) Legs 3 and 4: find the hypotenuse. (2) Hypotenuse 13, one leg 5: find the other leg.</p>",
      "solutionHtml": "<p><b>(1)</b> <span class=\"m\">c² = 3² + 4² = 25 → c = 5</span> (the famous 3-4-5 triangle).</p>\n      <p><b>(2)</b> <span class=\"m\">b² = 13² − 5² = 169 − 25 = 144 → b = 12</span> (the 5-12-13 triangle).</p>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "trigonometric-ratios-of-acute-angles",
      "text": "Trigonometric ratios of acute angles"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">SOH</div><div class=\"f-b\">sin θ = <span class=\"frac\"><span>opposite</span><span>hypotenuse</span></span></div></div>\n    <div class=\"fcard\"><div class=\"f-t\">CAH</div><div class=\"f-b\">cos θ = <span class=\"frac\"><span>adjacent</span><span>hypotenuse</span></span></div></div>\n    <div class=\"fcard\"><div class=\"f-t\">TOA</div><div class=\"f-b\">tan θ = <span class=\"frac\"><span>opposite</span><span>adjacent</span></span></div></div>\n  </div>",
      "alt": "Formula reference cards"
    },
    {
      "type": "paragraph",
      "html": "The reciprocals complete the family: <span class=\"m\">cosec θ = 1/sin θ</span>, <span class=\"m\">sec θ = 1/cos θ</span> and <span class=\"m\">cot θ = 1/tan θ</span>."
    },
    {
      "type": "example",
      "title": "Worked example — ratios in a 3-4-5 triangle",
      "bodyHtml": "<p>For the triangle above with opposite = 3, adjacent = 4, hypotenuse = 5, write sin θ, cos θ and tan θ.</p>",
      "solutionHtml": "<div class=\"eq\">sin θ = <span class=\"frac\"><span>3</span><span>5</span></span> &nbsp;&nbsp; cos θ = <span class=\"frac\"><span>4</span><span>5</span></span> &nbsp;&nbsp; tan θ = <span class=\"frac\"><span>3</span><span>4</span></span></div>\n      <p>Sanity check: <span class=\"m\">sin²θ + cos²θ = <span class=\"frac\"><span>9</span><span>25</span></span> + <span class=\"frac\"><span>16</span><span>25</span></span> = 1</span> ✓</p>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "special-angles-exact-values",
      "text": "Special angles — exact values"
    },
    {
      "type": "figure",
      "svg": "<svg class=\"fig\" viewBox=\"0 0 620 190\" role=\"img\" aria-label=\"Special triangles\">\n    <path d=\"M 60 150 L 200 150 L 60 40 Z\" fill=\"var(--primary)\" opacity=\".08\" stroke=\"var(--primary)\" stroke-width=\"2.2\"></path>\n    <path d=\"M 60 134 h 16 v 16\" fill=\"none\" stroke=\"var(--text)\" stroke-width=\"1.8\"></path>\n    <text x=\"130\" y=\"170\" text-anchor=\"middle\">1</text>\n    <text x=\"42\" y=\"98\" text-anchor=\"middle\" transform=\"rotate(-90 42 98)\">√3</text>\n    <text x=\"140\" y=\"86\" text-anchor=\"middle\">2</text>\n    <text x=\"84\" y=\"142\" font-size=\"12\">60°</text><text x=\"168\" y=\"142\" font-size=\"12\">30°</text>\n    <text x=\"130\" y=\"188\" text-anchor=\"middle\" font-size=\"12\">30–60–90 triangle</text>\n    <path d=\"M 320 150 L 440 150 L 440 40 Z\" fill=\"var(--accent)\" opacity=\".1\" stroke=\"var(--accent)\" stroke-width=\"2.2\"></path>\n    <path d=\"M 424 150 h 16 v -16\" fill=\"none\" stroke=\"var(--text)\" stroke-width=\"1.8\"></path>\n    <text x=\"380\" y=\"170\" text-anchor=\"middle\">1</text>\n    <text x=\"458\" y=\"98\" text-anchor=\"middle\">1</text>\n    <text x=\"392\" y=\"86\" text-anchor=\"middle\">√2</text>\n    <text x=\"344\" y=\"142\" font-size=\"12\">45°</text><text x=\"416\" y=\"142\" font-size=\"12\">45°</text>\n    <text x=\"380\" y=\"188\" text-anchor=\"middle\" font-size=\"12\">45–45–90 triangle (isosceles)</text>\n  </svg>",
      "alt": "Special triangles",
      "caption": "Memorise these two triangles — they generate every exact value in the table below."
    },
    {
      "type": "table",
      "head": [
        "θ",
        "0°",
        "30°",
        "45°",
        "60°",
        "90°",
        "sin θ",
        "cos θ",
        "tan θ"
      ],
      "rows": []
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "angles-of-any-magnitude-the-cast-rule",
      "text": "Angles of any magnitude — the CAST rule"
    },
    {
      "type": "paragraph",
      "html": "Angles are measured from the positive x-axis, with <b>anticlockwise rotation positive</b>. Letting a rotating arm OA sweep into the second, third and fourth quadrants extends sine, cosine and tangent to <b>any magnitude</b>. The sign in each quadrant is given by <b>CAST</b>, read anticlockwise from the fourth quadrant:"
    },
    {
      "type": "figure",
      "svg": "<svg class=\"fig\" viewBox=\"0 0 420 340\" role=\"img\" aria-label=\"CAST diagram\">\n    <line x1=\"30\" y1=\"170\" x2=\"390\" y2=\"170\" class=\"axisln\"></line><line x1=\"210\" y1=\"320\" x2=\"210\" y2=\"20\" class=\"axisln\"></line>\n    <circle cx=\"210\" cy=\"170\" r=\"120\" fill=\"none\" stroke=\"var(--axis)\" stroke-width=\"1.2\" stroke-dasharray=\"4 4\"></circle>\n    <path d=\"M 210 50 A 120 120 0 0 1 330 170\" fill=\"none\" stroke=\"var(--primary)\" stroke-width=\"2.6\"></path>\n    <polygon points=\"330,170 322,164 322,176\" fill=\"var(--primary)\"></polygon>\n    <text x=\"270\" y=\"95\" class=\"lbl\" fill=\"var(--primary)\">90°→180°</text>\n    <text x=\"305\" y=\"135\" text-anchor=\"middle\" class=\"lbl\" fill=\"var(--danger)\">S</text>\n    <text x=\"120\" y=\"135\" text-anchor=\"middle\" class=\"lbl\" fill=\"var(--success)\">A</text>\n    <text x=\"120\" y=\"215\" text-anchor=\"middle\" class=\"lbl\" fill=\"var(--warn)\">T</text>\n    <text x=\"305\" y=\"215\" text-anchor=\"middle\" class=\"lbl\" fill=\"var(--accent)\">C</text>\n    <text x=\"118\" y=\"103\" font-size=\"11\">All positive</text>\n    <text x=\"268\" y=\"247\" font-size=\"11\">Cos positive</text>\n    <text x=\"30\" y=\"250\" font-size=\"11\">Tan positive</text>\n    <text x=\"240\" y=\"103\" font-size=\"11\">Sin positive</text>\n    <text x=\"285\" y=\"160\" font-size=\"11\">180°</text><text x=\"120\" y=\"160\" font-size=\"11\">0°/360°</text>\n    <text x=\"55\" y=\"290\" font-size=\"11.5\">Quadrants numbered anticlockwise: I (top-right), II (top-left), III, IV</text>\n  </svg>",
      "alt": "CAST diagram",
      "caption": "CAST — starting in quadrant IV and moving anticlockwise: Cos, All, Sin, Tan."
    },
    {
      "type": "example",
      "title": "Worked example — evaluating in other quadrants",
      "bodyHtml": "<p>Given sin 30° = 1/2 and cos 30° = √3/2, evaluate sin 150°, cos 150°, sin 210° and cos 330°.</p>",
      "solutionHtml": "<ul>\n        <li><b>150° (Quadrant II, S)</b>: sin positive, cos negative → <span class=\"m\">sin 150° = +<span class=\"frac\"><span>1</span><span>2</span></span></span>, <span class=\"m\">cos 150° = −<span class=\"frac\"><span><span class=\"sqrt\"><span class=\"r\">3</span></span></span><span>2</span></span></span>.</li>\n        <li><b>210° (Quadrant III, T)</b>: sine is negative → <span class=\"m\">sin 210° = −<span class=\"frac\"><span>1</span><span>2</span></span></span> (tan would be positive).</li>\n        <li><b>330° (Quadrant IV, C)</b>: cosine is positive → <span class=\"m\">cos 330° = +<span class=\"frac\"><span><span class=\"sqrt\"><span class=\"r\">3</span></span></span><span>2</span></span></span>.</li>\n      </ul>\n      <p>Method: subtract the acute angle the arm makes with the x-axis (the “reference angle”), evaluate as usual, then attach the CAST sign.</p>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "special-formulas-fundamental-identities",
      "text": "Special formulas — fundamental identities"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">Pythagorean identity</div><div class=\"f-b\">sin²θ + cos²θ = 1</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Quotient</div><div class=\"f-b\">tan θ = <span class=\"frac\"><span>sin θ</span><span>cos θ</span></span></div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Secant identity</div><div class=\"f-b\">1 + tan²θ = sec²θ</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Cosecant identity</div><div class=\"f-b\">1 + cot²θ = cosec²θ</div></div>\n  </div>",
      "alt": "Formula reference cards"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "addition-and-subtraction-compound-formulas",
      "text": "Addition and subtraction (compound) formulas"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">sin(A ± B)</div><div class=\"f-b\">sin A cos B ± cos A sin B</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">cos(A ± B)</div><div class=\"f-b\">cos A cos B ∓ sin A sin B</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">tan(A ± B)</div><div class=\"f-b\"><span class=\"frac\"><span>tan A ± tan B</span><span>1 ∟ tan A tan B</span></span></div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Note</div><div class=\"f-b\" style=\"font-size:.85rem\">cos flips the middle sign: + becomes −</div></div>\n  </div>",
      "alt": "Formula reference cards"
    },
    {
      "type": "example",
      "title": "Worked example — compound angle",
      "bodyHtml": "<p>Use the addition formula with 45° and 30° to show that <span class=\"m\">sin 75° = <span class=\"frac\"><span><span class=\"sqrt\"><span class=\"r\">6</span></span> + <span class=\"sqrt\"><span class=\"r\">2</span></span></span><span>4</span></span></span>.</p>",
      "solutionHtml": "<div class=\"eq\">sin 75° = sin(45° + 30°) = sin 45° cos 30° + cos 45° sin 30°</div>\n      <div class=\"eq\">= <span class=\"frac\"><span><span class=\"sqrt\"><span class=\"r\">2</span></span></span><span>2</span></span>·<span class=\"frac\"><span><span class=\"sqrt\"><span class=\"r\">3</span></span></span><span>2</span></span> + <span class=\"frac\"><span><span class=\"sqrt\"><span class=\"r\">2</span></span></span><span>2</span></span>·<span class=\"frac\"><span>1</span><span>2</span></span> = <span class=\"frac\"><span><span class=\"sqrt\"><span class=\"r\">6</span></span> + <span class=\"sqrt\"><span class=\"r\">2</span></span></span><span>4</span></span> ✓</div>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "double-angle-formulas",
      "text": "Double angle formulas"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">sin 2A</div><div class=\"f-b\">2 sin A cos A</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">cos 2A</div><div class=\"f-b\">cos²A − sin²A = 2cos²A − 1 = 1 − 2sin²A</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">tan 2A</div><div class=\"f-b\"><span class=\"frac\"><span>2 tan A</span><span>1 − tan²A</span></span></div></div>\n  </div>",
      "alt": "Formula reference cards"
    },
    {
      "type": "paragraph",
      "html": "Set B = A in the compound formulas to derive all three — examiners often ask you to <i>derive</i> rather than recall."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "transformations-sums-products",
      "text": "Transformations: sums ↔ products"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">sin C + sin D</div><div class=\"f-b\">2 sin<span class=\"bigp\">(</span><span class=\"frac\"><span>C+D</span><span>2</span></span><span class=\"bigp\">)</span> cos<span class=\"bigp\">(</span><span class=\"frac\"><span>C−D</span><span>2</span></span><span class=\"bigp\">)</span></div></div>\n    <div class=\"fcard\"><div class=\"f-t\">sin C − sin D</div><div class=\"f-b\">2 cos<span class=\"bigp\">(</span><span class=\"frac\"><span>C+D</span><span>2</span></span><span class=\"bigp\">)</span> sin<span class=\"bigp\">(</span><span class=\"frac\"><span>C−D</span><span>2</span></span><span class=\"bigp\">)</span></div></div>\n    <div class=\"fcard\"><div class=\"f-t\">cos C + cos D</div><div class=\"f-b\">2 cos<span class=\"bigp\">(</span><span class=\"frac\"><span>C+D</span><span>2</span></span><span class=\"bigp\">)</span> cos<span class=\"bigp\">(</span><span class=\"frac\"><span>C−D</span><span>2</span></span><span class=\"bigp\">)</span></div></div>\n    <div class=\"fcard\"><div class=\"f-t\">cos C − cos D</div><div class=\"f-b\">−2 sin<span class=\"bigp\">(</span><span class=\"frac\"><span>C+D</span><span>2</span></span><span class=\"bigp\">)</span> sin<span class=\"bigp\">(</span><span class=\"frac\"><span>C−D</span><span>2</span></span><span class=\"bigp\">)</span></div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Product → sum</div><div class=\"f-b\">2 sin A cos B = sin(A+B) + sin(A−B)</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Product → sum</div><div class=\"f-b\">2 cos A sin B = sin(A+B) − sin(A−B)</div></div>\n  </div>",
      "alt": "Formula reference cards"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "graphs-of-sine-and-cosine",
      "text": "Graphs of sine and cosine"
    },
    {
      "type": "figure",
      "svg": "<svg class=\"fig\" viewBox=\"0 0 470 240\" role=\"img\" aria-label=\"Sine and cosine graphs\">\n    <line x1=\"30\" y1=\"120\" x2=\"450\" y2=\"120\" class=\"axisln\"></line><line x1=\"50\" y1=\"220\" x2=\"50\" y2=\"20\" class=\"axisln\"></line>\n    <text x=\"436\" y=\"138\" class=\"axl\">x</text><text x=\"62\" y=\"32\" class=\"axl\">y</text>\n    <text x=\"62\" y=\"116\" font-size=\"11\">1</text><text x=\"62\" y=\"130\" font-size=\"11\">−1</text>\n    <text x=\"50\" y=\"236\" font-size=\"11\">0</text><text x=\"150\" y=\"236\" font-size=\"11\" text-anchor=\"middle\">90°</text><text x=\"250\" y=\"236\" font-size=\"11\" text-anchor=\"middle\">180°</text><text x=\"350\" y=\"236\" font-size=\"11\" text-anchor=\"middle\">270°</text><text x=\"446\" y=\"236\" font-size=\"11\" text-anchor=\"middle\">360°</text>\n    <path class=\"curve\" d=\"M 50 120 C 75 30 125 30 150 120 C 175 210 225 210 250 120 C 275 30 325 30 350 120 C 375 210 425 210 450 120\"></path>\n    <path class=\"curve2\" d=\"M 50 30 C 75 120 125 210 150 210 C 175 210 225 120 250 120 C 275 120 325 30 350 30 C 375 30 425 120 450 120\"></path>\n    <text x=\"90\" y=\"52\" fill=\"var(--primary)\" font-weight=\"700\">y = sin x</text>\n    <text x=\"60\" y=\"52\" fill=\"var(--accent)\" font-weight=\"700\">y = cos x</text>\n  </svg>",
      "alt": "Sine and cosine graphs",
      "caption": "Both waves repeat every 360°; cosine is sine shifted 90° to the left."
    },
    {
      "type": "quiz",
      "title": "Topic 12 Quiz — Trigonometry",
      "count": 8,
      "quizSlug": "12-trigonometry"
    }
  ]
};

export default chapter;
