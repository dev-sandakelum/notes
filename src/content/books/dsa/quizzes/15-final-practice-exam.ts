import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "15-final-practice-exam",
  "title": "Final practice exam: ICT2113 DSA",
  "questions": [
    {
      "prompt": "1. <i>[T1]</i> “The manner in which data is represented in the computer to facilitate its access and manipulation by an algorithm” defines…",
      "options": [
        "An algorithm",
        "A data structure",
        "A program",
        "A compiler"
      ],
      "answer": 1,
      "explanation": "<b>Data structure</b>: memorize this lecture wording."
    },
    {
      "prompt": "2. <i>[T1]</i> Which pair is BOTH non-primitive AND linear?",
      "options": [
        "int, float",
        "Tree, graph",
        "Stack, queue",
        "Char, boolean"
      ],
      "answer": 2,
      "explanation": "Stacks and queues are linear abstract data structures; trees and graphs are non-linear."
    },
    {
      "prompt": "3. <i>[T2]</i> What does Big-Θ(g(n)) represent?",
      "options": [
        "Upper bound only",
        "Lower bound only",
        "Memory usage only",
        "A tight bound: both upper and lower"
      ],
      "answer": 3,
      "explanation": "Θ squeezes f(n) between c₁g(n) and c₂g(n) for large n."
    },
    {
      "prompt": "4. <i>[T2]</i> for (i=0; i&lt;n; i++) for (j=0; j&lt;i; j++) { s; }: the complexity is…",
      "options": [
        "O(n²)",
        "O(n)",
        "O(n log n)",
        "O(1)"
      ],
      "answer": 0,
      "explanation": "Triangular (dependent) loops still give n(n−1)/2 executions → O(n²)."
    },
    {
      "prompt": "5. <i>[T3]</i> After pushes 10, 20, 30 and pops ×2 on a stack, the top (peek) returns…",
      "options": [
        "30",
        "20",
        "10",
        "Underflow error"
      ],
      "answer": 2,
      "explanation": "Stack: 10 → 10,20 → 10,20,30 → pop 30 → pop 20 → top = 10."
    },
    {
      "prompt": "6. <i>[T3]</i> The postfix form of (A + B) * (C + D) is…",
      "options": [
        "A B + C D + *",
        "A B + C D + *",
        "* + A B + C D",
        "A B C D + + *"
      ],
      "answer": 1,
      "explanation": "(A B +)(C D +)(*) → A B + C D + *. Note option 2 shows the <b>prefix</b> twin, read carefully."
    },
    {
      "prompt": "7. <i>[T4]</i> A circular queue of SIZE 5 has front = 2, rear = 4. After two dequeues and three enqueues, front and rear are…",
      "options": [
        "front 3, rear 4",
        "front 4, rear 6",
        "front 2, rear 2",
        "front 4, rear 2 (wrapped)"
      ],
      "answer": 3,
      "explanation": "dequeues: front 2→3→4. Enqueues: rear 4→0→1→2 (wrapping at SIZE−1). Full house: 5 elements."
    },
    {
      "prompt": "8. <i>[T5]</i> In a singly linked list, deleting the FIRST node requires…",
      "options": [
        "head = head-&gt;next; free(old head)",
        "Traversing to the tail first",
        "Setting the node's next to itself",
        "No pointer changes"
      ],
      "answer": 0,
      "explanation": "Move head to the successor, then free. O(1) deletion at the head."
    },
    {
      "prompt": "9. <i>[T5]</i> Which linked-list type lets you traverse the whole list starting from ANY node?",
      "options": [
        "Singly linked list",
        "Doubly linked list",
        "Circular linked list",
        "Ordered array"
      ],
      "answer": 2,
      "explanation": "The ring never ends: stop when the first visited node reappears."
    },
    {
      "prompt": "10. <i>[T6]</i> A binary tree of height 3 (4 levels) can hold at most…",
      "options": [
        "8 nodes",
        "15 nodes",
        "16 nodes",
        "31 nodes"
      ],
      "answer": 1,
      "explanation": "2⁴ − 1 = 15 (levels 0–3 hold 1+2+4+8)."
    },
    {
      "prompt": "11. <i>[T7]</i> Preorder traversal of a BST gives 41, 9, 0, 3, 2, 4, 37, 32, 21, 73, 54, 46, 72, 65, 89, 74, 77. The root is…",
      "options": [
        "41",
        "0",
        "77",
        "2"
      ],
      "answer": 0,
      "explanation": "Preorder visits the root FIRST: the first element of the sequence."
    },
    {
      "prompt": "12. <i>[T7]</i> In the expression tree world, postorder traversal produces…",
      "options": [
        "Infix notation",
        "Sorted notation",
        "Prefix notation",
        "Postfix notation"
      ],
      "answer": 3,
      "explanation": "Inorder→infix · preorder→prefix · postorder→postfix."
    },
    {
      "prompt": "13. <i>[T8]</i> Deleting a node with two children from a BST can replace it with its inorder successor, which is…",
      "options": [
        "Its parent",
        "The leftmost node of its right subtree",
        "The rightmost node of its left subtree",
        "The root"
      ],
      "answer": 1,
      "explanation": "Successor = smallest in the right subtree (leftmost there). Option 3 describes the predecessor."
    },
    {
      "prompt": "14. <i>[T9]</i> Inserting 7 into an AVL subtree makes a node's BF = −2 with the insertion in the LEFT subtree of its RIGHT child. Apply…",
      "options": [
        "Single right rotation",
        "Single left rotation",
        "RL rotation (right on child, then left on node)",
        "Recolor only"
      ],
      "answer": 2,
      "explanation": "Right-of-Left = RL double rotation."
    },
    {
      "prompt": "15. <i>[T10]</i> In array index terms, the LEFT child of node i in a heap sits at…",
      "options": [
        "2i + 1",
        "2i + 2",
        "i / 2",
        "i + 1"
      ],
      "answer": 0,
      "explanation": "Left 2i+1, right 2i+2, parent (i−1)/2, with 0-based arrays."
    },
    {
      "prompt": "16. <i>[T10]</i> Which sequence summarizes heap sort correctly?",
      "options": [
        "Partition → recurse on both sides",
        "Split array in halves → merge",
        "Compare adjacent pairs → swap",
        "Build heap → repeatedly swap root with last &amp; heapify"
      ],
      "answer": 3,
      "explanation": "Two phases: BuildHeap, then extract-max loop. O(n log n), O(1) space."
    },
    {
      "prompt": "17. <i>[T11]</i> Which sorting algorithm is NOT stable in its efficient implementations?",
      "options": [
        "Merge sort",
        "Quick sort",
        "Insertion sort",
        "Bubble sort"
      ],
      "answer": 1,
      "explanation": "Quick sort (partition-exchange sort) does not preserve the relative order of equal items."
    },
    {
      "prompt": "18. <i>[T11]</i> Merge sort (10, 5, 8, 2), after the FIRST merge step, the array contains…",
      "options": [
        "2 5 8 10",
        "5 10 2 8",
        "5 10 2 8",
        "10 5 8 2"
      ],
      "answer": 2,
      "explanation": "First merges sort the adjacent singletons: (10,5) → 5 10 and (8,2) → 2 8 → array 5 10 2 8. One more merge finishes: 2 5 8 10."
    },
    {
      "prompt": "19. <i>[T12]</i> With table size 701, key 580625685 hashes to…",
      "options": [
        "3",
        "301",
        "701",
        "580"
      ],
      "answer": 0,
      "explanation": "580625685 mod 701 = 3: the exact lecture example."
    },
    {
      "prompt": "20. <i>[T12]</i> A search in a linear-probing hash table may pass through…",
      "options": [
        "Only empty slots",
        "Only filled slots with matching keys",
        "No slots at all",
        "Filled, mismatched AND specially-marked deleted slots"
      ],
      "answer": 3,
      "explanation": "Probing continues past mismatches and past marked-deleted holes; it stops only at a match or a truly empty slot."
    }
  ]
};

export default quiz;
