import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "09-binary-search-trees",
    "number": 9,
    "title": "Binary Search Trees",
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
      "type": "figure",
      "svg": "<svg class=\"treesvg\" viewBox=\"0 0 620 300\" width=\"620\" role=\"img\" aria-label=\"Binary search tree 50 25 76 12 37 65 89 6 17 32 41 59 72 83 95\">\n      <line class=\"edge\" x1=\"310\" y1=\"40\" x2=\"170\" y2=\"100\"></line>\n      <line class=\"edge\" x1=\"310\" y1=\"40\" x2=\"450\" y2=\"100\"></line>\n      <line class=\"edge\" x1=\"170\" y1=\"100\" x2=\"100\" y2=\"160\"></line>\n      <line class=\"edge\" x1=\"170\" y1=\"100\" x2=\"240\" y2=\"160\"></line>\n      <line class=\"edge\" x1=\"450\" y1=\"100\" x2=\"380\" y2=\"160\"></line>\n      <line class=\"edge\" x1=\"450\" y1=\"100\" x2=\"520\" y2=\"160\"></line>\n      <line class=\"edge\" x1=\"100\" y1=\"160\" x2=\"62\" y2=\"220\"></line>\n      <line class=\"edge\" x1=\"100\" y1=\"160\" x2=\"138\" y2=\"220\"></line>\n      <line class=\"edge\" x1=\"240\" y1=\"160\" x2=\"205\" y2=\"220\"></line>\n      <line class=\"edge\" x1=\"240\" y1=\"160\" x2=\"272\" y2=\"220\"></line>\n      <line class=\"edge\" x1=\"380\" y1=\"160\" x2=\"350\" y2=\"220\"></line>\n      <line class=\"edge\" x1=\"380\" y1=\"160\" x2=\"412\" y2=\"220\"></line>\n      <line class=\"edge\" x1=\"520\" y1=\"160\" x2=\"490\" y2=\"220\"></line>\n      <line class=\"edge\" x1=\"520\" y1=\"160\" x2=\"552\" y2=\"220\"></line>\n      <circle class=\"vtx\" cx=\"310\" cy=\"40\" r=\"24\"></circle><text class=\"vlbl\" x=\"310\" y=\"40\">50</text>\n      <circle class=\"vtx\" cx=\"170\" cy=\"100\" r=\"24\"></circle><text class=\"vlbl\" x=\"170\" y=\"100\">25</text>\n      <circle class=\"vtx\" cx=\"450\" cy=\"100\" r=\"24\"></circle><text class=\"vlbl\" x=\"450\" y=\"100\">76</text>\n      <circle class=\"vtx\" cx=\"100\" cy=\"160\" r=\"24\"></circle><text class=\"vlbl\" x=\"100\" y=\"160\">12</text>\n      <circle class=\"vtx\" cx=\"240\" cy=\"160\" r=\"24\"></circle><text class=\"vlbl\" x=\"240\" y=\"160\">37</text>\n      <circle class=\"vtx\" cx=\"380\" cy=\"160\" r=\"24\"></circle><text class=\"vlbl\" x=\"380\" y=\"160\">65</text>\n      <circle class=\"vtx\" cx=\"520\" cy=\"160\" r=\"24\"></circle><text class=\"vlbl\" x=\"520\" y=\"160\">89</text>\n      <circle class=\"vtx\" cx=\"62\" cy=\"220\" r=\"22\"></circle><text class=\"vlbl\" x=\"62\" y=\"220\">6</text>\n      <circle class=\"vtx\" cx=\"138\" cy=\"220\" r=\"22\"></circle><text class=\"vlbl\" x=\"138\" y=\"220\">17</text>\n      <circle class=\"vtx\" cx=\"205\" cy=\"220\" r=\"22\"></circle><text class=\"vlbl\" x=\"205\" y=\"220\">32</text>\n      <circle class=\"vtx\" cx=\"272\" cy=\"220\" r=\"22\"></circle><text class=\"vlbl\" x=\"272\" y=\"220\">41</text>\n      <circle class=\"vtx\" cx=\"350\" cy=\"220\" r=\"22\"></circle><text class=\"vlbl\" x=\"350\" y=\"220\">59</text>\n      <circle class=\"vtx\" cx=\"412\" cy=\"220\" r=\"22\"></circle><text class=\"vlbl\" x=\"412\" y=\"220\">72</text>\n      <circle class=\"vtx\" cx=\"490\" cy=\"220\" r=\"22\"></circle><text class=\"vlbl\" x=\"490\" y=\"220\">83</text>\n      <circle class=\"vtx\" cx=\"552\" cy=\"220\" r=\"22\"></circle><text class=\"vlbl\" x=\"552\" y=\"220\">95</text>\n    </svg>",
      "alt": "Binary search tree 50 25 76 12 37 65 89 6 17 32 41 59 72 83 95",
      "caption": "Left subtree < node < right subtree, everywhere. Note: BSTs don't have to be symmetrical."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "search-treesearch",
      "text": "Search — TreeSearch"
    },
    {
      "type": "paragraph",
      "html": "To search for key <b>k</b>, trace a <b>downward path from the root</b>: each comparison picks the next subtree. Reaching a leaf (NULL) means <b>not found</b>."
    },
    {
      "type": "code",
      "language": "c",
      "html": "<span class=\"tok-kw\">Algorithm</span> <span class=\"tok-fn\">TreeSearch</span>(k, v)\n    <span class=\"tok-kw\">if</span> (v == NULL) <span class=\"tok-kw\">return</span> v;              <span class=\"tok-cm\">/* not found        */</span>\n    <span class=\"tok-kw\">if</span> (k &lt; key(v))\n        <span class=\"tok-kw\">return</span> <span class=\"tok-fn\">TreeSearch</span>(k, T.left(v));    <span class=\"tok-cm\">/* go left          */</span>\n    <span class=\"tok-kw\">else if</span> (k == key(v))\n        <span class=\"tok-kw\">return</span> v;                          <span class=\"tok-cm\">/* found!           */</span>\n    <span class=\"tok-kw\">else</span>  <span class=\"tok-cm\">/* k &gt; key(v) */</span>\n        <span class=\"tok-kw\">return</span> <span class=\"tok-fn\">TreeSearch</span>(k, T.right(v));   <span class=\"tok-cm\">/* go right         */</span>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "insertion",
      "text": "Insertion"
    },
    {
      "type": "paragraph",
      "html": "Search for the new key; when the search falls off the tree at (leaf) node <b>w</b>, insert the new key there. Example — insert <b>63</b>: 63 &gt; 50 → right · 63 &lt; 76 → left · 63 &lt; 65 → left · 63 &gt; 59, and 59 has no right child ⇒ <b>63 becomes 59's right child</b>."
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
      "caption": "Inorder of this tree is always sorted — verify with the traversal buttons in Topic 7!"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "deletion-the-3-cases",
      "text": "Deletion — the 3 cases"
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
      "solutionHtml": "<p>Node 3 has two children. The node that follows 3 in an inorder traversal is w = 6 (smallest in the right subtree: 8→6). Copy <b>6</b> into the root, then remove the old node 6 (which has only a left child 5 — case 2 bypass). Result keeps the inorder sequence sorted. The predecessor variant: copy <b>2</b> (largest of left subtree) instead, then delete the old 2.</p>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "why-bsts",
      "text": "Why BSTs?"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "Inorder traversal = <b>sorted list</b>; searching becomes faster than linear structures.",
        "BUT insert/delete can be slow and the tree can <b>degenerate into a linked list</b> when keys arrive in order — which motivates balanced trees (AVL, Topic 9).",
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
          "back": "<div class=\"fc-a\">No — the definition excludes duplicates</div>",
          "category": "Rule"
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Topic 8 Quiz — Binary Search Trees",
      "count": 8,
      "quizSlug": "09-binary-search-trees"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "the-ordered-specimen-bst-field-notes",
      "text": "The ordered specimen — BST field notes"
    },
    {
      "type": "paragraph",
      "html": "Sheet № 1 catalogued the tree’s anatomy — root, leaves, depth, degree — without asking what the tree was <em>for</em>. This sheet adds the one law that turns a shape into a tool: order. In a binary search tree, every node keeps its left subtree strictly smaller and its right subtree strictly larger, and out of that single rule fall search, insertion, and deletion — each of them a walk down one path."
    },
    {
      "type": "paragraph",
      "html": "But a structure you can only store in is a warehouse. The second half of this sheet is about <em>reading</em>: traversal, the business of visiting every node exactly once. A list has one reading order; a tree must choose among them, and the useful choices number four."
    },
    {
      "type": "paragraph",
      "html": "The specimen is live — click its nodes, search, graft, and prune from the bench — and the reading bench in Part II plays every traversal step by step, stamping visit numbers on the nodes as it goes."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "the-ordered-specimen",
      "text": "The ordered specimen"
    },
    {
      "type": "paragraph",
      "html": "One new law — order. Six entries on what the law buys: search that discards a subtree per comparison, extrema at the tips, grafting and pruning that keep the law intact — and what happens when the shape goes bad."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "the-bst-propertylex-ordinis",
      "text": "The BST propertylex ordinis"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "the-bst-propertylex-ordinis-2",
      "text": "The BST propertylex ordinis"
    },
    {
      "type": "paragraph",
      "html": "A binary tree obeys the search-tree property when, for <em>every</em> node, every key in its left subtree is smaller than it and every key in its right subtree is larger. Not just the immediate children — the entire subtrees, recursively. The consequence is almost geometric: each node inherits an open interval of legal keys from its ancestors (the root rules (−∞, +∞)), and every descent narrows it. Press demonstrate and every node prints its interval — the law, drawn."
    },
    {
      "type": "paragraph",
      "html": "∀ node · left subtree &lt; node &lt; right subtree — whole subtrees, recursively<br>specimen check: <span data-live=\"check\"></span>"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "searchquaestio",
      "text": "Searchquaestio"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "searchquaestio-2",
      "text": "Searchquaestio"
    },
    {
      "type": "paragraph",
      "html": "To find a key k, compare it with the root: smaller — descend left; larger — descend right; equal — done. Each comparison discards an <em>entire subtree</em>, which is where the speed comes from. If k is present the walk ends at its node; if absent, it ends at an empty pointer — and the cost is the same either way: one root-to-node path, never more than h + 1 comparisons. Try <em>find 45</em> and <em>find 65</em> on the bench and watch both destinies unfold."
    },
    {
      "type": "paragraph",
      "html": "cost = one root-to-node path ≤ h + 1 = <span data-live=\"h1\"></span> comparisons (h = <span data-live=\"h\"></span>)<br>balanced → O(log n) · skewed → O(n)"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "minimum-and-maximumextrema",
      "text": "Minimum & maximumextrema"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "minimum-and-maximumextrema-2",
      "text": "Minimum & maximumextrema"
    },
    {
      "type": "paragraph",
      "html": "The minimum key lives at the leftmost node — follow left pointers until there are none; the maximum at the rightmost. Two walks, each no longer than the height. Note what this really is: the first and last keys of the sorted order, reachable without sorting anything. The tree keeps its extremes stored at its two outermost tips."
    },
    {
      "type": "paragraph",
      "html": "min = leftmost node · max = rightmost node · each ≤ h+1 steps<br>live: <span data-live=\"min\"></span> · <span data-live=\"max\"></span>"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "insertioninsitio-a-graft",
      "text": "Insertioninsitio — a graft"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "insertioninsitio-a-graft-2",
      "text": "Insertioninsitio — a graft"
    },
    {
      "type": "paragraph",
      "html": "To insert k, search for it as though it were present. The search will fail — at exactly the empty pointer where k belongs — and that dead end is the grafting point: attach a new leaf there. Because the search path respected the ordering law, the new node automatically satisfies its inherited interval. No rearrangement, no re-checking: insertion is a failed search plus one graft. Try <em>graft 55</em> from the bench, or type any key 0–99."
    },
    {
      "type": "paragraph",
      "html": "every insertion lands as a leaf — the property is preserved by construction"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "deletionputatio-a-pruning",
      "text": "Deletionputatio — a pruning"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "deletionputatio-a-pruning-2",
      "text": "Deletionputatio — a pruning"
    },
    {
      "type": "paragraph",
      "html": "Pruning is where BSTs earn their reputation. A <em>leaf</em> detaches cleanly (case 1). A node with <em>one child</em> is spliced out — the child is promoted into the vacancy, subtree and all (case 2). A node with <em>two children</em> cannot be spliced: replace its key with the <em>inorder successor</em> — the leftmost node of its right subtree, which is the next key in sorted order — and prune that successor instead; it has no left child, so its own removal falls back to case 1 or 2. Click any node on the specimen and prune it from its record."
    },
    {
      "type": "paragraph",
      "html": "case 3: key ← inorder successor (leftmost of the right subtree), then prune the successor"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "height-and-balanceaequilibrium",
      "text": "Height & balanceaequilibrium"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "height-and-balanceaequilibrium-2",
      "text": "Height & balanceaequilibrium"
    },
    {
      "type": "paragraph",
      "html": "Every operation above walks a single path, so the height is the price of everything. The same six keys can sit at height 2 or height 5 depending on insertion order — feed a BST sorted keys and it degenerates into a chain, a linked list wearing a costume, and search collapses from O(log n) to O(n). Self-balancing trees (AVL, red-black) rotate on insertion to keep the height near ⌊log₂ n⌋ — the subject of a future sheet. For now, the field advice: never insert sorted data into an honest BST."
    },
    {
      "type": "paragraph",
      "html": "search O(h) → O(log n) if balanced · O(n) if skewed<br>live: h = <span data-live=\"h\"></span> · n = <span data-live=\"n\"></span> · ⌊log₂ n⌋ = <span data-live=\"logn\"></span>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "the-four-readings",
      "text": "The four readings"
    },
    {
      "type": "paragraph",
      "html": "A list has one reading order; a tree chooses among four. The reading bench plays each one on the live specimen, step by step — stack or queue visible, visit numbers stamped, keys emitted as they are read."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "traversallectio-a-reading",
      "text": "Traversallectio — a reading"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "traversallectio-a-reading-2",
      "text": "Traversallectio — a reading"
    },
    {
      "type": "paragraph",
      "html": "To traverse a tree is to visit every node exactly once. A list is read in one direction because it has no other; a tree must choose. The three depth-first readings differ only in <em>when the root is read</em> relative to its two subtrees — first, between, or last — and the root’s seat names the reading: pre-, in-, post-order. They share one recursive spine and merely swap three lines. The fourth reading, level-order, abandons recursion for a queue and reads breadth-first. Watch the mechanism strip on the bench: depth-first readings drive a call stack; level-order drives a queue."
    },
    {
      "type": "paragraph",
      "html": "N = the node · L = left subtree · R = right subtree — the root’s seat names the reading"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "preorderradix-prius",
      "text": "Preorderradix prius"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "preorderradix-prius-2",
      "text": "Preorderradix prius"
    },
    {
      "type": "paragraph",
      "html": "Read the node, then its left subtree, then its right. Two facts make preorder useful. First: the first key emitted is always the root. Second: feed the whole sequence into an empty BST and the identical tree regrows — preorder is a <em>build order</em>, which is why it’s the standard choice for copying and serializing trees. It also reads expressions in prefix (Polish) notation."
    },
    {
      "type": "paragraph",
      "html": "first emitted = the root · rebuild: insert in this order<br>live: <span data-live=\"pre\"></span>"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "inorderradix-media",
      "text": "Inorderradix media"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "inorderradix-media-2",
      "text": "Inorderradix media"
    },
    {
      "type": "paragraph",
      "html": "Left subtree, node, right subtree. On an arbitrary binary tree, inorder is just one more ordering. On a BST it is <em>the sorted order</em>: the recursion reads the smaller keys first, the node between, the larger after — ascending, every time, with no sorting performed. That is the tree’s secret: it isn’t so much searched quickly as it is <em>sorted structurally</em>, and inorder is the reading that lets you see it. It is also the cheapest BST validator there is — run it, and check that the output ascends."
    },
    {
      "type": "paragraph",
      "html": "inorder(BST) = keys ascending, zero comparisons spent<br>live: <span data-live=\"in\"></span>"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "postorderradix-postrema",
      "text": "Postorderradix postrema"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "postorderradix-postrema-2",
      "text": "Postorderradix postrema"
    },
    {
      "type": "paragraph",
      "html": "Both subtrees first, the node last — children before parent, always. That ordering is exactly what safe deletion of an entire tree requires (no node is freed while it still has children to free), and what bottom-up computation requires: subtree sizes, heights, and sums are all naturally postorder. The last key emitted is the root — preorder’s mirror. Postorder reads expressions in postfix (Reverse Polish) notation."
    },
    {
      "type": "paragraph",
      "html": "last emitted = the root · subtree aggregates compute bottom-up<br>live: <span data-live=\"post\"></span>"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "level-orderper-gradus",
      "text": "Level-orderper gradus"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "level-orderper-gradus-2",
      "text": "Level-orderper gradus"
    },
    {
      "type": "paragraph",
      "html": "Read level 0 left to right, then level 1, and so on — the tree unrolled row by row. No recursion: a queue does the work. Dequeue a node, visit it, enqueue its children; FIFO order becomes breadth order. Level-order answers the questions the depth-first readings cannot see: how wide the tree is, what each row sums to, which nodes sit nearest the root."
    },
    {
      "type": "paragraph",
      "html": "a queue, not recursion: dequeue → visit → enqueue children<br>live: <span data-live=\"lvl\"></span>"
    },
    {
      "type": "table",
      "head": [
        "Term",
        "In plain words",
        "On this specimen"
      ],
      "rows": []
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "deleting-a-node-the-two-replacement-methods",
      "text": "Deleting a node — the two replacement methods"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "first-the-3-cases-of-deletion",
      "text": "First: The 3 Cases of Deletion"
    },
    {
      "type": "paragraph",
      "html": "Difficulty depends on how many children the node has:"
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Case 1: Leaf",
      "html": "<p>No children → just remove it. Easy!</p>"
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Case 2: One Child",
      "html": "<p>Replace the node with its only child.</p>"
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Case 3: Two Children",
      "html": "<p>Can't just remove it — we <b>replace its value</b> using one of the two methods below!</p>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "the-two-methods",
      "text": "⚖ The Two Methods"
    },
    {
      "type": "paragraph",
      "html": "Both keep the tree a valid BST — the in-order (sorted) sequence never changes."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "method-1-in-order-successor",
      "text": "Method 1 — In-order Successor"
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
      "text": "Method 2 — In-order Predecessor"
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
      "html": "<b>Memory trick:</b> <b>S</b>uccessor = <b>R</b>ight ➜ <b>L</b>eft, left, left… &nbsp;|&nbsp; <b>P</b>redecessor = <b>L</b>eft ➜ <b>R</b>ight, right, right…<br>Why does the replacement always have ≤ 1 child? Because we walked <i>all the way</i> in one direction — there's nothing left on that side!"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "interactive-playground",
      "text": "Interactive Playground"
    },
    {
      "type": "paragraph",
      "html": "Click a node to select it (or type a value), pick a method, then press <b>Delete</b> to watch the animation. Nodes: <b id=\"nodeCount\">0</b>"
    },
    {
      "type": "figure",
      "svg": "<svg id=\"treeSvg\" viewBox=\"0 0 700 360\"></svg>",
      "alt": "Diagram"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "comparison-table",
      "text": "Comparison Table"
    },
    {
      "type": "table",
      "head": [
        "Feature",
        " Successor",
        " Predecessor"
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
          "At most <b>one</b> child → always easy to remove ✔"
        ],
        [
          "Result",
          "Both produce a valid BST with the <b>same sorted order</b> "
        ]
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "test-yourself",
      "text": "Test Yourself"
    },
    {
      "type": "paragraph",
      "html": "Click an answer — instant feedback!"
    }
  ]
};

export default chapter;
