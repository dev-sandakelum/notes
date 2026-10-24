import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "09-master-cheat-sheet",
    "number": 9,
    "title": "Master cheat sheet",
    "subtitle": "Click any card to flip it, perfect for last-minute revision",
    "kind": "cheatsheet",
    "words": 802,
    "minutes": 4
  },
  "blocks": [
    {
      "type": "paragraph",
      "html": "Every exam-critical definition, formula and comparison from the course, condensed onto flip cards. <b>Click a card</b> to see the answer; click again to hide it. Work through them until you can recall the back of every card from the front alone."
    },
    {
      "type": "flashcards",
      "cards": [
        {
          "front": "<b>Object Orientation</b><small>the one-line definition</small>",
          "back": "Viewing a system as a set of interacting, interrelated objects, each object encapsulating its data and behavior.",
          "category": "Basics"
        },
        {
          "front": "<b>OOA / OOD / OOP</b><small>three stages, three questions</small>",
          "back": "OOA: what exists in the problem domain? · OOD: how should software objects work together? · OOP: how do we implement them in code?",
          "category": "Basics"
        },
        {
          "front": "<b>Class vs Object</b><small>blueprint analogy</small>",
          "back": "Class = blueprint/template describing similar objects. Object = an actual instance created from it. House blueprint vs built house. Instance = one particular object with its own state.",
          "category": "Basics"
        },
        {
          "front": "<b>Attributes vs Methods</b><small>knows vs does</small>",
          "back": "Attributes → what does it know? (state) · Methods → what can it do? (behavior). State = attribute values now; behavior = operations available.",
          "category": "Basics"
        },
        {
          "front": "<b>Message passing</b><small>3 steps + 3 components</small>",
          "back": "Steps: sender sends → receiver receives → method executes (maybe returns). Components: object reference + method name + parameters. Sender = client, receiver = server.",
          "category": "Basics"
        },
        {
          "front": "<b>Method signature</b><small>what identifies an operation</small>",
          "back": "Method name + parameter list. getMyFundsFromBank(String bankName) → signature: getMyFundsFromBank(String).",
          "category": "Basics"
        },
        {
          "front": "<b>Abstraction</b><small>what, not how</small>",
          "back": "Focus on important aspects while ignoring unnecessary details; hides unnecessary complexity and exposes essential functionality. Map example; phone Accept/Reject example.",
          "category": "Pillars"
        },
        {
          "front": "<b>Encapsulation</b><small>package + protect</small>",
          "back": "Package data + operations together and control access (private balance; deposit/withdraw enforce rules). = separating external interface from hidden internal implementation. Advantages: integrity, security, control, flexibility, less complexity.",
          "category": "Pillars"
        },
        {
          "front": "<b>Encapsulation vs Abstraction</b><small>the exam classic</small>",
          "back": "Encapsulation: HOW do we package and protect data/implementation? · Abstraction: WHAT do we expose and what complexity do we hide?",
          "category": "Pillars"
        },
        {
          "front": "<b>Inheritance</b><small>is-a</small>",
          "back": "A class derives from another (parent/base/superclass → child/derived/subclass); mechanism for sharing and reusing attributes and behaviors. Car is-a Vehicle. Prefer composition when overused.",
          "category": "Pillars"
        },
        {
          "front": "<b>Polymorphism</b><small>many forms</small>",
          "back": "Same operation/interface produces different behavior depending on the object: vehicle.calculateParkingFee() differs for Car/Bike/Truck; payment.pay() for Card/PayPal/BankTransfer.",
          "category": "Pillars"
        },
        {
          "front": "<b>Cohesion vs Coupling</b><small>the golden rule</small>",
          "back": "Cohesion = internal relatedness of ONE class (want HIGH, one clear purpose). Coupling = dependency BETWEEN classes (want LOW, depend on abstractions). High cohesion + low coupling = good OO design.",
          "category": "Design quality"
        },
        {
          "front": "<b>Model vs Diagram</b><small>WHAT vs HOW</small>",
          "back": "Model = simplified/abstract representation of the whole system (the blueprint, WHAT). Diagram = one particular view of the model (floor plan, electrical, plumbing. HOW). Several diagrams represent one model.",
          "category": "Modelling"
        },
        {
          "front": "<b>UML: building blocks &amp; categories</b><small>3 blocks, 2 categories</small>",
          "back": "Building blocks: Things, Relationships, Diagrams. Structural: Class, Object, Component, Deployment. Behavioral: Use Case, Sequence, Activity, State Machine.",
          "category": "Modelling"
        },
        {
          "front": "<b>Functional vs Non-functional</b><small>what vs how-well</small>",
          "back": "FR = what the system should do (\"validate PIN\"). NFR = constraint on how it operates (\"validate within 3 seconds\", encryption, 99.9% availability, 500 concurrent users).",
          "category": "Use cases"
        },
        {
          "front": "<b>Actor types</b><small>primary / supporting / offstage</small>",
          "back": "Primary: has the goal, uses the system (Customer). Supporting: provides a service TO the system (Payment Gateway). Offstage: has an interest, never touches the system (Tax Authority). Actor = role, not name.",
          "category": "Use cases"
        },
        {
          "front": "<b>«include» vs «extend»</b><small>MUST vs EXTRA</small>",
          "back": "Include: mandatory reuse, Base → Included (Deposit Funds → Update Balance; Place Order → Login). Extend: optional addition, Extension → Base (Calculate Bonus → Deposit Funds; Issue Fine → Return Book).",
          "category": "Use cases"
        },
        {
          "front": "<b>Fully dressed fields</b><small>the template</small>",
          "back": "Name · Primary Actor · Stakeholders &amp; Interests · Preconditions (true before start) · Main Success Scenario · Extensions (what can go wrong) · Postconditions/Success Guarantees (true after).",
          "category": "Use cases"
        },
        {
          "front": "<b>Naming + CRUD</b><small>verb + object</small>",
          "back": "Name use cases Verb + Object: \"Borrow Book\", \"Place Order\" (not \"Ticket Purchase\" or \"Pay\"). CRUD exception: Create/Read/Update/Delete goals combine into \"Manage Users\". One user goal → one use case.",
          "category": "Use cases"
        },
        {
          "front": "<b>Visibility modifiers</b><small>+ - # ~</small>",
          "back": "+ public (any class) · - private (same class only) · # protected (class + subclasses) · ~ package (same package). Attribute: visibility name : type. Operation: visibility name(params) : returnType.",
          "category": "Class diagrams"
        },
        {
          "front": "<b>Multiplicity</b><small>how many links</small>",
          "back": "1 exactly one (person–passport) · 0..1 optional (person–car) · * / 0..* many (library–books) · 1..* one or more (teacher–students) · m..n range (team 6..12 players).",
          "category": "Class diagrams"
        },
        {
          "front": "<b>Aggregation vs Composition</b><small>hollow vs solid diamond</small>",
          "back": "Aggregation: hollow diamond; part can exist independently (Instructor–Faculty; Department–Employee). Composition: solid diamond at the owner, multiplicity 1; parts die with the whole (House–Room; \"is entirely made of\").",
          "category": "Class diagrams"
        },
        {
          "front": "<b>Decision vs Fork</b><small>choose one vs run all</small>",
          "back": "Decision: one in, guarded flows out, ONE selected. Fork: one in, ALL flows out concurrently. Merge: any one incoming continues. Join: waits for ALL incoming to complete. Flow final kills one flow; activity final kills everything.",
          "category": "Activity diagrams"
        },
        {
          "front": "<b>Sequence vs Communication + message types</b><small>when vs how-connected</small>",
          "back": "Sequence: horizontal lifelines, top-to-bottom time. Communication: free layout + numbered messages (2.1 = nested in 2). Sync = wait; async = don't wait; return = dashed; X = destroy; self = reflexive. Lifelines: actor, boundary, control, entity.",
          "category": "Interaction"
        }
      ]
    }
  ]
};

export default chapter;
