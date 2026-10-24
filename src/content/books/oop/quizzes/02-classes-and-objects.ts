import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "02-classes-and-objects",
  "title": "Topic 2 Quiz: Classes & Objects",
  "questions": [
    {
      "prompt": "1. Which is NOT a member of a class body?",
      "options": [
        "<input type=\"radio\" name=\"q2a\" value=\"0\">Fields",
        "<input type=\"radio\" name=\"q2a\" value=\"1\">Initializers",
        "<input type=\"radio\" name=\"q2a\" value=\"2\">Constructors",
        "<input type=\"radio\" name=\"q2a\" value=\"3\">Packages"
      ],
      "answer": 3,
      "explanation": "Class body members: fields, initializers, constructors, methods, nested classes/interfaces. Packages are declared at the top of the file, not inside the class."
    },
    {
      "prompt": "2. A public class named Student must be saved in which file?",
      "options": [
        "<input type=\"radio\" name=\"q2b\" value=\"0\">Student.java",
        "<input type=\"radio\" name=\"q2b\" value=\"1\">student.class",
        "<input type=\"radio\" name=\"q2b\" value=\"2\">Any .java file",
        "<input type=\"radio\" name=\"q2b\" value=\"3\">Main.java"
      ],
      "answer": 0,
      "explanation": "A public class must be in a source file with the same name and the .java extension, and only one public class per file."
    },
    {
      "prompt": "3. The default (package-private) access modifier is written how?",
      "options": [
        "<input type=\"radio\" name=\"q2c\" value=\"0\">default",
        "<input type=\"radio\" name=\"q2c\" value=\"1\">package",
        "<input type=\"radio\" name=\"q2c\" value=\"2\">By omitting the access modifier entirely",
        "<input type=\"radio\" name=\"q2c\" value=\"3\">local"
      ],
      "answer": 2,
      "explanation": "There is no keyword for default access, you just leave the modifier out. That's what makes it tricky."
    },
    {
      "prompt": "4. A protected method can be called from…",
      "options": [
        "<input type=\"radio\" name=\"q2d\" value=\"0\">Any class anywhere",
        "<input type=\"radio\" name=\"q2d\" value=\"1\">Classes in the same package or subclasses",
        "<input type=\"radio\" name=\"q2d\" value=\"2\">Only the same class",
        "<input type=\"radio\" name=\"q2d\" value=\"3\">Only static contexts"
      ],
      "answer": 1,
      "explanation": "protected = same package + subclasses. private = same class only; public = anywhere."
    },
    {
      "prompt": "5. The new keyword does what?",
      "options": [
        "<input type=\"radio\" name=\"q2e\" value=\"0\">Only declares a reference variable",
        "<input type=\"radio\" name=\"q2e\" value=\"1\">Deletes an object from memory",
        "<input type=\"radio\" name=\"q2e\" value=\"2\">Allocates memory for the object and calls a constructor",
        "<input type=\"radio\" name=\"q2e\" value=\"3\">Loads the class from a .class file"
      ],
      "answer": 2,
      "explanation": "new allocates memory, returns a reference to the new object, and is followed by a constructor call that initializes it."
    },
    {
      "prompt": "6. Which is NOT a way to initialize an object listed in the lecture?",
      "options": [
        "<input type=\"radio\" name=\"q2f\" value=\"0\">By reference variable",
        "<input type=\"radio\" name=\"q2f\" value=\"1\">By method",
        "<input type=\"radio\" name=\"q2f\" value=\"2\">By constructor",
        "<input type=\"radio\" name=\"q2f\" value=\"3\">By inheritance"
      ],
      "answer": 3,
      "explanation": "The three ways: reference variable, method, constructor."
    },
    {
      "prompt": "7. Which statement about constructors is FALSE?",
      "options": [
        "<input type=\"radio\" name=\"q2g\" value=\"0\">Its name must match the class name",
        "<input type=\"radio\" name=\"q2g\" value=\"1\">You can call the constructor again anytime after the object is created",
        "<input type=\"radio\" name=\"q2g\" value=\"2\">It has no explicit return type",
        "<input type=\"radio\" name=\"q2g\" value=\"3\">The compiler provides a default constructor if you write none"
      ],
      "answer": 1,
      "explanation": "After the object is created, the constructor cannot be called again, one constructor call per new."
    },
    {
      "prompt": "8. A default constructor initializes instance variables to…",
      "options": [
        "<input type=\"radio\" name=\"q2h\" value=\"0\">Zero or null",
        "<input type=\"radio\" name=\"q2h\" value=\"1\">Random values",
        "<input type=\"radio\" name=\"q2h\" value=\"2\">One or empty string",
        "<input type=\"radio\" name=\"q2h\" value=\"3\">Garbage values from memory"
      ],
      "answer": 0,
      "explanation": "Default constructor takes no parameters and initializes all instance variables to zero or null."
    }
  ]
};

export default quiz;
