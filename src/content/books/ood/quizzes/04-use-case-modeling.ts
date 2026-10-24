import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "04-use-case-modeling",
  "title": "Topic 4 Quiz: Use Case Modeling",
  "questions": [
    {
      "prompt": "1. Use case modeling is primarily a technique for:",
      "options": [
        "Designing database schemas",
        "Testing implemented code",
        "Identifying, eliciting and documenting functional requirements",
        "Choosing a programming language"
      ],
      "answer": 2,
      "explanation": "Use case modeling is a requirements engineering technique; it captures functional requirements from the user's perspective. (And remember: use cases are primarily written descriptions, not diagrams.)"
    },
    {
      "prompt": "2. \"The ATM shall validate the PIN within 3 seconds.\" What kind of requirement is this?",
      "options": [
        "Functional requirement",
        "Non-functional requirement",
        "Precondition",
        "Postcondition"
      ],
      "answer": 1,
      "explanation": "The time constraint (\"within 3 seconds\") makes it non-functional. Without the constraint, \"Validate PIN\" would be functional."
    },
    {
      "prompt": "3. In an online shopping system, the Payment Gateway authorizes payments for the system. It is a:",
      "options": [
        "Supporting actor",
        "Primary actor",
        "Offstage actor",
        "System boundary"
      ],
      "answer": 0,
      "explanation": "The payment gateway provides a service TO the system; it isn't using the system for its own goal, so it is a supporting actor."
    },
    {
      "prompt": "4. Which statement about use case vs scenario is correct?",
      "options": [
        "A scenario is a collection of use cases",
        "They are identical",
        "A use case is one path; a scenario is the whole story",
        "A use case is a collection of related scenarios; a scenario is one specific path"
      ],
      "answer": 3,
      "explanation": "Withdraw Cash (use case) contains the scenarios: successful withdrawal, wrong PIN, insufficient balance, daily limit exceeded."
    },
    {
      "prompt": "5. Which use case name follows the recommended convention?",
      "options": [
        "Ticket Purchase",
        "Purchase Concert Ticket",
        "Paying",
        "Order Management Subsystem"
      ],
      "answer": 1,
      "explanation": "Use verb + object, active voice, from the actor's viewpoint: \"Purchase Concert Ticket\". Avoid noun-only names (\"Ticket Purchase\") and bare verbs (\"Pay\")."
    },
    {
      "prompt": "6. \"The student must be logged in before borrowing a book\" is expressed in a fully dressed use case as:",
      "options": [
        "An extension",
        "A postcondition",
        "A precondition",
        "A stakeholder interest"
      ],
      "answer": 2,
      "explanation": "A precondition is something that must already be true before the use case starts. Postconditions state what is true after successful completion (e.g. book marked as borrowed, due date recorded)."
    },
    {
      "prompt": "7. Instead of Create User, View User, Update User and Delete User, the lecture recommends one use case called:",
      "options": [
        "Manage Users",
        "User CRUD Engine",
        "Handle Everything",
        "Four separate use cases must always be kept"
      ],
      "answer": 0,
      "explanation": "The CRUD exception: Create, Read, Update, Delete goals on the same entity can be combined into one \"Manage X\" use case."
    },
    {
      "prompt": "8. Which is <b>NOT</b> a field of a fully dressed use case?",
      "options": [
        "Stakeholders and interests",
        "Main success scenario",
        "Extensions",
        "Class attributes and operations"
      ],
      "answer": 3,
      "explanation": "Fully dressed fields: Use Case Name, Primary Actor, Stakeholders &amp; Interests, Preconditions, Main Success Scenario, Extensions, Postconditions/Success Guarantees. Class attributes belong to class diagrams."
    }
  ]
};

export default quiz;
