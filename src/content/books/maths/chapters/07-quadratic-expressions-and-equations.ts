import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "07-quadratic-expressions-and-equations",
    "number": 7,
    "title": "Quadratic Expressions & Equations",
    "subtitle": "Factorising · Completing the square · The quadratic formula · Discriminant",
    "kind": "topic",
    "words": 906,
    "minutes": 5
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "quadratic-expressions",
      "text": "Quadratic expressions"
    },
    {
      "type": "paragraph",
      "html": "A <b>quadratic expression</b> has the general form <span class=\"m\">ax² + bx + c</span> where <span class=\"m\">a ≠ 0</span>. The three key components are: <b>a — the quadratic coefficient</b>, <b>b — the linear coefficient</b> and <b>c — the constant term</b>. Examples include <span class=\"m\">x² + 5x + 6</span> (a=1, b=5, c=6), <span class=\"m\">5x² − 7x + 2</span> and <span class=\"m\">x² − 4</span> (b = 0). Setting the expression equal to zero gives a <b>quadratic equation</b>: <span class=\"m\">ax² + bx + c = 0</span>."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "from-expansion-to-factorisation",
      "text": "From expansion to factorisation"
    },
    {
      "type": "paragraph",
      "html": "Multiplying two binomials is the reverse of factorising. Expand the product of (x + 3) and (x + 4):"
    },
    {
      "type": "paragraph",
      "html": "(x + 3)(x + 4) = x(x + 4) + 3(x + 4) = x² + 4x + 3x + 12 = x² + 7x + 12"
    },
    {
      "type": "paragraph",
      "html": "Therefore <b>(x + 3) and (x + 4) are factors of x² + 7x + 12</b>. When factorising <span class=\"m\">x² + bx + c</span>, look for two numbers that <b>multiply to c</b> and <b>add to b</b> — here 3 × 4 = 12 and 3 + 4 = 7."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "method-1-solving-by-factorising",
      "text": "Method 1 — Solving by factorising"
    },
    {
      "type": "example",
      "title": "Worked example — factorising method",
      "bodyHtml": "<p>Solve <span class=\"m\">x² − 5x + 6 = 0</span>.</p>",
      "solutionHtml": "<p>Find two numbers that multiply to 6 and add to −5: they are <b>(−2, −3)</b>.</p>\n      <div class=\"eq\">(x − 2)(x − 3) = 0</div>\n      <p>A product equals zero only when a factor is zero, so <span class=\"m\">x − 2 = 0</span> or <span class=\"m\">x − 3 = 0</span>, giving <b>x = 2 or x = 3</b>.</p>"
    },
    {
      "type": "example",
      "title": "Worked example — when a ≠ 1",
      "bodyHtml": "<p>Solve (1) <span class=\"m\">2x² − 7x − 4 = 0</span> &nbsp; (2) <span class=\"m\">3x² + 18x + 15 = 0</span></p>",
      "solutionHtml": "<p><b>(1)</b> <span class=\"m\">2x² − 7x − 4</span>: look for factors of 2×(−4) = −8 that add to −7: (−8, +1).</p>\n      <div class=\"eq\">2x² − 8x + x − 4 = 2x(x − 4) + 1(x − 4) = (2x + 1)(x − 4) = 0</div>\n      <p><span class=\"m\">x = −<span class=\"frac\"><span>1</span><span>2</span></span></span> &nbsp;or&nbsp; <span class=\"m\">x = 4</span>.</p>\n      <p><b>(2)</b> Take out the common factor 3 first: <span class=\"m\">3(x² + 6x + 5) = 0</span> → <span class=\"m\">(x + 1)(x + 5) = 0</span> → <b>x = −1 or x = −5</b>.</p>"
    },
    {
      "type": "callout",
      "variant": "warn",
      "title": "When factorising fails",
      "html": "Equations like <span class=\"m\">2x² − 5x + 1 = 0</span> or <span class=\"m\">5x² − x − 2 = 0</span> do not factorise with whole numbers — you must use <b>completing the square</b> or the <b>quadratic formula</b>."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "method-2-completing-the-square",
      "text": "Method 2 — Completing the square"
    },
    {
      "type": "paragraph",
      "html": "Rewrite the equation so the x-terms form a <b>perfect square</b>, then take square roots. To complete the square: move the constant to the right, <b>add (half the coefficient of x)² to both sides</b>, write the left side as a square, then solve."
    },
    {
      "type": "example",
      "title": "Worked example — completing the square",
      "bodyHtml": "<p>Solve <span class=\"m\">x² + 6x + 5 = 0</span>.</p>",
      "solutionHtml": "<div class=\"eq\">x² + 6x = −5</div>\n      <p>Half of 6 is 3, and 3² = 9. <b>Add 9 to both sides:</b></p>\n      <div class=\"eq\">x² + 6x + 9 = −5 + 9 &nbsp;→&nbsp; (x + 3)² = 4</div>\n      <p>Take the square root of both sides (remember ±):</p>\n      <div class=\"eq\">x + 3 = ±2 &nbsp;→&nbsp; x = −3 + 2 = −1 &nbsp;&nbsp;or&nbsp;&nbsp; x = −3 − 2 = −5</div>"
    },
    {
      "type": "example",
      "title": "Worked example — with a ≠ 1",
      "bodyHtml": "<p>Solve by completing the square: (1) <span class=\"m\">x² − 4x − 5 = 0</span> &nbsp; (2) <span class=\"m\">2x² + 8x + 3 = 0</span></p>",
      "solutionHtml": "<p><b>(1)</b> <span class=\"m\">x² − 4x = 5</span>; half of −4 is −2, add 4: <span class=\"m\">(x − 2)² = 9</span> → <span class=\"m\">x − 2 = ±3</span> → <b>x = 5 or x = −1</b>.</p>\n      <p><b>(2)</b> <b>Divide by the coefficient of x² first</b>: <span class=\"m\">x² + 4x + <span class=\"frac\"><span>3</span><span>2</span></span> = 0</span> → <span class=\"m\">x² + 4x = −<span class=\"frac\"><span>3</span><span>2</span></span></span>; add (4/2)² = 4:</p>\n      <div class=\"eq\">(x + 2)² = <span class=\"frac\"><span>5</span><span>2</span></span> &nbsp;→&nbsp; x = −2 ± <span class=\"sqrt\"><span class=\"r\"><span class=\"frac\"><span>5</span><span>2</span></span></span></span> ≈ −0.42 or −3.58</div>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "method-3-the-quadratic-formula",
      "text": "Method 3 — The quadratic formula"
    },
    {
      "type": "paragraph",
      "html": "For <span class=\"m\">ax² + bx + c = 0</span> (a ≠ 0), the solutions are given by the most important formula of the topic:"
    },
    {
      "type": "paragraph",
      "html": "x = <span class=\"frac\"><span>−b ± <span class=\"sqrt\"><span class=\"r\">b² − 4ac</span></span></span><span>2a</span></span>"
    },
    {
      "type": "example",
      "title": "Worked example — quadratic formula",
      "bodyHtml": "<p>Solve <span class=\"m\">2x² − 3x − 2 = 0</span>.</p>",
      "solutionHtml": "<p>Here a = 2, b = −3, c = −2. Substitute:</p>\n      <div class=\"eq\">x = <span class=\"frac\"><span>3 ± <span class=\"sqrt\"><span class=\"r\">(−3)² − 4(2)(−2)</span></span></span><span>2(2)</span></span> = <span class=\"frac\"><span>3 ± <span class=\"sqrt\"><span class=\"r\">9 + 16</span></span></span><span>4</span></span> = <span class=\"frac\"><span>3 ± 5</span><span>4</span></span></div>\n      <p><span class=\"m\">x = <span class=\"frac\"><span>8</span><span>4</span></span> = 2</span> &nbsp;&nbsp;or&nbsp;&nbsp; <span class=\"m\">x = <span class=\"frac\"><span>−2</span><span>4</span></span> = −<span class=\"frac\"><span>1</span><span>2</span></span></span>.</p>"
    },
    {
      "type": "example",
      "title": "Worked example — irrational roots",
      "bodyHtml": "<p>Solve <span class=\"m\">2x² − 5x + 1 = 0</span> (this one does not factorise).</p>",
      "solutionHtml": "<div class=\"eq\">x = <span class=\"frac\"><span>5 ± <span class=\"sqrt\"><span class=\"r\">25 − 8</span></span></span><span>4</span></span> = <span class=\"frac\"><span>5 ± <span class=\"sqrt\"><span class=\"r\">17</span></span></span><span>4</span></span></div>\n      <p><span class=\"m\">x ≈ 2.28</span> or <span class=\"m\">x ≈ 0.22</span> (2 d.p.).</p>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "the-discriminant",
      "text": "The discriminant"
    },
    {
      "type": "paragraph",
      "html": "The quantity under the square root, <b><span class=\"m\">b² − 4ac</span></b>, is called the <b>discriminant</b>. It predicts the nature of the roots <i>before</i> you solve — a favourite short exam question."
    },
    {
      "type": "table",
      "head": [
        "Discriminant",
        "Roots",
        "Graph cuts x-axis"
      ],
      "rows": [
        [
          "b² − 4ac &gt; 0",
          "two distinct real roots",
          "twice"
        ],
        [
          "b² − 4ac = 0",
          "one repeated (equal) root",
          "touches once (tangent)"
        ],
        [
          "b² − 4ac &lt; 0",
          "no real roots",
          "never"
        ]
      ],
      "nowrapCols": [
        0
      ]
    },
    {
      "type": "example",
      "title": "Worked example — using the discriminant",
      "bodyHtml": "<p>Without solving, describe the roots of (1) <span class=\"m\">x² − 6x + 9 = 0</span> &nbsp; (2) <span class=\"m\">x² + x + 1 = 0</span></p>",
      "solutionHtml": "<p><b>(1)</b> <span class=\"m\">b² − 4ac = 36 − 36 = 0</span> → one repeated root (x = 3, twice).</p>\n      <p><b>(2)</b> <span class=\"m\">b² − 4ac = 1 − 4 = −3 &lt; 0</span> → no real roots.</p>"
    },
    {
      "type": "quiz",
      "title": "Topic 7 Quiz — Quadratic Expressions & Equations",
      "count": 7,
      "quizSlug": "07-quadratic-expressions-and-equations"
    }
  ]
};

export default chapter;
