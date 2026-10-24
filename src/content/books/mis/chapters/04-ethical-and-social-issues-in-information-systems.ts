import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "04-ethical-and-social-issues-in-information-systems",
    "number": 4,
    "title": "Ethical and social issues in information systems",
    "subtitle": "Lecture 04 · Ethics framework, five moral dimensions, privacy & intellectual property",
    "kind": "topic",
    "words": 1256,
    "minutes": 6
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "introduction-why-ethics-matters-in-is",
      "text": "Introduction: why ethics matters in IS"
    },
    {
      "type": "paragraph",
      "html": "Changes in technology have <b>both positive and negative consequences</b>. Information technology can be used to achieve social progress, but it can also be used to <b>commit crimes and threaten cherished social values</b>. Emerging technologies. <b>AI, Big Data, IoT and Blockchain</b>, raise complex ethical and regulatory challenges, and information systems raise new ethical questions for both individuals and societies. The central insight of this lecture is the <b>ripple effect</b>: the introduction of new information technology raises new ethical, social and political issues that must be dealt with at the <b>individual, social and political levels</b>."
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">Ethical issues</div><div class=\"f-b\">Personal and professional conduct</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Social issues</div><div class=\"f-b\">Community and societal well-being</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Political issues</div><div class=\"f-b\">Regulation, digital rights, cybersecurity</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Modern intersection</div><div class=\"f-b\">Balancing innovation, human rights &amp; AI regulation</div></div>\n  </div>",
      "alt": "Formula reference cards"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "what-is-ethics",
      "text": "What is ethics?"
    },
    {
      "type": "paragraph",
      "html": "Simply put, ethics is about <b>professional behavior</b>. Formally, <b>ethics refers to the principles of right and wrong that individuals, acting as free moral agents, use to make choices to guide their behaviors</b>. <b>Social issues</b>, by contrast, are matters of concern to governments and the community. When you act as a \"free moral agent\" you accept responsibility for the consequences of your choices; this is why the basic concepts below matter so much in court cases and professional practice."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "key-technology-trends-that-raise-ethical-issues",
      "text": "Key technology trends that raise ethical issues"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "<b>AI and ML expansion</b>: bias and transparency concerns",
        "<b>Advanced data analytics</b>: profiling and surveillance capitalism",
        "<b>Cloud and edge computing</b>: data jurisdiction issues",
        "<b>IoT</b>: massive data collection",
        "<b>Blockchain</b>: privacy and inclusion ethics",
        "<b>Quantum computing</b>: encryption risks",
        "<b>Sustainability</b>: green IT and e-waste"
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "basic-concepts-ethics-in-an-information-society",
      "text": "Basic concepts: ethics in an information society"
    },
    {
      "type": "paragraph",
      "html": "Five basic concepts form the vocabulary of information ethics, each has a precise meaning that exam questions test directly. <b>Responsibility</b> means accepting the potential costs, duties and obligations for the decisions you make. <b>Accountability</b> is a feature of systems and social institutions: it means determining who should take responsibility for decisions and actions, mechanisms exist to identify who did what and when. <b>Liability</b> extends responsibility further, legally placing responsibility with a person or group (so injured parties can be compensated). <b>Due process</b> is a related feature of societies where laws are applied fairly and correctly through known, established procedures. Finally, <b>digital trust</b>: transparency and data integrity, underpins every online relationship."
    },
    {
      "type": "table",
      "head": [
        "Concept",
        "Meaning",
        "Keyword clue"
      ],
      "rows": [
        [
          "<b>Responsibility</b>",
          "Accepting potential costs, duties and obligations for your decisions",
          "\"You own the outcome\""
        ],
        [
          "<b>Accountability</b>",
          "Determining who should take responsibility for decisions and actions",
          "\"Who is answerable?\""
        ],
        [
          "<b>Liability</b>",
          "Legally placing responsibility with a person or group",
          "\"Law says who pays\""
        ],
        [
          "<b>Due process</b>",
          "Ensuring laws are applied fairly and correctly",
          "\"Fair legal procedure\""
        ],
        [
          "<b>Digital trust</b>",
          "Transparency and data integrity",
          "\"Confidence online\""
        ]
      ]
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Exam tip",
      "html": "Distinguish <b>responsibility vs accountability vs liability</b>: responsibility is personal acceptance; accountability is the institutional mechanism that identifies who is answerable; liability is the legal assignment of responsibility (compensation). This triple appears in MCQs almost every year."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "the-five-moral-dimensions-of-the-information-age",
      "text": "The five moral dimensions of the information age"
    },
    {
      "type": "paragraph",
      "html": "The lecture framework identifies five moral dimensions of the information age. Together they cover the main ethical questions raised by information systems for individuals and societies, and each dimension carries its own guiding question."
    },
    {
      "type": "table",
      "head": [
        "#",
        "Moral dimension",
        "Guiding questions"
      ],
      "rows": [
        [
          "1",
          "<b>Information rights &amp; obligations</b>",
          "What information rights do individuals and organizations possess with respect to themselves? What can they protect?"
        ],
        [
          "2",
          "<b>Property rights &amp; obligations</b>",
          "How will traditional intellectual property rights be protected in a digital society where tracing ownership is difficult and ignoring rights is easy?"
        ],
        [
          "3",
          "<b>Accountability and control</b>",
          "Who can and will be held accountable and liable for harm done to individual and collective information and property rights?"
        ],
        [
          "4",
          "<b>System quality</b>",
          "What standards of data and system quality should we demand to protect individual rights and the safety of society?"
        ],
        [
          "5",
          "<b>Quality of life</b>",
          "What values should be preserved in an information- and knowledge-based society? Which institutions and cultural values should we protect?"
        ]
      ]
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "1-information-rights-privacy",
      "text": "1 · information rights: privacy"
    },
    {
      "type": "paragraph",
      "html": "Privacy is the claim of individuals to be left alone, free from surveillance or interference. In practice, the lecture links privacy concerns to <b>web site policies</b> and <b>cookies</b>, small files stored by web sites on visitors' hard drives that can track their browsing. Users often have little idea of how their personal data is collected, aggregated and sold, which is why information rights sit at the top of the moral-dimensions list."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "2-property-rights-intellectual-property",
      "text": "2 · property rights: intellectual property"
    },
    {
      "type": "paragraph",
      "html": "<b>Intellectual property (IP)</b> consists of <b>tangible and intangible products of the mind</b> created by individuals or corporations. Because digital content is trivially easy to copy, the information age challenges traditional IP protection. The key instruments are <b>copyrights</b>: a statutory grant protecting creators of intellectual property from having their work copied by others, and <b>patents</b>, a grant giving the owner an <b>exclusive monopoly on the ideas behind an invention for 20 years</b>. Know the exact durations and the distinction: copyright protects expression; patents protect ideas/inventions."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "3-accountability-and-control",
      "text": "3 · accountability and control"
    },
    {
      "type": "paragraph",
      "html": "Many laws and court precedents on accountability, liability and control were strongly in place <b>long before computers were invented</b>. Along with privacy and property laws, new information technologies are challenging existing liability law and social practices for holding individuals and institutions accountable. As systems grow more automated and AI-driven, the chain of responsibility becomes harder to trace."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "4-system-quality",
      "text": "4 · system quality"
    },
    {
      "type": "paragraph",
      "html": "We heavily depend on and trust information systems, so <b>data quality</b> issues become critically important; they affect both customers and users. The related problem is <b>system errors</b>: <b>software bugs and errors</b> that can produce harm at scale. The moral question is what standards of data and system quality society should demand to protect individual rights and safety."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "5-quality-of-life",
      "text": "5 · quality of life"
    },
    {
      "type": "paragraph",
      "html": "The fifth dimension asks what values should be preserved in an information- and knowledge-based society, which institutions should be protected from violation, and which cultural values and practices the new technology supports. Concerns range from dependency and dehumanization to the digital divide and the balance between work and life that \"always-on\" connectivity disturbs."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "emerging-concerns-ai-ethics-data-governance-algorithmic-bias",
      "text": "Emerging concerns: AI ethics, data governance, algorithmic bias"
    },
    {
      "type": "paragraph",
      "html": "The lecture closes with three modern concerns that extend the classic framework. <b>AI ethics</b> asks how autonomous, learning systems can be kept fair, transparent and accountable when their decisions affect people's lives. <b>Data governance</b> concerns the policies and frameworks that determine who owns, controls and may use data, essential when data crosses borders and jurisdictions (a problem amplified by cloud and edge computing). <b>Algorithmic bias</b> arises when trained models systematically disadvantage groups of people; because AI/ML learns from historical data, biased inputs silently produce biased outputs, which is why transparency and auditing have become central to modern IS governance."
    },
    {
      "type": "example",
      "title": "Worked example: classify the ethical issue",
      "bodyHtml": "<p>Classify each scenario by its moral dimension: (a) A social network sells users' browsing data to advertisers without clear consent; (b) A bank's loan-approval AI rejects applicants from certain postcodes; (c) A mapping app sends drivers through a bridge that collapsed due to an out-of-date database.</p>",
      "solutionHtml": "<ul>\n        <li><b>(a) Information rights &amp; obligations</b>: privacy of personal data and what individuals can protect.</li>\n        <li><b>(b) Accountability &amp; control / emerging algorithmic bias</b>: who is accountable when an algorithm discriminates? On the exam, algorithmic bias is the strongest signal.</li>\n        <li><b>(c) System quality</b>: poor data quality (out-of-date data) produced harm; the question is what data/system standards we should demand.</li>\n      </ul>"
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "Rapid recall: the five",
      "html": "<b>I-P-A-S-Q</b>: <b>I</b>nformation rights · <b>P</b>roperty rights · <b>A</b>ccountability &amp; control · <b>S</b>ystem quality · <b>Q</b>uality of life. (\"I Promise Accountability, System Quality.\")"
    },
    {
      "type": "quiz",
      "title": "Topic 4 Quiz: Ethics & Social Issues",
      "count": 8,
      "quizSlug": "04-ethical-and-social-issues-in-information-systems"
    }
  ]
};

export default chapter;
