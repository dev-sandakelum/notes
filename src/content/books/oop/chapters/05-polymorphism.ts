import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "05-polymorphism",
    "number": 5,
    "title": "Polymorphism",
    "subtitle": "Lesson 03 (Part 2) · Method overloading, overriding, dynamic & static binding",
    "kind": "topic",
    "words": 1007,
    "minutes": 5
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "what-is-polymorphism",
      "text": "What is polymorphism?"
    },
    {
      "type": "paragraph",
      "html": "<b>Poly-morphism</b> means the ability to have <b>multiple forms (shapes) of the same thing</b>. In Java, polymorphism is <b>the capability of an action or method to do different things based on the object it is acting upon</b>. Inheritance supplies the machinery (subclass objects can stand in for superclass references), and polymorphism supplies the payoff; the same method call produces different behavior depending on the actual object."
    },
    {
      "type": "figure",
      "svg": "<svg class=\"fig\" viewBox=\"0 0 560 220\" role=\"img\" aria-label=\"Polymorphism types\">\n    <rect x=\"200\" y=\"15\" width=\"160\" height=\"36\" rx=\"9\" class=\"boxp\"></rect>\n    <text x=\"280\" y=\"38\" text-anchor=\"middle\" class=\"lbl\">Polymorphism</text>\n    <path d=\"M240 51 L120 95\" class=\"ln\"></path><polygon points=\"120,95 130,90 128,100\" fill=\"var(--axis)\"></polygon>\n    <path d=\"M320 51 L440 95\" class=\"ln\"></path><polygon points=\"440,95 432,88 434,99\" fill=\"var(--axis)\"></polygon>\n    <rect x=\"20\" y=\"95\" width=\"220\" height=\"52\" rx=\"9\" class=\"box\"></rect>\n    <text x=\"130\" y=\"116\" text-anchor=\"middle\" class=\"lbl\">Compile Time (Static)</text>\n    <text x=\"130\" y=\"134\" text-anchor=\"middle\">Early Binding</text>\n    <rect x=\"320\" y=\"95\" width=\"220\" height=\"52\" rx=\"9\" class=\"box\"></rect>\n    <text x=\"430\" y=\"116\" text-anchor=\"middle\" class=\"lbl\">Run Time (Dynamic)</text>\n    <text x=\"430\" y=\"134\" text-anchor=\"middle\">Late Binding</text>\n    <rect x=\"45\" y=\"175\" width=\"170\" height=\"34\" rx=\"9\" class=\"boxa\"></rect>\n    <text x=\"130\" y=\"197\" text-anchor=\"middle\">Method Overloading</text>\n    <rect x=\"345\" y=\"175\" width=\"170\" height=\"34\" rx=\"9\" class=\"boxa\"></rect>\n    <text x=\"430\" y=\"197\" text-anchor=\"middle\">Method Overriding</text>\n  </svg>",
      "alt": "Polymorphism types",
      "caption": "The two faces of Java polymorphism and the binding that resolves each."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "method-overloading-compile-time-static-polymorphism",
      "text": "Method overloading (compile-time / static polymorphism)"
    },
    {
      "type": "paragraph",
      "html": "<b>Method overloading</b> is creating multiple methods with the <b>same name within the same class</b>, as long as they have <b>different parameter lists</b>. It lets one method name serve many contexts, making code more concise and readable; the same idea as constructor overloading. There are exactly <b>three ways</b> to overload:"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">1. Different number of arguments</div><div class=\"f-b\"><code class=\"inl\">sum(int a, int b)</code><br><code class=\"inl\">sum(int a, int b, int c)</code></div></div>\n    <div class=\"fcard\"><div class=\"f-t\">2. Different data types</div><div class=\"f-b\"><code class=\"inl\">sum(int a, int b)</code><br><code class=\"inl\">sum(double a, double b)</code></div></div>\n    <div class=\"fcard\"><div class=\"f-t\">3. Different sequence of types</div><div class=\"f-b\"><code class=\"inl\">sum(double a, int b)</code><br><code class=\"inl\">sum(int a, double b)</code></div></div>\n    <div class=\"fcard\"><div class=\"f-t\">NOT by return type</div><div class=\"f-b\">Changing only the return type <b>does not</b> overload a method; it causes ambiguity and won’t compile.</div></div>\n  </div>",
      "alt": "Formula reference cards"
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "Overloading.java",
        "tag": "Java"
      },
      "html": "<code>class Calculation\n{\n    void sum(int a, int b)                        // 2 ints\n    {\n        System.out.println(a + b);\n    }\n    void sum(int a, int b, int c)                 // different number of arguments\n    {\n        System.out.println(a + b + c);\n    }\n    void sum(double a, double b)                  // different data types\n    {\n        System.out.println(a + b);\n    }\n    void sum(double a, int b) { }                 // different sequence\n    void sum(int a, double b) { }\n\n    public static void main(String args[])\n    {\n        Calculation obj = new Calculation();\n        obj.sum(10, 10, 10);      // picks sum(int,int,int)   -&gt; 30\n        obj.sum(20, 20);          // picks sum(int,int)       -&gt; 40\n        obj.sum(10.5, 10.5);      // picks sum(double,double) -&gt; 21.0\n    }\n}</code>"
    },
    {
      "type": "paragraph",
      "html": "Which overload runs is decided at <b>compile time</b> from the number and types of the arguments; that is why it is called <i>static</i> or <i>early-bound</i> polymorphism. (Homework thread: <b>type promotion</b>: when no exact match exists, Java promotes smaller types, e.g. <code class=\"inl\">int</code> → <code class=\"inl\">long</code> → <code class=\"inl\">double</code>, to find a compatible overload.)"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "method-overriding-runtime-dynamic-polymorphism",
      "text": "Method overriding (runtime / dynamic polymorphism)"
    },
    {
      "type": "paragraph",
      "html": "An instance method in a subclass with the <b>same signature and return type</b> as a superclass method <b>overrides</b> it. The classic demonstration:"
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "OverridingDemo.java",
        "tag": "Java"
      },
      "html": "<code>class Human\n{\n    public void eat()\n    {\n        System.out.println(\"Human is eating\");\n    }\n}\n\nclass Boy extends Human\n{\n    @Override\n    public void eat()                     // overrides Human.eat()\n    {\n        System.out.println(\"Boy is eating\");\n    }\n\n    public static void main(String args[])\n    {\n        Boy nimal = new Boy();\n        nimal.eat();                      // Boy's version wins\n    }\n}</code>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "dynamic-binding-late-binding",
      "text": "Dynamic binding (late binding)"
    },
    {
      "type": "paragraph",
      "html": "Because any derived class object can be assigned to a base class variable (<code class=\"inl\">Vehicle v = new Car();</code>), Java supports <b>polymorphic behavior</b>: if <code class=\"inl\">Car</code> overrides <code class=\"inl\">start()</code>, then <code class=\"inl\">v.start()</code> calls <b>Car’s version</b>: even though the variable is declared as <code class=\"inl\">Vehicle</code>. The <b>type of the object</b> assigned to the variable determines the method that is called."
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "DynamicBindingDemo.java",
        "tag": "Java"
      },
      "html": "<code>// Vehicle.start() prints \"Starting ....\"\n// Car.start()    prints \"Car is Starting ....\"\n\nCar c = new Car();\nc.start();        // Car is Starting ....\n\nVehicle v = new Car();\nv.start();        // Car is Starting ....  &lt;-- Car's version, not Vehicle's</code>"
    },
    {
      "type": "paragraph",
      "html": "When the compiler sees <code class=\"inl\">v.start();</code> it knows <code class=\"inl\">v</code> is of type <code class=\"inl\">Vehicle</code>, but it also knows <code class=\"inl\">v</code> could reference <b>any class derived from Vehicle</b>, so the compiler <b>cannot know</b> which version to call. Only when the assignment <code class=\"inl\">Vehicle v = new Car();</code> executes at <b>runtime</b> is the correct version determined. This is <b>dynamic binding / late binding</b>: deciding at run time which method to invoke. In Java, instance methods are dynamically bound, with a few exceptions: <b>private methods, constructors (&lt;init&gt;), super invocations, and final methods</b>."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "static-binding-early-binding",
      "text": "Static binding (early binding)"
    },
    {
      "type": "paragraph",
      "html": "<b>Static binding</b> occurs when the compiler can determine the correct version <b>during compile time</b>, before the program runs. All <b>static method calls</b> are resolved at compile time, and, a favourite exam fact. <b>member variables also have static binding</b>, because Java does not support dynamic binding for fields:"
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "FieldBinding.java",
        "tag": "Java"
      },
      "html": "<code>// Vehicle declares:  String color = \"White\";\n// Car declares:       String color = \"Red\";\n\nCar c = new Car();\nSystem.out.println(c.color);     // Red   (c is declared as Car)\n\nVehicle v = new Car();           // the object is still a Car...\nSystem.out.println(v.color);     // White &lt;-- but fields bind to the REFERENCE type\n</code>"
    },
    {
      "type": "paragraph",
      "html": "The value of a member variable is determined at <b>compile time</b> based on the reference type, not the object type. Methods: object type decides. Fields: reference type decides. This asymmetry is exactly the “hiding fields” idea from Topic 4."
    },
    {
      "type": "table",
      "head": [
        "",
        "Method Overloading",
        "Method Overriding"
      ],
      "rows": [
        [
          "Where",
          "Same class (or inherited into one)",
          "Subclass overrides a superclass method"
        ],
        [
          "Signature",
          "Same name, <b>different parameter lists</b>",
          "Same name, <b>same parameter list</b> + same (covariant) return type"
        ],
        [
          "Binding",
          "<b>Compile time</b> (static / early binding)",
          "<b>Run time</b> (dynamic / late binding)"
        ],
        [
          "Polymorphism type",
          "Static polymorphism",
          "Dynamic polymorphism"
        ],
        [
          "Annotation",
          "Not applicable",
          "<code class=\"inl\">@Override</code> recommended"
        ]
      ]
    },
    {
      "type": "accordion",
      "items": [
        {
          "title": "Exercise set E: polymorphism",
          "html": "<ol>\n        <li>Define polymorphism in one sentence.</li>\n        <li>Name the two types of polymorphism in Java, their alternative names, and which mechanism implements each.</li>\n        <li>List the three valid ways to overload a method and the one invalid way.</li>\n        <li>For <code class=\"inl\">Vehicle v = new Car();</code>: which version of <code class=\"inl\">start()</code> runs and why?</li>\n        <li>Which four kinds of methods are NOT dynamically bound?</li>\n        <li>If both Vehicle and Car declare a field <code class=\"inl\">color</code>, what does <code class=\"inl\">v.color</code> print after <code class=\"inl\">Vehicle v = new Car();</code>? Why?</li>\n      </ol>\n      <button class=\"reveal-btn\">Show answers</button>\n      <div class=\"solution\"><div class=\"sol-label\">Answers</div>\n        <ol>\n          <li>The capability of a method/action to do different things based on the object it acts upon (many forms of the same thing).</li>\n          <li>Compile-time (static, early binding) = method overloading; run-time (dynamic, late binding) = method overriding.</li>\n          <li>Change the number of arguments / the data types / the sequence of data types. Invalid: changing only the return type.</li>\n          <li>Car's version: the type of the object assigned to the variable determines the method called (dynamic binding).</li>\n          <li>private methods, constructors (&lt;init&gt;), super invocations, final methods.</li>\n          <li>Vehicle's value (\"White\"): member variables use static binding: the reference (declared) type decides at compile time.</li>\n        </ol>\n      </div>"
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Topic 5 Quiz: Polymorphism",
      "count": 7,
      "quizSlug": "05-polymorphism"
    }
  ]
};

export default chapter;
