import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "03-demand-supply-and-market-equilibrium",
    "number": 3,
    "title": "Demand, Supply & Market Equilibrium",
    "subtitle": "Lesson 03 · Tutorial 03 · Chathuranga Adhikari",
    "kind": "topic",
    "words": 1812,
    "minutes": 9
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "the-basic-decision-making-units",
      "text": "The Basic Decision-Making Units"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Firm:</b> an organization that transforms resources (inputs) into products (outputs); firms are the primary producing units in a market economy.",
        "<b>Entrepreneur:</b> a person who organizes, manages and assumes the risks of a firm — taking a new idea or product and turning it into a successful business.",
        "<b>Household:</b> the consuming units in an economy."
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "the-circular-flow-of-economic-activity",
      "text": "The Circular Flow of Economic Activity"
    },
    {
      "type": "paragraph",
      "html": "The circular flow shows the connections between <b>firms and households</b> in <b>input markets</b> and <b>output markets</b>. Payments flow in the <b>opposite direction</b> to the physical flow of resources, goods and services."
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Output (product) markets:</b> markets in which <b>goods and services</b> are exchanged.",
        "<b>Input (factor) markets:</b> markets in which <b>resources</b> — labour, capital and land — are exchanged."
      ]
    },
    {
      "type": "figure",
      "svg": "<svg class=\"fig\" viewBox=\"0 0 640 300\" role=\"img\" aria-label=\"Circular flow of economic activity\">\n    <defs>\n      <marker id=\"arr\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"var(--primary)\"></path></marker>\n      <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"var(--accent)\"></path></marker>\n    </defs>\n    <rect x=\"235\" y=\"20\" width=\"170\" height=\"52\" rx=\"12\" fill=\"var(--primary-soft)\" stroke=\"var(--primary)\"></rect>\n    <text class=\"lbl-tag\" x=\"320\" y=\"42\" text-anchor=\"middle\" fill=\"var(--primary)\">HOUSEHOLDS</text>\n    <text class=\"lbl-sm\" x=\"320\" y=\"60\" text-anchor=\"middle\">consume goods &amp; supply factors</text>\n    <rect x=\"235\" y=\"220\" width=\"170\" height=\"52\" rx=\"12\" fill=\"var(--accent-soft)\" stroke=\"var(--accent)\"></rect>\n    <text class=\"lbl-tag\" x=\"320\" y=\"242\" text-anchor=\"middle\" fill=\"var(--accent)\">FIRMS</text>\n    <text class=\"lbl-sm\" x=\"320\" y=\"260\" text-anchor=\"middle\">produce goods &amp; demand factors</text>\n    <!-- output market right -->\n    <rect x=\"510\" y=\"120\" width=\"110\" height=\"52\" rx=\"12\" fill=\"var(--surface2)\" stroke=\"var(--border)\"></rect>\n    <text class=\"lbl-tag\" x=\"565\" y=\"142\" text-anchor=\"middle\">OUTPUT</text>\n    <text class=\"lbl-sm\" x=\"565\" y=\"160\" text-anchor=\"middle\">market</text>\n    <!-- input market left -->\n    <rect x=\"20\" y=\"120\" width=\"110\" height=\"52\" rx=\"12\" fill=\"var(--surface2)\" stroke=\"var(--border)\"></rect>\n    <text class=\"lbl-tag\" x=\"75\" y=\"142\" text-anchor=\"middle\">INPUT</text>\n    <text class=\"lbl-sm\" x=\"75\" y=\"160\" text-anchor=\"middle\">market</text>\n    <!-- arrows: households -> output market (goods flow from firms to households) -->\n    <path d=\"M 405 75 C 480 95, 500 105, 545 118\" fill=\"none\" stroke=\"var(--primary)\" stroke-width=\"2.2\" marker-end=\"url(#arr)\"></path>\n    <text class=\"lbl-sm\" x=\"490\" y=\"86\">goods &amp; services</text>\n    <path d=\"M 545 175 C 500 195, 480 205, 408 222\" fill=\"none\" stroke=\"var(--accent)\" stroke-width=\"2.2\" marker-end=\"url(#arrA)\"></path>\n    <text class=\"lbl-sm\" x=\"470\" y=\"222\">consumption spending (Rs)</text>\n    <!-- input market flows -->\n    <path d=\"M 232 222 C 160 205, 140 195, 96 175\" fill=\"none\" stroke=\"var(--primary)\" stroke-width=\"2.2\" marker-end=\"url(#arr)\"></path>\n    <text class=\"lbl-sm\" x=\"115\" y=\"222\">labour, land, capital</text>\n    <path d=\"M 96 118 C 140 100, 160 92, 232 75\" fill=\"none\" stroke=\"var(--accent)\" stroke-width=\"2.2\" marker-end=\"url(#arrA)\"></path>\n    <text class=\"lbl-sm\" x=\"130\" y=\"86\">wages, rent, interest</text>\n  </svg>",
      "alt": "Circular flow of economic activity",
      "caption": "The circular flow: physical flows (blue) run one way; money payments (amber) run the opposite way."
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Input markets include",
      "html": "<b>Labour market</b> — households supply work for wages; <b>capital market</b> — households supply savings for interest or claims to future profits; <b>land market</b> — households supply land or real property in exchange for rent."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "demand",
      "text": "Demand"
    },
    {
      "type": "paragraph",
      "html": "<b>Demand</b> is the various amounts of a product (goods or services) that consumers are <b>willing and able to purchase</b> at various prices during a specific period. A household’s demand decision depends on: the price of the product, household income, accumulated wealth, prices of related products, tastes and preferences, and expectations about future income, wealth and prices."
    },
    {
      "type": "callout",
      "variant": "warn",
      "title": "The Law of Demand",
      "html": "There is a <b>negative (inverse) relationship</b> between price and quantity demanded — <b>demand curves slope downward</b>. When price rises, quantity demanded falls; when price falls, quantity demanded rises (ceteris paribus)."
    },
    {
      "type": "paragraph",
      "html": "A <b>demand schedule</b> is a table showing how much of a product a household would be willing to buy at different prices; the <b>demand curve</b> is its graph."
    },
    {
      "type": "table",
      "head": [
        "Price per unit ($)",
        "Quantity demanded"
      ],
      "rows": []
    },
    {
      "type": "paragraph",
      "html": "Q<sub>d</sub> = a − bP<small>Linear demand equation: a = quantity intercept (demand at P = 0); b = slope magnitude (fall in Q per unit rise in P)</small>"
    },
    {
      "type": "figure",
      "svg": "<svg class=\"fig\" viewBox=\"0 0 480 320\" role=\"img\" aria-label=\"Demand and supply curves crossing at equilibrium\">\n    <line class=\"axisln\" x1=\"60\" y1=\"280\" x2=\"440\" y2=\"280\"></line>\n    <line class=\"axisln\" x1=\"60\" y1=\"280\" x2=\"60\" y2=\"30\"></line>\n    <text class=\"lbl\" x=\"250\" y=\"305\" text-anchor=\"middle\">Quantity (Q)</text>\n    <text class=\"lbl\" x=\"34\" y=\"155\" text-anchor=\"middle\" transform=\"rotate(-90 34 155)\">Price (P)</text>\n    <!-- Demand D -->\n    <path class=\"curve\" stroke=\"var(--primary)\" d=\"M 90 50 L 410 250\"></path>\n    <text class=\"lbl-tag\" x=\"398\" y=\"272\" fill=\"var(--primary)\">D</text>\n    <!-- Supply S -->\n    <path class=\"curve\" stroke=\"var(--accent)\" d=\"M 90 250 L 410 50\"></path>\n    <text class=\"lbl-tag\" x=\"398\" y=\"46\" fill=\"var(--accent)\">S</text>\n    <!-- equilibrium -->\n    <circle cx=\"250\" cy=\"150\" r=\"6\" fill=\"var(--success)\"></circle>\n    <line class=\"axisln\" x1=\"60\" y1=\"150\" x2=\"250\" y2=\"150\" stroke-dasharray=\"4 4\" stroke=\"var(--muted)\"></line>\n    <line class=\"axisln\" x1=\"250\" y1=\"150\" x2=\"250\" y2=\"280\" stroke-dasharray=\"4 4\" stroke=\"var(--muted)\"></line>\n    <text class=\"lbl\" x=\"48\" y=\"155\" text-anchor=\"end\">P₀</text>\n    <text class=\"lbl\" x=\"250\" y=\"298\" text-anchor=\"middle\">Q₀</text>\n    <text class=\"lbl-tag\" x=\"266\" y=\"142\" fill=\"var(--success)\">E</text>\n    <!-- shortage / surplus markers -->\n    <text class=\"lbl-sm\" x=\"150\" y=\"200\" fill=\"var(--danger)\">excess demand</text>\n    <text class=\"lbl-sm\" x=\"330\" y=\"110\" fill=\"var(--warn)\">excess supply</text>\n  </svg>",
      "alt": "Demand and supply curves crossing at equilibrium",
      "caption": "Market equilibrium E: at P₀ quantity demanded = quantity supplied. Below P₀ a shortage pushes price up; above it a surplus pushes price down."
    },
    {
      "type": "example",
      "title": "Deriving demand equations — Worked example",
      "bodyHtml": "<p><b>(a)</b> Pizza slices: at $0.50 quantity = 8; price rises $0.25 per step and quantity falls 1 each step (to 2 at $2.00). Derive the demand equation.<br>\n    <b>(b)</b> At P = 0, Q = 100; at P = 5, Q = 0. Derive the equation.<br>\n    <b>(c)</b> A demand curve has intercepts P = 280 (Q=0) and Q = 28 (P=0). Derive equation and schedule.<br>\n    <b>(d)</b> Intercepts: P = 50, Q = 150.</p>",
      "solutionHtml": "<p><b>(a)</b> Slope = ΔQ/ΔP = (2−8)/(2.00−0.50) = −6/1.5 = <b>−4</b>. Using point ($0.50, 8): Q = a − 4P → 8 = a − 2 → a = 10. &nbsp;<b>Q<sub>d</sub> = 10 − 4P</b> &nbsp;(check P=2: Q=2 ✓)</p>\n      <p><b>(b)</b> Slope = (0−100)/(5−0) = −20. &nbsp;<b>Q<sub>d</sub> = 100 − 20P</b></p>\n      <p><b>(c)</b> Slope = ΔQ/ΔP = (0−28)/(280−0) = −0.1. &nbsp;<b>Q<sub>d</sub> = 28 − 0.1P</b>. Schedule: P=0→28, P=70→21, P=140→14, P=210→7, P=280→0.</p>\n      <p><b>(d)</b> Slope = (0−150)/(50−0) = −3. &nbsp;<b>Q<sub>d</sub> = 150 − 3P</b></p>\n      <p><b>Method:</b> pick two points from the schedule/graph, compute slope b = ΔQ/ΔP, then substitute one point to find intercept a.</p>"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "the-demand-function-full-determinants",
      "text": "The Demand Function (full determinants)"
    },
    {
      "type": "paragraph",
      "html": "Q<sub>dx</sub> = f (P<sub>x</sub>, Y, P<sub>1</sub>…P<sub>n−1</sub>, T, P<sub>e</sub>, S)<small>P<sub>x</sub> = own price · Y = income · P<sub>1</sub>…P<sub>n−1</sub> = prices of related goods · T = tastes &amp; preferences · P<sub>e</sub> = expectations · S = social factors</small>"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"grid2\">\n    <div class=\"card\"><h4>Income vs Wealth</h4><p><b>Income</b> — the sum of wages, salaries, profits, interest, rents and other earnings <b>in a given period</b>; a <b>flow</b> measure. <b>Wealth (net worth)</b> — total value of what a household owns minus what it owes; a <b>stock</b> measure.</p></div>\n    <div class=\"card\"><h4>Normal vs Inferior goods</h4><p><b>Normal goods:</b> demand rises when income rises, falls when income falls. <b>Inferior goods:</b> demand <i>falls</i> when income rises (e.g. used cars, public transport for some consumers).</p></div>\n    <div class=\"card\"><h4>Substitutes</h4><p>Goods that serve as <b>replacements</b> for one another; when the price of one rises, demand for the other <b>rises</b>. Perfect substitutes are identical products. Ex: Dominos vs Pizza Hut, Nike vs Reebok, tea vs coffee, IBM vs Apple computers.</p></div>\n    <div class=\"card\"><h4>Complements</h4><p>Goods that <b>go together</b>; a decrease in the price of one <b>increases</b> demand for the other. Ex: bread &amp; butter, PlayStation &amp; games, vehicles &amp; fuel, cereal &amp; milk, dress shirts &amp; ties.</p></div>\n  </div>",
      "alt": "Diagram from the original notes"
    },
    {
      "type": "callout",
      "variant": "warn",
      "title": "Shift vs Movement — the most tested idea in this topic",
      "html": "<ul>\n    <li>Change in the <b>own price</b> of the good → <b>change in quantity demanded</b> = <b>movement along</b> the same demand curve.</li>\n    <li>Change in <b>income, preferences, prices of related goods, expectations, social factors</b> → <b>change in demand</b> = <b>shift of the whole curve</b> (right = increase, left = decrease).</li>\n    <li>Higher income <b>increases</b> demand for normal goods but <b>decreases</b> demand for inferior goods.</li>\n    <li>Price of hamburgers rises → demand for substitute (chicken) shifts <b>right</b>; demand for complement (ketchup) shifts <b>left</b>.</li>\n  </ul>"
    },
    {
      "type": "paragraph",
      "html": "<b>Market demand</b> is the sum of all quantities demanded per period by <b>all households</b> in the market — the horizontal summation of individual demand curves (add quantities at each price)."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "supply",
      "text": "Supply"
    },
    {
      "type": "paragraph",
      "html": "<b>Supply</b> is the amount of goods or services that sellers are <b>willing and able to sell</b> at various prices. A <b>supply schedule</b> shows how much firms supply at different prices; <b>quantity supplied</b> is the number of units offered for sale at a particular price during a given time."
    },
    {
      "type": "callout",
      "variant": "warn",
      "title": "The Law of Supply",
      "html": "There is a <b>positive relationship</b> between price and quantity supplied — <b>supply curves slope upward</b>."
    },
    {
      "type": "paragraph",
      "html": "Q<sub>s</sub> = a + bP &nbsp;(in tutorial problems often Q<sub>s</sub> = −c + dP, c &gt; 0)<small>Supply function: Q<sub>sx</sub> = f (P<sub>x</sub>, P<sub>f</sub>, P<sub>1</sub>…P<sub>n−1</sub>, T, E, G) — own price, factor prices, related-goods prices, technology, supplier expectations, government policies</small>"
    },
    {
      "type": "paragraph",
      "html": "<b>Market supply</b> is the horizontal summation of individual firms’ supply curves — the sum of all quantities supplied per period by all firms selling in the market."
    },
    {
      "type": "callout",
      "variant": "warn",
      "title": "Shift vs Movement for supply",
      "html": "Change in the good’s own price → <b>movement along</b> the supply curve (change in quantity supplied). Change in <b>costs, input prices, technology, prices of related goods, expectations, government policy</b> → <b>shift of the supply curve</b> (change in supply)."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "market-equilibrium",
      "text": "Market Equilibrium"
    },
    {
      "type": "paragraph",
      "html": "An <b>equilibrium</b> is a condition that exists when <b>quantity supplied equals quantity demanded</b>. At equilibrium there is <b>no tendency for price to change</b>. Only at P₀ do the wishes of buyers and sellers coincide."
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"grid2\">\n    <div class=\"card\"><h4> Excess demand (shortage)</h4><p>Exists when quantity demanded <b>exceeds</b> quantity supplied at the current price (price below equilibrium). Price tends to <b>rise</b> until equilibrium is restored.</p></div>\n    <div class=\"card\"><h4> Excess supply (surplus)</h4><p>Exists when quantity supplied <b>exceeds</b> quantity demanded (price above equilibrium). Price tends to <b>fall</b> until equilibrium is restored.</p></div>\n  </div>",
      "alt": "Diagram from the original notes"
    },
    {
      "type": "table",
      "head": [
        "Shift",
        "Equilibrium price",
        "Equilibrium quantity"
      ],
      "rows": [
        [
          "Demand increases (D shifts right)",
          "Rises",
          "Rises"
        ],
        [
          "Demand decreases (D shifts left)",
          "Falls",
          "Falls"
        ],
        [
          "Supply increases (S shifts right)",
          "Falls",
          "Rises"
        ],
        [
          "Supply decreases (S shifts left)",
          "Rises",
          "Falls"
        ]
      ]
    },
    {
      "type": "example",
      "title": "Lesson 03 exercises — Worked example",
      "bodyHtml": "<p><b>Exercise 1.</b> Schedule for product X: at P = 2…10, Qd = 16…0 (falls 2 per Re 1) and Qs = −6…10 (rises 2 per Re 1). Compute both equations, the equilibrium price and quantity, and verify graphically.</p>\n    \n    \n    <p style=\"margin-top:12px\"><b>Exercise 2.</b> Qd = 3300 − 2P and Qs = 500 + 8P. Compute the equilibrium price and quantity.</p>",
      "solutionHtml": "<p><b>Demand:</b> slope = ΔQ/ΔP = (0−16)/(10−2) = −2; using (10, 0): 0 = a − 20 → a = 20. &nbsp;<b>Q<sub>d</sub> = 20 − 2P</b></p>\n      <p><b>Supply:</b> slope = (10−(−6))/(10−2) = +2; using (10, 10): 10 = a + 20 → a = −10. &nbsp;<b>Q<sub>s</sub> = −10 + 2P</b></p>\n      <p><b>Equilibrium:</b> 20 − 2P = −10 + 2P → 30 = 4P → <b>P = 7.5</b>, <b>Q = 5</b>. (Matches the schedule: at P = 7.5 both demand and supply equal 5.) Graph: downward D through (2,16) and (10,0); upward S through (2,−6) and (10,10); they cross at (5, 7.5).</p>"
    },
    {
      "type": "example",
      "title": "Classify the goods — Worked example",
      "bodyHtml": "<p>Classify as normal/inferior: chocolate, public transportation, used cars, mobile phone, computers, bicycle, movie theatres, dog shows, organic food, pizza, legal services. Then classify the pairs as substitutes/complements: bread &amp; butter, PlayStation &amp; games, Nike &amp; Reebok, IBM &amp; Apple computers, dress shirts &amp; ties, Dominos &amp; Pizza Hut, vehicle &amp; fuel, beer &amp; wine, faxes &amp; e-mail, cereal &amp; milk.</p>",
      "solutionHtml": "<p><b>Typically normal:</b> chocolate, mobile phones, computers, movie theatres, dog shows, organic food, pizza, legal services (demand rises with income). <b>Typically inferior:</b> public transportation, used cars, (for many consumers) basic bicycles — demand falls as income rises and consumers switch to cars/taxis/new vehicles. Context matters — justify your reasoning!</p>\n      <p><b>Substitutes:</b> Nike &amp; Reebok, IBM &amp; Apple computers, Dominos &amp; Pizza Hut, beer &amp; wine, faxes &amp; e-mail (also cereal brands). <b>Complements:</b> bread &amp; butter, PlayStation &amp; games, dress shirts &amp; ties, vehicle &amp; fuel, cereal &amp; milk.</p>"
    },
    {
      "type": "example",
      "title": "Lesson 03 exercise — pizza demand scenarios — Worked example",
      "bodyHtml": "<p>Explain what happens to pizza demand in each case: (1) increase in household income; (2) increase in the price of pizza; (3) increase in the price of cheese; (4) decrease in the price of burgers; (5) customers’ preference for pizza reduced.</p>",
      "solutionHtml": "<ol>\n        <li>Income → D shifts <b>right</b> (pizza is a normal good).</li>\n        <li>Own price → <b>movement up along</b> the demand curve; quantity demanded falls (no shift).</li>\n        <li>Cheese is an input/complement (cheese pizza) — its price rise makes pizza more expensive to produce/serve and complements costlier: demand for pizza shifts <b>left</b>.</li>\n        <li>Burgers are a substitute — cheaper burgers → some consumers switch: pizza demand shifts <b>left</b>.</li>\n        <li>Tastes fall → D shifts <b>left</b>.</li>\n      </ol>"
    },
    {
      "type": "example",
      "title": "Tutorial 03 — Demand & Supply — full solutions",
      "bodyHtml": "<p><b>Q1.</b> Identify the effect on the <b>demand</b> curve (torches): (i) decrease in consumer preferences for torches; (ii) torch is a normal good and consumer income rises; (iii) torch is an inferior good and income rises; (iv) price of batteries falls; (v) price of electric torches rises.</p>\n    \n    \n    \n\n    <p style=\"margin-top:14px\"><b>Q2.</b> What happens to <b>coffee supply</b> in each case (use graphs)? (i) price of coffee increases; (ii) government subsidises coffee farmers; (iii) fertiliser price increases; (iv) new tax on coffee producers; (v) price of tea increases.</p>\n    \n    \n    \n\n    <p style=\"margin-top:14px\"><b>Q3.</b> Rice market in a small town: <b>Q<sub>d</sub> = 350 − 10P, Q<sub>s</sub> = −40 + 5P</b>. (i) Calculate the equilibrium price. (ii) Calculate the equilibrium quantity. (iii) Draw demand and supply and illustrate the equilibrium.</p>\n    \n    \n    \n\n    <p style=\"margin-top:14px\"><b>Q4.</b> A market has <b>80 identical consumers</b> each with Q<sub>d</sub> = 60 − 5P, and <b>40 identical producers</b> each with Q<sub>s</sub> = −4 + 3P. Derive the market demand, market supply and the equilibrium price.</p>\n    \n    \n    \n\n    <p style=\"margin-top:14px\"><b>Q5.</b> Given the schedule below: (i) derive the demand equation; (ii) derive the supply equation; (iii) find equilibrium price and quantity; (iv) illustrate graphically; (v) at market price Rs. 35, is there a shortage or surplus?</p>\n    <div class=\"tbl-wrap\"><table class=\"tbl\">\n      <tbody><tr><th>Price</th><td>10</td><td>20</td><td>30</td><td>40</td><td>50</td></tr>\n      <tr><th>Q<sub>d</sub></th><td>500</td><td>475</td><td>450</td><td>425</td><td>300</td></tr>\n      <tr><th>Q<sub>s</sub></th><td>200</td><td>260</td><td>320</td><td>380</td><td>440</td></tr>\n    </tbody></table></div>",
      "solutionHtml": "<ol>\n        <li><b>Preferences fall</b> → demand curve shifts <b>left</b> (decrease in demand).</li>\n        <li><b>Normal good + income →</b> demand shifts <b>right</b>.</li>\n        <li><b>Inferior good + income →</b> demand shifts <b>left</b>.</li>\n        <li><b>Batteries are a complement</b> — cheaper batteries → torch demand shifts <b>right</b>.</li>\n        <li><b>Electric torches are a substitute</b> — their price rises → consumers switch to (non-electric) torches: demand shifts <b>right</b>.</li>\n      </ol>"
    },
    {
      "type": "quiz",
      "title": "Topic 3 Quiz",
      "count": 8,
      "quizSlug": "03-demand-supply-and-market-equilibrium"
    }
  ]
};

export default chapter;
