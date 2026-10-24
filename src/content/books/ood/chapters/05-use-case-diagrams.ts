import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "05-use-case-diagrams",
    "number": 5,
    "title": "Use case diagrams",
    "subtitle": "Week 5 · Use Case Diagrams",
    "kind": "topic",
    "words": 1162,
    "minutes": 6
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "5-1-what-is-a-use-case-diagram",
      "text": "5.1 what is a use case diagram?"
    },
    {
      "type": "paragraph",
      "html": "A <b>Use Case Diagram</b> is a UML diagram used to show <b>who interacts with a system</b>, <b>what the system can do</b>, and <b>how actors and system functions are related</b>. It gives a <b>high-level view of the functional requirements</b> of a system."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "5-2-the-four-main-components",
      "text": "5.2 the four main components"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">1 · Actor</div><div class=\"f-b\">A person, system, device or other entity that interacts with the system, a <b>role</b>, not a specific person (<code>Doctor</code> ✓, <code>Dr. John</code> ✗). Drawn as a <b>stick figure</b> for humans, or a rectangle labelled <code>«actor»</code> for an external system.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">2 · Use case</div><div class=\"f-b\">Something an actor wants the system to do, short, meaningful, action-like names. Drawn as an <b>oval</b>.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">3 · System boundary</div><div class=\"f-b\">A <b>rectangle surrounding the use cases</b>; the system name is written at the top. Shows what belongs to the system and what is outside.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">4 · Relationships</div><div class=\"f-b\"><b>Association</b>, <b>«include»</b>, <b>«extend»</b> and <b>generalization</b>, see below.</div></div>\n  </div>",
      "alt": "Formula reference cards"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "5-3-association",
      "text": "5.3 association"
    },
    {
      "type": "paragraph",
      "html": "An <b>association</b> shows that an actor interacts with a use case. Notation: a <b>solid line</b> between actor and use case. <code>Customer ─── Place Order</code>. A customer can be associated with several use cases: Search Product, Place Order, Cancel Order, Check Order Status."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "identifying-actors-and-use-cases",
      "text": "Identifying actors and use cases"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "<b>Identify the actors</b>: who or what interacts with the system?",
        "<b>Identify what each actor wants to do</b>, these become candidate use cases."
      ]
    },
    {
      "type": "paragraph",
      "html": "Example. University System, actor <i>Student</i>: Enroll in Course, View Results, View Timetable, Request Transcript."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "5-4-include-the-must-relationship",
      "text": "5.4 «include»: the MUST relationship"
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "«include» = MUST happen",
      "html": "<b>«include»</b> is used when one use case <b>must use the behavior of another use case</b>; the included behavior is <b>mandatory</b>. The base use case cannot properly complete without the included use case.<br>\n    <b>Direction: Base (client) → Included (supplier)</b>, drawn as a dashed arrow: <code>Check Order Status –«include»→ Login</code>."
    },
    {
      "type": "paragraph",
      "html": "Example: if several functions require login. Check Order Status → Login, View Profile → Login, Change Password → Login, then <b>Login can be separated as a reusable use case</b> included by each of them. That reuse of common, mandatory behavior is the whole point of include."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "5-5-extend-the-extra-relationship",
      "text": "5.5 «extend»: the EXTRA relationship"
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "«extend» = ADD EXTRA BEHAVIOR",
      "html": "<b>«extend»</b> is used when one use case <b>adds extra behavior</b> to another existing use case, and the <b>base use case can still work without the extension</b>.<br>\n    <b>Direction: Extension → Base</b> (note: the arrow points the opposite way to include.): <code>Issue Fine –«extend»→ Return Book</code>."
    },
    {
      "type": "paragraph",
      "html": "Returning a book is possible by itself. If the book is overdue, <i>Issue Fine</i> adds additional behavior. The extension happens <b>only under a particular condition</b>."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "5-6-generalization-the-is-a-relationship",
      "text": "5.6 generalization: the IS-A relationship"
    },
    {
      "type": "paragraph",
      "html": "<b>Generalization</b> represents an <b>\"is-a\" relationship</b> between use cases, creating a parent–child relationship where the child is a more specific version of the parent. Example: <i>Search</i> is the parent; <i>Search by Author</i> and <i>Search by Call Number</i> are children. Notation: a <b>directed arrow with a triangular arrowhead</b>, pointing <b>from child to parent</b>."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "5-7-relationship-summary-the-critical-include-vs-extend-comparison",
      "text": "5.7 relationship summary + the critical include-vs-extend comparison"
    },
    {
      "type": "table",
      "head": [
        "Relationship",
        "Meaning",
        "Direction",
        "Key idea"
      ],
      "rows": [
        [
          "<b>Association</b>",
          "Actor interacts with use case",
          "Actor ↔ Use case",
          "Uses"
        ],
        [
          "<b>«include»</b>",
          "Required behavior is included",
          "Base → Included",
          "<b>MUST</b>"
        ],
        [
          "<b>«extend»</b>",
          "Additional behavior is added",
          "Extension → Base",
          "<b>EXTRA</b>"
        ],
        [
          "<b>Generalization</b>",
          "Specialized use case inherits from general one",
          "Child → Parent",
          "<b>IS-A</b>"
        ]
      ]
    },
    {
      "type": "table",
      "head": [
        "«include»",
        "«extend»"
      ],
      "rows": [
        [
          "<b>Mandatory</b>",
          "Additional / supplementary"
        ],
        [
          "Base use case <b>needs</b> the included behavior",
          "Base use case <b>can work independently</b>"
        ],
        [
          "Used to <b>reuse common behavior</b>",
          "Used to <b>add extra behavior</b> (often conditional)"
        ],
        [
          "Base → Included",
          "Extension → Base"
        ],
        [
          "Think <b>MUST</b>",
          "Think <b>EXTRA</b>"
        ]
      ]
    },
    {
      "type": "example",
      "title": "▁ mini example: online banking",
      "bodyHtml": "<ul>\n      <li><code>Deposit Funds –«include»→ Update Balance</code>. <b>include</b> because balance updating is <b>required</b> on every deposit.</li>\n      <li><code>Calculate Bonus –«extend»→ Deposit Funds</code>. <b>extend</b> because bonus calculation occurs <b>only under a particular condition</b>.</li>\n    </ul>",
      "solutionHtml": null
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "5-8-general-steps-to-draw-a-use-case-diagram",
      "text": "5.8 general steps to draw a use case diagram"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "Identify the system.",
        "Draw the system boundary.",
        "Identify all actors.",
        "Identify the use cases for each actor.",
        "Connect actors to use cases using <b>association</b>.",
        "Look for mandatory, reusable behavior → <b>«include»</b>.",
        "Look for additional/supplementary behavior → <b>«extend»</b>.",
        "Look for is-a relationships → <b>generalization</b>."
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "5-9-full-worked-example-online-banking-system-diagram",
      "text": "5.9 full worked example: online banking system (diagram)"
    },
    {
      "type": "paragraph",
      "html": "<b>Actors:</b> Customer, NRFC Customer, Bank Officer. <b>Use cases:</b> Open Account, Check Balance, Deposit Funds, Withdraw Funds, Transfer Funds, Convert Currency, Update Balance, Calculate Bonus. <b>Relationships:</b> Customer associates with Open Account, Check Balance, Deposit Funds, Withdraw Funds, Transfer Funds; NRFC Customer associates with Convert Currency and <b>generalizes from</b> Customer (an NRFC Customer is a Customer); Bank Officer associates with Open Account; Deposit/Withdraw/Transfer Funds all <b>«include» Update Balance</b>; Calculate Bonus <b>«extend»s</b> Deposit Funds."
    },
    {
      "type": "figure",
      "svg": "<svg viewBox=\"0 0 720 470\" role=\"img\" aria-label=\"Use case diagram for online banking system\">\n      <!-- system boundary -->\n      <rect x=\"150\" y=\"18\" width=\"430\" height=\"434\" rx=\"10\" class=\"uml-fill uml-stroke\" stroke-width=\"2\"></rect>\n      <text x=\"365\" y=\"42\" text-anchor=\"middle\" class=\"uml-text\" font-weight=\"800\" font-size=\"14\">Online Banking System</text>\n      <!-- Actor: Customer (left) -->\n      <circle cx=\"62\" cy=\"120\" r=\"11\" class=\"uml-stroke\" stroke-width=\"2\" fill=\"none\"></circle>\n      <line x1=\"62\" y1=\"131\" x2=\"62\" y2=\"163\" class=\"uml-stroke\" stroke-width=\"2\"></line>\n      <line x1=\"42\" y1=\"141\" x2=\"82\" y2=\"141\" class=\"uml-stroke\" stroke-width=\"2\"></line>\n      <line x1=\"62\" y1=\"163\" x2=\"44\" y2=\"190\" class=\"uml-stroke\" stroke-width=\"2\"></line>\n      <line x1=\"62\" y1=\"163\" x2=\"80\" y2=\"190\" class=\"uml-stroke\" stroke-width=\"2\"></line>\n      <text x=\"62\" y=\"208\" text-anchor=\"middle\" class=\"uml-text\" font-weight=\"700\">Customer</text>\n      <!-- Actor: NRFC Customer (left lower) -->\n      <circle cx=\"58\" cy=\"330\" r=\"11\" class=\"uml-stroke\" stroke-width=\"2\" fill=\"none\"></circle>\n      <line x1=\"58\" y1=\"341\" x2=\"58\" y2=\"373\" class=\"uml-stroke\" stroke-width=\"2\"></line>\n      <line x1=\"38\" y1=\"351\" x2=\"78\" y2=\"351\" class=\"uml-stroke\" stroke-width=\"2\"></line>\n      <line x1=\"58\" y1=\"373\" x2=\"40\" y2=\"400\" class=\"uml-stroke\" stroke-width=\"2\"></line>\n      <line x1=\"58\" y1=\"373\" x2=\"76\" y2=\"400\" class=\"uml-stroke\" stroke-width=\"2\"></line>\n      <text x=\"58\" y=\"418\" text-anchor=\"middle\" class=\"uml-text\" font-weight=\"700\">NRFC</text>\n      <text x=\"58\" y=\"432\" text-anchor=\"middle\" class=\"uml-text\" font-weight=\"700\">Customer</text>\n      <!-- Actor: Bank Officer (right) -->\n      <circle cx=\"662\" cy=\"80\" r=\"11\" class=\"uml-stroke\" stroke-width=\"2\" fill=\"none\"></circle>\n      <line x1=\"662\" y1=\"91\" x2=\"662\" y2=\"123\" class=\"uml-stroke\" stroke-width=\"2\"></line>\n      <line x1=\"642\" y1=\"101\" x2=\"682\" y2=\"101\" class=\"uml-stroke\" stroke-width=\"2\"></line>\n      <line x1=\"662\" y1=\"123\" x2=\"644\" y2=\"150\" class=\"uml-stroke\" stroke-width=\"2\"></line>\n      <line x1=\"662\" y1=\"123\" x2=\"680\" y2=\"150\" class=\"uml-stroke\" stroke-width=\"2\"></line>\n      <text x=\"662\" y=\"168\" text-anchor=\"middle\" class=\"uml-text\" font-weight=\"700\">Bank Officer</text>\n      <!-- use cases -->\n      <g>\n        <ellipse cx=\"300\" cy=\"80\" rx=\"62\" ry=\"24\" class=\"uml-soft uml-stroke\" stroke-width=\"1.6\"></ellipse>\n        <text x=\"300\" y=\"85\" text-anchor=\"middle\" class=\"uml-text\">Open Account</text>\n        <ellipse cx=\"300\" cy=\"150\" rx=\"62\" ry=\"24\" class=\"uml-soft uml-stroke\" stroke-width=\"1.6\"></ellipse>\n        <text x=\"300\" y=\"155\" text-anchor=\"middle\" class=\"uml-text\">Check Balance</text>\n        <ellipse cx=\"300\" cy=\"220\" rx=\"62\" ry=\"24\" class=\"uml-soft uml-stroke\" stroke-width=\"1.6\"></ellipse>\n        <text x=\"300\" y=\"225\" text-anchor=\"middle\" class=\"uml-text\">Deposit Funds</text>\n        <ellipse cx=\"300\" cy=\"290\" rx=\"62\" ry=\"24\" class=\"uml-soft uml-stroke\" stroke-width=\"1.6\"></ellipse>\n        <text x=\"300\" y=\"295\" text-anchor=\"middle\" class=\"uml-text\">Withdraw Funds</text>\n        <ellipse cx=\"300\" cy=\"360\" rx=\"62\" ry=\"24\" class=\"uml-soft uml-stroke\" stroke-width=\"1.6\"></ellipse>\n        <text x=\"300\" y=\"365\" text-anchor=\"middle\" class=\"uml-text\">Transfer Funds</text>\n        <ellipse cx=\"450\" cy=\"400\" rx=\"66\" ry=\"24\" class=\"uml-soft uml-stroke\" stroke-width=\"1.6\"></ellipse>\n        <text x=\"450\" y=\"405\" text-anchor=\"middle\" class=\"uml-text\">Convert Currency</text>\n        <ellipse cx=\"490\" cy=\"220\" rx=\"62\" ry=\"24\" class=\"uml-soft uml-stroke\" stroke-width=\"1.6\"></ellipse>\n        <text x=\"490\" y=\"225\" text-anchor=\"middle\" class=\"uml-text\">Update Balance</text>\n        <ellipse cx=\"490\" cy=\"130\" rx=\"62\" ry=\"24\" class=\"uml-soft uml-stroke\" stroke-width=\"1.6\"></ellipse>\n        <text x=\"490\" y=\"135\" text-anchor=\"middle\" class=\"uml-text\">Calculate Bonus</text>\n      </g>\n      <!-- associations from Customer -->\n      <line x1=\"88\" y1=\"128\" x2=\"238\" y2=\"82\" class=\"uml-line\"></line>\n      <line x1=\"88\" y1=\"138\" x2=\"238\" y2=\"148\" class=\"uml-line\"></line>\n      <line x1=\"88\" y1=\"148\" x2=\"238\" y2=\"216\" class=\"uml-line\"></line>\n      <line x1=\"88\" y1=\"158\" x2=\"238\" y2=\"286\" class=\"uml-line\"></line>\n      <line x1=\"88\" y1=\"168\" x2=\"238\" y2=\"356\" class=\"uml-line\"></line>\n      <!-- associations from Bank Officer -->\n      <line x1=\"640\" y1=\"88\" x2=\"362\" y2=\"82\" class=\"uml-line\"></line>\n      <!-- associations from NRFC (routed below the Transfer Funds oval) -->\n      <line x1=\"86\" y1=\"352\" x2=\"386\" y2=\"410\" class=\"uml-line\"></line>\n      <!-- generalization NRFC -> Customer (triangle toward parent) -->\n      <line x1=\"62\" y1=\"240\" x2=\"62\" y2=\"310\" class=\"uml-line\"></line>\n      <polygon points=\"62,240 54,254 70,254\" class=\"uml-arrow\"></polygon>\n      <!-- include arrows (dashed, base -> included) -->\n      <line x1=\"352\" y1=\"220\" x2=\"428\" y2=\"220\" class=\"uml-line uml-dashed\"></line>\n      <polygon points=\"428,220 414,213 414,227\" class=\"uml-arrow\"></polygon>\n      <text x=\"390\" y=\"212\" text-anchor=\"middle\" class=\"uml-muted\">«include»</text>\n      <line x1=\"340\" y1=\"268\" x2=\"452\" y2=\"240\" class=\"uml-line uml-dashed\"></line>\n      <polygon points=\"452,240 437,237 440,251\" class=\"uml-arrow\"></polygon>\n      <text x=\"404\" y=\"246\" text-anchor=\"middle\" class=\"uml-muted\">«include»</text>\n      <line x1=\"330\" y1=\"332\" x2=\"465\" y2=\"244\" class=\"uml-line uml-dashed\"></line>\n      <polygon points=\"465,244 450,242 454,256\" class=\"uml-arrow\"></polygon>\n      <text x=\"412\" y=\"296\" text-anchor=\"middle\" class=\"uml-muted\">«include»</text>\n      <!-- extend arrow (dashed, extension -> base) -->\n      <line x1=\"468\" y1=\"152\" x2=\"352\" y2=\"200\" class=\"uml-line uml-dashed\"></line>\n      <polygon points=\"352,200 367,192 367,206\" class=\"uml-arrow\"></polygon>\n      <text x=\"418\" y=\"166\" text-anchor=\"middle\" class=\"uml-muted\">«extend»</text>\n    </svg>",
      "alt": "Use case diagram for online banking system",
      "caption": "Online Banking use case diagram: note the dashed «include» arrows pointing at Update Balance, the «extend» arrow pointing FROM Calculate Bonus TO Deposit Funds, and the generalization triangle from NRFC Customer up to Customer"
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Direction traps: most common exam mistakes",
      "html": "<b>«include»</b> points <b>from the base TO the included</b> use case (Deposit Funds → Update Balance).<br>\n    <b>«extend»</b> points <b>from the extension TO the base</b> (Calculate Bonus → Deposit Funds); the opposite of what most students expect.<br>\n    <b>Generalization</b> triangle points <b>from child TO parent</b>."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "5-10-practice-case-studies",
      "text": "5.10 practice case studies"
    },
    {
      "type": "example",
      "title": "Practice: draw use case diagrams (selected from 25 lecture case studies)",
      "bodyHtml": "<p>For each scenario, identify actors, use cases, and any include/extend/generalization relationships:</p>\n    <ol>\n      <li><b>University Library:</b> students search/view/borrow/return/view borrowed books; librarian adds/removes/updates books.</li>\n      <li><b>ATM:</b> customer checks balance, withdraws, deposits, transfers; technician performs maintenance/repair.</li>\n      <li><b>Restaurant:</b> customers view menu, select food, place orders, pay; staff view orders and update status. <i>Customers must log in before ordering; every order includes payment processing.</i></li>\n      <li><b>Online Shopping:</b> customers search/view/add-to-cart/place orders/pay; store manager adds/updates/removes products. <i>Must log in before ordering; may apply a discount coupon.</i></li>\n      <li><b>Cinema Booking:</b> customers view movies/showtimes, select seats, book, pay; employee manages movies/showtimes/seats. <i>Must log in before booking; premium seat adds an extra charge.</i></li>\n      <li><b>Hospital:</b> patients register/search doctors/book/cancel/pay; doctors view appointments, update availability. <i>Two patient types: General and Insurance; insurance patients submit claims; late cancellation applies a fee.</i></li>\n      <li><b>Vehicle Rental:</b> customers search/reserve/pay/collect/return; staff manage vehicles, approve rentals, inspect returns. <i>Two customer types: Individual and Corporate (corporate request multiple vehicles); may add extra insurance; late return charge.</i></li>\n      <li><b>E-Learning:</b> students enroll, view lessons, submit assignments, take quizzes, receive certificates; instructors create courses/quizzes, evaluate; admins manage. <i>Free vs Paid courses (paid require payment before enrollment); late assignment marked late.</i></li>\n    </ol>",
      "solutionHtml": "<p><b>\"Must log in before X\"</b> → X <code>«include»</code> Login (mandatory reuse). <b>\"May apply coupon / premium charge / extra insurance\"</b> → that behavior <code>«extend»s</code> the base use case (optional extra). <b>\"Two types of X: A and B\"</b> → generalization (B is-a X). <b>\"System must check availability\"</b> → include (Check Availability). <b>\"Late fee / cancellation charge\"</b> → extend of the base action.</p>\n      <p><b>Full solution. Online Shopping (scenario 4):</b></p>\n      <ul>\n        <li><b>Actors:</b> Customer (primary), Store Manager (primary).</li>\n        <li><b>Use cases (Customer):</b> Search Products, View Product Details, Add to Cart, Place Order, Make Payment.</li>\n        <li><b>Use cases (Store Manager):</b> Add Product, Update Product, Remove Product (or Manage Products via CRUD).</li>\n        <li><b>Relationships:</b> Place Order «include» Login (must log in before placing an order); Place Order «include» Make Payment (every order includes payment); Apply Discount Coupon «extend» Place Order (optional, conditional).</li>\n        <li><b>Boundary:</b> rectangle labelled \"Online Shopping System\" containing all use cases; actors outside.</li>\n      </ul>"
    },
    {
      "type": "quiz",
      "title": "Topic 5 Quiz: Use Case Diagrams",
      "count": 8,
      "quizSlug": "05-use-case-diagrams"
    }
  ]
};

export default chapter;
