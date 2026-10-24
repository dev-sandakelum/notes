import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "01-introduction",
    "number": 1,
    "title": "Introduction",
    "kind": "topic",
    "words": 256,
    "minutes": 1
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "how-to-use-these-notes",
      "text": "How to use these notes"
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Study loop",
      "html": "Read a topic → try the worked examples before revealing solutions → flip all flashcards → take the topic quiz → press <b>Mark as complete</b>. Your progress and theme are saved in this browser (localStorage), even after closing the file."
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "Exam focus",
      "html": "Red <b>Exam alert</b> boxes flag facts that are repeatedly examined. The <b>Master Cheat Sheet</b> compresses the whole course into tables and formulas, perfect for the night before. Finish with the <b>Final Practice Exam</b>."
    },
    {
      "type": "callout",
      "variant": "warn",
      "title": "Searching",
      "html": "Use the search box in the top bar (or press <code>/</code>) to filter topics instantly, e.g. type <i>“rotation”</i>, <i>“postfix”</i> or <i>“circular”</i>."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "course-snapshot",
      "text": "Course snapshot"
    },
    {
      "type": "table",
      "head": [
        "Item",
        "Weight",
        "Notes"
      ],
      "rows": [
        [
          "Continuous assessments",
          "10%",
          "Three quizzes during the semester"
        ],
        [
          "Midterm evaluation",
          "20%",
          "Theory + practical mid-semester test"
        ],
        [
          "Assignment",
          "10%",
          "Laboratory assignments (Labs 1–9)"
        ],
        [
          "<b>Final examination: theory</b>",
          "<b>40%</b>",
          "These notes target this paper"
        ],
        [
          "Final examination: practical",
          "20%",
          "C programming on Linux"
        ]
      ],
      "highlightRows": [
        3
      ],
      "nowrapCols": [
        1
      ]
    },
    {
      "type": "paragraph",
      "html": "<b>Prerequisites:</b> C programming, covering basic data types, control structures, functions, arrays, pointers and structures. The labs use C on Linux with <code>gcc</code>."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "topics",
      "text": "Topics"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"topic-grid\">\n    <a class=\"t-card\" href=\"#t1\"><span class=\"tn\">1</span><div><b>Introduction to DSA</b><span>Data, structures, operations, ADT</span></div></a>\n    <a class=\"t-card\" href=\"#t2\"><span class=\"tn\">2</span><div><b>Algorithms &amp; Complexity</b><span>Big-O, Big-Ω, Big-Θ analysis</span></div></a>\n    <a class=\"t-card\" href=\"#t3\"><span class=\"tn\">3</span><div><b>Stacks</b><span>LIFO, push/pop, postfix</span></div></a>\n    <a class=\"t-card\" href=\"#t4\"><span class=\"tn\">4</span><div><b>Queues</b><span>FIFO, circular queue</span></div></a>\n    <a class=\"t-card\" href=\"#t5\"><span class=\"tn\">5</span><div><b>Linked Lists</b><span>Singly, doubly, circular</span></div></a>\n    <a class=\"t-card\" href=\"#t6\"><span class=\"tn\">6</span><div><b>Trees &amp; Binary Trees</b><span>Terminology, properties</span></div></a>\n    <a class=\"t-card\" href=\"#t7\"><span class=\"tn\">7</span><div><b>Tree Traversals</b><span>Pre / In / Post order</span></div></a>\n    <a class=\"t-card\" href=\"#t8\"><span class=\"tn\">8</span><div><b>Binary Search Trees</b><span>Search, insert, delete cases</span></div></a>\n    <a class=\"t-card\" href=\"#t9\"><span class=\"tn\">9</span><div><b>AVL Trees</b><span>Balance factors, rotations</span></div></a>\n    <a class=\"t-card\" href=\"#t10\"><span class=\"tn\">10</span><div><b>Heaps &amp; Heap Sort</b><span>Max/min heap, heapify</span></div></a>\n    <a class=\"t-card\" href=\"#t11\"><span class=\"tn\">11</span><div><b>Sorting Algorithms</b><span>Bubble → quick, visualized</span></div></a>\n    <a class=\"t-card\" href=\"#t12\"><span class=\"tn\">12</span><div><b>Hashing</b><span>Hash functions, collisions</span></div></a>\n  </div>",
      "alt": "Course topic map"
    }
  ]
};

export default chapter;
