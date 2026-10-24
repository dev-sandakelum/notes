import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "03-modelling-concepts-and-uml",
    "number": 3,
    "title": "Modelling concepts & UML",
    "subtitle": "Week 3 · Modelling Concepts",
    "kind": "topic",
    "words": 969,
    "minutes": 5
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "3-1-model-vs-diagram-the-critical-distinction",
      "text": "3.1 model vs diagram: the critical distinction"
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Exam definition pair",
      "html": "<b>Model</b> = a simplified/abstract <b>representation of a system</b>; it represents the whole system and its important elements and relationships (the complete blueprint; <b>WHAT</b> we are representing).<br>\n    <b>Diagram</b> = <b>a particular view of a model</b>; it shows only a specific part or aspect of the model (<b>HOW</b> we represent/show it)."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "the-house-analogy",
      "text": "The house analogy"
    },
    {
      "type": "paragraph",
      "html": "Think about a house. The <b>model</b> is the complete idea/representation of the house; it tells us about the rooms, the relationships between rooms, doors, windows, the structure and how things are organized. Different <b>diagrams</b> are visual ways of showing parts of that model:"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Floor plan</b> → shows room arrangement",
        "<b>Electrical diagram</b> → shows electrical connections",
        "<b>Plumbing diagram</b> → shows water connections"
      ]
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "in-software-engineering",
      "text": "In software engineering"
    },
    {
      "type": "paragraph",
      "html": "Suppose we are developing a Library System. The <b>model</b> represents the system's important concepts and relationships: <i>Student borrows Book; Librarian manages Book; Book belongs to Library</i>. We can represent different parts of that model using <b>diagrams</b>:"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Class Diagram</b> → shows classes and their relationships",
        "<b>Use Case Diagram</b> → shows actors and their interactions with the system",
        "<b>Sequence Diagram</b> → shows how objects interact over time"
      ]
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Remember",
      "html": "A <b>model</b> can be represented using several <b>diagrams</b>, each diagram is one view of the same underlying model."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "why-are-models-needed",
      "text": "Why are models needed?"
    },
    {
      "type": "paragraph",
      "html": "Software systems are complex. Models help us <b>simplify, understand, communicate and manage</b> that complexity. Diagrams in particular serve to: communicate ideas, understand structure and relationships, test ideas, and generate new ideas."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "3-2-general-rules-of-modeling",
      "text": "3.2 general rules of modeling"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">Rule 1 · Simplicity</div><div class=\"f-b\">Keep the model as simple as the purpose allows, don't model what you don't need.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Rule 2 · Consistency</div><div class=\"f-b\">Different parts/views of the model must not contradict each other.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Rule 3 · Completeness</div><div class=\"f-b\">The model must cover everything relevant to its stated purpose.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Rule 4 · Hierarchical representation</div><div class=\"f-b\">Organize the model in levels, high level first, details at lower levels.</div></div>\n  </div>",
      "alt": "Formula reference cards"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "3-3-what-is-uml",
      "text": "3.3 what is UML?"
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Definition: UML",
      "html": "<b>Unified Modeling Language</b>: a <b>standard language for specifying, visualizing, constructing and documenting</b> software systems."
    },
    {
      "type": "paragraph",
      "html": "UML has <b>three building blocks</b>: <b>Things</b> (the model elements, e.g. classes, actors, use cases), <b>Relationships</b> (how things connect, e.g. associations, dependencies, generalizations) and <b>Diagrams</b> (the views that group things and relationships into pictures)."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "3-4-the-two-categories-of-uml-diagrams",
      "text": "3.4 the two categories of UML diagrams"
    },
    {
      "type": "table",
      "head": [
        "Category",
        "Question answered",
        "Diagrams"
      ],
      "rows": [
        [
          "<b>1 · Structural diagrams</b>",
          "What the system is <b>made of</b>; its structure, components and relationships",
          "<b>Class</b> (classes, attributes, methods, relationships) · <b>Object</b> (objects and their relationships at a particular time) · <b>Component</b> (software components and their dependencies) · <b>Deployment</b> (hardware/devices and where software components are deployed)"
        ],
        [
          "<b>2 · Behavioral diagrams</b>",
          "How the system <b>behaves or works</b>",
          "<b>Use Case</b> (actors and their goals/interactions) · <b>Sequence</b> (order of interactions between objects) · <b>Activity</b> (workflow/process of activities) · <b>State Machine</b> (how an object changes from one state to another)"
        ]
      ]
    },
    {
      "type": "figure",
      "svg": "<svg viewBox=\"0 0 560 250\" role=\"img\" aria-label=\"UML diagram taxonomy tree\">\n      <rect x=\"215\" y=\"14\" width=\"130\" height=\"42\" rx=\"9\" class=\"uml-soft uml-stroke\" stroke-width=\"2\"></rect>\n      <text x=\"280\" y=\"34\" text-anchor=\"middle\" class=\"uml-text\" font-weight=\"700\">UML Diagrams</text>\n      <text x=\"280\" y=\"49\" text-anchor=\"middle\" class=\"uml-muted\">2 categories</text>\n      <line x1=\"280\" y1=\"56\" x2=\"280\" y2=\"82\" class=\"uml-line\"></line>\n      <line x1=\"140\" y1=\"82\" x2=\"420\" y2=\"82\" class=\"uml-line\"></line>\n      <line x1=\"140\" y1=\"82\" x2=\"140\" y2=\"102\" class=\"uml-line\"></line>\n      <line x1=\"420\" y1=\"82\" x2=\"420\" y2=\"102\" class=\"uml-line\"></line>\n      <rect x=\"55\" y=\"102\" width=\"170\" height=\"34\" rx=\"8\" class=\"uml-primary uml-stroke\" stroke-width=\"0\" opacity=\".92\"></rect>\n      <text x=\"140\" y=\"124\" text-anchor=\"middle\" class=\"uml-text\" font-weight=\"700\" fill=\"#fff\">Structural</text>\n      <rect x=\"335\" y=\"102\" width=\"170\" height=\"34\" rx=\"8\" fill=\"var(--accent)\" stroke-width=\"0\" opacity=\".92\"></rect>\n      <text x=\"420\" y=\"124\" text-anchor=\"middle\" class=\"uml-text\" font-weight=\"700\" fill=\"#fff\">Behavioral</text>\n      <line x1=\"140\" y1=\"136\" x2=\"140\" y2=\"154\" class=\"uml-line\"></line>\n      <line x1=\"420\" y1=\"136\" x2=\"420\" y2=\"154\" class=\"uml-line\"></line>\n      <line x1=\"52\" y1=\"154\" x2=\"228\" y2=\"154\" class=\"uml-line\"></line>\n      <line x1=\"332\" y1=\"154\" x2=\"508\" y2=\"154\" class=\"uml-line\"></line>\n      <line x1=\"52\" y1=\"154\" x2=\"52\" y2=\"168\" class=\"uml-line\"></line><line x1=\"111\" y1=\"154\" x2=\"111\" y2=\"168\" class=\"uml-line\"></line><line x1=\"170\" y1=\"154\" x2=\"170\" y2=\"168\" class=\"uml-line\"></line><line x1=\"228\" y1=\"154\" x2=\"228\" y2=\"168\" class=\"uml-line\"></line>\n      <line x1=\"332\" y1=\"154\" x2=\"332\" y2=\"168\" class=\"uml-line\"></line><line x1=\"391\" y1=\"154\" x2=\"391\" y2=\"168\" class=\"uml-line\"></line><line x1=\"450\" y1=\"154\" x2=\"450\" y2=\"168\" class=\"uml-line\"></line><line x1=\"508\" y1=\"154\" x2=\"508\" y2=\"168\" class=\"uml-line\"></line>\n      <g class=\"uml-text\" text-anchor=\"middle\" font-size=\"11.5\">\n        <rect x=\"14\" y=\"168\" width=\"76\" height=\"26\" rx=\"7\" class=\"uml-fill uml-stroke\"></rect><text x=\"52\" y=\"185\">Class</text>\n        <rect x=\"73\" y=\"168\" width=\"76\" height=\"26\" rx=\"7\" class=\"uml-fill uml-stroke\"></rect><text x=\"111\" y=\"185\">Object</text>\n        <rect x=\"132\" y=\"168\" width=\"76\" height=\"26\" rx=\"7\" class=\"uml-fill uml-stroke\"></rect><text x=\"170\" y=\"185\">Component</text>\n        <rect x=\"190\" y=\"168\" width=\"76\" height=\"26\" rx=\"7\" class=\"uml-fill uml-stroke\"></rect><text x=\"228\" y=\"185\">Deployment</text>\n        <rect x=\"294\" y=\"168\" width=\"76\" height=\"26\" rx=\"7\" class=\"uml-fill uml-stroke\"></rect><text x=\"332\" y=\"185\">Use Case</text>\n        <rect x=\"353\" y=\"168\" width=\"76\" height=\"26\" rx=\"7\" class=\"uml-fill uml-stroke\"></rect><text x=\"391\" y=\"185\">Sequence</text>\n        <rect x=\"412\" y=\"168\" width=\"76\" height=\"26\" rx=\"7\" class=\"uml-fill uml-stroke\"></rect><text x=\"450\" y=\"185\">Activity</text>\n        <rect x=\"470\" y=\"168\" width=\"90\" height=\"26\" rx=\"7\" class=\"uml-fill uml-stroke\"></rect><text x=\"515\" y=\"185\">State Machine</text>\n      </g>\n      <text x=\"140\" y=\"218\" text-anchor=\"middle\" class=\"uml-muted\">what the system is made of</text>\n      <text x=\"420\" y=\"218\" text-anchor=\"middle\" class=\"uml-muted\">how the system behaves / works</text>\n    </svg>",
      "alt": "UML diagram taxonomy tree",
      "caption": "UML diagram taxonomy: memorize which four diagrams belong to each category"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "3-5-choosing-the-right-diagram-decision-guide",
      "text": "3.5 choosing the right diagram: decision guide"
    },
    {
      "type": "table",
      "head": [
        "If the question is…",
        "Use this diagram"
      ],
      "rows": [
        [
          "What is the system <b>made of</b>? What are the classes/structure?",
          "<b>Class Diagram</b>"
        ],
        [
          "Who interacts with the system and what are their <b>goals</b>?",
          "<b>Use Case Diagram</b>"
        ],
        [
          "What is the <b>order</b> of interactions between objects over time?",
          "<b>Sequence Diagram</b>"
        ],
        [
          "What is the <b>workflow / process</b> of activities?",
          "<b>Activity Diagram</b>"
        ],
        [
          "How does an object <b>change state</b> over its life?",
          "<b>State Machine Diagram</b>"
        ],
        [
          "Where is software <b>deployed</b> on hardware?",
          "<b>Deployment Diagram</b>"
        ]
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "3-6-worked-examples-from-the-lecture-case-studies",
      "text": "3.6 worked examples from the lecture case studies"
    },
    {
      "type": "example",
      "title": "Worked example: university library",
      "bodyHtml": "<p><i>A university library system keeps information about Students, Books, Librarians and Loans. A student can borrow several books. Each book can be borrowed by different students at different times. Librarians manage books and loans.</i> Identify: the model, the important things it contains, a suitable diagram, and what that diagram shows.</p>",
      "solutionHtml": "<ol>\n        <li><b>The model:</b> a model of the University Library System, including students, books, librarians, loans and their relationships.</li>\n        <li><b>Important things:</b> Student, Book, Librarian, Loan; relationships \"Student borrows Book\" and \"Librarian manages Book/Loan\".</li>\n        <li><b>Suitable diagram:</b> Class Diagram.</li>\n        <li><b>What it shows:</b> the classes, their attributes/methods, and the relationships between them, i.e. the <b>structure</b> of the library system.</li>\n      </ol>"
    },
    {
      "type": "example",
      "title": "Worked example: online shopping",
      "bodyHtml": "<p><i>An online shopping system allows customers to browse products, add products to a cart, place orders and make payments. Administrators manage products and orders. A payment gateway is an external system.</i> Which diagrams represent: the system's structure, user interactions, and the sequence of interactions?</p>",
      "solutionHtml": "<p>Aspects to model: Customers, Products, Shopping Cart, Orders, Payments, Administrator, Payment Gateway, and interactions between them. The model is a model of the Online Shopping System (its structure and behavior).</p>\n      <ul>\n        <li><b>System structure</b> → <b>Class Diagram</b></li>\n        <li><b>User interactions</b> → <b>Use Case Diagram</b></li>\n        <li><b>Order/payment interaction sequence</b> → <b>Sequence Diagram</b></li>\n      </ul>\n      <p>Each diagram provides a <b>different view of the same system model</b>.</p>"
    },
    {
      "type": "example",
      "title": "Worked example: ATM system",
      "bodyHtml": "<p><i>An ATM allows a customer to insert a card, enter a PIN, check balance, withdraw money and receive a receipt. The ATM communicates with the bank system.</i> Which diagram shows actors and their goals? Which shows the sequence of interactions during cash withdrawal?</p>",
      "solutionHtml": "<p><b>Who/what interacts:</b> Customer (primary actor) and Bank System (supporting actor).</p>\n      <ul>\n        <li><b>Actors and their goals</b> → <b>Use Case Diagram</b>: Customer → Withdraw Cash, Customer → Check Balance, Customer → Change PIN.</li>\n        <li><b>Sequence of interactions during withdrawal</b> → <b>Sequence Diagram</b>: Customer → ATM → Bank System → ATM → Customer; it shows the <b>order</b> in which the interactions happen.</li>\n      </ul>"
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Other case studies: one-line answers",
      "html": "<b>Hospital Appointment System</b> (Patients, Doctors, Appointments): model the entities and relationships; Class Diagram shows structure such as Patient → books → Appointment, Doctor → has → Appointments.<br>\n    <b>Food Delivery System</b> (Customers, Restaurants, Drivers, Orders): structural relationships → Class Diagram (Customer places Order, Restaurant prepares Order, Driver delivers Order); interaction sequence → Sequence Diagram (Customer → Restaurant → Order System → Driver); customer interactions → Use Case Diagram (Browse Restaurants, Place Order, Make Payment, Track Delivery)."
    },
    {
      "type": "quiz",
      "title": "Topic 3 Quiz: Modelling & UML",
      "count": 6,
      "quizSlug": "03-modelling-concepts-and-uml"
    }
  ]
};

export default chapter;
