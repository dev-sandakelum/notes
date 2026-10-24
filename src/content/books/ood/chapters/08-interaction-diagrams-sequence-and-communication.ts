import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "08-interaction-diagrams-sequence-and-communication",
    "number": 8,
    "title": "Interaction diagrams: sequence & communication",
    "subtitle": "Week 8 · Interaction Diagrams (Communication + Sequence)",
    "kind": "topic",
    "words": 1432,
    "minutes": 7
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "8-1-what-are-interaction-diagrams",
      "text": "8.1 what are interaction diagrams?"
    },
    {
      "type": "paragraph",
      "html": "<b>Interaction diagrams</b> are UML <b>behavioral</b> diagrams that illustrate how objects or actors interact with one another by <b>exchanging messages</b> to accomplish a specific task or achieve a particular goal in a system. Their purpose:"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "Represent the <b>communication between objects</b> in a system.",
        "Show the <b>sequence and flow of messages</b> exchanged between objects.",
        "Describe how objects <b>collaborate</b> to perform a particular operation or use case.",
        "Help developers understand and design the <b>dynamic behavior</b> of a system."
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "8-2-sequence-vs-communication-the-big-comparison",
      "text": "8.2 sequence vs communication: the big comparison"
    },
    {
      "type": "table",
      "head": [
        "Communication Diagram",
        "Sequence Diagram"
      ],
      "rows": [
        [
          "Focuses on <b>HOW objects are connected</b>",
          "Focuses on <b>WHEN messages occur</b>"
        ],
        [
          "Objects arranged <b>freely</b> across the diagram",
          "Objects arranged <b>horizontally</b> in a row"
        ],
        [
          "<b>Links</b> show relationships between communicating objects",
          "<b>Lifelines</b> extend vertically"
        ],
        [
          "<b>Message numbers</b> (1, 2, 2.1…) indicate the order of interactions",
          "Messages ordered <b>top to bottom</b>"
        ],
        [
          "Emphasizes the <b>organization of objects and their relationships</b>",
          "Emphasizes the <b>timing and order of interactions</b>"
        ]
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "8-3-communication-diagrams",
      "text": "8.3 communication diagrams"
    },
    {
      "type": "paragraph",
      "html": "A UML <b>Communication Diagram</b> is an interaction diagram that illustrates how objects communicate with each other through messages to perform a task or achieve a goal. Its main elements:"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">1 · Objects</div><div class=\"f-b\">The participants in the interaction, shown as rectangles labelled <code>objectName:ClassName</code>.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">2 · Links</div><div class=\"f-b\">Lines connecting objects, indicating that they <b>can communicate</b> with each other.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">3 · Messages</div><div class=\"f-b\">Labels on links representing communication, method calls, requests or responses.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">4 · Sequence numbers</div><div class=\"f-b\">Indicate the order messages are sent and processed: <b>1, 2, 2.1, 2.2, 3…</b></div></div>\n  </div>",
      "alt": "Formula reference cards"
    },
    {
      "type": "example",
      "title": "Message numbering: user login",
      "bodyHtml": "<ul>\n      <li><code>1: login()</code>: first message</li>\n      <li><code>2: validateUser()</code>: second message</li>\n      <li><code>2.1: checkCredentials()</code>: a <b>nested</b> message within message 2</li>\n      <li><code>3: displayResult()</code>: third message</li>\n    </ul>\n    <p>Login flow: User → Login Page: <code>enterCredentials()</code>; Login Page → Database: <code>validateCredentials()</code>; Database → Login Page: <code>validationResult()</code>; Login Page → User: <code>displayMessage()</code>.</p>",
      "solutionHtml": null
    },
    {
      "type": "figure",
      "svg": "<svg viewBox=\"0 0 700 300\" role=\"img\" aria-label=\"Communication diagram for user login\">\n      <!-- User actor -->\n      <circle cx=\"60\" cy=\"80\" r=\"11\" class=\"uml-stroke\" stroke-width=\"2\" fill=\"none\"></circle>\n      <line x1=\"60\" y1=\"91\" x2=\"60\" y2=\"123\" class=\"uml-stroke\" stroke-width=\"2\"></line>\n      <line x1=\"40\" y1=\"101\" x2=\"80\" y2=\"101\" class=\"uml-stroke\" stroke-width=\"2\"></line>\n      <line x1=\"60\" y1=\"123\" x2=\"42\" y2=\"150\" class=\"uml-stroke\" stroke-width=\"2\"></line>\n      <line x1=\"60\" y1=\"123\" x2=\"78\" y2=\"150\" class=\"uml-stroke\" stroke-width=\"2\"></line>\n      <text x=\"60\" y=\"170\" text-anchor=\"middle\" class=\"uml-text\" font-weight=\"700\">User</text>\n      <!-- objects -->\n      <rect x=\"200\" y=\"52\" width=\"150\" height=\"40\" rx=\"8\" class=\"uml-fill uml-stroke\" stroke-width=\"1.8\"></rect>\n      <text x=\"275\" y=\"77\" text-anchor=\"middle\" class=\"uml-text\" font-weight=\"700\">loginPage : LoginForm</text>\n      <rect x=\"500\" y=\"52\" width=\"150\" height=\"40\" rx=\"8\" class=\"uml-fill uml-stroke\" stroke-width=\"1.8\"></rect>\n      <text x=\"575\" y=\"77\" text-anchor=\"middle\" class=\"uml-text\" font-weight=\"700\">db : UserDatabase</text>\n      <!-- links -->\n      <line x1=\"82\" y1=\"72\" x2=\"200\" y2=\"72\" class=\"uml-line\"></line>\n      <line x1=\"350\" y1=\"72\" x2=\"500\" y2=\"72\" class=\"uml-line\"></line>\n      <!-- messages (labels above / below their link) -->\n      <text x=\"141\" y=\"62\" text-anchor=\"middle\" class=\"uml-text\" font-weight=\"700\" font-size=\"11\">1: enterCredentials()</text>\n      <text x=\"425\" y=\"62\" text-anchor=\"middle\" class=\"uml-text\" font-weight=\"700\" font-size=\"11\">2: validateCredentials()</text>\n      <text x=\"425\" y=\"102\" text-anchor=\"middle\" class=\"uml-text\" font-weight=\"700\" font-size=\"11\">← 3: validationResult()</text>\n      <text x=\"141\" y=\"102\" text-anchor=\"middle\" class=\"uml-text\" font-weight=\"700\" font-size=\"11\">← 4: displayMessage()</text>\n      <!-- nested self-message on db -->\n      <path d=\"M 530 92 L 530 128 L 640 128 L 640 92\" class=\"uml-line\"></path>\n      <text x=\"585\" y=\"120\" text-anchor=\"middle\" class=\"uml-text\" font-weight=\"700\" font-size=\"11\">2.1: checkCredentials()</text>\n      <!-- note -->\n      <rect x=\"20\" y=\"210\" width=\"250\" height=\"70\" rx=\"6\" class=\"uml-soft uml-stroke\" stroke-width=\"1.2\"></rect>\n      <text x=\"34\" y=\"232\" class=\"uml-muted\">Numbers give the ORDER; 2.1 is nested</text>\n      <text x=\"34\" y=\"246\" class=\"uml-muted\">inside message 2. Labels sit on the links</text>\n      <text x=\"34\" y=\"260\" class=\"uml-muted\">connecting the communicating objects.</text>\n    </svg>",
      "alt": "Communication diagram for user login",
      "caption": "Communication diagram: user login. Objects connected by links; numbered messages show the order (2.1 is nested inside 2)"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "8-4-sequence-diagrams",
      "text": "8.4 sequence diagrams"
    },
    {
      "type": "paragraph",
      "html": "A <b>sequence diagram</b> is a UML interaction diagram that shows how actors, objects or system components <b>exchange messages over time</b> to complete a scenario. It arranges participants <b>horizontally</b> and messages <b>vertically</b>, making the order of requests, responses, conditions and loops easier to understand."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "when-to-use-sequence-diagrams",
      "text": "When to use sequence diagrams"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Model a specific use case or scenario</b>, step-by-step flow of messages for one use case.",
        "<b>Design or refine system architecture</b>: visualize how UI, business logic and database interact.",
        "<b>Clarify complex processes</b>: break complicated workflows into clear time-ordered interactions.",
        "<b>Validate logic before implementation</b>: confirm all interactions are defined before coding.",
        "<b>Explain system behavior to stakeholders</b>: technical and non-technical team members.",
        "<b>Design or analyze integrations and APIs</b>, requests/responses between services (including microservices)."
      ]
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "objects-and-lifelines",
      "text": "Objects and lifelines"
    },
    {
      "type": "paragraph",
      "html": "A sequence diagram contains several <b>lifeline notations arranged horizontally</b> across the top (they should not overlap). Each lifeline represents an object or part of the system participating in the interaction, drawn as a <b>dashed vertical line</b> starting from the bottom center of its object box, indicating the object's existence/lifespan during the sequence of events. Special stereotyped lifelines:"
    },
    {
      "type": "table",
      "head": [
        "Lifeline element",
        "Represents",
        "Example"
      ],
      "rows": [
        [
          "<b>Actor</b>",
          "Used when the sequence diagram is owned by a use case",
          "Customer, Student"
        ],
        [
          "<b>Boundary</b>",
          "A system boundary / software element users interact with",
          "UI screens, menus, database gateways"
        ],
        [
          "<b>Control</b>",
          "A controlling entity or manager: organizes and schedules interactions between boundaries and entities; the mediator",
          "WithdrawalController"
        ],
        [
          "<b>Entity</b>",
          "System data",
          "Customer entity managing customer data, BankAccount"
        ]
      ]
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "activation-bars-and-messages",
      "text": "Activation bars and messages"
    },
    {
      "type": "paragraph",
      "html": "The <b>activation bar</b> is the thin box placed on the lifeline, indicating that an object is <b>active (or instantiated)</b> during an interaction. Its length indicates the duration the object stays active. The <b>message caller</b> is active when it sends the message; the <b>message receiver</b> becomes active when it receives the message and begins processing it."
    },
    {
      "type": "paragraph",
      "html": "A <b>message arrow</b> represents a message sent from one object to another. Messages can flow left to right, right to left, or back to the same object (<b>self-message</b>). A message arrow includes a <b>message signature</b>:"
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Message signature format",
      "html": "<code>attribute = message_name(arguments) : return_type</code>"
    },
    {
      "type": "table",
      "head": [
        "Message type",
        "Meaning"
      ],
      "rows": [
        [
          "<b>Synchronous</b>",
          "The sender <b>waits</b> for the receiver to process the message and return before carrying on"
        ],
        [
          "<b>Asynchronous</b>",
          "The caller <b>does not wait</b>: it can send other messages before the receiver finishes"
        ],
        [
          "<b>Return message</b>",
          "The receiver is done processing and <b>returns control</b> to the caller (drawn dashed)"
        ],
        [
          "<b>Participant creation message</b>",
          "Objects don't have to live for the whole sequence, participants can be <b>created</b> by a message"
        ],
        [
          "<b>Participant destruction</b>",
          "Participants no longer needed can be <b>deleted</b>, an <b>X</b> at the end of the lifeline"
        ],
        [
          "<b>Reflexive message</b>",
          "An object sends a message <b>to itself</b>"
        ]
      ]
    },
    {
      "type": "paragraph",
      "html": "UML diagrams generally permit <b>comments</b>: a rectangle with a folded-over corner, linked to the related element with a dashed line."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "8-5-how-to-draw-a-sequence-diagram-7-steps",
      "text": "8.5 how to draw a sequence diagram: 7 steps"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "<b>Identify the use case</b>: define the specific scenario to model.",
        "<b>Identify the objects and actors</b>, e.g. Librarian, Online Library Management System, User Credentials Database, Email System.",
        "<b>Describe the use case in detail</b>, a comprehensive description reveals the interactions that should appear in the diagram.",
        "<b>Identify the sequence of interactions</b>, e.g. librarian requests account creation → selects account type → enters details → details checked against credentials database → account created → details emailed to user.",
        "<b>Arrange actors and lifelines</b> horizontally.",
        "<b>Add messages and interaction details</b> (with activation bars).",
        "<b>Review and refine</b> the diagram."
      ]
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "Best practices",
      "html": "Draw <b>smaller</b> sequence diagrams · avoid unnecessary or repetitive diagrams · use clear, consistent naming · maintain logical ordering and alignment · limit the number of objects per diagram · highlight alternative or conditional flows with <b>fragments</b>."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "8-6-full-worked-example-atm-cash-withdrawal-sequence-diagram",
      "text": "8.6 full worked example. ATM cash withdrawal (sequence diagram)"
    },
    {
      "type": "paragraph",
      "html": "<b>Scenario:</b> a customer requests to withdraw money using an ATM. The ATMInterface (boundary) sends the withdrawal request to the WithdrawalController (control), which checks the customer's account balance with the BankAccount (entity). If sufficient funds are available, the controller instructs the ATM interface to dispense the cash."
    },
    {
      "type": "figure",
      "svg": "<svg viewBox=\"0 0 700 420\" role=\"img\" aria-label=\"Sequence diagram for ATM cash withdrawal\">\n      <!-- lifeline heads -->\n      <g>\n        <circle cx=\"80\" cy=\"26\" r=\"10\" class=\"uml-stroke\" stroke-width=\"2\" fill=\"none\"></circle>\n        <line x1=\"80\" y1=\"36\" x2=\"80\" y2=\"58\" class=\"uml-stroke\" stroke-width=\"2\"></line>\n        <line x1=\"64\" y1=\"44\" x2=\"96\" y2=\"44\" class=\"uml-stroke\" stroke-width=\"2\"></line>\n        <line x1=\"80\" y1=\"58\" x2=\"66\" y2=\"74\" class=\"uml-stroke\" stroke-width=\"2\"></line>\n        <line x1=\"80\" y1=\"58\" x2=\"94\" y2=\"74\" class=\"uml-stroke\" stroke-width=\"2\"></line>\n        <text x=\"80\" y=\"92\" text-anchor=\"middle\" class=\"uml-text\" font-weight=\"700\">Customer</text>\n        <text x=\"80\" y=\"105\" text-anchor=\"middle\" class=\"uml-muted\">«actor»</text>\n      </g>\n      <g>\n        <rect x=\"215\" y=\"14\" width=\"130\" height=\"34\" rx=\"6\" class=\"uml-fill uml-stroke\" stroke-width=\"1.8\"></rect>\n        <text x=\"280\" y=\"35\" text-anchor=\"middle\" class=\"uml-text\" font-weight=\"700\">ATMInterface</text>\n        <text x=\"280\" y=\"63\" text-anchor=\"middle\" class=\"uml-muted\">«boundary»</text>\n      </g>\n      <g>\n        <rect x=\"435\" y=\"14\" width=\"160\" height=\"34\" rx=\"6\" class=\"uml-fill uml-stroke\" stroke-width=\"1.8\"></rect>\n        <text x=\"515\" y=\"35\" text-anchor=\"middle\" class=\"uml-text\" font-weight=\"700\">WithdrawalController</text>\n        <text x=\"515\" y=\"63\" text-anchor=\"middle\" class=\"uml-muted\">«control»</text>\n      </g>\n      <g>\n        <rect x=\"596\" y=\"14\" width=\"98\" height=\"34\" rx=\"6\" class=\"uml-fill uml-stroke\" stroke-width=\"1.8\"></rect>\n        <text x=\"645\" y=\"35\" text-anchor=\"middle\" class=\"uml-text\" font-weight=\"700\">BankAccount</text>\n        <text x=\"645\" y=\"63\" text-anchor=\"middle\" class=\"uml-muted\">«entity»</text>\n      </g>\n      <!-- lifelines -->\n      <line x1=\"80\" y1=\"108\" x2=\"80\" y2=\"400\" class=\"uml-line uml-dashed\"></line>\n      <line x1=\"280\" y1=\"68\" x2=\"280\" y2=\"400\" class=\"uml-line uml-dashed\"></line>\n      <line x1=\"515\" y1=\"68\" x2=\"515\" y2=\"400\" class=\"uml-line uml-dashed\"></line>\n      <line x1=\"645\" y1=\"68\" x2=\"645\" y2=\"400\" class=\"uml-line uml-dashed\"></line>\n      <!-- messages -->\n      <line x1=\"80\" y1=\"128\" x2=\"270\" y2=\"128\" class=\"uml-line\"></line>\n      <polygon points=\"280,128 268,123 268,133\" class=\"uml-arrow\"></polygon>\n      <text x=\"180\" y=\"121\" text-anchor=\"middle\" class=\"uml-text\" font-weight=\"700\">1: requestWithdrawal()</text>\n      <line x1=\"280\" y1=\"160\" x2=\"505\" y2=\"160\" class=\"uml-line\"></line>\n      <polygon points=\"515,160 503,155 503,165\" class=\"uml-arrow\"></polygon>\n      <text x=\"397\" y=\"153\" text-anchor=\"middle\" class=\"uml-text\" font-weight=\"700\">2: withdraw(amount)</text>\n      <line x1=\"515\" y1=\"192\" x2=\"635\" y2=\"192\" class=\"uml-line\"></line>\n      <polygon points=\"645,192 633,187 633,197\" class=\"uml-arrow\"></polygon>\n      <text x=\"578\" y=\"185\" text-anchor=\"middle\" class=\"uml-text\" font-weight=\"700\">3: getBalance()</text>\n      <line x1=\"645\" y1=\"218\" x2=\"525\" y2=\"218\" class=\"uml-line uml-dashed\"></line>\n      <polygon points=\"515,218 527,213 527,223\" class=\"uml-arrow\"></polygon>\n      <text x=\"578\" y=\"211\" text-anchor=\"middle\" class=\"uml-text\" font-weight=\"700\">4: balance</text>\n      <!-- fragment -->\n      <rect x=\"440\" y=\"238\" width=\"240\" height=\"76\" rx=\"6\" fill=\"none\" stroke=\"var(--warn)\" stroke-width=\"1.6\"></rect>\n      <text x=\"452\" y=\"258\" class=\"uml-text\" font-weight=\"700\" fill=\"var(--warn)\">alt [balance ≥ amount]</text>\n      <line x1=\"515\" y1=\"268\" x2=\"290\" y2=\"268\" class=\"uml-line\"></line>\n      <polygon points=\"280,268 292,263 292,273\" class=\"uml-arrow\"></polygon>\n      <text x=\"397\" y=\"261\" text-anchor=\"middle\" class=\"uml-text\" font-weight=\"700\">5: dispenseCash()</text>\n      <line x1=\"515\" y1=\"298\" x2=\"633\" y2=\"298\" class=\"uml-line\"></line>\n      <polygon points=\"645,298 633,293 633,303\" class=\"uml-arrow\"></polygon>\n      <text x=\"578\" y=\"291\" text-anchor=\"middle\" class=\"uml-text\" font-weight=\"700\">6: updateBalance(-amt)</text>\n      <!-- activation bars -->\n      <rect x=\"275\" y=\"120\" width=\"10\" height=\"196\" fill=\"var(--primary)\" opacity=\".28\" stroke=\"var(--primary)\" stroke-width=\".8\"></rect>\n      <rect x=\"510\" y=\"152\" width=\"10\" height=\"158\" fill=\"var(--primary)\" opacity=\".28\" stroke=\"var(--primary)\" stroke-width=\".8\"></rect>\n      <rect x=\"640\" y=\"188\" width=\"10\" height=\"44\" fill=\"var(--primary)\" opacity=\".28\" stroke=\"var(--primary)\" stroke-width=\".8\"></rect>\n      <rect x=\"640\" y=\"292\" width=\"10\" height=\"16\" fill=\"var(--primary)\" opacity=\".28\" stroke=\"var(--primary)\" stroke-width=\".8\"></rect>\n      <rect x=\"75\" y=\"122\" width=\"10\" height=\"12\" fill=\"var(--primary)\" opacity=\".28\" stroke=\"var(--primary)\" stroke-width=\".8\"></rect>\n      <!-- return -->\n      <line x1=\"280\" y1=\"352\" x2=\"90\" y2=\"352\" class=\"uml-line uml-dashed\"></line>\n      <polygon points=\"80,352 92,347 92,357\" class=\"uml-arrow\"></polygon>\n      <text x=\"180\" y=\"345\" text-anchor=\"middle\" class=\"uml-text\" font-weight=\"700\">7: cash + receipt</text>\n      <!-- legend -->\n      <text x=\"130\" y=\"392\" class=\"uml-muted\">dashed arrow = return message; thin boxes = activation bars; alt fragment = conditional flow</text>\n    </svg>",
      "alt": "Sequence diagram for ATM cash withdrawal",
      "caption": "ATM withdrawal sequence diagram: actor, boundary, control and entity lifelines; the alt fragment shows the conditional \"sufficient funds\" flow"
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Why these roles?",
      "html": "<b>ATMInterface</b> (boundary) receives the amount and displays messages; <b>WithdrawalController</b> (control) coordinates the withdrawal steps and decides what to do based on the balance; <b>BankAccount</b> (entity) holds the account information and balance."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "8-7-practice-activities",
      "text": "8.7 practice activities"
    },
    {
      "type": "example",
      "title": "Practice: draw the diagrams (from the lecture activities)",
      "bodyHtml": "<ol>\n      <li><b>Login (sequence):</b> User enters username/password into LoginScreen; LoginScreen sends <code>validateCredentials()</code> to AuthenticationSystem; AuthenticationSystem checks and returns the login result to LoginScreen. (2 objects.)</li>\n      <li><b>Async confirmation (sequence):</b> When a customer places an order, FoodOrderingSystem sends order confirmation details to NotificationService; while the notification service processes the confirmation, the food ordering system updates the order status; the notification service completes sending afterwards. (2 objects: think asynchronous messages.)</li>\n      <li><b>Exam results (sequence):</b> Student logs into UniversityExaminationSystem and requests to view results; the system retrieves and displays them. (Actor + object.)</li>\n      <li><b>Phone update (sequence):</b> Student requests a phone number update through UniversityPortal (boundary); the portal sends the new number to the Student (entity) to save; the entity confirms completion. (Boundary + entity lifeline notations.)</li>\n      <li><b>Book search (sequence):</b> Librarian enters a title via LibraryInterface (boundary); the interface requests the search from LibraryCatalog (system) and displays the returned results.</li>\n      <li><b>ATM withdrawal (sequence):</b> solved in the diagram above.</li>\n      <li><b>ATM (communication):</b> Customer inserts card and enters PIN; ATM sends card+PIN to BankSystem for verification; if valid, customer enters amount; BankSystem checks balance and approves; ATM dispenses cash and updates balance.</li>\n      <li><b>Online shopping (communication):</b> Customer searches/selects/adds to cart; system checks availability and displays price; checkout with delivery details; PaymentSystem processes payment and sends result; order created and confirmation sent.</li>\n      <li><b>Library borrowing (communication):</b> Student sends borrow request to LibrarySystem; system checks availability; if available, updates the borrowing record; before confirming, performs an internal operation to calculate the due date (a self/nested message.).</li>\n      <li><b>PIN with repetition (communication):</b> Customer enters PIN; ATM sends to BankSystem; if wrong, ATM asks re-entry: repeats until correct or 3 attempts; correct → menu; 3 wrong → card retained.</li>\n    </ol>",
      "solutionHtml": "<ul>\n        <li><b>Activity 2</b> uses an <b>asynchronous</b> message: FoodOrderingSystem does NOT wait for NotificationService; it proceeds to update the order status while the confirmation is still being processed.</li>\n        <li><b>Activity 4:</b> use the <b>boundary</b> lifeline stereotype for UniversityPortal and the <b>entity</b> stereotype for Student; the message carries the new phone number, and the return confirms the update.</li>\n        <li><b>Activity 9:</b> \"internal operation to calculate the due date\" = a <b>reflexive/self message</b> on the LibrarySystem object, in a communication diagram it becomes a self-link with a nested number (e.g. <code>3.1: calculateDueDate()</code>).</li>\n        <li><b>Activity 10:</b> repetition in a communication diagram is expressed with numbered messages and a condition, e.g. <code>2 *[until valid or 3 attempts]: verifyPIN()</code>.</li>\n        <li>Generally: requests = solid arrows with signatures; results/returns = dashed arrows; number nested messages x.y when they occur inside message x.</li>\n      </ul>"
    },
    {
      "type": "quiz",
      "title": "Topic 8 Quiz: Interaction Diagrams",
      "count": 7,
      "quizSlug": "08-interaction-diagrams-sequence-and-communication"
    }
  ]
};

export default chapter;
