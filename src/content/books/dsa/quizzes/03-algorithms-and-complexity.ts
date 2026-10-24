import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "03-algorithms-and-complexity",
  "title": "Topic 2 Quiz — Algorithms & Complexity",
  "questions": [
    {
      "prompt": "1. Big-O notation defines the…",
      "options": [
        "Lower bound of time complexity",
        "Exact running time in seconds",
        "Upper bound of time complexity",
        "Average of best and worst cases"
      ],
      "answer": 2,
      "explanation": "<b>Upper bound</b> — Big-O gives the maximum time for all input values, i.e. the worst case."
    },
    {
      "prompt": "2. The property requiring an algorithm to have a finite number of steps is…",
      "options": [
        "Definiteness",
        "Finiteness",
        "Correctness",
        "Output"
      ],
      "answer": 1,
      "explanation": "<b>Finiteness</b> — an algorithm must terminate after finitely many steps."
    },
    {
      "prompt": "3. What is the time complexity of accessing a single array element by index?",
      "options": [
        "O(1)",
        "O(n)",
        "O(log n)",
        "O(n²)"
      ],
      "answer": 0,
      "explanation": "<b>O(1)</b> — constant time: one operation regardless of array size."
    },
    {
      "prompt": "4. Nested loops <code>for i&lt;n { for j&lt;n { … } }</code> give…",
      "options": [
        "O(n)",
        "O(2n)",
        "O(log n)",
        "O(n²)"
      ],
      "answer": 3,
      "explanation": "<b>O(n²)</b> — the inner loop runs n times for each of the n outer iterations: n × n."
    },
    {
      "prompt": "5. In asymptotic notation, which terms do we keep?",
      "options": [
        "All terms",
        "The least significant terms",
        "The most significant terms only",
        "Constants only"
      ],
      "answer": 2,
      "explanation": "<b>Most significant only</b> — for large n the dominant term swamps the rest, so 5n²+2n+1 ≈ n²."
    },
    {
      "prompt": "6. Space complexity of <code>int cal(int b){ return b*b; }</code> (int = 2 bytes) is…",
      "options": [
        "Linear — O(n)",
        "Constant — 4 bytes fixed",
        "Quadratic in b",
        "Depends on the compiler only"
      ],
      "answer": 1,
      "explanation": "<b>Constant</b> — 2 bytes for b + 2 bytes for the return value = 4 bytes for any input."
    },
    {
      "prompt": "7. Binary search runs in…",
      "options": [
        "O(log N)",
        "O(N)",
        "O(1)",
        "O(N log N)"
      ],
      "answer": 0,
      "explanation": "<b>O(log N)</b> — each comparison halves the remaining search space."
    },
    {
      "prompt": "8. Insertion into an <b>ordered</b> array requires shifting elements, giving…",
      "options": [
        "O(1)",
        "O(log n)",
        "O(N)",
        "O(n²)"
      ],
      "answer": 2,
      "explanation": "<b>O(N)</b> — existing elements must be shifted over to make room (unordered insertion is O(1) at the end)."
    }
  ]
};

export default quiz;
