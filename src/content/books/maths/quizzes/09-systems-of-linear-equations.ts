import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "09-systems-of-linear-equations",
  "title": "Topic 9 Quiz — Systems of Linear Equations",
  "questions": [
    {
      "prompt": "1. The solution of a pair of linear simultaneous equations is:",
      "options": [
        "any point on either line",
        "the point of intersection of the two lines",
        "always (0, 0)",
        "the product of the intercepts"
      ],
      "answer": 1,
      "explanation": "Only the intersection point satisfies both equations simultaneously."
    },
    {
      "prompt": "2. Solve: <span class=\"m\">x + y = 5</span>, <span class=\"m\">x − y = 1</span>.",
      "options": [
        "x = 2, y = 3",
        "x = 5, y = 1",
        "x = 3, y = 2",
        "x = 1, y = 4"
      ],
      "answer": 2,
      "explanation": "Adding the equations: 2x = 6 → x = 3; then y = 2."
    },
    {
      "prompt": "3. Two parallel lines (different intercepts) as a system have:",
      "options": [
        "no solution",
        "exactly one solution",
        "two solutions",
        "infinitely many solutions"
      ],
      "answer": 0,
      "explanation": "Parallel lines never meet, so no (x, y) satisfies both equations."
    },
    {
      "prompt": "4. Using elimination on <span class=\"m\">2x + 3y = 12</span> and <span class=\"m\">x − y = 1</span> (multiply the second by 3 and add), the result is:",
      "options": [
        "5x + 6y = 15",
        "−x = 9",
        "2x = 15",
        "5x = 15"
      ],
      "answer": 3,
      "explanation": "(2x+3y) + (3x−3y) = 12 + 3 → 5x = 15 → x = 3."
    },
    {
      "prompt": "5. How many intersection points can a line and a parabola have at most?",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "answer": 1,
      "explanation": "A straight line can cross a parabola at most twice (two, one or zero solutions)."
    },
    {
      "prompt": "6. Solve: <span class=\"m\">y = x²</span>, <span class=\"m\">y = x + 2</span>.",
      "options": [
        "(1, 1) only",
        "(2, 4) only",
        "(2, 4) and (−1, 1)",
        "no real solutions"
      ],
      "answer": 2,
      "explanation": "x² − x − 2 = 0 → x = 2 or −1, giving points (2, 4) and (−1, 1)."
    }
  ]
};

export default quiz;
