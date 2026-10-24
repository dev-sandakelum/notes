import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "06-abstraction",
  "title": "Topic 6 Quiz — Abstraction",
  "questions": [
    {
      "prompt": "1. An abstract method…",
      "options": [
        "<input type=\"radio\" name=\"q6a\" value=\"0\">Has a body but no return type",
        "<input type=\"radio\" name=\"q6a\" value=\"1\">Is declared abstract and has no implementation",
        "<input type=\"radio\" name=\"q6a\" value=\"2\">Must be static",
        "<input type=\"radio\" name=\"q6a\" value=\"3\">Can only exist in interfaces"
      ],
      "answer": 1,
      "explanation": "abstract void printStatus(); — no body; abstract methods can live in abstract classes too."
    },
    {
      "prompt": "2. An abstract class…",
      "options": [
        "<input type=\"radio\" name=\"q6b\" value=\"0\">Cannot be instantiated but can be extended",
        "<input type=\"radio\" name=\"q6b\" value=\"1\">Cannot be extended",
        "<input type=\"radio\" name=\"q6b\" value=\"2\">Can be instantiated with new",
        "<input type=\"radio\" name=\"q6b\" value=\"3\">Cannot have constructors"
      ],
      "answer": 0,
      "explanation": "Abstract classes can't be instantiated (new Bike() is illegal) but exist precisely to be extended — and they CAN have constructors."
    },
    {
      "prompt": "3. If a class contains one abstract method, the class…",
      "options": [
        "<input type=\"radio\" name=\"q6c\" value=\"0\">Compiles with a warning",
        "<input type=\"radio\" name=\"q6c\" value=\"1\">Must be final",
        "<input type=\"radio\" name=\"q6c\" value=\"2\">Must be declared abstract",
        "<input type=\"radio\" name=\"q6c\" value=\"3\">Becomes an interface"
      ],
      "answer": 2,
      "explanation": "Any abstract method forces the whole class to be abstract — a compile error otherwise."
    },
    {
      "prompt": "4. A concrete subclass of an abstract class must…",
      "options": [
        "<input type=\"radio\" name=\"q6d\" value=\"0\">Override every concrete method",
        "<input type=\"radio\" name=\"q6d\" value=\"1\">Implement all inherited abstract methods",
        "<input type=\"radio\" name=\"q6d\" value=\"2\">Be declared abstract itself",
        "<input type=\"radio\" name=\"q6d\" value=\"3\">Extend Object instead"
      ],
      "answer": 1,
      "explanation": "Concrete (non-abstract) subclasses must provide implementations for ALL abstract methods — or they too must be abstract."
    },
    {
      "prompt": "5. Abstraction in Java is achieved through…",
      "options": [
        "<input type=\"radio\" name=\"q6e\" value=\"0\">Getters and setters",
        "<input type=\"radio\" name=\"q6e\" value=\"1\">Static methods only",
        "<input type=\"radio\" name=\"q6e\" value=\"2\">Garbage collection",
        "<input type=\"radio\" name=\"q6e\" value=\"3\">Abstract classes and interfaces"
      ],
      "answer": 3,
      "explanation": "Abstract classes give 0–100% abstraction; interfaces give 100%."
    },
    {
      "prompt": "6. In the Bike/Honda example, what is printed FIRST when new Honda() runs?",
      "options": [
        "<input type=\"radio\" name=\"q6f\" value=\"0\">bike is created",
        "<input type=\"radio\" name=\"q6f\" value=\"1\">running safely..",
        "<input type=\"radio\" name=\"q6f\" value=\"2\">gear changed",
        "<input type=\"radio\" name=\"q6f\" value=\"3\">Nothing — abstract classes can't run constructors"
      ],
      "answer": 0,
      "explanation": "The abstract Bike's constructor runs first (via the constructor chain), proving abstract classes CAN have constructors."
    }
  ]
};

export default quiz;
