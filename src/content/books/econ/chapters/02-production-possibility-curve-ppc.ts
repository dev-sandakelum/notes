import type { ChapterData } from "@/content/types";
import {
  PPC_FRONTIER_CHART,
  PPC_SHIFTS_CHART,
} from "../charts";

const chapter: ChapterData = {
  "meta": {
    "slug": "02-production-possibility-curve-ppc",
    "number": 2,
    "title": "Production possibility curve (PPC)",
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
      "text": "From scarcity to the PPC"
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
      "html": "Even an economy geared to both goals cannot produce unlimited output; it must decide <b>which goods to produce and which to sacrifice</b>. This is fundamentally a question of <b>choice</b>, and the simplest model used to analyse choice and its consequences is the <b>production possibilities model</b>, presented as a table or a graph."
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Definition",
      "html": "A <b>Production Possibility Curve (PPC)</b>: also called Production Possibility Frontier (PPF), is a <b>graphical representation of all possible maximum combinations of total output</b> that could be produced when all resources are fully and efficiently used with a given technology."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "the-four-assumptions-of-the-ppc",
      "text": "The four assumptions of the PPC"
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
      "text": "Worked table: smartphones & laptops"
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
      "html": "Point <b>A</b> shows all resources directed to laptops only; point <b>F</b> shows all resources in smartphones. In between, combinations B–E are possible, but producing <b>more of one good requires sacrificing some of the other</b>. With full employment and productive efficiency, more of one good is possible <b>only by producing less of the other</b>."
    },
        {
      "type": "econChart",
      "spec": PPC_FRONTIER_CHART
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "reading-points-on-the-ppc",
      "text": "Reading points on the PPC"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"grid2\">\n    <div class=\"card\"><h4> Efficient production</h4><p>All resources are fully employed; producing the most possible. On the frontier it is <b>impossible to produce more of one item without producing less of the other</b>.</p></div>\n    <div class=\"card\"><h4>⚠ Inefficient production</h4><p>Points <b>inside</b> the curve, not all resources are employed (underemployment/unemployment). Both goods can still be increased. Occurs during recession, depression, or in developing countries.</p></div>\n    <div class=\"card\"><h4> Unattainable points</h4><p>Any point <b>outside</b> the curve is impossible, more of both goods cannot be produced with current resources.</p></div>\n    <div class=\"card\"><h4>⚖ Trade-offs</h4><p>Any two or more points <b>on</b> the frontier represent trade-offs; the PPC shows choice and the opportunity cost of choosing one alternative over another.</p></div>\n  </div>",
      "alt": "Diagram from the original notes"
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "Two types of efficiency",
      "html": "<b>Productive efficiency</b>: producing the maximum output from given resources (any point ON the PPC); <b>allocative efficiency</b>: producing the combination that society values most (the single best point on the PPC, which depends on preferences)."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "opportunity-cost-on-the-ppc-bikes-and-computers",
      "text": "Opportunity cost on the PPC: bikes & computers"
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
      "title": "Reading opportunity cost: worked example",
      "bodyHtml": "<p>Using the table above, find: (1) the opportunity cost of moving A→B; (2) B→D; (3) D→B; (4) what can you say about a point G beyond the curve?</p>",
      "solutionHtml": "<ol>\n        <li><b>A→B:</b> computers rise 0→2, bikes fall 14→12. Opportunity cost = <b>2 bikes</b> (for 2 extra computers).</li>\n        <li><b>B→D:</b> computers rise 2→6 (+4), bikes fall 12→5. Opportunity cost = <b>7 bikes</b> (for 4 extra computers).</li>\n        <li><b>D→B:</b> bikes rise 5→12 (+7), computers fall 6→2. Opportunity cost = <b>4 computers</b>.</li>\n        <li><b>Point G</b> lies outside the frontier; it is <b>unattainable</b> with current resources and technology.</li>\n      </ol>\n      <b>Why is the PPC bowed outward (concave)?</b> Because of the <b>law of increasing opportunity cost</b>: resources are not equally suited to both goods. As more computers are produced, resources increasingly less suited to computers (and better suited to bikes) must be diverted, so each extra computer costs progressively more bikes."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "shifting-the-ppc-4-assumptions-revisited",
      "text": "Shifting the PPC: 4 assumptions revisited"
    },
    {
      "type": "paragraph",
      "html": "The PPC is drawn assuming fixed resources, full employment, and fixed technology. <b>If any of these changes, the curve shifts.</b> There are three shifters:"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"grid2\">\n    <div class=\"card\"><h4>1. Change in resource quantity or quality</h4><p>More/better resources → outward shift; fewer resources (disaster, emigration) → inward shift. Education improves labour <i>quality</i> → outward.</p></div>\n    <div class=\"card\"><h4>2. Change in technology</h4><p>Technology improving in one industry pivots the curve out for that good only; broad improvements shift the whole curve out.</p></div>\n    <div class=\"card\"><h4>3. Change in trade</h4><p>Specialisation and trade let an economy consume beyond its own PPC even though it cannot produce beyond it.</p></div>\n    <div class=\"card\"><h4>⚠ What does NOT shift the PPC?</h4><p>A change in <b>demand</b> for the goods, and <b>unemployment</b>, these move the economy to a different point (inside) the <i>same</i> curve.</p></div>\n  </div>",
      "alt": "Diagram from the original notes"
    },
        {
      "type": "econChart",
      "spec": PPC_SHIFTS_CHART
    },
    {
      "type": "example",
      "title": "PPC practice: draw & explain: worked example",
      "bodyHtml": "<p>Draw a PPC showing the change for each scenario (Pizza &amp; Robots; then Consumer goods &amp; Capital goods) and explain why:</p>\n    <ol>\n      <li>New robot-making technology</li>\n      <li>Decrease in the demand for pizza</li>\n      <li>Mad cow disease kills 85% of cows</li>\n      <li>Destruction of power plants → severe electricity shortage</li>\n      <li>Faster computer hardware</li>\n      <li>Many workers are unemployed</li>\n      <li>Significant increases in education</li>\n    </ol>",
      "solutionHtml": "<ol>\n        <li><b>New robot-making technology</b>: the curve shifts outward <b>only on the robot axis</b> (pivot): more robots can be produced at every pizza level.</li>\n        <li><b>Decrease in demand for pizza</b>. <b>the curve does not shift.</b> A change in demand moves the economy along the same PPC; production possibilities are unchanged.</li>\n        <li><b>Mad cow disease kills 85% of cows</b>, a resource (cattle) is destroyed, so the curve shifts <b>inward on the pizza axis</b> only (pivot toward origin).</li>\n        <li><b>Destruction of power plants</b>: fewer capital resources → production possibilities fall for <b>both</b> goods: inward shift of the whole curve.</li>\n        <li><b>Faster computer hardware</b>: quality of a resource improves → the curve shifts <b>outward</b> for the good using that resource.</li>\n        <li><b>Many workers unemployed</b>. <b>the curve does not shift.</b> Unemployment is a point <b>inside</b> the curve, not a change in capacity.</li>\n        <li><b>Significant increases in education</b>: quality of labour improves → the curve shifts <b>outward</b> for the whole economy.</li>\n      </ol>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "importance-and-limitations-of-the-ppc",
      "text": "Importance and limitations of the PPC"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"grid2\">\n    <div class=\"card\"><h4>Importance</h4><ul>\n      <li>Since productive resources are always limited, the PPC helps decide <b>which commodities are most beneficial</b> to society.</li>\n      <li>Helps decide <b>what amount</b> of goods to produce among different alternatives.</li>\n    </ul></div>\n    <div class=\"card\"><h4>Limitations</h4><ul>\n      <li>There is a choice between <b>only two commodities</b>.</li>\n      <li>It talks about production capabilities but <b>doesn’t consider the want</b> for goods.</li>\n      <li>It <b>doesn’t consider the satisfaction</b> generated with an accepted outcome.</li>\n    </ul></div>\n  </div>",
      "alt": "Diagram from the original notes"
    },
    {
      "type": "example",
      "title": "Tutorial 02: PPC: full solutions",
      "bodyHtml": "<p><b>Q1.</b> Explain with the support of a diagram what a production possibility frontier is.</p>\n    \n    \n    \n\n    <p style=\"margin-top:14px\"><b>Q2.</b> List four assumptions of the production possibility curve.</p>\n    \n    \n    \n\n    <p style=\"margin-top:14px\"><b>Q3.</b> What are the reasons for the increasing opportunity cost in the use of production resources?</p>\n    \n    \n    \n\n    <p style=\"margin-top:14px\"><b>Q4.</b> Draw and explain the following using PPFs (economy produces rice and clothes):</p>\n    \n    \n    \n\n    <p style=\"margin-top:14px\"><b>Q5.</b> An economy produces rice and clothes (table below). Plot rice on the X-axis and clothes on the Y-axis.</p>\n    <div class=\"tbl-wrap\"><table class=\"tbl\">\n      <tbody><tr><th>Combination</th><th>Rice (tons)</th><th>Clothes (units)</th></tr>\n      <tr><td>A</td><td>0</td><td>150</td></tr>\n      <tr><td>B</td><td>20</td><td>140</td></tr>\n      <tr><td>C</td><td>40</td><td>125</td></tr>\n      <tr><td>D</td><td>60</td><td>105</td></tr>\n      <tr><td>E</td><td>80</td><td>70</td></tr>\n      <tr><td>F</td><td>100</td><td>0</td></tr>\n    </tbody></table></div>\n    <p>(i) Draw the PPC and calculate opportunity cost between A-B, B-C, C-D, D-E, E-F.<br>\n    (ii) The country produces 40 rice tons and 60 clothes, efficient, inefficient, or unattainable?<br>\n    (iii) Is there any opportunity cost moving from (40 rice, 60 clothes) to (60 rice, 80 clothes)? Why?</p>",
      "solutionHtml": "<p><b>Q1:</b> A PPF is a curve showing <b>all maximum possible combinations of two goods</b> an economy can produce when all resources are fully and efficiently employed with given technology. Diagram: axes labelled with the two goods (rice on X, clothes on Y); a bowed-out curve from one axis to the other — exactly the PPC chart above. Points <b>on</b> the curve are efficient, points <b>inside</b> are attainable but inefficient (unemployed resources), points <b>outside</b> are unattainable. The concave shape reflects increasing opportunity cost.</p>\n      <p><b>Q2 (four assumptions):</b> (1) the quantity of resources is <b>fixed</b>; (2) all resources are <b>fully employed</b> and used efficiently; (3) <b>technology is fixed</b>; (4) only <b>two goods</b> are produced (or the goods represent two aggregates).</p>\n      <p><b>Q3 (why increasing opportunity cost):</b> resources are <b>not equally suited</b> to producing both goods. As more rice is produced, resources increasingly better suited to clothes (and worse at growing rice) must be diverted, so each extra ton of rice costs more and more clothes — the OC per ton rises and the PPC is concave.</p>\n      <p><b>Q4:</b> draw the effects with PPFs for rice and clothes — the scenario list in the original tutorial is missing from the notes; see the report of items needing author confirmation.</p>\n      <p><b>Q5 (table):</b> plot rice on X, clothes on Y through A(0,150), B(20,140), C(40,125), D(60,105), E(80,70), F(100,0).</p>\n      <ul>\n        <li>(i) Opportunity costs: A→B <b>10</b> clothes per 20 tons (0.5/ton); B→C <b>15</b> (0.75); C→D <b>20</b> (1.0); D→E <b>35</b> (1.75); E→F <b>70</b> (3.5) — rising throughout, so the PPC is concave</li>\n        <li>(ii) At 40 tons of rice the frontier gives 125 clothes; producing only 60 clothes means the point (40, 60) lies <b>inside</b> the PPC → <b>inefficient</b> (unemployed or misused resources)</li>\n        <li>(iii) Moving from (40, 60) to (60, 80): both goods increase, and (60, 80) is still inside the frontier (at 60 tons the PPC allows 105 clothes). Because the start is inefficient there are <b>idle resources to absorb — no opportunity cost</b>; this \"free lunch\" is only possible from inside the curve</li>\n      </ul>"
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
      "caption": "Drag the sliders to move the economy along the frontier, points on the curve are efficient, points inside waste resources."
    }
  ]
};

export default chapter;
