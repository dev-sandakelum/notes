import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "14-master-formula-sheet",
    "number": 14,
    "title": "Master formula sheet",
    "subtitle": "Click any card to flip it, perfect for last-minute revision",
    "kind": "cheatsheet",
    "words": 525,
    "minutes": 3
  },
  "blocks": [
    {
      "type": "paragraph",
      "html": "Every exam-critical formula from the course, condensed onto flip cards. <b>Click a card</b> to see the formula; click again to hide it. Work through them until you can recall the back of every card from the front alone."
    },
    {
      "type": "flashcards",
      "cards": [
        {
          "front": "<b>Decimal → fraction</b><small>e.g. 0.75, 1.2, 0.333…</small>",
          "back": "0.75 = 75/100 = 3/4<br>1.2 = 12/10 = 6/5<br>0.333… = 1/3",
          "category": "Numbers"
        },
        {
          "front": "<b>Primes below 50</b><small>and the first ones after</small>",
          "back": "2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47<br>→ then 53, 59, 61, 67, 71",
          "category": "Numbers"
        },
        {
          "front": "<b>Perfect squares</b><small>expand without FOIL-ing</small>",
          "back": "(a+b)² = a² + 2ab + b²<br>(a−b)² = a² − 2ab + b²<br>a² − b² = (a+b)(a−b)",
          "category": "Algebra"
        },
        {
          "front": "<b>Cross-multiplication</b><small>a/b = c/d → ?</small>",
          "back": "a·d = b·c<br><small>e.g. (2x+1)/3 = (x−2)/4 → 4(2x+1) = 3(x−2)</small>",
          "category": "Algebra"
        },
        {
          "front": "<b>Subsets &amp; Cartesian product</b>",
          "back": "n elements → 2ⁿ subsets<br>|A×B| = |A|·|B|",
          "category": "Sets"
        },
        {
          "front": "<b>The six laws</b><small>know all six cold</small>",
          "back": "aʰ·aⁿ = aʰ⁺ⁿ &nbsp;·&nbsp; aʰ÷aⁿ = aʰ⁻ⁿ<br>(aʰ)ⁿ = aʰⁿ &nbsp;·&nbsp; a⁰ = 1<br>a<sup>−ⁿ</sup> = 1/aⁿ &nbsp;·&nbsp; a<sup>m/n</sup> = ⁿ√aʰ",
          "category": "Indices"
        },
        {
          "front": "<b>Standard form</b>",
          "back": "a × 10ⁿ, 1 ≤ a &lt; 10<br>multiply: add n's · divide: subtract n's",
          "category": "Scientific notation"
        },
        {
          "front": "<b>Definition &amp; laws</b><small>the definition IS the law</small>",
          "back": "log<sub>b</sub> n = p ⇔ b⇨ = n<br>log xy = log x + log y<br>log(x/y) = log x − log y<br>log xⁿ = n log x",
          "category": "Logarithms"
        },
        {
          "front": "<b>Special values</b>",
          "back": "log<sub>a</sub> 1 = 0 · log<sub>a</sub> a = 1<br>lg = log₁₀ · ln = log<sub>e</sub> (e ≈ 2.7183)",
          "category": "Logarithms"
        },
        {
          "front": "<b>Slope &amp; equation</b>",
          "back": "m = (y₂−y₁)/(x₂−x₁)<br>y = mx + c · y − y₁ = m(x − x₁)",
          "category": "Straight lines"
        },
        {
          "front": "<b>Parallel &amp; perpendicular</b>",
          "back": "parallel: m₁ = m₂<br>perpendicular: m₁·m₂ = −1",
          "category": "Straight lines"
        },
        {
          "front": "<b>The quadratic formula</b><small>the single most important card</small>",
          "back": "x = (−b ± √(b²−4ac)) / 2a<br><small>for ax² + bx + c = 0, a ≠ 0</small>",
          "category": "Quadratics"
        },
        {
          "front": "<b>Discriminant</b><small>nature of the roots</small>",
          "back": "Δ = b² − 4ac<br>Δ &gt; 0: two real roots<br>Δ = 0: one repeated root<br>Δ &lt; 0: no real roots",
          "category": "Quadratics"
        },
        {
          "front": "<b>Vertex &amp; axis</b>",
          "back": "axis: x = −b/2a<br>vertex (−b/2a, c − b²/4a)<br>a &gt; 0 min · a &lt; 0 max",
          "category": "Quadratic graphs"
        },
        {
          "front": "<b>SOH · CAH · TOA</b>",
          "back": "sin = opp/hyp<br>cos = adj/hyp<br>tan = opp/adj",
          "category": "Trigonometry"
        },
        {
          "front": "<b>Pythagoras &amp; identity</b>",
          "back": "a² + b² = c²<br>sin²θ + cos²θ = 1<br>1 + tan²θ = sec²θ",
          "category": "Trigonometry"
        },
        {
          "front": "<b>Exact values</b><small>sin / cos / tan</small>",
          "back": "30°: 1/2 · √3/2 · 1/√3<br>45°: √2/2 · √2/2 · 1<br>60°: √3/2 · 1/2 · √3",
          "category": "Trigonometry"
        },
        {
          "front": "<b>CAST rule</b><small>which ratios are positive</small>",
          "back": "QIV: Cos · QI: All · QII: Sin · QIII: Tan<br><small>(anticlockwise from fourth quadrant)</small>",
          "category": "Trigonometry"
        },
        {
          "front": "<b>Compound angles</b>",
          "back": "sin(A±B) = sinA cosB ± cosA sinB<br>cos(A±B) = cosA cosB ∓ sinA sinB",
          "category": "Trigonometry"
        },
        {
          "front": "<b>Double angles</b>",
          "back": "sin2A = 2 sinA cosA<br>cos2A = cos²A − sin²A<br>tan2A = 2tanA/(1−tan²A)",
          "category": "Trigonometry"
        },
        {
          "front": "<b>2×2 determinant &amp; inverse</b>",
          "back": "det = ad − bc<br>A⁻¹ = 1/(ad−bc) · [d −b; −c a]",
          "category": "Matrices"
        },
        {
          "front": "<b>3×3 inverse steps</b>",
          "back": "det → cofactors Cₑₒ = (−1)<sup>i+j</sup>Mₑₒ<br>→ adj(A) = (cofactor matrix)ᵖ<br>→ A⁻¹ = adj(A)/det(A)",
          "category": "Matrices"
        },
        {
          "front": "<b>Solving AX = B</b>",
          "back": "X = A⁻¹B<br><small>requires det(A) ≠ 0</small>",
          "category": "Matrices"
        },
        {
          "front": "<b>Magnitude &amp; unit vector</b>",
          "back": "‖a‖ = √(x²+y²)<br>â = a/‖a‖<br>‖λa‖ = |λ|‖a‖",
          "category": "Vectors"
        },
        {
          "front": "<b>Component operations</b>",
          "back": "a+b = (x₁+x₂, y₁+y₂)<br>a−b = (x₁−x₂, y₁−y₂)<br>b−a = b+(−a)",
          "category": "Vectors"
        }
      ]
    }
  ]
};

export default chapter;
