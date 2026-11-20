import Link from "next/link";
import { Matrix, Decision, StackBar } from "@/components/blog/figures";
import type { BlogPost } from "./types";

export const post: BlogPost = {
  slug: "choosing-performance-marketing-channels-intent-vs-demand",
  title: "Choosing performance marketing channels: capturing demand vs creating it",
  description:
    "Part 4 of 10. How to pick between Google Search, Shopping, Meta, YouTube, LinkedIn and marketplaces, the difference between demand capture and demand creation, and how to split a first budget.",
  intro:
    "Every ad channel either captures demand that already exists or creates demand that doesn't exist yet. Search and shopping ads capture it: someone types what they want and you show up. Social, video and display create it: you interrupt someone who wasn't looking and give them a reason to want something. Capture converts better but runs out, because only so many people search each month. Creation scales further but takes longer and looks worse in last-click reports. Start where your buyers already look, usually search for known needs and Meta for visual or impulse products, prove the unit economics on one channel, then add a second channel that creates the demand the first one captures.",
  date: "2026-10-02",
  keywords: [
    "performance marketing channels",
    "demand capture vs demand creation",
    "Google ads vs Meta ads",
    "which ad platform should I use",
  ],
  category: "Performance Marketing",
  readingMinutes: 8,
  series: { id: "performance-marketing", part: 4 },
  content: (
    <>
      <p>
        By now you know what you can pay for a customer (
        <Link href="/blog/performance-marketing-unit-economics-cac-ltv-break-even">part 2</Link>
        ) and you can count them (
        <Link href="/blog/conversion-tracking-setup-pixel-capi-utm-ga4">part 3</Link>
        ). The next question is where to spend. Most people pick a channel
        because a friend had luck with it. A better starting point is to ask
        how your buyers behave before they buy.
      </p>

      <h2>Capture vs creation</h2>
      <p>
        Someone searching &quot;best running shoes for flat feet&quot; already
        has the need. Your job is to be the answer they pick. That&apos;s
        demand capture. Someone scrolling Instagram had no plan to buy
        running shoes today. If your ad changes that, you&apos;ve created
        demand.
      </p>
      <Matrix
        title="Where each channel sits"
        xAxis={["Reaches few people", "Reaches many people"]}
        yAxis={["Low buying intent", "High buying intent"]}
        cells={[
          {
            title: "Search, shopping, marketplaces",
            detail: "Google Search, Google Shopping, Amazon and Flipkart ads. Best conversion rates, limited volume.",
            highlight: true,
          },
          {
            title: "Retargeting and branded search",
            detail: "People who already know you. Cheap and efficient, but mostly harvests demand other channels made.",
          },
          {
            title: "LinkedIn, niche communities",
            detail: "Precise B2B targeting by job title and company. Expensive per click, small audiences.",
          },
          {
            title: "Meta, YouTube, TikTok-style video, display",
            detail: "Huge reach and strong algorithms. Creates demand, needs good creative, slower to prove.",
            highlight: true,
          },
        ]}
        caption="Simplified. Meta can capture demand well for impulse products, and Google's Performance Max and Demand Gen campaigns reach into creation."
      />

      <h2>The trap in high-intent channels</h2>
      <p>
        Search and retargeting almost always look best in a report. They sit
        right before the purchase, so they get credit for it. The trouble is
        that some of those buyers would have found you anyway. Retargeting is
        the extreme case: you pay to show an ad to someone who was already on
        your checkout page.
      </p>
      <p>
        A common mistake is to cut prospecting on Meta
        because its CPA looks high, keep the &quot;efficient&quot;
        retargeting and branded search, and then see every channel decline
        over the following weeks, because the retargeting pool was filled by
        the prospecting that got cut. Part 10 explains how to test for this properly.
      </p>

      <h2>A quick guide to the main channels</h2>
      <table>
        <thead>
          <tr>
            <th>Channel</th>
            <th>Best for</th>
            <th>Watch out for</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Google Search</td>
            <td>Services, B2B, anything people search for by name or problem</td>
            <td>Rising CPCs in competitive categories; limited by search volume</td>
          </tr>
          <tr>
            <td>Google Shopping / Performance Max</td>
            <td>Ecommerce with a clean product feed</td>
            <td>Less control and visibility into where ads show</td>
          </tr>
          <tr>
            <td>Meta (Facebook, Instagram)</td>
            <td>Visual products, impulse buys, local businesses, lead forms</td>
            <td>Creative wears out quickly; lead quality on instant forms</td>
          </tr>
          <tr>
            <td>YouTube</td>
            <td>Products that need explaining or showing</td>
            <td>Harder to see direct conversions; needs video assets</td>
          </tr>
          <tr>
            <td>LinkedIn</td>
            <td>B2B with a high deal value</td>
            <td>High cost per click; small audiences fatigue fast</td>
          </tr>
          <tr>
            <td>Marketplace ads (Amazon, Flipkart)</td>
            <td>Brands already selling on the marketplace</td>
            <td>Fees and ad costs stacking up on thin margins</td>
          </tr>
        </tbody>
      </table>

      <h2>Picking your first channel</h2>
      <Decision
        title="Where I'd start"
        rows={[
          { question: "People search for what you sell by name or problem", answer: "Google Search", tone: "a" },
          { question: "Ecommerce with good product photos and a feed", answer: "Google Shopping + Meta", tone: "both" },
          { question: "Visual, giftable or impulse product", answer: "Meta", tone: "b" },
          { question: "Local service: clinic, salon, real estate", answer: "Google Search + Meta lead ads", tone: "both" },
          { question: "B2B, deal size above ₹5 lakh", answer: "Google Search + LinkedIn", tone: "both" },
          { question: "New category nobody searches for yet", answer: "Meta or YouTube", tone: "b" },
        ]}
        caption="Starting points, not rules. Run one channel well before adding a second."
      />

      <h2>Splitting a first budget</h2>
      <p>
        With a small budget, spreading thin is the most common mistake. Each
        platform needs enough conversions to learn, so ₹30,000 a month split
        across four channels usually means four channels that never get out of
        the learning phase. A split I&apos;d suggest for a business that has
        proven one channel and wants a second:
      </p>
      <StackBar
        title="A starting split once channel one works (example)"
        parts={[
          { label: "Proven channel", value: 70, display: "70%" },
          { label: "Second channel (test)", value: 20, display: "20%" },
          { label: "Experiments", value: 10, display: "10%" },
        ]}
        caption="The 10% is for new audiences, formats or a third channel. Kill experiments fast, promote winners slowly."
      />
      <p>
        Judge the second channel against its own goals for the first month or
        two. A creation channel may show a weaker CPA while lifting branded
        searches and direct visits. Watch your total new customers and blended
        CAC, not just each channel&apos;s own report.
      </p>

      <h2>What to watch across channels</h2>
      <ul>
        <li>Blended CAC: total ad spend divided by total new customers</li>
        <li>Branded search volume: a sign creation channels are working</li>
        <li>New vs returning customer share in each channel</li>
        <li>Each channel&apos;s CPA against your target from part 2</li>
      </ul>
      <p>
        The next two parts go inside the two biggest platforms.{" "}
        <Link href="/blog/google-search-ads-auction-quality-score-explained">
          Part 5 covers how the Google Search auction works
        </Link>
        , and part 6 covers Meta.
      </p>
    </>
  ),
};
