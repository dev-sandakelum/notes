import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "05-theory-of-production-and-cost",
  "title": "Topic 5 Quiz",
  "questions": [
    {
      "prompt": "1. In the short run:",
      "options": [
        "All inputs are variable",
        "Technology can change freely",
        "At least one input is fixed",
        "All costs are variable"
      ],
      "answer": 2,
      "explanation": "Short run = some inputs (plant, machines) fixed; only variable inputs can change."
    },
    {
      "prompt": "2. If TP = 0, 3, 10, 24 for L = 0, 1, 2, 3: MP of the 3rd worker is:",
      "options": [
        "10",
        "14",
        "24",
        "8"
      ],
      "answer": 1,
      "explanation": "MP = ΔTP = 24 − 10 = 14 (Tutorial 05 Q1)."
    },
    {
      "prompt": "3. The law of diminishing marginal returns states that adding more of one input (others fixed):",
      "options": [
        "Eventually lowers its marginal product",
        "Always raises total output forever",
        "Immediately lowers average product",
        "Has no effect on output"
      ],
      "answer": 0,
      "explanation": "MP rises at first, then eventually declines; the classic short-run law."
    },
    {
      "prompt": "4. Which cost is NOT incurred when output is zero?",
      "options": [
        "Rent",
        "Insurance",
        "Depreciation",
        "Wages of production workers"
      ],
      "answer": 3,
      "explanation": "Wages of direct production workers are variable costs, zero at zero output. The rest are fixed."
    },
    {
      "prompt": "5. Accounting profit exceeds economic profit because accountants ignore:",
      "options": [
        "Sunk costs",
        "Variable costs",
        "Implicit costs (owner-supplied resources)",
        "Marginal costs"
      ],
      "answer": 2,
      "explanation": "Economic profit subtracts explicit + implicit costs; the implicit part is normal profit."
    },
    {
      "prompt": "6. The MC curve intersects:",
      "options": [
        "AFC at its minimum",
        "Both AVC and ATC at their minimum points",
        "The demand curve",
        "TFC at its minimum"
      ],
      "answer": 1,
      "explanation": "MC passes through the minimum of AVC and of ATC, a favourite exam fact."
    },
    {
      "prompt": "7. When MP is rising, MC is:",
      "options": [
        "Falling",
        "Rising",
        "Constant",
        "Negative"
      ],
      "answer": 0,
      "explanation": "Production and cost are mirror images: MP ↑ → MC ↓; MP ↓ → MC ↑ (hence U-shaped MC)."
    },
    {
      "prompt": "8. Managerial diseconomies and worker alienation explain:",
      "options": [
        "Economies of scale",
        "The U-shape of AVC",
        "Constant returns to scale",
        "Diseconomies of scale (rising LRATC)"
      ],
      "answer": 3,
      "explanation": "Coordination, control, communication problems and alienation raise long-run average costs in very large firms."
    }
  ]
};

export default quiz;
