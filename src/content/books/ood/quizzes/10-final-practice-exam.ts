import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "10-final-practice-exam",
  "title": "Final Practice Exam",
  "questions": [
    {
      "prompt": "1. \"Viewing a system as a set of interacting and interrelated objects, each encapsulating its data and behavior\" defines:",
      "options": [
        "Structured programming",
        "Object orientation",
        "Agile development",
        "Requirements engineering"
      ],
      "answer": 1,
      "explanation": "This is the course's core definition of object orientation."
    },
    {
      "prompt": "2. In the SDLC, the phase that produces the \"blueprint for development\" by deciding architecture, database structure and UI is:",
      "options": [
        "Analysis",
        "Testing",
        "Deployment",
        "Design"
      ],
      "answer": 3,
      "explanation": "Design plans the system before implementation — architecture, database, UI, flow, components, technologies — acting as the blueprint."
    },
    {
      "prompt": "3. Which benefit of OO allows changes to be localized to particular classes?",
      "options": [
        "Maintainability",
        "Verbosity",
        "Strong typing",
        "Coupling"
      ],
      "answer": 0,
      "explanation": "Maintainability: changes can often be localized to particular classes/components. (The 8 benefits: simplicity, reusability, quality, speed, maintainability, scalability, modularity, modifiability.)"
    },
    {
      "prompt": "4. \"Students enroll in courses offered by the university.\" In noun-verb analysis, which hidden class should you consider adding?",
      "options": [
        "University",
        "Registration System",
        "Enrollment",
        "Enroll"
      ],
      "answer": 2,
      "explanation": "The system must track which student registered for which course, semester, grade — an Enrollment class (enrollmentID, semester, grade) that the text never mentions explicitly."
    },
    {
      "prompt": "5. An EmailService contains only validateEmail(), sendEmail() and formatEmail(). This class demonstrates:",
      "options": [
        "Low coupling",
        "High cohesion",
        "Polymorphism",
        "Composition"
      ],
      "answer": 1,
      "explanation": "All operations relate to one clear purpose = high cohesion. (Cohesion is about the inside of one class; coupling is between classes.)"
    },
    {
      "prompt": "6. The Order class calls methods on a Database interface that both MySQLDatabase and MongoDatabase implement. This is:",
      "options": [
        "High coupling",
        "Low cohesion",
        "Encapsulation violation",
        "Loose coupling via an abstraction"
      ],
      "answer": 3,
      "explanation": "Depending on an abstraction/interface rather than a specific implementation = loose coupling (like a USB-C charger working with many devices)."
    },
    {
      "prompt": "7. Which application is NOT ideally suited to OO development?",
      "options": [
        "A satellite orbit calculation engine performing one massive computation",
        "A library management system",
        "An online shopping platform",
        "A hospital appointment system"
      ],
      "answer": 0,
      "explanation": "Strongly algorithmic applications (satellite orbit calculations) and strongly database/CRUD-oriented systems are the two classic poor fits for OO."
    },
    {
      "prompt": "8. You need a diagram showing \"what the system is made of\". Choose:",
      "options": [
        "Sequence diagram",
        "Use case diagram",
        "Class diagram",
        "Activity diagram"
      ],
      "answer": 2,
      "explanation": "Structure = class diagram (a structural UML diagram showing classes, attributes, methods and relationships)."
    },
    {
      "prompt": "9. \"The system must support 500 students simultaneously without significant performance degradation\" is:",
      "options": [
        "A functional requirement",
        "A non-functional requirement",
        "A precondition",
        "An extension"
      ],
      "answer": 1,
      "explanation": "Performance/scalability constraints (timing, load, security, availability, technology) are non-functional requirements."
    },
    {
      "prompt": "10. In a hospital system, the SMS Notification Service sends reminders for the system. The Ministry of Health cares about compliance but never uses the system. Respectively, they are:",
      "options": [
        "Offstage, primary",
        "Primary, supporting",
        "Supporting, primary",
        "Supporting, offstage"
      ],
      "answer": 3,
      "explanation": "The SMS service provides a service TO the system (supporting); the Ministry has an interest without direct interaction (offstage)."
    },
    {
      "prompt": "11. Before booking a class, a gym member must log in; members may optionally request personal training. The correct relationships are:",
      "options": [
        "Book Class «include» Login; Request Personal Training «extend» Book Class",
        "Book Class «extend» Login; Request Personal Training «include» Book Class",
        "Login «include» Book Class; both are generalizations",
        "Both are associations with the trainer actor"
      ],
      "answer": 0,
      "explanation": "\"Must\" → include (mandatory); \"may optionally\" → extend (extra behavior on a condition)."
    },
    {
      "prompt": "12. Which use case name is correctly formed?",
      "options": [
        "Ticket",
        "Paying",
        "Register Course",
        "Course Registration Process"
      ],
      "answer": 2,
      "explanation": "Verb + object, active voice, actor's viewpoint: \"Register Course\"."
    },
    {
      "prompt": "13. In a fully dressed \"Borrow Book\" use case, \"Book is marked as borrowed and the due date is recorded\" belongs to:",
      "options": [
        "Preconditions",
        "Postconditions (success guarantees)",
        "Extensions",
        "Stakeholders"
      ],
      "answer": 1,
      "explanation": "What must be true AFTER the use case finishes successfully = postcondition."
    },
    {
      "prompt": "14. \"Customer has already inserted a valid card\" before Withdraw Cash starts is a:",
      "options": [
        "Guard on a fork",
        "Postcondition",
        "Main success scenario step",
        "Precondition"
      ],
      "answer": 3,
      "explanation": "Must already be true before the use case starts = precondition."
    },
    {
      "prompt": "15. An order workflow allows shipment to happen WHILE the invoice is being sent. You model this with:",
      "options": [
        "A fork node (concurrent flows) and a join node to synchronize",
        "A decision node with guards",
        "A merge node",
        "A flow final node"
      ],
      "answer": 0,
      "explanation": "\"During\" = concurrency: fork starts all flows at once; join waits for all to complete before continuing."
    },
    {
      "prompt": "16. Swimlanes in an activity diagram represent:",
      "options": [
        "Time intervals",
        "Message numbers",
        "Responsibility for performing actions (actors, roles, systems, components)",
        "Object states"
      ],
      "answer": 2,
      "explanation": "Partitions/swimlanes assign responsibility — e.g. Passenger lane vs Passenger Services lane in the airport check-in example."
    },
    {
      "prompt": "17. A Coach is-a Person; a Player is-a Person. In a class diagram this is drawn as:",
      "options": [
        "Dashed arrows from Person to Coach and Player",
        "Solid lines with closed triangular arrowheads pointing from Coach/Player to Person",
        "A solid diamond at Person",
        "Ovals inside the system boundary"
      ],
      "answer": 1,
      "explanation": "Generalization: solid line + closed triangular arrowhead at the SUPERclass; the opposite end is the subclass."
    },
    {
      "prompt": "18. A hockey league is made up of at least four teams. The multiplicity on the League–Team association (from League to Team) is:",
      "options": [
        "1",
        "0..*",
        "6..12",
        "4..*"
      ],
      "answer": 3,
      "explanation": "\"At least four\" = 4..* (a range with no upper bound). 6..12 is the Team–Player multiplicity in the same exercise."
    },
    {
      "prompt": "19. In a sequence diagram, the object that mediates between the boundary and the entity — organizing and scheduling interactions — is stereotyped as:",
      "options": [
        "«control»",
        "«actor»",
        "«boundary»",
        "«entity»"
      ],
      "answer": 0,
      "explanation": "Control = the manager/mediator (e.g. WithdrawalController between ATMInterface and BankAccount)."
    },
    {
      "prompt": "20. In a communication diagram, message <code>3: displayResult()</code> sent after <code>2: validateUser()</code> which itself contained <code>2.1: checkCredentials()</code>. How many top-level steps have occurred before displayResult()?",
      "options": [
        "1",
        "21",
        "2",
        "3"
      ],
      "answer": 2,
      "explanation": "Top-level steps: 1 (login), 2 (validateUser, with 2.1 nested inside it) — displayResult() is the 3rd top-level message, so 2 complete top-level steps precede it."
    }
  ]
};

export default quiz;
