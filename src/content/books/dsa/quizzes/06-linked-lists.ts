import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "06-linked-lists",
  "title": "Topic 5 Quiz: Linked Lists",
  "questions": [
    {
      "prompt": "1. Which is NOT an advantage of linked lists over arrays?",
      "options": [
        "Dynamic size",
        "Easier insertion/deletion",
        "Better cache locality",
        "No fixed size at compile time"
      ],
      "answer": 2,
      "explanation": "<b>Arrays</b> have the better cache locality, a known linked-list drawback."
    },
    {
      "prompt": "2. The last node of a singly linked list points to…",
      "options": [
        "The head node",
        "NULL",
        "Itself",
        "The previous node"
      ],
      "answer": 1,
      "explanation": "NULL marks the end of the list (in a <i>circular</i> list it would point back to the head)."
    },
    {
      "prompt": "3. Correct order for inserting node E at the head of a list:",
      "options": [
        "E→next = head; head = E;",
        "head = E; E→next = head;",
        "E→next = NULL; head = E;",
        "head→next = E;"
      ],
      "answer": 0,
      "explanation": "Link the new node to the old head <b>before</b> moving head, otherwise the rest of the list is lost."
    },
    {
      "prompt": "4. Deleting node X from a singly list requires…",
      "options": [
        "Only freeing X",
        "Sorting the list first",
        "Duplicating X",
        "Finding the previous node, relinking, then freeing X"
      ],
      "answer": 3,
      "explanation": "The classic 3 steps: find prev → change prev's next → free(X)."
    },
    {
      "prompt": "5. A doubly linked list outperforms a singly linked list when…",
      "options": [
        "Memory is extremely scarce",
        "Data must stay sorted",
        "The predecessor of a node must be found quickly",
        "Only forward traversal is needed"
      ],
      "answer": 2,
      "explanation": "prev pointers give the predecessor instantly, in a singly list you must traverse from the head."
    },
    {
      "prompt": "6. In a circular linked list, the last node's next field contains…",
      "options": [
        "NULL",
        "The address of the first node",
        "Its own address",
        "A sentinel value"
      ],
      "answer": 1,
      "explanation": "Storing the first node's address in the last node closes the ring, “no beginning and no end”."
    },
    {
      "prompt": "7. Sentinel (header/trailer) nodes in a DLL are special because they…",
      "options": [
        "Store no data: they simplify edge-case coding",
        "Hold the largest keys",
        "Are always red",
        "Store two data items"
      ],
      "answer": 0,
      "explanation": "They guarantee every real node has a previous node, no NULL special cases when inserting/removing."
    },
    {
      "prompt": "8. Implementing a stack with a linked list, push is…",
      "options": [
        "Appending at the tail and scanning",
        "Inserting after the second node",
        "Inserting at the head, which becomes top",
        "Reversing the list each time"
      ],
      "answer": 2,
      "explanation": "Each push makes the new node the head/top: <code>n-&gt;next = top; top = n;</code>. O(1)."
    }
  ]
};

export default quiz;
