import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "04-inheritance",
  "title": "Topic 4 Quiz: Inheritance",
  "questions": [
    {
      "prompt": "1. Which keyword creates a subclass in Java?",
      "options": [
        "<input type=\"radio\" name=\"q4a\" value=\"0\">implements",
        "<input type=\"radio\" name=\"q4a\" value=\"1\">inherits",
        "<input type=\"radio\" name=\"q4a\" value=\"2\">extends",
        "<input type=\"radio\" name=\"q4a\" value=\"3\">super"
      ],
      "answer": 2,
      "explanation": "class Car extends Vehicle { }, implements is for interfaces."
    },
    {
      "prompt": "2. Which type of inheritance is NOT supported for classes in Java?",
      "options": [
        "<input type=\"radio\" name=\"q4b\" value=\"0\">Single",
        "<input type=\"radio\" name=\"q4b\" value=\"1\">Multiple",
        "<input type=\"radio\" name=\"q4b\" value=\"2\">Multilevel",
        "<input type=\"radio\" name=\"q4b\" value=\"3\">Hierarchical"
      ],
      "answer": 1,
      "explanation": "Multiple inheritance of classes is not allowed due to the diamond problem, interfaces provide the workaround."
    },
    {
      "prompt": "3. An overriding method's access modifier…",
      "options": [
        "<input type=\"radio\" name=\"q4c\" value=\"0\">Must stay exactly the same",
        "<input type=\"radio\" name=\"q4c\" value=\"1\">Can allow less access",
        "<input type=\"radio\" name=\"q4c\" value=\"2\">Must always be private",
        "<input type=\"radio\" name=\"q4c\" value=\"3\">Can allow more, but not less, access"
      ],
      "answer": 3,
      "explanation": "protected → public is fine; protected → private is a compile error."
    },
    {
      "prompt": "4. A subclass static method with the same signature as a superclass static method…",
      "options": [
        "<input type=\"radio\" name=\"q4d\" value=\"0\">Hides the superclass method",
        "<input type=\"radio\" name=\"q4d\" value=\"1\">Overrides the superclass method",
        "<input type=\"radio\" name=\"q4d\" value=\"2\">Causes a runtime exception",
        "<input type=\"radio\" name=\"q4d\" value=\"3\">Is automatically deleted"
      ],
      "answer": 0,
      "explanation": "Static methods are hidden, not overridden; they bind at compile time."
    },
    {
      "prompt": "5. The super() call in a constructor must be…",
      "options": [
        "<input type=\"radio\" name=\"q4e\" value=\"0\">The last statement",
        "<input type=\"radio\" name=\"q4e\" value=\"1\">Inside the main method",
        "<input type=\"radio\" name=\"q4e\" value=\"2\">The very first statement",
        "<input type=\"radio\" name=\"q4e\" value=\"3\">Followed by this()"
      ],
      "answer": 2,
      "explanation": "super() must be first; and a constructor can't have both super() and this()."
    },
    {
      "prompt": "6. In the constructor chain started by new B(), which constructor body finishes executing LAST?",
      "options": [
        "<input type=\"radio\" name=\"q4f\" value=\"0\">Object's constructor",
        "<input type=\"radio\" name=\"q4f\" value=\"1\">The original subclass constructor (B's)",
        "<input type=\"radio\" name=\"q4f\" value=\"2\">The direct superclass constructor",
        "<input type=\"radio\" name=\"q4f\" value=\"3\">They all finish simultaneously"
      ],
      "answer": 1,
      "explanation": "The chain runs superclass→...→Object first; the subclass constructor body finishes executing last."
    },
    {
      "prompt": "7. A final class…",
      "options": [
        "<input type=\"radio\" name=\"q4g\" value=\"0\">Cannot be instantiated",
        "<input type=\"radio\" name=\"q4g\" value=\"1\">Has only abstract methods",
        "<input type=\"radio\" name=\"q4g\" value=\"2\">Must extend Object explicitly",
        "<input type=\"radio\" name=\"q4g\" value=\"3\">Cannot be used as a base class (cannot be extended)"
      ],
      "answer": 3,
      "explanation": "final class = no subclasses; all its methods are considered final as well."
    },
    {
      "prompt": "8. Vehicle v = new Car(); is an example of…",
      "options": [
        "<input type=\"radio\" name=\"q4h\" value=\"0\">Implicit upcasting (subclass to superclass)",
        "<input type=\"radio\" name=\"q4h\" value=\"1\">Explicit downcasting",
        "<input type=\"radio\" name=\"q4h\" value=\"2\">Method hiding",
        "<input type=\"radio\" name=\"q4h\" value=\"3\">Field shadowing"
      ],
      "answer": 0,
      "explanation": "Upcasting (subclass→superclass reference) is implicit; downcasting needs an explicit (Car) cast."
    }
  ]
};

export default quiz;
