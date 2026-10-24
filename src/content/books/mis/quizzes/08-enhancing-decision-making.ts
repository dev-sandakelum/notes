import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "08-enhancing-decision-making",
  "title": "Topic 8 Quiz: Enhancing Decision Making",
  "questions": [
    {
      "prompt": "1. A decision that is repetitive and routine, with a definite procedure for handling it, is:",
      "options": [
        "Unstructured",
        "Structured",
        "Semi-structured",
        "Non-routine"
      ],
      "answer": 1,
      "explanation": "Structured = repetitive/routine with a definite procedure. Unstructured requires judgment, evaluation, insight. Semi-structured = only part has a clear-cut answer."
    },
    {
      "prompt": "2. \"Should we enter a new market?\" is typically a decision made by:",
      "options": [
        "Senior managers: unstructured",
        "Senior managers: structured",
        "Operational managers: structured",
        "Middle managers: structured"
      ],
      "answer": 0,
      "explanation": "Senior managers make many unstructured decisions like entering new markets. Middle managers: more structured, possibly with unstructured components. Operational: more structured (e.g. credit criteria checks)."
    },
    {
      "prompt": "3. In the four-stage decision-making process, \"discovering, identifying and understanding problems\" is the ______ stage.",
      "options": [
        "Design",
        "Choice",
        "Intelligence",
        "Implementation"
      ],
      "answer": 2,
      "explanation": "Intelligence = discover/identify/understand problems; Design = identify and explore solutions; Choice = choose among alternatives; Implementation = make it work and monitor."
    },
    {
      "prompt": "4. The classical model of management includes which five functions?",
      "options": [
        "Planning, leading, staffing, controlling, budgeting",
        "Motivating, organizing, deciding, monitoring, hiring",
        "Planning, communicating, coordinating, negotiating, evaluating",
        "Planning, organizing, coordinating, deciding, controlling"
      ],
      "answer": 3,
      "explanation": "Classical model: planning, organizing, coordinating, deciding, controlling. Behavioral models show real managers are less systematic, more informal and reactive."
    },
    {
      "prompt": "5. A manager who spreads information to subordinates inside the organization is performing which Mintzberg role?",
      "options": [
        "Spokesperson",
        "Disseminator",
        "Monitor",
        "Liaison"
      ],
      "answer": 1,
      "explanation": "Disseminator transmits information internally. Spokesperson represents the organization externally; Monitor scans for information; Liaison is interpersonal."
    },
    {
      "prompt": "6. Handling an unexpected factory fire belongs to which Mintzberg role?",
      "options": [
        "Disturbance handler",
        "Entrepreneur",
        "Resource allocator",
        "Negotiator"
      ],
      "answer": 0,
      "explanation": "Disturbance handler responds to unexpected crises. Entrepreneur initiates improvement projects; Resource allocator allocates money/staff; Negotiator represents the firm in negotiations."
    },
    {
      "prompt": "7. Which is NOT one of the three reasons IT investments fail to improve decisions?",
      "options": [
        "Information quality",
        "Management filters",
        "Insufficient bandwidth",
        "Organizational inertia and politics"
      ],
      "answer": 2,
      "explanation": "The three reasons: information quality (high-quality decisions need high-quality information), management filters (selective attention, biases), and organizational inertia and politics resisting major change."
    },
    {
      "prompt": "8. OLAP, statistics, models and data mining belong to:",
      "options": [
        "Business intelligence infrastructure",
        "Business analytics toolset",
        "Delivery platforms",
        "Data marts"
      ],
      "answer": 1,
      "explanation": "BI = infrastructure (databases, data warehouses, data marts) for collecting/storing/analyzing. BA = the tools and techniques (OLAP, statistics, models, data mining)."
    },
    {
      "prompt": "9. Which sequence correctly lists elements 1, 5 and 6 of the BI environment?",
      "options": [
        "Analytics toolset → data → users",
        "Users → interface → infrastructure",
        "Infrastructure → methods → dashboards",
        "Data from the business environment → delivery platform (MIS, DSS, ESS) → user interface"
      ],
      "answer": 3,
      "explanation": "Six elements: 1 data from business environment, 2 BI infrastructure, 3 BA toolset, 4 managerial users and methods, 5 delivery platform (MIS, DSS, ESS), 6 user interface."
    },
    {
      "prompt": "10. Credit card companies using patterns in data to identify customers at risk of leaving is an example of:",
      "options": [
        "Predictive analytics",
        "Geographic information systems",
        "Production reporting",
        "Drill-down reporting"
      ],
      "answer": 0,
      "explanation": "Predictive analytics uses patterns in data to predict future behavior; the lecture's example is exactly credit card churn prediction."
    }
  ]
};

export default quiz;
