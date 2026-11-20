import Link from "next/link";
import { Flow, LineChart, Decision, Lanes } from "@/components/blog/figures";
import type { BlogPost } from "./types";

export const post: BlogPost = {
  slug: "meta-ads-account-structure-learning-phase",
  title: "Meta ads explained: account structure, broad targeting and the learning phase",
  description:
    "Part 6 of 10. How Meta's ad delivery works, how to structure campaigns and ad sets, why broad targeting often beats detailed interests now, what the learning phase is and how to stop resetting it.",
  intro:
    "Meta ads are organized in three levels: campaigns set the objective, ad sets set budget, audience and optimization event, and ads hold the creative. Delivery is decided by Meta's algorithm, which shows each ad to the people it predicts are most likely to take the action you optimize for. That makes your conversion data and your creative more important than detailed interest targeting, so most accounts now do better with broad audiences and fewer, larger ad sets. Each new or significantly edited ad set enters a learning phase while the system gathers data, and Meta says it needs roughly 50 optimization events in a week to exit. Consolidate budgets so ad sets can reach that, and avoid frequent edits that restart learning.",
  date: "2026-10-17",
  keywords: [
    "Meta ads learning phase",
    "Facebook ads campaign structure",
    "broad targeting Meta",
    "Advantage+ campaigns",
    "Meta ads for beginners",
  ],
  category: "Performance Marketing",
  readingMinutes: 9,
  series: { id: "performance-marketing", part: 6 },
  content: (
    <>
      <p>
        <Link href="/blog/google-search-ads-auction-quality-score-explained">Part 5</Link>{" "}
        covered Google, where people tell you what they want. Meta works the
        other way around. Nobody opens Instagram to look for an ad, so the
        platform has to guess who might care. Your job is to give that guess
        the best inputs.
      </p>

      <h2>The three levels</h2>
      <Lanes
        title="How a Meta ad account is organized"
        lanes={[
          {
            label: "What each level controls",
            steps: [
              { title: "Campaign", detail: "Objective: sales, leads, traffic, awareness" },
              { title: "Ad set", detail: "Budget, audience, placements, optimization event", human: true },
              { title: "Ad", detail: "Creative, copy, link, call to action", human: true },
            ],
          },
        ]}
        caption="Budget can sit at campaign level (Advantage campaign budget) or ad set level. Either way, delivery decisions happen inside the ad set."
      />

      <h2>How Meta decides who sees your ad</h2>
      <p>
        Meta runs an auction for each ad slot. Its own description of the
        winner is the ad with the highest total value, which combines three
        things: your bid, the estimated action rate (how likely this person is
        to do what you&apos;re optimizing for), and ad quality.
      </p>
      <p>
        Estimated action rate is where the algorithm earns its keep. It looks
        at everyone who converted on your ads, everything they did on Meta&apos;s
        apps, and the creative itself, then predicts who else is likely to
        convert. That&apos;s why tracking (part 3) matters so much here. Feed
        it purchases and it finds purchasers. Feed it link clicks and it finds
        people who click on everything.
      </p>

      <h2>Why broad targeting usually wins now</h2>
      <p>
        A few years ago, Meta ads were built around detailed interest
        targeting: &quot;women, 25 to 40, interested in yoga and organic
        food&quot;. Two things changed. Privacy changes such as Apple&apos;s
        App Tracking Transparency reduced the data behind those interests, and
        Meta&apos;s prediction models got better at finding buyers on their
        own. Meta now treats many detailed targeting choices as suggestions
        it can expand beyond.
      </p>
      <p>
        In practice, the creative now does the targeting. An ad that opens
        with &quot;For new mums who can&apos;t find 20 minutes to work
        out&quot; reaches new mums, because they&apos;re the ones who stop
        and engage, and the algorithm learns from that.
      </p>
      <Decision
        title="When to narrow the audience"
        rows={[
          { question: "Product sold everywhere you deliver, broad appeal", answer: "Broad: age, gender and location only", tone: "a" },
          { question: "Service only in one city", answer: "Location radius, otherwise broad", tone: "a" },
          { question: "Legal or policy limits (age, region)", answer: "Narrow as required", tone: "b" },
          { question: "Very small budget, very niche B2B product", answer: "Test interests or lookalikes against broad", tone: "both" },
          { question: "Existing customers you want to exclude", answer: "Add a customer list exclusion", tone: "b" },
        ]}
      />

      <h2>The learning phase</h2>
      <p>
        When an ad set is new or you make a significant edit, it enters the
        learning phase. Delivery is less stable and CPA is usually higher
        while the system explores. Meta says an ad set generally needs about
        50 optimization events within a week after its last significant edit
        to exit learning. If it can&apos;t get there, it shows &quot;learning
        limited&quot;.
      </p>
      <LineChart
        title="Typical CPA pattern for a new ad set (illustrative)"
        xLabel="Days since launch"
        yLabel="CPA (₹)"
        xTicks={[1, 3, 5, 7, 9, 11, 13]}
        yTicks={[0, 300, 600, 900, 1200]}
        series={[
          {
            label: "Daily CPA",
            points: [
              [1, 1100],
              [2, 950],
              [3, 870],
              [4, 760],
              [5, 690],
              [6, 640],
              [7, 600],
              [8, 560],
              [9, 540],
              [10, 550],
              [11, 530],
              [12, 540],
              [13, 535],
            ],
          },
        ]}
        marks={[{ x: 8, y: 560, label: "~50 conversions: exits learning" }]}
        caption="Shape for illustration, not real account data. Real curves are noisier. The point is to judge after learning, not during it."
      />
      <p>
        Edits that commonly restart learning include changing the
        optimization event, making large budget changes, changing the
        audience or targeting, adding new creative, and pausing for a long
        time. Small budget increases usually don&apos;t.
      </p>

      <h2>The budget arithmetic</h2>
      <p>
        Fifty conversions a week is the number that should shape your
        structure. Multiply it by your expected CPA and you get the weekly
        budget one ad set needs.
      </p>
      <Flow
        title="How many ad sets can your budget support?"
        steps={[
          { title: "Expected CPA", detail: "e.g. ₹500 per purchase" },
          { title: "× 50 per week", detail: "= ₹25,000 per ad set per week" },
          { title: "Your weekly budget", detail: "e.g. ₹35,000" },
          { title: "Result", detail: "Room for one ad set optimizing for purchases", human: true },
        ]}
        caption="If your budget can't reach 50 purchases, optimize for an event that happens more often, such as add to cart or initiate checkout, and accept a less precise signal."
      />
      <p>
        This is why I keep new accounts simple: one campaign, one or two ad
        sets, several ads. Ten ad sets at ₹500 a day each never learn
        anything.
      </p>

      <h2>Advantage+ and automation</h2>
      <p>
        Meta&apos;s Advantage+ campaigns hand more decisions to the
        algorithm: audience, placements, sometimes creative variations. They
        often perform well for ecommerce with good conversion data. They also
        give you less to steer with, so make sure you can still exclude
        existing customers where you need to and that you know how much of the
        spend goes to people who already bought from you.
      </p>

      <h2>Lead ads: a warning</h2>
      <p>
        Meta&apos;s instant forms pre-fill people&apos;s details, which makes
        leads cheap and often low quality. Two settings help: choose the
        &quot;higher intent&quot; form type, which adds a review step, and add
        one qualifying question. Then send lead quality back to Meta through
        the Conversions API so it learns which leads became customers. My{" "}
        <Link href="/blog/n8n-ai-lead-qualification-workflow-2026">
          n8n lead qualification workflow
        </Link>{" "}
        scores each lead, and that score can be sent back as a conversion.
      </p>
      <p>
        With a broad audience and few ad sets, creative becomes the main
        thing you control. That&apos;s{" "}
        <Link href="/blog/ad-creative-testing-framework-hooks-angles-fatigue">
          part 7: creative testing
        </Link>
        .
      </p>
    </>
  ),
};
