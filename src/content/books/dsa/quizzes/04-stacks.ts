import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "04-stacks",
  "title": "Topic 3 Quiz: Stacks",
  "questions": [
    {
      "prompt": "1. A stack is a linear structure where insertion and deletion happen…",
      "options": [
        "At both ends",
        "At one end only (the top)",
        "Anywhere in the middle",
        "At the front only"
      ],
      "answer": 1,
      "explanation": "<b>One end only</b>: the TOP. That restriction is what creates the LIFO behaviour."
    },
    {
      "prompt": "2. With MAX = 6, overflow occurs when…",
      "options": [
        "top = −1",
        "top = 5 and we pop",
        "top = 6 (pushing past N−1)",
        "top = 0"
      ],
      "answer": 2,
      "explanation": "<b>top = N</b> means overflow. For size 6, the legal range of top is −1 (empty) … 5 (full = N−1)."
    },
    {
      "prompt": "3. Pushing onto an array stack is correctly done by…",
      "options": [
        "top = top + 1; then stack[top] = item;",
        "stack[top] = item; then top = top + 1;",
        "top = top − 1; then stack[top] = item;",
        "stack[0] = item;"
      ],
      "answer": 0,
      "explanation": "Increment <b>first</b>, then store: otherwise the first element would land at index −1."
    },
    {
      "prompt": "4. The prefix form of A + B * C is…",
      "options": [
        "A B C * +",
        "+ A B * C",
        "A B + C *",
        "+ A * B C"
      ],
      "answer": 3,
      "explanation": "B*C binds first → *BC; then + A ( * B C ) → <b>+ A * B C</b>. Option 1 is the postfix distractor… carefully: A B C * + is postfix."
    },
    {
      "prompt": "5. Evaluating postfix, when you meet an operator you…",
      "options": [
        "Push it and continue",
        "Pop two operands, evaluate, push the result",
        "Pop one operand and stop",
        "Ignore parentheses first"
      ],
      "answer": 1,
      "explanation": "Operators consume the <b>top two</b> stack values and replace them with the computed result."
    },
    {
      "prompt": "6. Which application does NOT naturally use a stack?",
      "options": [
        "Browser back button",
        "Undo feature in an editor",
        "Printer job scheduling",
        "Implementing recursion"
      ],
      "answer": 2,
      "explanation": "Printer scheduling is <b>FIFO</b>: that's a <b>queue</b>. The rest are classic stack uses."
    },
    {
      "prompt": "7. In a linked-list stack, the new node's <code>next</code> points to…",
      "options": [
        "The previous top node",
        "NULL always",
        "The bottom node",
        "Itself"
      ],
      "answer": 0,
      "explanation": "Push: <code>n-&gt;next = top;</code> then <code>top = n;</code>: each new node sits on top of the old one."
    },
    {
      "prompt": "8. In the expression tree / evaluation world, the <b>inorder</b> traversal of an expression tree produces…",
      "options": [
        "Postfix notation",
        "Prefix notation",
        "Sorted order",
        "Infix notation"
      ],
      "answer": 3,
      "explanation": "Inorder → infix form; preorder → prefix form; postorder → postfix form."
    }
  ]
};

export default quiz;
