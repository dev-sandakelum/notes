import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "05-ecommerce-platforms-and-tools",
    "number": 5,
    "title": "E-commerce platforms & tools",
    "subtitle": "Lecture 06 · Open-source vs SaaS vs custom-built, and platform selection criteria",
    "kind": "topic",
    "words": 1580,
      "minutes": 8
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "the-three-platform-categories",
      "text": "The three platform categories"
    },
    {
      "type": "paragraph",
      "html": "Every e-commerce build starts from the same fork in the road: <b>open-source</b>, <b>SaaS</b> or <b>custom-developed</b>. The learning objectives frame the decision the way an ICT consultant would: identify the main categories, explain the key features, benefits and limitations of each, describe situations where a custom-built solution beats an off-the-shelf platform, and apply practical criteria (cost, scalability, technical skill and business needs) to select the right platform. The final takeaway of the lecture deserves emphasis from the start: <mark>the right choice depends on budget, technical expertise, customization needs, timeline, scalability and integration requirements, not on which platform is \"best\" in general</mark>."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "open-source-e-commerce-platforms",
      "text": "Open-source e-commerce platforms"
    },
    {
      "type": "paragraph",
      "html": "<b>Open-source platforms provide free, publicly available source code</b> that a business can <b>download, host and customize itself</b>. Examples include <b>WooCommerce, Magento Open Source, PrestaShop and OpenCart</b>. The word \"free\" needs qualification immediately: the licence is free, but <b>hosting, development and maintenance still cost money</b>. What you get in exchange is <b>full control over source code, design and functionality</b>, a <b>large plugin/extension ecosystem and community support</b>, and what you accept is the need for <b>in-house or hired technical expertise</b> to build and maintain it, with the business itself <b>responsible for security updates and scaling</b>. Best suited for: <b>businesses with technical skills in-house that want complete ownership and customization</b>."
    },
    {
      "type": "callout",
      "variant": "warn",
      "title": "\"Free\" is about the licence, not the bill",
      "html": "Open-source = free <b>licence</b>. You still pay for hosting, development and maintenance, and you own the security-update duty. SaaS = you pay a subscription but outsource exactly those duties. This inversion is the single most examined contrast in this lecture."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "saas-e-commerce-platforms",
      "text": "SaaS e-commerce platforms"
    },
    {
      "type": "paragraph",
      "html": "<b>Software-as-a-Service (SaaS) platforms are fully hosted and managed by a third-party provider on a subscription basis</b>: for example <b>Shopify, BigCommerce and Wix eCommerce</b>. They are <b>quick to set up</b> (no servers or infrastructure to manage); the <b>provider handles hosting, security, updates and scalability</b>; they ship with <b>built-in payment gateways, themes and an apps/add-ons marketplace</b>; and they need <b>minimal technical expertise</b> to launch and run the store. The cost of that convenience is a <b>monthly/annual subscription fee</b> and <b>more limited customization</b>: you operate inside the provider's rules. Best suited for: <b>startups and SMEs that want to launch quickly with minimal technical overhead</b>."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "custom-developed-e-commerce-solutions",
      "text": "Custom-developed e-commerce solutions"
    },
    {
      "type": "paragraph",
      "html": "A <b>custom-developed solution is built from scratch (or heavily customized) using web frameworks and original code</b>, so it can precisely match a business's unique requirements and existing systems. Benefits: <b>complete flexibility</b> (tailored features, workflows and UX), <b>deep integration with existing ERP, CRM or legacy systems</b>, and <b>full ownership of code and data with no licensing limits</b>. Costs: <b>higher development cost and longer time-to-market</b>, plus a <b>dedicated development and maintenance team</b> is needed. Best suited for: <b>large enterprises with unique, complex requirements that no existing platform can meet</b>."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "comparing-the-three-approaches",
      "text": "Comparing the three approaches"
    },
    {
      "type": "table",
      "head": [
        "Dimension",
        "Open-source",
        "SaaS",
        "Custom-built"
      ],
      "rows": [
        [
          "<b>Cost model</b>",
          "Low licence cost, DIY hosting",
          "Subscription fee, hosted for you",
          "Highest cost &amp; timeline"
        ],
        [
          "<b>Customization</b>",
          "High customization",
          "Limited customization",
          "Unlimited customization"
        ],
        [
          "<b>Technical skill</b>",
          "Needs technical skill",
          "Little technical skill needed",
          "Requires dev team"
        ],
        [
          "<b>Security &amp; updates</b>",
          "You manage security/updates",
          "Provider manages security/updates",
          "You build and run it all"
        ],
        [
          "<b>Control &amp; ownership</b>",
          "Full source-code control",
          "Provider's rules apply",
          "Full control &amp; ownership"
        ]
      ],
      "caption": "Open-source vs SaaS vs custom-built: the five-row master comparison."
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Exam tip: spot the pattern",
      "html": "Scenario questions almost always reduce to one of three archetypes: <b>\"startup, little tech staff, launch fast\" → SaaS</b>; <b>\"we have devs and want to own everything\" → open-source</b>; <b>\"enterprise, unique needs, must integrate with ERP/CRM\" → custom-built</b>. Match the phrase in the stem to the archetype and the answer follows."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "selecting-the-right-platform",
      "text": "Selecting the right platform"
    },
    {
      "type": "paragraph",
      "html": "Six decision factors govern the choice. <b>Budget</b>: upfront cost vs. ongoing subscription fees: the full cost of ownership, not just the sticker price. <b>Technical expertise</b>: the skills available in-house or via hire. <b>Customization needs</b>: how unique the required features are. <b>Time-to-market</b>: how quickly the store must launch. <b>Scalability</b>: expected growth in traffic and orders. <b>Integration needs</b>: connecting with ERP, CRM or other systems. A seventh lens from the summary is worth adding: no platform is \"best\" in general: the question is always <i>best for this business, at this size, with these constraints</i>."
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">Budget</div><div class=\"f-b\">Upfront cost vs. ongoing subscription fees.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Technical expertise</div><div class=\"f-b\">Skills available in-house or via hire.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Customization needs</div><div class=\"f-b\">How unique the required features are.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Time-to-market</div><div class=\"f-b\">How quickly the store must launch.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Scalability</div><div class=\"f-b\">Expected growth in traffic and orders.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Integration needs</div><div class=\"f-b\">Connecting with ERP, CRM or other systems.</div></div>\n  </div>",
      "alt": "Six platform selection factors: budget, technical expertise, customization needs, time-to-market, scalability, integration needs",
      "caption": "The six key decision factors for platform selection."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "sample-questions",
      "text": "Sample questions from the lecture"
    },
    {
      "type": "example",
      "title": "Sample question 1: SaaS vs custom for a startup",
      "bodyHtml": "<p><i>\"Briefly explain why a startup with limited technical staff and a need to launch quickly would typically prefer a SaaS platform over a custom-developed solution.\"</i> Draft the answer in three or four sentences.</p>",
      "solutionHtml": "<p>A SaaS platform is <b>quick to set up</b>: there are no servers or infrastructure to manage, so the store can launch in days rather than months. The <b>provider handles hosting, security, updates and scalability</b>, so a small team without dedicated technical staff does not have to recruit or train one. Built-in <b>payment gateways, themes and an app marketplace</b> cover most launch needs, and the <b>subscription cost</b> is predictable and far below the development cost of a custom build. A custom solution would deliver more flexibility, but at a higher cost and a much longer time-to-market: exactly what a resource-constrained startup cannot absorb.</p>"
    },
    {
      "type": "example",
      "title": "Sample question 2: three selection factors",
      "bodyHtml": "<p><i>\"List and briefly describe THREE factors a business should consider when choosing between an open-source, SaaS, or custom-developed e-commerce platform.\"</i> Choose three factors and define each in one sentence.</p>",
      "solutionHtml": "<ul>\n        <li><b>Budget</b>: compare the full cost of each route: low licence cost plus self-managed hosting for open-source, predictable subscription fees for SaaS, highest development cost and timeline for custom-built.</li>\n        <li><b>Technical expertise</b>: assess the skills available in-house or via hire: open-source needs technical staff, SaaS needs little, custom-built requires a dedicated development team.</li>\n        <li><b>Customization needs</b>: judge how unique the required features are: SaaS customization is limited, open-source is high, custom-built is effectively unlimited.</li>\n      </ul><p>Other valid picks: time-to-market, scalability, integration needs.</p>"
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
          "title": "Drill set: match the platform to the business",
          "html": "<ol>\n        <li>A Colombo boutique wants a store live before the Avurudu season, has no developers, and needs a payment gateway on day one. Which category?</li>\n        <li>A retailer with an in-house Laravel team wants to own all code and data, and needs deep ERP integration. Which two categories are plausible, and which fits better?</li>\n        <li>Name the four open-source platform examples from the lecture.</li>\n        <li>Who manages security updates on a SaaS platform, and who manages them on open-source?</li>\n        <li>List the six key decision factors for selecting a platform.</li>\n      </ol>\n      <p style=\"margin-top:8px\"><b>Answers:</b> 1. <b>SaaS</b> (quick setup, minimal technical overhead, built-in payment gateways). 2. <b>Open-source and custom-built</b>; with ERP integration plus full ownership, <b>custom-built</b> fits best (deep integration with existing ERP/CRM is its defining strength). 3. <b>WooCommerce, Magento Open Source, PrestaShop, OpenCart</b>. 4. SaaS: <b>the provider</b>; open-source: <b>the business</b>. 5. Budget, technical expertise, customization needs, time-to-market, scalability, integration needs.</p>"
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Topic 5 Quiz: E-Commerce Platforms & Tools",
      "count": 8,
      "quizSlug": "05-ecommerce-platforms-and-tools"
    }
  ]
};

export default chapter;
