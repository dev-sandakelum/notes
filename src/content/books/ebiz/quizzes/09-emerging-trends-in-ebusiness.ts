import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "09-emerging-trends-in-ebusiness",
  "title": "Topic 9 Quiz: Emerging Trends in E-Business",
  "questions": [
    {
      "prompt": "1. According to the lecture, technology creates value only when it improves:",
      "options": [
        "Share price and market cap",
        "Customer experience, operational efficiency, trust, market reach, or decision quality",
        "The number of features shipped per quarter",
        "Server utilization"
      ],
      "answer": 1,
      "explanation": "The core idea of the trends lecture: value means <b>customer experience, operational efficiency, trust, market reach, or decision quality</b>: the five axes on which any trend should be argued."
    },
    {
      "prompt": "2. The five steps of the AI recommendation pipeline are:",
      "options": [
        "Collect signals → Build representation → Generate candidates → Rank → Recommend",
        "Research → Create → Crawl → Rank → Measure",
        "Collect → Segment → Advertise → Convert → Retain",
        "Gather → Clean → Model → Deploy → Archive"
      ],
      "answer": 0,
      "explanation": "Signals (clicks, searches, purchases, ratings, cart activity) → user/product representation → collaborative/content-based/hybrid candidates → relevance scoring → personalized display with feedback learning."
    },
    {
      "prompt": "3. A rule-based chatbot differs from an AI/generative assistant in that the chatbot:",
      "options": [
        "Handles flexible natural-language questions better",
        "Uses predefined flows and answers: reliable for narrow FAQs but limited when questions vary",
        "Requires grounding, guardrails and monitoring",
        "Cannot be deployed on e-commerce sites"
      ],
      "answer": 1,
      "explanation": "Traditional chatbots use <b>rule-based flows and predefined answers</b>. AI/generative assistants handle flexible questions using natural language and store knowledge, but require grounding, guardrails and monitoring."
    },
    {
      "prompt": "4. A blockchain is best described as:",
      "options": [
        "A centralized ledger operated by one database owner",
        "A distributed ledger in which validated transactions create a tamper-evident history across a network",
        "A compression algorithm for product images",
        "A type of content delivery network"
      ],
      "answer": 1,
      "explanation": "Blockchain = <b>distributed ledger</b>, shared record across participating nodes, cryptographic linking reveals alteration, useful where organizations need a common record <b>without one database owner</b>."
    },
    {
      "prompt": "5. In the smart-contract flow, the component that confirms external events such as delivery is the:",
      "options": [
        "Oracle",
        "Token",
        "Wallet",
        "Consensus node"
      ],
      "answer": 0,
      "explanation": "Flow: buyer places order → contract locks rule → <b>oracle/event confirms delivery</b> → payment released. Oracle unreliability is a named risk; others include code defects, legal interpretation and privacy/scalability concerns."
    },
    {
      "prompt": "6. Virtual try-on for eyewear and \"view-in-room\" for furniture are applications of:",
      "options": [
        "Blockchain",
        "Augmented reality (AR)",
        "Cross-border e-commerce",
        "Smart contracts"
      ],
      "answer": 1,
      "explanation": "AR overlays digital content or 3D product models onto the shopper's real-world view. Value: better product understanding, buying confidence, reduced uncertainty: and <b>possibly fewer returns</b>."
    },
    {
      "prompt": "7. Which challenge area of cross-border e-commerce covers customs, duties/taxes and consumer protection?",
      "options": [
        "Localization",
        "Payments",
        "Compliance",
        "Logistics"
      ],
      "answer": 2,
      "explanation": "<b>Compliance</b> covers customs, duties/taxes, product rules, consumer protection, privacy and IP requirements. Localization covers language/currency/support; payments cover exchange rates and fraud; logistics covers shipping and returns."
    },
    {
      "prompt": "8. Live commerce creates purchase urgency primarily through:",
      "options": [
        "Slow page loads",
        "Limited offers, launches or timed promotions during the stream",
        "Hiding the price until checkout",
        "Requiring registration before watching"
      ],
      "answer": 1,
      "explanation": "Live commerce combines real-time video, demonstration, interaction and purchasing (without leaving the experience), with urgency from <b>limited offers, launches or timed promotions</b>. Success needs credible hosts, reliable streaming, inventory synchronization and transparent promotion."
    }
  ]
};

export default quiz;
