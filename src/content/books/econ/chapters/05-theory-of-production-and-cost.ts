import type { ChapterData } from "@/content/types";
import {
  LRATC_CHART,
  MP_AP_CHART,
  TOTAL_COSTS_CHART,
  TOTAL_PRODUCT_CHART,
  UNIT_COSTS_CHART,
} from "../charts";

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
      "type": "econChart",
      "spec": TOTAL_PRODUCT_CHART
    },
    {
      "type": "econChart",
      "spec": MP_AP_CHART
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
      "type": "econChart",
      "spec": TOTAL_COSTS_CHART
    },
    {
      "type": "econChart",
      "spec": UNIT_COSTS_CHART
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
      "bodyHtml": "<p><b>Question 01.</b> Complete this cost table (TFC is implied by TC at Q = 0):</p>\n    <div class=\"tbl-wrap\"><table class=\"tbl\">\n      <tbody><tr><th>Q</th><th>TFC</th><th>TVC</th><th>TC</th><th>MC</th><th>AFC</th><th>AVC</th><th>ATC</th></tr>\n      <tr><td>0</td><td class=\"hl\">3000</td><td>0</td><td>3000</td><td>. </td><td>. </td><td>. </td><td>. </td></tr>\n      <tr><td>1</td><td class=\"hl\">3000</td><td>150</td><td class=\"hl\">3150</td><td class=\"hl\">150</td><td class=\"hl\">3000</td><td class=\"hl\">150</td><td class=\"hl\">3150</td></tr>\n      <tr><td>2</td><td class=\"hl\">3000</td><td class=\"hl\">300</td><td class=\"hl\">3300</td><td class=\"hl\">150</td><td class=\"hl\">1500</td><td class=\"hl\">150</td><td class=\"hl\">1650</td></tr>\n      <tr><td>3</td><td class=\"hl\">3000</td><td>540</td><td class=\"hl\">3540</td><td class=\"hl\">240</td><td class=\"hl\">1000</td><td class=\"hl\">180</td><td class=\"hl\">1180</td></tr>\n      <tr><td>4</td><td class=\"hl\">3000</td><td class=\"hl\">800</td><td class=\"hl\">3800</td><td class=\"hl\">260</td><td class=\"hl\">750</td><td>200</td><td class=\"hl\">950</td></tr>\n      <tr><td>5</td><td class=\"hl\">3000</td><td class=\"hl\">960</td><td class=\"hl\">3960</td><td class=\"hl\">160</td><td class=\"hl\">600</td><td class=\"hl\">192</td><td>792</td></tr>\n    </tbody></table></div>\n    <p><b>Question 02.</b> Complete:</p>\n    <div class=\"tbl-wrap\"><table class=\"tbl\">\n      <tbody><tr><th>Q</th><th>TVC</th><th>TFC</th><th>TC</th><th>AVC</th><th>AFC</th><th>ATC</th><th>MC</th></tr>\n      <tr><td>1</td><td class=\"hl\">410</td><td class=\"hl\">190</td><td>600</td><td class=\"hl\">410</td><td class=\"hl\">190</td><td class=\"hl\">600</td><td class=\"hl\">410</td></tr>\n      <tr><td>2</td><td>190</td><td class=\"hl\">190</td><td class=\"hl\">380</td><td class=\"hl\">95</td><td class=\"hl\">95</td><td class=\"hl\">190</td><td class=\"hl\">−220*</td></tr>\n      <tr><td>3</td><td class=\"hl\">270</td><td class=\"hl\">190</td><td class=\"hl\">460</td><td>90</td><td>63.33</td><td class=\"hl\">153.33</td><td class=\"hl\">80</td></tr>\n      <tr><td>4</td><td class=\"hl\">310</td><td>500</td><td class=\"hl\">810</td><td class=\"hl\">77.5</td><td class=\"hl\">125</td><td class=\"hl\">202.5</td><td>350</td></tr>\n      <tr><td>5</td><td class=\"hl\">450</td><td class=\"hl\">250</td><td class=\"hl\">700</td><td>90</td><td class=\"hl\">50</td><td>140</td><td class=\"hl\">−110*</td></tr>\n    </tbody></table></div>",
      "solutionHtml": "<p><b>Method:</b> TFC is constant (read from TC at Q = 0). TVC = TC − TFC; TC = TFC + TVC. MC = ΔTC between rows. AFC = TFC/Q; AVC = TVC/Q; ATC = TC/Q = AFC + AVC. Any one known cell unlocks the rest of its row/column.</p>\n      <p>In Q02 the table as printed in the slides mixes inconsistent TFC values across rows (190, 190, 190, 500, 250), clearly a typesetting issue in the original. The starred MC values (−220, −110) are what the printed TC numbers mechanically imply; in a well-posed table MC is normally positive and rising. Two cells have also been corrected here to match the table's own rows: MC at Q = 4 is ΔTC = 810 − 460 = 350 (the slide printed 110) and ATC at Q = 5 is TC/Q = 700/5 = 140 (the slide printed 200). Use the <b>relationships</b> (TC = TFC + TVC, MC = ΔTC, averages = totals/Q) to rebuild any cost table in the exam.</p>"
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
      "type": "econChart",
      "spec": LRATC_CHART
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
      "solutionHtml": "<div class=\"tbl-wrap\"><table class=\"tbl\">\n        <tbody><tr><th>L</th><th>TP</th><th>AP = TP/L</th><th>MP = ΔTP</th></tr>\n        <tr><td>0</td><td>0</td><td>. </td><td>. </td></tr>\n        <tr><td>1</td><td>3</td><td class=\"hl\">3</td><td class=\"hl\">3</td></tr>\n        <tr><td>2</td><td>10</td><td class=\"hl\">5</td><td class=\"hl\">7</td></tr>\n        <tr><td>3</td><td>24</td><td class=\"hl\">8</td><td class=\"hl\">14</td></tr>\n        <tr><td>4</td><td>36</td><td class=\"hl\">9</td><td class=\"hl\">12</td></tr>\n        <tr><td>5</td><td>40</td><td class=\"hl\">8</td><td class=\"hl\">4</td></tr>\n        <tr><td>6</td><td>42</td><td class=\"hl\">7</td><td class=\"hl\">2</td></tr>\n        <tr><td>7</td><td>42</td><td class=\"hl\">6</td><td class=\"hl\">0</td></tr>\n        <tr><td>8</td><td>40</td><td class=\"hl\">5</td><td class=\"hl\">−2</td></tr>\n      </tbody></table></div>\n      <p><b>(ii)</b> Plot L on the X-axis. TP: S-shaped, rising to a maximum of 42 at L = 6–7 then falling. MP: rises to 14 at L = 3, then falls, hits 0 at L = 7, turns negative at L = 8. AP: rises to a peak of 9 at L = 4 then falls.</p>\n      <p><b>(iii) Relationships:</b></p>\n      <ul>\n        <li>While MP &gt; AP, AP rises (L = 1–4); when MP &lt; AP, AP falls (L = 5+); MP crosses AP where AP is at its maximum.</li>\n        <li>TP rises whenever MP &gt; 0, is flat where MP = 0 (L = 7), and falls when MP &lt; 0 (L = 8).</li>\n        <li>Increasing returns operate while MP rises (L ≤ 3); diminishing returns from L = 4 (MP falls); negative returns from L = 8.</li>\n      </ul>\n      <p><b>Q2 (garment manufacturer):</b> TP = 24, 72, 138, 216, 300, 384, 462, 528, 576, 600, 594, 552 for L = 1…12.</p>\n      <ul>\n        <li>(i) MP = 24, 48, 66, 78, 84, 84, 78, 66, 48, 24, −6, −42; AP = 24, 36, 46, 54, 60, 64, 66, 66, 64, 60, 54, 46</li>\n        <li>(ii) <b>Increasing marginal returns:</b> L = 1–5 (MP rises 24 → 84, constant at 84 for L = 5–6). <b>Diminishing marginal returns:</b> from L = 7 (MP falls 78 → 24, still positive through L = 10). <b>Negative marginal returns:</b> L = 11–12 (MP = −6, −42; TP falls from its maximum of 600 at L = 10).</li>\n        <li>MP = AP exactly at L = 8 (both 66, AP's peak); while MP &gt; AP (L ≤ 7) AP rises, once MP &lt; AP (L ≥ 9) AP falls.</li>\n      </ul>\n      <p><b>Q3 (sugar costs, TFC = Rs 1,500):</b> fill TVC/TC from TC = TFC + TVC.</p>\n      <ul>\n        <li>Q = 0: TVC = 0 → TC = <b>1,500</b></li>\n        <li>Q = 1: TVC = 250 → TC = <b>1,750</b></li>\n        <li>Q = 2: TC = 1,850 → TVC = <b>350</b></li>\n        <li>Q = 3: TVC = 500 → TC = <b>2,000</b></li>\n        <li>Q = 4: TVC = 750 → TC = <b>2,250</b></li>\n        <li>Q = 5: TC = 3,500 → TVC = <b>2,000</b></li>\n        <li>Q = 6: TC = 3,750 → TVC = <b>2,250</b></li>\n        <li>Q = 7: TC = 4,000 → TVC = <b>2,500</b></li>\n        <li>Q = 8: TC = 4,500 → TVC = <b>3,000</b></li>\n        <li>Q = 9: TVC = 3,200 → TC = <b>4,700</b></li>\n        <li>Q = 10: TVC = 3,500 → TC = <b>5,000</b></li>\n      </ul>\n      <p>(Optional averages at Q = 10, for example: AVC = 350, AFC = 150, ATC = 500.)</p>"
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
