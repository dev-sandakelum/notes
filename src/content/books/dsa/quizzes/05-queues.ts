import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "05-queues",
  "title": "Topic 4 Quiz: Queues",
  "questions": [
    {
      "prompt": "1. In a queue, insertions happen at the ______ and deletions at the ______.",
      "options": [
        "front / rear",
        "rear / front",
        "top / bottom",
        "rear / rear"
      ],
      "answer": 1,
      "explanation": "<b>Rear / front</b>: new items join the back of the line; the front is served and leaves."
    },
    {
      "prompt": "2. With front = 3 and rear = 7, the number of elements is…",
      "options": [
        "4",
        "7",
        "5",
        "10"
      ],
      "answer": 2,
      "explanation": "rear − front + 1 = 7 − 3 + 1 = <b>5</b>."
    },
    {
      "prompt": "3. The main problem with a linear (array) queue is…",
      "options": [
        "Space at the front is wasted after dequeues",
        "It is too slow to enqueue",
        "It cannot store integers",
        "It must always be sorted"
      ],
      "answer": 0,
      "explanation": "After dequeues, rear reaches the end and no more enqueues fit even though free cells remain at the front, solved by the <b>circular</b> queue."
    },
    {
      "prompt": "4. A circular queue is also known as a…",
      "options": [
        "Stack buffer",
        "Priority list",
        "Deque",
        "Ring buffer"
      ],
      "answer": 3,
      "explanation": "<b>Ring buffer</b>: the indices wrap around the array like a ring."
    },
    {
      "prompt": "5. Keyboard buffer, printer spooling and CPU job scheduling are applications of…",
      "options": [
        "Stacks",
        "Queues",
        "Trees",
        "Hash tables"
      ],
      "answer": 1,
      "explanation": "All are FIFO waiting-line situations: classic <b>queue</b> applications."
    },
    {
      "prompt": "6. In a queue of SIZE 6 with rear = 5 (last index), a circular implementation should…",
      "options": [
        "Declare overflow immediately",
        "Shift all elements left",
        "Wrap rear to −1 and continue",
        "Double the array size"
      ],
      "answer": 2,
      "explanation": "If front ≠ 0 there is room at the start: reset rear to −1, then rear++ lands at 0; the wraparound step of circular enqueue."
    },
    {
      "prompt": "7. A queue implemented with a circular linked list needs how many external pointers?",
      "options": [
        "One: a pointer to the last node",
        "Two: front and rear",
        "Three: count, front, rear",
        "None"
      ],
      "answer": 0,
      "explanation": "Keep only a pointer to the last node: front is always <code>last-&gt;next</code>."
    },
    {
      "prompt": "8. Which operation examines the front element WITHOUT removing it?",
      "options": [
        "dequeue()",
        "enqueue()",
        "size()",
        "peek() / first()"
      ],
      "answer": 3,
      "explanation": "<b>peek()/first()</b> returns <code>queue[front]</code> without changing front."
    }
  ]
};

export default quiz;
