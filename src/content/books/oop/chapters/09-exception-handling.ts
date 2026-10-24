import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "09-exception-handling",
    "number": 9,
    "title": "Exception handling",
    "subtitle": "Lesson 05 · try/catch/finally, checked vs unchecked, throw vs throws, custom exceptions",
    "kind": "topic",
    "words": 1370,
    "minutes": 7
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "what-is-an-exception",
      "text": "What is an exception?"
    },
    {
      "type": "paragraph",
      "html": "A program can fail for many reasons: some are <b>coding mistakes</b> (which the programmer or the language can handle), others are <b>completely beyond your control</b> (which must be dealt with but not handled). Early languages handled failure rudely: abruptly terminating and printing a <b>dump</b> of the computer’s memory in hexadecimal. Java instead creates special <b>exception objects</b> when an error occurs. As the lecture puts it, an exception is Java’s way of saying: <i>“I give up. I don’t know what to do right now. You deal with it.”</i> When you write a method, you can either <b>deal with the exception</b> or <b>make it the calling code’s problem</b>."
    },
    {
      "type": "paragraph",
      "html": "Formally, an <b>exception</b> (short for “exceptional event”) is an event that <b>occurs during the execution of a program</b> and <b>disrupts the normal flow</b> of the program’s instructions. When it occurs, processing gets terminated and a system-generated error message appears; the good thing is that exceptions <b>can be handled</b>. Common reasons: opening a non-existing file, network connection problems, operands out of prescribed ranges, a missing class file, or invalid user input."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "types-of-exceptions",
      "text": "Types of exceptions"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">Checked exceptions</div><div class=\"f-b\">Can be <b>predicted by the programmer</b>. The compiler checks at <b>compile time</b> whether they are handled (catch-or-throw). Example: <code class=\"inl\">FileNotFoundException</code> when opening a file.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Unchecked exceptions</div><div class=\"f-b\">Also called <b>runtime exceptions</b>; include programming bugs (logic errors, improper API use). The compiler does <b>not</b> check them. Example: <code class=\"inl\">ArithmeticException</code>: division by zero.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Errors</div><div class=\"f-b\">Not exceptions at all. Problems <b>beyond the control</b> of programmer or user (memory, hardware, JVM errors). Typically <b>ignored</b> in code because you can rarely do anything about them.</div></div>\n  </div>",
      "alt": "Formula reference cards"
    },
    {
      "type": "paragraph",
      "html": "Exception handling is the mechanism that handles <b>runtime errors</b> (ClassNotFound, IO, SQL, Remote…) and ensures the program’s flow <b>doesn’t break</b> when an exception occurs."
    },
    {
      "type": "figure",
      "svg": "<svg class=\"fig lg\" viewBox=\"0 0 640 320\" role=\"img\" aria-label=\"Java exception hierarchy\">\n    <rect x=\"245\" y=\"15\" width=\"150\" height=\"38\" rx=\"9\" class=\"boxp\"></rect>\n    <text x=\"320\" y=\"39\" text-anchor=\"middle\" class=\"lbl\">Throwable</text>\n    <rect x=\"90\" y=\"95\" width=\"170\" height=\"38\" rx=\"9\" class=\"box\"></rect>\n    <text x=\"175\" y=\"119\" text-anchor=\"middle\" class=\"lbl\">Exception</text>\n    <rect x=\"390\" y=\"95\" width=\"170\" height=\"38\" rx=\"9\" class=\"box\"></rect>\n    <text x=\"475\" y=\"119\" text-anchor=\"middle\" class=\"lbl\">Error</text>\n    <path d=\"M275 53 L190 95\" class=\"ln\"></path><polygon points=\"190,95 200,90 197,101\" fill=\"var(--axis)\"></polygon>\n    <path d=\"M365 53 L450 95\" class=\"ln\"></path><polygon points=\"450,95 440,90 443,101\" fill=\"var(--axis)\"></polygon>\n    <rect x=\"20\" y=\"180\" width=\"150\" height=\"38\" rx=\"9\" class=\"boxa\"></rect>\n    <text x=\"95\" y=\"198\" text-anchor=\"middle\">RuntimeException</text>\n    <text x=\"95\" y=\"212\" text-anchor=\"middle\" font-size=\"10\">(unchecked)</text>\n    <rect x=\"195\" y=\"180\" width=\"150\" height=\"38\" rx=\"9\" class=\"box\"></rect>\n    <text x=\"270\" y=\"198\" text-anchor=\"middle\">IOException</text>\n    <text x=\"270\" y=\"212\" text-anchor=\"middle\" font-size=\"10\">(checked)</text>\n    <rect x=\"385\" y=\"180\" width=\"180\" height=\"38\" rx=\"9\" class=\"boxa\"></rect>\n    <text x=\"475\" y=\"198\" text-anchor=\"middle\">OutOfMemoryError</text>\n    <text x=\"475\" y=\"212\" text-anchor=\"middle\" font-size=\"10\">VirtualMachineError…</text>\n    <path d=\"M160 133 L105 180\" class=\"ln\"></path><polygon points=\"105,180 114,175 111,185\" fill=\"var(--axis)\"></polygon>\n    <path d=\"M195 133 L255 180\" class=\"ln\"></path><polygon points=\"255,180 246,175 249,185\" fill=\"var(--axis)\"></polygon>\n    <path d=\"M475 133 L475 180\" class=\"ln\"></path><polygon points=\"475,180 470,170 480,170\" fill=\"var(--axis)\"></polygon>\n    <text x=\"95\" y=\"248\" text-anchor=\"middle\" font-size=\"11\">ArithmeticException</text>\n    <text x=\"95\" y=\"264\" text-anchor=\"middle\" font-size=\"11\">NullPointerException</text>\n    <text x=\"95\" y=\"280\" text-anchor=\"middle\" font-size=\"11\">ArrayIndexOutOfBoundsException</text>\n    <text x=\"270\" y=\"248\" text-anchor=\"middle\" font-size=\"11\">FileNotFoundException</text>\n    <text x=\"270\" y=\"264\" text-anchor=\"middle\" font-size=\"11\">EOFException</text>\n    <text x=\"270\" y=\"280\" text-anchor=\"middle\" font-size=\"11\">SQLException</text>\n    <text x=\"475\" y=\"248\" text-anchor=\"middle\" font-size=\"11\">StackOverflowError</text>\n    <text x=\"320\" y=\"308\" text-anchor=\"middle\" class=\"figcap\">All exception types and errors are subclasses of Throwable; the top of the hierarchy.</text>\n  </svg>",
      "alt": "Java exception hierarchy",
      "caption": "All exception types and errors are subclasses of Throwable; the top of the hierarchy."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "important-methods-of-the-throwable-class",
      "text": "Important methods of the throwable class"
    },
    {
      "type": "table",
      "head": [
        "Method",
        "Returns / does"
      ],
      "rows": [
        [
          "<code class=\"inl\">getMessage()</code>",
          "A detailed message about the exception (initialized in the Throwable constructor)"
        ],
        [
          "<code class=\"inl\">getCause()</code>",
          "The cause of the exception as a Throwable object"
        ],
        [
          "<code class=\"inl\">toString()</code>",
          "The class name concatenated with the result of getMessage()"
        ],
        [
          "<code class=\"inl\">printStackTrace()</code>",
          "Prints toString() plus the stack trace to <b>System.err</b> (the error output stream)"
        ],
        [
          "<code class=\"inl\">getStackTrace()</code>",
          "An array of StackTraceElement: element 0 is the top of the call stack, the last is the bottom"
        ],
        [
          "<code class=\"inl\">fillInStackTrace()</code>",
          "Fills this Throwable with the current stack trace, adding to previous information"
        ]
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "try-catch-protected-code",
      "text": "try / catch: protected code"
    },
    {
      "type": "paragraph",
      "html": "A method catches an exception with a combination of the <code class=\"inl\">try</code> and <code class=\"inl\">catch</code> keywords. A try/catch block is placed around the code that might throw; the code inside is called <b>protected code</b>:"
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "ExcepTest.java",
        "tag": "Java"
      },
      "html": "<code>public class ExcepTest\n{\n    public static void main(String args[])\n    {\n        try\n        {\n            int a[] = new int[2];\n            System.out.println(\"Access element in third index :\" + a[3]);\n        }\n        catch (ArrayIndexOutOfBoundsException e)\n        {\n            System.out.println(\"Exception thrown :\" + e);\n        }\n        System.out.println(\"Out of the block\");\n    }\n}</code>"
    },
    {
      "type": "paragraph",
      "html": "You can attach <b>multiple catch blocks</b> for different exception types, and try/catch blocks can be <b>nested</b>, useful when a part of a block may cause one error and the whole block another:"
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "Excepnested.java",
        "tag": "Java"
      },
      "html": "<code>public class Excepnested\n{\n    public static void main(String args[])\n    {\n        try\n        {\n            try\n            {\n                System.out.println(\"going to divide\");\n                int b = 39 / 0;                       // ArithmeticException\n            }\n            catch (ArithmeticException e) { System.out.println(e); }\n\n            try\n            {\n                int a[] = new int[5];\n                a[5] = 4;                             // ArrayIndexOutOfBoundsException\n            }\n            catch (ArrayIndexOutOfBoundsException e) { System.out.println(e); }\n\n            System.out.println(\"Other Statement\");\n        }\n        catch (Exception e)\n        {\n            System.out.println(\"handled\");\n        }\n        System.out.println(\"normal flow..\");\n    }\n}</code>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "the-finally-block",
      "text": "The finally block"
    },
    {
      "type": "paragraph",
      "html": "The <b>finally</b> block executes <b>important code</b> such as closing a connection or stream, and it is <b>always executed whether the exception is handled or not</b>. A finally block must follow a try or catch block; each try may have zero or more catch blocks but <b>only one finally</b>:"
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "TestFinallyBlock.java",
        "tag": "Java"
      },
      "html": "<code>public class TestFinallyBlock\n{\n    public static void main(String args[])\n    {\n        try\n        {\n            int data = 25 / 0;                     // ArithmeticException\n            System.out.println(data);\n        }\n        catch (NullPointerException e)             // WRONG type, not caught\n        {\n            System.out.println(e);\n        }\n        finally\n        {\n            System.out.println(\"finally block is always executed\");\n        }\n        System.out.println(\"rest of the code...\");\n    }\n}</code>"
    },
    {
      "type": "paragraph",
      "html": "Study this output carefully: the exception was <b>not caught</b> (an ArithmeticException can’t match a NullPointerException handler), yet the finally block still ran before the program terminated. That’s the whole point of finally, cleanup code that runs no matter what."
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Important facts",
      "html": "1. A catch clause <b>cannot exist without a try</b> statement. &nbsp;2. finally is <b>not compulsory</b> with try/catch. &nbsp;3. A try block <b>cannot stand alone</b>; it needs at least one catch or a finally. &nbsp;4. <b>No code may sit between</b> try, catch and finally blocks."
    },
    {
      "type": "callout",
      "variant": "warn",
      "title": "Swallowing exceptions = bad practice",
      "html": "Catching an exception with an <b>empty catch body</b> is called swallowing the exception. The program hides the failure silently; the lecture explicitly flags this as bad programming practice."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "throw-vs-throws",
      "text": "throw vs throws"
    },
    {
      "type": "table",
      "head": [
        "throw",
        "throws"
      ],
      "rows": [
        [
          "Used to <b>explicitly throw</b> an exception",
          "Used to <b>declare</b> an exception in a method signature"
        ],
        [
          "Followed by an <b>instance</b>: <code class=\"inl\">throw new ArithmeticException(\"divided by 0\");</code>",
          "Followed by <b>class names</b>: <code class=\"inl\">throws IOException, InterruptedException</code>"
        ],
        [
          "Used <b>inside the method body</b>",
          "Used at the <b>end of the method signature</b>"
        ],
        [
          "Throws <b>one</b> exception at a time",
          "Declares <b>multiple</b> exceptions, comma-separated"
        ],
        [
          "Mainly used for <b>custom exceptions</b>",
          "Works like the catch-or-throw rule: passes the duty to the caller"
        ]
      ]
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "throwExample.java",
        "tag": "Java"
      },
      "html": "<code>public class Example\n{\n    void checkAge(int age)\n    {\n        if (age &lt; 18)\n            throw new ArithmeticException(\"Not Eligible for voting\");\n        else\n            System.out.println(\"Eligible for voting\");\n    }\n\n    public static void main(String args[])\n    {\n        Example obj = new Example();\n        obj.checkAge(13);\n        System.out.println(\"End Of Program\");\n    }\n}</code>"
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "throwsExample.java",
        "tag": "Java"
      },
      "html": "<code>public class Example\n{\n    int division(int a, int b) throws ArithmeticException   // declared\n    {\n        int t = a / b;\n        return t;\n    }\n\n    public static void main(String args[])\n    {\n        Example obj = new Example();\n        try\n        {\n            System.out.println(obj.division(15, 0));\n        }\n        catch (ArithmeticException e)\n        {\n            System.out.println(\"You shouldn't divide number by zero\");\n        }\n    }\n}</code>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "declaring-your-own-exceptions",
      "text": "Declaring your own exceptions"
    },
    {
      "type": "paragraph",
      "html": "You can create custom exception classes. Rules: all exceptions must be <b>children of Throwable</b>; to write a <b>checked</b> exception (enforced by the Handle-or-Declare rule), extend <code class=\"inl\">Exception</code>; to write a <b>runtime</b> exception, extend <code class=\"inl\">RuntimeException</code>. An exception class is like any other class; it can carry useful fields and methods:"
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "InsufficientFundsException.java",
        "tag": "Java"
      },
      "html": "<code>public class InsufficientFundsException extends Exception   // checked exception\n{\n    private double amount;\n\n    public InsufficientFundsException(double amount)\n    {\n        this.amount = amount;\n    }\n\n    public double getAmount()\n    {\n        return amount;\n    }\n}</code>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "advantages-of-exceptions",
      "text": "Advantages of exceptions"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Propagating errors up the call stack</b>, low-level code throws, high-level code decides.",
        "<b>Grouping and differentiating error types</b>: separate handler classes for separate failure kinds.",
        "<b>Separating error-handling code from “regular” code</b>; the happy path stays readable."
      ]
    },
    {
      "type": "accordion",
      "items": [
        {
          "title": "Exercise set I: exceptions",
          "html": "<ol>\n        <li>Define an exception. What happens to program flow when one occurs?</li>\n        <li>Give three typical reasons for exceptions from the lecture.</li>\n        <li>Compare checked exceptions, unchecked exceptions and errors (who checks them, examples).</li>\n        <li>Which class sits at the top of the exception hierarchy? Name three of its useful methods.</li>\n        <li>What is “protected code”? Write a try/catch that handles division by zero.</li>\n        <li>When does the finally block run? Write a case where the exception is NOT caught, does finally still run?</li>\n        <li>State four structural facts about try/catch/finally (what can exist without what).</li>\n        <li>Give three differences between throw and throws.</li>\n        <li>How do you declare a custom checked exception? A custom runtime exception?</li>\n        <li>What is “swallowing an exception” and why is it bad?</li>\n      </ol>\n      <button class=\"reveal-btn\">Show answers</button>\n      <div class=\"solution\"><div class=\"sol-label\">Answers</div>\n        <ol>\n          <li>An exceptional event during execution that disrupts the normal flow of instructions; processing terminates unless handled.</li>\n          <li>Opening a non-existing file; network connection problem; operands out of range; missing class file; invalid user input (any three).</li>\n          <li>Checked: predicted by programmer, compiler verifies handling (FileNotFoundException). Unchecked/runtime: compiler ignores, programmer's duty (ArithmeticException). Errors: beyond control (memory/JVM/hardware), rarely handled.</li>\n          <li>Throwable. Methods: getMessage(), toString(), printStackTrace(), getCause(), getStackTrace(), fillInStackTrace() (any three).</li>\n          <li>Code inside a try block. <code class=\"inl\">try { int x = 5/0; } catch (ArithmeticException e) { System.out.println(e); }</code></li>\n          <li>Always: whether the exception is handled or not, even when no catch matches (see TestFinallyBlock output).</li>\n          <li>No catch without try; finally is optional; try needs at least one catch or finally; no code between try/catch/finally blocks.</li>\n          <li>throw: explicit, in the body, one instance at a time. throws: declaration, at the signature, comma-separated class names, multiple allowed.</li>\n          <li>Extend Exception (checked), e.g. class MyException extends Exception { }; extend RuntimeException for unchecked.</li>\n          <li>Catching an exception with an empty catch block; it hides failures silently; considered bad practice.</li>\n        </ol>\n      </div>"
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Topic 9 Quiz: Exceptions",
      "count": 8,
      "quizSlug": "09-exception-handling"
    }
  ]
};

export default chapter;
