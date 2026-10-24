import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "10-file-handling",
  "title": "Topic 10 Quiz — File Handling",
  "questions": [
    {
      "prompt": "1. A stream is…",
      "options": [
        "<input type=\"radio\" name=\"q10a\" value=\"0\">A kind of class",
        "<input type=\"radio\" name=\"q10a\" value=\"1\">A flow of characters to and from a program",
        "<input type=\"radio\" name=\"q10a\" value=\"2\">A network protocol",
        "<input type=\"radio\" name=\"q10a\" value=\"3\">A database connection"
      ],
      "answer": 1,
      "explanation": "Streams move data between the program and console/printer/file/another program — with no idea of the data's meaning."
    },
    {
      "prompt": "2. The correct chain for reading a TEXT file is…",
      "options": [
        "<input type=\"radio\" name=\"q10b\" value=\"0\">FileInputStream → DataInputStream",
        "<input type=\"radio\" name=\"q10b\" value=\"1\">FileWriter → PrintWriter",
        "<input type=\"radio\" name=\"q10b\" value=\"2\">File → FileReader → BufferedReader",
        "<input type=\"radio\" name=\"q10b\" value=\"3\">File → Scanner → FileReader"
      ],
      "answer": 2,
      "explanation": "File identifies the file, FileReader connects, BufferedReader adds buffering + readLine()."
    },
    {
      "prompt": "3. readLine() returns ____ at the end of the file.",
      "options": [
        "<input type=\"radio\" name=\"q10c\" value=\"0\">null",
        "<input type=\"radio\" name=\"q10c\" value=\"1\">-1",
        "<input type=\"radio\" name=\"q10c\" value=\"2\">An empty string",
        "<input type=\"radio\" name=\"q10c\" value=\"3\">An EOFException"
      ],
      "answer": 0,
      "explanation": "The while (line != null) loop is the standard text-reading pattern."
    },
    {
      "prompt": "4. Which class can write primitive data types AND strings to a binary file?",
      "options": [
        "<input type=\"radio\" name=\"q10d\" value=\"0\">FileWriter",
        "<input type=\"radio\" name=\"q10d\" value=\"1\">PrintWriter",
        "<input type=\"radio\" name=\"q10d\" value=\"2\">FileOutputStream",
        "<input type=\"radio\" name=\"q10d\" value=\"3\">DataOutputStream"
      ],
      "answer": 3,
      "explanation": "FileOutputStream writes only raw bytes; DataOutputStream adds writeInt, writeDouble, writeUTF..."
    },
    {
      "prompt": "5. new FileWriter(file, true) means…",
      "options": [
        "<input type=\"radio\" name=\"q10e\" value=\"0\">Replace the file contents",
        "<input type=\"radio\" name=\"q10e\" value=\"1\">Append to the file",
        "<input type=\"radio\" name=\"q10e\" value=\"2\">Read-only mode",
        "<input type=\"radio\" name=\"q10e\" value=\"3\">Create a backup first"
      ],
      "answer": 1,
      "explanation": "The boolean append flag switches from replacing (false/default) to appending (true)."
    },
    {
      "prompt": "6. In binary reading, the end of file is detected by…",
      "options": [
        "<input type=\"radio\" name=\"q10f\" value=\"0\">readLine() returning null",
        "<input type=\"radio\" name=\"q10f\" value=\"1\">A boolean from readEOF()",
        "<input type=\"radio\" name=\"q10f\" value=\"2\">Catching EOFException",
        "<input type=\"radio\" name=\"q10f\" value=\"3\">Checking file.length()"
      ],
      "answer": 2,
      "explanation": "DataInputStream's read methods throw EOFException when the data runs out — catch it to stop the loop."
    },
    {
      "prompt": "7. Why does BufferedReader wrap FileReader?",
      "options": [
        "<input type=\"radio\" name=\"q10g\" value=\"0\">To read in large chunks instead of one character at a time — more efficient, and it can read whole lines",
        "<input type=\"radio\" name=\"q10g\" value=\"1\">To encrypt the file",
        "<input type=\"radio\" name=\"q10g\" value=\"2\">Because FileReader cannot open files",
        "<input type=\"radio\" name=\"q10g\" value=\"3\">To convert text to binary"
      ],
      "answer": 0,
      "explanation": "Buffering lets the program read from the disk in large chunks; BufferedReader adds readLine() for line-at-a-time reading."
    }
  ]
};

export default quiz;
