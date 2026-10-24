import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "02-introduction-to-dsa",
    "number": 2,
    "title": "Introduction to DSA",
    "subtitle": "Lecture 1 · Introduction 2026 · Labs 1–2",
    "kind": "topic",
    "words": 749,
    "minutes": 4
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "what-is-data",
      "text": "What is data?"
    },
    {
      "type": "paragraph",
      "html": "<b>Data</b> is a collection of facts from which conclusions may be drawn — e.g. a temperature reading of 38°C. Data comes in many types: <b>textual</b> (your name), <b>numeric</b> (your ID TG/2025/0001), <b>audio</b> (your voice) and <b>video</b> (voice + picture)."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "the-three-core-definitions",
      "text": "The three core definitions"
    },
    {
      "type": "table",
      "head": [
        "Term",
        "Definition (memorize wording)"
      ],
      "rows": [
        [
          "<b>Algorithm</b>",
          "A step-by-step procedure which can be applied to data to achieve some goal"
        ],
        [
          "<b>Program</b>",
          "Implements an algorithm"
        ],
        [
          "<b>Data structure</b>",
          "The manner in which data is represented in the computer to facilitate its access and manipulation by an algorithm — the organization of data needed to solve the problem"
        ]
      ],
      "highlightRows": [
        0,
        2
      ]
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Exam alert",
      "html": "“A data structure is a particular way of <b>storing and organizing data</b> in a computer so that it can be used <b>efficiently and effectively</b>.” It is the <b>logical / mathematical model</b> of the organization of data."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "classifying-data-structures",
      "text": "Classifying data structures"
    },
    {
      "type": "table",
      "head": [
        "Characteristic",
        "Option A",
        "Option B"
      ],
      "rows": [
        [
          "<b>Arrangement</b>",
          "<b>Linear</b> — items in a sequence (array)",
          "<b>Non-linear</b> — no sequence (tree, graph)"
        ],
        [
          "<b>Element types</b>",
          "<b>Homogeneous</b> — all elements same type (array)",
          "<b>Non-homogeneous</b> — may differ (struct)"
        ],
        [
          "<b>Memory</b>",
          "<b>Static</b> — size fixed at compile time (array)",
          "<b>Dynamic</b> — grows/shrinks at run time (linked list)"
        ]
      ]
    },
    {
      "type": "paragraph",
      "html": "The hierarchy splits into <b>primitive</b> data structures (int, float, char, boolean — built into the language) and <b>non-primitive</b> (arrays, lists, stacks, queues, trees, graphs — built from primitives)."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "the-six-data-structure-operations",
      "text": "The six data structure operations"
    },
    {
      "type": "table",
      "head": [
        "Operation",
        "Description"
      ],
      "rows": [
        [
          "<b>Traversing</b>",
          "Accessing each data element exactly once so that certain items may be processed"
        ],
        [
          "<b>Searching</b>",
          "Finding the location of a data element (key) in the structure"
        ],
        [
          "<b>Insertion</b>",
          "Adding a new data element to the structure"
        ],
        [
          "<b>Deletion</b>",
          "Removing a data element from the structure"
        ],
        [
          "<b>Sorting</b>",
          "Arranging data elements in logical order (ascending/descending)"
        ],
        [
          "<b>Merging</b>",
          "Combining elements from two or more structures into one"
        ]
      ]
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Exam alert",
      "html": "All six operations are frequently listed as a 6-mark question. Memorize them in the exact order: <b>Traversing, Searching, Insertion, Deletion, Sorting, Merging</b>."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "abstract-data-type-adt",
      "text": "Abstract Data Type (ADT)"
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Definition",
      "html": "An ADT is a <b>collection of data and a set of operations on that data</b>, defined as a mathematical model of the data objects plus the functions that operate on them — <b>without regard to how they will be implemented</b>."
    },
    {
      "type": "paragraph",
      "html": "In other words, an ADT tells you <b>what</b> the data represents, not <b>how</b> it is constructed. The user interacts only with the <b>interface</b>; the implementation is hidden one level deeper, and that hidden implementation is what we call the <b>data structure</b>."
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Primitive data structures</b> — int, float, boolean, char (e.g. an <code>int</code> stores numerical values with operations +, −, ÷ …). We never worry how an int is implemented in hardware.",
        "<b>Abstract data structures</b> — linked list, tree, graph, stack, queue: an implementation-independent view.",
        "<b>Data structures</b> represent the objects of the ADT; <b>algorithms</b> manipulate the data structures to implement the ADT's operations."
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "choosing-a-structure-the-classic-comparison-table",
      "text": "Choosing a structure — the classic comparison table"
    },
    {
      "type": "table",
      "head": [
        "Data structure",
        "Advantages",
        "Disadvantages"
      ],
      "rows": [
        [
          "<b>Array</b>",
          "Quick insertion, very fast access if index known",
          "Slow search, slow deletion, fixed size"
        ],
        [
          "<b>Ordered array</b>",
          "Quicker search than unsorted array",
          "Slow insertion and deletion, fixed size"
        ],
        [
          "<b>Stack</b>",
          "Provides last-in, first-out access",
          "Slow access to other items"
        ],
        [
          "<b>Queue</b>",
          "Provides first-in, first-out access",
          "Slow access to other items"
        ],
        [
          "<b>Linked list</b>",
          "Quick insertion, quick deletion",
          "Slow (sequential) search"
        ],
        [
          "<b>Binary tree</b>",
          "Quick search, insertion, deletion (if balanced)",
          "Deletion algorithm is complex"
        ]
      ]
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Exam alert",
      "html": "This exact table (from Lecture 1) is a favourite MCQ source: match each structure to its advantage/disadvantage."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "why-study-dsa",
      "text": "Why study DSA?"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Component reuse</b> — once implemented, a data structure can be reused across many applications.",
        "Adding <b>structure to data makes algorithms simpler, easier to maintain, and often faster</b>.",
        "Design goals: <b>correctness, efficiency, robustness, adaptability, reusability</b>.",
        "Uses: real-world data storage, programmer's tools (stacks, queues), real-world modelling (graphs, queues)."
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "c-toolkit-you-must-already-own",
      "text": "C toolkit you must already own"
    },
    {
      "type": "code",
      "language": "c",
      "html": "<span class=\"tok-cm\">/* structures, pointers and dynamic memory — the atoms of every DS in C */</span>\n<span class=\"tok-kw\">struct</span> Node {\n    <span class=\"tok-kw\">int</span>          data;      <span class=\"tok-cm\">/* the payload               */</span>\n    <span class=\"tok-kw\">struct</span> Node *next;      <span class=\"tok-cm\">/* self-referencing pointer  */</span>\n};\n\n<span class=\"tok-kw\">struct</span> Node *np = (<span class=\"tok-kw\">struct</span> Node*) <span class=\"tok-fn\">malloc</span>(<span class=\"tok-kw\">sizeof</span>(<span class=\"tok-kw\">struct</span> Node));\nnp-&gt;data = <span class=\"tok-num\">42</span>;            <span class=\"tok-cm\">/* (*np).data is the same thing */</span>\n<span class=\"tok-fn\">free</span>(np);               <span class=\"tok-cm\">/* return memory to the heap    */</span>"
    },
    {
      "type": "flashcards",
      "cards": [
        {
          "front": "<span class=\"fc-q\">What is an algorithm?</span>",
          "back": "<div class=\"fc-a\">A step-by-step procedure applied to data to achieve some goal</div>",
          "category": "Definition"
        },
        {
          "front": "<span class=\"fc-q\">What is a data structure?</span>",
          "back": "<div class=\"fc-a\">The manner in which data is represented in the computer to facilitate its access and manipulation by an algorithm</div>",
          "category": "Definition"
        },
        {
          "front": "<span class=\"fc-q\">What is an ADT?</span>",
          "back": "<div class=\"fc-a\">A collection of data + a set of operations on it, independent of implementation</div>",
          "category": "Definition"
        },
        {
          "front": "<span class=\"fc-q\">Linear vs non-linear examples?</span>",
          "back": "<div class=\"fc-a\">Linear: array, linked list, stack, queue · Non-linear: tree, graph</div>",
          "category": "Recall"
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Topic 1 Quiz — Introduction to DSA",
      "count": 7,
      "quizSlug": "02-introduction-to-dsa"
    }
  ]
};

export default chapter;
