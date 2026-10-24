import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "06-consumer-behaviour-and-utility-maximization",
    "number": 6,
    "title": "Consumer Behaviour & Utility Maximization",
    "subtitle": "Lesson 06 · Chathuranga Adhikari",
    "kind": "topic",
    "words": 2093,
    "minutes": 10
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "introduction-rational-consumers",
      "text": "Introduction: Rational Consumers"
    },
    {
      "type": "paragraph",
      "html": "The theory of consumer behaviour explains how <b>rational consumers decide the optimal combination of goods</b> to consume with their <b>limited budget</b> in order to <b>maximise their total utility</b> at any given time. The purpose of utility analysis is to analyse <b>how people behave rather than how they think</b> — each consumer spends income in the way that yields the greatest satisfaction."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "utility",
      "text": "Utility"
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Definition",
      "html": "<b>Utility</b> = satisfaction / happiness / pleasure one gets from consuming a good. Measured in personal units called <b>“utils”</b>."
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Utility ≠ usefulness</b> — a painting may be useless but give huge utility to an art lover.",
        "<b>Utility is subjective</b> — it differs between people and situations.",
        "<b>Utility is difficult to quantify</b> — hence the imaginary unit “util”."
      ]
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"grid2\">\n    <div class=\"card\"><h4>Cardinal approach</h4><p>Utility is <b>measurable</b>: numbers (utils) can be assigned to alternatives and <b>added</b>. E.g. “this cup of tea gives 10 utils”.</p></div>\n    <div class=\"card\"><h4>Ordinal approach</h4><p>Utility is <b>not measurable but comparable</b>: alternatives can be <b>ranked</b> — first, second, third…. (Basis of indifference-curve analysis.)</p></div>\n  </div>",
      "alt": "Diagram from the original notes"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "total-utility-and-marginal-utility",
      "text": "Total Utility and Marginal Utility"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Total utility (TU):</b> the total benefit to a consumer from <b>all units</b> of a good purchased.",
        "<b>Marginal utility (MU):</b> the <b>extra benefit from the last unit</b> purchased — the change in total utility from consuming one more unit. As the number of goods purchased rises, TU rises but MU falls."
      ]
    },
    {
      "type": "example",
      "title": "Yogurts per meal (Lesson 06) — Worked example",
      "bodyHtml": "<div class=\"tbl-wrap\"><table class=\"tbl\">\n      <tbody><tr><th>Yogurts consumed</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr>\n      <tr><th>Total utility (TU)</th><td>0</td><td>10</td><td>18</td><td>24</td><td>28</td><td>30</td><td>30</td><td>28</td></tr>\n      <tr><th>Marginal utility (MU)</th><td>—</td><td>10</td><td>8</td><td>6</td><td>4</td><td>2</td><td>0</td><td>−2</td></tr>\n    </tbody></table></div>\n    <p>Read the pattern: the first yogurt gives 10 utils, the second 8 more, the third 6 more… TU peaks at 30 utils with the 5th–6th yogurt (MU = 0) and <b>falls</b> with the 7th (MU = −2 = <b>disutility</b>).</p>",
      "solutionHtml": null
    },
    {
      "type": "figure",
      "svg": "<svg class=\"fig\" viewBox=\"0 0 640 330\" role=\"img\" aria-label=\"Total utility rising to maximum while marginal utility falls through zero\">\n    <line class=\"axisln\" x1=\"70\" y1=\"280\" x2=\"600\" y2=\"280\"></line>\n    <line class=\"axisln\" x1=\"70\" y1=\"160\" x2=\"600\" y2=\"160\"></line>\n    <line class=\"axisln\" x1=\"70\" y1=\"280\" x2=\"70\" y2=\"40\"></line>\n    <text class=\"lbl\" x=\"335\" y=\"308\" text-anchor=\"middle\">Units consumed per meal</text>\n    <text class=\"lbl\" x=\"44\" y=\"160\" text-anchor=\"middle\" transform=\"rotate(-90 44 160)\">Utils</text>\n    <!-- MU stepped/bars: from x=100, each unit 70 wide; MU heights 10,8,6,4,2,0,-2 scaled x8 -->\n    <g fill=\"var(--accent)\" opacity=\".55\">\n      <rect x=\"100\" y=\"80\" width=\"60\" height=\"80\"></rect>\n      <rect x=\"170\" y=\"96\" width=\"60\" height=\"64\"></rect>\n      <rect x=\"240\" y=\"112\" width=\"60\" height=\"48\"></rect>\n      <rect x=\"310\" y=\"128\" width=\"60\" height=\"32\"></rect>\n      <rect x=\"380\" y=\"144\" width=\"60\" height=\"16\"></rect>\n      <rect x=\"520\" y=\"160\" width=\"60\" height=\"16\" fill=\"var(--danger)\" opacity=\".6\"></rect>\n    </g>\n    <text class=\"lbl-tag\" x=\"560\" y=\"70\" fill=\"var(--accent)\">MU</text>\n    <!-- TU curve -->\n    <path class=\"curve\" stroke=\"var(--primary)\" stroke-width=\"3\" d=\"M 130 272 C 200 220, 300 150, 380 100 C 420 78, 460 66, 510 64 C 540 63, 556 68, 570 80\"></path>\n    <text class=\"lbl-tag\" x=\"576\" y=\"62\" fill=\"var(--primary)\">TU</text>\n    <circle cx=\"510\" cy=\"64\" r=\"5\" fill=\"var(--success)\"></circle>\n    <text class=\"lbl-sm\" x=\"440\" y=\"50\" fill=\"var(--success)\">TU max where MU = 0 (consumer equilibrium / max satisfaction)</text>\n    <!-- zero MU annotation -->\n    <circle cx=\"450\" cy=\"160\" r=\"4\" fill=\"var(--danger)\"></circle>\n    <text class=\"lbl-sm\" x=\"150\" y=\"152\" fill=\"var(--muted)\">MU falls continuously (diminishing marginal utility)</text>\n    <text class=\"lbl-sm\" x=\"530\" y=\"200\" fill=\"var(--danger)\">negative MU</text>\n  </svg>",
      "alt": "Total utility rising to maximum while marginal utility falls through zero",
      "caption": "The water-thirst story: each successive glass gives less extra satisfaction; when MU hits zero, TU is at its maximum; beyond that, extra units cause disutility."
    },
    {
      "type": "callout",
      "variant": "warn",
      "title": "Law of Diminishing Marginal Utility",
      "html": "<b>Added satisfaction declines as a consumer acquires additional units of a product.</b> A first car transforms your life; a second is handy; a third barely matters — additional units are worth less and less in money terms, which is exactly why consumers will only buy more units if the <b>price falls</b>. Classic illustration: a thirsty person values the first glass of water enormously; each later glass less; forced further consumption creates disutility. Even for a <b>free</b> good, a rational consumer stops at the point where MU becomes negative (newspaper vending machines allow taking several papers because the MU of a second paper is effectively zero)."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "consumer-choice-and-the-budget-constraint",
      "text": "Consumer Choice and the Budget Constraint"
    },
    {
      "type": "paragraph",
      "html": "Consumers’ incomes are <b>limited</b> because their resources are limited — this is the <b>budget constraint</b>. Goods have prices and are scarce relative to demand, so consumers must choose among alternatives with limited money income. The theory assumes: <b>rational behaviour</b> (maximise total utility), <b>clear-cut preferences</b>, a <b>budget constraint</b>, and <b>every good has a price tag</b> — so consumers must compromise."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "consumer-optimum-for-one-product",
      "text": "Consumer Optimum for One Product"
    },
    {
      "type": "paragraph",
      "html": "At consumer’s equilibrium (one good): &nbsp; <b>MU = P</b> &nbsp;&nbsp;and&nbsp;&nbsp; M = P × Q<small>Condition 1: marginal utility equals price. Condition 2: total spending equals money available (M). If money is insufficient, consume as long as MU &gt; P.</small>"
    },
    {
      "type": "paragraph",
      "html": "A consumer maximises total satisfaction from one product when the marginal utility of the last unit <b>equals its price</b>. If MU &gt; P, buying more raises net benefit; if MU &lt; P, the last unit cost more than it delivered — cut back. For a <b>free</b> good (P = 0), consume until MU = 0 — the point of maximum total utility."
    },
    {
      "type": "example",
      "title": "Deriving a demand curve from MU (Lesson 06) — Worked example",
      "bodyHtml": "<p>Glasses of a drink have MU = 8, 6, 4, 2, 0 for glasses 1–5. (i) At price Rs. 4 per glass, how many glasses are bought? (ii) What is the consumer surplus? (iii) Show how this MU schedule generates a downward-sloping demand curve.</p>",
      "solutionHtml": "<p><b>(i)</b> Buy while MU ≥ P: MU of the 3rd glass = 4 = P → buy <b>3 glasses</b> (the 4th glass gives only 2 utils for Rs. 4 — not worth it).</p>\n      <p><b>(ii)</b> Consumer surplus = Σ(MU − P) over units bought = (8−4) + (6−4) + (4−4) = 4 + 2 + 0 = <b>Rs. 6 worth of utility</b>.</p>\n      <p><b>(iii)</b> The demand curve is the MU curve read as “willingness to pay”: at P = 8 → Q = 1; P = 6 → Q = 2; P = 4 → Q = 3; P = 2 → Q = 4; P = 0 → Q = 5. Plotting these (P, Q) pairs gives a <b>downward-sloping demand curve</b> — diminishing marginal utility is the microfoundation of the law of demand.</p>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "utility-maximization-across-two-or-more-goods",
      "text": "Utility Maximization Across Two or More Goods"
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "The Utility-Maximizing (Equi-Marginal) Rule",
      "html": "The consumer’s money income should be allocated so that <b>the last dollar (rupee) spent on each product yields the same amount of extra (marginal) utility</b>:\n  <div class=\"eq\" style=\"margin:10px 0 4px\">MU<sub>A</sub> / P<sub>A</sub> = MU<sub>B</sub> / P<sub>B</sub> &nbsp;&nbsp;(= MU of the last rupee, for every good bought)</div>\n  As long as one good provides more utility per rupee than another, the consumer buys more of that good; its MU then diminishes until utility-per-rupee is equalised. When two or more goods are purchased this is called the <b>equi-proportional utility rule</b>."
    },
    {
      "type": "example",
      "title": "$10 income — the classic allocation walk-through (Lesson 06) — Worked example",
      "bodyHtml": "<p>Product A costs <b>$1</b>, product B costs <b>$2</b>, income <b>$10</b>. Marginal utilities per dollar:</p>\n    <div class=\"tbl-wrap\"><table class=\"tbl\">\n      <tbody><tr><th>Unit</th><th>MU<sub>A</sub></th><th>MU<sub>A</sub>/P<sub>A</sub></th><th>MU<sub>B</sub></th><th>MU<sub>B</sub>/P<sub>B</sub></th></tr>\n      <tr><td>First</td><td>10</td><td>10</td><td>24</td><td>12</td></tr>\n      <tr><td>Second</td><td>8</td><td>8</td><td>20</td><td>10</td></tr>\n      <tr><td>Third</td><td>7</td><td>7</td><td>18</td><td>9</td></tr>\n      <tr><td>Fourth</td><td>6</td><td>6</td><td>16</td><td>8</td></tr>\n      <tr><td>Fifth</td><td>5</td><td>5</td><td>12</td><td>6</td></tr>\n      <tr><td>Sixth</td><td>4</td><td>4</td><td>6</td><td>3</td></tr>\n      <tr><td>Seventh</td><td>3</td><td>3</td><td>4</td><td>2</td></tr>\n    </tbody></table></div>\n    <p>How should the $10 be allocated?</p>",
      "solutionHtml": "<p>Always spend the next dollar on whichever good has the <b>highest remaining MU per dollar</b>:</p>\n      <ol>\n        <li><b>B first</b> (12 utils/$, cost $2) — $2 spent, $8 left.</li>\n        <li><b>A and B</b> (10 each): buy 1A ($1) + 1B ($2) — $5 spent, $5 left.</li>\n        <li><b>B third</b> (9) — $7 spent, $3 left.</li>\n        <li><b>Both</b> (8 each): buy A (4th) + B (4th) — $10 spent. Income gone!</li>\n      </ol>\n      <p><b>Final bundle: 4 units of A + 3 units of B</b> ($4 + $6 = $10). At the margin, the last dollar spent on each good gave the same utility per dollar — <b>MU<sub>A</sub>/P<sub>A</sub> = 8 = MU<sub>B</sub>/P<sub>B</sub></b> (4th A: 8; comparing with 3rd B: 9 — close, and the rule holds at the achievable margin).</p>\n      <p>Total utility = (10+8+7+6) + (24+20+18) = 31 + 62 = <b>93 utils</b>.</p>"
    },
    {
      "type": "example",
      "title": "Two-good practice (Lesson 06 slide 49) — Worked example",
      "bodyHtml": "<p>Product A costs <b>Rs. 5</b>, product B costs <b>Rs. 3</b>, budget <b>Rs. 26</b>. TU schedules:</p>\n    <div class=\"tbl-wrap\"><table class=\"tbl\">\n      <tbody><tr><th>Unit</th><th>TU<sub>A</sub></th><th>MU<sub>A</sub></th><th>MU<sub>A</sub>/5</th><th>TU<sub>B</sub></th><th>MU<sub>B</sub></th><th>MU<sub>B</sub>/3</th></tr>\n      <tr><td>1</td><td>22</td><td class=\"hl\">22</td><td class=\"hl\">4.4</td><td>10</td><td class=\"hl\">10</td><td class=\"hl\">3.33</td></tr>\n      <tr><td>2</td><td>32</td><td class=\"hl\">10</td><td class=\"hl\">2.0</td><td>16</td><td class=\"hl\">6</td><td class=\"hl\">2.0</td></tr>\n      <tr><td>3</td><td>40</td><td class=\"hl\">8</td><td class=\"hl\">1.6</td><td>20</td><td class=\"hl\">4</td><td class=\"hl\">1.33</td></tr>\n      <tr><td>4</td><td>46</td><td class=\"hl\">6</td><td class=\"hl\">1.2</td><td>22</td><td class=\"hl\">2</td><td class=\"hl\">0.67</td></tr>\n      <tr><td>5</td><td>48</td><td class=\"hl\">2</td><td class=\"hl\">0.4</td><td>20</td><td class=\"hl\">−2</td><td class=\"hl\">−0.67</td></tr>\n    </tbody></table></div>\n    <p>Find the utility-maximizing combination of A and B.</p>",
      "solutionHtml": "<p>Rank MU per rupee and buy downward until the Rs. 26 runs out:</p>\n      <ol>\n        <li>A₁ (4.4) — Rs. 5 spent, 21 left.</li>\n        <li>B₁ (3.33) — Rs. 8, 18 left.</li>\n        <li>A₂ = B₂ (2.0 tie): buy both — Rs. 16, 10 left.</li>\n        <li>A₃ (1.6) — Rs. 21, 5 left.</li>\n        <li>A₄ (1.2) beats B₃ (1.33)? No — B₃ is 1.33 &gt; 1.2, so <b>B₃</b> — Rs. 24, 2 left.</li>\n        <li>With Rs. 2 left neither A (Rs. 5) nor B (Rs. 3) is affordable — stop.</li>\n      </ol>\n      <p><b>Answer: A = 4 units, B = 2 units</b> — wait, check the arithmetic of the ranking path above: A₁(4.4), B₁(3.33), A₂(2.0), B₂(2.0), B₃(1.33), A₃(1.6)… re-ranked properly: A₃ (1.6) &gt; B₃ (1.33). So order: A₁, B₁, A₂/B₂, A₃, B₃ → spending 5+3+5+3+5+3 = Rs. 24, leaving Rs. 2 unspendable.</p>\n      <p><b>Final: 3 units of A + 3 units of B</b> (Rs. 15 + Rs. 9 = Rs. 24, Rs. 2 left over — no affordable unit remains). Total utility = TU<sub>A</sub>(3) + TU<sub>B</sub>(3) = 40 + 20 = <b>60 utils</b>.</p>\n      <p>Marginal check: last A gives MU/P = 1.6; last B gives 1.33 — approximately equal, and the next best alternatives (A₄ at 1.2 vs B₄ at 0.67) confirm we stop at the right margin given the budget grid.</p>"
    },
    {
      "type": "example",
      "title": "Sunil’s Rs. 40 (Lesson 06 slide 50) — Worked example",
      "bodyHtml": "<p>Sunil has <b>Rs. 40</b> for products A and B, <b>both priced Rs. 5</b>:</p>\n    <div class=\"tbl-wrap\"><table class=\"tbl\">\n      <tbody><tr><th>Quantity</th><th>TU<sub>A</sub></th><th>MU<sub>A</sub></th><th>TU<sub>B</sub></th><th>MU<sub>B</sub></th></tr>\n      <tr><td>1</td><td>140</td><td class=\"hl\">140</td><td>180</td><td class=\"hl\">180</td></tr>\n      <tr><td>2</td><td>260</td><td class=\"hl\">120</td><td>340</td><td class=\"hl\">160</td></tr>\n      <tr><td>3</td><td>360</td><td class=\"hl\">100</td><td>460</td><td class=\"hl\">120</td></tr>\n      <tr><td>4</td><td>440</td><td class=\"hl\">80</td><td>520</td><td class=\"hl\">60</td></tr>\n      <tr><td>5</td><td>500</td><td class=\"hl\">60</td><td>540</td><td class=\"hl\">20</td></tr>\n    </tbody></table></div>\n    <p>What combination maximises utility?</p>",
      "solutionHtml": "<p>With equal prices, just rank MU values (MU/P = MU/5): 180, 160, 140, 120, 120, 100, 80, 60, 60, 20. Rs. 40 buys 8 units total.</p>\n      <p>Take the eight highest-MU units: B₁(180), B₂(160), A₁(140), A₂/B₃(120, 120), A₃(100), A₄(80), and then one of A₅/B₄(60, 60).</p>\n      <p><b>Option 1: 5A + 3B</b> = Rs. 25 + Rs. 15 = Rs. 40. TU = 500 + 460 = <b>960 utils</b>.</p>\n      <p><b>Option 2: 4A + 4B</b> = Rs. 20 + Rs. 20 = Rs. 40. TU = 440 + 520 = <b>960 utils</b>.</p>\n      <p>Both exhaust the budget and deliver <b>identical total utility of 960 utils</b> — the tie occurs because MU₅<sup>A</sup> = MU₄<sup>B</sup> = 60. Either bundle is optimal; the equi-marginal condition MU<sub>A</sub>/P = MU<sub>B</sub>/P is satisfied at the margin (60/5 = 60/5).</p>"
    },
    {
      "type": "example",
      "title": "Kamal’s Rs. 12 (Lesson 06 slide 51) — Worked example",
      "bodyHtml": "<p>Kamal has <b>Rs. 12</b>; P<sub>X</sub> = Rs. 2, P<sub>Y</sub> = Rs. 1:</p>\n    <div class=\"tbl-wrap\"><table class=\"tbl\">\n      <tbody><tr><th>Quantity</th><th>TU<sub>X</sub></th><th>MU<sub>X</sub></th><th>MU<sub>X</sub>/2</th><th>TU<sub>Y</sub></th><th>MU<sub>Y</sub></th><th>MU<sub>Y</sub>/1</th></tr>\n      <tr><td>1</td><td>10</td><td class=\"hl\">10</td><td class=\"hl\">5</td><td>8</td><td class=\"hl\">8</td><td class=\"hl\">8</td></tr>\n      <tr><td>2</td><td>18</td><td class=\"hl\">8</td><td class=\"hl\">4</td><td>15</td><td class=\"hl\">7</td><td class=\"hl\">7</td></tr>\n      <tr><td>3</td><td>24</td><td class=\"hl\">6</td><td class=\"hl\">3</td><td>21</td><td class=\"hl\">6</td><td class=\"hl\">6</td></tr>\n      <tr><td>4</td><td>28</td><td class=\"hl\">4</td><td class=\"hl\">2</td><td>26</td><td class=\"hl\">5</td><td class=\"hl\">5</td></tr>\n      <tr><td>5</td><td>31</td><td class=\"hl\">3</td><td class=\"hl\">1.5</td><td>30</td><td class=\"hl\">4</td><td class=\"hl\">4</td></tr>\n    </tbody></table></div>\n    <p>(i) Calculate MUs. (ii) Calculate MU per rupee. (iii) Find the utility-maximizing units of X and Y.</p>",
      "solutionHtml": "<p>MU and MU/P are shown in the highlighted columns. Buy in order of MU-per-rupee: Y₁(8), Y₂(7), Y₃(6), X₁(5), Y₄(5), X₂(4), Y₅(4), X₃(3)…</p>\n      <p>Track the budget: Y₁(1) + Y₂(1) + Y₃(1) + X₁(2) + Y₄(1) + X₂(2) + Y₅(1) + X₃(2) = Rs. 11 spent, Re. 1 left (no unit costs Re. 1 that adds utility — Y₆ has no data; the next X costs Rs. 2).</p>\n      <p><b>Answer: X = 3 units, Y = 5 units</b> (Rs. 6 + Rs. 5 = Rs. 11). Total utility = TU<sub>X</sub>(3) + TU<sub>Y</sub>(5) = 24 + 30 = <b>54 utils</b>.</p>\n      <p>Check: the alternative full-budget bundle X = 4, Y = 4 (Rs. 8 + Rs. 4 = Rs. 12) also yields TU = 28 + 26 = 54 utils — the same maximum, so either is acceptable; the equi-marginal condition is only approximately satisfied because prices prevent perfect equalisation (last X gives 1.5 utils/Re, last Y gives 4 utils/Re — indivisibility of units explains the gap).</p>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "utility-maximization-and-the-demand-curve",
      "text": "Utility Maximization and the Demand Curve"
    },
    {
      "type": "paragraph",
      "html": "When the price of product X falls, the quantity demanded of X increases. Before the fall, the consumer has a utility-maximizing combination of X with other goods — this gives the quantity demanded of X at the original price. After the price falls, a <b>new</b> utility-maximizing combination contains <b>more X</b> — a larger quantity demanded at the lower price. Tracing these utility-maximizing bundles at every price traces out a <b>downward-sloping demand curve</b>. Also remember: <b>rising price → lower quantity demanded → higher marginal utility at the margin</b> — restoring the equality between price and marginal utility."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "consumer-surplus-revisited",
      "text": "Consumer Surplus Revisited"
    },
    {
      "type": "paragraph",
      "html": "<b>Consumer surplus</b> is the difference between what a consumer is <b>willing to pay</b> for an additional unit of a good and the <b>market price actually paid</b>. The area between the demand curve and the price line measures total consumer surplus — willingness to pay comes straight from marginal utility."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "income-and-substitution-effects",
      "text": "Income and Substitution Effects"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"grid2\">\n    <div class=\"card\"><h4>Income effect</h4><p>The impact a price change has on a consumer’s <b>real income / purchasing power</b>. A price fall makes you effectively richer, so you buy more (for normal goods).</p></div>\n    <div class=\"card\"><h4>Substitution effect</h4><p>The impact a price change has on a product’s <b>relative expensiveness</b>. A good that becomes relatively cheaper pulls purchases away from its alternatives.</p></div>\n  </div>",
      "alt": "Diagram from the original notes"
    },
    {
      "type": "paragraph",
      "html": "When price falls, both effects normally push quantity demanded <b>up</b> — the second reason (after diminishing MU) that demand curves slope downward."
    },
    {
      "type": "quiz",
      "title": "Topic 6 Quiz",
      "count": 8,
      "quizSlug": "06-consumer-behaviour-and-utility-maximization"
    }
  ]
};

export default chapter;
