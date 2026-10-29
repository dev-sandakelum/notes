import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "01-introduction-to-e-business",
    "number": 1,
    "title": "Introduction to e-business & e-commerce",
    "subtitle": "Lecture 01 · Definitions, categories, evolution, advantages & SWOT",
    "kind": "topic",
    "words": 1720,
    "minutes": 8
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "module-overview",
      "text": "Module overview"
    },
    {
      "type": "paragraph",
      "html": "<b>ICT2142 E-Business Systems</b> is a 2-credit course unit with 45 lecture hours (15h theory, 30h practical) offered by the Dept. of ICT, Faculty of Technology, University of Ruhuna. The aim of the module is to provide a <b>comprehensive understanding of modern e-business environments</b> by exploring digital business models, technologies and emerging trends, while improving the practical skills needed to analyze, design and manage e-business solutions. In the practical stream you will complete a technical evaluation of popular e-commerce platforms, build a simple prototype e-commerce store, and do a basic integration with a payment gateway."
    },
    {
      "type": "paragraph",
      "html": "The course content spans eleven areas: introduction to e-business and e-commerce, e-business models and digital value creation, e-commerce infrastructure and technologies, e-commerce payment systems, designing &amp; developing e-commerce websites, e-commerce platforms &amp; tools, digital marketing, data analytics for e-commerce, e-business security and legal aspects, logistics/fulfilment &amp; supply chain, and emerging trends. Evaluation is a <b>theory exam at 70%</b> plus <b>continuous assessment at 30%</b> (quizzes 10%, mini project 20%). The reference texts are Turban et al., <i>Electronic Commerce: A Managerial and Social Networks Perspective</i> (9th ed., 2018) and Turban et al., <i>Introduction to Electronic Commerce and Social Commerce</i> (4th ed., 2017)."
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Course facts worth memorizing",
      "html": "Credits = <b>2</b> · Lecture hours = <b>45h (15h theory + 30h practical)</b> · Theory exam <b>70%</b> · Continuous assessment <b>30%</b> (Quizzes <b>10%</b> + Mini project <b>20%</b>). These little numbers are easy MCQ fodder in the continuous-assessment quizzes."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "what-is-e-business-and-e-commerce",
      "text": "What is e-business and e-commerce?"
    },
    {
      "type": "paragraph",
      "html": "<b>Electronic business (e-business)</b> is <i>doing business electronically by completing business processes over open networks, thereby substituting information for physical business processes</i>. The key phrase is <mark>substituting information for physical business processes</mark>: paperwork, phone calls and physical visits are replaced by networked digital information. <b>Electronic commerce (e-commerce)</b> is narrower: it is <i>the buying and selling of goods and services over an electronic network, primarily the internet</i>. Every e-commerce activity is e-business, but not every e-business activity is a commercial transaction."
    },
    {
      "type": "paragraph",
      "html": "E-business is best understood as a <b>collection</b> that stacks several capabilities on top of e-commerce: <b>e-commerce + customer relationship management (CRM) + supply chain management (SCM) + knowledge management + business intelligence + collaborative technologies</b>. When an exam question asks you to separate the two, reach for this stack: the moment a scenario goes beyond trading (marketing analytics, supplier collaboration, internal knowledge sharing) you are in e-business territory, not pure e-commerce."
    },
    {
      "type": "table",
      "head": [
        "Basis for comparison",
        "E-commerce",
        "E-business"
      ],
      "rows": [
        [
          "<b>Meaning</b>",
          "Trading of merchandise over the internet",
          "Running a business using the internet"
        ],
        [
          "<b>What is it?</b>",
          "Subset",
          "Superset"
        ],
        [
          "<b>Limited to monetary transactions?</b>",
          "Yes",
          "No"
        ],
        [
          "<b>What they carry out</b>",
          "Commercial transactions",
          "Business transactions"
        ],
        [
          "<b>Requires</b>",
          "Website",
          "Website, CRM, ERP, etc."
        ],
        [
          "<b>Which network is used</b>",
          "Internet",
          "Internet, intranet and extranet"
        ]
      ],
      "caption": "The six-row e-commerce vs e-business comparison table: a recurring exam favourite."
    },
    {
      "type": "callout",
      "variant": "warn",
      "title": "Common trap",
      "html": "Students often reverse the subset relationship. Remember the direction: <b>e-commerce ⊂ e-business</b>. Also note the network row: e-commerce uses the <b>internet</b>, while e-business additionally uses <b>intranet</b> (internal) and <b>extranet</b> (selected partners)."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "objectives-of-e-commerce",
      "text": "Objectives of e-commerce"
    },
    {
      "type": "paragraph",
      "html": "Primarily, e-commerce aims to <b>increase the speed and efficiency of business transactions and processes</b>. Beyond that primary objective, e-commerce contributes <b>enhanced competitiveness</b>, <b>job creation</b>, <b>economic growth</b>, <b>lower prices for goods and services through competition</b>, and <b>streamlined, much simpler business processes</b>. When a question asks \"what is the <i>primary</i> objective\", the safe answer is the speed-and-efficiency clause; the rest are supporting benefits."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "the-six-categories-of-e-commerce",
      "text": "The six categories of e-commerce"
    },
    {
      "type": "paragraph",
      "html": "There are <b>six general e-commerce categories</b>, classified by who transacts with whom. Learn each with its description <i>and</i> example pair, questions typically show an example and ask for the category, or show a category and ask which example does <b>not</b> belong."
    },
    {
      "type": "table",
      "head": [
        "Category",
        "Description",
        "Examples"
      ],
      "rows": [
        [
          "<b>Business-to-Business (B2B)</b>",
          "All electronic transactions of goods or services conducted between companies",
          "Producers and traditional commerce wholesalers"
        ],
        [
          "<b>Business-to-Consumer (B2C)</b>",
          "The retail section of e-commerce, where traditional retail trade normally operates",
          "Selling consumer goods: computers, software, books, shoes, cars, food, financial products, digital publications"
        ],
        [
          "<b>Consumer-to-Consumer (C2C)</b>",
          "All electronic transactions of goods or services conducted between consumers",
          "eBay.com"
        ],
        [
          "<b>Consumer-to-Business (C2B)</b>",
          "A large number of individuals make their services or products available for purchase by companies seeking precisely those services or products",
          "Logo creation"
        ],
        [
          "<b>Business-to-Administration (B2A)</b>",
          "All transactions conducted online between companies and public administration",
          "Social security, employment, legal documents and registers"
        ],
        [
          "<b>Consumer-to-Administration (C2A)</b>",
          "All electronic transactions conducted between individuals and public administration",
          "Distance learning, medical appointments, payment of health services"
        ]
      ],
      "caption": "Six categories of e-commerce with their classic examples."
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Exam tip: pick the odd one out",
      "html": "Classic distractors: <b>eBay → C2C</b> (not B2C, because consumers sell to consumers); <b>logo creation → C2B</b> (an individual sells a service <i>to</i> a business: the arrow points backwards from the usual B2C flow); <b>distance learning &amp; medical appointments → C2A</b> (citizen ↔ government)."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "evolution-of-e-business",
      "text": "Evolution of e-business"
    },
    {
      "type": "paragraph",
      "html": "The evolution of e-business is taught as <b>five key stages</b>. Dates and firsts matter here: the 1948 Berlin airlift telex, EDI in 1975, the web in 1991, the first secure online credit-card transaction in 1994, and IBM's popularization of the term \"e-business\" in 1997 are all frequently quoted milestones."
    },
    {
      "type": "table",
      "head": [
        "Stage",
        "Era",
        "Key milestones"
      ],
      "rows": [
        [
          "<b>Pre-Internet Era</b>",
          "1940s–1980s",
          "Basic electronic messaging during the 1948 Berlin airlift via <b>telex</b>; computer-to-computer <b>EDI (Electronic Data Interchange)</b> introduced in <b>1975</b> to exchange business invoices and orders securely"
        ],
        [
          "<b>The Internet Boom</b>",
          "1990s",
          "World Wide Web launched in <b>1991</b>; first secure online credit card transaction in <b>1994</b>; retail giants <b>Amazon and eBay</b> launched; IBM popularized the term \"e-business\" in <b>1997</b>"
        ],
        [
          "<b>Maturation and Gateways</b>",
          "2000s",
          "Rapid expansion after recovering from the <b>dot-com bubble burst</b>; secure payment platforms like <b>PayPal</b> made online buying trusted and mainstream"
        ],
        [
          "<b>Mobile and Social Commerce</b>",
          "2010s",
          "Smartphone adoption shifted traffic to mobile apps (<b>m-commerce</b>); social media platforms integrated direct purchasing options"
        ],
        [
          "<b>Intelligent Digital Ecosystems</b>",
          "Present",
          "Cloud computing, artificial intelligence and big data for personalized shopping; merges online and physical stores into smooth <b>omnichannel</b> experiences"
        ]
      ],
      "caption": "Five key stages of e-business evolution."
    },
    {
      "type": "example",
      "title": "Worked example: date-matching milestones",
      "bodyHtml": "<p>Match each milestone to its year/era:</p><ol><li>EDI introduced for exchanging invoices and orders</li><li>World Wide Web launched</li><li>First secure online credit card transaction</li><li>IBM popularizes the term \"e-business\"</li></ol>",
      "solutionHtml": "<ul><li><b>1 → 1975</b> (Pre-Internet Era, computer-to-computer EDI)</li><li><b>2 → 1991</b> (Internet Boom)</li><li><b>3 → 1994</b> (Internet Boom)</li><li><b>4 → 1997</b> (Internet Boom)</li></ul><p>Remember the cluster: 1991 web → 1994 secure payment → 1997 the name. The telex precursor dates to the 1948 Berlin airlift.</p>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "advantages-and-disadvantages-of-e-commerce",
      "text": "Advantages & disadvantages of e-commerce"
    },
    {
      "type": "paragraph",
      "html": "The advantages of e-commerce cluster around reach, cost and convenience: a <b>faster buying/selling procedure</b> that makes products easy to find; buying and selling <b>24/7</b>; <b>more reach to customers with no theoretical geographic limitations</b>; <b>no need for physical company set-ups</b>; <b>low operational costs</b> with better quality of service; a business that is <b>easy to start and manage</b>; and customers who can <b>compare products across providers without moving around physically</b>."
    },
    {
      "type": "paragraph",
      "html": "The disadvantages are the mirror image. <b>Perishable grocery products are much harder to sell online</b>; <b>anyone (good or bad) can easily start a business</b>, and many bad sites eat up customers' money; <b>there is no guarantee of product quality</b>; <b>nobody can buy during a site crash</b>; with minimal direct customer-to-company interaction, <b>customer loyalty is always on check</b>; and <b>hackers</b> keep e-commerce sites, services and payment gateways permanently prone to attack. Notice how each disadvantage pairs with an advantage: that symmetry makes both lists easier to memorize."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "swot-analysis",
      "text": "SWOT analysis"
    },
    {
      "type": "paragraph",
      "html": "<b>SWOT analysis</b> is a two-step strategic tool. First, the analyst looks <b>into the business unit</b> to identify its <b>strengths and weaknesses</b>: these are internal factors. Second, the analyst reviews the <b>operating environment</b> to identify <b>opportunities and threats</b>: these are external factors. The lecture's in-class activity is to conduct a SWOT analysis for <b>DELL</b>, so be ready to produce a plausible four-quadrant analysis for a named company."
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">S · Strengths (internal, helpful)</div><div class=\"f-b\">Direct sales model, build-to-order customization, strong supply chain, established brand.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">W · Weaknesses (internal, harmful)</div><div class=\"f-b\">Limited retail presence, dependence on component suppliers, thinner services revenue.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">O · Opportunities (external, helpful)</div><div class=\"f-b\">Growing global online demand, emerging markets, services and peripheral upsell.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">T · Threats (external, harmful)</div><div class=\"f-b\">Aggressive price competition, component shortages, changing trade/tariff rules.</div></div>\n  </div>",
      "alt": "SWOT four-quadrant grid: strengths and weaknesses are internal; opportunities and threats are external",
      "caption": "A sample DELL SWOT: internal factors fill the S/W row, external factors fill the O/T row."
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "Memory hook",
      "html": "<b>S</b>trengths/<b>W</b>eaknesses = <b>inside</b> the firm (look <i>into</i> the business unit). <b>O</b>pportunities/<b>T</b>hreats = <b>outside</b> the firm (review the <i>operating environment</i>). Mixing internal and external factors is the most common SWOT mistake in exams."
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
          "title": "Drill set: classify and define",
          "html": "<ol>\n        <li>A freelancer sells a logo design to a multinational company through an online platform. Which e-commerce category is this?</li>\n        <li>\"Substituting information for physical business processes\" is the definition of which term?</li>\n        <li>Which single network does e-commerce primarily use, and which three networks can e-business use?</li>\n        <li>A bookstore's site goes offline for six hours on a payday. Name the disadvantage this illustrates.</li>\n      </ol>\n      <p style=\"margin-top:8px\"><b>Answers:</b> 1. <b>C2B</b> (consumer-to-business: an individual supplies a service to a business). 2. <b>E-business</b>. 3. E-commerce: the <b>internet</b>; e-business: internet, <b>intranet and extranet</b>. 4. \"No one can buy during a site crash\": availability as an e-commerce disadvantage.</p>"
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Topic 1 Quiz: Introduction to E-Business & E-Commerce",
      "count": 8,
      "quizSlug": "01-introduction-to-e-business"
    }
  ]
};

export default chapter;
