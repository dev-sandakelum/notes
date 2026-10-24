import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "13-final-practice-exam",
  "title": "ICT 2122: final practice exam",
  "questions": [
    {
      "prompt": "1. OOP bundles ____ and ____ into objects constructed from classes.",
      "options": [
        "<input type=\"radio\" name=\"fx1\" value=\"0\">Files and folders",
        "<input type=\"radio\" name=\"fx1\" value=\"1\">Threads and processes",
        "<input type=\"radio\" name=\"fx1\" value=\"2\">Data and behavior related to that data",
        "<input type=\"radio\" name=\"fx1\" value=\"3\">Databases and networks"
      ],
      "answer": 2,
      "explanation": "Objects wrap data plus the behavior related to that data; classes are the blueprints. (Topic 1)"
    },
    {
      "prompt": "2. Which statement about the new keyword is TRUE?",
      "options": [
        "<input type=\"radio\" name=\"fx2\" value=\"0\">It only declares a reference",
        "<input type=\"radio\" name=\"fx2\" value=\"1\">It allocates memory and calls a constructor to initialize the object",
        "<input type=\"radio\" name=\"fx2\" value=\"2\">It can be called twice on the same object",
        "<input type=\"radio\" name=\"fx2\" value=\"3\">It works only on abstract classes"
      ],
      "answer": 1,
      "explanation": "new = instantiation (memory allocation) + initialization (constructor call). (Topic 2)"
    },
    {
      "prompt": "3. In class Account { int a,b; void setData(int a,int b){ a=a; b=b; } }: the fields remain 0 because…",
      "options": [
        "<input type=\"radio\" name=\"fx3\" value=\"0\">int fields can't be set in methods",
        "<input type=\"radio\" name=\"fx3\" value=\"1\">setData must be static",
        "<input type=\"radio\" name=\"fx3\" value=\"2\">The fields are private",
        "<input type=\"radio\" name=\"fx3\" value=\"3\">Parameters shadow the instance variables, fix with this.a = a;"
      ],
      "answer": 3,
      "explanation": "The classic this-keyword trap. (Topics 2–3)"
    },
    {
      "prompt": "4. Which correctly lists the order of initialization?",
      "options": [
        "<input type=\"radio\" name=\"fx4\" value=\"0\">Superclass → static declarations/initializers → instance declarations/initializers → constructor",
        "<input type=\"radio\" name=\"fx4\" value=\"1\">Constructor → instance initializers → static initializers → superclass",
        "<input type=\"radio\" name=\"fx4\" value=\"2\">Static initializers → superclass → constructor → instance initializers",
        "<input type=\"radio\" name=\"fx4\" value=\"3\">Instance initializers → constructor → static initializers → superclass"
      ],
      "answer": 0,
      "explanation": "Memorize this exact order: a recurring exam question. (Topic 3)"
    },
    {
      "prompt": "5. Java does not support multiple inheritance of classes because of…",
      "options": [
        "<input type=\"radio\" name=\"fx5\" value=\"0\">Memory limits",
        "<input type=\"radio\" name=\"fx5\" value=\"1\">The casting problem",
        "<input type=\"radio\" name=\"fx5\" value=\"2\">The diamond problem",
        "<input type=\"radio\" name=\"fx5\" value=\"3\">The garbage collector"
      ],
      "answer": 2,
      "explanation": "Ambiguity when two parents provide the same member; interfaces are the workaround. (Topic 4)"
    },
    {
      "prompt": "6. class B extends A { B(){ super(); System.out.println(\"B\"); } }: if A's constructor prints \"A\", what does new B() print?",
      "options": [
        "<input type=\"radio\" name=\"fx6\" value=\"0\">B then A",
        "<input type=\"radio\" name=\"fx6\" value=\"1\">A then B",
        "<input type=\"radio\" name=\"fx6\" value=\"2\">Only B",
        "<input type=\"radio\" name=\"fx6\" value=\"3\">A and B in random order"
      ],
      "answer": 1,
      "explanation": "super() runs first (all the way up to Object); the subclass constructor body finishes last. (Topic 4)"
    },
    {
      "prompt": "7. Which pair is INVALID when overriding a superclass method?",
      "options": [
        "<input type=\"radio\" name=\"fx7\" value=\"0\">Same signature + narrowing access (protected → private)",
        "<input type=\"radio\" name=\"fx7\" value=\"1\">Same signature + same return type",
        "<input type=\"radio\" name=\"fx7\" value=\"2\">Same signature + covariant return type",
        "<input type=\"radio\" name=\"fx7\" value=\"3\">Same signature + widening access (protected → public)"
      ],
      "answer": 0,
      "explanation": "An override may allow MORE access, never less. (Topic 4)"
    },
    {
      "prompt": "8. obj instanceof Vehicle is TRUE when…",
      "options": [
        "<input type=\"radio\" name=\"fx8\" value=\"0\">obj's reference type is Vehicle only",
        "<input type=\"radio\" name=\"fx8\" value=\"1\">obj was created today",
        "<input type=\"radio\" name=\"fx8\" value=\"2\">Vehicle is final",
        "<input type=\"radio\" name=\"fx8\" value=\"3\">obj's actual object is a Vehicle or any subclass of it"
      ],
      "answer": 3,
      "explanation": "instanceof tests the actual object type, including subclasses (up to Object). (Topic 4)"
    },
    {
      "prompt": "9. Vehicle v = new Car(); &nbsp;v.color: where Vehicle has color=\"White\" and Car redeclares color=\"Red\", prints…",
      "options": [
        "<input type=\"radio\" name=\"fx9\" value=\"0\">Red: object type decides",
        "<input type=\"radio\" name=\"fx9\" value=\"1\">White: fields bind statically to the reference type",
        "<input type=\"radio\" name=\"fx9\" value=\"2\">A compile error",
        "<input type=\"radio\" name=\"fx9\" value=\"3\">Both values"
      ],
      "answer": 1,
      "explanation": "Methods bind dynamically; FIELDS bind statically (compile time, reference type). (Topic 5)"
    },
    {
      "prompt": "10. Which method call is NOT possible to overload by itself (i.e., changing only this aspect)?",
      "options": [
        "<input type=\"radio\" name=\"fx10\" value=\"0\">The number of parameters",
        "<input type=\"radio\" name=\"fx10\" value=\"1\">The data types of parameters",
        "<input type=\"radio\" name=\"fx10\" value=\"2\">The return type",
        "<input type=\"radio\" name=\"fx10\" value=\"3\">The sequence of parameter types"
      ],
      "answer": 2,
      "explanation": "Return type alone cannot distinguish overloads; it causes ambiguity. (Topic 5)"
    },
    {
      "prompt": "11. Which statement about abstract classes is TRUE?",
      "options": [
        "<input type=\"radio\" name=\"fx11\" value=\"0\">They can have constructors, fields and concrete methods, but cannot be instantiated",
        "<input type=\"radio\" name=\"fx11\" value=\"1\">They cannot be instantiated and cannot have constructors",
        "<input type=\"radio\" name=\"fx11\" value=\"2\">They must contain only abstract methods",
        "<input type=\"radio\" name=\"fx11\" value=\"3\">They can be instantiated using new Abstract()"
      ],
      "answer": 0,
      "explanation": "Abstract classes keep all normal class features except direct instantiation. (Topic 6)"
    },
    {
      "prompt": "12. Encapsulation differs from abstraction because encapsulation…",
      "options": [
        "<input type=\"radio\" name=\"fx12\" value=\"0\">Solves design-level problems",
        "<input type=\"radio\" name=\"fx12\" value=\"1\">Is implemented with interfaces",
        "<input type=\"radio\" name=\"fx12\" value=\"2\">Solves implementation-level problems by hiding code and data in a single unit",
        "<input type=\"radio\" name=\"fx12\" value=\"3\">Focuses on what a class can do rather than how"
      ],
      "answer": 2,
      "explanation": "Encapsulation = HOW (implementation level); abstraction = WHAT (design level). (Topic 7)"
    },
    {
      "prompt": "13. interface Foo { int BAR = 42; void go(); }: which is TRUE?",
      "options": [
        "<input type=\"radio\" name=\"fx13\" value=\"0\">BAR can be reassigned inside implementing classes",
        "<input type=\"radio\" name=\"fx13\" value=\"1\">BAR is implicitly public static final; go() is implicitly public abstract",
        "<input type=\"radio\" name=\"fx13\" value=\"2\">Foo can be instantiated with new Foo()",
        "<input type=\"radio\" name=\"fx13\" value=\"3\">go() may be declared private in Foo"
      ],
      "answer": 1,
      "explanation": "Interface fields are constants; interface methods are public abstract: always. (Topic 8)"
    },
    {
      "prompt": "14. try { int x = 25/0; } catch (NullPointerException e) { ... } finally { System.out.println(\"A\"); }: what happens?",
      "options": [
        "<input type=\"radio\" name=\"fx14\" value=\"0\">NullPointerException is caught, then A prints",
        "<input type=\"radio\" name=\"fx14\" value=\"1\">Nothing prints: the program stops at line 1",
        "<input type=\"radio\" name=\"fx14\" value=\"2\">A compile error, wrong exception type",
        "<input type=\"radio\" name=\"fx14\" value=\"3\">A prints, then ArithmeticException terminates the program (not caught)"
      ],
      "answer": 3,
      "explanation": "The catch type doesn't match, so the exception is unhandled, but finally ALWAYS runs first. (Topic 9)"
    },
    {
      "prompt": "15. To read a text file line by line you use… and detect the end when…",
      "options": [
        "<input type=\"radio\" name=\"fx15\" value=\"0\">BufferedReader.readLine(); it returns null",
        "<input type=\"radio\" name=\"fx15\" value=\"1\">Scanner.nextInt(); it returns -1",
        "<input type=\"radio\" name=\"fx15\" value=\"2\">DataInputStream.readUTF(); it throws IOException",
        "<input type=\"radio\" name=\"fx15\" value=\"3\">PrintWriter.println(); it returns false"
      ],
      "answer": 0,
      "explanation": "File → FileReader → BufferedReader; readLine() == null marks EOF. (Topic 10)"
    },
    {
      "prompt": "16. In JDBC, which method returns the number of affected rows?",
      "options": [
        "<input type=\"radio\" name=\"fx16\" value=\"0\">executeQuery()",
        "<input type=\"radio\" name=\"fx16\" value=\"1\">execute()",
        "<input type=\"radio\" name=\"fx16\" value=\"2\">executeUpdate()",
        "<input type=\"radio\" name=\"fx16\" value=\"3\">getConnection()"
      ],
      "answer": 2,
      "explanation": "executeUpdate → int rows (INSERT/UPDATE/DELETE); executeQuery → ResultSet; execute → boolean. (Topic 11)"
    }
  ]
};

export default quiz;
