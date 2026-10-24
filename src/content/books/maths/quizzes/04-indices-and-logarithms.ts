import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "04-indices-and-logarithms",
  "title": "Topic 4 Quiz: Indices & Logarithms",
  "questions": [
    {
      "prompt": "1. Simplify <span class=\"m\">2³ × 2⁴</span>.",
      "options": [
        "2²⁴",
        "2¹¹",
        "2⁶",
        "4¹¹"
      ],
      "answer": 1,
      "explanation": "First law: same base, add indices → 2³⁺⁸ = 2¹¹."
    },
    {
      "prompt": "2. Evaluate <span class=\"m\">5⁰</span>.",
      "options": [
        "0",
        "5",
        "1",
        "Undefined"
      ],
      "answer": 2,
      "explanation": "Fourth law: any non-zero number to the power 0 equals 1."
    },
    {
      "prompt": "3. <span class=\"m\">2<sup>−3</sup></span> equals:",
      "options": [
        "1/8",
        "−8",
        "−6",
        "8"
      ],
      "answer": 0,
      "explanation": "Fifth law: a<sup>−n</sup> = 1/aⁿ = 1/2³ = 1/8."
    },
    {
      "prompt": "4. Evaluate <span class=\"m\">27<sup>2/3</sup></span>.",
      "options": [
        "18",
        "54",
        "3",
        "9"
      ],
      "answer": 3,
      "explanation": "Sixth law: take the cube root of 27 (= 3), then square: 3² = 9."
    },
    {
      "prompt": "5. Write 4,600,000,000 in scientific notation.",
      "options": [
        "46 × 10⁸",
        "4.6 × 10⁹",
        "4.6 × 10⁸",
        "0.46 × 10¹⁰"
      ],
      "answer": 1,
      "explanation": "Move the decimal 9 places left; the leading factor must stay between 1 and 10."
    },
    {
      "prompt": "6. <span class=\"m\">log₂ 32 =</span>",
      "options": [
        "2",
        "16",
        "5",
        "6"
      ],
      "answer": 2,
      "explanation": "2⁵ = 32, so the log (base 2) of 32 is 5."
    },
    {
      "prompt": "7. <span class=\"m\">log 8 + log 3 =</span>",
      "options": [
        "log 24",
        "log 11",
        "log 8/3",
        "24 log 11"
      ],
      "answer": 0,
      "explanation": "Product law in reverse: a sum of logs is the log of the product (8×3 = 24)."
    },
    {
      "prompt": "8. Solve <span class=\"m\">3ᵁ⁻¹ = 81</span>.",
      "options": [
        "x = 3",
        "x = 2",
        "x = 27",
        "x = 5"
      ],
      "answer": 3,
      "explanation": "81 = 3⁴, so x − 1 = 4 → x = 5."
    }
  ]
};

export default quiz;
