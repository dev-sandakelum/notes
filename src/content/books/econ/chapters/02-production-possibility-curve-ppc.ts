import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "02-production-possibility-curve-ppc",
    "number": 2,
    "title": "Production Possibility Curve (PPC)",
    "subtitle": "Lesson 02 · Tutorial 02 · Chathuranga Adhikari",
    "kind": "topic",
    "words": 1301,
    "minutes": 7
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "from-scarcity-to-the-ppc",
      "text": "From Scarcity to the PPC"
    },
    {
      "type": "paragraph",
      "html": "The primary study of economics is how the <b>scarce resources</b> of an economy should be used to satisfy <b>unlimited human wants</b>. To gain the maximum outcome from available resources, society must achieve both <b>full employment</b> and <b>full production</b>:"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"grid2\">\n    <div class=\"card\"><h4>Full employment</h4><p>Utilising <b>all resources that can be used</b> for current production (this does not affect sustainability, since it uses current resources).</p></div>\n    <div class=\"card\"><h4>Full production</h4><p>Every production factor used in the production process must <b>contribute to its maximum</b> to meet the physical needs of customers.</p></div>\n  </div>",
      "alt": "Diagram from the original notes"
    },
    {
      "type": "paragraph",
      "html": "Even an economy geared to both goals cannot produce unlimited output — it must decide <b>which goods to produce and which to sacrifice</b>. This is fundamentally a question of <b>choice</b>, and the simplest model used to analyse choice and its consequences is the <b>production possibilities model</b>, presented as a table or a graph."
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Definition",
      "html": "A <b>Production Possibility Curve (PPC)</b> — also called Production Possibility Frontier (PPF) — is a <b>graphical representation of all possible maximum combinations of total output</b> that could be produced when all resources are fully and efficiently used with a given technology."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "the-four-assumptions-of-the-ppc",
      "text": "The Four Assumptions of the PPC"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "Resources are <b>fixed</b> over the period under consideration.",
        "Resources are used to achieve <b>full employment and productive efficiency</b>.",
        "<b>Technology remains unchanged</b> over the period.",
        "The economy produces <b>only two products</b>."
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "worked-table-smartphones-and-laptops",
      "text": "Worked Table — Smartphones & Laptops"
    },
    {
      "type": "paragraph",
      "html": "Under the assumption that all resources are used at maximum efficiency at a given technology:"
    },
    {
      "type": "table",
      "head": [
        "Point",
        "Smartphones",
        "Laptops"
      ],
      "rows": [
        [
          "A",
          "0",
          "15"
        ],
        [
          "B",
          "1",
          "14"
        ],
        [
          "C",
          "2",
          "12"
        ],
        [
          "D",
          "3",
          "9"
        ],
        [
          "E",
          "4",
          "5"
        ],
        [
          "F",
          "5",
          "0"
        ]
      ]
    },
    {
      "type": "paragraph",
      "html": "Point <b>A</b> shows all resources directed to laptops only; point <b>F</b> shows all resources in smartphones. In between, combinations B–E are possible — but producing <b>more of one good requires sacrificing some of the other</b>. With full employment and productive efficiency, more of one good is possible <b>only by producing less of the other</b>."
    },
    {
      "type": "figure",
      "svg": "<svg class=\"fig\" viewBox=\"0 0 560 360\" role=\"img\" aria-label=\"Production possibility curve with efficient, inefficient and unattainable points\">\n    <!-- axes -->\n    <line class=\"axisln\" x1=\"70\" y1=\"310\" x2=\"520\" y2=\"310\"></line>\n    <line class=\"axisln\" x1=\"70\" y1=\"310\" x2=\"70\" y2=\"40\"></line>\n    <polygon points=\"520,310 512,306 512,314\" fill=\"var(--axis)\"></polygon>\n    <polygon points=\"70,40 66,48 74,48\" fill=\"var(--axis)\"></polygon>\n    <text class=\"lbl\" x=\"440\" y=\"335\" text-anchor=\"middle\">Smartphones (X)</text>\n    <text class=\"lbl\" x=\"40\" y=\"175\" text-anchor=\"middle\" transform=\"rotate(-90 40 175)\">Laptops (Y)</text>\n    <!-- PPC curve: points A(0,15) B(1,14) C(2,12) D(3,9) E(4,5) F(5,0) mapped: x=70+90S, y=310-18L -->\n    <path class=\"curve\" stroke=\"var(--primary)\" d=\"M 70 40 C 150 55, 200 75, 260 94 C 320 113, 380 150, 430 220 C 450 248, 460 275, 470 310\"></path>\n    <!-- efficient points -->\n    <circle cx=\"70\" cy=\"40\" r=\"5\" fill=\"var(--primary)\"></circle><text class=\"lbl-sm\" x=\"82\" y=\"44\">A (0,15)</text>\n    <circle cx=\"160\" cy=\"58\" r=\"5\" fill=\"var(--primary)\"></circle><text class=\"lbl-sm\" x=\"172\" y=\"62\">B (1,14)</text>\n    <circle cx=\"250\" cy=\"94\" r=\"5\" fill=\"var(--primary)\"></circle><text class=\"lbl-sm\" x=\"262\" y=\"90\">C (2,12)</text>\n    <circle cx=\"340\" cy=\"148\" r=\"5\" fill=\"var(--primary)\"></circle><text class=\"lbl-sm\" x=\"352\" y=\"144\">D (3,9)</text>\n    <circle cx=\"430\" cy=\"220\" r=\"5\" fill=\"var(--primary)\"></circle><text class=\"lbl-sm\" x=\"442\" y=\"216\">E (4,5)</text>\n    <circle cx=\"470\" cy=\"310\" r=\"5\" fill=\"var(--primary)\"></circle><text class=\"lbl-sm\" x=\"452\" y=\"300\">F (5,0)</text>\n    <!-- inside point -->\n    <circle cx=\"260\" cy=\"220\" r=\"5\" fill=\"var(--warn)\"></circle><text class=\"lbl-sm\" x=\"272\" y=\"224\">G — inefficient (inside)</text>\n    <!-- outside point -->\n    <circle cx=\"330\" cy=\"80\" r=\"5\" fill=\"var(--danger)\"></circle><text class=\"lbl-sm\" x=\"342\" y=\"84\">H — unattainable (outside)</text>\n    <text class=\"lbl-tag\" x=\"150\" y=\"150\" fill=\"var(--primary)\">PPC</text>\n  </svg>",
      "alt": "Production possibility curve with efficient, inefficient and unattainable points",
      "caption": "The PPC: points on the frontier are efficient; G (inside) wastes resources; H (outside) is unattainable with current resources."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "reading-points-on-the-ppc",
      "text": "Reading Points on the PPC"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"grid2\">\n    <div class=\"card\"><h4> Efficient production</h4><p>All resources are fully employed; producing the most possible. On the frontier it is <b>impossible to produce more of one item without producing less of the other</b>.</p></div>\n    <div class=\"card\"><h4>⚠ Inefficient production</h4><p>Points <b>inside</b> the curve — not all resources are employed (underemployment/unemployment). Both goods can still be increased. Occurs during recession, depression, or in developing countries.</p></div>\n    <div class=\"card\"><h4> Unattainable points</h4><p>Any point <b>outside</b> the curve is impossible — more of both goods cannot be produced with current resources.</p></div>\n    <div class=\"card\"><h4>⚖ Trade-offs</h4><p>Any two or more points <b>on</b> the frontier represent trade-offs — the PPC shows choice and the opportunity cost of choosing one alternative over another.</p></div>\n  </div>",
      "alt": "Diagram from the original notes"
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "Two types of efficiency",
      "html": "<b>Productive efficiency</b> — producing the maximum output from given resources (any point ON the PPC); <b>allocative efficiency</b> — producing the combination that society values most (the single best point on the PPC, which depends on preferences)."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "opportunity-cost-on-the-ppc-bikes-and-computers",
      "text": "Opportunity Cost on the PPC — Bikes & Computers"
    },
    {
      "type": "table",
      "head": [
        "Point",
        "Computers (X)",
        "Bikes (Y)"
      ],
      "rows": [
        [
          "A",
          "0",
          "14"
        ],
        [
          "B",
          "2",
          "12"
        ],
        [
          "C",
          "4",
          "9"
        ],
        [
          "D",
          "6",
          "5"
        ],
        [
          "E",
          "8",
          "0"
        ]
      ]
    },
    {
      "type": "example",
      "title": "Reading opportunity cost — Worked example",
      "bodyHtml": "<p>Using the table above, find: (1) the opportunity cost of moving A→B; (2) B→D; (3) D→B; (4) what can you say about a point G beyond the curve?</p>",
      "solutionHtml": "<ol>\n        <li><b>A→B:</b> computers rise 0→2, bikes fall 14→12. Opportunity cost = <b>2 bikes</b> (for 2 extra computers).</li>\n        <li><b>B→D:</b> computers rise 2→6 (+4), bikes fall 12→5. Opportunity cost = <b>7 bikes</b> (for 4 extra computers).</li>\n        <li><b>D→B:</b> bikes rise 5→12 (+7), computers fall 6→2. Opportunity cost = <b>4 computers</b>.</li>\n        <li><b>Point G</b> lies outside the frontier — it is <b>unattainable</b> with current resources and technology.</li>\n      </ol>\n      <b>Why is the PPC bowed outward (concave)?</b> Because of the <b>law of increasing opportunity cost</b>: resources are not equally suited to both goods. As more computers are produced, resources increasingly less suited to computers (and better suited to bikes) must be diverted, so each extra computer costs progressively more bikes."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "shifting-the-ppc-4-assumptions-revisited",
      "text": "Shifting the PPC — 4 Assumptions Revisited"
    },
    {
      "type": "paragraph",
      "html": "The PPC is drawn assuming fixed resources, full employment, and fixed technology. <b>If any of these changes, the curve shifts.</b> There are three shifters:"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"grid2\">\n    <div class=\"card\"><h4>1. Change in resource quantity or quality</h4><p>More/better resources → outward shift; fewer resources (disaster, emigration) → inward shift. Education improves labour <i>quality</i> → outward.</p></div>\n    <div class=\"card\"><h4>2. Change in technology</h4><p>Technology improving in one industry pivots the curve out for that good only; broad improvements shift the whole curve out.</p></div>\n    <div class=\"card\"><h4>3. Change in trade</h4><p>Specialisation and trade let an economy consume beyond its own PPC even though it cannot produce beyond it.</p></div>\n    <div class=\"card\"><h4>⚠ What does NOT shift the PPC?</h4><p>A change in <b>demand</b> for the goods, and <b>unemployment</b> — these move the economy to a different point (inside) the <i>same</i> curve.</p></div>\n  </div>",
      "alt": "Diagram from the original notes"
    },
    {
      "type": "figure",
      "svg": "<svg class=\"fig\" viewBox=\"0 0 560 330\" role=\"img\" aria-label=\"PPC shifts outward and inward\">\n    <line class=\"axisln\" x1=\"70\" y1=\"290\" x2=\"520\" y2=\"290\"></line>\n    <line class=\"axisln\" x1=\"70\" y1=\"290\" x2=\"70\" y2=\"40\"></line>\n    <text class=\"lbl\" x=\"440\" y=\"313\" text-anchor=\"middle\">Consumer goods (rice)</text>\n    <text class=\"lbl\" x=\"42\" y=\"165\" text-anchor=\"middle\" transform=\"rotate(-90 42 165)\">Capital goods (clothes)</text>\n    <path class=\"curve\" stroke=\"var(--muted)\" stroke-dasharray=\"5 5\" d=\"M 70 60 C 160 80, 260 120, 300 190 C 330 240, 345 265, 352 290\"></path>\n    <path class=\"curve\" stroke=\"var(--success)\" d=\"M 70 40 C 180 62, 300 105, 350 185 C 385 240, 402 268, 410 290\"></path>\n    <path class=\"curve\" stroke=\"var(--danger)\" d=\"M 70 95 C 140 112, 220 145, 258 200 C 282 240, 293 262, 298 290\"></path>\n    <text class=\"lbl-tag\" x=\"205\" y=\"55\" fill=\"var(--success)\">Growth (outward)</text>\n    <text class=\"lbl-tag\" x=\"95\" y=\"130\" fill=\"var(--danger)\">Decline (inward)</text>\n    <text class=\"lbl-tag\" x=\"230\" y=\"235\" fill=\"var(--muted)\">Original PPC</text>\n  </svg>",
      "alt": "PPC shifts outward and inward",
      "caption": "Economic growth shifts the PPC outward; loss of resources (disaster, emigration of professionals) shifts it inward."
    },
    {
      "type": "example",
      "title": "PPC practice — draw & explain — Worked example",
      "bodyHtml": "<p>Draw a PPC showing the change for each scenario (Pizza &amp; Robots; then Consumer goods &amp; Capital goods) and explain why:</p>\n    <ol>\n      <li>New robot-making technology</li>\n      <li>Decrease in the demand for pizza</li>\n      <li>Mad cow disease kills 85% of cows</li>\n      <li>Destruction of power plants → severe electricity shortage</li>\n      <li>Faster computer hardware</li>\n      <li>Many workers are unemployed</li>\n      <li>Significant increases in education</li>\n    </ol>",
      "solutionHtml": "<ol>\n        <li><b>New robot-making technology</b> — the curve shifts outward <b>only on the robot axis</b> (pivot): more robots can be produced at every pizza level.</li>\n        <li><b>Decrease in demand for pizza</b> — <b>the curve does not shift!</b> A change in demand moves the economy along the same PPC; production possibilities are unchanged.</li>\n        <li><b>Mad cow disease kills 85% of cows</b> — a resource (cattle) is destroyed, so the curve shifts <b>inward on the pizza axis</b> only (pivot toward origin).</li>\n        <li><b>Destruction of power plants</b> — fewer capital resources → production possibilities fall for <b>both</b> goods: inward shift of the whole curve.</li>\n        <li><b>Faster computer hardware</b> — quality of a resource improves → the curve shifts <b>outward</b> for the good using that resource.</li>\n        <li><b>Many workers unemployed</b> — <b>the curve does not shift!</b> Unemployment is a point <b>inside</b> the curve, not a change in capacity.</li>\n        <li><b>Significant increases in education</b> — quality of labour improves → the curve shifts <b>outward</b> for the whole economy.</li>\n      </ol>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "importance-and-limitations-of-the-ppc",
      "text": "Importance and Limitations of the PPC"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"grid2\">\n    <div class=\"card\"><h4>Importance</h4><ul>\n      <li>Since productive resources are always limited, the PPC helps decide <b>which commodities are most beneficial</b> to society.</li>\n      <li>Helps decide <b>what amount</b> of goods to produce among different alternatives.</li>\n    </ul></div>\n    <div class=\"card\"><h4>Limitations</h4><ul>\n      <li>There is a choice between <b>only two commodities</b>.</li>\n      <li>It talks about production capabilities but <b>doesn’t consider the want</b> for goods.</li>\n      <li>It <b>doesn’t consider the satisfaction</b> generated with an accepted outcome.</li>\n    </ul></div>\n  </div>",
      "alt": "Diagram from the original notes"
    },
    {
      "type": "example",
      "title": "Tutorial 02 — PPC — full solutions",
      "bodyHtml": "<p><b>Q1.</b> Explain with the support of a diagram what a production possibility frontier is.</p>\n    \n    \n    \n\n    <p style=\"margin-top:14px\"><b>Q2.</b> List four assumptions of the production possibility curve.</p>\n    \n    \n    \n\n    <p style=\"margin-top:14px\"><b>Q3.</b> What are the reasons for the increasing opportunity cost in the use of production resources?</p>\n    \n    \n    \n\n    <p style=\"margin-top:14px\"><b>Q4.</b> Draw and explain the following using PPFs (economy produces rice and clothes):</p>\n    \n    \n    \n\n    <p style=\"margin-top:14px\"><b>Q5.</b> An economy produces rice and clothes (table below). Plot rice on the X-axis and clothes on the Y-axis.</p>\n    <div class=\"tbl-wrap\"><table class=\"tbl\">\n      <tbody><tr><th>Combination</th><th>Rice (tons)</th><th>Clothes (units)</th></tr>\n      <tr><td>A</td><td>0</td><td>150</td></tr>\n      <tr><td>B</td><td>20</td><td>140</td></tr>\n      <tr><td>C</td><td>40</td><td>125</td></tr>\n      <tr><td>D</td><td>60</td><td>105</td></tr>\n      <tr><td>E</td><td>80</td><td>70</td></tr>\n      <tr><td>F</td><td>100</td><td>0</td></tr>\n    </tbody></table></div>\n    <p>(i) Draw the PPC and calculate opportunity cost between A-B, B-C, C-D, D-E, E-F.<br>\n    (ii) The country produces 40 rice tons and 60 clothes — efficient, inefficient, or unattainable?<br>\n    (iii) Is there any opportunity cost moving from (40 rice, 60 clothes) to (60 rice, 80 clothes)? Why?</p>",
      "solutionHtml": "A PPF is a curve showing <b>all maximum possible combinations of two goods</b> an economy can produce when all resources are fully and efficiently employed with given technology. Diagram: axes labelled with the two goods (rice on X, clothes on Y); a bowed-out curve from one axis to the other. Points <b>on</b> the curve are efficient, points <b>inside</b> are attainable but inefficient (unemployed resources), points <b>outside</b> are unattainable. The concave shape reflects increasing opportunity cost. (Sketch the figure above.)"
    },
    {
      "type": "quiz",
      "title": "Topic 2 Quiz",
      "count": 7,
      "quizSlug": "02-production-possibility-curve-ppc"
    },
    {
      "type": "viz",
      "kind": "ppc",
      "caption": "Drag the sliders to move the economy along the frontier — points on the curve are efficient, points inside waste resources."
    }
  ]
};

export default chapter;
