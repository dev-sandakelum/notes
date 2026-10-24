import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "07-class-diagrams",
  "title": "Topic 7 Quiz: Class Diagrams",
  "questions": [
    {
      "prompt": "1. What is the main difference between a domain class diagram and a design class diagram?",
      "options": [
        "Domain diagrams show behavior; design diagrams show structure",
        "Domain diagrams show concepts (names + relationships); design diagrams add attributes, operations and visibility detail",
        "They are the same thing with different names",
        "Domain diagrams are drawn after coding"
      ],
      "answer": 1,
      "explanation": "A domain class diagram models problem-domain concepts and vocabulary (class names + relationships); a design class diagram models the actual software with attributes, operations, visibility and refined relationships."
    },
    {
      "prompt": "2. In noun-verb analysis, verbs and verb phrases in the requirements text usually indicate:",
      "options": [
        "Responsibilities or operations (methods) of a class",
        "Classes",
        "Actors only",
        "The system boundary"
      ],
      "answer": 0,
      "explanation": "Nouns → classes or attributes; verbs → responsibilities/operations. And remember hidden classes like Enrollment that the system needs but the text doesn't mention."
    },
    {
      "prompt": "3. What does the visibility modifier <code>#</code> mean?",
      "options": [
        "Public: accessible from any class",
        "Private: accessible only within the class",
        "Protected: accessible within the class and its subclasses",
        "Package: accessible within the same package"
      ],
      "answer": 2,
      "explanation": "+ public, - private, # protected (class + subclasses), ~ package (same package only)."
    },
    {
      "prompt": "4. A House is made of Rooms; if the house is demolished the rooms cease to exist. This is modeled with:",
      "options": [
        "An association with multiplicity 0..*",
        "Aggregation (hollow diamond)",
        "A dependency (dashed arrow)",
        "Composition (solid diamond at the House side)"
      ],
      "answer": 3,
      "explanation": "Parts that cannot exist without the whole = composition, drawn with a solid/filled diamond on the whole (owner) side, multiplicity 1 at that end."
    },
    {
      "prompt": "5. Multiplicity <code>0..1</code> on an association end means:",
      "options": [
        "At least one, possibly more",
        "Zero or one: the relationship is optional",
        "Exactly two",
        "Zero or more"
      ],
      "answer": 1,
      "explanation": "0..1 = optional single link (a person may or may not own a car). 1 = exactly one; * = many; 1..* = one or more."
    },
    {
      "prompt": "6. In the CRC technique, the \"Collaborators\" compartment records:",
      "options": [
        "Other classes that help this class fulfill its responsibilities",
        "The attributes of the class",
        "The use case names",
        "The actors of the system"
      ],
      "answer": 0,
      "explanation": "CRC = Class, Responsibilities, Collaborators. Collaborators are other classes the class works with, recording the relationships between classes."
    },
    {
      "prompt": "7. Which relationship is drawn with a <b>dashed arrow</b> from the client to the supplier?",
      "options": [
        "Generalization",
        "Composition",
        "Dependency",
        "Aggregation"
      ],
      "answer": 2,
      "explanation": "Dependency is a temporary/weak relationship (Student depends on Library Card), drawn as a dashed arrow. Generalization uses a solid line with a closed triangular arrowhead."
    },
    {
      "prompt": "8. \"An Employee can manage other Employees\" is modeled as:",
      "options": [
        "Composition between Employee and Manager",
        "A dependency between two different systems",
        "An include relationship",
        "A reflexive association from Employee to itself"
      ],
      "answer": 3,
      "explanation": "A class can have an association with itself, a reflexive association: Employee 1 manages 0..* Employee (each employee reports to one manager)."
    }
  ]
};

export default quiz;
