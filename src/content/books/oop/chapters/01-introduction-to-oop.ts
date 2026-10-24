import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "01-introduction-to-oop",
    "number": 1,
    "title": "Introduction to OOP",
    "subtitle": "Lesson 01 · Paradigm, classes vs objects, why object orientation",
    "kind": "topic",
    "words": 1075,
    "minutes": 5
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "what-is-object-oriented-programming",
      "text": "What is Object Oriented Programming?"
    },
    {
      "type": "paragraph",
      "html": "Object-oriented programming (OOP) is a <b>paradigm</b> — a way of thinking about and structuring programs. It is based on the concept of wrapping pieces of <b>data</b>, and <b>behavior related to that data</b>, into special bundles called <b>objects</b>. Objects are constructed from a set of “blueprints”, defined by a programmer, called <b>classes</b>. Instead of thinking about a program as a sequence of instructions, an OO developer thinks about it as a collection of collaborating objects."
    },
    {
      "type": "paragraph",
      "html": "The fundamentals of object orientation view a program as a <b>collection of objects</b> that <b>pass messages to each other</b>. Each object decides for itself what to do with a received message. In fact, it is more meaningful to talk about an <b>object-oriented system</b> than a program — an object-oriented system is a set of interacting objects organized into classes. Crucially, the focus is on <b>data and not on function</b>: the definition of data, its attributes and how it will be manipulated is the primary concern, while the exact mechanism of manipulation (procedure or algorithm) is not."
    },
    {
      "type": "figure",
      "svg": "<svg class=\"fig\" viewBox=\"0 0 640 300\" role=\"img\" aria-label=\"Class as blueprint producing objects\">\n    <rect x=\"40\" y=\"60\" width=\"200\" height=\"120\" rx=\"10\" class=\"boxp\"></rect>\n    <text x=\"140\" y=\"90\" text-anchor=\"middle\" class=\"lbl\">Class: BankAccount</text>\n    <text x=\"140\" y=\"115\" text-anchor=\"middle\">fields: name, balance</text>\n    <text x=\"140\" y=\"135\" text-anchor=\"middle\">methods: deposit()</text>\n    <text x=\"140\" y=\"155\" text-anchor=\"middle\">withdraw(), transfer()</text>\n    <text x=\"140\" y=\"42\" text-anchor=\"middle\" fill=\"var(--primary)\" class=\"lbl\">BLUEPRINT (source code)</text>\n    <path d=\"M255 120 L315 120\" class=\"lnp\" stroke-width=\"2\" fill=\"none\"></path>\n    <polygon points=\"315,120 303,114 303,126\" fill=\"var(--primary)\"></polygon>\n    <text x=\"285\" y=\"105\" text-anchor=\"middle\" class=\"lbl\">new</text>\n    <rect x=\"330\" y=\"30\" width=\"150\" height=\"95\" rx=\"9\" class=\"box\"></rect>\n    <text x=\"405\" y=\"60\" text-anchor=\"middle\" class=\"lbl\">myAccount</text>\n    <text x=\"405\" y=\"82\" text-anchor=\"middle\">name = \"Nimal\"</text>\n    <text x=\"405\" y=\"102\" text-anchor=\"middle\">balance = 5000</text>\n    <rect x=\"330\" y=\"165\" width=\"150\" height=\"95\" rx=\"9\" class=\"box\"></rect>\n    <text x=\"405\" y=\"195\" text-anchor=\"middle\" class=\"lbl\">gatesAccount</text>\n    <text x=\"405\" y=\"217\" text-anchor=\"middle\">name = \"Bill\"</text>\n    <text x=\"405\" y=\"237\" text-anchor=\"middle\">balance = 999999</text>\n    <path d=\"M315 120 L330 80\" class=\"lnp\" fill=\"none\"></path>\n    <path d=\"M315 120 L330 210\" class=\"lnp\" fill=\"none\"></path>\n    <text x=\"480\" y=\"140\" text-anchor=\"middle\" fill=\"var(--accent)\" class=\"lbl\" font-size=\"11\">OBJECTS (in memory)</text>\n    <text x=\"480\" y=\"158\" text-anchor=\"middle\" font-size=\"11\">own copy of data · occupy memory</text>\n  </svg>",
      "alt": "Class as blueprint producing objects",
      "caption": "One class (the blueprint) → many objects (instances), each with its own data."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "why-object-orientation",
      "text": "Why object orientation?"
    },
    {
      "type": "paragraph",
      "html": "Object orientation exists to keep <b>large software projects manageable</b> by human programmers. The lecture highlights four specific benefits, and each one is a favourite theory question:"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">Modularity</div><div class=\"f-b\">The source code for an object can be written and maintained <b>independently</b> of the source code for other objects. Once created, an object can be easily passed around inside the system.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Information-hiding</div><div class=\"f-b\">By interacting only with an object's <b>methods</b>, the details of its internal implementation remain <b>hidden</b> from the outside world.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Code re-use</div><div class=\"f-b\">If an object already exists (perhaps written by another developer), you can use it in your program. Specialists implement/test/debug complex, task-specific objects you can trust.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Pluggability &amp; debugging ease</div><div class=\"f-b\">If an object is problematic, simply <b>remove it and plug in a replacement</b> — like replacing a broken bolt, not the entire machine.</div></div>\n  </div>",
      "alt": "Formula reference cards"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "procedural-vs-object-oriented-the-bank-scenario",
      "text": "Procedural vs Object-Oriented: the bank scenario"
    },
    {
      "type": "paragraph",
      "html": "The lecture uses one real-world requirement to contrast both approaches: <i>“…customers are allowed to have different types of bank accounts, deposit money, withdraw money and transfer money between accounts.”</i>"
    },
    {
      "type": "paragraph",
      "html": "In the <b>procedural approach</b>, the focus is on procedures, and data lives in shared structures with no protection:"
    },
    {
      "type": "code",
      "language": "c-style",
      "header": {
        "file": "ProceduralApproach.c",
        "tag": "C-style"
      },
      "html": "<code>bool MakeDeposit(int accountNum, float amount);\nfloat Withdraw(int accountNum, float amount);\n\nstruct Account {\n    char *name;\n    int accountNum;\n    float balance;\n    char accountType;\n};</code>"
    },
    {
      "type": "paragraph",
      "html": "The problems: focus is on <b>procedures</b>; <b>all data is shared</b> (no protection); it is <b>more difficult to modify</b>; and it is <b>hard to manage complexity</b>. In the <b>object-oriented approach</b>, data and the operations that belong to it are <b>grouped together</b> — an <code class=\"inl\">Account</code> class owns its balance and exposes <code class=\"inl\">deposit()</code>, <code class=\"inl\">withdraw()</code> and <code class=\"inl\">transfer()</code> methods. Objects in the problem domain are mapped directly to objects in software, which is why OO modelling feels natural."
    },
    {
      "type": "table",
      "head": [
        "Class",
        "Object"
      ],
      "rows": [
        [
          "Visible in <b>source code</b>",
          "Active in the <b>running program</b>"
        ],
        [
          "The code is <b>not duplicated</b>",
          "Has its <b>own copy of data</b>"
        ],
        [
          "A blueprint / template",
          "<b>Occupies memory</b>"
        ],
        [
          "Reflects a <b>concept</b>",
          "Has the set of <b>operations</b> given in the class"
        ]
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "objects-as-instances-of-classes",
      "text": "Objects as instances of classes"
    },
    {
      "type": "paragraph",
      "html": "The world conceptually consists of objects, and many objects are of the same <b>type or class</b>. My bank account, your bank account and Bill Gates’ bank account are all different objects, but they share the type <code class=\"inl\">BankAccount</code>. We call the object type a <b>class</b>. An <b>object is instantiated from a class</b> using the <code class=\"inl\">new</code> keyword:"
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "InstantiationDemo.java",
        "tag": "Java"
      },
      "html": "<code>BankAccount myAccount;               // declaration\nmyAccount = new BankAccount();      // instantiation + initialization\n\nBankAccount gatesAccount = new BankAccount();   // both in one statement</code>"
    },
    {
      "type": "paragraph",
      "html": "Three definitions you must be able to write precisely:"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Object</b> — an instance of a class.",
        "<b>Instance</b> — a specific realization of any object; each realized variation of an object is an instance.",
        "<b>Instantiation</b> — the creation of a real instance (a realized object) from a class."
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "characteristics-of-an-object",
      "text": "Characteristics of an object"
    },
    {
      "type": "table",
      "head": [
        "Characteristic",
        "Meaning",
        "Dog example",
        "BankAccount example"
      ],
      "rows": [
        [
          "<b>State</b>",
          "The properties and their values",
          "name, color, breed",
          "balance, interest rate"
        ],
        [
          "<b>Behavior</b>",
          "Interaction with the outside world (methods)",
          "barking, wagging tail",
          "withdraw, deposit"
        ],
        [
          "<b>Identity</b>",
          "How to differentiate two objects of the same class",
          "serial number",
          "account number"
        ]
      ]
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Alan Kay's five rules (exam favourite)",
      "html": "1. Everything is an object. &nbsp;2. A program is a bunch of objects telling each other what to do by <b>sending messages</b>. &nbsp;3. Each object has its own memory, made up of other objects. &nbsp;4. Every object has a <b>type</b>. &nbsp;5. All objects of a particular type can receive the <b>same messages</b> (invoke the same methods)."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "how-to-start-designing-objects",
      "text": "How to start designing objects"
    },
    {
      "type": "paragraph",
      "html": "Think about the real world and be natural. First <b>identify objects</b>. Then, for each object, ask two questions: <b>what possible states can this object be in?</b> (its fields) and <b>what possible behavior can this object perform?</b> (its methods). The advantages of OOP follow from this modelling mindset: ease of modeling the real world in a software context, the ability to upgrade systems from small to large scale, easy partitioning of project work based on objects, and reduced maintenance and development costs."
    },
    {
      "type": "accordion",
      "items": [
        {
          "title": "Exercise set A — OOP fundamentals ▾",
          "html": "<ol>\n        <li>Define <b>object-oriented programming</b> in one sentence, mentioning classes and objects.</li>\n        <li>List the four reasons for using object orientation and explain each in one line.</li>\n        <li>In your own words, explain the difference between a class and an object, using a bicycle example.</li>\n        <li>A dog has name, color, breed, can bark and wag its tail. Identify its state, behavior and a possible identity.</li>\n        <li>State Alan Kay's rule about how objects interact with each other.</li>\n        <li>Give two disadvantages of the procedural approach highlighted in the lecture.</li>\n      </ol>\n      <button class=\"reveal-btn\">Show answers</button>\n      <div class=\"solution\"><div class=\"sol-label\">Answers</div>\n        <ol>\n          <li>OOP is a paradigm based on wrapping data and behavior related to that data into objects, which are constructed from blueprints called classes.</li>\n          <li><b>Modularity</b> — code written/maintained independently; <b>Information-hiding</b> — internal details hidden behind methods; <b>Code re-use</b> — existing trusted objects used anywhere; <b>Pluggability &amp; debugging ease</b> — swap a bad object like replacing a broken bolt.</li>\n          <li>A class is the blueprint from which individual objects are created; thousands of bicycles of the same make and model are built from the same blueprint — your bicycle is an <b>instance</b> of the class of objects known as bicycles.</li>\n          <li>State: name, color, breed. Behavior: barking, wagging tail. Identity: a serial number / registration id.</li>\n          <li>A program is a bunch of objects telling each other what to do by sending messages.</li>\n          <li>All data is shared (no protection); hard to manage complexity / more difficult to modify.</li>\n        </ol>\n      </div>"
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Topic 1 Quiz — Introduction to OOP",
      "count": 7,
      "quizSlug": "01-introduction-to-oop"
    }
  ]
};

export default chapter;
