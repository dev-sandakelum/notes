import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "15-final-practice-exam",
    "number": 15,
    "title": "Final Practice Exam",
    "subtitle": "20 mixed questions across all 12 topics · exam conditions",
    "kind": "exam",
    "words": 73,
    "minutes": 1
  },
  "blocks": [
    {
      "type": "callout",
      "variant": "exam",
      "title": "Instructions",
      "html": "Answer all 20 questions without looking back at the notes. Score 16+ (80%) → you are exam-ready. Below 12 → revisit the flagged topics in the explanations. Every question shows which topic it tests."
    },
    {
      "type": "quiz",
      "title": "Final Practice Exam — ICT2113 DSA",
      "count": 20,
      "quizSlug": "15-final-practice-exam"
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "After the exam",
      "html": "Review every explanation, then reopen the topics where you slipped. When you consistently clear 16/20, take the topic quizzes once more in random order — that's the level of retrieval speed you want in the exam hall. Good luck!"
    }
  ]
};

export default chapter;
