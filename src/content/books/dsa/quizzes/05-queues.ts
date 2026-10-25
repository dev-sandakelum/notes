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
    },
    {
      "prompt": "9. A circular queue of SIZE 6 sacrifices one slot. How many elements can it store?",
      "options": [
        "6",
        "5",
        "7",
        "3"
      ],
      "answer": 1,
      "explanation": "The sacrificed cell is what separates FULL from EMPTY, so capacity is <b>SIZE − 1 = 5</b>."
    },
    {
      "prompt": "10. In a count-variable circular queue, which pair of conditions gives FULL and EMPTY?",
      "options": [
        "FULL: front == rear · EMPTY: front == 0",
        "FULL: count == SIZE · EMPTY: count == 0",
        "FULL: rear == SIZE − 1 · EMPTY: rear == −1",
        "FULL: count == 0 · EMPTY: count == SIZE"
      ],
      "answer": 1,
      "explanation": "The count variable counts stored elements: it hits <b>SIZE</b> when full and <b>0</b> when empty · positions alone are ambiguous after wraps."
    },
    {
      "prompt": "11. A SIZE-5 circular queue (count design) has front = 3, rear = 4, count = 2. Where does the next enqueued element go?",
      "options": [
        "Slot 4",
        "Slot 0",
        "Slot 5",
        "Slot 3"
      ],
      "answer": 1,
      "explanation": "rear = (4 + 1) % 5 = <b>0</b> · the modulo wraps past the last slot back to the start."
    },
    {
      "prompt": "12. Why does a linear array queue waste space after dequeues?",
      "options": [
        "Elements must be sorted after each removal",
        "front moves forward and its freed cells can never be reused by rear",
        "The array doubles in size automatically",
        "rear resets to 0 on every dequeue"
      ],
      "answer": 1,
      "explanation": "rear keeps marching toward the end while the cells behind front sit empty · the “false full” the circular queue fixes with the modulo wrap."
    }
  ]
};

export default quiz;
