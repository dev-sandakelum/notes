import type { ChapterData } from "@/content/types";
import {
  BUFFER_STOCK_CHART,
  CONSUMER_PRODUCER_SURPLUS_CHART,
  DWL_MAX_PRICE_CHART,
  PER_UNIT_SUBSIDY_CHART,
  PER_UNIT_TAX_CHART,
  PRICE_CEILING_CHART,
  PRICE_FLOOR_CHART,
} from "../charts";

const chapter: ChapterData = {
  "meta": {
    "slug": "04-government-intervention-in-markets",
    "number": 4,
    "title": "Government intervention in markets",
    "subtitle": "Lesson 04 · Tutorial 04 (Parts I & II) · Chathuranga Adhikari",
    "kind": "topic",
    "words": 1890,
    "minutes": 9
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "why-intervene-market-failures",
      "text": "Why intervene? market failures"
    },
    {
      "type": "paragraph",
      "html": "Unregulated competitive markets usually lead to <b>economic efficiency</b>, maximisation of aggregate consumer and producer surplus. However, sometimes <b>market failures</b> occur, where prices fail to provide proper signals and an unregulated market becomes inefficient:"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"grid2\">\n    <div class=\"card\"><h4>Externalities</h4><p>Costs or benefits that do <b>not show up in the market price</b> (e.g. pollution). They are external to the market, so buyers and sellers ignore them.</p></div>\n    <div class=\"card\"><h4>Public goods</h4><p>Goods that markets under-provide because no one can be excluded from benefiting, e.g. <b>national defence</b>, street lighting.</p></div>\n    <div class=\"card\"><h4>Monopolies</h4><p>A single seller restricts output and raises price above the competitive level, creating deadweight loss.</p></div>\n    <div class=\"card\"><h4>Imperfect information</h4><p>Prevents consumers from making utility-maximising decisions; producers may know more than buyers.</p></div>\n  </div>",
      "alt": "Diagram from the original notes"
    },
    {
      "type": "paragraph",
      "html": "<b>Seven methods of government intervention:</b> (1) buffer stocks, (2) price controls (maximum &amp; minimum prices), (3) taxation, (4) subsidies, (5) state/direct provision, (6) regulation."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "1-buffer-stocks",
      "text": "1. buffer stocks"
    },
    {
      "type": "paragraph",
      "html": "A <b>buffer stock</b> is a system that <b>buys and stores stocks in good harvests</b> (preventing prices from falling below a target level) and <b>releases stocks in bad harvests</b> (preventing prices from rising above a target level). It influences market supply by holding or releasing stocks to <b>stabilise prices or incomes</b>."
    },
        {
      "type": "econChart",
      "spec": BUFFER_STOCK_CHART
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"grid2\">\n    <div class=\"card\"><h4>Key features</h4><ul>\n      <li>A <b>short-term measure</b>, used in agriculture where supply is volatile</li>\n      <li>Assumes supply is <b>perfectly inelastic in the short run</b></li>\n      <li>Only useful where goods <b>can be stored</b></li>\n      <li><b>Income stabilisation schemes</b> aim to keep farm incomes constant by manipulating price through releasing or adding to stores</li>\n    </ul></div>\n    <div class=\"card\"><h4>Problems of buffer stock schemes</h4><ul>\n      <li>Farmers stop responding to market signals; the market becomes <b>distorted</b></li>\n      <li><b>Overproduction</b> if incomes are guaranteed</li>\n      <li>Issues in storing food; <b>cost of storage</b></li>\n      <li>Farmers’ moral hazard, guaranteed constant income</li>\n      <li>Long-term sustainability and international effects (LDCs, WTO)</li>\n    </ul></div>\n  </div>",
      "alt": "Diagram from the original notes"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "2-price-ceilings-maximum-price",
      "text": "2. price ceilings (maximum price)"
    },
    {
      "type": "paragraph",
      "html": "A <b>price ceiling</b> occurs when the government sets a <b>legal maximum limit</b> on the price of a good or service; the highest price a producer, group of producers or an industry may charge. The aim is to keep prices <b>below the market equilibrium</b> to <b>protect consumers</b>. To be effective, the ceiling must be set <b>below the free-market price</b>."
    },
        {
      "type": "econChart",
      "spec": PRICE_CEILING_CHART
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"grid2\">\n    <div class=\"card\"><h4>Advantages</h4><ul><li>More affordable price for consumers</li><li>Price stability</li><li>Greater demand / access</li></ul></div>\n    <div class=\"card\"><h4>Disadvantages</h4><ul><li>Shortages (excess demand)</li><li>Lack of incentives for producers</li><li>Black market emerges</li><li>More unemployment in the industry</li><li>Less choice &amp; quality decline</li></ul></div>\n  </div>",
      "alt": "Diagram from the original notes"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "3-price-floors-minimum-price",
      "text": "3. price floors (minimum price)"
    },
    {
      "type": "paragraph",
      "html": "A <b>price floor</b> is a government-imposed <b>legal minimum price</b>; the lowest price at which a good or service may legally be sold. It is usually set <b>above the equilibrium price</b> to <b>protect producers</b> from prices deemed too low, ensuring they cover production costs and earn a reasonable income."
    },
        {
      "type": "econChart",
      "spec": PRICE_FLOOR_CHART
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"grid2\">\n    <div class=\"card\"><h4>Advantages</h4><ul><li>Protects producers’ incomes</li><li>Encourages production</li><li>Corrects market failure</li><li>Reduces consumption of harmful goods</li></ul></div>\n    <div class=\"card\"><h4>Disadvantages</h4><ul><li>Inefficient resource allocation</li><li>Consumers pay higher prices</li><li>Surplus production (waste or storage cost)</li></ul></div>\n  </div>",
      "alt": "Diagram from the original notes"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "consumer-surplus-producer-surplus-and-deadweight-loss",
      "text": "Consumer surplus, producer surplus & deadweight loss"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Consumer surplus (CS):</b> the total benefit or value consumers receive <b>beyond what they pay</b>, measured by the <b>area between the demand curve and the market price</b>. If you were willing to pay $9 and the price is $5, you gain $4 of consumer surplus.",
        "<b>Producer surplus (PS):</b> the total benefit or revenue producers receive <b>beyond production cost</b>, measured by the <b>area between the supply curve and the market price</b>. A producer willing to accept $3 who receives $5 gains $2.",
        "<b>Deadweight loss (DWL):</b> the <b>total loss in surplus</b> (consumer + producer) when a policy pushes price above or below the market-clearing price, triangles <b>B + C</b> in the diagrams below. It measures the <b>inefficiency</b> of the policy."
      ]
    },
        {
      "type": "econChart",
      "spec": CONSUMER_PRODUCER_SURPLUS_CHART
    },
    {
      "type": "paragraph",
      "html": "CS = ½ × Q₀ × (P<sub>intercept</sub> − P₀) &nbsp;&nbsp;·&nbsp;&nbsp; PS = ½ × Q₀ × (P₀ − P<sub>s-intercept</sub>)<small>P<sub>intercept</sub> = price where Q<sub>d</sub> = 0 (choke price); P<sub>s-intercept</sub> = price where Q<sub>s</sub> = 0</small>"
    },
        {
      "type": "econChart",
      "spec": DWL_MAX_PRICE_CHART
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "4-taxation-indirect-goods-tax",
      "text": "4. taxation (indirect / goods tax)"
    },
    {
      "type": "paragraph",
      "html": "Government uses <b>taxes and subsidies as financial tools</b> to influence production and prices. A <b>tax</b> is a charge imposed on incomes, profits, or goods and services to fund government expenditure (e.g. stamp duty, income tax, GST, service tax). A per-unit tax on producers shifts the supply curve <b>upward (left)</b> by the amount of the tax."
    },
        {
      "type": "econChart",
      "spec": PER_UNIT_TAX_CHART
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Tax: step recipe",
      "html": "<ol>\n    <li>Find the original equilibrium (Q<sub>d</sub> = Q<sub>s</sub>) → P₀, Q₀.</li>\n    <li>Write the new supply: producers now receive (P − tax), so <b>Q₁ₛ = Q₁(P − t)</b>, supply shifts left/up.</li>\n    <li>Solve Q<sub>d</sub> = Q₁ₛ → new consumer price Pₜ and quantity Qₜ; producer price = Pₜ − t.</li>\n    <li>Tax revenue = t × Qₜ. &nbsp;DWL = ½ × (Q₀ − Qₜ) × t.</li>\n  </ol>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "5-subsidies",
      "text": "5. subsidies"
    },
    {
      "type": "paragraph",
      "html": "A <b>subsidy</b> is a direct payment or grant by the government to producers, making the price paid by consumers lower than it would otherwise be. Subsidised goods often benefit the community and might not be provided under the free market (e.g. certain foods, public transport, free school meals). A per-unit subsidy shifts supply <b>downward (right)</b>."
    },
        {
      "type": "econChart",
      "spec": PER_UNIT_SUBSIDY_CHART
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Subsidy: step recipe",
      "html": "<ol>\n    <li>Find original equilibrium P₀, Q₀.</li>\n    <li>New supply: producers effectively receive (P + s): <b>Q₁ₛ = Q₁(P + s)</b>: supply shifts right/down.</li>\n    <li>Solve for new consumer price Pₜ and quantity Qₜ; producer price = Pₜ + s.</li>\n    <li>Government cost = s × Qₜ. &nbsp;DWL = ½ × (Qₜ − Q₀) × s.</li>\n  </ol>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "6-direct-provision-and-7-regulation",
      "text": "6. direct provision & 7. regulation"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"grid2\">\n    <div class=\"card\"><h4>Government / direct provision</h4><p>Government takes over production of goods or services, in part or whole, supplying them <b>directly, often free of charge</b>. State-owned industries: electricity, water, railways. Also applies to mixed public-private sectors: education, hospitals.</p></div>\n    <div class=\"card\"><h4>Regulation</h4><p>Various means by which government controls production and consumption: <b>rules and laws</b> applied to firms, controlling price, quality and quantity of goods produced or consumed. Ex: a doctor’s prescription required to buy controlled drugs.</p></div>\n  </div>",
      "alt": "Diagram from the original notes"
    },
    {
      "type": "example",
      "title": "Lesson 04 questions: worked examples",
      "bodyHtml": "<p><b>Q1 (Maximum price).</b> Q<sub>d</sub> = 100 − 5P, Q<sub>s</sub> = 5P. The government sets a maximum price of Rs. 8. Analyse the market.</p>\n    \n    \n\n    <p style=\"margin-top:12px\"><b>Q2 (Minimum price).</b> Same market (Q<sub>d</sub> = 100 − 5P, Q<sub>s</sub> = 5P), but a minimum price of Rs. 12 is set. Analyse.</p>\n    \n    \n\n    <p style=\"margin-top:12px\"><b>Q3 (Tax).</b> Q<sub>d</sub> = 200 − 10P, Q<sub>s</sub> = −100 + 20P. A tax of Rs. 3 per unit is imposed. Find the new equilibrium, the tax burden and the welfare effects.</p>\n    \n    \n\n    <p style=\"margin-top:12px\"><b>Q4 (Subsidy).</b> Q<sub>d</sub> = 100 − 5P, Q<sub>s</sub> = −20 + 5P. A subsidy of Rs. 4 per unit is given. Analyse.</p>",
      "solutionHtml": "<p><b>Q1 (Maximum price):</b> equilibrium first: 100 − 5P = 5P → P = 10, Q = 50.</p>\n      <p><b>At the maximum price of 8</b> (below equilibrium, so it binds):</p>\n      <ul>\n        <li>Q<sub>d</sub> = 100 − 40 = <b>60</b>; Q<sub>s</sub> = 5 × 8 = <b>40</b></li>\n        <li><b>Shortage (excess demand) = 60 − 40 = 20 units</b></li>\n        <li>Only 40 units are actually traded (supply side limits the trade)</li>\n      </ul>\n      <p>Diagram: see the price-ceiling chart above — drawn from exactly these equations.</p>\n      <p><b>Q2 (Minimum price 12):</b> 12 is above the equilibrium price of 10, so it binds.</p>\n      <ul>\n        <li>Q<sub>d</sub> = 100 − 60 = <b>40</b>; Q<sub>s</sub> = 5 × 12 = <b>60</b></li>\n        <li><b>Surplus (excess supply) = 60 − 40 = 20 units</b>; only 40 units are bought by consumers</li>\n        <li>The government must buy the 20-unit surplus (buffer stock) or restrict production — see the price-floor chart above</li>\n      </ul>\n      <p><b>Q3 (Tax of Rs 3):</b> Qd = 200 − 10P, Qs = −100 + 20P.</p>\n      <ul>\n        <li>Original equilibrium: 200 − 10P = −100 + 20P → 300 = 30P → <b>P₀ = 10, Q₀ = 100</b></li>\n        <li>New supply: producers keep (P − 3): Q₁ₛ = −100 + 20(P − 3) = <b>−160 + 20P</b></li>\n        <li>New equilibrium: 200 − 10P = −160 + 20P → 360 = 30P → <b>Pc = 12, Qt = 80</b>; producers keep <b>Ps = 9</b></li>\n        <li><b>Incidence:</b> consumers pay Rs 2 more, producers receive Rs 1 less (2/3 vs 1/3 of the tax)</li>\n        <li><b>Revenue</b> = 3 × 80 = <b>240</b>; <b>DWL</b> = ½ × (100 − 80) × 3 = <b>30</b></li>\n        <li>Welfare check: CS 500 → 320 and PS 250 → 160, loss 270 = revenue 240 + DWL 30 ✓ — see the per-unit-tax chart above</li>\n      </ul>\n      <p><b>Q4 (Subsidy of Rs 4):</b> Qd = 100 − 5P, Qs = −20 + 5P.</p>\n      <ul>\n        <li>Original equilibrium: 100 − 5P = −20 + 5P → 120 = 10P → <b>P₀ = 12, Q₀ = 40</b></li>\n        <li>New supply: producers receive (P + 4): Q₁ₛ = −20 + 5(P + 4) = <b>5P</b></li>\n        <li>New equilibrium: 100 − 5P = 5P → <b>Pc = 10, Qt = 50</b>; producers receive <b>Ps = 14</b></li>\n        <li>Consumers pay Rs 2 less, producers receive Rs 2 more (the Rs 4 subsidy splits evenly here)</li>\n        <li><b>Cost to government</b> = 4 × 50 = <b>200</b>; <b>DWL</b> = ½ × (50 − 40) × 4 = <b>20</b></li>\n        <li>Welfare check: CS 160 → 250 and PS 160 → 250, gain 180; 180 + DWL 20 = cost 200 ✓</li>\n      </ul>"
    },
    {
      "type": "example",
      "title": "Lesson 04 exercises: worked examples",
      "bodyHtml": "<p><b>E1 (Maximum price).</b> Q<sub>d</sub> = 100 − 5P, Q<sub>s</sub> = −20 + 5P, maximum price Rs. 10.</p>\n    \n    \n    <p style=\"margin-top:12px\"><b>E2 (Minimum price).</b> Q<sub>d</sub> = 9000 − 10P, Q<sub>s</sub> = −1000 + 10P, minimum price Rs. 700.</p>\n    \n    \n    <p style=\"margin-top:12px\"><b>E3 (Tax).</b> Q<sub>d</sub> = 150 − 10P, Q<sub>s</sub> = −90 + 10P, tax Rs. 2.</p>\n    \n    \n    <p style=\"margin-top:12px\"><b>E4 (Subsidy).</b> Q<sub>d</sub> = 70 − 2P, Q<sub>s</sub> = −10 + 2P, subsidy Rs. 2.5.</p>",
      "solutionHtml": "<p><b>E1 (Maximum price 10):</b> equilibrium: 100 − 5P = −20 + 5P → P = 12, Q = 40. At the ceiling <b>P = 10</b> (below 12, so it binds): Q<sub>d</sub> = 50, Q<sub>s</sub> = 30 → <b>shortage of 20 units</b>; only 30 units trade; rationing/queues/black market possible.</p>\n      <p><b>E2 (Minimum price 700):</b> Qd = 9000 − 10P, Qs = −1000 + 10P.</p>\n      <ul>\n        <li>Equilibrium: 9000 − 10P = −1000 + 10P → 10000 = 20P → <b>P₀ = 500, Q₀ = 4000</b></li>\n        <li>700 is above 500, so the floor binds: Q<sub>d</sub> = 9000 − 7000 = <b>2000</b>; Q<sub>s</sub> = −1000 + 7000 = <b>6000</b></li>\n        <li><b>Surplus = 6000 − 2000 = 4000 units</b>; only 2000 are bought by consumers</li>\n      </ul>\n      <p><b>E3 (Tax of Rs 2):</b> Qd = 150 − 10P, Qs = −90 + 10P.</p>\n      <ul>\n        <li>Equilibrium: 150 − 10P = −90 + 10P → 240 = 20P → <b>P₀ = 12, Q₀ = 30</b></li>\n        <li>New supply: Q₁ₛ = −90 + 10(P − 2) = <b>−110 + 10P</b></li>\n        <li>New equilibrium: 150 − 10P = −110 + 10P → 260 = 20P → <b>Pc = 13, Qt = 20</b>; producers keep <b>Ps = 11</b></li>\n        <li>Incidence: consumers bear Rs 1, producers Rs 1 (equal slopes → equal incidence)</li>\n        <li><b>Revenue</b> = 2 × 20 = <b>40</b>; <b>DWL</b> = ½ × (30 − 20) × 2 = <b>10</b></li>\n      </ul>\n      <p><b>E4 (Subsidy of Rs 2.5):</b> Qd = 70 − 2P, Qs = −10 + 2P.</p>\n      <ul>\n        <li>Equilibrium: 70 − 2P = −10 + 2P → 80 = 4P → <b>P₀ = 20, Q₀ = 30</b></li>\n        <li>New supply: Q₁ₛ = −10 + 2(P + 2.5) = <b>−5 + 2P</b></li>\n        <li>New equilibrium: 70 − 2P = −5 + 2P → 75 = 4P → <b>Pc = 18.75, Qt = 32.5</b>; producers receive <b>Ps = 21.25</b></li>\n        <li>Consumers pay Rs 1.25 less, producers receive Rs 1.25 more</li>\n        <li><b>Cost to government</b> = 2.5 × 32.5 = <b>81.25</b>; <b>DWL</b> = ½ × (32.5 − 30) × 2.5 = <b>3.125</b></li>\n      </ul>"
    },
    {
      "type": "example",
      "title": "Tutorial 04 · part I. price controls & surplus, full solutions",
      "bodyHtml": "<p><b>Q1.</b> Vegetable market: <b>Q<sub>d</sub> = 720 − 4P, Q<sub>s</sub> = −120 + 2P</b>. (i) Equilibrium price &amp; quantity; (ii) draw the diagram; (iii) consumer &amp; producer surplus at equilibrium; (iv) total surplus.</p>\n    \n    \n    \n\n    <p style=\"margin-top:14px\"><b>Q2.</b> Rice market: <b>Q<sub>d</sub> = 1320 − 6P, Q<sub>s</sub> = −680 + 4P</b>. (i) Equilibrium; (ii) diagram; (iii) CS &amp; PS; (iv) total surplus; (v) the government sets a <b>maximum price of Rs. 180</b>: (a) excess demand or supply, and how much? (b) CS &amp; PS after the maximum price; (c) the black-market price; (d) CS at the black-market price; (e) deadweight loss.</p>\n    \n    \n    \n\n    <p style=\"margin-top:14px\"><b>Q3.</b> Dairy market: <b>Q<sub>d</sub> = 180 − 2P, Q<sub>s</sub> = −15 + P</b>. (i) Equilibrium; (ii) diagram; (iii) CS &amp; PS; (iv) total surplus; (v) a <b>minimum price of Rs. 72</b>: (a) excess supply? (b) CS &amp; PS after; (c) DWL; (vi) if government buys the excess: (a) government expenditure; (b) producer surplus; (c) DWL.</p>",
      "solutionHtml": "<p><b>(i)</b> 720 − 4P = −120 + 2P → 840 = 6P → <b>P₀ = 140, Q₀ = 160</b> (720 − 560).</p>\n      <p><b>(ii)</b> Demand: P-intercept 180 (where Q=0), Q-intercept 720. Supply: P-intercept 60. Draw D downward, S upward crossing at (160, 140).</p>\n      <p><b>(iii)</b> CS = ½ × 160 × (180 − 140) = ½ × 160 × 40 = <b>3,200</b><br>\n      PS = ½ × 160 × (140 − 60) = ½ × 160 × 80 = <b>6,400</b></p>\n      <p><b>(iv)</b> Total surplus = 3,200 + 6,400 = <b>9,600</b></p>\n      <p><b>Q2 (rice):</b> Qd = 1320 − 6P, Qs = −680 + 4P.</p>\n      <ul>\n        <li>(i) 1320 − 6P = −680 + 4P → 2000 = 10P → <b>P₀ = 200, Q₀ = 1320 − 1200 = 120</b></li>\n        <li>(ii) Demand P-intercept 220, supply P-intercept 170; cross at (120, 200).</li>\n        <li>(iii) CS = ½ × 120 × (220 − 200) = <b>1,200</b>; PS = ½ × 120 × (200 − 170) = <b>1,800</b></li>\n        <li>(iv) Total surplus = <b>3,000</b></li>\n        <li>(v) Maximum price Rs 180 (binding, below 200): (a) Qd = 1320 − 1080 = <b>240</b>, Qs = −680 + 720 = <b>40</b> → <b>excess demand of 200 units</b>; only 40 trade. (b) CS = ½ × 40 × (220 − 180) = <b>800</b>; PS = ½ × 40 × (180 − 170) = <b>200</b>. (c) Black-market price = price at which the 40 available units clear: 40 = 1320 − 6P → 6P = 1280 → <b>P ≈ 213.33</b>. (d) CS at that price = ½ × 40 × (220 − 213.33) ≈ <b>133.3</b>. (e) DWL = ½ × (120 − 40) × (213.33 − 180) = ½ × 80 × 33.33 ≈ <b>1,333.3</b></li>\n      </ul>\n      <p><b>Q3 (dairy):</b> Qd = 180 − 2P, Qs = −15 + P.</p>\n      <ul>\n        <li>(i) 180 − 2P = −15 + P → 195 = 3P → <b>P₀ = 65, Q₀ = 180 − 130 = 50</b></li>\n        <li>(ii) Demand P-intercept 90, supply P-intercept 15; cross at (50, 65).</li>\n        <li>(iii) CS = ½ × 50 × (90 − 65) = <b>625</b>; PS = ½ × 50 × (65 − 15) = <b>1,250</b></li>\n        <li>(iv) Total surplus = <b>1,875</b></li>\n        <li>(v) Minimum price Rs 72 (binding, above 65): (a) Qd = 180 − 144 = <b>36</b>, Qs = −15 + 72 = <b>57</b> → <b>excess supply of 21 units</b>. (b) CS = ½ × 36 × (90 − 72) = <b>324</b>; PS = 72 × 36 − ∫₀³⁶(15 + q)dq = 2592 − (540 + 648) = <b>1,404</b> (only the 36 units consumers buy are sold). (c) DWL = ∫₃₆⁵⁰ [(90 − q/2) − (15 + q)]dq = ∫₃₆⁵⁰ (75 − 1.5q)dq = <b>147</b></li>\n        <li>(vi) Government buys the 21-unit surplus at Rs 72: (a) expenditure = 21 × 72 = <b>1,512</b>; (b) producers now sell all 57 units at 72: PS = ½ × 57 × (72 − 15) = <b>1,624.5</b>; (c) DWL = ∫₃₆⁵⁷ [(15 + q) − (90 − q/2)]dq = ∫₃₆⁵⁷ (1.5q − 75)dq = <b>110.25</b> (units 37–57 cost more to produce than they are worth to consumers)</li>\n      </ul>"
    },
    {
      "type": "example",
      "title": "Tutorial 04 · part II: tax & subsidy, full solutions",
      "bodyHtml": "<p><b>Q1.</b> Sugar market: <b>Q<sub>d</sub> = 260 − 3P, Q<sub>s</sub> = −140 + 2P</b>. (i) Equilibrium price &amp; quantity; (ii) diagram; (iii) CS &amp; PS at equilibrium; (iv) total surplus; (v) a <b>goods tax of Rs. 5 per unit</b>: (a) derive the new supply equation; (b) new equilibrium price &amp; quantity; (c) CS after tax; (d) PS after tax; (e) amount of tax; (f) deadweight loss.</p>\n    \n    \n    \n\n    <p style=\"margin-top:14px\"><b>Q2.</b> Milk powder market: <b>Q<sub>d</sub> = 400 − 2P, Q<sub>s</sub> = −240 + 3P</b>. (i) Equilibrium; (ii) CS &amp; PS; (iii) a <b>subsidy of Rs. 20 per unit</b>: (a) new supply equation; (b) new equilibrium; (c) CS &amp; PS after subsidy; (d) cost to government; (e) deadweight loss.</p>",
      "solutionHtml": "<p><b>(i)</b> 260 − 3P = −140 + 2P → 400 = 5P → <b>P₀ = 80, Q₀ = 20</b></p>\n      <p><b>(ii)</b> Demand P-intercept 260/3 ≈ 86.67; supply P-intercept 70; cross at (20, 80).</p>\n      <p><b>(iii)</b> CS = ½ × 20 × (86.67 − 80) = <b>66.67</b>; PS = ½ × 20 × (80 − 70) = <b>100</b></p>\n      <p><b>(iv)</b> Total surplus = <b>166.67</b></p>\n      <p><b>(v) Tax t = 5:</b></p>\n      <ul>\n        <li>(a) New supply: producers keep (P − 5): <b>Q₁ₛ = −140 + 2(P − 5) = −150 + 2P</b></li>\n        <li>(b) 260 − 3P = −150 + 2P → 410 = 5P → <b>Pₜ = 82, Qₜ = 14</b>; producers keep Pₛ = 77.</li>\n        <li>(c) CS = ½ × 14 × (86.67 − 82) = <b>32.67</b></li>\n        <li>(d) PS = ½ × 14 × (77 − 70) = <b>49</b></li>\n        <li>(e) Tax revenue = 5 × 14 = <b>70</b></li>\n        <li>(f) DWL = ½ × (20 − 14) × 5 = <b>15</b></li>\n      </ul>\n      <p>Check: original total surplus 166.67 = new CS + new PS + revenue + DWL = 32.67 + 49 + 70 + 15 = 166.67 ✓</p>\n      <p><b>Q2 (milk powder, subsidy Rs 20):</b> Qd = 400 − 2P, Qs = −240 + 3P.</p>\n      <ul>\n        <li>(i) Equilibrium: 400 − 2P = −240 + 3P → 640 = 5P → <b>P₀ = 128, Q₀ = 144</b></li>\n        <li>(ii) Demand P-intercept 200, supply P-intercept 80. CS = ½ × 144 × (200 − 128) = <b>5,184</b>; PS = ½ × 144 × (128 − 80) = <b>3,456</b></li>\n        <li>(iii) Subsidy: producers receive (P + 20): (a) <b>Q₁ₛ = −240 + 3(P + 20) = −180 + 3P</b></li>\n        <li>(b) New equilibrium: 400 − 2P = −180 + 3P → 580 = 5P → <b>Pc = 116, Qt = 168</b>; producers receive <b>Ps = 136</b> — see the per-unit-subsidy chart above, drawn from these equations</li>\n        <li>(c) CS after = ½ × 168 × (200 − 116) = <b>7,056</b>; PS after = ½ × 168 × (136 − 80) = <b>4,704</b></li>\n        <li>(d) Cost to government = 20 × 168 = <b>3,360</b></li>\n        <li>(e) DWL = ½ × (168 − 144) × 20 = <b>240</b></li>\n      </ul>\n      <p>Check: gain in CS + PS = 1,872 + 1,248 = 3,120; cost 3,360 = 3,120 + DWL 240 ✓</p>"
    },
    {
      "type": "quiz",
      "title": "Topic 4 Quiz",
      "count": 8,
      "quizSlug": "04-government-intervention-in-markets"
    }
  ]
};

export default chapter;
