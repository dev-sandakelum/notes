import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "03-ecommerce-infrastructure-and-technologies",
    "number": 3,
    "title": "E-commerce infrastructure & technologies",
    "subtitle": "Lecture 03 · DNS, TCP/IP, HTTP/HTTPS, hosting, scalability, Web APIs and m-commerce",
    "kind": "topic",
    "words": 2350,
    "minutes": 12
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "internet-technologies-enabling-e-commerce",
      "text": "Internet technologies enabling e-commerce"
    },
    {
      "type": "paragraph",
      "html": "The Internet provides the <b>communication infrastructure</b> through which customers, businesses, banks, payment providers and logistics providers interact. The core technologies include the <b>Internet Protocol (IP)</b>, <b>DNS</b>, <b>TCP/IP</b>, <b>HTTP/HTTPS</b>, web browsers, web servers, databases and cloud services. An e-commerce transaction typically involves several layers at once: a customer opens an online shop, searches for a product, adds it to a cart and submits an order: <mark>DNS finds the destination server; HTTPS protects communication; the application processes business logic; data is retrieved or stored; external APIs may complete payment or delivery operations</mark>."
    },
    {
      "type": "paragraph",
      "html": "Whatever the architecture, e-commerce systems must provide <b>security, availability, acceptable response time, scalability and reliable data exchange</b>. These five non-functional requirements are the yardstick used throughout the lecture: every technology below is justified by which of the five it improves. When an exam asks \"why does technology X matter for e-commerce\", anchor the answer in this list."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "domain-name-system-dns",
      "text": "Domain Name System (DNS)"
    },
    {
      "type": "paragraph",
      "html": "<b>DNS translates human-readable domain names</b> (e.g. shop.example.com) <b>into IP addresses</b> used by network devices. It matters to e-commerce because customers normally access stores using domain names rather than numeric IP addresses. DNS also supports <b>availability and traffic management</b> through techniques such as <b>multiple records, routing policies and failover configurations</b>. The security consideration: DNS should be managed carefully to reduce risks such as <b>domain hijacking</b> and <b>DNS spoofing</b>: an attacker that controls DNS can send shoppers to a lookalike store even though the shopper typed the correct name."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "tcp-ip-the-foundation-of-internet-communication",
      "text": "TCP/IP: the foundation of internet communication"
    },
    {
      "type": "paragraph",
      "html": "TCP/IP is the fundamental communication system that allows data to travel from one device to another across the Internet. It splits into two cooperating protocols. <b>TCP (Transmission Control Protocol)</b> is responsible for <b>reliable delivery of data</b>: when a large amount of information must be transmitted, TCP divides it into smaller pieces called <b>segments</b> and helps ensure they arrive <b>correctly and in the proper order</b>. <b>IP (Internet Protocol)</b> is responsible for <b>addressing and routing data</b>: every device communicating over an IP network has an <b>IP address</b>, and IP uses these addresses to determine where data should be sent."
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">TCP · Transmission Control Protocol</div><div class=\"f-b\">The <b>reliable delivery</b> half. Chops large messages into <b>segments</b>, numbers them, reassembles in order, retransmits losses.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">IP · Internet Protocol</div><div class=\"f-b\">The <b>addressing &amp; routing</b> half. Every device has an <b>IP address</b>; IP moves each packet toward its destination.</div></div>\n  </div>",
      "alt": "TCP handles reliable, ordered delivery of segments; IP handles addressing and routing",
      "caption": "TCP = reliability and ordering; IP = addresses and routing."
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "One-line recall",
      "html": "<b>TCP = correct and in order (segments); IP = where to send (addresses/routing).</b> If a scenario mentions \"a packet arrives out of order\" or \"a segment is lost\", the protocol that fixes it is TCP."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "http-vs-https",
      "text": "HTTP vs HTTPS"
    },
    {
      "type": "paragraph",
      "html": "HTTP and HTTPS are protocols used for communication between a web browser (client) and a web server. HTTPS is HTTP inside <b>TLS (Transport Layer Security)</b>, and that single difference cascades through every row of the comparison: encryption, data protection, authentication, integrity and e-commerce suitability."
    },
    {
      "type": "table",
      "head": [
        "Feature",
        "HTTP",
        "HTTPS"
      ],
      "rows": [
        [
          "<b>Full form</b>",
          "Hypertext Transfer Protocol",
          "Hypertext Transfer Protocol Secure"
        ],
        [
          "<b>Security</b>",
          "Not encrypted",
          "Encrypted"
        ],
        [
          "<b>Encryption</b>",
          "No TLS encryption",
          "Uses TLS (Transport Layer Security)"
        ],
        [
          "<b>Data protection</b>",
          "Data can potentially be intercepted or modified",
          "Data is protected during transmission"
        ],
        [
          "<b>Authentication</b>",
          "Does not provide server authentication through TLS",
          "TLS provides server authentication"
        ],
        [
          "<b>Data integrity</b>",
          "No TLS-based integrity protection",
          "Provides integrity protection"
        ],
        [
          "<b>URL example</b>",
          "http://example.com",
          "https://example.com"
        ],
        [
          "<b>E-commerce use</b>",
          "Not suitable for sensitive transactions",
          "Essential for e-commerce"
        ]
      ],
      "caption": "HTTP vs HTTPS: the eight-row comparison from the lecture."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "client-side-vs-server-side-processing",
      "text": "Client-side vs server-side processing"
    },
    {
      "type": "table",
      "head": [
        "",
        "Client-side",
        "Server-side"
      ],
      "rows": [
        [
          "<b>Runs on</b>",
          "Mainly in the customer's browser/device",
          "Web/application servers"
        ],
        [
          "<b>Examples</b>",
          "UI rendering, form validation, interactive product filters",
          "Authentication, order processing, pricing rules, inventory updates"
        ],
        [
          "<b>Advantages</b>",
          "Fast interaction, reduced server workload",
          "Centralized control, access to protected resources"
        ],
        [
          "<b>Limitation / principle</b>",
          "Cannot be trusted for security-sensitive business decisions",
          "Validate important inputs and business rules on the server"
        ]
      ],
      "caption": "Client-side vs server-side processing."
    },
    {
      "type": "callout",
      "variant": "warn",
      "title": "Security principle (repeated in Lecture 09)",
      "html": "Client-side validation is for <b>UX speed only</b>; it can be bypassed because the browser is under the customer's control. Every security-sensitive rule (pricing, discounts, authorization) must be <b>re-validated on the server</b>. This returns in Lecture 09 as the \"price tampering\" example: the browser may display a total, but the server must recalculate it."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "web-browsers-and-web-technologies",
      "text": "Web browsers and web technologies"
    },
    {
      "type": "paragraph",
      "html": "Three front-end technologies divide the work. <b>HTML</b> defines the <b>structure</b> of a web page: forms, links, product information, images, tables and semantic elements. <b>CSS</b> controls <b>presentation and layout</b>, and responsive design helps pages adapt to desktops, tablets and smartphones. <b>JavaScript</b> adds <b>interaction and dynamic behavior</b>: client-side validation, asynchronous requests, cart updates and rich user interfaces. Structure / presentation / behavior is the mapping to remember when matching a task to a technology."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "web-application-architecture",
      "text": "Web application architecture"
    },
    {
      "type": "paragraph",
      "html": "A dynamic e-commerce application is layered. The <b>presentation layer</b> displays products, carts, forms, accounts and order information. The <b>application layer</b> implements authentication, shopping-cart logic, pricing, promotions, inventory and order management. The <b>data layer</b> stores customer, product, inventory, order and transaction-related data. <b>External services</b> extend the core: payment gateways, shipping/logistics, email/SMS, identity providers, analytics and other APIs. Questions often present a task (\"check whether the customer has enough loyalty points\") and ask which layer handles it."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "caching-and-content-delivery-networks-cdns",
      "text": "Caching and content delivery networks (CDNs)"
    },
    {
      "type": "paragraph",
      "html": "<b>Caching</b> stores frequently requested data temporarily so it can be served faster. The <b>browser cache</b> stores selected resources on the user's device; the <b>server/application cache</b> stores frequently used data or computed results. A <b>CDN</b> distributes static content (images, CSS, JavaScript, videos) through <b>geographically distributed edge locations</b>. The benefits are <b>lower latency, reduced origin-server load, improved scalability and better user experience</b>. The e-commerce split is instructive: product images and static assets are delivered from a nearby CDN edge, while <b>orders continue to be processed by the application server</b>: cache the static, never the transactional."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "web-servers-hosting-and-deployment",
      "text": "Web servers, hosting and deployment"
    },
    {
      "type": "paragraph",
      "html": "A <b>web server</b> receives HTTP/HTTPS requests and returns web resources or forwards requests to application components; classic examples are <b>Apache HTTP Server, Nginx and Microsoft IIS</b>. <b>Static websites</b> can be served directly from a web server or object storage/CDN, whereas <b>dynamic e-commerce applications</b> normally involve an application runtime and a database behind the web server. Hosting choice affects <b>cost, performance, scalability, security responsibilities, availability and maintenance effort</b>."
    },
    {
      "type": "paragraph",
      "html": "For content, distinguish static from dynamic. <b>Static web pages</b>: the same stored resource is delivered to many users: HTML pages, images, CSS, JavaScript files; easy to cache and distribute through CDNs; suitable for informational pages and static product assets. <b>Dynamic web pages</b>: generated or customized based on data, user, session or request: shopping cart, account page, stock availability, personalized recommendations; usually require application processing and database access; and require careful performance and security management."
    },
    {
      "type": "paragraph",
      "html": "The four hosting options are <b>shared hosting</b>, <b>VPS (Virtual Private Servers)</b>, <b>dedicated servers</b> and <b>cloud-based servers</b>. Moving down that list you gain isolation, control and price: shared hosting is cheapest but noisiest; dedicated hardware is strongest but fixed. <b>Cloud hosting</b> is the e-commerce default: cloud platforms provide compute, storage, networking, databases, monitoring, security and other managed services; infrastructure can be <b>scaled horizontally</b> by adding more application instances; <b>load balancers</b> distribute requests across multiple application servers; <b>auto-scaling</b> can increase or decrease capacity based on demand; and <b>managed databases</b> reduce administrative tasks such as backups, patching and high-availability configuration. The key trade-offs are <b>cost control, vendor dependency, configuration complexity, security, data location and operational skills</b>."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "scalability-availability-and-performance",
      "text": "Scalability, availability and performance"
    },
    {
      "type": "table",
      "head": [
        "Property",
        "Definition",
        "How it is achieved"
      ],
      "rows": [
        [
          "<b>Scalability</b>",
          "Ability to handle increasing workload",
          "<b>Vertical scaling</b>: increase resources of a server · <b>Horizontal scaling</b>: add more servers/instances"
        ],
        [
          "<b>Availability</b>",
          "Ability to remain accessible and operational",
          "Redundancy, health checks, failover, backups and monitoring improve resilience"
        ],
        [
          "<b>Performance</b>",
          "How quickly and efficiently the system responds",
          "Caching, CDN, database optimization, efficient APIs and appropriate infrastructure reduce latency"
        ]
      ],
      "caption": "Scalability vs availability vs performance: and their levers."
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Exam tip: vertical vs horizontal",
      "html": "<b>Vertical = scale UP one machine</b> (more CPU/RAM; limited ceiling). <b>Horizontal = scale OUT more machines</b> (more instances; needs load balancing). Cloud platforms scale <b>horizontally</b> by adding application instances: the wording the lecture uses."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "web-apis-and-third-party-integrations",
      "text": "Web APIs and third-party integrations"
    },
    {
      "type": "paragraph",
      "html": "An <b>API (Application Programming Interface)</b> defines how software components communicate and exchange data. E-commerce businesses rarely build every supporting service themselves; they <b>integrate specialized external providers</b>. Common integrations: <b>payment gateways, delivery/logistics, identity and authentication, email/SMS, maps, analytics, tax and fraud detection</b>. APIs reduce development effort and enable businesses to connect different systems, but integration quality affects <b>reliability, security, customer experience and operational continuity</b>."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "payment-gateway-integration",
      "text": "Payment gateway integration"
    },
    {
      "type": "paragraph",
      "html": "A <b>payment gateway</b> connects an e-commerce application with payment processing infrastructure. Integration approaches include <b>hosted payment pages, redirect-based flows, embedded components, or direct API integrations</b>. The vocabulary you must be able to define: <b>transaction ID</b>, <b>authorization</b>, <b>capture</b>, <b>refund</b>, <b>cancellation</b>, <b>webhook/callback</b>, and <b>reconciliation</b>. Security considerations include HTTPS, authentication credentials, access control, secure secret storage, validation, fraud controls, logging and compliance requirements. Good design must handle <b>timeouts, duplicate requests, failed payments, delayed notifications and retry scenarios</b>: payments fail in creative ways, and the system must degrade gracefully."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "logistics-and-delivery-apis",
      "text": "Logistics and delivery APIs"
    },
    {
      "type": "paragraph",
      "html": "Logistics APIs allow an e-commerce system to exchange information with delivery/courier providers. Common functions: <b>shipping-rate calculation, address validation, shipment creation, tracking, delivery status and proof of delivery</b>. The example workflow: <mark>order confirmed → shipment created → tracking number returned → tracking updates received → customer notified</mark>. <b>Webhooks</b> allow the logistics provider to notify the e-commerce system when shipment status changes. Benefits: automated order fulfilment, real-time tracking, fewer manual operations and better customer visibility."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "authentication-and-identity-apis",
      "text": "Authentication and identity APIs"
    },
    {
      "type": "paragraph",
      "html": "<b>Authentication</b> answers: <i>\"Who is the user?\"</i> <b>Authorization</b> answers: <i>\"What is the user allowed to do?\"</i> E-commerce systems may use their own identity service or integrate with an external identity provider. Common technologies and concepts: <b>sessions, cookies, access tokens, OAuth 2.0, OpenID Connect and multi-factor authentication</b>. <b>Social login</b> can reduce friction by letting customers authenticate using an existing identity provider. Security practices: strong credential protection, short-lived tokens where appropriate, secure cookies, least privilege, and protection against session/token theft."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "mobile-commerce-m-commerce",
      "text": "Mobile commerce (m-commerce)"
    },
    {
      "type": "paragraph",
      "html": "<b>M-commerce</b> is the buying, selling, payment and other commercial activities conducted <b>using mobile devices</b>. Examples include mobile shopping websites, mobile apps, mobile banking, digital wallets, QR-based payments and in-app purchases. Mobile users expect <b>fast loading, simple navigation, touch-friendly controls, secure authentication and reliable payment experiences</b>. M-commerce depends on mobile networks, smartphones, browsers/apps, APIs, cloud infrastructure, payment services and location/notification capabilities."
    },
    {
      "type": "table",
      "head": [
        "Technology",
        "How it works",
        "Notes"
      ],
      "rows": [
        [
          "<b>Responsive web</b>",
          "One website adapts to different screen sizes (HTML + CSS + JavaScript)",
          "Accessible through a mobile browser"
        ],
        [
          "<b>Native apps</b>",
          "Built specifically for a mobile platform; access device capabilities through platform APIs",
          "Useful for rich, frequent interactions"
        ],
        [
          "<b>Cross-platform</b>",
          "Shared codebase targets multiple platforms; frameworks and platform bridges",
          "Can reduce development effort"
        ],
        [
          "<b>Mobile payments</b>",
          "Digital wallets, QR payments, cards, bank-based payments and provider APIs",
          "Security and user authentication are critical"
        ]
      ],
      "caption": "Four mobile commerce technology options."
    },
    {
      "type": "example",
      "title": "Worked example: trace one order through the stack",
      "bodyHtml": "<p>A customer on a phone types <code>shop.example.lk</code>, searches for headphones, adds them to the cart and pays with a digital wallet. The product photo loads quickly even on mobile data. Name the technology responsible for each of the following, in order:</p><ol><li>Turning the domain name into a server IP address</li><li>Protecting the card details during transmission</li><li>Splitting the large product-image download into pieces that arrive correctly and in order</li><li>Serving the product image from a nearby server</li><li>Recomputing the order total on trusted infrastructure</li></ol>",
      "solutionHtml": "<ul>\n        <li><b>1. DNS</b>: translates human-readable domain names into IP addresses.</li>\n        <li><b>2. HTTPS/TLS</b>: encrypted, integrity-protected, server-authenticated channel.</li>\n        <li><b>3. TCP</b>: reliable delivery of segments, correct order.</li>\n        <li><b>4. CDN</b>: static content from geographically distributed edge locations (lower latency).</li>\n        <li><b>5. Server-side processing</b>: pricing rules are business logic; the browser's displayed total cannot be trusted.</li>\n      </ul>"
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
          "title": "Drill set: infrastructure fundamentals",
          "html": "<ol>\n        <li>Which protocol guarantees segments arrive correctly and in the proper order, and which protocol addresses and routes them?</li>\n        <li>Name the two DNS-related attack risks mentioned in the lecture.</li>\n        <li>Distinguish vertical from horizontal scaling in one sentence each.</li>\n        <li>List any five common third-party API integrations for e-commerce.</li>\n        <li>Authentication answers which question, and authorization which?</li>\n      </ol>\n      <p style=\"margin-top:8px\"><b>Answers:</b> 1. <b>TCP</b> (reliable delivery); <b>IP</b> (addressing/routing). 2. <b>Domain hijacking and DNS spoofing</b>. 3. Vertical = increase resources of a server; horizontal = add more servers/instances. 4. Payment gateways, delivery/logistics, identity and authentication, email/SMS, maps, analytics, tax, fraud detection (any five). 5. \"Who is the user?\" vs \"What is the user allowed to do?\"</p>"
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Topic 3 Quiz: E-Commerce Infrastructure & Technologies",
      "count": 8,
      "quizSlug": "03-ecommerce-infrastructure-and-technologies"
    }
  ]
};

export default chapter;
