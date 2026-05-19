// content.js — Single source of truth for site copy.
// Edit text here; layout in styles.css; rendering in app.js.
//
// Every figure carries a source. See `sources.references` for full citations.
// Source slugs (factset, imf-gfsr-25, etc.) are resolved at render time.

export const CONTENT = {
  meta: {
    title: "AI: A Quiet Warning — Valuations, History, and Discipline",
    description:
      "Every bubble feels different at the peak. The pattern isn't. A knowledge base on AI stock valuations as of May 2026, with lessons from Dot-Com, Japan 1989, and the Global Financial Crisis.",
    lastUpdated: "May 19, 2026",
  },

  hero: {
    eyebrow: "A Quiet Warning · May 2026",
    titleParts: [
      { text: "AI", style: "serif-italic" },
      { text: ": A Quiet ", style: "sans" },
      { text: "Warning", style: "sans-underline-pink" },
    ],
    subtitle: "Every bubble feels different at the peak. The pattern isn't.",
    indexLabel: "Contents",
  },

  sections: [
    { id: "the-pattern",       roman: "I",   label: "The Pattern" },
    { id: "four-bubbles",      roman: "II",  label: "Four Bubbles" },
    { id: "todays-picture",    roman: "III", label: "Today's Picture" },
    { id: "investor-mistakes", roman: "IV",  label: "Investor Mistakes" },
    { id: "warning-signs",     roman: "V",   label: "Warning Signs" },
    { id: "what-to-do",        roman: "VI",  label: "What To Do" },
    { id: "sources",           roman: "VII", label: "Sources" },
  ],

  thePattern: {
    lede:
      "Three times in the last forty years, a generation of investors became convinced that this time was different. Each time, the same pattern played out. We are watching the fourth iteration in real time.",
    pillars: [
      { k: "78%", v: "NASDAQ peak-to-trough, 2000–2002", srcKey: "wiki-dotcom" },
      { k: "63%", v: "Nikkei 225 peak-to-trough, 1990–1992", srcKey: "wiki-japan" },
      { k: "57%", v: "S&P 500 peak-to-trough, 2007–2009", srcKey: "wiki-gfc" },
      { k: "?",   v: "AI Boom, 2023–?", srcKey: null },
    ],
    voicesIntro: "What major voices are saying about the pattern this time:",
    voices: [
      {
        who: "Howard Marks",
        role: "Co-Chairman, Oaktree Capital",
        date: "Dec 2025 memo, “On Bubble Watch / Is It a Bubble?”",
        quote:
          "Valuations are high but not crazy. Expensive and going down tomorrow are not synonymous — but high prices and low future returns usually are.",
        srcKey: "marks-memo",
      },
      {
        who: "Jamie Dimon",
        role: "CEO, JPMorgan Chase",
        date: "Oct 2025, BBC / Fortune interview",
        quote:
          "I'm far more worried than others about a serious correction. I put the odds at around 30% — three times what my peers are giving.",
        srcKey: "dimon-bbc",
      },
      {
        who: "International Monetary Fund",
        role: "Global Financial Stability Report",
        date: "Oct 2025",
        quote:
          "Market concentration around the Magnificent 7 has heightened risks. A moderate AI-stock correction with tighter financial conditions would reduce global growth by ~0.4 percentage points.",
        srcKey: "imf-gfsr-25",
      },
      {
        who: "Ray Dalio",
        role: "Founder, Bridgewater Associates",
        date: "Jan 2026, year-end reflection",
        quote:
          "AI is in the early stages of a bubble. That doesn't mean exit — it means brace for lower returns over the next decade and stay diversified.",
        srcKey: "dalio-x",
      },
      {
        who: "Sam Altman",
        role: "CEO, OpenAI",
        date: "Aug 2025, press roundtable",
        quote:
          "Are investors overexcited about AI? My opinion is yes. When bubbles happen, smart people get overexcited about a kernel of truth. Someone is going to get burned.",
        srcKey: "altman-cnbc",
      },
      {
        who: "Bank for International Settlements",
        role: "Quarterly Review",
        date: "2025",
        quote:
          "US equities and gold are showing bubble-like characteristics — the first parallel surge of its kind in five decades.",
        srcKey: "bis-review",
      },
    ],
  },

  fourBubbles: {
    headers: [
      "",
      "Dot-Com Bubble\n1998–2000",
      "Japan Asset Bubble\n1986–1990",
      "Global Financial Crisis\n2006–2007",
      "AI Boom Today\n2023 – May 2026",
    ],
    rows: [
      {
        label: "What was the story?",
        cells: [
          "Internet will change everything. New economy. No limits.",
          "Japan Inc. will dominate the world. Land & stocks only go up.",
          "Housing prices never fall nationwide. Financial innovation removes risk.",
          "AI will transform everything. Productivity boom. This time is different.",
        ],
      },
      {
        label: "Market peak (approx)",
        cells: [
          "Mar 2000",
          "Dec 1989",
          "Oct 2007",
          "Valuations remain elevated in May 2026",
        ],
      },
      {
        label: "Key valuation at peak",
        cells: [
          "NASDAQ Composite P/E >90x · Nasdaq-100 fwd P/E ~60x",
          "Nikkei 225 P/E ~60–70x · Land+stocks ≈ 4× US GDP",
          "Market Cap/GDP ~1.1x · US Home Price/Income ~5.0x",
          "S&P 500 fwd P/E ~22x · Tech sector fwd P/E ~24x · Market Cap/GDP ~2.3x",
        ],
      },
      {
        label: "What happened next?",
        cells: [
          "NASDAQ fell ~78% from peak to low (2000–2002)",
          "Nikkei fell ~63% from peak (1989) to 1992 low. Took ~34 years to fully recover.",
          "S&P 500 fell ~57% (2007–2009). Major banks collapsed.",
          "Too early to know. Concentration & valuations sit at historic extremes.",
        ],
      },
      {
        label: "How long to recover?",
        cells: ["~7 years (Mar 2000 → 2007)", "~34 years (Dec 1989 → 2024)", "~5 years (2007 → 2013)", "? (Time will tell)"],
      },
    ],
  },

  todaysPicture: {
    title: "AI Boom: Current Picture",
    asOf: "As of May 19, 2026 · all figures sourced — see §VII",
    metrics: [
      {
        icon: "chart",
        label: "S&P 500 P/E (Forward)",
        value: "~22x",
        context: "vs 10Y avg ~18.9x · 5Y avg ~19.9x",
        srcKey: "factset",
      },
      {
        icon: "chip",
        label: "Tech Sector P/E (Forward)",
        value: "~24x",
        context: "S&P 500 Info Tech, May 2026",
        srcKey: "macromicro-tech",
      },
      {
        icon: "pie",
        label: "Magnificent 7 Weight in S&P 500",
        value: "~35%",
        context: "vs ~20% in 2022 · Top-10 names ≈ 40% of index",
        srcKey: "motley-mag7",
      },
      {
        icon: "dollar",
        label: "Total Market Cap / GDP (Buffett Indicator)",
        value: "~2.31x",
        context: "All-time high · Buffett's “danger zone” = >1.20x",
        srcKey: "buffett-indicator",
      },
      {
        icon: "cloud",
        label: "Hyperscaler AI Capex (2026E)",
        value: "~$700B",
        context: "Microsoft + Alphabet + Meta + Amazon · vs $410B in 2025, ~$50B in 2022",
        srcKey: "cnbc-capex",
      },
      {
        icon: "people",
        label: "AAII Bulls (latest weekly)",
        value: "39.3%",
        context: "Above 37.5% historical avg for 4th week running · Bears also rising",
        srcKey: "aaii",
      },
    ],
    callout: {
      lead: "High valuations don't mean a crash tomorrow.",
      mid:  "They mean: future returns are likely to be low.",
      kicker: "Risk is high. Reward is low.",
    },
    contradictionNote: {
      title: "A grown-up reading of the data",
      body:
        "Forward P/Es are elevated but not at dot-com extremes — the Nasdaq-100 traded near 60× in 2000, today's tech sector is ~24×. The hotter signals are concentration, capex, and circular vendor financing. The lesson isn't “sell everything”; it is that the margin for error is thin.",
    },
  },

  investorMistakes: {
    lede:
      "Being apprehensive about AI valuations is not being against AI. It is treading the path with caution — refusing to confuse a transformative technology with a transformative entry price. The mistakes below are not about pessimism; they are about discipline.",
    cards: [
      {
        title: "Ignored valuations",
        belief: '"Growth will justify any price."',
        reality:
          "Valuations mean-revert. Even Cisco — a real winner of the internet era — fell ~89% from its 2000 peak and is still below it 25 years later.",
        nuance:
          "Owning AI is fine. Overpaying for AI is the trap.",
      },
      {
        title: "Believed the story, not the numbers",
        belief: '"This time is different."',
        reality:
          "Howard Marks: bubbles coalesce around a “kernel of truth.” The truth is real. The price is the problem.",
        nuance:
          "The technology and the trade are two different decisions.",
      },
      {
        title: "FOMO at the peak",
        belief: '"Everyone is buying, so it feels safe."',
        reality:
          "Crowded trades unwind together. The IMF flagged ~35% S&P concentration in 7 names as a systemic risk in Oct 2025.",
        nuance:
          "Comfort in a crowd is not the same as safety.",
      },
      {
        title: "Confused caution with cowardice",
        belief: '"If I sit out, I look like a sheep."',
        reality:
          "Caution is not anti-AI. It is anti-overpaying. Buffett held cash through 1999 and was mocked — until he wasn't.",
        nuance:
          "Patience is a position, not a personality flaw.",
      },
      {
        title: "Confused volatility for risk",
        belief: '"It is just a correction — it will bounce."',
        reality:
          "Drawdowns become permanent if leverage forces selling. The Nikkei took ~34 years to reclaim its 1989 high; many investors never lived to see it.",
        nuance:
          "Risk is what you cannot recover from, not what hurts this quarter.",
      },
      {
        title: "Outsourced thinking to the crowd",
        belief: '"All the smart money is in."',
        reality:
          'Altman, Dimon, Dalio, Marks, and the IMF have all said this is bubble-shaped. Concentration without conviction is herd behavior with a Bloomberg terminal.',
        nuance:
          "Do the work, or own the index — but do not own “the story.”",
      },
    ],
  },

  warningSigns: {
    lede:
      "These are not predictions. They are conditions historically present at peaks. Each carries a source, so you can verify and form your own view.",
    items: [
      {
        title: "Extreme concentration in a handful of names",
        stat: "~35%",
        statLabel: "Magnificent 7 share of S&P 500",
        body: "Up from ~12% in 2016. The IMF flagged this concentration in its Oct 2025 Global Financial Stability Report.",
        srcKey: "imf-gfsr-25",
      },
      {
        title: "Capex cycle racing ahead of revenue",
        stat: "~$700B",
        statLabel: "Hyperscaler AI capex in 2026 (vs $410B in 2025)",
        body: "An MIT study found 95% of enterprise GenAI pilots delivered no measurable return; McKinsey put real financial impact at only 5.5% of firms.",
        srcKey: "mit-genai",
      },
      {
        title: "Circular vendor financing",
        stat: "$100B",
        statLabel: "Nvidia → OpenAI investment paired with GPU purchase commitments",
        body: "Echoes of late-1990s telecom: a supplier funds the customer who buys the supplier's product. Bloomberg and others have called out the pattern.",
        srcKey: "bloomberg-circular",
      },
      {
        title: "Valuation indicators at historic extremes",
        stat: "~2.31x",
        statLabel: "US total market cap / GDP — all-time high",
        body: "Warren Buffett's own indicator considers >1.20x “overvalued.” Today's reading is roughly double that threshold.",
        srcKey: "buffett-indicator",
      },
      {
        title: "“This time is different” is the consensus",
        stat: "87%",
        statLabel: "Share of US VC dollars going to AI in 2025 (vs ~40% to internet in 1999)",
        body: "Cited by Michael Burry from Apollo's Torsten Slok. Concentration of bets — not just prices — is at an extreme.",
        srcKey: "burry-newsletter",
      },
      {
        title: "Even the builders are warning",
        stat: "“Bubble”",
        statLabel: "OpenAI's Altman, Ray Dalio, Jamie Dimon, BIS, IMF — all in 2025",
        body: "When the CEO selling the future and the central bankers regulating it use the same word, it deserves attention.",
        srcKey: "altman-cnbc",
      },
    ],
  },

  whatToDo: [
    { num: "01", title: "Respect valuations.",               body: "Don't buy dreams at any price." },
    { num: "02", title: "Stay diversified.",                 body: "Avoid overexposure to one theme or factor." },
    { num: "03", title: "Focus on fundamentals.",            body: "Cash flows, moats, and sensible balance sheets." },
    { num: "04", title: "Be willing to take profits early.", body: "Not just early in buying." },
    { num: "05", title: "Keep dry powder.",                  body: "Bubbles turn into opportunities after they burst." },
  ],

  finalReminder:
    "Great technologies can still become terrible investments at the wrong price.",

  closingLine: {
    a: "History doesn't predict, but it teaches.",
    b: "Discipline today.",
    c: "Optionality tomorrow.",
  },

  sources: {
    methodology:
      "Figures are sourced from public market data as of the dates shown. Forward P/E ratios cite 12-month consensus estimates. Recovery periods measure peak nominal index level to the next time that level was reclaimed. Every metric and quote in this knowledge base maps to a numbered reference below. This site is a knowledge base, not investment advice. The author is not a financial advisor.",
    references: [
      // ----- Books / classics
      {
        key: "shiller",
        label: "Robert Shiller — Irrational Exuberance (3rd ed.)",
        url: "https://press.princeton.edu/books/paperback/9780691166261/irrational-exuberance",
      },
      {
        key: "chancellor",
        label: "Edward Chancellor — Devil Take the Hindmost",
        url: "https://www.penguinrandomhouse.com/books/327080/devil-take-the-hindmost-by-edward-chancellor/",
      },
      {
        key: "kindleberger",
        label: "Charles Kindleberger & Robert Aliber — Manias, Panics, and Crashes",
        url: "https://link.springer.com/book/10.1007/978-3-031-16008-0",
      },
      {
        key: "marks-memo",
        label: "Howard Marks — “On Bubble Watch” / “Is It a Bubble?” (Oaktree, 2024–2025)",
        url: "https://www.oaktreecapital.com/insights/memo/is-it-a-bubble",
      },
      {
        key: "yardeni",
        label: "Yardeni Research — S&P 500 sector forward P/E ratios",
        url: "https://yardeni.com/charts/sp-500-sectors-forward-p-e-ratios/",
      },
      {
        key: "fred",
        label: "Federal Reserve Economic Data (FRED) — St. Louis Fed",
        url: "https://fred.stlouisfed.org/",
      },

      // ----- Data sources for Today's Picture
      {
        key: "factset",
        label: "FactSet Earnings Insight — S&P 500 forward P/E, May 2026 (21.4×)",
        url: "https://insight.factset.com/sp-500-earnings-season-update-may-8-2026",
      },
      {
        key: "macromicro-tech",
        label: "MacroMicro — S&P 500 Info Tech forward P/E (~23.6× as of May 8, 2026)",
        url: "https://en.macromicro.me/series/20517/s5inft-forward-pe-ratio",
      },
      {
        key: "motley-mag7",
        label: "The Motley Fool — Magnificent 7 = 34.8% of S&P 500 (May 12, 2026)",
        url: "https://www.fool.com/investing/2026/01/05/should-investors-be-worried-that-the-magnificent-s/",
      },
      {
        key: "buffett-indicator",
        label: "Current Market Valuation — Buffett Indicator, ~231% (May 18, 2026)",
        url: "https://www.currentmarketvaluation.com/models/buffett-indicator.php",
      },
      {
        key: "cnbc-capex",
        label: "CNBC — Big Tech AI capex ≈ $700B in 2026; >$1T projected for 2027",
        url: "https://www.cnbc.com/2026/04/30/ai-boom-big-tech-capital-expenditures-now-seen-topping-1-trillion-in-2027-.html",
      },
      {
        key: "aaii",
        label: "AAII Investor Sentiment Survey — weekly results",
        url: "https://www.aaii.com/sentimentsurvey",
      },

      // ----- Voices in The Pattern + Warning Signs
      {
        key: "dimon-bbc",
        label: "Fortune — Jamie Dimon: 30% chance of correction (Oct 2025)",
        url: "https://fortune.com/2025/10/09/jamie-dimon-jpmorgan-chase-ai-bubble-stock-market-correction/",
      },
      {
        key: "imf-gfsr-25",
        label: "IMF — Global Financial Stability Report, Oct 2025 (AI-stock correction scenario)",
        url: "https://www.imf.org/en/Publications/GFSR",
      },
      {
        key: "dalio-x",
        label: "Fortune — Ray Dalio: AI in early stages of a bubble (Jan 2026)",
        url: "https://fortune.com/2026/01/06/ray-dalio-says-ai-is-in-the-early-stages-of-a-bubble-so-watch-out-for-2026/",
      },
      {
        key: "altman-cnbc",
        label: "CNBC — Sam Altman: “We are in an AI bubble” (Aug 2025)",
        url: "https://www.cnbc.com/2025/08/18/openai-sam-altman-warns-ai-market-is-in-a-bubble.html",
      },
      {
        key: "bis-review",
        label: "Reuters — BIS: US equities and gold show bubble-like behaviour",
        url: "https://www.bis.org/publ/qtrpdf/r_qt2509.htm",
      },
      {
        key: "burry-newsletter",
        label: "CNBC — Michael Burry on AI as the next “Big Short” (Nov 2025)",
        url: "https://www.cnbc.com/2025/11/25/michael-burrys-next-big-short-an-inside-look-at-his-analysis-showing-ai-is-a-bubble.html",
      },
      {
        key: "bloomberg-circular",
        label: "Bloomberg — How Microsoft, OpenAI and Nvidia keep paying each other",
        url: "https://www.bloomberg.com/graphics/2026-ai-circular-deals/",
      },
      {
        key: "mit-genai",
        label: "Fortune — MIT: 95% of enterprise GenAI pilots fail to deliver returns (Aug 2025)",
        url: "https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/",
      },

      // ----- Historical bubble references
      {
        key: "wiki-dotcom",
        label: "Dot-com bubble — overview & timeline",
        url: "https://en.wikipedia.org/wiki/Dot-com_bubble",
      },
      {
        key: "wiki-japan",
        label: "Japanese asset price bubble — overview & timeline",
        url: "https://en.wikipedia.org/wiki/Japanese_asset_price_bubble",
      },
      {
        key: "wiki-gfc",
        label: "US bear market of 2007–2009 — overview",
        url: "https://en.wikipedia.org/wiki/United_States_bear_market_of_2007%E2%80%932009",
      },
    ],
    disclaimer:
      "Nothing on this page is a recommendation to buy, sell, or hold any security. Past performance does not predict future results. Markets can stay irrational longer than you can stay solvent.",
  },
};
