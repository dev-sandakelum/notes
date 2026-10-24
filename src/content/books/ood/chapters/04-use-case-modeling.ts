import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "04-use-case-modeling",
    "number": 4,
    "title": "Use Case Modeling",
    "subtitle": "Week 4 · Use Case Modeling + Case Study Sheet 1",
    "kind": "topic",
    "words": 2175,
    "minutes": 11
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "4-1-what-is-use-case-modeling",
      "text": "4.1 What is use case modeling?"
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Definition",
      "html": "<b>Use Case Modeling</b> is a <b>requirements engineering technique</b> used to <b>identify, elicit and document the functional requirements</b> of a system. It describes <b>how users interact with a system to achieve their goals</b> — the system described from the <b>user's perspective</b>."
    },
    {
      "type": "paragraph",
      "html": "Use cases are <b>primarily written descriptions, not diagrams</b>. A Use Case Diagram in UML visually shows actors, use cases and their relationships — but the real content of a use case is its text."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "4-2-functional-vs-non-functional-requirements",
      "text": "4.2 Functional vs non-functional requirements"
    },
    {
      "type": "table",
      "head": [
        "",
        "Functional Requirement (FR)",
        "Non-Functional Requirement (NFR)"
      ],
      "rows": [
        [
          "<b>Definition</b>",
          "A statement of <b>what the system should do</b>",
          "A <b>constraint on how</b> the system should operate or be implemented (a quality requirement)"
        ],
        [
          "<b>ATM examples</b>",
          "Validate ATM card · Validate PIN · Dispense cash · Display account balance",
          "Validate PIN <b>within 3 seconds</b> · Communication must use <b>encryption</b> · Available <b>99.9%</b> of the time · Respond within <b>2 seconds</b> · Passwords securely stored · Built with a specific language"
        ],
        [
          "<b>Test</b>",
          "Can you verify it by observing a system function?",
          "Does it constrain time, security, availability, performance or technology?"
        ]
      ]
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Exam tip",
      "html": "Spot the pattern: <b>\"The ATM shall validate the PIN\"</b> = functional. <b>\"The ATM shall validate the PIN within 3 seconds\"</b> = non-functional. The <b>timing/quality constraint</b> is what makes it non-functional."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "4-3-use-case-vs-scenario",
      "text": "4.3 Use case vs scenario"
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Definitions",
      "html": "<b>Use case</b> — a <b>story</b> describing how an actor uses a system to achieve a goal; a <b>collection of related scenarios</b>.<br>\n    <b>Scenario</b> — <b>one specific path</b> through that use case."
    },
    {
      "type": "paragraph",
      "html": "<b>Example — Withdraw Cash:</b> the customer inserts the ATM card, enters the PIN, selects \"Withdraw Cash\", enters the amount, the system checks the account and dispenses cash. That whole interaction is the use case <i>Withdraw Cash</i>. Its scenarios include:"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Scenario 1 — Successful withdrawal:</b> correct PIN, withdraws Rs. 10,000.",
        "<b>Scenario 2 — Wrong PIN:</b> the customer enters an incorrect PIN.",
        "<b>Scenario 3 — Insufficient balance:</b> requests Rs. 50,000 but has only Rs. 20,000.",
        "<b>Scenario 4 — Daily limit exceeded:</b> already withdrawn the maximum allowed amount."
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "4-4-actors-primary-supporting-offstage",
      "text": "4.4 Actors — primary, supporting, offstage"
    },
    {
      "type": "paragraph",
      "html": "An <b>actor</b> interacts with the system to achieve a goal. An actor can be a <b>person</b>, an <b>organization</b>, or <b>another computer system</b>. The key point: an actor is identified by its <b>role, not its name</b> — \"Student\", not \"Kamal\", because many different people can perform the same role."
    },
    {
      "type": "table",
      "head": [
        "Actor type",
        "Definition",
        "Online shopping example"
      ],
      "rows": [
        [
          "<b>Primary actor</b>",
          "Has a <b>goal that is fulfilled by using the system</b> — directly uses the system.",
          "Customer (goal: Purchase Product / Place Order)"
        ],
        [
          "<b>Supporting actor</b>",
          "<b>Provides a service to the system</b> — it is not using the system for its own goal.",
          "Bank / Payment Gateway (authorizes payment for the system)"
        ],
        [
          "<b>Offstage actor</b>",
          "Has an <b>interest in the system's behavior</b> but <b>does not directly participate</b> in the interaction.",
          "Tax Authority (cares that correct tax is calculated, but never touches the system during purchase)"
        ]
      ]
    },
    {
      "type": "table",
      "head": [
        "System",
        "Primary actor",
        "Goal"
      ],
      "rows": [
        [
          "ATM",
          "Customer",
          "Withdraw Cash"
        ],
        [
          "Library",
          "Student",
          "Borrow Book"
        ],
        [
          "Hospital",
          "Patient",
          "Book Appointment"
        ],
        [
          "Online Shopping",
          "Customer",
          "Place Order"
        ],
        [
          "University System",
          "Student",
          "Register Course"
        ]
      ]
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "one-scenario-showing-all-actor-types-restaurant-pos",
      "text": "One scenario showing all actor types — Restaurant POS"
    },
    {
      "type": "paragraph",
      "html": "A customer orders food using a restaurant POS system:"
    },
    {
      "type": "table",
      "head": [
        "Actor",
        "Type",
        "Why?"
      ],
      "rows": [
        [
          "Customer",
          "Primary",
          "Wants to place an order"
        ],
        [
          "Cashier",
          "Primary",
          "Processes the order"
        ],
        [
          "Payment Gateway",
          "Supporting",
          "Authorizes payment"
        ],
        [
          "Kitchen System",
          "Supporting",
          "Receives order information"
        ],
        [
          "Tax Authority",
          "Offstage",
          "Has an interest in tax calculation"
        ]
      ]
    },
    {
      "type": "example",
      "title": "Worked example — Online University Course Registration",
      "bodyHtml": "<p><i>Students view/register/drop courses and view registered courses. Academic staff manage course information and approve special requests. The system connects to the University Payment System (verify fees) and the Student Information System (retrieve records). The University Academic Administration wants registration to follow rules but does not directly use the system.</i> Identify at least 2 primary, 2 supporting and 2 offstage actors.</p>",
      "solutionHtml": "<ul>\n        <li><b>Student — Primary:</b> uses the system to register/drop courses and view courses.</li>\n        <li><b>Academic Staff — Primary:</b> manages courses and handles registration requests.</li>\n        <li><b>University Payment System — Supporting:</b> provides payment verification services to the system.</li>\n        <li><b>Student Information System — Supporting:</b> provides student and academic information.</li>\n        <li><b>Academic Administration — Offstage:</b> has an interest in correct registration and university rules.</li>\n        <li><b>University Management — Offstage:</b> has an interest in registration reports and academic planning.</li>\n      </ul>\n      <p><b>Method:</b> who has a goal fulfilled by the system → primary; who provides a service <i>to</i> the system → supporting; who cares about the outcome but doesn't use the system → offstage.</p>"
    },
    {
      "type": "example",
      "title": "Worked example — Hospital Appointment & Prescription System",
      "bodyHtml": "<p><i>Patients search doctors, book/cancel appointments and view history. Doctors view appointments and issue e-prescriptions. The system communicates with the Hospital Payment System and an SMS Notification Service. Hospital Administration and the Ministry of Health have interests but don't directly use the system.</i> Identify the actor types.</p>",
      "solutionHtml": "<ul>\n        <li><b>Patient — Primary:</b> books/cancels appointments and views appointment information.</li>\n        <li><b>Doctor — Primary:</b> manages appointments and issues prescriptions.</li>\n        <li><b>Hospital Payment System — Supporting:</b> processes appointment payments.</li>\n        <li><b>SMS Notification Service — Supporting:</b> sends appointment reminders.</li>\n        <li><b>Hospital Administration — Offstage:</b> interest in proper appointment management and policies.</li>\n        <li><b>Ministry of Health — Offstage:</b> interest in regulatory compliance.</li>\n      </ul>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "4-5-system-boundary",
      "text": "4.5 System boundary"
    },
    {
      "type": "paragraph",
      "html": "The <b>system boundary</b> defines <b>what is inside the system and what is outside</b>. The <b>use cases are inside</b> the boundary; the <b>actors are outside</b> it. Example — Online Shopping System: inside are Search Products, Place Order, Make Payment, Track Order; outside are the Customer, Payment Gateway and Delivery Company."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "4-6-actor-goal-list-and-identifying-actors",
      "text": "4.6 Actor-goal list and identifying actors"
    },
    {
      "type": "paragraph",
      "html": "After identifying actors, record each actor's goals in an <b>actor-goal list</b> — it is recommended to record <b>primary actors and their user goals</b>. Example for a University Library System:"
    },
    {
      "type": "table",
      "head": [
        "Actor",
        "Goals"
      ],
      "rows": [
        [
          "Student",
          "Search Books · Borrow Books · Return Books · View Borrowed Books"
        ],
        [
          "Librarian",
          "Add Book · Remove Book · Update Book"
        ],
        [
          "Payment System",
          "Process Fine Payment"
        ]
      ]
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "five-questions-for-identifying-actors",
      "text": "Five questions for identifying actors"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "<b>Who directly uses the system?</b> (e.g. Student)",
        "<b>Who has different roles or permissions?</b> (e.g. Student, Librarian, Administrator)",
        "<b>Who interacts with the system during errors?</b> (e.g. Customer Service Officer)",
        "<b>Who provides a service to the system?</b> (e.g. Payment Gateway)",
        "<b>Who is affected by the system's results?</b> (e.g. Tax Authority)"
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "4-7-from-goals-to-use-cases",
      "text": "4.7 From goals to use cases"
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Basic rule",
      "html": "<b>One user goal → one use case.</b> Student goals Search Book, Borrow Book, Return Book, View Borrowed Books each become a separate use case."
    },
    {
      "type": "callout",
      "variant": "warn",
      "title": "Exception — CRUD",
      "html": "Sometimes several goals can be combined. <b>CRUD</b> = Create, Read, Update, Delete. Instead of Create User, View User, Update User, Delete User → use a single use case <b>Manage Users</b>."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "4-8-naming-a-use-case-verb-object",
      "text": "4.8 Naming a use case — verb + object"
    },
    {
      "type": "table",
      "head": [
        "✓ Good (verb + object)",
        "✗ Avoid"
      ],
      "rows": [
        [
          "Purchase Concert Ticket · Borrow Book · Search Book · Place Order · Register Course",
          "Ticket Purchase · Ticket Order · Purchase · Pay"
        ]
      ]
    },
    {
      "type": "paragraph",
      "html": "A use case name should: represent <b>one clear goal</b>, be from the <b>actor's viewpoint</b>, use <b>active voice</b>, and usually take the <b>verb–object</b> form."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "4-9-main-success-scenario-and-extensions",
      "text": "4.9 Main success scenario and extensions"
    },
    {
      "type": "paragraph",
      "html": "The <b>main success scenario</b> answers: <i>what happens when everything goes correctly?</i>"
    },
    {
      "type": "example",
      "title": "Main success scenario — Borrow Book",
      "bodyHtml": "<ol>\n      <li>Student searches for a book.</li>\n      <li>System displays available books.</li>\n      <li>Student selects a book.</li>\n      <li>System checks availability.</li>\n      <li>System records the borrowing.</li>\n      <li>System displays the due date.</li>\n    </ol>",
      "solutionHtml": null
    },
    {
      "type": "paragraph",
      "html": "<b>Extensions (alternate / failure scenarios)</b> answer: <i>what can go wrong?</i>"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Extension 1 — Book unavailable:</b> system finds the book is unavailable and displays \"Book currently unavailable.\"",
        "<b>Extension 2 — Student has unpaid fine:</b> system checks the account, finds an unpaid fine, and prevents borrowing.",
        "<b>Extension 3 — Borrowing limit reached:</b> system informs the student the limit has been reached."
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "4-10-use-case-formats-brief-casual-fully-dressed",
      "text": "4.10 Use case formats — brief, casual, fully dressed"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">1 · Brief</div><div class=\"f-b\">A very short summary paragraph. Useful for simple, well-understood functionality.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">2 · Casual</div><div class=\"f-b\">An informal description containing several scenarios, written as normal paragraphs.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">3 · Fully Dressed</div><div class=\"f-b\">A detailed, <b>structured</b> description with steps, variations and supporting information. The most important format.</div></div>\n  </div>",
      "alt": "Formula reference cards"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "brief-example",
      "text": "Brief example"
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Use Case: Borrow Book (brief)",
      "html": "A student searches for a book, selects an available book and borrows it. The system records the borrowing and displays the due date."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "casual-example",
      "text": "Casual example"
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Use Case: Handle Return (casual)",
      "html": "A customer arrives at the checkout with items to return. The cashier records the returned items using the POS system. If the refund is approved, the system processes the refund. If the refund is rejected, the cashier uses another refund method. If the item cannot be identified, the system asks the cashier to enter the item code manually."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "4-11-the-fully-dressed-use-case",
      "text": "4.11 The fully dressed use case"
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Template — memorize the fields",
      "html": "A fully dressed use case contains: <b>Use Case Name · Primary Actor · Stakeholders and Interests · Preconditions · Main Success Scenario · Extensions · Postconditions (Success Guarantees)</b>."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "preconditions-and-postconditions",
      "text": "Preconditions and postconditions"
    },
    {
      "type": "paragraph",
      "html": "A <b>precondition</b> is something that must <b>already be true before the use case starts</b>. A <b>postcondition</b> describes what should be <b>true after the use case finishes</b> (on successful completion)."
    },
    {
      "type": "table",
      "head": [
        "Use case",
        "Preconditions",
        "Postconditions (success guarantees)"
      ],
      "rows": [
        [
          "Borrow Book",
          "Student is logged in · Book exists in the library system",
          "Book is marked as borrowed · Student's borrowed-book list is updated · Due date is recorded"
        ],
        [
          "Withdraw Cash",
          "ATM is operational · Customer has inserted a valid card",
          "Cash is dispensed · Account balance is updated"
        ],
        [
          "Place Order",
          "Customer is logged in · Products are available",
          "Order is created · Payment is recorded · Product quantity is updated · Order confirmation is generated"
        ]
      ]
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "stakeholders-and-interests-place-order-example",
      "text": "Stakeholders and interests — Place Order example"
    },
    {
      "type": "table",
      "head": [
        "Stakeholder",
        "Interest"
      ],
      "rows": [
        [
          "Customer",
          "Wants order placed successfully"
        ],
        [
          "Store",
          "Wants correct order and payment"
        ],
        [
          "Payment provider",
          "Wants valid payment"
        ],
        [
          "Delivery company",
          "Needs correct delivery information"
        ],
        [
          "Tax authority",
          "Wants correct tax calculation"
        ]
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "4-12-worked-example-fully-dressed-use-case",
      "text": "4.12 Worked example — fully dressed use case"
    },
    {
      "type": "example",
      "title": "Fully dressed — Use Case: Withdraw Cash (ATM)",
      "bodyHtml": "<p><i>An ATM System allows customers to withdraw cash. The customer inserts an ATM card and enters a PIN. If the PIN is correct, the customer enters the amount. The system checks balance and daily limit. If valid, the ATM dispenses cash and updates the balance. Wrong PIN → error, and after three incorrect attempts the card is blocked. Insufficient funds or exceeded daily limit → withdrawal rejected.</i></p>",
      "solutionHtml": "<ul style=\"list-style:none;margin-left:0\">\n        <li><b>Use Case Name:</b> Withdraw Cash</li>\n        <li><b>Primary Actor:</b> Customer</li>\n        <li><b>Stakeholders and Interests:</b> Customer — wants cash quickly and safely; Bank — wants only valid withdrawals, correct balance updates, and protection from fraud.</li>\n        <li><b>Preconditions:</b> ATM is operational; customer has inserted a valid ATM card.</li>\n        <li><b>Main Success Scenario:</b>\n          <ol>\n            <li>Customer inserts the ATM card.</li>\n            <li>System reads the card and asks for the PIN.</li>\n            <li>Customer enters the PIN.</li>\n            <li>System validates the PIN.</li>\n            <li>System displays transaction options; customer selects \"Withdraw Cash\".</li>\n            <li>Customer enters the amount.</li>\n            <li>System checks the account balance and the daily withdrawal limit.</li>\n            <li>System dispenses the cash.</li>\n            <li>System updates the account balance.</li>\n            <li>System returns/ejects the card and prints the receipt.</li>\n          </ol>\n        </li>\n        <li><b>Extensions:</b>\n          <ul>\n            <li><b>4a. Incorrect PIN:</b> system displays an error and allows another attempt; after <b>three</b> incorrect attempts the card is <b>blocked</b>.</li>\n            <li><b>7a. Insufficient balance:</b> system informs the customer and rejects the withdrawal.</li>\n            <li><b>7b. Daily limit exceeded:</b> system informs the customer the daily limit has been exceeded and rejects the withdrawal.</li>\n          </ul>\n        </li>\n        <li><b>Postconditions:</b> cash is dispensed; account balance is updated; transaction is recorded.</li>\n      </ul>"
    },
    {
      "type": "example",
      "title": "Practice — write fully dressed use cases",
      "bodyHtml": "<p>The lecture's activity sheet contains 12 scenarios. Attempt any of these, then compare with the structure of the worked example above:</p>\n    <ol>\n      <li><b>Search Book</b> (Online Library — login, title/author/ISBN search, invalid details, no results)</li>\n      <li><b>Withdraw Cash</b> (ATM — solved above)</li>\n      <li><b>Place Order</b> (Online Shopping — cart, checkout, payment failure → choose another method, out of stock)</li>\n      <li><b>Register for Course</b> (University — prerequisites, seat availability)</li>\n      <li><b>Book Appointment</b> (Hospital — doctor, date, slots, slot becomes unavailable)</li>\n      <li><b>Login to Online Banking</b> (3 failed attempts → account locked; Forgot Password via email/SMS)</li>\n      <li><b>Place Food Order</b> (item unavailable → remove/replace; payment fails → order not confirmed)</li>\n      <li><b>Book Hotel Room</b> (dates, rooms, payment; no rooms available)</li>\n      <li><b>Request Prescription Refill</b> (validity, refill limit, doctor approval)</li>\n      <li><b>Book Cinema Ticket</b> (movie, date, show time, seats; seats already booked → reselect; payment fails)</li>\n      <li><b>Register for Examination</b> (eligibility, deadline, already registered)</li>\n      <li><b>Transfer Money</b> (source account, recipient, amount; insufficient balance, invalid recipient, extra authentication fails)</li>\n    </ol>",
      "solutionHtml": "<ol>\n        <li><b>Find the system</b> — what system are we studying?</li>\n        <li><b>Find actors</b> — who uses it?</li>\n        <li><b>Find goals</b> — what does each actor want to achieve?</li>\n        <li><b>Convert goals into use cases</b> — use Verb + Object naming.</li>\n        <li><b>Find scenarios</b> — what normally happens? (main success scenario)</li>\n        <li><b>Find exceptions</b> — what can go wrong? (extensions)</li>\n        <li><b>Choose the required format</b> — Brief (short paragraph) / Casual (informal scenarios) / Fully dressed (structured template).</li>\n      </ol>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "4-13-quick-comparison-table-revision-gold",
      "text": "4.13 Quick comparison table (revision gold)"
    },
    {
      "type": "table",
      "head": [
        "Concept",
        "Simple meaning",
        "Example"
      ],
      "rows": [
        [
          "System",
          "What we are studying",
          "Library System"
        ],
        [
          "Actor",
          "Who interacts with the system (by role)",
          "Student"
        ],
        [
          "Primary actor",
          "Has the goal",
          "Student"
        ],
        [
          "Supporting actor",
          "Provides a service",
          "Payment Gateway"
        ],
        [
          "Offstage actor",
          "Has an interest, no direct interaction",
          "Tax Authority"
        ],
        [
          "Goal",
          "What the actor wants",
          "Borrow Book"
        ],
        [
          "Use case",
          "Complete goal/process (collection of scenarios)",
          "Borrow Book"
        ],
        [
          "Scenario",
          "One particular path",
          "Successfully borrow book"
        ],
        [
          "Main success scenario",
          "Normal successful flow",
          "Book available → borrowed"
        ],
        [
          "Extension",
          "Alternative/failure flow",
          "Book unavailable"
        ],
        [
          "Precondition",
          "Must be true before starting",
          "Student logged in"
        ],
        [
          "Postcondition",
          "True after completion",
          "Book marked as borrowed"
        ],
        [
          "System boundary",
          "Separates system from outside",
          "Library system boundary"
        ],
        [
          "Brief",
          "Very short description",
          "One paragraph"
        ],
        [
          "Casual",
          "Informal, multiple scenarios",
          "Short paragraphs"
        ],
        [
          "Fully dressed",
          "Detailed structured description",
          "Template"
        ]
      ]
    },
    {
      "type": "quiz",
      "title": "Topic 4 Quiz — Use Case Modeling",
      "count": 8,
      "quizSlug": "04-use-case-modeling"
    }
  ]
};

export default chapter;
