import type { ChapterData } from "@/content/types";
import {
  BUSINESS_CYCLE_CHART,
} from "../charts";

const chapter: ChapterData = {
  "meta": {
    "slug": "07-basics-of-macroeconomics",
    "number": 7,
    "title": "Basics of macroeconomics",
    "subtitle": "Lesson 07 · Chathuranga Adhikari",
    "kind": "topic",
    "words": 1500,
    "minutes": 8
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "what-is-macroeconomics",
      "text": "What is macroeconomics?"
    },
    {
      "type": "paragraph",
      "html": "<b>Macroeconomics</b> (from the Greek prefix <i>makro-</i> meaning “large”) deals with the <b>total or aggregate</b> level of output, consumption, investment, employment and the <b>general price level</b> in the economy. It is the study of the <b>behaviour of the economy as a whole</b>; the performance, structure, behaviour and decision-making of an economy as a whole rather than individual markets, including national, regional and global economies. It is also known as the <b>theory of income and employment</b>, or simply <b>income analysis</b>."
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "The three major concerns of macroeconomics",
      "html": "<b>1. Unemployment</b> · <b>2. Inflation</b> · <b>3. Output growth</b>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "1-unemployment",
      "text": "1. unemployment"
    },
    {
      "type": "paragraph",
      "html": "<b>Unemployment</b> refers to the situation where the population of a country <b>does not find work</b> to earn their livelihood; the ratio of the labour force that fails to get employment. The unemployment rate is a key indicator of the economy’s health; the existence of unemployment seems to imply that the aggregate labour market is not in equilibrium."
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>Labour force</b> = the sum of <b>employed + unemployed</b> workers. The working-age population splits into people in the labour force and people not in the labour force.",
        "<b>To be unemployed</b>, a person must <b>want to work and be actively looking for a job</b> (but not have found one)."
      ]
    },
    {
      "type": "paragraph",
      "html": "Unemployment rate = (Number of unemployed ÷ Labour force) × 100<small>Labour force = employed + unemployed (actively seeking work)</small>"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"grid2\">\n    <div class=\"card\"><h4>Why unemployment is a problem</h4><ul>\n      <li><b>Lost incomes and production</b>, output that could have been made is gone forever</li>\n      <li><b>Lost human capital</b>, prolonged unemployment permanently damages job prospects; benefits don’t fully replace wages</li>\n      <li>Consumption falls; people pay for necessities rather than luxuries (income-elastic goods suffer)</li>\n      <li>Quality of life of the unemployed worker declines</li>\n    </ul></div>\n    <div class=\"card\"><h4>Effects on the economy &amp; society</h4><ul>\n      <li><b>Reduced national output</b> and lower economic growth potential</li>\n      <li><b>Lower standard of living</b>. GDP falls, per-capita income falls, poverty rises</li>\n      <li><b>Reduced national income</b>, less income tax and company profit tax collected; national development slows</li>\n      <li><b>Government spending rises</b> on benefit payments while <b>tax revenue falls</b></li>\n      <li><b>Social costs</b>: unsafe family conditions, higher crime, stress and loss of confidence</li>\n      <li>With unemployment the economy operates <b>inside its PPF</b>, resources unused</li>\n    </ul></div>\n  </div>",
      "alt": "Diagram from the original notes"
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "Full employment",
      "html": "Full employment is the situation where the unemployment rate equals the <b>natural unemployment rate</b>; there is <b>no cyclical unemployment</b>; all unemployment is <b>frictional and structural</b>. It does NOT mean zero unemployment."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "2-inflation",
      "text": "2. inflation"
    },
    {
      "type": "paragraph",
      "html": "<b>Inflation</b> is the rise in the <b>general level of prices</b>. When the general price level rises, each unit of currency buys fewer goods and services, inflation results in a <b>loss of the value of money</b>. A popular description: “<b>too much money chasing too few goods</b>”. In the long term, inflation <b>erodes consumer purchasing power</b>, accumulated wealth buys less and less. High inflation makes business planning difficult because raw-material costs are uncertain."
    },
    {
      "type": "table",
      "head": [
        "Term",
        "Meaning"
      ],
      "rows": [
        [
          "<b>Inflation</b>",
          "An increase in the overall price level"
        ],
        [
          "<b>Creeping inflation</b>",
          "Prices rise very slowly “like a snail or creeper”, a moderate rate (around 3–5% or less) over a long period"
        ],
        [
          "<b>Hyperinflation</b>",
          "A period of <b>very rapid</b> increases in the overall price level, a rare phenomenon"
        ],
        [
          "<b>Deflation</b>",
          "A <b>decrease</b> in the overall price level (negative inflation); prolonged deflation can be just as damaging as sustained inflation"
        ]
      ]
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"grid2\">\n    <div class=\"card\"><h4>Demand-pull inflation</h4><p>Occurs when households, businesses, governments and foreign buyers collectively try to purchase <b>more output than the economy can produce</b>, excess demand <b>pulls</b> the price level up (“too much spending”).</p></div>\n    <div class=\"card\"><h4>Cost-push inflation</h4><p>Inflation attributable to <b>decreases in supply</b>, primarily due to <b>increases in production costs</b> (wages, raw materials, energy), costs <b>push</b> prices up.</p></div>\n  </div>",
      "alt": "Diagram from the original notes"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"grid2\">\n    <div class=\"card\"><h4>Causes of hyperinflation</h4><ul>\n      <li>High <b>money supply</b> growth → demand rises with constant supply → prices rise</li>\n      <li>Sudden demand surges (demand-pull episodes)</li>\n      <li><b>Loss of confidence</b>, citizens lose faith in the currency</li>\n      <li>War-like situations between countries</li>\n    </ul></div>\n    <div class=\"card\"><h4>Effects of hyperinflation</h4><ul>\n      <li>Currency value <b>depreciates</b>; people flee into gold, real estate, commodities</li>\n      <li><b>Foreign investors back out</b>; banking and financial institutions are disrupted</li>\n      <li>Shortage of basic food supplies</li>\n      <li>Exports cheaper, imports costlier; unemployment rises; government revenue falls</li>\n    </ul></div>\n  </div>",
      "alt": "Diagram from the original notes"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"grid2\">\n    <div class=\"card\"><h4>Causes of deflation</h4><ul>\n      <li>A <b>fall in aggregate demand</b> (AD shifts left)</li>\n      <li>A rightward shift of <b>aggregate supply</b>, lower production costs through improved technology</li>\n    </ul></div>\n    <div class=\"card\"><h4>Why inflation &amp; deflation are problems</h4><ul>\n      <li>They affect the <b>distribution of income and wealth</b>, wage contracts mean employees lose when inflation is unexpectedly high (wages do not rise immediately)</li>\n      <li>They can <b>lower real GDP and employment</b></li>\n    </ul></div>\n  </div>",
      "alt": "Diagram from the original notes"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "3-output-and-growth",
      "text": "3. output and growth"
    },
    {
      "type": "paragraph",
      "html": "<b>Growth</b> refers to a change in the level of economic activity from one year to another, poor and developing countries wish to attain rises in national income and per-capita income. <b>Aggregate output</b> is the total quantity of goods and services produced in an economy in a given period; the main measure of how well an economy is doing. Economists study what level of investment growth delivers the desired income and employment <b>without inflation or deflation</b>, achieving full utilisation of resources. <b>Full employment</b> maximises output with existing resources; <b>growth</b> increases output beyond them."
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"grid2\">\n    <div class=\"card\"><h4>Gross Domestic Product (GDP)</h4><p>The <b>monetary value of all finished goods and services produced within a country’s borders</b> in a specific period (usually annual). Includes all private and public consumption, government outlays, investments, and exports minus imports. One of the primary indicators used to gauge the health of an economy.</p></div>\n    <div class=\"card\"><h4>National Income</h4><p>The total value of all goods and services produced within a nation over a specified period; the sum of <b>wages, profits, rents, interest and pension payments to residents</b>. It gives a correct picture of the economy and the purchasing power of the people.</p></div>\n  </div>",
      "alt": "Diagram from the original notes"
    },
    {
      "type": "paragraph",
      "html": "Economic growth = increase in the market value / productive capacity of goods and services produced by an economy over time<small>Measured as the % change in real GDP between periods</small>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "the-goals-of-macroeconomic-policy",
      "text": "The goals of macroeconomic policy"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "Full employment",
        "Price stability",
        "Rapid economic growth",
        "Reduction of economic inequality",
        "Stable exchange rate",
        "Protect the environment",
        "High living standards"
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "key-macroeconomic-variables",
      "text": "Key macroeconomic variables"
    },
    {
      "type": "table",
      "head": [
        "#",
        "Variable",
        "What it is"
      ],
      "rows": [
        [
          "1",
          "<b>GDP</b>",
          "Monetary value of all finished goods &amp; services produced within a country’s borders in a period"
        ],
        [
          "2",
          "<b>National income</b>",
          "Total value of goods &amp; services produced by residents: wages + profits + rents + interest + pensions"
        ],
        [
          "3",
          "<b>Unemployment</b>",
          "Labour force members without work but actively seeking; the unemployment rate gauges labour-market health"
        ],
        [
          "4",
          "<b>Economic growth</b>",
          "Increase in market value of goods &amp; services produced over time"
        ],
        [
          "5",
          "<b>Inflation</b>",
          "Rise in the general price level; erodes the value of money"
        ],
        [
          "6",
          "<b>International trade</b>",
          "Exchange of goods &amp; services between countries; expands markets, increases competition, lowers prices"
        ],
        [
          "7",
          "<b>Balance of payments (BOP)</b>",
          "Record of all economic transactions between residents of a country and the rest of the world in a period (visible &amp; non-visible); a summation of current demand and supply of claims on currencies"
        ],
        [
          "8",
          "<b>Monetary policy</b>",
          "Process by which the monetary authority controls the money supply, targeting inflation/interest rates to ensure price stability and trust in the currency; also aims at growth, low unemployment and predictable exchange rates"
        ],
        [
          "9",
          "<b>Fiscal policy</b>",
          "Government adjusting <b>spending levels and tax rates</b> to monitor and influence the economy; the sister strategy to monetary policy"
        ],
        [
          "10",
          "<b>Interest rate</b>",
          "Rate paid by borrowers to lenders for the use of money; many rates exist, varying by duration and risk"
        ],
        [
          "11",
          "<b>Stock market</b>",
          "Aggregation of buyers and sellers of stocks/shares; often considered a primary indicator of economic strength; rising market = up-and-coming economy"
        ],
        [
          "12",
          "<b>Business cycle</b>",
          "Fluctuations in aggregate production, trade and activity around the long-term growth trend, expansions (booms) and contractions (recessions)"
        ],
        [
          "13",
          "<b>Exchange rate</b>",
          "Rate at which one currency exchanges for another; governs the terms of international trade and investment. <b>Nominal</b> = currency-for-currency; <b>real</b> = goods-for-goods between countries"
        ]
      ]
    },
        {
      "type": "econChart",
      "spec": BUSINESS_CYCLE_CHART
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "nature-scope-and-importance-of-macroeconomics",
      "text": "Nature, scope and importance of macroeconomics"
    },
    {
      "type": "paragraph",
      "html": "<b>Scope:</b> macroeconomics studies aggregates or averages covering the entire economy, total employment, national income, national output, total investment, total consumption, total savings, aggregate supply, aggregate demand, general price level, wage level and cost structure. It is concerned with unemployment, economic fluctuations, inflation/deflation, international trade and economic growth."
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"grid2\">\n    <div class=\"card\"><h4>Why macroeconomics matters</h4><ul>\n      <li>Helps us understand the functioning of a complicated modern economic system, how national income and employment are determined by AD and AS</li>\n      <li>Helps achieve <b>economic growth</b>, a higher GDP level and higher employment, and explains how to reach and sustain the highest state of growth</li>\n      <li>Helps bring <b>price stability</b>, analyses business fluctuations and suggests measures to control inflation and deflation</li>\n      <li>Explains the determinants of the <b>balance of payments</b>, identifies causes of deficits and suggests remedies</li>\n      <li>Solves big problems. <b>poverty, unemployment, inflation, deflation</b>, solvable only at the whole-economy level</li>\n      <li>Enables correct <b>economic policy formulation</b> and coordination of international economic policies</li>\n      <li>Has saved us from applying micro theory to problems that require an economy-wide view</li>\n    </ul></div>\n    <div class=\"card\"><h4>Monetary vs Fiscal policy (quick compare)</h4>\n      <div class=\"tbl-wrap\"><table class=\"tbl\">\n        <tbody><tr><th></th><th>Monetary</th><th>Fiscal</th></tr>\n        <tr><td>Who</td><td>Central bank (monetary authority)</td><td>Government</td></tr>\n        <tr><td>Tools</td><td>Money supply, interest rates</td><td>Government spending, tax rates</td></tr>\n        <tr><td>Typical targets</td><td>Inflation, price stability, trust in currency</td><td>Aggregate demand, employment, growth</td></tr>\n      </tbody></table></div>\n      <p style=\"font-size:.85rem;color:var(--muted);margin-top:8px\">The two are sister strategies used in combination to direct the economy toward its goals.</p>\n    </div>\n  </div>",
      "alt": "Diagram from the original notes"
    },
    {
      "type": "quiz",
      "title": "Topic 7 Quiz",
      "count": 8,
      "quizSlug": "07-basics-of-macroeconomics"
    }
  ]
};

export default chapter;
