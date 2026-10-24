import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "05-polymorphism",
  "title": "Topic 5 Quiz: Polymorphism",
  "questions": [
    {
      "prompt": "1. Polymorphism literally means…",
      "options": [
        "<input type=\"radio\" name=\"q5a\" value=\"0\">One form",
        "<input type=\"radio\" name=\"q5a\" value=\"1\">Many classes",
        "<input type=\"radio\" name=\"q5a\" value=\"2\">Many forms of the same thing",
        "<input type=\"radio\" name=\"q5a\" value=\"3\">Static binding"
      ],
      "answer": 2,
      "explanation": "Poly (many) + morph (form): one method name taking multiple forms depending on the object."
    },
    {
      "prompt": "2. Method overloading is resolved at…",
      "options": [
        "<input type=\"radio\" name=\"q5b\" value=\"0\">Compile time (static binding)",
        "<input type=\"radio\" name=\"q5b\" value=\"1\">Run time (dynamic binding)",
        "<input type=\"radio\" name=\"q5b\" value=\"2\">Class load time",
        "<input type=\"radio\" name=\"q5b\" value=\"3\">Garbage collection time"
      ],
      "answer": 0,
      "explanation": "The compiler picks the overload from the argument number/types, hence static/early binding."
    },
    {
      "prompt": "3. Which of these does NOT create a valid overload of sum(int, int)?",
      "options": [
        "<input type=\"radio\" name=\"q5c\" value=\"0\">sum(int, int, int)",
        "<input type=\"radio\" name=\"q5c\" value=\"1\">sum(double, double)",
        "<input type=\"radio\" name=\"q5c\" value=\"2\">sum(double, int)",
        "<input type=\"radio\" name=\"q5c\" value=\"3\">double sum(int, int)"
      ],
      "answer": 3,
      "explanation": "Same name + same parameters, differing only in return type, is not overloading; it won't compile."
    },
    {
      "prompt": "4. Vehicle v = new Car(); &nbsp;v.start();, which version runs?",
      "options": [
        "<input type=\"radio\" name=\"q5d\" value=\"0\">Vehicle's start()",
        "<input type=\"radio\" name=\"q5d\" value=\"1\">Car's start()",
        "<input type=\"radio\" name=\"q5d\" value=\"2\">A compile error, you can't assign Car to Vehicle",
        "<input type=\"radio\" name=\"q5d\" value=\"3\">Both run, Vehicle's first"
      ],
      "answer": 1,
      "explanation": "Dynamic binding: the actual object's class (Car) determines which overridden method executes."
    },
    {
      "prompt": "5. Member variables (fields) in Java are bound…",
      "options": [
        "<input type=\"radio\" name=\"q5e\" value=\"0\">Dynamically, by object type",
        "<input type=\"radio\" name=\"q5e\" value=\"1\">Never: fields cannot be accessed",
        "<input type=\"radio\" name=\"q5e\" value=\"2\">Statically, by reference type at compile time",
        "<input type=\"radio\" name=\"q5e\" value=\"3\">Only inside constructors"
      ],
      "answer": 2,
      "explanation": "Java does not allow dynamic binding for member variables, v.color uses Vehicle's field if v is declared Vehicle."
    },
    {
      "prompt": "6. Which is NOT dynamically bound?",
      "options": [
        "<input type=\"radio\" name=\"q5f\" value=\"0\">A final method",
        "<input type=\"radio\" name=\"q5f\" value=\"1\">A public instance method",
        "<input type=\"radio\" name=\"q5f\" value=\"2\">A protected instance method",
        "<input type=\"radio\" name=\"q5f\" value=\"3\">An overridden method"
      ],
      "answer": 0,
      "explanation": "Exceptions to dynamic binding: private methods, constructors, super invocations, and final methods."
    },
    {
      "prompt": "7. The @Override annotation is used to…",
      "options": [
        "<input type=\"radio\" name=\"q5g\" value=\"0\">Make a method static",
        "<input type=\"radio\" name=\"q5g\" value=\"1\">Indicate a subclass method intends to override a superclass method, preventing mistakes",
        "<input type=\"radio\" name=\"q5g\" value=\"2\">Overload a constructor",
        "<input type=\"radio\" name=\"q5g\" value=\"3\">Cast an object to another type"
      ],
      "answer": 1,
      "explanation": "@Override makes the compiler verify you are truly overriding; it helps prevent mistakes and improves readability."
    }
  ]
};

export default quiz;
