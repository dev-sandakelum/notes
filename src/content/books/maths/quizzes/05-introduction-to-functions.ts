import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "05-introduction-to-functions",
  "title": "Topic 5 Quiz — Functions",
  "questions": [
    {
      "prompt": "1. A function assigns to each element x in X:",
      "options": [
        "at least one y in Y",
        "exactly one y in Y",
        "at most two y-values",
        "any number of y-values"
      ],
      "answer": 1,
      "explanation": "Definition: each input has exactly one output — that's what makes it a function."
    },
    {
      "prompt": "2. Which set of ordered pairs is <b>NOT</b> a function?",
      "options": [
        "{(1,2), (2,3), (3,4)}",
        "{(1,5), (2,5), (3,5)}",
        "{(1,3), (1,4), (2,5)}",
        "{(0,0), (1,1), (2,4)}"
      ],
      "answer": 2,
      "explanation": "The input 1 appears twice with different outputs (3 and 4). Repeated inputs with the SAME output would still be fine."
    },
    {
      "prompt": "3. The vertical line test says a graph is a function when:",
      "options": [
        "no vertical line cuts the graph more than once",
        "no horizontal line cuts the graph more than once",
        "the graph passes through the origin",
        "every vertical line cuts the graph exactly twice"
      ],
      "answer": 0,
      "explanation": "One vertical line = one input x; cutting twice would mean two outputs."
    },
    {
      "prompt": "4. The natural domain of <span class=\"m\">f(x) = <span class=\"frac\"><span>1</span><span>x − 4</span></span></span> is:",
      "options": [
        "x ≥ 4",
        "all real numbers",
        "x &gt; 0",
        "all reals except 4"
      ],
      "answer": 3,
      "explanation": "x = 4 makes the denominator zero, so it must be excluded."
    },
    {
      "prompt": "5. For <span class=\"m\">f(x) = √x</span>, the domain and range are:",
      "options": [
        "domain x &gt; 0, range y &gt; 0",
        "domain x ≥ 0, range y ≥ 0",
        "all reals for both",
        "domain x ≥ 0, range all reals"
      ],
      "answer": 1,
      "explanation": "√0 = 0 is allowed, so 0 is included in both sets."
    },
    {
      "prompt": "6. If <span class=\"m\">f(x) = x² − 3x + 2</span>, then f(−1) =",
      "options": [
        "0",
        "−2",
        "6",
        "4"
      ],
      "answer": 2,
      "explanation": "f(−1) = (−1)² − 3(−1) + 2 = 1 + 3 + 2 = 6."
    },
    {
      "prompt": "7. Which function's graph is a parabola that opens downwards?",
      "options": [
        "f(x) = −2x² + x",
        "f(x) = 2x² + x",
        "f(x) = 2x + 1",
        "f(x) = √x"
      ],
      "answer": 0,
      "explanation": "The sign of the x² coefficient decides: negative a → n-shaped (maximum) parabola."
    }
  ]
};

export default quiz;
