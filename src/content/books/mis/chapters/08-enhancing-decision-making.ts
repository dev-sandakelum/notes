import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "08-enhancing-decision-making",
    "number": 8,
    "title": "Enhancing Decision Making",
    "subtitle": "Lecture 08 · Decision types, the 4-stage process, Mintzberg's roles, BI & business analytics",
    "kind": "topic",
    "words": 1121,
    "minutes": 6
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "decision-making-why-information-changes-the-answer",
      "text": "Decision Making: Why Information Changes the Answer"
    },
    {
      "type": "paragraph",
      "html": "The lecture opens with a brilliant example that shows how more information changes decisions. A supplier must choose between two wristwatches. Knowing only the <b>sales price</b> (Casio 10,000/= vs Citizen 18,000/=), the Citizen looks better. Adding the <b>cost</b> (6,000/= vs 10,000/=), both yield a 4,000/= and 8,000/= margin respectively — Citizen still wins. But adding the <b>sales forecast</b> (2,000 units vs 800 units) flips everything: total profit is Casio 8,000,000/= versus Citizen 6,400,000/= — <b>the Casio is more profitable</b>. The lesson: improving hundreds of thousands of \"small\" decisions with better information adds up to large annual value for the business."
    },
    {
      "type": "example",
      "title": "Worked example — the wristwatch decision",
      "bodyHtml": "<p>Option 1: Casio — sales price 10,000/=, cost 6,000/=, forecast 2,000 units. Option 2: Citizen — sales price 18,000/=, cost 10,000/=, forecast 800 units. Which product is more profitable to the supplier, and why did the answer change?</p>",
      "solutionHtml": "<p>Unit profit: Casio = 10,000 − 6,000 = <b>4,000/=</b>; Citizen = 18,000 − 10,000 = <b>8,000/=</b>. Total profit: Casio = 4,000 × 2,000 = <b>8,000,000/=</b>; Citizen = 8,000 × 800 = <b>6,400,000/=</b>. Despite the higher unit margin, the <b>Casio is more profitable overall</b> because of volume. Each new piece of information (price → cost → forecast) changed the rational choice — the core argument for investing in decision-supporting information systems.</p>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "types-of-decisions",
      "text": "Types of Decisions"
    },
    {
      "type": "table",
      "head": [
        "Decision type",
        "Definition",
        "Example"
      ],
      "rows": [
        [
          "<b>Unstructured</b>",
          "Decision maker must provide <b>judgment, evaluation and insight</b> to solve the problem",
          "\"Should we enter a new market?\" (senior managers)"
        ],
        [
          "<b>Structured</b>",
          "<b>Repetitive and routine</b>; a definite procedure exists so they don't have to be treated as new each time",
          "\"Does the customer meet criteria for credit?\" (operational managers)"
        ],
        [
          "<b>Semi-structured</b>",
          "Only <b>part of the problem</b> has a clear-cut answer provided by accepted procedure",
          "\"Why is the order fulfillment report showing a decline in Colombo?\" (middle managers — structured reports, unstructured diagnosis)"
        ]
      ]
    },
    {
      "type": "paragraph",
      "html": "The <b>key decision-making groups</b> map onto the pyramid from Lecture 01: <b>senior managers</b> make many <b>unstructured</b> decisions; <b>middle managers</b> make more <b>structured</b> decisions, but these may include unstructured components; <b>operational managers</b> make more <b>structured</b> decisions. Information systems support each group differently — MIS reports for the routine part, DSS/ESS for the non-routine part."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "the-four-stages-of-the-decision-making-process",
      "text": "The Four Stages of the Decision-Making Process"
    },
    {
      "type": "paragraph",
      "html": "This model (from Simon) is one of the most examined frameworks in the course. Memorize the four stages in order with their definitions."
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"flow\">\n    <div class=\"fstep\"><b>1 · Intelligence</b><small>Discovering, identifying and understanding problems occurring in the organization</small></div>\n    <div class=\"farrow\">→</div>\n    <div class=\"fstep\"><b>2 · Design</b><small>Identifying and exploring solutions to the problem</small></div>\n    <div class=\"farrow\">→</div>\n    <div class=\"fstep\"><b>3 · Choice</b><small>Choosing among solution alternatives</small></div>\n    <div class=\"farrow\">→</div>\n    <div class=\"fstep\"><b>4 · Implementation</b><small>Making the chosen alternative work and monitoring how well the solution is working</small></div>\n  </div>",
      "alt": "Diagram from the original notes"
    },
    {
      "type": "paragraph",
      "html": "Note that <b>feedback loops back</b> through the stages: monitoring implementation may reveal new problems (back to intelligence) or better alternatives (back to design). Information systems can support <b>all four stages</b> — e.g. BI dashboards for intelligence, DSS models for design and choice, and tracking systems for implementation monitoring."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "managers-and-decision-making-in-the-real-world",
      "text": "Managers and Decision Making in the Real World"
    },
    {
      "type": "paragraph",
      "html": "Information systems can only <b>assist</b> some of the roles played by managers — IS <b>cannot improve all</b> the different kinds of decisions in an organization. The <b>classical model of management</b> describes <b>five functions</b>: <b>planning, organizing, coordinating, deciding and controlling</b>. More <b>contemporary behavioral models</b> show that the actual behavior of managers is <b>less systematic, more informal, less reflective, more reactive, and less well organized</b> than the classical model suggests — managers work at an unrelenting pace, prefer current and ad-hoc information, and favor verbal media."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "mintzberg-s-10-managerial-roles",
      "text": "Mintzberg's 10 managerial roles"
    },
    {
      "type": "table",
      "head": [
        "Category",
        "Roles"
      ],
      "rows": [
        [
          "<b>Interpersonal roles</b>",
          "1· Figurehead · 2· Leader · 3· Liaison"
        ],
        [
          "<b>Informational roles</b>",
          "4· Monitor · 5· Disseminator · 6· Spokesperson"
        ],
        [
          "<b>Decisional roles</b>",
          "7· Entrepreneur · 8· Disturbance handler · 9· Resource allocator · 10· Negotiator"
        ]
      ]
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "Memory hooks — Mintzberg",
      "html": "<b>3 + 3 + 4 = 10</b>. Interpersonal (<b>F-L-L</b>: Figurehead, Leader, Liaison — people), Informational (<b>M-D-S</b>: Monitor, Disseminator, Spokesperson — information in/out), Decisional (<b>E-D-R-N</b>: Entrepreneur, Disturbance handler, Resource allocator, Negotiator — decisions). Exam questions give a scenario (\"the CEO represents the firm at a ceremony\" → <b>Figurehead</b>; \"briefing the team on new strategy\" → <b>Disseminator</b>; \"handling an unexpected strike\" → <b>Disturbance handler</b>)."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "why-it-investments-don-t-always-pay-off",
      "text": "Why IT Investments Don't Always Pay Off"
    },
    {
      "type": "paragraph",
      "html": "Three main reasons why investments in information technology do not always produce positive results: <b>(1) Information quality</b> — high-quality decisions require high-quality information; garbage in, garbage out. <b>(2) Management filters</b> — managers have selective attention and a variety of biases that reject information not conforming to prior conceptions. <b>(3) Organizational inertia and politics</b> — strong forces within organizations resist making decisions that call for major change."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "high-velocity-automated-decision-making",
      "text": "High-velocity automated decision making"
    },
    {
      "type": "paragraph",
      "html": "Some structured decisions are now made entirely by computers. <b>High-velocity automated decision making</b> is made possible through <b>computer algorithms that precisely define the steps</b> for a highly structured decision — with <b>humans taken out of the decision</b>. Example: high-speed computer trading programs that execute trades in <b>30 milliseconds</b> — and were responsible for the <b>\"Flash Crash\" of 2010</b>. Such systems <b>require safeguards</b> to ensure proper operation and regulation."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "business-intelligence-and-business-analytics",
      "text": "Business Intelligence and Business Analytics"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">Business intelligence (BI)</div><div class=\"f-b\"><b>Infrastructure</b> for collecting, storing and analyzing data produced by the business — databases, data warehouses, data marts</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Business analytics (BA)</div><div class=\"f-b\"><b>Tools and techniques</b> for analyzing data — OLAP, statistics, models, data mining</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">BI vendors</div><div class=\"f-b\">Companies that <b>create business intelligence and analytics</b> products purchased by firms</div></div>\n  </div>",
      "alt": "Formula reference cards"
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Exam tip — BI vs BA",
      "html": "<b>BI = the infrastructure</b> (databases, warehouses, marts); <b>BA = the analytical tools</b> used on that infrastructure (OLAP, statistics, models, data mining). A question mixing them up is a classic distractor."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "six-elements-in-the-business-intelligence-environment",
      "text": "Six elements in the business intelligence environment"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "<b>Data from the business environment</b>",
        "<b>Business intelligence infrastructure</b>",
        "<b>Business analytics toolset</b>",
        "<b>Managerial users and methods</b>",
        "<b>Delivery platform — MIS, DSS, ESS</b>",
        "<b>User interface</b>"
      ]
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "bi-capabilities-and-users",
      "text": "BI capabilities & users"
    },
    {
      "type": "paragraph",
      "html": "The goal of BI is to deliver <b>accurate, real-time information to decision-makers</b>. The main functionalities are: <b>production reports, parameterized reports, dashboards/scorecards, ad-hoc query/search/report creation, drill-down, and forecasts, scenarios and models</b>. Who uses BI? About <mark>80% are casual users who rely on production reports</mark>: <b>senior executives</b> use monitoring functionalities; <b>middle managers and analysts</b> perform ad-hoc analysis; <b>operational employees</b> use prepackaged reports (sales forecasts, customer satisfaction and loyalty metrics, supply chain backlog, employee productivity)."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "examples-of-bi-applications",
      "text": "Examples of BI applications"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Predictive analytics</b> — use patterns in data to predict future behavior (e.g. credit card companies identifying customers at risk of leaving)",
        "<b>Big data analytics</b> — mining extremely large, varied data sets",
        "<b>Data visualization</b> — helps users see patterns and relationships difficult to see in text lists",
        "<b>Operational intelligence and analytics</b> — real-time monitoring of operations",
        "<b>Location analytics</b> — gaining business insight from the location component of data",
        "<b>Geographic information systems (GIS)</b> — tie location-related data to maps"
      ]
    },
    {
      "type": "quiz",
      "title": "Topic 8 Quiz — Enhancing Decision Making",
      "count": 10,
      "quizSlug": "08-enhancing-decision-making"
    }
  ]
};

export default chapter;
