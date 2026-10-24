import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "05-operational-excellence-i-enterprise-systems-and-supply-chain-management",
  "title": "Topic 5 Quiz: Enterprise Systems & SCM",
  "questions": [
    {
      "prompt": "1. Which of the following is <b>NOT</b> a characteristic of an enterprise system?",
      "options": [
        "Real-time operations",
        "Integration of all business activities",
        "Departmental data silos",
        "Flow of information across processes"
      ],
      "answer": 2,
      "explanation": "ERP characteristics: real-time operations, integration of all business activities, flow of information. ERP eliminates fragmented, redundant data sets; the opposite of silos."
    },
    {
      "prompt": "2. To implement enterprise software, firms customize its behaviour primarily using:",
      "options": [
        "Rewriting the source code",
        "The software's configuration tables",
        "Separate spreadsheets",
        "Manual paper forms"
      ],
      "answer": 1,
      "explanation": "Firms select functions, map business processes to the software's processes, and use configuration tables for customizing, no need to rewrite code. The software embeds thousands of predefined best-practice processes."
    },
    {
      "prompt": "3. The upstream supply chain includes:",
      "options": [
        "Firm's suppliers, their suppliers, and processes for managing those relationships",
        "Organizations that distribute products to customers",
        "The firm's internal accounting systems",
        "Retail store operations"
      ],
      "answer": 0,
      "explanation": "Upstream = suppliers side (raw materials flowing in). Downstream = distributing and delivering products to customers."
    },
    {
      "prompt": "4. The bullwhip effect occurs when:",
      "options": [
        "Suppliers deliver early",
        "Demand suddenly falls",
        "Transportation costs rise",
        "Information about demand gets distorted as it passes from one entity to the next"
      ],
      "answer": 3,
      "explanation": "Exactly the definition: demand information is distorted entity-by-entity up the chain, amplifying swings in production and inventory."
    },
    {
      "prompt": "5. Safety stock in a supply chain:",
      "options": [
        "Is the same as just-in-time inventory",
        "Acts as a buffer for the lack of flexibility in the supply chain",
        "Eliminates the bullwhip effect",
        "Refers to finished goods only"
      ],
      "answer": 1,
      "explanation": "Safety stock buffers inflexibility and uncertainty, at the cost of holding inventory. JIT is the opposite philosophy: components arrive exactly when needed; finished goods ship right off the line."
    },
    {
      "prompt": "6. Supply chain software that manages the flow of products through distribution centers and warehouses is a(n):",
      "options": [
        "Supply chain planning system",
        "Enterprise system",
        "Supply chain execution system",
        "Demand planning tool"
      ],
      "answer": 2,
      "explanation": "Execution systems manage product flow through distribution centers and warehouses so products reach the right locations efficiently. Planning systems model and optimize sourcing, manufacturing plans and inventory levels."
    },
    {
      "prompt": "7. In a push-based (build-to-stock) model, production schedules are based on:",
      "options": [
        "Best guesses of demand",
        "Actual customer orders",
        "Supplier capacity",
        "Government regulations"
      ],
      "answer": 0,
      "explanation": "Push = schedules based on best guesses (forecasts); pull (demand-driven) = customer orders trigger supply chain events."
    },
    {
      "prompt": "8. Which is <b>NOT</b> listed among global supply chain issues?",
      "options": [
        "Greater geographic distances and time differences",
        "Foreign government regulations",
        "Excessive bandwidth costs",
        "More complex pricing issues and cultural differences"
      ],
      "answer": 2,
      "explanation": "The lecture's global issues: geographic distances/time zones, complex pricing (local taxes, transportation), foreign regulations, and cultural differences. Bandwidth is not on the list."
    },
    {
      "prompt": "9. The \"digital logistics nervous system\" refers to:",
      "options": [
        "Robotics in warehouses",
        "The emerging Internet-driven supply chain with multidirectional communication among partners",
        "Machine learning demand forecasts",
        "ERP financial modules"
      ],
      "answer": 1,
      "explanation": "The Internet-driven supply chain provides multidirectional communication among firms, networks of firms, and e-marketplaces, so entire networks can immediately adjust inventories, orders and capacities."
    }
  ]
};

export default quiz;
