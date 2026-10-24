import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "11-database-connectivity-jdbc",
  "title": "Topic 11 Quiz: JDBC",
  "questions": [
    {
      "prompt": "1. JDBC stands for…",
      "options": [
        "<input type=\"radio\" name=\"q11a\" value=\"0\">Java Database Joining Connector",
        "<input type=\"radio\" name=\"q11a\" value=\"1\">Java Data Bridge Connection",
        "<input type=\"radio\" name=\"q11a\" value=\"2\">Java Database Connectivity",
        "<input type=\"radio\" name=\"q11a\" value=\"3\">Joined Database Java Classes"
      ],
      "answer": 2,
      "explanation": "Java Database Connectivity: the standard Java API for database-independent connectivity."
    },
    {
      "prompt": "2. Why did Java define JDBC instead of using ODBC?",
      "options": [
        "<input type=\"radio\" name=\"q11b\" value=\"0\">ODBC was too old to run",
        "<input type=\"radio\" name=\"q11b\" value=\"1\">ODBC drivers are written in C, platform dependent and unsecured; JDBC drivers are written in Java",
        "<input type=\"radio\" name=\"q11b\" value=\"2\">ODBC could not run SQL",
        "<input type=\"radio\" name=\"q11b\" value=\"3\">JDBC needs no database at all"
      ],
      "answer": 1,
      "explanation": "C-based ODBC = platform dependent + unsecured; Java needed its own pure-Java driver API."
    },
    {
      "prompt": "3. Which driver type gives the best performance and needs no client-side software?",
      "options": [
        "<input type=\"radio\" name=\"q11c\" value=\"0\">Type 4: Thin driver (fully Java)",
        "<input type=\"radio\" name=\"q11c\" value=\"1\">Type 1: JDBC-ODBC bridge",
        "<input type=\"radio\" name=\"q11c\" value=\"2\">Type 2: Native-API driver",
        "<input type=\"radio\" name=\"q11c\" value=\"3\">Type 3: Network Protocol driver"
      ],
      "answer": 0,
      "explanation": "Thin drivers convert JDBC calls directly into the vendor protocol, pure Java, nothing to install either side. MySQL Connector/J is Type 4."
    },
    {
      "prompt": "4. Class.forName(\"com.mysql.cj.jdbc.Driver\") does what?",
      "options": [
        "<input type=\"radio\" name=\"q11d\" value=\"0\">Opens the database connection",
        "<input type=\"radio\" name=\"q11d\" value=\"1\">Executes a SELECT query",
        "<input type=\"radio\" name=\"q11d\" value=\"2\">Creates a Statement object",
        "<input type=\"radio\" name=\"q11d\" value=\"3\">Dynamically loads the driver class, which registers itself with the DriverManager"
      ],
      "answer": 3,
      "explanation": "Step 1 of the 5 steps: load the driver into memory: registration with DriverManager happens automatically."
    },
    {
      "prompt": "5. executeQuery() is used for ____ and returns ____.",
      "options": [
        "<input type=\"radio\" name=\"q11e\" value=\"0\">Any SQL; a boolean",
        "<input type=\"radio\" name=\"q11e\" value=\"1\">INSERT/UPDATE/DELETE; the row count",
        "<input type=\"radio\" name=\"q11e\" value=\"2\">SELECT only; a ResultSet",
        "<input type=\"radio\" name=\"q11e\" value=\"3\">Stored procedures; a Statement"
      ],
      "answer": 2,
      "explanation": "executeQuery = SELECT only, returns ResultSet. executeUpdate returns an int row count. execute returns boolean."
    },
    {
      "prompt": "6. In the URL jdbc:mysql://localhost:3306/tecruh: what is 3306?",
      "options": [
        "<input type=\"radio\" name=\"q11f\" value=\"0\">The table name",
        "<input type=\"radio\" name=\"q11f\" value=\"1\">The port number",
        "<input type=\"radio\" name=\"q11f\" value=\"2\">The password",
        "<input type=\"radio\" name=\"q11f\" value=\"3\">The number of connections"
      ],
      "answer": 1,
      "explanation": "jdbc (API) : mysql (database) : localhost (server) : 3306 (port) : tecruh (database name)."
    },
    {
      "prompt": "7. Which is TRUE about ResultSet?",
      "options": [
        "<input type=\"radio\" name=\"q11g\" value=\"0\">next() moves the cursor to the next row, and column indices start at 1",
        "<input type=\"radio\" name=\"q11g\" value=\"1\">next() restarts from the first row, and indices start at 0",
        "<input type=\"radio\" name=\"q11g\" value=\"2\">Rows must be read in random order",
        "<input type=\"radio\" name=\"q11g\" value=\"3\">ResultSet holds only one row"
      ],
      "answer": 0,
      "explanation": "A cursor walks rows sequentially with next(); getInt(1)/getString(2)... are 1-based (fetching by name is also possible)."
    },
    {
      "prompt": "8. PreparedStatement should be preferred because it…",
      "options": [
        "<input type=\"radio\" name=\"q11h\" value=\"0\">Is the only way to run SELECT",
        "<input type=\"radio\" name=\"q11h\" value=\"1\">Needs no Connection object",
        "<input type=\"radio\" name=\"q11h\" value=\"2\">Is precompiled once for repeated use and helps prevent SQL injection",
        "<input type=\"radio\" name=\"q11h\" value=\"3\">Returns multiple ResultSets automatically"
      ],
      "answer": 2,
      "explanation": "? placeholders + one-time compilation = better performance and injection safety."
    }
  ]
};

export default quiz;
