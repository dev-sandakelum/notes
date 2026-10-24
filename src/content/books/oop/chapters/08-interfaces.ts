import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "08-interfaces",
    "number": 8,
    "title": "Interfaces",
    "subtitle": "Lesson 04 · Contracts, rules, default & static methods, abstract class vs interface",
    "kind": "topic",
    "words": 1554,
    "minutes": 8
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "interfaces-are-contracts",
      "text": "Interfaces are contracts"
    },
    {
      "type": "paragraph",
      "html": "There are situations in software engineering where disparate groups of programmers must agree to a <b>“contract”</b> that spells out how their software interacts, each group writing its code <b>without any knowledge of how the other group’s code is written</b>. <b>Interfaces are such contracts.</b>"
    },
    {
      "type": "paragraph",
      "html": "An interface is a <b>reference type</b>, similar to a class, that can contain only <b>constants</b> and <b>method signatures</b> (plus, since Java 8, <b>default</b> and <b>static</b> methods with bodies, and nested types). Key facts:"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "A class <b>implements</b> an interface by providing code for <b>each method</b> the interface declares.",
        "A class can extend only <b>one</b> other class, but can implement <b>as many interfaces as you need</b>; this is how Java escapes the multiple-inheritance ban.",
        "Interfaces <b>cannot be instantiated</b>: only implemented by classes or extended by other interfaces.",
        "An interface can’t be used as a base class (a class never <code class=\"inl\">extends</code> an interface)."
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "interface-syntax-and-first-example",
      "text": "Interface syntax & first example"
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "Interface syntax",
        "tag": "Java"
      },
      "html": "<code>AccessModifier interface Name\n{\n    // public static final variables (constants)\n    type varname1 = value;\n    ...\n    // public abstract methods\n    return-type methodname1(para-list);\n    ...\n}</code>"
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "PrintableDemo.java",
        "tag": "Java"
      },
      "html": "<code>// Define an interface\npublic interface Printable\n{\n    void print();\n}\n\n// Implement the interface\npublic class MyDocument implements Printable\n{\n    public void print()\n    {\n        System.out.println(\"Printing the document...\");\n    }\n}\n\n// Use it\npublic class Test\n{\n    public static void main(String[] args)\n    {\n        MyDocument doc = new MyDocument();\n        doc.print();\n    }\n}</code>"
    },
    {
      "type": "paragraph",
      "html": "Both declarations below are legal and functionally identical; the second is encouraged:"
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "Declarations",
        "tag": "Java"
      },
      "html": "<code>public abstract interface Rollable { }    // legal\npublic interface Rollable { }             // legal, encouraged</code>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "strict-rules-exam-gold",
      "text": "Strict rules (exam gold)"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">Methods are implicitly public abstract</div><div class=\"f-b\"><code class=\"inl\">void bounce();</code>, <code class=\"inl\">public void bounce();</code>, <code class=\"inl\">abstract public void bounce();</code>: all five combinations are <b>legal and identical</b>.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Forbidden method modifiers</div><div class=\"f-b\"><code class=\"inl\">final</code> (final + abstract never mix), <code class=\"inl\">private</code>, <code class=\"inl\">protected</code>, and <code class=\"inl\">static</code> (without a body), all fail to compile. Only <b>default</b> and <b>static</b> methods may have bodies.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Fields are implicitly public static final</div><div class=\"f-b\">All fields in an interface are <b>constants</b>. Any combination of modifiers (or none) compiles, you always get public static final.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Interface cannot be private/protected</div><div class=\"f-b\">Top-level interfaces can’t be declared <code class=\"inl\">private</code>, <code class=\"inl\">protected</code> or <code class=\"inl\">transient</code>.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Extends: never implements</div><div class=\"f-b\">An interface can <b>extend one or more other interfaces</b>, but cannot implement anything, and cannot extend a class.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Implement everything or be abstract</div><div class=\"f-b\">A class that doesn’t implement <b>all</b> interface methods must itself be declared <b>abstract</b>.</div></div>\n  </div>",
      "alt": "Formula reference cards"
    },
    {
      "type": "example",
      "title": "Worked example: the BAR trap",
      "bodyHtml": "<div class=\"cb\">\n      <div class=\"cb-head\"><span>Zap.java: what goes wrong?</span><span class=\"lang\">Java</span></div>\n      <pre class=\"code\"><code>interface Foo\n{\n    int BAR = 42;\n    void go();\n}\n\nclass Zap implements Foo\n{\n    public void go()\n    {\n        BAR = 27;      // ???\n    }\n}</code></pre>\n    </div>",
      "solutionHtml": "<p><b>Compile error.</b> <code class=\"inl\">BAR</code> looks like an ordinary variable, but inside an interface every field is implicitly <code class=\"inl\">public static final</code>, a <b>constant</b>. You cannot assign to a final variable, so <code class=\"inl\">BAR = 27;</code> is illegal. Also remember: interface variables <b>must be initialized at declaration</b> (e.g. <code class=\"inl\">int BAR = 42;</code>), or the compiler throws an error.</p>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "implementing-interfaces",
      "text": "Implementing interfaces"
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "Implementing syntax: one or many",
        "tag": "Java"
      },
      "html": "<code>// to implement, a class must do TWO things:\n//   1. add an implements clause\n//   2. provide an implementation for EVERY declared method\n\naccessmodifier class MyClass implements InterfaceName { ... }\n\naccessmodifier class MyClass implements Inter1, Inter2, ... InterN { ... }</code>"
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "Tire.java + partial implementation",
        "tag": "Java"
      },
      "html": "<code>interface Bounceable\n{\n    void bounce();\n    void setBounceFactor(int bf);\n}\n\nclass Tire implements Bounceable          // full implementation\n{\n    public void bounce() { }\n    public void setBounceFactor(int bf) { }\n}\n\n// If the interface is NOT fully implemented, the class must be abstract:\ninterface Callback { void callback(int param); }\n\nabstract class CallbackAbs implements Callback   // partial -&gt; abstract\n{\n    int a, b;\n    void show() { System.out.println(a + \" \" + b); }\n    // callback() still missing. OK only because the class is abstract\n}</code>"
    },
    {
      "type": "callout",
      "variant": "warn",
      "title": "Rule of visibility",
      "html": "When a class implements any interface method, that method must be declared <code class=\"inl\">public</code>, interface methods are implicitly public, and an implementation cannot reduce visibility."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "extending-interfaces-interface-inheritance",
      "text": "Extending interfaces (interface inheritance)"
    },
    {
      "type": "paragraph",
      "html": "An interface that extends another is a <b>subinterface</b>; the one being extended is the <b>superinterface</b>. With <code class=\"inl\">extends</code>, all fields and methods of the superinterface are effectively copied into the subinterface. Unlike classes, an interface may extend <b>multiple</b> interfaces:"
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "PlayableBall.java",
        "tag": "Java"
      },
      "html": "<code>public interface ThrowableBall\n{\n    void throwBall();\n    void catchBall();\n}\n\npublic interface KickableBall\n{\n    void kickBall();\n    void catchBall();\n}\n\npublic interface PlayableBall extends ThrowableBall, KickableBall   // multiple\n{\n    void dropBall();\n}\n\n// A class implementing PlayableBall must now implement\n// throwBall(), kickBall(), catchBall() AND dropBall()\n// (a method appearing in two interfaces only needs ONE implementation), or be abstract.</code>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "using-an-interface-as-a-type-and-callbacks",
      "text": "Using an interface as a type & callbacks"
    },
    {
      "type": "paragraph",
      "html": "An interface is a <b>type</b>, just like a class or abstract class, you can use it as the type of a <b>variable, a parameter, or a method return value</b>:"
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "InterfaceAsType.java",
        "tag": "Java"
      },
      "html": "<code>interface A { void methA1(); void methA2(); }\ninterface B extends A { void methB1(); }\n\npublic class MyClass implements B\n{\n    public void methA1() { System.out.println(\"Implement meth1().\"); }\n    public void methA2() { System.out.println(\"Implement meth2().\"); }\n    public void methB1() { System.out.println(\"Implement meth3().\"); }\n\n    public static void main(String[] args)\n    {\n        B myClass = new MyClass();      // interface as the variable's type\n        myClass.methA1();\n        myClass.methA2();\n        myClass.methB1();\n    }\n}</code>"
    },
    {
      "type": "paragraph",
      "html": "A <b>callback</b> is a mechanism that lets you pass a function/method as a parameter and have the called code <b>invoke it at a certain point</b>, your code runs without knowing exactly when or how. The most common use is <b>Swing event listeners</b> handling UI events like mouse clicks:"
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "ActionListener",
        "tag": "Java"
      },
      "html": "<code>public interface ActionListener\n{\n    void actionPerformed(ActionEvent e);   // called back when the event fires\n}</code>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "default-and-static-methods-java-8",
      "text": "Default and static methods (Java 8+)"
    },
    {
      "type": "paragraph",
      "html": "After an interface is published and classes implement it, there’s <b>no easy way to add methods</b> without breaking every implementer. The solution: <b>default methods</b>: methods with bodies that supply a fallback implementation used by any class that doesn’t provide its own:"
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "DefaultMethodDemo.java",
        "tag": "Java"
      },
      "html": "<code>public interface Playable\n{\n    void play();\n\n    default void quit()\n    {\n        System.out.println(\"Sorry, quitting is not allowed.\");\n    }\n}\n\nclass Game implements Playable\n{\n    public void play()\n    {\n        System.out.println(\"Good luck\");   // Game does NOT override quit()\n    }\n}\n\nclass Main\n{\n    public static void main(String[] args)\n    {\n        new Game().play();\n        new Game().quit();                  // inherited default body runs\n    }\n}</code>"
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "Static interface method",
        "tag": "Java"
      },
      "html": "<code>public interface MyInterface\n{\n    void myMethod();\n\n    static void myStaticMethod()                       // utility method\n    {\n        System.out.println(\"This is a static method.\");\n    }\n}\n\n// Call it on the interface itself:\nMyInterface.myStaticMethod();</code>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "abstract-class-vs-interface-the-big-table",
      "text": "Abstract class vs interface: the big table"
    },
    {
      "type": "table",
      "head": [
        "",
        "Abstract class",
        "Interface"
      ],
      "rows": [
        [
          "1. Extends",
          "Can extend only <b>one</b> class or abstract class",
          "Can extend <b>any number</b> of interfaces"
        ],
        [
          "2. What it extends",
          "Can extend a concrete class or abstract class",
          "Can only extend another <b>interface</b>"
        ],
        [
          "3. Methods",
          "Can have both <b>abstract and concrete</b> methods",
          "Only abstract methods (plus default/static with bodies)"
        ],
        [
          "4. abstract keyword",
          "<b>Mandatory</b> to declare a method abstract",
          "<b>Optional</b>: abstract is implied"
        ],
        [
          "5. Abstract methods",
          "Can have protected and public abstract methods",
          "Only public abstract methods"
        ],
        [
          "6. Variables",
          "Can have static, final or static-final variables with <b>any</b> access specifier",
          "Only <b>public static final</b> (constant) variables"
        ],
        [
          "7. Constructors",
          "Yes",
          "No"
        ],
        [
          "8. Instantiation",
          "Cannot be instantiated",
          "Cannot be instantiated"
        ]
      ]
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "More key things to remember",
      "html": "If two interfaces declare the <b>same method</b> and a class implements both, <b>one implementation is enough</b>. A class <b>cannot implement two interfaces with same method name but different return types</b>. If interface A and B both declare variable <code class=\"inl\">x</code>, resolve the clash with <code class=\"inl\">A.x</code> and <code class=\"inl\">B.x</code>. A <b>marker (tag) interface</b> has no methods or constants (e.g. <code class=\"inl\">Serializable</code>): it just tags a class as having a property."
    },
    {
      "type": "accordion",
      "items": [
        {
          "title": "Exercise set H: interfaces",
          "html": "<ol>\n        <li>Why are interfaces described as “contracts”?</li>\n        <li>List what an interface can contain (including Java 8 additions).</li>\n        <li>Which five declarations of <code class=\"inl\">bounce()</code> in an interface are legal and identical?</li>\n        <li>Why do <code class=\"inl\">final</code>, <code class=\"inl\">private</code>, <code class=\"inl\">protected</code> and <code class=\"inl\">static</code> (without body) fail on interface methods?</li>\n        <li>What are the implicit modifiers of interface fields? What happens if you try <code class=\"inl\">BAR = 27;</code> in an implementing class?</li>\n        <li>What two things must a class do to implement an interface, and what if it does only the first?</li>\n        <li>Can an interface extend multiple interfaces? Can it implement one? Can a class implement multiple interfaces?</li>\n        <li>What problem do default methods solve? Since which Java version?</li>\n        <li>Give three differences between abstract classes and interfaces.</li>\n      </ol>\n      <button class=\"reveal-btn\">Show answers</button>\n      <div class=\"solution\"><div class=\"sol-label\">Answers</div>\n        <ol>\n          <li>They let separate groups agree on how software interacts, each coding without knowledge of the other's implementation.</li>\n          <li>Constants, method signatures, default methods, static methods (Java 8+), nested types; cannot be instantiated.</li>\n          <li>void bounce(); / public void bounce(); / abstract void bounce(); / abstract public void bounce(); / public abstract void bounce();</li>\n          <li>Interface methods are always public and abstract, final can't combine with abstract; private/protected are impossible (always public); static methods need a body (only default/static may have one).</li>\n          <li>public static final. BAR = 27; is a compile error: you can't assign to a final constant.</li>\n          <li>Add an implements clause AND implement every method; otherwise the class must be declared abstract.</li>\n          <li>Yes, an interface may extend many interfaces; no, it never implements; yes, a class may implement many interfaces.</li>\n          <li>They let you add new methods to an existing interface without breaking classes that already implement it. Java 8 (after 1.8).</li>\n          <li>E.g. abstract class: one superclass, can have constructors &amp; any variables, abstract+concrete methods; interface: multiple inheritance of type, no constructors, only public static final fields, public abstract (+default/static) methods.</li>\n        </ol>\n      </div>"
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Topic 8 Quiz: Interfaces",
      "count": 8,
      "quizSlug": "08-interfaces"
    }
  ]
};

export default chapter;
