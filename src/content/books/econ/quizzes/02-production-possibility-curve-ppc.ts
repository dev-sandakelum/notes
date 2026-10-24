import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "02-production-possibility-curve-ppc",
  "title": "Topic 2 Quiz",
  "questions": [
    {
      "prompt": "1. A PPC is drawn assuming all of the following EXCEPT:",
      "options": [
        "Fixed resources",
        "Changing technology",
        "Full employment",
        "Only two goods produced"
      ],
      "answer": 1,
      "explanation": "Technology is assumed unchanged; a technology change would shift the curve."
    },
    {
      "prompt": "2. A point inside the PPC represents:",
      "options": [
        "Unattainable output",
        "Productive efficiency",
        "Inefficiency / unemployment",
        "Allocative efficiency"
      ],
      "answer": 2,
      "explanation": "Inside the curve = wasted or idle resources; more of both goods is still possible."
    },
    {
      "prompt": "3. The bowed-out (concave) shape of the PPC is explained by:",
      "options": [
        "Increasing opportunity cost",
        "Constant opportunity cost",
        "Decreasing opportunity cost",
        "Unlimited resources"
      ],
      "answer": 0,
      "explanation": "Resources are not equally suited to both uses, so each extra unit costs more of the other good."
    },
    {
      "prompt": "4. Using the rice-clothes table (A: 0 rice/150 clothes … F: 100 rice/0 clothes), the opportunity cost of moving C→D is:",
      "options": [
        "10 clothes",
        "15 clothes",
        "35 clothes",
        "20 clothes"
      ],
      "answer": 3,
      "explanation": "C (40,125) → D (60,105): 20 extra tons of rice cost 125−105 = 20 clothes."
    },
    {
      "prompt": "5. Many workers become unemployed. The PPC:",
      "options": [
        "Shifts inward",
        "Shifts outward",
        "Does not shift; economy moves inside",
        "Pivots on the X-axis"
      ],
      "answer": 2,
      "explanation": "Unemployment does not change productive capacity; it moves the operating point inside the unchanged curve."
    },
    {
      "prompt": "6. New fertiliser raises only paddy yields in a rice-and-clothes economy. The PPC:",
      "options": [
        "Shifts inward entirely",
        "Pivots outward on the rice axis",
        "Does not shift at all",
        "Pivots inward on the clothes axis"
      ],
      "answer": 1,
      "explanation": "A technology improvement in one good rotates the frontier outward along that good's axis only."
    },
    {
      "prompt": "7. Full production means:",
      "options": [
        "Every factor contributes its maximum to output",
        "All workers have jobs",
        "All machines are running",
        "Exports equal imports"
      ],
      "answer": 0,
      "explanation": "Full employment = all employable resources are used; full production = each factor contributes at maximum effectiveness."
    }
  ]
};

export default quiz;
