import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "09-exception-handling",
  "title": "Topic 9 Quiz: Exceptions",
  "questions": [
    {
      "prompt": "1. An exception is…",
      "options": [
        "<input type=\"radio\" name=\"q9a\" value=\"0\">A syntax error found by the compiler",
        "<input type=\"radio\" name=\"q9a\" value=\"1\">An event during execution that disrupts the normal flow of the program",
        "<input type=\"radio\" name=\"q9a\" value=\"2\">A special kind of interface",
        "<input type=\"radio\" name=\"q9a\" value=\"3\">A memory dump"
      ],
      "answer": 1,
      "explanation": "Exception = exceptional event occurring during execution, disrupting normal flow, but it can be handled."
    },
    {
      "prompt": "2. FileNotFoundException is which kind?",
      "options": [
        "<input type=\"radio\" name=\"q9b\" value=\"0\">Checked exception",
        "<input type=\"radio\" name=\"q9b\" value=\"1\">Unchecked exception",
        "<input type=\"radio\" name=\"q9b\" value=\"2\">Error",
        "<input type=\"radio\" name=\"q9b\" value=\"3\">Custom exception"
      ],
      "answer": 0,
      "explanation": "It's predictable (the file may not exist); the compiler forces you to catch-or-throw it."
    },
    {
      "prompt": "3. Which hierarchy statement is TRUE?",
      "options": [
        "<input type=\"radio\" name=\"q9c\" value=\"0\">Exception is the superclass of Error",
        "<input type=\"radio\" name=\"q9c\" value=\"1\">RuntimeException extends Error",
        "<input type=\"radio\" name=\"q9c\" value=\"2\">All exception types and errors are subclasses of Throwable",
        "<input type=\"radio\" name=\"q9c\" value=\"3\">Throwable extends Object's Exception"
      ],
      "answer": 2,
      "explanation": "Throwable sits at the top; Exception and Error are its two main branches."
    },
    {
      "prompt": "4. The finally block…",
      "options": [
        "<input type=\"radio\" name=\"q9d\" value=\"0\">Runs only when an exception is caught",
        "<input type=\"radio\" name=\"q9d\" value=\"1\">Runs only when no exception occurs",
        "<input type=\"radio\" name=\"q9d\" value=\"2\">May appear twice per try",
        "<input type=\"radio\" name=\"q9d\" value=\"3\">Is always executed, whether the exception is handled or not"
      ],
      "answer": 3,
      "explanation": "finally is for cleanup (closing streams/connections) and always runs, one finally per try, max."
    },
    {
      "prompt": "5. Which is ILLEGAL?",
      "options": [
        "<input type=\"radio\" name=\"q9e\" value=\"0\">try followed by one catch",
        "<input type=\"radio\" name=\"q9e\" value=\"1\">A catch clause without a try statement",
        "<input type=\"radio\" name=\"q9e\" value=\"2\">try followed by finally only",
        "<input type=\"radio\" name=\"q9e\" value=\"3\">Nested try/catch blocks"
      ],
      "answer": 1,
      "explanation": "catch cannot exist without try. try alone is also illegal: it needs a catch or a finally."
    },
    {
      "prompt": "6. throw new ArithmeticException(\"Not Eligible\");; the throw keyword is followed by…",
      "options": [
        "<input type=\"radio\" name=\"q9f\" value=\"0\">An instance of the exception class",
        "<input type=\"radio\" name=\"q9f\" value=\"1\">The class name only",
        "<input type=\"radio\" name=\"q9f\" value=\"2\">A try block",
        "<input type=\"radio\" name=\"q9f\" value=\"3\">A list of exceptions"
      ],
      "answer": 0,
      "explanation": "throw takes an instance; throws takes class names. throw is used inside the method body."
    },
    {
      "prompt": "7. To create a custom CHECKED exception you extend…",
      "options": [
        "<input type=\"radio\" name=\"q9g\" value=\"0\">RuntimeException",
        "<input type=\"radio\" name=\"q9g\" value=\"1\">Error",
        "<input type=\"radio\" name=\"q9g\" value=\"2\">Exception",
        "<input type=\"radio\" name=\"q9g\" value=\"3\">Throwable only, nothing else"
      ],
      "answer": 2,
      "explanation": "Extend Exception for checked (Handle-or-Declare enforced); extend RuntimeException for unchecked."
    },
    {
      "prompt": "8. printStackTrace() prints to which stream?",
      "options": [
        "<input type=\"radio\" name=\"q9h\" value=\"0\">System.out",
        "<input type=\"radio\" name=\"q9h\" value=\"1\">System.in",
        "<input type=\"radio\" name=\"q9h\" value=\"2\">A log file by default",
        "<input type=\"radio\" name=\"q9h\" value=\"3\">System.err (the error output stream)"
      ],
      "answer": 3,
      "explanation": "It prints toString() plus the stack trace to System.err."
    }
  ]
};

export default quiz;
