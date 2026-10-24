import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "01-ooad-basic-concepts",
  "title": "Topic 1 Quiz — OOAD Basic Concepts",
  "questions": [
    {
      "prompt": "1. What is the key focus of Object-Oriented <b>Analysis</b> (OOA)?",
      "options": [
        "Deciding which programming language to use for implementation",
        "Identifying objects, concepts, classes and relationships in the problem domain",
        "Defining software classes with attributes and methods",
        "Deploying the system to a cloud platform"
      ],
      "answer": 1,
      "explanation": "OOA asks \"What exists in the problem domain?\" — it identifies objects, concepts, classes, relationships and requirements. OOD defines software classes; OOP implements them."
    },
    {
      "prompt": "2. \"A class is a blueprint; an object is an actual instance created from that class.\" Which analogy matches this?",
      "options": [
        "A recipe and a meal someone else cooked",
        "A road map and a geological map",
        "A house blueprint and an actual house built from it",
        "A chef and a customer ordering soup"
      ],
      "answer": 2,
      "explanation": "The lecture's analogy: House Blueprint = Class, Actual House = Object. employee1 (John) and employee2 (Jane) are objects/instances of the Employee class with different attribute values."
    },
    {
      "prompt": "3. Which of the following is <b>NOT</b> one of the four pillars of object orientation?",
      "options": [
        "Abstraction",
        "Encapsulation",
        "Polymorphism",
        "Cohesion"
      ],
      "answer": 3,
      "explanation": "The four pillars (principles) are Abstraction, Encapsulation, Inheritance and Polymorphism. Cohesion and coupling are design-quality measures, not pillars."
    },
    {
      "prompt": "4. A BankAccount keeps <code>balance</code> private and forces all changes through <code>deposit()</code> and <code>withdraw()</code>. Which principles does this mainly demonstrate?",
      "options": [
        "Encapsulation and data hiding",
        "Inheritance and generalization",
        "Polymorphism and message passing",
        "Cohesion and coupling"
      ],
      "answer": 0,
      "explanation": "Packaging data with the operations that control it, and restricting direct access (private balance), is encapsulation + data hiding. The class can enforce rules like \"withdraw only if amount ≤ balance\"."
    },
    {
      "prompt": "5. <code>vehicle.calculateParkingFee()</code> returns a fee computed differently for Car, Bike and Truck. This is an example of:",
      "options": [
        "Abstraction",
        "Encapsulation",
        "Polymorphism",
        "Aggregation"
      ],
      "answer": 2,
      "explanation": "Polymorphism = \"many forms\": the same operation/interface produces different behavior depending on the actual object involved."
    },
    {
      "prompt": "6. A <code>UserManager</code> class contains <code>createUser()</code>, <code>sendWelcomeEmail()</code>, <code>generateReport()</code>, <code>calculateTax()</code> and <code>playMusic()</code>. What is the problem and the fix?",
      "options": [
        "High coupling — merge it into one system class",
        "Low cohesion — split it into focused classes like UserService, EmailService, ReportService",
        "High cohesion — keep it because it manages users",
        "Low coupling — connect it to more interfaces"
      ],
      "answer": 1,
      "explanation": "The class does too many unrelated things (no single clear purpose) = low cohesion. The fix is to split it into UserService, EmailService, ReportService, TaxService, MusicService."
    },
    {
      "prompt": "7. In <code>lawrence.takeOrder(\"sofa\", \"1 Robinson Rd\", 120799)</code>, which part is the <b>object reference</b>?",
      "options": [
        "takeOrder",
        "\"sofa\"",
        "120799",
        "lawrence"
      ],
      "answer": 3,
      "explanation": "A message has three components: object reference (lawrence — who receives it), method name (takeOrder — what to do) and parameters (\"sofa\", \"1 Robinson Rd\", 120799 — input values)."
    },
    {
      "prompt": "8. Which combination characterizes a good object-oriented design?",
      "options": [
        "High cohesion + low coupling",
        "Low cohesion + high coupling",
        "High cohesion + high coupling",
        "Low cohesion + low coupling"
      ],
      "answer": 0,
      "explanation": "Golden rule: High Cohesion + Low Coupling = Good OO Design. Cohesion = internal relatedness of one class (want high); Coupling = dependency between classes (want low)."
    }
  ]
};

export default quiz;
