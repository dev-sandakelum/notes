import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "13-hashing",
  "title": "Topic 12 Quiz — Hashing",
  "questions": [
    {
      "prompt": "1. The primary goal of hashing is to…",
      "options": [
        "Compress files",
        "Sort data faster",
        "Speed up searching to O(1)",
        "Balancing trees"
      ],
      "answer": 2,
      "explanation": "A hash function jumps straight to the index where a value lives — one probe."
    },
    {
      "prompt": "2. The Division-Remainder hash of 42200 with table size 125 is…",
      "options": [
        "75",
        "17",
        "336",
        "0"
      ],
      "answer": 0,
      "explanation": "42200 = 17 × 125 + 75 → remainder 75 → index 75."
    },
    {
      "prompt": "3. Two keys hashing to the same location is called a ______; the keys are ______.",
      "options": [
        "probe / duplicates",
        "collision / synonyms",
        "overflow / clones",
        "digest / hashes"
      ],
      "answer": 1,
      "explanation": "Collision is the event; the colliding keys are synonyms."
    },
    {
      "prompt": "4. “cats” hashing to 43 (3+1+20+19) illustrates…",
      "options": [
        "Linear probing",
        "Chaining",
        "The folding method",
        "Converting a String key to a number before hashing"
      ],
      "answer": 3,
      "explanation": "String keys are converted to numeric form first (a=1 … z=26, then summed) so the hash function can process them."
    },
    {
      "prompt": "5. When a collision occurs on insert, linear probing…",
      "options": [
        "Moves forward until an empty spot is found",
        "Overwrites the existing record",
        "Doubles the table size",
        "Discards the new key"
      ],
      "answer": 0,
      "explanation": "Walk forward slot by slot; the first empty cell hosts the record."
    },
    {
      "prompt": "6. A hash-table search stops (declaring “not found”) when it reaches…",
      "options": [
        "The end of the array",
        "A specially-marked deleted slot",
        "An empty spot",
        "A synonym"
      ],
      "answer": 2,
      "explanation": "Empty ⇒ no probe ever passed here ⇒ the key was never inserted. Marked-deleted slots are passed through, not stopping points."
    },
    {
      "prompt": "7. Deleting a hash-table record must…",
      "options": [
        "Leave the slot plainly empty",
        "Mark the slot specially so searches continue past it",
        "Rebuild the whole table",
        "Shift all later records left"
      ],
      "answer": 1,
      "explanation": "A plain empty slot would break searches for synonyms inserted beyond it."
    },
    {
      "prompt": "8. Which is NOT a listed feature of hash functions?",
      "options": [
        "Fixed-length output (digest)",
        "Compression of arbitrary-length input",
        "Fast computation",
        "Guaranteed uniqueness of every output"
      ],
      "answer": 3,
      "explanation": "Outputs are NOT guaranteed unique — finite output space with huge input space forces collisions (pigeonhole principle)."
    }
  ]
};

export default quiz;
