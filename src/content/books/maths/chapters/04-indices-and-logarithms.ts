import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "04-indices-and-logarithms",
    "number": 4,
    "title": "Indices & Logarithms",
    "subtitle": "Laws of indices · Scientific notation · Laws of logarithms · Indicial equations",
    "kind": "topic",
    "words": 1028,
    "minutes": 5
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "indices-powers-exponents",
      "text": "Indices (powers / exponents)"
    },
    {
      "type": "paragraph",
      "html": "The number 16 is the same as 2×2×2×2, which can be abbreviated to <b>2⁴</b>. When written as 2⁴, the <b>2 is the base</b> and the <b>4 is the index (power or exponent)</b>; 2⁴ is read as “two to the power of four”. When the index is 2 or 3 we use special names: <b>4² is “four squared”</b> and <b>5³ is “five cubed”</b>. When no index is shown the power is 1: <span class=\"m\">2 means 2¹</span>."
    },
    {
      "type": "example",
      "title": "Worked example — evaluating powers",
      "bodyHtml": "<p>Evaluate (a) 2⁶ &nbsp; (b) 3⁴</p>",
      "solutionHtml": "<p>(a) 2⁶ = 2×2×2×2×2×2 = <b>64</b> &nbsp;&nbsp; (b) 3⁴ = 3×3×3×3 = <b>81</b></p>"
    },
    {
      "type": "paragraph",
      "html": "<b>Square roots</b> reverse squaring: since 3×3 = 9, the square root of 9 is 3, written <span class=\"m\">√9 = 3</span> or in index form <span class=\"m\">9<sup>1/2</sup> = 3</span>."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "the-six-laws-of-indices",
      "text": "The six laws of indices"
    },
    {
      "type": "table",
      "head": [
        "Law",
        "Statement",
        "Example"
      ],
      "rows": [
        [
          "<b>1st</b>",
          "a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup>",
          "2² × 2³ = 2⁵ = 32 (indices are <b>added</b>)"
        ],
        [
          "<b>2nd</b>",
          "a<sup>m</sup> ÷ a<sup>n</sup> = a<sup>m−n</sup>",
          "3⁵ ÷ 3² = 3³ = 27 (index below is <b>subtracted</b>)"
        ],
        [
          "<b>3rd</b>",
          "(a<sup>m</sup>)<sup>n</sup> = a<sup>mn</sup>",
          "(5²)³ = 5⁶ (indices are <b>multiplied</b>)"
        ],
        [
          "<b>4th</b>",
          "a⁰ = 1",
          "7⁰ = 1 (any number to the power 0 is 1)"
        ],
        [
          "<b>5th</b>",
          "a<sup>−n</sup> = <span class=\"frac\"><span>1</span><span>a<sup>n</sup></span></span>",
          "2<sup>−3</sup> = <span class=\"frac\"><span>1</span><span>2³</span></span> = <span class=\"frac\"><span>1</span><span>8</span></span> (negative power = reciprocal)"
        ],
        [
          "<b>6th</b>",
          "a<sup>m/n</sup> = <span class=\"sqrt\"><span class=\"r\">a<sup>m</sup></span></span><sup> n</sup>",
          "27<sup>2/3</sup> = (∛27)² = 3² = 9 (root first, then power)"
        ]
      ],
      "nowrapCols": [
        1,
        2
      ]
    },
    {
      "type": "example",
      "title": "Worked example — simplifying with the laws",
      "bodyHtml": "<p>Simplify: (1) <span class=\"m\">x⁷ × x⁻³ ÷ x²</span> &nbsp; (2) <span class=\"m\">(2x²y³)²</span> &nbsp; (3) <span class=\"m\">(3x)⁰</span> &nbsp; (4) <span class=\"m\">16<sup>3/4</sup></span></p>",
      "solutionHtml": "<ol>\n        <li><span class=\"m\">x<sup>7+(−3)−2</sup> = x²</span></li>\n        <li><span class=\"m\">2²x⁴y⁶ = 4x⁴y⁶</span> — the outer power applies to <i>every</i> factor inside.</li>\n        <li><span class=\"m\">(3x)⁰ = 1</span> — the whole bracket to the power 0 is 1.</li>\n        <li><span class=\"m\">16<sup>3/4</sup> = (⁴√16)³ = 2³ = 8</span>.</li>\n      </ol>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "scientific-notation",
      "text": "Scientific notation"
    },
    {
      "type": "paragraph",
      "html": "A number in <b>scientific notation</b> is written as <span class=\"m\">a × 10ⁿ</span> where <span class=\"m\">1 ≤ a &lt; 10</span> and n is an integer. For example 4,600,000,000 = <span class=\"m\">4.6 × 10⁹</span> and 0.00013 = <span class=\"m\">1.3 × 10<sup>−4</sup></span>. To multiply or divide, combine the numbers and the powers of 10 separately, then re-adjust so the leading factor is again between 1 and 10."
    },
    {
      "type": "example",
      "title": "Worked example — operations in scientific notation",
      "bodyHtml": "<p>Evaluate and give the answer in scientific notation: (a) (7.3 × 10⁶) × (8.0 × 10<sup>−⁸</sup>) &nbsp; (b) (4.8 × 10⁷) ÷ (3.0 × 10<sup>−³</sup>)</p>",
      "solutionHtml": "<p>(a) 7.3 × 8.0 = 58.4 and 10⁶ × 10<sup>−8</sup> = 10<sup>−2</sup>, so 58.4 × 10<sup>−2</sup> = <b>5.84 × 10<sup>−1</sup></b>.</p>\n      <p>(b) 4.8 ÷ 3.0 = 1.6 and 10⁷ ÷ 10<sup>−3</sup> = 10<sup>7−(−3)</sup> = 10¹⁰, giving <b>1.6 × 10¹⁰</b>.</p>"
    },
    {
      "type": "example",
      "title": "Worked example — real-world problem",
      "bodyHtml": "<p>A government proposes a 700 billion dollar bailout (7 × 10¹¹) of the banking system. If 21 million people (2.1 × 10⁷) each pay an equal share, what is the cost per person?</p>",
      "solutionHtml": "<div class=\"eq\"><span class=\"frac\"><span>7 × 10¹¹</span><span>2.1 × 10⁷</span></span> = <span class=\"frac\"><span>7</span><span>2.1</span></span> × 10⁵ = 3.33… × 10⁴ ≈ <b>$33,300 per person</b></div>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "what-is-a-logarithm",
      "text": "What is a logarithm?"
    },
    {
      "type": "paragraph",
      "html": "Logarithms were invented in the early 1600s to turn <b>multiplicative processes into additive ones</b> — they literally lengthened the productive lives of astronomers. They still matter today: loudness in decibels, the pH of a solution and earthquake intensity on the Richter scale are all logarithmic."
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Definition",
      "html": "If <span class=\"m\">b &gt; 0</span> and <span class=\"m\">b ≠ 1</span>, then <span class=\"m\">log<sub>b</sub> n = p</span> &nbsp;<b>if and only if</b>&nbsp; <span class=\"m\">b<sup>p</sup> = n</span>. We read it as “the log, base b, of n equals p”. A logarithm answers the question: <b>what power of the base gives this number?</b>"
    },
    {
      "type": "paragraph",
      "html": "For example, asking “how many 2s multiply together to give 32?” means solving <span class=\"m\">2ᵀ = 32</span>. Since <span class=\"m\">2⁵ = 32</span>, the answer is 5, and we write <span class=\"m\">log₂ 32 = 5</span>."
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Common logarithms</b> have base 10; <span class=\"m\">log₁₀</span> is usually abbreviated to <b>lg</b> (or just log).",
        "<b>Natural (Napierian) logarithms</b> have base <span class=\"m\">e ≈ 2.7183</span>; <span class=\"m\">log<sub>e</sub></span> is abbreviated to <b>ln</b>."
      ]
    },
    {
      "type": "example",
      "title": "Worked example — exponential ↔ logarithmic form",
      "bodyHtml": "<p>Write in logarithmic form: (1) 2³ = 8 &nbsp; (2) 2<sup>−3</sup> = 1/8 &nbsp; (3) 7² = 49 &nbsp; (4) 5⁰ = 1 &nbsp; (5) 10<sup>−2</sup> = 1/100</p>",
      "solutionHtml": "<ol>\n        <li><span class=\"m\">log₂ 8 = 3</span> (“log base 2 of 8 is 3”)</li>\n        <li><span class=\"m\">log₂ <span class=\"frac\"><span>1</span><span>8</span></span> = −3</span></li>\n        <li><span class=\"m\">log₇ 49 = 2</span></li>\n        <li><span class=\"m\">log₅ 1 = 0</span></li>\n        <li><span class=\"m\">lg <span class=\"frac\"><span>1</span><span>100</span></span> = −2</span></li>\n      </ol>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "laws-of-logarithms",
      "text": "Laws of logarithms"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">Product law</div><div class=\"f-b\">log<sub>a</sub>(xy) = log<sub>a</sub> x + log<sub>a</sub> y</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Quotient law</div><div class=\"f-b\">log<sub>a</sub>(x/y) = log<sub>a</sub> x − log<sub>a</sub> y</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Power law</div><div class=\"f-b\">log<sub>a</sub>(xⁿ) = n log<sub>a</sub> x</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Special values</div><div class=\"f-b\">log<sub>a</sub> 1 = 0 &nbsp;·&nbsp; log<sub>a</sub> a = 1</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Reciprocal 1</div><div class=\"f-b\">log<sub>x</sub> <span class=\"frac\"><span>1</span><span>n</span></span> = −log<sub>x</sub> n</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Reciprocal 2</div><div class=\"f-b\">log<sub>1/x</sub> n = −log<sub>x</sub> n</div></div>\n  </div>",
      "alt": "Formula reference cards"
    },
    {
      "type": "callout",
      "variant": "warn",
      "title": "Common mistakes",
      "html": "<span class=\"m\">log(x + y) ≠ log x + log y</span> — the laws only split <b>products</b> and <b>quotients</b>, never sums. Also <span class=\"m\">(log x)² ≠ log x²</span>; the second is <span class=\"m\">2 log x</span>."
    },
    {
      "type": "example",
      "title": "Worked example — applying log laws",
      "bodyHtml": "<p>Write <span class=\"m\">log₂<span class=\"bigp\">(</span><span class=\"frac\"><span>x³√y</span><span>16</span></span><span class=\"bigp\">)</span></span> as a combination of simple logs (x, y &gt; 0).</p>",
      "solutionHtml": "<div class=\"eq\">3 log₂ x + <span class=\"frac\"><span>1</span><span>2</span></span> log₂ y − log₂ 16 = 3 log₂ x + <span class=\"frac\"><span>1</span><span>2</span></span> log₂ y − 4</div>\n      <p>Power law on x³ and y<sup>1/2</sup>, quotient law splits the fraction, and log₂ 16 = log₂ 2⁴ = 4.</p>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "indicial-equations",
      "text": "Indicial equations"
    },
    {
      "type": "paragraph",
      "html": "An <b>indicial equation</b> has the unknown in the exponent. If both sides can be written with the <b>same base</b>, simply equate the indices. If not, take logarithms of both sides and use the power law."
    },
    {
      "type": "example",
      "title": "Worked example — solving indicial equations",
      "bodyHtml": "<p>Solve: (1) 2ᵀ = 32 &nbsp; (2) 3ᵁ⁻¹ = 81 &nbsp; (3) 9ᵀ = 27 &nbsp; (4) 2ᵀ = 5</p>",
      "solutionHtml": "<ol>\n        <li>32 = 2⁵, so <span class=\"m\">x = 5</span>.</li>\n        <li>81 = 3⁴ → x − 1 = 4 → <span class=\"m\">x = 5</span>.</li>\n        <li>Same base 3: <span class=\"m\">(3²)ᵀ = 3³</span> → 2x = 3 → <span class=\"m\">x = 3/2</span>.</li>\n        <li>No common base, so take logs: <span class=\"m\">x log 2 = log 5</span> → <span class=\"m\">x = <span class=\"frac\"><span>log 5</span><span>log 2</span></span> ≈ 2.322</span>.</li>\n      </ol>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "graphs-of-logarithmic-functions",
      "text": "Graphs of logarithmic functions"
    },
    {
      "type": "figure",
      "svg": "<svg class=\"fig\" viewBox=\"0 0 440 250\" role=\"img\" aria-label=\"logarithmic graphs\">\n    <line x1=\"40\" y1=\"210\" x2=\"420\" y2=\"210\" class=\"axisln\"></line><polygon points=\"420,210 412,206 412,214\" fill=\"var(--axis)\"></polygon>\n    <line x1=\"70\" y1=\"240\" x2=\"70\" y2=\"20\" class=\"axisln\"></line><polygon points=\"70,20 66,28 74,28\" fill=\"var(--axis)\"></polygon>\n    <text x=\"404\" y=\"228\" class=\"axl\">x</text><text x=\"80\" y=\"32\" class=\"axl\">y</text>\n    <text x=\"66\" y=\"224\" text-anchor=\"end\">0</text><text x=\"150\" y=\"224\" text-anchor=\"middle\">1</text>\n    <line x1=\"150\" y1=\"210\" x2=\"150\" y2=\"60\" class=\"dashed\" stroke=\"var(--axis)\"></line>\n    <path class=\"curve\" d=\"M 78 208 C 120 205 150 190 190 140 C 225 95 290 55 400 34\"></path>\n    <path class=\"curve2\" d=\"M 84 208 C 130 204 150 195 185 160 C 220 122 280 92 400 70\"></path>\n    <text x=\"230\" y=\"70\" fill=\"var(--primary)\" class=\"lbl\">y = log₁₀ x</text>\n    <text x=\"330\" y=\"110\" fill=\"var(--accent)\" class=\"lbl\">y = ln x</text>\n    <text x=\"95\" y=\"190\" font-size=\"11\">crosses x-axis at x = 1</text>\n  </svg>",
      "alt": "logarithmic graphs",
      "caption": "Every logarithm curve passes through (1, 0) and exists only for x > 0."
    },
    {
      "type": "quiz",
      "title": "Topic 4 Quiz — Indices & Logarithms",
      "count": 8,
      "quizSlug": "04-indices-and-logarithms"
    }
  ]
};

export default chapter;
