import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "01-introduction-to-e-business",
  "title": "Topic 1 Quiz: Introduction to E-Business & E-Commerce",
  "questions": [
    {
      "prompt": "1. \"Doing business electronically by completing business processes over open networks, thereby substituting information for physical business processes\" defines:",
      "options": [
        "E-commerce",
        "E-business",
        "M-commerce",
        "E-procurement"
      ],
      "answer": 1,
      "explanation": "This is the lecture definition of <b>e-business</b>. E-commerce is the narrower buying and selling of goods and services over an electronic network, primarily the internet."
    },
    {
      "prompt": "2. Which statement about the relationship between e-commerce and e-business is correct?",
      "options": [
        "E-business is a subset of e-commerce",
        "E-commerce is a subset of e-business",
        "The two terms are identical in scope",
        "E-commerce covers intranets while e-business does not"
      ],
      "answer": 1,
      "explanation": "E-commerce is the <b>subset</b>; e-business is the <b>superset</b> (e-commerce + CRM + supply chain management + knowledge management + business intelligence + collaborative technologies). E-business also uses intranet and extranet, not just the internet."
    },
    {
      "prompt": "3. A consumer sells a used bicycle directly to another consumer through eBay. This transaction belongs to which category?",
      "options": [
        "B2C",
        "B2B",
        "C2C",
        "C2B"
      ],
      "answer": 2,
      "explanation": "Consumer-to-Consumer (C2C) covers electronic transactions of goods or services <b>between consumers</b>: eBay.com is the lecture's example. B2C is business selling to consumers."
    },
    {
      "prompt": "4. Logo creation, where many individuals offer services for companies to purchase, is the lecture's example of:",
      "options": [
        "C2B (Consumer-to-Business)",
        "B2A (Business-to-Administration)",
        "B2B (Business-to-Business)",
        "C2A (Consumer-to-Administration)"
      ],
      "answer": 0,
      "explanation": "In C2B, a large number of individuals make their services or products available for purchase by <b>companies</b>. The flow points backwards from the usual B2C direction."
    },
    {
      "prompt": "5. Computer-to-computer Electronic Data Interchange (EDI) for exchanging business invoices and orders securely was introduced in:",
      "options": [
        "1948",
        "1975",
        "1991",
        "1994"
      ],
      "answer": 1,
      "explanation": "EDI was introduced in <b>1975</b>. The 1948 date belongs to basic electronic messaging via telex during the Berlin airlift; 1991 is the World Wide Web launch; 1994 is the first secure online credit card transaction."
    },
    {
      "prompt": "6. IBM officially popularized the term \"e-business\" in:",
      "options": [
        "1991",
        "1994",
        "1997",
        "2000"
      ],
      "answer": 2,
      "explanation": "IBM popularized \"e-business\" in <b>1997</b>, during the Internet Boom era, after the web (1991) and the first secure online credit card transaction (1994), and before the dot-com recovery era."
    },
    {
      "prompt": "7. In a SWOT analysis, opportunities and threats are identified by reviewing:",
      "options": [
        "The business unit's internal strengths",
        "The operating environment",
        "The company's balance sheet only",
        "Employee performance reviews"
      ],
      "answer": 1,
      "explanation": "The analyst first looks <b>into the business unit</b> to identify strengths and weaknesses (internal), then reviews the <b>operating environment</b> to identify opportunities and threats (external)."
    },
    {
      "prompt": "8. Which of the following is listed in the lecture as a DISADVANTAGE of e-commerce?",
      "options": [
        "24/7 buying and selling",
        "No theoretical geographic limitations",
        "No one can buy during a site crash",
        "Low operational costs"
      ],
      "answer": 2,
      "explanation": "\"No one can buy during a site crash\" is a stated disadvantage (availability risk). The other three (24/7 operation, unlimited geographic reach and low operational costs) are advantages."
    }
  ]
};

export default quiz;
