import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "06-digital-marketing-for-ebusiness",
    "number": 6,
    "title": "Digital marketing for e-business",
    "subtitle": "Lecture 07 · SEO, SEM, social media, affiliate & influencer marketing, personalization, CRM and KPIs",
    "kind": "topic",
    "words": 2440,
    "minutes": 12
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "digital-marketing-in-an-e-business-context",
      "text": "Digital marketing in an e-business context"
    },
    {
      "type": "paragraph",
      "html": "<b>Digital marketing uses online channels, data and technology to attract, engage, convert and retain customers</b>. E-business connects marketing activities with websites, e-commerce platforms, payment systems, analytics, customer service and CRM. Common channels include <b>search engines, social platforms, email, content, affiliates, influencers and mobile applications</b>. Performance is measured using <b>reach, traffic, engagement, leads, conversion rate, customer acquisition cost and customer lifetime value</b>. The key idea that frames the whole lecture: <mark>digital marketing is not only promotion; it is a measurable part of the complete digital customer journey</mark>: every channel feeds data back into the loop."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "search-engine-optimization-seo",
      "text": "Search engine optimization (SEO)"
    },
    {
      "type": "paragraph",
      "html": "<b>SEO improves the visibility of web pages in unpaid (organic) search results</b>. It has three limbs. <b>On-page SEO</b>: useful content, search intent, titles, headings, internal links, descriptive URLs and image information. <b>Technical SEO</b>: crawlability, indexing, mobile usability, page performance, HTTPS and structured site architecture. <b>Off-page SEO</b>: reputation and relevant links or mentions from other trustworthy websites. For e-business, SEO can bring potential customers to <b>category pages, product pages, service pages and educational content</b>: the lecture's example is an online electronics store optimizing a product-category page for users searching for \"wireless headphones\"."
    },
    {
      "type": "paragraph",
      "html": "The SEO process runs as a five-step cycle: <b>Research → Create &amp; Optimize → Crawl / Index → Rank &amp; Discover → Measure &amp; Improve</b>. The summary line matters as much as the steps: SEO is <b>continuous</b>: understand user intent, publish useful content, make it technically accessible, then measure search performance and improve. There is no \"finished\" state."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "search-engine-marketing-sem",
      "text": "Search engine marketing (SEM)"
    },
    {
      "type": "paragraph",
      "html": "<b>SEM commonly refers to paid search advertising</b> that places sponsored results for selected search queries. Advertisers <b>choose keywords/audiences, create ads and landing pages, set budgets and bid strategies, and measure results</b>. The measurement vocabulary: <b>impressions, clicks, click-through rate (CTR), cost per click (CPC), conversions and return on ad spend (ROAS)</b>. A strong SEM campaign <b>aligns the search query, advertisement, landing page and conversion goal</b>: misalignment anywhere in that chain wastes the spend. And the timing contrast to keep: <b>paid search creates immediate visibility, while SEO builds organic visibility over time</b>."
    },
    {
      "type": "table",
      "head": [
        "",
        "SEO",
        "SEM"
      ],
      "rows": [
        [
          "<b>Visibility</b>",
          "Organic; content and technical optimization",
          "Paid search; budget and bidding; rapid campaign activation"
        ],
        [
          "<b>Asset type</b>",
          "Longer-term asset",
          "Campaign-scoped spend"
        ],
        [
          "<b>Shared goal</b>",
          "Reach users with relevant search intent and move them toward useful actions",
          "Same"
        ],
        [
          "<b>How they work together</b>",
          "SEO develops sustainable organic discovery",
          "SEM can test demand quickly while SEO develops"
        ]
      ],
      "caption": "SEO vs SEM: organic patience vs paid immediacy, used together."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "social-media-marketing",
      "text": "Social media marketing"
    },
    {
      "type": "paragraph",
      "html": "Social media marketing <b>uses social platforms to build awareness, community, website traffic, leads, sales and customer relationships</b>. <b>Organic activities</b> include posts, short-form video, stories, communities, replies and user-generated content. <b>Paid social</b> uses targeting and advertising to reach defined audiences and support campaign objectives. Content should match the <b>platform, audience, brand voice and stage of the customer journey</b>. Measure <b>reach, impressions, engagement rate, video views, link clicks, conversions and sentiment, not only follower count</b>; follower count is the vanity metric the lecture explicitly calls out."
    },
    {
      "type": "paragraph",
      "html": "The social media marketing cycle runs <b>Audience → Content → Publish → Engage → Analyze</b>, then <i>repeat &amp; improve</i>. Analytics tells you what audiences respond to, and those insights feed the next content and campaign cycle. Note how the same loop shape (do → measure → improve) appears in SEO, social and personalization: examiners like asking what the cycles have in common."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "affiliate-marketing",
      "text": "Affiliate marketing"
    },
    {
      "type": "paragraph",
      "html": "<b>Affiliate marketing is performance-based promotion in which a partner refers potential customers to a merchant</b>. <b>Unique links, codes or tracking identifiers</b> attribute clicks, leads or sales to the affiliate. Compensation models include <b>cost per sale, cost per lead</b> and other agreed performance actions. The four key participants: <b>merchant/advertiser, affiliate/publisher, customer, and the tracking/affiliate platform</b>. Benefits: <b>extended reach and performance-linked cost</b>: you mostly pay for results. Risks: <b>poor-quality traffic, misleading promotion and attribution issues</b>. The lecture example: a technology review site links to an online store and receives an agreed commission for qualifying purchases."
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"flow\">\n    <div class=\"fstep\"><b>Merchant</b><small>offers product + commission terms</small></div>\n    <div class=\"farrow\">→</div>\n    <div class=\"fstep\"><b>Affiliate content</b><small>review / link / code published</small></div>\n    <div class=\"farrow\">→</div>\n    <div class=\"fstep\"><b>Customer click</b><small>tracked via unique identifier</small></div>\n    <div class=\"farrow\">→</div>\n    <div class=\"fstep\"><b>Conversion</b><small>lead or sale recorded</small></div>\n    <div class=\"farrow\">→</div>\n    <div class=\"fstep\"><b>Commission</b><small>paid on the agreed action</small></div>\n  </div>",
      "alt": "Affiliate marketing flow: merchant, affiliate content, customer click, conversion, commission: tracking connects the referral to the action",
      "caption": "Affiliate flow: tracking connects the referral to the action so performance can be measured and the affiliate rewarded."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "influencer-marketing",
      "text": "Influencer marketing"
    },
    {
      "type": "paragraph",
      "html": "<b>Influencer marketing works with creators or trusted individuals who communicate with an established audience</b>. Collaborations may include <b>sponsored posts, demonstrations, reviews, tutorials, live content, launches or ambassador relationships</b>. Selection should consider <b>audience relevance, content quality, credibility, engagement and brand fit, not follower count alone</b> (the second appearance of the vanity-metric warning). Measure <b>reach, engagement, referral traffic, tracked conversions, cost per acquisition and campaign-specific goals</b>. Commercial relationships <b>must be disclosed clearly</b> and campaigns must follow applicable advertising and platform rules."
    },
    {
      "type": "table",
      "head": [
        "",
        "Affiliate",
        "Influencer"
      ],
      "rows": [
        [
          "<b>Core mechanism</b>",
          "Primarily performance-driven; tracked links/codes; commission commonly linked to actions",
          "Primarily creator/audience relationship; may use fixed fees, products, commissions or combinations"
        ],
        [
          "<b>Overlap</b>",
          "An influencer can also act as an affiliate when referrals are tracked and rewarded",
          "Same"
        ],
        [
          "<b>Management</b>",
          "Define objectives, audience, message, tracking, disclosure requirements and performance metrics",
          "Same"
        ]
      ],
      "caption": "Affiliate vs influencer marketing: performance engine vs relationship engine."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "personalization-in-e-business",
      "text": "Personalization in e-business"
    },
    {
      "type": "paragraph",
      "html": "<b>Personalization adapts digital experiences using relevant customer, contextual and behavioral information</b>. Examples: product recommendations, personalized homepages, targeted email, remembered preferences and relevant offers. Useful signals include <b>browsing behavior, purchase history, search activity, location at an appropriate level, device/context and declared preferences</b>. Two implementation styles: <b>rule-based personalization</b> uses predefined conditions, while <b>data-driven approaches</b> identify patterns and recommend relevant content or products. The boundary condition is stated firmly: personalization should be <b>transparent, privacy-aware and designed to provide genuine customer value</b>."
    },
    {
      "type": "paragraph",
      "html": "The personalization process: <b>Collect Signals → Build Insight → Select Experience → Deliver → Measure</b>. The lecture's example chains it together: <mark>browsing and purchase signals → customer/product insight → relevant recommendation → website/email delivery → conversion and engagement measurement</mark>."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "customer-engagement-strategies",
      "text": "Customer engagement strategies"
    },
    {
      "type": "paragraph",
      "html": "<b>Customer engagement is the ongoing interaction between a business and customers across digital touchpoints</b>. Useful strategies include <b>valuable content, responsive support, email lifecycle messages, loyalty programs, communities, reviews and feedback</b>. <b>Omnichannel engagement</b> aims for consistent experiences across website, app, email, social media and service channels. <b>Automation</b> can support welcome messages, abandoned-cart reminders, post-purchase communication and service notifications. Engagement quality is evaluated with <b>repeat visits, retention, response rate, repeat purchase, satisfaction and customer lifetime value</b>."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "crm-in-e-business",
      "text": "CRM in e-business"
    },
    {
      "type": "paragraph",
      "html": "<b>Customer Relationship Management (CRM) combines business processes, customer data and technology to manage customer relationships</b>. A CRM can maintain <b>customer profiles, contact history, leads/opportunities, purchases, service interactions, preferences and campaign responses</b>. Two flavors: <b>operational CRM</b> supports sales, marketing and service activities, while <b>analytical CRM</b> uses customer data to generate insights for decisions. In e-business, CRM <b>connects marketing, e-commerce and customer-service touchpoints</b> to create a more consistent customer view, supporting <b>acquisition, conversion, retention, service quality and long-term relationship development</b>."
    },
    {
      "type": "paragraph",
      "html": "The CRM data flow: <b>Digital Touchpoints → Customer Data → CRM Platform → Segmentation / Automation → Service &amp; Retention</b>. Website, e-commerce, email and support interactions feed the CRM; the resulting customer view supports relevant communication and better service. Mapped onto the customer lifecycle: <b>Acquire</b> (capture leads and campaign sources; understand which channels attract customers), <b>Convert</b> (track interactions and opportunities; support relevant follow-up and offers), <b>Serve</b> (record issues and communication so service teams have customer context), and <b>Retain &amp; Grow</b> (use history and preferences for loyalty, re-engagement, cross-sell and relationship development)."
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Responsible use of customer data",
      "html": "Collect only data with a legitimate business purpose and handle it per applicable privacy requirements · communicate clearly what is collected and how it is used, with appropriate choices and preference controls · protect information via access controls, authentication, encryption, secure integrations and retention practices · avoid intrusive or discriminatory personalization and review automated segmentation regularly · <b>trust is a business asset: misuse of customer data damages relationships even when a campaign appears technically effective</b>."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "kpis-across-the-journey",
      "text": "KPIs across the journey"
    },
    {
      "type": "table",
      "head": [
        "Stage",
        "KPIs"
      ],
      "rows": [
        [
          "<b>Awareness</b>",
          "Reach, impressions, share of visibility, video views"
        ],
        [
          "<b>Acquisition</b>",
          "Organic traffic, paid clicks, CTR, CPC, cost per acquisition"
        ],
        [
          "<b>Engagement</b>",
          "Interaction rate, time/quality of visit, email engagement, response rate"
        ],
        [
          "<b>Conversion</b>",
          "Leads, purchases, conversion rate, average order value, revenue/ROAS"
        ],
        [
          "<b>Retention</b>",
          "Repeat purchase, churn/retention, customer satisfaction, customer lifetime value"
        ]
      ],
      "caption": "The five KPI families, one per journey stage."
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "The KPI selection rule",
      "html": "<b>Choose KPIs that match the business objective</b>: a large number of clicks is not valuable if the desired customer outcome does not occur. Exam questions test exactly this: e.g. \"a campaign has huge reach but flat sales: which KPI family was the wrong target?\" (Awareness metrics used where Conversion metrics were needed.)"
    },
    {
      "type": "example",
      "title": "Worked example: one integrated campaign",
      "bodyHtml": "<p>An e-business publishes an optimized product guide discoverable through organic search, buys paid search on high-intent queries pointing at a relevant landing page, has creators demonstrate the product with tracked referral links, recommends products from browsing behavior, and records every interaction in its CRM. Identify the five marketing disciplines at work, in order.</p>",
      "solutionHtml": "<ol>\n        <li><b>SEO</b>: the optimized guide earns organic visibility.</li>\n        <li><b>SEM</b>: paid search targets high-intent queries and lands on a relevant page.</li>\n        <li><b>Social / influencer / affiliate marketing</b>: creators demonstrate; partners use tracked referrals.</li>\n        <li><b>Personalization</b>: website behavior and preferences drive relevant recommendations and follow-up communication.</li>\n        <li><b>CRM</b>: interactions are recorded to support service, retention and future campaigns; analytics measures performance across the journey.</li>\n      </ol>"
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
          "title": "Drill set: channels, metrics and models",
          "html": "<ol>\n        <li>Which two SEO limbs do \"crawlability and HTTPS\" belong to? And \"links from trustworthy websites\"?</li>\n        <li>List the SEM metrics named in the lecture.</li>\n        <li>Which metric does the lecture warn against using as the primary indicator for social and influencer marketing?</li>\n        <li>Name the four affiliate marketing participants.</li>\n        <li>Distinguish operational CRM from analytical CRM.</li>\n        <li>CTR and CPC belong to which KPI family?</li>\n      </ol>\n      <p style=\"margin-top:8px\"><b>Answers:</b> 1. <b>Technical SEO</b>; off-page SEO. 2. Impressions, clicks, CTR, CPC, conversions, ROAS. 3. <b>Follower count alone</b>. 4. Merchant/advertiser, affiliate/publisher, customer, tracking/affiliate platform. 5. Operational CRM supports sales, marketing and service <i>activities</i>; analytical CRM uses customer data to generate <i>insights</i> for decisions. 6. <b>Acquisition</b>.</p>"
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Topic 6 Quiz: Digital Marketing for E-Business",
      "count": 8,
      "quizSlug": "06-digital-marketing-for-ebusiness"
    }
  ]
};

export default chapter;
