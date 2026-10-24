import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "07-encapsulation",
    "number": 7,
    "title": "Encapsulation",
    "subtitle": "Lesson 03 (Part 4) · Data hiding, accessors & mutators, abstraction vs encapsulation",
    "kind": "topic",
    "words": 891,
    "minutes": 4
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "what-is-encapsulation",
      "text": "What is encapsulation?"
    },
    {
      "type": "paragraph",
      "html": "<b>Encapsulation</b> is the process of <b>wrapping code and data together into a single unit</b>. The lecture’s analogy: a <b>capsule</b> — a single pill that mixes several medicines inside one shell. In Java, the unit is the class: fields (data) and the methods (code) that operate on them live together, and the outside world interacts only through the class’s public face."
    },
    {
      "type": "paragraph",
      "html": "Technically, encapsulation is achieved by <b>making the fields private and providing access via public methods</b>. If a field is <code class=\"inl\">private</code>, it cannot be accessed by anyone outside the class — the fields are <b>hidden within the class</b>. For this reason, encapsulation is also referred to as <b>data (information) hiding</b>."
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Accessor vs mutator — know the names",
      "html": "The <b>get</b> methods that allow a field to be <b>viewed</b> are called <b>accessor methods</b>. The <b>set</b> methods that allow a field to be <b>changed</b> are called <b>mutator methods</b>."
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "MyEncapsulator.java",
        "tag": "Java"
      },
      "html": "<code>public class MyEncapsulator\n{\n    // private member — accessible only within the class\n    private String name;\n\n    // public setter (mutator) method to set the value\n    public void setName(String name)\n    {\n        this.name = name;\n    }\n\n    // public getter (accessor) method to get the value\n    public String getName()\n    {\n        return name;\n    }\n}</code>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "the-salesperson-example-encapsulation-with-validation",
      "text": "The SalesPerson example — encapsulation with validation"
    },
    {
      "type": "paragraph",
      "html": "This is the lecture’s flagship example. Every field is <code class=\"inl\">private</code>, and the class keeps <b>total control over what is stored</b> — note how <code class=\"inl\">setCommissionRate</code> rejects values outside 0.0–0.20:"
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "SalesPerson.java",
        "tag": "Java"
      },
      "html": "<code>public class SalesPerson\n{\n    private String name;\n    private int id;\n    private float commissionRate;\n    private double sales;\n\n    SalesPerson(String name, int id, double commissionRate)\n    {\n        setName(name);                       // reuse the mutators\n        this.id = id;                        // id has no setter -&gt; read-only field\n        setCommissionRate(commissionRate);   // validated!\n    }\n\n    public void setName(String n)      { name = n; }\n    public String getName()            { return name; }\n    public int getId()                 { return id; }        // accessor only\n\n    public void setCommissionRate(double newRate)\n    {\n        if (newRate &gt;= 0.0 &amp;&amp; newRate &lt;= 0.20)\n        {\n            commissionRate = (float) newRate;\n        }\n        else\n        {\n            System.out.println(\"Rate must be between 0 and 20%\");\n        }\n    }\n\n    public double getCommissionRate()  { return commissionRate; }\n\n    public void addToSales(double s)   { sales += s; }\n\n    public double computeCommission()\n    {\n        double commission = 0.0;\n        if (sales &gt; 0.0)\n        {\n            commission = sales * commissionRate;\n        }\n        sales = 0.0;                          // start over\n        return commission;\n    }\n}</code>"
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "SalesDemo.java",
        "tag": "Java"
      },
      "html": "<code>public class SalesDemo\n{\n    public static void main(String[] args)\n    {\n        SalesPerson s = new SalesPerson(\"Amal\", 501, 0.10);\n\n        s.addToSales(50000);\n        System.out.println(\"Commission: \" + s.computeCommission());\n\n        s.setCommissionRate(0.5);             // invalid -&gt; rejected by the class\n        s.addToSales(50000);\n        System.out.println(\"Commission: \" + s.computeCommission());\n\n        System.out.println(\"Name: \" + s.getName() + \", ID: \" + s.getId());\n    }\n}</code>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "advantages-of-encapsulation",
      "text": "Advantages of encapsulation"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Read-only or write-only classes</b> — provide only a getter (read-only) or only a setter (write-only). <code class=\"inl\">id</code> above is read-only.",
        "<b>Control over the data</b> — e.g. if id must be greater than 100, write that logic inside the setter. The class has total control over what is stored in its fields (like <code class=\"inl\">commissionRate</code> being forced into 0.0–0.20).",
        "<b>Hidden storage details</b> — users of a class don’t know (and don’t need to know) how the class stores its data. The class may even <b>change a field’s data type</b> and users won’t have to change any of their code."
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "abstraction-vs-encapsulation",
      "text": "Abstraction vs encapsulation"
    },
    {
      "type": "paragraph",
      "html": "These two are constantly confused — the lecture dedicates a full comparison. The mobile phone analogy: the complex logic in the circuit board is <b>encapsulated</b> in the touch screen (you can’t touch the internals), while the simple user interface provided to you <b>abstracts</b> the phone’s capabilities (you just tap “call”)."
    },
    {
      "type": "table",
      "head": [
        "Abstraction",
        "Encapsulation"
      ],
      "rows": [
        [
          "Solves problems at the <b>design level</b>",
          "Solves problems at the <b>implementation level</b>"
        ],
        [
          "About <b>hiding unwanted details</b> while showing the most essential information",
          "Means <b>hiding the code and data into a single unit</b>"
        ],
        [
          "Lets you focus on <b>what</b> an information object must contain",
          "Hides the <b>internal details / mechanics of how</b> an object does something, for security"
        ],
        [
          "Implemented with abstract classes &amp; interfaces",
          "Implemented with private fields + public getter/setter methods"
        ]
      ]
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "One-liner to remember",
      "html": "Encapsulation is more about <b>“how”</b> to achieve a functionality; abstraction is more about <b>“what”</b> a class can do."
    },
    {
      "type": "accordion",
      "items": [
        {
          "title": "Exercise set G — encapsulation ▾",
          "html": "<ol>\n        <li>Define encapsulation and give the lecture’s capsule analogy.</li>\n        <li>What is the standard technique to achieve encapsulation in Java?</li>\n        <li>What are accessor and mutator methods? What are their conventional names?</li>\n        <li>How do you make a class read-only with respect to one field?</li>\n        <li>Give the three advantages of encapsulation from the lecture.</li>\n        <li>Write two clear differences between abstraction and encapsulation, plus the mobile phone analogy.</li>\n        <li>Write an encapsulated class <code class=\"inl\">Patient</code> with a private field <code class=\"inl\">age</code> whose setter rejects negative values.</li>\n      </ol>\n      <button class=\"reveal-btn\">Show answers</button>\n      <div class=\"solution\"><div class=\"sol-label\">Answers</div>\n        <ol>\n          <li>Wrapping code and data together into a single unit — like a capsule mixing several medicines into one shell.</li>\n          <li>Make the fields private; provide access to them via public methods (getters/setters).</li>\n          <li>Accessors = get methods (view a field); mutators = set methods (change a field).</li>\n          <li>Provide a getter but no setter for that field (like <code class=\"inl\">getId()</code> with no <code class=\"inl\">setId()</code>).</li>\n          <li>Read-only/write-only classes; control over data (validation in setters); users don't know how data is stored (type changes don't break client code).</li>\n          <li>Abstraction: design level, hides unwanted details, focuses on WHAT. Encapsulation: implementation level, hides code+data in one unit, focuses on HOW — circuit board (encapsulated) vs user interface (abstraction) of a phone.</li>\n          <li>\n<code class=\"inl\">public class Patient { private int age; public void setAge(int a){ if(a &gt;= 0) age = a; else System.out.println(\"Invalid age\"); } public int getAge(){ return age; } }</code>\n          </li>\n        </ol>\n      </div>"
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Topic 7 Quiz — Encapsulation",
      "count": 7,
      "quizSlug": "07-encapsulation"
    }
  ]
};

export default chapter;
