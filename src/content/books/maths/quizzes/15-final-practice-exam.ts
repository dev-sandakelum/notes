import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "15-final-practice-exam",
  "title": "Final practice exam",
  "questions": [
    {
      "prompt": "1. Which number is irrational?",
      "options": [
        "0.75",
        "√16",
        "√7",
        "0.121212…"
      ],
      "answer": 2,
      "explanation": "7 is not a perfect square, so √7 is non-terminating and non-repeating. The others are 3/4, 4 and 12/99 = 4/33."
    },
    {
      "prompt": "2. Factorise completely: <span class=\"m\">xy − 3x + 2y − 6</span>",
      "options": [
        "(x + 2)(y − 3)",
        "(x + 2)(y − 3)",
        "(x − 3)(y + 2)",
        "(x − 2)(y + 3)"
      ],
      "answer": 1,
      "explanation": "Group: x(y−3) + 2(y−3) = (x+2)(y−3)."
    },
    {
      "prompt": "3. If U = {1,…,10}, A = {2,4,6,8}, B = {4,5,6}, then A ∩ B′ =",
      "options": [
        "{4, 6}",
        "{2, 4, 6, 8}",
        "{2, 8}",
        "{2, 8} ∥ nothing = {2, 8}"
      ],
      "answer": 3,
      "explanation": "B′ = {1,2,3,7,8,9,10}; shared with A = {2, 8}."
    },
    {
      "prompt": "4. Simplify: <span class=\"m\">(2a³b²)² ÷ (4a⁴b)</span>",
      "options": [
        "a²b³",
        "2a²b³",
        "a⁴b⁴",
        "<span class=\"frac\"><span>a²b³</span><span>2</span></span>"
      ],
      "answer": 0,
      "explanation": "(2a³b²)² = 4a⁶b⁴; dividing by 4a⁴b subtracts indices: a²b³."
    },
    {
      "prompt": "5. Solve: <span class=\"m\">log₃ 81 = x + 1</span>",
      "options": [
        "x = 2",
        "x = 4",
        "x = 3",
        "x = 27"
      ],
      "answer": 2,
      "explanation": "log₃81 = 4 (since 3⁴ = 81), so x + 1 = 4 → x = 3."
    },
    {
      "prompt": "6. The domain of <span class=\"m\">f(x) = <span class=\"frac\"><span>5</span><span>x − 7</span></span></span> is:",
      "options": [
        "x ≥ 7",
        "all reals except 7",
        "x &gt; 0",
        "all reals"
      ],
      "answer": 1,
      "explanation": "x = 7 zeroes the denominator."
    },
    {
      "prompt": "7. The line through (0, 3) and (2, 11) has equation:",
      "options": [
        "y = 3x + 2",
        "y = 2x + 3",
        "y = 8x + 3",
        "y = 4x + 3"
      ],
      "answer": 3,
      "explanation": "m = (11−3)/2 = 4 and the intercept is c = 3 (the point (0, 3))."
    },
    {
      "prompt": "8. Solve by factorising: <span class=\"m\">x² − 7x + 10 = 0</span>",
      "options": [
        "x = 2, 5",
        "x = −2, −5",
        "x = 1, 10",
        "x = 3, 4"
      ],
      "answer": 0,
      "explanation": "(−2)(−5) = 10 and −2 − 5 = −7: (x−2)(x−5) = 0."
    },
    {
      "prompt": "9. For <span class=\"m\">y = x² − 4x + 9</span>, the vertex is:",
      "options": [
        "(2, 5)",
        "(−2, 21)",
        "(2, 5) only",
        "(4, 9)"
      ],
      "answer": 2,
      "explanation": "x = −b/2a = 2; y = 4 − 8 + 9 = 5. Since a = 1 &gt; 0 it is a minimum at (2, 5)."
    },
    {
      "prompt": "10. Solving <span class=\"m\">2x + y = 7</span>, <span class=\"m\">x − y = 2</span> gives:",
      "options": [
        "x = 3, y = 1",
        "x = 3, y = 1",
        "x = 2, y = 3",
        "x = 1, y = 5"
      ],
      "answer": 1,
      "explanation": "Add: 3x = 9 → x = 3, then y = 7 − 6 = 1."
    },
    {
      "prompt": "11. det <span class=\"mtx\" style=\"grid-template-columns:repeat(2,auto)\"><span>4</span><span>6</span><span>2</span><span>3</span></span> = ?",
      "options": [
        "24",
        "26",
        "−26",
        "0"
      ],
      "answer": 3,
      "explanation": "(4)(3) − (6)(2) = 12 − 12 = 0, a singular matrix, so no inverse exists."
    },
    {
      "prompt": "12. A girl walks 9 m west then 12 m north. Her displacement magnitude is:",
      "options": [
        "15 m",
        "21 m",
        "7.5 m",
        "108 m"
      ],
      "answer": 0,
      "explanation": "√(9² + 12²) = √225 = 15 (a 3-4-5 triangle × 3)."
    },
    {
      "prompt": "13. <span class=\"m\">cos 300°</span> equals:",
      "options": [
        "−<span class=\"frac\"><span>1</span><span>2</span></span>",
        "−<span class=\"frac\"><span><span class=\"sqrt\"><span class=\"r\">3</span></span></span><span>2</span></span>",
        "+<span class=\"frac\"><span>1</span><span>2</span></span>",
        "+<span class=\"frac\"><span><span class=\"sqrt\"><span class=\"r\">3</span></span></span><span>2</span></span>"
      ],
      "answer": 2,
      "explanation": "300° is Quadrant IV (C of CAST): cosine positive; reference angle 60° → cos 60° = 1/2."
    },
    {
      "prompt": "14. If <span class=\"m\">2ᵁ⁺¹ = 32</span>, then x =",
      "options": [
        "3",
        "4",
        "5",
        "15"
      ],
      "answer": 1,
      "explanation": "32 = 2⁵ → x + 1 = 5 → x = 4."
    },
    {
      "prompt": "15. Which statement is <b>FALSE</b>?",
      "options": [
        "log(x²) = 2 log x",
        "A ∩ B ⊆ A ∥ B",
        "7⁰ = 1",
        "AB = BA for all square matrices A, B"
      ],
      "answer": 3,
      "explanation": "Matrix multiplication is not commutative. AB and BA generally differ. The other three are true statements."
    }
  ]
};

export default quiz;
