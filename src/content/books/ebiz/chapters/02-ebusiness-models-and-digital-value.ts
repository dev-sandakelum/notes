import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "02-ebusiness-models-and-digital-value",
    "number": 2,
    "title": "E-business models & digital value creation",
    "subtitle": "Lecture 02 · Platform, subscription, freemium, on-demand & marketplace models, value chains and network effects",
    "kind": "topic",
    "words": 1980,
    "minutes": 10
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "what-is-a-business-model",
      "text": "What is a business model?"
    },
    {
      "type": "paragraph",
      "html": "A <b>business model</b> is a company's <b>core strategy for how it creates, delivers, and captures value</b>. It outlines <b>what product or service is sold</b>, <b>who the target customers are</b>, <b>how the company reaches them</b>, and <b>the plan to cover costs and make a profit</b>. The lecture's reference example is the traditional coffee shop: the product is coffee and snacks, the customers are local passers-by, the reach is a physical location, and the profit plan is margin on each cup. Keep this four-part skeleton (what / who / how / profit) in mind: it lets you deconstruct any business you are shown in an exam."
    },
    {
      "type": "paragraph",
      "html": "A <b>digital business model</b> uses <b>digital technologies to create, deliver, and/or capture value</b>. Examples include e-commerce, online marketplaces, digital subscriptions, mobile applications, cloud services, digital content and online platforms. Crucially, a digital business does <b>not</b> require the product itself to be digital: <mark>Daraz sells physical products through a digital platform, Uber delivers physical transportation through a digital platform, and Airbnb offers physical accommodation through a digital platform</mark>. The digital component changes <i>how value is created and delivered</i>, not necessarily what the product is made of."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "traditional-vs-digital-business-models",
      "text": "Traditional vs digital business models"
    },
    {
      "type": "paragraph",
      "html": "The lecture contrasts the two models across ten dimensions. This table is highly examinable in condensed form: be able to reproduce at least five rows and to classify a described business along any dimension."
    },
    {
      "type": "table",
      "head": [
        "Dimension",
        "Traditional model",
        "Digital model"
      ],
      "rows": [
        [
          "<b>Customer interaction</b>",
          "Mainly physical",
          "Mainly digital / omnichannel"
        ],
        [
          "<b>Market reach</b>",
          "Often geographically limited",
          "Potentially global"
        ],
        [
          "<b>Distribution</b>",
          "Physical channels",
          "Digital + physical/logistics"
        ],
        [
          "<b>Operating hours</b>",
          "Often limited",
          "Often 24/7"
        ],
        [
          "<b>Customer data</b>",
          "Relatively limited",
          "Large volumes of behavioral data"
        ],
        [
          "<b>Personalization</b>",
          "Limited",
          "Highly personalized"
        ],
        [
          "<b>Scalability</b>",
          "Often requires physical capacity",
          "Often highly scalable"
        ],
        [
          "<b>Intermediaries</b>",
          "Traditional distributors/retailers",
          "Digital platforms/marketplaces"
        ],
        [
          "<b>Revenue models</b>",
          "Sales, wholesale, retail",
          "Subscription, commission, advertising, freemium, etc."
        ],
        [
          "<b>Customer feedback</b>",
          "Relatively slow",
          "Often real-time"
        ]
      ],
      "caption": "Traditional vs digital business models across ten dimensions."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "what-is-an-e-business-model",
      "text": "What is an e-business model?"
    },
    {
      "type": "paragraph",
      "html": "An <b>e-business model</b> describes how an organization <b>uses electronic networks and digital technologies to conduct business activities and create value</b>. E-business can include buying and selling, marketing, customer service, procurement, supply-chain management, electronic payments, partner collaboration and business information exchange. Note how much broader this is than the transaction focus of e-commerce: it mirrors the superset relationship from Chapter 01. The same six categories (B2B, B2C, C2C, C2B, B2A, C2A) introduced for e-commerce apply to e-business models as well."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "digital-business-model-patterns",
      "text": "Digital business model patterns"
    },
    {
      "type": "paragraph",
      "html": "Beyond the six transaction categories, the lecture introduces five recurring <b>digital model patterns</b>. Each pattern has a one-line definition plus named examples: learn them as pairs."
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">Platform-based</div><div class=\"f-b\">A digital service that <b>facilitates interactions between two or more distinct but interdependent groups of users</b>. Examples: <b>Daraz, Uber, Airbnb</b>.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Subscription</div><div class=\"f-b\">Charges customers a <b>recurring fee for continued access</b> to a product or service. Examples: streaming services, cloud services, online learning platforms, digital newspapers.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Freemium</div><div class=\"f-b\">Customers receive a <b>basic version for free</b>, while <b>advanced features require payment</b>. Examples: software applications.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">On-demand</div><div class=\"f-b\">Provides a product or service <b>when the customer requests it</b>. Examples: ride-hailing, food delivery, on-demand home services, cloud computing resources.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Marketplace</div><div class=\"f-b\">Creates a digital environment where <b>multiple buyers and sellers interact</b>. Example: <b>Daraz</b>. Revenue from commission, transaction fees, seller fees, advertising and premium seller services.</div></div>\n  </div>",
      "alt": "Five digital business model pattern cards: platform, subscription, freemium, on-demand, marketplace",
      "caption": "The five digital model patterns: note that Daraz is both platform and marketplace."
    },
    {
      "type": "paragraph",
      "html": "For the marketplace pattern, be precise about the <b>five revenue sources</b>: <b>commission</b>, <b>transaction fees</b>, <b>seller fees</b>, <b>advertising</b> and <b>premium seller services</b>. A question like \"which of the following is NOT a marketplace revenue source\" usually sneaks in \"delivery cost\" or \"government subsidy\" as the odd one out."
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Exam tip: platform vs marketplace",
      "html": "A <b>platform</b> is defined by facilitation between interdependent user groups (a structural idea); a <b>marketplace</b> is defined by many buyers and sellers transacting in one digital environment (a commercial instance). Daraz satisfies both, which is why the lecture uses it as the example for the two patterns separately. If forced to choose the more general concept, pick platform."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "digital-value-creation",
      "text": "Digital value creation"
    },
    {
      "type": "paragraph",
      "html": "<b>Value</b> is the benefit that a customer receives from a product, service or experience <b>relative to what they give up to obtain it</b>: value is always a ratio, not an absolute. Digital businesses create value through <b>information</b>, <b>convenience</b>, <b>personalization</b>, <b>speed</b>, and through <b>connectivity, automation, data analytics and network effects</b>. When you analyze a digital business, tie each of these levers to something concrete: e.g. price-comparison information, one-tap ordering convenience, or recommendations generated from analytics."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "the-digital-value-chain",
      "text": "The digital value chain"
    },
    {
      "type": "paragraph",
      "html": "A <b>value chain</b> represents the activities through which an organization creates value for customers. The digital twist is the <b>feedback loop</b>: <mark>customer interactions generate data, which can be analyzed to improve products and services, and data generated by customers becomes an input into future value creation</mark>. The lecture's chain runs from supplier, through a digital inventory system and online marketplace (with personalized recommendations), into an online order, digital payment, logistics/delivery, and finally the customer: whose ratings, reviews and customer data flow back through analytics into improved recommendations."
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"flow\">\n    <div class=\"fstep\"><b>Supplier</b><small>goods enter the chain</small></div>\n    <div class=\"farrow\">→</div>\n    <div class=\"fstep\"><b>Digital inventory system</b><small>stock recorded digitally</small></div>\n    <div class=\"farrow\">→</div>\n    <div class=\"fstep\"><b>Online marketplace</b><small>personalized recommendations</small></div>\n    <div class=\"farrow\">→</div>\n    <div class=\"fstep\"><b>Online order</b><small>customer commits</small></div>\n    <div class=\"farrow\">→</div>\n    <div class=\"fstep\"><b>Digital payment</b><small>funds captured</small></div>\n    <div class=\"farrow\">→</div>\n    <div class=\"fstep\"><b>Logistics / delivery</b><small>fulfilment</small></div>\n    <div class=\"farrow\">→</div>\n    <div class=\"fstep\"><b>Customer</b><small>value received</small></div>\n    <div class=\"farrow\">↻</div>\n    <div class=\"fstep\"><b>Ratings &amp; reviews → customer data → analytics → improved recommendations</b><small>data feeds the next cycle</small></div>\n  </div>",
      "alt": "Digital value chain: supplier → digital inventory → online marketplace → order → payment → logistics → customer, with ratings, data and analytics looping back into improved recommendations",
      "caption": "The digital value chain: the loop back from customer data to improved recommendations is what makes it digital."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "network-effects",
      "text": "Network effects"
    },
    {
      "type": "paragraph",
      "html": "A <b>network effect</b> occurs when <b>the value or usefulness of a product or service changes as the number of users changes</b>. The lecture distinguishes two directions. A <b>direct network effect</b> occurs when the value to a user increases as more users <i>of the same type</i> join the network: think of a messaging app: more friends on it makes it more useful to you. An <b>indirect network effect</b> occurs when the value for <i>one group</i> increases because the number of users in <i>another group</i> increases: think of a marketplace: more buyers attracts more sellers, and more sellers in turn benefits buyers."
    },
    {
      "type": "table",
      "head": [
        "Concept",
        "Trigger",
        "Who gains",
        "Example"
      ],
      "rows": [
        [
          "<b>Direct network effect</b>",
          "More users of the <b>same type</b> join",
          "Each existing user of that type",
          "Messaging/social app: more friends → more useful"
        ],
        [
          "<b>Indirect network effect</b>",
          "More users in <b>another group</b>",
          "A different group on the other side",
          "Marketplace: more buyers → more sellers join → more choice for buyers"
        ]
      ],
      "caption": "Direct vs indirect network effects."
    },
    {
      "type": "example",
      "title": "Worked example: name the model and the effect",
      "bodyHtml": "<p>A Sri Lankan app lets households order cleaning services within the hour; customers pay per visit, and cleaners are billed a percentage of each completed job. Separately, a note-taking tool is free for up to 10 notes per month, but unlimited notes plus PDF export cost a monthly fee.</p><ol><li>Which digital model pattern is the cleaning app? Which second pattern does its revenue structure also show?</li><li>Which pattern is the note-taking tool?</li><li>As more cleaners join the app, households find it easier to get same-day service. Which network effect is this?</li></ol>",
      "solutionHtml": "<ul>\n        <li><b>1.</b> The cleaning app is an <b>on-demand</b> model (service when requested) operating as a <b>platform/marketplace</b>: the percentage cut on jobs is marketplace-style <b>commission</b> revenue.</li>\n        <li><b>2.</b> The note-taking tool is <b>freemium</b>: free basic version, paid advanced features.</li>\n        <li><b>3.</b> An <b>indirect network effect</b>: value for the household group increases because the number of users in the cleaner group increased.</li>\n      </ul>"
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "Memory hook for the five patterns",
      "html": "<b>P-S-F-O-M</b>: <b>P</b>latform (Daraz/Uber/Airbnb), <b>S</b>ubscription (Netflix/cloud), <b>F</b>reemium (free app + paid pro), <b>O</b>n-demand (ride-hailing/food delivery), <b>M</b>arketplace (many buyers × many sellers)."
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
          "title": "Drill set: models, chains and effects",
          "html": "<ol>\n        <li>State the four things a business model outlines.</li>\n        <li>Daraz, Uber and Airbnb all sell physical outcomes. Why are they still digital business models?</li>\n        <li>List the five marketplace revenue sources.</li>\n        <li>In the digital value chain, what re-enters the chain after the customer, and what does it produce?</li>\n      </ol>\n      <p style=\"margin-top:8px\"><b>Answers:</b> 1. What is sold, who the target customers are, how the company reaches them, and the plan to cover costs and make a profit. 2. Because the <b>digital component changes how value is created and delivered</b>: the product need not be digital. 3. Commission, transaction fees, seller fees, advertising, premium seller services. 4. Ratings &amp; reviews / customer data → analytics → <b>improved recommendations</b> (an input into future value creation).</p>"
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Topic 2 Quiz: E-Business Models & Digital Value Creation",
      "count": 8,
      "quizSlug": "02-ebusiness-models-and-digital-value"
    }
  ]
};

export default chapter;
