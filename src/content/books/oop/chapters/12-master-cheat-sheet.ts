import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "12-master-cheat-sheet",
    "number": 12,
    "title": "Master Cheat Sheet",
    "subtitle": "Rapid revision · tap any card to flip it",
    "kind": "cheatsheet",
    "words": 791,
    "minutes": 4
  },
  "blocks": [
    {
      "type": "paragraph",
      "html": "24 flip cards covering the whole course. Read the prompt, say the answer out loud, then tap to check yourself. Perfect for the last hour before the exam."
    },
    {
      "type": "flashcards",
      "cards": [
        {
          "front": "<b>Class vs Object</b><small>tap to flip</small>",
          "back": "<b>Class</b> = blueprint, visible in source code, not duplicated.<br><b>Object</b> = instance, active in the running program, has its own copy of data, occupies memory.",
          "category": "Foundations"
        },
        {
          "front": "<b>3 characteristics of an object</b><small>tap to flip</small>",
          "back": "<b>State</b> (properties/values), <b>Behavior</b> (methods), <b>Identity</b> (e.g. account number, serial no).",
          "category": "Foundations"
        },
        {
          "front": "<b>Why OOP? (4)</b><small>tap to flip</small>",
          "back": "Modularity · Information-hiding · Code re-use · Pluggability &amp; debugging ease.",
          "category": "Foundations"
        },
        {
          "front": "<b>Constructor rules</b><small>tap to flip</small>",
          "back": "Same name as the class · no explicit return type · called by new, can’t be called again · compiler supplies a public default constructor if none is written · types: default &amp; parameterized.",
          "category": "Constructors"
        },
        {
          "front": "<b>this</b><small>tap to flip</small>",
          "back": "Reference to the <b>current object</b>. Disambiguates shadowed fields (<code class=\"inl\">this.a = a</code>) · this(...) calls another constructor (first statement only, no loops).",
          "category": "Keywords"
        },
        {
          "front": "<b>super</b><small>tap to flip</small>",
          "back": "<code class=\"inl\">super.field</code> → parent field · <code class=\"inl\">super.method()</code> → parent method · <code class=\"inl\">super(...)</code> → parent constructor, must be the <b>first statement</b>; inserted implicitly if missing (needs parent default constructor).",
          "category": "Keywords"
        },
        {
          "front": "<b>final</b><small>tap to flip</small>",
          "back": "variable → constant · method → cannot be overridden · class → cannot be extended (all its methods effectively final).",
          "category": "Keywords"
        },
        {
          "front": "<b>static members</b><small>tap to flip</small>",
          "back": "Belong to the <b>class</b>, not instances; initialized at <b>class load</b>. Static methods (like main) <b>cannot access instance members directly</b>; instance methods can access statics. Prevent instantiation with a <b>private constructor</b> (Math class).",
          "category": "static"
        },
        {
          "front": "<b>Garbage collection</b><small>tap to flip</small>",
          "back": "Automatic removal of <b>unreferenced objects</b> from heap memory by the JVM. Objects become unreferenced by: nulling the reference, reassigning the reference, or anonymous objects.",
          "category": "Memory"
        },
        {
          "front": "<b>Types of inheritance</b><small>tap to flip</small>",
          "back": "Single · Multilevel · Hierarchical · Hybrid — supported. <b>Multiple: NOT supported</b> (diamond problem) — solved with interfaces.",
          "category": "Inheritance"
        },
        {
          "front": "<b>Overloading vs Overriding</b><small>tap to flip</small>",
          "back": "<b>Overloading</b>: same class, same name, different parameter lists, resolved at <b>compile time</b> (NOT by return type). <b>Overriding</b>: subclass, same signature + return type, resolved at <b>run time</b> (dynamic binding).",
          "category": "Polymorphism"
        },
        {
          "front": "<b>Dynamic binding</b><small>tap to flip</small>",
          "back": "<code class=\"inl\">Vehicle v = new Car(); v.start();</code> → <b>Car’s</b> start runs — the <b>object type</b> decides. Exceptions: private methods, constructors, super calls, final methods. <b>Fields</b> bind statically (reference type decides).",
          "category": "Polymorphism"
        },
        {
          "front": "<b>Abstract class facts</b><small>tap to flip</small>",
          "back": "Can’t be instantiated · can be extended · may mix abstract + concrete methods · <b>can have constructors</b> · any abstract method forces the class abstract · subclass implements all abstract methods or is abstract itself.",
          "category": "Abstraction"
        },
        {
          "front": "<b>The recipe</b><small>tap to flip</small>",
          "back": "Private fields + public methods. <b>get</b> = accessor (view), <b>set</b> = mutator (change). Enables validation (SalesPerson 0–0.20 rate), read-only/write-only fields, hidden storage. AKA data hiding.",
          "category": "Encapsulation"
        },
        {
          "front": "<b>Implicit modifiers</b><small>tap to flip</small>",
          "back": "Methods → <b>public abstract</b>. Fields → <b>public static final</b> (must be initialized at declaration). No constructors; can’t instantiate; class implements many; interface extends one or more interfaces.",
          "category": "Interfaces"
        },
        {
          "front": "<b>Default &amp; static methods</b><small>tap to flip</small>",
          "back": "Java 8+. <b>default</b> methods carry a body used as a fallback implementation — lets interfaces evolve without breaking implementers. <b>static</b> interface methods are utility methods called on the interface name.",
          "category": "Interfaces"
        },
        {
          "front": "<b>Checked vs Unchecked vs Error</b><small>tap to flip</small>",
          "back": "<b>Checked</b>: compiler-enforced, predictable (FileNotFoundException). <b>Unchecked/Runtime</b>: compiler ignores, programmer’s duty (ArithmeticException). <b>Error</b>: beyond control (memory/JVM), rarely handled. All extend Throwable.",
          "category": "Exceptions"
        },
        {
          "front": "<b>try / catch / finally facts</b><small>tap to flip</small>",
          "back": "No catch without try · try needs catch or finally · only ONE finally per try · no code between blocks · <b>finally always runs</b> (cleanup) · empty catch = swallowing = bad practice.",
          "category": "Exceptions"
        },
        {
          "front": "<b>throw vs throws</b><small>tap to flip</small>",
          "back": "<b>throw</b>: inside the body, throws ONE <i>instance</i> explicitly (<code class=\"inl\">throw new ArithmeticException(\"...\")</code>). <b>throws</b>: end of the signature, declares many <i>class names</i> (<code class=\"inl\">throws IOException, SQLException</code>).",
          "category": "Exceptions"
        },
        {
          "front": "<b>The four chains</b><small>tap to flip</small>",
          "back": "Text read: File → FileReader → <b>BufferedReader</b>.readLine() (null at EOF)<br>Text write: FileWriter → BufferedWriter → <b>PrintWriter</b>.print/println<br>Binary read: FileInputStream → BufferedInputStream → <b>DataInputStream</b> (EOFException ends loop)<br>Binary write: FileOutputStream → BufferedOutputStream → <b>DataOutputStream</b>.writeUTF/writeInt",
          "category": "File I/O"
        },
        {
          "front": "<b>Append mode</b><small>tap to flip</small>",
          "back": "Pass <code class=\"inl\">true</code> as the second constructor argument: <code class=\"inl\">new FileWriter(f, true)</code> / <code class=\"inl\">new FileOutputStream(file, true)</code>. Omit it (or false) to replace. Always <b>flush()</b> then <b>close()</b> after writing.",
          "category": "File I/O"
        },
        {
          "front": "<b>The 5 steps</b><small>tap to flip</small>",
          "back": "1. <code class=\"inl\">Class.forName(\"com.mysql.cj.jdbc.Driver\")</code><br>2. <code class=\"inl\">DriverManager.getConnection(url, user, pass)</code><br>3. <code class=\"inl\">con.createStatement()</code><br>4. executeQuery / executeUpdate / execute<br>5. <code class=\"inl\">con.close()</code>",
          "category": "JDBC"
        },
        {
          "front": "<b>Drivers &amp; execute methods</b><small>tap to flip</small>",
          "back": "4 driver types: JDBC-ODBC bridge, Native-API, Network Protocol, <b>Thin (best, Type 4 — Connector/J)</b>. executeQuery → ResultSet (SELECT only); executeUpdate → int rows (INSERT/UPDATE/DELETE); execute → boolean.",
          "category": "JDBC"
        },
        {
          "front": "<b>ResultSet &amp; PreparedStatement</b><small>tap to flip</small>",
          "back": "ResultSet: cursor + <code class=\"inl\">next()</code>; get by name or index — <b>indices start at 1</b>. PreparedStatement: precompiled once, <code class=\"inl\">?</code> placeholders, better performance + prevents SQL injection.",
          "category": "JDBC"
        }
      ]
    }
  ]
};

export default chapter;
