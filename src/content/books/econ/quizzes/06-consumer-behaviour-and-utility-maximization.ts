import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "06-consumer-behaviour-and-utility-maximization",
  "title": "Topic 6 Quiz",
  "questions": [
    {
      "prompt": "1. Utility differs from usefulness because utility is:",
      "options": [
        "Objective and measurable",
        "Subjective satisfaction",
        "Always equal to price",
        "The same for everyone"
      ],
      "answer": 1,
      "explanation": "Utility = satisfaction, which is subjective and differs between people, a useless item can give great utility."
    },
    {
      "prompt": "2. The ordinal approach to utility holds that utility:",
      "options": [
        "Can be measured in utils",
        "Can be added across people",
        "Cannot be measured but can be ranked",
        "Is always constant"
      ],
      "answer": 2,
      "explanation": "Ordinal = ranking alternatives 1st, 2nd, 3rd; cardinal = assigning numbers."
    },
    {
      "prompt": "3. When MU is negative:",
      "options": [
        "Total utility is falling",
        "Total utility is rising",
        "Total utility is at zero",
        "Price must be negative"
      ],
      "answer": 0,
      "explanation": "Beyond the saturation point extra units cause disutility. TU declines (7th yogurt: TU 30→28)."
    },
    {
      "prompt": "4. For a single product, the consumer’s optimum is where:",
      "options": [
        "MU = 0 always",
        "TU = P × Q",
        "MU is maximised",
        "MU = P (and M = P×Q)"
      ],
      "answer": 3,
      "explanation": "Two equilibrium conditions: MU = P for the last unit, and total spending equals available money."
    },
    {
      "prompt": "5. The equi-marginal rule for two goods A and B is:",
      "options": [
        "MU<sub>A</sub> = MU<sub>B</sub>",
        "MU<sub>A</sub>/P<sub>A</sub> = MU<sub>B</sub>/P<sub>B</sub>",
        "TU<sub>A</sub> = TU<sub>B</sub>",
        "P<sub>A</sub> = P<sub>B</sub>"
      ],
      "answer": 1,
      "explanation": "The last rupee spent on each good must yield equal marginal utility."
    },
    {
      "prompt": "6. With income Rs. 26, P<sub>A</sub> = 5, P<sub>B</sub> = 3 (slide 49 data), the utility-maximizing bundle is:",
      "options": [
        "5A + 0B",
        "2A + 5B",
        "3A + 3B (Rs. 24 spent, TU 60)",
        "4A + 2B (Rs. 26 spent, TU 62)"
      ],
      "answer": 3,
      "explanation": "The MU-per-rupee ranking path stops at 3A + 3B (TU 60, Rs. 2 unspent), but 4A + 2B spends the full Rs. 26 and yields TU = 46 + 16 = 62 > 60 — the 4th A (MU 6) adds more than the 3rd B (MU 4). Always check bundles that exhaust the budget."
    },
    {
      "prompt": "7. A consumer stops buying a free good when:",
      "options": [
        "MU becomes negative (or zero at the margin)",
        "TU becomes negative",
        "Price equals MU",
        "Income is exhausted"
      ],
      "answer": 0,
      "explanation": "Even free goods are consumed only while MU &gt; 0: beyond that they reduce total utility."
    },
    {
      "prompt": "8. The income effect of a price fall works through:",
      "options": [
        "Relative prices of other goods",
        "Diminishing marginal utility",
        "Changing tastes",
        "Increased real income / purchasing power"
      ],
      "answer": 3,
      "explanation": "A lower price makes the given money income buy more; the purchasing-power (income) effect."
    }
  ]
};

export default quiz;
