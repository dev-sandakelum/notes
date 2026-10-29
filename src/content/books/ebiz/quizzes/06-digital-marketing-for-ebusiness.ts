import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "06-digital-marketing-for-ebusiness",
  "title": "Topic 6 Quiz: Digital Marketing for E-Business",
  "questions": [
    {
      "prompt": "1. SEO improves the visibility of web pages in:",
      "options": [
        "Paid search results",
        "Unpaid (organic) search results",
        "Social media feeds",
        "Email inboxes"
      ],
      "answer": 1,
      "explanation": "SEO = visibility in <b>organic (unpaid)</b> results, via on-page SEO (content, titles, internal links), technical SEO (crawlability, indexing, HTTPS, performance) and off-page SEO (reputation, links from trustworthy sites). Paid search visibility is SEM."
    },
    {
      "prompt": "2. CTR, CPC and ROAS are measurement terms primarily associated with:",
      "options": [
        "SEO",
        "SEM (paid search advertising)",
        "Warehouse management",
        "Order fulfilment"
      ],
      "answer": 1,
      "explanation": "SEM measures impressions, clicks, <b>click-through rate (CTR), cost per click (CPC), conversions and return on ad spend (ROAS)</b>. A strong campaign aligns the search query, ad, landing page and conversion goal."
    },
    {
      "prompt": "3. The lecture warns that social media and influencer marketing should NOT be judged primarily by:",
      "options": [
        "Engagement rate",
        "Follower count alone",
        "Link clicks",
        "Conversions"
      ],
      "answer": 1,
      "explanation": "Measure reach, impressions, engagement rate, video views, link clicks, conversions and sentiment, <b>not only follower count</b>. Influencer selection likewise considers audience relevance, content quality, credibility, engagement and brand fit, not follower count alone."
    },
    {
      "prompt": "4. In affiliate marketing, which party provides the tracking/affiliate platform?",
      "options": [
        "The merchant",
        "The customer",
        "A fourth participant alongside merchant, affiliate and customer",
        "The logistics provider"
      ],
      "answer": 2,
      "explanation": "The four key participants are merchant/advertiser, affiliate/publisher, customer and the <b>tracking/affiliate platform</b>. Unique links, codes or tracking identifiers attribute clicks, leads or sales to the affiliate."
    },
    {
      "prompt": "5. The affiliate marketing flow presented in the lecture is:",
      "options": [
        "Merchant → Customer → Affiliate content → Commission",
        "Merchant → Affiliate content → Customer click → Conversion → Commission",
        "Affiliate content → Merchant → Commission → Customer click",
        "Customer click → Conversion → Merchant → Affiliate content"
      ],
      "answer": 1,
      "explanation": "Merchant offers the product and terms → affiliate publishes content → customer clicks (tracked) → conversion (lead/sale) → commission is paid. Tracking connects the referral to the action."
    },
    {
      "prompt": "6. Rule-based versus data-driven are the two implementation styles of:",
      "options": [
        "Personalization",
        "Search engine marketing",
        "Dropshipping",
        "Order fulfilment"
      ],
      "answer": 0,
      "explanation": "Personalization adapts experiences using customer, contextual and behavioral information: via predefined conditions (rule-based) or pattern-discovering data-driven approaches. It must be transparent, privacy-aware and genuinely valuable."
    },
    {
      "prompt": "7. Analytical CRM differs from operational CRM in that it:",
      "options": [
        "Supports sales, marketing and service activities",
        "Uses customer data to generate insights for decisions",
        "Stores contact history and campaign responses",
        "Manages email lifecycle messages"
      ],
      "answer": 1,
      "explanation": "<b>Analytical CRM</b> generates insights from customer data; <b>operational CRM</b> supports sales, marketing and service activities. Together CRM supports acquisition, conversion, retention, service quality and long-term relationships."
    },
    {
      "prompt": "8. A campaign generates huge reach and impressions but sales stay flat. Which KPI family was wrongly targeted?",
      "options": [
        "Awareness metrics were used where conversion metrics were needed",
        "Conversion metrics were used where awareness metrics were needed",
        "Retention metrics were used where engagement metrics were needed",
        "Engagement metrics are unrelated to any campaign goal"
      ],
      "answer": 0,
      "explanation": "KPIs must match the business objective: a large number of clicks (or impressions) is not valuable if the desired customer outcome (<b>conversion</b> (purchases, conversion rate, AOV, ROAS)) does not occur."
    }
  ]
};

export default quiz;
