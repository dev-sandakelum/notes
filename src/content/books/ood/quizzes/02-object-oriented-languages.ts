import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "02-object-oriented-languages",
  "title": "Topic 2 Quiz — Object-Oriented Languages",
  "questions": [
    {
      "prompt": "1. Which languages are <b>statically typed</b>?",
      "options": [
        "Python, Ruby, JavaScript",
        "TypeScript, Kotlin only",
        "Java, C++, C#",
        "Ruby and Python"
      ],
      "answer": 2,
      "explanation": "Static typing checks types at compile time (Java, C++, C#). Dynamic typing checks at run time (Python, Ruby, JavaScript). TypeScript and Kotlin offer a hybrid approach."
    },
    {
      "prompt": "2. Garbage collection is best described as:",
      "options": [
        "Manually deleting files from disk when the program exits",
        "Automatically freeing memory occupied by objects that are no longer used by the program",
        "Loading classes into memory only at runtime",
        "Checking types at compile time"
      ],
      "answer": 1,
      "explanation": "GC automatically frees memory of unused objects, preventing memory leaks and out-of-memory errors. Java objects live in heap memory. Loading classes at runtime is dynamic loading."
    },
    {
      "prompt": "3. Which is <b>NOT</b> a type of garbage object in Java?",
      "options": [
        "Protected objects",
        "Nullified objects",
        "Out-of-scope objects",
        "Objects unreachable via reassignment"
      ],
      "answer": 0,
      "explanation": "The three garbage object types are: nullified (reference set to null), out of scope (block ends), and unreachable via reassignment (reference points to a new object)."
    },
    {
      "prompt": "4. A satellite orbit calculation program that performs one massive, complex computation is likely a poor fit for OO development because:",
      "options": [
        "It cannot be stored in a database",
        "OO languages do not support mathematics",
        "It needs garbage collection",
        "Splitting the calculation into objects may increase complexity and reduce performance"
      ],
      "answer": 3,
      "explanation": "Strongly algorithmic applications are not ideally suited to OO: an OO implementation might create many more, very complex objects with unnecessary overhead."
    },
    {
      "prompt": "5. Which is an advantage of a standardized class library?",
      "options": [
        "It removes the need for any design phase",
        "It guarantees the program has no bugs",
        "Programmers reuse pre-tested, reliable, cross-platform code instead of writing everything from scratch",
        "It makes the language dynamically typed"
      ],
      "answer": 2,
      "explanation": "Standardized class libraries provide predefined classes/interfaces: cross-platform compatibility, pre-tested reliability, OO structure, and consistent naming conventions."
    },
    {
      "prompt": "6. <code>int x = \"Hello\";</code> fails to compile in Java. This demonstrates:",
      "options": [
        "Dynamic loading",
        "Strong typing — every value must belong to an appropriate type for its context",
        "Garbage collection",
        "Polymorphism"
      ],
      "answer": 1,
      "explanation": "Strong typing enforces type discipline at declaration/compile time, preventing type mismatch errors and reducing runtime bugs."
    }
  ]
};

export default quiz;
