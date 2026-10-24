import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "01-ooad-basic-concepts",
    "number": 1,
    "title": "OOAD Basic Concepts",
    "subtitle": "Week 1 · Object Oriented Analysis and Design — Basic Concepts + Activity 1",
    "kind": "topic",
    "words": 2682,
    "minutes": 13
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "1-1-where-analysis-and-design-fit-the-sdlc",
      "text": "1.1 Where analysis and design fit: the SDLC"
    },
    {
      "type": "paragraph",
      "html": "Before understanding Object-Oriented Analysis and Design, you need to understand where analysis and design fit into software development. A typical software development process moves through six phases, and modern development is often <b>iterative</b> — analysis, design, development and testing may happen repeatedly rather than once in a strict sequence."
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"flowchain\">\n    <span class=\"flow-node\">Analysis</span><span class=\"flow-arrow\">→</span>\n    <span class=\"flow-node\">Design</span><span class=\"flow-arrow\">→</span>\n    <span class=\"flow-node\">Development</span><span class=\"flow-arrow\">→</span>\n    <span class=\"flow-node\">Testing</span><span class=\"flow-arrow\">→</span>\n    <span class=\"flow-node\">Deployment</span><span class=\"flow-arrow\">→</span>\n    <span class=\"flow-node\">Maintenance</span>\n  </div>",
      "alt": "UML / process diagram from the original notes"
    },
    {
      "type": "table",
      "head": [
        "Phase",
        "Goal",
        "Key questions / activities"
      ],
      "rows": [
        [
          "<b>Analysis</b>",
          "Understand the problem",
          "What problem are we solving? Who are the users? What does the user actually need? What should the system do?"
        ],
        [
          "<b>Design</b>",
          "Plan the solution before implementation",
          "Overall system architecture, database structure, user interface, system flow, components/modules, technologies. The design acts as a <b>blueprint</b> for development."
        ],
        [
          "<b>Development</b>",
          "Build the solution",
          "Implement the designed solution using a programming language and appropriate technologies."
        ],
        [
          "<b>Testing</b>",
          "Verify the system",
          "Does it work correctly, satisfy requirements, handle errors appropriately, and meet quality expectations?"
        ],
        [
          "<b>Deployment</b>",
          "Release to users",
          "Cloud platforms, containers, CI/CD pipelines, app stores, web hosting."
        ],
        [
          "<b>Maintenance</b>",
          "Keep it running well",
          "Bug fixes, security updates, performance improvements, new features, compatibility updates."
        ]
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "1-2-what-is-object-orientation",
      "text": "1.2 What is Object Orientation?"
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Definition — exam version",
      "html": "<b>Object Orientation (OO)</b> is a way of viewing a system as a set of <b>interacting and interrelated objects</b>, with each object <b>encapsulating its data and behavior</b>."
    },
    {
      "type": "paragraph",
      "html": "Instead of asking only \"What functions should the program perform?\", OO also asks: <b>\"What objects exist in this system, what do they know, what can they do, and how do they interact?\"</b> In an object-oriented system, software is organized around objects: objects contain data, objects provide behavior, and objects interact with other objects. Objects may represent real-world entities, concepts, or software responsibilities — for example, in a Library Management System we may identify the objects <code>Book</code>, <code>Member</code>, <code>Librarian</code> and <code>Loan</code>."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "objects-as-self-contained-components",
      "text": "Objects as self-contained components"
    },
    {
      "type": "paragraph",
      "html": "An object is a relatively self-contained software component that (1) <b>has its own data</b> — e.g. a <code>Book</code> knows its title, author, ISBN and availability; (2) <b>has its own functionality</b> — e.g. <code>checkAvailability()</code> and <code>reserve()</code>; and (3) <b>interacts with other objects</b> — e.g. <code>Member → borrows → Book</code>. Because responsibilities are organized into objects, components can potentially be <b>reused</b>, <b>modified</b>, <b>replaced</b> and <b>tested independently</b>."
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "Modern perspective",
      "html": "Objects are <b>software abstractions</b>, not literally \"real-world things\". For example, <code>PaymentService</code> may be an object even though it is not a physical object."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "1-3-ooa-vs-ood-vs-oop",
      "text": "1.3 OOA vs OOD vs OOP"
    },
    {
      "type": "paragraph",
      "html": "These three terms describe the three stages of applying object orientation to software development. Each answers a different question:"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"flowchain\">\n    <span class=\"flow-node\">OOA<br><small style=\"font-weight:500\">What exists?</small></span><span class=\"flow-arrow\">→</span>\n    <span class=\"flow-node\">OOD<br><small style=\"font-weight:500\">How do objects work together?</small></span><span class=\"flow-arrow\">→</span>\n    <span class=\"flow-node\">OOP<br><small style=\"font-weight:500\">How do we implement?</small></span>\n  </div>",
      "alt": "UML / process diagram from the original notes"
    },
    {
      "type": "table",
      "head": [
        "Term",
        "Question",
        "Focus",
        "Library system example"
      ],
      "rows": [
        [
          "<b>OOA</b> — Object-Oriented Analysis",
          "What exists in the problem domain?",
          "Identify objects, concepts, classes, relationships, requirements — from the perspective of the problem domain.",
          "Identify Book, Member, Librarian, Loan, Library"
        ],
        [
          "<b>OOD</b> — Object-Oriented Design",
          "How should the software objects work together?",
          "Determine software classes, attributes, methods, relationships, object interactions, responsibilities.",
          "Book class with title/author/ISBN + checkAvailability() / reserve()"
        ],
        [
          "<b>OOP</b> — Object-Oriented Programming",
          "How do we implement the design?",
          "Implementation of the designed objects using a programming language.",
          "Code the classes in Java, C#, C++, Python, Kotlin, Swift or TypeScript"
        ]
      ]
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Exam tip",
      "html": "Remember the one-line summaries: <b>OOA</b> = identify the problem-domain objects; <b>OOD</b> = design software objects and their interactions; <b>OOP</b> = implement those objects using a programming language (the implementation/coding/construction stage)."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "1-4-traditional-vs-object-oriented-development",
      "text": "1.4 Traditional vs object-oriented development"
    },
    {
      "type": "paragraph",
      "html": "In a traditional (procedural) approach, we think primarily about <b>functions and data separately</b>. In OO development, we keep the <b>data and the behavior that operates on that data together</b> within appropriate objects/classes — this is the essence of encapsulation."
    },
    {
      "type": "table",
      "head": [
        "Traditional approach",
        "Object-oriented approach"
      ],
      "rows": [
        [
          "<code>customerData</code><br><code>calculateCustomerBill()</code><br><code>updateCustomer()</code><br><small>Data and functions spread throughout the system</small>",
          "<code>Customer</code> class containing:<br><code>name, address, balance</code> (data)<br><code>calculateBill(), updateDetails()</code> (behavior)"
        ]
      ]
    },
    {
      "type": "paragraph",
      "html": "OO development combines data/state and behavior/functions within objects, and groups similar objects into classes."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "1-5-why-object-orientation-8-benefits",
      "text": "1.5 Why object orientation? — 8 benefits"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">1 · Simplicity</div><div class=\"f-b\">Complex systems can be divided into understandable objects.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">2 · Reusability</div><div class=\"f-b\">Existing classes/components can potentially be reused.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">3 · Increased Quality</div><div class=\"f-b\">Modular designs make testing and maintenance easier.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">4 · Faster Development</div><div class=\"f-b\">Reusable components reduce development effort.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">5 · Maintainability</div><div class=\"f-b\">Changes can often be localized to particular classes/components.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">6 · Scalability</div><div class=\"f-b\">Large systems can be divided into smaller components.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">7 · Modularity</div><div class=\"f-b\">Each class can have a clear responsibility.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">8 · Modifiability</div><div class=\"f-b\">Well-designed systems can accommodate changes more easily.</div></div>\n  </div>",
      "alt": "Formula reference cards"
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "Modern perspective",
      "html": "These benefits are strongest when OO design is combined with principles such as <b>high cohesion</b>, <b>low coupling</b>, <b>Single Responsibility</b>, <b>composition</b>, <b>dependency injection</b> and <b>interface-based design</b>."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "1-6-objects-attributes-methods-state-and-behavior",
      "text": "1.6 Objects, attributes, methods, state and behavior"
    },
    {
      "type": "paragraph",
      "html": "An object can be thought of as a software entity that <b>knows things</b> (its attributes/state) and <b>does things</b> (its methods/behavior). The concept of objects has historical roots in languages such as <b>Simula</b>."
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Attribute</b> — a piece of data or property of an object; attributes <b>describe the state</b> of an object. Different objects of the same class can have different attribute values (Car&nbsp;1: colour = Red, model = Toyota; Car&nbsp;2: colour = Blue, model = Honda).",
        "<b>Method</b> — what an object can do; a method implements some behavior of the object.",
        "<b>State</b> — what the object is/knows at a particular time, represented by attributes (e.g. colour = Red, manufacturer = Toyota, cost = 8,000,000).",
        "<b>Behavior</b> — what the object can do, represented by methods (e.g. <code>drive()</code>, <code>stop()</code>, <code>openDoor()</code>)."
      ]
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Easy way to remember",
      "html": "<b>Attributes → What does it know?</b> &nbsp;·&nbsp; <b>Methods → What can it do?</b>"
    },
    {
      "type": "table",
      "head": [
        "Object",
        "Attributes (knows)",
        "Methods (does)"
      ],
      "rows": [
        [
          "Car",
          "color, model, cost",
          "drive(), stop()"
        ],
        [
          "Student",
          "name, age, ID",
          "study(), attendClass()"
        ],
        [
          "BankAccount",
          "accountNo, balance",
          "deposit(), withdraw()"
        ]
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "1-7-classes-objects-and-instances",
      "text": "1.7 Classes, objects and instances"
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Definition — class",
      "html": "A <b>class</b> is a template/blueprint that describes a group of similar objects — their shared <b>attributes</b>, <b>methods</b>, <b>relationships</b> and <b>common behavior</b>. A class does not represent one particular object; it describes what every object of that type should contain and be able to do."
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"ub-grid\">\n    <div class=\"umlbox\">\n      <div class=\"ub-name\">Employee</div>\n      <div class=\"ub-attrs\">name<br>employeeID<br>salary</div>\n      <div class=\"ub-ops\">calculateSalary()<br>displayDetails()</div>\n    </div>\n    <div class=\"umlbox\">\n      <div class=\"ub-name\">Car</div>\n      <div class=\"ub-attrs\">color<br>manufacturer<br>model<br>cost<br>owner</div>\n      <div class=\"ub-ops\">drive()<br>stop()<br>lock()<br>carryPassengers()</div>\n    </div>\n  </div>",
      "alt": "UML / process diagram from the original notes"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "class-vs-object-the-house-analogy",
      "text": "Class vs object — the house analogy"
    },
    {
      "type": "paragraph",
      "html": "<b>House blueprint = class. Actual house = object.</b> The class is the plan; the object is a real instance built from that plan. From one <code>Employee</code> class we can create many objects — <code>employee1</code> (John), <code>employee2</code> (Jane), <code>employee3</code> (Mark) — all belonging to the Employee class but holding different values."
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Definition — instance",
      "html": "An <b>instance</b> is a particular object created from a class — \"a single person, thing or concept in the application domain\" and another word for a single object. Each instance has <b>its own state</b>. Example: Peter (name = Peter, age = 15) is an instance of the <code>Student</code> class."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "1-8-message-passing",
      "text": "1.8 Message passing"
    },
    {
      "type": "paragraph",
      "html": "Objects need to communicate with one another — this communication is called <b>message passing</b>. A <b>message</b> is essentially a request to an object to perform some operation, e.g. <code>Customer → placeOrder() → OrderService</code>. The receiving object executes the appropriate method. Analogy: a person says \"Prepare the soup\" — the chef receives the request and performs <code>prepareSoup()</code>. Message = \"Prepare soup\", method = <code>prepareSoup()</code>."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "how-message-passing-works-three-steps",
      "text": "How message passing works — three steps"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "<b>Sender</b> — one object sends a message.",
        "<b>Receiver</b> — another object receives the message.",
        "<b>Method execution</b> — the receiver executes the corresponding method; a result may then be returned."
      ]
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "components-of-a-message",
      "text": "Components of a message"
    },
    {
      "type": "table",
      "head": [
        "Component",
        "Purpose",
        "In <code>lawrence.takeOrder(\"sofa\", \"1 Robinson Rd\", 120799)</code>"
      ],
      "rows": [
        [
          "1 · Object reference",
          "Identifies which object should receive the message",
          "<code>lawrence</code>"
        ],
        [
          "2 · Method name",
          "Identifies what operation should be performed",
          "<code>takeOrder</code>"
        ],
        [
          "3 · Parameters",
          "Provide the required input values",
          "<code>\"sofa\", \"1 Robinson Rd\", 120799</code>"
        ]
      ]
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "client-and-server-objects",
      "text": "Client and server objects"
    },
    {
      "type": "paragraph",
      "html": "In an object interaction, the <b>message sender acts as the client</b> and the <b>message receiver acts as the server</b> for that particular request. If Alex (Customer) sends <code>placeOrder()</code> to Lawrence (SalesPerson), then Alex is the client and Lawrence is the receiving/server object: the customer requests a service and the salesperson provides it."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "1-9-method-signature",
      "text": "1.9 Method signature"
    },
    {
      "type": "paragraph",
      "html": "A method has a <b>signature</b> that identifies the operation — the combination of the <b>method name</b> and the <b>parameter list</b>. For <code>getMyFundsFromBank(String bankName)</code> the signature is <code>getMyFundsFromBank(String)</code>. Exact rules for what constitutes a signature vary between programming languages, but the core idea is always name + parameters."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "1-10-the-four-pillars-of-object-orientation",
      "text": "1.10 The four pillars of object orientation"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">Pillar 1</div><div class=\"f-b\"><b>Abstraction</b> — focus on what, hide the how</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Pillar 2</div><div class=\"f-b\"><b>Encapsulation</b> — package data + behavior, control access</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Pillar 3</div><div class=\"f-b\"><b>Inheritance</b> — share and reuse via is-a hierarchies</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Pillar 4</div><div class=\"f-b\"><b>Polymorphism</b> — same operation, many forms</div></div>\n  </div>",
      "alt": "Formula reference cards"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "abstraction",
      "text": "Abstraction"
    },
    {
      "type": "paragraph",
      "html": "<b>Abstraction</b> means focusing on the important aspects of something while ignoring unnecessary details. It answers <b>\"What does this object do?\"</b> rather than \"How exactly does it do it?\""
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Map example:</b> a map is an abstraction — a road map shows roads, cities, routes and distances, while a geological map of the same area shows rock types, geological structures and boundaries. The same geographical area is represented differently depending on what information is important.",
        "<b>Smartphone call example:</b> the user sees only <code>[ Accept ] [ Reject ]</code>. They do not need to know how the network identifies the phone, how signalling works, how audio packets are transmitted, or how the OS manages the call. The complexity is hidden and the user interacts with a simple interface."
      ]
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Definition — abstraction",
      "html": "Abstraction <b>hides unnecessary complexity and exposes the essential functionality</b>."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "encapsulation",
      "text": "Encapsulation"
    },
    {
      "type": "paragraph",
      "html": "<b>Encapsulation</b> means packaging the data and the operations that work on that data together inside an object/class, and controlling access to the object's internal state. Outside code should not normally manipulate internal data directly — instead, controlled operations enforce the rules."
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"ub-grid\">\n    <div class=\"umlbox\">\n      <div class=\"ub-name\">BankAccount</div>\n      <div class=\"ub-attrs\">- balance&nbsp;: double<br>- accountNumber&nbsp;: String</div>\n      <div class=\"ub-ops\">+ deposit()<br>+ withdraw()<br>+ getBalance()</div>\n    </div>\n  </div>",
      "alt": "UML / process diagram from the original notes"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Data hiding</b> means restricting direct access to internal data or implementation details: <code>private double balance;</code> Instead of <code>account.balance = -500000;</code> (illegal direct manipulation), we provide controlled operations <code>account.deposit(5000)</code> and <code>account.withdraw(1000)</code>.",
        "This allows the class to <b>enforce rules</b>: <code>withdraw(amount)</code> performs the withdrawal only <code>if amount ≤ balance</code>, otherwise the transaction is rejected."
      ]
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">Advantage 1 · Data Integrity</div><div class=\"f-b\">Data can only be modified through controlled operations.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Advantage 2 · Security</div><div class=\"f-b\">Sensitive internal information can be protected.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Advantage 3 · Control</div><div class=\"f-b\">The class decides which operations are allowed.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Advantage 4 · Flexibility</div><div class=\"f-b\">Internal implementation can change without affecting users of the class.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Advantage 5 · Reduced Complexity</div><div class=\"f-b\">Users do not need to understand internal implementation.</div></div>\n  </div>",
      "alt": "Formula reference cards"
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Exam classic — Encapsulation vs Abstraction",
      "html": "<b>Encapsulation</b>: \"How do we <b>package and protect</b> the data and implementation?\" (balance is protected from direct access).<br>\n    <b>Abstraction</b>: \"What should we <b>expose</b> and what unnecessary complexity should we <b>hide</b>?\" (the user only needs to know deposit/withdraw/getBalance — not how the bank internally updates the balance).<br>\n    Definitions to memorize: <b>Encapsulation</b> = separating an object's external interface from its hidden internal implementation. <b>Abstraction</b> = hiding unnecessary complexity and exposing essential functionality."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "inheritance",
      "text": "Inheritance"
    },
    {
      "type": "paragraph",
      "html": "<b>Inheritance</b> is a relationship between classes where one class <b>derives from</b> another. The existing class is called the <b>parent / base / superclass</b>; the new class is the <b>child / derived / subclass</b>. Inheritance is a mechanism for <b>sharing and reusing attributes and behaviors</b>."
    },
    {
      "type": "paragraph",
      "html": "Suppose <code>Car</code>, <code>Bike</code> and <code>Truck</code> all need <code>vehicleNumber</code>, <code>brand</code>, <code>speed</code>, <code>start()</code>, <code>stop()</code>. Instead of repeating these in every class, define them once in <code>Vehicle</code> and let <code>Car extends Vehicle</code>, <code>Bike extends Vehicle</code>, <code>Truck extends Vehicle</code>."
    },
    {
      "type": "figure",
      "svg": "<svg viewBox=\"0 0 520 190\" role=\"img\" aria-label=\"Inheritance hierarchy: Vehicle superclass with Car, Bike, Truck subclasses\">\n      <rect x=\"200\" y=\"12\" width=\"120\" height=\"40\" rx=\"8\" class=\"uml-soft uml-stroke\" stroke-width=\"2\"></rect>\n      <text x=\"260\" y=\"37\" text-anchor=\"middle\" class=\"uml-text\" font-weight=\"700\">Vehicle</text>\n      <line x1=\"260\" y1=\"52\" x2=\"260\" y2=\"88\" class=\"uml-line\"></line>\n      <line x1=\"90\" y1=\"88\" x2=\"430\" y2=\"88\" class=\"uml-line\"></line>\n      <line x1=\"90\" y1=\"88\" x2=\"90\" y2=\"118\" class=\"uml-line\"></line>\n      <line x1=\"260\" y1=\"88\" x2=\"260\" y2=\"118\" class=\"uml-line\"></line>\n      <line x1=\"430\" y1=\"88\" x2=\"430\" y2=\"118\" class=\"uml-line\"></line>\n      <polygon points=\"260,52 252,66 268,66\" class=\"uml-arrow\"></polygon>\n      <rect x=\"40\" y=\"118\" width=\"100\" height=\"40\" rx=\"8\" class=\"uml-fill uml-stroke\" stroke-width=\"2\"></rect>\n      <text x=\"90\" y=\"143\" text-anchor=\"middle\" class=\"uml-text\">Car</text>\n      <rect x=\"210\" y=\"118\" width=\"100\" height=\"40\" rx=\"8\" class=\"uml-fill uml-stroke\" stroke-width=\"2\"></rect>\n      <text x=\"260\" y=\"143\" text-anchor=\"middle\" class=\"uml-text\">Bike</text>\n      <rect x=\"380\" y=\"118\" width=\"100\" height=\"40\" rx=\"8\" class=\"uml-fill uml-stroke\" stroke-width=\"2\"></rect>\n      <text x=\"430\" y=\"143\" text-anchor=\"middle\" class=\"uml-text\">Truck</text>\n      <text x=\"470\" y=\"80\" class=\"uml-muted\" text-anchor=\"end\">arrowhead points to the superclass</text>\n    </svg>",
      "alt": "Inheritance hierarchy: Vehicle superclass with Car, Bike, Truck subclasses",
      "caption": "Inheritance: children reuse common attributes and behavior from Vehicle"
    },
    {
      "type": "callout",
      "variant": "warn",
      "title": "Caution — when to use inheritance",
      "html": "Inheritance is useful when there is a genuine <b>\"is-a\"</b> relationship (a Car <b>is a</b> Vehicle). Modern OO design often prefers <b>composition over inheritance</b> when appropriate, because excessive inheritance can create rigid class hierarchies."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "polymorphism",
      "text": "Polymorphism"
    },
    {
      "type": "paragraph",
      "html": "<b>Polymorphism</b> literally means <b>many forms</b> (poly = many, morph = form). It allows the <b>same operation/interface to produce different behavior depending on the object involved</b>."
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Parking example:</b> every <code>Vehicle</code> has <code>calculateParkingFee()</code>, but a <code>Car</code>, <code>Bike</code> and <code>Truck</code> each calculate the fee differently. The caller simply invokes <code>vehicle.calculateParkingFee()</code> and the behavior depends on the actual vehicle type.",
        "<b>Payment example:</b> <code>Card</code>, <code>PayPal</code> and <code>BankTransfer</code> each implement <code>pay()</code>. The application calls <code>payment.pay()</code> without needing to know the detailed implementation."
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "1-11-cohesion",
      "text": "1.11 Cohesion"
    },
    {
      "type": "paragraph",
      "html": "<b>Cohesion</b> measures how strongly the responsibilities, methods and data of a class <b>belong together around a single meaningful purpose</b>. It is concerned with the <b>inside of one class/module</b>."
    },
    {
      "type": "table",
      "head": [
        "High cohesion ✓",
        "Low cohesion ✗"
      ],
      "rows": [
        [
          "<b>EmailService</b>: <code>validateEmail()</code>, <code>sendEmail()</code>, <code>formatEmail()</code> — all operations are related to one clear purpose.<br><br><b>StudentService</b>: <code>registerStudent()</code>, <code>updateStudent()</code>, <code>removeStudent()</code>.",
          "<b>UserManager</b>: <code>createUser()</code>, <code>deleteUser()</code>, <code>validateEmail()</code>, <code>sendWelcomeEmail()</code>, <code>generateReport()</code>, <code>printReport()</code>, <code>calculateTax()</code>, <code>playMusic()</code> — too many unrelated things.<br><small>Fix: split into UserService, EmailService, ReportService, TaxService, MusicService.</small>"
        ]
      ]
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Quick test for any exam scenario",
      "html": "Ask: <b>\"Does this class have one clear purpose?\"</b> If <b>YES → high cohesion</b>. If <b>NO → low cohesion</b> — split the class into focused services."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "1-12-coupling",
      "text": "1.12 Coupling"
    },
    {
      "type": "paragraph",
      "html": "<b>Coupling</b> refers to the <b>degree of dependency between software modules/classes</b> — the strength of the connections <b>between</b> classes. If two classes depend heavily on each other → high coupling. If they are relatively independent → low coupling."
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>High coupling:</b> a chain <code>A → B → C → D</code> where changing Class B requires changes in A, C and D. The system becomes difficult to maintain, test, modify, and more vulnerable to changes.",
        "<b>Low (loose) coupling:</b> classes depend on an <b>abstraction/interface</b> rather than a specific implementation. If <code>Order</code> depends directly on <code>MySQLDatabase</code>, switching to MongoDB forces changes to Order (high coupling). Instead, let Order depend on a <code>Database</code> interface implemented by both MySQLDatabase and MongoDatabase — the Order class doesn't care which database is used."
      ]
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "Real-world analogy",
      "html": "<b>High coupling</b> = a phone charger that works only with one specific phone model. <b>Loose coupling</b> = a USB-C standard charger that works with many compatible devices."
    },
    {
      "type": "table",
      "head": [
        "",
        "Cohesion",
        "Coupling"
      ],
      "rows": [
        [
          "<b>Concerned with</b>",
          "One class/module (inside)",
          "Relationships between classes/modules"
        ],
        [
          "<b>Measures</b>",
          "Internal relatedness",
          "External dependency"
        ],
        [
          "<b>We want</b>",
          "<b>HIGH</b> cohesion",
          "<b>LOW</b> coupling"
        ],
        [
          "<b>Means</b>",
          "One clear responsibility",
          "Minimal unnecessary dependency"
        ]
      ]
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Golden rule",
      "html": "<b>High Cohesion + Low Coupling = Good OO Design</b> — memorize this formula; it appears in nearly every OOD exam."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "1-13-worked-example-smart-parking-system-activity-1",
      "text": "1.13 Worked example — Smart Parking System (Activity 1)"
    },
    {
      "type": "example",
      "title": "Worked example — apply all Week-1 concepts",
      "bodyHtml": "<p><i>A smart parking system manages parking spaces in a shopping mall. When a vehicle enters, the system assigns an available parking slot. When the vehicle leaves, the system calculates the parking fee based on the duration. The system supports Cars, Bikes and Trucks.</i></p>\n    <p><b>Part A — Identify at least 7 classes; B — 3 attributes each; C — 2 methods each; D — inheritance hierarchy; E — encapsulation choices; F — polymorphism; G — high cohesion class; H — reduce coupling.</b></p>",
      "solutionHtml": "<p><b>A + B + C — Classes with attributes and methods:</b></p>\n      <ul>\n        <li><code>ParkingSystem</code> — attrs: mallName, totalSlots, operatingHours; methods: assignSlot(), releaseSlot()</li>\n        <li><code>ParkingSlot</code> — attrs: slotID, slotType, isOccupied; methods: occupy(), vacate()</li>\n        <li><code>Vehicle</code> — attrs: vehicleNumber, vehicleType, entryTime; methods: getDuration(), getVehicleType()</li>\n        <li><code>Car</code> / <code>Bike</code> / <code>Truck</code> (subclasses of Vehicle)</li>\n        <li><code>Ticket</code> — attrs: ticketID, issueTime, exitTime; methods: calculateDuration(), printTicket()</li>\n        <li><code>Payment</code> — attrs: amount, paymentMethod, timestamp; methods: processPayment(), printReceipt()</li>\n        <li><code>FeeCalculator</code> — attrs: hourlyRateCar, hourlyRateBike, hourlyRateTruck; methods: calculateFee()</li>\n        <li><code>Driver</code> — attrs: name, licenceNo; methods: parkVehicle(), collectVehicle()</li>\n      </ul>\n      <p><b>D — Inheritance:</b> <code>Vehicle</code> is the parent; <code>Car</code>, <code>Bike</code>, <code>Truck</code> are children (each <i>is-a</i> Vehicle and inherits vehicleNumber, entryTime, getDuration()).</p>\n      <p><b>E — Encapsulation:</b> make <code>ParkingSlot.isOccupied</code> and <code>Payment.amount</code> private. Hiding <code>isOccupied</code> prevents outside code from marking a free slot as occupied without going through <code>assignSlot()</code> — the system keeps slot allocation consistent. Access is controlled via <code>occupy()</code>/<code>vacate()</code> and <code>processPayment()</code>, which can validate rules (e.g. payment only after exit time is known).</p>\n      <p><b>F — Polymorphism:</b> <code>calculateFee()</code> (or <code>calculateParkingFee()</code>) should behave differently for Car, Bike and Truck — same method name, different fee logic per vehicle type; the caller just calls <code>vehicle.calculateParkingFee()</code>.</p>\n      <p><b>G — Cohesion:</b> <code>FeeCalculator</code> has high cohesion — every method and attribute is about computing fees; it has one clear purpose.</p>\n      <p><b>H — Coupling:</b> if <code>ParkingSystem</code> directly constructs and calls a specific <code>CashPaymentProcessor</code>, replacing it with card payment requires editing ParkingSystem (unnecessary dependency). Reduce it by making ParkingSystem depend on a general <code>Payment</code> interface — the payment method becomes swappable.</p>"
    },
    {
      "type": "quiz",
      "title": "Topic 1 Quiz — OOAD Basic Concepts",
      "count": 8,
      "quizSlug": "01-ooad-basic-concepts"
    }
  ]
};

export default chapter;
