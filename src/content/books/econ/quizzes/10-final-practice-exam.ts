import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "10-final-practice-exam",
  "title": "TCS 2112 practice exam",
  "questions": [
    {
      "prompt": "1. The foundation concept of economics is:",
      "options": [
        "Opportunity cost",
        "Scarcity",
        "Choice",
        "Trade-off"
      ],
      "answer": 1,
      "explanation": "Scarcity → choice → trade-off → opportunity cost; the chain starts with scarcity."
    },
    {
      "prompt": "2. Which of these is a normative statement?",
      "options": [
        "The inflation rate fell to 4%",
        "Unemployment rose by 2 points",
        "Exports exceeded imports last year",
        "Minimum wages should be increased"
      ],
      "answer": 3,
      "explanation": "“Should” signals a value judgement: normative."
    },
    {
      "prompt": "3. An economy operating at a point inside its PPC is:",
      "options": [
        "Unattainable",
        "Efficient",
        "Inefficient: resources unemployed",
        "Beyond its production capacity"
      ],
      "answer": 2,
      "explanation": "Inside the frontier: both goods can still be increased, unemployment/inefficiency."
    },
    {
      "prompt": "4. Using the rice-clothes PPC (A: 0/150, B: 20/140, C: 40/125, D: 60/105, E: 80/70, F: 100/0), the opportunity cost of moving D→E is:",
      "options": [
        "35 clothes",
        "20 clothes",
        "70 clothes",
        "15 clothes"
      ],
      "answer": 0,
      "explanation": "D→E: +20 rice costs 105 − 70 = 35 clothes."
    },
    {
      "prompt": "5. If good X is inferior, a rise in consumer income shifts the demand for X:",
      "options": [
        "Right",
        "Nowhere: income never shifts demand",
        "Left",
        "Along the curve upward"
      ],
      "answer": 2,
      "explanation": "Inferior good: higher income → lower demand (leftward shift)."
    },
    {
      "prompt": "6. Qd = 260 − 3P and Qs = −140 + 2P. Equilibrium price and quantity:",
      "options": [
        "P = 90, Q = 20",
        "P = 80, Q = 20",
        "P = 400, Q = 5",
        "P = 80, Q = 14"
      ],
      "answer": 1,
      "explanation": "400 = 5P → P = 80; Q = 260 − 240 = 20."
    },
    {
      "prompt": "7. A maximum price set above the equilibrium price will:",
      "options": [
        "Create a shortage",
        "Create a surplus",
        "Create a black market",
        "Have no effect: it is not binding"
      ],
      "answer": 3,
      "explanation": "A non-binding ceiling: the market clears below it at the equilibrium price."
    },
    {
      "prompt": "8. In the rice market Qd = 1320 − 6P, Qs = −680 + 4P with a maximum price Rs. 180, the shortage equals:",
      "options": [
        "200 units",
        "120 units",
        "40 units",
        "No shortage occurs"
      ],
      "answer": 0,
      "explanation": "At 180: Qd = 240, Qs = 40 → excess demand of 200."
    },
    {
      "prompt": "9. A per-unit tax of Rs. 5 is levied on sugar (Qd = 260 − 3P, Qs = −140 + 2P). The new supply equation is:",
      "options": [
        "Qs = −140 + 2(P + 5)",
        "Qs = −135 + 2P",
        "Qs = −150 + 2P",
        "Qs = −130 + 2P"
      ],
      "answer": 2,
      "explanation": "Tax: producers keep P − 5 → Qs = −140 + 2(P − 5) = −150 + 2P."
    },
    {
      "prompt": "10. When MP is above AP:",
      "options": [
        "AP is falling",
        "AP is rising",
        "TP is falling",
        "MP must be negative"
      ],
      "answer": 1,
      "explanation": "MP &gt; AP pulls the average up; MP &lt; AP pulls it down; they meet at AP’s peak."
    },
    {
      "prompt": "11. Fixed costs include all of the following EXCEPT:",
      "options": [
        "Rent on the factory building",
        "Insurance premiums",
        "Depreciation of machinery",
        "Raw material purchases"
      ],
      "answer": 3,
      "explanation": "Materials vary with output: a prime/variable cost."
    },
    {
      "prompt": "12. Kamal (Rs. 12, Px = 2, Py = 1) maximizes utility at approximately:",
      "options": [
        "X = 3, Y = 5 (TU = 54)",
        "X = 5, Y = 2 (TU = 46)",
        "X = 1, Y = 8 (TU = 42)",
        "X = 5, Y = 1 (TU = 39)"
      ],
      "answer": 0,
      "explanation": "Ranking MU/rupee: Y₁, Y₂, Y₃, X₁, Y₄, X₂, Y₅, X₃ → 3X + 5Y = Rs. 11, TU 54 (the full-budget bundle X = 4, Y = 4 also reaches TU 54)."
    },
    {
      "prompt": "13. Rapid, runaway price increases that destroy confidence in the currency are:",
      "options": [
        "Creeping inflation",
        "Cost-push inflation",
        "Hyperinflation",
        "Deflation"
      ],
      "answer": 2,
      "explanation": "Hyperinflation: very rapid overall price rises, currency loses acceptance."
    },
    {
      "prompt": "14. The central bank controlling money supply and interest rates is:",
      "options": [
        "Fiscal policy",
        "Monetary policy",
        "Trade policy",
        "Incomes policy"
      ],
      "answer": 1,
      "explanation": "Monetary authority + money supply + interest rates = monetary policy."
    },
    {
      "prompt": "15. Country A gives up 3 tons of rice per ton of tea; Country B gives up 5 tons. Comparative advantage in tea belongs to:",
      "options": [
        "Country B",
        "Neither",
        "Both equally",
        "Country A"
      ],
      "answer": 3,
      "explanation": "Lower opportunity cost (3 &lt; 5) → Country A should specialise in tea."
    }
  ]
};

export default quiz;
