import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "06-graphs-of-straight-lines",
  "title": "Topic 6 Quiz — Straight Lines",
  "questions": [
    {
      "prompt": "1. The point (−3, 5) lies in quadrant:",
      "options": [
        "I",
        "IV",
        "II",
        "III"
      ],
      "answer": 2,
      "explanation": "Negative x, positive y → upper-left → Quadrant II."
    },
    {
      "prompt": "2. The slope of the line through (1, 2) and (3, 8) is:",
      "options": [
        "<span class=\"m\"><span class=\"frac\"><span>1</span><span>3</span></span></span>",
        "3",
        "−3",
        "6"
      ],
      "answer": 1,
      "explanation": "m = (8−2)/(3−1) = 6/2 = 3."
    },
    {
      "prompt": "3. In <span class=\"m\">y = mx + c</span>, the letter c represents:",
      "options": [
        "the y-intercept",
        "the slope",
        "the x-intercept",
        "the origin"
      ],
      "answer": 0,
      "explanation": "Setting x = 0 gives y = c — where the line crosses the y-axis."
    },
    {
      "prompt": "4. The slope of a horizontal line is:",
      "options": [
        "1",
        "infinity",
        "−1",
        "0"
      ],
      "answer": 3,
      "explanation": "No rise between any two points → rise/run = 0. (Vertical lines are the undefined ones.)"
    },
    {
      "prompt": "5. The equation of the line with slope 4 through (2, 3) is:",
      "options": [
        "y = 4x + 3",
        "y = 2x + 4",
        "y = 4x − 5",
        "y = 3x − 2"
      ],
      "answer": 2,
      "explanation": "y − 3 = 4(x − 2) → y = 4x − 8 + 3 = 4x − 5."
    },
    {
      "prompt": "6. A line parallel to <span class=\"m\">y = 3x − 7</span> has slope:",
      "options": [
        "−3",
        "3",
        "−<span class=\"m\"><span class=\"frac\"><span>1</span><span>3</span></span></span>",
        "7"
      ],
      "answer": 1,
      "explanation": "Parallel lines have equal slopes."
    },
    {
      "prompt": "7. A line perpendicular to <span class=\"m\">y = −2x + 5</span> has slope:",
      "options": [
        "<span class=\"m\"><span class=\"frac\"><span>1</span><span>2</span></span></span>",
        "−2",
        "2",
        "−<span class=\"m\"><span class=\"frac\"><span>1</span><span>2</span></span></span>"
      ],
      "answer": 0,
      "explanation": "Negative reciprocal of −2 is 1/2, since (−2)(1/2) = −1."
    }
  ]
};

export default quiz;
