import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "04-inheritance",
    "number": 4,
    "title": "Inheritance",
    "subtitle": "Lesson 03 (Part 1) · extends, super, overriding vs hiding, final, casting, instanceof",
    "kind": "topic",
    "words": 1541,
    "minutes": 8
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "what-is-inheritance",
      "text": "What is inheritance?"
    },
    {
      "type": "paragraph",
      "html": "<b>Inheritance</b> is when one object (the <b>subclass</b>) acquires all the properties and behaviors of another object (the <b>superclass</b>). It lets you create classes that are <b>derived</b> from other classes. A class that is derived from another is called a <b>subclass</b> (also <i>derived class, extended class, child class</i>); the class from which it is derived is the <b>superclass</b> (also <i>base class, parent class</i>)."
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "A derived class <b>automatically takes on all the behavior and attributes</b> of its base class, fields, methods, and nested classes are inherited.",
        "A derived class can <b>add features</b> (its own methods and fields) and can also <b>change behavior</b> provided by the base class (overriding).",
        "Inheritance is best used to implement <b>is-a</b> relationships, a Car <i>is a</i> Vehicle. This is why inheritance is sometimes referred to as <b>specialization</b>."
      ]
    },
    {
      "type": "paragraph",
      "html": "The <b>direct superclass</b> is the class the subclass explicitly extends; an <b>indirect superclass</b> is any class above it in the hierarchy. The Java class hierarchy begins with class <b><code class=\"inl\">Object</code></b> (in <code class=\"inl\">java.lang</code>). <b>every class in Java directly or indirectly extends Object</b>. Java supports only <b>single inheritance</b> of classes: each class has exactly <b>one direct superclass</b>."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "creating-subclasses-the-vehicle-car-example",
      "text": "Creating subclasses: the vehicle/car example"
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "Vehicle.java",
        "tag": "Java"
      },
      "html": "<code>public class Vehicle\n{\n    double speed = 40.0;\n    public String color = \"White\";\n\n    public void start()\n    {\n        System.out.println(\"Starting ....\");\n    }\n}</code>"
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "Car.java",
        "tag": "Java"
      },
      "html": "<code>public class Car extends Vehicle      // Car is derived from Vehicle\n{\n    public void drive()               // added behaviour specific to Car\n    {\n        System.out.println(\"Driving ....\");\n    }\n}</code>"
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "VehicleDemo.java",
        "tag": "Java"
      },
      "html": "<code>class VehicleDemo\n{\n    public static void main(String[] args)\n    {\n        System.out.println(\"Creating a Car\");\n        Car c = new Car();\n        c.start();     // inherited from Vehicle\n        c.drive();     // defined in Car\n    }\n}</code>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "access-modifiers-under-inheritance",
      "text": "Access modifiers under inheritance"
    },
    {
      "type": "paragraph",
      "html": "The lecture homework asks you to access <code class=\"inl\">speed</code> through a Car object after changing its modifier to <code class=\"inl\">public</code>, <code class=\"inl\">private</code>, <code class=\"inl\">protected</code> and default. The observed behaviour:"
    },
    {
      "type": "table",
      "head": [
        "Modifier of speed in Vehicle",
        "Can VehicleDemo (other package/class) read c.speed?"
      ],
      "rows": [
        [
          "<code class=\"inl\">public</code>",
          "Yes: visible everywhere"
        ],
        [
          "<code class=\"inl\">protected</code>",
          "Yes if in same package or a subclass; otherwise no"
        ],
        [
          "default (no keyword)",
          "Only within the same package"
        ],
        [
          "<code class=\"inl\">private</code>",
          "No: not even to subclasses; only inside Vehicle itself"
        ]
      ]
    },
    {
      "type": "callout",
      "variant": "warn",
      "title": "Key nuance",
      "html": "Private members are still <b>inherited</b> (they exist inside the subclass object) but they are <b>not directly accessible</b> from subclass code, you need public/protected accessors to reach them."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "types-of-inheritance-in-java",
      "text": "Types of inheritance in Java"
    },
    {
      "type": "figure",
      "svg": "<svg class=\"fig lg\" viewBox=\"0 0 640 330\" role=\"img\" aria-label=\"Inheritance types\">\n    <!-- Single -->\n    <rect x=\"40\" y=\"30\" width=\"120\" height=\"34\" rx=\"8\" class=\"boxp\"></rect><text x=\"100\" y=\"52\" text-anchor=\"middle\" class=\"lbl\">A</text>\n    <rect x=\"40\" y=\"120\" width=\"120\" height=\"34\" rx=\"8\" class=\"box\"></rect><text x=\"100\" y=\"142\" text-anchor=\"middle\">B extends A</text>\n    <path d=\"M100 64 L100 120\" class=\"ln\"></path><polygon points=\"100,120 95,110 105,110\" fill=\"var(--axis)\"></polygon>\n    <text x=\"100\" y=\"180\" text-anchor=\"middle\" class=\"lbl\" fill=\"var(--primary)\">Single</text>\n    <!-- Multilevel -->\n    <rect x=\"210\" y=\"30\" width=\"120\" height=\"34\" rx=\"8\" class=\"boxp\"></rect><text x=\"270\" y=\"52\" text-anchor=\"middle\" class=\"lbl\">A</text>\n    <rect x=\"210\" y=\"120\" width=\"120\" height=\"34\" rx=\"8\" class=\"box\"></rect><text x=\"270\" y=\"142\" text-anchor=\"middle\">B</text>\n    <rect x=\"210\" y=\"210\" width=\"120\" height=\"34\" rx=\"8\" class=\"box\"></rect><text x=\"270\" y=\"232\" text-anchor=\"middle\">C</text>\n    <path d=\"M270 64 L270 120\" class=\"ln\"></path><polygon points=\"270,120 265,110 275,110\" fill=\"var(--axis)\"></polygon>\n    <path d=\"M270 154 L270 210\" class=\"ln\"></path><polygon points=\"270,210 265,200 275,200\" fill=\"var(--axis)\"></polygon>\n    <text x=\"270\" y=\"270\" text-anchor=\"middle\" class=\"lbl\" fill=\"var(--primary)\">Multilevel</text>\n    <!-- Hierarchical -->\n    <rect x=\"380\" y=\"30\" width=\"120\" height=\"34\" rx=\"8\" class=\"boxp\"></rect><text x=\"440\" y=\"52\" text-anchor=\"middle\" class=\"lbl\">A</text>\n    <rect x=\"330\" y=\"120\" width=\"100\" height=\"34\" rx=\"8\" class=\"box\"></rect><text x=\"380\" y=\"142\" text-anchor=\"middle\">B</text>\n    <rect x=\"450\" y=\"120\" width=\"100\" height=\"34\" rx=\"8\" class=\"box\"></rect><text x=\"500\" y=\"142\" text-anchor=\"middle\">C</text>\n    <path d=\"M440 64 L380 120\" class=\"ln\"></path><polygon points=\"380,120 375,111 386,113\" fill=\"var(--axis)\"></polygon>\n    <path d=\"M440 64 L500 120\" class=\"ln\"></path><polygon points=\"500,120 494,111 505,113\" fill=\"var(--axis)\"></polygon>\n    <text x=\"440\" y=\"180\" text-anchor=\"middle\" class=\"lbl\" fill=\"var(--primary)\">Hierarchical</text>\n    <!-- Hybrid -->\n    <rect x=\"540\" y=\"30\" width=\"90\" height=\"34\" rx=\"8\" class=\"boxp\"></rect><text x=\"585\" y=\"52\" text-anchor=\"middle\" class=\"lbl\">A</text>\n    <rect x=\"540\" y=\"120\" width=\"90\" height=\"34\" rx=\"8\" class=\"box\"></rect><text x=\"585\" y=\"142\" text-anchor=\"middle\">B</text>\n    <rect x=\"540\" y=\"210\" width=\"90\" height=\"34\" rx=\"8\" class=\"box\"></rect><text x=\"585\" y=\"232\" text-anchor=\"middle\">D</text>\n    <path d=\"M585 64 L585 120\" class=\"ln\"></path><polygon points=\"585,120 580,110 590,110\" fill=\"var(--axis)\"></polygon>\n    <path d=\"M585 154 L585 210\" class=\"ln\"></path><polygon points=\"585,210 580,200 590,200\" fill=\"var(--axis)\"></polygon>\n    <text x=\"585\" y=\"270\" text-anchor=\"middle\" class=\"lbl\" fill=\"var(--primary)\">Hybrid</text>\n    <text x=\"320\" y=\"310\" text-anchor=\"middle\" fill=\"var(--danger)\" class=\"lbl\">Multiple inheritance of classes: NOT supported in Java (diamond problem)</text>\n  </svg>",
      "alt": "Inheritance types",
      "caption": "The four supported class-inheritance shapes. Arrows point from subclass to superclass."
    },
    {
      "type": "figure",
      "svg": "<svg class=\"fig sm\" viewBox=\"0 0 340 210\" role=\"img\" aria-label=\"Diamond problem\">\n    <rect x=\"120\" y=\"20\" width=\"100\" height=\"34\" rx=\"8\" class=\"boxp\"></rect><text x=\"170\" y=\"42\" text-anchor=\"middle\" class=\"lbl\">A</text>\n    <rect x=\"30\" y=\"95\" width=\"100\" height=\"34\" rx=\"8\" class=\"box\"></rect><text x=\"80\" y=\"117\" text-anchor=\"middle\">B</text>\n    <rect x=\"210\" y=\"95\" width=\"100\" height=\"34\" rx=\"8\" class=\"box\"></rect><text x=\"240\" y=\"117\" text-anchor=\"middle\">C</text>\n    <rect x=\"120\" y=\"170\" width=\"100\" height=\"34\" rx=\"8\" class=\"boxa\"></rect><text x=\"170\" y=\"192\" text-anchor=\"middle\">D ?</text>\n    <path d=\"M80 95 L140 54\" class=\"ln\"></path><polygon points=\"140,54 130,58 137,66\" fill=\"var(--axis)\"></polygon>\n    <path d=\"M240 95 L200 54\" class=\"ln\"></path><polygon points=\"200,54 203,66 210,58\" fill=\"var(--axis)\"></polygon>\n    <path d=\"M100 129 L130 170\" class=\"dashed\"></path><path d=\"M220 129 L195 170\" class=\"dashed\"></path>\n    <text x=\"170\" y=\"150\" text-anchor=\"middle\" fill=\"var(--danger)\" font-size=\"11\">which copy of A's members does D get?</text>\n  </svg>",
      "alt": "Diamond problem",
      "caption": "The diamond problem: why Java refuses class D extends B, C. The workaround: interfaces (Topic 8)."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "overriding-instance-methods",
      "text": "Overriding instance methods"
    },
    {
      "type": "paragraph",
      "html": "An instance method in a subclass with the <b>same signature</b> (name, plus the number and type of its parameters) and <b>return type</b> as an instance method in the superclass <b>overrides</b> the superclass’s method. Always use the <b><code class=\"inl\">@Override</code> annotation</b> so the compiler catches mistakes. Two special rules:"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Return type</b>: an overriding method may return a <b>covariant return type</b> (a subclass of the original return type).",
        "<b>Access modifier</b>: the overriding method can allow <b>more, but not less</b>, access than the overridden method. A <code class=\"inl\">protected</code> superclass method can be made <code class=\"inl\">public</code> in the subclass (✓) but not <code class=\"inl\">private</code> (✗)."
      ]
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "Car.java (overriding)",
        "tag": "Java"
      },
      "html": "<code>public class Car extends Vehicle\n{\n    @Override\n    public void start()\n    {\n        System.out.println(\"Car is Starting ....\");\n        super.start();               // optionally still run the parent version\n    }\n\n    public void drive()\n    {\n        System.out.println(\"Driving ....\");\n    }\n}</code>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "hiding-static-methods-and-fields",
      "text": "Hiding static methods and fields"
    },
    {
      "type": "paragraph",
      "html": "If a subclass defines a <b>static</b> method with the same signature as a static method in the superclass, the subclass method <b>hides</b> the superclass one (it does not override it). Similarly, a field with the same name as a superclass field <b>hides</b> it, even if their types differ, and the superclass field must be reached through <code class=\"inl\">super</code>. Hiding fields is generally <b>not recommended</b> because it makes code difficult to read."
    },
    {
      "type": "table",
      "head": [
        "",
        "Superclass instance method",
        "Superclass static method"
      ],
      "rows": [
        [
          "<b>Subclass instance method</b>",
          "<b>Overrides</b>",
          "Compile-time error"
        ],
        [
          "<b>Subclass static method</b>",
          "Compile-time error",
          "<b>Hides</b>"
        ]
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "this-vs-super-in-subclasses",
      "text": "this vs super in subclasses"
    },
    {
      "type": "table",
      "head": [
        "Keyword",
        "Meaning",
        "Forms"
      ],
      "rows": [
        [
          "<code class=\"inl\">this</code>",
          "Refers to the <b>current object instance</b>; distinguishes a field from a parameter/local with the same name",
          "<code class=\"inl\">this.field</code>, <code class=\"inl\">this.method()</code>, <code class=\"inl\">this(...)</code>"
        ],
        [
          "<code class=\"inl\">super</code>",
          "Accesses the members of the <b>superclass</b> from the subclass",
          "<code class=\"inl\">super.field</code>, <code class=\"inl\">super.method()</code>, <code class=\"inl\">super(...)</code>"
        ]
      ]
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "Using super: fields and methods",
        "tag": "Java"
      },
      "html": "<code>// In Vehicle:  public String color = \"White\";\n\npublic void printColor()          // inside Car\n{\n    color = \"Red\";                                   // this.color (Car's copy)\n    System.out.println(\"Car color : \" + color);\n    System.out.println(\"Vehicle color : \" + super.color);   // parent's field\n}</code>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "constructors-in-subclasses",
      "text": "Constructors in subclasses"
    },
    {
      "type": "paragraph",
      "html": "Instantiating a subclass object <b>begins a chain of constructor calls</b>. The subclass constructor, before performing its own tasks, explicitly uses <code class=\"inl\">super</code> to call one of its direct superclass constructors, or <b>implicitly calls the superclass’s default (no-arg) constructor</b>. Each superclass constructor in turn calls the one above it, and <b>the last constructor called in the chain is always Object’s constructor</b>. The original subclass constructor’s body finishes executing <b>last</b>."
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "ConstructorChain.java",
        "tag": "Java"
      },
      "html": "<code>class A\n{\n    A() { System.out.println(\"Inside A's Constructor\"); }\n}\n\nclass B extends A\n{\n    B(String s)\n    {\n        System.out.println(\"Inside B's Parameterized Constructor\");\n        System.out.println(s);\n    }\n}\n\nclass App\n{\n    public static void main(String[] args)\n    {\n        B obj = new B(\"Hello\");\n    }\n}</code>"
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Things to remember about super()",
      "html": "1. The <code class=\"inl\">super()</code> call must be the <b>very first statement</b> in the constructor. &nbsp;2. If you don’t explicitly call <code class=\"inl\">super</code>, the compiler inserts a call to the <b>default constructor of the base class</b>, so the base class <b>must have</b> a default constructor, otherwise the program <b>refuses to compile</b>. &nbsp;3. The chaining continues all the way up to <code class=\"inl\">Object</code>, which has no superclass."
    },
    {
      "type": "example",
      "title": "Worked example: with and without super",
      "bodyHtml": "<div class=\"cb\">\n      <div class=\"cb-head\"><span>BoxWeight.java. WITHOUT super (won't compile)</span><span class=\"lang\">Java</span></div>\n      <pre class=\"code\"><code>public class BoxWeight extends Box\n{\n    double weight;\n\n    BoxWeight(double w, double h, double d, double m)\n    {\n        width = w;      // compiler still inserts super() as first statement, \n        height = h;     // but Box has NO default constructor (only Box(w,h,d))\n        depth = d;      // =&gt; compile error\n        weight = m;\n    }\n}</code></pre>\n    </div>\n    <div class=\"cb\">\n      <div class=\"cb-head\"><span>BoxWeight.java. WITH super (correct)</span><span class=\"lang\">Java</span></div>\n      <pre class=\"code\"><code>public class BoxWeight extends Box\n{\n    double weight;\n\n    BoxWeight(double w, double h, double d, double m)\n    {\n        super(w, h, d);     // calls Box(double, double, double): first statement\n        weight = m;\n    }\n}</code></pre>\n    </div>",
      "solutionHtml": "<p>Because <code class=\"inl\">Box</code> defines only a parameterized constructor, it has <b>no default constructor</b>. The first version fails: Java silently inserts <code class=\"inl\">super()</code> before <code class=\"inl\">width = w;</code>, and there is no <code class=\"inl\">Box()</code> to call. The second version explicitly calls <code class=\"inl\">super(w, h, d)</code>, reusing the parent’s initialization logic, cleaner and it compiles.</p>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "the-final-keyword",
      "text": "The final keyword"
    },
    {
      "type": "table",
      "head": [
        "Applied to",
        "Effect",
        "Example"
      ],
      "rows": [
        [
          "<b>variable</b>",
          "A <b>constant</b>: value cannot change after initialization",
          "<code class=\"inl\">final double PI = 3.14;</code>"
        ],
        [
          "<b>method</b>",
          "Cannot be <b>overridden</b> by a subclass",
          "<code class=\"inl\">public final void eat() { }</code>"
        ],
        [
          "<b>class</b>",
          "Cannot be used as a <b>base class</b> (cannot be extended); all its methods are effectively final too",
          "<code class=\"inl\">public final class MyConstants { }</code>"
        ]
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "casting-objects-and-determining-type",
      "text": "Casting objects & determining type"
    },
    {
      "type": "paragraph",
      "html": "<b>Casting</b> means taking an object of one type and using it as another type, among the types permitted by inheritance:"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Implicit casting (upcasting)</b>: subclass to superclass, done automatically:\n      <code class=\"inl\">Object obj = new Car();</code> (Object is an indirect superclass) or <code class=\"inl\">Vehicle v = new Car();</code> (direct superclass).",
        "<b>Explicit casting (downcasting)</b>: superclass to subclass, requires the parentheses syntax:\n      <code class=\"inl\">Car myCar = obj;</code> → compile-time error; <code class=\"inl\">Car myCar = (Car) obj;</code> → OK."
      ]
    },
    {
      "type": "paragraph",
      "html": "Use the <b><code class=\"inl\">instanceof</code></b> operator to determine an object’s type at runtime:"
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "InstanceCheck.java",
        "tag": "Java"
      },
      "html": "<code>Vehicle v  = new Vehicle();\nCar c      = new Car();\nVehicle v2 = new Car();\n\nc instanceof Car       // true\nc instanceof Vehicle   // true  (Car is-a Vehicle)\nc instanceof Object    // true  (everything is-a Object)\n\nv instanceof Car       // false (a plain Vehicle is not a Car)</code>"
    },
    {
      "type": "accordion",
      "items": [
        {
          "title": "Exercise set D: inheritance",
          "html": "<ol>\n        <li>Define subclass and superclass, listing the three alternative names for each.</li>\n        <li>Which relationship does inheritance best implement? Give an example.</li>\n        <li>What is the difference between a direct and an indirect superclass? Which class is at the top of every Java hierarchy?</li>\n        <li>Name the four supported types of inheritance and the one unsupported type. Why is it unsupported?</li>\n        <li>Write the two rules an overriding method must follow regarding return type and access modifier.</li>\n        <li>Complete the 2×2 table: subclass instance/static method vs superclass instance/static method.</li>\n        <li>List the three forms of the super keyword.</li>\n        <li>What happens if a subclass constructor does not explicitly call super() and the parent has no default constructor?</li>\n        <li>State the effect of final on a variable, a method, and a class.</li>\n        <li>Which of these compile: <code class=\"inl\">Vehicle v = new Car();</code> / <code class=\"inl\">Car c = v;</code> / <code class=\"inl\">Car c = (Car) v;</code> (with v of type Vehicle)?</li>\n      </ol>\n      <button class=\"reveal-btn\">Show answers</button>\n      <div class=\"solution\"><div class=\"sol-label\">Answers</div>\n        <ol>\n          <li>Subclass (derived / extended / child class) inherits from superclass (base / parent class).</li>\n          <li>is-a relationships, e.g. a Car is a Vehicle.</li>\n          <li>Direct: explicitly extended. Indirect: any class higher up. Every class ultimately extends Object (java.lang).</li>\n          <li>Single, multilevel, hierarchical, hybrid. Multiple inheritance of classes is not supported; the diamond problem (ambiguity over which parent's members are inherited).</li>\n          <li>Same signature; may return a covariant (subclass) return type; access may widen (protected → public) but never narrow (→ private).</li>\n          <li>instance×instance = overrides; static×static = hides; mixed pairs = compile-time errors.</li>\n          <li><code class=\"inl\">super.field</code>, <code class=\"inl\">super.method()</code>, <code class=\"inl\">super(...)</code> (constructor call, first statement).</li>\n          <li>Compile error: the compiler inserts super() but there is no default constructor to call.</li>\n          <li>final variable = constant; final method = cannot be overridden; final class = cannot be extended.</li>\n          <li>First compiles (upcasting, implicit). Second fails (downcasting needs explicit cast). Third compiles (explicit downcast).</li>\n        </ol>\n      </div>"
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Topic 4 Quiz: Inheritance",
      "count": 8,
      "quizSlug": "04-inheritance"
    }
  ]
};

export default chapter;
