import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "07-logistics-fulfilment-and-supply-chain",
    "number": 7,
    "title": "Logistics, fulfilment & supply chain",
    "subtitle": "Lecture 08 · Order fulfilment, inventory techniques, warehouse technology, delivery and tracking",
    "kind": "topic",
    "words": 2290,
    "minutes": 11
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "supply-chain-in-e-business",
      "text": "Supply chain in e-business"
    },
    {
      "type": "paragraph",
      "html": "<b>Logistics and supply chain management covers every process that moves a product from a supplier to a warehouse and finally to the customer's door</b>. In e-business, the chain is <b>triggered the moment a customer places an online order</b>, and it <b>only ends when the order (or a return) is fully resolved</b>. Core components: <b>procurement and suppliers, inventory and warehousing, order fulfilment, transportation and delivery, and reverse logistics (returns)</b>. Logistics performance directly affects <b>delivery speed, cost, order accuracy, customer satisfaction and repeat purchases</b>. The key idea: <mark>in e-business, the supply chain doesn't stop at the sale: it continues until the product, or a refund, safely completes its journey</mark>."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "purchasing-logistics-and-support-activities",
      "text": "Purchasing, logistics & support activities"
    },
    {
      "type": "paragraph",
      "html": "The vocabulary of procurement builds up in layers. <b>Purchasing activities</b> include identifying vendors, evaluating vendors, selecting specific products and placing orders. A <b>supply chain</b> is a network between a company and its suppliers to produce and distribute a specific product: it represents the steps it takes to get the product or service to the customer. <b>Procurement</b> includes all purchasing activities <i>plus</i> monitoring of all elements of purchase transactions. <b>Sourcing</b> is the procurement activity devoted to identifying suppliers and determining their qualifications. <b>E-procurement or e-sourcing</b> is the use of Internet technologies in procurement and sourcing activities."
    },
    {
      "type": "table",
      "head": [
        "Term",
        "Definition"
      ],
      "rows": [
        [
          "<b>Purchasing</b>",
          "Identifying vendors, evaluating vendors, selecting products, placing orders"
        ],
        [
          "<b>Procurement</b>",
          "All purchasing activities <b>plus monitoring</b> of all elements of purchase transactions"
        ],
        [
          "<b>Sourcing</b>",
          "Procurement activity devoted to <b>identifying suppliers and determining their qualifications</b>"
        ],
        [
          "<b>E-procurement / e-sourcing</b>",
          "Use of <b>Internet technologies</b> in procurement and sourcing activities"
        ],
        [
          "<b>Direct materials</b>",
          "Materials that <b>become part of the finished product</b> in a manufacturing process"
        ],
        [
          "<b>Indirect materials</b>",
          "Other materials the company purchases, including factory supplies"
        ],
        [
          "<b>Replenishment purchasing</b>",
          "Negotiating <b>long-term contracts</b> for most of the materials the company will need"
        ]
      ],
      "caption": "Procurement vocabulary: purchasing ⊂ procurement; sourcing is a procurement activity."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "supply-chain-tiers-and-alliances",
      "text": "Supply chain tiers and alliances"
    },
    {
      "type": "paragraph",
      "html": "Suppliers are organized in <b>tiers</b>. <b>Tier 1 suppliers</b> develop long-term relationships with a large number of suppliers; they are the firms with a <b>direct relationship with, and sell to, OEMs</b>, consist of the most advanced technologies and processes, and are major companies in their own rights. <b>Tier 2 suppliers</b> produce and supply parts from material obtained via Tier 3 to the Tier 1 level; they are comparatively smaller than Tier 1 but equally vital, integral to the <b>speed of production</b>, and must adhere to safety and quality standards or their products cannot go forward to Tier 1. <b>Tier 3 suppliers</b> are the <b>foundation of the entire supply chain</b>: they provide required materials such as metals and plastic in raw or almost-raw form to Tier 2 and Tier 1 companies. <b>Supply alliances</b> are long-term relationships created among participants in the supply chain."
    },
    {
      "type": "paragraph",
      "html": "Internet technologies matter to supply chains in a specific way. The <b>key element of successful supply chain management is clear communications and quick responses</b>, while the <b>major disadvantage of using Internet technologies in supply chain management is the cost of the technologies</b>. The advantages accrue mostly to suppliers, who can: <b>share information about customer demand fluctuations; receive rapid notification of product design changes and adjustments; provide specifications and drawings more efficiently; increase the speed of processing transactions; reduce the cost of handling transactions; reduce errors in entering transaction data; and share information about defect rates and types</b>. And the human layer: the <b>major issue for most companies is developing trust</b>, whose <b>key elements are continual communication and information sharing</b>."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "logistic-activities",
      "text": "Logistic activities"
    },
    {
      "type": "paragraph",
      "html": "<b>Logistics refers to the overall process of managing how resources are acquired, stored, and transported to their final destination</b>. Its objective is to provide <b>the right goods in the right quantities in the right place at the right time</b>: four \"rights\" that make a neat exam definition. Logistics includes managing <b>inbound movements</b> of materials and supplies, <b>outbound movements</b> of finished goods and services, and the activities of <b>receiving, warehousing, controlling inventory, scheduling and controlling vehicles, and distributing finished goods</b>."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "the-order-fulfilment-process",
      "text": "The order fulfilment process"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"flow\">\n    <div class=\"fstep\"><b>Order Received</b><small>customer places the order</small></div>\n    <div class=\"farrow\">→</div>\n    <div class=\"fstep\"><b>Pick</b><small>item located in warehouse</small></div>\n    <div class=\"farrow\">→</div>\n    <div class=\"fstep\"><b>Pack</b><small>packaged for shipping</small></div>\n    <div class=\"farrow\">→</div>\n    <div class=\"fstep\"><b>Ship</b><small>handed to carrier</small></div>\n    <div class=\"farrow\">→</div>\n    <div class=\"fstep\"><b>Deliver</b><small>arrives at the door</small></div>\n    <div class=\"farrow\">→</div>\n    <div class=\"fstep\"><b>Returns</b><small>reverse logistics if needed</small></div>\n  </div>",
      "alt": "Order fulfilment process: order received, pick, pack, ship, deliver, returns",
      "caption": "The six fulfilment stages: each must be fast and accurate; delays or errors at any single stage increase delivery time and reduce customer trust."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "order-fulfilment-models",
      "text": "Order fulfilment models"
    },
    {
      "type": "table",
      "head": [
        "Model",
        "How it works",
        "Trade-off"
      ],
      "rows": [
        [
          "<b>In-house fulfilment</b>",
          "The business stores, picks, packs and ships its own orders",
          "Full control over quality and branding, but requires space, staff and investment"
        ],
        [
          "<b>Third-Party Logistics (3PL)</b>",
          "An external provider handles warehousing, picking and shipping",
          "Reduces overhead and scales easily, with less direct control"
        ],
        [
          "<b>Dropshipping</b>",
          "The supplier ships directly to the customer; the retailer never holds stock",
          "Low start-up cost, but thinner margins and less fulfilment control"
        ],
        [
          "<b>Fulfilment centers</b>",
          "Retailer stock is stored in a shared warehouse network (e.g. marketplace-managed) for fast, standardized picking and shipping, for a fee",
          "Speed and standardization in exchange for the fee"
        ]
      ],
      "caption": "Four order fulfilment models and their trade-offs."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "inventory-management",
      "text": "Inventory management"
    },
    {
      "type": "paragraph",
      "html": "<b>Inventory management is the process of tracking, controlling and optimizing stock levels across warehouses and sales channels</b>. Core concepts include the <b>SKU (stock-keeping unit), reorder point, safety stock and inventory turnover rate</b>. The goal is to balance two risks: <b>stockouts</b>, which lose sales and damage trust, and <b>overstocking</b>, which ties up capital and storage space. An <b>Inventory Management System (IMS)</b> is software that centralizes real-time stock data across the online store, warehouse and suppliers. The lecture's example: <mark>when a customer completes checkout, the IMS instantly reduces the available stock count so the item is not oversold on other channels</mark>."
    },
    {
      "type": "table",
      "head": [
        "Technique",
        "What it does"
      ],
      "rows": [
        [
          "<b>ABC analysis</b>",
          "Classifies inventory by value and importance: 'A' items are high-value/low-quantity and need close control; 'C' items are low-value/high-quantity"
        ],
        [
          "<b>Just-In-Time (JIT)</b>",
          "Orders stock to arrive close to when it is actually needed, minimizing holding cost and warehouse space"
        ],
        [
          "<b>Economic Order Quantity (EOQ)</b>",
          "A formula-based approach that calculates the order size which minimizes combined ordering and holding costs"
        ],
        [
          "<b>Safety stock &amp; reorder point</b>",
          "A buffer quantity and trigger level that protect against stockouts caused by demand spikes or supplier delays"
        ]
      ],
      "caption": "The four inventory management techniques."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "inventory-and-warehouse-technologies",
      "text": "Inventory & warehouse technologies"
    },
    {
      "type": "paragraph",
      "html": "<b>Barcode scanning</b> is a fast, low-cost way to identify items and update stock counts at receiving, picking and shipping. <b>RFID (Radio-Frequency Identification)</b> tags allow <b>bulk, non-line-of-sight scanning</b> for faster and more accurate stock counts: the phrase to remember when contrasting RFID with barcodes. A <b>Warehouse Management System (WMS)</b> is software that directs put-away, optimizes picking routes and tracks exact stock locations. <b>Cloud-based inventory platforms</b> synchronize stock levels in real time across the online store, marketplaces and physical locations. The key idea: <mark>connecting the IMS/WMS directly to the e-commerce platform is what actually prevents overselling out-of-stock items</mark>."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "delivery-systems-in-e-business",
      "text": "Delivery systems in e-business"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Standard/economy shipping</b>: the lowest cost option, with a longer delivery window; suited to non-urgent orders",
        "<b>Express and same-day delivery</b>: a premium, faster service for urgent or local orders, usually at a higher price",
        "<b>Click-and-collect (BOPIS: Buy Online, Pick-up In-Store)</b>: customers order online and collect in-store or from a locker, cutting last-mile cost",
        "<b>Last-mile delivery</b>: the final leg from the local hub to the customer's door; typically the <b>most expensive and complex</b> part of the journey",
        "<b>Delivery partners</b>: third-party couriers, postal services, or an in-house delivery fleet, each with different cost/control trade-offs"
      ]
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "delivery-tracking-technologies",
      "text": "Delivery tracking technologies"
    },
    {
      "type": "table",
      "head": [
        "Technology",
        "What it provides"
      ],
      "rows": [
        [
          "<b>GPS tracking</b>",
          "Real-time location of delivery vehicles and parcels, enabling live route visibility and accurate ETA updates"
        ],
        [
          "<b>RFID &amp; IoT sensors</b>",
          "Monitor the location <b>and condition</b> of goods in transit: including temperature-sensitive shipments"
        ],
        [
          "<b>Barcode / QR scanning</b>",
          "Scan events at every handoff point (warehouse, courier, depot, door) automatically update the shipment's status"
        ],
        [
          "<b>Automated notifications</b>",
          "SMS, email and app alerts keep customers informed at each milestone, from dispatch to out-for-delivery to arrival"
        ]
      ],
      "caption": "Four tracking technologies that build customer trust through visibility."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "end-to-end-logistics-flow",
      "text": "End-to-end logistics flow"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"flow\">\n    <div class=\"fstep\"><b>Customer Order</b><small>placed online</small></div>\n    <div class=\"farrow\">→</div>\n    <div class=\"fstep\"><b>Inventory Check</b><small>(IMS)</small></div>\n    <div class=\"farrow\">→</div>\n    <div class=\"fstep\"><b>Pick &amp; Pack</b><small>(Warehouse)</small></div>\n    <div class=\"farrow\">→</div>\n    <div class=\"fstep\"><b>Carrier Handoff</b><small>shipment created</small></div>\n    <div class=\"farrow\">→</div>\n    <div class=\"fstep\"><b>Last-Mile Delivery</b><small>hub → door</small></div>\n    <div class=\"farrow\">→</div>\n    <div class=\"fstep\"><b>Customer Receives</b><small>tracking visible throughout</small></div>\n  </div>",
      "alt": "End-to-end logistics flow: customer order, inventory check via IMS, pick and pack, carrier handoff, last-mile delivery, customer receives",
      "caption": "End-to-end flow: tracking data flows alongside the physical shipment at every step, giving both business and customer continuous visibility."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "challenges-and-best-practices",
      "text": "Challenges & best practices"
    },
    {
      "type": "table",
      "head": [
        "Common challenges",
        "Best practices"
      ],
      "rows": [
        [
          "Forecasting demand accurately for each product",
          "Maintain real-time inventory visibility across all channels"
        ],
        [
          "Stockouts and overstocking across channels",
          "Offer multiple fulfilment and delivery options"
        ],
        [
          "Rising last-mile delivery costs",
          "Automate with WMS / transport management systems"
        ],
        [
          "Delivery delays and failed deliveries",
          "Track shipments proactively and communicate early"
        ],
        [
          "Managing returns (reverse logistics)",
          "Design an efficient, customer-friendly returns process"
        ],
        [
          "Keeping stock data in sync across channels",
          "(covered by real-time inventory visibility above)"
        ]
      ],
      "caption": "Logistics challenges mapped to best practices."
    },
    {
      "type": "example",
      "title": "Worked example: choose the fulfilment model",
      "bodyHtml": "<p>Three retailers describe their situations:</p><ol><li>A one-person gadget reseller testing the market with no warehouse, selling items shipped by the manufacturer.</li><li>A premium cosmetics brand that wants unboxing quality and branding fully under its control and already owns a small warehouse with staff.</li><li>A fast-growing general merchandise seller drowning in packing work but wanting to keep trading on multiple marketplaces.</li></ol><p>Match each to the best fulfilment model and justify in one line.</p>",
      "solutionHtml": "<ul>\n        <li><b>1 → Dropshipping.</b> The supplier ships directly to the customer; the retailer never holds stock: lowest start-up cost (accepting thinner margins and less control).</li>\n        <li><b>2 → In-house fulfilment.</b> Full control over quality and branding; it already has the space and staff.</li>\n        <li><b>3 → 3PL or a fulfilment center.</b> An external provider (or shared warehouse network) handles warehousing, picking and shipping: reduces overhead and scales easily, at the cost of less direct control.</li>\n      </ul>"
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
          "title": "Drill set: tiers, techniques and trade-offs",
          "html": "<ol>\n        <li>Which tier supplies raw materials such as metals and plastic, and which tier sells directly to OEMs?</li>\n        <li>State the objective of logistics (the four \"rights\").</li>\n        <li>Which inventory technique classifies stock as A, B and C? What do the 'A' items look like?</li>\n        <li>Which technique calculates the order size minimizing combined ordering and holding costs?</li>\n        <li>What does BOPIS stand for, and what cost does it cut?</li>\n        <li>Which delivery leg is typically the most expensive and complex?</li>\n        <li>Name the key element of building trust in a supply chain.</li>\n      </ol>\n      <p style=\"margin-top:8px\"><b>Answers:</b> 1. <b>Tier 3</b> raw materials; <b>Tier 1</b> sells to OEMs. 2. The right goods in the right quantities in the right place at the right time. 3. <b>ABC analysis</b>; 'A' items are high-value/low-quantity needing close control. 4. <b>EOQ (Economic Order Quantity)</b>. 5. <b>Buy Online, Pick-up In-Store</b>; cuts last-mile cost. 6. <b>Last-mile delivery</b>. 7. <b>Continual communication and information sharing</b>.</p>"
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Topic 7 Quiz: Logistics, Fulfilment & Supply Chain",
      "count": 8,
      "quizSlug": "07-logistics-fulfilment-and-supply-chain"
    }
  ]
};

export default chapter;
