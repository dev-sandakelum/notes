import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "07-basics-of-macroeconomics",
  "title": "Topic 7 Quiz",
  "questions": [
    {
      "prompt": "1. The labour force equals:",
      "options": [
        "The whole population",
        "Employed persons only",
        "Employed + unemployed (actively seeking work)",
        "Working-age population minus students"
      ],
      "answer": 2,
      "explanation": "Labour force = employed + unemployed who are actively looking for a job."
    },
    {
      "prompt": "2. Inflation caused by production cost increases is called:",
      "options": [
        "Demand-pull inflation",
        "Cost-push inflation",
        "Creeping inflation",
        "Hyperinflation"
      ],
      "answer": 1,
      "explanation": "Cost-push = supply-side: falling supply / rising production costs push up the price level."
    },
    {
      "prompt": "3. “Too much money chasing too few goods” describes:",
      "options": [
        "Demand-pull inflation",
        "Deflation",
        "Disinflation",
        "Stagflation"
      ],
      "answer": 0,
      "explanation": "Excess demand against limited output pulls prices up."
    },
    {
      "prompt": "4. Full employment means the unemployment rate equals:",
      "options": [
        "Zero",
        "The cyclical rate",
        "The inflation rate",
        "The natural unemployment rate (only frictional + structural)"
      ],
      "answer": 3,
      "explanation": "At full employment cyclical unemployment is zero; frictional and structural remain."
    },
    {
      "prompt": "5. GDP is the monetary value of all finished goods and services produced:",
      "options": [
        "By residents anywhere in the world",
        "Within a country’s borders in a specific period",
        "By the government only",
        "Excluding exports"
      ],
      "answer": 1,
      "explanation": "GDP is border-based (territory); it includes C + I + G + (X − M)."
    },
    {
      "prompt": "6. Fiscal policy operates through:",
      "options": [
        "Money supply and interest rates",
        "Exchange rate management",
        "Government spending and tax rates",
        "Wage controls"
      ],
      "answer": 2,
      "explanation": "Fiscal = budget tools (G and T); monetary = central bank tools (money supply, interest rates)."
    },
    {
      "prompt": "7. A prolonged fall in the general price level is:",
      "options": [
        "Deflation: potentially as damaging as inflation",
        "Hyperinflation",
        "Creeping inflation",
        "Reflation"
      ],
      "answer": 0,
      "explanation": "Deflation = negative inflation; sustained deflation harms output and employment."
    },
    {
      "prompt": "8. The business cycle refers to:",
      "options": [
        "Seasonal demand patterns",
        "Stock market volatility",
        "Company profit cycles",
        "Fluctuations in aggregate production around the long-term growth trend"
      ],
      "answer": 3,
      "explanation": "Expansions (booms) and contractions (recessions) in GDP around the trend line."
    }
  ]
};

export default quiz;
