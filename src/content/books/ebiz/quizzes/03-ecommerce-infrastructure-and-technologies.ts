import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "03-ecommerce-infrastructure-and-technologies",
  "title": "Topic 3 Quiz: E-Commerce Infrastructure & Technologies",
  "questions": [
    {
      "prompt": "1. DNS translates human-readable domain names into:",
      "options": [
        "MAC addresses",
        "IP addresses",
        "URL paths",
        "SSL certificates"
      ],
      "answer": 1,
      "explanation": "DNS translates domain names (shop.example.com) into <b>IP addresses</b> used by network devices. It also supports availability and traffic management via multiple records, routing policies and failover."
    },
    {
      "prompt": "2. Which protocol divides large transmissions into segments and ensures they arrive correctly and in the proper order?",
      "options": [
        "IP (Internet Protocol)",
        "TCP (Transmission Control Protocol)",
        "HTTP",
        "DNS"
      ],
      "answer": 1,
      "explanation": "<b>TCP</b> is responsible for reliable delivery: it divides data into <b>segments</b> and ensures correct, ordered arrival. IP handles addressing and routing."
    },
    {
      "prompt": "3. The main security difference between HTTP and HTTPS is that HTTPS:",
      "options": [
        "Compresses responses for faster delivery",
        "Uses TLS to provide encryption, server authentication and integrity protection",
        "Hides the URL from the browser history",
        "Routes requests through a CDN"
      ],
      "answer": 1,
      "explanation": "HTTPS = HTTP + TLS: encrypted, protects data in transit, provides <b>server authentication</b> and integrity protection. HTTP offers none of these and is not suitable for sensitive transactions."
    },
    {
      "prompt": "4. Pricing rules and authorization decisions should always be enforced:",
      "options": [
        "Client-side, for faster interaction",
        "Server-side, because client-side checks cannot be trusted for security-sensitive decisions",
        "In the CDN edge cache",
        "In the DNS resolver"
      ],
      "answer": 1,
      "explanation": "The security principle from the lecture: <b>validate important inputs and business rules on the server</b>. Client-side processing (UI rendering, form validation, filters) improves speed but cannot be trusted for security-sensitive business decisions."
    },
    {
      "prompt": "5. A CDN improves e-commerce performance primarily by:",
      "options": [
        "Encrypting payment data at rest",
        "Distributing static content through geographically distributed edge locations",
        "Replacing the database with in-memory storage",
        "Translating domain names to IP addresses"
      ],
      "answer": 1,
      "explanation": "A CDN distributes static content (images, CSS, JavaScript, videos) through <b>edge locations</b> near users: lower latency, reduced origin-server load, better scalability. Orders still go to the application server."
    },
    {
      "prompt": "6. Adding more application instances behind a load balancer is an example of:",
      "options": [
        "Vertical scaling",
        "Horizontal scaling",
        "Auto-encryption",
        "Sharding"
      ],
      "answer": 1,
      "explanation": "<b>Horizontal scaling</b> adds more servers/instances. Vertical scaling increases the resources of a single server. Cloud infrastructure scales horizontally with load balancers distributing requests."
    },
    {
      "prompt": "7. In payment gateway integration, a \"webhook/callback\" is best described as:",
      "options": [
        "The receipt printed after delivery",
        "A mechanism for the provider to notify the store asynchronously about events such as payment completion",
        "The redirect URL shown to the customer",
        "A duplicate transaction prevention flag"
      ],
      "answer": 1,
      "explanation": "Alongside transaction ID, authorization, capture, refund, cancellation and reconciliation, webhooks/callbacks let the payment provider <b>notify the store asynchronously</b>. Good design must handle timeouts, duplicates, failures, delayed notifications and retries."
    },
    {
      "prompt": "8. Which statement about authentication and authorization is correct?",
      "options": [
        "Authentication asks \"what is the user allowed to do?\"; authorization asks \"who is the user?\"",
        "Authentication asks \"who is the user?\"; authorization asks \"what is the user allowed to do?\"",
        "Both are the same question asked at different layers",
        "Authorization always requires multi-factor authentication"
      ],
      "answer": 1,
      "explanation": "Authentication = <b>who</b> (sessions, cookies, access tokens, OAuth 2.0, OpenID Connect, MFA). Authorization = <b>what is permitted</b> (least privilege)."
    }
  ]
};

export default quiz;
