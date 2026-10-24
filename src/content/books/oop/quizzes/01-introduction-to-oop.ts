import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "01-introduction-to-oop",
  "title": "Topic 1 Quiz: Introduction to OOP",
  "questions": [
    {
      "prompt": "1. Object-oriented programming is best described as…",
      "options": [
        "<input type=\"radio\" name=\"q1a\" value=\"0\">A programming language that replaced C",
        "<input type=\"radio\" name=\"q1a\" value=\"1\">A way to make programs run without objects",
        "<input type=\"radio\" name=\"q1a\" value=\"2\">A paradigm based on wrapping data and related behavior into objects built from classes",
        "<input type=\"radio\" name=\"q1a\" value=\"3\">A technique for compiling code faster"
      ],
      "answer": 2,
      "explanation": "OOP is a paradigm: data + behavior are bundled into objects, constructed from class \"blueprints\"."
    },
    {
      "prompt": "2. Which is NOT one of the four reasons for object orientation given in the lecture?",
      "options": [
        "<input type=\"radio\" name=\"q1b\" value=\"0\">Modularity",
        "<input type=\"radio\" name=\"q1b\" value=\"1\">Faster hardware utilisation",
        "<input type=\"radio\" name=\"q1b\" value=\"2\">Information-hiding",
        "<input type=\"radio\" name=\"q1b\" value=\"3\">Pluggability and debugging ease"
      ],
      "answer": 1,
      "explanation": "The four reasons are modularity, information-hiding, code re-use, and pluggability/debugging ease."
    },
    {
      "prompt": "3. A class is…",
      "options": [
        "<input type=\"radio\" name=\"q1c\" value=\"0\">A blueprint from which individual objects are created",
        "<input type=\"radio\" name=\"q1c\" value=\"1\">A running instance in memory",
        "<input type=\"radio\" name=\"q1c\" value=\"2\">A message passed between objects",
        "<input type=\"radio\" name=\"q1c\" value=\"3\">A special kind of variable"
      ],
      "answer": 0,
      "explanation": "\"A class is the blueprint from which individual objects are created\", objects are instances of a class."
    },
    {
      "prompt": "4. Which is NOT one of the three characteristics of an object?",
      "options": [
        "<input type=\"radio\" name=\"q1d\" value=\"0\">State",
        "<input type=\"radio\" name=\"q1d\" value=\"1\">Behavior",
        "<input type=\"radio\" name=\"q1d\" value=\"2\">Identity",
        "<input type=\"radio\" name=\"q1d\" value=\"3\">Compilation"
      ],
      "answer": 3,
      "explanation": "Objects have state (properties/values), behavior (methods) and identity (e.g. account number, serial no)."
    },
    {
      "prompt": "5. In the object-oriented view, a program is a collection of objects that…",
      "options": [
        "<input type=\"radio\" name=\"q1e\" value=\"0\">Share all their data globally",
        "<input type=\"radio\" name=\"q1e\" value=\"1\">Pass messages to each other, and each object decides what to do with a received message",
        "<input type=\"radio\" name=\"q1e\" value=\"2\">Execute strictly in a fixed sequence",
        "<input type=\"radio\" name=\"q1e\" value=\"3\">Are deleted after every method call"
      ],
      "answer": 1,
      "explanation": "Objects pass messages; each object decides what to do with a received message."
    },
    {
      "prompt": "6. The focus of object orientation is on…",
      "options": [
        "<input type=\"radio\" name=\"q1f\" value=\"0\">Functions and procedures",
        "<input type=\"radio\" name=\"q1f\" value=\"1\">Hardware efficiency",
        "<input type=\"radio\" name=\"q1f\" value=\"2\">Data, its attributes and how it is manipulated",
        "<input type=\"radio\" name=\"q1f\" value=\"3\">The exact algorithm of manipulation"
      ],
      "answer": 2,
      "explanation": "OO focuses on data and not on function; the exact mechanism of manipulation is not the primary focus."
    },
    {
      "prompt": "7. Instantiation is…",
      "options": [
        "<input type=\"radio\" name=\"q1g\" value=\"0\">The creation of a realized instance from a class (e.g. with new)",
        "<input type=\"radio\" name=\"q1g\" value=\"1\">Deleting an object from memory",
        "<input type=\"radio\" name=\"q1g\" value=\"2\">Writing the class source code",
        "<input type=\"radio\" name=\"q1g\" value=\"3\">Passing a message between two objects"
      ],
      "answer": 0,
      "explanation": "Instantiation = creating a real instance of a class; in Java the new keyword performs it."
    }
  ]
};

export default quiz;
