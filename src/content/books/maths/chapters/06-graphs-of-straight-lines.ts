import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "06-graphs-of-straight-lines",
    "number": 6,
    "title": "Graphs of Straight Lines",
    "subtitle": "Cartesian plane · Slope · Equations of a line · Parallel & perpendicular lines",
    "kind": "topic",
    "words": 535,
    "minutes": 3
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "the-cartesian-x-y-plane",
      "text": "The Cartesian X-Y plane"
    },
    {
      "type": "paragraph",
      "html": "The Cartesian coordinate system consists of a horizontal <b>x-axis</b> and a vertical <b>y-axis</b> that meet at the <b>origin (0, 0)</b>. Every point is an ordered pair <span class=\"m\">(x, y)</span>: x tells you how far right/left, y how far up/down. The axes split the plane into <b>four quadrants</b>, numbered anticlockwise starting top-right."
    },
    {
      "type": "figure",
      "svg": "<svg class=\"fig\" viewBox=\"0 0 460 320\" role=\"img\" aria-label=\"Cartesian plane quadrants\">\n    <line x1=\"20\" y1=\"160\" x2=\"440\" y2=\"160\" class=\"axisln\"></line><polygon points=\"440,160 431,156 431,164\" fill=\"var(--axis)\"></polygon>\n    <line x1=\"230\" y1=\"300\" x2=\"230\" y2=\"20\" class=\"axisln\"></line><polygon points=\"230,20 226,29 234,29\" fill=\"var(--axis)\"></polygon>\n    <text x=\"425\" y=\"178\" class=\"axl\">x</text><text x=\"242\" y=\"32\" class=\"axl\">y</text><text x=\"222\" y=\"176\" text-anchor=\"end\">O</text>\n    <text x=\"130\" y=\"80\" class=\"lbl\">Quadrant II</text><text x=\"122\" y=\"98\" font-size=\"11\">( −x , +y )</text>\n    <text x=\"300\" y=\"80\" class=\"lbl\">Quadrant I</text><text x=\"298\" y=\"98\" font-size=\"11\">( +x , +y )</text>\n    <text x=\"130\" y=\"250\" class=\"lbl\">Quadrant III</text><text x=\"122\" y=\"268\" font-size=\"11\">( −x , −y )</text>\n    <text x=\"300\" y=\"250\" class=\"lbl\">Quadrant IV</text><text x=\"298\" y=\"268\" font-size=\"11\">( +x , −y )</text>\n    <circle cx=\"290\" cy=\"100\" r=\"4.5\" fill=\"var(--primary)\"></circle><text x=\"298\" y=\"96\" font-size=\"11\">(3, 2)</text>\n    <circle cx=\"170\" cy=\"100\" r=\"4.5\" fill=\"var(--accent)\"></circle><text x=\"128\" y=\"118\" font-size=\"11\">(−2, 3)</text>\n    <circle cx=\"170\" cy=\"220\" r=\"4.5\" fill=\"var(--warn)\"></circle><text x=\"126\" y=\"240\" font-size=\"11\">(−3, −2)</text>\n    <circle cx=\"290\" cy=\"220\" r=\"4.5\" fill=\"var(--success)\"></circle><text x=\"298\" y=\"216\" font-size=\"11\">(2, −2)</text>\n  </svg>",
      "alt": "Cartesian plane quadrants",
      "caption": "The four quadrants — the signs of the coordinates identify each one."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "slope-gradient-of-a-straight-line",
      "text": "Slope (gradient) of a straight line"
    },
    {
      "type": "paragraph",
      "html": "The <b>slope m</b> measures steepness and direction. Between two points it is the ratio of the vertical change (rise) to the horizontal change (run):"
    },
    {
      "type": "paragraph",
      "html": "m = <span class=\"frac\"><span>y₂ − y₁</span><span>x₂ − x₁</span></span> = <span class=\"frac\"><span>rise</span><span>run</span></span>"
    },
    {
      "type": "figure",
      "svg": "<svg class=\"fig\" viewBox=\"0 0 460 260\" role=\"img\" aria-label=\"Slope as rise over run\">\n    <line x1=\"30\" y1=\"220\" x2=\"440\" y2=\"220\" class=\"axisln\"></line><line x1=\"50\" y1=\"240\" x2=\"50\" y2=\"30\" class=\"axisln\"></line>\n    <path class=\"curve\" d=\"M 80 200 L 380 60\"></path>\n    <path d=\"M 80 200 L 310 200 L 310 110\" fill=\"none\" stroke=\"var(--success)\" stroke-width=\"2\" stroke-dasharray=\"5 4\"></path>\n    <path d=\"M 310 200 L 310 110 L 380 110\" fill=\"none\" stroke=\"var(--warn)\" stroke-width=\"2\" stroke-dasharray=\"5 4\"></path>\n    <text x=\"195\" y=\"216\" fill=\"var(--success)\" font-weight=\"700\" font-size=\"12\">run</text>\n    <text x=\"318\" y=\"160\" fill=\"var(--warn)\" font-weight=\"700\" font-size=\"12\">rise</text>\n    <circle cx=\"80\" cy=\"200\" r=\"4.5\" fill=\"var(--primary)\"></circle><text x=\"62\" y=\"196\" font-size=\"11\">(x₁, y₁)</text>\n    <circle cx=\"380\" cy=\"60\" r=\"4.5\" fill=\"var(--primary)\"></circle><text x=\"384\" y=\"56\" font-size=\"11\">(x₂, y₂)</text>\n    <text x=\"200\" y=\"86\" text-anchor=\"middle\" class=\"lbl\">m = rise / run &gt; 0</text>\n  </svg>",
      "alt": "Slope as rise over run",
      "caption": "Positive slope rises left→right; the bigger m, the steeper the line."
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "<b>m &gt; 0</b> — line rises left to right; <b>m &lt; 0</b> — line falls.",
        "<b>m = 0</b> — horizontal line (equation <span class=\"m\">y = k</span>).",
        "<b>undefined m</b> — vertical line (equation <span class=\"m\">x = k</span>): the run is 0, so the fraction is undefined."
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "equations-of-a-straight-line",
      "text": "Equations of a straight line"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">Slope–intercept form</div><div class=\"f-b\">y = mx + c<br><small>m = slope, c = y-intercept</small></div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Point–slope form</div><div class=\"f-b\">y − y₁ = m(x − x₁)<br><small>through (x₁, y₁) with slope m</small></div></div>\n    <div class=\"fcard\"><div class=\"f-t\">General form</div><div class=\"f-b\">ax + by + c = 0<br><small>slope = −a/b</small></div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Two points</div><div class=\"f-b\">m = <span class=\"frac\"><span>y₂ − y₁</span><span>x₂ − x₁</span></span>, then point–slope</div></div>\n  </div>",
      "alt": "Formula reference cards"
    },
    {
      "type": "figure",
      "svg": "<svg class=\"fig\" viewBox=\"0 0 460 280\" role=\"img\" aria-label=\"y = mx + c anatomy\">\n    <line x1=\"30\" y1=\"240\" x2=\"440\" y2=\"240\" class=\"axisln\"></line><line x1=\"60\" y1=\"260\" x2=\"60\" y2=\"20\" class=\"axisln\"></line>\n    <text x=\"425\" y=\"258\" class=\"axl\">x</text><text x=\"70\" y=\"32\" class=\"axl\">y</text>\n    <path class=\"curve\" d=\"M 90 20 L 420 240\"></path>\n    <circle cx=\"60\" cy=\"80\" r=\"4.5\" fill=\"var(--accent)\"></circle>\n    <line x1=\"60\" y1=\"80\" x2=\"90\" y2=\"80\" class=\"dashed\" stroke=\"var(--accent)\"></line>\n    <text x=\"78\" y=\"72\" fill=\"var(--accent)\" font-weight=\"700\" font-size=\"12\">c (y-intercept)</text>\n    <path d=\"M 150 176 L 200 212 L 200 176\" fill=\"none\" stroke=\"var(--success)\" stroke-width=\"2\"></path>\n    <text x=\"160\" y=\"166\" fill=\"var(--success)\" font-weight=\"700\" font-size=\"12\">m = 2/3</text>\n    <text x=\"255\" y=\"60\" class=\"lbl\" transform=\"rotate(33 255 60)\">y = mx + c</text>\n  </svg>",
      "alt": "y = mx + c anatomy",
      "caption": "In y = mx + c, c is where the line cuts the y-axis and m is its steepness."
    },
    {
      "type": "example",
      "title": "Worked example — building line equations",
      "bodyHtml": "<p>(1) Find the equation of the line with slope 4 through (2, 3).<br>(2) Find the line through (1, 2) and (3, 8).<br>(3) Find the slope and y-intercept of <span class=\"m\">3x + 2y − 6 = 0</span>.</p>",
      "solutionHtml": "<p><b>(1)</b> Point–slope: <span class=\"m\">y − 3 = 4(x − 2)</span> → <span class=\"m\">y = 4x − 5</span>.</p>\n      <p><b>(2)</b> <span class=\"m\">m = <span class=\"frac\"><span>8 − 2</span><span>3 − 1</span></span> = 3</span>, so <span class=\"m\">y − 2 = 3(x − 1)</span> → <span class=\"m\">y = 3x − 1</span>.</p>\n      <p><b>(3)</b> Rearrange: <span class=\"m\">2y = −3x + 6</span> → <span class=\"m\">y = −<span class=\"frac\"><span>3</span><span>2</span></span>x + 3</span>. Slope <span class=\"m\">m = −3/2</span>, y-intercept <span class=\"m\">c = 3</span>.</p>"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "drawing-a-straight-line-graph",
      "text": "Drawing a straight-line graph"
    },
    {
      "type": "paragraph",
      "html": "To sketch <span class=\"m\">y = mx + c</span> you only need two points, but three is safer (a mistake shows up as a non-collinear point). The fastest method: mark the y-intercept c, then use the slope to step to a second point — for <span class=\"m\">y = 2x + 1</span>, start at (0, 1) and step 1 right, 2 up to reach (1, 3). Alternatively, build a small table of values (e.g. x = −1, 0, 1), plot, and join with a ruler."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "special-lines-parallel-and-perpendicular",
      "text": "Special lines, parallel and perpendicular"
    },
    {
      "type": "figure",
      "svg": "<svg class=\"fig\" viewBox=\"0 0 640 240\" role=\"img\" aria-label=\"parallel and perpendicular lines\">\n    <line x1=\"20\" y1=\"200\" x2=\"300\" y2=\"200\" class=\"axisln\"></line><line x1=\"40\" y1=\"220\" x2=\"40\" y2=\"20\" class=\"axisln\"></line>\n    <path class=\"curve\" d=\"M 60 180 L 280 60\"></path>\n    <path class=\"curve2\" d=\"M 60 230 L 280 130\"></path>\n    <text x=\"150\" y=\"50\" class=\"lbl\" fill=\"var(--primary)\">y = 2x + c₁</text>\n    <text x=\"205\" y=\"150\" class=\"lbl\" fill=\"var(--accent)\">y = 2x + c₂</text>\n    <text x=\"160\" y=\"232\" text-anchor=\"middle\" font-size=\"12\">parallel: m₁ = m₂ (never meet)</text>\n    <line x1=\"350\" y1=\"200\" x2=\"630\" y2=\"200\" class=\"axisln\"></line><line x1=\"370\" y1=\"220\" x2=\"370\" y2=\"20\" class=\"axisln\"></line>\n    <path class=\"curve\" d=\"M 390 60 L 610 180\"></path>\n    <path class=\"curve2\" d=\"M 520 40 L 610 190\"></path>\n    <text x=\"580\" y=\"60\" class=\"lbl\" fill=\"var(--primary)\">m₁ = </text></svg>",
      "alt": "parallel and perpendicular lines",
      "caption": "Parallel lines share a slope; perpendicular slopes are negative reciprocals."
    },
    {
      "type": "example",
      "title": "Worked example — parallel & perpendicular slopes",
      "bodyHtml": "<p>For the line <span class=\"m\">2x + 3y − 6 = 0</span>, find the slope of (a) a parallel line and (b) a perpendicular line.</p>",
      "solutionHtml": "<p>Rewrite: <span class=\"m\">y = −<span class=\"frac\"><span>2</span><span>3</span></span>x + 2</span>, so <span class=\"m\">m = −2/3</span>.</p>\n      <p>(a) Parallel: same slope <span class=\"m\">−2/3</span>. (b) Perpendicular: negative reciprocal <span class=\"m\"><span class=\"frac\"><span>3</span><span>2</span></span></span>, since <span class=\"m\">(−<span class=\"frac\"><span>2</span><span>3</span></span>) × <span class=\"frac\"><span>3</span><span>2</span></span> = −1</span>.</p>"
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Exam tip",
      "html": "When a question gives you two points and asks for a line, always compute m first — then any form of the equation is one substitution away. If asked whether a point lies on a line, substitute it: both sides must match exactly."
    },
    {
      "type": "quiz",
      "title": "Topic 6 Quiz — Straight Lines",
      "count": 7,
      "quizSlug": "06-graphs-of-straight-lines"
    }
  ]
};

export default chapter;
