import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "08-interaction-diagrams-sequence-and-communication",
  "title": "Topic 8 Quiz: Interaction Diagrams",
  "questions": [
    {
      "prompt": "1. The key difference between communication and sequence diagrams is:",
      "options": [
        "Communication diagrams show class structure; sequence diagrams show data flow",
        "Communication diagrams emphasize how objects are connected (with numbered messages); sequence diagrams emphasize when messages occur (top-to-bottom order)",
        "Sequence diagrams are structural; communication diagrams are behavioral",
        "There is no difference"
      ],
      "answer": 1,
      "explanation": "Both are interaction (behavioral) diagrams. Communication = object organization + message numbers; Sequence = horizontal lifelines + vertical time ordering."
    },
    {
      "prompt": "2. In a communication diagram, the message label <code>2.1: checkCredentials()</code> means:",
      "options": [
        "The 21st message in the interaction",
        "A message sent 2.1 seconds later",
        "A message nested inside (sent during) message 2",
        "An invalid label"
      ],
      "answer": 2,
      "explanation": "Dotted numbering expresses nesting: 2.1 happens within message 2 (e.g. checkCredentials() runs inside validateUser())."
    },
    {
      "prompt": "3. A lifeline with a <b>boundary</b> element represents:",
      "options": [
        "A system boundary/software element users interact with, e.g. UI screens, menus, database gateways",
        "System data such as a Customer entity",
        "A controlling entity that mediates between boundaries and entities",
        "The actor that owns the use case"
      ],
      "answer": 0,
      "explanation": "Boundary = UI/gateway elements; Control = mediator/manager organizing interactions; Entity = system data; Actor = external participant (when the diagram is owned by a use case)."
    },
    {
      "prompt": "4. A sender that continues sending other messages without waiting for the receiver to finish is using:",
      "options": [
        "A synchronous message",
        "A return message",
        "A reflexive message",
        "An asynchronous message"
      ],
      "answer": 3,
      "explanation": "Asynchronous = don't wait. Synchronous = the sender waits for processing and return before continuing. (The FoodOrderingSystem/NotificationService activity is the classic async example.)"
    },
    {
      "prompt": "5. What does an <b>X</b> at the end of a lifeline mean?",
      "options": [
        "The object was just created",
        "The participant is destroyed / deleted from the sequence",
        "An error occurred in the message",
        "The object sent a message to itself"
      ],
      "answer": 1,
      "explanation": "The destruction message ends a participant's lifeline with an X. Creation is shown by a message arriving at the new object's head; a self-message is reflexive."
    },
    {
      "prompt": "6. The thin rectangle on a lifeline that shows when an object is active/executing is called:",
      "options": [
        "A fragment",
        "A guard",
        "An activation bar",
        "A link"
      ],
      "answer": 2,
      "explanation": "Activation bars indicate when an object is active: the caller is active while sending; the receiver becomes active when processing the message. Length = duration of activity."
    },
    {
      "prompt": "7. Which message signature follows the lecture's format?",
      "options": [
        "attribute = message_name(arguments) : return_type",
        "return_type = name(parameters) : attribute",
        "message_name(attribute) = arguments",
        "object.reference(parameters)"
      ],
      "answer": 0,
      "explanation": "A message arrow carries the signature: attribute = message_name(arguments) : return_type, e.g. balance = getBalance(accountID) : double."
    }
  ]
};

export default quiz;
