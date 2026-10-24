import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "08-international-trade",
    "number": 8,
    "title": "International trade",
    "subtitle": "Course outline (Week 14–15) · supported by Lesson 07 exchange-rate content",
    "kind": "topic",
    "words": 629,
    "minutes": 3
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "why-nations-trade",
      "text": "Why nations trade"
    },
    {
      "type": "paragraph",
      "html": "<b>International trade</b> is the exchange of goods and services between countries. It gives rise to a world economy in which prices, supply and demand are affected by global events. Trade allows <b>expansion of markets</b> for goods and services that might otherwise be unavailable; it is the reason you can choose between a Japanese, German or American car. Greater competition brings <b>more competitive prices</b> and cheaper products home to the consumer. The theoretical foundations taught in this course are <b>absolute advantage</b> and <b>comparative advantage</b>."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "absolute-advantage",
      "text": "Absolute advantage"
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Definition",
      "html": "A country has an <b>absolute advantage</b> in producing a good if it can produce <b>more of it with the same resources</b> (or the same output with fewer resources) than another country. Trade based on absolute advantage means each country specialises in what it produces best overall."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "comparative-advantage",
      "text": "Comparative advantage"
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "Definition",
      "html": "A country has a <b>comparative advantage</b> in producing a good if it can produce it at a <b>lower opportunity cost</b> than another country. This is the deeper concept: even a country worse at everything (no absolute advantage in anything) still gains from trade by specialising where its opportunity cost is lowest."
    },
    {
      "type": "paragraph",
      "html": "Opportunity cost of 1 unit of X = (units of Y given up) ÷ (units of X produced)<small>Compare opportunity costs across countries; the country with the lower OC of X specialises in X</small>"
    },
    {
      "type": "example",
      "title": "Absolute & comparative advantage: worked example",
      "bodyHtml": "<p>Sri Lanka and Thailand can each produce rice and clothing with 100 labour hours:</p>\n    <div class=\"tbl-wrap\"><table class=\"tbl\">\n      <tbody><tr><th></th><th>Rice (tons)</th><th>Clothing (units)</th></tr>\n      <tr><td><b>Sri Lanka</b></td><td>50</td><td>100</td></tr>\n      <tr><td><b>Thailand</b></td><td>80</td><td>120</td></tr>\n    </tbody></table></div>\n    <p>(i) Who has an absolute advantage in each good? (ii) Compute opportunity costs and find the comparative advantage. (iii) What should each country specialise in?</p>",
      "solutionHtml": "<p><b>(i) Absolute advantage:</b> Thailand produces more of <b>both</b> goods with the same hours, absolute advantage in <b>rice AND clothing</b>; Sri Lanka has none. (Yet trade still pays: watch.)</p>\n      <p><b>(ii) Opportunity costs:</b></p>\n      <ul>\n        <li>Sri Lanka: 50 rice ⇔ 100 clothing. OC of 1 rice = 100/50 = <b>2 clothing</b>; OC of 1 clothing = 50/100 = <b>0.5 rice</b>.</li>\n        <li>Thailand: 80 rice ⇔ 120 clothing. OC of 1 rice = 120/80 = <b>1.5 clothing</b>; OC of 1 clothing = 80/120 = <b>0.67 rice</b>.</li>\n      </ul>\n      <p><b>Comparative advantage:</b> Sri Lanka produces rice more cheaply in foregone clothing (2 &lt; 1.5? no). Careful: lower opportunity cost wins. Rice: Sri Lanka 2 clothing vs Thailand 1.5 clothing → <b>Thailand</b> has the lower OC of rice. Clothing: Sri Lanka 0.5 rice vs Thailand 0.67 rice → <b>Sri Lanka</b> has the lower OC of clothing.</p>\n      <p><b>(iii) Specialisation:</b> <b>Sri Lanka → clothing</b> (0.5 rice per unit); <b>Thailand → rice</b> (1.5 clothing per ton). Any trade price between the two OC ratios (1.5 clothing per rice &lt; world price &lt; 2 clothing per rice) benefits both countries, each ends up consuming beyond its own PPC.</p>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "exchange-rates-and-trade",
      "text": "Exchange rates and trade"
    },
    {
      "type": "paragraph",
      "html": "The <b>exchange rate</b> between two currencies is the rate at which one currency will be exchanged for another; the value of one country’s currency in terms of another. It <b>governs the terms on which international trade and investment take place</b>:"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"grid2\">\n    <div class=\"card\"><h4>Nominal exchange rate</h4><p>The rate at which <b>monies of different countries</b> can be exchanged for one another (e.g. USD/LKR). A depreciation makes exports cheaper to foreigners and imports costlier.</p></div>\n    <div class=\"card\"><h4>Real exchange rate</h4><p>The rate at which <b>goods and services produced in different countries</b> can be exchanged for one another, nominal rate adjusted for price levels. It determines competitiveness.</p></div>\n  </div>",
      "alt": "Diagram from the original notes"
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "Trade and the balance of payments",
      "html": "All trade transactions are recorded in the <b>balance of payments (BOP)</b>; the record of all economic transactions between residents of a country and the rest of the world in a period, made by individuals, firms and government bodies. A stable exchange rate is one of the goals of macroeconomic policy (Topic 7)."
    },
    {
      "type": "quiz",
      "title": "Topic 8 Quiz",
      "count": 6,
      "quizSlug": "08-international-trade"
    }
  ]
};

export default chapter;
