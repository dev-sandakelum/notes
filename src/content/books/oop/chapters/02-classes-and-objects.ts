import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "02-classes-and-objects",
    "number": 2,
    "title": "Classes & Objects",
    "subtitle": "Lesson 02 (Part 1) · Declarations, fields, methods, access modifiers, constructors",
    "kind": "topic",
    "words": 1407,
    "minutes": 7
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "the-six-oop-concepts",
      "text": "The six OOP concepts"
    },
    {
      "type": "paragraph",
      "html": "Object-oriented programming simplifies software development and maintenance by providing six core concepts: <b>Object, Class, Inheritance, Polymorphism, Abstraction and Encapsulation</b>. Topics 1–3 cover objects and classes; topics 4–7 cover the remaining four — often called the <b>four pillars of OOP</b>. Keep this list in mind: many exam questions ask you to name or define all six."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "life-cycle-of-an-object",
      "text": "Life cycle of an object"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "Before an object can be created from a class, <b>the class must be loaded</b>.",
        "An object is created from a class when you use the <code class=\"inl\">new</code> keyword.",
        "The object lives its life, providing access to its <b>public methods and fields</b> to whoever needs them.",
        "When it’s time for the object to die, it is <b>removed from memory</b>, and Java drops its internal reference to it."
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "declaring-a-class",
      "text": "Declaring a class"
    },
    {
      "type": "paragraph",
      "html": "All classes must be defined by a <b>class declaration</b> — lines of code that provide the name for the class and the body of the class:"
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "Basic form",
        "tag": "Java"
      },
      "html": "<code>class ClassName\n{\n    // class body\n}</code>"
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "Extended form",
        "tag": "Java"
      },
      "html": "<code>package mypackage;                      // package declaration\nimport java.util.*;                     // import statements\n\n[access modifier] class ClassName extends [SuperClass] implements [Interface1, Interface2]\n{\n    Fields            // variables\n    Initializers      // static and instance initializer blocks\n    Constructors      // initialize objects\n    Methods           // behavior\n    other Classes and Interfaces   // nested / inner types\n}</code>"
    },
    {
      "type": "paragraph",
      "html": "The five kinds of members in a class body: <b>fields</b> (variable declarations), <b>initializers</b> (stand-alone blocks run once when the class/object is initialized), <b>constructors</b> (run to initialize an object at creation), <b>methods</b> (declare the class’s behavior) and <b>nested classes / interfaces</b>."
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "Class naming & saving rules",
      "html": "Begin class names with a <b>capital letter</b> (e.g. <code class=\"inl\">Student</code>, <code class=\"inl\">TennisBall</code>), prefer <b>nouns</b>, and avoid Java keywords, API class names and reserved words. A <b>public</b> class must live in a source file with the <b>same name</b> (<code class=\"inl\">Student</code> → <code class=\"inl\">Student.java</code>), and you can’t place <b>two or more public classes</b> in the same file."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "fields-and-methods",
      "text": "Fields and methods"
    },
    {
      "type": "paragraph",
      "html": "A <b>field</b> is a variable defined in the body of a class, <b>outside any of the class’s methods</b>. Fields (also called class variables or instance variables) are available to <b>all methods</b> of the class. A <b>method</b> is a collection of statements grouped together to perform an operation — and a method <b>only runs when it is called</b>."
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "Employee.java",
        "tag": "Java"
      },
      "html": "<code>public class Employee\n{\n    int id;              // field / data member / instance variable\n    String name;         // field\n\n    void display()       // method\n    {\n        System.out.println(id + \" \" + name);\n    }\n}</code>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "java-access-modifiers",
      "text": "Java access modifiers"
    },
    {
      "type": "table",
      "head": [
        "Modifier",
        "Who can call / access",
        "Keyword"
      ],
      "rows": [
        [
          "<b>public</b>",
          "Any class",
          "<code class=\"inl\">public</code>"
        ],
        [
          "<b>private</b>",
          "Only from <b>within the same class</b>",
          "<code class=\"inl\">private</code>"
        ],
        [
          "<b>protected</b>",
          "Classes in the <b>same package</b> or <b>subclasses</b>",
          "<code class=\"inl\">protected</code>"
        ],
        [
          "<b>default</b> (package-private)",
          "Only classes in the <b>same package</b>",
          "<i>none — just omit the modifier</i>"
        ]
      ]
    },
    {
      "type": "callout",
      "variant": "warn",
      "title": "Watch out",
      "html": "Default access is tricky because <b>there is no keyword for it</b> — you simply <b>omit</b> the access modifier. Examiners love asking “which modifier has no keyword?”"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "creating-objects-declaration-instantiation-initialization",
      "text": "Creating objects: declaration, instantiation, initialization"
    },
    {
      "type": "paragraph",
      "html": "Creating an object has three parts: <b>declaration</b> (a variable name is associated with an object type), <b>instantiation</b> (the <code class=\"inl\">new</code> operator creates the object in memory and returns a reference to it), and <b>initialization</b> (the <code class=\"inl\">new</code> operator is followed by a call to a <b>constructor</b>, which initializes the new object)."
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "CreateObjects.java",
        "tag": "Java"
      },
      "html": "<code>public class Employee\n{\n    int id;\n    String name;\n\n    public static void main(String args[])\n    {\n        Employee e;                     // 1. declaration\n        e = new Employee();             // 2. instantiation + 3. initialization\n\n        Employee emp = new Employee();  // all three in one statement\n\n        System.out.println(emp.id);     // accessing member through reference variable\n        System.out.println(emp.name);\n    }\n}</code>"
    },
    {
      "type": "paragraph",
      "html": "Objects can be created <b>within the same class</b> (as above) or from a separate <b>driver class</b> — a class that contains <code class=\"inl\">main</code> and uses other classes:"
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "TestEmployee.java (driver class)",
        "tag": "Java"
      },
      "html": "<code>public class NewEmployee\n{\n    int id;\n    String name;\n}\n\npublic class TestEmployee        // driver class, saved as TestEmployee.java\n{                               // (only ONE public class per file in practice)\n    public static void main(String args[])\n    {\n        NewEmployee emp = new NewEmployee();\n        System.out.println(emp.id);\n        System.out.println(emp.name);\n    }\n}</code>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "three-ways-to-initialize-an-object",
      "text": "Three ways to initialize an object"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "1-by-reference-variable",
      "text": "1. By reference variable"
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "InitByReference.java",
        "tag": "Java"
      },
      "html": "<code>Employee emp = new Employee();\nemp.id   = 101;                       // storing data into the object\nemp.name = \"Nimal\";\nSystem.out.println(\"Employee id : \" + emp.id + \", Employee name : \" + emp.name);</code>"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "2-by-method",
      "text": "2. By method"
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "InitByMethod.java",
        "tag": "Java"
      },
      "html": "<code>public class Student\n{\n    String name;\n    int id;\n\n    public void insertRecord(String s, int i)\n    {\n        name = s;\n        id = i;\n    }\n    public void displayInformation()\n    {\n        System.out.println(\"Student name : \" + name + \", Student id : \" + id);\n    }\n}\n\nclass TestStudent\n{\n    public static void main(String args[])\n    {\n        Student stu1 = new Student();\n        Student stu2 = new Student();\n        stu1.insertRecord(111, \"Saman\");\n        stu2.insertRecord(222, \"Amal\");\n        stu1.displayInformation();\n        stu2.displayInformation();\n    }\n}</code>"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "3-by-constructor",
      "text": "3. By constructor"
    },
    {
      "type": "paragraph",
      "html": "A <b>constructor</b> is a block of code similar to a method that is <b>called when a new instance of an object is created</b> — in fact, it’s the <code class=\"inl\">new</code> keyword that calls the constructor. After the object is created, <b>you can’t call the constructor again</b>. It is a special method used to <b>initialize the object</b>."
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Constructor rules — memorize",
      "html": "1. The constructor name <b>must be the same</b> as its class name. &nbsp;2. It must have <b>no explicit return type</b> (they implicitly return an object of their class). &nbsp;3. Every time an object is created with <code class=\"inl\">new</code>, at least one constructor is called. &nbsp;4. If you don’t write any constructor, the <b>Java compiler creates a default constructor</b> for you. &nbsp;5. Two types: <b>default (no-arg)</b> and <b>parameterized</b>."
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "DefaultConstructor.java",
        "tag": "Java"
      },
      "html": "<code>public class Employee\n{\n    private String name;\n    private int age;\n    private char gender;\n\n    Employee()      // default (no-arg) constructor\n    {\n        System.out.println(\"Default constructor executed...\");\n        System.out.println(\"Name : \" + name + \", Age : \" + age + \", Gender : \" + gender);\n    }\n}</code>"
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "ParameterizedConstructor.java",
        "tag": "Java"
      },
      "html": "<code>public class Employee\n{\n    private String name;\n    private int age;\n    private char gender;\n\n    Employee(String n, int a, char g)      // parameterized constructor\n    {\n        name = n;\n        age = a;\n        gender = g;\n        System.out.println(\"Parameterized constructor executed...\");\n        System.out.println(\"Name : \" + name + \", Age : \" + age + \", Gender : \" + gender);\n    }\n}</code>"
    },
    {
      "type": "paragraph",
      "html": "The <b>default constructor initializes all instance variables to zero or null</b>, while a <b>parameterized constructor</b> accepts values through parameters and assigns them to the fields. Constructor overloading (multiple constructors with different parameter lists) is a common exam question."
    },
    {
      "type": "example",
      "title": "Worked example — spot the bug (exam trap)",
      "bodyHtml": "<p>The lecture set this as homework. Predict the output before revealing:</p>\n    <div class=\"cb\">\n      <div class=\"cb-head\"><span>Account.java</span><span class=\"lang\">Java</span></div>\n      <pre class=\"code\"><code>class Account\n{\n    int a, b;\n    public void setData(int a, int b)\n    {\n        a = a;          // ???\n        b = b;          // ???\n    }\n    public void showData()\n    {\n        System.out.println(\"Value of A = \" + a);\n        System.out.println(\"Value of B = \" + b);\n    }\n    public static void main(String[] args)\n    {\n        Account myAccount = new Account();\n        myAccount.setData(2, 3);\n        myAccount.showData();\n    }\n}</code></pre>\n    </div>",
      "solutionHtml": "<p>Output: <b>Value of A = 0 &nbsp;and&nbsp; Value of B = 0</b>.</p>\n      <p>Why? Inside <code class=\"inl\">setData</code>, the <b>parameter names shadow the instance variables</b>. The statement <code class=\"inl\">a = a;</code> assigns the parameter <code class=\"inl\">a</code> to itself — the instance variable <code class=\"inl\">a</code> is never touched and keeps its default value 0. The fix is the <code class=\"inl\">this</code> keyword: <code class=\"inl\">this.a = a; this.b = b;</code> — covered fully in Topic 3.</p>"
    },
    {
      "type": "accordion",
      "items": [
        {
          "title": "Exercise set B — classes, objects & constructors ▾",
          "html": "<ol>\n        <li>List the five kinds of members that can appear in a class body.</li>\n        <li>Write the extended form of a class declaration (with package, imports, extends and implements).</li>\n        <li>A field vs a local variable — where is each declared?</li>\n        <li>Which access modifier would you use so that only classes in the same package and subclasses can access a method?</li>\n        <li>Name the three parts of creating an object and state which keyword performs instantiation.</li>\n        <li>State the two constructor rules and the two types of constructors.</li>\n        <li>Write a class <code class=\"inl\">Book</code> with fields <code class=\"inl\">title</code> and <code class=\"inl\">price</code>, a default constructor that prints \"Book created\", and a parameterized constructor that initializes both fields.</li>\n      </ol>\n      <button class=\"reveal-btn\">Show answers</button>\n      <div class=\"solution\"><div class=\"sol-label\">Answers</div>\n        <ol>\n          <li>Fields, initializers, constructors, methods, and other classes/interfaces (nested/inner).</li>\n          <li><code class=\"inl\">[access] class Name extends Super implements Iface1, Iface2 { fields; initializers; constructors; methods; nested types }</code> — preceded by package declaration and import statements.</li>\n          <li>A field is declared in the class body outside any method (available to all methods); a local variable is declared inside a method and only lives there.</li>\n          <li><code class=\"inl\">protected</code>.</li>\n          <li>Declaration (associate variable with type), instantiation (new allocates memory), initialization (constructor call follows new).</li>\n          <li>Same name as the class; no explicit return type. Types: default (no-arg) and parameterized.</li>\n          <li>\n<code class=\"inl\">public class Book { String title; double price; Book(){ System.out.println(\"Book created\"); } Book(String t, double p){ title=t; price=p; } }</code>\n          </li>\n        </ol>\n      </div>"
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Topic 2 Quiz — Classes & Objects",
      "count": 8,
      "quizSlug": "02-classes-and-objects"
    }
  ]
};

export default chapter;
