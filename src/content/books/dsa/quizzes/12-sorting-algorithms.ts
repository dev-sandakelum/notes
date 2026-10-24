import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "12-sorting-algorithms",
  "title": "Topic 11 Quiz — Sorting Algorithms",
  "questions": [
    {
      "prompt": "1. Bubble sort compares and swaps…",
      "options": [
        "Adjacent pairs, repeatedly",
        "The smallest element with the first position",
        "Pivot with every element",
        "Two sorted halves"
      ],
      "answer": 0,
      "explanation": "Bubble = adjacent comparisons; largest values bubble to the end each pass."
    },
    {
      "prompt": "2. Selection sort on 6 elements makes at most how many swaps?",
      "options": [
        "15",
        "30",
        "5",
        "6"
      ],
      "answer": 2,
      "explanation": "One swap per position: n − 1 = 5. Comparisons are 5+4+3+2+1 = 15 though — O(n²)."
    },
    {
      "prompt": "3. Which sort builds a sorted region at the bottom of the array by shifting bigger elements right?",
      "options": [
        "Bubble sort",
        "Insertion sort",
        "Quick sort",
        "Heap sort"
      ],
      "answer": 1,
      "explanation": "Insertion sort inserts each new element into the sorted lower part — like sorting cards by hand."
    },
    {
      "prompt": "4. Merge sort's time complexity is…",
      "options": [
        "O(n²)",
        "O(n)",
        "O(log n)",
        "O(n log n)"
      ],
      "answer": 3,
      "explanation": "log N split levels × O(n) merge work per level."
    },
    {
      "prompt": "5. Which sort REQUIRES an additional array in memory?",
      "options": [
        "Merge sort",
        "Quick sort",
        "Heap sort",
        "Insertion sort"
      ],
      "answer": 0,
      "explanation": "Merging uses a temp[] workspace; the other three work in-place."
    },
    {
      "prompt": "6. Quick sort's WORST-case time complexity is…",
      "options": [
        "O(n log n)",
        "O(log n)",
        "O(n²)",
        "O(n³)"
      ],
      "answer": 2,
      "explanation": "Bad pivots (e.g. sorted input, first-element pivot) split 0 / n−1 repeatedly."
    },
    {
      "prompt": "7. “In efficient implementations it is not a stable sort” describes…",
      "options": [
        "Merge sort",
        "Quick sort",
        "Bubble sort",
        "Insertion sort"
      ],
      "answer": 1,
      "explanation": "Quicksort may reorder equal elements — not stable. It is also called partition-exchange sort."
    },
    {
      "prompt": "8. For N elements, bubble sort's worst-case comparison count is…",
      "options": [
        "N",
        "N log N",
        "N + 1",
        "N(N+1)/2 ≈ N²"
      ],
      "answer": 3,
      "explanation": "(N−1) + (N−2) + … + 1 = N(N−1)/2 ≈ O(n²)."
    },
    {
      "prompt": "9. Which combination is TRUE for quick sort?",
      "options": [
        "In-place · expected O(n log n) · fastest for large inputs",
        "Needs extra array · O(n²) always · stable",
        "Sequential access · O(n log n) worst · stable",
        "Recursive-free · O(1) always · not comparison-based"
      ],
      "answer": 0,
      "explanation": "Quick sort is the in-place, randomized speed king for large n — just beware the O(n²) worst case."
    }
  ]
};

export default quiz;
