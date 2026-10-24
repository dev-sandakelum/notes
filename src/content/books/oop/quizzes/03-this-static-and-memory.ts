import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "03-this-static-and-memory",
  "title": "Topic 3 Quiz — this, static & Memory",
  "questions": [
    {
      "prompt": "1. The this keyword refers to…",
      "options": [
        "<input type=\"radio\" name=\"q3a\" value=\"0\">The parent class object",
        "<input type=\"radio\" name=\"q3a\" value=\"1\">The current object — the instance for which the method/constructor was called",
        "<input type=\"radio\" name=\"q3a\" value=\"2\">The class itself",
        "<input type=\"radio\" name=\"q3a\" value=\"3\">The last created object"
      ],
      "answer": 1,
      "explanation": "Every object carries a reference to itself — this. It disambiguates fields from shadowing parameters."
    },
    {
      "prompt": "2. A call to this(...) inside a constructor must be…",
      "options": [
        "<input type=\"radio\" name=\"q3b\" value=\"0\">The last statement",
        "<input type=\"radio\" name=\"q3b\" value=\"1\">Inside a static block",
        "<input type=\"radio\" name=\"q3b\" value=\"2\">The very first statement",
        "<input type=\"radio\" name=\"q3b\" value=\"3\">Wrapped in try/catch"
      ],
      "answer": 2,
      "explanation": "this(...) can only be the first statement of a constructor; each constructor may call only one other."
    },
    {
      "prompt": "3. In the Account example, why did showData() print 0 and 0?",
      "options": [
        "<input type=\"radio\" name=\"q3c\" value=\"0\">Parameters shadowed the instance variables, so a=a assigned the parameter to itself",
        "<input type=\"radio\" name=\"q3c\" value=\"1\">The fields were private",
        "<input type=\"radio\" name=\"q3c\" value=\"2\">setData was never called",
        "<input type=\"radio\" name=\"q3c\" value=\"3\">Java does not allow int parameters"
      ],
      "answer": 0,
      "explanation": "Local variables (parameters) shadowed the fields; the fix is this.a = a; this.b = b;"
    },
    {
      "prompt": "4. An anonymous object is…",
      "options": [
        "<input type=\"radio\" name=\"q3d\" value=\"0\">An object with no fields",
        "<input type=\"radio\" name=\"q3d\" value=\"1\">An object of an abstract class",
        "<input type=\"radio\" name=\"q3d\" value=\"2\">An object created inside a static method",
        "<input type=\"radio\" name=\"q3d\" value=\"3\">An object that has no reference"
      ],
      "answer": 3,
      "explanation": "Anonymous = nameless: no reference variable holds it, e.g. new Calculation().fact(5);"
    },
    {
      "prompt": "5. Garbage collection in Java removes…",
      "options": [
        "<input type=\"radio\" name=\"q3e\" value=\"0\">All objects older than one hour",
        "<input type=\"radio\" name=\"q3e\" value=\"1\">Unreferenced objects from heap memory, automatically",
        "<input type=\"radio\" name=\"q3e\" value=\"2\">Static variables no longer used",
        "<input type=\"radio\" name=\"q3e\" value=\"3\">Compiled .class files"
      ],
      "answer": 1,
      "explanation": "GC = automatic reclaiming of unused (unreferenced) objects from heap memory, done by the JVM."
    },
    {
      "prompt": "6. Static fields are created and initialized…",
      "options": [
        "<input type=\"radio\" name=\"q3f\" value=\"0\">When the class is first loaded",
        "<input type=\"radio\" name=\"q3f\" value=\"1\">Every time an object is created",
        "<input type=\"radio\" name=\"q3f\" value=\"2\">When the program exits",
        "<input type=\"radio\" name=\"q3f\" value=\"3\">Only inside constructors"
      ],
      "answer": 0,
      "explanation": "Static members belong to the class; they are initialized at class load time — before any object exists."
    },
    {
      "prompt": "7. Which is TRUE about static and instance access?",
      "options": [
        "<input type=\"radio\" name=\"q3g\" value=\"0\">Static methods can directly access instance fields",
        "<input type=\"radio\" name=\"q3g\" value=\"1\">Instance methods cannot access static fields",
        "<input type=\"radio\" name=\"q3g\" value=\"2\">Static methods cannot access instance members directly, but instance methods can access static members",
        "<input type=\"radio\" name=\"q3g\" value=\"3\">Neither can access the other"
      ],
      "answer": 2,
      "explanation": "A static method has no instance to work with; instance methods always have access to static members."
    },
    {
      "prompt": "8. To prevent a class from being instantiated…",
      "options": [
        "<input type=\"radio\" name=\"q3h\" value=\"0\">Declare it abstract only",
        "<input type=\"radio\" name=\"q3h\" value=\"1\">Provide a single private constructor",
        "<input type=\"radio\" name=\"q3h\" value=\"2\">Make all fields static",
        "<input type=\"radio\" name=\"q3h\" value=\"3\">Override the new keyword"
      ],
      "answer": 1,
      "explanation": "A private constructor blocks instance creation from outside — the Math class technique, and the basis of Singleton."
    }
  ]
};

export default quiz;
