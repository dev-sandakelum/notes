import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "11-inverse-of-a-matrix",
    "number": 11,
    "title": "Inverse of a matrix",
    "subtitle": "Determinants · Minors & cofactors · Adjoint · Computing A⁻¹ · Solving systems",
    "kind": "topic",
    "words": 744,
    "minutes": 4
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "the-determinant-of-a-2-2-matrix",
      "text": "The determinant of a 2 × 2 matrix"
    },
    {
      "type": "paragraph",
      "html": "The <b>determinant</b> turns a square matrix into a single number. For a 2 × 2 matrix it is “cross-multiply and subtract”:"
    },
    {
      "type": "paragraph",
      "html": "A = <span class=\"mtx\" style=\"grid-template-columns:repeat(2,auto)\"><span>a</span><span>b</span><span>c</span><span>d</span></span> &nbsp;→&nbsp; det(A) = |A| = <span class=\"mtx det\" style=\"grid-template-columns:repeat(2,auto)\"><span>a</span><span>b</span><span>c</span><span>d</span></span> = ad − bc"
    },
    {
      "type": "example",
      "title": "Worked example: 2 × 2 determinant",
      "bodyHtml": "<p>Find det(A) for</p>\n    <div class=\"eq\" style=\"font-style:normal\">A = <span class=\"mtx\" style=\"grid-template-columns:repeat(2,auto)\"><span>3</span><span>4</span><span>1</span><span>2</span></span></div>",
      "solutionHtml": "<div class=\"eq\" style=\"font-style:normal\">det(A) = (3)(2) − (4)(1) = 6 − 4 = <b>2</b></div>\n      <p>Since det(A) ≠ 0, A is <b>non-singular</b> and the inverse exists. If det(A) = 0 the matrix is <b>singular</b> and has <b>no inverse</b>.</p>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "inverse-of-a-2-2-matrix",
      "text": "Inverse of a 2 × 2 matrix"
    },
    {
      "type": "paragraph",
      "html": "The inverse <span class=\"m\">A⁻¹</span> is the matrix satisfying <span class=\"m\">AA⁻¹ = A⁻¹A = I</span>. For a 2 × 2 matrix there is a shortcut: <b>swap the diagonal, negate the off-diagonal, divide by the determinant</b>."
    },
    {
      "type": "paragraph",
      "html": "A⁻¹ = <span class=\"frac\"><span>1</span><span>ad − bc</span></span> <span class=\"mtx\" style=\"grid-template-columns:repeat(2,auto)\"><span>d</span><span>−b</span><span>−c</span><span>a</span></span>"
    },
    {
      "type": "example",
      "title": "Worked example: 2 × 2 inverse",
      "bodyHtml": "<p>Find the inverse of</p>\n    <div class=\"eq\" style=\"font-style:normal\">A = <span class=\"mtx\" style=\"grid-template-columns:repeat(2,auto)\"><span>3</span><span>4</span><span>1</span><span>2</span></span></div>",
      "solutionHtml": "<p>det(A) = 2 (from the previous example), so:</p>\n      <div class=\"eq\" style=\"font-style:normal\">A⁻¹ = <span class=\"frac\"><span>1</span><span>2</span></span> <span class=\"mtx\" style=\"grid-template-columns:repeat(2,auto)\"><span>2</span><span>−4</span><span>−1</span><span>3</span></span> = <span class=\"mtx\" style=\"grid-template-columns:repeat(2,auto)\"><span>1</span><span>−2</span><span>−<span class=\"frac\"><span>1</span><span>2</span></span></span><span><span class=\"frac\"><span>3</span><span>2</span></span></span></span></div>\n      <p><b>Check:</b> A A⁻¹ should equal I₂. Row 1 × column 1: (3)(1) + (4)(−½) = 3 − 2 = 1 ✓</p>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "3-3-determinants-expansion-by-cofactors",
      "text": "3 × 3 determinants: expansion by cofactors"
    },
    {
      "type": "paragraph",
      "html": "For a 3 × 3 matrix, expand along any row (usually the first). Multiply each element by the determinant of the <b>minor</b>; the 2 × 2 matrix left after deleting that element's row and column, with alternating signs (+ − +):"
    },
    {
      "type": "paragraph",
      "html": "<span class=\"mtx det\" style=\"grid-template-columns:repeat(3,auto)\"><span>a</span><span>b</span><span>c</span><span>d</span><span>e</span><span>f</span><span>g</span><span>h</span><span>i</span></span> = a<span class=\"mtx det\" style=\"grid-template-columns:repeat(2,auto)\"><span>e</span><span>f</span><span>h</span><span>i</span></span> − b<span class=\"mtx det\" style=\"grid-template-columns:repeat(2,auto)\"><span>d</span><span>f</span><span>g</span><span>i</span></span> + c<span class=\"mtx det\" style=\"grid-template-columns:repeat(2,auto)\"><span>d</span><span>e</span><span>g</span><span>h</span></span>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "minors-cofactors-and-the-adjoint",
      "text": "Minors, cofactors and the adjoint"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">Minor Mₑₒ</div><div class=\"f-b\">determinant left after deleting row i and column j</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Cofactor Cₑₒ</div><div class=\"f-b\">Cₑₒ = (−1)<sup>i+j</sup> Mₑₒ</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Cofactor matrix</div><div class=\"f-b\">all cofactors arranged in matrix form</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Adjoint adj(A)</div><div class=\"f-b\">adj(A) = (cofactor matrix)ᵖ, transpose.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Inverse</div><div class=\"f-b\">A⁻¹ = <span class=\"frac\"><span>1</span><span>det(A)</span></span> adj(A)</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Sign pattern</div><div class=\"f-b\" style=\"font-style:normal\"><span class=\"mtx\" style=\"grid-template-columns:repeat(3,auto)\"><span>+</span><span>−</span><span>+</span><span>−</span><span>+</span><span>−</span><span>+</span><span>−</span><span>+</span></span></div></div>\n  </div>",
      "alt": "Formula reference cards"
    },
    {
      "type": "example",
      "title": "Worked example: full 3 × 3 inverse (exam classic)",
      "bodyHtml": "<div class=\"eq\" style=\"font-style:normal\">A = <span class=\"mtx\" style=\"grid-template-columns:repeat(3,auto)\"><span>5</span><span>4</span><span>2</span><span>2</span><span>3</span><span>1</span><span>3</span><span>−2</span><span>−1</span></span></div>\n    <p>(i) Compute det(A). (ii) Find the cofactor matrix. (iii) Find adj(A). (iv) Find A⁻¹.</p>",
      "solutionHtml": "<p><b>(i) Determinant</b>: expand along the first row:</p>\n      <div class=\"eq\" style=\"font-style:normal\">det(A) = 5<span class=\"mtx det\" style=\"grid-template-columns:repeat(2,auto)\"><span>3</span><span>1</span><span>−2</span><span>−1</span></span> − 4<span class=\"mtx det\" style=\"grid-template-columns:repeat(2,auto)\"><span>2</span><span>1</span><span>3</span><span>−1</span></span> + 2<span class=\"mtx det\" style=\"grid-template-columns:repeat(2,auto)\"><span>2</span><span>3</span><span>3</span><span>−2</span></span></div>\n      <div class=\"eq\" style=\"font-style:normal\">= 5(3·(−1) − 1·(−2)) − 4(2·(−1) − 1·3) + 2(2·(−2) − 3·3)<br>= 5(−1) − 4(−5) + 2(−13) = −5 + 20 − 26 = <b>−11</b></div>\n      <p><b>(ii) Cofactors</b>, each uses Cₑₒ = (−1)<sup>i+j</sup>Mₑₒ. For example <span class=\"m\">C₁₁ = +</span>(3·(−1) − 1·(−2)) = −1, <span class=\"m\">C₁₂ = −</span>(2·(−1) − 1·3) = 5, <span class=\"m\">C₁₃ = +</span>(2·(−2) − 3·3) = −13. Computing all nine:</p>\n      <div class=\"eq\" style=\"font-style:normal\">C = <span class=\"mtx\" style=\"grid-template-columns:repeat(3,auto)\"><span>−1</span><span>5</span><span>−13</span><span>0</span><span>−11</span><span>22</span><span>−2</span><span>−1</span><span>7</span></span></div>\n      <p><b>(iii) Adjoint</b>: transpose the cofactor matrix:</p>\n      <div class=\"eq\" style=\"font-style:normal\">adj(A) = Cᵖ = <span class=\"mtx\" style=\"grid-template-columns:repeat(3,auto)\"><span>−1</span><span>0</span><span>−2</span><span>5</span><span>−11</span><span>−1</span><span>−13</span><span>22</span><span>7</span></span></div>\n      <p><b>(iv) Inverse</b>: divide by the determinant:</p>\n      <div class=\"eq\" style=\"font-style:normal\">A⁻¹ = <span class=\"frac\"><span>1</span><span>−11</span></span> <span class=\"mtx\" style=\"grid-template-columns:repeat(3,auto)\"><span>−1</span><span>0</span><span>−2</span><span>5</span><span>−11</span><span>−1</span><span>−13</span><span>22</span><span>7</span></span> = <span class=\"mtx\" style=\"grid-template-columns:repeat(3,auto)\"><span><span class=\"frac\"><span>1</span><span>11</span></span></span><span>0</span><span><span class=\"frac\"><span>2</span><span>11</span></span></span><span>−<span class=\"frac\"><span>5</span><span>11</span></span></span><span>1</span><span><span class=\"frac\"><span>1</span><span>11</span></span></span><span><span class=\"frac\"><span>13</span><span>11</span></span></span><span>−2</span><span>−<span class=\"frac\"><span>7</span><span>11</span></span></span></span></div>\n      <p>Multiply out any row-column pair to verify AA⁻¹ = I₃.</p>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "solving-linear-systems-with-the-inverse",
      "text": "Solving linear systems with the inverse"
    },
    {
      "type": "paragraph",
      "html": "A system of equations can be written in matrix form as <b>AX = B</b>, where X holds the unknowns. If A is non-singular, multiply both sides by A⁻¹ on the left: <b>X = A⁻¹B</b>. This is the matrix method the course builds toward; it scales to any number of equations."
    },
    {
      "type": "example",
      "title": "Worked example: matrix method",
      "bodyHtml": "<p>Solve using matrices: <span class=\"m\">3x + 4y = 18</span>, <span class=\"m\">x + 2y = 8</span>.</p>",
      "solutionHtml": "<div class=\"eq\" style=\"font-style:normal\"><span class=\"mtx\" style=\"grid-template-columns:repeat(2,auto)\"><span>3</span><span>4</span><span>1</span><span>2</span></span><span class=\"mtx\" style=\"grid-template-columns:auto\"><span>x</span><span>y</span></span> = <span class=\"mtx\" style=\"grid-template-columns:auto\"><span>18</span><span>8</span></span></div>\n      <p>We already found the inverse of this coefficient matrix: <span class=\"m\">A⁻¹ = ½<span class=\"mtx\" style=\"grid-template-columns:repeat(2,auto)\"><span>2</span><span>−4</span><span>−1</span><span>3</span></span></span>. Then:</p>\n      <div class=\"eq\" style=\"font-style:normal\"><span class=\"mtx\" style=\"grid-template-columns:auto\"><span>x</span><span>y</span></span> = <span class=\"frac\"><span>1</span><span>2</span></span><span class=\"mtx\" style=\"grid-template-columns:repeat(2,auto)\"><span>2</span><span>−4</span><span>−1</span><span>3</span></span><span class=\"mtx\" style=\"grid-template-columns:auto\"><span>18</span><span>8</span></span> = <span class=\"frac\"><span>1</span><span>2</span></span><span class=\"mtx\" style=\"grid-template-columns:auto\"><span>4</span><span>6</span></span> = <span class=\"mtx\" style=\"grid-template-columns:auto\"><span>2</span><span>3</span></span></div>\n      <p><b>x = 2, y = 3</b>. Check: 3(2) + 4(3) = 18 ✓ and 2 + 2(3) = 8 ✓</p>"
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Exam checklist for A⁻¹",
      "html": "1⃣ Is the matrix square? → 2⃣ Compute det(A): if 0, stop: no inverse. → 3⃣ Cofactor each element with correct signs. → 4⃣ Transpose to get adj(A). → 5⃣ Multiply by 1/det(A). → 6⃣ Verify with AA⁻¹ = I on at least one entry."
    },
    {
      "type": "quiz",
      "title": "Topic 11 Quiz: Inverse of a Matrix",
      "count": 6,
      "quizSlug": "11-inverse-of-a-matrix"
    }
  ]
};

export default chapter;
