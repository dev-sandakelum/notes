import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "02-object-oriented-languages",
    "number": 2,
    "title": "Object-Oriented languages",
    "subtitle": "Week 2 · Object-Oriented Languages",
    "kind": "topic",
    "words": 804,
    "minutes": 4
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "2-1-introduction",
      "text": "2.1 introduction"
    },
    {
      "type": "paragraph",
      "html": "A number of OOP languages are available today, with some differences between their capabilities and the extent to which they follow the OO paradigm. An OO language is based on a <b>paradigm of objects (data + behavior)</b>: objects represent real-world entities. For example, a <code>Car</code> object has attributes (color, model, speed) and methods (<code>start()</code>, <code>stop()</code>, <code>accelerate()</code>). Common OO languages include Java, C#, C++, Python, Kotlin, Swift and TypeScript. This lecture examines the key <b>features</b> of OO languages and their <b>limitations</b>."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "2-2-strong-typing",
      "text": "2.2 strong typing"
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Definition",
      "html": "Strong typing is the degree of discipline that a language enforces on the programmer when declaring variables: <b>\"Every data value and object that is used must belong to an appropriate type for its context.\"</b>"
    },
    {
      "type": "paragraph",
      "html": "Most modern languages are strongly typed. For example, <code>int x = \"Hello\";</code> produces a <b>compile-time error</b> in Java. Strong typing <b>prevents type mismatch errors</b> and <b>reduces runtime bugs</b>."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "2-3-static-vs-dynamic-typing",
      "text": "2.3 static vs dynamic typing"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Statically typed</b>: types are checked at <b>compile time</b>. Examples: Java, C++, C#.",
        "<b>Dynamically typed</b>: types are checked at <b>run time</b>. Examples: Python, Ruby, JavaScript.",
        "<b>Hybrid</b>: some languages offer a hybrid approach. Examples: TypeScript, Kotlin."
      ]
    },
    {
      "type": "table",
      "head": [
        "Typing",
        "Advantages",
        "Disadvantages"
      ],
      "rows": [
        [
          "<b>Static</b>",
          "Errors caught at compile time; better performance; easier IDE support",
          "Less flexible; verbose code"
        ],
        [
          "<b>Dynamic</b>",
          "Flexible; faster to write; less verbose",
          "Errors occur at runtime; harder to debug; slower performance"
        ]
      ]
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "\"Verbose code\" simply means…",
      "html": "…writing more lines or more detailed code to achieve something. Statically typed Java is verbose; dynamically typed Python is less verbose."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "2-4-garbage-collection",
      "text": "2.4 garbage collection"
    },
    {
      "type": "paragraph",
      "html": "<b>Garbage collection (GC)</b> is the automatic process of freeing memory occupied by objects that are <b>no longer used</b> by the program. It is important for memory management in systems that create and delete many objects during execution, objects must be removed from memory when they are deleted, otherwise the system may run out of memory in which to execute. GC helps prevent <b>memory leaks</b> and out-of-memory errors in long-running programs. In Java, objects are stored in <b>heap memory</b>."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "types-of-garbage-objects-in-java",
      "text": "Types of garbage objects in Java"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">1 · Nullified objects</div><div class=\"f-b\">An object whose reference is explicitly set to <code>null</code> (e.g. <code>student = null;</code>): no reference points to it anymore.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">2 · Out-of-scope objects</div><div class=\"f-b\">Objects created inside a method/block become garbage when the execution leaves that scope.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">3 · Unreachable via reassignment</div><div class=\"f-b\">When a reference is reassigned to a new object, the old object loses its only reference and becomes unreachable garbage.</div></div>\n  </div>",
      "alt": "Formula reference cards"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "2-5-standardized-class-libraries",
      "text": "2.5 standardized class libraries"
    },
    {
      "type": "paragraph",
      "html": "A <b>standardized class library</b> is a collection of <b>predefined classes and interfaces</b> provided by the language so programmers can <b>reuse tested code instead of writing everything from scratch</b>. Key features:"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Cross-platform compatibility</b>: works on any OS where the language runtime runs (e.g. anywhere Java runs).",
        "<b>Pre-tested and reliable</b>: reduces errors and development time.",
        "<b>Object-oriented</b>: libraries provide ready-to-use classes, objects and methods.",
        "<b>Consistent naming and usage conventions</b> across libraries."
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "2-6-dynamic-loading",
      "text": "2.6 dynamic loading"
    },
    {
      "type": "paragraph",
      "html": "<b>Dynamic loading</b> is the ability of a program to <b>load classes or libraries into memory at runtime, rather than at compile time</b>. Classes are loaded only when needed, improving memory usage and flexibility."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "2-7-limitations-of-object-orientation",
      "text": "2.7 limitations of object orientation"
    },
    {
      "type": "paragraph",
      "html": "OO development is powerful but is <b>not ideally suited</b> to every kind of application. The lecture highlights two families of applications where OO may be a poor fit:"
    },
    {
      "type": "table",
      "head": [
        "Not ideally suited to OO",
        "Why",
        "Example"
      ],
      "rows": [
        [
          "<b>Strongly database-oriented systems</b>",
          "They have a record-based data structure that suits a Relational Database Management System (RDBMS), and their main processing requirement centers on the storage and retrieval of data (CRUD. Create, Read, Update, Delete on structured records). The OO approach adds extra overhead for mapping objects to tables (e.g. ORM frameworks).",
          "Banking system or accounting software where most operations are database transactions"
        ],
        [
          "<b>Strongly algorithmic applications</b>",
          "Scientific applications involving large, complex calculations may be neither desirable nor feasible to split into smaller parts. Implementing them with OOP might create more objects and make them very complex, adding unnecessary overhead and reducing performance.",
          "Satellite orbit calculations, numerical simulations, weather prediction models"
        ]
      ]
    },
    {
      "type": "example",
      "title": "Exercise: when is OO not the best choice?",
      "bodyHtml": "<p><i>In what scenarios might Object-Oriented development not be the best choice, and what limitations or mismatches with the nature of the problem contribute to this?</i></p>",
      "solutionHtml": "<p>OO is a poor fit when the <b>nature of the problem does not decompose naturally into interacting objects</b>:</p>\n      <ol>\n        <li><b>Record-based, data-centric systems:</b> when the main operations are CRUD on structured records, an RDBMS is more natural; forcing objects onto tables adds mapping overhead (ORM) with little modeling benefit.</li>\n        <li><b>Computation-centric systems:</b> when the core is one large, complex calculation, splitting it into objects increases the number of objects and overall complexity, and can reduce performance.</li>\n      </ol>\n      <p>In both cases the mismatch is between the problem's structure (records or algorithms) and OO's strength (modeling interacting entities with state and behavior).</p>"
    },
    {
      "type": "quiz",
      "title": "Topic 2 Quiz: Object-Oriented Languages",
      "count": 6,
      "quizSlug": "02-object-oriented-languages"
    }
  ]
};

export default chapter;
