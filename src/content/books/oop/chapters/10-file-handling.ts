import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "10-file-handling",
    "number": 10,
    "title": "File handling",
    "subtitle": "Lesson 06 · Streams, character & binary I/O, reader/writer chains",
    "kind": "topic",
    "words": 982,
    "minutes": 5
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "getting-to-know-streams",
      "text": "Getting to know streams"
    },
    {
      "type": "paragraph",
      "html": "A <b>stream</b> is simply a <b>flow of characters to and from a program</b>. The other end of the stream can be anything that accepts or generates characters: a <b>console window</b>, a <b>printer</b>, a <b>file on a disk drive</b>, or even <b>another program</b>. Streams have <b>no idea of the structure or meaning</b> of your data, a stream is just a sequence of characters/bonles that your code interprets."
    },
    {
      "type": "paragraph",
      "html": "Java I/O streams come in two flavours:"
    },
    {
      "type": "table",
      "head": [
        "Character streams",
        "Binary streams"
      ],
      "rows": [
        [
          "Read and write <b>text characters</b> that represent strings",
          "Read and write individual <b>bytes</b> that represent primitive data types"
        ],
        [
          "Connect to a <b>text file</b> (human-readable)",
          "Connect to a <b>binary file</b> (machine-readable)"
        ],
        [
          "Chains: FileReader → BufferedReader; FileWriter → BufferedWriter → PrintWriter",
          "Chains: FileInputStream → BufferedInputStream → DataInputStream; FileOutputStream → BufferedOutputStream → DataOutputStream"
        ]
      ]
    },
    {
      "type": "figure",
      "svg": "<svg class=\"fig lg\" viewBox=\"0 0 640 250\" role=\"img\" aria-label=\"Stream chains\">\n    <text x=\"320\" y=\"20\" text-anchor=\"middle\" class=\"lbl\" fill=\"var(--primary)\">CHARACTER STREAM, reading</text>\n    <rect x=\"30\" y=\"35\" width=\"120\" height=\"40\" rx=\"9\" class=\"boxp\"></rect><text x=\"90\" y=\"60\" text-anchor=\"middle\">student.txt</text>\n    <rect x=\"200\" y=\"35\" width=\"130\" height=\"40\" rx=\"9\" class=\"box\"></rect><text x=\"265\" y=\"60\" text-anchor=\"middle\">FileReader</text>\n    <rect x=\"380\" y=\"35\" width=\"150\" height=\"40\" rx=\"9\" class=\"box\"></rect><text x=\"455\" y=\"60\" text-anchor=\"middle\">BufferedReader</text>\n    <rect x=\"30\" y=\"110\" width=\"130\" height=\"40\" rx=\"9\" class=\"boxa\"></rect><text x=\"95\" y=\"135\" text-anchor=\"middle\">File f = new File(\"student.txt\")</text>\n    <path d=\"M150 55 L200 55\" class=\"ln\"></path><polygon points=\"200,55 190,50 190,60\" fill=\"var(--axis)\"></polygon>\n    <path d=\"M330 55 L380 55\" class=\"ln\"></path><polygon points=\"380,55 370,50 370,60\" fill=\"var(--axis)\"></polygon>\n    <text x=\"560\" y=\"60\" text-anchor=\"middle\" font-size=\"11\">readLine()</text>\n    <text x=\"320\" y=\"185\" text-anchor=\"middle\" class=\"lbl\" fill=\"var(--primary)\">CHARACTER STREAM, writing</text>\n    <rect x=\"30\" y=\"200\" width=\"130\" height=\"38\" rx=\"9\" class=\"boxp\"></rect><text x=\"95\" y=\"224\" text-anchor=\"middle\">student.txt</text>\n    <rect x=\"200\" y=\"200\" width=\"130\" height=\"38\" rx=\"9\" class=\"box\"></rect><text x=\"265\" y=\"224\" text-anchor=\"middle\">FileWriter</text>\n    <rect x=\"380\" y=\"200\" width=\"150\" height=\"38\" rx=\"9\" class=\"box\"></rect><text x=\"455\" y=\"224\" text-anchor=\"middle\">BufferedWriter</text>\n    <rect x=\"560\" y=\"200\" width=\"70\" height=\"38\" rx=\"9\" class=\"box\"></rect><text x=\"595\" y=\"224\" text-anchor=\"middle\" font-size=\"11\">PrintWriter</text>\n    <path d=\"M560 219 L530 219\" class=\"ln\"></path><polygon points=\"530,219 540,214 540,224\" fill=\"var(--axis)\"></polygon>\n    <path d=\"M330 219 L380 219\" class=\"ln\"></path><polygon points=\"380,219 370,214 370,224\" fill=\"var(--axis)\"></polygon>\n    <path d=\"M160 219 L200 219\" class=\"ln\"></path><polygon points=\"200,219 190,214 190,224\" fill=\"var(--axis)\"></polygon>\n  </svg>",
      "alt": "Stream chains",
      "caption": "Wrapper chains: each layer adds capability (buffering, typed read/write) over the raw file connection."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "character-streams-reading",
      "text": "Character streams: reading"
    },
    {
      "type": "table",
      "head": [
        "Class",
        "Role",
        "Key constructors"
      ],
      "rows": [
        [
          "<b>File</b>",
          "Represents a file on the hard drive; identifies the file to read/write",
          "<code class=\"inl\">File(String path)</code>, <code class=\"inl\">File(URI)</code>, <code class=\"inl\">File(File parent, String child)</code>, <code class=\"inl\">File(String parent, String child)</code>"
        ],
        [
          "<b>FileReader</b>",
          "Basic reading from a character stream originating from a file, one character at a time",
          "<code class=\"inl\">FileReader(File file)</code>, <code class=\"inl\">FileReader(String path)</code>"
        ],
        [
          "<b>BufferedReader</b>",
          "Wraps FileReader for efficiency: reads large chunks instead of one byte at a time; can read one character or one <b>line</b> at a time",
          "<code class=\"inl\">BufferedReader(Reader in)</code>"
        ]
      ]
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "MyCharacterReader.java",
        "tag": "Java"
      },
      "html": "<code>import java.io.*;\n\npublic class MyCharacterReader\n{\n    public static void main(String[] args) throws IOException\n    {\n        // 1. create a File object for the file\n        File f = new File(\"student.txt\");\n\n        // 2. create a FileReader object\n        FileReader fr = new FileReader(f);\n\n        // 3. wrap it in a BufferedReader\n        BufferedReader in = new BufferedReader(fr);\n\n        // 4. read line by line: readLine() returns null at end of file\n        String line = in.readLine();\n        while (line = null)\n        {\n            System.out.println(line);\n            line = in.readLine();\n        }\n\n        // 5. don't forget to close the stream\n        in.close();\n    }\n}</code>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "character-streams-writing",
      "text": "Character streams: writing"
    },
    {
      "type": "table",
      "head": [
        "Class",
        "Role",
        "Key constructors"
      ],
      "rows": [
        [
          "<b>FileWriter</b>",
          "Connects to a File but provides only rudimentary writing",
          "<code class=\"inl\">FileWriter(File)</code>, <code class=\"inl\">FileWriter(File, boolean append)</code>, <code class=\"inl\">FileWriter(String)</code>, <code class=\"inl\">FileWriter(String, boolean append)</code>"
        ],
        [
          "<b>BufferedWriter</b>",
          "Adds output buffering: data accumulates and is written when the buffer fills or is flushed",
          "<code class=\"inl\">BufferedWriter(Writer out)</code>"
        ],
        [
          "<b>PrintWriter</b>",
          "The class you actually work with, friendly print()/println() methods; usually wraps the BufferedWriter",
          "<code class=\"inl\">PrintWriter(Writer out)</code>, <code class=\"inl\">PrintWriter(Writer out, boolean flush)</code>"
        ]
      ]
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "MyCharacterWriting.java",
        "tag": "Java"
      },
      "html": "<code>import java.io.*;\n\npublic class MyCharacterWriting\n{\n    public static void main(String[] args) throws IOException\n    {\n        // REPLACING the file\n        File f = new File(\"student.txt\");\n        FileWriter fw = new FileWriter(f);\n        BufferedWriter bw = new BufferedWriter(fw);\n        PrintWriter out = new PrintWriter(bw);\n\n        // APPENDING instead:  new FileWriter(f, true)  &lt;- note the boolean\n\n        out.print(\"ID\");\n        out.print(\"\\t\");\n        out.println(\"Name\");          // print() and println() write text\n\n        out.flush();                  // don't forget to flush...\n        out.close();                  // ...and close\n    }\n}</code>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "binary-streams-reading",
      "text": "Binary streams: reading"
    },
    {
      "type": "table",
      "head": [
        "Class",
        "Role",
        "Key constructors"
      ],
      "rows": [
        [
          "<b>File</b>",
          "Again represents the file itself",
          "<code class=\"inl\">File(String path)</code>, …"
        ],
        [
          "<b>FileInputStream</b>",
          "Connects the input stream to the file",
          "<code class=\"inl\">FileInputStream(File)</code>, <code class=\"inl\">FileInputStream(String path)</code>"
        ],
        [
          "<b>BufferedInputStream</b>",
          "Adds buffering for efficiency",
          "<code class=\"inl\">BufferedInputStream(InputStream in)</code>"
        ],
        [
          "<b>DataInputStream</b>",
          "The class you actually work with, knows how to read <b>primitive types and strings</b>",
          "<code class=\"inl\">DataInputStream(InputStream in)</code>"
        ]
      ]
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "MyBinaryReading.java",
        "tag": "Java"
      },
      "html": "<code>import java.io.*;\n\npublic class MyBinaryReading\n{\n    public static void main(String[] args) throws IOException\n    {\n        File file = new File(\"Students.dat\");\n        FileInputStream fs     = new FileInputStream(file);\n        BufferedInputStream bs = new BufferedInputStream(fs);\n        DataInputStream in     = new DataInputStream(bs);\n\n        boolean eof = false;\n        while (eof)\n        {\n            try\n            {\n                // you must know the EXACT sequence of values in the file\n                String name = in.readUTF();\n                int id = in.readInt();\n\n                // ... do something with the data here\n            }\n            catch (EOFException e)          // signals end of file\n            {\n                eof = true;\n            }\n            catch (IOException e)\n            {\n                // handle other I/O problems\n            }\n        }\n        in.close();\n    }\n}</code>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "binary-streams-writing",
      "text": "Binary streams: writing"
    },
    {
      "type": "table",
      "head": [
        "Class",
        "Role",
        "Key constructors"
      ],
      "rows": [
        [
          "<b>FileOutputStream</b>",
          "Connects to the file but can write only <b>raw bytes</b>, no ints, doubles or strings",
          "<code class=\"inl\">FileOutputStream(File)</code>, <code class=\"inl\">FileOutputStream(File, boolean append)</code>, <code class=\"inl\">FileOutputStream(String)</code>, <code class=\"inl\">FileOutputStream(String, boolean append)</code>"
        ],
        [
          "<b>BufferedOutputStream</b>",
          "Adds output buffering",
          "<code class=\"inl\">BufferedOutputStream(OutputStream out)</code>"
        ],
        [
          "<b>DataOutputStream</b>",
          "Adds the ability to write <b>primitive data types and strings</b>",
          "<code class=\"inl\">DataOutputStream(OutputStream out)</code>"
        ]
      ]
    },
    {
      "type": "code",
      "language": "java",
      "header": {
        "file": "MyBinaryWriting.java",
        "tag": "Java"
      },
      "html": "<code>import java.io.*;\n\npublic class MyBinaryWriting\n{\n    public static void main(String[] args) throws IOException\n    {\n        // REPLACING:  new FileOutputStream(file)\n        // APPENDING:  new FileOutputStream(file, true)\n        File file = new File(\"Students.dat\");\n        FileOutputStream fos     = new FileOutputStream(file);\n        BufferedOutputStream bos = new BufferedOutputStream(fos);\n        DataOutputStream out     = new DataOutputStream(bos);\n\n        out.writeUTF(\"Nimal\");       // String\n        out.writeInt(101);           // int\n        out.writeDouble(3.75);       // double\n\n        out.flush();                 // don't forget to flush\n        out.close();                 // ...and close\n    }\n}</code>"
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "Exam pattern: the mirror rule",
      "html": "Reading and writing chains mirror each other: <b>FileReader → BufferedReader</b> vs <b>FileWriter → BufferedWriter → PrintWriter</b>; and <b>FileInputStream → BufferedInputStream → DataInputStream</b> vs <b>FileOutputStream → BufferedOutputStream → DataOutputStream</b>. Remember: <code class=\"inl\">readUTF()</code> / <code class=\"inl\">writeUTF()</code> handle Strings, and the boolean constructor argument switches to <b>append mode</b>."
    },
    {
      "type": "accordion",
      "items": [
        {
          "title": "Exercise set J: file handling",
          "html": "<ol>\n        <li>Define a stream. Name four possible “other ends” of a stream.</li>\n        <li>What is the difference between character streams and binary streams?</li>\n        <li>Write the full constructor chain for reading a text file line by line.</li>\n        <li>What does readLine() return when the end of the file is reached?</li>\n        <li>How do you open a FileWriter in append mode instead of replace mode?</li>\n        <li>Why is DataInputStream needed on top of FileInputStream?</li>\n        <li>How does the binary-reading loop detect the end of the file?</li>\n        <li>Which two methods must you call after writing, and why?</li>\n        <li>Which class gives you print()/println() for files?</li>\n      </ol>\n      <button class=\"reveal-btn\">Show answers</button>\n      <div class=\"solution\"><div class=\"sol-label\">Answers</div>\n        <ol>\n          <li>A flow of characters to/from a program. Other ends: console window, printer, file on disk, another program.</li>\n          <li>Character streams read/write text characters (strings) for text files; binary streams read/write bytes representing primitive types for binary files.</li>\n          <li>File f = new File(\"x.txt\"); FileReader fr = new FileReader(f); BufferedReader in = new BufferedReader(fr);</li>\n          <li>null.</li>\n          <li>Pass true as the second argument: new FileWriter(f, true).</li>\n          <li>FileInputStream reads only raw bytes; DataInputStream knows how to read primitive types and strings (readInt, readUTF...).</li>\n          <li>The read methods throw EOFException when data runs out, catch it and set the end-of-file flag.</li>\n          <li>out.flush() (push buffered data out) and out.close() (release the resource).</li>\n          <li>PrintWriter.</li>\n        </ol>\n      </div>"
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Topic 10 Quiz: File Handling",
      "count": 7,
      "quizSlug": "10-file-handling"
    }
  ]
};

export default chapter;
