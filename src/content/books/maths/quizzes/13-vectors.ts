import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "13-vectors",
  "title": "Topic 13 Quiz — Vectors",
  "questions": [
    {
      "prompt": "1. Which of these is a vector quantity?",
      "options": [
        "mass",
        "velocity",
        "temperature",
        "time"
      ],
      "answer": 1,
      "explanation": "Velocity has magnitude (speed) AND direction. The others are scalars."
    },
    {
      "prompt": "2. Two vectors are equal if they have the same:",
      "options": [
        "position",
        "starting point",
        "magnitude and direction",
        "colour and label"
      ],
      "answer": 2,
      "explanation": "Position is irrelevant — only length and direction matter."
    },
    {
      "prompt": "3. If <span class=\"m\">a = (2, 3)</span> and <span class=\"m\">b = (−1, 4)</span>, then a + b =",
      "options": [
        "(1, 7)",
        "(3, −1)",
        "(1, 12)",
        "(−2, 12)"
      ],
      "answer": 0,
      "explanation": "Add components: 2 + (−1) = 1 and 3 + 4 = 7."
    },
    {
      "prompt": "4. ‖(3, 4)‖ =",
      "options": [
        "7",
        "12",
        "25",
        "5"
      ],
      "answer": 3,
      "explanation": "√(9 + 16) = √25 = 5."
    },
    {
      "prompt": "5. Vector subtraction b − a is defined as:",
      "options": [
        "a + b",
        "b + (−a)",
        "−(a + b)",
        "a − b"
      ],
      "answer": 1,
      "explanation": "Subtract = add the opposite: reverse a, then apply the tip-to-tail rule."
    },
    {
      "prompt": "6. If λ = −2, then λa compared to a is:",
      "options": [
        "twice as long, same direction",
        "half as long, same direction",
        "twice as long, opposite direction",
        "unchanged"
      ],
      "answer": 2,
      "explanation": "‖−2a‖ = |−2|‖a‖ = 2‖a‖ and the negative sign flips the direction."
    }
  ]
};

export default quiz;
