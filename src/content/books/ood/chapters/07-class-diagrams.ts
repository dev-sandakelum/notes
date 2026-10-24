import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "07-class-diagrams",
    "number": 7,
    "title": "Class diagrams",
    "subtitle": "Week 7 · Class Diagrams + Activity Sheet 1",
    "kind": "topic",
    "words": 1929,
    "minutes": 10
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "7-1-domain-class-diagram-vs-design-class-diagram",
      "text": "7.1 domain class diagram vs design class diagram"
    },
    {
      "type": "table",
      "head": [
        "",
        "Domain Class Diagram",
        "Design Class Diagram"
      ],
      "rows": [
        [
          "<b>Models</b>",
          "The <b>concepts in the problem domain</b> (analysis view)",
          "The <b>actual software design</b>"
        ],
        [
          "<b>Shows</b>",
          "Usually only <b>class names and relationships</b>; helps define the <b>vocabulary</b> of the problem domain",
          "Software classes with <b>attributes, operations (methods), visibility</b> and detailed relationships"
        ],
        [
          "<b>Purpose</b>",
          "Understand the business concepts",
          "Blueprint for implementation: the <b>static structure</b> of the system (how it is organized, not how it behaves)"
        ]
      ]
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "How they connect",
      "html": "The design class model <b>extends</b> the domain class model by <b>refining attributes and relationships, and by refining operations</b>. Moving from domain to design is the transition from \"what the system must do\" to \"how it will do it\"."
    },
    {
      "type": "paragraph",
      "html": "A class diagram provides an overview of a system by illustrating its classes and the relationships between them; the attributes (data) and operations (methods) of each class, and serves as an effective way to describe the overall structure and architecture of system components. It is a <b>static view</b> of the system."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "7-2-finding-classes-noun-verb-analysis",
      "text": "7.2 finding classes: noun-verb analysis"
    },
    {
      "type": "paragraph",
      "html": "There are two common approaches for identifying classes: <b>Noun–Verb Analysis</b> and <b>CRC Analysis</b>. Noun–verb analysis works well because it is based on direct analysis of the language used in the problem domain:"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Nouns and noun phrases</b> in the text usually indicate <b>classes or attributes</b> of classes.",
        "<b>Verbs and verb phrases</b> indicate the <b>responsibilities or operations (methods)</b> of a class."
      ]
    },
    {
      "type": "callout",
      "variant": "warn",
      "title": "Watch out",
      "html": "<b>Hidden classes</b> are inherent to the problem domain but not explicitly mentioned: \"Students enroll in courses offered by the university\", nouns: Student, Course, University, but the system must also track <b>Enrollment</b> (enrollmentID, semester, grade), a hidden class.<br>\n    Beware <b>synonyms</b> (different words, same meaning) and <b>homonyms</b> (same word, multiple meanings, \"Order\" as purchase request vs \"order\" as command). Both can cause incorrect classes or operations."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "the-four-steps-of-noun-phrase-analysis-trading-system-example",
      "text": "The four steps of noun-phrase analysis (trading system example)"
    },
    {
      "type": "table",
      "head": [
        "Step",
        "What you do",
        "Example result"
      ],
      "rows": [
        [
          "<b>1 · Noun phrase identification</b>",
          "Underline all nouns/noun phrases in the requirements text. \"The Portfolio Manager shall be able to roll up portfolios on several levels. A Trader shall be able to place orders on behalf of a portfolio that generate one or more trades…\"",
          "Portfolio Manager, portfolios, levels, Trader, orders, portfolio, trades, purchase method, sell order, trade entry, cash flows, trade lot, actual/forecasted cash flows, postings, General Ledger, Assistant Trader, trade data, results…"
        ],
        [
          "<b>2 · Noun phrase consolidation</b>",
          "Make plural terms singular; eliminate duplicates; consolidate synonyms into a single term; place the list in alphabetical order.",
          "Assistant Trader · Cash Flow · General Ledger · Level · Order · Portfolio · Portfolio Manager · Posting · Purchase Method · Result · Sell Order · System · Trade · Trade Data · Trade Entry · Trade Lot · Trader"
        ],
        [
          "<b>3 · Noun phrase analysis</b>",
          "Remove: references to the system itself; nouns out of the project's scope; nouns that are too vague; nouns that represent <b>actions</b>; <b>actors</b> (move them to the use case diagrams instead).",
          "Candidate classes remain e.g. Portfolio, Trade, Order, Cash Flow, Posting, General Ledger…"
        ],
        [
          "<b>4 · Draw initial analysis class model</b>",
          "Draw a diagram with only class names, generalizations (inheritance) and associations. Verb-phrase analysis identifies relationships: \"Student enrolls in Course\", \"Professor teaches Course\" → candidate associations table.",
          "Initial class diagram with associations such as Trade → generates → Cash Flow"
        ]
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "7-3-finding-classes-crc-analysis",
      "text": "7.3 finding classes: CRC analysis"
    },
    {
      "type": "paragraph",
      "html": "<b>CRC</b> stands for <b>Class, Responsibilities and Collaborators</b>; it uses \"the world's most powerful analysis tool, the sticky note.\" A CRC card has three compartments:"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">Top compartment</div><div class=\"f-b\">Name of the candidate class.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Left compartment</div><div class=\"f-b\"><b>Responsibilities</b> of the class (what it must know and do).</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Right compartment</div><div class=\"f-b\"><b>Collaborators</b>, other classes that help this class fulfill its responsibilities; records the relationships between classes.</div></div>\n  </div>",
      "alt": "Formula reference cards"
    },
    {
      "type": "paragraph",
      "html": "CRC analysis is a <b>two-phase</b> activity: <b>Brainstorming</b> (gather information) then <b>Analysis</b> (examine and refine the information)."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "7-4-class-notation",
      "text": "7.4 class notation"
    },
    {
      "type": "paragraph",
      "html": "In a UML class diagram, each class is represented by a <b>rectangle divided into three compartments</b>: <b>Class Name</b>, <b>Attributes</b>, and <b>Operations</b>. A class is a description (blueprint) of a set of objects sharing the same attributes, operations, relationships and behavior. An <b>object</b> (instance of a class) is drawn the same way, but its identifier is always <b>underlined</b>."
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"ub-grid\">\n    <div class=\"umlbox\">\n      <div class=\"ub-name\">Student</div>\n      <div class=\"ub-attrs\">+ studentID : Integer<br>- password : String<br># email : String<br>~ address : String</div>\n      <div class=\"ub-ops\">+ registerCourse() : Void<br>+ dropCourse() : Void<br>- calculateGPA() : Float</div>\n    </div>\n    <div class=\"umlbox\">\n      <div class=\"ub-name\">Book</div>\n      <div class=\"ub-attrs\">- title : String<br>- author : String<br>- isbn : String<br>- available : Boolean</div>\n      <div class=\"ub-ops\">+ checkAvailability() : Boolean<br>+ reserve() : Boolean</div>\n    </div>\n  </div>",
      "alt": "UML / process diagram from the original notes"
    },
    {
      "type": "paragraph",
      "html": "<b>Syntax rules:</b>"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "Attribute: <code>visibility name : data_type</code>, e.g. <code>- balance : double</code>",
        "Operation: <code>visibility name(parameters) : return_type</code>, e.g. <code>+ calDistance(p1 : double) : double</code>"
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "7-5-visibility-modifiers",
      "text": "7.5 visibility modifiers"
    },
    {
      "type": "table",
      "head": [
        "Adornment",
        "Visibility",
        "Semantics"
      ],
      "rows": [
        [
          "<b>+</b>",
          "Public",
          "Accessible from <b>any other class</b>"
        ],
        [
          "<b>-</b>",
          "Private",
          "Accessible <b>only within the same class</b>"
        ],
        [
          "<b>#</b>",
          "Protected",
          "Accessible within the class <b>and its subclasses</b>"
        ],
        [
          "<b>~</b>",
          "Package (default)",
          "Accessible only to classes <b>within the same package</b>"
        ]
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "7-6-relationships",
      "text": "7.6 relationships"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "association",
      "text": "Association"
    },
    {
      "type": "paragraph",
      "html": "An <b>association</b> connects two classes and represents a <b>meaningful relationship</b> between them, a straight line between the classes. A class may even have an association with itself (a <b>reflexive association</b>, e.g. one Employee manages other Employees). Associations may be decorated with <b>multiplicity</b> to indicate how many objects participate in the relationship."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "directed-association",
      "text": "Directed association"
    },
    {
      "type": "paragraph",
      "html": "A <b>directed association</b> is a simple relationship where one class is linked to another with an explicit direction, one class <b>directly knows about or uses</b> another. It is one-directional and drawn as a line with an arrow pointing toward the class being referenced. Example: <code>Car → Engine</code>: a car knows about its engine, but an engine doesn't need to know about a specific car."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "multiplicity",
      "text": "Multiplicity"
    },
    {
      "type": "paragraph",
      "html": "<b>Multiplicity</b> specifies how many instances of class A can be associated with one instance of class B. It is applied to the <b>target end</b> of an association and denotes the number of links between each instance of the source class and instances of the target class."
    },
    {
      "type": "table",
      "head": [
        "Notation",
        "Meaning",
        "Example"
      ],
      "rows": [
        [
          "<code>1</code>",
          "Exactly one",
          "Each person has exactly one passport"
        ],
        [
          "<code>0..1</code>",
          "Zero or one (optional)",
          "A person may or may not own a car"
        ],
        [
          "<code>*</code> or <code>0..*</code>",
          "Zero or more (many)",
          "A library can have zero or more books"
        ],
        [
          "<code>1..*</code>",
          "One or more",
          "A teacher teaches one or more students"
        ],
        [
          "<code>m..n</code>",
          "Range (m to n)",
          "A team comprises 6..12 players"
        ]
      ]
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "generalization",
      "text": "Generalization"
    },
    {
      "type": "paragraph",
      "html": "The generalization icon denotes a <b>generalization/specialization</b> relationship (the <b>\"is-a\"</b> relationship). It appears as an association with a <b>closed (triangular) arrowhead</b>; the arrowhead points to the <b>superclass</b>, and the opposite end designates the <b>subclass</b>."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "dependency",
      "text": "Dependency"
    },
    {
      "type": "paragraph",
      "html": "A <b>dependency</b> is a temporary or weak relationship where one class depends on another but does <b>not own</b> it, drawn as a <b>dashed arrow</b> from the client class to the supplier class. Example: a <code>Student</code> depends on a <code>Library Card</code> to access books; the Library Card does not depend on the Student; it exists independently and can be reassigned to another student if needed."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "aggregation",
      "text": "Aggregation"
    },
    {
      "type": "paragraph",
      "html": "<b>Aggregation</b> is a constrained form of association; the <b>\"has-a\" / part-of</b> relationship where one class belongs to a collection. Drawn with an <b>empty (hollow) diamond</b> on the side of the <b>aggregate (the whole)</b>. Example: an Instructor is part of the Faculty."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "composition",
      "text": "Composition"
    },
    {
      "type": "paragraph",
      "html": "<b>Composition</b> is the <b>strong form of aggregation</b>; the components <b>cannot exist without the aggregate</b>. Drawn with a <b>solid (filled) diamond</b> on the side of the whole; the multiplicity at that end is <b>1</b>, because the parts have no meaning outside the whole, which <b>owns</b> them; the \"is entirely made of\" relationship. Example: a <b>House</b> is composed of one or more <b>Rooms</b>; each Room belongs to exactly one House; if the House is destroyed, the Rooms also cease to exist."
    },
    {
      "type": "figure",
      "svg": "<svg viewBox=\"0 0 700 330\" role=\"img\" aria-label=\"Class diagram relationship notation reference\">\n      <!-- association -->\n      <rect x=\"20\" y=\"34\" width=\"86\" height=\"34\" class=\"uml-fill uml-stroke\" stroke-width=\"1.7\"></rect>\n      <text x=\"63\" y=\"55\" text-anchor=\"middle\" class=\"uml-text\">Library</text>\n      <rect x=\"166\" y=\"34\" width=\"86\" height=\"34\" class=\"uml-fill uml-stroke\" stroke-width=\"1.7\"></rect>\n      <text x=\"209\" y=\"55\" text-anchor=\"middle\" class=\"uml-text\">Book</text>\n      <line x1=\"106\" y1=\"51\" x2=\"166\" y2=\"51\" class=\"uml-line\"></line>\n      <text x=\"136\" y=\"44\" text-anchor=\"middle\" class=\"uml-muted\">1</text>\n      <text x=\"136\" y=\"66\" text-anchor=\"middle\" class=\"uml-muted\">0..*</text>\n      <text x=\"136\" y=\"92\" text-anchor=\"middle\" class=\"uml-text\" font-weight=\"700\">Association</text>\n      <text x=\"136\" y=\"105\" text-anchor=\"middle\" class=\"uml-muted\">line + multiplicity</text>\n      <!-- directed association -->\n      <rect x=\"20\" y=\"136\" width=\"86\" height=\"34\" class=\"uml-fill uml-stroke\" stroke-width=\"1.7\"></rect>\n      <text x=\"63\" y=\"157\" text-anchor=\"middle\" class=\"uml-text\">Car</text>\n      <rect x=\"166\" y=\"136\" width=\"86\" height=\"34\" class=\"uml-fill uml-stroke\" stroke-width=\"1.7\"></rect>\n      <text x=\"209\" y=\"157\" text-anchor=\"middle\" class=\"uml-text\">Engine</text>\n      <line x1=\"106\" y1=\"153\" x2=\"158\" y2=\"153\" class=\"uml-line\"></line>\n      <polygon points=\"166,153 154,148 154,158\" class=\"uml-arrow\"></polygon>\n      <text x=\"136\" y=\"194\" text-anchor=\"middle\" class=\"uml-text\" font-weight=\"700\">Directed association</text>\n      <text x=\"136\" y=\"207\" text-anchor=\"middle\" class=\"uml-muted\">navigable one way</text>\n      <!-- generalization -->\n      <rect x=\"20\" y=\"248\" width=\"86\" height=\"34\" class=\"uml-fill uml-stroke\" stroke-width=\"1.7\"></rect>\n      <text x=\"63\" y=\"269\" text-anchor=\"middle\" class=\"uml-text\">Bike</text>\n      <rect x=\"166\" y=\"248\" width=\"86\" height=\"34\" class=\"uml-fill uml-stroke\" stroke-width=\"1.7\"></rect>\n      <text x=\"209\" y=\"269\" text-anchor=\"middle\" class=\"uml-text\">Vehicle</text>\n      <line x1=\"106\" y1=\"265\" x2=\"158\" y2=\"265\" class=\"uml-line\"></line>\n      <polygon points=\"166,265 150,257 150,273\" class=\"uml-arrow\" stroke=\"var(--axis)\"></polygon>\n      <text x=\"136\" y=\"300\" text-anchor=\"middle\" class=\"uml-text\" font-weight=\"700\">Generalization (is-a)</text>\n      <text x=\"136\" y=\"313\" text-anchor=\"middle\" class=\"uml-muted\">triangle at superclass</text>\n      <!-- dependency -->\n      <rect x=\"320\" y=\"34\" width=\"86\" height=\"34\" class=\"uml-fill uml-stroke\" stroke-width=\"1.7\"></rect>\n      <text x=\"363\" y=\"55\" text-anchor=\"middle\" class=\"uml-text\">Student</text>\n      <rect x=\"466\" y=\"34\" width=\"100\" height=\"34\" class=\"uml-fill uml-stroke\" stroke-width=\"1.7\"></rect>\n      <text x=\"516\" y=\"55\" text-anchor=\"middle\" class=\"uml-text\">LibraryCard</text>\n      <line x1=\"406\" y1=\"51\" x2=\"458\" y2=\"51\" class=\"uml-line uml-dashed\"></line>\n      <polygon points=\"466,51 454,46 454,56\" class=\"uml-arrow\"></polygon>\n      <text x=\"436\" y=\"92\" text-anchor=\"middle\" class=\"uml-text\" font-weight=\"700\">Dependency</text>\n      <text x=\"436\" y=\"105\" text-anchor=\"middle\" class=\"uml-muted\">dashed arrow, weak/temporary</text>\n      <!-- aggregation -->\n      <rect x=\"320\" y=\"136\" width=\"100\" height=\"34\" class=\"uml-fill uml-stroke\" stroke-width=\"1.7\"></rect>\n      <text x=\"370\" y=\"157\" text-anchor=\"middle\" class=\"uml-text\">Faculty</text>\n      <rect x=\"480\" y=\"136\" width=\"104\" height=\"34\" class=\"uml-fill uml-stroke\" stroke-width=\"1.7\"></rect>\n      <text x=\"532\" y=\"157\" text-anchor=\"middle\" class=\"uml-text\">Instructor</text>\n      <line x1=\"420\" y1=\"153\" x2=\"480\" y2=\"153\" class=\"uml-line\"></line>\n      <polygon points=\"420,153 436,146 436,160\" fill=\"none\" stroke=\"var(--axis)\" stroke-width=\"1.8\"></polygon>\n      <text x=\"436\" y=\"194\" text-anchor=\"middle\" class=\"uml-text\" font-weight=\"700\">Aggregation (has-a)</text>\n      <text x=\"436\" y=\"207\" text-anchor=\"middle\" class=\"uml-muted\">hollow diamond at the WHOLE</text>\n      <!-- composition -->\n      <rect x=\"320\" y=\"248\" width=\"86\" height=\"34\" class=\"uml-fill uml-stroke\" stroke-width=\"1.7\"></rect>\n      <text x=\"363\" y=\"269\" text-anchor=\"middle\" class=\"uml-text\">House</text>\n      <rect x=\"466\" y=\"248\" width=\"86\" height=\"34\" class=\"uml-fill uml-stroke\" stroke-width=\"1.7\"></rect>\n      <text x=\"509\" y=\"269\" text-anchor=\"middle\" class=\"uml-text\">Room</text>\n      <line x1=\"406\" y1=\"265\" x2=\"466\" y2=\"265\" class=\"uml-line\"></line>\n      <polygon points=\"406,265 422,258 422,272\" fill=\"var(--axis)\" stroke=\"none\"></polygon>\n      <text x=\"436\" y=\"290\" text-anchor=\"middle\" class=\"uml-muted\">1 &nbsp; 1..*</text>\n      <text x=\"436\" y=\"313\" text-anchor=\"middle\" class=\"uml-text\" font-weight=\"700\">Composition (owns)</text>\n      <!-- legend right -->\n      <rect x=\"620\" y=\"120\" width=\"66\" height=\"120\" rx=\"10\" class=\"uml-soft uml-stroke\" stroke-width=\"1.2\"></rect>\n      <text x=\"653\" y=\"142\" text-anchor=\"middle\" class=\"uml-muted\">diamond at</text>\n      <text x=\"653\" y=\"156\" text-anchor=\"middle\" class=\"uml-muted\">the whole /</text>\n      <text x=\"653\" y=\"170\" text-anchor=\"middle\" class=\"uml-muted\">owner side</text>\n      <line x1=\"630\" y1=\"188\" x2=\"676\" y2=\"188\" stroke=\"var(--axis)\" stroke-width=\"1.8\"></line>\n      <polygon points=\"676,188 664,183 664,193\" class=\"uml-arrow\"></polygon>\n      <text x=\"653\" y=\"204\" text-anchor=\"middle\" class=\"uml-muted\">dashed = weak</text>\n    </svg>",
      "alt": "Class diagram relationship notation reference",
      "caption": "The six class-diagram relationships: memorize line styles, arrowheads and where the diamond sits"
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Exam classic: aggregation vs composition",
      "html": "<b>Aggregation</b>: hollow diamond; the part <b>can exist independently</b> of the whole (an Instructor can exist without the Faculty; a Department exists even with no employees temporarily).<br>\n    <b>Composition</b>: solid diamond; parts <b>cannot exist without</b> the whole (Rooms cease to exist when the House is destroyed; multiplicity at the whole end is 1). Test phrase: if the whole is destroyed, do the parts die too?"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "7-7-worked-example-hockey-league",
      "text": "7.7 worked example: hockey league"
    },
    {
      "type": "example",
      "title": "Worked example: draw the class diagram",
      "bodyHtml": "<p><i>A hockey league is made up of at least four hockey teams. Each team comprises six to twelve players, and one player captains the team. A team has a name and a record. Players have a number and a position. Teams play games against each other; each game has a score and a location. Teams are sometimes led by a coach. A coach has a level of accreditation and several years of experience and can coach multiple teams. Coaches and players are people, and people have names and addresses. Assumptions: each player plays on only one team; each captain captains one team; each team plays in one league.</i></p>",
      "solutionHtml": "<ul>\n        <li><b>Classes and attributes:</b> League; Team (name, record); Player (number, position); Game (score, location); Coach (accreditation level, years of experience); Person (name, address).</li>\n        <li><b>Generalizations:</b> Coach is-a Person; Player is-a Person (arrowheads at Person). Both inherit name and address.</li>\n        <li><b>Associations + multiplicities:</b>\n          <ul>\n            <li>League 1 − 4..* Team (a league is made up of at least four teams; each team plays in one league).</li>\n            <li>Team 1 − 6..12 Player (each player plays on only one team).</li>\n            <li>Team 1 − 1 Player, association named \"captains\" (one player captains the team; each captain captains one team: could alternatively be a second named association between Player and Team).</li>\n            <li>Team plays Game: Game is associated with exactly 2 Teams (teams play games against each other).</li>\n            <li>Coach coaches multiple teams: Coach 1 − 0..* Team (\"teams are sometimes led by a coach\" → a team may have 0..1 coach).</li>\n          </ul>\n        </li>\n      </ul>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "7-8-practice-activities-activity-sheet-1",
      "text": "7.8 practice activities (activity sheet 1)"
    },
    {
      "type": "example",
      "title": "Practice: five class diagram activities",
      "bodyHtml": "<ol>\n      <li><b>Student–Course:</b> Student (studentID, name, email, DOB); Course (courseID, courseName, credits); a student enrolls in many courses; a course has many students. Show classes, attributes, methods, relationships and multiplicity.</li>\n      <li><b>Employee hierarchy:</b> Employee (employeeID, name, jobTitle, salary); an employee can manage other employees and report to one manager (reflexive association.).</li>\n      <li><b>Staff generalization:</b> StaffMember (staffID, name, email, basicSalary); Lecturer is-a StaffMember (+ specialization, can teach a course); TechnicalOfficer is-a StaffMember (+ technicalArea, manages lab equipment).</li>\n      <li><b>Department–Employee:</b> Department (deptID, name, location) has many employees; each employee belongs to one department; a department can exist with temporarily no employees; an employee can exist independently of a particular department (aggregation, not composition.).</li>\n      <li><b>House–Room:</b> House (houseID, address, floors) contains rooms; Room (roomNo, type, area) cannot exist independently; if the house is demolished the rooms are removed (composition.).</li>\n    </ol>",
      "solutionHtml": "<ol>\n        <li><b>Activity 1:</b> Student <code>0..*</code>. <code>0..*</code> Course (many-to-many association \"enrolls in\"). Student: + registerCourse(), + viewMyCourses(); Course: + displayEnrolledStudents(). Multiplicity: one student → many courses; one course → many students.</li>\n        <li><b>Activity 2:</b> Employee <code>1</code> \"manages\" <code>0..*</code> Employee: a <b>reflexive association</b> from Employee back to itself: each employee reports to exactly one manager (0..1 if some have none) and can have many subordinates. Methods: + assignSubordinate(), + viewSubordinates().</li>\n        <li><b>Activity 3:</b> Generalization arrows from Lecturer and TechnicalOfficer up to StaffMember. StaffMember: + viewDetails(). Lecturer: + specialization attribute, + teachCourse(). TechnicalOfficer: + technicalArea, + manageLabEquipment(). Common attributes (staffID, name, email, basicSalary) live in the parent.</li>\n        <li><b>Activity 4:</b> Aggregation: Department (hollow diamond) <code>1</code>. <code>0..*</code> Employee, because a department can exist with no employees and employees can exist independently of a particular department. Also Employee works on Projects (many-to-many).</li>\n        <li><b>Activity 5:</b> Composition: House (solid diamond) <code>1</code>. <code>1..*</code> Room. A room cannot exist independently of its house; demolishing the house removes the rooms. Methods on House: + addRoom(), + removeRoom(), + viewRooms().</li>\n      </ol>"
    },
    {
      "type": "quiz",
      "title": "Topic 7 Quiz: Class Diagrams",
      "count": 8,
      "quizSlug": "07-class-diagrams"
    }
  ]
};

export default chapter;
