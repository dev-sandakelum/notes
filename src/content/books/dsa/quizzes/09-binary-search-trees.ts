import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "09-binary-search-trees",
  "title": "Topic 8 Quiz — Binary Search Trees",
  "questions": [
    {
      "prompt": "1. In a BST, the right subtree of any node contains only keys…",
      "options": [
        "Smaller than the node",
        "Equal to the node",
        "Greater than the node",
        "Randomly placed"
      ],
      "answer": 2,
      "explanation": "Right = greater, left = smaller — at <i>every</i> node of the tree."
    },
    {
      "prompt": "2. Searching a balanced BST with N nodes costs…",
      "options": [
        "O(log N)",
        "O(N)",
        "O(1)",
        "O(N log N)"
      ],
      "answer": 0,
      "explanation": "Each comparison discards a subtree — height is log₂(N+1) when balanced."
    },
    {
      "prompt": "3. Inserting 63 into the lecture BST (50, 76, 65, 59…) ends as the right child of…",
      "options": [
        "50",
        "65",
        "76",
        "59"
      ],
      "answer": 3,
      "explanation": "63 &gt; 50 → right; 63 &lt; 76 → left; 63 &lt; 65 → left; 63 &gt; 59 and 59 has no right child ⇒ lands under 59."
    },
    {
      "prompt": "4. Deleting a node with <b>one child</b> is done by…",
      "options": [
        "Making the child the new root",
        "Linking its parent directly to its child, then freeing it",
        "Copying the child's data into it",
        "Doing nothing"
      ],
      "answer": 1,
      "explanation": "Bypass (short-circuit) the node: parent adopts the grandchild."
    },
    {
      "prompt": "5. Deleting a node with <b>two children</b> replaces its key with…",
      "options": [
        "Its left child's key",
        "The root's key",
        "Inorder predecessor or inorder successor",
        "Its sibling's key"
      ],
      "answer": 2,
      "explanation": "Either replacement keeps the inorder sequence sorted; the swapped node then deletes as case 1 or 2."
    },
    {
      "prompt": "6. Keys 10, 20, 30, 40 inserted into an empty BST in that order produce…",
      "options": [
        "A right-only chain (degenerate)",
        "A perfectly balanced tree",
        "A left-only chain",
        "A heap"
      ],
      "answer": 0,
      "explanation": "Each key is larger, so every insertion goes right — the tree becomes a linked list. Random insertion order gives roughly balanced trees."
    },
    {
      "prompt": "7. Which is NOT a valid BST application listed in the lecture?",
      "options": [
        "Arithmetic expression trees",
        "Decision trees",
        "Priority queues",
        "Keyboard buffers"
      ],
      "answer": 3,
      "explanation": "Keyboard buffering is a queue application. The listed BST applications: expression trees, decision trees, AVL, priority queues, heaps."
    },
    {
      "prompt": "8. The inorder traversal 2, 3, 4, 5, 6 comes from which tree?",
      "options": [
        "Any binary tree whatsoever",
        "Any BST whose keys are 2–6, whatever its shape",
        "Only a complete tree",
        "Only a heap"
      ],
      "answer": 1,
      "explanation": "Inorder of a BST is sorted regardless of shape — that's the invariant."
    },
    {
      "prompt": "The in-order successor of a node with two children is…",
      "options": [
        "The largest node in the left subtree",
        "The smallest node in the right subtree",
        "The root of the tree",
        "Any leaf node"
      ],
      "answer": 1,
      "explanation": "The successor is the NEXT value in sorted order — the smallest node of the right subtree (go right once, then keep going left)."
    },
    {
      "prompt": "To find the in-order predecessor, you…",
      "options": [
        "Go right once, then keep going left",
        "Go left once, then keep going right",
        "Always start at the root",
        "Delete the left child first"
      ],
      "answer": 1,
      "explanation": "Predecessor = PREVIOUS value in sorted order — go LEFT once, then keep going RIGHT as far as possible."
    },
    {
      "prompt": "The replacement node (successor or predecessor) can have…",
      "options": [
        "Two children",
        "Exactly one child, always",
        "At most one child",
        "Any number of children"
      ],
      "answer": 2,
      "explanation": "Because we travel as far as possible in ONE direction, that node has no child on that side — so it has at most one child, making it easy to delete."
    },
    {
      "prompt": "Which traversal of a BST outputs values in sorted order?",
      "options": [
        "Pre-order",
        "Post-order",
        "In-order",
        "Level-order"
      ],
      "answer": 2,
      "explanation": "In-order traversal of a BST visits nodes in ascending sorted order — that's exactly why 'in-order successor/predecessor' get their names."
    }
  ]
};

export default quiz;
