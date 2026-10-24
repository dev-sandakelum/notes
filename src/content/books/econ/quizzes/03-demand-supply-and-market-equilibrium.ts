import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "03-demand-supply-and-market-equilibrium",
  "title": "Topic 3 Quiz",
  "questions": [
    {
      "prompt": "1. The law of demand states that price and quantity demanded are:",
      "options": [
        "Positively related",
        "Unrelated",
        "Inversely related",
        "Equal at all prices"
      ],
      "answer": 2,
      "explanation": "Law of demand: higher price → lower quantity demanded (downward-sloping D curve)."
    },
    {
      "prompt": "2. Income is a flow measure; wealth is a:",
      "options": [
        "Flow measure too",
        "Stock measure",
        "Ratio measure",
        "Index number"
      ],
      "answer": 1,
      "explanation": "Wealth (net worth = assets − liabilities) is measured at a point in time: a stock."
    },
    {
      "prompt": "3. A rise in the price of tea will most likely:",
      "options": [
        "Shift the demand curve for coffee left",
        "Move along the coffee demand curve",
        "Have no effect on coffee",
        "Shift the demand curve for coffee right"
      ],
      "answer": 3,
      "explanation": "Tea and coffee are substitutes: dearer tea → consumers switch to coffee → coffee demand rises."
    },
    {
      "prompt": "4. Which event causes a MOVEMENT ALONG (not a shift of) the demand curve for rice?",
      "options": [
        "A fall in the price of rice",
        "A rise in consumer income",
        "A fall in the price of bread (substitute)",
        "A change in tastes toward rice"
      ],
      "answer": 0,
      "explanation": "Only the good's own price moves you along the curve; all other determinants shift it."
    },
    {
      "prompt": "5. Market supply is obtained by ______ the individual supply curves.",
      "options": [
        "Vertically averaging",
        "Multiplying",
        "Horizontally summing",
        "Subtracting"
      ],
      "answer": 2,
      "explanation": "Add quantities supplied by all firms at each price — horizontal summation (same for market demand)."
    },
    {
      "prompt": "6. Qd = 350 − 10P and Qs = −40 + 5P. The equilibrium price is:",
      "options": [
        "390",
        "26",
        "90",
        "15"
      ],
      "answer": 1,
      "explanation": "350 − 10P = −40 + 5P → 390 = 15P → P = 26; equilibrium quantity = 90."
    },
    {
      "prompt": "7. At the current market price, quantity demanded exceeds quantity supplied. This is:",
      "options": [
        "Excess demand — price will rise",
        "Excess supply — price will fall",
        "Equilibrium — price is stable",
        "A surplus — price will rise"
      ],
      "answer": 0,
      "explanation": "Shortage (excess demand) puts upward pressure on price until equilibrium is restored."
    },
    {
      "prompt": "8. If supply increases while demand is unchanged:",
      "options": [
        "Price rises, quantity falls",
        "Price and quantity both rise",
        "Price and quantity both fall",
        "Price falls, quantity rises"
      ],
      "answer": 3,
      "explanation": "Rightward supply shift: lower equilibrium price, higher equilibrium quantity."
    }
  ]
};

export default quiz;
