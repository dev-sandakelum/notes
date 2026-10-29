import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "08-ebusiness-security-and-legal-aspects",
    "number": 8,
    "title": "E-business security & legal aspects",
    "subtitle": "Lecture 09 · Threats, CIA triad, defence in depth, NIST CSF, ISO 27001, PCI DSS, PDPA and GDPR",
    "kind": "topic",
    "words": 2560,
    "minutes": 13
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "why-security-matters-in-e-business",
      "text": "Why security matters in e-business"
    },
    {
      "type": "paragraph",
      "html": "Security is a business function, not just a technical one. Four reasons from the lecture: <b>customer confidence</b> (buyers expect secure payments, private accounts and reliable order fulfilment); <b>business continuity</b> (service disruption can prevent browsing, checkout and order processing); <b>financial and reputational impact</b> (fraud, breach response and loss of trust can damage the business); and <b>legal responsibility</b> (organizations must consider privacy, consumer and payment-related obligations). The learning outcomes organize the whole lecture into four moves: <b>recognize key threats, recommend safeguards, use frameworks, and assess compliance</b>."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "the-e-commerce-attack-surface",
      "text": "The e-commerce attack surface"
    },
    {
      "type": "paragraph",
      "html": "Multiple connected components create multiple opportunities for failure. The attack surface has four quadrants: <b>customer touchpoints</b> (browsers, mobile apps, emails, SMS messages and login flows); <b>application services</b> (product catalogue, shopping cart, checkout, APIs and admin portal); <b>infrastructure and suppliers</b> (cloud hosting, DNS, payment gateway, logistics and third-party scripts); and <b>data assets</b> (customer identity, addresses, orders, tokens and transaction records). Mapping a threat to the quadrant it attacks is a reliable exam skill: phishing hits customer touchpoints; DDoS hits infrastructure; insecure APIs hit application services."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "security-objectives-the-cia-triad",
      "text": "Security objectives: the CIA triad"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">C · Confidentiality</div><div class=\"f-b\">Prevent <b>unauthorized access</b> to customer information and payment-related data.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">I · Integrity</div><div class=\"f-b\">Ensure order totals, inventory, product prices and transactions are <b>accurate</b>.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">A · Availability</div><div class=\"f-b\">Keep browsing, login, payment and fulfilment services <b>accessible</b>.</div></div>\n  </div>",
      "alt": "CIA triad: confidentiality prevents unauthorized access, integrity keeps data accurate, availability keeps services accessible",
      "caption": "The CIA triad: plus authentication, authorization, accountability and non-repudiation as additional assurance."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "common-security-risks",
      "text": "Common security risks"
    },
    {
      "type": "paragraph",
      "html": "Four headline risks: <b>phishing and social engineering</b> (deceptive messages or websites trick customers or employees into sharing information); <b>distributed denial of service</b> (traffic overwhelms online services, making them slow or inaccessible); <b>payment and transaction fraud</b> (stolen credentials, fraudulent orders and chargeback abuse create losses); and <b>application and data attacks</b> (weak access controls, insecure APIs or vulnerable software expose records)."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "phishing-in-detail",
      "text": "Phishing in detail"
    },
    {
      "type": "paragraph",
      "html": "The lecture's worked example: <mark>a fake delivery update directs a customer to a lookalike login page</mark>. The <b>typical warning signs</b> are unexpected urgency, a suspicious sender, an unusual URL, or a request for passwords/OTP. The <b>business consequences</b>: account compromise, fraudulent orders and customer mistrust. The <b>customer safeguards</b>: navigate using trusted bookmarks/apps, verify the domain, contact support. The <b>merchant safeguards</b>: use MFA, verified communication channels, awareness training and monitoring."
    },
    {
      "type": "example",
      "title": "Class discussion case: the suspicious order message",
      "bodyHtml": "<p>A customer receives <i>\"Your order is blocked. Verify your payment now.\"</i> The message links to an unfamiliar domain and asks for card details and an OTP. Which signals suggest the message is fraudulent, and what is the safe response: for the customer and for the business?</p>",
      "solutionHtml": "<ul>\n        <li><b>Red flags:</b> unexpected request, manufactured urgency, unfamiliar domain, and collection of sensitive data (card + OTP): the four classic phishing markers.</li>\n        <li><b>Safe customer response:</b> avoid the message link; open the store directly (bookmark/app) and check the real order status.</li>\n        <li><b>Business response:</b> provide reporting channels, warn affected users, and investigate the impersonation.</li>\n      </ul>"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "ddos-and-fraud",
      "text": "DDoS and fraud"
    },
    {
      "type": "paragraph",
      "html": "A <b>denial-of-service event targets access rather than necessarily stealing data</b>: large volumes of requests exhaust network, server or application capacity, and search, checkout and payment sessions may fail <b>during peak sales</b>. Defensive layers: <b>CDN, DDoS protection, rate limiting, caching and resilient hosting</b>; response readiness means monitoring traffic anomalies and coordinating with hosting/CDN providers."
    },
    {
      "type": "paragraph",
      "html": "Fraud in e-commerce takes three named forms, and fraud controls should protect <b>both buyers and legitimate merchants</b>: <b>account takeover</b> (attackers use compromised credentials to access customer accounts); <b>card-not-present fraud</b> (unauthorized payment details are used for online purchases); and <b>refund and return abuse</b> (manipulated refund claims cause financial loss). The <b>risk controls</b>: multi-factor authentication, payment-provider risk checks, transaction alerts and manual review."
    },
    {
      "type": "callout",
      "variant": "warn",
      "title": "Other important threats",
      "html": "<b>Insecure access control</b>: a user might see another customer's order if authorization is weak. <b>Injection and unsafe input</b>: untrusted input can affect backend queries or commands. <b>Malicious third-party scripts</b>: checkout scripts can threaten payment-page integrity. <b>Unpatched software and secrets</b>: outdated components and exposed credentials increase breach risk."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "security-controls-layer-by-layer",
      "text": "Security controls layer by layer"
    },
    {
      "type": "paragraph",
      "html": "<b>Client-side measures</b> (customer device and browser): secure connections over HTTPS/TLS; safe authentication with strong unique passwords, MFA and secure session handling; browser/application hygiene (keep browsers and mobile apps updated, minimize risky extensions); and safe user behavior (verify website addresses, never enter credentials through unexpected links)."
    },
    {
      "type": "paragraph",
      "html": "<b>Browser-side security in web design</b>: developers must assume browser content and user input can be manipulated: a <b>Content Security Policy (CSP)</b> restricts where scripts and other content can load from; <b>secure cookies</b> use Secure, HttpOnly and appropriate SameSite settings; <b>input/output handling</b> validates input on the server and encodes untrusted content when displayed; and <b>payment-page protection</b> inventories and monitors scripts that can affect checkout."
    },
    {
      "type": "paragraph",
      "html": "<b>Server-side measures</b>: the server must enforce security even when client-side checks fail: <b>identity and access</b> (server-side authorization, least privilege, MFA for administrators); <b>application security</b> (validate inputs, use parameterized database queries, protect APIs); <b>infrastructure security</b> (patch systems, isolate services, protect secrets, encrypt sensitive data); and <b>operations</b> (centralized logging, monitoring, backups and tested incident-response plans)."
    },
    {
      "type": "table",
      "head": [
        "",
        "Client-side focus",
        "Server-side focus"
      ],
      "rows": [
        [
          "<b>Protects</b>",
          "The user interaction, browser execution and session experience",
          "Permissions, business rules, data access and transaction integrity"
        ],
        [
          "<b>Example: price tampering</b>",
          "A browser may display a total",
          "But the server must recalculate it"
        ],
        [
          "<b>Design principle</b>",
          "Defence in depth across customer, application, network and operations",
          "Same: neither can replace the other"
        ]
      ],
      "caption": "Client-side vs server-side security: both are necessary."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "secure-checkout-architecture",
      "text": "Secure checkout architecture"
    },
    {
      "type": "paragraph",
      "html": "The illustrative flow for a safer online purchase has four steps: <b>1. Customer and browser</b>: the customer signs in securely and sends order details over HTTPS. <b>2. E-commerce backend</b>: the server validates cart, calculates totals and creates a payment request. <b>3. Payment service provider</b>: use an appropriate hosted/outsourced payment flow where possible. <b>4. Confirmation and records</b>: verify provider responses server-side and update the order securely. The same journey view adds controls per stage: registration/login (MFA, account recovery controls, login anomaly detection); product browsing and cart (secure APIs, correct access control, trusted price calculations); checkout and payment (HTTPS, payment-provider integration, transaction monitoring); after-sales and support (protected customer records, verified refunds, restricted staff access)."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "cybersecurity-frameworks",
      "text": "Cybersecurity frameworks"
    },
    {
      "type": "paragraph",
      "html": "A <b>cybersecurity framework is a structured set of guidelines, best practices, standards, and processes that helps an organization identify and manage cybersecurity risks</b> and protect its information systems, networks, applications and data. Its business value is connecting security investments to organizational risk and objectives. The named examples: <b>NIST CSF 2.0, ISO/IEC 27001 and payment-specific PCI DSS</b>."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "nist-cybersecurity-framework-2-0",
      "text": "NIST Cybersecurity Framework 2.0"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"flow\">\n    <div class=\"fstep\"><b>GOVERN</b><small>set risk policy &amp; responsibilities</small></div>\n    <div class=\"farrow\">+</div>\n    <div class=\"fstep\"><b>IDENTIFY</b><small>understand assets &amp; exposure</small></div>\n    <div class=\"farrow\">→</div>\n    <div class=\"fstep\"><b>PROTECT</b><small>MFA, access control, secure configurations</small></div>\n    <div class=\"farrow\">→</div>\n    <div class=\"fstep\"><b>DETECT</b><small>recognize suspicious activity</small></div>\n    <div class=\"farrow\">+</div>\n    <div class=\"fstep\"><b>RESPOND</b><small>manage incidents effectively</small></div>\n    <div class=\"farrow\">→</div>\n    <div class=\"fstep\"><b>RECOVER</b><small>restore services, learn, improve resilience</small></div>\n  </div>",
      "alt": "NIST CSF 2.0 six functions: Govern, Identify, Protect, Detect, Respond, Recover: supporting continuous risk management",
      "caption": "NIST CSF 2.0: six functions supporting continuous risk management."
    },
    {
      "type": "table",
      "head": [
        "NIST function",
        "Main objective",
        "Application to an online store"
      ],
      "rows": [
        [
          "<b>1. Govern</b>",
          "Establish cybersecurity strategy and policies",
          "Define security policies, responsibilities, and legal obligations"
        ],
        [
          "<b>2. Identify</b>",
          "Understand assets and cybersecurity risks",
          "Identify customer databases, payment systems, threats, and vulnerabilities"
        ],
        [
          "<b>3. Protect</b>",
          "Implement safeguards against threats",
          "Use MFA, HTTPS, access controls, encryption, and security updates"
        ],
        [
          "<b>4. Detect</b>",
          "Identify suspicious activities",
          "Monitor unusual traffic, login attempts, and payment transactions"
        ],
        [
          "<b>5. Respond</b>",
          "Manage and contain incidents",
          "Investigate incidents, restrict compromised accounts, and notify stakeholders"
        ],
        [
          "<b>6. Recover</b>",
          "Restore services and improve resilience",
          "Restore systems, verify security, resume operations, and improve controls"
        ]
      ],
      "caption": "Applying NIST CSF to an online store (the lecture's ABC Online Store table)."
    },
    {
      "type": "paragraph",
      "html": "<b>ISO/IEC 27001</b> is an international standard for <b>establishing, implementing, maintaining, and continually improving an Information Security Management System (ISMS)</b>: an ISMS being a structured approach that helps an organization manage information-security risks and protect important information. <b>PCI DSS</b> helps organizations <b>protect payment information such as cardholder data</b> by requiring appropriate technical and organizational security controls. The lecture's grounding example: when a customer purchases a product from an online store using a credit or debit card, PCI DSS helps ensure that the systems involved in handling that card information are appropriately secured."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "privacy-and-data-protection",
      "text": "Privacy and data protection"
    },
    {
      "type": "paragraph",
      "html": "An online store collects far more than names and email addresses: <b>identity and contact</b> data (name, address, telephone, email, account identifiers) and <b>transaction and behavior</b> data (orders, browsing activity, preferences, support interactions). The <b>data lifecycle</b> runs <b>Collect → use → store → share → retain → delete</b>, and the risk questions to ask of every field: <i>Why is each field needed? Who can access it? When should it be removed?</i>"
    },
    {
      "type": "table",
      "head": [
        "Principle",
        "What it requires"
      ],
      "rows": [
        [
          "<b>Transparency and lawful purpose</b>",
          "Tell people what data is collected and why it is processed"
        ],
        [
          "<b>Data minimization</b>",
          "Collect only information necessary for a defined business purpose"
        ],
        [
          "<b>Security and retention</b>",
          "Protect records and avoid keeping them longer than needed"
        ],
        [
          "<b>Individual rights and accountability</b>",
          "Enable applicable rights and document compliance decisions"
        ]
      ],
      "caption": "The four privacy and data-protection principles: good data handling is both a legal and a design concern."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "sri-lankan-and-global-legal-context",
      "text": "Sri Lankan and global legal context"
    },
    {
      "type": "paragraph",
      "html": "For Sri Lanka: the <b>Personal Data Protection Act (PDPA) No. 9 of 2022</b> is the core data-protection law; the <b>Personal Data Protection (Amendment) Act No. 22 of 2025</b> modified the principal Act; check the <b>Data Protection Authority</b> (dpa.gov.lk) for commencement notices and guidance; and other relevant areas include <b>electronic transactions, computer crime and consumer protection</b>. Globally: the <b>EU General Data Protection Regulation (GDPR)</b> governs covered personal-data processing <b>including some non-EU businesses</b>; its core principles are <b>lawfulness, fairness, transparency, purpose limitation and minimization</b>; operational obligations include privacy notices, security, lawful processing and applicable data-subject rights; and cross-border caution is needed because jurisdiction and transfer rules depend on business activity and data flows."
    },
    {
      "type": "example",
      "title": "Privacy by design: practical example",
      "bodyHtml": "<p>You are creating a checkout form for a Sri Lankan online retailer. Apply privacy-by-design thinking at each stage:</p><ol><li>Before collecting data</li><li>During processing</li><li>After fulfilment</li><li>When using third parties</li></ol>",
      "solutionHtml": "<ul>\n        <li><b>1.</b> Specify why each customer field is necessary for the order (collect only what the delivery and payment genuinely require).</li>\n        <li><b>2.</b> Limit staff access; use secure payment services and HTTPS.</li>\n        <li><b>3.</b> Apply retention rules; support correction/deletion requests when applicable.</li>\n        <li><b>4.</b> Review contracts, data sharing, security and relevant transfer requirements.</li>\n      </ul>"
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Legal compliance checklist for an online store",
      "html": "<b>Customer-facing documents:</b> clear privacy notice, terms, refund/return and contact information. <b>Data handling:</b> lawful purposes, access controls, retention, breach procedures and vendor review. <b>Payment and consumer safeguards:</b> secure checkout, accurate pricing, transparent charges and dispute processes. <b>Ongoing governance:</b> track legal updates, train staff and document accountability. (An illustrative governance checklist: not a substitute for legal advice.)"
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
          "title": "Drill set: threats, frameworks and law",
          "html": "<ol>\n        <li>An attacker floods a checkout endpoint with traffic during a flash sale. Which threat, which CIA element, and which defensive layer?</li>\n        <li>Classify into the CIA triad: (a) order totals must be accurate, (b) card data unreadable to outsiders, (c) checkout stays up.</li>\n        <li>List the six NIST CSF 2.0 functions in order.</li>\n        <li>Which framework is payment-specific, and which defines an ISMS?</li>\n        <li>Name Sri Lanka's core data-protection law and its 2025 amendment.</li>\n        <li>Which three cookie attributes make cookies secure?</li>\n      </ol>\n      <p style=\"margin-top:8px\"><b>Answers:</b> 1. <b>DDoS</b>; <b>Availability</b>; CDN / DDoS protection / rate limiting / caching / resilient hosting. 2. (a) Integrity, (b) Confidentiality, (c) Availability. 3. <b>Govern, Identify, Protect, Detect, Respond, Recover</b>. 4. <b>PCI DSS</b> is payment-specific; <b>ISO/IEC 27001</b> defines the ISMS. 5. <b>PDPA No. 9 of 2022</b>; <b>Amendment Act No. 22 of 2025</b>. 6. <b>Secure, HttpOnly, SameSite</b>.</p>"
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Topic 8 Quiz: E-Business Security & Legal Aspects",
      "count": 8,
      "quizSlug": "08-ebusiness-security-and-legal-aspects"
    }
  ]
};

export default chapter;
