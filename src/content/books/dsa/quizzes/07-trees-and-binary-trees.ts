import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "07-trees-and-binary-trees",
  "title": "Topic 6 Quiz: Trees & Binary Trees",
  "questions": [
    {
      "prompt": "1. A tree is a ______ data structure.",
      "options": [
        "Linear",
        "Non-linear",
        "Circular",
        "Homogeneous"
      ],
      "answer": 1,
      "explanation": "Trees and graphs are non-linear: data items are not arranged in a sequence."
    },
    {
      "prompt": "2. The maximum number of nodes at level 3 of a binary tree is…",
      "options": [
        "3",
        "6",
        "8",
        "16"
      ],
      "answer": 2,
      "explanation": "2<sup>L</sup> with L = 3 → 8 nodes."
    },
    {
      "prompt": "3. A node with degree 0 is called a…",
      "options": [
        "Leaf (terminal / external node)",
        "Root",
        "Internal node",
        "Sentinel"
      ],
      "answer": 0,
      "explanation": "Degree = number of children; zero children ⇒ leaf."
    },
    {
      "prompt": "4. Height of a tree is…",
      "options": [
        "Number of nodes",
        "Number of leaves",
        "The number of ancestors of the root",
        "The maximum depth of any node"
      ],
      "answer": 3,
      "explanation": "Height = maximum depth over all nodes (here counted as links/nodes along the longest path)."
    },
    {
      "prompt": "5. In a strictly binary tree with 5 leaves, how many nodes in total?",
      "options": [
        "5",
        "9",
        "10",
        "11"
      ],
      "answer": 1,
      "explanation": "2n − 1 = 2(5) − 1 = <b>9</b>."
    },
    {
      "prompt": "6. A complete binary tree of depth 2 has how many non-leaf nodes?",
      "options": [
        "2",
        "4",
        "3",
        "7"
      ],
      "answer": 2,
      "explanation": "2<sup>d</sup> − 1 = 2² − 1 = 3 non-leaf nodes (and 2² = 4 leaves)."
    },
    {
      "prompt": "7. In an expression tree, operands are stored…",
      "options": [
        "In the leaves",
        "In the root only",
        "In internal nodes",
        "Nowhere"
      ],
      "answer": 0,
      "explanation": "Operators occupy internal nodes; operands (A, B, C…) are the leaves."
    },
    {
      "prompt": "8. The linked representation of a binary tree node contains…",
      "options": [
        "Only data",
        "Data + one link",
        "Data + prev + next",
        "Data + leftChild + rightChild"
      ],
      "answer": 3,
      "explanation": "Two link fields (left/right child) + one element field."
    }
  ]
};

export default quiz;
