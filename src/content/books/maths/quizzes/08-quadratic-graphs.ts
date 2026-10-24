import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "08-quadratic-graphs",
  "title": "Topic 8 Quiz — Quadratic Graphs",
  "questions": [
    {
      "prompt": "1. The graph of <span class=\"m\">y = −3x² + x</span> is:",
      "options": [
        "U-shaped with a minimum",
        "n-shaped with a maximum",
        "a straight line",
        "a hyperbola"
      ],
      "answer": 1,
      "explanation": "Negative a (−3 &lt; 0) opens the parabola downwards → n-shape, maximum point."
    },
    {
      "prompt": "2. The y-intercept of <span class=\"m\">y = x² − 2x − 3</span> is:",
      "options": [
        "−2",
        "0",
        "−3",
        "3"
      ],
      "answer": 2,
      "explanation": "Set x = 0: y = c = −3."
    },
    {
      "prompt": "3. The axis of symmetry of <span class=\"m\">y = x² − 4x + 1</span> is:",
      "options": [
        "x = 2",
        "x = −2",
        "x = 4",
        "y = 2"
      ],
      "answer": 0,
      "explanation": "x = −b/2a = 4/2 = 2 — a vertical line, so the answer is x = …, never y = …"
    },
    {
      "prompt": "4. The roots of a quadratic are found graphically where the curve:",
      "options": [
        "crosses the y-axis",
        "reaches its vertex",
        "has zero gradient only",
        "crosses the x-axis"
      ],
      "answer": 3,
      "explanation": "Roots solve f(x) = 0, i.e. where y = 0 — the x-axis crossings."
    },
    {
      "prompt": "5. The minimum value of <span class=\"m\">y = 2x² + 8x − 3</span> is:",
      "options": [
        "−3",
        "−11",
        "8",
        "−2"
      ],
      "answer": 1,
      "explanation": "At x = −2: y = 8 − 16 − 3 = −11 (or c − b²/4a = −3 − 8)."
    },
    {
      "prompt": "6. To solve <span class=\"m\">x² = 2x + 3</span> graphically, you plot <span class=\"m\">y = x²</span> and <span class=\"m\">y = 2x + 3</span> and read:",
      "options": [
        "the y-intercepts of both graphs",
        "the gradient of the line",
        "the x-coordinates of the intersection points",
        "the area between the graphs"
      ],
      "answer": 2,
      "explanation": "At an intersection x² = 2x + 3, so its x-coordinate solves the equation."
    }
  ]
};

export default quiz;
