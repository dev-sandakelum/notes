import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "05-operational-excellence-i-enterprise-systems-and-supply-chain-management",
    "number": 5,
    "title": "Operational excellence I: enterprise systems & supply chain management",
    "subtitle": "Lecture 05 · ERP characteristics & value, supply chains, the bullwhip effect, push/pull models",
    "kind": "topic",
    "words": 1133,
    "minutes": 6
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "enterprise-systems-erp",
      "text": "Enterprise systems (ERP)"
    },
    {
      "type": "paragraph",
      "html": "Enterprise systems: also called <b>Enterprise Resource Planning (ERP) systems</b>, are a <b>suite of integrated software modules and a common central database</b>. They collect data from many divisions of the firm for use in nearly all of the firm's internal business activities, and information entered in one process is <b>immediately available</b> for other processes. ERP resolves the problem of <b>fragmented, redundant data sets and systems</b> by storing everything once, in one place."
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">ERP characteristic 1</div><div class=\"f-b\"><b>Real-time operations</b>, data is captured and made available instantly</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">ERP characteristic 2</div><div class=\"f-b\"><b>Integration of all business activities</b>, one suite across the firm</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">ERP characteristic 3</div><div class=\"f-b\"><b>Flow of information</b>, output of one process feeds the others immediately</div></div>\n  </div>",
      "alt": "Formula reference cards"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "enterprise-software-and-how-erp-works",
      "text": "Enterprise software and how ERP works"
    },
    {
      "type": "paragraph",
      "html": "<b>Enterprise software</b> is built around <b>thousands of predefined business processes that reflect best practices</b>. The software supports processes across finance &amp; accounting (general ledger, accounts payable), human resources (personnel administration, payroll), manufacturing &amp; production (purchasing, shipping) and sales &amp; marketing (order processing, billing, sales planning). To implement enterprise software, firms <b>select the functions</b> of the system they wish to use, <b>map their business processes to the software processes</b>, and customize using the software's <b>configuration tables</b>."
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Business value of enterprise systems",
      "html": "1· Increase <b>operational efficiency</b> · 2· Provide firm-wide information to <b>support decision making</b> · 3· Enable <b>rapid responses</b> to customer requests for information or products · 4· Include <b>analytical tools</b> to evaluate overall organizational performance."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "supply-chain-management-systems",
      "text": "Supply chain management systems"
    },
    {
      "type": "paragraph",
      "html": "A <b>supply chain</b> is a <b>network of organizations and business processes</b> for procuring raw materials, transforming them into intermediate and finished products, and distributing the products to customers. Think of Nike's supply chain: materials from suppliers flow through factories and distributors to retail stores worldwide. The <b>upstream supply chain</b> includes the firm's suppliers, the suppliers' suppliers, and the processes for managing relationships with them. The <b>downstream supply chain</b> includes the organizations and processes responsible for <b>distributing and delivering products to customers</b>. Memory hook: suppliers are upstream (before your firm); customers are downstream (after it)."
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"flow\">\n    <div class=\"fstep\"><b>Upstream</b><small>Suppliers &amp; suppliers' suppliers: raw materials</small></div>\n    <div class=\"farrow\">→</div>\n    <div class=\"fstep\"><b>The firm</b><small>Transform materials into products</small></div>\n    <div class=\"farrow\">→</div>\n    <div class=\"fstep\"><b>Downstream</b><small>Distributors &amp; deliverers: products to customers</small></div>\n  </div>",
      "alt": "Diagram from the original notes"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "information-and-supply-chain-management",
      "text": "Information and supply chain management"
    },
    {
      "type": "paragraph",
      "html": "Supply chain inefficiencies are enormous: they can waste <mark>as much as 25 percent of a company's operating costs</mark>. Three concepts describe how companies cope. Under a <b>just-in-time (JIT) strategy</b>, components arrive exactly when they are needed and finished goods are shipped as they leave the assembly line, minimizing inventory. <b>Safety stock</b> acts as a <b>buffer for the lack of flexibility</b> in the supply chain, protecting against uncertainty at the cost of holding inventory. The <b>bullwhip effect</b> occurs when <b>information about product demand gets distorted as it passes from one entity to the next</b> along the supply chain, small changes in customer demand amplify into wild swings in orders upstream, causing over- and under-stocking."
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Exam favourite: bullwhip effect",
      "html": "Definition to reproduce: \"Information about product demand gets distorted as it passes from one entity to the next across the supply chain.\" It is caused by delayed, distorted information; the cure is <b>immediate, shared information</b> across supply chain partners, exactly what SCM systems provide."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "how-information-systems-facilitate-supply-chain-management",
      "text": "How information systems facilitate supply chain management"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "Decide <b>when and what</b> to produce, store, and move",
        "Rapidly <b>communicate orders</b>",
        "<b>Track the status</b> of orders",
        "Check <b>inventory availability</b> and monitor inventory levels",
        "Reduce inventory, transportation and warehousing <b>costs</b>",
        "<b>Track shipments</b>",
        "Plan production based on <b>actual customer demand</b>",
        "Rapidly communicate <b>changes in product design</b>"
      ]
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "supply-chain-management-software",
      "text": "Supply chain management software"
    },
    {
      "type": "paragraph",
      "html": "<b>Supply chain planning systems</b> model the existing supply chain and optimize sourcing and manufacturing plans. They establish inventory levels (raw, intermediate, finished), decide where to store finished products, identify transportation modes, and facilitate <b>demand planning</b>, matching supply forecasts with actual orders. <b>Supply chain execution systems</b> manage the <b>flow of products</b> through distribution centers and warehouses to ensure that products are delivered to the right locations in the most efficient manner. Planning = decide; execution = deliver."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "global-supply-chains",
      "text": "Global supply chains"
    },
    {
      "type": "paragraph",
      "html": "The Internet helps companies manage many aspects of global supply chains, sourcing, transportation, communications, international finance. But global chains bring their own issues: they span <b>greater geographic distances and time differences</b>; they create <b>more complex pricing issues</b> (local taxes, transportation); they must respect <b>foreign government regulations</b>; and they must bridge <b>cultural differences</b>. Globalization multiplies both the value of SCM systems and the difficulty of running them."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "four-supply-chain-models",
      "text": "Four supply chain models"
    },
    {
      "type": "table",
      "head": [
        "Model",
        "How it works"
      ],
      "rows": [
        [
          "<b>1 · Push-based (build-to-stock)</b>",
          "Schedules are based on <b>best guesses of demand</b>, produce first, then push to market"
        ],
        [
          "<b>2 · Pull-based (demand-driven)</b>",
          "<b>Customer orders trigger</b> events in the supply chain, build only what is ordered"
        ],
        [
          "<b>3 · Sequential supply chains</b>",
          "Information and materials flow <b>sequentially from company to company</b>"
        ],
        [
          "<b>4 · Concurrent supply chains</b>",
          "Information flows <b>in many directions simultaneously</b> among members of the supply chain network"
        ]
      ]
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "Memory hook",
      "html": "<b>Push = guess, Pull = customer.</b> Push builds to stock on forecasts; pull is demand-driven by real orders. Sequential = relay race (one company hands to the next); concurrent = network conversation (everyone talks at once)."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "business-value-of-scm-systems",
      "text": "Business value of SCM systems"
    },
    {
      "type": "paragraph",
      "html": "SCM systems deliver value by matching <b>supply to demand</b>: they reduce inventory levels, improve delivery service, speed product time to market, and use assets more effectively. Reduced supply chain costs lead to <b>increased profitability</b>, and better availability and service drive <b>increased sales</b>. The payoff compounds because supply chain improvements touch every product the firm sells."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "the-emerging-internet-driven-supply-chain",
      "text": "The emerging internet-driven supply chain"
    },
    {
      "type": "paragraph",
      "html": "The emerging Internet-driven supply chain operates like a <b>digital logistics nervous system</b>. It provides <b>multidirectional communication</b> among firms, networks of firms and e-marketplaces so that entire networks of supply chain partners can <b>immediately adjust inventories, orders and capacities</b>. When demand shifts anywhere in the network, the whole chain can respond in real time; the practical realization of the concurrent model at global scale."
    },
    {
      "type": "example",
      "title": "Worked example: diagnose the supply chain problem",
      "bodyHtml": "<p>A furniture retailer sees a 10% rise in demand for a sofa. Its distributor orders 30% more from the factory \"to be safe\"; the factory orders 50% more fabric. Three months later the chain is drowning in unsold stock. Name the effect, explain it, and recommend two IS-based remedies.</p>",
      "solutionHtml": "<p>This is the <b>bullwhip effect</b>: information about product demand got distorted as it passed from one entity to the next, each layer exaggerated the order to protect itself (and held <b>safety stock</b> as a buffer for inflexibility).</p>\n      <p><b>Remedies:</b> (1) A shared SCM system giving all partners <b>visibility of actual customer demand</b> (point-of-sale data) so production is planned on real orders, a <b>pull-based</b> approach; (2) Use <b>supply chain planning software</b> for demand planning, and <b>execution systems</b> to track inventory and shipments, reducing the need for each layer to over-order. JIT delivery scheduling would further cut buffer stock.</p>"
    },
    {
      "type": "quiz",
      "title": "Topic 5 Quiz: Enterprise Systems & SCM",
      "count": 9,
      "quizSlug": "05-operational-excellence-i-enterprise-systems-and-supply-chain-management"
    }
  ]
};

export default chapter;
