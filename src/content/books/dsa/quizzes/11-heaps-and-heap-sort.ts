import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "11-heaps-and-heap-sort",
  "title": "Topic 10 Quiz: Heaps & Heap Sort",
  "questions": [
    {
      "prompt": "1. The two properties every heap must satisfy are…",
      "options": [
        "BST property + balance property",
        "Sorted order + fixed size",
        "Complete shape + parent-children order",
        "Red-black colours + BST rules"
      ],
      "answer": 2,
      "explanation": "Rule 1 shape (complete binary tree), Rule 2 order (min or max)."
    },
    {
      "prompt": "2. In a max-heap, the largest value is always…",
      "options": [
        "At the root",
        "At the last leaf",
        "In the leftmost branch",
        "Somewhere in the middle"
      ],
      "answer": 0,
      "explanation": "Every parent ≥ children, so the root is the global maximum (O(1) find-max)."
    },
    {
      "prompt": "3. In the array form of a heap, the parent of index 6 is…",
      "options": [
        "Index 3",
        "Index 12",
        "Index 2",
        "Index 2: via (6−1)/2"
      ],
      "answer": 3,
      "explanation": "(6 − 1)/2 = 2 (integer division). Watch out: children of 2 are 5 and 6."
    },
    {
      "prompt": "4. A tree is complete and every parent ≥ its children, but the left sibling happens to be smaller than the right sibling. Is it a heap?",
      "options": [
        "No: siblings must be ordered",
        "Yes: sibling order is irrelevant",
        "Only if it is also a BST",
        "Only if duplicates are absent"
      ],
      "answer": 1,
      "explanation": "Only parent-vs-children ordering matters; heaps are not BSTs and duplicates are allowed."
    },
    {
      "prompt": "5. When growing a heap, the new node is placed…",
      "options": [
        "At the root, then sifted down",
        "Anywhere convenient",
        "At the left-most available spot in the lowest level",
        "As the right child of the root"
      ],
      "answer": 2,
      "explanation": "Insertion must preserve the complete shape; the value then bubbles up if needed."
    },
    {
      "prompt": "6. Heapify(A, i) assumes…",
      "options": [
        "Both subtrees of i are already heaps",
        "The array is sorted",
        "i is a leaf",
        "The tree is balanced"
      ],
      "answer": 0,
      "explanation": "That is why BuildHeap runs Heapify bottom-up from the last internal node (n/2) down to the root."
    },
    {
      "prompt": "7. Heap sort's time complexity in the WORST case is…",
      "options": [
        "O(n²)",
        "O(n)",
        "O(log n)",
        "O(n log n)"
      ],
      "answer": 3,
      "explanation": "Worst = best = average = O(n log n). Space O(1): the algorithm is not recursive."
    },
    {
      "prompt": "8. To sort numbers into DECREASING order with heap sort, use a…",
      "options": [
        "Max-heap",
        "Min-heap",
        "BST",
        "AVL tree"
      ],
      "answer": 1,
      "explanation": "Min-heap extracts the smallest first → placed at the end → descending output."
    }
  ]
};

export default quiz;
