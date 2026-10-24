import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "10-avl-trees-and-balanced-trees",
  "title": "Topic 9 Quiz — AVL Trees",
  "questions": [
    {
      "prompt": "1. An AVL tree is a…",
      "options": [
        "Self-balancing linked list",
        "Self-balancing binary search tree",
        "Complete graph",
        "Hash table variant"
      ],
      "answer": 1,
      "explanation": "AVL = BST + balance factor restriction, maintained with rotations."
    },
    {
      "prompt": "2. A node's left subtree height is 4 and right subtree height is 1. Its balance factor is…",
      "options": [
        "5",
        "−3",
        "+3",
        "0"
      ],
      "answer": 2,
      "explanation": "BF = 4 − 1 = +3 → outside {−1, 0, 1} → this tree is not AVL."
    },
    {
      "prompt": "3. Which statement is TRUE?",
      "options": [
        "Every AVL tree is a BST, but not every BST is an AVL tree",
        "Every BST is an AVL tree",
        "AVL trees allow duplicates freely",
        "AVL trees are always complete"
      ],
      "answer": 0,
      "explanation": "AVL adds the balance condition on top of the BST property."
    },
    {
      "prompt": "4. A node reaches BF = +2 after inserting into the RIGHT subtree of its LEFT child. The cure is…",
      "options": [
        "Single right rotation",
        "Single left rotation",
        "No rotation needed",
        "LR — left rotation on the child, then right rotation on the node"
      ],
      "answer": 3,
      "explanation": "Right-of-Left = LR case: first rotate the child left (making it LL), then rotate the node right."
    },
    {
      "prompt": "5. Time complexity of insertion in an AVL tree…",
      "options": [
        "O(n)",
        "O(log n)",
        "O(1)",
        "O(n log n)"
      ],
      "answer": 1,
      "explanation": "Height stays logarithmic, so BST-insert + a constant number of rotations = O(log n)."
    },
    {
      "prompt": "6. In AVL insertion, a new node is always inserted…",
      "options": [
        "At the root",
        "As an internal node with two children",
        "As a leaf, using BST insertion logic",
        "In the leftmost position"
      ],
      "answer": 2,
      "explanation": "Step 1: normal BST insert (as a leaf) · Step 2: update heights up to the root · Step 3: rotate where BF = ±2."
    },
    {
      "prompt": "7. In a Red-Black tree, which pair of consecutive colours is FORBIDDEN?",
      "options": [
        "Red → Red (parent and child)",
        "Black → Black",
        "Red → Black",
        "Black → Red"
      ],
      "answer": 0,
      "explanation": "Children of a red node must be black — no two consecutive red nodes."
    },
    {
      "prompt": "8. Inserting 1, 2, 3, 4 into an empty AVL tree leaves which node as the root?",
      "options": [
        "1",
        "3",
        "4",
        "2"
      ],
      "answer": 3,
      "explanation": "After 3 arrives, node 1 is RR-unbalanced → left rotation promotes 2: root 2 with children 1, 3. Node 4 hangs under 3."
    },
    {
      "prompt": "The Balance Factor of a node is calculated as…",
      "options": [
        "Height(Right) − Height(Left)",
        "Height(Left) − Height(Right)",
        "Number of nodes on the left",
        "Depth of the node from the root"
      ],
      "answer": 1,
      "explanation": "BF = Height(left subtree) − Height(right subtree). Positive → left-heavy, negative → right-heavy."
    },
    {
      "prompt": "Which BF values are allowed in an AVL tree?",
      "options": [
        "Only 0",
        "Any value from −2 to +2",
        "−1, 0, +1",
        "Any value, as long as the root is 0"
      ],
      "answer": 2,
      "explanation": "The AVL rule: every node must have BF ∈ {−1, 0, +1}. Anything beyond that (±2 or more) triggers a rotation."
    },
    {
      "prompt": "Insert 10, 20, 30 (in order) into an empty AVL tree. What happens?",
      "options": [
        "LL case → single right rotation",
        "LR case → double rotation",
        "RR case → single left rotation",
        "No rotation needed"
      ],
      "answer": 2,
      "explanation": "10→20→30 forms a straight right line: after inserting 30, node 10 has BF = −2 (RR case) → a single LEFT rotation makes 20 the root."
    },
    {
      "prompt": "A node has BF = +2 and its left child has BF = −1. Which case is this?",
      "options": [
        "LL — single right rotation",
        "LR — left then right rotation",
        "RR — single left rotation",
        "RL — right then left rotation"
      ],
      "answer": 1,
      "explanation": "BF = +2 with a left child of BF = −1 is a zig-zag = LR case. Fix the bend first (left-rotate the left child), then right-rotate the unbalanced node."
    },
    {
      "prompt": "What is the main advantage of an AVL tree over a normal BST?",
      "options": [
        "It uses less memory",
        "It sorts data faster",
        "It needs no height information",
        "Guaranteed O(log n) search — never degenerates"
      ],
      "answer": 3,
      "explanation": "Balancing keeps the height ≈ 1.44·log n, so search / insert / delete are guaranteed O(log n) — unlike a normal BST whose worst case is O(n)."
    },
    {
      "prompt": "When inserting, a new node is first colored…",
      "options": [
        "RED — it may only break the red-red rule locally",
        "BLACK — to keep paths equal",
        "Randomly RED or BLACK",
        "The same color as its parent"
      ],
      "answer": 0,
      "explanation": "A new node is always RED: it can only break Rule 4 (no red-red), which is a local, easy fix. Inserting BLACK would break Rule 5 (equal black counts) on every path in the tree."
    },
    {
      "prompt": "Which rule does a RED node with a RED child violate?",
      "options": [
        "Rule 2 — root is black",
        "Rule 3 — NILs are black",
        "Rule 4 — no red-red pair",
        "Rule 5 — equal black counts"
      ],
      "answer": 2,
      "explanation": "Rule 4: a RED node can never have a RED child. This, combined with equal black counts (Rule 5), bounds the height at 2·log n."
    },
    {
      "prompt": "A red-red violation occurs and the uncle is RED. The fix is…",
      "options": [
        "Rotate the grandparent",
        "Recolor: parent & uncle BLACK, grandparent RED",
        "Delete the new node",
        "Make the whole tree black"
      ],
      "answer": 1,
      "explanation": "RED uncle → RECOLOR: parent & uncle become BLACK, grandparent becomes RED, then continue checking from the grandparent. No rotation needed!"
    },
    {
      "prompt": "A red-red violation occurs and the uncle is BLACK (or NIL). The fix is…",
      "options": [
        "Recolor only — same as red uncle",
        "Move the node to the root",
        "Rotate (LL/RR/LR/RL) + recolor",
        "Rebuild the whole tree"
      ],
      "answer": 2,
      "explanation": "BLACK uncle → rotate (LL/RR single, LR/RL double) + recolor. Unlike recoloring, a rotation fix ends the fix-up immediately — no cascade."
    },
    {
      "prompt": "In a Red-Black tree, the longest root→leaf path is at most…",
      "options": [
        "Equal to the shortest path",
        "2 × the shortest path",
        "3 × the shortest path",
        "n/2 times the shortest path"
      ],
      "answer": 1,
      "explanation": "Rule 5 + Rule 4 together mean every path has the same blacks, with at most 1 red per black → the longest path can be at most twice the shortest → height ≤ 2·log₂(n+1)."
    },
    {
      "prompt": "Where are Red-Black trees used in the real world?",
      "options": [
        "Only in academic exercises",
        "C++ std::map, Java TreeMap, Linux kernel",
        "Only in graphics cards",
        "They were replaced by arrays"
      ],
      "answer": 1,
      "explanation": "Red-Black trees power C++ std::map/set, Java TreeMap/TreeSet, and the Linux kernel (e.g., the CFS scheduler) — chosen for reliably fast insert/delete."
    }
  ]
};

export default quiz;
