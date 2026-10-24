import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "02-algebra-calculations-and-equations",
  "title": "Topic 2 Quiz — Algebra",
  "questions": [
    {
      "prompt": "1. 2 + 3 × 4 = ?",
      "options": [
        "20",
        "24",
        "14",
        "11"
      ],
      "answer": 2,
      "explanation": "BODMAS: multiply first (3×4=12), then add: 2+12=14."
    },
    {
      "prompt": "2. Factorise 6a + 12b − 18.",
      "options": [
        "6(a + 2b) − 18",
        "6(a + 2b − 3)",
        "3(2a + 4b − 6)",
        "6(a + 12b − 3)"
      ],
      "answer": 1,
      "explanation": "HCF of all three terms is 6 (not 3): 6a≄6=a, 12b≄6=2b, −18≄6=−3."
    },
    {
      "prompt": "3. Expand (x + 3)(x + 4).",
      "options": [
        "x² + 7x + 12",
        "x² + 12x + 7",
        "x² + 7x − 12",
        "x² + 34x + 12"
      ],
      "answer": 0,
      "explanation": "FOIL: x·x = x², x·4 = 4x, 3·x = 3x, 3·4 = 12 → x² + 7x + 12."
    },
    {
      "prompt": "4. Factorise ax + ay + 3x + 3y by grouping.",
      "options": [
        "(a + y)(x + 3)",
        "(x + y)(a + 3)",
        "(a + 3y)(x + 1)",
        "(a + 3)(x + y)"
      ],
      "answer": 3,
      "explanation": "a(x + y) + 3(x + y) = (a + 3)(x + y)."
    },
    {
      "prompt": "5. Solve 5x − 7 = 18.",
      "options": [
        "x = 4",
        "x = 5",
        "x = 6",
        "x = 25"
      ],
      "answer": 1,
      "explanation": "5x = 25, so x = 5. Check: 5(5) − 7 = 18 ✓"
    },
    {
      "prompt": "6. Solve <span class=\"m\"><span class=\"frac\"><span>2x + 1</span><span>3</span></span> = <span class=\"frac\"><span>x − 2</span><span>4</span></span></span> by cross-multiplication.",
      "options": [
        "x = 2",
        "x = −5",
        "x = −2",
        "x = 10"
      ],
      "answer": 2,
      "explanation": "4(2x+1) = 3(x−2) → 8x + 4 = 3x − 6 → 5x = −10 → x = −2."
    },
    {
      "prompt": "7. The sum of three consecutive integers is 72. The smallest one is:",
      "options": [
        "23",
        "24",
        "22",
        "25"
      ],
      "answer": 0,
      "explanation": "n + (n+1) + (n+2) = 72 → 3n + 3 = 72 → n = 23."
    }
  ]
};

export default quiz;
