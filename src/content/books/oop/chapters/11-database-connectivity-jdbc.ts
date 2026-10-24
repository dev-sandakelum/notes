import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "11-database-connectivity-jdbc",
    "number": 11,
    "title": "Database Connectivity (JDBC)",
    "subtitle": "Lesson 07 · JDBC architecture, driver types, the 5 steps, ResultSet, MySQL example",
    "kind": "topic",
    "words": 1417,
    "minutes": 7
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "what-is-an-api",
      "text": "What is an API?"
    },
    {
      "type": "paragraph",
      "html": "<b>API</b> stands for <b>Application Programming Interface</b>. The <b>Java SE APIs</b> define the core Java platform for general-purpose computing, organized in modules whose names start with <code class=\"inl\">java</code>. An API is also the <b>document that describes all the features</b> of a product — it represents the classes and interfaces that software programs follow to communicate with each other, and can be created for applications, libraries, operating systems, and so on."
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Scale of the Java API",
      "html": "The Java language has only about <b>50 keywords</b>, but the Java API has <b>several thousand classes</b> with tens of thousands of methods. The real challenge of mastering Java isn’t the language — it’s mastering the API. The class library is as much a part of Java as the language itself."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "jdbc-introduction-and-why-not-odbc",
      "text": "JDBC introduction & why not ODBC"
    },
    {
      "type": "paragraph",
      "html": "<b>JDBC</b> = <b>Java Database Connectivity</b>, a standard Java API for <b>database-independent connectivity</b> between Java and a wide range of databases. JDBC is used to <b>connect and execute queries</b> with a database; the JDBC API uses <b>JDBC drivers</b> to make the connection. It lets you: <b>establish a connection</b> with a database, <b>send SQL commands</b>, and <b>process the results</b>."
    },
    {
      "type": "paragraph",
      "html": "Before JDBC there was <b>ODBC</b> (Open Database Connectivity) — but the ODBC driver is written in <b>C</b>, making it <b>platform dependent and unsecured</b>. Java therefore defined its own API (JDBC) with drivers <b>written in Java</b>."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "jdbc-architecture",
      "text": "JDBC architecture"
    },
    {
      "type": "paragraph",
      "html": "JDBC architecture consists of <b>two layers</b>: the <b>JDBC API</b> (connecting the Java application to the <code class=\"inl\">DriverManager</code>) and the <b>JDBC Driver API</b> (connecting the <code class=\"inl\">DriverManager</code> to the database drivers). The <b>DriverManager</b> selects the correct driver for the database, establishes the connection, supports multiple drivers simultaneously, and enables connecting to different databases."
    },
    {
      "type": "figure",
      "svg": "<svg class=\"fig lg\" viewBox=\"0 0 640 190\" role=\"img\" aria-label=\"JDBC architecture\">\n    <rect x=\"20\" y=\"65\" width=\"130\" height=\"55\" rx=\"10\" class=\"boxp\"></rect>\n    <text x=\"85\" y=\"88\" text-anchor=\"middle\" class=\"lbl\">Java</text>\n    <text x=\"85\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Application</text>\n    <rect x=\"195\" y=\"65\" width=\"140\" height=\"55\" rx=\"10\" class=\"box\"></rect>\n    <text x=\"265\" y=\"88\" text-anchor=\"middle\" class=\"lbl\">JDBC API</text>\n    <text x=\"265\" y=\"104\" text-anchor=\"middle\" font-size=\"10\">Connection, Statement, ResultSet</text>\n    <rect x=\"380\" y=\"65\" width=\"130\" height=\"55\" rx=\"10\" class=\"box\"></rect>\n    <text x=\"445\" y=\"88\" text-anchor=\"middle\" class=\"lbl\">DriverManager</text>\n    <text x=\"445\" y=\"104\" text-anchor=\"middle\" font-size=\"10\">chooses the driver</text>\n    <rect x=\"500\" y=\"20\" width=\"120\" height=\"42\" rx=\"9\" class=\"boxa\"></rect><text x=\"560\" y=\"45\" text-anchor=\"middle\" font-size=\"11\">JDBC Driver</text>\n    <rect x=\"500\" y=\"125\" width=\"120\" height=\"42\" rx=\"9\" class=\"boxa\"></rect><text x=\"560\" y=\"150\" text-anchor=\"middle\" font-size=\"11\">Database</text>\n    <path d=\"M150 92 L195 92\" class=\"ln\"></path><polygon points=\"195,92 185,87 185,97\" fill=\"var(--axis)\"></polygon>\n    <path d=\"M335 92 L380 92\" class=\"ln\"></path><polygon points=\"380,92 370,87 370,97\" fill=\"var(--axis)\"></polygon>\n    <path d=\"M510 65 L480 75\" class=\"ln\"></path><polygon points=\"480,75 491,76 485,66\" fill=\"var(--axis)\"></polygon>\n    <path d=\"M510 125 L480 105\" class=\"ln\"></path><polygon points=\"480,105 486,115 490,104\" fill=\"var(--axis)\"></polygon>\n    <path d=\"M560 62 L560 125\" class=\"ln\"></path><polygon points=\"560,125 555,115 565,115\" fill=\"var(--axis)\"></polygon>\n  </svg>",
      "alt": "JDBC architecture",
      "caption": "Two layers: JDBC API (application ↔ DriverManager) and Driver API (DriverManager ↔ drivers ↔ database)."
    },
    {
      "type": "table",
      "head": [
        "Component",
        "What it does"
      ],
      "rows": [
        [
          "<b>DriverManager</b>",
          "Manages a list of drivers; matches connection requests with the proper driver using the communication sub-protocol; the first driver that recognizes the sub-protocol establishes the connection"
        ],
        [
          "<b>Driver</b>",
          "Interface that handles communication with the database server"
        ],
        [
          "<b>Connection</b>",
          "All communication with the database flows through the connection object (the context)"
        ],
        [
          "<b>Statement</b>",
          "Used to submit SQL statements to the database (also PreparedStatement, CallableStatement)"
        ],
        [
          "<b>ResultSet</b>",
          "Holds the data retrieved after executing a query"
        ],
        [
          "<b>SQLException</b>",
          "Handles errors that occur in the database application"
        ]
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "the-four-jdbc-driver-types",
      "text": "The four JDBC driver types"
    },
    {
      "type": "table",
      "head": [
        "Type",
        "Description",
        "Advantage",
        "Disadvantage"
      ],
      "rows": [
        [
          "<b>1. JDBC-ODBC Bridge</b>",
          "Converts JDBC calls into ODBC function calls",
          "Easy to use; connects to almost any database",
          "Performance degraded (extra translation); ODBC driver must be installed on the client; now discouraged"
        ],
        [
          "<b>2. Native-API</b> (partially Java)",
          "Uses the client-side libraries of the database; converts JDBC calls into native calls",
          "Upgraded performance vs the bridge",
          "Native + vendor client libraries needed on every client machine"
        ],
        [
          "<b>3. Network Protocol</b> (fully Java)",
          "Uses middleware (application server) that converts JDBC calls into the vendor-specific protocol",
          "No client-side library; middleware adds auditing, load balancing, logging",
          "Needs network support; database-specific coding in the middle tier; costly maintenance"
        ],
        [
          "<b>4. Thin Driver</b> (fully Java)",
          "Converts JDBC calls <b>directly</b> into the vendor-specific database protocol",
          "<b>Best performance of all</b>; no software needed on client or server",
          "Driver depends on the database"
        ]
      ]
    },
    {
      "type": "paragraph",
      "html": "<b>MySQL Connector/J</b> — the driver used in the practicals — is a <b>Type 4</b> driver: a pure-Java implementation of the MySQL protocol that requires <b>no native MySQL client libraries</b>."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "the-5-basic-steps-to-use-a-database-in-java",
      "text": "The 5 basic steps to use a database in Java"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">Step 1 — Register the driver</div><div class=\"f-b\"><code class=\"inl\">Class.forName(\"com.mysql.cj.jdbc.Driver\");</code> loads the driver class into memory; loading it <b>automatically registers</b> it with the DriverManager.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Step 2 — Create a connection</div><div class=\"f-b\"><code class=\"inl\">Connection con = DriverManager.getConnection(url, user, password);</code> e.g. <code class=\"inl\">jdbc:mysql://localhost:3306/testdb</code></div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Step 3 — Create a statement</div><div class=\"f-b\"><code class=\"inl\">Statement stmt = con.createStatement();</code> responsible for sending SQL to the database.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Step 4 — Execute queries</div><div class=\"f-b\"><code class=\"inl\">execute()</code>, <code class=\"inl\">executeUpdate()</code> or <code class=\"inl\">executeQuery()</code> run the SQL and return results / row counts.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Step 5 — Close the connection</div><div class=\"f-b\"><code class=\"inl\">con.close();</code> frees resources — it also closes the Statement and ResultSet created from it.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">URL anatomy</div><div class=\"f-b\"><code class=\"inl\">jdbc:mysql://localhost:3306/tecruh</code> → jdbc = API, mysql = database, localhost = server, 3306 = port, tecruh = database name.</div></div>\n  </div>",
      "alt": "Formula reference cards"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "three-kinds-of-statements",
      "text": "Three kinds of statements"
    },
    {
      "type": "table",
      "head": [
        "Statement type",
        "Used for",
        "Example"
      ],
      "rows": [
        [
          "<b>Statement</b>",
          "Simple SQL with <b>no parameters</b>",
          "<code class=\"inl\">stmt.executeQuery(\"SELECT * FROM students\")</code>"
        ],
        [
          "<b>PreparedStatement</b> (extends Statement)",
          "<b>Precompiled</b> SQL that may include <b>input parameters</b> (? placeholders)",
          "<code class=\"inl\">con.prepareStatement(\"SELECT * FROM students WHERE id = ?\")</code>"
        ],
        [
          "<b>CallableStatement</b> (extends PreparedStatement)",
          "Executing <b>stored procedures</b> with input AND output parameters",
          "<code class=\"inl\">con.prepareCall(\"{call getStudent(?, ?)}\")</code>"
        ]
      ]
    },
    {
      "type": "paragraph",
      "html": "The three execute methods of Statement:"
    },
    {
      "type": "table",
      "head": [
        "Method",
        "Used for",
        "Returns"
      ],
      "rows": [
        [
          "<code class=\"inl\">execute(sql)</code>",
          "Any SQL statement",
          "<code class=\"inl\">boolean</code> — true if the result is a ResultSet"
        ],
        [
          "<code class=\"inl\">executeUpdate(sql)</code>",
          "INSERT, DELETE, UPDATE, CREATE TABLE…",
          "<code class=\"inl\">int</code> — the number of rows affected"
        ],
        [
          "<code class=\"inl\">executeQuery(sql)</code>",
          "<b>SELECT only</b>",
          "<code class=\"inl\">ResultSet</code> containing the query results"
        ]
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "preparedstatement-safe-and-fast",
      "text": "PreparedStatement — safe & fast"
    },
    {
      "type": "paragraph",
      "html": "Prepared statements are for queries <b>executed multiple times with different values</b>. The SQL is parsed and compiled by the database <b>only once</b>; values are supplied later via <code class=\"inl\">?</code> placeholders. This <b>improves performance</b> and <b>helps prevent SQL injection</b>:"
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "InsertExample.java",
        "tag": "Java"
      },
      "html": "<code>String sql = \"INSERT INTO emp VALUES (?, ?, ?)\";\nPreparedStatement ps = con.prepareStatement(sql);\n\n// set values for the placeholders — indices start at 1\nps.setInt(1, 101);\nps.setString(2, \"John\");\nps.setDouble(3, 5000.0);\n\nps.executeUpdate();</code>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "resultset-processing-query-data",
      "text": "ResultSet — processing query data"
    },
    {
      "type": "paragraph",
      "html": "A <b>ResultSet</b> holds the data returned by a query. Rows are retrieved sequentially; a <b>cursor</b> points to the current row and <b><code class=\"inl\">next()</code></b> moves it forward (it returns false when rows run out). Column values can be fetched <b>by index</b> (indices start at <b>1</b>, not 0!) or <b>by name</b> (slightly less efficient):"
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "ResultSetDemo.java",
        "tag": "Java"
      },
      "html": "<code>ResultSet rs = stmt.executeQuery(\"SELECT * FROM students\");\nwhile (rs.next())                            // move cursor row by row\n{\n    int id = rs.getInt(\"id\");                // by column name\n    String name = rs.getString(\"name\");\n\n    // equivalent, by index (1-based):\n    // rs.getString(1);  rs.getInt(2);\n\n    System.out.println(id + \" : \" + name);\n}\nrs.close();                                  // always close the ResultSet</code>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "full-example-connect-to-mysql",
      "text": "Full example — connect to MySQL"
    },
    {
      "type": "code",
      "language": "sql",
      "header": {
        "file": "Setup — create the database and table first",
        "tag": "SQL"
      },
      "html": "<code>CREATE DATABASE tecruh;\n\nCREATE TABLE student(\n    id int(10) PRIMARY KEY,\n    name varchar(40),\n    age int(3)\n);</code>"
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "MysqlCon.java",
        "tag": "Java"
      },
      "html": "<code>import java.sql.*;                       // 1. importing the library\n\nclass MysqlCon\n{\n    public static void main(String args[])\n    {\n        try\n        {\n            // 2. register the driver\n            Class.forName(\"com.mysql.cj.jdbc.Driver\");\n\n            // 3. establish the connection\n            //    tecruh = database, root = username, 1234 = password\n            Connection con = DriverManager.getConnection(\n                    \"jdbc:mysql://localhost:3306/tecruh\", \"root\", \"1234\");\n\n            // 4. create statement\n            Statement stmt = con.createStatement();\n\n            // 5. execute the query to retrieve data from the table\n            ResultSet rs = stmt.executeQuery(\"SELECT * FROM student\");\n\n            // 6. traverse through the result set\n            while (rs.next())\n                System.out.println(rs.getInt(1) + \"  \" + rs.getString(2)\n                                   + \"  \" + rs.getInt(3));\n\n            // 7. close the connection\n            con.close();\n        }\n        catch (Exception e)\n        {\n            System.out.println(e.getMessage());\n        }\n    }\n}</code>"
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "Error handling in JDBC",
      "html": "Exceptions may occur during any database operation. Wrap the steps in <b>try-catch-finally</b> so the program recovers gracefully and the database stays consistent — e.g. <b>rollback transactions</b> or <b>close resources</b> (connection, statement, result set) in the finally block when an exception occurs."
    },
    {
      "type": "accordion",
      "items": [
        {
          "title": "Exercise set K — JDBC ▾",
          "html": "<ol>\n        <li>What does API stand for, and why is mastering Java mostly about the API?</li>\n        <li>What does JDBC stand for and what three things does it allow?</li>\n        <li>Why did Java define JDBC instead of using ODBC?</li>\n        <li>Describe the two layers of the JDBC architecture and the role of DriverManager.</li>\n        <li>Name the four JDBC driver types. Which performs best and why? Which type is MySQL Connector/J?</li>\n        <li>Write the five basic steps for using a database in Java (with the key method call for each).</li>\n        <li>Differentiate Statement, PreparedStatement and CallableStatement.</li>\n        <li>Compare execute(), executeUpdate() and executeQuery() — what does each return?</li>\n        <li>Break the URL jdbc:mysql://localhost:3306/tecruh into its five parts.</li>\n        <li>What does rs.next() do, and at what number do column indices start?</li>\n      </ol>\n      <button class=\"reveal-btn\">Show answers</button>\n      <div class=\"solution\"><div class=\"sol-label\">Answers</div>\n        <ol>\n          <li>Application Programming Interface — the description of classes/interfaces programs use to communicate. Java has ~50 keywords but thousands of API classes with tens of thousands of methods.</li>\n          <li>Java Database Connectivity — establish a connection, send SQL commands, process results.</li>\n          <li>ODBC drivers are written in C (platform dependent, unsecured); JDBC drivers are written in Java.</li>\n          <li>JDBC API (application ↔ DriverManager) + JDBC Driver API (DriverManager ↔ drivers). DriverManager picks the correct driver, establishes connections, supports multiple drivers.</li>\n          <li>JDBC-ODBC Bridge, Native-API, Network Protocol, Thin. Thin (Type 4) is best — pure Java, converts directly to the vendor protocol, nothing to install on client/server. Connector/J is Type 4.</li>\n          <li>1. Class.forName(\"com.mysql.cj.jdbc.Driver\") &nbsp;2. DriverManager.getConnection(url,user,pass) &nbsp;3. con.createStatement() &nbsp;4. stmt.executeQuery/executeUpdate &nbsp;5. con.close()</li>\n          <li>Statement: simple SQL, no parameters. PreparedStatement: precompiled with ? inputs. CallableStatement: stored procedures with input/output parameters.</li>\n          <li>execute → boolean (true if ResultSet); executeUpdate → int row count (INSERT/UPDATE/DELETE/CREATE); executeQuery → ResultSet (SELECT only).</li>\n          <li>jdbc = API, mysql = database, localhost = server name, 3306 = port, tecruh = database name.</li>\n          <li>next() moves the cursor to the next row (false when done); column indices start at 1.</li>\n        </ol>\n      </div>"
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Topic 11 Quiz — JDBC",
      "count": 8,
      "quizSlug": "11-database-connectivity-jdbc"
    }
  ]
};

export default chapter;
