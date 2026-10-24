import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "07-encapsulation",
  "title": "Topic 7 Quiz: Encapsulation",
  "questions": [
    {
      "prompt": "1. Encapsulation is the process of…",
      "options": [
        "<input type=\"radio\" name=\"q7a\" value=\"0\">Hiding methods in interfaces",
        "<input type=\"radio\" name=\"q7a\" value=\"1\">Copying objects between classes",
        "<input type=\"radio\" name=\"q7a\" value=\"2\">Wrapping code and data together into a single unit",
        "<input type=\"radio\" name=\"q7a\" value=\"3\">Deriving classes from superclasses"
      ],
      "answer": 2,
      "explanation": "Code + data wrapped in one unit (the class), like a capsule of mixed medicines."
    },
    {
      "prompt": "2. Encapsulation is also known as…",
      "options": [
        "<input type=\"radio\" name=\"q7b\" value=\"0\">Specialization",
        "<input type=\"radio\" name=\"q7b\" value=\"1\">Data (information) hiding",
        "<input type=\"radio\" name=\"q7b\" value=\"2\">Late binding",
        "<input type=\"radio\" name=\"q7b\" value=\"3\">Upcasting"
      ],
      "answer": 1,
      "explanation": "Private fields are hidden inside the class, hence \"data hiding\"."
    },
    {
      "prompt": "3. Getter methods are technically called…",
      "options": [
        "<input type=\"radio\" name=\"q7c\" value=\"0\">Accessor methods",
        "<input type=\"radio\" name=\"q7c\" value=\"1\">Mutator methods",
        "<input type=\"radio\" name=\"q7c\" value=\"2\">Constructor methods",
        "<input type=\"radio\" name=\"q7c\" value=\"3\">Static methods"
      ],
      "answer": 0,
      "explanation": "get = accessor (view), set = mutator (change)."
    },
    {
      "prompt": "4. The standard recipe for encapsulation is…",
      "options": [
        "<input type=\"radio\" name=\"q7d\" value=\"0\">Public fields with private methods",
        "<input type=\"radio\" name=\"q7d\" value=\"1\">Protected fields and final methods",
        "<input type=\"radio\" name=\"q7d\" value=\"2\">Static fields with static getters",
        "<input type=\"radio\" name=\"q7d\" value=\"3\">Private fields with public getter/setter methods"
      ],
      "answer": 3,
      "explanation": "Make fields private, expose controlled access through public methods."
    },
    {
      "prompt": "5. In the SalesPerson class, setCommissionRate(0.5) results in…",
      "options": [
        "<input type=\"radio\" name=\"q7e\" value=\"0\">commissionRate = 0.5",
        "<input type=\"radio\" name=\"q7e\" value=\"1\">A compile error",
        "<input type=\"radio\" name=\"q7e\" value=\"2\">The rate is rejected with \"Rate must be between 0 and 20%\"",
        "<input type=\"radio\" name=\"q7e\" value=\"3\">commissionRate becomes 0.20"
      ],
      "answer": 2,
      "explanation": "The setter validates: only 0.0–0.20 is accepted; 0.5 is refused: total control over data."
    },
    {
      "prompt": "6. Which is a design-level concept focused on WHAT a class can do?",
      "options": [
        "<input type=\"radio\" name=\"q7f\" value=\"0\">Encapsulation",
        "<input type=\"radio\" name=\"q7f\" value=\"1\">Abstraction",
        "<input type=\"radio\" name=\"q7f\" value=\"2\">Instantiation",
        "<input type=\"radio\" name=\"q7f\" value=\"3\">Casting"
      ],
      "answer": 1,
      "explanation": "Abstraction = design level, WHAT; encapsulation = implementation level, HOW."
    },
    {
      "prompt": "7. In the mobile phone analogy, the circuit board is…",
      "options": [
        "<input type=\"radio\" name=\"q7g\" value=\"0\">Encapsulated inside the screen; the UI abstracts it out",
        "<input type=\"radio\" name=\"q7g\" value=\"1\">Abstracted; the UI encapsulates it",
        "<input type=\"radio\" name=\"q7g\" value=\"2\">Inherited by the screen",
        "<input type=\"radio\" name=\"q7g\" value=\"3\">Overridden by the user"
      ],
      "answer": 0,
      "explanation": "Complex logic is encapsulated (untouchable); the interface presented to the user abstracts it (simple to use)."
    }
  ]
};

export default quiz;
