import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "04-designing-and-developing-ecommerce-websites",
    "number": 4,
    "title": "Designing & developing e-commerce websites",
    "subtitle": "Lecture 04 · Core functions, UX/UI principles, information architecture, catalog, search, filtering & mobile-first",
    "kind": "topic",
    "words": 2260,
    "minutes": 11
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "what-is-an-e-commerce-website",
      "text": "What is an e-commerce website?"
    },
    {
      "type": "paragraph",
      "html": "An e-commerce website is <b>a digital platform that lets a business showcase, sell and manage products or services online</b>, covering the full customer journey <b>from product discovery to payment and delivery</b>. It combines a <b>customer-facing storefront</b> with <b>back-office systems</b> for inventory, orders and payments, and it must work reliably for <b>many simultaneous users, across many devices and locations</b>. Success depends as much on <b>design and usability</b> as on the underlying technology: a theme this lecture develops throughout."
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">Always on</div><div class=\"f-b\">The storefront operates <b>continuously, worldwide</b>, with no fixed opening hours.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Data-driven</div><div class=\"f-b\"><b>Clicks, searches and purchases can be tracked</b> to continuously improve the experience.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Multi-device</div><div class=\"f-b\">Customers move between <b>desktop, tablet and phone</b> within a single shopping journey.</div></div>\n  </div>",
      "alt": "Three defining characteristics of an e-commerce website: always on, data-driven, multi-device",
      "caption": "Three defining characteristics: always on, data-driven, multi-device."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "core-functions-of-an-e-commerce-system",
      "text": "Core functions of an e-commerce system"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "front-end-customer-facing-functions",
      "text": "Front-end: customer-facing functions"
    },
    {
      "type": "paragraph",
      "html": "The front-end contains the features a shopper interacts with directly while browsing and buying. <b>Product browsing &amp; catalog</b>: category pages and listings that display products with images, names and prices. <b>Search &amp; filtering</b>: tools that help shoppers locate specific products quickly within a large catalog. <b>Shopping cart</b>: a temporary holding area for items a customer intends to purchase. <b>Checkout &amp; payment</b>: the guided process that turns a cart into a confirmed, paid order. <b>User accounts</b>: registration, login, saved addresses, order history and wishlists. <b>Customer support</b>: live chat, FAQs and contact options that resolve doubts before they cause drop-off."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "back-end-administrative-and-system-functions",
      "text": "Back-end: administrative & system functions"
    },
    {
      "type": "paragraph",
      "html": "The back-end keeps the storefront running and up to date. <b>Inventory management</b> tracks stock levels in real time so unavailable items aren't sold. <b>Order management</b> processes, packs, ships and handles returns or exchanges. <b>Content management (CMS)</b> updates product details, pricing, banners and promotions without new code. <b>Payment gateway integration</b> securely connects to processors such as <mark>PayHere, Stripe or PayPal</mark>: note PayHere is the Sri Lankan example. <b>User &amp; access management</b> controls admin roles, permissions and customer account data. <b>Analytics &amp; reporting</b> measures traffic, sales trends and conversion rates to guide decisions."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "payment-processing-and-security",
      "text": "Payment processing & security"
    },
    {
      "type": "paragraph",
      "html": "The checkout flow is <b>Browse → Add to Cart → Checkout → Payment Gateway → Confirmation</b>. Every completed sale depends on this hand-off being both <b>smooth for the customer and secure end-to-end</b>. Four safeguards make it secure: <b>SSL/TLS encryption</b> encrypts data in transit between the customer's browser and the server; <b>PCI-DSS compliance</b> is the industry standard for handling and storing cardholder data safely; <b>tokenization</b> replaces sensitive card details with a non-reversible token for storage; and <b>fraud detection</b> flags unusual transaction patterns before an order is confirmed."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "ux-ui-design-principles-for-e-commerce",
      "text": "UX/UI design principles for e-commerce"
    },
    {
      "type": "paragraph",
      "html": "<b>UX (User Experience)</b> is <i>how easily and confidently a customer can complete a task</i>: finding a laptop, comparing options and checking out without confusion. <b>UI (User Interface)</b> is <i>the visual and interactive layer</i>: buttons, typography, colors, product cards, icons, spacing and form controls. UX is about the journey; UI is about the surface the journey happens on. A beautiful UI with a confusing checkout is a UI success and a UX failure: keep the two axes separate when evaluating a design."
    },
    {
      "type": "paragraph",
      "html": "The lecture's six core design principles: <b>simplicity &amp; clarity</b> (minimise cognitive load: clear labels, short paths, no unnecessary steps), <b>consistency</b> (uniform colours, fonts and button styles across every page and screen), <b>visual hierarchy</b> (guide the eye to what matters most: product, price and call-to-action), <b>immediate feedback</b> (loading states, confirmations and clear error messages at every action), <b>accessibility</b> (sufficient colour contrast, alt text and full keyboard navigation), and <b>trust &amp; credibility</b> (a professional, polished look signals a safe place to enter payment details)."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "visual-design-elements",
      "text": "Visual design elements"
    },
    {
      "type": "paragraph",
      "html": "For <b>colour</b>: use brand colour purposefully and reserve one strong accent colour exclusively for calls-to-action like \"Add to Cart\". For <b>typography</b>: limit pages to two font families and keep prices and headings legible at a glance. For <b>whitespace</b>: avoid clutter: generous spacing lets product images and key details breathe. For <b>imagery</b>: high-quality, consistent product photography raises perceived value and trust. The lecture's good-vs-poor comparison is explicit: <mark>a good product card shows clear hierarchy, one CTA colour and plenty of whitespace; a poor one has competing colours, a crowded layout and no clue which button matters</mark>."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "building-trust-and-reducing-friction",
      "text": "Building trust & reducing friction"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "Trust badges &amp; secure checkout icons visible near payment fields",
        "Genuine customer reviews and star ratings on product pages",
        "Clear, prominent calls-to-action: one primary action per screen",
        "Transparent pricing: shipping and tax shown early, not at the last step",
        "Guest checkout available: registration is optional, not forced",
        "Return and refund policy is easy to find before purchase"
      ]
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "The example to remember",
      "html": "The model product page in the lecture (wireless over-ear headphones, Rs. 12,500) shows every trust cue at once: review count, price with <i>\"Incl. tax · Free shipping over Rs. 5,000\"</i>, one <b>ADD TO CART</b> CTA, and <i>\"Secure checkout · 30-day returns\"</i> directly under the button."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "information-architecture-and-navigation-design",
      "text": "Information architecture & navigation design"
    },
    {
      "type": "paragraph",
      "html": "<b>Information architecture (IA)</b> is the practice of <b>organising, structuring and labelling content so it is findable and usable</b>. Four rules from the lecture: use <b>logical categorisation that matches how customers think</b> about products; keep a <b>shallow hierarchy</b>: any product reachable within <b>2-3 clicks</b>; use <b>consistent labelling</b> of categories, filters and navigation terms; and build a <b>scalable structure</b> that accommodates new products and categories. The example hierarchy runs Home → Electronics / Fashion / Home &amp; Living → Laptops → Gaming Laptop X15, with a breadcrumb trail mirroring the same path."
    },
    {
      "type": "table",
      "head": [
        "Navigation pattern",
        "What it does"
      ],
      "rows": [
        [
          "<b>Global navigation</b>",
          "Primary categories stay visible on every page"
        ],
        [
          "<b>Mega menus</b>",
          "Multi-column dropdowns organise a large catalogue at a glance"
        ],
        [
          "<b>Breadcrumbs</b>",
          "Show the current location and let users step back easily"
        ],
        [
          "<b>Sticky navigation</b>",
          "Menu and cart icon stay visible while the page is scrolled"
        ],
        [
          "<b>Footer navigation</b>",
          "Secondary links (policies, contact, sitemap) live in the footer"
        ]
      ],
      "caption": "Five navigation design patterns."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "product-catalog-search-and-filtering",
      "text": "Product catalog, search & filtering"
    },
    {
      "type": "paragraph",
      "html": "Two page types dominate the catalog. The <b>product listing page (PLP)</b> offers a grid or list view of products within a category, with a product image, name, price and rating snapshot; supports <b>quick-add-to-cart without opening the full page</b>; and uses pagination or infinite scroll for large result sets. The <b>product detail page (PDP)</b> has an image gallery with zoom plus variant selectors; title, price, stock status and a clear primary CTA; description, specifications and customer reviews; and related products."
    },
    {
      "type": "paragraph",
      "html": "Search must be <b>forgiving</b>. <b>Autocomplete</b> suggests matching products and categories as the user types, before pressing enter. <b>Typo tolerance</b> means a search for \"sneekers\" still returns results for \"sneakers\": prefix plus fuzzy matching keeps the shopper in flow. <b>Relevance ranking</b> orders results by relevance, popularity and current stock availability. <b>Visual &amp; voice search</b> are emerging ways to search using a photo or a spoken query. <b>No-results handling</b> suggests close alternatives instead of a dead end. In the lecture's example, typing \"run\" instantly surfaces Running Shoes (Men), Running Shorts and Running Watch: GPS."
    },
    {
      "type": "paragraph",
      "html": "<b>Faceted navigation</b> filters a catalog along multiple dimensions at once. <b>Facets</b> include price range, brand, size, colour, rating and availability. <b>Sorting</b> covers relevance, price (low–high), newest and best-selling. <b>Applied filter chips</b> show active filters as removable tags above the results, and a <b>live result count</b> updates the number of matching products instantly. The example shows a laptops category filtered to Dell + price 100k–300k with \"128 results · Sort: Price (Low to High)\"."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "responsive-and-mobile-first-design",
      "text": "Responsive & mobile-first design"
    },
    {
      "type": "paragraph",
      "html": "Responsive design rests on three core concepts: <b>fluid grid layouts</b> (proportional widths (%, <code>fr</code>) instead of fixed pixel columns), <b>flexible images &amp; media</b> (images and video scale to fit within their containers), and <b>CSS media queries</b> (breakpoints adapt the layout to the available screen width). The layout flows from desktop to tablet to mobile off the same source."
    },
    {
      "type": "paragraph",
      "html": "The <b>mobile-first approach</b> inverts the starting point: <mark>design for the smallest screen and the biggest constraints first (limited space, touch input, variable network speed) then progressively enhance the layout for larger screens</mark>. Its four tactics: <b>thumb-friendly tap targets</b> (buttons and links sized at least ~44×44px so they're easy to tap accurately), <b>simplified navigation</b> (condensed, single-column layouts with a hamburger menu for secondary items), <b>streamlined checkout</b> (fewer form fields, autofill, and mobile wallets like Apple Pay or Google Pay), and <b>fast load times</b> (compressed images and lazy loading keep pages quick on mobile networks)."
    },
    {
      "type": "table",
      "head": [
        "Aspect",
        "Desktop layout",
        "Mobile layout"
      ],
      "rows": [
        [
          "<b>Columns</b>",
          "Multi-column grid, more content per screen",
          "Columns collapse to one"
        ],
        [
          "<b>Menu</b>",
          "Full top navigation",
          "Menu becomes a hamburger"
        ],
        [
          "<b>CTA</b>",
          "In the content flow",
          "CTA sticks to the bottom"
        ],
        [
          "<b>Tap targets</b>",
          "Mouse-precise",
          "Bigger tap targets, less on screen"
        ]
      ],
      "caption": "Desktop vs mobile layout: the four key differences."
    },
    {
      "type": "example",
      "title": "Worked example: diagnose the product page",
      "bodyHtml": "<p>An online store's \"Add to Cart\" button is grey, while a \"Sign up for our newsletter\" button above it is bright orange. Stock and delivery cost appear for the first time on the payment step, and registration is compulsory before checkout. Customers abandon at checkout. Identify at least four design problems and name the principle each violates.</p>",
      "solutionHtml": "<ul>\n        <li><b>Wrong accent usage</b>: the strong accent colour must be reserved for the primary CTA (Add to Cart), not a newsletter signup. (Visual hierarchy / colour.)</li>\n        <li><b>Hidden costs</b>: shipping should be shown early, not at the last step. (Transparent pricing / reducing friction.)</li>\n        <li><b>Forced registration</b>: guest checkout should be available. (Reducing friction.)</li>\n        <li><b>Competing CTAs</b>: one primary action per screen is expected. (Simplicity &amp; clarity.)</li>\n        <li>Optionally: no visible trust badges/reviews near the payment step. (Trust &amp; credibility.)</li>\n      </ul>"
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
          "title": "Drill set: functions, IA and search",
          "html": "<ol>\n        <li>Classify each as front-end or back-end: (a) interactive product filters, (b) inventory updates, (c) saved addresses, (d) analytics &amp; reporting, (e) order processing.</li>\n        <li>What is the maximum click-depth recommended for any product in a well-designed IA?</li>\n        <li>A shopper types \"sneekers\" and still sees sneakers. Which search feature is this?</li>\n        <li>Name the three core concepts of responsive design.</li>\n        <li>State the minimum recommended size for thumb-friendly tap targets.</li>\n      </ol>\n      <p style=\"margin-top:8px\"><b>Answers:</b> 1. Front-end: a, c. Back-end: b, d, e. 2. <b>2-3 clicks</b>. 3. <b>Typo tolerance</b> (fuzzy matching). 4. <b>Fluid grid layouts, flexible images &amp; media, CSS media queries</b>. 5. <b>~44×44px</b>.</p>"
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Topic 4 Quiz: Designing & Developing E-Commerce Websites",
      "count": 8,
      "quizSlug": "04-designing-and-developing-ecommerce-websites"
    }
  ]
};

export default chapter;
