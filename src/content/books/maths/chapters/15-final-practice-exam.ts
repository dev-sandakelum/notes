import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "15-final-practice-exam",
    "number": 15,
    "title": "Final Practice Exam",
    "subtitle": "15 mixed questions from all 13 topics — attempt everything before checking",
    "kind": "exam",
    "words": 64,
    "minutes": 1
  },
  "blocks": [
    {
      "type": "callout",
      "variant": "exam",
      "title": "Exam conditions",
      "html": "Give yourself <b>30 minutes</b>, no notes, no formula sheet. Target: <b>12/15 (80%)</b> before you call yourself ready. Review every explanation — even for questions you got right."
    },
    {
      "type": "quiz",
      "title": "Final Practice Exam",
      "count": 15,
      "quizSlug": "15-final-practice-exam"
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "After the exam",
      "html": "Scored 12+? Move to the formula sheet and drill weak cards. Below 12? Revisit the topic quizzes for every question you missed — each one links straight back to a worked example in its topic section."
    }
  ]
};

export default chapter;
