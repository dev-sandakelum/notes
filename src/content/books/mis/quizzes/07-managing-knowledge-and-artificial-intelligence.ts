import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "07-managing-knowledge-and-artificial-intelligence",
  "title": "Topic 7 Quiz — Knowledge Management & AI",
  "questions": [
    {
      "prompt": "1. The correct order of the knowledge hierarchy is:",
      "options": [
        "Information → data → wisdom → knowledge",
        "Knowledge → information → data → wisdom",
        "Data → information → knowledge → wisdom",
        "Data → knowledge → information → wisdom"
      ],
      "answer": 2,
      "explanation": "DIKW: data become information when contextualized; information becomes knowledge with experience and judgment; knowledge matures into wisdom."
    },
    {
      "prompt": "2. Knowledge that resides in employees' heads — expertise and experience that is hard to write down — is called:",
      "options": [
        "Explicit knowledge",
        "Tacit knowledge",
        "Structured knowledge",
        "Semi-structured knowledge"
      ],
      "answer": 1,
      "explanation": "Tacit = human expertise/experience. Explicit = codified (documents, rules). AI-generated = machine-assisted insights — a third form highlighted in the lecture."
    },
    {
      "prompt": "3. The four stages of the knowledge management value chain are:",
      "options": [
        "Acquisition, storage, dissemination, application",
        "Input, processing, output, feedback",
        "Creation, destruction, storage, reuse",
        "Planning, execution, monitoring, closing"
      ],
      "answer": 0,
      "explanation": "KM value chain: knowledge acquisition → storage → dissemination → application. (Input-processing-output-feedback is the information system activities model from Lecture 01!)"
    },
    {
      "prompt": "4. Communities of Practice (COPs) are:",
      "options": [
        "Formal departments led by the CKO",
        "Regulatory bodies for KM standards",
        "University research labs",
        "Informal social networks of professionals with similar work-related interests, inside and outside the firm"
      ],
      "answer": 3,
      "explanation": "COPs share knowledge via education, newsletters and shared experiences; they facilitate reuse of knowledge and reduce new employees' learning curves."
    },
    {
      "prompt": "5. Approximately what fraction of an organization's business content is semi-structured or unstructured?",
      "options": [
        "20%",
        "50%",
        "80%",
        "99%"
      ],
      "answer": 2,
      "explanation": "80% of business content is semi-structured (e-mails, videos) or unstructured/tacit — the core challenge for enterprise-wide KM systems."
    },
    {
      "prompt": "6. In an expert system, the component that searches the knowledge base and \"fires\" rules triggered by user-supplied facts is the:",
      "options": [
        "Knowledge base",
        "Inference engine",
        "User interface",
        "Taxonomy"
      ],
      "answer": 1,
      "explanation": "Knowledge base = hundreds/thousands of rules; inference engine = the search strategy that fires triggered rules (by forward or backward chaining)."
    },
    {
      "prompt": "7. An inference engine that starts from a hypothesis and asks the user questions until the hypothesis is confirmed or disproved uses:",
      "options": [
        "Backward chaining",
        "Forward chaining",
        "Genetic search",
        "Deep learning"
      ],
      "answer": 0,
      "explanation": "Backward chaining = hypothesis-first. Forward chaining starts from the user's information and works toward a conclusion."
    },
    {
      "prompt": "8. Which technique represents imprecision using linguistic categories such as \"cold\" and \"cool\" that stand for ranges of values?",
      "options": [
        "Neural networks",
        "Case-based reasoning",
        "Retrieval-Augmented Generation",
        "Fuzzy logic"
      ],
      "answer": 3,
      "explanation": "Fuzzy logic — used in camera autofocus and detecting medical fraud — translates linguistic terms into ranges via membership functions."
    },
    {
      "prompt": "9. \"Deep learning\" neural networks are characterized by:",
      "options": [
        "Requiring no training data",
        "Being cheap and quick to develop",
        "Many layers of transformation of input data, used mainly for pattern detection on unlabeled data",
        "Storing cases and their solutions in a database"
      ],
      "answer": 2,
      "explanation": "Deep learning = many layers of transformation; used almost exclusively for pattern detection on unlabeled data where the system must discover patterns itself. Option 4 describes CBR."
    },
    {
      "prompt": "10. Autonomous software that deletes junk e-mail or finds the cheapest airfare without direct human intervention is a(n):",
      "options": [
        "Expert system",
        "Intelligent agent",
        "Genetic algorithm",
        "Digital asset management system"
      ],
      "answer": 1,
      "explanation": "Intelligent agents carry out specific, repetitive, predictable tasks using a limited built-in or learned knowledge base — some capable of self-adjustment (e.g. Siri)."
    }
  ]
};

export default quiz;
