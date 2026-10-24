import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "07-managing-knowledge-and-artificial-intelligence",
    "number": 7,
    "title": "Managing Knowledge and Artificial Intelligence",
    "subtitle": "Lecture 07 · KM value chain, knowledge work systems, expert systems, neural networks & modern AI",
    "kind": "topic",
    "words": 2123,
    "minutes": 11
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "the-role-of-knowledge-management-in-business",
      "text": "The Role of Knowledge Management in Business"
    },
    {
      "type": "paragraph",
      "html": "Knowledge management and collaboration platforms are among the <b>fastest-growing investment areas</b> in both corporate and government sectors. In the 2025 knowledge economy, <mark>over 30% of global GDP derives from the information and digital knowledge sectors</mark>, and <b>intangible assets</b> — knowledge, brand, reputation, proprietary processes — remain core drivers of enterprise value. A modern firm's value depends on its ability to <b>create and manage knowledge</b>: knowing how to do things effectively and efficiently, in ways others cannot duplicate, is a prime source of profit and competitive advantage (e.g. a unique build-to-order production system). Well-executed AI-driven KM projects can yield extraordinary ROI."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "what-is-knowledge-the-dikw-hierarchy",
      "text": "What is knowledge? The DIKW hierarchy"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"flow\">\n    <div class=\"fstep\"><b>Data</b><small>Raw facts</small></div>\n    <div class=\"farrow\">→</div>\n    <div class=\"fstep\"><b>Information</b><small>Data + context</small></div>\n    <div class=\"farrow\">→</div>\n    <div class=\"fstep\"><b>Knowledge</b><small>Information + experience &amp; judgment</small></div>\n    <div class=\"farrow\">→</div>\n    <div class=\"fstep\"><b>Wisdom</b><small>Knowledge applied with insight</small></div>\n  </div>",
      "alt": "Diagram from the original notes"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "important-dimensions-of-knowledge",
      "text": "Important dimensions of knowledge"
    },
    {
      "type": "table",
      "head": [
        "Dimension",
        "Key points"
      ],
      "rows": [
        [
          "<b>Knowledge is a firm asset</b>",
          "<b>Intangible</b>; creating it from data/information requires organizational resources; has <b>network effects</b> — value increases as more people share it; now includes <b>AI-generated knowledge and knowledge graphs</b>"
        ],
        [
          "<b>Knowledge has different forms</b>",
          "<b>Tacit</b> (human expertise, experience — hard to write down) · <b>Explicit</b> (codified — documents, rules) · <b>AI-generated</b> (machine-assisted insights)"
        ],
        [
          "<b>Knowledge has a location</b>",
          "A <b>cognitive event</b>; both <b>social and individual</b>; <b>\"sticky\"</b> (hard to move), <b>situated</b> (enmeshed in the firm's culture), <b>contextual</b> (works only in certain situations)"
        ],
        [
          "<b>Knowledge is situational</b>",
          "<b>Conditional</b> — knowing <i>when</i> to apply a procedure; <b>contextual</b> — knowing <i>under what circumstances</i> to use a tool"
        ]
      ]
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "Memory hook — tacit vs explicit",
      "html": "<b>Tacit = in the head</b> (a master baker's feel for dough). <b>Explicit = in the documents</b> (the recipe book). Expert systems and CBR try to <b>capture tacit knowledge</b> as explicit rules and cases."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "organizational-learning",
      "text": "Organizational learning"
    },
    {
      "type": "paragraph",
      "html": "<b>Organizational learning</b> is the process in which organizations learn — they <b>gain experience</b> through collection of data, careful measurement of planned activities, trial and error (experimentation), and feedback from customers and the environment — and then <b>adjust behavior to reflect experience</b>: creating new business processes with AI-driven insights and changing patterns of management decision making. Organizations that learn faster than competitors turn knowledge into a durable advantage."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "the-knowledge-management-value-chain",
      "text": "The Knowledge Management Value Chain"
    },
    {
      "type": "paragraph",
      "html": "<b>Knowledge management</b> is the set of business processes developed in an organization to <b>create, store, transfer and apply knowledge</b> to its business processes. Each stage of the value chain adds value to raw data and information as they are transformed into usable knowledge."
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"flow\">\n    <div class=\"fstep\"><b>Acquisition</b><small>Document tacit/explicit knowledge — documents, reports, best practices, e-mails; online expert networks; create knowledge; track TPS &amp; external data</small></div>\n    <div class=\"farrow\">→</div>\n    <div class=\"fstep\"><b>Storage</b><small>Databases; document management systems; management supports planned storage, corporate-wide indexing schemas, rewards for storing documents</small></div>\n    <div class=\"farrow\">→</div>\n    <div class=\"fstep\"><b>Dissemination</b><small>Portals, wikis, e-mail, instant messaging, search engines, collaboration tools, training, informal networks</small></div>\n    <div class=\"farrow\">→</div>\n    <div class=\"fstep\"><b>Application</b><small>Knowledge becomes a systematic part of decision making &amp; DSS — new practices, products, services, markets</small></div>\n  </div>",
      "alt": "Diagram from the original notes"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "organizational-roles-and-responsibilities",
      "text": "Organizational roles and responsibilities"
    },
    {
      "type": "paragraph",
      "html": "Successful KM needs people, not just software. The <b>chief knowledge officer (CKO)</b> is the executive responsible for KM; <b>dedicated staff / knowledge managers</b> run the programs; and <b>Communities of Practice (COPs)</b> — informal social networks of professionals and employees within and outside the firm who have similar work-related activities and interests — share knowledge through education, online newsletters and shared experiences. COPs <b>facilitate the reuse of knowledge and discussion</b> and <b>reduce the learning curves of new employees</b>."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "three-major-types-of-knowledge-management-systems",
      "text": "Three Major Types of Knowledge Management Systems"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">1 · Enterprise-wide KMS</div><div class=\"f-b\">General-purpose, firm-wide efforts to <b>collect, store, distribute, apply</b> digital content and knowledge</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">2 · Knowledge work systems (KWS)</div><div class=\"f-b\">Specialized systems for <b>engineers, scientists and other knowledge workers</b> charged with discovering and creating new knowledge</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">3 · Intelligent techniques</div><div class=\"f-b\">Diverse techniques (e.g. <b>data mining</b>) for discovering knowledge, distilling knowledge and finding optimal solutions</div></div>\n  </div>",
      "alt": "Formula reference cards"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "three-types-of-knowledge-in-the-enterprise",
      "text": "Three types of knowledge in the enterprise"
    },
    {
      "type": "paragraph",
      "html": "Enterprise content comes in three forms: <b>structured documents</b> (reports, presentations, formal rules), <b>semi-structured documents</b> (e-mails, videos) and <b>unstructured, tacit knowledge</b>. The key statistic: <mark>about 80% of an organization's business content is semi-structured or unstructured</mark> — which is why enterprise-wide KM systems are so important and so hard."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "enterprise-content-management-systems",
      "text": "Enterprise content management systems"
    },
    {
      "type": "paragraph",
      "html": "<b>Enterprise content management systems</b> help capture, store, retrieve, distribute and preserve documents, reports, best practices and semi-structured knowledge (e-mails), bring in external sources (news feeds, research), and provide tools for communication and collaboration (blogs, wikis). The <b>key problem is developing a taxonomy</b> — knowledge objects must be <b>tagged with categories</b> so they can be found again. <b>Digital asset management systems</b> are specialized content management systems for classifying, storing and managing <b>unstructured digital data</b> such as photographs, graphics, video and audio."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "locating-expertise-and-learning-management",
      "text": "Locating expertise and learning management"
    },
    {
      "type": "paragraph",
      "html": "Enterprise-wide KM also includes <b>locating and sharing expertise</b>: online directories of corporate experts in well-defined knowledge domains, search tools that find the right expert, social networking tools for finding knowledge outside the firm, and tools for saving, tagging and sharing web pages. <b>Learning management systems (LMS)</b> provide tools for the <b>management, delivery, tracking and assessment</b> of employee learning and training. They support multiple modes of learning (CD-ROM, web-based classes, online forums, live instruction), automate course selection and administration, assemble and deliver learning content, measure learning effectiveness — and increasingly offer <b>AI tutors, adaptive learning and personalized pathways</b>. <b>MOOCs</b> (massively open online courses) are web courses open to very large numbers of participants."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "knowledge-work-systems-kws",
      "text": "Knowledge Work Systems (KWS)"
    },
    {
      "type": "paragraph",
      "html": "<b>Knowledge workers</b> — researchers, designers, architects, scientists, engineers — <b>create knowledge for the organization</b>. They play three key roles: <b>keeping the organization current in knowledge</b> as it develops; <b>serving as internal consultants</b> regarding their areas of expertise; and <b>acting as change agents</b> — evaluating, initiating and promoting change projects. KWS are the systems built for them — to help <b>create new knowledge and integrate that knowledge into the business</b>."
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Requirements of KWS",
      "html": "1· Sufficient <b>computing power</b> for graphics and complex calculations · 2· Powerful <b>graphics and analytical tools</b> · 3· <b>Communications and document management</b> · 4· <b>Access to external databases</b> · 5· <b>User-friendly interfaces</b> · 6· <b>Optimized for the tasks</b> to be performed (design engineering, financial analysis)."
    },
    {
      "type": "table",
      "head": [
        "KWS example",
        "What it does"
      ],
      "rows": [
        [
          "<b>CAD (Computer-Aided Design)</b>",
          "Creation of engineering or architectural designs; supports <b>3-D printing (additive manufacturing)</b>"
        ],
        [
          "<b>Virtual reality systems</b>",
          "<b>Simulate real-life environments</b> — e.g. 3-D medical modeling for surgeons; includes <b>augmented reality (AR)</b>; VRML"
        ],
        [
          "<b>Investment workstations</b>",
          "Streamline the investment process and consolidate internal/external data for <b>brokers, traders, portfolio managers</b>"
        ]
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "intelligent-techniques",
      "text": "Intelligent Techniques"
    },
    {
      "type": "paragraph",
      "html": "Intelligent techniques are used to <b>capture individual and collective knowledge and extend the knowledge base</b>. The <b>traditional approach</b> assigns techniques by purpose: to <b>capture tacit knowledge</b> — expert systems, case-based reasoning, fuzzy logic; for <b>knowledge discovery</b> — neural networks and data mining; to <b>generate solutions to complex problems</b> — genetic algorithms; and to <b>automate tasks</b> — intelligent agents."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "expert-systems",
      "text": "Expert systems"
    },
    {
      "type": "paragraph",
      "html": "Expert systems <b>capture tacit knowledge in a very specific and limited domain</b> of human expertise, capturing the knowledge of skilled employees as a <b>set of rules in a software system</b> that others can use. They typically perform <b>limited, discrete, highly structured tasks</b> that take minutes or hours — e.g. diagnosing a malfunctioning machine or deciding whether to grant a credit loan. An expert system consists of a <b>knowledge base</b> (a set of hundreds or thousands of rules) and an <b>inference engine</b> — the strategy used to search the knowledge base. The engine works by \"firing\" rules triggered by facts entered by the user, like deeply nested IF statements at massive scale. Rules are interconnected, the number of outcomes is known in advance and limited, and multiple paths can reach the same outcome."
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">Forward chaining</div><div class=\"f-b\">Inference engine begins with the <b>information entered by the user</b> and searches the knowledge base to <b>arrive at a conclusion</b></div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Backward chaining</div><div class=\"f-b\">Begins with a <b>hypothesis</b> and asks the user questions until the hypothesis is <b>confirmed or disproved</b></div></div>\n  </div>",
      "alt": "Formula reference cards"
    },
    {
      "type": "callout",
      "variant": "warn",
      "title": "Expert system limitations",
      "html": "Most deal with <b>classification problems with few known outcomes</b>, and many require <b>large, lengthy, expensive development and maintenance</b> — sometimes hiring or training more experts is <i>cheaper</i> than building the system."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "case-based-reasoning-cbr",
      "text": "Case-based reasoning (CBR)"
    },
    {
      "type": "paragraph",
      "html": "CBR stores <b>descriptions of past experiences of human specialists — \"cases\" — in a knowledge base</b>. When a new problem arises, the system <b>searches for cases with similar characteristics</b> and applies the old solutions to the new case; successful and unsuccessful applications are grouped with the case so the knowledge base is <b>continuously expanded and refined by users</b> — storing organizational intelligence. CBR uses a <b>six-step process</b> to generate solutions, and is found in <b>medical diagnostic systems and customer support</b>."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "fuzzy-logic",
      "text": "Fuzzy logic"
    },
    {
      "type": "paragraph",
      "html": "Fuzzy logic is a <b>rule-based technology that represents imprecision</b>, using <b>linguistic categories</b> (e.g. \"cold\", \"cool\") that represent a <b>range of values</b>. You describe a phenomenon linguistically, then represent that description in a small number of flexible rules — solving problems where expertise is hard to express in crisp IF-THEN rules. Applications: <b>autofocus in cameras</b> and <b>detecting possible medical fraud</b>. Membership functions translate linguistic expressions like \"warm\" into numbers a computer can manipulate (e.g. in a thermostat's temperature control logic)."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "machine-learning-and-neural-networks",
      "text": "Machine learning & neural networks"
    },
    {
      "type": "paragraph",
      "html": "<b>Machine learning</b> is how computer programs <b>improve performance without explicit programming</b> — by recognizing patterns, from experience, and from prior learnings in databases. Contemporary examples: Google searches and the recommender systems of Amazon and Netflix. <b>Neural networks</b> find <b>patterns and relationships in massive amounts of data too complicated for humans to analyze</b>. They \"learn\" by searching for relationships, building models, and correcting over and over; humans <b>train</b> the network by feeding it data inputs whose outputs are known so it learns <b>by example</b> (e.g. distinguishing valid and fraudulent credit card purchases). Uses include pattern classification, prediction, financial analysis, control and optimization. <b>Deep learning</b> networks are more complex — <b>many layers</b> of transformation of input data to produce an output — and are used almost exclusively for <b>pattern detection on unlabeled data</b>, where the system discovers patterns without being told what to look for."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "genetic-algorithms",
      "text": "Genetic algorithms"
    },
    {
      "type": "paragraph",
      "html": "Genetic algorithms are useful for finding the <b>optimal solution</b> to a specific problem by examining a <b>very large number of possible solutions</b>. They are conceptually based on <b>evolution</b>: searching among solution variables by changing and reorganizing component parts using <b>inheritance, mutation and selection</b> — starting from an initial \"population\" of chromosomes (candidate solutions) and iteratively refining so higher-<b>fitness</b> solutions emerge. They excel at <b>optimization problems</b> — minimizing costs, efficient scheduling, optimal jet engine design — where hundreds or thousands of variables exist, evaluating many alternatives quickly."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "nlp-computer-vision-robotics-and-intelligent-agents",
      "text": "NLP, computer vision, robotics & intelligent agents"
    },
    {
      "type": "paragraph",
      "html": "<b>Natural language processing (NLP)</b> makes it possible for a computer to <b>understand and analyze natural language</b>. <b>Computer vision systems</b> deal with how computers can <b>emulate the human visual system</b> to view and extract information from real-world images. <b>Robotics</b> deals with the design, construction, operation and use of <b>movable machines that substitute for humans</b>, with computer systems for control, sensory feedback and information processing. <b>Intelligent agents</b> work <b>without direct human intervention</b> to carry out specific, repetitive, predictable tasks for a user, process or application — deleting junk e-mail, finding the cheapest airfare — using a limited built-in or learned knowledge base; some self-adjust (e.g. Siri). <b>Agent-based modeling</b> uses systems of autonomous agents to model the behavior of consumers, stock markets and supply chains, and to predict the spread of epidemics — famously, intelligent agents helped <b>P&amp;G shorten replenishment cycles</b> for products like a box of Tide."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "hybrid-ai-and-the-modern-approach",
      "text": "Hybrid AI and the modern approach"
    },
    {
      "type": "paragraph",
      "html": "<b>Hybrid AI systems</b> integrate genetic algorithms, fuzzy logic, neural networks and expert systems into a single application to take advantage of the best features of each — e.g. Matsushita's \"neurofuzzy\" washing machine combining fuzzy logic with neural networks. The lecture's <b>modern approach</b> to intelligent techniques includes: <b>machine learning and deep learning</b> (transformers, reinforcement learning); <b>generative AI</b> (GPT, Llama, Gemini, Claude); <b>multimodal AI</b> (text, image, video, speech); <b>Retrieval-Augmented Generation (RAG)</b> — augmenting generation with retrieved knowledge; and <b>autonomous AI agents</b> (AutoGPT, BabyAGI, CrewAI)."
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Matching table — technique to purpose (very high exam frequency)",
      "html": "<b>Tacit knowledge capture</b> → expert systems, CBR, fuzzy logic · <b>Knowledge discovery</b> → neural networks, data mining · <b>Complex optimization solutions</b> → genetic algorithms · <b>Task automation</b> → intelligent agents."
    },
    {
      "type": "example",
      "title": "Worked example — choose the right intelligent technique",
      "bodyHtml": "<p>Suggest the most appropriate technique for each need: (a) a bank wants to flag unusual credit-card patterns it has never seen before; (b) a help desk wants to reuse thousands of past resolved tickets; (c) a shipping firm must optimize delivery routes with 500 variables; (d) a camera must decide \"focus enough\" rather than an exact distance.</p>",
      "solutionHtml": "<ul>\n        <li><b>(a) Neural network</b> — trained by example to classify valid vs fraudulent purchases; finds patterns in massive data.</li>\n        <li><b>(b) Case-based reasoning</b> — searches past cases with similar characteristics and applies their solutions; found in customer support.</li>\n        <li><b>(c) Genetic algorithm</b> — optimization with many variables, using inheritance, mutation, selection.</li>\n        <li><b>(d) Fuzzy logic</b> — linguistic ranges (\"near\", \"far\") instead of crisp values; the autofocus example from the lecture.</li>\n      </ul>"
    },
    {
      "type": "quiz",
      "title": "Topic 7 Quiz — Knowledge Management & AI",
      "count": 10,
      "quizSlug": "07-managing-knowledge-and-artificial-intelligence"
    }
  ]
};

export default chapter;
