import Link from "next/link";
import { Flow, LineChart, Matrix, Funnel } from "@/components/blog/figures";
import type { BlogPost } from "./types";

export const post: BlogPost = {
  slug: "ad-creative-testing-framework-hooks-angles-fatigue",
  title: "Ad creative testing: a framework for hooks, angles, formats and creative fatigue",
  description:
    "Part 7 of 10. Why creative is now the biggest lever in paid social, how to separate angles from executions, a simple testing framework, how to read hook and hold rates, and how to spot creative fatigue.",
  intro:
    "On Meta and other algorithm-driven platforms, creative now does most of the targeting, so it's the biggest lever you control. Test in layers. First test angles, the reason someone should care: price, a problem solved, social proof, a comparison. Then test executions of the winning angle: different hooks, formats and visuals. Judge video by hook rate (how many viewers get past the first three seconds) and hold rate (how many keep watching), then by CTR and CPA. Change one big thing per test and give each ad enough spend to produce meaningful conversions. Every ad eventually fatigues as the audience has seen it too often. Watch for rising frequency, falling CTR and rising CPA together, and have the next round of creative ready before that happens.",
  date: "2026-10-26",
  keywords: [
    "ad creative testing framework",
    "creative fatigue",
    "hook rate hold rate",
    "Meta creative testing",
    "ad angles",
  ],
  category: "Performance Marketing",
  readingMinutes: 9,
  series: { id: "performance-marketing", part: 7 },
  content: (
    <>
      <p>
        <Link href="/blog/meta-ads-account-structure-learning-phase">Part 6</Link>{" "}
        ended on the idea that with broad audiences, the creative does the
        targeting. This is where my copywriting background is most useful.
      </p>

      <h2>Angles vs executions</h2>
      <p>
        People often &quot;test creative&quot; by changing the background
        colour or swapping one stock photo for another. Those tests rarely
        move anything. The bigger difference is between angles.
      </p>
      <ul>
        <li>
          An angle is the reason to care: &quot;cheaper than the gym&quot;,
          &quot;fixes back pain from desk work&quot;, &quot;10,000 people in
          Srinagar already use it&quot;.
        </li>
        <li>
          An execution is how you show that angle: a founder video, a
          customer testimonial, a carousel, a static before-and-after.
        </li>
      </ul>
      <Matrix
        title="What to test first"
        xAxis={["Small change", "Big change"]}
        yAxis={["Low impact", "High impact"]}
        cells={[
          { title: "Hooks", detail: "First line or first 3 seconds. Small to make, often large effect.", highlight: true },
          { title: "Angles", detail: "The core reason to buy. Biggest swings in results.", highlight: true },
          { title: "Colours, fonts, button text", detail: "Easy to change, rarely matters on its own." },
          { title: "Format", detail: "Video vs static vs carousel. Worth testing once angles are known." },
        ]}
      />

      <h2>A simple testing framework</h2>
      <Flow
        title="Three rounds, each building on the last"
        steps={[
          { title: "Round 1: angles", detail: "3 to 5 angles, one simple execution each", human: true },
          { title: "Pick the winner", detail: "By CPA once each ad has enough data" },
          { title: "Round 2: hooks", detail: "4 to 6 openings for the winning angle", human: true },
          { title: "Round 3: formats", detail: "Video, static, carousel, UGC-style", human: true },
          { title: "Scale and refresh", detail: "Keep a new round in production" },
        ]}
      />
      <p>
        Keep it practical. You don&apos;t need a perfect experiment. Run new
        ads in one ad set with Meta&apos;s budget spread across them, or in a
        separate testing campaign if you want each ad to get a fair share of
        spend. Meta will push money to early winners, which is fine for
        finding a winner and less good for learning why it won.
      </p>
      <p>
        On sample size: AI can write 50 variations a minute, but your budget
        can only test a few properly. My post on{" "}
        <Link href="/blog/ab-testing-ai-ad-copy-sample-size-2026">
          A/B testing AI ad copy
        </Link>{" "}
        has the arithmetic.
      </p>

      <h2>Reading video ad metrics</h2>
      <p>
        For video, the funnel inside the ad tells you where it&apos;s losing
        people. Most ad managers let you build these as custom metrics.
      </p>
      <Funnel
        title="Inside one video ad (illustrative)"
        stages={[
          { label: "Impressions", value: 100000, display: "100,000" },
          { label: "Watched 3 seconds (hook rate 30%)", value: 30000, display: "30,000" },
          { label: "Watched 15 seconds or most of it (hold rate 25% of those)", value: 7500, display: "7,500" },
          { label: "Clicked (CTR 1.2% of impressions)", value: 1200, display: "1,200" },
        ]}
        caption="Example numbers. Hook rate = 3-second views ÷ impressions. Hold rate is often measured as ThruPlays or 15-second views ÷ 3-second views."
      />
      <ul>
        <li>Low hook rate: the opening isn&apos;t stopping the scroll. Change the first frame and first line.</li>
        <li>Good hook, low hold: the promise is interesting but the middle drags or wanders.</li>
        <li>Good hold, low CTR: people enjoyed it but weren&apos;t given a reason or a clear next step.</li>
        <li>Good CTR, poor CPA: the ad and the landing page don&apos;t match. That&apos;s part 8.</li>
      </ul>

      <h2>Creative fatigue</h2>
      <p>
        Every ad wears out. As more of the audience sees it, the people left
        are less interested and the people who&apos;ve seen it scroll past
        faster. You&apos;ll see frequency climb, CTR slide and CPA rise,
        usually together.
      </p>
      <LineChart
        title="What fatigue usually looks like (illustrative)"
        xLabel="Weeks since launch"
        yLabel="CTR %"
        xTicks={[1, 2, 3, 4, 5, 6, 7, 8]}
        yTicks={[0, 0.5, 1, 1.5, 2]}
        formatY="pct"
        series={[
          {
            label: "CTR",
            points: [
              [1, 1.6],
              [2, 1.7],
              [3, 1.6],
              [4, 1.4],
              [5, 1.15],
              [6, 0.95],
              [7, 0.8],
              [8, 0.7],
            ],
          },
        ]}
        marks={[{ x: 4, y: 1.4, label: "Start the next round here" }]}
        caption="Shape for illustration. Small audiences and high budgets fatigue faster. Large audiences can carry one ad for months."
      />
      <p>
        There isn&apos;t a universal frequency number that means
        &quot;fatigued&quot;. Compare each ad against its own first two weeks.
        A sustained 25 to 30% drop in CTR with rising frequency is a signal I
        act on.
      </p>

      <h2>Where AI helps, and where it doesn&apos;t</h2>
      <p>
        AI is a strong partner for creative volume: drafting hooks for each
        angle, rewriting a winning script for different audiences, generating
        static variations and turning customer reviews into angle ideas. It
        is weaker at picking the angle in the first place, because that comes
        from understanding customers. I wrote about this split in{" "}
        <Link href="/blog/ai-copywriting-where-it-works-2026">
          where AI copywriting works and where it fails
        </Link>
        . Read your reviews, sales calls and support tickets, and let AI
        help with the volume after that.
      </p>
      <p>
        Next:{" "}
        <Link href="/blog/landing-page-cro-paid-traffic-message-match">
          part 8, landing pages for paid traffic
        </Link>
        .
      </p>
    </>
  ),
};
