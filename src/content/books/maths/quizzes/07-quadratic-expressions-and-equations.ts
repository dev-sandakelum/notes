import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "07-quadratic-expressions-and-equations",
  "title": "Topic 7 Quiz: Quadratic Expressions & Equations",
  "questions": [
    {
      "prompt": "1. In <span class=\"m\">5x² − 7x + 2</span>, the linear coefficient b is:",
      "options": [
        "5",
        "2",
        "−7",
        "7"
      ],
      "answer": 2,
      "explanation": "b is the coefficient of x (the linear term): −7. Watch the sign."
    },
    {
      "prompt": "2. Solve <span class=\"m\">x² − 5x + 6 = 0</span>.",
      "options": [
        "x = −2, −3",
        "x = 2, 3",
        "x = 1, 6",
        "x = −1, 6"
      ],
      "answer": 1,
      "explanation": "−2 × −3 = 6 and −2 + −3 = −5: (x−2)(x−3) = 0."
    },
    {
      "prompt": "3. Factors of <span class=\"m\">x² + 7x + 12</span> are:",
      "options": [
        "(x + 3)(x + 4)",
        "(x + 2)(x + 6)",
        "(x − 3)(x − 4)",
        "(x + 1)(x + 12)"
      ],
      "answer": 0,
      "explanation": "3 × 4 = 12 and 3 + 4 = 7."
    },
    {
      "prompt": "4. When completing the square on <span class=\"m\">x² + 6x + 5 = 0</span>, you add ____ to both sides.",
      "options": [
        "3",
        "36",
        "6",
        "9"
      ],
      "answer": 3,
      "explanation": "(6/2)² = 9, giving (x + 3)² = 4."
    },
    {
      "prompt": "5. For <span class=\"m\">2x² − 3x − 2 = 0</span>, the discriminant b² − 4ac equals:",
      "options": [
        "1",
        "−7",
        "25",
        "17"
      ],
      "answer": 2,
      "explanation": "9 − 4(2)(−2) = 9 + 16 = 25, a perfect square, so the roots are rational."
    },
    {
      "prompt": "6. If <span class=\"m\">b² − 4ac &lt; 0</span>, the quadratic equation has:",
      "options": [
        "two equal real roots",
        "no real roots",
        "two distinct real roots",
        "one root equal to zero"
      ],
      "answer": 1,
      "explanation": "A negative discriminant cannot be square-rooted over the reals."
    },
    {
      "prompt": "7. Solving <span class=\"m\">3x² + 18x + 15 = 0</span> gives:",
      "options": [
        "x = −1, −5",
        "x = 1, 5",
        "x = −3, −5",
        "x = 3, 5"
      ],
      "answer": 0,
      "explanation": "Factor out 3: x² + 6x + 5 = (x + 1)(x + 5) = 0."
    }
  ]
};

export default quiz;
