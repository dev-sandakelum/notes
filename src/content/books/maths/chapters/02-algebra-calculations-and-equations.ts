import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "02-algebra-calculations-and-equations",
    "number": 2,
    "title": "Algebra: Calculations & Equations",
    "subtitle": "Brackets · Factorisation · BODMAS · Solving equations · Word problems",
    "kind": "topic",
    "words": 1378,
    "minutes": 7
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "algebraic-expressions-terms-and-factors",
      "text": "Algebraic expressions, terms and factors"
    },
    {
      "type": "paragraph",
      "html": "An algebraic expression is built from <b>terms</b> separated by + or − signs. The term <span class=\"m\">2xy</span> is formed by the product of 2, <span class=\"m\">x</span> and <span class=\"m\">y</span> — so 2, <span class=\"m\">x</span> and <span class=\"m\">y</span> are all <b>factors</b> of <span class=\"m\">2xy</span>. The expression <span class=\"m\">2x + 2y</span> is a <b>binomial</b> (two terms): 2 is a factor of <span class=\"m\">2x</span> and also of <span class=\"m\">2y</span>, so 2 is a <b>common factor</b> of both terms and can be taken outside a bracket:"
    },
    {
      "type": "paragraph",
      "html": "2x + 2y = 2(x + y)"
    },
    {
      "type": "paragraph",
      "html": "Similarly, since <span class=\"m\">x</span> is common to <span class=\"m\">xy</span> and <span class=\"m\">5xz</span>: <span class=\"m\">xy + 5xz = x(y + 5z)</span>."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "hcf-highest-common-factor",
      "text": "HCF — highest common factor"
    },
    {
      "type": "paragraph",
      "html": "The factors of 8 are 1, 2, 4 and 8. The factors of 24 are 1, 2, 3, 4, 6, 8, 12 and 24. The <b>common factors</b> of 8 and 24 are therefore 1, 2, 4 and 8, and the <b>highest common factor (HCF)</b> is 8. When factorising an expression, always take out the <b>largest</b> common factor of every term."
    },
    {
      "type": "example",
      "title": "Worked example — taking out common factors",
      "bodyHtml": "<p>Factorise: (1) 3x + 12 &nbsp; (2) 6a + 12b − 18 &nbsp; (3) −2x − 6y &nbsp; (4) 3x − 6xy</p>",
      "solutionHtml": "<ol>\n        <li><span class=\"m\">3x + 12 = 3(x + 4)</span> — HCF of 3x and 12 is 3.</li>\n        <li><span class=\"m\">6a + 12b − 18 = 6(a + 2b − 3)</span> — HCF is 6.</li>\n        <li><span class=\"m\">−2x − 6y = −2(x + 3y)</span> — take out −2 so the bracket starts positive.</li>\n        <li><span class=\"m\">3x − 6xy = 3x(1 − 2y)</span> — HCF is 3x (both x terms). Write 3x ÷ 3x = 1 for the first term.</li>\n      </ol>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "removing-brackets-expansion",
      "text": "Removing brackets (expansion)"
    },
    {
      "type": "paragraph",
      "html": "Multiplying out brackets uses the distributive law: each term inside is multiplied by the factor outside. For two brackets, multiply <b>every</b> term of the first by <b>every</b> term of the second (FOIL: First, Outer, Inner, Last), then collect like terms."
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">Single bracket</div><div class=\"f-b\">3(2x + 5) = 6x + 15</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Two brackets</div><div class=\"f-b\">(x + 3)(x + 4) = x² + 7x + 12</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Perfect square</div><div class=\"f-b\">(x + 5)² = x² + 10x + 25</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Difference of squares</div><div class=\"f-b\">(x + 3)(x − 3) = x² − 9</div></div>\n  </div>",
      "alt": "Formula reference cards"
    },
    {
      "type": "example",
      "title": "Worked example — expanding (x + 3)(x + 4)",
      "bodyHtml": "",
      "solutionHtml": "<div class=\"eq\">(x + 3)(x + 4) = x(x + 4) + 3(x + 4) = x² + 4x + 3x + 12 = x² + 7x + 12</div>\n      <p>This also tells us that <b>(x + 3) and (x + 4) are factors of x² + 7x + 12</b> — expansion and factorisation are inverse processes.</p>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "factorising-by-grouping",
      "text": "Factorising by grouping"
    },
    {
      "type": "paragraph",
      "html": "When an expression has <b>four terms</b> and no common factor across all of them, split it into two pairs, factorise each pair, then factorise the common bracket. Make sure you group terms so that identical brackets appear."
    },
    {
      "type": "example",
      "title": "Worked example — grouping",
      "bodyHtml": "<p>Factorise: (1) ax + ay + 3x + 3y &nbsp; (2) 2y² − 4y − 7y + 14 &nbsp; (3) ax − a − x + 1</p>",
      "solutionHtml": "<ol>\n        <li><span class=\"m\">ax + ay + 3x + 3y = a(x + y) + 3(x + y) = (a + 3)(x + y)</span></li>\n        <li><span class=\"m\">2y² − 4y − 7y + 14 = 2y(y − 2) − 7(y − 2) = (2y − 7)(y − 2)</span></li>\n        <li><span class=\"m\">ax − a − x + 1 = a(x − 1) − (x − 1) = (a − 1)(x − 1)</span> — note the sign change when factoring −(x − 1).</li>\n      </ol>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "laws-of-precedence-bodmas",
      "text": "Laws of precedence — BODMAS"
    },
    {
      "type": "paragraph",
      "html": "BODMAS gives the order in which operations must be performed: <b>B</b>rackets first, then <b>O</b>rders (powers and roots), then <b>D</b>ivision and <b>M</b>ultiplication (left to right, equal priority), and finally <b>A</b>ddition and <b>S</b>ubtraction (left to right, equal priority). Ignoring this order is the single most common source of lost marks in calculations."
    },
    {
      "type": "example",
      "title": "Worked example — BODMAS",
      "bodyHtml": "<p>Evaluate: (1) 2 + 3 × 4 &nbsp; (2) 12 ÷ 4 + 6 × 2 &nbsp; (3) 5 + 2² × 3 &nbsp; (4) 20 − (3 + 2) × 2</p>",
      "solutionHtml": "<ol>\n        <li>2 + 3 × 4 = 2 + 12 = <b>14</b> (multiplication before addition).</li>\n        <li>12 ÷ 4 + 6 × 2 = 3 + 12 = <b>15</b>.</li>\n        <li>5 + 2² × 3 = 5 + 4 × 3 = 5 + 12 = <b>17</b> (power before multiply).</li>\n        <li>20 − (3 + 2) × 2 = 20 − 5 × 2 = 20 − 10 = <b>10</b> (bracket first).</li>\n      </ol>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "algebraic-equations",
      "text": "Algebraic equations"
    },
    {
      "type": "paragraph",
      "html": "An <b>equation</b> is a statement that two expressions are equal. The symbol “=” divides it into the <b>left member</b> and the <b>right member</b>: in <span class=\"m\">2x + 3 = 13</span>, the left member is <span class=\"m\">2x + 3</span> and the right member is 13. The <b>solution (or root)</b> of an equation in one variable is the number that makes it true when substituted — for example 5 is the solution of <span class=\"m\">2x + 3 = 13</span> because <span class=\"m\">2(5) + 3 = 13</span>. To <b>solve</b> an equation means to find <i>all</i> its solutions."
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Two golden rules for solving",
      "html": "<b>1.</b> Do the same operation to <b>both sides</b> (add, subtract, multiply, divide). <b>2.</b> A term may be moved from one side to the other <b>if its sign is changed</b> (“change side, change sign”)."
    },
    {
      "type": "example",
      "title": "Worked example — solving linear equations",
      "bodyHtml": "<p>Solve: (1) 5x − 7 = 18 &nbsp; (2) 3(x − 2) = 12 &nbsp; (3) <span class=\"m\"><span class=\"frac\"><span>x</span><span>4</span></span> + 3 = 7</span></p>",
      "solutionHtml": "<ol>\n        <li>5x − 7 = 18 → 5x = 18 + 7 = 25 → <span class=\"m\">x = 5</span>.</li>\n        <li>3(x − 2) = 12 → x − 2 = 4 → <span class=\"m\">x = 6</span>.</li>\n        <li><span class=\"m\"><span class=\"frac\"><span>x</span><span>4</span></span> + 3 = 7 → <span class=\"frac\"><span>x</span><span>4</span></span> = 4 → x = 16</span>.</li>\n      </ol>\n      <p>Always check by substituting back into the original equation.</p>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "cross-multiplication",
      "text": "Cross-multiplication"
    },
    {
      "type": "paragraph",
      "html": "When there is <b>exactly one fraction on each side</b> of an equation, you can cross-multiply: multiply the numerator of each side by the denominator of the other, then solve the resulting linear equation."
    },
    {
      "type": "example",
      "title": "Worked example — cross-multiplying",
      "bodyHtml": "<p>Solve <span class=\"m\"><span class=\"frac\"><span>2x + 1</span><span>3</span></span> = <span class=\"frac\"><span>x − 2</span><span>4</span></span></span> &nbsp;and&nbsp; <span class=\"m\"><span class=\"frac\"><span>3x − 2</span><span>5</span></span> = <span class=\"frac\"><span>x + 4</span><span>2</span></span></span></p>",
      "solutionHtml": "<p><b>(1)</b> Cross-multiply: 4(2x + 1) = 3(x − 2) → 8x + 4 = 3x − 6 → 5x = −10 → <span class=\"m\">x = −2</span>.</p>\n      <p><b>(2)</b> 2(3x − 2) = 5(x + 4) → 6x − 4 = 5x + 20 → <span class=\"m\">x = 24</span>.</p>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "practical-problems-word-problems",
      "text": "Practical problems (word problems)"
    },
    {
      "type": "paragraph",
      "html": "Strategy: define the unknown with a letter, translate each sentence into an equation, solve, and answer the actual question asked. Examiners award method marks for a correct equation even if the arithmetic slips."
    },
    {
      "type": "example",
      "title": "Worked example — word problems",
      "bodyHtml": "<p>(1) The sum of three consecutive integers is 72. Find them.<br>(2) A father is 3 times as old as his son. In 12 years, he will be twice as old as his son. Find their present ages.<br>(3) A rectangle's perimeter is 36 cm and its length is twice its width. Find the dimensions.</p>",
      "solutionHtml": "<p><b>(1)</b> Let the integers be n, n+1, n+2. Then 3n + 3 = 72 → 3n = 69 → n = 23. The integers are <b>23, 24, 25</b>.</p>\n      <p><b>(2)</b> Son = s, father = 3s. In 12 years: 3s + 12 = 2(s + 12) → 3s + 12 = 2s + 24 → s = 12. Son is <b>12</b>, father is <b>36</b>.</p>\n      <p><b>(3)</b> Width w, length 2w. Perimeter: 2(2w + w) = 36 → 6w = 36 → w = 6. Width <b>6 cm</b>, length <b>12 cm</b>.</p>"
    },
    {
      "type": "accordion",
      "items": [
        {
          "title": "Exercise set B — mixed algebra practice ▾",
          "html": "<ol>\n        <li>Expand and simplify: (x + 2)(x + 5), (2x − 1)(x + 3), (x − 4)²</li>\n        <li>Factorise: 4x + 8, 5x² − 15x, ab + 2b + 3a + 6</li>\n        <li>Evaluate using BODMAS: 6 + 4 × 3², (6 + 4) × 3², 40 − 2(7 − 3)²</li>\n        <li>Solve: 7x + 5 = 3x + 21; &nbsp; <span class=\"m\"><span class=\"frac\"><span>x − 1</span><span>2</span></span> = <span class=\"frac\"><span>2x + 1</span><span>5</span></span></span></li>\n      </ol>\n      <button class=\"reveal-btn\">Show answers</button>\n      <div class=\"solution\"><div class=\"sol-label\">Answers</div>\n        <ol>\n          <li>x² + 7x + 10; &nbsp; 2x² + 5x − 3; &nbsp; x² − 8x + 16.</li>\n          <li>4(x + 2); &nbsp; 5x(x − 3); &nbsp; (a + 3)(b + 2).</li>\n          <li>6 + 36 = <b>42</b>; &nbsp; 10 × 9 = <b>90</b>; &nbsp; 40 − 2(16) = <b>8</b>.</li>\n          <li>4x = 16 → <b>x = 4</b>; &nbsp; 5(x − 1) = 2(2x + 1) → 5x − 5 = 4x + 2 → <b>x = 7</b>.</li>\n        </ol>\n      </div>"
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Topic 2 Quiz — Algebra",
      "count": 7,
      "quizSlug": "02-algebra-calculations-and-equations"
    }
  ]
};

export default chapter;
