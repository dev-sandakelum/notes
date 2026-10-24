import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "04-government-intervention-in-markets",
  "title": "Topic 4 Quiz",
  "questions": [
    {
      "prompt": "1. To be effective (binding), a maximum price must be set:",
      "options": [
        "Above equilibrium",
        "Below equilibrium",
        "Exactly at equilibrium",
        "At the supply intercept"
      ],
      "answer": 1,
      "explanation": "A ceiling above equilibrium does nothing; the market just clears at the lower equilibrium price."
    },
    {
      "prompt": "2. A binding minimum price in a market creates:",
      "options": [
        "Excess demand",
        "A black market",
        "Falling prices",
        "Excess supply (surplus)"
      ],
      "answer": 3,
      "explanation": "Price above equilibrium: Qs &gt; Qd → surplus."
    },
    {
      "prompt": "3. Consumer surplus is measured as the area:",
      "options": [
        "Between the demand curve and the market price",
        "Between the supply curve and the market price",
        "Below the supply curve",
        "Above the demand curve"
      ],
      "answer": 0,
      "explanation": "CS = what consumers were willing to pay minus what they paid; the triangle under D and above P."
    },
    {
      "prompt": "4. Qd = 720 − 4P and Qs = −120 + 2P. The equilibrium price is:",
      "options": [
        "160",
        "120",
        "140",
        "180"
      ],
      "answer": 2,
      "explanation": "840 = 6P → P = 140, Q = 160 (Tutorial 04-1 Q1)."
    },
    {
      "prompt": "5. A per-unit tax on producers shifts the supply curve:",
      "options": [
        "Right / downward",
        "Left / upward",
        "Not at all",
        "Perfectly vertical"
      ],
      "answer": 1,
      "explanation": "A tax raises the cost of supplying each unit, supply shifts up by the tax."
    },
    {
      "prompt": "6. Qd = 200 − 10P, Qs = −100 + 20P, tax = Rs. 3. Government tax revenue is:",
      "options": [
        "Rs. 300",
        "Rs. 240 only if producers pay",
        "Rs. 60",
        "Rs. 240 (3 × 80)"
      ],
      "answer": 3,
      "explanation": "New supply −160+20P → Pₜ=12, Qₜ=80 → revenue = 3 × 80 = 240."
    },
    {
      "prompt": "7. Which is NOT a type of market failure?",
      "options": [
        "Perfect competition",
        "Externalities",
        "Public goods",
        "Imperfect information"
      ],
      "answer": 0,
      "explanation": "Perfect competition is the efficient benchmark; the other three are classic market failures justifying intervention."
    },
    {
      "prompt": "8. Buffer stock schemes are best suited to:",
      "options": [
        "Perishable services",
        "Long-term industrial policy",
        "Storable agricultural goods with volatile supply",
        "Monopoly pricing"
      ],
      "answer": 2,
      "explanation": "Buffer stocks buy in good harvests and release in bad ones, short-term, requires storability, agriculture."
    }
  ]
};

export default quiz;
