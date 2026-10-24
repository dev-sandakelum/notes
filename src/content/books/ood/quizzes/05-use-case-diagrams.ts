import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "05-use-case-diagrams",
  "title": "Topic 5 Quiz: Use Case Diagrams",
  "questions": [
    {
      "prompt": "1. In a use case diagram, use cases are drawn as:",
      "options": [
        "Rectangles with three compartments",
        "Ovals inside the system boundary",
        "Stick figures outside the boundary",
        "Diamonds"
      ],
      "answer": 1,
      "explanation": "Actors = stick figures (outside), use cases = ovals (inside the boundary rectangle), system name at the top of the rectangle."
    },
    {
      "prompt": "2. Every deposit must update the account balance. The correct relationship is:",
      "options": [
        "Deposit Funds «include» Update Balance",
        "Deposit Funds «extend» Update Balance",
        "Update Balance «include» Deposit Funds",
        "Update Balance generalizes Deposit Funds"
      ],
      "answer": 0,
      "explanation": "Balance updating is mandatory in every deposit = include, drawn from the base (Deposit Funds) to the included use case (Update Balance)."
    },
    {
      "prompt": "3. A bonus is calculated only for certain deposits. Calculate Bonus relates to Deposit Funds as:",
      "options": [
        "Deposit Funds «include» Calculate Bonus",
        "An association from the actor",
        "Calculate Bonus «extend» Deposit Funds",
        "Calculate Bonus generalizes Deposit Funds"
      ],
      "answer": 2,
      "explanation": "Extra, conditional behavior = extend. Note the direction: from the extension (Calculate Bonus) to the base (Deposit Funds)."
    },
    {
      "prompt": "4. Which relationship arrow direction is correct?",
      "options": [
        "«include»: included → base",
        "«extend»: base → extension",
        "Generalization: parent → child",
        "Generalization: child → parent (triangular arrowhead)"
      ],
      "answer": 3,
      "explanation": "Include: base → included. Extend: extension → base. Generalization: child → parent, with a closed triangular arrowhead at the parent."
    },
    {
      "prompt": "5. \"Search\" has children \"Search by Author\" and \"Search by Call Number\". This is an example of:",
      "options": [
        "«include»",
        "Generalization",
        "Association",
        "Dependency"
      ],
      "answer": 1,
      "explanation": "The children are specialized versions of the parent, an is-a relationship between use cases = generalization."
    },
    {
      "prompt": "6. The main purpose of extracting Login as an included use case is:",
      "options": [
        "Reusing common, mandatory behavior across several use cases",
        "Making the diagram look simpler by hiding actors",
        "Adding optional behavior to the login",
        "Replacing the system boundary"
      ],
      "answer": 0,
      "explanation": "When several use cases (Check Order Status, View Profile, Change Password) all must log in, Login is separated as a reusable included use case."
    },
    {
      "prompt": "7. An external payment system appears in a use case diagram as:",
      "options": [
        "An oval inside the boundary",
        "It cannot appear at all",
        "A rectangle labelled «actor» (or stick figure) outside the boundary",
        "A dashed arrow"
      ],
      "answer": 2,
      "explanation": "An actor can be a person, system or device. External systems are shown with the «actor» rectangle notation; all actors sit outside the system boundary."
    },
    {
      "prompt": "8. A use case diagram gives the best high-level view of:",
      "options": [
        "Object interaction timing",
        "The functional requirements of the system",
        "Database table structure",
        "Deployment hardware"
      ],
      "answer": 1,
      "explanation": "Use case diagrams show who interacts with the system, what it can do, and how they are related, a high-level view of the functional requirements."
    }
  ]
};

export default quiz;
