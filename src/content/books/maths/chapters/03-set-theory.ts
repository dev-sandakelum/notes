import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "03-set-theory",
    "number": 3,
    "title": "Set theory",
    "subtitle": "Notation · Operations · Venn diagrams · Cartesian product",
    "kind": "topic",
    "words": 1477,
    "minutes": 7
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "what-are-sets",
      "text": "What are sets?"
    },
    {
      "type": "paragraph",
      "html": "A <b>set</b> is a collection of <b>well-defined and distinct objects</b>. Each object inside is called an <b>element</b> (or member), and elements are listed inside <b>curly brackets</b>. Examples: <span class=\"m\">A = {1, 2, 3, 4}</span> (a set of integers), <span class=\"m\">B = {apple, orange, banana}</span> (a set of fruits), and <span class=\"m\">C = {x | 0 &lt; x &lt; 5}</span> (the numbers strictly between 0 and 5; the bar reads “such that”). Sets can be finite, infinite, or <b>empty</b>: the empty (null) set contains no elements and is written <b>∅</b> or { }."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "representing-sets",
      "text": "Representing sets"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Roster form</b>: list the elements: <span class=\"m\">A = {1, 2, 3}</span>.",
        "<b>Set-builder form</b>: describe a property: <span class=\"m\">A = {x | x &gt; 0, x ∈ ℤ}</span> reads “A is the set of all x such that x is positive and x is an integer”."
      ]
    },
    {
      "type": "example",
      "title": "Worked example: converting to set-builder form",
      "bodyHtml": "<p>Express in set-builder form: (1) A = {2, 4, 6, 8, 10} &nbsp; (2) B = {1, 2, 3, 4} &nbsp; (3) C = {−3, −2, −1, 0, 1, 2, 3} &nbsp; (4) E = {1, 4, 9, 16, 25}</p>",
      "solutionHtml": "<ol>\n        <li><span class=\"m\">A = {x ∈ ℕ | 2 ≤ x ≤ 10, x is even}</span>, all even natural numbers from 2 to 10.</li>\n        <li><span class=\"m\">B = {x ∈ ℕ | 1 ≤ x &lt; 5}</span>: natural numbers from 1 up to (but not including) 5.</li>\n        <li><span class=\"m\">C = {x ∈ ℤ | −3 ≤ x ≤ 3}</span>, all integers between −3 and 3 inclusive.</li>\n        <li><span class=\"m\">E = {x | x = n², n ∈ ℕ, 1 ≤ n ≤ 5}</span>, perfect squares of the first five naturals.</li>\n      </ol>\n      <p>Going the other way: {x | x is an even number less than 10} = {2, 4, 6, 8}; positive integers less than 7 in set-builder form = {x ∈ ℕ | x &lt; 7}.</p>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "equality-of-two-sets",
      "text": "Equality of two sets"
    },
    {
      "type": "paragraph",
      "html": "Two sets are <b>equal</b> if they contain <b>exactly the same elements</b>. Order does not matter and repetition is ignored, because a set only keeps unique elements: <span class=\"m\">{a, b, c} = {b, c, a}</span> and <span class=\"m\">{1, 2, 3, 3} = {3, 2, 1} = {1, 2, 3}</span> (the duplicate 3 is dropped)."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "subsets-and-the-universal-set",
      "text": "Subsets and the universal set"
    },
    {
      "type": "paragraph",
      "html": "A set <span class=\"m\">A</span> is a <b>subset</b> of <span class=\"m\">B</span> (written <b><span class=\"m\">A ⊆ B</span></b>) when <b>every</b> element of A is also in B. If <span class=\"m\">A = {1, 2, 3}</span> and <span class=\"m\">B = {1, 2, 3, 4}</span>, then <span class=\"m\">A ⊆ B</span>. The <b>universal set</b> is the largest set in a given scenario, for rolling a die, <span class=\"m\">U = {1, 2, 3, 4, 5, 6}</span> and the even outcomes <span class=\"m\">A<sub>e</sub> = {2, 4, 6}</span> satisfy <span class=\"m\">A<sub>e</sub> ⊆ U</span>. Two facts worth memorising: <b>the null set is a subset of every set</b>, and a set with n elements has exactly <b>2ⁿ subsets</b>."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "complement",
      "text": "Complement"
    },
    {
      "type": "paragraph",
      "html": "The <b>complement</b> of A, written <b>A′</b>, contains all elements of the universal set that are <b>not</b> in A. With <span class=\"m\">U = {1, 2, 3, 4, 5, 6}</span> and <span class=\"m\">A<sub>e</sub> = {2, 4, 6}</span> (even die outcomes), the complement is <span class=\"m\">A<sub>e</sub>′ = {1, 3, 5}</span>; the odd outcomes."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "union-and-intersection",
      "text": "Union and intersection"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">Union ∥</div><div class=\"f-b\">A ∥ B = all elements in A, B, or both</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Intersection ∩</div><div class=\"f-b\">A ∩ B = elements in both A and B</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Difference −</div><div class=\"f-b\">A − B = {x | x ∈ A and x ∉ B}</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Complement ′</div><div class=\"f-b\">A′ = U − A</div></div>\n  </div>",
      "alt": "Formula reference cards"
    },
    {
      "type": "example",
      "title": "Worked example: union & intersection",
      "bodyHtml": "<p>With <span class=\"m\">A = {1, 2, 3, 4, 5, 6}</span> (die outcomes) and <span class=\"m\">B = {4, 5, 6, 7, 8, 9}</span>: find <span class=\"m\">A ∥ B</span> and <span class=\"m\">A ∩ B</span>.</p>",
      "solutionHtml": "<p><span class=\"m\">A ∥ B = {1, 2, 3, 4, 5, 6, 7, 8, 9}</span>, everything in either set. <span class=\"m\">A ∩ B = {4, 5, 6}</span>, only the shared elements.</p>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "disjoint-sets",
      "text": "Disjoint sets"
    },
    {
      "type": "paragraph",
      "html": "Two sets are <b>disjoint</b> if they have <b>no elements in common</b>, i.e. <span class=\"m\">A ∩ B = ∅</span>. For example <span class=\"m\">{1, 3, 5, 7}</span> and <span class=\"m\">{2, 4, 6, 8}</span> are disjoint, but <span class=\"m\">{x | x &gt; 9}</span> and <span class=\"m\">{x | x ≤ 10}</span> are <b>not</b> disjoint; they share the element 10."
    },
    {
      "type": "example",
      "title": "Worked example: disjoint or not?",
      "bodyHtml": "<p>(1) A = {x | x = n², n ∈ ℕ, 1 ≤ n ≤ 5}, B = {x | 1 ≤ x ≤ 5, x is even}<br>(2) A = {x | x = n³, n ∈ ℕ, 1 ≤ n ≤ 5}, B = {x | 1 ≤ x ≤ 10, x is prime}</p>",
      "solutionHtml": "<p><b>(1)</b> A = {1, 4, 9, 16, 25}, B = {2, 4}. They share <b>4</b> → <b>not disjoint</b>.</p>\n      <p><b>(2)</b> A = {1, 8, 27, 64, 125}, B = {2, 3, 5, 7}. No common element → <b>disjoint</b> (A ∩ B = ∅).</p>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "finite-and-infinite-sets",
      "text": "Finite and infinite sets"
    },
    {
      "type": "paragraph",
      "html": "A <b>finite</b> set has a countable number of elements, such as <span class=\"m\">{2, 4, 6, …, 20}</span> (ten elements). An <b>infinite</b> set is uncountable in principle, such as <span class=\"m\">{x | x is a natural number}</span> or <span class=\"m\">{x | x &gt; 0}</span>."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "difference-of-sets",
      "text": "Difference of sets"
    },
    {
      "type": "example",
      "title": "Worked example: difference",
      "bodyHtml": "<p>If A = {a, b, c, d, e} and B = {c, d, f, g}, find A − B and B − A. Then, for A = {x | x &lt; 5} and B = {x | x is even}, describe A ∩ B, A − B and B − A.</p>",
      "solutionHtml": "<p><span class=\"m\">A − B = {a, b, e}</span> (in A, not in B) and <span class=\"m\">B − A = {f, g}</span>. Difference is <b>not</b> symmetric.</p>\n      <p>Working within the integers: A = {…, −2, −1, 0, 1, 2, 3, 4} and B = {…, −4, −2, 0, 2, 4, 6, …}.</p>\n      <ul>\n        <li><span class=\"m\">A ∩ B</span> = evens less than 5 = <span class=\"m\">{…, −4, −2, 0, 2, 4}</span></li>\n        <li><span class=\"m\">A − B</span> = odds and non-integers less than 5 = <span class=\"m\">{…, −3, −1, 1, 3}</span></li>\n        <li><span class=\"m\">B − A</span> = <span class=\"m\">{x | x is even and x ≥ 5}</span> = {6, 8, 10, …}</li>\n      </ul>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "venn-diagrams",
      "text": "Venn diagrams"
    },
    {
      "type": "paragraph",
      "html": "A <b>Venn diagram</b> uses overlapping circles inside a rectangle (the universal set) to visualise relationships between sets. The classic two-circle diagram has three regions: P only, Q only, and P &amp; Q (the overlap); a three-circle diagram has <b>seven</b> regions plus the outside."
    },
    {
      "type": "figure",
      "svg": "<svg class=\"fig\" viewBox=\"0 0 660 240\" role=\"img\" aria-label=\"Venn diagram regions\">\n    <rect x=\"10\" y=\"14\" width=\"640\" height=\"196\" rx=\"12\" fill=\"none\" stroke=\"var(--axis)\" stroke-width=\"1.6\"></rect>\n    <text x=\"22\" y=\"34\" class=\"axl\">U</text>\n    <circle cx=\"130\" cy=\"112\" r=\"66\" fill=\"var(--accent)\" opacity=\".25\"></circle>\n    <circle cx=\"226\" cy=\"112\" r=\"66\" fill=\"var(--primary)\" opacity=\".22\"></circle>\n    <text x=\"88\" y=\"112\" class=\"lbl\">P</text><text x=\"268\" y=\"112\" class=\"lbl\">Q</text>\n    <text x=\"88\" y=\"130\">1</text><text x=\"178\" y=\"112\" text-anchor=\"middle\">3</text><text x=\"252\" y=\"130\">2</text>\n    <text x=\"178\" y=\"205\" text-anchor=\"middle\">1 = P only · 2 = Q only · 3 = P and Q</text>\n    <circle cx=\"450\" cy=\"112\" r=\"62\" fill=\"var(--accent)\" opacity=\".25\"></circle>\n    <circle cx=\"560\" cy=\"112\" r=\"62\" fill=\"var(--primary)\" opacity=\".22\"></circle>\n    <text x=\"420\" y=\"60\" class=\"lbl\">P</text><text x=\"590\" y=\"60\" class=\"lbl\">Q</text>\n    <text x=\"505\" y=\"205\" text-anchor=\"middle\">two disjoint sets: P ∩ Q = ∅</text>\n  </svg>",
      "alt": "Venn diagram regions",
      "caption": "Left: the three regions of overlapping sets P and Q. Right: disjoint sets never overlap."
    },
    {
      "type": "figure",
      "svg": "<svg class=\"fig\" viewBox=\"0 0 660 250\" role=\"img\" aria-label=\"Venn shading\">\n    <rect x=\"10\" y=\"12\" width=\"200\" height=\"196\" rx=\"12\" fill=\"none\" stroke=\"var(--axis)\" stroke-width=\"1.6\"></rect>\n    <circle cx=\"90\" cy=\"110\" r=\"52\" class=\"shp\"></circle>\n    <circle cx=\"132\" cy=\"110\" r=\"52\" fill=\"none\" stroke=\"var(--primary)\" stroke-width=\"2\"></circle>\n    <circle cx=\"90\" cy=\"110\" r=\"52\" fill=\"none\" stroke=\"var(--primary)\" stroke-width=\"2\"></circle>\n    <text x=\"22\" y=\"32\" class=\"axl\">U</text><text x=\"60\" y=\"112\" class=\"lbl\">A</text><text x=\"166\" y=\"112\" class=\"lbl\">B</text>\n    <text x=\"110\" y=\"228\" text-anchor=\"middle\">A ∥ B (everything shaded)</text>\n    <rect x=\"228\" y=\"12\" width=\"200\" height=\"196\" rx=\"12\" fill=\"none\" stroke=\"var(--axis)\" stroke-width=\"1.6\"></rect>\n    <path d=\"M 278 58 A 52 52 0 0 1 278 162 A 52 52 0 0 0 278 58\" class=\"shp2\"></path>\n    <circle cx=\"308\" cy=\"110\" r=\"52\" fill=\"none\" stroke=\"var(--primary)\" stroke-width=\"2\"></circle>\n    <circle cx=\"350\" cy=\"110\" r=\"52\" fill=\"none\" stroke=\"var(--primary)\" stroke-width=\"2\"></circle>\n    <text x=\"240\" y=\"32\" class=\"axl\">U</text><text x=\"278\" y=\"112\" class=\"lbl\">A</text><text x=\"384\" y=\"112\" class=\"lbl\">B</text>\n    <text x=\"328\" y=\"228\" text-anchor=\"middle\">A ∩ B (only the overlap)</text>\n    <rect x=\"446\" y=\"12\" width=\"200\" height=\"196\" rx=\"12\" fill=\"none\" stroke=\"var(--axis)\" stroke-width=\"1.6\"></rect>\n    <path d=\"M 446 12 h 200 v 196 h -200 z M 526 58 a 52 52 0 0 0 0 104 a 52 52 0 0 0 0 -104\" fill=\"var(--warn)\" opacity=\".28\" fill-rule=\"evenodd\"></path>\n    <circle cx=\"526\" cy=\"110\" r=\"52\" fill=\"none\" stroke=\"var(--primary)\" stroke-width=\"2\"></circle>\n    <text x=\"458\" y=\"32\" class=\"axl\">U</text><text x=\"496\" y=\"112\" class=\"lbl\">A</text>\n    <text x=\"546\" y=\"228\" text-anchor=\"middle\">A′ (everything outside A)</text>\n  </svg>",
      "alt": "Venn shading",
      "caption": "Shading rules you must be able to draw: union, intersection and complement."
    },
    {
      "type": "example",
      "title": "Worked example: alphabet sets (universal set reasoning)",
      "bodyHtml": "<p>Let A be the set of all letters in the alphabet, B the set of vowels, and C the set of letters in your name. Identify the universal set, the subsets, and describe B′.</p>",
      "solutionHtml": "<p><span class=\"m\">A = {A, B, C, …}</span> is the <b>universal set</b> here; both B = {A, E, I, O, U} and C are <b>subsets</b> of A. Since a letter that is not a vowel must be a consonant, <span class=\"m\">B′</span> is <b>the set of all consonants</b> in the English alphabet.</p>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "cartesian-product",
      "text": "Cartesian product"
    },
    {
      "type": "paragraph",
      "html": "The <b>Cartesian product</b> of sets A and B, written <b><span class=\"m\">A × B</span></b>, is the set of all <b>ordered pairs</b> <span class=\"m\">{(a, b) | a ∈ A and b ∈ B}</span>. Order matters: (1, a) ≠ (a, 1). If A has m elements and B has n, then A × B has <b>mn</b> elements. The idea extends to triples: <span class=\"m\">A × B × C = {(a, b, c)}</span>, and <span class=\"m\">(x, y, z) = (x′, y′, z′)</span> only when x = x′, y = y′ and z = z′."
    },
    {
      "type": "example",
      "title": "Worked example: cartesian product",
      "bodyHtml": "<p>Find <span class=\"m\">{1, 2, 3} × {a, b}</span>. True or false: {(1, a), (3, b)} ⊆ {1, 2, 3} × {a, b}? &nbsp;And: {1, 2, 3} ⊆ {1, 2, 3} × {a, b}?</p>",
      "solutionHtml": "<p><span class=\"m\">{1,2,3} × {a,b} =</span> <b>{(1,a), (1,b), (2,a), (2,b), (3,a), (3,b)}</b>: 3 × 2 = 6 ordered pairs (2-tuples).</p>\n      <p><b>True</b>: both (1, a) and (3, b) are members of the product. <b>False</b>: the numbers 1, 2, 3 are not ordered pairs, so they cannot belong to A × B.</p>"
    },
    {
      "type": "accordion",
      "items": [
        {
          "title": "Exercise set C: set operations drill",
          "html": "<ol>\n        <li>Find the intersection of P = {1, 3, 5} and Q = {2, 5, 8}.</li>\n        <li>Find the union of P = {5, 10} and Q = {12, 15, 18}.</li>\n        <li>Find P − Q for P = {1, 3, 5} and Q = {2, 5, 8}.</li>\n        <li>Find the complement of X = {a, b, d} when U = {a, b, c, d, e}.</li>\n        <li>Is P = {2, 4} a subset of Q = {2, 3, 4, 5}?</li>\n        <li>Find X ∥ Y and X ∩ Y for X = {2, 3, 4}, Y = {4, 5, 6}.</li>\n      </ol>\n      <button class=\"reveal-btn\">Show answers</button>\n      <div class=\"solution\"><div class=\"sol-label\">Answers</div>\n        <ol>\n          <li><span class=\"m\">P ∩ Q = {5}</span></li>\n          <li><span class=\"m\">P ∥ Q = {5, 10, 12, 15, 18}</span></li>\n          <li><span class=\"m\">P − Q = {1, 3}</span></li>\n          <li><span class=\"m\">X′ = {c, e}</span></li>\n          <li>Yes: 2 and 4 are both in Q, so <span class=\"m\">P ⊆ Q</span>.</li>\n          <li><span class=\"m\">X ∥ Y = {2, 3, 4, 5, 6}</span>; <span class=\"m\">X ∩ Y = {4}</span></li>\n        </ol>\n      </div>"
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Topic 3 Quiz: Set Theory",
      "count": 8,
      "quizSlug": "03-set-theory"
    }
  ]
};

export default chapter;
