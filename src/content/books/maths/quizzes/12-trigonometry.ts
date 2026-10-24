import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "12-trigonometry",
  "title": "Topic 12 Quiz — Trigonometry",
  "questions": [
    {
      "prompt": "1. In a right triangle with legs 5 and 12, the hypotenuse is:",
      "options": [
        "17",
        "13",
        "√17",
        "7"
      ],
      "answer": 1,
      "explanation": "√(25 + 144) = √169 = 13."
    },
    {
      "prompt": "2. TOA stands for:",
      "options": [
        "tan θ = adjacent / opposite",
        "tan θ = hypotenuse / adjacent",
        "tan θ = opposite / adjacent",
        "tan θ = opposite / hypotenuse"
      ],
      "answer": 2,
      "explanation": "TOA: Tan = Opposite over Adjacent."
    },
    {
      "prompt": "3. sin 30° =",
      "options": [
        "1/2",
        "√3/2",
        "√2/2",
        "1"
      ],
      "answer": 0,
      "explanation": "From the 30-60-90 triangle: opposite 1, hypotenuse 2."
    },
    {
      "prompt": "4. In which quadrant are ALL three ratios positive?",
      "options": [
        "Quadrant II",
        "Quadrant III",
        "Quadrant IV",
        "Quadrant I"
      ],
      "answer": 3,
      "explanation": "The “A” of CAST — All positive in the first quadrant."
    },
    {
      "prompt": "5. cos 150° equals:",
      "options": [
        "√3/2",
        "1/2",
        "−√3/2",
        "−1/2"
      ],
      "answer": 2,
      "explanation": "150° is in Quadrant II where only Sine is positive; reference angle 30° gives cos = −√3/2."
    },
    {
      "prompt": "6. The identity sin²θ + cos²θ =",
      "options": [
        "0",
        "1",
        "tan²θ",
        "sec²θ"
      ],
      "answer": 1,
      "explanation": "The Pythagorean identity — true for every angle θ."
    },
    {
      "prompt": "7. sin(A + B) expands to:",
      "options": [
        "sin A cos B + cos A sin B",
        "sin A cos B − cos A sin B",
        "cos A cos B − sin A sin B",
        "sin A sin B + cos A cos B"
      ],
      "answer": 0,
      "explanation": "Sine keeps the sign: sin(A±B) = sinA cosB ± cosA sinB."
    },
    {
      "prompt": "8. sin 2A equals:",
      "options": [
        "2 sin²A",
        "sin²A − cos²A",
        "sin A + sin A",
        "2 sin A cos A"
      ],
      "answer": 3,
      "explanation": "Double angle formula: sin 2A = 2 sin A cos A."
    }
  ]
};

export default quiz;
