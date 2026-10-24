import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "06-activity-diagrams",
  "title": "Topic 6 Quiz: Activity Diagrams",
  "questions": [
    {
      "prompt": "1. Activity diagrams are best described as:",
      "options": [
        "Database schema maps",
        "Class hierarchies",
        "\"OO flowcharts\" that model a process as activities and transitions",
        "Timelines of object lifetimes"
      ],
      "answer": 2,
      "explanation": "Activity diagrams are \"OO flowcharts\" showing data flow and control flow, a process modeled as a collection of activities and transitions between them."
    },
    {
      "prompt": "2. Which node terminates only one specific flow, leaving the rest of the activity running?",
      "options": [
        "Activity final node",
        "Flow final node (circle with X)",
        "Join node",
        "Initial node"
      ],
      "answer": 1,
      "explanation": "Flow final terminates only the specific flow reaching it. The activity final (bull's-eye) terminates the ENTIRE activity."
    },
    {
      "prompt": "3. A decision node's outgoing flows are distinguished by:",
      "options": [
        "Sequence numbers like 2.1",
        "Activation bars",
        "Nothing: all paths run in parallel",
        "Guard conditions in square brackets, e.g. [is junk]"
      ],
      "answer": 3,
      "explanation": "A decision node has one incoming flow and multiple outgoing flows, each guarded by a condition; only one path is selected at runtime."
    },
    {
      "prompt": "4. What is the critical difference between a fork and a decision node?",
      "options": [
        "A decision selects one outbound flow; a fork starts ALL outbound flows concurrently",
        "A decision starts all flows; a fork selects one",
        "They are identical, only the shape differs",
        "Forks use guards; decisions do not"
      ],
      "answer": 0,
      "explanation": "Both have one flow in and multiple out, but a decision selects a single guarded path, while a fork results in multiple outbound flows occurring concurrently."
    },
    {
      "prompt": "5. A join node lets the outbound flow begin when:",
      "options": [
        "Any one incoming flow arrives",
        "The first guard evaluates to true",
        "ALL incoming flows have completed",
        "Immediately, regardless of incoming flows"
      ],
      "answer": 2,
      "explanation": "Join synchronizes concurrent flows: all incoming flows must complete before the outbound flow begins. (Merge, by contrast, lets any one incoming flow continue.)"
    },
    {
      "prompt": "6. Swimlanes (partitions) in an activity diagram indicate:",
      "options": [
        "The order of messages",
        "Responsibility for performing actions (actors, roles, systems or components)",
        "Object states",
        "Database tables"
      ],
      "answer": 1,
      "explanation": "Partitions/swimlanes indicate responsibility: business units/actors in business models, systems/subsystems in system models, objects/components in application models."
    },
    {
      "prompt": "7. An object flow arrow from an <b>action to an object</b> means:",
      "options": [
        "The action uses or reads the object",
        "The object controls the action",
        "The object is destroyed",
        "The action produces, creates or updates the object"
      ],
      "answer": 3,
      "explanation": "Action → object: the action produces/creates/updates it. Object → action: the action uses/reads/requires it. Object state can be shown as [state] under the name."
    }
  ]
};

export default quiz;
