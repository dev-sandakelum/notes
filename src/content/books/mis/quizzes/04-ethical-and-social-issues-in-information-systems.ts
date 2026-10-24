import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "04-ethical-and-social-issues-in-information-systems",
  "title": "Topic 4 Quiz — Ethics & Social Issues",
  "questions": [
    {
      "prompt": "1. Ethics is best defined as:",
      "options": [
        "The laws passed by governments to regulate computing",
        "The principles of right and wrong that individuals, acting as free moral agents, use to make choices that guide their behavior",
        "Company rules enforced by management",
        "Technical standards for system quality"
      ],
      "answer": 1,
      "explanation": "Ethics = principles of right and wrong used by free moral agents to guide behavior. Social issues are matters of concern to governments and communities — related but distinct."
    },
    {
      "prompt": "2. Legally placing responsibility (so injured parties can recover damages) with a person or group is:",
      "options": [
        "Responsibility",
        "Accountability",
        "Liability",
        "Due process"
      ],
      "answer": 2,
      "explanation": "Liability = legal responsibility. Responsibility = accepting costs/duties for decisions; accountability = determining who takes responsibility; due process = laws applied fairly and correctly."
    },
    {
      "prompt": "3. Which is <b>NOT</b> one of the five moral dimensions of the information age?",
      "options": [
        "Environmental sustainability",
        "Information rights and obligations",
        "System quality",
        "Quality of life"
      ],
      "answer": 0,
      "explanation": "The five: information rights, property rights, accountability &amp; control, system quality, quality of life. Sustainability appears among technology trends (green IT &amp; e-waste), not as a moral dimension."
    },
    {
      "prompt": "4. A patent grants the owner an exclusive monopoly on the ideas behind an invention for:",
      "options": [
        "Life of the author + 70 years",
        "10 years",
        "50 years",
        "20 years"
      ],
      "answer": 3,
      "explanation": "Patents = 20-year monopoly on the ideas behind an invention. Copyrights protect the expression of intellectual property from being copied — a statutory grant to creators."
    },
    {
      "prompt": "5. Cookies raise ethical concerns primarily under which dimension?",
      "options": [
        "System quality",
        "Information rights and obligations (privacy)",
        "Property rights",
        "Quality of life"
      ],
      "answer": 1,
      "explanation": "Cookies (with web site policies) track browsing — a privacy issue, i.e. information rights and obligations: what information rights do individuals possess and what can they protect?"
    },
    {
      "prompt": "6. An AI recruitment tool systematically filters out female applicants because it learned from historically biased hiring data. This is best described as:",
      "options": [
        "A system quality failure only",
        "A copyright violation",
        "Algorithmic bias",
        "A phishing attack"
      ],
      "answer": 2,
      "explanation": "Algorithmic bias: AI/ML trained on biased historical data produces systematically unfair outputs. It sits at the intersection of AI ethics, data governance, and accountability &amp; control."
    },
    {
      "prompt": "7. The \"ripple effect\" of new information technology means that:",
      "options": [
        "New ethical, social and political issues arise that must be dealt with at individual, social and political levels",
        "Technology spreads economically across industries",
        "Data moves faster through networks",
        "Costs of computing fall every year"
      ],
      "answer": 0,
      "explanation": "The introduction of new IT has a ripple effect raising new ethical, social, and political issues that must be dealt with on the individual, social, and political levels."
    },
    {
      "prompt": "8. Which technology trend raises \"data jurisdiction issues\" in cloud and edge computing?",
      "options": [
        "Massive IoT data collection",
        "Encryption risks from quantum computing",
        "Profiling and surveillance capitalism",
        "Data being stored across borders and legal territories"
      ],
      "answer": 3,
      "explanation": "Cloud/edge computing moves data across national borders — whose laws apply? That is the data jurisdiction issue. IoT = massive collection; analytics = profiling/surveillance capitalism; quantum = encryption risks."
    }
  ]
};

export default quiz;
