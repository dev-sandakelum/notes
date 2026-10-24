import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "06-linked-lists",
    "number": 6,
    "title": "Linked lists",
    "subtitle": "Lecture 4 · Lecture 5 · Labs 4–5",
    "kind": "topic",
    "words": 1189,
    "minutes": 6
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "from-lists-to-linked-lists",
      "text": "From lists to linked lists"
    },
    {
      "type": "paragraph",
      "html": "A <b>list</b> is a finite sequence of elements (e.g. a list of integers or records). It can be stored two ways:"
    },
    {
      "type": "table",
      "head": [
        "Storage",
        "Description",
        "Weakness"
      ],
      "rows": [
        [
          "<b>Contiguous</b> (array)",
          "Elements physically adjacent in memory",
          "Fixed size, wastes space, front insertion shifts all elements"
        ],
        [
          "<b>Non-contiguous</b> (linked list)",
          "Elements stored “somewhere” in memory; order kept by explicit <b>links</b>",
          "No random access → no binary search; extra pointer memory; worse cache locality"
        ]
      ],
      "highlightRows": [
        1
      ]
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Exam alert",
      "html": "Linked list advantages over arrays: <b>1) dynamic size</b> (grows/shrinks at run time), <b>2) easy insertion/deletion</b> (no shifting). Drawbacks: no random access (must traverse sequentially from the first node, so <b>no binary search</b>), extra space per node for a pointer, and arrays have better cache locality."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "anatomy-of-a-node",
      "text": "Anatomy of a node"
    },
    {
      "type": "htmlFigure",
      "html": "<div style=\"display:flex;align-items:center;gap:8px;justify-content:center;flex-wrap:wrap;padding:6px 0\">\n      <span class=\"nbox\"><span class=\"nd\">12</span><span class=\"np\">next ●</span></span><span class=\"arrow\">→</span>\n      <span class=\"nbox\"><span class=\"nd\">99</span><span class=\"np\">next ●</span></span><span class=\"arrow\">→</span>\n      <span class=\"nbox\"><span class=\"nd\">37</span><span class=\"np\">NULL</span></span>\n    </div>\n    <div class=\"dia-cap\">Head points to the first node · each node = data + pointer to next · the last node's next is NULL</div>",
      "alt": "Head points to the first node · each node = data + pointer to next · the last node's next is NULL",
      "caption": "Head points to the first node · each node = data + pointer to next · the last node's next is NULL"
    },
    {
      "type": "code",
      "language": "c",
      "html": "<span class=\"tok-kw\">struct</span> Node {\n    <span class=\"tok-kw\">int</span>          data;     <span class=\"tok-cm\">/* the payload: any type      */</span>\n    <span class=\"tok-kw\">struct</span> Node *next;     <span class=\"tok-cm\">/* self-referencing pointer    */</span>\n};                           <span class=\"tok-cm\">/* head: pointer to first node  */</span>"
    },
    {
      "type": "paragraph",
      "html": "Nodes are created <b>dynamically</b> with <code>malloc()</code>, which requests a block of memory from the <b>heap</b>: <code>struct node *np = (struct node*) malloc(sizeof(struct node));</code>. Because memory comes from anywhere, the <b>address of every node is stored in the previous node</b>; that is why pointers are essential."
    },
    {
      "type": "example",
      "title": "Building a 3-node list by hand",
      "bodyHtml": "<pre class=\"code\"><span class=\"tok-kw\">struct</span> node *head, *one = NULL, *two = NULL, *three = NULL;\none   = <span class=\"tok-fn\">malloc</span>(<span class=\"tok-kw\">sizeof</span>(<span class=\"tok-kw\">struct</span> node));\ntwo   = <span class=\"tok-fn\">malloc</span>(<span class=\"tok-kw\">sizeof</span>(<span class=\"tok-kw\">struct</span> node));\nthree = <span class=\"tok-fn\">malloc</span>(<span class=\"tok-kw\">sizeof</span>(<span class=\"tok-kw\">struct</span> node));\none-&gt;data = <span class=\"tok-num\">1</span>;  two-&gt;data = <span class=\"tok-num\">2</span>;  three-&gt;data = <span class=\"tok-num\">3</span>;\none-&gt;next = two;  two-&gt;next = three;  three-&gt;next = NULL;\nhead = one;      <span class=\"tok-cm\">/* save the address of the first node */</span></pre>\n    <p>Inserting 4 between 1 and 2 later: create the node, set its data, point its next at the node containing 2, and change 1's next to the new node.</p>",
      "solutionHtml": null
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "insertion-the-three-positions",
      "text": "Insertion: the three positions"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "1-insert-at-the-beginning-4-steps",
      "text": "1 · insert at the beginning (4 steps)"
    },
    {
      "type": "code",
      "language": "c",
      "html": "<span class=\"tok-kw\">void</span> <span class=\"tok-fn\">insert</span>(<span class=\"tok-kw\">struct</span> Node **head_ref, <span class=\"tok-kw\">int</span> new_data) {\n    <span class=\"tok-kw\">struct</span> Node *new_node = <span class=\"tok-fn\">malloc</span>(<span class=\"tok-kw\">sizeof</span>(<span class=\"tok-kw\">struct</span> Node));\n    new_node-&gt;data  = new_data;      <span class=\"tok-cm\">/* E-&gt;data = data   */</span>\n    new_node-&gt;next  = (*head_ref);   <span class=\"tok-cm\">/* E-&gt;next = head   */</span>\n    (*head_ref)     = new_node;      <span class=\"tok-cm\">/* head   = E      */</span>\n}"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "2-insert-after-a-given-node",
      "text": "2 · insert after a given node"
    },
    {
      "type": "code",
      "language": "c",
      "html": "<span class=\"tok-kw\">void</span> <span class=\"tok-fn\">insertAfter</span>(<span class=\"tok-kw\">struct</span> Node *prev_node, <span class=\"tok-kw\">int</span> new_data) {\n    <span class=\"tok-kw\">if</span> (prev_node == NULL) { <span class=\"tok-fn\">printf</span>(<span class=\"tok-str\">\"the given previous node cannot be NULL\"</span>); <span class=\"tok-kw\">return</span>; }\n    <span class=\"tok-kw\">struct</span> Node *new_node = <span class=\"tok-fn\">malloc</span>(<span class=\"tok-kw\">sizeof</span>(<span class=\"tok-kw\">struct</span> Node));\n    new_node-&gt;data     = new_data;\n    new_node-&gt;next     = prev_node-&gt;next;   <span class=\"tok-cm\">/* link new → successor  */</span>\n    prev_node-&gt;next    = new_node;          <span class=\"tok-cm\">/* link prev → new       */</span>\n}"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "3-insert-at-the-end-append",
      "text": "3 · insert at the end (append)"
    },
    {
      "type": "code",
      "language": "c",
      "html": "<span class=\"tok-kw\">void</span> <span class=\"tok-fn\">append</span>(<span class=\"tok-kw\">struct</span> Node **head_ref, <span class=\"tok-kw\">int</span> new_data) {\n    <span class=\"tok-kw\">struct</span> Node *new_node = <span class=\"tok-fn\">malloc</span>(<span class=\"tok-kw\">sizeof</span>(<span class=\"tok-kw\">struct</span> Node));\n    <span class=\"tok-kw\">struct</span> Node *last = *head_ref;\n    new_node-&gt;data = new_data;  new_node-&gt;next = NULL;\n    <span class=\"tok-kw\">if</span> (*head_ref == NULL) { *head_ref = new_node; <span class=\"tok-kw\">return</span>; }  <span class=\"tok-cm\">/* empty list */</span>\n    <span class=\"tok-kw\">while</span> (last-&gt;next != NULL) last = last-&gt;next;               <span class=\"tok-cm\">/* traverse   */</span>\n    last-&gt;next = new_node;\n}"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "deletion-always-3-steps",
      "text": "Deletion: always 3 steps"
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Exam alert",
      "html": "Deleting node X: <b>1)</b> find the <b>previous</b> node of X · <b>2)</b> change prev's next to skip X · <b>3)</b> <code>free(X)</code>."
    },
    {
      "type": "code",
      "language": "c",
      "html": "<span class=\"tok-cm\">/* search then unlink then free */</span>\npCur = pHead;\n<span class=\"tok-kw\">while</span> (pCur != NULL &amp;&amp; pCur-&gt;data != target)\n    pCur = pCur-&gt;right;          <span class=\"tok-cm\">/* advance until found or end */</span>\nfound = (pCur != NULL);"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "doubly-linked-lists-dll",
      "text": "Doubly linked lists (DLL)"
    },
    {
      "type": "paragraph",
      "html": "A DLL links nodes in <b>both directions</b>. Every node has <b>three fields: prev pointer, data, next pointer</b>. Motivation: many applications need quick access to the <b>predecessor</b> of a node, impossible in O(1) with a singly list."
    },
    {
      "type": "htmlFigure",
      "html": "<div style=\"display:flex;align-items:center;gap:7px;justify-content:center;flex-wrap:wrap;padding:6px 0\">\n      <span style=\"font-family:var(--mono);font-size:.72rem;color:var(--muted)\">header<br>sentinel</span>\n      <span class=\"nbox\"><span class=\"np\">●</span><span class=\"nd\">A</span><span class=\"np\">●</span></span><span class=\"arrow\">⇄</span>\n      <span class=\"nbox\"><span class=\"np\">●</span><span class=\"nd\">B</span><span class=\"np\">●</span></span><span class=\"arrow\">⇄</span>\n      <span class=\"nbox\"><span class=\"np\">●</span><span class=\"nd\">C</span><span class=\"np\">●</span></span>\n      <span style=\"font-family:var(--mono);font-size:.72rem;color:var(--muted)\">trailer<br>sentinel</span>\n    </div>\n    <div class=\"dia-cap\">Doubly-linked list with header &amp; trailer sentinel nodes (dummy nodes storing no data)</div>",
      "alt": "Doubly-linked list with header & trailer sentinel nodes (dummy nodes storing no data)",
      "caption": "Doubly-linked list with header & trailer sentinel nodes (dummy nodes storing no data)"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Advantages over singly:</b> traverse both ways; quick updates at both ends and the middle; deleting a given node is efficient (the prev pointer hands you the previous node, no traversal).",
        "<b>Disadvantages:</b> every node needs <b>extra space</b> for prev; every operation maintains one more pointer.",
        "<b>Sentinels:</b> head/tail dummy nodes simplify edge cases, header has null-prev, trailer has null-next; a size-counter tracks node count (excluding sentinels)."
      ]
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "dll-insert-at-the-middle-4-pointer-updates",
      "text": "DLL: insert at the middle (4 pointer updates)"
    },
    {
      "type": "code",
      "language": "c",
      "html": "pNew = (<span class=\"tok-kw\">struct</span> node *) <span class=\"tok-fn\">malloc</span>(<span class=\"tok-kw\">sizeof</span>(<span class=\"tok-kw\">struct</span> dllnode));\npNew-&gt;data  = <span class=\"tok-num\">64</span>;\npNew-&gt;left  = pCur;              <span class=\"tok-cm\">/* new node points to …        */</span>\npNew-&gt;right = pCur-&gt;right;       <span class=\"tok-cm\">/*   … its successor + pred    */</span>\npCur-&gt;right-&gt;left = pNew;        <span class=\"tok-cm\">/* successor points back       */</span>\npCur-&gt;right = pNew;              <span class=\"tok-cm\">/* predecessor points forward  */</span>"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "dll-delete-node-pcur",
      "text": "DLL: delete node pCur"
    },
    {
      "type": "code",
      "language": "c",
      "html": "<span class=\"tok-kw\">if</span> (pCur-&gt;left == NULL) {              <span class=\"tok-cm\">/* first node of the list */</span>\n    pHead = pCur-&gt;right;\n    pCur-&gt;right-&gt;left = NULL;\n} <span class=\"tok-kw\">else</span> {                                <span class=\"tok-cm\">/* any other node         */</span>\n    pCur-&gt;left-&gt;right = pCur-&gt;right;     <span class=\"tok-cm\">/* neighbours point to    */</span>\n    pCur-&gt;right-&gt;left = pCur-&gt;left;      <span class=\"tok-cm\">/*   … each other         */</span>\n}\n<span class=\"tok-fn\">free</span>(pCur);                            <span class=\"tok-cm\">/* recycle the node       */</span>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "circular-linked-lists",
      "text": "Circular linked lists"
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Definition",
      "html": "A circular linked list has <b>no beginning and no end</b>: the last node's <b>next stores the address of the first node</b>. The structure definition is identical to a singly list, only the last link differs (head instead of NULL)."
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Any node can be a starting point</b>, traverse the whole list from anywhere; stop when the first visited node appears again.",
        "<b>Queue-friendly:</b> only <b>one pointer</b> is needed (to the last node), front is always next of last.",
        "<b>OS round-robin:</b> running applications are kept in a circular list and cycled through, each getting a CPU time slice, reaching the end wraps to the front automatically.",
        "Multiplayer games: players are kept in a circular list; the pointer advances as each turn ends."
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "types-of-linked-list-summary",
      "text": "Types of linked list: summary"
    },
    {
      "type": "table",
      "head": [
        "Type",
        "Navigation",
        "Key fact"
      ],
      "rows": [
        [
          "<b>Simple (singly)</b>",
          "Forward only",
          "Last node → NULL"
        ],
        [
          "<b>Doubly</b>",
          "Forward <b>and</b> backward",
          "3 fields: prev, data, next (+ sentinels)"
        ],
        [
          "<b>Circular</b>",
          "Forward, wraps forever",
          "Last node → first node"
        ]
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "stack-and-queue-via-linked-lists-lecture-5",
      "text": "Stack & queue via linked lists (lecture 5)"
    },
    {
      "type": "paragraph",
      "html": "The array versions are limited to a <b>fixed number of values</b>, unsuitable when the size is unknown. Linked versions organize <b>as many values as wanted</b> with no size fixed in advance:"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Stack:</b> every push inserts a node as the new <b>top</b> (<code>n-&gt;next = top; top = n;</code>); pop reads and frees the top.",
        "<b>Queue:</b> enqueue adds at the rear, dequeue removes the front, using the count/front/rear struct shown in Topic 4."
      ]
    },
    {
      "type": "flashcards",
      "cards": [
        {
          "front": "<span class=\"fc-q\">What does a DLL node store?</span>",
          "back": "<div class=\"fc-a\">prev pointer + data + next pointer</div>",
          "category": "Node"
        },
        {
          "front": "<span class=\"fc-q\">Can you binary search a linked list?</span>",
          "back": "<div class=\"fc-a\">No: no random access; access is sequential from the first node</div>",
          "category": "Rule"
        },
        {
          "front": "<span class=\"fc-q\">What does malloc() do?</span>",
          "back": "<div class=\"fc-a\">Requests a block of memory from the heap at run time</div>",
          "category": "Malloc"
        },
        {
          "front": "<span class=\"fc-q\">Why do OS round-robin schedulers use circular lists?</span>",
          "back": "<div class=\"fc-a\">The list wraps to the front, so cycling through apps never stops</div>",
          "category": "Circular"
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Topic 5 Quiz: Linked Lists",
      "count": 8,
      "quizSlug": "06-linked-lists"
    }
  ]
};

export default chapter;
