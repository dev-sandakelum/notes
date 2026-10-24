import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "13-vectors",
    "number": 13,
    "title": "Vectors",
    "subtitle": "Magnitude & direction · Addition & subtraction · Scalar multiplication",
    "kind": "topic",
    "words": 641,
    "minutes": 3
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "what-is-a-vector",
      "text": "What is a vector?"
    },
    {
      "type": "paragraph",
      "html": "A <b>vector</b> is an object that has both a <b>magnitude and a direction</b>. Geometrically, we picture a vector as a <b>directed line segment</b> whose length is the magnitude and whose arrow indicates the direction; the direction runs from its <b>tail to its head</b>. Two vectors are the <b>same if they have the same magnitude and direction</b>, no matter where they are drawn. Classic examples are <b>force</b> and <b>velocity</b>: both act in a particular direction, and the magnitude gives the strength of the force or the speed of the motion. Quantities with only a size (mass, time, temperature) are called <b>scalars</b>."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "how-to-denote-vectors",
      "text": "How to denote vectors"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "Lowercase bold or with an arrow: <b>a</b> or <span class=\"m\">a⃗</span>; by endpoints: <span class=\"m\">AB⃗</span> (tail A, head B).",
        "Magnitude (length): <span class=\"m\">|a|</span> or <span class=\"m\">‖a‖</span>: always a non-negative scalar.",
        "Component form in the plane: <span class=\"m\">a = (x, y)</span>, meaning x units right and y units up from the tail."
      ]
    },
    {
      "type": "paragraph",
      "html": "‖a‖ = <span class=\"sqrt\"><span class=\"r\">x² + y²</span></span> &nbsp;&nbsp;<span style=\"font-style:normal;font-size:.85em;color:var(--muted)\">(Pythagoras on the components)</span>"
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "Moving vs changing a vector",
      "html": "Translating a vector (moving it without turning or stretching) does <b>not</b> change it, position is irrelevant. But stretching or turning it by moving just its head or tail <b>does</b> change the magnitude or direction."
    },
    {
      "type": "figure",
      "svg": "<svg class=\"fig\" viewBox=\"0 0 640 220\" role=\"img\" aria-label=\"Vector addition tip to tail and subtraction\">\n    <defs></defs>\n    <path d=\"M 30 180 L 180 180 L 180 80\" fill=\"none\" stroke=\"var(--border)\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"></path>\n    <line x1=\"30\" y1=\"180\" x2=\"180\" y2=\"80\" stroke=\"var(--primary)\" stroke-width=\"3\"></line><polygon points=\"180,80 169,83 175,92\" fill=\"var(--primary)\"></polygon>\n    <text x=\"95\" y=\"122\" fill=\"var(--primary)\" font-weight=\"700\">a</text>\n    <line x1=\"180\" y1=\"80\" x2=\"330\" y2=\"130\" stroke=\"var(--accent)\" stroke-width=\"3\"></line><polygon points=\"330,130 319,127 322,138\" fill=\"var(--accent)\"></polygon>\n    <text x=\"252\" y=\"92\" fill=\"var(--accent)\" font-weight=\"700\">b</text>\n    <line x1=\"30\" y1=\"180\" x2=\"330\" y2=\"130\" stroke=\"var(--success)\" stroke-width=\"3\"></line><polygon points=\"330,130 319,125 320,136\" fill=\"var(--success)\"></polygon>\n    <text x=\"175\" y=\"172\" fill=\"var(--success)\" font-weight=\"700\">a + b</text>\n    <text x=\"180\" y=\"205\" text-anchor=\"middle\" font-size=\"12\">tip-to-tail (triangle law)</text>\n    <line x1=\"420\" y1=\"170\" x2=\"560\" y2=\"60\" stroke=\"var(--primary)\" stroke-width=\"3\"></line><polygon points=\"560,60 549,63 555,72\" fill=\"var(--primary)\"></polygon>\n    <text x=\"480\" y=\"100\" fill=\"var(--primary)\" font-weight=\"700\">b</text>\n    <line x1=\"420\" y1=\"170\" x2=\"530\" y2=\"180\" stroke=\"var(--accent)\" stroke-width=\"3\"></line><polygon points=\"530,180 520,175 520,185\" fill=\"var(--accent)\"></polygon>\n    <text x=\"470\" y=\"166\" fill=\"var(--accent)\" font-weight=\"700\">−a</text>\n    <line x1=\"420\" y1=\"170\" x2=\"420\" y2=\"55\" stroke=\"none\"></line>\n    <text x=\"470\" y=\"205\" text-anchor=\"middle\" font-size=\"12\">b − a = b + (−a)</text>\n  </svg>",
      "alt": "Vector addition tip to tail and subtraction",
      "caption": "Left: translate b so its tail meets the head of a; the result runs tail-of-a to head-of-b. Right: subtraction adds the reversed vector."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "operations-on-vectors",
      "text": "Operations on vectors"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "1-addition",
      "text": "1. addition"
    },
    {
      "type": "paragraph",
      "html": "Given two vectors a and b, translate b until its <b>tail coincides with the head of a</b>; the directed segment from the tail of a to the head of b is the sum <b>a + b</b>. In component form simply add the coordinates: <span class=\"m\">(x₁, y₁) + (x₂, y₂) = (x₁+x₂, y₁+y₂)</span>. Vector addition satisfies two important properties:"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">Commutative law</div><div class=\"f-b\">a + b = b + a</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Associative law</div><div class=\"f-b\">(a + b) + c = a + (b + c)</div></div>\n  </div>",
      "alt": "Formula reference cards"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "2-subtraction",
      "text": "2. subtraction"
    },
    {
      "type": "paragraph",
      "html": "Subtraction is defined as <b>addition with the opposite</b> of a vector: <span class=\"m\">b − a = b + (−a)</span>, where −a has the same length as a but points the opposite way. In components: <span class=\"m\">(x₁, y₁) − (x₂, y₂) = (x₁−x₂, y₁−y₂)</span>."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "3-multiplication-by-a-scalar",
      "text": "3. multiplication by a scalar"
    },
    {
      "type": "paragraph",
      "html": "Given a vector a and a real number (scalar) <span class=\"m\">λ</span>, the vector <b>λa</b> is built as follows. If <span class=\"m\">λ &gt; 0</span>, then λa points in the <b>same direction</b> as a with length λ times the length of a, multiplication <b>stretches</b> (if λ &gt; 1) or <b>compresses</b> (if 0 &lt; λ &lt; 1) the vector. If <span class=\"m\">λ &lt; 0</span>, λa points in the <b>opposite direction</b>, with length scaled by |λ|. Whatever the sign of λ:"
    },
    {
      "type": "paragraph",
      "html": "‖λa‖ = |λ| ‖a‖"
    },
    {
      "type": "figure",
      "svg": "<svg class=\"fig\" viewBox=\"0 0 470 210\" role=\"img\" aria-label=\"Scalar multiplication\">\n    <line x1=\"60\" y1=\"160\" x2=\"200\" y2=\"100\" stroke=\"var(--primary)\" stroke-width=\"3\"></line><polygon points=\"200,100 189,102 194,111\" fill=\"var(--primary)\"></polygon>\n    <text x=\"120\" y=\"115\" fill=\"var(--primary)\" font-weight=\"700\">a</text>\n    <line x1=\"60\" y1=\"160\" x2=\"340\" y2=\"40\" stroke=\"var(--success)\" stroke-width=\"3\"></line><polygon points=\"340,40 329,42 334,51\" fill=\"var(--success)\"></polygon>\n    <text x=\"210\" y=\"70\" fill=\"var(--success)\" font-weight=\"700\">2a (stretched, same direction)</text>\n    <line x1=\"60\" y1=\"160\" x2=\"130\" y2=\"180\" stroke=\"var(--accent)\" stroke-width=\"3\"></line><polygon points=\"130,180 120,175 121,186\" fill=\"var(--accent)\"></polygon>\n    <text x=\"80\" y=\"198\" fill=\"var(--accent)\" font-weight=\"700\">0.5a</text>\n    <line x1=\"60\" y1=\"160\" x2=\"20\" y2=\"190\" stroke=\"var(--danger)\" stroke-width=\"3\"></line><polygon points=\"20,190 30,188 26,179\" fill=\"var(--danger)\"></polygon>\n    <text x=\"34\" y=\"150\" fill=\"var(--danger)\" font-weight=\"700\">−a</text>\n  </svg>",
      "alt": "Scalar multiplication",
      "caption": "Scalar multiplication: scale the length, keep (or flip) the direction."
    },
    {
      "type": "example",
      "title": "Worked example: component arithmetic",
      "bodyHtml": "<p>Let <span class=\"m\">a = (2, 3)</span> and <span class=\"m\">b = (−1, 4)</span>. Find (1) a + b, (2) a − b, (3) 2a, (4) ‖a‖, (5) the unit vector in the direction of a.</p>",
      "solutionHtml": "<ol>\n        <li><span class=\"m\">a + b = (2 + (−1), 3 + 4) = <b>(1, 7)</b></span></li>\n        <li><span class=\"m\">a − b = (2 − (−1), 3 − 4) = <b>(3, −1)</b></span></li>\n        <li><span class=\"m\">2a = <b>(4, 6)</b></span>, every component is doubled.</li>\n        <li><span class=\"m\">‖a‖ = <span class=\"sqrt\"><span class=\"r\">2² + 3²</span></span> = <span class=\"sqrt\"><span class=\"r\">13</span></span> ≈ <b>3.61</b></span></li>\n        <li>Unit vector: <span class=\"m\">â = <span class=\"frac\"><span>a</span><span>‖a‖</span></span> = <span class=\"bigp\">(</span><span class=\"frac\"><span>2</span><span><span class=\"sqrt\"><span class=\"r\">13</span></span></span></span>, <span class=\"frac\"><span>3</span><span><span class=\"sqrt\"><span class=\"r\">13</span></span></span></span><span class=\"bigp\">)</span></span>; it has length 1.</li>\n      </ol>"
    },
    {
      "type": "example",
      "title": "Worked example: geometry with vectors",
      "bodyHtml": "<p>A boat sails 30 km east and then 40 km north. Express the displacement as a vector and find its magnitude and the straight-line distance from the start.</p>",
      "solutionHtml": "<p>Displacement vector: <span class=\"m\">d = (30, 40)</span> km.</p>\n      <div class=\"eq\">‖d‖ = <span class=\"sqrt\"><span class=\"r\">30² + 40²</span></span> = <span class=\"sqrt\"><span class=\"r\">2500</span></span> = 50 km</div>\n      <p>The boat is <b>50 km</b> from its starting point (a 3-4-5 triangle scaled by 10). This is why vector components plus Pythagoras solve navigation problems instantly.</p>"
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Exam tip",
      "html": "Questions often test the difference between <b>scalar</b> and <b>vector</b> quantities, and the property <span class=\"m\">‖λa‖ = |λ|‖a‖</span>. Remember: a negative scalar flips direction but the magnitude stays positive because of the absolute value."
    },
    {
      "type": "quiz",
      "title": "Topic 13 Quiz: Vectors",
      "count": 6,
      "quizSlug": "13-vectors"
    }
  ]
};

export default chapter;
