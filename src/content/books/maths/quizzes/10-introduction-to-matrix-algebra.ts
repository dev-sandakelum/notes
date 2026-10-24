import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "10-introduction-to-matrix-algebra",
  "title": "Topic 10 Quiz: Matrix Algebra",
  "questions": [
    {
      "prompt": "1. A matrix with 3 rows and 2 columns has order:",
      "options": [
        "3 × 3",
        "3 × 2",
        "2 × 3",
        "6"
      ],
      "answer": 1,
      "explanation": "Order is always rows × columns: 3 × 2."
    },
    {
      "prompt": "2. Which matrix is a square matrix?",
      "options": [
        "2 × 3",
        "1 × 5",
        "4 × 4",
        "3 × 1"
      ],
      "answer": 2,
      "explanation": "Square means the same number of rows and columns (m = n)."
    },
    {
      "prompt": "3. The identity matrix I₂ is:",
      "options": [
        "<span class=\"mtx\" style=\"grid-template-columns:repeat(2,auto)\"><span>1</span><span>0</span><span>0</span><span>1</span></span>",
        "<span class=\"mtx\" style=\"grid-template-columns:repeat(2,auto)\"><span>0</span><span>1</span><span>1</span><span>0</span></span>",
        "<span class=\"mtx\" style=\"grid-template-columns:repeat(2,auto)\"><span>1</span><span>1</span><span>1</span><span>1</span></span>",
        "<span class=\"mtx\" style=\"grid-template-columns:repeat(2,auto)\"><span>0</span><span>0</span><span>0</span><span>0</span></span>"
      ],
      "answer": 0,
      "explanation": "Identity: 1s on the main diagonal, 0s elsewhere."
    },
    {
      "prompt": "4. Matrices can be added only when:",
      "options": [
        "both are square",
        "they have equal elements",
        "columns of A = rows of B",
        "they have the same order"
      ],
      "answer": 3,
      "explanation": "Addition works element-wise, so both matrices must match in size."
    },
    {
      "prompt": "5. If A is 2 × 3 and B is 3 × 4, then AB has order:",
      "options": [
        "3 × 3",
        "2 × 4",
        "4 × 2",
        "AB does not exist"
      ],
      "answer": 1,
      "explanation": "Inner numbers 3 = 3 match; the product takes the outer numbers: 2 × 4."
    },
    {
      "prompt": "6. Matrix multiplication is generally:",
      "options": [
        "commutative: AB = BA always",
        "undefined for square matrices",
        "not commutative: AB ≠ BA in general",
        "the same as division"
      ],
      "answer": 2,
      "explanation": "Order matters in matrix multiplication. AB and BA can even have different sizes."
    },
    {
      "prompt": "7. The transpose of a matrix is obtained by:",
      "options": [
        "interchanging rows and columns",
        "negating every element",
        "multiplying by the identity",
        "reversing the order of rows only"
      ],
      "answer": 0,
      "explanation": "Row i of A becomes column i of Aᵖ."
    }
  ]
};

export default quiz;
