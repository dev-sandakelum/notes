import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "02-ebusiness-models-and-digital-value",
  "title": "Topic 2 Quiz: E-Business Models & Digital Value Creation",
  "questions": [
    {
      "prompt": "1. A business model is best described as a company's core strategy for how it:",
      "options": [
        "Advertises products to the widest possible audience",
        "Creates, delivers, and captures value",
        "Minimizes tax obligations across jurisdictions",
        "Recruits and retains skilled employees"
      ],
      "answer": 1,
      "explanation": "A business model outlines what product or service is sold, who the target customers are, how the company reaches them, and the plan to cover costs and make a profit, collectively, how it <b>creates, delivers and captures value</b>."
    },
    {
      "prompt": "2. Daraz, Uber and Airbnb are digital business models even though their products are physical. Why?",
      "options": [
        "They eventually deliver digital goods as well",
        "The digital component changes how value is created and delivered",
        "They only accept digital payments",
        "Physical products became digital after purchase"
      ],
      "answer": 1,
      "explanation": "A digital business does not necessarily have a digital <i>product</i>: the digital platform changes <b>how value is created and delivered</b> (marketplace reach, matching, convenience)."
    },
    {
      "prompt": "3. Which dimension pair correctly contrasts traditional and digital models?",
      "options": [
        "Traditional: global reach; Digital: geographically limited",
        "Traditional: often 24/7; Digital: often limited hours",
        "Traditional: slow customer feedback; Digital: often real-time",
        "Traditional: highly scalable; Digital: requires physical capacity"
      ],
      "answer": 2,
      "explanation": "Digital models give <b>real-time customer feedback</b> and potentially global reach, 24/7 hours and high scalability. Each other option reverses the actual direction of the contrast."
    },
    {
      "prompt": "4. A digital platform is best defined as a digital service that:",
      "options": [
        "Hosts a single company's product catalog",
        "Facilitates interactions between two or more distinct but interdependent groups of users",
        "Sells software licenses on an annual basis",
        "Provides cloud computing resources on demand"
      ],
      "answer": 1,
      "explanation": "Platform-based models (Daraz, Uber, Airbnb) <b>facilitate interactions between distinct but interdependent user groups</b>: buyers and sellers, riders and drivers, guests and hosts."
    },
    {
      "prompt": "5. Customers receive a basic version for free while advanced features require payment. This is the:",
      "options": [
        "Subscription model",
        "On-demand model",
        "Freemium model",
        "Marketplace model"
      ],
      "answer": 2,
      "explanation": "Freemium = free basic version + paid advanced features (typical of software applications). Subscription charges a recurring fee for continued access; on-demand provides the service when requested."
    },
    {
      "prompt": "6. Which of the following is NOT one of the marketplace revenue sources listed in the lecture?",
      "options": [
        "Commission",
        "Government subsidy",
        "Seller fees",
        "Premium seller services"
      ],
      "answer": 1,
      "explanation": "Marketplace revenue comes from commission, transaction fees, seller fees, advertising and premium seller services. Government subsidy is not a marketplace revenue source."
    },
    {
      "prompt": "7. More buyers on a marketplace attract more sellers, which in turn increases choice for buyers. This is an example of:",
      "options": [
        "A direct network effect",
        "An indirect network effect",
        "A digital value chain",
        "Replenishment purchasing"
      ],
      "answer": 1,
      "explanation": "An <b>indirect</b> network effect: the value for one group (buyers) increases because the number of users in another group (sellers) increases. A direct effect would be more same-type users (e.g. more friends on a messaging app)."
    },
    {
      "prompt": "8. In the digital value chain, what re-enters the chain after the customer receives their order?",
      "options": [
        "Reverse logistics only",
        "Ratings, reviews and customer data feeding analytics and improved recommendations",
        "A renewed procurement cycle with tier-one suppliers",
        "Nothing: the chain ends at delivery"
      ],
      "answer": 1,
      "explanation": "Customer interactions generate data; ratings &amp; reviews and customer data flow back through <b>analytics</b> into <b>improved recommendations</b>, becoming an input into future value creation. In e-business the chain also resolves returns, but the data loop is the defining digital feature."
    }
  ]
};

export default quiz;
