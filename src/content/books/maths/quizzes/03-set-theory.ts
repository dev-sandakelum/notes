import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "03-set-theory",
  "title": "Topic 3 Quiz — Set Theory",
  "questions": [
    {
      "prompt": "1. Which symbol denotes the empty (null) set?",
      "options": [
        "{0}",
        "∅",
        "∩",
        "U"
      ],
      "answer": 1,
      "explanation": "∅ denotes a set with no elements. {0} is a set containing the number 0, so it is not empty."
    },
    {
      "prompt": "2. The set-builder form of {2, 4, 6, 8, 10} is:",
      "options": [
        "{x | x &lt; 10}",
        "{x ∈ ℕ | x is even}",
        "{x ∈ ℕ | 2 ≤ x ≤ 10, x is even}",
        "{x ∈ ℤ | x ≤ 10}"
      ],
      "answer": 2,
      "explanation": "It is the even natural numbers from 2 to 10 inclusive — the bound matters."
    },
    {
      "prompt": "3. If A = {1, 2, 3, 3} and B = {3, 2, 1}, then:",
      "options": [
        "A = B",
        "A ≠ B because A has more elements",
        "A ≠ B because order matters",
        "A is not a valid set"
      ],
      "answer": 0,
      "explanation": "Duplicates are ignored in sets, so A = {1, 2, 3} = B. Order never matters."
    },
    {
      "prompt": "4. A ∩ B contains:",
      "options": [
        "all elements of A and B combined",
        "elements in A but not in B",
        "elements outside both sets",
        "only the elements common to both A and B"
      ],
      "answer": 3,
      "explanation": "Intersection = shared elements. “All elements combined” describes the union."
    },
    {
      "prompt": "5. With U = {1,…,6} and A = {2, 4, 6}, the complement A′ is:",
      "options": [
        "{1, 2, 3, 4, 5}",
        "∅",
        "{1, 3, 5}",
        "{2, 4, 6}"
      ],
      "answer": 2,
      "explanation": "A′ = U − A = the odd outcomes {1, 3, 5}."
    },
    {
      "prompt": "6. X = {x | x &gt; 9} and Y = {x | x ≤ 10}. Are X and Y disjoint?",
      "options": [
        "Yes, X ∩ Y = ∅",
        "No — they share the element 10",
        "No — they share the element 9",
        "Cannot be determined"
      ],
      "answer": 1,
      "explanation": "10 &gt; 9 and 10 ≤ 10, so 10 belongs to both sets: X ∩ Y ≠ ∅."
    },
    {
      "prompt": "7. A set with 4 elements has how many subsets?",
      "options": [
        "16",
        "8",
        "4",
        "15"
      ],
      "answer": 0,
      "explanation": "A set with n elements has 2ⁿ subsets: 2⁴ = 16."
    },
    {
      "prompt": "8. How many ordered pairs are in {1, 2, 3} × {a, b}?",
      "options": [
        "3",
        "2",
        "9",
        "6"
      ],
      "answer": 3,
      "explanation": "|A × B| = |A| × |B| = 3 × 2 = 6."
    }
  ]
};

export default quiz;
