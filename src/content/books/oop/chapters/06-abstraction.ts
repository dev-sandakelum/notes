import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "06-abstraction",
    "number": 6,
    "title": "Abstraction",
    "subtitle": "Lesson 03 (Part 3) · Abstract methods, abstract classes, hands-on",
    "kind": "topic",
    "words": 818,
    "minutes": 4
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "what-is-abstraction",
      "text": "What is abstraction?"
    },
    {
      "type": "paragraph",
      "html": "“We (humans) have developed an exceptionally powerful technique for dealing with complexity: <b>we abstract from it</b>. Unable to master the entirety of a complex object, we choose to <b>ignore its inessential details</b>, dealing instead with the <b>generalized, idealized model</b> of the object.” (Wulf)"
    },
    {
      "type": "paragraph",
      "html": "Abstraction means <b>extracting only the necessary details</b>. A class represents a real-world entity, and it should contain <b>only the essential details matching the problem domain</b> — think of how a non-medical person models a Cat (cute, has fur, meows) versus how a veterinary surgeon models one (organs, blood pressure, anatomy). Same animal, different level of abstraction."
    },
    {
      "type": "paragraph",
      "html": "In Java, <b>abstraction is a mechanism that reduces the complexity of a system by hiding its implementation details from the user</b>. The user only sees what is necessary to perform a task. Everyday example: when you <b>send an SMS</b> you just type text and press send — you don’t know the internal processing of message delivery. That’s abstraction at work."
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "How is abstraction achieved in Java?",
      "html": "Through <b>abstract classes</b> (0–100% abstraction) and <b>interfaces</b> (100% abstraction — Topic 8)."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "abstract-methods",
      "text": "Abstract methods"
    },
    {
      "type": "paragraph",
      "html": "An <b>abstract method</b> is declared with the <code class=\"inl\">abstract</code> keyword and <b>has no implementation (no body)</b> — it ends with a semicolon:"
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "Abstract method",
        "tag": "Java"
      },
      "html": "<code>abstract void printStatus();     // no body, no { } — just a signature</code>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "abstract-classes",
      "text": "Abstract classes"
    },
    {
      "type": "paragraph",
      "html": "An <b>abstract class</b> is declared with the <code class=\"inl\">abstract</code> keyword (placed before <code class=\"inl\">class</code>). Its defining properties:"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Cannot be instantiated</b> — you can never write <code class=\"inl\">new Bike()</code> for an abstract Bike.",
        "<b>Can be extended</b> by other classes — that is its whole purpose.",
        "Can contain <b>both abstract and concrete</b> (implemented) methods.",
        "Abstract methods <b>must be overridden</b> by any concrete (non-abstract) subclass.",
        "All other class functionality still exists — its <b>fields, methods and constructors are accessed in the same manner</b> as usual (yes, abstract classes CAN have constructors — a beloved exam question)."
      ]
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "TestAbstraction.java",
        "tag": "Java"
      },
      "html": "<code>public abstract class Bike\n{\n    Bike()                                  // constructor inside an abstract class!\n    {\n        System.out.println(\"bike is created\");\n    }\n\n    abstract void run();                    // abstract method — no body\n\n    void changeGear()                       // concrete method — has a body\n    {\n        System.out.println(\"gear changed\");\n    }\n}\n\npublic class Honda extends Bike\n{\n    void run()                              // MUST implement run()\n    {\n        System.out.println(\"running safely..\");\n    }\n}\n\nclass TestAbstraction\n{\n    public static void main(String args[])\n    {\n        Bike obj = new Honda();             // upcasting: abstract ref, concrete object\n        obj.run();\n        obj.changeGear();\n    }\n}</code>"
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Two rules that guarantee marks",
      "html": "1. If there is <b>any abstract method in a class, that class must be declared abstract</b>. &nbsp;2. If you extend an abstract class that has abstract methods, you must <b>either implement all of them or declare your class abstract too</b>."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "abstract-vs-concrete-classes",
      "text": "Abstract vs concrete classes"
    },
    {
      "type": "table",
      "head": [
        "Abstract class",
        "Concrete class"
      ],
      "rows": [
        [
          "Declared with <code class=\"inl\">abstract</code>",
          "Declared without <code class=\"inl\">abstract</code>"
        ],
        [
          "Cannot be instantiated",
          "Can be instantiated with <code class=\"inl\">new</code>"
        ],
        [
          "May contain abstract methods",
          "Cannot contain abstract methods"
        ],
        [
          "Must be extended to be useful",
          "Can be used directly or extended"
        ],
        [
          "Provides partial (0–100%) abstraction",
          "Provides no abstraction by itself"
        ]
      ]
    },
    {
      "type": "example",
      "title": "Worked example — can this compile?",
      "bodyHtml": "<div class=\"cb\">\n      <div class=\"cb-head\"><span>Shapes.java</span><span class=\"lang\">Java</span></div>\n      <pre class=\"code\"><code>abstract class Shape\n{\n    abstract double area();               // abstract\n    void describe()                      // concrete\n    {\n        System.out.println(\"I am a shape\");\n    }\n}\n\nclass Circle extends Shape               // \"concrete\" subclass\n{\n    double radius = 2.0;\n    // NOTE: area() is NOT implemented here\n}\n\nclass Main\n{\n    public static void main(String[] args)\n    {\n        Shape s = new Circle();\n    }\n}</code></pre>\n    </div>",
      "solutionHtml": "<p><b>It does not compile.</b> <code class=\"inl\">Circle</code> extends the abstract class <code class=\"inl\">Shape</code> but does not implement the inherited abstract method <code class=\"inl\">area()</code>. Two possible fixes:</p>\n      <ul>\n        <li>Implement it: add <code class=\"inl\">double area() { return Math.PI * radius * radius; }</code> inside Circle; or</li>\n        <li>Declare <code class=\"inl\">Circle</code> abstract too: <code class=\"inl\">abstract class Circle extends Shape { }</code> — but then Circle also cannot be instantiated, so <code class=\"inl\">new Circle()</code> would fail.</li>\n      </ul>"
    },
    {
      "type": "accordion",
      "items": [
        {
          "title": "Exercise set F — abstraction ▾",
          "html": "<ol>\n        <li>Define abstraction in the context of OOP, in one sentence.</li>\n        <li>Give the SMS example of abstraction from the lecture.</li>\n        <li>What two mechanisms achieve abstraction in Java, and what percentage of abstraction does each provide?</li>\n        <li>Write the declaration of an abstract method <code class=\"inl\">printStatus()</code>.</li>\n        <li>State the two guaranteed-marks rules about abstract methods and classes.</li>\n        <li>Can an abstract class have a constructor? If yes, when does it run?</li>\n        <li>How can subclass objects access the concrete methods inside an abstract class?</li>\n      </ol>\n      <button class=\"reveal-btn\">Show answers</button>\n      <div class=\"solution\"><div class=\"sol-label\">Answers</div>\n        <ol>\n          <li>A mechanism that reduces system complexity by hiding implementation details, showing the user only what is necessary.</li>\n          <li>Sending an SMS: you type text and send — the internal delivery processing is hidden from you.</li>\n          <li>Abstract classes (0–100%) and interfaces (100%).</li>\n          <li><code class=\"inl\">abstract void printStatus();</code> — no body, ends with a semicolon.</li>\n          <li>A class with any abstract method must itself be abstract; a subclass must implement all inherited abstract methods or be declared abstract.</li>\n          <li>Yes. It runs when a concrete subclass object is created (via super() in the chain) — see the Bike/Honda example printing \"bike is created\".</li>\n          <li>By creating an object of a concrete subclass and calling the inherited concrete method through it (e.g. <code class=\"inl\">obj.changeGear()</code> where obj is a Bike reference to a Honda).</li>\n        </ol>\n      </div>"
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Topic 6 Quiz — Abstraction",
      "count": 6,
      "quizSlug": "06-abstraction"
    }
  ]
};

export default chapter;
