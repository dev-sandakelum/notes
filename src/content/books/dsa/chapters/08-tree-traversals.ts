import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "08-tree-traversals",
    "number": 8,
    "title": "Tree traversals",
    "subtitle": "Lecture 7 (Trees part 2) · Labs 6–7",
    "kind": "topic",
    "words": 2763,
    "minutes": 14
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "the-four-traversals",
      "text": "The four traversals"
    },
    {
      "type": "paragraph",
      "html": "Unlike arrays, lists, stacks and queues, which have essentially one logical order, trees can be visited in different ways. Every traversal visits the <b>left subtree before the right subtree</b>; they differ in <b>when the node itself</b> is processed:"
    },
    {
      "type": "table",
      "head": [
        "Traversal",
        "Order",
        "Expression tree output"
      ],
      "rows": [
        [
          "<b>Preorder</b>",
          "<b>Root</b> → Left → Right",
          "Prefix notation"
        ],
        [
          "<b>Inorder</b>",
          "Left → <b>Root</b> → Right",
          "Infix notation · <b>sorted order in a BST.</b>"
        ],
        [
          "<b>Postorder</b>",
          "Left → Right → <b>Root</b>",
          "Postfix notation"
        ],
        [
          "<b>Level order (BFS)</b>",
          "Level by level, left to right",
          "None"
        ]
      ],
      "highlightRows": [
        0,
        1,
        2
      ]
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "Trace-around trick",
      "html": "Draw a path around the tree starting on the <b>left of the root</b>, staying close to it. <b>Preorder</b>: process a node when you pass <b>down its left side</b>. <b>Inorder</b>: when you pass <b>underneath</b> it. <b>Postorder</b>: when you pass <b>up its right side</b>."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "interactive-traversal-trainer",
      "text": "Interactive traversal trainer"
    },
    {
      "type": "viz",
      "kind": "bstTraversal",
      "caption": "Try to predict the sequence first, then verify. New tree generates a fresh random BST."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "the-recursive-c-code-know-it-by-heart",
      "text": "The recursive C code: know it by heart"
    },
    {
      "type": "code",
      "language": "c",
      "html": "<span class=\"tok-kw\">void</span> <span class=\"tok-fn\">inorder</span>(<span class=\"tok-kw\">struct</span> node* root) {\n    <span class=\"tok-kw\">if</span> (root == NULL) <span class=\"tok-kw\">return</span>;      <span class=\"tok-cm\">/* the base case            */</span>\n    <span class=\"tok-fn\">inorder</span>(root-&gt;left);            <span class=\"tok-cm\">/* 1. left subtree          */</span>\n    <span class=\"tok-fn\">printf</span>(<span class=\"tok-str\">\"%d -&gt;\"</span>, root-&gt;data);     <span class=\"tok-cm\">/* 2. the node              */</span>\n    <span class=\"tok-fn\">inorder</span>(root-&gt;right);           <span class=\"tok-cm\">/* 3. right subtree         */</span>\n}\n<span class=\"tok-kw\">void</span> <span class=\"tok-fn\">preorder</span>(<span class=\"tok-kw\">struct</span> node* root) {\n    <span class=\"tok-kw\">if</span> (root == NULL) <span class=\"tok-kw\">return</span>;\n    <span class=\"tok-fn\">printf</span>(<span class=\"tok-str\">\"%d -&gt;\"</span>, root-&gt;data);     <span class=\"tok-cm\">/* node FIRST                */</span>\n    <span class=\"tok-fn\">preorder</span>(root-&gt;left);\n    <span class=\"tok-fn\">preorder</span>(root-&gt;right);\n}\n<span class=\"tok-kw\">void</span> <span class=\"tok-fn\">postorder</span>(<span class=\"tok-kw\">struct</span> node* root) {\n    <span class=\"tok-kw\">if</span> (root == NULL) <span class=\"tok-kw\">return</span>;\n    <span class=\"tok-fn\">postorder</span>(root-&gt;left);\n    <span class=\"tok-fn\">postorder</span>(root-&gt;right);\n    <span class=\"tok-fn\">printf</span>(<span class=\"tok-str\">\"%d -&gt;\"</span>, root-&gt;data);     <span class=\"tok-cm\">/* node LAST                 */</span>\n}"
    },
    {
      "type": "example",
      "title": "Classic exam tree (lecture 7)",
      "bodyHtml": "<p>For the tree below, write all three depth-first traversals.</p>\n    <div class=\"dia\">\n      <svg class=\"treesvg\" viewBox=\"0 0 420 190\" width=\"420\" role=\"img\" aria-label=\"Tree 12 49 13 5 42\">\n        <line class=\"edge\" x1=\"210\" y1=\"34\" x2=\"110\" y2=\"94\"></line>\n        <line class=\"edge\" x1=\"210\" y1=\"34\" x2=\"310\" y2=\"94\"></line>\n        <line class=\"edge\" x1=\"110\" y1=\"94\" x2=\"50\" y2=\"154\"></line>\n        <line class=\"edge\" x1=\"110\" y1=\"94\" x2=\"170\" y2=\"154\"></line>\n        <circle class=\"vtx\" cx=\"210\" cy=\"34\" r=\"24\"></circle><text class=\"vlbl\" x=\"210\" y=\"34\">12</text>\n        <circle class=\"vtx\" cx=\"110\" cy=\"94\" r=\"24\"></circle><text class=\"vlbl\" x=\"110\" y=\"94\">49</text>\n        <circle class=\"vtx\" cx=\"310\" cy=\"94\" r=\"24\"></circle><text class=\"vlbl\" x=\"310\" y=\"94\">42</text>\n        <circle class=\"vtx\" cx=\"50\" cy=\"154\" r=\"22\"></circle><text class=\"vlbl\" x=\"50\" y=\"154\">13</text>\n        <circle class=\"vtx\" cx=\"170\" cy=\"154\" r=\"22\"></circle><text class=\"vlbl\" x=\"170\" y=\"154\">5</text>\n      </svg>\n      <div class=\"dia-cap\">Preorder: process passing down the left side · Inorder: passing underneath · Postorder: passing up the right side</div>\n    </div>",
      "solutionHtml": "<p><b>Preorder:</b> 12 49 13 5 42 &nbsp;(root first, then left subtree, then right subtree)<br>\n      <b>Inorder:</b> 13 49 5 12 42 &nbsp;&nbsp;(left, node, right)<br>\n      <b>Postorder:</b> 13 5 49 42 12 (left, right, node)</p>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "expression-trees-notations",
      "text": "Expression trees → notations"
    },
    {
      "type": "paragraph",
      "html": "Building an expression tree for <code>A/B*C*D+E</code> and traversing it three ways gives the three notations directly:"
    },
    {
      "type": "treeDiagram",
      "alt": "Expression tree for A/B*C*D+E",
      "caption": "Inorder → A/B*C*D+E (infix) · Preorder → +**/ABCDE (prefix) · Postorder → AB/C*D*E+ (postfix)",
      "maxWidth": 560,
      "nodes": [
        { "id": "n0", "label": "+", "x": 230, "y": 40, "r": 21 },
        { "id": "n1", "label": "*", "x": 120, "y": 100, "r": 21 },
        { "id": "n2", "label": "E", "x": 410, "y": 100, "r": 21 },
        { "id": "n3", "label": "*", "x": 55, "y": 160, "r": 21 },
        { "id": "n4", "label": "D", "x": 185, "y": 160, "r": 21 },
        { "id": "n5", "label": "/", "x": 25, "y": 205, "r": 18 },
        { "id": "n6", "label": "C", "x": 90, "y": 205, "r": 18 },
        { "id": "n7", "label": "B", "x": 155, "y": 205, "r": 18 },
        { "id": "n8", "label": "A", "x": 220, "y": 205, "r": 18 }
      ],
      "edges": [
        ["n0", "n1"],
        ["n0", "n2"],
        ["n1", "n3"],
        ["n1", "n4"],
        ["n3", "n5"],
        ["n3", "n6"],
        ["n4", "n7"],
        ["n4", "n8"]
      ]
    },
    {
      "type": "accordion",
      "items": [
        {
          "title": "Exercise 1: draw the expression tree for A + (B * (C / D))",
          "html": "<p><b>Answer:</b> root is <b>+</b>. Left subtree: single leaf <b>A</b>. Right subtree of <b>+</b>: node <b>*</b> with left child <b>B</b> and right child <b>/</b> (which has children C and D).<br>\n      Inorder gives back A + B * C / D; preorder gives + A * B / C D; postorder gives A B C D / * +.</p>"
        }
      ]
    },
    {
      "type": "accordion",
      "items": [
        {
          "title": "Exercise 2: draw the tree for A * B − (C + D) * (P / Q)",
          "html": "<p><b>Answer:</b> root <b>−</b>. Left subtree: <b>*</b> with leaves A, B. Right subtree: <b>*</b> with children <b>+</b> (leaves C, D) and <b>/</b> (leaves P, Q).<br>\n      Preorder: − * A B * + C D / P Q · Postorder: A B * C D + P Q / * −</p>"
        }
      ]
    },
    {
      "type": "accordion",
      "items": [
        {
          "title": "Exercise 3: the classic: (A + B) * (X − Y)",
          "html": "<p><b>Tree:</b> root <b>*</b>; left child <b>+</b> (A, B); right child <b>−</b> (X, Y).<br>\n      <b>Infix (inorder):</b> A + B * X − Y (ambiguous without brackets)<br>\n      <b>Prefix (preorder):</b> * + A B − X Y<br>\n      <b>Postfix (postorder):</b> A B + X Y − *</p>"
        }
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "height-depth-and-levels-the-numbers-game",
      "text": "Height, depth and levels: the numbers game"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Node height</b>: path length to its most distant <i>descendant</i>; tree height = height of the root.",
        "<b>Depth</b>: path length from the node <i>up to the root</i>.",
        "<b>Levels</b>: number of nodes along any path; 4 nodes on the longest path ⇒ 4 levels.",
        "For height H (L = H + 1 levels): at most 2<sup>L</sup> − 1 = N nodes; balanced worst-case search is log₂(N+1) = L levels, versus N for a linked list. Insert/delete should work towards producing <b>balanced</b> trees: inserting sorted data degenerates a BST into a linked list."
      ]
    },
    {
      "type": "flashcards",
      "cards": [
        {
          "front": "<span class=\"fc-q\">Preorder sequence?</span>",
          "back": "<div class=\"fc-a\">Root → Left → Right</div>",
          "category": "Order"
        },
        {
          "front": "<span class=\"fc-q\">Inorder of a BST gives…?</span>",
          "back": "<div class=\"fc-a\">Sorted (ascending) order</div>",
          "category": "Order"
        },
        {
          "front": "<span class=\"fc-q\">Postorder sequence?</span>",
          "back": "<div class=\"fc-a\">Left → Right → Root</div>",
          "category": "Order"
        },
        {
          "front": "<span class=\"fc-q\">Level-order traversal is also called…?</span>",
          "back": "<div class=\"fc-a\">Breadth-First traversal: visit level by level</div>",
          "category": "BFS"
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Topic 7 Quiz: Tree Traversals",
      "count": 8,
      "quizSlug": "08-tree-traversals"
    },
    {
      "type": "viz",
      "kind": "notationPlayer",
      "caption": "Optional: watch the same tree produce all three notations."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "traversals-and-notations-deeper-notes",
      "text": "Traversals & notations: deeper notes"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "1-homogeneous-in-data-structures",
      "text": "1 · homogeneous in data structures"
    },
    {
      "type": "paragraph",
      "html": "Homogeneous = all elements are of the SAME data type"
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Note",
      "html": "A <b>homogeneous</b> data structure contains elements of the <b>same data type</b>. An array is the classic example, every slot must hold an <code>int</code> (or whatever type it was declared with)."
    },
    {
      "type": "code",
      "language": "c",
      "html": "int numbers[5] = {10, 20, 30, 40, 50}; <span class=\"tok-cm\">// all int → homogeneous ✔</span>"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "homogeneous-vs-heterogeneous",
      "text": "Homogeneous vs heterogeneous"
    },
    {
      "type": "table",
      "head": [
        "Homogeneous",
        "Heterogeneous"
      ],
      "rows": [
        [
          "All elements <b>same type</b>",
          "Elements can be <b>different types</b>"
        ],
        [
          "<code>int arr[] = {1,2,3};</code>",
          "<code>struct Student { char name[20]; int age; float gpa; };</code>"
        ],
        [
          "Example: arrays",
          "Example: structs, class objects, Python lists"
        ]
      ]
    },
    {
      "type": "code",
      "language": "c",
      "html": "struct Student { char name[50]; <span class=\"tok-cm\">// string</span> int age; <span class=\"tok-cm\">// integer</span> float gpa; <span class=\"tok-cm\">// float</span>\n}; <span class=\"tok-cm\">// mixed types → heterogeneous ✔</span>"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "why-homogeneity-matters",
      "text": "Why homogeneity matters"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Memory efficiency &amp; O(1) access</b>: equal-sized elements let the computer compute any address instantly.",
        "<b>Type safety</b>: the compiler knows every element's type; errors are caught early.",
        "<b>Predictable operations</b>: sorting/searching behave consistently."
      ]
    },
    {
      "type": "callout",
      "variant": "warn",
      "title": "Note",
      "html": "<b>Note:</b> Python lists are actually <b>heterogeneous</b> (mixed types allowed), but <b>NumPy arrays</b> are homogeneous, that's why NumPy is much faster for numerical work."
    },
    {
      "type": "viz",
      "kind": "traversalPlayer",
      "caption": "Optional: step through the real recursive traversal (the static trace tables below stay)."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "2-pre-order-in-order-post-order-traversal",
      "text": "2 · pre-order, in-order, post-order traversal"
    },
    {
      "type": "paragraph",
      "html": "Depth-first traversals: they differ only in WHEN the root is visited"
    },
    {
      "type": "table",
      "head": [
        "Traversal",
        "Order",
        "Root position"
      ],
      "rows": [
        [
          "<b>Pre</b>-order",
          "Root → Left → Right",
          "Root <b>first</b>"
        ],
        [
          "<b>In</b>-order",
          "Left → Root → Right",
          "Root in the <b>middle</b>"
        ],
        [
          "<b>Post</b>-order",
          "Left → Right → Root",
          "Root <b>last</b>"
        ]
      ]
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "recursive-code-identical-except-one-line",
      "text": "Recursive code (identical except one line)"
    },
    {
      "type": "code",
      "language": "c",
      "html": "void preorder(struct Node* root) { if (root == NULL) return; printf(\"%d \", root-&gt;data); <span class=\"tok-cm\">// Root ← position differs</span> preorder(root-&gt;left); <span class=\"tok-cm\">// Left</span> preorder(root-&gt;right); <span class=\"tok-cm\">// Right</span>\n}\nvoid inorder(struct Node* root) { if (root == NULL) return; inorder(root-&gt;left); <span class=\"tok-cm\">// Left</span> printf(\"%d \", root-&gt;data); <span class=\"tok-cm\">// Root ← position differs</span> inorder(root-&gt;right); <span class=\"tok-cm\">// Right</span>\n}\nvoid postorder(struct Node* root) { if (root == NULL) return; postorder(root-&gt;left); <span class=\"tok-cm\">// Left</span> postorder(root-&gt;right); <span class=\"tok-cm\">// Right</span> printf(\"%d \", root-&gt;data); <span class=\"tok-cm\">// Root ← position differs</span>\n}"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "when-to-use-each",
      "text": "When to use each"
    },
    {
      "type": "table",
      "head": [
        "Traversal",
        "Common uses"
      ],
      "rows": [
        [
          "<b>Pre-order</b>",
          "Copying/cloning a tree, serializing, prefix (Polish) expressions"
        ],
        [
          "<b>In-order</b>",
          " On a <b>BST → sorted (ascending) output.</b>"
        ],
        [
          "<b>Post-order</b>",
          "Deleting/freeing a tree (children before parent), postfix expressions, folder sizes"
        ]
      ]
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Note",
      "html": "<b>Exam favorite:</b> in-order traversal of a <b>BST</b> always prints elements in <b>sorted order</b>."
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Note",
      "html": "<b>Complexity:</b> Time <b>O(n)</b> (each node once) · Space <b>O(h)</b> (recursion stack, h = height)."
    },
    {
      "type": "callout",
      "variant": "warn",
      "title": "Note",
      "html": "<b>Memory trick:</b> <b>Pre</b> = root first, <b>In</b> = root in middle, <b>Post</b> = root last. Left-before-right never changes."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "3-post-order-deeper-dive",
      "text": "3 · post-order: deeper dive"
    },
    {
      "type": "paragraph",
      "html": "Left → Right → Root · a node prints only when BOTH subtrees are finished"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "bigger-tree-full-trace",
      "text": "Bigger tree, full trace"
    },
    {
      "type": "ascii",
      "alt": "Binary tree with root 1, children 2 and 3, level-3 nodes 4 to 7, and leaves 8 and 9 under 4",
      "caption": "The example tree for the full depth-first trace below.",
      "lines": [
        "        1",
        "      /   \\",
        "     2     3",
        "    / \\   / \\",
        "   4   5 6   7",
        "  / \\",
        " 8   9"
      ]
    },
    {
      "type": "code",
      "language": "c",
      "html": "8 (leaf) → 9 (leaf) → 4 (both kids done) → 5 → 2 (done)\n→ 6 → 7 → 3 (done) → 1 (everything done) Post-order: 8 9 4 5 2 6 7 3 1"
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Note",
      "html": "<b>Mental model:</b> a node's value prints on its <b>third visit</b>, passed going down-left, passed returning from the left, and finally when arriving back from the right."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "iterative-post-order-method-a-two-stacks",
      "text": "Iterative post-order: method A: two stacks"
    },
    {
      "type": "paragraph",
      "html": "<b>Trick:</b> run modified pre-order (<b>Root → Right → Left</b>) and <b>reverse the result</b> → post-order."
    },
    {
      "type": "code",
      "language": "c",
      "html": "void postorderTwoStacks(struct Node* root) { struct Node *s1[100], *s2[100]; int top1 = -1, top2 = -1; if (root == NULL) return; s1[++top1] = root; while (top1 != -1) { struct Node* node = s1[top1--]; <span class=\"tok-cm\">// pop s1</span> s2[++top2] = node; <span class=\"tok-cm\">// push s2</span> if (node-&gt;left) s1[++top1] = node-&gt;left; if (node-&gt;right) s1[++top1] = node-&gt;right; } while (top2 != -1) <span class=\"tok-cm\">// drain s2 = reversed</span> printf(\"%d \", s2[top2--]-&gt;data);\n}"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "method-b-one-stack-with-lastvisited-interview-classic",
      "text": "Method B: one stack with lastVisited (interview classic)"
    },
    {
      "type": "code",
      "language": "c",
      "html": "void postorderOneStack(struct Node* root) { struct Node* stack[100]; int top = -1; struct Node *current = root, *lastVisited = NULL; while (current != NULL || top != -1) { while (current != NULL) { <span class=\"tok-cm\">// go as far left as possible</span> stack[++top] = current; current = current-&gt;left; } struct Node* peek = stack[top]; if (peek-&gt;right != NULL &amp;&amp; lastVisited != peek-&gt;right) { current = peek-&gt;right; <span class=\"tok-cm\">// right subtree not done yet</span> } else { printf(\"%d \", peek-&gt;data); <span class=\"tok-cm\">// safe to print now</span> lastVisited = stack[top--]; <span class=\"tok-cm\">// pop</span> } }\n}"
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Note",
      "html": "The whole trick is one condition: <code>lastVisited = peek-&gt;right</code>: it answers <i>\"did I come from the left (go right first) or the right (now print)?\"</i>"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "where-post-order-is-actually-required",
      "text": "Where post-order is actually REQUIRED"
    },
    {
      "type": "paragraph",
      "html": "Any problem where a <b>parent's answer depends on its children's answers</b>:"
    },
    {
      "type": "code",
      "language": "c",
      "html": "int height(struct Node* root) { <span class=\"tok-cm\">// height = children first</span> if (root == NULL) return 0; int leftH = height(root-&gt;left); <span class=\"tok-cm\">// 1. left</span> int rightH = height(root-&gt;right); <span class=\"tok-cm\">// 2. right</span> return 1 + (leftH &gt; rightH ? leftH : rightH); <span class=\"tok-cm\">// 3. root LAST</span>\n} void freeTree(struct Node* root) { <span class=\"tok-cm\">// deletion: children first.</span> if (root == NULL) return; freeTree(root-&gt;left); freeTree(root-&gt;right); free(root); <span class=\"tok-cm\">// can't free parent before kids</span>\n}"
    },
    {
      "type": "ascii",
      "alt": "Expression tree for (A times B) plus (C minus D) with its post-order reading",
      "lines": [
        "Expression tree:            Post-order → A B * C D - +",
        "                            = postfix of (A*B) + (C-D)",
        "",
        "        +                   * and - ← how compilers",
        "       / \\                     evaluate expressions.",
        "      *   -",
        "     /\\   /\\",
        "    A  B C  D"
      ]
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Note",
      "html": "<b>Rule of thumb:</b> if a node's computation <b>depends on its children's results</b>, the algorithm is post-order."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "4-prefix-infix-and-postfix-notation",
      "text": "4 · prefix, infix & postfix notation"
    },
    {
      "type": "paragraph",
      "html": "Three ways to write the same expression, computers prefer the unambiguous ones"
    },
    {
      "type": "table",
      "head": [
        "Notation",
        "Operator position",
        "Example",
        "Also called"
      ],
      "rows": [
        [
          "<b>Infix</b>",
          "Between operands",
          "<code>A + B</code>",
          "Normal human notation"
        ],
        [
          "<b>Prefix</b>",
          "Before operands",
          "<code>+ A B</code>",
          "Polish notation"
        ],
        [
          "<b>Postfix</b>",
          "After operands",
          "<code>A B +</code>",
          "Reverse Polish (RPN)"
        ]
      ]
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Note",
      "html": "❓ <b>Why do these exist?</b> Infix needs precedence + parentheses: <code>5 + 3 * 2</code>: is it 16 or 11? Prefix/postfix have <b>zero ambiguity</b>: no parentheses, no precedence, and evaluate in <b>one stack pass, O(n)</b>. Compilers convert your infix code to postfix."
    },
    {
      "type": "code",
      "language": "c",
      "html": "Infix: (A + B) * (C - D)\nPrefix: * + A B - C D\nPostfix: A B + C D - *"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "evaluating-postfix-scan-left-right-one-stack",
      "text": "Evaluating postfix (scan LEFT → RIGHT, one stack)"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Operand</b> → push",
        "<b>Operator</b> → pop two, apply, push result"
      ]
    },
    {
      "type": "viz",
      "kind": "postfixEval",
      "caption": "Optional: scan 5 3 + 8 2 - * step by step (edit the expression to try your own)."
    },
    {
      "type": "callout",
      "variant": "warn",
      "title": "Note",
      "html": "⚠ <b>#1 mistake:</b> the <b>first pop is the RIGHT operand</b> (second pop = left). Critical for <code>-</code> and <code>/</code>!"
    },
    {
      "type": "table",
      "caption": "Trace: <code>5 3 + 8 2 - *</code> = (5+3) × (8−2)",
      "head": [
        "Symbol",
        "Action",
        "Stack"
      ],
      "rows": [
        [
          "5, 3",
          "push",
          "[5, 3]"
        ],
        [
          "+",
          "pop 3, pop 5 → 5+3 = 8",
          "[8]"
        ],
        [
          "8, 2",
          "push",
          "[8, 8, 2]"
        ],
        [
          "−",
          "pop 2, pop 8 → 8−2 = 6",
          "[8, 6]"
        ],
        [
          "*",
          "pop 6, pop 8 → 8×6 = 48",
          "[48] → <b>answer 48</b>"
        ]
      ]
    },
    {
      "type": "code",
      "language": "c",
      "html": "int evaluatePostfix(char exp[]) { int stack[100], top = -1; for (int i = 0; exp[i] != '\\0'; i++) { char c = exp[i]; if (c &gt;= '0' &amp;&amp; c &lt;= '9') stack[++top] = c - '0'; <span class=\"tok-cm\">// operand → push</span> else { int b = stack[top--]; <span class=\"tok-cm\">// RIGHT operand first.</span> int a = stack[top--]; <span class=\"tok-cm\">// left operand</span> switch (c) { case '+': stack[++top] = a + b; break; case '-': stack[++top] = a - b; break; case '*': stack[++top] = a * b; break; case '/': stack[++top] = a / b; break; } } } return stack[top];\n}"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "evaluating-prefix-scan-right-left",
      "text": "Evaluating prefix (scan RIGHT → LEFT)"
    },
    {
      "type": "paragraph",
      "html": "Same stack idea, opposite direction, and here the <b>first pop is the LEFT operand</b>."
    },
    {
      "type": "table",
      "caption": "Trace: <code>* + 5 3 - 8 2</code> (right → left)",
      "head": [
        "Symbol",
        "Action",
        "Stack"
      ],
      "rows": [
        [
          "2, 8",
          "push",
          "[2, 8]"
        ],
        [
          "−",
          "pop 8, 2 → 8−2 = 6",
          "[6]"
        ],
        [
          "3, 5",
          "push",
          "[6, 3, 5]"
        ],
        [
          "+",
          "pop 5, 3 → 5+3 = 8",
          "[6, 8]"
        ],
        [
          "*",
          "pop 8, 6 → 8×6 = 48",
          "[48] → <b>answer 48</b>"
        ]
      ]
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Note",
      "html": "<b>Direction summary:</b> Postfix → left to right. Prefix → right to left. Both O(n) with one stack."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "converting-infix-postfix-stack-method",
      "text": "Converting infix → postfix (stack method)"
    },
    {
      "type": "paragraph",
      "html": "Precedence: <code>^</code> (3) &gt; <code>* /</code> (2) &gt; <code>+ -</code> (1)"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "<b>Operand</b> → straight to output",
        "<b>(</b> → push &nbsp;·&nbsp; <b>)</b> → pop to output until <b>(</b>, discard both",
        "<b>Operator</b> → pop operators with <b>higher-or-equal</b> precedence to output, then push it",
        "End → pop everything remaining"
      ]
    },
    {
      "type": "viz",
      "kind": "infixPostfix",
      "caption": "Optional: the shunting-yard method live (the trace tables below stay)."
    },
    {
      "type": "table",
      "caption": "Trace: <code>A + B * C - D</code>",
      "head": [
        "Symbol",
        "Action",
        "Stack",
        "Output"
      ],
      "rows": [
        [
          "A",
          "operand → output",
          "",
          "A"
        ],
        [
          "+",
          "push",
          "+",
          "A"
        ],
        [
          "B",
          "output",
          "+",
          "A B"
        ],
        [
          "*",
          "* &gt; + → push",
          "+ *",
          "A B"
        ],
        [
          "C",
          "output",
          "+ *",
          "A B C"
        ],
        [
          "−",
          "pop * (higher), pop + (equal), push",
          "−",
          "A B C * +"
        ],
        [
          "D",
          "output",
          "−",
          "A B C * + D"
        ],
        [
          "end",
          "pop all",
          "",
          "<b>A B C * + D −</b>"
        ]
      ]
    },
    {
      "type": "table",
      "caption": "Trace with parentheses: <code>(A + B) * C</code>",
      "head": [
        "Symbol",
        "Action",
        "Stack",
        "Output"
      ],
      "rows": [
        [
          "(",
          "push",
          "(",
          ""
        ],
        [
          "A + B",
          "out, push +, out",
          "( +",
          "A B"
        ],
        [
          ")",
          "pop until (",
          "",
          "A B +"
        ],
        [
          "* C",
          "push, output",
          "*",
          "A B + C"
        ],
        [
          "end",
          "pop all",
          "",
          "<b>A B + C *</b>"
        ]
      ]
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Note",
      "html": "<b>Manual prefix trick:</b> fully parenthesize, then move each operator <b>before</b> its group:<br> <code>A + B*C</code> → <code>A + (B*C)</code> → <code>+ A * B C</code>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "5-worked-example-a-b-c-d-e",
      "text": "5 · worked example: (((A/B)*C)*D)+E"
    },
    {
      "type": "paragraph",
      "html": "Full conversion: plus an interactive converter for ANY expression"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "step-1-fully-parenthesize-inside-out",
      "text": "Step 1: fully parenthesize (inside out)"
    },
    {
      "type": "code",
      "language": "c",
      "html": "A/B → innermost\n(A/B)*C\n((A/B)*C)*D\n(((A/B)*C)*D)+E → + is the LAST operation"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "step-2-results",
      "text": "Step 2: results"
    },
    {
      "type": "table",
      "head": [
        "Notation",
        "Expression"
      ],
      "rows": [
        [
          "Infix",
          "<code>(((A/B)*C)*D)+E</code>"
        ],
        [
          "<b>Postfix</b> ",
          "<b><code>A B / C * D * E +</code></b>"
        ],
        [
          "<b>Prefix</b> ",
          "<b><code>+ * * / A B C D E</code></b>"
        ]
      ]
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "step-3-verify-with-the-expression-tree-left-skewed-chain",
      "text": "Step 3: verify with the expression tree (left-skewed chain)"
    },
    {
      "type": "code",
      "language": "c",
      "html": " + / \\ * E / \\ * D / \\ / C / \\ A B Pre-order → + * * / A B C D E (prefix ✔)\nPost-order → A B / C * D * E + (postfix)\nIn-order → A / B * C * D + E (the original)"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "step-4-numeric-proof-a-8-b-2-c-3-d-4-e-5-expect-53",
      "text": "Step 4: numeric proof (A=8, B=2, C=3, D=4, E=5 → expect 53)"
    },
    {
      "type": "paragraph",
      "html": "Postfix <code>8 2 / 3 * 4 * 5 +</code>: 8/2=4 → 4×3=12 → 12×4=48 → 48+5 = <b>53 ✔</b><br> Prefix <code>+ * * / 8 2 3 4 5</code> (right→left): 8/2=4 → 4×3=12 → 12×4=48 → 48+5 = <b>53 ✔</b>"
    },
    {
      "type": "callout",
      "variant": "warn",
      "title": "Note",
      "html": "<b>Pattern:</b> a left-to-right operator chain clusters all operators at the <b>right end</b> in postfix (<code>/ * * +</code>) and at the <b>left end</b> in prefix (<code>+ * * /</code>)."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "6-strict-vs-full-vs-complete-binary-tree",
      "text": "6 · strict vs full vs complete binary tree"
    },
    {
      "type": "paragraph",
      "html": "Terminology varies by textbook: know both conventions."
    },
    {
      "type": "table",
      "head": [
        "Term",
        "Rule"
      ],
      "rows": [
        [
          "<b>Strictly binary</b>",
          "Every node has <b>0 or 2</b> children, never exactly 1"
        ],
        [
          "<b>Full binary</b>",
          "Same as strict in most books <i>(some books: all levels completely filled)</i>"
        ],
        [
          "<b>Complete binary</b>",
          "All levels filled except possibly the <b>last</b>, which fills <b>left → right</b>"
        ],
        [
          "<b>Perfect binary</b>",
          "All levels <b>completely</b> filled: the perfect triangle"
        ]
      ]
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "1-strictly-binary-0-or-2-children-only",
      "text": "1 strictly binary: 0 or 2 children only"
    },
    {
      "type": "ascii",
      "alt": "Strict tree (every node has 0 or 2 children) versus a non-strict tree where B has one child",
      "lines": [
        "✔ STRICT                      ✘ NOT STRICT (B has exactly ONE child)",
        "",
        "     A                            A",
        "    / \\                          / \\",
        "   B   C                        B   C",
        "  / \\   |                      / \\",
        " D   E  (C: 0 kids)            D   E",
        "",
        "Properties: leaves L, internal I → L = I + 1",
        "Total nodes n = 2L − 1 → strict trees always have an ODD node count."
      ]
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "2-full-binary-two-textbook-conventions",
      "text": "2 full binary: two textbook conventions"
    },
    {
      "type": "table",
      "head": [
        "Convention",
        "Meaning"
      ],
      "rows": [
        [
          "<b>Standard</b> (CLRS, GATE, GeeksforGeeks)",
          "Full = Strict (0 or 2 children), aka <i>proper</i> binary tree"
        ],
        [
          "<b>Some university notes</b>",
          "Full = every level completely filled (= perfect)"
        ]
      ]
    },
    {
      "type": "callout",
      "variant": "warn",
      "title": "Note",
      "html": "<b>Check your syllabus.</b> If your exam treats strict/full/complete as three DIFFERENT trees, \"full\" means the completely-filled (perfect) tree."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "3-complete-binary-last-level-fills-left-right-no-gaps",
      "text": "3 complete binary: last level fills left → right, NO gaps"
    },
    {
      "type": "ascii",
      "alt": "Complete binary tree with no gaps versus an incomplete one where F skips its left sibling slot",
      "lines": [
        "✔ COMPLETE                    ✘ NOT COMPLETE",
        "",
        "        A                          A",
        "      /   \\                      /   \\",
        "     B     C                    B     C",
        "    / \\   / \\                 / \\     \\",
        "   D   E F   G                D   E     F",
        "                                      ↑ GAP: F exists but its",
        "                                         left sibling is missing"
      ]
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Note",
      "html": "<b>Why complete trees matter:</b> no gaps → they pack perfectly into an <b>array</b> (level by level). This is exactly why <b>heaps are complete binary trees</b>."
    },
    {
      "type": "ascii",
      "alt": "Complete tree stored level-by-level in an array with index arithmetic for children and parent",
      "lines": [
        "Tree:                 Array: [A, B, C, D, E, F]",
        "        A             index:  0  1  2  3  4  5",
        "       / \\",
        "      B   C           node at i → left child  = 2i + 1",
        "     / \\   \\                 right child = 2i + 2",
        "    D   E   F                 parent      = (i − 1) / 2"
      ]
    },
    {
      "type": "paragraph",
      "html": "Height of a complete tree = <b>⌊log₂ n⌋</b> → that's why heap operations are <b>O(log n)</b>."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "4-perfect-binary-everything-filled",
      "text": "4 perfect binary: everything filled"
    },
    {
      "type": "ascii",
      "alt": "Perfect binary tree: every level completely filled",
      "lines": [
        "          A            ← level 1: 1 node",
        "        /   \\",
        "       B     C         ← level 2: 2 nodes",
        "      / \\   / \\",
        "     D   E F   G       ← level 3: 4 nodes (all leaves)",
        "",
        "     Nodes = 2^(h+1) − 1 · Leaves = 2^h"
      ]
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "master-comparison",
      "text": "Master comparison"
    },
    {
      "type": "table",
      "head": [
        "Feature",
        "Strict",
        "Complete",
        "Perfect"
      ],
      "rows": [
        [
          "Node children",
          "0 or 2",
          "any",
          "0 or 2"
        ],
        [
          "Levels filled",
          "doesn't matter",
          "all but last; last = left→right",
          "<b>all</b> completely"
        ],
        [
          "Leaves same level?",
          "no",
          "no",
          "<b>yes</b>"
        ],
        [
          "Odd node count?",
          "always",
          "no",
          "always"
        ],
        [
          "Used by",
          "expression trees",
          "<b>heaps, array storage</b>",
          "textbook analysis"
        ]
      ]
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "how-they-overlap",
      "text": "How they overlap"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "Perfect ⊂ Strict and Perfect ⊂ Complete (perfect is both at once)",
        "<b>Strict + Complete but NOT perfect:</b> the tree below qualifies as both; see the figure after this list."
      ]
    },
    {
      "type": "ascii",
      "alt": "A tree that is strict and complete but not perfect: node C is a leaf above the last level",
      "caption": "Strict ✔ and Complete ✔, but Perfect ✘: not every level is full.",
      "lines": [
        "      A          Strict ✔ (all 0/2 children)",
        "     / \\         Complete ✔ (level 3 fills left→right)",
        "    B   C        Perfect ✘ (C is a leaf at level 2)",
        "   / \\",
        "  D   E"
      ]
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "5-second-exam-checklist",
      "text": "5-second exam checklist"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "Any node with <b>exactly 1 child</b>? → Not strict ❌",
        "Level-order scan has a <b>gap</b> (right child without left sibling)? → Not complete ❌",
        "<b>All leaves at the bottom level</b> and everything above full? → Perfect"
      ]
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "quick-practice",
      "text": "Quick practice"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "7-one-page-cheat-sheet",
      "text": "7 · one-page cheat sheet"
    },
    {
      "type": "table",
      "head": [
        "Topic",
        "Key takeaway"
      ],
      "rows": [
        [
          "Homogeneous",
          "Same-type elements → enables <code>base + i×size</code> O(1) array access. Arrays = homo, structs = hetero."
        ],
        [
          "Pre-order",
          "<b>Root L R</b>: copying, serialization, prefix expressions"
        ],
        [
          "In-order",
          "<b>L Root R</b>: sorted output on a BST"
        ],
        [
          "Post-order",
          "<b>L R Root</b>: deletion, height, anything needing children first; iterative needs 2 stacks or <code>lastVisited</code>"
        ],
        [
          "Traversal cost",
          "Time O(n) · Space O(h)"
        ],
        [
          "Postfix eval",
          "Scan L→R, one stack; first pop = RIGHT operand"
        ],
        [
          "Prefix eval",
          "Scan R→L, one stack; first pop = LEFT operand"
        ],
        [
          "Infix→Postfix",
          "Stack; pop higher-or-equal precedence; parens handled via ( )"
        ],
        [
          "Expression tree",
          "Pre-order = prefix · Post-order = postfix · In-order = infix"
        ],
        [
          "Strict tree",
          "0 or 2 children only; L = I + 1; odd node count"
        ],
        [
          "Complete tree",
          "Last level fills left→right; lives in arrays; heaps.; height ⌊log₂n⌋"
        ],
        [
          "Perfect tree",
          "All levels full; nodes = 2^(h+1)−1; is both strict AND complete"
        ]
      ]
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Note",
      "html": "<b>Golden memory tricks:</b> Pre/In/Post = position of ROOT · Postfix scans L→R, prefix scans R→L · \"Children before parent ⇒ post-order\" · \"Gap in a level ⇒ not complete\"."
    }
  ]
};

export default chapter;
