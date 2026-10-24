import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "01-numbers",
  "title": "Topic 1 Quiz — Numbers",
  "questions": [
    {
      "prompt": "1. Which of the following is <b>NOT</b> a natural number?",
      "options": [
        "7",
        "21",
        "108",
        "0"
      ],
      "answer": 3,
      "explanation": "Natural numbers start from 1 — 0 is a whole number but not a natural number."
    },
    {
      "prompt": "2. Which statement about integers is <b>FALSE</b>?",
      "options": [
        "Integers include 0",
        "Integers are closed under division",
        "−9 is an integer",
        "Every integer is rational"
      ],
      "answer": 1,
      "explanation": "5 ÷ 2 = 2.5 is not an integer, so integers are NOT closed under division."
    },
    {
      "prompt": "3. Write 0.75 as a fraction in lowest terms.",
      "options": [
        "3/5",
        "7/10",
        "3/4",
        "75/100"
      ],
      "answer": 2,
      "explanation": "0.75 = 75/100; divide top and bottom by 25 to get 3/4."
    },
    {
      "prompt": "4. Which of these numbers is irrational?",
      "options": [
        "√3",
        "√4",
        "0.333…",
        "−2"
      ],
      "answer": 0,
      "explanation": "√3 ≈ 1.732… never terminates or repeats. √4 = 2, 0.333… = 1/3 and −2 are all rational."
    },
    {
      "prompt": "5. Which is the only even prime number?",
      "options": [
        "0",
        "1",
        "2",
        "4"
      ],
      "answer": 2,
      "explanation": "2 has exactly two divisors (1 and 2), making it the only even prime. 0 and 1 are not prime at all."
    },
    {
      "prompt": "6. How many prime numbers are there between 1 and 50?",
      "options": [
        "12",
        "15",
        "16",
        "20"
      ],
      "answer": 1,
      "explanation": "2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 — fifteen primes."
    },
    {
      "prompt": "7. (−3) × (−7) + 2 = ?",
      "options": [
        "−23",
        "−19",
        "19",
        "23"
      ],
      "answer": 3,
      "explanation": "(−3)×(−7) = 21 (negative × negative = positive), then 21 + 2 = 23."
    }
  ]
};

export default quiz;
