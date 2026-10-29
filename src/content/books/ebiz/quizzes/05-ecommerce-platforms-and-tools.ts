import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "05-ecommerce-platforms-and-tools",
  "title": "Topic 5 Quiz: E-Commerce Platforms & Tools",
  "questions": [
    {
      "prompt": "1. Which of the following is a SaaS e-commerce platform?",
      "options": [
        "Magento Open Source",
        "Shopify",
        "PrestaShop",
        "OpenCart"
      ],
      "answer": 1,
      "explanation": "<b>Shopify</b> (with BigCommerce and Wix eCommerce) is a fully hosted, subscription-based SaaS platform. WooCommerce, Magento Open Source, PrestaShop and OpenCart are open-source."
    },
    {
      "prompt": "2. The phrase \"free to use\" for open-source platforms needs qualification because:",
      "options": [
        "The licence expires after one year",
        "Hosting, development and maintenance still cost money, and the business manages security updates and scaling",
        "Open-source platforms cannot accept online payments",
        "Plugins are always paid"
      ],
      "answer": 1,
      "explanation": "Open-source = free <b>licence</b> and full source-code control, but hosting, development and maintenance still cost money, and the business is responsible for security updates and scaling. Best suited for businesses with in-house technical skills wanting complete ownership."
    },
    {
      "prompt": "3. A startup with limited technical staff that must launch quickly would typically prefer:",
      "options": [
        "A custom-developed solution",
        "A SaaS platform",
        "An open-source platform hosted on their own servers",
        "Building an ERP system first"
      ],
      "answer": 1,
      "explanation": "SaaS: quick to set up with no servers to manage, the provider handles hosting/security/updates/scalability, built-in payment gateways and themes, minimal technical expertise, ideal for startups and SMEs, at the cost of limited customization."
    },
    {
      "prompt": "4. Deep integration with existing ERP, CRM or legacy systems is the signature benefit of:",
      "options": [
        "SaaS platforms",
        "Custom-developed solutions",
        "Open-source plugin ecosystems",
        "Marketplace themes"
      ],
      "answer": 1,
      "explanation": "Custom-built solutions provide complete flexibility, deep ERP/CRM integration and full ownership of code and data, but need a dedicated development team and carry the highest cost and longest time-to-market. Best for large enterprises with unique requirements."
    },
    {
      "prompt": "5. Who manages security updates and scalability on a SaaS platform?",
      "options": [
        "The merchant's in-house team",
        "A community of volunteers",
        "The SaaS provider",
        "The end customers' browsers"
      ],
      "answer": 2,
      "explanation": "On SaaS, <b>the provider handles hosting, security, updates and scalability</b>. On open-source, the business itself is responsible."
    },
    {
      "prompt": "6. \"Upfront cost vs. ongoing subscription fees\" is the lecture's description of which platform selection factor?",
      "options": [
        "Scalability",
        "Budget",
        "Time-to-market",
        "Integration needs"
      ],
      "answer": 1,
      "explanation": "Budget compares the full cost of each route. The six factors: budget, technical expertise, customization needs, time-to-market, scalability and integration needs."
    },
    {
      "prompt": "7. Which combination correctly pairs each platform category with its customization level?",
      "options": [
        "Open-source: limited; SaaS: high; Custom: moderate",
        "Open-source: high; SaaS: limited; Custom: unlimited",
        "Open-source: unlimited; SaaS: moderate; Custom: limited",
        "All three have identical customization potential"
      ],
      "answer": 1,
      "explanation": "Open-source offers high customization (you own the code), SaaS offers limited customization (the provider's rules), and custom-built offers effectively unlimited customization."
    },
    {
      "prompt": "8. According to the lecture's key takeaway, the \"right\" platform choice is determined by:",
      "options": [
        "Which platform is rated best in general by reviewers",
        "Budget, technical expertise, customization needs, timeline, scalability and integration requirements",
        "The platform with the most plugins",
        "Whichever platform competitors use"
      ],
      "answer": 1,
      "explanation": "The right choice depends on <b>budget, technical expertise, customization needs, timeline, scalability and integration requirements, not on which platform is \"best\" in general</b>."
    }
  ]
};

export default quiz;
