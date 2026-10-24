import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "01-information-systems-in-global-business-today",
  "title": "Topic 1 Quiz: IS in Global Business Today",
  "questions": [
    {
      "prompt": "1. An information system is best defined as a set of interrelated components that:",
      "options": [
        "Transmit data over networks at high speed",
        "Collect, process, store and distribute information to support decision making and control",
        "Store structured data in a central repository",
        "Automate the accounting function of a business"
      ],
      "answer": 1,
      "explanation": "The lecture definition: interrelated components that collect, process, store and distribute information to support decision making and control in an organization, and may also help analyze problems, visualize complex subjects and create new products."
    },
    {
      "prompt": "2. Converting raw input into a meaningful form is which activity of an information system?",
      "options": [
        "Input",
        "Output",
        "Processing",
        "Feedback"
      ],
      "answer": 2,
      "explanation": "Input captures raw data; <b>processing converts raw input into a meaningful form</b>; output transfers the processed information to users; feedback is output returned to evaluate or correct the input stage."
    },
    {
      "prompt": "3. Output that is returned to appropriate members of the organization to help them evaluate or correct the input stage is called:",
      "options": [
        "Response",
        "Control",
        "Environment",
        "Feedback"
      ],
      "answer": 3,
      "explanation": "This is the exact definition of feedback. Example from the lecture: Disney World's crowd-control system uses feedback to refine how crowds are managed."
    },
    {
      "prompt": "4. Which is <b>NOT</b> one of the three dimensions of information systems?",
      "options": [
        "Economic",
        "Organization",
        "Management",
        "Technology"
      ],
      "answer": 0,
      "explanation": "The three dimensions are organization, management and technology. (Economic impacts appear in Lecture 03, but not as a dimension of IS.)"
    },
    {
      "prompt": "5. Which company is paired with the <b>wrong</b> strategic business objective?",
      "options": [
        "Wal-Mart: operational excellence",
        "Toyota: customer and supplier intimacy",
        "Apple: new products, services and business models",
        "HSBC: survival"
      ],
      "answer": 1,
      "explanation": "Toyota is the example for <b>competitive advantage</b>. Customer and supplier intimacy belongs to the <b>Mandarin Oriental</b> hotel group. Wal-Mart = operational excellence, Apple = new products/services/models, HSBC = survival."
    },
    {
      "prompt": "6. Which discipline contributes to the <b>technical</b> approach by focusing on mathematical techniques for optimizing transportation, inventory control and transaction costs?",
      "options": [
        "Computer science",
        "Management science",
        "Operations research",
        "Behavioral science"
      ],
      "answer": 2,
      "explanation": "Operations research focuses on optimizing selected parameters of organizations (transportation, inventory control, transaction costs). Computer science = computability/computation/storage; management science = decision-making models."
    },
    {
      "prompt": "7. A digital firm is one in which:",
      "options": [
        "Nearly all significant business relationships with customers, suppliers and employees are digitally enabled and mediated",
        "All products are sold through e-commerce websites",
        "Management decisions are fully automated by AI",
        "The firm operates only in digital markets"
      ],
      "answer": 0,
      "explanation": "A digital firm's significant relationships are digitally enabled/mediated, and any information needed for key business decisions is available at any time, anywhere in the firm."
    },
    {
      "prompt": "8. Data management technology is best described as:",
      "options": [
        "Physical equipment for input, processing and output",
        "Detailed preprogrammed instructions controlling hardware",
        "Software governing the organization of data on physical storage media",
        "Devices and software linking hardware and transferring data between locations"
      ],
      "answer": 2,
      "explanation": "Option 1 = computer hardware; 2 = computer software; 4 = networking &amp; telecommunications technology. Data management technology = software governing how data is organized on physical storage media."
    }
  ]
};

export default quiz;
