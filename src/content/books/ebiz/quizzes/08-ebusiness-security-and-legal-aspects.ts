import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "08-ebusiness-security-and-legal-aspects",
  "title": "Topic 8 Quiz: E-Business Security & Legal Aspects",
  "questions": [
    {
      "prompt": "1. A DDoS attack primarily threatens which element of the CIA triad?",
      "options": [
        "Confidentiality",
        "Integrity",
        "Availability",
        "Non-repudiation"
      ],
      "answer": 2,
      "explanation": "DDoS overwhelms services, making them slow or inaccessible, an <b>Availability</b> attack. Defensive layers: CDN, DDoS protection, rate limiting, caching, resilient hosting."
    },
    {
      "prompt": "2. Order totals, inventory levels and product prices must remain accurate. This requirement belongs to:",
      "options": [
        "Confidentiality",
        "Integrity",
        "Availability",
        "Authentication"
      ],
      "answer": 1,
      "explanation": "Integrity ensures order totals, inventory, product prices and transactions are <b>accurate</b> and unmodified."
    },
    {
      "prompt": "3. Which set lists the six functions of NIST Cybersecurity Framework 2.0 in order?",
      "options": [
        "Identify, Protect, Detect, Respond, Recover, Govern",
        "Govern, Identify, Protect, Detect, Respond, Recover",
        "Plan, Do, Check, Act, Govern, Recover",
        "Acquire, Convert, Serve, Retain"
      ],
      "answer": 1,
      "explanation": "NIST CSF 2.0: <b>GOVERN + IDENTIFY → PROTECT → DETECT + RESPOND → RECOVER</b>: six functions supporting continuous risk management."
    },
    {
      "prompt": "4. ISO/IEC 27001 and PCI DSS are best described, respectively, as:",
      "options": [
        "A payment standard and a privacy regulation",
        "An international ISMS standard and a payment-data protection standard",
        "A Sri Lankan law and an EU regulation",
        "Two competing encryption algorithms"
      ],
      "answer": 1,
      "explanation": "ISO/IEC 27001 establishes, implements, maintains and continually improves an <b>Information Security Management System (ISMS)</b>; PCI DSS protects <b>cardholder/payment data</b> with technical and organizational controls."
    },
    {
      "prompt": "5. A customer receives \"Your order is blocked. Verify your payment now\" with an unfamiliar link. The safest response is:",
      "options": [
        "Click the link and verify quickly before the order expires",
        "Reply with card details and OTP to the sender",
        "Avoid the message link; open the store directly (bookmark/app) and check order status",
        "Forward the message to all contacts as a warning"
      ],
      "answer": 2,
      "explanation": "Red flags: unexpected request, urgency, unfamiliar domain, sensitive-data collection. Safe response: <b>avoid the link</b>, open the store directly, check the real order status; businesses should provide reporting channels and warn affected users."
    },
    {
      "prompt": "6. Using parameterized database queries, server-side authorization and least privilege are examples of:",
      "options": [
        "Client-side security measures",
        "Browser-side content policies",
        "Server-side security measures",
        "Customer safeguards"
      ],
      "answer": 2,
      "explanation": "Server-side: server-side authorization, least privilege, MFA for admins, input validation, parameterized queries, API protection, patching, secrets protection, encryption, centralized logging, monitoring, backups and tested incident-response plans."
    },
    {
      "prompt": "7. Sri Lanka's core data-protection law, and its amending act, are:",
      "options": [
        "GDPR and the ePrivacy Regulation",
        "Personal Data Protection Act No. 9 of 2022 and Amendment Act No. 22 of 2025",
        "Computer Crime Act and Electronic Transactions Act",
        "PCI DSS and ISO 27001"
      ],
      "answer": 1,
      "explanation": "Sri Lanka's <b>PDPA No. 9 of 2022</b> is the core data-protection law, modified by the <b>Personal Data Protection (Amendment) Act No. 22 of 2025</b>; the Data Protection Authority (dpa.gov.lk) issues guidance."
    },
    {
      "prompt": "8. In the secure checkout flow, why must the server recalculate the order total even though the browser displays one?",
      "options": [
        "Browsers cannot display decimals correctly",
        "Browser content and user input can be manipulated: only server-enforced values are trustworthy",
        "Recalculation is faster on the server",
        "It is required by DNS"
      ],
      "answer": 1,
      "explanation": "The price-tampering example: a browser may display a total, but the server must recalculate it. Defence in depth means applying controls across customer, application, network and operations, client-side and server-side are both necessary; neither replaces the other."
    }
  ]
};

export default quiz;
