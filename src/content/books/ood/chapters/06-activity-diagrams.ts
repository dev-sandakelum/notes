import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "06-activity-diagrams",
    "number": 6,
    "title": "Activity diagrams",
    "subtitle": "Week 6 · Activity Diagrams",
    "kind": "topic",
    "words": 1446,
    "minutes": 7
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "6-1-introduction",
      "text": "6.1 introduction"
    },
    {
      "type": "paragraph",
      "html": "Activity diagrams are <b>\"OO flowcharts\"</b>: they can show both <b>data flow and control flow</b>, and allow us to model a process as a collection of <b>activities</b> and <b>transitions</b> between those activities. They are particularly useful for <b>process modeling, behavior visualization, requirement analysis, process improvement, and communication among stakeholders</b>. The main purpose of an activity diagram is to model the flow of activities and actions within a system or process. They can also illustrate how actions are distributed across actors or components using <b>swimlanes</b>."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "6-2-elements-of-an-activity-diagram",
      "text": "6.2 elements of an activity diagram"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Action nodes</b>: represent executable steps.",
        "<b>Control nodes</b>: manage the flow of execution:\n      <ul>\n        <li>Initial and final nodes (final nodes have two varieties: <b>activity final</b> and <b>flow final</b>)</li>\n        <li><b>Decision and merge</b> nodes</li>\n        <li><b>Fork and join</b> nodes</li>\n      </ul>",
        "<b>Object nodes</b>: represent objects or data used within the activity."
      ]
    },
    {
      "type": "paragraph",
      "html": "An <b>activity</b> represents a behavior composed of one or more actions, a network of <b>nodes</b> connected by <b>edges</b>. Every activity begins with an <b>initial node</b> and ends with a <b>final node</b>."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "6-3-actions",
      "text": "6.3 actions"
    },
    {
      "type": "paragraph",
      "html": "<b>Actions</b> are the fundamental units of behavior in an activity diagram. They are represented as <b>rounded rectangles</b>, and the label may be written in plain English or pseudo-code. When written in English, the label should be a <b>verb or verb phrase</b>, since actions denote something being performed. Actions have three key properties:"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">Atomic</div><div class=\"f-b\">An action is not decomposed within the activity; it is treated as a single step.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Uninterruptible</div><div class=\"f-b\">Once an action begins execution, it runs to completion.</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Instantaneous</div><div class=\"f-b\">An action is assumed to take negligible time relative to the overall activity.</div></div>\n  </div>",
      "alt": "Formula reference cards"
    },
    {
      "type": "paragraph",
      "html": "<b>Action flows</b> (also called <b>edges</b> or <b>paths</b>) illustrate the transitions from one action state to another."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "6-4-starting-and-stopping",
      "text": "6.4 starting and stopping"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Initial node</b>: the starting point of an activity: a <b>solid filled circle</b>.",
        "<b>Activity final node</b>: termination of the <b>entire activity</b>: a bull's-eye symbol (filled circle inside an outer circle).",
        "<b>Flow final node</b>: a circle containing an <b>X</b>. It terminates <b>only the specific flow</b> reaching it, without ending the entire activity."
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "6-5-decision-and-merge-nodes",
      "text": "6.5 decision and merge nodes"
    },
    {
      "type": "paragraph",
      "html": "Decision and merge nodes are represented by a <b>diamond</b> shape and control <b>alternative flows</b> within an activity:"
    },
    {
      "type": "table",
      "head": [
        "Node",
        "Flows",
        "Behavior"
      ],
      "rows": [
        [
          "<b>Decision node</b>",
          "<b>One incoming, multiple outgoing</b>",
          "Each outgoing flow is guarded by a <b>condition (guard)</b>, e.g. <code>[is junk]</code>. Only <b>one path is selected</b> at runtime."
        ],
        [
          "<b>Merge node</b>",
          "<b>Multiple incoming, one outgoing</b>",
          "Combines alternative paths <b>without synchronization</b>: any one incoming flow can continue execution."
        ]
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "6-6-fork-and-join-nodes-concurrency",
      "text": "6.6 fork and join nodes: concurrency"
    },
    {
      "type": "paragraph",
      "html": "Activity diagrams support modeling of <b>concurrent flows</b> of execution, activities that can proceed <b>in parallel</b>. A <b>fork node</b> splits one flow into multiple concurrent flows; a <b>join node</b> synchronizes concurrent flows back into a single flow. Fork and join are analogous to decision and merge respectively. <b>the critical difference is concurrency</b>:"
    },
    {
      "type": "table",
      "head": [
        "",
        "Decision / Merge",
        "Fork / Join"
      ],
      "rows": [
        [
          "<b>Fork: flows out</b>",
          "Decision has one flow in and multiple flows out, but <b>selects a single</b> outbound flow",
          "Fork has one flow in and multiple flows out, and <b>ALL outbound flows occur concurrently</b>"
        ],
        [
          "<b>Join: flows in</b>",
          "Merge: <b>any one</b> incoming flow can continue",
          "Join: <b>ALL incoming flows must be completed</b> before the outbound flow begins"
        ],
        [
          "<b>Guards?</b>",
          "Yes: outgoing flows carry guard conditions",
          "No: all branches simply run in parallel"
        ]
      ]
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Exam classic: decision vs fork",
      "html": "Both have one incoming and multiple outgoing flows. A <b>decision</b> chooses <b>ONE</b> path (guarded alternatives); a <b>fork</b> starts <b>ALL</b> paths <b>concurrently</b>. Similarly, merge accepts any one incoming flow; join <b>waits for every</b> incoming flow to finish."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "6-7-notation-reference",
      "text": "6.7 notation reference"
    },
    {
      "type": "figure",
      "svg": "<svg viewBox=\"0 0 700 300\" role=\"img\" aria-label=\"Activity diagram notation reference\">\n      <!-- initial -->\n      <circle cx=\"70\" cy=\"46\" r=\"11\" fill=\"var(--text)\"></circle>\n      <text x=\"70\" y=\"80\" text-anchor=\"middle\" class=\"uml-text\" font-weight=\"700\">Initial node</text>\n      <text x=\"70\" y=\"94\" text-anchor=\"middle\" class=\"uml-muted\">start of activity</text>\n      <!-- activity final -->\n      <circle cx=\"70\" cy=\"146\" r=\"16\" class=\"uml-stroke\" stroke-width=\"2\" fill=\"none\"></circle>\n      <circle cx=\"70\" cy=\"146\" r=\"9\" fill=\"var(--text)\"></circle>\n      <text x=\"70\" y=\"186\" text-anchor=\"middle\" class=\"uml-text\" font-weight=\"700\">Activity final</text>\n      <text x=\"70\" y=\"200\" text-anchor=\"middle\" class=\"uml-muted\">ends entire activity</text>\n      <!-- flow final -->\n      <circle cx=\"70\" cy=\"246\" r=\"14\" class=\"uml-stroke\" stroke-width=\"2\" fill=\"none\"></circle>\n      <line x1=\"60\" y1=\"236\" x2=\"80\" y2=\"256\" class=\"uml-stroke\" stroke-width=\"2\"></line>\n      <line x1=\"80\" y1=\"236\" x2=\"60\" y2=\"256\" class=\"uml-stroke\" stroke-width=\"2\"></line>\n      <text x=\"70\" y=\"278\" text-anchor=\"middle\" class=\"uml-text\" font-weight=\"700\">Flow final</text>\n      <!-- action -->\n      <rect x=\"165\" y=\"28\" width=\"120\" height=\"38\" rx=\"17\" class=\"uml-soft uml-stroke\" stroke-width=\"1.8\"></rect>\n      <text x=\"225\" y=\"52\" text-anchor=\"middle\" class=\"uml-text\">Action</text>\n      <text x=\"225\" y=\"84\" text-anchor=\"middle\" class=\"uml-text\" font-weight=\"700\">Action node</text>\n      <text x=\"225\" y=\"98\" text-anchor=\"middle\" class=\"uml-muted\">rounded rectangle, verb phrase</text>\n      <!-- decision/merge -->\n      <polygon points=\"225,130 260,158 225,186 190,158\" class=\"uml-fill uml-stroke\" stroke-width=\"1.8\"></polygon>\n      <text x=\"225\" y=\"212\" text-anchor=\"middle\" class=\"uml-text\" font-weight=\"700\">Decision / Merge</text>\n      <text x=\"225\" y=\"226\" text-anchor=\"middle\" class=\"uml-muted\">guards [like this]</text>\n      <!-- fork/join -->\n      <rect x=\"200\" y=\"248\" width=\"50\" height=\"10\" rx=\"4\" fill=\"var(--text)\"></rect>\n      <text x=\"225\" y=\"282\" text-anchor=\"middle\" class=\"uml-text\" font-weight=\"700\">Fork / Join</text>\n      <!-- object node -->\n      <rect x=\"340\" y=\"28\" width=\"110\" height=\"38\" class=\"uml-fill uml-stroke\" stroke-width=\"1.8\"></rect>\n      <text x=\"395\" y=\"52\" text-anchor=\"middle\" class=\"uml-text\">Order</text>\n      <text x=\"395\" y=\"84\" text-anchor=\"middle\" class=\"uml-text\" font-weight=\"700\">Object node</text>\n      <text x=\"395\" y=\"98\" text-anchor=\"middle\" class=\"uml-muted\">data, with [state] below</text>\n      <!-- swimlane -->\n      <rect x=\"345\" y=\"124\" width=\"100\" height=\"110\" rx=\"6\" class=\"uml-fill uml-stroke\" stroke-width=\"1.4\" stroke-dasharray=\"0\"></rect>\n      <line x1=\"345\" y1=\"124\" x2=\"445\" y2=\"124\" class=\"uml-stroke\" stroke-width=\"2\"></line>\n      <text x=\"395\" y=\"140\" text-anchor=\"middle\" class=\"uml-text\" font-weight=\"700\">Actor</text>\n      <rect x=\"357\" y=\"152\" width=\"76\" height=\"26\" rx=\"12\" class=\"uml-soft uml-stroke\" stroke-width=\"1.4\"></rect>\n      <text x=\"395\" y=\"169\" text-anchor=\"middle\" class=\"uml-muted\">action</text>\n      <text x=\"395\" y=\"252\" text-anchor=\"middle\" class=\"uml-text\" font-weight=\"700\">Swimlane / partition</text>\n      <!-- example flow with guard -->\n      <circle cx=\"540\" cy=\"36\" r=\"9\" fill=\"var(--text)\"></circle>\n      <line x1=\"540\" y1=\"45\" x2=\"540\" y2=\"62\" class=\"uml-line\"></line>\n      <rect x=\"490\" y=\"62\" width=\"100\" height=\"30\" rx=\"14\" class=\"uml-soft uml-stroke\" stroke-width=\"1.6\"></rect>\n      <text x=\"540\" y=\"81\" text-anchor=\"middle\" class=\"uml-text\" font-size=\"11\">Get mail</text>\n      <line x1=\"540\" y1=\"92\" x2=\"540\" y2=\"112\" class=\"uml-line\"></line>\n      <polygon points=\"540,124 566,142 540,160 514,142\" class=\"uml-fill uml-stroke\" stroke-width=\"1.6\"></polygon>\n      <line x1=\"514\" y1=\"142\" x2=\"480\" y2=\"142\" class=\"uml-line\"></line>\n      <line x1=\"566\" y1=\"142\" x2=\"600\" y2=\"142\" class=\"uml-line\"></line>\n      <text x=\"500\" y=\"134\" text-anchor=\"end\" class=\"uml-muted\">[is junk]</text>\n      <text x=\"580\" y=\"134\" class=\"uml-muted\">[not junk]</text>\n      <rect x=\"430\" y=\"152\" width=\"94\" height=\"28\" rx=\"13\" class=\"uml-soft uml-stroke\" stroke-width=\"1.4\"></rect>\n      <text x=\"477\" y=\"170\" text-anchor=\"middle\" class=\"uml-text\" font-size=\"11\">Bin mail</text>\n      <rect x=\"576\" y=\"152\" width=\"94\" height=\"28\" rx=\"13\" class=\"uml-soft uml-stroke\" stroke-width=\"1.4\"></rect>\n      <text x=\"623\" y=\"170\" text-anchor=\"middle\" class=\"uml-text\" font-size=\"11\">Open mail</text>\n      <line x1=\"477\" y1=\"180\" x2=\"477\" y2=\"196\" class=\"uml-line\"></line>\n      <line x1=\"623\" y1=\"180\" x2=\"623\" y2=\"196\" class=\"uml-line\"></line>\n      <circle cx=\"477\" cy=\"205\" r=\"11\" class=\"uml-stroke\" stroke-width=\"2\" fill=\"none\"></circle>\n      <circle cx=\"477\" cy=\"205\" r=\"6\" fill=\"var(--text)\"></circle>\n      <circle cx=\"623\" cy=\"205\" r=\"11\" class=\"uml-stroke\" stroke-width=\"2\" fill=\"none\"></circle>\n      <circle cx=\"623\" cy=\"205\" r=\"6\" fill=\"var(--text)\"></circle>\n      <text x=\"550\" y=\"240\" text-anchor=\"middle\" class=\"uml-text\" font-weight=\"700\">Worked mini-flow with a guard</text>\n      <text x=\"550\" y=\"254\" text-anchor=\"middle\" class=\"uml-muted\">(Exercise 2: junk mail decision)</text>\n    </svg>",
      "alt": "Activity diagram notation reference",
      "caption": "Activity diagram notation: initial, finals, action, decision/merge, fork/join, object node, swimlane"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "6-8-swimlanes-partitions",
      "text": "6.8 swimlanes (partitions)"
    },
    {
      "type": "paragraph",
      "html": "Elements in an activity diagram can be organized using <b>partitions (swimlanes)</b>. A partition indicates <b>responsibility for performing actions</b> within the activity. Depending on the kind of modeling:"
    },
    {
      "type": "table",
      "head": [
        "Modeling context",
        "Partitions may represent"
      ],
      "rows": [
        [
          "<b>Business model</b>",
          "Business units: departments or divisions, business actors or roles, organizations"
        ],
        [
          "<b>System modeling</b>",
          "Systems, subsystems, external systems"
        ],
        [
          "<b>Application modeling</b>",
          "Objects, components, logical entities within the application"
        ]
      ]
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "lecture-example-airport-check-in",
      "text": "Lecture example: airport check-in"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Swimlane: Passenger</b>: showing ticket at check-in counter, checking luggage, paying fee (user/actor behaviors).",
        "<b>Swimlane: Passenger Services</b>: verifying ticket, referring passenger to customer services, accepting luggage, issuing boarding pass (service/system responsibilities)."
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "6-9-object-flow",
      "text": "6.9 object flow"
    },
    {
      "type": "paragraph",
      "html": "<b>Object flow</b> refers to the creation and modification of <b>objects</b> by activities. An object flow arrow from:"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>action → object</b>: the action <b>produces, creates or updates</b> the object;",
        "<b>object → action</b>: the action <b>uses, reads or requires</b> the object."
      ]
    },
    {
      "type": "paragraph",
      "html": "Show only the <b>important</b> objects on an object flow. You can show the object's state by writing the state name in <b>square brackets</b> below the object's name, e.g. <code>Order [filled]</code>."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "6-10-worked-examples",
      "text": "6.10 worked examples"
    },
    {
      "type": "example",
      "title": "Exercise 1: posting a letter",
      "bodyHtml": "<p>Draw the activity diagram for posting a letter using the actions: <i>Write letter, Address letter, Post letter</i>.</p>",
      "solutionHtml": "<p>A simple linear sequence: <b>● → Write letter → Address letter → Post letter → ◎</b>, initial node, three action nodes in sequence (each action is atomic and runs to completion), then the activity final node.</p>"
    },
    {
      "type": "example",
      "title": "Exercise 2: handling mail",
      "bodyHtml": "<p>The activity starts with \"Get mail\". If the mail is junk mail ([is junk] is true), go into \"Bin mail\", then stop. Otherwise, go into \"Open mail\", then stop.</p>",
      "solutionHtml": "<p><b>● → Get mail → ◇ (decision)</b> with two guarded outgoing flows: <b>[is junk] → Bin mail → ◎</b> and <b>[not junk] → Open mail → ◎</b>. The two final nodes can be merged into one activity final via a merge node. (See the mini-flow drawn in the notation reference above.)</p>"
    },
    {
      "type": "example",
      "title": "Exercise 3: creating a document",
      "bodyHtml": "<p><i>Open the word processing package → create a file → save under a unique name → type the document. If graphics are necessary, open the graphics package, create graphics and paste them into the document. If a spreadsheet is necessary, open the spreadsheet package, create the spreadsheet and paste it. Save the file → print a hard copy → exit.</i></p>",
      "solutionHtml": "<ol>\n        <li>● → <b>Open word processor</b> → <b>Create file</b> → <b>Save file under unique name</b> → <b>Type document</b>.</li>\n        <li>After typing, a <b>decision</b>: <b>[graphics necessary]</b> → Open graphics package → Create graphics → Paste into document; <b>[not necessary]</b> → skip to next decision.</li>\n        <li>A second <b>decision</b>: <b>[spreadsheet necessary]</b> → Open spreadsheet package → Create spreadsheet → Paste into document; <b>[not necessary]</b> → continue.</li>\n        <li>Both optional branches <b>merge</b> back into the main flow: <b>Save file</b> → <b>Print hard copy</b> → <b>Exit word processor</b> → ◎.</li>\n      </ol>\n      <p>Key idea: optional steps are modeled with decision + merge, NOT with fork/join (only one option is taken, the two options never run concurrently).</p>"
    },
    {
      "type": "example",
      "title": "Exercise 4: order processing (with concurrency)",
      "bodyHtml": "<p><i>The requested order is the input to receiving the order. If the order is accepted, all required information is filled in, the invoice is sent and the payment is accepted. When the payment is accepted, the order is shipped. This business flow allows order shipment during the sending of the invoice and confirmation of payment. Finally, the order is closed.</i></p>",
      "solutionHtml": "<p>\"Shipment during sending the invoice and confirmation of payment\" is the signal for <b>concurrent flows</b>, use <b>fork and join</b>:</p>\n      <ol>\n        <li>● → <b>Receive order</b> (the object <code>Order [requested]</code> flows in).</li>\n        <li><b>Decision [accepted]</b>: if accepted → <b>Fill in all required information</b>; if rejected → end.</li>\n        <li><b>FORK</b> into two concurrent flows: (a) <b>Send invoice</b>; (b) <b>Confirm payment</b> → <b>Ship order</b>.</li>\n        <li><b>JOIN</b> after \"Send invoice\" and \"Ship order\" complete → <b>Close order</b> → ◎.</li>\n      </ol>"
    },
    {
      "type": "figure",
      "svg": "<svg viewBox=\"0 0 640 330\" role=\"img\" aria-label=\"Order processing activity diagram with fork and join\">\n      <circle cx=\"80\" cy=\"30\" r=\"10\" fill=\"var(--text)\"></circle>\n      <line x1=\"80\" y1=\"40\" x2=\"80\" y2=\"62\" class=\"uml-line\"></line>\n      <rect x=\"22\" y=\"62\" width=\"116\" height=\"34\" rx=\"16\" class=\"uml-soft uml-stroke\" stroke-width=\"1.7\"></rect>\n      <text x=\"80\" y=\"84\" text-anchor=\"middle\" class=\"uml-text\" font-size=\"11.5\">Receive order</text>\n      <line x1=\"80\" y1=\"96\" x2=\"80\" y2=\"120\" class=\"uml-line\"></line>\n      <polygon points=\"80,132 108,150 80,168 52,150\" class=\"uml-fill uml-stroke\" stroke-width=\"1.7\"></polygon>\n      <text x=\"90\" y=\"184\" class=\"uml-muted\">[accepted]</text>\n      <text x=\"6\" y=\"140\" class=\"uml-muted\">[rejected]</text>\n      <line x1=\"52\" y1=\"150\" x2=\"28\" y2=\"150\" class=\"uml-line\"></line>\n      <circle cx=\"22\" cy=\"150\" r=\"7\" class=\"uml-stroke\" stroke-width=\"1.6\" fill=\"none\"></circle>\n      <line x1=\"22\" y1=\"143\" x2=\"22\" y2=\"157\" class=\"uml-stroke\" stroke-width=\"1.6\"></line>\n      <line x1=\"16\" y1=\"143\" x2=\"28\" y2=\"157\" class=\"uml-stroke\" stroke-width=\"1.6\"></line>\n      <line x1=\"80\" y1=\"168\" x2=\"80\" y2=\"188\" class=\"uml-line\"></line>\n      <rect x=\"14\" y=\"188\" width=\"132\" height=\"34\" rx=\"16\" class=\"uml-soft uml-stroke\" stroke-width=\"1.7\"></rect>\n      <text x=\"80\" y=\"210\" text-anchor=\"middle\" class=\"uml-text\" font-size=\"11.5\">Fill in information</text>\n      <line x1=\"80\" y1=\"222\" x2=\"80\" y2=\"242\" class=\"uml-line\"></line>\n      <!-- fork -->\n      <rect x=\"55\" y=\"242\" width=\"50\" height=\"9\" rx=\"4\" fill=\"var(--text)\"></rect>\n      <text x=\"80\" y=\"266\" text-anchor=\"middle\" class=\"uml-muted\">fork (concurrent)</text>\n      <line x1=\"80\" y1=\"251\" x2=\"80\" y2=\"278\" class=\"uml-line\"></line>\n      <line x1=\"62\" y1=\"278\" x2=\"240\" y2=\"278\" class=\"uml-line\"></line>\n      <line x1=\"62\" y1=\"278\" x2=\"62\" y2=\"292\" class=\"uml-line\"></line>\n      <line x1=\"240\" y1=\"278\" x2=\"240\" y2=\"292\" class=\"uml-line\"></line>\n      <rect x=\"8\" y=\"292\" width=\"108\" height=\"32\" rx=\"15\" class=\"uml-soft uml-stroke\" stroke-width=\"1.7\"></rect>\n      <text x=\"62\" y=\"313\" text-anchor=\"middle\" class=\"uml-text\" font-size=\"11.5\">Send invoice</text>\n      <rect x=\"184\" y=\"292\" width=\"112\" height=\"32\" rx=\"15\" class=\"uml-soft uml-stroke\" stroke-width=\"1.7\"></rect>\n      <text x=\"240\" y=\"313\" text-anchor=\"middle\" class=\"uml-text\" font-size=\"11.5\">Confirm payment</text>\n      <!-- right column -->\n      <line x1=\"240\" y1=\"324\" x2=\"240\" y2=\"344\" class=\"uml-line\" style=\"display:none\"></line>\n      <rect x=\"330\" y=\"60\" width=\"120\" height=\"34\" rx=\"16\" class=\"uml-soft uml-stroke\" stroke-width=\"1.7\"></rect>\n      <text x=\"390\" y=\"82\" text-anchor=\"middle\" class=\"uml-text\" font-size=\"11.5\">Ship order</text>\n      <line x1=\"296\" y1=\"308\" x2=\"330\" y2=\"308\" class=\"uml-line\"></line>\n      <line x1=\"330\" y1=\"308\" x2=\"330\" y2=\"94\" class=\"uml-line\"></line>\n      <line x1=\"330\" y1=\"94\" x2=\"330\" y2=\"77\" class=\"uml-line\"></line>\n      <!-- join -->\n      <rect x=\"470\" y=\"146\" width=\"50\" height=\"9\" rx=\"4\" fill=\"var(--text)\"></rect>\n      <text x=\"495\" y=\"132\" text-anchor=\"middle\" class=\"uml-muted\">join</text>\n      <line x1=\"450\" y1=\"77\" x2=\"495\" y2=\"77\" class=\"uml-line\"></line>\n      <line x1=\"495\" y1=\"77\" x2=\"495\" y2=\"146\" class=\"uml-line\"></line>\n      <line x1=\"116\" y1=\"308\" x2=\"200\" y2=\"308\" class=\"uml-line\" style=\"display:none\"></line>\n      <line x1=\"116\" y1=\"308\" x2=\"128\" y2=\"308\" class=\"uml-line\"></line>\n      <line x1=\"128\" y1=\"308\" x2=\"128\" y2=\"330\" class=\"uml-line\" style=\"display:none\"></line>\n      <!-- send invoice to join -->\n      <line x1=\"116\" y1=\"308\" x2=\"128\" y2=\"308\" class=\"uml-line\"></line>\n      <path d=\"M 128 308 L 128 352 L 445 352 L 445 150 L 470 150\" class=\"uml-line\"></path>\n      <line x1=\"495\" y1=\"155\" x2=\"495\" y2=\"180\" class=\"uml-line\"></line>\n      <rect x=\"438\" y=\"180\" width=\"114\" height=\"34\" rx=\"16\" class=\"uml-soft uml-stroke\" stroke-width=\"1.7\"></rect>\n      <text x=\"495\" y=\"202\" text-anchor=\"middle\" class=\"uml-text\" font-size=\"11.5\">Close order</text>\n      <line x1=\"495\" y1=\"214\" x2=\"495\" y2=\"238\" class=\"uml-line\"></line>\n      <circle cx=\"495\" cy=\"248\" r=\"13\" class=\"uml-stroke\" stroke-width=\"2\" fill=\"none\"></circle>\n      <circle cx=\"495\" cy=\"248\" r=\"7\" fill=\"var(--text)\"></circle>\n      <!-- object node -->\n      <rect x=\"348\" y=\"14\" width=\"86\" height=\"30\" class=\"uml-fill uml-stroke\" stroke-width=\"1.6\"></rect>\n      <text x=\"391\" y=\"34\" text-anchor=\"middle\" class=\"uml-text\" font-size=\"11\">Order</text>\n      <line x1=\"391\" y1=\"44\" x2=\"391\" y2=\"60\" class=\"uml-line uml-dashed\"></line>\n      <text x=\"572\" y=\"24\" class=\"uml-muted\">object node</text>\n      <text x=\"572\" y=\"37\" class=\"uml-muted\">(data flow)</text>\n    </svg>",
      "alt": "Order processing activity diagram with fork and join",
      "caption": "Order processing with concurrency: the fork starts \"Send invoice\" and \"Confirm payment → Ship order\" in parallel; the join waits for both before \"Close order\""
    },
    {
      "type": "example",
      "title": "Exercise 5: company client engagement (with swimlanes)",
      "bodyHtml": "<p><i>A company follows a structured process when engaging prospective clients. A sales person contacts a client to schedule an appointment. For onsite meetings, a corporate technician prepares the meeting facilities; for offsite meetings, a consultant prepares the required equipment. After preparation, the consultant meets the client. Then the sales person sends a follow-up letter. If the client provides a statement of the problem, the consultant creates and sends a proposal; otherwise the process ends.</i></p>",
      "solutionHtml": "<ol>\n        <li><b>Swimlanes:</b> Sales Person, Corporate Technician, Consultant (the client is an <i>external participant</i>; it does not perform modeled actions, it only triggers conditions such as \"provides statement of problem\").</li>\n        <li>● → <i>Sales Person:</i> Contact client to schedule appointment.</li>\n        <li><b>Decision [onsite]</b> → <i>Corporate Technician:</i> Prepare meeting facilities. <b>[offsite]</b> → <i>Consultant:</i> Prepare required equipment. (These are alternatives: decision + merge, <b>not</b> a fork, because the meeting is either onsite or offsite, never both.)</li>\n        <li><b>Merge</b> → <i>Consultant:</i> Meet with client.</li>\n        <li><i>Sales Person:</i> Send follow-up letter.</li>\n        <li><b>Decision [problem statement provided]</b> → <i>Consultant:</i> Create proposal → Send proposal to client → ◎. <b>[not provided]</b> → ◎ (process ends).</li>\n      </ol>"
    },
    {
      "type": "quiz",
      "title": "Topic 6 Quiz: Activity Diagrams",
      "count": 7,
      "quizSlug": "06-activity-diagrams"
    }
  ]
};

export default chapter;
