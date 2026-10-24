import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "04-stacks",
    "number": 4,
    "title": "Stacks",
    "subtitle": "Lecture 2 · Lab 2",
    "kind": "topic",
    "words": 973,
    "minutes": 5
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "what-is-a-stack",
      "text": "What is a stack?"
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Definition",
      "html": "A stack is a <b>linear data structure which can be accessed only at one end</b> — the <b>top</b> — for storing and retrieving data. Insertions and deletions are made at the top only, so elements are removed in the <b>reverse</b> order of insertion: <b>Last-In, First-Out (LIFO)</b>."
    },
    {
      "type": "paragraph",
      "html": "Think of the spring-loaded cafeteria plate dispenser (the origin of the name), a stack of CDs, or a stack of plates: you can only touch the top item. Removing it exposes the next-to-last item, and so on. A stack is a <b>constantly changing object</b>."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "the-adt-operations",
      "text": "The ADT operations"
    },
    {
      "type": "table",
      "head": [
        "Operation",
        "Precondition",
        "Postcondition / behaviour"
      ],
      "rows": [
        [
          "<b>Push(item)</b>",
          "Stack initialized, <b>not full</b>",
          "Item becomes the new top"
        ],
        [
          "<b>Pop()</b>",
          "Stack initialized, <b>not empty</b>",
          "Top element removed and returned"
        ],
        [
          "<b>Peek / Top()</b>",
          "Not empty",
          "Value of the top element <b>without</b> removing"
        ],
        [
          "<b>IsEmpty()</b>",
          "—",
          "True if the stack has no elements"
        ],
        [
          "<b>IsFull()</b>",
          "—",
          "True if no more items fit (array version)"
        ],
        [
          "<b>MakeEmpty</b>",
          "—",
          "Removes all elements"
        ]
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "array-implementation-and-the-top-pointer",
      "text": "Array implementation & the TOP pointer"
    },
    {
      "type": "paragraph",
      "html": "The stack is built on an array with restricted access plus a variable <code>top</code> holding the index of the top element. <b>TOP is initialized to −1</b>, so an empty stack is detected with <code>top == -1</code>."
    },
    {
      "type": "table",
      "head": [
        "Position of TOP",
        "Status of the stack"
      ],
      "rows": [
        [
          "<b>top = −1</b>",
          "Stack is empty"
        ],
        [
          "<b>top = 0</b>",
          "First element just added"
        ],
        [
          "<b>top = N−1</b>",
          "Stack is full (size N)"
        ],
        [
          "<b>top = N</b>",
          "Stack <b>overflow</b>!"
        ]
      ],
      "nowrapCols": [
        0
      ]
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Exam alert",
      "html": "On <b>push</b>: increment TOP first, then store: <code>top = top + 1; stack[top] = item;</code> &nbsp;On <b>pop</b>: read first, then decrement: <code>item = stack[top]; top = top - 1;</code> &nbsp;Always check full-before-push and empty-before-pop."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "the-algorithms-exam-standard",
      "text": "The algorithms (exam standard)"
    },
    {
      "type": "code",
      "language": "c",
      "html": "<span class=\"tok-cm\">/* INIT */</span>   INIT_STACK(STACK, TOP):  TOP := <span class=\"tok-num\">-1</span>\n\n<span class=\"tok-cm\">/* PUSH */</span>    IF TOP = MAX  → print <span class=\"tok-str\">\"Stack is full\"</span> (overflow), exit\n             otherwise: TOP := TOP + <span class=\"tok-num\">1</span>;  STACK(TOP) := ITEM\n\n<span class=\"tok-cm\">/* POP */</span>     IF TOP = <span class=\"tok-num\">-1</span>  → print <span class=\"tok-str\">\"Stack is empty\"</span> (underflow), exit\n             otherwise: ITEM := STACK(TOP);  TOP := TOP − <span class=\"tok-num\">1</span>\n\n<span class=\"tok-cm\">/* IS_FULL */</span>  IF TOP = MAX  → STATUS := true   else false\n<span class=\"tok-cm\">/* IS_EMPTY */</span> IF TOP = <span class=\"tok-num\">-1</span>  → STATUS := true   else false"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "interactive-stack-visualizer",
      "text": "Interactive stack visualizer"
    },
    {
      "type": "viz",
      "kind": "stack",
      "caption": "Push, pop and peek — watch TOP move. Full = overflow error, empty pop = underflow error."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "where-stacks-are-used",
      "text": "Where stacks are used"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Method calls</b> — most microprocessors are stack-based: return address and arguments are pushed on call, popped on return.",
        "<b>Reversing</b> — push all letters of a word, pop them out in reverse order.",
        "<b>Compilers / expression evaluation</b> — converting infix expressions to prefix/postfix and evaluating them.",
        "<b>Browser back button</b> — URLs are pushed as you visit; back pops the current page.",
        "<b>Undo</b> in text editors."
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "infix-prefix-and-postfix-notation",
      "text": "Infix, prefix and postfix notation"
    },
    {
      "type": "paragraph",
      "html": "<b>Infix</b> places the operator <i>between</i> operands (A + B). <b>Prefix</b> (Polish) places it <i>before</i> (+ A B). <b>Postfix</b> (Reverse Polish) places it <i>after</i> (A B +). No parentheses or precedence rules are needed in prefix/postfix — which is why compilers love them."
    },
    {
      "type": "callout",
      "variant": "warn",
      "title": "Precedence order (highest → lowest)",
      "html": "<b>^</b> (exponentiation) &nbsp;&gt;&nbsp; <b>* /</b> &nbsp;&gt;&nbsp; <b>+ −</b>. Equal precedence → left-to-right (associativity), <b>except exponentiation which associates right-to-left</b>. Parentheses override everything."
    },
    {
      "type": "table",
      "head": [
        "Infix",
        "Prefix",
        "Postfix"
      ],
      "rows": [
        [
          "A + B",
          "+ A B",
          "A B +"
        ],
        [
          "A + B * C",
          "+ A * B C",
          "A B C * +"
        ],
        [
          "A * B + C / D",
          "+ * A B / C D",
          "A B * C D / +"
        ],
        [
          "A + B * C + D",
          "+ + A * B C D",
          "A B C * + D +"
        ],
        [
          "(A + B) * (C + D)",
          "* + A B + C D",
          "A B + C D + *"
        ],
        [
          "A * B + C * D",
          "+ * A B * C D",
          "A B * C D * +"
        ],
        [
          "A + B + C + D",
          "+ + + A B C D",
          "A B + C + D +"
        ]
      ],
      "highlightRows": [
        2
      ],
      "nowrapCols": [
        0,
        1,
        2
      ]
    },
    {
      "type": "example",
      "title": "Convert A * B + C / D to postfix",
      "bodyHtml": "<p>Apply precedence: (A*B) + (C/D) → (AB*) + (CD/) → <b>AB*CD/+</b></p>",
      "solutionHtml": "<p>1. Highest precedence first: A*B becomes <b>AB*</b> and C/D becomes <b>CD/</b>.<br>\n      2. The expression is now (AB*) + (CD/).<br>\n      3. Apply the final +: <b>AB*CD/+</b>. </p>"
    },
    {
      "type": "example",
      "title": "Evaluate postfix 1 2 4 * + 3 + with a stack",
      "bodyHtml": "<p>Rule: <b>operand → push; operator → pop two, evaluate, push result.</b></p>",
      "solutionHtml": "<div class=\"tbl-wrap\"><table class=\"tbl\">\n        <tbody><tr><th>Input</th><th>Operation</th><th>Stack (after)</th></tr>\n        <tr><td class=\"m\">1</td><td>Push operand</td><td class=\"m\">1</td></tr>\n        <tr><td class=\"m\">2</td><td>Push operand</td><td class=\"m\">2, 1</td></tr>\n        <tr><td class=\"m\">4</td><td>Push operand</td><td class=\"m\">4, 2, 1</td></tr>\n        <tr><td class=\"m\">*</td><td>Pop 4, 2 → 2×4 = 8 → push</td><td class=\"m\">8, 1</td></tr>\n        <tr><td class=\"m\">+</td><td>Pop 8, 1 → 1+8 = 9 → push</td><td class=\"m\">9</td></tr>\n        <tr><td class=\"m\">3</td><td>Push operand</td><td class=\"m\">3, 9</td></tr>\n        <tr class=\"hl\"><td class=\"m\">+</td><td>Pop 3, 9 → 9+3 = 12 → push</td><td class=\"m\"><b>12</b></td></tr>\n      </tbody></table></div>\n      <p>The final result <b>12</b> is on top of the stack at the end of the calculation.</p>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "stack-via-linked-list",
      "text": "Stack via linked list"
    },
    {
      "type": "paragraph",
      "html": "The array stack works only for a <b>fixed number</b> of values — unsuitable when the data size is unknown. A linked-list stack grows without limit: every new element is inserted as the new <b>top</b>, pointed at by <code>top</code>."
    },
    {
      "type": "code",
      "language": "c",
      "html": "<span class=\"tok-kw\">void</span> <span class=\"tok-fn\">push</span>(<span class=\"tok-kw\">int</span> x) {\n    node *n = <span class=\"tok-fn\">malloc</span>(<span class=\"tok-kw\">sizeof</span>(node));\n    n-&gt;data = x;  n-&gt;next = top;   <span class=\"tok-cm\">/* new node points at old top */</span>\n    top = n;                        <span class=\"tok-cm\">/* top now points at new node */</span>\n}\n<span class=\"tok-kw\">int</span> <span class=\"tok-fn\">pop</span>() {\n    node *tmp = top;  <span class=\"tok-kw\">int</span> n = tmp-&gt;data;   <span class=\"tok-cm\">/* 6 steps: temp, point,   */</span>\n    top = top-&gt;next;                          <span class=\"tok-cm\">/* store, advance, free,   */</span>\n    <span class=\"tok-fn\">free</span>(tmp);  <span class=\"tok-kw\">return</span> n;               <span class=\"tok-cm\">/* return                  */</span>\n}"
    },
    {
      "type": "paragraph",
      "html": "Array vs linked list implementations: the array gives <b>best performance</b> but a <b>fixed size</b>; the linked list gives <b>constant-time push/pop</b> and can grow to <i>infinite</i> size, but is slower in the common case."
    },
    {
      "type": "flashcards",
      "cards": [
        {
          "front": "<span class=\"fc-q\">Stack order principle?</span>",
          "back": "<div class=\"fc-a\">LIFO — Last In, First Out</div>",
          "category": "Principle"
        },
        {
          "front": "<span class=\"fc-q\">Value of TOP when stack is empty?</span>",
          "back": "<div class=\"fc-a\">−1 (so top == −1 tests emptiness)</div>",
          "category": "Pointer"
        },
        {
          "front": "<span class=\"fc-q\">Infix (A+B)*C in postfix?</span>",
          "back": "<div class=\"fc-a\">A B + C *</div>",
          "category": "Notation"
        },
        {
          "front": "<span class=\"fc-q\">Postfix rule for operators?</span>",
          "back": "<div class=\"fc-a\">Pop two operands, evaluate, push the result</div>",
          "category": "Evaluation"
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Topic 3 Quiz — Stacks",
      "count": 8,
      "quizSlug": "04-stacks"
    }
  ]
};

export default chapter;
