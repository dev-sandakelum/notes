import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "11-final-practice-exam",
    "number": 11,
    "title": "Final practice exam",
    "subtitle": "20 mixed questions from all 9 topics, attempt everything before checking",
    "kind": "exam",
    "words": 78,
    "minutes": 1
  },
  "blocks": [
    {
      "type": "callout",
      "variant": "exam",
      "title": "Exam conditions",
      "html": "Give yourself <b>30 minutes</b>, no notes, no cheat sheet. Target: <b>16/20 (80%)</b> before you call yourself ready. Review every explanation: even for questions you got right."
    },
    {
      "type": "quiz",
      "title": "Final practice exam",
      "count": 20,
      "quizSlug": "11-final-practice-exam"
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "What next?",
      "html": "Scored 16+? You are exam-ready: revisit the <a href=\"/notes/ebiz/10-master-cheat-sheet\">Cheat Sheet</a> once more the night before. Scored below 12? Re-do the topic quizzes for topics 3, 8 and 9: infrastructure, security and emerging trends carry the most new vocabulary. Then retake this exam after 24 hours."
    }
  ]
};

export default chapter;
