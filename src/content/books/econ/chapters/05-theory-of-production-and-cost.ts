import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "05-theory-of-production-and-cost",
    "number": 5,
    "title": "Theory of production & cost",
    "subtitle": "Lesson 05 · Tutorial 05 · Chathuranga Adhikari",
    "kind": "topic",
    "words": 1617,
    "minutes": 8
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "the-firm-and-production",
      "text": "The firm and production"
    },
    {
      "type": "paragraph",
      "html": "A <b>business firm</b> is an organization, owned and operated by private individuals, that specialises in production. <b>Production</b> is the process of combining <b>inputs to make outputs</b>; the firm buys inputs from households or other firms and sells its output to consumers."
    },
    {
      "type": "paragraph",
      "html": "Profit of the firm = Sales revenue − Input costs<small>The firm must also deal with government: pays taxes, obeys laws &amp; regulations, and receives public capital, legal and financial systems in return.</small>"
    },
    {
      "type": "paragraph",
      "html": "Inputs include labour, capital, land, raw materials, and other goods and services provided by other firms. Production does not necessarily involve physical conversion, lawyers, doctors and social workers convert intangible inputs into intangible outputs. The way inputs may be combined to produce output is the firm’s <b>technology</b>, and the <b>production function</b> tells us the <b>maximum quantity of output</b> obtainable from each combination of inputs over a period."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "short-run-vs-long-run",
      "text": "Short run vs long run"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"grid2\">\n    <div class=\"card\"><h4>Short run</h4><p>A period in which the supply of certain inputs (plant, buildings, machines) is <b>fixed or inelastic</b>. Output can be increased only by increasing the <b>variable input</b> (typically labour). <b>Fixed inputs</b> remain constant regardless of output; <b>variable inputs</b> change with output. <b>Total product</b> = maximum output from a given combination of inputs.</p></div>\n    <div class=\"card\"><h4>Long run</h4><p>A period in which the supply of <b>all inputs is elastic</b>, even “fixed” factors can change (but technology is given). Production can be increased by employing more of both variable and fixed inputs. In the long run there are <b>no fixed inputs and no fixed costs</b>.</p></div>\n  </div>",
      "alt": "Diagram from the original notes"
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "Exam tip",
      "html": "Short run vs long run is defined by <b>input flexibility, not calendar time</b>. To guide the firm over the next several years use the long-run lens; to decide what to do next week, use the short-run lens."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "total-marginal-and-average-product",
      "text": "Total, marginal and average product"
    },
    {
      "type": "paragraph",
      "html": "MP<sub>L</sub> = ΔQ / ΔL &nbsp;&nbsp;·&nbsp;&nbsp; AP<sub>L</sub> = Q / L<small>Marginal product of labour = rise in output when one more worker is hired (other inputs fixed). Average product = output per worker.</small>"
    },
    {
      "type": "example",
      "title": "Lesson 05: completing a production table: worked example",
      "bodyHtml": "<p>Complete the table and identify the three production zones:</p>\n    <div class=\"tbl-wrap\"><table class=\"tbl\">\n      <tbody><tr><th>L</th><th>Q (TP)</th><th>MP</th><th>AP</th></tr>\n      <tr><td>1</td><td>80</td><td class=\"hl\">80</td><td class=\"hl\">80</td></tr>\n      <tr><td>2</td><td>170</td><td class=\"hl\">90</td><td class=\"hl\">85</td></tr>\n      <tr><td>3</td><td>270</td><td class=\"hl\">100</td><td class=\"hl\">90</td></tr>\n      <tr><td>4</td><td>368</td><td class=\"hl\">98</td><td class=\"hl\">92</td></tr>\n      <tr><td>5</td><td>430</td><td class=\"hl\">62</td><td class=\"hl\">86</td></tr>\n      <tr><td>6</td><td>480</td><td class=\"hl\">50</td><td class=\"hl\">80</td></tr>\n      <tr><td>7</td><td>504</td><td class=\"hl\">24</td><td class=\"hl\">72</td></tr>\n      <tr><td>8</td><td>504</td><td class=\"hl\">0</td><td class=\"hl\">63</td></tr>\n      <tr><td>9</td><td>495</td><td class=\"hl\">−9</td><td class=\"hl\">55</td></tr>\n      <tr><td>10</td><td>470</td><td class=\"hl\">−25</td><td class=\"hl\">47</td></tr>\n    </tbody></table></div>",
      "solutionHtml": "<p>MP = change in TP (e.g. 170−80 = 90); AP = TP/L (e.g. 170/2 = 85).</p>\n      <ol>\n        <li><b>Increasing marginal returns zone (L = 1→3):</b> MP rises (80→90→100): each extra worker adds more than the last (specialisation, teamwork).</li>\n        <li><b>Diminishing marginal returns zone (L = 4→8):</b> MP falls but is positive (98, 62, 50, 24, 0), fixed factor gets crowded. TP still rises, peaks at 504 when MP = 0.</li>\n        <li><b>Negative marginal returns zone (L = 9→10):</b> MP &lt; 0 (−9, −25): extra workers actually reduce total output (congestion).</li>\n      </ol>\n      <p><b>Law of diminishing (marginal) returns:</b> as we continue to add more of any one input, holding other inputs constant, its marginal product will <b>eventually decline</b>. Note: when MP &gt; AP, AP rises; when MP &lt; AP, AP falls; MP crosses AP at AP’s maximum (here around L = 4, AP = 92).</p>"
    },
    {
      "type": "figure",
      "svg": "<svg class=\"fig\" viewBox=\"0 0 640 340\" role=\"img\" aria-label=\"Total product curve and MP AP curves with three zones\">\n    <!-- left: TP -->\n    <line class=\"axisln\" x1=\"60\" y1=\"300\" x2=\"300\" y2=\"300\"></line>\n    <line class=\"axisln\" x1=\"60\" y1=\"300\" x2=\"60\" y2=\"40\"></line>\n    <text class=\"lbl\" x=\"180\" y=\"325\" text-anchor=\"middle\">Labour (L)</text>\n    <text class=\"lbl\" x=\"36\" y=\"170\" text-anchor=\"middle\" transform=\"rotate(-90 36 170)\">TP</text>\n    <path class=\"curve\" stroke=\"var(--primary)\" d=\"M 75 290 C 110 250, 150 190, 195 130 C 225 92, 250 72, 275 66 C 288 63, 292 66, 295 74\"></path>\n    <circle cx=\"275\" cy=\"66\" r=\"4\" fill=\"var(--primary)\"></circle>\n    <text class=\"lbl-sm\" x=\"252\" y=\"52\">TP max (MP = 0)</text>\n    <text class=\"lbl-tag\" x=\"150\" y=\"140\" fill=\"var(--primary)\">TP</text>\n    <!-- right: MP/AP -->\n    <line class=\"axisln\" x1=\"380\" y1=\"300\" x2=\"620\" y2=\"300\"></line>\n    <line class=\"axisln\" x1=\"380\" y1=\"180\" x2=\"620\" y2=\"180\"></line>\n    <text class=\"lbl\" x=\"500\" y=\"325\" text-anchor=\"middle\">Labour (L)</text>\n    <text class=\"lbl\" x=\"356\" y=\"245\" text-anchor=\"middle\" transform=\"rotate(-90 356 245)\">MP, AP</text>\n    <!-- MP: rises then falls below zero -->\n    <path class=\"curve\" stroke=\"var(--accent)\" d=\"M 395 120 C 430 84, 450 74, 470 76 C 510 90, 540 130, 560 180 C 572 210, 580 240, 585 258\"></path>\n    <text class=\"lbl-tag\" x=\"586\" y=\"250\" fill=\"var(--accent)\">MP</text>\n    <!-- AP: rises gently, peaks, falls -->\n    <path class=\"curve\" stroke=\"var(--primary)\" d=\"M 395 150 C 450 128, 490 118, 515 122 C 550 132, 575 160, 590 195\"></path>\n    <text class=\"lbl-tag\" x=\"592\" y=\"190\" fill=\"var(--primary)\">AP</text>\n    <circle cx=\"470\" cy=\"76\" r=\"4\" fill=\"var(--accent)\"></circle>\n    <text class=\"lbl-sm\" x=\"432\" y=\"62\">MP peak</text>\n    <circle cx=\"515\" cy=\"122\" r=\"4\" fill=\"var(--primary)\"></circle>\n    <text class=\"lbl-sm\" x=\"490\" y=\"108\">AP max (MP = AP)</text>\n    <!-- zones shading -->\n    <rect x=\"380\" y=\"60\" width=\"112\" height=\"240\" fill=\"var(--success)\" opacity=\".07\"></rect>\n    <rect x=\"492\" y=\"60\" width=\"82\" height=\"240\" fill=\"var(--warn)\" opacity=\".08\"></rect>\n    <rect x=\"574\" y=\"60\" width=\"46\" height=\"240\" fill=\"var(--danger)\" opacity=\".08\"></rect>\n    <text class=\"lbl-sm\" x=\"436\" y=\"78\" text-anchor=\"middle\" fill=\"var(--success)\">increasing</text>\n    <text class=\"lbl-sm\" x=\"533\" y=\"78\" text-anchor=\"middle\" fill=\"var(--warn)\">diminishing</text>\n    <text class=\"lbl-sm\" x=\"597\" y=\"78\" text-anchor=\"middle\" fill=\"var(--danger)\">negative</text>\n  </svg>",
      "alt": "Total product curve and MP AP curves with three zones",
      "caption": "Left: TP rises at an increasing rate, then decreasing rate, peaks when MP = 0, falls when MP < 0. Right: the three zones of the short-run production function."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "costs-key-distinctions",
      "text": "Costs: key distinctions"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"grid2\">\n    <div class=\"card\"><h4>Sunk cost</h4><p>A cost that <b>already has been paid, or must be paid, regardless of any future action</b>. Should <b>never</b> influence rational decisions. Even a future payment can be sunk if an unavoidable commitment to pay has been made.</p></div>\n    <div class=\"card\"><h4>Explicit vs implicit costs</h4><p><b>Explicit:</b> money actually paid out for inputs. <b>Implicit:</b> costs of inputs with <b>no direct money payment</b>, e.g. the owner’s own time and invested capital.</p></div>\n    <div class=\"card\"><h4>Economic vs accounting profit</h4><p><b>Accounting profit</b> = Total revenue − explicit costs. <b>Economic profit</b> = Total revenue − ALL economic costs (explicit + implicit). The difference between the two is the <b>opportunity cost of owner-supplied resources</b>, called <b>normal profit</b>, which is a cost of production.</p></div>\n    <div class=\"card\"><h4>Why it matters</h4><p>If a firm earns <b>economic losses</b> (negative economic profit), owners could earn more elsewhere, in the long run firms leave the industry. If economic profit is exactly zero, the firm is earning normal profit and stays.</p></div>\n  </div>",
      "alt": "Diagram from the original notes"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "short-run-costs",
      "text": "Short-Run costs"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"grid2\">\n    <div class=\"card\"><h4>Fixed costs (TFC)</h4><p>Costs that <b>do not vary with output</b>, incurred even at zero production: rent, interest, depreciation, insurance, salaries. Also called <b>supplementary, capacity, period or overhead costs</b>.</p></div>\n    <div class=\"card\"><h4>Variable costs (TVC)</h4><p>Costs that <b>change with the quantity produced</b>: materials, wages, power, stores. Also called <b>prime or direct costs</b>.</p></div>\n  </div>",
      "alt": "Diagram from the original notes"
    },
    {
      "type": "paragraph",
      "html": "TC = TFC + TVC &nbsp;&nbsp;·&nbsp;&nbsp; AFC = TFC/Q &nbsp;&nbsp;·&nbsp;&nbsp; AVC = TVC/Q &nbsp;&nbsp;·&nbsp;&nbsp; ATC = TC/Q &nbsp;&nbsp;·&nbsp;&nbsp; ATC = AFC + AVC &nbsp;&nbsp;·&nbsp;&nbsp; MC = ΔTC/ΔQ<small>Dividing TC = TFC + TVC by Q gives ATC = AFC + AVC</small>"
    },
    {
      "type": "figure",
      "svg": "<svg class=\"fig\" viewBox=\"0 0 640 330\" role=\"img\" aria-label=\"Total cost curves and unit cost curves\">\n    <!-- left: TC, TFC, TVC -->\n    <line class=\"axisln\" x1=\"60\" y1=\"290\" x2=\"300\" y2=\"290\"></line>\n    <line class=\"axisln\" x1=\"60\" y1=\"290\" x2=\"60\" y2=\"40\"></line>\n    <text class=\"lbl\" x=\"180\" y=\"315\" text-anchor=\"middle\">Output (Q)</text>\n    <text class=\"lbl\" x=\"36\" y=\"165\" text-anchor=\"middle\" transform=\"rotate(-90 36 165)\">Rs (total)</text>\n    <line x1=\"60\" y1=\"230\" x2=\"290\" y2=\"230\" stroke=\"var(--muted)\" stroke-width=\"2.4\"></line>\n    <text class=\"lbl-tag\" x=\"272\" y=\"222\" fill=\"var(--muted)\">TFC</text>\n    <path class=\"curve\" stroke=\"var(--accent)\" d=\"M 60 230 C 120 222, 170 205, 210 175 C 245 148, 268 120, 285 84\"></path>\n    <text class=\"lbl-tag\" x=\"286\" y=\"76\" fill=\"var(--accent)\">TVC</text>\n    <path class=\"curve\" stroke=\"var(--primary)\" d=\"M 60 230 C 120 214, 170 195, 210 165 C 245 138, 268 108, 285 66\" stroke-dasharray=\"0\"></path>\n    <text class=\"lbl-tag\" x=\"288\" y=\"58\" fill=\"var(--primary)\">TC</text>\n    <text class=\"lbl-sm\" x=\"90\" y=\"248\">TC = TFC + TVC</text>\n    <!-- right: AFC AVC ATC MC -->\n    <line class=\"axisln\" x1=\"380\" y1=\"290\" x2=\"620\" y2=\"290\"></line>\n    <line class=\"axisln\" x1=\"380\" y1=\"290\" x2=\"380\" y2=\"40\"></line>\n    <text class=\"lbl\" x=\"500\" y=\"315\" text-anchor=\"middle\">Output (Q)</text>\n    <text class=\"lbl\" x=\"356\" y=\"165\" text-anchor=\"middle\" transform=\"rotate(-90 356 165)\">Rs per unit</text>\n    <path class=\"curve\" stroke=\"var(--muted)\" d=\"M 395 90 C 460 160, 520 220, 600 262\"></path>\n    <text class=\"lbl-tag\" x=\"590\" y=\"278\" fill=\"var(--muted)\">AFC</text>\n    <path class=\"curve\" stroke=\"var(--accent)\" d=\"M 395 205 C 440 185, 470 178, 500 180 C 540 188, 570 210, 596 240\"></path>\n    <text class=\"lbl-tag\" x=\"598\" y=\"252\" fill=\"var(--accent)\">AVC</text>\n    <path class=\"curve\" stroke=\"var(--primary)\" d=\"M 395 170 C 450 155, 490 152, 525 158 C 560 168, 585 190, 602 220\"></path>\n    <text class=\"lbl-tag\" x=\"598\" y=\"212\" fill=\"var(--primary)\">ATC</text>\n    <path class=\"curve\" stroke=\"var(--danger)\" d=\"M 395 235 C 430 190, 465 165, 505 158 C 545 168, 575 200, 598 245\"></path>\n    <text class=\"lbl-tag\" x=\"576\" y=\"146\" fill=\"var(--danger)\">MC</text>\n    <circle cx=\"500\" cy=\"180\" r=\"4\" fill=\"var(--accent)\"></circle><text class=\"lbl-sm\" x=\"508\" y=\"196\">MC = min AVC</text>\n    <circle cx=\"525\" cy=\"158\" r=\"4\" fill=\"var(--primary)\"></circle><text class=\"lbl-sm\" x=\"452\" y=\"146\">MC = min ATC</text>\n  </svg>",
      "alt": "Total cost curves and unit cost curves",
      "caption": "Left: TVC starts at the origin; TFC is constant; TC is TVC lifted by TFC. Right: AFC falls continuously; AVC, ATC and MC are U-shaped; MC crosses both AVC and ATC at their minimum points."
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Why u-shaped curves? the production link",
      "html": "<ul>\n    <li>When <b>MP rises, MC falls</b> (output grows faster than cost); when MP falls, MC rises. Since MP ordinarily rises then falls, <b>MC falls then rises; it is U-shaped</b>.</li>\n    <li>At low output MC lies below AVC and ATC, pulling them <b>down</b>; at high output MC rises above them, pulling them <b>up</b>, hence AVC and ATC are U-shaped too.</li>\n    <li><b>MC intersects the minimum points of both AVC and ATC.</b></li>\n    <li><b>AFC always declines</b> as Q grows (a fixed cost spread over more units) but never reaches zero.</li>\n  </ul>"
    },
    {
      "type": "example",
      "title": "Lesson 05: cost tables: worked example",
      "bodyHtml": "<p><b>Question 01.</b> Complete this cost table (TFC is implied by TC at Q = 0):</p>\n    <div class=\"tbl-wrap\"><table class=\"tbl\">\n      <tbody><tr><th>Q</th><th>TFC</th><th>TVC</th><th>TC</th><th>MC</th><th>AFC</th><th>AVC</th><th>ATC</th></tr>\n      <tr><td>0</td><td class=\"hl\">3000</td><td>0</td><td>3000</td><td>. </td><td>. </td><td>. </td><td>. </td></tr>\n      <tr><td>1</td><td class=\"hl\">3000</td><td>150</td><td class=\"hl\">3150</td><td class=\"hl\">150</td><td class=\"hl\">3000</td><td class=\"hl\">150</td><td class=\"hl\">3150</td></tr>\n      <tr><td>2</td><td class=\"hl\">3000</td><td class=\"hl\">300</td><td class=\"hl\">3300</td><td class=\"hl\">150</td><td class=\"hl\">1500</td><td class=\"hl\">150</td><td class=\"hl\">1650</td></tr>\n      <tr><td>3</td><td class=\"hl\">3000</td><td>540</td><td class=\"hl\">3540</td><td class=\"hl\">240</td><td class=\"hl\">1000</td><td class=\"hl\">180</td><td class=\"hl\">1180</td></tr>\n      <tr><td>4</td><td class=\"hl\">3000</td><td class=\"hl\">800</td><td class=\"hl\">3800</td><td class=\"hl\">260</td><td class=\"hl\">750</td><td>200</td><td class=\"hl\">950</td></tr>\n      <tr><td>5</td><td class=\"hl\">3000</td><td class=\"hl\">960</td><td class=\"hl\">3960</td><td class=\"hl\">160</td><td class=\"hl\">600</td><td class=\"hl\">192</td><td>792</td></tr>\n    </tbody></table></div>\n    <p><b>Question 02.</b> Complete:</p>\n    <div class=\"tbl-wrap\"><table class=\"tbl\">\n      <tbody><tr><th>Q</th><th>TVC</th><th>TFC</th><th>TC</th><th>AVC</th><th>AFC</th><th>ATC</th><th>MC</th></tr>\n      <tr><td>1</td><td class=\"hl\">410</td><td class=\"hl\">190</td><td>600</td><td class=\"hl\">410</td><td class=\"hl\">190</td><td class=\"hl\">600</td><td class=\"hl\">410</td></tr>\n      <tr><td>2</td><td>190</td><td class=\"hl\">190</td><td class=\"hl\">380</td><td class=\"hl\">95</td><td class=\"hl\">95</td><td class=\"hl\">190</td><td class=\"hl\">−220*</td></tr>\n      <tr><td>3</td><td class=\"hl\">270</td><td class=\"hl\">190</td><td class=\"hl\">460</td><td>90</td><td>63.33</td><td class=\"hl\">153.33</td><td class=\"hl\">80</td></tr>\n      <tr><td>4</td><td class=\"hl\">310</td><td>500</td><td class=\"hl\">810</td><td class=\"hl\">77.5</td><td class=\"hl\">125</td><td class=\"hl\">202.5</td><td>110</td></tr>\n      <tr><td>5</td><td class=\"hl\">450</td><td class=\"hl\">250</td><td class=\"hl\">700</td><td>90</td><td class=\"hl\">50</td><td>200</td><td class=\"hl\">−110*</td></tr>\n    </tbody></table></div>",
      "solutionHtml": "<p><b>Method:</b> TFC is constant (read from TC at Q = 0). TVC = TC − TFC; TC = TFC + TVC. MC = ΔTC between rows. AFC = TFC/Q; AVC = TVC/Q; ATC = TC/Q = AFC + AVC. Any one known cell unlocks the rest of its row/column.</p>\n      <p>In Q02 the table as printed in the slides mixes inconsistent TFC values across rows (190, 190, 190, 500, 250), clearly a typesetting issue in the original. The starred MC values (−220, −110) are what the printed TC numbers mechanically imply; in a well-posed table MC is normally positive and rising. Use the <b>relationships</b> (TC = TFC + TVC, MC = ΔTC, averages = totals/Q) to rebuild any cost table in the exam.</p>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "the-long-run-plant-size-and-economies-of-scale",
      "text": "The long run: plant size and economies of scale"
    },
    {
      "type": "paragraph",
      "html": "In the long run the firm can change the size of its <b>plant</b> (its collection of fixed inputs). The <b>LRATC</b> (long-run average total cost) is the cost per unit when all inputs are variable; it combines the lowest portions of every short-run ATC curve available. For any output the firm chooses the plant size that minimises average cost; the long-run average cost can <b>never be higher</b> than short-run ATC."
    },
    {
      "type": "figure",
      "svg": "<svg class=\"fig\" viewBox=\"0 0 620 330\" role=\"img\" aria-label=\"LRATC envelope curve with economies and diseconomies of scale\">\n    <line class=\"axisln\" x1=\"60\" y1=\"290\" x2=\"580\" y2=\"290\"></line>\n    <line class=\"axisln\" x1=\"60\" y1=\"290\" x2=\"60\" y2=\"40\"></line>\n    <text class=\"lbl\" x=\"320\" y=\"315\" text-anchor=\"middle\">Units of output</text>\n    <text class=\"lbl\" x=\"36\" y=\"165\" text-anchor=\"middle\" transform=\"rotate(-90 36 165)\">Rs per unit</text>\n    <!-- three short-run ATCs -->\n    <path class=\"curve\" stroke=\"var(--muted)\" stroke-dasharray=\"6 5\" d=\"M 90 240 C 120 180, 150 150, 185 148 C 215 152, 240 172, 262 205\"></path>\n    <text class=\"lbl-sm\" x=\"82\" y=\"256\" fill=\"var(--muted)\">ATC₁</text>\n    <path class=\"curve\" stroke=\"var(--muted)\" stroke-dasharray=\"6 5\" d=\"M 200 235 C 250 150, 300 118, 360 116 C 405 120, 440 140, 468 175\"></path>\n    <text class=\"lbl-sm\" x=\"452\" y=\"192\" fill=\"var(--muted)\">ATC₂</text>\n    <path class=\"curve\" stroke=\"var(--muted)\" stroke-dasharray=\"6 5\" d=\"M 380 210 C 440 150, 490 130, 540 132 C 560 136, 572 146, 578 158\"></path>\n    <text class=\"lbl-sm\" x=\"552\" y=\"126\" fill=\"var(--muted)\">ATC₃</text>\n    <!-- LRATC envelope -->\n    <path class=\"curve\" stroke=\"var(--primary)\" stroke-width=\"3.2\" d=\"M 100 238 C 170 170, 260 122, 360 116 C 430 122, 500 140, 570 165\"></path>\n    <text class=\"lbl-tag\" x=\"470\" y=\"106\" fill=\"var(--primary)\">LRATC</text>\n    <text class=\"lbl-sm\" x=\"150\" y=\"120\" fill=\"var(--success)\">Economies of scale (falling)</text>\n    <text class=\"lbl-sm\" x=\"330\" y=\"92\" fill=\"var(--muted)\">Constant returns</text>\n    <text class=\"lbl-sm\" x=\"470\" y=\"170\" fill=\"var(--danger)\">Diseconomies (rising)</text>\n    <circle cx=\"360\" cy=\"116\" r=\"5\" fill=\"var(--success)\"></circle>\n    <text class=\"lbl-sm\" x=\"368\" y=\"104\">minimum efficient scale</text>\n  </svg>",
      "alt": "LRATC envelope curve with economies and diseconomies of scale",
      "caption": "The LRATC envelope: small plants (ATC₁), medium (ATC₂), large (ATC₃). Costs fall with scale, flatten, then rise."
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"grid2\">\n    <div class=\"card\"><h4>Reasons for economies of scale</h4><ul>\n      <li><b>Technical economies</b>, larger machines, specialisation</li>\n      <li><b>Managerial economies</b>, specialised management</li>\n      <li><b>Risk-bearing economies</b>, diversified output/markets</li>\n      <li><b>Marketing economies</b>, bulk buying &amp; advertising spread</li>\n      <li><b>Financial economies</b>: cheaper finance for big firms</li>\n    </ul></div>\n    <div class=\"card\"><h4>Reasons for diseconomies of scale</h4><ul>\n      <li><b>Managerial diseconomies</b>, bureaucracy grows</li>\n      <li><b>Coordination and control problems</b></li>\n      <li><b>Workers’ alienation</b>, loss of motivation in huge firms</li>\n      <li><b>Communication challenges</b>, messages distort over layers</li>\n    </ul></div>\n  </div>",
      "alt": "Diagram from the original notes"
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "Scale vs returns: vocabulary check",
      "html": "<b>Economies of scale:</b> LRATC falls as output increases. <b>Constant returns:</b> LRATC flat. <b>Diseconomies:</b> LRATC rises. These are <i>long-run</i> ideas: do not confuse with <i>short-run</i> increasing/diminishing <b>marginal returns</b> to a variable input."
    },
    {
      "type": "example",
      "title": "Tutorial 05. production & cost, full solutions",
      "bodyHtml": "<p><b>Q1.</b> Paddy production data: workers 0–8 with TP = 0, 3, 10, 24, 36, 40, 42, 42, 40. (i) Complete the table (AP and MP); (ii) plot TP, MP, AP; (iii) explain the relationships.</p>\n    \n    \n    \n\n    <p style=\"margin-top:14px\"><b>Q2.</b> Garment manufacturer: L = 1…12 with TP = 24, 72, 138, 216, 300, 384, 462, 528, 576, 600, 594, 552. (i) Fill the table; (ii) identify the labour ranges of increasing, diminishing and negative marginal returns.</p>\n    \n    \n    \n\n    <p style=\"margin-top:14px\"><b>Q3.</b> Sugar production cost table with <b>TFC = Rs. 1,500</b>. TVC given: Q=0:0, 1:250, 3:500, 4:750, 9:3200, 10:3500; TC given: Q=2:1850, 5:3500, 6:3750, 7:4000, 8:4500. Complete all missing cells.</p>",
      "solutionHtml": "<div class=\"tbl-wrap\"><table class=\"tbl\">\n        <tbody><tr><th>L</th><th>TP</th><th>AP = TP/L</th><th>MP = ΔTP</th></tr>\n        <tr><td>0</td><td>0</td><td>. </td><td>. </td></tr>\n        <tr><td>1</td><td>3</td><td class=\"hl\">3</td><td class=\"hl\">3</td></tr>\n        <tr><td>2</td><td>10</td><td class=\"hl\">5</td><td class=\"hl\">7</td></tr>\n        <tr><td>3</td><td>24</td><td class=\"hl\">8</td><td class=\"hl\">14</td></tr>\n        <tr><td>4</td><td>36</td><td class=\"hl\">9</td><td class=\"hl\">12</td></tr>\n        <tr><td>5</td><td>40</td><td class=\"hl\">8</td><td class=\"hl\">4</td></tr>\n        <tr><td>6</td><td>42</td><td class=\"hl\">7</td><td class=\"hl\">2</td></tr>\n        <tr><td>7</td><td>42</td><td class=\"hl\">6</td><td class=\"hl\">0</td></tr>\n        <tr><td>8</td><td>40</td><td class=\"hl\">5</td><td class=\"hl\">−2</td></tr>\n      </tbody></table></div>\n      <p><b>(ii)</b> Plot L on the X-axis. TP: S-shaped, rising to a maximum of 42 at L = 6–7 then falling. MP: rises to 14 at L = 3, then falls, hits 0 at L = 7, turns negative at L = 8. AP: rises to a peak of 9 at L = 4 then falls.</p>\n      <p><b>(iii) Relationships:</b></p>\n      <ul>\n        <li>While MP &gt; AP, AP rises (L = 1–4); when MP &lt; AP, AP falls (L = 5+); MP crosses AP where AP is at its maximum.</li>\n        <li>TP rises whenever MP &gt; 0, is flat where MP = 0 (L = 7), and falls when MP &lt; 0 (L = 8).</li>\n        <li>Increasing returns operate while MP rises (L ≤ 3); diminishing returns from L = 4 (MP falls); negative returns from L = 8.</li>\n      </ul>"
    },
    {
      "type": "quiz",
      "title": "Topic 5 Quiz",
      "count": 8,
      "quizSlug": "05-theory-of-production-and-cost"
    }
  ]
};

export default chapter;
