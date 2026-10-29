import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "04-designing-and-developing-ecommerce-websites",
  "title": "Topic 4 Quiz: Designing & Developing E-Commerce Websites",
  "questions": [
    {
      "prompt": "1. Which set contains only FRONT-END (customer-facing) functions?",
      "options": [
        "Inventory management, order management, analytics",
        "Product browsing, search &amp; filtering, shopping cart, customer support",
        "Payment gateway integration, CMS, user &amp; access management",
        "Analytics, reporting, order processing"
      ],
      "answer": 1,
      "explanation": "Front-end: product browsing &amp; catalog, search &amp; filtering, shopping cart, checkout &amp; payment (the guided flow), user accounts and customer support. The rest are back-office functions."
    },
    {
      "prompt": "2. Replacing sensitive card details with a non-reversible token for storage is called:",
      "options": [
        "Tokenization",
        "Encryption in transit",
        "PCI-DSS compliance",
        "Fraud detection"
      ],
      "answer": 0,
      "explanation": "<b>Tokenization</b> replaces card details with a token for storage. SSL/TLS encrypts data in transit; PCI-DSS is the cardholder-data compliance standard; fraud detection flags unusual transaction patterns."
    },
    {
      "prompt": "3. UX and UI differ in that:",
      "options": [
        "UX is the visual layer; UI is the task-completion experience",
        "UX is how easily and confidently a customer completes a task; UI is the visual and interactive layer",
        "UX applies to mobile only; UI applies to desktop only",
        "They are two names for the same thing"
      ],
      "answer": 1,
      "explanation": "UX = the experience of completing a task (finding, comparing, checking out without confusion). UI = buttons, typography, colors, product cards, icons, spacing and form controls."
    },
    {
      "prompt": "4. According to the lecture's IA guidance, any product should be reachable within:",
      "options": [
        "1 click",
        "2-3 clicks",
        "5-7 clicks",
        "There is no recommended limit"
      ],
      "answer": 1,
      "explanation": "Keep a <b>shallow hierarchy</b>: any product reachable within <b>2-3 clicks</b>, with logical categorisation matching how customers think, consistent labelling and a scalable structure."
    },
    {
      "prompt": "5. A search for \"sneekers\" still returns results for \"sneakers\". Which search feature is this?",
      "options": [
        "Autocomplete",
        "Relevance ranking",
        "Typo tolerance",
        "No-results handling"
      ],
      "answer": 2,
      "explanation": "Typo tolerance (prefix + fuzzy matching) returns relevant items despite the misspelling, keeping the shopper in flow. Autocomplete suggests as the user types; relevance ranking orders results."
    },
    {
      "prompt": "6. Which of the following is a recommended trust-building practice from the lecture?",
      "options": [
        "Show shipping and tax costs only at the final payment step",
        "Force registration before checkout to build a customer database",
        "Provide guest checkout and make the return/refund policy easy to find",
        "Use several strong accent colours so all actions stand out"
      ],
      "answer": 2,
      "explanation": "Trust and friction reduction: trust badges near payment fields, genuine reviews, one primary CTA per screen, <b>transparent early pricing</b>, <b>guest checkout available</b>, and an easy-to-find return policy. One strong accent colour is reserved for CTAs."
    },
    {
      "prompt": "7. The three core concepts of responsive design are:",
      "options": [
        "Fluid grids, flexible images/media, CSS media queries",
        "Mega menus, breadcrumbs, sticky navigation",
        "Autocomplete, facets, sorting",
        "HTTPS, CSP, secure cookies"
      ],
      "answer": 0,
      "explanation": "Responsive design = fluid grid layouts (proportional % and fr widths), flexible images &amp; media, and CSS media queries at breakpoints."
    },
    {
      "prompt": "8. In the mobile-first approach, thumb-friendly tap targets should be sized at least:",
      "options": [
        "~24×24px",
        "~44×44px",
        "~64×64px",
        "Size is not a mobile-first concern"
      ],
      "answer": 1,
      "explanation": "Buttons and links should be at least <b>~44×44px</b> so they are easy to tap accurately. Mobile-first also means simplified navigation, streamlined checkout and fast load times."
    }
  ]
};

export default quiz;
