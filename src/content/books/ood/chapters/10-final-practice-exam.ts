import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "10-final-practice-exam",
    "number": 10,
    "title": "Final Practice Exam",
    "subtitle": "20 mixed questions from all 8 topics — attempt everything before checking",
    "kind": "exam",
    "words": 76,
    "minutes": 1
  },
  "blocks": [
    {
      "type": "callout",
      "variant": "exam",
      "title": "Exam conditions",
      "html": "Give yourself <b>30 minutes</b>, no notes, no cheat sheet. Target: <b>16/20 (80%)</b> before you call yourself ready. Review every explanation — even for questions you got right."
    },
    {
      "type": "quiz",
      "title": "Final Practice Exam",
      "count": 20,
      "quizSlug": "10-final-practice-exam"
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "What next?",
      "html": "Scored 16+? You are exam-ready — revisit the <a href=\"/notes/ood/09-master-cheat-sheet\">Cheat Sheet</a> once more the night before. Scored below 12? Re-do the topic quizzes for topics 4, 5, 7 and 8 — use case modeling and the diagram topics carry the most marks. Then retake this exam after 24 hours."
    }
  ]
};

export default chapter;
