import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "11-inverse-of-a-matrix",
  "title": "Topic 11 Quiz — Inverse of a Matrix",
  "questions": [
    {
      "prompt": "1. det<span class=\"mtx\" style=\"grid-template-columns:repeat(2,auto)\"><span>2</span><span>5</span><span>1</span><span>3</span></span> = ?",
      "options": [
        "11",
        "−1",
        "1",
        "6"
      ],
      "answer": 2,
      "explanation": "(2)(3) − (5)(1) = 6 − 5 = 1."
    },
    {
      "prompt": "2. A matrix with determinant 0 is called:",
      "options": [
        "non-singular",
        "singular (no inverse)",
        "an identity matrix",
        "symmetric"
      ],
      "answer": 1,
      "explanation": "det = 0 → singular → A⁻¹ does not exist (division by det would fail)."
    },
    {
      "prompt": "3. For A⁻¹ to exist, we need:",
      "options": [
        "A square and det(A) ≠ 0",
        "A to be any 2 × 3 matrix",
        "all elements positive",
        "A = I"
      ],
      "answer": 0,
      "explanation": "Only square, non-singular matrices are invertible."
    },
    {
      "prompt": "4. The cofactor Cₑₒ is defined as:",
      "options": [
        "Mₑₒ",
        "−Mₑₒ",
        "Mₑₒ²",
        "(−1)<sup>i+j</sup> Mₑₒ"
      ],
      "answer": 3,
      "explanation": "The sign alternates in a checkerboard pattern starting with + at (1,1)."
    },
    {
      "prompt": "5. The adjoint adj(A) equals:",
      "options": [
        "the cofactor matrix",
        "the transpose of the cofactor matrix",
        "det(A) × A",
        "the transpose of A"
      ],
      "answer": 1,
      "explanation": "adj(A) = (cofactor matrix)ᵖ — forgetting this transpose is the classic error."
    },
    {
      "prompt": "6. The system AX = B is solved by:",
      "options": [
        "X = BA⁻¹",
        "X = B/A",
        "X = A⁻¹B",
        "X = AB"
      ],
      "answer": 2,
      "explanation": "Multiply on the LEFT by A⁻¹: A⁻¹(AX) = A⁻¹B → X = A⁻¹B. (BA⁻¹ is usually not even defined!)"
    }
  ]
};

export default quiz;
