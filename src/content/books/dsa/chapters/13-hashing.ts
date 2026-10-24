import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "13-hashing",
    "number": 13,
    "title": "Hashing",
    "subtitle": "Lecture 14 · Hash table & hash function",
    "kind": "topic",
    "words": 645,
    "minutes": 3
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "the-problem-hashing-solves",
      "text": "The problem hashing solves"
    },
    {
      "type": "paragraph",
      "html": "Searching an <b>unsorted</b> array may require examining every element. If we knew the index of a value in advance, search would take <b>one probe. O(1)</b>. The function that turns a key into an index is the <b>hash function</b>."
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Definition",
      "html": "<b>Hashing</b> is the process of mapping a key value to a position in a table. A <b>hash function</b> maps key values to positions; a <b>hash table</b> is the array holding the records. Searching can then be done in <b>O(1)</b> regardless of table size."
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "Hash tables provide <b>near-O(1)</b> insert/locate: significantly faster than trees (O(log₂n)).",
        "Similar to arrays: you must know roughly <b>how many items</b> will populate the table (to pick the size).",
        "Sequential access makes little sense: items land in scattered (randomized) positions."
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "the-division-remainder-method",
      "text": "The division-remainder method"
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Exam alert",
      "html": "<code>ArrayIndex = someNumber % arraySize</code>: the classic hash function, called the <b>Division-Remainder method</b>. Any integer mod arraySize lands in the range <b>0 … arraySize−1</b>, e.g. anything mod 51 yields 0…50; 5280 mod 51 gives a value in that range, period."
    },
    {
      "type": "example",
      "title": "Converting words to numbers (lecture example)",
      "bodyHtml": "<p>Translate letters (a=1, b=2, …, t=20, s=19) and add: <b>cats = 3+1+20+19 = 43</b> → “cats” hashes to location 43.</p>",
      "solutionHtml": "<p>Many words can also sum to 43, e.g. other letter combinations with the same total. Different keys mapping to the same location are called <b>synonyms</b>, and the event of two keys wanting the same slot is a <b>collision</b>.</p>"
    },
    {
      "type": "example",
      "title": "Division method with size 125",
      "bodyHtml": "<p>42000 % 125 = 0 → index 0 · 42200 % 125 = 75 → index 75 · 42249 % 125 = 124 → index 124. All keys hash inside 0–124 ✓</p>",
      "solutionHtml": "<p>42000, <b>42125, 42250, 42375…</b> are all multiples of 125 apart; they ALL hash to index <b>0</b>. Similarly 40001, 42126, 42151… all hash to 1. A large input range squeezed into a small table <b>guarantees</b> collisions; the price of saving space (we cannot reserve a spot for every possible value).</p>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "hash-table-anatomy-and-operations",
      "text": "Hash table anatomy & operations"
    },
    {
      "type": "paragraph",
      "html": "A hash table is an <b>array of records</b>; each record carries a special field, its <b>key</b> (e.g. a Number field like 506643548). To insert a record: compute the <b>hash value</b> (e.g. Number mod 701) and store the record at that index. For 580625685: 580625685 mod 701 = <b>3</b>."
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Insert</b>: compute hash value; if occupied (collision), <b>move forward until an empty spot</b> is found; place the record there.",
        "<b>Search</b>: compute hash value; check that slot's key; if it doesn't match, <b>keep moving forward</b> until the key is found <b>or an empty spot</b> is reached (then it's absent).",
        "<b>Delete</b>: never leave a plain empty spot. Mark it <b>specially</b> (e.g. “previously occupied”) so future searches keep probing past it instead of stopping early."
      ]
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Exam alert",
      "html": "This forward-walking scheme is <b>linear probing</b>. The deleted-slot marking rule is a favourite trick question: deleting must NOT create an ordinary empty slot, or searches for keys probed <i>through</i> it would stop too early."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "interactive-hash-table-simulator",
      "text": "Interactive hash table simulator"
    },
    {
      "type": "viz",
      "kind": "hash",
      "caption": "Insertions probe linearly forward on collision · deletions leave a specially marked hole (dashed red) that searches skip past."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "hash-function-features",
      "text": "Hash function features"
    },
    {
      "type": "table",
      "head": [
        "Feature",
        "Meaning"
      ],
      "rows": [
        [
          "<b>Fixed length output</b>",
          "Arbitrary-length input → fixed-length <b>hash value</b> (also called a <b>message digest</b>); the hash is a compressed representation, hence “digest”"
        ],
        [
          "<b>Compression function</b>",
          "The hash is much smaller than the input, that's why hash functions are called compression functions"
        ],
        [
          "<b>Efficiency</b>",
          "For any hash h with input x, computing h(x) is a fast operation, faster than symmetric encryption"
        ]
      ]
    },
    {
      "type": "paragraph",
      "html": "Hash functions appear in almost all information-security applications; the same “randomizing” idea used for storage also underlies cryptography."
    },
    {
      "type": "flashcards",
      "cards": [
        {
          "front": "<span class=\"fc-q\">Division-remainder hash?</span>",
          "back": "<div class=\"fc-a\">ArrayIndex = key % arraySize</div>",
          "category": "Formula"
        },
        {
          "front": "<span class=\"fc-q\">Keys that hash to the same slot are…</span>",
          "back": "<div class=\"fc-a\">Synonyms, and the event is a collision</div>",
          "category": "Terms"
        },
        {
          "front": "<span class=\"fc-q\">Linear probing does what on collision?</span>",
          "back": "<div class=\"fc-a\">Moves forward one slot at a time until an empty spot</div>",
          "category": "Probe"
        },
        {
          "front": "<span class=\"fc-q\">Why not leave deleted slots plainly empty?</span>",
          "back": "<div class=\"fc-a\">Searches would stop early and miss keys probed beyond that slot</div>",
          "category": "Delete"
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Topic 12 Quiz: Hashing",
      "count": 8,
      "quizSlug": "13-hashing"
    }
  ]
};

export default chapter;
