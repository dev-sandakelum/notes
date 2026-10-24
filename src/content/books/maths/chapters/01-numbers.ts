import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "01-numbers",
    "number": 1,
    "title": "Numbers",
    "subtitle": "Understanding different types of numbers",
    "kind": "topic",
    "words": 805,
    "minutes": 4
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "what-are-numbers",
      "text": "What are numbers?"
    },
    {
      "type": "paragraph",
      "html": "Numbers are mathematical objects used for <b>counting, measuring and labelling</b>. Before doing any algebra it is essential to know which family a number belongs to, because the rules you may apply (factoring, dividing, taking roots) depend on that family. Broadly, numbers are categorised into <b>natural numbers, whole numbers, integers, rational numbers, irrational numbers and prime numbers</b>, all of which together make up the <b>real numbers</b> that live on the number line."
    },
    {
      "type": "figure",
      "svg": "<svg class=\"fig\" viewBox=\"0 0 640 300\" role=\"img\" aria-label=\"Number system diagram\">\n    <ellipse cx=\"320\" cy=\"150\" rx=\"305\" ry=\"140\" fill=\"var(--accent)\" opacity=\".10\"></ellipse>\n    <ellipse cx=\"290\" cy=\"155\" rx=\"235\" ry=\"112\" fill=\"var(--accent)\" opacity=\".12\"></ellipse>\n    <ellipse cx=\"255\" cy=\"160\" rx=\"170\" ry=\"86\" fill=\"var(--primary)\" opacity=\".12\"></ellipse>\n    <ellipse cx=\"215\" cy=\"165\" rx=\"110\" ry=\"62\" fill=\"var(--primary)\" opacity=\".14\"></ellipse>\n    <ellipse cx=\"185\" cy=\"170\" rx=\"55\" ry=\"38\" fill=\"var(--primary)\" opacity=\".18\"></ellipse>\n    <text x=\"320\" y=\"34\" class=\"lbl\" text-anchor=\"middle\" fill=\"var(--accent)\">ℝ Real numbers</text>\n    <text x=\"300\" y=\"66\" class=\"lbl\" text-anchor=\"middle\" fill=\"var(--primary)\">ℚ Rational (p/q, q ≠ 0)</text>\n    <text x=\"288\" y=\"102\" class=\"lbl\" text-anchor=\"middle\">ℤ Integers</text>\n    <text x=\"255\" y=\"140\" class=\"lbl\" text-anchor=\"middle\">W Whole</text>\n    <text x=\"192\" y=\"172\" class=\"lbl\" text-anchor=\"middle\">ℕ Natural</text>\n    <text x=\"470\" y=\"180\" class=\"lbl\" text-anchor=\"middle\" fill=\"var(--warn)\">Irrational</text>\n    <text x=\"470\" y=\"200\" text-anchor=\"middle\" fill=\"var(--warn)\">π, √2, √3 …</text>\n    <text x=\"470\" y=\"220\" text-anchor=\"middle\" fill=\"var(--muted)\">(infinite decimals)</text>\n    <text x=\"192\" y=\"188\" text-anchor=\"middle\" font-size=\"11\">1, 2, 3…</text>\n    <text x=\"255\" y=\"156\" text-anchor=\"middle\" font-size=\"11\">0, 1, 2…</text>\n    <text x=\"288\" y=\"118\" text-anchor=\"middle\" font-size=\"11\">…−2, −1, 0…</text>\n    <text x=\"300\" y=\"84\" text-anchor=\"middle\" font-size=\"11\">3/4, 0.25, −2</text>\n    <text x=\"320\" y=\"272\" text-anchor=\"middle\" class=\"lbl\" fill=\"var(--accent)\">ℕ ⊂ W ⊂ ℤ ⊂ ℚ ⊂ ℝ</text>\n  </svg>",
      "alt": "Number system diagram",
      "caption": "The number system hierarchy: each set sits inside the next."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "natural-numbers",
      "text": "Natural numbers ℕ"
    },
    {
      "type": "paragraph",
      "html": "Natural numbers are the <b>counting numbers starting from 1</b>: 1, 2, 3, 4, … Examples are 1, 5, 108 and 1000. They contain no fractions or decimals, no negative numbers, and they do <b>not include 0</b>. In set notation:"
    },
    {
      "type": "paragraph",
      "html": "ℕ = {1, 2, 3, 4, 5, …}"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "whole-numbers-w",
      "text": "Whole numbers W"
    },
    {
      "type": "paragraph",
      "html": "Whole numbers are <b>natural numbers plus zero</b>: 0, 1, 2, 3, 4, … They start from 0, include every natural number, and still exclude negatives, fractions and decimals. Note the one-way relationship: <b>every natural number is a whole number, but not every whole number is a natural number</b> (0 is whole but not natural)."
    },
    {
      "type": "paragraph",
      "html": "W = {0, 1, 2, 3, 4, …}"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "integers",
      "text": "Integers ℤ"
    },
    {
      "type": "paragraph",
      "html": "Integers include all whole numbers, <b>both positive and negative, and zero</b>: …, −3, −2, −1, 0, 1, 2, 3, … Integers are <b>closed under addition, subtraction and multiplication</b>; the answer is always another integer (e.g. 5 + (−3) = 2, −4 × 3 = −12). They are <b>not closed under division</b>, since 5 ÷ 2 = 2.5 is not an integer."
    },
    {
      "type": "paragraph",
      "html": "ℤ = {…, −3, −2, −1, 0, 1, 2, 3, …}"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "rational-numbers",
      "text": "Rational numbers ℚ"
    },
    {
      "type": "paragraph",
      "html": "A rational number is any number that can be written as a <b>fraction <span class=\"m\">p/q</span> where <span class=\"m\">p</span> and <span class=\"m\">q</span> are integers and <span class=\"m\">q ≠ 0</span></b>. Examples: 3/4, −2, 0.25, 0.333… Two key points: <b>every integer is rational</b> (e.g. 5 = 5/1), and <b>every terminating or repeating decimal is rational</b>."
    },
    {
      "type": "example",
      "title": "Worked example: decimals to fractions",
      "bodyHtml": "<p>Write 0.5, −0.75 and 1.2 as fractions in lowest terms.</p>",
      "solutionHtml": "<p><span class=\"m\">0.5 = 5/10 = <span class=\"frac\"><span>1</span><span>2</span></span></span> &nbsp;&nbsp;·&nbsp;&nbsp; <span class=\"m\">−0.75 = −75/100 = −<span class=\"frac\"><span>3</span><span>4</span></span></span> &nbsp;&nbsp;·&nbsp;&nbsp; <span class=\"m\">1.2 = 12/10 = <span class=\"frac\"><span>6</span><span>5</span></span></span></p>\n      <p>Method: count decimal places (1 place → divide by 10, 2 places → divide by 100), then cancel the common factor.</p>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "irrational-numbers",
      "text": "Irrational numbers"
    },
    {
      "type": "paragraph",
      "html": "Irrational numbers <b>cannot</b> be expressed as a fraction <span class=\"m\">p/q</span>. Their decimal expansion is <b>non-terminating and non-repeating</b>. Classic examples are <span class=\"m\">π ≈ 3.14159…</span> and <span class=\"m\">√2 ≈ 1.41421…</span>. Be careful with square roots: <span class=\"m\">√4 = 2</span> is rational, while <span class=\"m\">√3 ≈ 1.732…</span> is irrational because 3 is not a perfect square."
    },
    {
      "type": "example",
      "title": "Worked example: spot the irrationals",
      "bodyHtml": "<p>Identify the irrational numbers among: √4, π, √3, 0.333…, 2</p>",
      "solutionHtml": "<ul>\n        <li><span class=\"m\">√4 = 2</span>: rational (it equals the integer 2 = 2/1).</li>\n        <li><span class=\"m\">π</span>. <b>irrational</b> (never terminates or repeats).</li>\n        <li><span class=\"m\">√3 ≈ 1.732…</span>. <b>irrational</b> (non-perfect square).</li>\n        <li><span class=\"m\">0.333… = 1/3</span>: rational (repeating decimal).</li>\n        <li><span class=\"m\">2 = 2/1</span>: rational.</li>\n      </ul>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "prime-numbers",
      "text": "Prime numbers"
    },
    {
      "type": "paragraph",
      "html": "A <b>prime number</b> is a natural number <b>greater than 1</b> that has no divisors other than <b>1 and itself</b>. Examples: 2, 3, 5, 7, 11, 13. Two properties are exam favourites: <b>2 is the only even prime number</b>, and every other prime is odd. A number with more divisors (like 12 = 2×2×3) is called <b>composite</b>, and 1 is neither prime nor composite."
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "Memorise",
      "html": "Primes below 50: <b>2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47</b>: 15 numbers. Primes just after 50: <b>53, 59, 61, 67, 71</b>."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "real-numbers",
      "text": "Real numbers ℝ"
    },
    {
      "type": "paragraph",
      "html": "Real numbers are <b>all the numbers that can be represented on the number line</b>. They include positive numbers, negative numbers, zero, fractions, terminating and repeating decimals (all rational) <i>and</i> non-terminating decimals like π and √2 (irrational). If a number is neither rational nor irrational, it is not real (complex numbers are beyond this course)."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "mixed-practice",
      "text": "Mixed practice"
    },
    {
      "type": "accordion",
      "items": [
        {
          "title": "Exercise set A: classification & conversions",
          "html": "<ol>\n        <li>Classify −7, 0, 3.14, √5, 8 as natural / integer / rational / irrational.</li>\n        <li>Write 0.333… as a fraction.</li>\n        <li>Find the next five prime numbers after 50.</li>\n        <li>Evaluate: (−8) + 5, (−4) × 6, (−3) × (−7) + 2.</li>\n        <li>Arrange in ascending order: −2, 3, −8, 0, −5.</li>\n        <li>Simplify <span class=\"m\"><span class=\"frac\"><span>2</span><span>3</span></span> + <span class=\"frac\"><span>3</span><span>4</span></span></span>.</li>\n      </ol>\n      <button class=\"reveal-btn\">Show answers</button>\n      <div class=\"solution\"><div class=\"sol-label\">Answers</div>\n        <ol>\n          <li><b>−7</b>: integer and rational (−7/1). <b>0</b>: integer, rational (0/1). <b>3.14</b>: rational (terminating decimal). <b>√5</b>: irrational (non-perfect square → non-terminating, non-repeating). <b>8</b>: natural, integer, rational.</li>\n          <li><span class=\"m\">0.333… = <span class=\"frac\"><span>1</span><span>3</span></span></span></li>\n          <li>53, 59, 61, 67, 71.</li>\n          <li>(−8) + 5 = <b>−3</b>; (−4) × 6 = <b>−24</b>; (−3) × (−7) + 2 = 21 + 2 = <b>23</b>.</li>\n          <li>−8 &lt; −5 &lt; −2 &lt; 0 &lt; 3.</li>\n          <li>LCM of 3 and 4 is 12: <span class=\"m\"><span class=\"frac\"><span>8</span><span>12</span></span> + <span class=\"frac\"><span>9</span><span>12</span></span> = <span class=\"frac\"><span>17</span><span>12</span></span> = 1<span class=\"frac\"><span>5</span><span>12</span></span></span>.</li>\n        </ol>\n      </div>"
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Topic 1 Quiz: Numbers",
      "count": 7,
      "quizSlug": "01-numbers"
    }
  ]
};

export default chapter;
