import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "02-global-e-business-types-of-information-systems",
    "number": 2,
    "title": "Global E-Business: Types of Information Systems",
    "subtitle": "Lecture 02 · Business processes, TPS · MIS · DSS · ESS, enterprise applications, e-business",
    "kind": "topic",
    "words": 1517,
    "minutes": 8
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "business-processes-and-information-systems",
      "text": "Business Processes and Information Systems"
    },
    {
      "type": "paragraph",
      "html": "<b>Business processes</b> are sets of activities — the steps required to produce a product or a service. They are the <b>workflows of material, information and knowledge</b> through the organization. Processes may be tied to a single <b>functional area</b> (e.g. Human Resources hiring employees) or be <b>cross-functional</b>, spanning several areas (e.g. fulfilling a customer order, which involves sales, warehousing, production and accounting). Business processes are so central that a business can be seen as a <b>collection of business processes</b> — and processes may be <b>assets or liabilities</b> depending on how well they are designed."
    },
    {
      "type": "table",
      "head": [
        "Functional area",
        "Example business processes"
      ],
      "rows": [
        [
          "<b>Manufacturing &amp; production</b>",
          "Assembling the product · checking for quality · producing bills of materials"
        ],
        [
          "<b>Sales &amp; marketing</b>",
          "Identifying customers · making customers aware of the product · selling the product"
        ],
        [
          "<b>Finance &amp; accounting</b>",
          "Paying creditors · creating financial statements · managing cash accounts"
        ],
        [
          "<b>Human resources</b>",
          "Hiring employees · evaluating job performance · enrolling employees in benefits plans"
        ]
      ]
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "how-it-enhances-business-processes",
      "text": "How IT enhances business processes"
    },
    {
      "type": "paragraph",
      "html": "Information technology enhances business processes in <b>two main ways</b>. First, it increases the <b>efficiency of existing processes</b> by automating steps that were previously manual. Second, it enables <b>entirely new processes</b> capable of transforming the business — changing the flow of information, replacing sequential steps with parallel steps, eliminating delays in decision making, and supporting new business models. Examples: the <b>Kindle e-book</b> from Amazon (a whole new digital delivery model) and <b>buying a computer online at Best Buy</b> (an existing process transformed by a new channel)."
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"flow\">\n    <div class=\"fstep\"><b>Efficiency</b><small>Automate manual steps of an <b>existing</b> process</small></div>\n    <div class=\"farrow\">vs</div>\n    <div class=\"fstep\"><b>Transformation</b><small>Enable <b>new</b> processes — new information flows, parallel steps, new business models</small></div>\n  </div>",
      "alt": "Diagram from the original notes"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "types-of-information-systems",
      "text": "Types of Information Systems"
    },
    {
      "type": "paragraph",
      "html": "The lecture organizes systems into two big families: <b>systems for different management groups</b> (TPS at the bottom, business-intelligence systems for middle and senior management) and <b>systems for linking the enterprise</b> (enterprise applications, intranets and extranets). Learn the ladder below — it is one of the most examined diagrams in the whole course."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "1-transaction-processing-systems-tps",
      "text": "1 · Transaction Processing Systems (TPS)"
    },
    {
      "type": "paragraph",
      "html": "TPS <b>perform and record the daily routine transactions</b> necessary to conduct business — such as <b>sales order entry, payroll, shipping</b>. They allow managers to monitor the status of internal operations and relations with the external environment, they <b>serve the operational levels</b> of the organization, and they handle <b>predefined, structured goals and decision making</b>. A payroll TPS keeps track of money paid to employees; because TPS record every transaction, they are the <b>major source of data for all other systems</b>. TPS failures can stop the whole business — imagine a stopped airline reservation system — so they must be reliable and fast."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "2-systems-for-business-intelligence-bi",
      "text": "2 · Systems for Business Intelligence (BI)"
    },
    {
      "type": "paragraph",
      "html": "<b>Business intelligence</b> is a <b>class of software applications</b> that analyze current and historical data to <b>find patterns and trends and aid decision-making</b>. BI systems are used to support <b>middle and senior management</b>: for middle management they support <b>monitoring, controlling, decision-making and administrative activities</b>; for senior management they support more <b>non-routine decision making</b>. BI turns the flood of transaction data into insight."
    },
    {
      "type": "table",
      "head": [
        "System",
        "Serves",
        "What it does",
        "Key facts / examples"
      ],
      "rows": [
        [
          "<b>TPS</b>",
          "Operational level",
          "Records daily routine transactions",
          "Payroll, sales order entry, shipping; structured, predefined"
        ],
        [
          "<b>MIS</b>",
          "Middle management",
          "Reports on firm's current performance using data from TPS; answers routine questions via predefined procedures",
          "Typically <b>little analytic capability</b>; summarized reports"
        ],
        [
          "<b>DSS</b>",
          "Middle management",
          "Supports <b>non-routine</b> decision making; uses external information as well as TPS/MIS data",
          "\"What is the impact on production if December sales doubled?\"; competitor &amp; stock prices"
        ],
        [
          "<b>ESS</b>",
          "Senior management",
          "Addresses <b>non-routine decisions</b> requiring judgment, evaluation, insight; combines external events with internal MIS/DSS summaries",
          "Digital dashboard: working capital, accounts receivable/payable, cash flow, inventory"
        ]
      ]
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "Memory hook",
      "html": "<b>TPS = records, MIS = reports, DSS = analyzes \"what-if\", ESS = digital dashboard for executives.</b> MIS answers <i>routine</i> questions with predefined procedures; DSS supports <i>non-routine</i> analysis. That contrast is a favourite MCQ."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "functional-business-intelligence-systems",
      "text": "Functional business-intelligence systems"
    },
    {
      "type": "paragraph",
      "html": "Beyond the classic MIS, the lecture lists five specialized management-support systems. A <b>Marketing Information System</b> helps managers identify key customers and perform <b>market segmentation</b>, leading to accurate identification of the target market. A <b>Human Resource Information System (HRIS)</b> allows HR managers to take better and timely decisions, with modules for payroll, time &amp; attendance, benefits administration, HR management, training, and employee self-service. A <b>Finance Management Information System (FMIS)</b> helps managers evaluate sources of funds — which suit the firm best, bear the least risk, and reap the most gain (e.g. choosing between <b>equity and debt</b>). A <b>Production Management Information System (PMIS)</b> is concerned with planning and control of all activities that transform inputs into outputs by adding value — production planning, production control, product design &amp; development, and plant location &amp; layout."
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">HRIS modules</div><div class=\"f-b\">1· Payroll &nbsp;2· Time &amp; attendance &nbsp;3· Benefits administration &nbsp;4· HR management &nbsp;5· Training &nbsp;6· Employee self-service</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">PMIS scope</div><div class=\"f-b\">Production planning · production control · product design · product development · plant location &amp; layout</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">FMIS decision</div><div class=\"f-b\">Evaluating sources of funds: best suited, least risk, most gain — <b>equity vs debt</b></div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Marketing IS</div><div class=\"f-b\">Identify key customers + market segmentation → accurate target market</div></div>\n  </div>",
      "alt": "Formula reference cards"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "relationships-among-systems-the-constituency-perspective",
      "text": "Relationships among systems — the constituency perspective"
    },
    {
      "type": "paragraph",
      "html": "Viewed from the <b>constituency perspective</b>: <b>TPS</b> support operational-level employees; <b>MIS and DSS</b> support managers; <b>ESS</b> support executives. The systems are also related to one another: <b>TPS are the major source of data for other systems</b>, while <b>ESS are recipients of data from lower-level systems</b>. Data may be exchanged between systems, although in reality most businesses' systems are only <b>loosely integrated</b> — but they are getting better."
    },
    {
      "type": "example",
      "title": "Worked example — MIS obtains its data from TPS",
      "bodyHtml": "<p>Three TPS (sales order, payroll, shipping) supply summarized transaction data to the MIS reporting system at the end of each period. A middle manager asks: \"Which product line had the highest sales revenue this quarter?\" Why is this an MIS question, and where does the answer come from?</p>",
      "solutionHtml": "<p>It is a <b>routine question with a predefined procedure for answering</b> — summarize the period's transaction data into a report. The raw data originates in the <b>TPS</b>, which records every sales transaction; the <b>MIS</b> summarizes that data and delivers the report (e.g. summarized annual sales data). No external data or \"what-if\" modelling is needed — if it were (e.g. \"what if prices drop 10%?\"), it would be a <b>DSS</b> question.</p>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "systems-for-linking-the-enterprise",
      "text": "Systems for Linking the Enterprise"
    },
    {
      "type": "paragraph",
      "html": "<b>Enterprise applications</b> are systems for linking the enterprise. They <b>span functional areas</b>, <b>execute business processes across the firm</b>, and <b>include all levels of management</b>. Their architecture automates processes that span multiple business functions and organizational levels and may extend outside the organization. There are <b>four major enterprise applications</b>, summarized below (each is covered in depth in Topics 5–7)."
    },
    {
      "type": "table",
      "head": [
        "Enterprise application",
        "Purpose",
        "One-line essence"
      ],
      "rows": [
        [
          "<b>1 · Enterprise systems (ERP)</b>",
          "Collect data from different firm functions into a <b>single central data repository</b>; resolves fragmented, redundant data; enables coordination of daily activities, efficient response to orders, better decisions",
          "One integrated database for the whole firm"
        ],
        [
          "<b>2 · Supply chain management (SCM)</b>",
          "Manage relationships with <b>suppliers</b>; share information about orders, production, inventory levels, delivery",
          "Right products, right destination, least time &amp; cost"
        ],
        [
          "<b>3 · Customer relationship management (CRM)</b>",
          "Coordinate all business processes dealing with customers in <b>sales, marketing, and service</b> to optimize revenue, customer satisfaction and retention; consolidates customer info from multiple channels",
          "Single view of the customer"
        ],
        [
          "<b>4 · Knowledge management systems (KMS)</b>",
          "Support processes for <b>acquiring, creating, storing, distributing, applying and integrating knowledge</b>; collect internal knowledge and link to external sources",
          "Firm's know-how available to every employee"
        ]
      ]
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "intranets-and-extranets",
      "text": "Intranets and Extranets"
    },
    {
      "type": "paragraph",
      "html": "Two alternative tools increase integration and expedite the flow of information. <b>Intranets</b> are internal company web sites accessible <b>only by employees</b>. <b>Extranets</b> are company web sites accessible externally <b>only to vendors and suppliers</b>, and are often used to <b>coordinate the supply chain</b>. Both are cheaper, lighter-weight alternatives to full enterprise applications for linking the enterprise."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "e-business-e-commerce-and-e-government",
      "text": "E-business, e-commerce and e-government"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">E-business</div><div class=\"f-b\">Use of digital technology and Internet to drive <b>major business processes</b> — internal as well as external</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">E-commerce</div><div class=\"f-b\"><b>Subset of e-business</b>: buying and selling goods &amp; services <b>over the Internet</b></div></div>\n    <div class=\"fcard\"><div class=\"f-t\">E-government</div><div class=\"f-b\">Using Internet technology to deliver information and services to <b>citizens, employees and businesses</b></div></div>\n  </div>",
      "alt": "Formula reference cards"
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Exam tip",
      "html": "Remember the subset relationship: <b>e-commerce ⊂ e-business</b>. E-business covers all digitally-driven business processes (including internal ones); e-commerce is only the buying/selling part. A question that treats them as identical is a trap."
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
          "title": "Drill set — which system serves this need? ▾",
          "html": "<ol>\n        <li>A cashier scans items and the system instantly records the sale and updates stock.</li>\n        <li>A marketing manager wants a standard monthly summary of sales by region.</li>\n        <li>A CFO studies a live dashboard of working capital, cash flow and inventory.</li>\n        <li>An operations manager asks \"what happens to the production schedule if December sales double?\"</li>\n        <li>A supplier logs into a company website to check order status and delivery schedules.</li>\n      </ol>\n      <p style=\"margin-top:8px\"><b>Answers:</b> 1 — TPS (routine transaction, operational level). 2 — MIS (routine reporting from TPS data). 3 — ESS (digital dashboard for senior management). 4 — DSS (non-routine \"what-if\" analysis). 5 — Extranet (external access for vendors/suppliers, often used to coordinate the supply chain).</p>"
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Topic 2 Quiz — Global E-Business",
      "count": 10,
      "quizSlug": "02-global-e-business-types-of-information-systems"
    }
  ]
};

export default chapter;
