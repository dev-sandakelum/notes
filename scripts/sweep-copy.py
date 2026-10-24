#!/usr/bin/env python3
"""Round 2 copy sweep (item 8).

Transforms content files in place:
  1. em dashes and dash-as-punctuation rewritten contextually
     (colon for term-definition, comma for appositives, period or
     semicolon for independent clauses, "None" for lone table dashes);
  2. heading texts and callout titles converted to sentence case
     (acronyms and proper nouns preserved);
  3. emoji and arrow-decorations stripped from headings/titles;
  4. quiz titles "Topic N Quiz - X" -> "Topic N Quiz: X".

KEEPS (never touched): en dash in real ranges (0-4, T0-T3), the true
minus sign for negative numbers (BF = -2), hyphens in compound words
(in-order, step-by-step), code operators (i--, ->), and the exact
wording of exam "memorize" definitions apart from punctuation.

A full before/after review log is written to scripts/sweep-review.txt.
"""
import re
import glob
import sys

EM = "\u2014"
EN = "\u2013"

# ------------------------------------------------------------------ #
# Sentence case helpers                                               #
# ------------------------------------------------------------------ #

PROPER = {
    "Java", "Python", "C", "Pascal", "Fibonacci", "Euclid", "Bayes",
    "Newton", "Gauss", "Dijkstra", "Kruskal", "Prim", "Huffman", "Floyd",
    "Warshall", "Knuth", "Morris", "Pratt", "Boyer", "Moore", "Bayer",
    "Guibas", "Sedgewick", "Adelson-Velsky", "Landis", "Unix", "Linux",
    "Windows", "Internet", "Web", "English", "ASCII", "Python", "MySQL",
    "Oracle", "SQL", "NoSQL", "Google", "Apple", "Microsoft", "Amazon",
    "Facebook", "Netflix", "Spotify", "Uber", "Airbnb", "PayPal", "Visa",
    "Excel", "Word", "PowerPoint", "Outlook", "Gmail", "WhatsApp",
    "Viber", "Zoom", "Teams", "Slack", "GitHub", "Git", "Linux",
    "Mac", "macOS", "iOS", "Android", "iPhone", "iPad",
    "Sri", "Lanka", "Colombo", "Keynesian", "Marshall", "Pareto",
    "Engel", "Giffen", "Veblen", "Lorenz", "Gini", "Herfindahl",
    "Cobb", "Douglas", "Leontief", "IS-LM", "Phillips", "Okun",
    "Taylor", "Walras", "Arrow", "Debreu", "Nash", "Cournot",
    "Bertrand", "Stackelberg", "Heckscher", "Ohlin", "Ricardo",
    "Adam", "Smith", "Malthus", "Say", "Laffer", "Bastiat",
}

def sentence_case(text):
    words = text.split(" ")
    out = []
    for i, w in enumerate(words):
        if not w:
            out.append(w)
            continue
        if i == 0:
            out.append(w)
            continue
        # split off leading/trailing punctuation to test the core word
        m = re.match(r"^(\W*)([\w'+&/\u2019-]*)(\W*)$", w, re.UNICODE)
        lead, core, trail = (m.group(1), m.group(2), m.group(3)) if m else ("", w, "")
        if not core:
            out.append(w)
            continue
        if core in PROPER or w in PROPER:
            out.append(w)
            continue
        if re.match(r"^[A-Z]{2,}[.\u2019'&/-]*$", core):  # acronym: BST, AVL, ICT2113
            out.append(w)
            continue
        if re.match(r"^[A-Z][a-zA-Z0-9'+&/\u2019-]*$", core) and re.search(r"[a-z]", core):
            # Mixed-case word: lowercase it (Red-Black -> red-black, Java kept above)
            out.append((lead + core.lower() + trail) if lead or trail else core.lower())
            continue
        out.append(w)
    return " ".join(out)

EMOJI_RE = re.compile(
    "[\U0001F000-\U0001FAFF\u2600-\u27BF\u2B00-\u2BFF\uFE0F\u25B6\u25BE\u25B8\u25C0]"
)

def strip_decorations(text):
    """Remove emoji / arrow decorations from headings and titles."""
    t = EMOJI_RE.sub("", text)
    t = re.sub(r"^\s*[+\-]+\s*", "", t) if t.strip() in ("",) else t
    return re.sub(r"\s{2,}", " ", t).strip()

# ------------------------------------------------------------------ #
# Dash rewriting                                                      #
# ------------------------------------------------------------------ #

LOWER_STARTERS = (
    "the ", "that ", "this ", "it ", "its ", "they ", "there ",
    "a ", "an ", "each ", "every ", "no ", "not ", "never ", "so ",
    "but ", "and ", "or ", "yet ", "because ", "which ", "whose ",
    "like ", "unlike ", "including ", "such ", "where ", "when ",
)

def last_segment(before):
    """The text of the current sentence/segment leading up to the dash."""
    tail = re.split(r"[.!?;:]", before)[-1]
    return tail.strip()

