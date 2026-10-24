import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "08-tree-traversals",
  "title": "Topic 7 Quiz: Tree Traversals",
  "questions": [
    {
      "prompt": "1. Which traversal processes the root <b>first</b>?",
      "options": [
        "Inorder",
        "Preorder",
        "Postorder",
        "Level order"
      ],
      "answer": 1,
      "explanation": "Preorder = Root, Left, Right: the root is processed before its subtrees."
    },
    {
      "prompt": "2. Nodes: root 1, left 2 (with left child 4), right 3. Inorder traversal = ?",
      "options": [
        "1 2 3 4",
        "4 2 1 3: wait, check again",
        "4 2 1 3",
        "1 2 4 3"
      ],
      "answer": 2,
      "explanation": "Left of 2 → 4, then 2, then root 1, then right 3 → <b>4 2 1 3</b>."
    },
    {
      "prompt": "3. The inorder traversal of a binary search tree yields…",
      "options": [
        "Sorted order",
        "Reverse sorted order",
        "Random order",
        "Prefix notation"
      ],
      "answer": 0,
      "explanation": "Left (smaller) &lt; Node &lt; Right (larger) ⇒ inorder = ascending order."
    },
    {
      "prompt": "4. Postorder of the expression tree for (A + B) * (X − Y) is…",
      "options": [
        "* + A B − X Y",
        "A + B * X − Y",
        "+ A B − X Y *",
        "A B + X Y − *"
      ],
      "answer": 3,
      "explanation": "Postorder = postorder(left) postorder(right) root → A B + X Y − *."
    },
    {
      "prompt": "5. Breadth-first (level order) traversal of a tree visits…",
      "options": [
        "The deepest nodes first",
        "Level by level, left to right",
        "Right to left only",
        "Root last"
      ],
      "answer": 1,
      "explanation": "Level order processes all nodes of level 0, then level 1, etc."
    },
    {
      "prompt": "6. For tree 1(root), children 2 and 3, node 2 has children 4 and 5, level-order traversal = ?",
      "options": [
        "4 2 5 1 3",
        "1 2 4 5 3",
        "1 2 3 4 5",
        "4 5 2 3 1"
      ],
      "answer": 2,
      "explanation": "Level 0: 1 · level 1: 2 3 · level 2: 4 5 → <b>1 2 3 4 5</b>."
    },
    {
      "prompt": "7. Inserting already-sorted data into a BST produces…",
      "options": [
        "A degenerate tree behaving like a linked list",
        "A perfectly balanced tree",
        "A heap",
        "An AVL tree automatically"
      ],
      "answer": 0,
      "explanation": "Every new key goes to the right only; the tree degenerates into a linear chain, killing the log advantage."
    },
    {
      "prompt": "8. In the traversal trick, inorder processes a node when the path passes…",
      "options": [
        "Down its left side",
        "Up its right side",
        "At the root only",
        "Underneath it"
      ],
      "answer": 3,
      "explanation": "Left side → preorder; underneath → inorder; right side → postorder."
    }
  ]
};

export default quiz;
