import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "10-master-cheat-sheet",
    "number": 10,
    "title": "Master cheat sheet",
    "subtitle": "Click any card to flip it, perfect for last-minute revision",
    "kind": "cheatsheet",
    "words": 830,
    "minutes": 4
  },
  "blocks": [
    {
      "type": "paragraph",
      "html": "Every exam-critical definition, list and comparison from ICT2142, condensed onto flip cards. <b>Click a card</b> to see the answer; click again to hide it. Work through them until you can recall the back of every card from the front alone. The categories follow the lecture order, so a weak category tells you exactly which chapter to re-read."
    },
    {
      "type": "flashcards",
      "cards": [
        {
          "front": "<b>E-business vs E-commerce</b><small>the superset rule</small>",
          "back": "E-business = doing business over open networks, <b>substituting information for physical processes</b>. E-commerce = buying &amp; selling over (primarily) the internet. E-commerce ⊂ e-business. E-business stack: e-commerce + CRM + SCM + knowledge mgmt + BI + collaboration.",
          "category": "Basics"
        },
        {
          "front": "<b>Six e-commerce categories</b><small>with examples</small>",
          "back": "B2B (producers/wholesalers) · B2C (retail goods) · C2C (eBay) · C2B (logo creation) · B2A (social security, legal docs) · C2A (distance learning, medical appointments, health payments).",
          "category": "Basics"
        },
        {
          "front": "<b>Evolution milestones</b><small>five stages, four dates</small>",
          "back": "Pre-Internet: 1948 Berlin airlift telex, EDI 1975 · Boom: web 1991, secure card tx 1994, IBM coins \"e-business\" 1997 · 2000s: post dot-com recovery, PayPal · 2010s: m-commerce + social · Present: AI/cloud/omnichannel ecosystems.",
          "category": "Basics"
        },
        {
          "front": "<b>SWOT: internal vs external</b><small>the classic mix-up</small>",
          "back": "Strengths &amp; Weaknesses = <b>inside</b> the business unit. Opportunities &amp; Threats = the <b>operating environment</b> (external). Lecture activity: SWOT for DELL.",
          "category": "Basics"
        },
        {
          "front": "<b>Business model</b><small>creates, delivers, captures</small>",
          "back": "A company's core strategy for how it <b>creates, delivers and captures value</b>: what is sold, who the target customers are, how it reaches them, and the plan to cover costs and make a profit.",
          "category": "Models"
        },
        {
          "front": "<b>Five digital model patterns</b><small>P-S-F-O-M</small>",
          "back": "Platform (Daraz/Uber/Airbnb: facilitates interactions between interdependent groups) · Subscription (recurring fee) · Freemium (free basic + paid advanced) · On-demand (when requested) · Marketplace (many buyers × many sellers; commission, transaction fees, seller fees, ads, premium seller services).",
          "category": "Models"
        },
        {
          "front": "<b>Direct vs Indirect network effect</b><small>who joins, who gains</small>",
          "back": "Direct: value rises as more <b>same-type</b> users join (messaging app). Indirect: value for <b>one group</b> rises as <b>another group</b> grows (more buyers → more sellers → more choice).",
          "category": "Models"
        },
        {
          "front": "<b>DNS role + its attacks</b><small>names to numbers</small>",
          "back": "Translates human-readable domain names into IP addresses. Supports availability via multiple records, routing policies, failover. Attack risks: <b>domain hijacking, DNS spoofing</b>.",
          "category": "Infrastructure"
        },
        {
          "front": "<b>TCP vs IP</b><small>reliability vs routing</small>",
          "back": "TCP: <b>reliable delivery</b>; splits data into <b>segments</b>, ensures correct order and arrival. IP: <b>addressing and routing</b>; every device has an IP address; IP decides where data is sent.",
          "category": "Infrastructure"
        },
        {
          "front": "<b>HTTP vs HTTPS</b><small>what TLS buys</small>",
          "back": "HTTPS = HTTP + TLS → encryption, protection in transit, <b>server authentication</b>, integrity protection. HTTP: none of these; not suitable for sensitive transactions; HTTPS is <b>essential for e-commerce</b>.",
          "category": "Infrastructure"
        },
        {
          "front": "<b>Vertical vs Horizontal scaling</b><small>up vs out</small>",
          "back": "Vertical = increase resources of one server. Horizontal = add more servers/instances (cloud default; needs load balancers). Availability levers: redundancy, health checks, failover, backups, monitoring.",
          "category": "Infrastructure"
        },
        {
          "front": "<b>Authentication vs Authorization</b><small>who vs what</small>",
          "back": "Authentication: <b>who is the user?</b> Authorization: <b>what is the user allowed to do?</b> Tech: sessions, cookies, access tokens, OAuth 2.0, OpenID Connect, MFA; social login reduces friction.",
          "category": "Infrastructure"
        },
        {
          "front": "<b>Payment gateway vocabulary</b><small>seven terms</small>",
          "back": "Transaction ID · authorization · capture · refund · cancellation · webhook/callback · reconciliation. Approaches: hosted pages, redirects, embedded components, direct API. Design for timeouts, duplicates, failed payments, retries.",
          "category": "Infrastructure"
        },
        {
          "front": "<b>Checkout trust stack</b><small>four safeguards</small>",
          "back": "SSL/TLS encryption (data in transit) · PCI-DSS compliance (cardholder data standard) · Tokenization (replace card details with non-reversible token) · Fraud detection (flag unusual patterns before confirmation). Gateways: PayHere, Stripe, PayPal.",
          "category": "Web design"
        },
        {
          "front": "<b>UX vs UI</b><small>journey vs surface</small>",
          "back": "UX: how easily and confidently a customer completes a task. UI: the visual/interactive layer: buttons, typography, colors, cards, spacing. Six principles: simplicity, consistency, visual hierarchy, immediate feedback, accessibility, trust.",
          "category": "Web design"
        },
        {
          "front": "<b>Mobile-first four tactics</b><small>design small first</small>",
          "back": "Thumb-friendly targets <b>~44×44px</b> · simplified navigation (hamburger) · streamlined checkout (fewer fields, autofill, Apple/Google Pay) · fast loads (compressed images, lazy loading). Responsive trio: fluid grids, flexible media, media queries.",
          "category": "Web design"
        },
        {
          "front": "<b>Platform choice</b><small>three-way fork</small>",
          "back": "Open-source (WooCommerce/Magento/PrestaShop/OpenCart (free licence, you host/secure; for teams wanting ownership) · SaaS (Shopify/BigCommerce/Wix) subscription, provider manages; for fast launches) · Custom (full flexibility + ERP/CRM integration; highest cost &amp; timeline). Six factors: budget, expertise, customization, time-to-market, scalability, integration.",
          "category": "Platforms"
        },
        {
          "front": "<b>SEO vs SEM</b><small>organic vs paid</small>",
          "back": "SEO: organic visibility, on-page/technical/off-page, long-term asset. SEM: paid search: keywords, bids, landing pages; metrics: impressions, clicks, CTR, CPC, conversions, ROAS. Use together: SEM tests demand while SEO compounds.",
          "category": "Marketing"
        },
        {
          "front": "<b>Affiliate vs Influencer</b><small>performance vs relationship</small>",
          "back": "Affiliate: performance-based, tracked links/codes, cost per sale/lead; participants = merchant, affiliate, customer, tracking platform. Influencer: creator/audience relationship, fixed fees/products/commissions; select on relevance, quality, credibility, engagement: <b>not follower count alone</b>; disclose clearly.",
          "category": "Marketing"
        },
        {
          "front": "<b>KPI families</b><small>one per journey stage</small>",
          "back": "Awareness (reach, impressions) · Acquisition (traffic, CTR, CPC, CPA) · Engagement (interaction rate, email engagement) · Conversion (leads, purchases, conversion rate, AOV, ROAS) · Retention (repeat purchase, churn, CSAT, CLV). Match KPIs to the objective.",
          "category": "Marketing"
        },
        {
          "front": "<b>Fulfilment: stages & models</b><small>six stages, four models</small>",
          "back": "Stages: Order received → Pick → Pack → Ship → Deliver → Returns. Models: In-house (control, needs space/staff) · 3PL (external, scales, less control) · Dropshipping (no stock, low cost, thin margins) · Fulfilment centers (shared network, fast, for a fee).",
          "category": "Logistics"
        },
        {
          "front": "<b>Inventory techniques</b><small>ABC, JIT, EOQ, safety</small>",
          "back": "ABC: 'A' high-value/low-quantity, close control; 'C' low-value/high-quantity. JIT: stock arrives close to need, minimal holding cost. EOQ: order size minimizing ordering + holding costs. Safety stock + reorder point: buffer vs stockouts. Tech: barcode, RFID (bulk, non-line-of-sight), WMS, cloud IMS.",
          "category": "Logistics"
        },
        {
          "front": "<b>CIA triad + frameworks</b><small>security spine</small>",
          "back": "Confidentiality (no unauthorized access) · Integrity (accurate totals/records) · Availability (services up). Frameworks: NIST CSF 2.0 (Govern, Identify, Protect, Detect, Respond, Recover) · ISO/IEC 27001 (ISMS) · PCI DSS (cardholder data). Threats: phishing, DDoS, ATO, card-not-present fraud, injection, third-party scripts.",
          "category": "Security"
        },
        {
          "front": "<b>Privacy law map</b><small>Sri Lanka + EU</small>",
          "back": "Sri Lanka: <b>PDPA No. 9 of 2022</b> (amended by <b>No. 22 of 2025</b>), Data Protection Authority at dpa.gov.lk. EU: GDPR: lawfulness, fairness, transparency, purpose limitation, minimization; can reach non-EU businesses. Principles: transparency, minimization, security/retention, rights/accountability.",
          "category": "Security"
        },
        {
          "front": "<b>Five emerging trends</b><small>value + risk pairs</small>",
          "back": "AI (personalization/automation; risk bias, privacy) · Blockchain (shared trust/traceability; scalability, governance) · Social/Live (discovery/engagement; platform risk) · AR (visualization; cost, device/data) · Cross-border (expansion; customs, payments, logistics). Value test: customer experience, efficiency, trust, reach, or decision quality.",
          "category": "Trends"
        }
      ]
    }
  ]
};

export default chapter;
