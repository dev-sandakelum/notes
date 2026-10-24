import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "09-systems-of-linear-equations",
    "number": 9,
    "title": "Systems of linear equations",
    "subtitle": "Graphical solutions · Substitution · Elimination · Linear–quadratic systems",
    "kind": "topic",
    "words": 703,
    "minutes": 4
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "what-is-a-system-of-simultaneous-equations",
      "text": "What is a system of simultaneous equations?"
    },
    {
      "type": "paragraph",
      "html": "A <b>system of linear equations in two unknowns</b> is a pair of equations such as <span class=\"m\">x + y = 5</span> and <span class=\"m\">x − y = 1</span>, both of which must be true <b>at the same time</b>. The <b>solution</b> is the single pair (x, y) that satisfies both equations, geometrically, the <b>point of intersection</b> of the two lines they represent."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "graphical-method",
      "text": "Graphical method"
    },
    {
      "type": "paragraph",
      "html": "Linear simultaneous equations in two unknowns may be solved graphically by <b>(i)</b> plotting the two straight lines on the same axes and <b>(ii)</b> noting their point of intersection; its coordinates give the required solution. The three possible geometric situations are worth memorising:"
    },
    {
      "type": "figure",
      "svg": "<svg class=\"fig\" viewBox=\"0 0 660 215\" role=\"img\" aria-label=\"Three cases of linear systems\">\n    <line x1=\"25\" y1=\"150\" x2=\"205\" y2=\"150\" class=\"axisln\"></line><line x1=\"55\" y1=\"180\" x2=\"55\" y2=\"25\" class=\"axisln\"></line>\n    <path class=\"curve\" d=\"M 35 45 L 195 165\"></path><path class=\"curve2\" d=\"M 35 110 L 195 60\"></path>\n    <circle cx=\"122\" cy=\"101\" r=\"5.5\" fill=\"var(--danger)\"></circle>\n    <text x=\"115\" y=\"196\" text-anchor=\"middle\" font-size=\"11.5\">intersecting: unique solution</text>\n    <line x1=\"245\" y1=\"150\" x2=\"425\" y2=\"150\" class=\"axisln\"></line><line x1=\"275\" y1=\"180\" x2=\"275\" y2=\"25\" class=\"axisln\"></line>\n    <path class=\"curve\" d=\"M 255 40 L 415 160\"></path><path class=\"curve2\" d=\"M 255 70 L 415 190\"></path>\n    <text x=\"335\" y=\"196\" text-anchor=\"middle\" font-size=\"11.5\">parallel: no solution</text>\n    <line x1=\"465\" y1=\"150\" x2=\"645\" y2=\"150\" class=\"axisln\"></line><line x1=\"495\" y1=\"180\" x2=\"495\" y2=\"25\" class=\"axisln\"></line>\n    <path class=\"curve\" d=\"M 475 40 L 635 160\"></path><path class=\"curve2\" d=\"M 475 40 L 635 160\" stroke-dasharray=\"7 5\"></path>\n    <circle cx=\"560\" cy=\"104\" r=\"5.5\" fill=\"var(--success)\"></circle>\n    <text x=\"555\" y=\"196\" text-anchor=\"middle\" font-size=\"11.5\">coincident: infinitely many</text>\n  </svg>",
      "alt": "Three cases of linear systems",
      "caption": "One solution (lines cross), none (parallel lines), or infinitely many (same line)."
    },
    {
      "type": "example",
      "title": "Worked example: graphical solution",
      "bodyHtml": "<p>Solve graphically: <span class=\"m\">x + y = 5</span> and <span class=\"m\">x − y = 1</span>.</p>",
      "solutionHtml": "<p>Line 1: x + y = 5 passes through (0, 5) and (5, 0). Line 2: x − y = 1 passes through (0, −1) and (1, 0).</p>\n      <p>Plotting both, they intersect at <b>(3, 2)</b>, so <span class=\"m\">x = 3, y = 2</span>. Check: 3 + 2 = 5 ✓ and 3 − 2 = 1 ✓.</p>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "substitution-method",
      "text": "Substitution method"
    },
    {
      "type": "paragraph",
      "html": "Rearrange one equation to make one variable the subject, then <b>substitute</b> that expression into the other equation, eliminating that variable. Best when one equation already has a simple coefficient like <span class=\"m\">y = …</span> or <span class=\"m\">x = …</span>."
    },
    {
      "type": "example",
      "title": "Worked example: substitution",
      "bodyHtml": "<p>Solve: <span class=\"m\">x + y = 5</span> and <span class=\"m\">2x − y = 4</span>.</p>",
      "solutionHtml": "<p>From equation 1: <span class=\"m\">y = 5 − x</span>. Substitute into equation 2:</p>\n      <div class=\"eq\">2x − (5 − x) = 4 → 2x − 5 + x = 4 → 3x = 9 → x = 3</div>\n      <p>Then <span class=\"m\">y = 5 − 3 = 2</span>. Solution: <b>x = 3, y = 2</b>.</p>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "elimination-method",
      "text": "Elimination method"
    },
    {
      "type": "paragraph",
      "html": "Multiply one or both equations so that a variable has <b>matching coefficients</b>, then add or subtract the equations to eliminate it. Add when the signs differ; subtract when they match."
    },
    {
      "type": "example",
      "title": "Worked example: elimination",
      "bodyHtml": "<p>Solve: <span class=\"m\">2x + 3y = 12</span> and <span class=\"m\">x − y = 1</span>.</p>",
      "solutionHtml": "<p>Multiply equation 2 by 3: <span class=\"m\">3x − 3y = 3</span>. Now the y-coefficients are +3 and −3:</p>\n      <div class=\"eq\">2x + 3y = 12<br>+ 3x − 3y = 3<br>, , , , , , . <br>5x   = 15 → x = 3</div>\n      <p>Substitute back: <span class=\"m\">3 − y = 1</span> → <span class=\"m\">y = 2</span>. Solution: <b>x = 3, y = 2</b>.</p>"
    },
    {
      "type": "example",
      "title": "Worked example: practical problem",
      "bodyHtml": "<p>3 apples and 2 oranges cost Rs. 235, while 1 apple and 4 oranges cost Rs. 215. Find the cost of each fruit.</p>",
      "solutionHtml": "<p>Let a = price of an apple, o = price of an orange:</p>\n      <div class=\"eq\">3a + 2o = 235 &nbsp;&nbsp;…(1)&nbsp;&nbsp;&nbsp;&nbsp; a + 4o = 215 &nbsp;&nbsp;…(2)</div>\n      <p>Multiply (2) by 3: <span class=\"m\">3a + 12o = 645</span>. Subtract (1): <span class=\"m\">10o = 410 → o = 41</span>.</p>\n      <p>Then from (2): <span class=\"m\">a = 215 − 4(41) = 51</span>. An <b>apple costs Rs. 51</b>, an <b>orange Rs. 41</b>.</p>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "graphical-solutions-of-linear-and-quadratic-equations",
      "text": "Graphical solutions of linear and quadratic equations"
    },
    {
      "type": "paragraph",
      "html": "A system may mix a straight line with a parabola. The solution is achieved graphically by <b>(i)</b> plotting the straight line and the parabola on the same axes and <b>(ii)</b> noting the points of intersection, their coordinates give the required solutions. Depending on the position of the line there can be <b>two, one or no</b> intersection points."
    },
    {
      "type": "example",
      "title": "Worked example: line meets parabola",
      "bodyHtml": "<p>Solve simultaneously: <span class=\"m\">y = x²</span> and <span class=\"m\">y = x + 2</span>.</p>",
      "solutionHtml": "<p>Set the expressions for y equal: <span class=\"m\">x² = x + 2</span> → <span class=\"m\">x² − x − 2 = 0</span> → <span class=\"m\">(x − 2)(x + 1) = 0</span> → <span class=\"m\">x = 2</span> or <span class=\"m\">x = −1</span>.</p>\n      <p>Find y from the line: <span class=\"m\">y = 2 + 2 = 4</span> and <span class=\"m\">y = −1 + 2 = 1</span>.</p>\n      <p>Solutions: <b>(2, 4)</b> and <b>(−1, 1)</b>: exactly the two intersection points of the graphs.</p>"
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Exam strategy",
      "html": "Choose the method by looking at the equations: a simple isolated variable → <b>substitution</b>; matching or easily matched coefficients → <b>elimination</b>; a sketch requested → <b>graphical</b>. Always substitute your answer into <i>both</i> original equations as a check."
    },
    {
      "type": "quiz",
      "title": "Topic 9 Quiz: Systems of Linear Equations",
      "count": 6,
      "quizSlug": "09-systems-of-linear-equations"
    }
  ]
};

export default chapter;
