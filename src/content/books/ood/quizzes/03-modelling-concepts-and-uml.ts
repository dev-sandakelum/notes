import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "03-modelling-concepts-and-uml",
  "title": "Topic 3 Quiz — Modelling & UML",
  "questions": [
    {
      "prompt": "1. What is the difference between a model and a diagram?",
      "options": [
        "They are two names for exactly the same thing",
        "A model is the whole simplified representation of the system; a diagram is one particular view of that model",
        "A diagram is the code; a model is the documentation",
        "A model shows behavior; a diagram shows structure"
      ],
      "answer": 1,
      "explanation": "Model = WHAT we are representing (the whole blueprint, e.g. the complete idea of the house). Diagram = HOW we show one part of it (floor plan, electrical, plumbing). Several diagrams can represent the same model."
    },
    {
      "prompt": "2. Which of the following is a <b>behavioral</b> UML diagram?",
      "options": [
        "Class diagram",
        "Deployment diagram",
        "Activity diagram",
        "Object diagram"
      ],
      "answer": 2,
      "explanation": "Behavioral diagrams: Use Case, Sequence, Activity, State Machine. Structural diagrams: Class, Object, Component, Deployment."
    },
    {
      "prompt": "3. Which are the three UML building blocks?",
      "options": [
        "Things, Relationships, Diagrams",
        "Classes, Objects, Messages",
        "Actors, Use Cases, Boundaries",
        "Nodes, Edges, Partitions"
      ],
      "answer": 0,
      "explanation": "UML's building blocks are Things (model elements), Relationships (connections between things) and Diagrams (grouped views of things + relationships)."
    },
    {
      "prompt": "4. A stakeholder asks: \"How do objects collaborate, step by step over time, to complete this use case?\" Which diagram do you show?",
      "options": [
        "Class diagram",
        "Use case diagram",
        "Deployment diagram",
        "Sequence diagram"
      ],
      "answer": 3,
      "explanation": "Sequence diagrams show the order of interactions between objects over time — exactly \"step by step collaboration\"."
    },
    {
      "prompt": "5. Which is <b>NOT</b> one of the general rules of modeling given in the lecture?",
      "options": [
        "Simplicity",
        "Encapsulation",
        "Consistency",
        "Hierarchical representation"
      ],
      "answer": 1,
      "explanation": "The four rules of modeling are Simplicity, Consistency, Completeness and Hierarchical representation. Encapsulation is an OO principle, not a modeling rule."
    },
    {
      "prompt": "6. For a Hospital Appointment System, which diagram best represents the <b>relationships</b> between Patient, Doctor and Appointment?",
      "options": [
        "Sequence diagram",
        "Activity diagram",
        "Class diagram",
        "State machine diagram"
      ],
      "answer": 2,
      "explanation": "Use a Class Diagram when you want to show what the system is made of and how its elements are related — e.g. Patient → books → Appointment, Doctor → has → Appointments."
    }
  ]
};

export default quiz;
