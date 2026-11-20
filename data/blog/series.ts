export type Series = {
  id: string;
  name: string;
  description: string;
  parts: { slug: string; short: string; level: "Basics" | "Intermediate" | "Advanced" | "Expert" }[];
};

export const series: Series[] = [
  {
    id: "performance-marketing",
    name: "Performance marketing, from basics to expert",
    description:
      "A 10-part course in plain language: what performance marketing is, the maths behind it, tracking, channels, Google and Meta ads, creative testing, landing pages, scaling and incrementality.",
    parts: [
      { slug: "what-is-performance-marketing-beginners-guide", short: "What performance marketing is and how you pay for it", level: "Basics" },
      { slug: "performance-marketing-unit-economics-cac-ltv-break-even", short: "Unit economics: CAC, LTV and break-even CPA", level: "Basics" },
      { slug: "conversion-tracking-setup-pixel-capi-utm-ga4", short: "Tracking: pixels, Conversions API, UTMs and GA4", level: "Basics" },
      { slug: "choosing-performance-marketing-channels-intent-vs-demand", short: "Choosing channels: capturing demand vs creating it", level: "Intermediate" },
      { slug: "google-search-ads-auction-quality-score-explained", short: "Google Search ads: the auction and Quality Score", level: "Intermediate" },
      { slug: "meta-ads-account-structure-learning-phase", short: "Meta ads: account structure and the learning phase", level: "Intermediate" },
      { slug: "ad-creative-testing-framework-hooks-angles-fatigue", short: "Creative testing: hooks, angles and fatigue", level: "Advanced" },
      { slug: "landing-page-cro-paid-traffic-message-match", short: "Landing pages for paid traffic", level: "Advanced" },
      { slug: "scaling-ad-spend-bidding-diminishing-returns", short: "Scaling spend and bidding strategies", level: "Advanced" },
      { slug: "incrementality-testing-mmm-mer-measurement", short: "Measuring what ads really caused: incrementality, MMM and MER", level: "Expert" },
    ],
  },
];

export function getSeries(id: string) {
  return series.find((s) => s.id === id);
}
