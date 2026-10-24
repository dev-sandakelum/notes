import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "04-government-intervention-in-markets",
    "number": 4,
    "title": "Government Intervention in Markets",
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
      "text": "Why Intervene? Market Failures"
    },
    {
      "type": "paragraph",
      "html": "Unregulated competitive markets usually lead to <b>economic efficiency</b> — maximisation of aggregate consumer and producer surplus. However, sometimes <b>market failures</b> occur, where prices fail to provide proper signals and an unregulated market becomes inefficient:"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"grid2\">\n    <div class=\"card\"><h4>Externalities</h4><p>Costs or benefits that do <b>not show up in the market price</b> (e.g. pollution). They are external to the market, so buyers and sellers ignore them.</p></div>\n    <div class=\"card\"><h4>Public goods</h4><p>Goods that markets under-provide because no one can be excluded from benefiting — e.g. <b>national defence</b>, street lighting.</p></div>\n    <div class=\"card\"><h4>Monopolies</h4><p>A single seller restricts output and raises price above the competitive level, creating deadweight loss.</p></div>\n    <div class=\"card\"><h4>Imperfect information</h4><p>Prevents consumers from making utility-maximising decisions; producers may know more than buyers.</p></div>\n  </div>",
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
      "text": "1. Buffer Stocks"
    },
    {
      "type": "paragraph",
      "html": "A <b>buffer stock</b> is a system that <b>buys and stores stocks in good harvests</b> (preventing prices from falling below a target level) and <b>releases stocks in bad harvests</b> (preventing prices from rising above a target level). It influences market supply by holding or releasing stocks to <b>stabilise prices or incomes</b>."
    },
    {
      "type": "figure",
      "svg": "<svg class=\"fig\" viewBox=\"0 0 560 340\" role=\"img\" aria-label=\"Buffer stock stabilising price around a target price\">\n    <line class=\"axisln\" x1=\"60\" y1=\"300\" x2=\"520\" y2=\"300\"></line>\n    <line class=\"axisln\" x1=\"60\" y1=\"300\" x2=\"60\" y2=\"40\"></line>\n    <text class=\"lbl\" x=\"290\" y=\"325\" text-anchor=\"middle\">Quantity bought &amp; sold</text>\n    <text class=\"lbl\" x=\"34\" y=\"170\" text-anchor=\"middle\" transform=\"rotate(-90 34 170)\">Price</text>\n    <!-- demand -->\n    <path class=\"curve\" stroke=\"var(--primary)\" d=\"M 100 70 L 480 270\"></path>\n    <text class=\"lbl-tag\" x=\"466\" y=\"290\" fill=\"var(--primary)\">D</text>\n    <!-- target price line -->\n    <line x1=\"60\" y1=\"170\" x2=\"440\" y2=\"170\" stroke=\"var(--success)\" stroke-width=\"1.8\" stroke-dasharray=\"7 5\"></line>\n    <text class=\"lbl\" x=\"52\" y=\"175\" text-anchor=\"end\">TP</text>\n    <text class=\"lbl-sm\" x=\"300\" y=\"163\" fill=\"var(--success)\">Target price (TP)</text>\n    <!-- bad harvest supply (left) -->\n    <path class=\"curve\" stroke=\"var(--danger)\" d=\"M 130 270 L 330 70\"></path>\n    <text class=\"lbl-tag\" x=\"318\" y=\"64\" fill=\"var(--danger)\">S bad harvest</text>\n    <!-- good harvest supply (right) -->\n    <path class=\"curve\" stroke=\"var(--accent)\" d=\"M 250 270 L 450 70\"></path>\n    <text class=\"lbl-tag\" x=\"438\" y=\"64\" fill=\"var(--accent)\">S good harvest</text>\n    <!-- release arrow -->\n    <path d=\"M 236 152 C 250 140, 262 140, 274 150\" fill=\"none\" stroke=\"var(--danger)\" stroke-width=\"2\" marker-end=\"url(#arr)\"></path>\n    <text class=\"lbl-sm\" x=\"255\" y=\"136\" fill=\"var(--danger)\">release 50</text>\n    <!-- buy arrow -->\n    <path d=\"M 330 190 C 316 202, 304 202, 292 192\" fill=\"none\" stroke=\"var(--accent)\" stroke-width=\"2\" marker-end=\"url(#arrA)\"></path>\n    <text class=\"lbl-sm\" x=\"300\" y=\"216\" fill=\"var(--accent)\">buy up 60 into store</text>\n  </svg>",
      "alt": "Buffer stock stabilising price around a target price",
      "caption": "Buffer stock in action: after a bad harvest the government releases 50 units onto the market; after a good harvest it buys up 60 units — either way the price stays near TP."
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"grid2\">\n    <div class=\"card\"><h4>Key features</h4><ul>\n      <li>A <b>short-term measure</b> — used in agriculture where supply is volatile</li>\n      <li>Assumes supply is <b>perfectly inelastic in the short run</b></li>\n      <li>Only useful where goods <b>can be stored</b></li>\n      <li><b>Income stabilisation schemes</b> aim to keep farm incomes constant by manipulating price through releasing or adding to stores</li>\n    </ul></div>\n    <div class=\"card\"><h4>Problems of buffer stock schemes</h4><ul>\n      <li>Farmers stop responding to market signals — the market becomes <b>distorted</b></li>\n      <li><b>Overproduction</b> if incomes are guaranteed</li>\n      <li>Issues in storing food; <b>cost of storage</b></li>\n      <li>Farmers’ moral hazard — guaranteed constant income</li>\n      <li>Long-term sustainability and international effects (LDCs, WTO)</li>\n    </ul></div>\n  </div>",
      "alt": "Diagram from the original notes"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "2-price-ceilings-maximum-price",
      "text": "2. Price Ceilings (Maximum Price)"
    },
    {
      "type": "paragraph",
      "html": "A <b>price ceiling</b> occurs when the government sets a <b>legal maximum limit</b> on the price of a good or service — the highest price a producer, group of producers or an industry may charge. The aim is to keep prices <b>below the market equilibrium</b> to <b>protect consumers</b>. To be effective, the ceiling must be set <b>below the free-market price</b>."
    },
    {
      "type": "figure",
      "svg": "<svg class=\"fig\" viewBox=\"0 0 560 340\" role=\"img\" aria-label=\"Price ceiling creating shortage and black market\">\n    <line class=\"axisln\" x1=\"60\" y1=\"300\" x2=\"520\" y2=\"300\"></line>\n    <line class=\"axisln\" x1=\"60\" y1=\"300\" x2=\"60\" y2=\"40\"></line>\n    <text class=\"lbl\" x=\"290\" y=\"325\" text-anchor=\"middle\">Quantity bought &amp; sold</text>\n    <text class=\"lbl\" x=\"34\" y=\"170\" text-anchor=\"middle\" transform=\"rotate(-90 34 170)\">Price</text>\n    <!-- D and S -->\n    <path class=\"curve\" stroke=\"var(--primary)\" d=\"M 110 60 L 470 260\"></path>\n    <text class=\"lbl-tag\" x=\"456\" y=\"280\" fill=\"var(--primary)\">D</text>\n    <path class=\"curve\" stroke=\"var(--accent)\" d=\"M 110 260 L 470 60\"></path>\n    <text class=\"lbl-tag\" x=\"456\" y=\"56\" fill=\"var(--accent)\">S</text>\n    <!-- equilibrium -->\n    <circle cx=\"290\" cy=\"160\" r=\"5\" fill=\"var(--success)\"></circle>\n    <text class=\"lbl\" x=\"52\" y=\"165\" text-anchor=\"end\">P₀</text>\n    <line x1=\"60\" y1=\"160\" x2=\"290\" y2=\"160\" stroke=\"var(--muted)\" stroke-dasharray=\"4 4\"></line>\n    <text class=\"lbl-sm\" x=\"282\" y=\"150\" fill=\"var(--success)\">E</text>\n    <!-- max price line -->\n    <line x1=\"60\" y1=\"205\" x2=\"470\" y2=\"205\" stroke=\"var(--danger)\" stroke-width=\"2\"></line>\n    <text class=\"lbl\" x=\"52\" y=\"210\" text-anchor=\"end\" fill=\"var(--danger)\">Pₙₐₓ</text>\n    <text class=\"lbl-sm\" x=\"384\" y=\"198\" fill=\"var(--danger)\">Maximum price</text>\n    <!-- shortage -->\n    <line x1=\"205\" y1=\"300\" x2=\"205\" y2=\"205\" stroke=\"var(--danger)\" stroke-dasharray=\"3 4\"></line>\n    <line x1=\"395\" y1=\"300\" x2=\"395\" y2=\"205\" stroke=\"var(--danger)\" stroke-dasharray=\"3 4\"></line>\n    <text class=\"lbl-sm\" x=\"205\" y=\"316\" text-anchor=\"middle\">Qₛ</text>\n    <text class=\"lbl-sm\" x=\"395\" y=\"316\" text-anchor=\"middle\">Qₜ</text>\n    <path d=\"M 210 285 L 390 285\" stroke=\"var(--danger)\" stroke-width=\"2\" marker-end=\"url(#arr)\"></path>\n    <text class=\"lbl-tag\" x=\"300\" y=\"278\" text-anchor=\"middle\" fill=\"var(--danger)\">shortage</text>\n    <!-- black market price -->\n    <circle cx=\"205\" cy=\"118\" r=\"5\" fill=\"var(--warn)\"></circle>\n    <line x1=\"60\" y1=\"118\" x2=\"205\" y2=\"118\" stroke=\"var(--warn)\" stroke-dasharray=\"4 4\"></line>\n    <text class=\"lbl\" x=\"52\" y=\"123\" text-anchor=\"end\" fill=\"var(--warn)\">Pₚₙ?</text>\n    <text class=\"lbl-sm\" x=\"215\" y=\"112\" fill=\"var(--warn)\">black-market price</text>\n  </svg>",
      "alt": "Price ceiling creating shortage and black market",
      "caption": "A maximum price Pₙₐₓ below equilibrium: supply contracts to Qₛ, demand expands to Qₜ → shortage → rationing, queues and a possible black market at a price far above equilibrium."
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
      "text": "3. Price Floors (Minimum Price)"
    },
    {
      "type": "paragraph",
      "html": "A <b>price floor</b> is a government-imposed <b>legal minimum price</b> — the lowest price at which a good or service may legally be sold. It is usually set <b>above the equilibrium price</b> to <b>protect producers</b> from prices deemed too low, ensuring they cover production costs and earn a reasonable income."
    },
    {
      "type": "figure",
      "svg": "<svg class=\"fig\" viewBox=\"0 0 560 340\" role=\"img\" aria-label=\"Price floor creating surplus\">\n    <line class=\"axisln\" x1=\"60\" y1=\"300\" x2=\"520\" y2=\"300\"></line>\n    <line class=\"axisln\" x1=\"60\" y1=\"300\" x2=\"60\" y2=\"40\"></line>\n    <text class=\"lbl\" x=\"290\" y=\"325\" text-anchor=\"middle\">Quantity bought &amp; sold</text>\n    <text class=\"lbl\" x=\"34\" y=\"170\" text-anchor=\"middle\" transform=\"rotate(-90 34 170)\">Price</text>\n    <path class=\"curve\" stroke=\"var(--primary)\" d=\"M 110 60 L 470 260\"></path>\n    <text class=\"lbl-tag\" x=\"456\" y=\"280\" fill=\"var(--primary)\">D</text>\n    <path class=\"curve\" stroke=\"var(--accent)\" d=\"M 110 260 L 470 60\"></path>\n    <text class=\"lbl-tag\" x=\"456\" y=\"56\" fill=\"var(--accent)\">S</text>\n    <circle cx=\"290\" cy=\"160\" r=\"5\" fill=\"var(--success)\"></circle>\n    <text class=\"lbl\" x=\"52\" y=\"165\" text-anchor=\"end\">P₀</text>\n    <line x1=\"60\" y1=\"160\" x2=\"290\" y2=\"160\" stroke=\"var(--muted)\" stroke-dasharray=\"4 4\"></line>\n    <!-- min price -->\n    <line x1=\"60\" y1=\"115\" x2=\"470\" y2=\"115\" stroke=\"var(--danger)\" stroke-width=\"2\"></line>\n    <text class=\"lbl\" x=\"52\" y=\"120\" text-anchor=\"end\" fill=\"var(--danger)\">Pₙₐₘ</text>\n    <text class=\"lbl-sm\" x=\"392\" y=\"108\" fill=\"var(--danger)\">Minimum price</text>\n    <!-- surplus: Qd smaller, Qs larger -->\n    <line x1=\"230\" y1=\"300\" x2=\"230\" y2=\"115\" stroke=\"var(--danger)\" stroke-dasharray=\"3 4\"></line>\n    <line x1=\"375\" y1=\"300\" x2=\"375\" y2=\"115\" stroke=\"var(--danger)\" stroke-dasharray=\"3 4\"></line>\n    <text class=\"lbl-sm\" x=\"230\" y=\"316\" text-anchor=\"middle\">Qₜ</text>\n    <text class=\"lbl-sm\" x=\"375\" y=\"316\" text-anchor=\"middle\">Qₛ</text>\n    <path d=\"M 235 285 L 370 285\" stroke=\"var(--danger)\" stroke-width=\"2\" marker-end=\"url(#arr)\"></path>\n    <text class=\"lbl-tag\" x=\"300\" y=\"278\" text-anchor=\"middle\" fill=\"var(--danger)\">surplus</text>\n  </svg>",
      "alt": "Price floor creating surplus",
      "caption": "A minimum price Pₙₐₘ above equilibrium: demand falls to Qₜ, supply rises to Qₛ → surplus. Government may buy the surplus (e.g. buffer stock) or restrict production."
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
      "text": "Consumer Surplus, Producer Surplus & Deadweight Loss"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Consumer surplus (CS):</b> the total benefit or value consumers receive <b>beyond what they pay</b> — measured by the <b>area between the demand curve and the market price</b>. If you were willing to pay $9 and the price is $5, you gain $4 of consumer surplus.",
        "<b>Producer surplus (PS):</b> the total benefit or revenue producers receive <b>beyond production cost</b> — measured by the <b>area between the supply curve and the market price</b>. A producer willing to accept $3 who receives $5 gains $2.",
        "<b>Deadweight loss (DWL):</b> the <b>total loss in surplus</b> (consumer + producer) when a policy pushes price above or below the market-clearing price — triangles <b>B + C</b> in the diagrams below. It measures the <b>inefficiency</b> of the policy."
      ]
    },
    {
      "type": "figure",
      "svg": "<svg class=\"fig\" viewBox=\"0 0 560 330\" role=\"img\" aria-label=\"Consumer and producer surplus at equilibrium\">\n    <line class=\"axisln\" x1=\"60\" y1=\"295\" x2=\"520\" y2=\"295\"></line>\n    <line class=\"axisln\" x1=\"60\" y1=\"295\" x2=\"60\" y2=\"40\"></line>\n    <text class=\"lbl\" x=\"290\" y=\"320\" text-anchor=\"middle\">Quantity</text>\n    <text class=\"lbl\" x=\"34\" y=\"168\" text-anchor=\"middle\" transform=\"rotate(-90 34 168)\">Price</text>\n    <!-- D from (60,55) to (450,260); S from (60,260) to (450,55); E at (255,158) -->\n    <path class=\"curve\" stroke=\"var(--primary)\" d=\"M 60 55 L 450 260\"></path>\n    <path class=\"curve\" stroke=\"var(--accent)\" d=\"M 60 260 L 450 55\"></path>\n    <!-- CS triangle: (60,55)-(255,158)-(60,158) -->\n    <polygon points=\"60,55 255,158 60,158\" fill=\"var(--primary)\" opacity=\".22\"></polygon>\n    <!-- PS triangle: (60,260)-(255,158)-(60,158) -->\n    <polygon points=\"60,260 255,158 60,158\" fill=\"var(--accent)\" opacity=\".25\"></polygon>\n    <line x1=\"60\" y1=\"158\" x2=\"255\" y2=\"158\" stroke=\"var(--muted)\" stroke-dasharray=\"4 4\"></line>\n    <line x1=\"255\" y1=\"158\" x2=\"255\" y2=\"295\" stroke=\"var(--muted)\" stroke-dasharray=\"4 4\"></line>\n    <circle cx=\"255\" cy=\"158\" r=\"5\" fill=\"var(--success)\"></circle>\n    <text class=\"lbl\" x=\"52\" y=\"163\" text-anchor=\"end\">P₀</text>\n    <text class=\"lbl\" x=\"255\" y=\"312\" text-anchor=\"middle\">Q₀</text>\n    <text class=\"lbl-tag\" x=\"100\" y=\"105\" fill=\"var(--primary)\">CS</text>\n    <text class=\"lbl-tag\" x=\"100\" y=\"225\" fill=\"var(--accent)\">PS</text>\n    <text class=\"lbl-tag\" x=\"270\" y=\"150\" fill=\"var(--success)\">E</text>\n    <text class=\"lbl-sm\" x=\"52\" y=\"52\" text-anchor=\"end\">Pₛₙₚₔ</text>\n    <text class=\"lbl-sm\" x=\"52\" y=\"265\" text-anchor=\"end\">Pₛₓ</text>\n  </svg>",
      "alt": "Consumer and producer surplus at equilibrium",
      "caption": "At competitive equilibrium: CS (above price, below demand) + PS (below price, above supply) = total surplus, which is maximised."
    },
    {
      "type": "paragraph",
      "html": "CS = ½ × Q₀ × (P<sub>intercept</sub> − P₀) &nbsp;&nbsp;·&nbsp;&nbsp; PS = ½ × Q₀ × (P₀ − P<sub>s-intercept</sub>)<small>P<sub>intercept</sub> = price where Q<sub>d</sub> = 0 (choke price); P<sub>s-intercept</sub> = price where Q<sub>s</sub> = 0</small>"
    },
    {
      "type": "figure",
      "svg": "<svg class=\"fig\" viewBox=\"0 0 560 330\" role=\"img\" aria-label=\"Deadweight loss from a maximum price\">\n    <line class=\"axisln\" x1=\"60\" y1=\"295\" x2=\"520\" y2=\"295\"></line>\n    <line class=\"axisln\" x1=\"60\" y1=\"295\" x2=\"60\" y2=\"40\"></line>\n    <text class=\"lbl\" x=\"290\" y=\"320\" text-anchor=\"middle\">Quantity</text>\n    <text class=\"lbl\" x=\"34\" y=\"168\" text-anchor=\"middle\" transform=\"rotate(-90 34 168)\">Price</text>\n    <path class=\"curve\" stroke=\"var(--primary)\" d=\"M 60 55 L 450 260\"></path>\n    <path class=\"curve\" stroke=\"var(--accent)\" d=\"M 60 260 L 450 55\"></path>\n    <!-- max price line at y=200; Q1 (x=150) Q2 (x=330); E at (255,158) -->\n    <line x1=\"60\" y1=\"200\" x2=\"450\" y2=\"200\" stroke=\"var(--danger)\" stroke-width=\"2\"></line>\n    <text class=\"lbl\" x=\"52\" y=\"205\" text-anchor=\"end\" fill=\"var(--danger)\">Pₙₐₓ</text>\n    <line x1=\"150\" y1=\"295\" x2=\"150\" y2=\"200\" stroke=\"var(--muted)\" stroke-dasharray=\"3 4\"></line>\n    <line x1=\"255\" y1=\"295\" x2=\"255\" y2=\"158\" stroke=\"var(--muted)\" stroke-dasharray=\"3 4\"></line>\n    <line x1=\"60\" y1=\"158\" x2=\"255\" y2=\"158\" stroke=\"var(--muted)\" stroke-dasharray=\"3 4\"></line>\n    <!-- DWL triangle: (150,200)-(255,158)-(150,158) approx B; and (150,200)-(255,158)-(150,... ) C -->\n    <polygon points=\"150,200 255,158 150,158\" fill=\"var(--danger)\" opacity=\".30\"></polygon>\n    <polygon points=\"150,200 255,158 150,215\" fill=\"var(--danger)\" opacity=\".18\"></polygon>\n    <text class=\"lbl-tag\" x=\"168\" y=\"180\" fill=\"var(--danger)\">B</text>\n    <text class=\"lbl-tag\" x=\"168\" y=\"205\" fill=\"var(--danger)\">C</text>\n    <text class=\"lbl-sm\" x=\"150\" y=\"312\" text-anchor=\"middle\">Q₁</text>\n    <text class=\"lbl-sm\" x=\"255\" y=\"312\" text-anchor=\"middle\">Q₀</text>\n    <circle cx=\"255\" cy=\"158\" r=\"5\" fill=\"var(--success)\"></circle>\n    <text class=\"lbl-sm\" x=\"262\" y=\"150\" fill=\"var(--success)\">E</text>\n    <text class=\"lbl-tag\" x=\"330\" y=\"80\" fill=\"var(--primary)\">D</text>\n    <text class=\"lbl-tag\" x=\"330\" y=\"285\" fill=\"var(--accent)\">S</text>\n  </svg>",
      "alt": "Deadweight loss from a maximum price",
      "caption": "Maximum price below equilibrium: quantity traded falls to Q₁; triangles B + C are the deadweight loss to society. Consumers who still buy gain area A (lower price); consumers who cannot buy lose B; producers lose A + C."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "4-taxation-indirect-goods-tax",
      "text": "4. Taxation (Indirect / Goods Tax)"
    },
    {
      "type": "paragraph",
      "html": "Government uses <b>taxes and subsidies as financial tools</b> to influence production and prices. A <b>tax</b> is a charge imposed on incomes, profits, or goods and services to fund government expenditure (e.g. stamp duty, income tax, GST, service tax). A per-unit tax on producers shifts the supply curve <b>upward (left)</b> by the amount of the tax."
    },
    {
      "type": "figure",
      "svg": "<svg class=\"fig\" viewBox=\"0 0 560 330\" role=\"img\" aria-label=\"Welfare effects of a per-unit tax\">\n    <line class=\"axisln\" x1=\"60\" y1=\"295\" x2=\"520\" y2=\"295\"></line>\n    <line class=\"axisln\" x1=\"60\" y1=\"295\" x2=\"60\" y2=\"40\"></line>\n    <text class=\"lbl\" x=\"290\" y=\"320\" text-anchor=\"middle\">Quantity</text>\n    <text class=\"lbl\" x=\"34\" y=\"168\" text-anchor=\"middle\" transform=\"rotate(-90 34 168)\">Price</text>\n    <!-- D and S: E=(270,150). S from (60,265) to (450,50). St = S shifted up by tax (75px): from (60,190) to (375,50)?? -->\n    <path class=\"curve\" stroke=\"var(--primary)\" d=\"M 60 50 L 450 255\"></path>\n    <path class=\"curve\" stroke=\"var(--accent)\" d=\"M 60 265 L 450 50\"></path>\n    <!-- new supply after tax: parallel shift up -->\n    <path class=\"curve\" stroke=\"var(--danger)\" stroke-dasharray=\"7 5\" d=\"M 60 190 L 373 50\"></path>\n    <!-- intersections: E at (270,150); new eq at Qt (x=232): Pc on St (y~110), Pp on S -->\n    <circle cx=\"270\" cy=\"150\" r=\"5\" fill=\"var(--success)\"></circle>\n    <line x1=\"60\" y1=\"150\" x2=\"270\" y2=\"150\" stroke=\"var(--muted)\" stroke-dasharray=\"4 4\"></line>\n    <text class=\"lbl\" x=\"52\" y=\"155\" text-anchor=\"end\">P₀</text>\n    <text class=\"lbl-sm\" x=\"270\" y=\"312\" text-anchor=\"middle\">Q₀</text>\n    <!-- new equilibrium: x=232 -->\n    <circle cx=\"232\" cy=\"118\" r=\"5\" fill=\"var(--danger)\"></circle>\n    <line x1=\"60\" y1=\"118\" x2=\"232\" y2=\"118\" stroke=\"var(--danger)\" stroke-dasharray=\"3 4\"></line>\n    <text class=\"lbl\" x=\"52\" y=\"123\" text-anchor=\"end\" fill=\"var(--danger)\">Pₜ</text>\n    <line x1=\"232\" y1=\"295\" x2=\"232\" y2=\"118\" stroke=\"var(--muted)\" stroke-dasharray=\"3 4\"></line>\n    <text class=\"lbl-sm\" x=\"232\" y=\"312\" text-anchor=\"middle\">Qₜ</text>\n    <!-- producer price on S at x=232: y=193 -->\n    <circle cx=\"232\" cy=\"193\" r=\"5\" fill=\"var(--accent)\"></circle>\n    <line x1=\"60\" y1=\"193\" x2=\"232\" y2=\"193\" stroke=\"var(--accent)\" stroke-dasharray=\"3 4\"></line>\n    <text class=\"lbl\" x=\"52\" y=\"198\" text-anchor=\"end\" fill=\"var(--accent)\">Pₛ</text>\n    <!-- tax wedge bracket -->\n    <path d=\"M 205 118 L 205 193\" stroke=\"var(--muted)\" stroke-width=\"1.2\"></path>\n    <text class=\"lbl-tag\" x=\"185\" y=\"160\" fill=\"var(--text)\">tax</text>\n    <!-- DWL triangle -->\n    <polygon points=\"232,118 270,150 232,193\" fill=\"var(--danger)\" opacity=\".25\"></polygon>\n    <text class=\"lbl-tag\" x=\"240\" y=\"160\" fill=\"var(--danger)\">DWL</text>\n    <text class=\"lbl-tag\" x=\"438\" y=\"270\" fill=\"var(--primary)\">D</text>\n    <text class=\"lbl-tag\" x=\"438\" y=\"48\" fill=\"var(--accent)\">S</text>\n    <text class=\"lbl-tag\" x=\"352\" y=\"42\" fill=\"var(--danger)\">Sₜₐₓ</text>\n  </svg>",
      "alt": "Welfare effects of a per-unit tax",
      "caption": "A per-unit tax shifts supply up to Sₜₐₓ. Consumers pay Pₜ (more), producers keep Pₛ (less). The rectangle between them × Qₜ is government revenue; the triangle between Q₀ and Qₜ is the deadweight loss."
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Tax — step recipe",
      "html": "<ol>\n    <li>Find the original equilibrium (Q<sub>d</sub> = Q<sub>s</sub>) → P₀, Q₀.</li>\n    <li>Write the new supply: producers now receive (P − tax), so <b>Q₁ₛ = Q₁(P − t)</b> — supply shifts left/up.</li>\n    <li>Solve Q<sub>d</sub> = Q₁ₛ → new consumer price Pₜ and quantity Qₜ; producer price = Pₜ − t.</li>\n    <li>Tax revenue = t × Qₜ. &nbsp;DWL = ½ × (Q₀ − Qₜ) × t.</li>\n  </ol>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "5-subsidies",
      "text": "5. Subsidies"
    },
    {
      "type": "paragraph",
      "html": "A <b>subsidy</b> is a direct payment or grant by the government to producers, making the price paid by consumers lower than it would otherwise be. Subsidised goods often benefit the community and might not be provided under the free market (e.g. certain foods, public transport, free school meals). A per-unit subsidy shifts supply <b>downward (right)</b>."
    },
    {
      "type": "figure",
      "svg": "<svg class=\"fig\" viewBox=\"0 0 560 330\" role=\"img\" aria-label=\"Welfare effects of a per-unit subsidy\">\n    <line class=\"axisln\" x1=\"60\" y1=\"295\" x2=\"520\" y2=\"295\"></line>\n    <line class=\"axisln\" x1=\"60\" y1=\"295\" x2=\"60\" y2=\"40\"></line>\n    <text class=\"lbl\" x=\"290\" y=\"320\" text-anchor=\"middle\">Quantity</text>\n    <text class=\"lbl\" x=\"34\" y=\"168\" text-anchor=\"middle\" transform=\"rotate(-90 34 168)\">Price</text>\n    <path class=\"curve\" stroke=\"var(--primary)\" d=\"M 60 50 L 450 255\"></path>\n    <path class=\"curve\" stroke=\"var(--accent)\" d=\"M 60 265 L 450 50\"></path>\n    <!-- subsidised supply: S shifted down/right -->\n    <path class=\"curve\" stroke=\"var(--success)\" stroke-dasharray=\"7 5\" d=\"M 188 265 L 450 92\"></path>\n    <!-- original E at (270,150) -->\n    <circle cx=\"270\" cy=\"150\" r=\"5\" fill=\"var(--success)\"></circle>\n    <line x1=\"60\" y1=\"150\" x2=\"270\" y2=\"150\" stroke=\"var(--muted)\" stroke-dasharray=\"4 4\"></line>\n    <text class=\"lbl\" x=\"52\" y=\"155\" text-anchor=\"end\">P₀</text>\n    <text class=\"lbl-sm\" x=\"270\" y=\"312\" text-anchor=\"middle\">Q₀</text>\n    <!-- new eq: x=305, Pc ~ y=126; producer price on S at x=305 ~ y=196 -->\n    <circle cx=\"305\" cy=\"126\" r=\"5\" fill=\"var(--primary)\"></circle>\n    <line x1=\"60\" y1=\"126\" x2=\"305\" y2=\"126\" stroke=\"var(--primary)\" stroke-dasharray=\"3 4\"></line>\n    <text class=\"lbl\" x=\"52\" y=\"131\" text-anchor=\"end\" fill=\"var(--primary)\">Pₜ</text>\n    <line x1=\"305\" y1=\"295\" x2=\"305\" y2=\"126\" stroke=\"var(--muted)\" stroke-dasharray=\"3 4\"></line>\n    <text class=\"lbl-sm\" x=\"305\" y=\"312\" text-anchor=\"middle\">Qₜ</text>\n    <circle cx=\"305\" cy=\"196\" r=\"5\" fill=\"var(--accent)\"></circle>\n    <line x1=\"60\" y1=\"196\" x2=\"305\" y2=\"196\" stroke=\"var(--accent)\" stroke-dasharray=\"3 4\"></line>\n    <text class=\"lbl\" x=\"52\" y=\"201\" text-anchor=\"end\" fill=\"var(--accent)\">Pₛ</text>\n    <!-- subsidy bracket -->\n    <path d=\"M 340 126 L 340 196\" stroke=\"var(--muted)\" stroke-width=\"1.2\"></path>\n    <text class=\"lbl-tag\" x=\"346\" y=\"165\" fill=\"var(--text)\">subsidy</text>\n    <!-- DWL -->\n    <polygon points=\"270,150 305,126 305,196\" fill=\"var(--danger)\" opacity=\".25\"></polygon>\n    <text class=\"lbl-tag\" x=\"278\" y=\"182\" fill=\"var(--danger)\">DWL</text>\n    <text class=\"lbl-tag\" x=\"438\" y=\"270\" fill=\"var(--primary)\">D</text>\n    <text class=\"lbl-tag\" x=\"438\" y=\"48\" fill=\"var(--accent)\">S</text>\n    <text class=\"lbl-tag\" x=\"424\" y=\"88\" fill=\"var(--success)\">Sₛₚₛ</text>\n  </svg>",
      "alt": "Welfare effects of a per-unit subsidy",
      "caption": "A subsidy shifts supply right to Sₛₚₛ. Consumers pay a lower price Pₜ, producers receive a higher price Pₛ; the government pays the rectangle (subsidy × Qₜ) — larger than the combined gain in surplus, leaving a deadweight loss triangle."
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Subsidy — step recipe",
      "html": "<ol>\n    <li>Find original equilibrium P₀, Q₀.</li>\n    <li>New supply: producers effectively receive (P + s): <b>Q₁ₛ = Q₁(P + s)</b> — supply shifts right/down.</li>\n    <li>Solve for new consumer price Pₜ and quantity Qₜ; producer price = Pₜ + s.</li>\n    <li>Government cost = s × Qₜ. &nbsp;DWL = ½ × (Qₜ − Q₀) × s.</li>\n  </ol>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "6-direct-provision-and-7-regulation",
      "text": "6. Direct Provision & 7. Regulation"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"grid2\">\n    <div class=\"card\"><h4>Government / direct provision</h4><p>Government takes over production of goods or services, in part or whole, supplying them <b>directly — often free of charge</b>. State-owned industries: electricity, water, railways. Also applies to mixed public-private sectors: education, hospitals.</p></div>\n    <div class=\"card\"><h4>Regulation</h4><p>Various means by which government controls production and consumption: <b>rules and laws</b> applied to firms — controlling price, quality and quantity of goods produced or consumed. Ex: a doctor’s prescription required to buy controlled drugs.</p></div>\n  </div>",
      "alt": "Diagram from the original notes"
    },
    {
      "type": "example",
      "title": "Lesson 04 questions — Worked examples",
      "bodyHtml": "<p><b>Q1 (Maximum price).</b> Q<sub>d</sub> = 100 − 5P, Q<sub>s</sub> = 5P. The government sets a maximum price of Rs. 8. Analyse the market.</p>\n    \n    \n\n    <p style=\"margin-top:12px\"><b>Q2 (Minimum price).</b> Same market (Q<sub>d</sub> = 100 − 5P, Q<sub>s</sub> = 5P), but a minimum price of Rs. 12 is set. Analyse.</p>\n    \n    \n\n    <p style=\"margin-top:12px\"><b>Q3 (Tax).</b> Q<sub>d</sub> = 200 − 10P, Q<sub>s</sub> = −100 + 20P. A tax of Rs. 3 per unit is imposed. Find the new equilibrium, the tax burden and the welfare effects.</p>\n    \n    \n\n    <p style=\"margin-top:12px\"><b>Q4 (Subsidy).</b> Q<sub>d</sub> = 100 − 5P, Q<sub>s</sub> = −20 + 5P. A subsidy of Rs. 4 per unit is given. Analyse.</p>",
      "solutionHtml": "<p><b>Equilibrium first:</b> 100 − 5P = 5P → P = 10, Q = 50.</p>\n      <p><b>At Pₙₐₓ = 8</b> (below equilibrium, so it binds):</p>\n      <ul>\n        <li>Q<sub>d</sub> = 100 − 40 = <b>60</b>; Q<sub>s</sub> = 40 = <b>40</b></li>\n        <li><b>Shortage (excess demand) = 60 − 40 = 20 units</b></li>\n        <li>Only 40 units are actually traded (supply side limits the trade)</li>\n      </ul>\n      <p>Diagram: demand from (20, 0) to (0, 100); supply from origin; equilibrium at (50, 10); horizontal line at P = 8 with Qₛ = 40, Qₜ = 60 and the shortage marked between them.</p>"
    },
    {
      "type": "example",
      "title": "Lesson 04 exercises — Worked examples",
      "bodyHtml": "<p><b>E1 (Maximum price).</b> Q<sub>d</sub> = 100 − 5P, Q<sub>s</sub> = −20 + 5P, maximum price Rs. 10.</p>\n    \n    \n    <p style=\"margin-top:12px\"><b>E2 (Minimum price).</b> Q<sub>d</sub> = 9000 − 10P, Q<sub>s</sub> = −1000 + 10P, minimum price Rs. 700.</p>\n    \n    \n    <p style=\"margin-top:12px\"><b>E3 (Tax).</b> Q<sub>d</sub> = 150 − 10P, Q<sub>s</sub> = −90 + 10P, tax Rs. 2.</p>\n    \n    \n    <p style=\"margin-top:12px\"><b>E4 (Subsidy).</b> Q<sub>d</sub> = 70 − 2P, Q<sub>s</sub> = −10 + 2P, subsidy Rs. 2.5.</p>",
      "solutionHtml": "<p>Equilibrium: 100 − 5P = −20 + 5P → P = 12, Q = 40. At the ceiling <b>P = 10</b> (below 12, so it binds): Q<sub>d</sub> = 50, Q<sub>s</sub> = 30 → <b>shortage of 20 units</b>; only 30 units trade; rationing/queues/black market possible.</p>"
    },
    {
      "type": "example",
      "title": "Tutorial 04 · Part I — Price controls & surplus — full solutions",
      "bodyHtml": "<p><b>Q1.</b> Vegetable market: <b>Q<sub>d</sub> = 720 − 4P, Q<sub>s</sub> = −120 + 2P</b>. (i) Equilibrium price &amp; quantity; (ii) draw the diagram; (iii) consumer &amp; producer surplus at equilibrium; (iv) total surplus.</p>\n    \n    \n    \n\n    <p style=\"margin-top:14px\"><b>Q2.</b> Rice market: <b>Q<sub>d</sub> = 1320 − 6P, Q<sub>s</sub> = −680 + 4P</b>. (i) Equilibrium; (ii) diagram; (iii) CS &amp; PS; (iv) total surplus; (v) the government sets a <b>maximum price of Rs. 180</b>: (a) excess demand or supply, and how much? (b) CS &amp; PS after the maximum price; (c) the black-market price; (d) CS at the black-market price; (e) deadweight loss.</p>\n    \n    \n    \n\n    <p style=\"margin-top:14px\"><b>Q3.</b> Dairy market: <b>Q<sub>d</sub> = 180 − 2P, Q<sub>s</sub> = −15 + P</b>. (i) Equilibrium; (ii) diagram; (iii) CS &amp; PS; (iv) total surplus; (v) a <b>minimum price of Rs. 72</b>: (a) excess supply? (b) CS &amp; PS after; (c) DWL; (vi) if government buys the excess: (a) government expenditure; (b) producer surplus; (c) DWL.</p>",
      "solutionHtml": "<p><b>(i)</b> 720 − 4P = −120 + 2P → 840 = 6P → <b>P₀ = 140, Q₀ = 160</b> (720 − 560).</p>\n      <p><b>(ii)</b> Demand: P-intercept 180 (where Q=0), Q-intercept 720. Supply: P-intercept 60. Draw D downward, S upward crossing at (160, 140).</p>\n      <p><b>(iii)</b> CS = ½ × 160 × (180 − 140) = ½ × 160 × 40 = <b>32,000</b><br>\n      PS = ½ × 160 × (140 − 60) = ½ × 160 × 80 = <b>64,000</b></p>\n      <p><b>(iv)</b> Total surplus = 32,000 + 64,000 = <b>96,000</b></p>"
    },
    {
      "type": "example",
      "title": "Tutorial 04 · Part II — Tax & subsidy — full solutions",
      "bodyHtml": "<p><b>Q1.</b> Sugar market: <b>Q<sub>d</sub> = 260 − 3P, Q<sub>s</sub> = −140 + 2P</b>. (i) Equilibrium price &amp; quantity; (ii) diagram; (iii) CS &amp; PS at equilibrium; (iv) total surplus; (v) a <b>goods tax of Rs. 5 per unit</b>: (a) derive the new supply equation; (b) new equilibrium price &amp; quantity; (c) CS after tax; (d) PS after tax; (e) amount of tax; (f) deadweight loss.</p>\n    \n    \n    \n\n    <p style=\"margin-top:14px\"><b>Q2.</b> Milk powder market: <b>Q<sub>d</sub> = 400 − 2P, Q<sub>s</sub> = −240 + 3P</b>. (i) Equilibrium; (ii) CS &amp; PS; (iii) a <b>subsidy of Rs. 20 per unit</b>: (a) new supply equation; (b) new equilibrium; (c) CS &amp; PS after subsidy; (d) cost to government; (e) deadweight loss.</p>",
      "solutionHtml": "<p><b>(i)</b> 260 − 3P = −140 + 2P → 400 = 5P → <b>P₀ = 80, Q₀ = 20</b></p>\n      <p><b>(ii)</b> Demand P-intercept 260/3 ≈ 86.67; supply P-intercept 70; cross at (20, 80).</p>\n      <p><b>(iii)</b> CS = ½ × 20 × (86.67 − 80) = <b>66.67</b>; PS = ½ × 20 × (80 − 70) = <b>100</b></p>\n      <p><b>(iv)</b> Total surplus = <b>166.67</b></p>\n      <p><b>(v) Tax t = 5:</b></p>\n      <ul>\n        <li>(a) New supply: producers keep (P − 5): <b>Q₁ₛ = −140 + 2(P − 5) = −150 + 2P</b></li>\n        <li>(b) 260 − 3P = −150 + 2P → 410 = 5P → <b>Pₜ = 82, Qₜ = 14</b>; producers keep Pₛ = 77.</li>\n        <li>(c) CS = ½ × 14 × (86.67 − 82) = <b>32.67</b></li>\n        <li>(d) PS = ½ × 14 × (77 − 70) = <b>49</b></li>\n        <li>(e) Tax revenue = 5 × 14 = <b>70</b></li>\n        <li>(f) DWL = ½ × (20 − 14) × 5 = <b>15</b></li>\n      </ul>\n      <p>Check: original total surplus 166.67 = new CS + new PS + revenue + DWL = 32.67 + 49 + 70 + 15 = 166.67 ✓</p>"
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
