import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "02-introduction-to-dsa",
  "title": "Topic 1 Quiz: Introduction to DSA",
  "questions": [
    {
      "prompt": "1. A step-by-step procedure which can be applied to data to achieve some goal is called…",
      "options": [
        "A data structure",
        "An algorithm",
        "An ADT",
        "A program"
      ],
      "answer": 1,
      "explanation": "<b>Algorithm.</b> A program <i>implements</i> an algorithm; a data structure organizes the data it works on."
    },
    {
      "prompt": "2. Which of the following is a <b>non-linear</b> data structure?",
      "options": [
        "Array",
        "Stack",
        "Tree",
        "Queue"
      ],
      "answer": 2,
      "explanation": "<b>Tree.</b> Trees and graphs are non-linear; array, stack, queue and linked list are linear."
    },
    {
      "prompt": "3. A data structure whose size is fixed at compile time is called…",
      "options": [
        "Static",
        "Dynamic",
        "Homogeneous",
        "Primitive"
      ],
      "answer": 0,
      "explanation": "<b>Static</b>, e.g. an array. Dynamic structures (linked lists) expand or shrink during execution."
    },
    {
      "prompt": "4. Which is <b>NOT</b> one of the six classic data structure operations?",
      "options": [
        "Traversing",
        "Merging",
        "Deletion",
        "Iteration"
      ],
      "answer": 3,
      "explanation": "<b>Iteration</b> is a control-flow concept. The six operations are: traversing, searching, insertion, deletion, sorting, merging."
    },
    {
      "prompt": "5. “Quick insertion, quick deletion, but slow search” describes which data structure?",
      "options": [
        "Array",
        "Ordered array",
        "Linked list",
        "Binary tree"
      ],
      "answer": 2,
      "explanation": "<b>Linked list.</b> Nodes are re-linked in O(1) for insertion/deletion at a known position, but finding the position requires sequential search."
    },
    {
      "prompt": "6. An ADT is concerned with…",
      "options": [
        "How the data is stored in memory",
        "What the data represents, not how it is implemented",
        "The C source code of the operations",
        "Compiler optimizations"
      ],
      "answer": 1,
      "explanation": "<b>What, not how.</b> The user interacts with the interface; the implementation is hidden one level deeper."
    },
    {
      "prompt": "7. int, float, char and boolean are examples of…",
      "options": [
        "Primitive data structures",
        "Abstract data structures",
        "Non-linear structures",
        "Composite types only"
      ],
      "answer": 0,
      "explanation": "<b>Primitive data structures</b>: built into the language. Stack, queue, tree, graph, linked list are abstract data structures."
    }
  ]
};

export default quiz;
