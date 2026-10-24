import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "10-introduction-to-matrix-algebra",
    "number": 10,
    "title": "Introduction to Matrix Algebra",
    "subtitle": "Order & types · Addition, subtraction, transpose · Scalar & matrix multiplication",
    "kind": "topic",
    "words": 982,
    "minutes": 5
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "what-is-a-matrix",
      "text": "What is a matrix?"
    },
    {
      "type": "paragraph",
      "html": "Matrices provide an orderly way of arranging values or functions to enhance the analysis of systems in a systematic manner. A <b>matrix</b> is a rectangular <b>array of numbers</b> arranged in <b>rows and columns</b>. A matrix with <b>m rows and n columns</b> is called an <b>m × n matrix</b> — this is called the <b>order</b> (or size) of the matrix. Each entry is called an <b>element</b>, written <span class=\"m\">a<sub>ij</sub></span> where i is the row and j is the column."
    },
    {
      "type": "paragraph",
      "html": "A = <span class=\"mtx\" style=\"grid-template-columns:repeat(4,auto)\"><span>a₁₁</span><span>a₁₂</span><span>⋮</span><span>a₁ₙ</span><span>a₂₁</span><span>a₂₂</span><span>⋮</span><span>a₂ₙ</span><span>⋯</span><span>⋯</span><span>⋮</span><span>⋯</span><span>aₘ₁</span><span>aₘ₂</span><span>⋮</span><span>aₘₙ</span></span> &nbsp;<span class=\"m\">(m × n order)</span>"
    },
    {
      "type": "example",
      "title": "Worked example — organising data in a matrix",
      "bodyHtml": "<p>Three classes are split into boys and girls. Class A: 15 boys and 17 girls; Class B: 18 boys and 14 girls; Class C: 10 boys and 19 girls. Arrange this data as a 2 × 3 matrix.</p>",
      "solutionHtml": "<div class=\"eq\" style=\"font-style:normal\"><span class=\"mtx\" style=\"grid-template-columns:repeat(3,auto)\"><span>15</span><span>18</span><span>10</span><span>17</span><span>14</span><span>19</span></span>  <span style=\"font-size:.8em;color:var(--muted)\">row 1 = boys, row 2 = girls; one column per class</span></div>\n      <p>The matrix has 2 rows and 3 columns, so its order is <b>2 × 3</b>. For example the element <span class=\"m\">a₁₃</span> = 10 (row 1, column 3) is the number of boys in class C.</p>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "types-of-matrices",
      "text": "Types of matrices"
    },
    {
      "type": "table",
      "head": [
        "Type",
        "Definition",
        "Example"
      ],
      "rows": [
        [
          "<b>Row matrix (vector)</b>",
          "only one row",
          "<span class=\"mtx\" style=\"grid-template-columns:repeat(3,auto)\"><span>2</span><span>−1</span><span>3</span></span> (1×3)"
        ],
        [
          "<b>Column matrix (vector)</b>",
          "only one column",
          "<span class=\"mtx\" style=\"grid-template-columns:auto\"><span>2</span><span>−1</span><span>3</span></span> (3×1)"
        ],
        [
          "<b>Square matrix</b>",
          "same number of rows and columns (m = n)",
          "<span class=\"mtx\" style=\"grid-template-columns:repeat(2,auto)\"><span>1</span><span>2</span><span>3</span><span>4</span></span> (2×2)"
        ],
        [
          "<b>Zero matrix</b>",
          "all elements are 0",
          "<span class=\"mtx\" style=\"grid-template-columns:repeat(2,auto)\"><span>0</span><span>0</span><span>0</span><span>0</span></span>"
        ],
        [
          "<b>Identity matrix I</b>",
          "diagonal elements 1, all others 0",
          "<span class=\"mtx\" style=\"grid-template-columns:repeat(2,auto)\"><span>1</span><span>0</span><span>0</span><span>1</span></span>"
        ],
        [
          "<b>Scalar</b>",
          "a 1 × 1 matrix — an ordinary number",
          "[7]"
        ]
      ],
      "nowrapCols": [
        2
      ]
    },
    {
      "type": "example",
      "title": "Worked example — sizes",
      "bodyHtml": "<p>Determine the sizes of:</p>\n    <div class=\"eq\" style=\"font-style:normal\">A = <span class=\"mtx\" style=\"grid-template-columns:repeat(3,auto)\"><span>2</span><span>−1</span><span>−3</span><span>4</span><span>5</span><span>6</span></span>, &nbsp; B = <span class=\"mtx\" style=\"grid-template-columns:repeat(2,auto)\"><span>2</span><span>1</span><span>7</span><span>−4</span><span>3</span><span>1</span></span>, &nbsp; C = <span class=\"mtx\" style=\"grid-template-columns:repeat(3,auto)\"><span>2</span><span>4</span><span>−5</span><span>−1</span><span>6</span><span>2</span><span>3</span><span>1</span><span>1</span></span></div>",
      "solutionHtml": "<p><b>A</b> has 2 rows and 3 columns → size <b>2 × 3</b>. <b>B</b> has 3 rows and 2 columns → size <b>3 × 2</b>. <b>C</b> has 3 rows and 3 columns → size <b>3 × 3</b>, so C is a <b>square matrix</b>. The vector <span class=\"m\">x = (x₁, x₂, x₃)<sup>T</sup></span> is a <b>column vector</b> (3 × 1).</p>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "equal-matrices",
      "text": "Equal matrices"
    },
    {
      "type": "paragraph",
      "html": "Two matrices A and B are <b>equal</b> if <b>every element in A equals the corresponding element in B</b> — which forces them to have the same order first. Two matrices may be the <b>same order but not equal</b>: <span class=\"m\"><span class=\"mtx\" style=\"grid-template-columns:repeat(2,auto)\"><span>4</span><span>1</span><span>3</span><span>0</span></span> ≠ <span class=\"mtx\" style=\"grid-template-columns:repeat(2,auto)\"><span>4</span><span>1</span><span>3</span><span>1</span></span></span> — the bottom-right elements differ (0 ≠ 1)."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "addition-and-subtraction",
      "text": "Addition and subtraction"
    },
    {
      "type": "paragraph",
      "html": "Matrices can be added or subtracted <b>if and only if they are of the same size</b> — corresponding elements are added or subtracted: <span class=\"m\">C<sub>m,n</sub> = A<sub>m,n</sub> ± B<sub>m,n</sub></span>. Where allowed, addition is <b>commutative</b>: A + B = B + A."
    },
    {
      "type": "example",
      "title": "Worked example — add, subtract, transpose",
      "bodyHtml": "<div class=\"eq\" style=\"font-style:normal\">A = <span class=\"mtx\" style=\"grid-template-columns:repeat(2,auto)\"><span>2</span><span>1</span><span>3</span><span>−4</span></span>, &nbsp; B = <span class=\"mtx\" style=\"grid-template-columns:repeat(2,auto)\"><span>6</span><span>−5</span><span>1</span><span>−7</span></span></div>\n    <p>Find (1) A + B, (2) B − A, (3) Aᵖ.</p>",
      "solutionHtml": "<div class=\"eq\" style=\"font-style:normal\">(1) A + B = <span class=\"mtx\" style=\"grid-template-columns:repeat(2,auto)\"><span>8</span><span>−4</span><span>4</span><span>−11</span></span> &nbsp;&nbsp; (2) B − A = <span class=\"mtx\" style=\"grid-template-columns:repeat(2,auto)\"><span>4</span><span>−6</span><span>−2</span><span>−3</span></span></div>\n      <p>(3) The <b>transpose</b> is obtained by interchanging rows and columns — row 1 of A becomes column 1 of Aᵖ:</p>\n      <div class=\"eq\" style=\"font-style:normal\">Aᵖ = <span class=\"mtx\" style=\"grid-template-columns:repeat(2,auto)\"><span>2</span><span>3</span><span>1</span><span>−4</span></span></div>\n      <p>Check commutativity yourself: B + A gives the same matrix as A + B.</p>"
    },
    {
      "type": "example",
      "title": "Worked example — transpose of a 3 × 2",
      "bodyHtml": "<div class=\"eq\" style=\"font-style:normal\">A = <span class=\"mtx\" style=\"grid-template-columns:repeat(2,auto)\"><span>2</span><span>−1</span><span>−3</span><span>4</span><span>5</span><span>6</span></span> → Aᵖ = ?</div>",
      "solutionHtml": "<div class=\"eq\" style=\"font-style:normal\">Aᵖ = <span class=\"mtx\" style=\"grid-template-columns:repeat(3,auto)\"><span>2</span><span>−3</span><span>5</span><span>−1</span><span>4</span><span>6</span></span> &nbsp;<span class=\"m\">(now 2 × 3)</span></div>\n      <p>Columns become rows: the first column (2, −3, 5) of A is the first row of Aᵖ.</p>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "multiplication-by-a-scalar",
      "text": "Multiplication by a scalar"
    },
    {
      "type": "paragraph",
      "html": "If <span class=\"m\">k</span> is a constant scalar, the matrix <b>kA</b> has <b>every entry multiplied by k</b>:"
    },
    {
      "type": "paragraph",
      "html": "A = <span class=\"mtx\" style=\"grid-template-columns:repeat(2,auto)\"><span>4</span><span>3</span><span>−1</span><span>0</span></span> → 5A = <span class=\"mtx\" style=\"grid-template-columns:repeat(2,auto)\"><span>20</span><span>15</span><span>−5</span><span>0</span></span>, &nbsp; <span class=\"frac\" style=\"font-style:normal\"><span>1</span><span>5</span></span>A = <span class=\"mtx\" style=\"grid-template-columns:repeat(2,auto)\"><span><span class=\"frac\"><span>4</span><span>5</span></span></span><span><span class=\"frac\"><span>3</span><span>5</span></span></span><span>−<span class=\"frac\"><span>1</span><span>5</span></span></span><span>0</span></span>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "multiplication-of-two-matrices",
      "text": "Multiplication of two matrices"
    },
    {
      "type": "paragraph",
      "html": "Two matrices can be multiplied <b>only if the number of columns of the first equals the number of rows of the second</b>. The product <span class=\"m\">A<sub>m,n</sub> × B<sub>n,k</sub> = C<sub>m,k</sub></span> takes its row count from the first matrix and its column count from the second. Each element <span class=\"m\">c<sub>ij</sub></span> is the <b>sum of the products</b> of the elements from <b>row i of A</b> and <b>column j of B</b>. Crucially, <span class=\"m\">AB ≠ BA</span> in general — matrix multiplication is <b>not commutative</b>."
    },
    {
      "type": "callout",
      "variant": "warn",
      "title": "There is no division of matrices",
      "html": "Matrix inversion (next topic) plays the role of division: dividing by a matrix is defined as multiplying by its inverse."
    },
    {
      "type": "example",
      "title": "Worked example — possible orders of multiplication",
      "bodyHtml": "<div class=\"eq\" style=\"font-style:normal\">A = <span class=\"mtx\" style=\"grid-template-columns:repeat(3,auto)\"><span>2</span><span>−3</span><span>5</span><span>−1</span><span>4</span><span>6</span></span> (2×3), &nbsp; B = <span class=\"mtx\" style=\"grid-template-columns:repeat(2,auto)\"><span>2</span><span>1</span><span>7</span><span>−4</span><span>3</span><span>1</span></span> (3×2)</div>\n    <p>Determine the possible orders of multiplication and compute C = AB.</p>",
      "solutionHtml": "<p><b>AB</b>: (2×3)(3×2) — inner numbers match (3 = 3), so AB is defined and is <b>2 × 2</b>.<br><b>BA</b>: (3×2)(2×3) — inner numbers match (2 = 2), so BA is also defined and is <b>3 × 3</b>. Both exist but they are different sizes!</p>\n      <p>Each element of C pairs a <b>row of A</b> with a <b>column of B</b>:</p>\n      <div class=\"eq\" style=\"font-style:normal\">c₁₁ = (2)(2) + (−3)(7) + (5)(3) = 4 − 21 + 15 = −2<br>c₁₂ = (2)(1) + (−3)(−4) + (5)(1) = 2 + 12 + 5 = 19<br>c₂₁ = (−1)(2) + (4)(7) + (6)(3) = −2 + 28 + 18 = 44<br>c₂₂ = (−1)(1) + (4)(−4) + (6)(1) = −1 −16 + 6 = −11</div>\n      <div class=\"eq\" style=\"font-style:normal\">C = AB = <span class=\"mtx\" style=\"grid-template-columns:repeat(2,auto)\"><span>−2</span><span>19</span><span>44</span><span>−11</span></span></div>"
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "Memory hook",
      "html": "Write the orders side by side: <b>(m × <span style=\"color:var(--primary)\">n</span>)(<span style=\"color:var(--primary)\">n</span> × k)</b>. If the inner numbers match, the product exists with the outer numbers as its order. If they don't match, the product does not exist."
    },
    {
      "type": "quiz",
      "title": "Topic 10 Quiz — Matrix Algebra",
      "count": 7,
      "quizSlug": "10-introduction-to-matrix-algebra"
    }
  ]
};

export default chapter;
