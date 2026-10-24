import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "08-interfaces",
  "title": "Topic 8 Quiz: Interfaces",
  "questions": [
    {
      "prompt": "1. Interface methods are implicitly…",
      "options": [
        "<input type=\"radio\" name=\"q8a\" value=\"0\">private and static",
        "<input type=\"radio\" name=\"q8a\" value=\"1\">protected and final",
        "<input type=\"radio\" name=\"q8a\" value=\"2\">public and abstract",
        "<input type=\"radio\" name=\"q8a\" value=\"3\">static and final"
      ],
      "answer": 2,
      "explanation": "You never need to type public abstract; the method is always public and abstract anyway."
    },
    {
      "prompt": "2. Variables declared in an interface are implicitly…",
      "options": [
        "<input type=\"radio\" name=\"q8b\" value=\"0\">private and mutable",
        "<input type=\"radio\" name=\"q8b\" value=\"1\">public static final (constants)",
        "<input type=\"radio\" name=\"q8b\" value=\"2\">protected and static",
        "<input type=\"radio\" name=\"q8b\" value=\"3\">default-scoped"
      ],
      "answer": 1,
      "explanation": "Interfaces can declare only constants: public static final, and they must be initialized at declaration."
    },
    {
      "prompt": "3. Which keyword does a class use to consume an interface?",
      "options": [
        "<input type=\"radio\" name=\"q8c\" value=\"0\">extends",
        "<input type=\"radio\" name=\"q8c\" value=\"1\">abstract",
        "<input type=\"radio\" name=\"q8c\" value=\"2\">uses",
        "<input type=\"radio\" name=\"q8c\" value=\"3\">implements"
      ],
      "answer": 3,
      "explanation": "Classes implement interfaces; interfaces extend interfaces."
    },
    {
      "prompt": "4. A class implements an interface but misses one method. What must happen?",
      "options": [
        "<input type=\"radio\" name=\"q8d\" value=\"0\">The class must be declared abstract",
        "<input type=\"radio\" name=\"q8d\" value=\"1\">The code compiles and runs fine",
        "<input type=\"radio\" name=\"q8d\" value=\"2\">The interface must be deleted",
        "<input type=\"radio\" name=\"q8d\" value=\"3\">The missing method becomes default"
      ],
      "answer": 0,
      "explanation": "Partial implementation is only allowed for abstract classes."
    },
    {
      "prompt": "5. An interface can extend…",
      "options": [
        "<input type=\"radio\" name=\"q8e\" value=\"0\">Only one other interface",
        "<input type=\"radio\" name=\"q8e\" value=\"1\">Any class or interface",
        "<input type=\"radio\" name=\"q8e\" value=\"2\">One or more other interfaces",
        "<input type=\"radio\" name=\"q8e\" value=\"3\">Nothing: interfaces are final"
      ],
      "answer": 2,
      "explanation": "Interface-to-interface inheritance may be multiple (PlayableBall extends ThrowableBall, KickableBall); an interface can never implement anything."
    },
    {
      "prompt": "6. In interface Foo { int BAR = 42; void go(); }: what is BAR = 27; inside an implementing class?",
      "options": [
        "<input type=\"radio\" name=\"q8f\" value=\"0\">Legal: BAR is just a variable",
        "<input type=\"radio\" name=\"q8f\" value=\"1\">A compile error: BAR is final",
        "<input type=\"radio\" name=\"q8f\" value=\"2\">Legal only inside static methods",
        "<input type=\"radio\" name=\"q8f\" value=\"3\">A runtime exception"
      ],
      "answer": 1,
      "explanation": "BAR is implicitly public static final, assigning to a final constant doesn't compile."
    },
    {
      "prompt": "7. Default methods were introduced to…",
      "options": [
        "<input type=\"radio\" name=\"q8g\" value=\"0\">Add new methods to existing interfaces without breaking implementing classes",
        "<input type=\"radio\" name=\"q8g\" value=\"1\">Make interfaces instantiable",
        "<input type=\"radio\" name=\"q8g\" value=\"2\">Replace abstract classes entirely",
        "<input type=\"radio\" name=\"q8g\" value=\"3\">Allow private interface methods"
      ],
      "answer": 0,
      "explanation": "Java 8's default methods supply a fallback body so existing implementers keep compiling."
    },
    {
      "prompt": "8. Which can an interface NOT have?",
      "options": [
        "<input type=\"radio\" name=\"q8h\" value=\"0\">Constants",
        "<input type=\"radio\" name=\"q8h\" value=\"1\">Default methods",
        "<input type=\"radio\" name=\"q8h\" value=\"2\">Static methods",
        "<input type=\"radio\" name=\"q8h\" value=\"3\">Constructors"
      ],
      "answer": 3,
      "explanation": "Interfaces have no constructors: they are never instantiated."
    }
  ]
};

export default quiz;
