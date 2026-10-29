import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "09-emerging-trends-in-ebusiness",
    "number": 9,
    "title": "Emerging trends in e-business",
    "subtitle": "Lecture 10 · AI, blockchain & smart contracts, social & live commerce, AR and cross-border e-commerce",
    "kind": "topic",
    "words": 2050,
    "minutes": 10
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "why-these-trends-matter",
      "text": "Why these trends matter"
    },
    {
      "type": "paragraph",
      "html": "E-business is moving from static online storefronts toward <b>intelligent, immersive, automated and borderless commerce</b>. The lecture's five trends map to five value moves: <b>AI</b> personalizes and automates; <b>blockchain</b> builds verifiable trust; <b>social/live commerce</b> turns engagement into purchase; <b>AR</b> reduces product uncertainty; and <b>cross-border</b> reaches global customers. The core idea to carry through the whole chapter: <mark>technology creates value only when it improves customer experience, operational efficiency, trust, market reach, or decision quality</mark>. Any trend evaluation (in an exam or a boardroom) should be argued along one of those five axes."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "ai-in-e-commerce",
      "text": "AI in e-commerce"
    },
    {
      "type": "paragraph",
      "html": "<b>Artificial intelligence uses data and algorithms to support prediction, personalization, automation and natural-language interaction</b>. In e-commerce, <b>recommendation engines</b> suggest products based on user behavior, product similarity, context and historical interactions. <b>Chatbots and AI shopping assistants</b> answer questions, compare products, provide support and guide customers toward checkout. AI can also support <b>demand forecasting, fraud detection, dynamic merchandising and customer segmentation</b>. Value comes from <b>better relevance and faster service</b>; the risks are <b>privacy, bias, inaccurate recommendations and over-automation</b>: the same risk list resurfaces in the final comparison table."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "ai-recommendation-engines",
      "text": "AI recommendation engines"
    },
    {
      "type": "paragraph",
      "html": "A recommender estimates which products are most relevant to a particular shopper or context. The pipeline runs in five steps: <b>Collect signals</b> (clicks, searches, purchases, ratings, cart activity) → <b>Build representation</b> (user preferences + product attributes) → <b>Generate candidates</b> (collaborative, content-based or hybrid methods) → <b>Rank</b> (score items by predicted relevance) → <b>Recommend</b> (display personalized products and learn from feedback). The lecture's example: a shopper who repeatedly views running shoes and sports watches receives recommendations for related footwear, fitness wearables and accessories. The common approaches to name: <b>collaborative filtering, content-based filtering, hybrid recommenders, and deep-learning/LLM-assisted systems</b>."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "ai-chatbots-and-conversational-commerce",
      "text": "AI chatbots and conversational commerce"
    },
    {
      "type": "paragraph",
      "html": "Chatbots provide an immediate conversational interface for product discovery, support and transaction-related questions. Across the purchase journey: <b>before purchase</b>: product questions, recommendations, comparison, availability; <b>during purchase</b>: sizing/compatibility, checkout guidance, promotions, cart assistance; <b>after purchase</b>: order status, returns guidance, FAQs, human-agent handoff. The contrast that examiners like: a <b>traditional chatbot</b> uses rule-based flows and predefined answers (reliable for narrow FAQs but limited when questions vary) while an <b>AI/generative assistant</b> uses natural language and store knowledge to handle flexible questions, but requires <b>grounding, guardrails and monitoring</b>."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "blockchain-in-e-business",
      "text": "Blockchain in e-business"
    },
    {
      "type": "paragraph",
      "html": "A <b>blockchain is a distributed ledger in which validated transactions are recorded across a network, creating a tamper-evident history</b>. Its properties: a <b>shared record across participating nodes</b>; <b>cryptographic linking</b> that helps reveal unauthorized alteration; <b>improved traceability and auditability</b> in multi-party processes; and usefulness <b>where organizations need a common record without relying on one database owner</b>. The e-business applications named in the lecture: <b>supply-chain provenance, digital identity and credentials, tokenized assets, cross-organizational records, and automated agreements through smart contracts</b>."
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"flow\">\n    <div class=\"fstep\"><b>Block 1</b><small>validated transactions</small></div>\n    <div class=\"farrow\">→</div>\n    <div class=\"fstep\"><b>Block 2</b><small>cryptographically linked</small></div>\n    <div class=\"farrow\">→</div>\n    <div class=\"fstep\"><b>Block 3</b><small>alterations revealed</small></div>\n    <div class=\"farrow\">→</div>\n    <div class=\"fstep\"><b>Block 4</b><small>tamper-evident history</small></div>\n  </div>",
      "alt": "Blockchain as chained blocks: each block is cryptographically linked to the previous one, creating a tamper-evident shared record",
      "caption": "Blockchain: a shared, tamper-evident chain of validated blocks."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "smart-contracts",
      "text": "Smart contracts"
    },
    {
      "type": "paragraph",
      "html": "<b>Smart contracts are programs stored on a blockchain that execute predefined actions when specified conditions are satisfied</b>. The lecture's flow: <b>Buyer places order → Contract locks rule → Oracle/Event confirms delivery → Payment released</b>. Benefits: <b>automation of agreed rules, transparent execution history, reduced manual reconciliation, faster multi-party workflows</b>. Limitations and risks: <b>code defects can automate the wrong outcome</b>; <b>external data (\"oracles\") may be unreliable</b>; <b>legal interpretation and governance remain important</b>; and <b>public chains may raise privacy/scalability concerns</b>. Note the asymmetry: the risk list is about the machinery, not the idea."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "social-commerce",
      "text": "Social commerce"
    },
    {
      "type": "paragraph",
      "html": "<b>Social commerce integrates product discovery, interaction and purchasing into social-media or community experiences</b>. Customers discover products through posts, creators, communities, short-form video and recommendations; <b>shoppable content reduces the distance between inspiration and purchase</b>; <b>social proof</b> (comments, reviews, shares and creator demonstrations) can influence trust and product discovery; businesses can connect product catalogs to social channels and track engagement-to-purchase journeys. The risks: <b>platform dependence, misleading promotion, privacy concerns and reputational damage</b>."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "live-commerce",
      "text": "Live commerce"
    },
    {
      "type": "paragraph",
      "html": "<b>Live commerce combines real-time video, product demonstration, audience interaction and purchasing</b>. The host demonstrates products and answers questions in real time; viewers can <b>react, comment and purchase without leaving the experience</b>; urgency is created through <b>limited offers, launches or timed promotions</b>. It is useful for <b>fashion, beauty, electronics, collectibles</b> and product demonstrations generally. Success depends on <b>credible hosts, reliable streaming, inventory synchronization and transparent promotion</b>: the inventory point connects straight back to Lecture 08: a live sale that oversells stock destroys exactly the trust it was built to create."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "augmented-reality-ar-in-online-shopping",
      "text": "Augmented reality (AR) in online shopping"
    },
    {
      "type": "paragraph",
      "html": "<b>AR overlays digital content or 3D product models onto the shopper's real-world view</b>, commonly through a smartphone camera. The named use cases: <b>virtual try-on</b> (eyewear, cosmetics, clothing and accessories); <b>view-in-room</b> (furniture, décor and appliances at realistic scale: the lecture's \"virtual sofa\" example); and <b>3D product inspection</b> (rotate, zoom and examine details before purchase). Business value: <b>improves product understanding and buying confidence; may reduce uncertainty and returns</b>. Requirements: <b>accurate 3D assets, device/browser support, good UX and responsible handling of camera-related data</b>."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "cross-border-e-commerce",
      "text": "Cross-border e-commerce"
    },
    {
      "type": "paragraph",
      "html": "<b>Cross-border e-commerce occurs when buyers and sellers in different countries conduct digitally enabled commercial transactions</b>. The five challenge areas: <b>opportunities</b> (larger customer base, niche global markets, digital services, international marketplace access); <b>localization</b> (language, currency, product information, customer support, culturally appropriate marketing); <b>payments</b> (exchange rates, payment-method preferences, fraud controls, transaction costs); <b>logistics</b> (shipping cost, delivery time, tracking, returns, carrier selection); and <b>compliance</b> (customs, duties/taxes, product rules, consumer protection, privacy and intellectual-property requirements)."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "comparing-the-emerging-trends",
      "text": "Comparing the emerging trends"
    },
    {
      "type": "table",
      "head": [
        "Trend",
        "Primary value",
        "Typical use",
        "Key risk"
      ],
      "rows": [
        [
          "<b>AI</b>",
          "Personalization &amp; automation",
          "Recommendations, chatbots",
          "Bias, privacy, inaccurate output"
        ],
        [
          "<b>Blockchain</b>",
          "Shared trust &amp; traceability",
          "Provenance, multi-party records",
          "Scalability, governance"
        ],
        [
          "<b>Social / Live</b>",
          "Discovery &amp; engagement",
          "Shoppable content, streams",
          "Platform/reputation risk"
        ],
        [
          "<b>AR</b>",
          "Product visualization",
          "Virtual try-on, view-in-room",
          "Cost, device/data concerns"
        ],
        [
          "<b>Cross-border</b>",
          "Market expansion",
          "International selling",
          "Customs, payments, logistics"
        ]
      ],
      "caption": "Each trend solves a different e-business problem; many organizations combine them."
    },
    {
      "type": "example",
      "title": "Integrated scenario: the Sri Lankan fashion retailer",
      "bodyHtml": "<p>A Sri Lankan fashion retailer wants to expand online sales locally and internationally. The lecture assigns one trend to each need. For each requirement below, name the trend and its contribution:</p><ol><li>Recommend products based on browsing and answer sizing/availability questions.</li><li>Launch products through shoppable short videos and live demonstrations.</li><li>Let customers preview selected accessories or apparel digitally.</li><li>Justify provenance or shared supply-chain records where warranted.</li><li>Localize currency/content and manage payments, shipping, customs and returns.</li></ol>",
      "solutionHtml": "<ol>\n        <li><b>AI</b>: recommendation engines + chatbots/AI shopping assistants.</li>\n        <li><b>Social + Live commerce</b>: shoppable content and live demonstrations with purchasing inside the experience.</li>\n        <li><b>AR</b>: virtual try-on and 3D preview reduce product uncertainty (and may reduce returns).</li>\n        <li><b>Blockchain</b>: supply-chain provenance and cross-organizational records.</li>\n        <li><b>Cross-border e-commerce</b>: localization, payments, logistics and compliance handled per destination market.</li>\n      </ol>"
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Exam tip: value first, technology second",
      "html": "The lecture's closing filter: <b>\"technology creates value only when it improves customer experience, operational efficiency, trust, market reach, or decision quality\"</b>: is the model answer template for any \"should business X adopt trend Y?\" question. Argue from one of the five value axes, then admit the key risk from the comparison table."
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
          "title": "Drill set: trends and mechanisms",
          "html": "<ol>\n        <li>List the five steps of the AI recommendation pipeline, in order.</li>\n        <li>Name the two chatbot generations the lecture contrasts, and the extra requirements of the newer one.</li>\n        <li>What is an oracle in the smart-contract flow, and why is it a risk?</li>\n        <li>Which trend does \"virtual try-on\" belong to, and which business KPI can it improve?</li>\n        <li>List any four of the five cross-border challenge areas.</li>\n        <li>State the core idea that decides whether any trend creates value.</li>\n      </ol>\n      <p style=\"margin-top:8px\"><b>Answers:</b> 1. Collect signals → Build representation → Generate candidates → Rank → Recommend. 2. <b>Rule-based traditional chatbot vs AI/generative assistant</b>; the latter needs grounding, guardrails and monitoring. 3. The <b>external data/event source that confirms conditions</b> (e.g. delivery); it may be unreliable, so the contract may execute on bad data. 4. <b>AR</b>; reduces uncertainty and <b>returns</b>. 5. Opportunities/localization/payments/logistics/compliance: any four. 6. Technology creates value only when it improves customer experience, operational efficiency, trust, market reach, or decision quality.</p>"
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Topic 9 Quiz: Emerging Trends in E-Business",
      "count": 8,
      "quizSlug": "09-emerging-trends-in-ebusiness"
    }
  ]
};

export default chapter;
