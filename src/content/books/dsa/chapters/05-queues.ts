import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "05-queues",
    "number": 5,
    "title": "Queues",
    "subtitle": "Lecture 3 · Lab 3",
    "kind": "topic",
    "words": 783,
    "minutes": 4
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "what-is-a-queue",
      "text": "What is a queue?"
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Definition",
      "html": "A queue is a linear data structure similar to a stack, but insertions are made at the <b>rear</b> and deletions at the <b>front</b>. The first element inserted is the first removed: <b>First-In, First-Out (FIFO)</b>, like queuing at the bank or bus stop."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "operations",
      "text": "Operations"
    },
    {
      "type": "table",
      "head": [
        "Operation",
        "Description"
      ],
      "rows": [
        [
          "<b>enqueue(item)</b>",
          "Adds an element at the <b>rear</b> of the queue"
        ],
        [
          "<b>dequeue()</b>",
          "Removes an element from the <b>front</b>"
        ],
        [
          "<b>First / peek()</b>",
          "Examines the front element without removing it"
        ],
        [
          "<b>isEmpty()</b>",
          "True when the queue is empty"
        ],
        [
          "<b>size()</b>",
          "Number of elements = <b>rear − front + 1</b>"
        ],
        [
          "<b>toString()</b>",
          "String representation"
        ]
      ]
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Exam alert",
      "html": "Number of elements in a linear queue = <code>rear − front + 1</code>. For an empty queue, rear is initialized to <b>front − 1</b> (e.g. front = 0, rear = −1, size = 0)."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "enqueue-and-dequeue-algorithms",
      "text": "Enqueue & dequeue algorithms"
    },
    {
      "type": "code",
      "language": "c",
      "html": "<span class=\"tok-cm\">/* ENQUEUE */</span>                    <span class=\"tok-cm\">/* DEQUEUE */</span>\n<span class=\"tok-kw\">procedure</span> <span class=\"tok-fn\">enqueue</span>(data)              <span class=\"tok-kw\">procedure</span> <span class=\"tok-fn\">dequeue</span>\n   <span class=\"tok-kw\">if</span> queue is full                       <span class=\"tok-kw\">if</span> queue is empty\n      <span class=\"tok-kw\">return</span> overflow                           <span class=\"tok-kw\">return</span> underflow\n   rear ← rear + <span class=\"tok-num\">1</span>                       data = queue[front]\n   queue[rear] ← data                     front ← front + <span class=\"tok-num\">1</span>\n   <span class=\"tok-kw\">return</span> <span class=\"tok-kw\">true</span>                            <span class=\"tok-kw\">return</span> <span class=\"tok-kw\">true</span>"
    },
    {
      "type": "example",
      "title": "Operations trace: lecture 3 example",
      "bodyHtml": "<p>Starting from empty, apply: enqueue 5, 3 · dequeue (→5) · enqueue 7 · dequeue (→3) · front (→7) · dequeue (→7) · dequeue (error, empty) · isEmpty (→true) · enqueue 9, 7 · size (→2) · enqueue 3, 5 · dequeue (→9)</p>",
      "solutionHtml": "<div class=\"tbl-wrap\"><table class=\"tbl\">\n        <tbody><tr><th>Operation</th><th>Output</th><th>Queue (front…rear)</th></tr>\n        <tr><td class=\"m\">enqueue(5)</td><td>. </td><td class=\"m\">5</td></tr>\n        <tr><td class=\"m\">enqueue(3)</td><td>. </td><td class=\"m\">5, 3</td></tr>\n        <tr><td class=\"m\">dequeue()</td><td><b>5</b></td><td class=\"m\">3</td></tr>\n        <tr><td class=\"m\">enqueue(7)</td><td>. </td><td class=\"m\">3, 7</td></tr>\n        <tr><td class=\"m\">dequeue()</td><td><b>3</b></td><td class=\"m\">7</td></tr>\n        <tr><td class=\"m\">front()</td><td><b>7</b></td><td class=\"m\">7</td></tr>\n        <tr><td class=\"m\">dequeue()</td><td><b>7</b></td><td class=\"m\">(empty)</td></tr>\n        <tr><td class=\"m\">dequeue()</td><td><b>error</b></td><td class=\"m\">(empty)</td></tr>\n        <tr><td class=\"m\">isEmpty()</td><td><b>true</b></td><td class=\"m\">(empty)</td></tr>\n        <tr><td class=\"m\">enqueue(9), enqueue(7)</td><td>. </td><td class=\"m\">9, 7</td></tr>\n        <tr><td class=\"m\">size()</td><td><b>2</b></td><td class=\"m\">9, 7</td></tr>\n        <tr><td class=\"m\">enqueue(3), enqueue(5)</td><td>. </td><td class=\"m\">9, 7, 3, 5</td></tr>\n        <tr class=\"hl\"><td class=\"m\">dequeue()</td><td><b>9</b></td><td class=\"m\">7, 3, 5</td></tr>\n      </tbody></table></div>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "interactive-queue-visualizer",
      "text": "Interactive queue visualizer"
    },
    {
      "type": "viz",
      "kind": "queue",
      "caption": "Watch FRONT and REAR. After dequeues, rear hits the end; the “false full” problem that circular queues fix."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "the-linear-queue-problem-circular-queues",
      "text": "The linear queue problem → circular queues"
    },
    {
      "type": "paragraph",
      "html": "In a linear queue, dequeuing only moves <code>front</code> forward. After removing elements, <b>rear may sit at the end of the array while free cells exist at the front</b>; the queue looks “full” but is not. The fix: let indices <b>wrap around</b>: a <b>circular queue</b> (also called a <b>ring buffer</b>)."
    },
    {
      "type": "table",
      "head": [
        "Situation",
        "Condition"
      ],
      "rows": [
        [
          "<b>Queue is full</b>",
          "<code>(rear == SIZE-1 &amp;&amp; front == 0) || (front == rear+1)</code>"
        ],
        [
          "<b>Wrap rear to start</b>",
          "if <code>rear == SIZE-1 &amp;&amp; front = 0</code> then <code>rear = −1</code> before incrementing"
        ],
        [
          "<b>Empty buffer</b>",
          "read pointer == write pointer"
        ]
      ],
      "highlightRows": [
        0
      ]
    },
    {
      "type": "example",
      "title": "Lecture exercise: circular queue of size 4",
      "bodyHtml": "<p>Perform: Enqueue 5, 4, 7 · Dequeue · Enqueue 8, 9 · Dequeue · Enqueue 1, 2</p>",
      "solutionHtml": "<p>Indices 0–3.<br>\n      1. enqueue 5 → [5,·,·,·] · enqueue 4 → [5,4,·,·] · enqueue 7 → [5,4,7,·]<br>\n      2. dequeue → removes 5 (front now 1) → [·,4,7,·]<br>\n      3. enqueue 8 → [·,4,7,8]: rear = 3 = SIZE−1; enqueue 9 must <b>wrap</b>: rear → 0 → [9,4,7,8]<br>\n      4. dequeue → removes 4 (front now 2)<br>\n      5. enqueue 1 → rear 1: [9,1,7,8] · enqueue 2 → rear is at 2, but 2 holds 7 and front = 2 → next cell would make front == rear+1… position 3 is taken by 8, wrap to check: the queue is <b>full</b> (4 elements: 7, 8, 9, 1) → enqueue 2 fails with overflow.</p>\n      <p>Final: [9, 1, 7, 8] with front = 2, rear = 1, a perfectly wrapped ring.</p>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "queue-variants-and-applications",
      "text": "Queue variants & applications"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Variants:</b> normal (FIFO), circular, double-ended queue (<b>deque</b>), <b>priority queue</b>.",
        "<b>In the OS:</b> printer spooling (SPOOLING), keyboard buffer (stores keystrokes as you type), CPU <b>job queue</b> in multi-user systems, pipeline.",
        "<b>Real world:</b> grocery / bank lines, aeroplanes at airports, data packets in communication.",
        "Simulation programs, games, processor scheduling."
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "queue-via-linked-list",
      "text": "Queue via linked list"
    },
    {
      "type": "paragraph",
      "html": "Same motivation as the stack: unlimited size. Keep a <code>queue</code> struct with <b>count, front, rear</b>; enqueue at the rear, dequeue at the front, no shifting, no wraparound logic."
    },
    {
      "type": "code",
      "language": "c",
      "html": "<span class=\"tok-kw\">struct</span> queue { <span class=\"tok-kw\">int</span> count; node *front; node *rear; };\n\n<span class=\"tok-kw\">void</span> <span class=\"tok-fn\">enqueue</span>(queue *q, <span class=\"tok-kw\">int</span> value) {\n    node *tmp = <span class=\"tok-fn\">malloc</span>(<span class=\"tok-kw\">sizeof</span>(node));\n    tmp-&gt;data = value;  tmp-&gt;next = NULL;\n    <span class=\"tok-kw\">if</span> (!isempty(q)) { q-&gt;rear-&gt;next = tmp; q-&gt;rear = tmp; }\n    <span class=\"tok-kw\">else</span>              { q-&gt;front = q-&gt;rear = tmp; }   <span class=\"tok-cm\">/* first node */</span>\n    q-&gt;count++;\n}\n<span class=\"tok-kw\">int</span> <span class=\"tok-fn\">dequeue</span>(queue *q) {\n    node *tmp = q-&gt;front;  <span class=\"tok-kw\">int</span> n = q-&gt;front-&gt;data;\n    q-&gt;front = q-&gt;front-&gt;next;  q-&gt;count--;\n    <span class=\"tok-fn\">free</span>(tmp);  <span class=\"tok-kw\">return</span> n;\n}"
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "Clever fact",
      "html": "A circular <i>linked list</i> can implement a queue with only <b>one</b> pointer: keep a pointer to the last node; the front is always <code>last-&gt;next</code>."
    },
    {
      "type": "flashcards",
      "cards": [
        {
          "front": "<span class=\"fc-q\">Queue order principle?</span>",
          "back": "<div class=\"fc-a\">FIFO: First In, First Out</div>",
          "category": "Principle"
        },
        {
          "front": "<span class=\"fc-q\">Number of elements in a queue?</span>",
          "back": "<div class=\"fc-a\">rear − front + 1</div>",
          "category": "Formula"
        },
        {
          "front": "<span class=\"fc-q\">Another name for a circular queue?</span>",
          "back": "<div class=\"fc-a\">Ring buffer</div>",
          "category": "Circular"
        },
        {
          "front": "<span class=\"fc-q\">Name the four queue types</span>",
          "back": "<div class=\"fc-a\">Normal (FIFO), Circular, Deque, Priority</div>",
          "category": "Variants"
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Topic 4 Quiz: Queues",
      "count": 8,
      "quizSlug": "05-queues"
    }
  ]
};

export default chapter;
