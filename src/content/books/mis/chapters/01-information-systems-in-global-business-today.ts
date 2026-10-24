import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "01-information-systems-in-global-business-today",
    "number": 1,
    "title": "Information systems in global business today",
    "subtitle": "Lecture 01 · Why IS matters, definitions, dimensions & strategic objectives",
    "kind": "topic",
    "words": 1489,
    "minutes": 7
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "what-is-an-information-system",
      "text": "What is an information system?"
    },
    {
      "type": "paragraph",
      "html": "An <b>information system</b> is a set of <b>interrelated components</b> that <b>collect, process, store and distribute information</b> to support <b>decision making and control</b> in an organization. In addition to supporting decision making, coordination and control, information systems may also help managers and workers <b>analyze problems, visualize complex subjects, and create new products</b>. This definition is highly examinable: remember the four verbs (collect, process, store, distribute) and the purpose (decision making &amp; control)."
    },
    {
      "type": "paragraph",
      "html": "Information System = interrelated components → <b>collect · process · store · distribute</b> information → support decision making &amp; control"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "data-vs-information",
      "text": "Data vs information"
    },
    {
      "type": "paragraph",
      "html": "<b>Data</b> are raw facts representing events in the organization before they have been organized into a useful form, while <b>information</b> is data that has been shaped into a meaningful and useful context. The classic example from the lectures: raw data from a supermarket checkout counter can be processed and organized to produce meaningful information, such as <mark>the total unit sales of dish detergent or the total sales revenue from dish detergent for a specific store</mark>. In other words, information is data made useful through processing, organization and context."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "functions-of-an-information-system",
      "text": "Functions of an information system"
    },
    {
      "type": "paragraph",
      "html": "An information system contains information about an organization and its surrounding environment. Three activities in an information system produce the information that organizations need to make decisions, control operations, analyze problems, and create new products or services. These activities are summarized in the flow below. <b>feedback</b> is the output that is returned to appropriate members of the organization to help them evaluate or correct the input stage."
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"flow\">\n    <div class=\"fstep\"><b>Input</b><small>Captures / collects raw data from within the organization or its external environment</small></div>\n    <div class=\"farrow\">→</div>\n    <div class=\"fstep\"><b>Processing</b><small>Converts raw input into a meaningful form</small></div>\n    <div class=\"farrow\">→</div>\n    <div class=\"fstep\"><b>Output</b><small>Transfers processed information to people or activities that use it</small></div>\n    <div class=\"farrow\">↻</div>\n    <div class=\"fstep\"><b>Feedback</b><small>Output returned to members to evaluate or correct the input stage</small></div>\n  </div>",
      "alt": "Diagram from the original notes"
    },
    {
      "type": "paragraph",
      "html": "Environmental actors such as <b>customers, suppliers, competitors, stockholders, and regulatory agencies</b> constantly interact with the organization and its information systems. A good illustrative example is <b>Disney World's system for controlling crowds</b>: sensors capture crowd data (input), the system processes it, and outputs guide staff to redirect crowds, while feedback refines future decisions."
    },
    {
      "type": "example",
      "title": "Worked example: spot the IS activities",
      "bodyHtml": "<p>A supermarket payroll system captures each employee's hourly attendance (1), calculates gross pay, taxes and net pay (2), and prints payslips for employees (3). Employees complain that overtime hours were under-recorded, so HR corrects the timesheet data (4). Identify activities 1–4.</p>",
      "solutionHtml": "<ul>\n        <li><b>1 = Input</b>: capturing raw attendance/time data.</li>\n        <li><b>2 = Processing</b>: converting raw data into pay calculations.</li>\n        <li><b>3 = Output</b>: distributing processed information (payslips).</li>\n        <li><b>4 = Feedback</b>: output (wrong pay) returned to correct the input stage.</li>\n      </ul>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "the-three-dimensions-of-information-systems",
      "text": "The three dimensions of information systems"
    },
    {
      "type": "paragraph",
      "html": "There is a fundamental <b>interdependence between organizations and information systems</b>: changes in strategy, rules and business processes increasingly require changes in hardware, software, databases and telecommunications, and often, what an organization would like to do depends on what its systems will permit it to do. To understand an information system you must study all <b>three dimensions</b>: <b>organization, management and technology</b>. Exam questions frequently ask which dimension a given problem belongs to."
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">1 · Organization</div><div class=\"f-b\">Key elements: <b>people, structure, business processes, politics, and culture</b>. IS are integral to organizations: for some firms (e.g. credit reporting firms) there would be <b>no business without an IS</b>.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">2 · Management</div><div class=\"f-b\">Managers perceive challenges, set strategy, allocate resources and coordinate work. Authority is a <b>hierarchy / pyramid</b>: senior → middle → operational management.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">3 · Technology</div><div class=\"f-b\"><b>Hardware</b> (physical equipment), <b>software</b> (preprogrammed instructions), <b>data management technology</b> (organizing data on storage media), <b>networking &amp; telecom</b> (linking hardware, moving data).</div></div>\n  </div>",
      "alt": "Formula reference cards"
    },
    {
      "type": "table",
      "head": [
        "Management level",
        "Who",
        "Decisions"
      ],
      "rows": [
        [
          "<b>Senior management</b>",
          "Managerial, professional &amp; technical employees (upper levels)",
          "Long-range <b>strategic</b> decisions about products &amp; services; ensures financial performance of the firm"
        ],
        [
          "<b>Middle management</b>",
          "Middle levels of hierarchy",
          "Carries out the <b>programs and plans</b> of senior management"
        ],
        [
          "<b>Operational management</b>",
          "Lower levels (operational personnel)",
          "Monitors the <b>daily activities</b> of the business"
        ]
      ]
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Exam tip: the pyramid",
      "html": "Be ready to draw or label the management pyramid (senior → middle → operational) and match each level to its decision type. This pyramid returns in Lecture 02 (TPS serves operational; MIS/DSS serve middle; ESS serves senior) and Lecture 08 (unstructured → structured decisions)."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "what-s-new-in-mis",
      "text": "What's new in MIS?"
    },
    {
      "type": "paragraph",
      "html": "Five broad changes are making information systems more relevant than ever: <b>IT innovations</b> (e.g. cloud computing such as Google Drive and OneDrive), <b>new business models</b> (e.g. Netflix), the <b>expansion of e-commerce</b>, <b>management changes</b>, and <b>changes in firms and organizations</b> themselves. Together these shifts explain why MIS is no longer a back-office concern but a core business discipline. Firms that ignore them risk being disrupted by competitors that use technology more aggressively."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "how-is-are-transforming-business-and-globalization",
      "text": "How IS are transforming business & globalization"
    },
    {
      "type": "paragraph",
      "html": "Information systems are transforming business through <b>increased technology investments</b>, providing <b>economic value</b> to business, <b>increased responsiveness to customer demands</b>, <b>shifts in media, advertising and commerce</b>, and <b>new laws</b> governing information systems. The mobile phone industry is the classic illustration, an industry that barely existed decades ago now connects billions of customers worldwide and reshapes banking, retail and entertainment."
    },
    {
      "type": "paragraph",
      "html": "Globalization and IS go hand in hand. Consider these facts from the lecture: <mark>about 80% of the toys sold in the U.S. are manufactured in China, while about 90% of the PCs manufactured in China use American-made Intel or AMD chips</mark>. Not just goods move across borders. <b>so do jobs</b>. The <b>24×7 culture</b>, the Internet's reduction of the <b>cost of operating on a global scale</b>, and the emergence of technology-based companies such as <b>Google, eBay and Amazon.com</b> all show how deeply information systems enable globalization."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "the-emergence-of-the-digital-firm",
      "text": "The emergence of the digital firm"
    },
    {
      "type": "paragraph",
      "html": "A <b>digital firm</b> is one in which nearly all of the organization's significant <b>business relationships with customers, suppliers, and employees are digitally enabled and mediated</b>. In a true digital firm, any piece of information required to support key business decisions is available <b>at any time and anywhere in the firm</b>. While very few firms are fully digital, most are moving toward this ideal, making digital integration a strategic goal rather than a technical afterthought."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "why-do-firms-invest-heavily-in-information-systems",
      "text": "Why do firms invest heavily in information systems?"
    },
    {
      "type": "paragraph",
      "html": "Business firms invest heavily in information systems to achieve <b>six strategic business objectives</b>. This list is one of the most frequently examined items in this course, learn the objective <i>and</i> its company example together."
    },
    {
      "type": "table",
      "head": [
        "#",
        "Strategic objective",
        "Company example",
        "What IS delivers"
      ],
      "rows": [
        [
          "1",
          "<b>Operational excellence</b>",
          "<b>Wal-Mart</b>",
          "Efficiency, higher profitability. Retail Link system links sales to suppliers"
        ],
        [
          "2",
          "<b>New products, services &amp; business models</b>",
          "<b>Apple Inc.</b>",
          "iPod/iTunes: technology + service created an entirely new business model"
        ],
        [
          "3",
          "<b>Customer &amp; supplier intimacy</b>",
          "<b>Mandarin Oriental</b> hotel group",
          "Knowing customers' preferences to serve them superbly; intimate supplier ties lower costs"
        ],
        [
          "4",
          "<b>Improved decision making</b>",
          "None",
          "Real-time data replaces forecasts &amp; guesswork; over/under-production and mispricing reduced"
        ],
        [
          "5",
          "<b>Competitive advantage</b>",
          "<b>Toyota</b>",
          "Doing things better, cheaper, faster than competitors"
        ],
        [
          "6",
          "<b>Survival</b>",
          "<b>HSBC</b>",
          "Businesses may simply need IS to operate, e.g. Citibank introduced ATMs; competitors had to follow"
        ]
      ]
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Memorize",
      "html": "<b>6 objectives = O-N-C-I-C-S</b>: <b>O</b>perational excellence (Wal-Mart) · <b>N</b>ew products/services/models (Apple) · <b>C</b>ustomer &amp; supplier intimacy (Mandarin Oriental) · <b>I</b>mproved decision making · <b>C</b>ompetitive advantage (Toyota) · <b>S</b>urvival (HSBC). Pair each with its example. MCQs love matching them."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "contemporary-approaches-to-information-systems",
      "text": "Contemporary approaches to information systems"
    },
    {
      "type": "paragraph",
      "html": "Information systems can be studied from two complementary viewpoints. The <b>technical approach</b> treats IS as mathematically based models and technologies, while the <b>behavioral approach</b> deals with behavioral issues that arise in the development and long-term maintenance of information systems. Neither alone is sufficient: real-world systems need both."
    },
    {
      "type": "table",
      "head": [
        "Approach",
        "Contributing disciplines",
        "Focus"
      ],
      "rows": [
        [
          "<b>Technical</b>",
          "<b>Computer science</b>",
          "Theories of computability, methods of computation, efficient data storage &amp; access"
        ],
        [
          "",
          "<b>Management science</b>",
          "Development of models for decision-making and management practices"
        ],
        [
          "",
          "<b>Operations research</b>",
          "Mathematical techniques for optimizing parameters: transportation, inventory control, transaction costs"
        ],
        [
          "<b>Behavioral</b>",
          "Psychology, sociology, economics (behavioral issues)",
          "Strategic business integration, design, implementation, utilization and management, issues that cannot be usefully explored with technical models alone"
        ]
      ]
    },
    {
      "type": "callout",
      "variant": "warn",
      "title": "Common confusion",
      "html": "The behavioral approach exists because issues like <b>strategic business integration, design, implementation, utilization and management</b> of systems cannot be explored usefully with the models used in the technical approach. If an exam question mentions \"resistance to change\" or \"organizational politics\"; that is behavioral, not technical."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "quick-drills",
      "text": "Quick drills"
    },
    {
      "type": "accordion",
      "items": [
        {
          "title": "Drill set: classify each scenario",
          "html": "<ol>\n        <li>A chain of stores replaces manual stock counts with barcode scanners and automatic re-order reports. Which objective is closest?</li>\n        <li>\"Credit reporting firms would have no business without information systems.\" Which dimension of IS does this highlight?</li>\n        <li>A researcher builds a mathematical model to minimize a firm's transportation costs. Which discipline of the technical approach is this?</li>\n      </ol>\n      <p style=\"margin-top:8px\"><b>Answers:</b> 1. Operational excellence (efficiency of existing processes). 2. The <b>organization</b> dimension (IS as an integral part of organizations). 3. <b>Operations research</b> (optimizing selected parameters such as transportation, inventory control, transaction costs).</p>"
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Topic 1 Quiz: IS in Global Business Today",
      "count": 8,
      "quizSlug": "01-information-systems-in-global-business-today"
    }
  ]
};

export default chapter;
