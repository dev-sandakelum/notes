import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "02-global-e-business-types-of-information-systems",
  "title": "Topic 2 Quiz — Global E-Business",
  "questions": [
    {
      "prompt": "1. Which of the following is a <b>cross-functional</b> business process?",
      "options": [
        "Hiring employees",
        "Fulfilling a customer order",
        "Paying creditors",
        "Evaluating employees' job performance"
      ],
      "answer": 1,
      "explanation": "Fulfilling a customer order spans sales, warehouse, production, shipping and accounting — cross-functional. The others are tied to a single functional area (HR, finance)."
    },
    {
      "prompt": "2. Which statement about Transaction Processing Systems is <b>FALSE</b>?",
      "options": [
        "They perform and record daily routine transactions",
        "They serve the operational level of the organization",
        "They support non-routine decision making with powerful analytics",
        "They are a major source of data for other systems"
      ],
      "answer": 2,
      "explanation": "TPS handle predefined, structured goals and decisions — powerful analytics and non-routine support belong to DSS/ESS. The rest are true of TPS."
    },
    {
      "prompt": "3. MIS serve ______ management and typically have ______.",
      "options": [
        "Middle; little analytic capability",
        "Senior; little analytic capability",
        "Middle; strong analytic capability",
        "Operational; strong analytic capability"
      ],
      "answer": 0,
      "explanation": "MIS serve middle management, provide reports on current performance using TPS data, answer routine questions with predefined procedures, and typically have little analytic capability."
    },
    {
      "prompt": "4. An ESS (Executive Support System) typically incorporates:",
      "options": [
        "Only internal transaction data",
        "Only external market data",
        "Manual payroll records",
        "External events plus summarized information from internal MIS and DSS"
      ],
      "answer": 3,
      "explanation": "ESS address non-routine decisions (judgment, evaluation, insight) and combine data about external events (e.g. new tax laws, competitors) with summarized internal MIS/DSS information — e.g. a digital dashboard of the firm's financial performance."
    },
    {
      "prompt": "5. Which HRIS module would an employee use directly to update personal details or request leave?",
      "options": [
        "Payroll module",
        "Employee self-service module",
        "Benefits administration module",
        "Training module"
      ],
      "answer": 1,
      "explanation": "The employee self-service module lets employees perform HR tasks themselves. The six HRIS modules: payroll, time &amp; attendance, benefits administration, HR management, training, employee self-service."
    },
    {
      "prompt": "6. A DSS is most likely to be used for:",
      "options": [
        "Recording a sales order at a checkout",
        "Printing a standard weekly performance report",
        "Analysing the impact on production if December sales doubled",
        "Recording employee attendance"
      ],
      "answer": 2,
      "explanation": "DSS support non-routine decision making, often using external information (stock prices, competitor prices) as well as TPS/MIS data. The doubled-sales question is the lecture's own example."
    },
    {
      "prompt": "7. Which of the four major enterprise applications collects data from different firm functions into a single central data repository?",
      "options": [
        "Enterprise systems (ERP)",
        "Supply chain management systems",
        "Customer relationship management systems",
        "Knowledge management systems"
      ],
      "answer": 0,
      "explanation": "ERP collects data from many divisions into one central repository, resolving the problem of fragmented, redundant data sets and systems."
    },
    {
      "prompt": "8. An extranet differs from an intranet because an extranet:",
      "options": [
        "Is faster than an intranet",
        "Can only be accessed by employees",
        "Is used only for training",
        "Is accessible externally to vendors and suppliers"
      ],
      "answer": 3,
      "explanation": "Intranet = internal site, employees only. Extranet = company site accessible externally only to vendors and suppliers — often used to coordinate the supply chain."
    },
    {
      "prompt": "9. Which statement is correct?",
      "options": [
        "E-business is a subset of e-commerce",
        "E-commerce is a subset of e-business",
        "E-government is a subset of e-commerce",
        "They are all identical"
      ],
      "answer": 1,
      "explanation": "E-business uses digital technology and the Internet to drive major business processes; e-commerce (buying/selling over the Internet) is a subset. E-government applies Internet technology to deliver information and services to citizens, employees and businesses."
    },
    {
      "prompt": "10. IT enhances business processes by increasing efficiency of existing processes and by:",
      "options": [
        "Reducing the number of employees",
        "Outsourcing them to suppliers",
        "Enabling entirely new processes that can transform the business",
        "Making all processes sequential"
      ],
      "answer": 2,
      "explanation": "The two ways: (1) increase efficiency of existing processes by automating manual steps; (2) enable new processes — change information flow, replace sequential with parallel steps, eliminate decision delays, support new business models (e.g. Kindle e-book, buying a computer online at Best Buy)."
    }
  ]
};

export default quiz;
