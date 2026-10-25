import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "05-queues",
    "number": 5,
    "title": "Queues",
    "subtitle": "Lecture 3 · Lab 3",
    "kind": "topic",
    "words": 1526,
    "minutes": 7
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
      "html": "In a linear queue, dequeuing only moves <code>front</code> forward · the cells it leaves behind are <b>never reusable</b>. After removing elements, <b>rear may sit at the end of the array while free cells exist at the front</b>; the queue looks “full” but is not. That wasted space is the classic exam motivation: either you <b>shift every remaining element</b> left after each dequeue (O(n)), or you abandon the freed cells and the queue “fills up” while mostly empty."
    },
    {
      "type": "ascii",
      "alt": "Linear array queue after two dequeues: front has moved to index 2, indices 0 and 1 are unusable, rear is stuck at the end",
      "lines": [
        "array:   [ · ][ · ][ 7 ][ 8 ][ 9 ]",
        "               ↑front      ↑rear (SIZE−1)",
        "wasted:  the two cells on the left can never be reused ·",
        "         enqueue(10) reports FULL although only 3 of 5 cells hold data."
      ],
      "caption": "The linear queue “false full”: free space exists, but rear cannot use it."
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Definition",
      "html": "A <b>circular queue</b> (also called a <b>ring buffer</b>) treats the array as a <b>ring</b>: when an index reaches the end it <b>wraps back to 0</b> using the modulo operator. Insertion still happens at the <b>rear</b> and deletion at the <b>front</b> · only the index arithmetic changes. No element is ever shifted, and freed front cells are reused automatically."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "front-rear-and-the-wrap-around",
      "text": "front, rear and the wrap-around"
    },
    {
      "type": "paragraph",
      "html": "Two indices describe the ring: <code>front</code> (index of the <b>first/oldest</b> element · the next to leave) and <code>rear</code> (index of the <b>last/newest</b> element). A common convention starts with <code>front = 0</code> and <code>rear = −1</code> (empty). Both advance with <b>modulo</b>: <code>rear = (rear + 1) % SIZE</code> and <code>front = (front + 1) % SIZE</code>. The modulo is the entire trick: after slot <code>SIZE−1</code>, the next position is slot <code>0</code>, so the indices simply <b>chase each other around the ring forever</b>."
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Exam alert",
      "html": "Memorise both wrap rules: <b>rear = (rear + 1) % SIZE</b> on enqueue and <b>front = (front + 1) % SIZE</b> on dequeue. In a trace, always write the modulo step explicitly · e.g. rear goes 3 → 0 in a SIZE-4 queue · that is where marks are won."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "full-vs-empty-detection",
      "text": "Full vs empty detection"
    },
    {
      "type": "paragraph",
      "html": "There is a catch: after a wrap, <b>front and rear positions alone cannot distinguish a full ring from an empty one</b> · in both situations the indices can end up adjacent or equal. Every implementation must pick ONE of two standard disambiguation strategies:"
    },
    {
      "type": "table",
      "head": [
        "Strategy",
        "How it works",
        "Full condition",
        "Empty condition"
      ],
      "rows": [
        [
          "<b>Count variable</b>",
          "Keep an integer <code>count</code>, incremented on enqueue, decremented on dequeue",
          "<code>count == SIZE</code>",
          "<code>count == 0</code>"
        ],
        [
          "<b>Sacrifice one slot</b>",
          "Never let rear catch front completely · one cell always stays unused",
          "<code>(rear + 1) % SIZE == front</code>",
          "<code>front == rear</code>"
        ]
      ],
      "highlightRows": [0, 1]
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Exam alert",
      "html": "The sacrifice-one-slot version stores at most <b>SIZE − 1</b> elements: that unused cell is the price of telling full from empty without a counter. If a question says “array of 6, one slot sacrificed”, the queue is full after <b>5</b> enqueues."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "circular-enqueue-and-dequeue-in-c",
      "text": "Circular enqueue & dequeue in C"
    },
    {
      "type": "code",
      "language": "c",
      "html": "<span class=\"tok-cm\">/* Count-variable circular queue · the version used in the player below */</span>\n<span class=\"tok-kw\">#define</span> SIZE <span class=\"tok-num\">5</span>\n<span class=\"tok-kw\">int</span> Q[SIZE];  <span class=\"tok-kw\">int</span> front = <span class=\"tok-num\">0</span>, rear = <span class=\"tok-num\">-1</span>, count = <span class=\"tok-num\">0</span>;\n\n<span class=\"tok-kw\">int</span> <span class=\"tok-fn\">enqueue</span>(<span class=\"tok-kw\">int</span> value) {\n    <span class=\"tok-kw\">if</span> (count == SIZE) <span class=\"tok-kw\">return</span> <span class=\"tok-num\">0</span>;        <span class=\"tok-cm\">/* FULL: no room at all            */</span>\n    rear = (rear + <span class=\"tok-num\">1</span>) % SIZE;     <span class=\"tok-cm\">/* WRAP: 4 -> 0 in a SIZE-5 ring   */</span>\n    Q[rear] = value;\n    count++;\n    <span class=\"tok-kw\">return</span> <span class=\"tok-num\">1</span>;\n}\n<span class=\"tok-kw\">int</span> <span class=\"tok-fn\">dequeue</span>(<span class=\"tok-kw\">void</span>) {\n    <span class=\"tok-kw\">if</span> (count == <span class=\"tok-num\">0</span>) <span class=\"tok-kw\">return</span> -<span class=\"tok-num\">1</span>;        <span class=\"tok-cm\">/* EMPTY: nothing to remove        */</span>\n    <span class=\"tok-kw\">int</span> value = Q[front];\n    front = (front + <span class=\"tok-num\">1</span>) % SIZE;    <span class=\"tok-cm\">/* WRAP the leaving index too      */</span>\n    count--;\n    <span class=\"tok-kw\">return</span> value;\n}\n\n<span class=\"tok-cm\">/* Sacrifice-one-slot variant (no counter needed):                 */</span>\n<span class=\"tok-cm\">/*   full:  (rear + 1) % SIZE == front   empty: front == rear      */</span>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "circular-queue-player",
      "text": "Circular queue player"
    },
    {
      "type": "viz",
      "kind": "circularQueue",
      "caption": "Enqueue, dequeue or play the scripted scenario · watch rear = (rear + 1) % N wrap the ring, and the FULL/EMPTY detection frames fire."
    },
    {
      "type": "example",
      "title": "Worked trace: circular queue of size 4 (lecture exercise)",
      "bodyHtml": "<p>Perform: Enqueue 5, 4, 7 · Dequeue · Enqueue 8, 9 · Dequeue · Enqueue 1, 2</p>",
      "solutionHtml": "<p>Indices 0–3, front = 0, rear = −1, count = 0 at the start.<br>\n      1. enqueue 5 → rear = 0 → [5,·,·,·] · enqueue 4 → rear = 1 → [5,4,·,·] · enqueue 7 → rear = 2 → [5,4,7,·]<br>\n      2. dequeue → removes 5 (front = 1) → [·,4,7,·]<br>\n      3. enqueue 8 → rear = 3 → [·,4,7,8] · enqueue 9 → rear = (3 + 1) % 4 = <b>0 (wrap!)</b> → [9,4,7,8]<br>\n      4. dequeue → removes 4 (front = 2)<br>\n      5. enqueue 1 → rear = 1 → [9,1,7,8] · enqueue 2 → count is already 4 → <b>FULL</b>, enqueue refused.</p>\n      <p>Final: [9, 1, 7, 8] with front = 2, rear = 1, count = 4 · a perfectly wrapped ring reusing the dequeued cells.</p>"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "common-circular-queue-mistakes",
      "text": "Common mistakes"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "Forgetting the <b>% SIZE</b> on either index · rear runs off the array exactly when the wrap was needed.",
        "Testing full/empty with <b>positions only</b> (front/rear) while using the count-variable design · the conditions belong to the sacrifice-one-slot design.",
        "Initialising rear to <b>0</b> instead of <b>−1</b> (count design): the first enqueue then overwrites slot 0 twice or reports a phantom element.",
        "In the sacrifice design, forgetting that capacity is <b>SIZE − 1</b>, not SIZE.",
        "Confusing which index moves: <b>enqueue moves rear</b>, <b>dequeue moves front</b> · never the other way round."
      ]
    },
    {
      "type": "table",
      "head": [
        "Circular queue cheat sheet",
        "Count variable",
        "Sacrifice one slot"
      ],
      "rows": [
        [
          "<b>Empty when</b>",
          "<code>count == 0</code>",
          "<code>front == rear</code>"
        ],
        [
          "<b>Full when</b>",
          "<code>count == SIZE</code>",
          "<code>(rear + 1) % SIZE == front</code>"
        ],
        [
          "<b>Enqueue</b>",
          "<code>rear = (rear+1) % SIZE; Q[rear] = x; count++</code>",
          "same index math, test full first"
        ],
        [
          "<b>Dequeue</b>",
          "<code>x = Q[front]; front = (front+1) % SIZE; count−−</code>",
          "same index math, test empty first"
        ],
        [
          "<b>Max stored</b>",
          "SIZE",
          "SIZE − 1"
        ],
        [
          "<b>Cost</b>",
          "one extra int per queue",
          "one wasted cell per queue"
        ]
      ]
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
        },
        {
          "front": "<span class=\"fc-q\">Why does a linear array queue waste space?</span>",
          "back": "<div class=\"fc-a\">Dequeue only moves front forward; freed cells at the front are never reusable, so the queue reports “full” while mostly empty</div>",
          "category": "Circular"
        },
        {
          "front": "<span class=\"fc-q\">Circular queue: how do the indices wrap?</span>",
          "back": "<div class=\"fc-a\">rear = (rear + 1) % SIZE on enqueue; front = (front + 1) % SIZE on dequeue</div>",
          "category": "Circular"
        },
        {
          "front": "<span class=\"fc-q\">Full & empty with a count variable?</span>",
          "back": "<div class=\"fc-a\">Full: count == SIZE · Empty: count == 0</div>",
          "category": "Circular"
        },
        {
          "front": "<span class=\"fc-q\">Full & empty when one slot is sacrificed?</span>",
          "back": "<div class=\"fc-a\">Full: (rear + 1) % SIZE == front · Empty: front == rear · Capacity: SIZE − 1</div>",
          "category": "Circular"
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Topic 4 Quiz: Queues",
      "count": 12,
      "quizSlug": "05-queues"
    }
  ]
};

export default chapter;
