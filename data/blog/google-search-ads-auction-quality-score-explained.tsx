import Link from "next/link";
import { Flow, BarChart, Decision } from "@/components/blog/figures";
import type { BlogPost } from "./types";

export const post: BlogPost = {
  slug: "google-search-ads-auction-quality-score-explained",
  title: "Google Search ads explained: the auction, Ad Rank, Quality Score and match types",
  description:
    "Part 5 of 10. How the Google Ads auction decides who shows and what they pay, what Quality Score measures, how keyword match types work today, and how to structure a first search campaign.",
  intro:
    "Every Google search with ads triggers an auction. Google doesn't simply pick the highest bid. It calculates Ad Rank from your bid, the quality of your ad and landing page, the expected effect of ad assets, and the context of the search. Better quality can win a higher position at a lower cost, and you usually pay only what's needed to hold your position, not your full bid. Quality Score, shown from 1 to 10 per keyword, is a diagnostic built from expected CTR, ad relevance and landing page experience. Use it to find weak spots rather than as a target. Match types control which searches can trigger your ads: broad casts widest, phrase and exact narrow it, and negative keywords block searches you don't want. The search terms report shows what you actually paid for.",
  date: "2026-10-14",
  keywords: [
    "how Google Ads auction works",
    "Ad Rank",
    "Quality Score explained",
    "keyword match types",
    "Google search ads for beginners",
  ],
  category: "Performance Marketing",
  readingMinutes: 9,
  series: { id: "performance-marketing", part: 5 },
  content: (
    <>
      <p>
        <Link href="/blog/choosing-performance-marketing-channels-intent-vs-demand">
          Part 4
        </Link>{" "}
        made the case that search is often the best first channel because
        people tell you what they want. This part covers how Google decides
        whose ad they see and what it costs.
      </p>

      <h2>What happens in the auction</h2>
      <Flow
        title="From a search to a click, in a fraction of a second"
        steps={[
          { title: "Someone searches", detail: "\"physiotherapist near me\"" },
          { title: "Eligible ads found", detail: "Keywords, targeting, budget, policy" },
          { title: "Ad Rank calculated", detail: "Bid, quality, assets, context" },
          { title: "Positions decided", detail: "Ads must also clear minimum thresholds" },
          { title: "Click priced", detail: "Usually below your max bid" },
        ]}
      />
      <p>
        Ad Rank is the score that decides whether your ad shows and where.
        Google lists the inputs as your bid, the quality of your ads and
        landing page, the Ad Rank thresholds for that search, how competitive
        the auction is, the context of the search (location, device, time,
        the words used) and the expected impact of ad assets such as
        sitelinks and callouts.
      </p>
      <p>
        The practical point: a relevant ad with a good landing page can beat
        a higher bid. Google earns money only when people click, so it
        prefers ads people are likely to click and be satisfied with.
      </p>

      <h2>What you actually pay</h2>
      <p>
        Your max CPC is a ceiling, not the price. Google charges the minimum
        needed to hold your position and ad format, given the Ad Rank of the
        ads around you. Here&apos;s a simplified illustration of why quality
        matters to cost.
      </p>
      <BarChart
        title="Two advertisers, same position target (simplified illustration)"
        bars={[
          { label: "Advertiser A: strong ad and page", value: 42, display: "₹42 per click", note: "lower bid needed" },
          { label: "Advertiser B: weak ad and page", value: 75, display: "₹75 per click", note: "pays more for the same spot" },
        ]}
        caption="Illustrative numbers, not a formula. Google doesn't publish the exact calculation, but better quality consistently lowers the cost of a given position."
      />

      <h2>Quality Score: a diagnostic, not a goal</h2>
      <p>
        Quality Score is a 1 to 10 rating Google shows per keyword. It&apos;s
        built from three parts, each rated below average, average or above
        average:
      </p>
      <table>
        <thead>
          <tr>
            <th>Component</th>
            <th>What it asks</th>
            <th>How to improve it</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Expected CTR</td>
            <td>Will people click this ad for this keyword?</td>
            <td>Put the search words in headlines; make a clear offer</td>
          </tr>
          <tr>
            <td>Ad relevance</td>
            <td>Does the ad match the intent of the search?</td>
            <td>Group keywords tightly so each ad fits its keywords</td>
          </tr>
          <tr>
            <td>Landing page experience</td>
            <td>Will the page give people what they came for?</td>
            <td>Match the page to the ad; make it fast and usable on mobile</td>
          </tr>
        </tbody>
      </table>
      <p>
        Google says Quality Score itself isn&apos;t an input in the auction.
        The auction uses real-time quality signals; Quality Score is a summary
        to help you find problems. So don&apos;t chase a 10. Use a below
        average rating on one component as a pointer to what to fix.
      </p>

      <h2>Match types in 2026</h2>
      <p>
        Match types control how closely a search has to match your keyword.
        They&apos;ve loosened over the years and now all three match on
        meaning, not only exact words.
      </p>
      <table>
        <thead>
          <tr>
            <th>Match type</th>
            <th>Written as</th>
            <th>Can show for</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Broad</td>
            <td>physiotherapy clinic</td>
            <td>Related searches, including ones without your words</td>
          </tr>
          <tr>
            <td>Phrase</td>
            <td>&quot;physiotherapy clinic&quot;</td>
            <td>Searches that include the meaning of the phrase</td>
          </tr>
          <tr>
            <td>Exact</td>
            <td>[physiotherapy clinic]</td>
            <td>Searches with the same meaning or intent</td>
          </tr>
        </tbody>
      </table>
      <p>
        Broad match works much better with Smart Bidding and good conversion
        data than it did years ago, because the bidding decides how much each
        loose match is worth. Without good tracking, broad match spends money
        on loosely related searches. My default for a new account with little
        data is phrase and exact, then test broad once conversions are flowing.
      </p>

      <h2>The search terms report and negatives</h2>
      <p>
        The search terms report shows the real searches that triggered your
        ads. Read it weekly at first. You&apos;ll find searches like
        &quot;physiotherapy course&quot; or &quot;physiotherapist salary&quot;
        eating budget for a clinic. Add those words as negative keywords and
        they stop triggering ads. A shared negative list for words like
        &quot;free&quot;, &quot;jobs&quot;, &quot;course&quot; and
        &quot;DIY&quot; saves money in almost every account.
      </p>

      <h2>A first campaign structure</h2>
      <ul>
        <li>One campaign per goal and location. Keep budgets separate where economics differ.</li>
        <li>Ad groups by theme: &quot;back pain physio&quot;, &quot;sports injury physio&quot;, &quot;home visit physio&quot;.</li>
        <li>One responsive search ad per ad group with up to 15 headlines and 4 descriptions. Include the theme words in several headlines.</li>
        <li>Sitelinks, callouts and a call asset. They take space and raise expected CTR.</li>
        <li>A landing page per theme where you can manage it.</li>
        <li>Start on Maximize conversions. Add a target CPA once you have a steady flow of conversions.</li>
      </ul>
      <Decision
        title="Search campaign health check"
        rows={[
          { question: "Search impression share lost to budget is high", answer: "Raise budget or narrow keywords", tone: "a" },
          { question: "Impression share lost to rank is high", answer: "Improve ads and page before raising bids", tone: "b" },
          { question: "Lots of irrelevant search terms", answer: "Add negatives, tighten match types", tone: "a" },
          { question: "Good CTR, poor conversion rate", answer: "Landing page problem (part 8)", tone: "b" },
        ]}
      />

      <h2>Where AI fits</h2>
      <p>
        Responsive search ads need many headline variations, and that&apos;s
        a task AI drafts well if you give it a{" "}
        <Link href="/blog/brand-voice-guide-ai-can-follow-2026">brand voice guide</Link>{" "}
        and the keyword theme. I also use a small script to cluster the
        search terms report and suggest negatives for a person to approve.
        Google&apos;s own AI Max and Performance Max features automate more
        of this inside the platform, but they still depend on the conversion
        data from part 3.
      </p>
      <p>
        Next:{" "}
        <Link href="/blog/meta-ads-account-structure-learning-phase">
          part 6, Meta ads and the learning phase
        </Link>
        .
      </p>
    </>
  ),
};
