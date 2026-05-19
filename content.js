// content.js — Single source of truth for site copy.
// Edit text here; layout in styles.css; rendering in app.js.

export const CONTENT = {
  meta: {
    title: "AI: A Quiet Warning — Valuations, History, and Discipline",
    description:
      "Every bubble feels different at the peak. The pattern isn't. A knowledge base on AI stock valuations as of May 2026, with lessons from Dot-Com, Japan 1989, and the Global Financial Crisis.",
    lastUpdated: "May 16, 2026",
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
      { k: "78%", v: "NASDAQ peak-to-trough, 2000–2002" },
      { k: "63%", v: "Nikkei 225 peak-to-trough, 1990–2003" },
      { k: "57%", v: "S&P 500 peak-to-trough, 2007–2009" },
      { k: "?",   v: "AI Boom, 2023–?" },
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
          "Early 2025 (valuations remain elevated in May 2026)",
        ],
      },
      {
        label: "Key valuation at peak",
        cells: [
          "NASDAQ P/E ~200x · Total market cap / GDP ~1.5x",
          "Nikkei 225 P/E ~70x · Total market cap / GDP ~2.2x",
          "US Home Price / Income ~5.0x · Price / Rent ~1.6x",
          "S&P 500 P/E ~27x (Tech sector ~40–50x) · Total market cap / GDP ~2.1x",
        ],
      },
      {
        label: "What happened next?",
        cells: [
          "NASDAQ fell ~78% from peak to low (2000–2002)",
          "Nikkei fell ~63% from peak to low (1990–2003). Lost 13 years to recover.",
          "S&P 500 fell ~57% (2007–2009). Many banks collapsed.",
          "Too early to know. But valuations are at historically extreme levels.",
        ],
      },
      {
        label: "How long to recover?",
        cells: ["~7 years", "~13–15 years", "~5 years", "? (Time will tell)"],
      },
    ],
  },

  todaysPicture: {
    title: "AI Boom: Current Picture",
    asOf: "As of May 16, 2026",
    metrics: [
      { icon: "chart",  label: "S&P 500 P/E (Forward)",          value: "~27x",      context: "vs 10Y Avg: ~18x · 20Y Avg: ~17x" },
      { icon: "chip",   label: "Tech Sector P/E (Forward)",      value: "~40–50x",   context: "vs 10Y Avg: ~28x" },
      { icon: "pie",    label: "Top 10 Stocks Weight in S&P 500", value: "~34%",     context: "vs 10Y Avg: ~24% · Highest since dot-com era" },
      { icon: "dollar", label: "Total Market Cap / GDP (US)",    value: "~2.1x",     context: "vs Long-term Avg: ~1.1x" },
      { icon: "cloud",  label: "AI Capex / Infrastructure Spend", value: "~$300B+",  context: "(2025E–2026E) vs ~$50B in 2022" },
      { icon: "people", label: "Retail Sentiment (AAII Bulls)",  value: "Elevated",  context: "Well above long-term average" },
    ],
    callout: {
      lead: "High valuations don't mean a crash tomorrow.",
      mid:  "They mean: future returns are likely to be low.",
      kicker: "Risk is high. Reward is low.",
    },
  },

  investorMistakes: [
    {
      title: "Ignored valuations",
      belief: '"Growth will justify any price."',
      reality: "Valuations mean revert.",
    },
    {
      title: "Believed the story, not the numbers",
      belief: '"This time is different."',
      reality: "Human behavior never changes.",
    },
    {
      title: "FOMO at the peak",
      belief: "Everyone was buying, so it felt safe.",
      reality: "Crowded trades unwind together.",
    },
    {
      title: "Confused volatility for risk",
      belief: '"It\'s just a correction."',
      reality: "Downturns become drawdowns.",
    },
  ],

  warningSigns: [
    { title: "Extreme valuations concentrated in few names" },
    { title: "Massive capex cycle with uncertain ROI" },
    { title: "Everyone bullish, very little worry" },
    { title: "Comparisons to dot-com era increasing" },
  ],

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
      "Figures are approximate and sourced from public market data as of the dates shown. P/E ratios cite forward 12-month estimates where indicated. Recovery periods measure peak nominal index level to subsequent peak. This site is a knowledge base, not investment advice. The author is not a financial advisor.",
    references: [
      { label: "Robert Shiller — Irrational Exuberance",             url: "" },
      { label: "Edward Chancellor — Devil Take the Hindmost",        url: "" },
      { label: "Charles Kindleberger — Manias, Panics, and Crashes", url: "" },
      { label: "Howard Marks memos (Oaktree Capital)",               url: "https://www.oaktreecapital.com/insights/memos" },
      { label: "Yardeni Research — Valuation metrics",               url: "https://www.yardeni.com/" },
      { label: "Federal Reserve Economic Data (FRED)",               url: "https://fred.stlouisfed.org/" },
    ],
    disclaimer:
      "Nothing on this page is a recommendation to buy, sell, or hold any security. Past performance does not predict future results. Markets can stay irrational longer than you can stay solvent.",
  },
};