def decide(before, after):
    """Pick the replacement for a spaced em dash given its context."""
    b = before.rstrip()
    a = after.lstrip()
    if a == "":
        return ""  # trailing dash: drop
    if re.search(r"(?:Step|Case|Method|Example|Part|Panel|Topic)\s+\d+$", b):
        return ": "
    low = a.lower()
    if low.startswith(("so ", "but ", "and ", "or ", "yet ", "because ")):
        return ", "
    if low.startswith(("e.g.", "i.e.", "like ", "unlike ", "including ", "such as")):
        return ", "
    first = a[0]
    if first.isupper() or first == "<":
        # Capitalized continuation: sentence break, or colon for short labels
        if len(a) < 32 and not re.search(r"[.!?](\s|$)", a[:32]):
            return ": "
        return ". "
    if first.isdigit() or first in "\u2212(":
        return ": "
    # lowercase continuation
    seg = last_segment(b)
    short = len(seg.split()) <= 5 and not b.endswith((",", ".", ";", ":", "?", "!"))
    if low.startswith(("the ", "that ", "this ", "it ", "its ", "they ", "there ")):
        # independent clause: semicolon, or colon after a short label
        return ": " if short else "; "
    if short:
        return ": "  # term - definition
    return ", "

def fix_value(val):
    """Rewrite dashes inside one content string."""
    v = val
    if v.strip() in (EM, EN):
        return "None"
    v = v.replace("Quiz " + EM + " ", "Quiz: ")
    v = v.replace("Quiz " + EN + " ", "Quiz: ")

    # Tokenize around em dashes; consume the surrounding spaces so the
    # replacement supplies its own spacing.
    out = []
    i = 0
    while True:
        k = v.find(EM, i)
        if k == -1:
            break
        before = v[:k]
        after = v[k + 1:]
        bstrip = before.rstrip()
        astrip = after.lstrip()
        rep = decide(bstrip, astrip)
        out.append(v[i:len(bstrip)])
        out.append(rep)
        i = k + 1 + (len(after) - len(astrip))
    out.append(v[i:])
    v = "".join(out)

    # Spaced en dash used as punctuation (unspaced ranges stay legal).
    if " " + EN + " " in v:
        parts = v.split(" " + EN + " ")
        rebuilt = parts[0]
        for idx in range(1, len(parts)):
            rebuilt += decide(rebuilt, parts[idx]) + parts[idx]
        v = rebuilt
    # Spaced double hyphen used as punctuation.
    if " -- " in v:
        parts = v.split(" -- ")
        rebuilt = parts[0]
        for idx in range(1, len(parts)):
            rebuilt += decide(rebuilt, parts[idx]) + parts[idx]
        v = rebuilt

    # Exclamation marks: calm factual notes (never touched inside code
    # operators like !=; code comments simply lose the "!").
    if "!" in v:
        segments = re.split(r"(<code[\s\S]*?</code>|<pre[\s\S]*?</pre>|<span class=\"tok-[a-z]+\">[\s\S]*?</span>)", v)
        v = "".join(
            seg.replace("!", "")
            if seg.startswith(("<code", "<pre", '<span class="tok-'))
            else re.sub(r"([A-Za-z\u2019\)])!(?!=)", r"\1.", seg)
            for seg in segments
        )
    return v

# ------------------------------------------------------------------ #
# File processing                                                     #
# ------------------------------------------------------------------ #

HEAD_RE = re.compile(
    r'("type": "heading",\s*\n\s*"depth": \d,\s*\n\s*"id": "[^"]*",\s*\n\s*"text": ")([^"]*)(")'
)
TITLE_RE = re.compile(r'("title": ")([^"]*)(")')
STRING_RE = re.compile(r'"((?:[^"\\]|\\.)*)"')

def process_file(path, review):
    with open(path, encoding="utf-8") as f:
        src = f.read()
    original = src

    def fix_heading(m):
        old = m.group(2)
        new = fix_value(old)
        new = strip_decorations(new)
        new = sentence_case(new)
        if new != old:
            review.append(f"{path}\n  H: {old!r}\n  -> {new!r}")
        return m.group(1) + new + m.group(3)

    src = HEAD_RE.sub(fix_heading, src)

    def fix_title(m):
        old = m.group(2)
        if old.startswith("Topic ") and " Quiz" in old:
            new = fix_value(old)
        else:
            new = fix_value(old)
            new = strip_decorations(new)
            new = sentence_case(new)
        if new != old:
            review.append(f"{path}\n  T: {old!r}\n  -> {new!r}")
        return m.group(1) + new + m.group(3)

    src = TITLE_RE.sub(fix_title, src)

    def fix_string(m):
        old = m.group(1)
        new = fix_value(old)
        if new != old:
            review.append(f"{path}\n  S: {old[:110]!r}\n  -> {new[:110]!r}")
        return '"' + new + '"'

    src = STRING_RE.sub(fix_string, src)

    if src != original:
        with open(path, "w", encoding="utf-8") as f:
            f.write(src)
        return True
    return False

files = sorted(glob.glob("src/content/**/*.ts", recursive=True))
changed = 0
review = []
for p in files:
    if process_file(p, review):
        changed += 1

with open("scripts/sweep-review.txt", "w", encoding="utf-8") as f:
    f.write("\n".join(review))
print(f"swept {len(files)} files, changed {changed}")
print(f"review log: {len(review)} entries -> scripts/sweep-review.txt")
