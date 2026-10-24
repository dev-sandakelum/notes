import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "03-this-static-and-memory",
    "number": 3,
    "title": "this, static & memory",
    "subtitle": "Lesson 02 (Part 2) · this, constructor chaining, anonymous objects, GC, static members",
    "kind": "topic",
    "words": 1310,
    "minutes": 7
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "the-this-keyword",
      "text": "The this keyword"
    },
    {
      "type": "paragraph",
      "html": "Recall the <code class=\"inl\">Account</code> trap from Topic 2: <code class=\"inl\">a = a;</code> did nothing because the parameters shadowed the fields. The solution is the <b><code class=\"inl\">this</code> reference</b>. <b>every object has a reference to itself</b>, represented by the keyword <code class=\"inl\">this</code>:"
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "The fix",
        "tag": "Java"
      },
      "html": "<code>public void setData(int a, int b)\n{\n    this.a = a;      // this.a = the instance variable; a = the parameter\n    this.b = b;\n}</code>"
    },
    {
      "type": "paragraph",
      "html": "At compilation, <code class=\"inl\">this</code> is effectively replaced by the current object reference (e.g. <code class=\"inl\">myAccount</code>), so the left-hand side becomes the <b>instance variable</b> and the right-hand side the <b>local variable</b>. You can use <code class=\"inl\">this</code> in the body of a class constructor or method to <b>refer to the current object</b>; the instance for which the constructor or method has been called."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "this-constructor-chaining",
      "text": "this(): constructor chaining"
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Rules for calling constructors with this",
      "html": "You can call another constructor <b>only in the very first statement</b> of a constructor using <code class=\"inl\">this(...)</code>. Each constructor can call <b>only one</b> other constructor, but you can <b>chain</b> constructors. You can’t create <b>loops</b> in which constructors call one another."
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "ConstructorChaining.java",
        "tag": "Java"
      },
      "html": "<code>public class Student\n{\n    String name;\n    int id;\n\n    Student()                       // default constructor\n    {\n        this(\"Unknown\", 0);         // chained call. MUST be first statement\n        System.out.println(\"Default constructor done\");\n    }\n\n    Student(String n, int i)        // parameterized constructor\n    {\n        name = n;\n        id = i;\n        System.out.println(\"Parameterized constructor done\");\n    }\n\n    public static void main(String[] args)\n    {\n        Student s = new Student();  // runs parameterized first, then default's body\n    }\n}</code>"
    },
    {
      "type": "paragraph",
      "html": "<b>Constructor chaining</b> refers to the ability to call a constructor inside another constructor, within the same class using <code class=\"inl\">this()</code>, or to a superclass constructor using <code class=\"inl\">super()</code> (covered in Topic 4). Other uses of <code class=\"inl\">this</code>: calling current class methods, passing the current object as an argument, and returning the current object. Also note <code class=\"inl\">System.out.println(this);</code> prints the object’s class name and hash code."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "initializer-blocks",
      "text": "Initializer blocks"
    },
    {
      "type": "paragraph",
      "html": "An <b>initializer block</b> is a lonely block of code placed <b>outside any method, constructor or other block</b>. Initializers are executed <b>whenever an instance is created, regardless of which constructor</b> is used. If a class has more than one initializer, they run in the <b>order they appear</b>, and they are executed <b>before any class constructor</b>:"
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "InitializerTest.java",
        "tag": "Java"
      },
      "html": "<code>public class InitializerTest\n{\n    {\n        System.out.println(\"Initializer block executed...\");\n    }\n\n    InitializerTest()\n    {\n        System.out.println(\"Constructor executed\");\n    }\n\n    public static void main(String[] args)\n    {\n        new InitializerTest();\n    }\n}</code>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "anonymous-objects",
      "text": "Anonymous objects"
    },
    {
      "type": "paragraph",
      "html": "<b>Anonymous simply means nameless.</b> An object with <b>no reference</b> is an anonymous object. It can be used <b>at the time of object creation only</b>, and it’s a good approach when you need an object just once:"
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "AnonymousObject.java",
        "tag": "Java"
      },
      "html": "<code>Calculation c = new Calculation();   // named reference\nc.fact(5);\n\nnew Calculation().fact(5);           // anonymous object: no reference stored</code>"
    },
    {
      "type": "paragraph",
      "html": "How can an object become <b>unreferenced</b> (and hence eligible for garbage collection)? Three ways:"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>By nulling the reference</b>. <code class=\"inl\">Employee e = new Employee(); e = null;</code>",
        "<b>By assigning a reference to another</b>. <code class=\"inl\">e1 = e2;</code> now the first object is unreferenced",
        "<b>By an anonymous object</b>. <code class=\"inl\">new Employee();</code>"
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "garbage-collection",
      "text": "Garbage collection"
    },
    {
      "type": "paragraph",
      "html": "In Java, <b>garbage means unreferenced objects</b>. <b>Garbage collection (GC)</b> is the process of <b>reclaiming runtime unused memory automatically</b>, a way to destroy unused objects. The Java runtime environment deletes objects when it determines they are no longer being used. It is performed <b>automatically</b> by the garbage collector (a part of the JVM), so Java provides better memory management. Advantages: it makes Java <b>memory efficient</b> because the GC removes unreferenced objects from <b>heap memory</b>, and it needs <b>no extra effort</b> from the programmer."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "working-with-statics",
      "text": "Working with statics"
    },
    {
      "type": "paragraph",
      "html": "<code class=\"inl\">static</code> describes a field or method that is <b>not associated with a particular instance</b> of a class, static members are associated with <b>the class itself</b>. You don’t need to create an instance to access them; you use the <b>class name</b>, not an object reference."
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">Static field</div><div class=\"f-b\">Declared with <code class=\"inl\">static</code> (e.g. <code class=\"inl\">private static int age;</code>). Created and initialized <b>when the class is first loaded</b>. Fields can be static. <b>local variables cannot</b>.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Static method</div><div class=\"f-b\">Associated with the class, not an object. Best-known example: <code class=\"inl\">main</code>: called by the JVM to start an application. Java programs run in a <b>static context by default</b>.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Static initializer</div><div class=\"f-b\">A block starting with <code class=\"inl\">static { ... }</code> used to initialize static fields. Runs <b>once</b>, when the class is first loaded, <b>before</b> any constructor.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Common uses</div><div class=\"f-b\">Constants, counting instances, serial numbers per object, alternative ways to create instances, and utility functions that need no object at all (like <code class=\"inl\">Math</code>).</div></div>\n  </div>",
      "alt": "Formula reference cards"
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Static vs instance: who can call what?",
      "html": "You can’t access a <b>non-static (instance) method or field from a static method</b>; the static method has no instance to refer to. But you <b>can</b> access static methods and fields from an <b>instance method</b>. Also: you can’t use <code class=\"inl\">static</code> on a local variable inside a method; the code won’t compile."
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "CountingInstances.java",
        "tag": "Java"
      },
      "html": "<code>public class InstanceCounter\n{\n    private static int count = 0;          // shared by ALL instances\n\n    InstanceCounter()\n    {\n        count++;                           // one more object created\n    }\n\n    public static void main(String[] args)\n    {\n        new InstanceCounter();\n        new InstanceCounter();\n        new InstanceCounter();\n        System.out.println(\"Instances created: \" + count);\n    }\n}</code>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "preventing-a-class-from-being-instantiated",
      "text": "Preventing a class from being instantiated"
    },
    {
      "type": "paragraph",
      "html": "To create a class instance you need at least one <b>public constructor</b>, and if you don’t provide any constructor, Java inserts a public default constructor. So to <b>prevent instantiation</b>, provide a single <b>private constructor</b>:"
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "MyClass.java",
        "tag": "Java"
      },
      "html": "<code>public class MyClass\n{\n    private MyClass() {}     // prevents instances\n    // static methods and fields go here\n}</code>"
    },
    {
      "type": "paragraph",
      "html": "The classic example is Java’s <b><code class=\"inl\">Math</code> class</b>, you never write <code class=\"inl\">new Math()</code>; you just call <code class=\"inl\">Math.sqrt(2)</code>. This idea is also the heart of the <b>Singleton design pattern</b> (one instance only, accessed statically)."
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Order of initialization (homework answer)",
      "html": "1. If there is a <b>superclass, initialize it first</b>. &nbsp;2. <b>Static</b> variable declarations and static initializers, <b>in the order they appear</b> in the file. &nbsp;3. <b>Instance</b> variable declarations and instance initializers, in the order they appear. &nbsp;4. <b>The constructor</b>."
    },
    {
      "type": "example",
      "title": "Worked example: predict the output",
      "bodyHtml": "<div class=\"cb\">\n      <div class=\"cb-head\"><span>OrderTest.java</span><span class=\"lang\">Java</span></div>\n      <pre class=\"code\"><code>public class OrderTest\n{\n    static { System.out.println(\"1. static initializer\"); }\n\n    { System.out.println(\"2. instance initializer\"); }\n\n    OrderTest() { System.out.println(\"3. constructor\"); }\n\n    public static void main(String[] args)\n    {\n        System.out.println(\"0. main starts\");\n        new OrderTest();\n    }\n}</code></pre>\n    </div>",
      "solutionHtml": "<p>Output:</p>\n      <pre style=\"font-family:Consolas,Menlo,monospace;font-size:.85rem;background:var(--surface2);padding:10px 14px;border-radius:9px;display:inline-block\">1. static initializer\n0. main starts\n2. instance initializer\n3. constructor</pre>\n      <p>The static initializer runs when the class is loaded (before main). The instance initializer runs before the constructor at object creation. This matches the order-of-initialization rules exactly.</p>"
    },
    {
      "type": "accordion",
      "items": [
        {
          "title": "Exercise set C: this, static & memory",
          "html": "<ol>\n        <li>Why does <code class=\"inl\">a = a;</code> inside <code class=\"inl\">setData(int a, int b)</code> fail to update the field? Give the one-line fix.</li>\n        <li>State the three rules for using <code class=\"inl\">this()</code> to call another constructor.</li>\n        <li>When do instance initializer blocks run, relative to constructors?</li>\n        <li>What is an anonymous object and when is it useful?</li>\n        <li>List three ways an object can become unreferenced.</li>\n        <li>From a static method, can you call an instance method directly? Why? What about the reverse?</li>\n        <li>How do you prevent a class from ever being instantiated? Name a JDK class that does this.</li>\n        <li>Write the four-step order of initialization for a class with a superclass.</li>\n      </ol>\n      <button class=\"reveal-btn\">Show answers</button>\n      <div class=\"solution\"><div class=\"sol-label\">Answers</div>\n        <ol>\n          <li>The parameter shadows the instance variable; both sides refer to the parameter. Fix: <code class=\"inl\">this.a = a;</code></li>\n          <li>Must be the very first statement; each constructor can call only one other; no loops of mutual calls.</li>\n          <li>Before any constructor, every time an instance is created, regardless of which constructor is used (in source order if several).</li>\n          <li>An object with no reference variable; useful when the object is needed only once, e.g. <code class=\"inl\">new Calculation().fact(5);</code></li>\n          <li>Nulling the reference (<code class=\"inl\">e = null</code>); assigning the reference to another object (<code class=\"inl\">e1 = e2</code>); creating an anonymous object (<code class=\"inl\">new Employee()</code>).</li>\n          <li>No: a static method has no instance to refer to. Yes: instance methods can access static members freely.</li>\n          <li>Provide a single private constructor. Example: <code class=\"inl\">Math</code>.</li>\n          <li>Superclass first → static declarations/initializers (source order) → instance declarations/initializers (source order) → the constructor.</li>\n        </ol>\n      </div>"
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Topic 3 Quiz: this, static & Memory",
      "count": 8,
      "quizSlug": "03-this-static-and-memory"
    }
  ]
};

export default chapter;
