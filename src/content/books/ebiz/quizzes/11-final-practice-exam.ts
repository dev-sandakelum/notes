import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "11-final-practice-exam",
  "title": "Final practice exam",
  "questions": [
    {
      "prompt": "1. \"Substituting information for physical business processes over open networks\" defines:",
      "options": [
        "E-commerce",
        "E-business",
        "M-commerce",
        "E-procurement"
      ],
      "answer": 1,
      "explanation": "E-business is the superset: doing business electronically, substituting information for physical processes. E-commerce is the buying/selling subset."
    },
    {
      "prompt": "2. Distance learning, medical appointments and payment of health services are examples of which e-commerce category?",
      "options": [
        "B2A",
        "C2A",
        "C2C",
        "B2C"
      ],
      "answer": 1,
      "explanation": "<b>C2A</b>: all electronic transactions between individuals and public administration. B2A is companies ↔ public administration (social security, employment, legal documents)."
    },
    {
      "prompt": "3. Which pairing of milestone and date is WRONG?",
      "options": [
        "EDI introduced: 1975",
        "World Wide Web launched: 1991",
        "IBM popularizes \"e-business\": 1997",
        "First secure online credit card transaction: 1999"
      ],
      "answer": 3,
      "explanation": "The first secure online credit card transaction was in <b>1994</b>, not 1999, it happened three years after the web launch (1991) and three years before IBM's term (1997)."
    },
    {
      "prompt": "4. A platform that facilitates interactions between two or more distinct but interdependent groups of users is the definition of a:",
      "options": [
        "Subscription model",
        "Platform-based business model",
        "Freemium model",
        "On-demand model"
      ],
      "answer": 1,
      "explanation": "Platform-based models (Daraz, Uber, Airbnb) facilitate interactions between interdependent groups. Subscription = recurring fee; freemium = free basic + paid advanced; on-demand = when requested."
    },
    {
      "prompt": "5. TCP's contribution to internet communication is:",
      "options": [
        "Addressing and routing data via IP addresses",
        "Reliable delivery of segments that arrive correctly and in the proper order",
        "Translating domain names to IP addresses",
        "Encrypting data with TLS"
      ],
      "answer": 1,
      "explanation": "TCP divides data into segments and guarantees correct, ordered arrival. IP addresses and routes; DNS resolves names; TLS is what HTTPS adds."
    },
    {
      "prompt": "6. Product images served from a nearby edge location while orders are processed by the application server illustrates:",
      "options": [
        "Vertical scaling",
        "A CDN handling static content while transactional work stays on the origin",
        "Client-side validation",
        "Dropshipping"
      ],
      "answer": 1,
      "explanation": "CDNs distribute static content (images, CSS, JS, video) through geographically distributed edge locations: cache the static, never the transactional."
    },
    {
      "prompt": "7. Which search feature returns results for \"sneekers\" when the shopper meant \"sneakers\"?",
      "options": [
        "Autocomplete",
        "Relevance ranking",
        "Typo tolerance",
        "Applied filter chips"
      ],
      "answer": 2,
      "explanation": "Typo tolerance (prefix + fuzzy matching) keeps shoppers in flow despite misspellings."
    },
    {
      "prompt": "8. WooCommerce, Magento Open Source, PrestaShop and OpenCart are all examples of:",
      "options": [
        "SaaS platforms",
        "Open-source e-commerce platforms",
        "Payment gateways",
        "Warehouse management systems"
      ],
      "answer": 1,
      "explanation": "All four are open-source: free public source code, self-hosted, high customization, business-managed security, suited to businesses with in-house technical skill."
    },
    {
      "prompt": "9. SEO differs from SEM in that SEO:",
      "options": [
        "Buys sponsored placements for selected queries",
        "Builds organic visibility in unpaid search results over time",
        "Measures success only in ROAS",
        "Requires bidding strategies"
      ],
      "answer": 1,
      "explanation": "SEO = organic, longer-term asset (on-page, technical, off-page). SEM = paid search with budgets/bids and rapid activation. Use together: SEM tests demand while SEO compounds."
    },
    {
      "prompt": "10. In affiliate marketing, attribution of clicks, leads or sales to the affiliate is achieved through:",
      "options": [
        "Follower counts",
        "Unique links, codes or tracking identifiers",
        "Hashtag sentiment analysis",
        "Invoice reconciliation only"
      ],
      "answer": 1,
      "explanation": "Unique links/codes/tracking identifiers attribute actions to the affiliate, enabling performance-based compensation (cost per sale, cost per lead)."
    },
    {
      "prompt": "11. Collect Signals → Build Insight → Select Experience → Deliver → Measure is the process of:",
      "options": [
        "Personalization",
        "Order fulfilment",
        "Blockchain validation",
        "Platform selection"
      ],
      "answer": 0,
      "explanation": "The personalization process: browsing/purchase signals → insight → relevant recommendation → website/email delivery → conversion and engagement measurement."
    },
    {
      "prompt": "12. Operational CRM versus analytical CRM: analytical CRM is the one that:",
      "options": [
        "Supports sales, marketing and service activities",
        "Uses customer data to generate insights for decisions",
        "Maintains contact history and campaign responses",
        "Sends abandoned-cart reminders"
      ],
      "answer": 1,
      "explanation": "Analytical CRM generates decision-driving insights from data; operational CRM runs the sales/marketing/service activities."
    },
    {
      "prompt": "13. A one-person reseller whose orders are shipped by the manufacturer directly to customers, with no stock held, is using:",
      "options": [
        "In-house fulfilment",
        "3PL",
        "Dropshipping",
        "Fulfilment centers"
      ],
      "answer": 2,
      "explanation": "Dropshipping: supplier ships directly, retailer never holds stock: low start-up cost, thinner margins, less fulfilment control."
    },
    {
      "prompt": "14. 'A' items in ABC analysis are:",
      "options": [
        "Low-value, high-quantity items needing loose control",
        "High-value, low-quantity items needing close control",
        "Items that never sell",
        "Items held only as safety stock"
      ],
      "answer": 1,
      "explanation": "ABC classifies inventory by value and importance: 'A' = high-value/low-quantity (close control); 'C' = low-value/high-quantity."
    },
    {
      "prompt": "15. Fraudulent messages directing a customer to a lookalike login page to steal credentials constitute:",
      "options": [
        "A DDoS attack",
        "Phishing",
        "Card-not-present fraud",
        "Refund abuse"
      ],
      "answer": 1,
      "explanation": "Phishing/social engineering deceives users into sharing information. Warning signs: unexpected urgency, suspicious sender, unusual URL, requests for passwords/OTP."
    },
    {
      "prompt": "16. Which NIST CSF 2.0 function covers \"define security policies, responsibilities and legal obligations\"?",
      "options": [
        "Identify",
        "Govern",
        "Protect",
        "Recover"
      ],
      "answer": 1,
      "explanation": "<b>Govern</b> establishes cybersecurity strategy and policies. Identify catalogs assets/risks; Protect implements safeguards; Recover restores services."
    },
    {
      "prompt": "17. Under privacy and data-protection principles, collecting only information necessary for a defined business purpose is called:",
      "options": [
        "Data minimization",
        "Tokenization",
        "Data localization",
        "Purpose limitation by encryption"
      ],
      "answer": 0,
      "explanation": "Data minimization. Its siblings: transparency and lawful purpose, security and retention, individual rights and accountability."
    },
    {
      "prompt": "18. A smart contract releases payment automatically when an oracle confirms delivery. A named limitation of this arrangement is that:",
      "options": [
        "Smart contracts cannot hold funds",
        "External data (oracles) may be unreliable, so the contract may execute on bad data",
        "Buyers cannot place orders online",
        "Blockchains cannot store programs"
      ],
      "answer": 1,
      "explanation": "Named limitations: code defects automate wrong outcomes, <b>oracle unreliability</b>, legal interpretation/governance, and privacy/scalability concerns on public chains."
    },
    {
      "prompt": "19. A retailer expands internationally but its prices, content and support still target only its home market. Which cross-border challenge area is being neglected?",
      "options": [
        "Localization",
        "Compliance",
        "Logistics",
        "Payments"
      ],
      "answer": 0,
      "explanation": "Localization covers language, currency, product information, customer support and culturally appropriate marketing."
    },
    {
      "prompt": "20. Live commerce success depends on all of the following EXCEPT:",
      "options": [
        "Credible hosts",
        "Reliable streaming",
        "Inventory synchronization",
        "Blocking purchases until the stream ends"
      ],
      "answer": 3,
      "explanation": "Live commerce lets viewers <b>purchase without leaving the experience</b>. Success requires credible hosts, reliable streaming, inventory synchronization and transparent promotion."
    }
  ]
};

export default quiz;
