import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "10-final-practice-exam",
    "number": 10,
    "title": "Final Practice Exam",
    "subtitle": "15 mixed questions · all topics · exam conditions",
    "kind": "exam",
    "words": 32,
    "minutes": 1
  },
  "blocks": [
    {
      "type": "callout",
      "variant": "info",
      "title": "Before you begin",
      "html": "Give yourself <b>25 minutes</b>, no notes, no going back. Aim for <b>12+/15</b> (80%) before the real exam. Every question maps to a topic section — revisit any topic where you slip."
    },
    {
      "type": "quiz",
      "title": "TCS 2112 Practice Exam",
      "count": 15,
      "quizSlug": "10-final-practice-exam"
    }
  ]
};

export default chapter;
