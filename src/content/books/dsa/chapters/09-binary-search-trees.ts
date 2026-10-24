import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "09-binary-search-trees",
    "number": 9,
    "title": "Binary search trees",
    "subtitle": "Lecture 7 (Trees part 2) · Lab 7",
    "kind": "topic",
    "words": 2157,
    "minutes": 11
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "the-search-order-property",
      "text": "The search-order property"
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Definition",
      "html": "A <b>binary search tree (BST)</b> is a binary tree where, for every node: <b>1)</b> the left subtree contains only keys <b>less than</b> the node's key, <b>2)</b> the right subtree contains only keys <b>greater than</b> the node's key, and <b>3)</b> both subtrees are themselves BSTs. <b>Duplicates are not allowed.</b>"
    },
    {
      "type": "treeDiagram",
      "alt": "Binary search tree 50 25 76 12 37 65 89 6 17 32 41 59 72 83 95",
      "caption": "Left subtree < node < right subtree, everywhere. Note: BSTs don't have to be symmetrical.",
      "maxWidth": 560,
      "nodes": [
        { "id": "n0", "label": "50", "x": 310, "y": 40, "r": 24 },
        { "id": "n1", "label": "25", "x": 170, "y": 100, "r": 24 },
        { "id": "n2", "label": "76", "x": 450, "y": 100, "r": 24 },
        { "id": "n3", "label": "12", "x": 100, "y": 160, "r": 24 },
        { "id": "n4", "label": "37", "x": 240, "y": 160, "r": 24 },
        { "id": "n5", "label": "65", "x": 380, "y": 160, "r": 24 },
        { "id": "n6", "label": "89", "x": 520, "y": 160, "r": 24 },
        { "id": "n7", "label": "6", "x": 62, "y": 220, "r": 22 },
        { "id": "n8", "label": "17", "x": 138, "y": 220, "r": 22 },
        { "id": "n9", "label": "32", "x": 205, "y": 220, "r": 22 },
        { "id": "n10", "label": "41", "x": 272, "y": 220, "r": 22 },
        { "id": "n11", "label": "59", "x": 350, "y": 220, "r": 22 },
        { "id": "n12", "label": "72", "x": 412, "y": 220, "r": 22 },
        { "id": "n13", "label": "83", "x": 490, "y": 220, "r": 22 },
        { "id": "n14", "label": "95", "x": 552, "y": 220, "r": 22 }
      ],
      "edges": [
        ["n0", "n1"],
        ["n0", "n2"],
        ["n1", "n3"],
        ["n1", "n4"],
        ["n2", "n5"],
        ["n2", "n6"],
        ["n3", "n7"],
        ["n3", "n8"],
        ["n4", "n9"],
        ["n4", "n10"],
        ["n5", "n11"],
        ["n5", "n12"],
        ["n6", "n13"],
        ["n6", "n14"]
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "search-treesearch",
      "text": "Search: TreeSearch"
    },
    {
      "type": "paragraph",
      "html": "To search for key <b>k</b>, trace a <b>downward path from the root</b>: each comparison picks the next subtree. Reaching a leaf (NULL) means <b>not found</b>."
    },
    {
      "type": "code",
      "language": "c",
      "html": "<span class=\"tok-kw\">Algorithm</span> <span class=\"tok-fn\">TreeSearch</span>(k, v)\n    <span class=\"tok-kw\">if</span> (v == NULL) <span class=\"tok-kw\">return</span> v;              <span class=\"tok-cm\">/* not found        */</span>\n    <span class=\"tok-kw\">if</span> (k &lt; key(v))\n        <span class=\"tok-kw\">return</span> <span class=\"tok-fn\">TreeSearch</span>(k, T.left(v));    <span class=\"tok-cm\">/* go left          */</span>\n    <span class=\"tok-kw\">else if</span> (k == key(v))\n        <span class=\"tok-kw\">return</span> v;                          <span class=\"tok-cm\">/* found.           */</span>\n    <span class=\"tok-kw\">else</span>  <span class=\"tok-cm\">/* k &gt; key(v) */</span>\n        <span class=\"tok-kw\">return</span> <span class=\"tok-fn\">TreeSearch</span>(k, T.right(v));   <span class=\"tok-cm\">/* go right         */</span>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "insertion",
      "text": "Insertion"
    },
    {
      "type": "paragraph",
      "html": "Search for the new key; when the search falls off the tree at (leaf) node <b>w</b>, insert the new key there. Example with insert <b>63</b>: 63 &gt; 50 → right · 63 &lt; 76 → left · 63 &lt; 65 → left · 63 &gt; 59, and 59 has no right child ⇒ <b>63 becomes 59's right child</b>."
    },
    {
      "type": "code",
      "language": "c",
      "html": "<span class=\"tok-kw\">void</span> <span class=\"tok-fn\">InsertNode</span>(node* &amp;root, node *newnode) {\n    <span class=\"tok-kw\">if</span> (root == NULL)          root = newnode;\n    <span class=\"tok-kw\">else if</span> (root-&gt;data &gt; newnode-&gt;data) <span class=\"tok-fn\">InsertNode</span>(root-&gt;l, newnode);\n    <span class=\"tok-kw\">else if</span> (root-&gt;data &lt; newnode-&gt;data) <span class=\"tok-fn\">InsertNode</span>(root-&gt;r, newnode);\n}"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "interactive-bst-builder",
      "text": "Interactive BST builder"
    },
    {
      "type": "viz",
      "kind": "bst",
      "caption": "Inorder of this tree is always sorted. Verify it with the traversal trainer in Topic 8."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "deletion-the-3-cases",
      "text": "Deletion: the 3 cases"
    },
    {
      "type": "table",
      "head": [
        "Case",
        "Action"
      ],
      "rows": [
        [
          "<b>1 · No child</b> (leaf)",
          "Set the parent's pointer to NULL, dispose (free) the node"
        ],
        [
          "<b>2 · One child</b>",
          "Bypass it: link the parent directly to the node's single child, then free"
        ],
        [
          "<b>3 · Two children</b>",
          "Replace the node's key with its <b>inorder predecessor</b> (largest key in the left subtree = rightmost node there) <b>or</b> <b>inorder successor</b> (smallest key in the right subtree = leftmost node there), then delete that node instead (it has at most one child)"
        ]
      ],
      "highlightRows": [
        2
      ]
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Exam alert",
      "html": "“Delete 16” style questions are near-guaranteed. Remember the replacement options by name: <b>in-order predecessor</b> = rightmost child of the left subtree; <b>in-order successor</b> = leftmost child of the right subtree."
    },
    {
      "type": "example",
      "title": "Delete from a small BST",
      "bodyHtml": "<p>Tree: root <b>3</b>, left subtree holds 1 … 2, right subtree 8 → 6 → 9 → 5. Delete <b>3</b> (two children).</p>",
      "solutionHtml": "<p>Node 3 has two children. The node that follows 3 in an inorder traversal is w = 6 (smallest in the right subtree: 8→6). Copy <b>6</b> into the root, then remove the old node 6 (which has only a left child 5, case 2 bypass). Result keeps the inorder sequence sorted. The predecessor variant: copy <b>2</b> (largest of left subtree) instead, then delete the old 2.</p>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "why-bsts",
      "text": "Why bsts?"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "Inorder traversal = <b>sorted list</b>; searching becomes faster than linear structures.",
        "BUT insert/delete can be slow and the tree can <b>degenerate into a linked list</b> when keys arrive in order, which motivates balanced trees (AVL, Topic 9).",
        "Well-known BST applications: arithmetic expression trees, decision trees, AVL trees, priority queues, binary heaps."
      ]
    },
    {
      "type": "flashcards",
      "cards": [
        {
          "front": "<span class=\"fc-q\">BST left-subtree rule?</span>",
          "back": "<div class=\"fc-a\">Left subtree keys are all less than the node's key</div>",
          "category": "Property"
        },
        {
          "front": "<span class=\"fc-q\">Inorder successor of a node?</span>",
          "back": "<div class=\"fc-a\">The smallest key in its right subtree</div>",
          "category": "Delete"
        },
        {
          "front": "<span class=\"fc-q\">Inorder predecessor?</span>",
          "back": "<div class=\"fc-a\">The largest key in its left subtree</div>",
          "category": "Delete"
        },
        {
          "front": "<span class=\"fc-q\">Are duplicate keys allowed in a BST?</span>",
          "back": "<div class=\"fc-a\">No: the definition excludes duplicates</div>",
          "category": "Rule"
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Topic 8 Quiz: Binary Search Trees",
      "count": 8,
      "quizSlug": "09-binary-search-trees"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "the-ordered-specimen-bst-field-notes",
      "text": "The ordered specimen: BST field notes"
    },
    {
      "type": "paragraph",
      "html": "Sheet № 1 catalogued the tree’s anatomy, root, leaves, depth, degree, without asking what the tree was <em>for</em>. This sheet adds the one law that turns a shape into a tool: order. In a binary search tree, every node keeps its left subtree strictly smaller and its right subtree strictly larger, and out of that single rule fall search, insertion, and deletion, each of them a walk down one path."
    },
    {
      "type": "paragraph",
      "html": "But a structure you can only store in is a warehouse. The second half of this sheet is about <em>reading</em>: traversal, the business of visiting every node exactly once. A list has one reading order; a tree must choose among them, and the useful choices number four."
    },
    {
      "type": "paragraph",
      "html": "The BST builder earlier in this chapter is the live bench: search, graft and prune from it. The traversal trainer in Topic 8 plays every reading step by step, stamping visit numbers on the nodes as it goes."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "the-ordered-specimen",
      "text": "The ordered specimen"
    },
    {
      "type": "paragraph",
      "html": "One new law: order. Six entries on what the law buys: search that discards a subtree per comparison, extrema at the tips, grafting and pruning that keep the law intact, and what happens when the shape goes bad."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "fn-bst-property",
      "text": "The BST property"
    },
    {
      "type": "paragraph",
      "html": "A binary tree obeys the search-tree property when, for <em>every</em> node, every key in its left subtree is smaller than it and every key in its right subtree is larger. Not just the immediate children: the entire subtrees, recursively. The consequence is almost geometric: each node inherits an open interval of legal keys from its ancestors (the root rules (−∞, +∞)), and every descent narrows it."
    },
    {
      "type": "paragraph",
      "html": "∀ node · left subtree &lt; node &lt; right subtree, whole subtrees, recursively."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "fn-search",
      "text": "Search: one path down the tree"
    },
    {
      "type": "paragraph",
      "html": "To find a key k, compare it with the root: smaller: descend left; larger: descend right; equal: done. Each comparison discards an <em>entire subtree</em>, which is where the speed comes from. If k is present the walk ends at its node; if absent, it ends at an empty pointer, and the cost is the same either way: one root-to-node path, never more than h + 1 comparisons. Try searching 45 (absent) and 40 (present) in the BST builder above and watch both destinies unfold."
    },
    {
      "type": "paragraph",
      "html": "cost = one root-to-node path ≤ h + 1 comparisons<br>balanced → O(log n) · skewed → O(n)"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "fn-min-max",
      "text": "Minimum & maximum"
    },
    {
      "type": "paragraph",
      "html": "The minimum key lives at the leftmost node, follow left pointers until there are none; the maximum at the rightmost. Two walks, each no longer than the height. Note what this really is: the first and last keys of the sorted order, reachable without sorting anything. The tree keeps its extremes stored at its two outermost tips."
    },
    {
      "type": "paragraph",
      "html": "min = leftmost node · max = rightmost node · each ≤ h+1 steps"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "fn-insertion",
      "text": "Insertion: a failed search plus one graft"
    },
    {
      "type": "paragraph",
      "html": "To insert k, search for it as though it were present. The search will fail: at exactly the empty pointer where k belongs, and that dead end is the grafting point: attach a new leaf there. Because the search path respected the ordering law, the new node automatically satisfies its inherited interval. No rearrangement, no re-checking: insertion is a failed search plus one graft. Try inserting 55 in the BST builder above, or type any key from 0 to 99."
    },
    {
      "type": "paragraph",
      "html": "every insertion lands as a leaf; the property is preserved by construction"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "fn-deletion",
      "text": "Deletion: a pruning"
    },
    {
      "type": "paragraph",
      "html": "Pruning is where BSTs earn their reputation. A <em>leaf</em> detaches cleanly (case 1). A node with <em>one child</em> is spliced out; the child is promoted into the vacancy, subtree and all (case 2). A node with <em>two children</em> cannot be spliced: replace its key with the <em>inorder successor</em>; the leftmost node of its right subtree, which is the next key in sorted order, and prune that successor instead; it has no left child, so its own removal falls back to case 1 or 2. Use the deletion playground below to prune nodes and watch every case."
    },
    {
      "type": "paragraph",
      "html": "case 3: key ← inorder successor (leftmost of the right subtree), then prune the successor"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "fn-height-balance",
      "text": "Height & balance"
    },
    {
      "type": "paragraph",
      "html": "Every operation above walks a single path, so the height is the price of everything. The same six keys can sit at height 2 or height 5 depending on insertion order, feed a BST sorted keys and it degenerates into a chain, a linked list wearing a costume, and search collapses from O(log n) to O(n). Self-balancing trees (AVL, red-black) rotate on insertion to keep the height near ⌊log₂ n⌋; the subject of a future sheet. For now, the field advice: never insert sorted data into an honest BST."
    },
    {
      "type": "paragraph",
      "html": "search O(h) → O(log n) if balanced · O(n) if skewed"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "the-four-readings",
      "text": "The four readings"
    },
    {
      "type": "paragraph",
      "html": "A list has one reading order; a tree chooses among four. The traversal trainer in Topic 8 plays each one step by step, with the stack or queue visible and visit numbers stamped."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "fn-traversal",
      "text": "Traversal"
    },
    {
      "type": "paragraph",
      "html": "To traverse a tree is to visit every node exactly once. A list is read in one direction because it has no other; a tree must choose. The three depth-first readings differ only in <em>when the root is read</em> relative to its two subtrees, first, between, or last, and the root’s seat names the reading: pre-, in-, post-order. They share one recursive spine and merely swap three lines. The fourth reading, level-order, abandons recursion for a queue and reads breadth-first. Watch the mechanism strip: depth-first readings drive a call stack; level-order drives a queue."
    },
    {
      "type": "paragraph",
      "html": "N = the node · L = left subtree · R = right subtree; the root’s seat names the reading"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "fn-preorder",
      "text": "Preorder"
    },
    {
      "type": "paragraph",
      "html": "Read the node, then its left subtree, then its right. Two facts make preorder useful. First: the first key emitted is always the root. Second: feed the whole sequence into an empty BST and the identical tree regrows, preorder is a <em>build order</em>, which is why it’s the standard choice for copying and serializing trees. It also reads expressions in prefix (Polish) notation."
    },
    {
      "type": "paragraph",
      "html": "first emitted = the root · rebuild: insert in this order"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "fn-inorder",
      "text": "Inorder"
    },
    {
      "type": "paragraph",
      "html": "Left subtree, node, right subtree. On an arbitrary binary tree, inorder is just one more ordering. On a BST it is <em>the sorted order</em>: the recursion reads the smaller keys first, the node between, the larger after, ascending, every time, with no sorting performed. That is the tree’s secret: it isn’t so much searched quickly as it is <em>sorted structurally</em>, and inorder is the reading that lets you see it. It is also the cheapest BST validator there is, run it, and check that the output ascends."
    },
    {
      "type": "paragraph",
      "html": "inorder(BST) = keys ascending, zero comparisons spent"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "fn-postorder",
      "text": "Postorder"
    },
    {
      "type": "paragraph",
      "html": "Both subtrees first, the node last, children before parent, always. That ordering is exactly what safe deletion of an entire tree requires (no node is freed while it still has children to free), and what bottom-up computation requires: subtree sizes, heights, and sums are all naturally postorder. The last key emitted is the root, preorder’s mirror. Postorder reads expressions in postfix (Reverse Polish) notation."
    },
    {
      "type": "paragraph",
      "html": "last emitted = the root · subtree aggregates compute bottom-up"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "fn-level-order",
      "text": "Level-order"
    },
    {
      "type": "paragraph",
      "html": "Read level 0 left to right, then level 1, and so on; the tree unrolled row by row. No recursion: a queue does the work. Dequeue a node, visit it, enqueue its children; FIFO order becomes breadth order. Level-order answers the questions the depth-first readings cannot see: how wide the tree is, what each row sums to, which nodes sit nearest the root."
    },
    {
      "type": "paragraph",
      "html": "a queue, not recursion: dequeue → visit → enqueue children"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "deleting-a-node-the-two-replacement-methods",
      "text": "Deleting a node: the two replacement methods"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "first-the-3-cases-of-deletion",
      "text": "First: the 3 cases of deletion"
    },
    {
      "type": "paragraph",
      "html": "Difficulty depends on how many children the node has:"
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Case 1: leaf",
      "html": "<p>No children. Remove the node directly.</p>"
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Case 2: one child",
      "html": "<p>Replace the node with its only child.</p>"
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Case 3: two children",
      "html": "<p>The node cannot be removed directly: <b>replace its value</b> using one of the two methods below.</p>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "the-two-methods",
      "text": "The two methods"
    },
    {
      "type": "paragraph",
      "html": "Both keep the tree a valid BST; the in-order (sorted) sequence never changes."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "method-1-in-order-successor",
      "text": "Method 1: in-order successor"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "Go to the <b>right subtree</b> of the target",
        "Keep going <b>LEFT</b> until there is no left child",
        "Copy that value into the target, then delete it"
      ]
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "How to find",
      "html": "<b>How to find:</b> One step <b>RIGHT</b> ➜ then all the way <b>LEFT</b>"
    },
    {
      "type": "code",
      "language": "c",
      "html": "DELETE 50 (successor = <span class=\"tok-ok\">60</span>) BEFORE AFTER <span class=\"tok-bad\">50</span> ←delete <span class=\"tok-ok\">60</span> ←copied / \\ / \\ 30 70 30 70 / \\ / \\ / \\ \\\n20 40 <span class=\"tok-num\">60</span> 80 20 40 80 ↑ smallest in right subtree"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "method-2-in-order-predecessor",
      "text": "Method 2: in-order predecessor"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "Go to the <b>left subtree</b> of the target",
        "Keep going <b>RIGHT</b> until there is no right child",
        "Copy that value into the target, then delete it"
      ]
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "How to find",
      "html": "<b>How to find:</b> One step <b>LEFT</b> ➜ then all the way <b>RIGHT</b>"
    },
    {
      "type": "code",
      "language": "c",
      "html": "DELETE 50 (predecessor = <span class=\"tok-ok\">40</span>) BEFORE AFTER <span class=\"tok-bad\">50</span> ←delete <span class=\"tok-ok\">40</span> ←copied / \\ / \\ 30 70 30 70 / \\ / \\ / / \\\n20 <span class=\"tok-num\">40</span> 60 80 20 60 80 ↑ largest in left subtree"
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "Memory hook",
      "html": "<b>Memory trick:</b> <b>S</b>uccessor = <b>R</b>ight ➜ <b>L</b>eft, left, left… &nbsp;|&nbsp; <b>P</b>redecessor = <b>L</b>eft ➜ <b>R</b>ight, right, right…<br>Why does the replacement always have ≤ 1 child? Because we walked <i>all the way</i> in one direction, and there is nothing left on that side."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "interactive-playground",
      "text": "Interactive playground"
    },
    {
      "type": "viz",
      "kind": "bstDelete",
      "caption": "Sample tree 50 30 70 20 40 60 80 35 65. Delete 30 to watch the two-children case, or 20 for a leaf."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "comparison-table",
      "text": "Comparison table"
    },
    {
      "type": "table",
      "head": [
        "Feature",
        "Successor",
        "Predecessor"
      ],
      "rows": [
        [
          "Comes from",
          "<b>Right</b> subtree",
          "<b>Left</b> subtree"
        ],
        [
          "Which node?",
          "Smallest value",
          "Largest value"
        ],
        [
          "Direction",
          "Right once → left, left…",
          "Left once → right, right…"
        ],
        [
          "In-order meaning",
          "Next value in sorted order",
          "Previous value in sorted order"
        ],
        [
          "Children of replacement",
          "At most <b>one</b> child",
          "At most <b>one</b> child"
        ],
        [
          "Result",
          "Valid BST, <b>same sorted order</b>",
          "Valid BST, <b>same sorted order</b>"
        ]
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "test-yourself",
      "text": "Test yourself"
    },
    {
      "type": "paragraph",
      "html": "Click an answer for instant feedback."
    }
  ]
};

export default chapter;
