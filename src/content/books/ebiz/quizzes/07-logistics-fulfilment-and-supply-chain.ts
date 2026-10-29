import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "07-logistics-fulfilment-and-supply-chain",
  "title": "Topic 7 Quiz: Logistics, Fulfilment & Supply Chain",
  "questions": [
    {
      "prompt": "1. In e-business, the supply chain is triggered when the customer places an online order and ends when:",
      "options": [
        "Payment is captured",
        "The order (or a return) is fully resolved",
        "The parcel is handed to the carrier",
        "The customer leaves a review"
      ],
      "answer": 1,
      "explanation": "The supply chain doesn't stop at the sale: it continues until <b>the product, or a refund, safely completes its journey</b> (including reverse logistics/returns)."
    },
    {
      "prompt": "2. Procurement differs from purchasing activities in that procurement:",
      "options": [
        "Only involves placing orders",
        "Includes all purchasing activities plus monitoring of all elements of purchase transactions",
        "Is limited to identifying suppliers",
        "Applies only to direct materials"
      ],
      "answer": 1,
      "explanation": "Purchasing = identifying vendors, evaluating vendors, selecting products, placing orders. <b>Procurement = purchasing + monitoring</b> of all elements of purchase transactions. Sourcing is the procurement activity of identifying suppliers and their qualifications."
    },
    {
      "prompt": "3. Which tier of suppliers is described as the foundation of the entire supply chain, providing raw materials such as metals and plastic?",
      "options": [
        "Tier 1",
        "Tier 2",
        "Tier 3",
        "OEMs"
      ],
      "answer": 2,
      "explanation": "<b>Tier 3</b> supplies raw (or almost raw) materials to Tier 2 and Tier 1. Tier 1 sells directly to OEMs with the most advanced technologies; Tier 2 supplies parts from Tier 3 material to Tier 1."
    },
    {
      "prompt": "4. The objective of logistics is to provide:",
      "options": [
        "The cheapest possible shipping at any cost",
        "The right goods in the right quantities in the right place at the right time",
        "Maximum warehouse utilization",
        "The largest possible delivery fleet"
      ],
      "answer": 1,
      "explanation": "Logistics manages how resources are acquired, stored and transported: delivering <b>the right goods, in the right quantities, in the right place, at the right time</b>."
    },
    {
      "prompt": "5. Which fulfilment model involves the supplier shipping directly to the customer while the retailer never holds stock?",
      "options": [
        "In-house fulfilment",
        "Third-Party Logistics (3PL)",
        "Dropshipping",
        "Fulfilment centers"
      ],
      "answer": 2,
      "explanation": "<b>Dropshipping</b>: low start-up cost, but thinner margins and less fulfilment control. In-house = full control but needs space/staff; 3PL = external provider; fulfilment centers = shared warehouse network for a fee."
    },
    {
      "prompt": "6. Which inventory technique calculates the order size that minimizes combined ordering and holding costs?",
      "options": [
        "ABC analysis",
        "Just-In-Time (JIT)",
        "Economic Order Quantity (EOQ)",
        "Safety stock"
      ],
      "answer": 2,
      "explanation": "<b>EOQ</b> is the formula-based order size minimizing combined ordering and holding costs. ABC classifies by value/importance; JIT times stock to need; safety stock + reorder point buffer against stockouts."
    },
    {
      "prompt": "7. RFID differs from barcode scanning primarily because RFID tags allow:",
      "options": [
        "Only single-item, line-of-sight reads",
        "Bulk, non-line-of-sight scanning for faster, more accurate stock counts",
        "Printing shipping labels",
        "Customer identity verification"
      ],
      "answer": 1,
      "explanation": "RFID supports <b>bulk, non-line-of-sight scanning</b>. Barcodes are fast and low-cost but require line-of-sight reads. A WMS directs put-away and optimizes picking routes."
    },
    {
      "prompt": "8. BOPIS (click-and-collect) reduces which delivery cost specifically?",
      "options": [
        "First-mile pickup from suppliers",
        "Last-mile delivery cost",
        "Customs duties",
        "Warehouse insurance"
      ],
      "answer": 1,
      "explanation": "Customers order online and collect in-store or from a locker, <b>cutting last-mile cost</b> (the final leg from local hub to door), typically the most expensive and complex part of the journey."
    }
  ]
};

export default quiz;
