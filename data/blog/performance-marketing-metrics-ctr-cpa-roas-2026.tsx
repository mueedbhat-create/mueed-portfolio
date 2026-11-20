import Link from "next/link";
import { Funnel, Flow } from "@/components/blog/figures";
import type { BlogPost } from "./types";

export const post: BlogPost = {
  slug: "performance-marketing-metrics-ctr-cpa-roas-2026",
  title: "Performance marketing metrics explained: CTR, CPC, CPA and ROAS (and how they connect)",
  description:
    "What CTR, CPC, conversion rate, CPA and ROAS measure, the formula for each, how they chain together, and which one to fix first when a campaign underperforms.",
  intro:
    "Performance marketing runs on five connected numbers. CTR (click-through rate) is clicks divided by impressions and tells you whether the ad earns attention. CPC (cost per click) is spend divided by clicks. Conversion rate is conversions divided by clicks and tells you whether the landing page and offer do their job. CPA (cost per acquisition) is spend divided by conversions, which works out to CPC divided by conversion rate. ROAS (return on ad spend) is revenue divided by spend. They form a chain, so a problem at one step shows up in every number after it. A weak ad lowers CTR, which usually raises CPC, which raises CPA and lowers ROAS, even when the landing page is fine. When a campaign underperforms, walk the chain from the top and fix the first broken link rather than the last number on the report. ROAS also needs context: a ROAS of 3 can lose money if your margin is thin, so work out your break-even ROAS before you judge a campaign.",
  date: "2026-09-09",
  keywords: [
    "performance marketing metrics",
    "CTR CPC CPA ROAS",
    "how to calculate ROAS",
    "break-even ROAS",
  ],
  category: "Performance Marketing",
  readingMinutes: 7,
  content: (
    <>
      <h2>The five numbers and what each one tells you</h2>
      <table>
        <thead>
          <tr>
            <th>Metric</th>
            <th>Formula</th>
            <th>What it tells you</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CTR</td>
            <td>Clicks ÷ Impressions</td>
            <td>Does the ad earn attention from the people who see it?</td>
          </tr>
          <tr>
            <td>CPC</td>
            <td>Spend ÷ Clicks</td>
            <td>What you pay for each visit</td>
          </tr>
          <tr>
            <td>Conversion rate</td>
            <td>Conversions ÷ Clicks</td>
            <td>Do the landing page and offer turn visits into action?</td>
          </tr>
          <tr>
            <td>CPA</td>
            <td>Spend ÷ Conversions (= CPC ÷ CVR)</td>
            <td>What one customer or lead costs you</td>
          </tr>
          <tr>
            <td>ROAS</td>
            <td>Revenue ÷ Spend</td>
            <td>How much revenue each unit of spend brings back</td>
          </tr>
        </tbody>
      </table>

      <h2>How the metrics chain together</h2>
      <p>
        These aren&apos;t five separate scores. Each one feeds the next, which
        is why a single weak step drags down everything after it. Here is a
        made-up campaign to show the arithmetic.
      </p>
      <Funnel
        title="Worked example: one month, ₹50,000 spend"
        stages={[
          { label: "Impressions", value: 200000, display: "200,000" },
          { label: "Clicks at 1.5% CTR", value: 3000, display: "3,000" },
          { label: "Conversions at 4% conversion rate", value: 120, display: "120" },
        ]}
        caption="Illustrative numbers, not client data. Bar widths are not to scale below the first row so the labels stay readable."
      />
      <p>From those three rows you get everything else:</p>
      <ul>
        <li>CPC = ₹50,000 ÷ 3,000 clicks = about ₹16.7</li>
        <li>CPA = ₹50,000 ÷ 120 conversions = about ₹417 (or ₹16.7 ÷ 0.04)</li>
        <li>
          If each conversion is worth ₹1,500 in revenue, revenue is ₹1,80,000
          and ROAS = 1,80,000 ÷ 50,000 = 3.6
        </li>
      </ul>
      <p>
        Now say a tired creative drops CTR from 1.5% to 1%. With the same spend
        you get 2,000 clicks, and at the same 4% conversion rate that&apos;s 80
        conversions. CPA rises to ₹625 and ROAS falls to 2.4. The landing page
        didn&apos;t change at all, yet the bottom of the report looks like it
        broke.
      </p>

      <h2>Which metric to fix first</h2>
      <Flow
        title="Walk the chain from the top"
        steps={[
          { title: "CTR low?", detail: "Fix the ad: hook, creative, targeting" },
          { title: "CPC high?", detail: "Check targeting, competition, quality" },
          { title: "CVR low?", detail: "Fix the page and offer" },
          { title: "CPA high?", detail: "Usually a symptom of the steps above" },
          { title: "ROAS low?", detail: "Check order value and margin last" },
        ]}
        caption="Fix the first broken link. Optimizing ROAS directly while CTR is the real problem wastes a month."
      />
      <p>
        When a campaign underperforms, start at the top. If CTR is low, the ad
        isn&apos;t earning attention, so test new hooks and creative or tighten
        the audience. If CTR is fine but conversion rate is low, the problem is
        after the click: the page, the offer, the form or a mismatch between
        what the ad promised and what the page delivers. CPA and ROAS mostly
        reflect what happened in those earlier steps.
      </p>

      <h2>Break-even ROAS: the number most reports skip</h2>
      <p>
        A ROAS of 3 sounds healthy, but whether it makes money depends on your
        margin. Break-even ROAS is 1 divided by your gross margin. With a 40%
        margin, break-even ROAS is 2.5, so a ROAS of 3 is profitable. With a
        25% margin, break-even is 4, and the same ROAS of 3 loses money on
        every sale. Work this out once per product line and put it at the top
        of the report so nobody celebrates the wrong number.
      </p>
      <table>
        <thead>
          <tr>
            <th>Gross margin</th>
            <th>Break-even ROAS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>60%</td>
            <td>1.67</td>
          </tr>
          <tr>
            <td>40%</td>
            <td>2.5</td>
          </tr>
          <tr>
            <td>25%</td>
            <td>4</td>
          </tr>
          <tr>
            <td>20%</td>
            <td>5</td>
          </tr>
        </tbody>
      </table>

      <h2>Where AI fits in</h2>
      <p>
        AI is useful at two points in this chain. At the top, it generates many
        ad variations quickly, which helps when CTR is the weak link (my post
        on{" "}
        <Link href="/blog/ab-testing-ai-ad-copy-sample-size-2026">
          A/B testing AI ad copy
        </Link>{" "}
        covers how to test them without fooling yourself). At the end, an
        automated weekly report can pull these five numbers from your ad
        platforms and flag the first broken link, which is one of the{" "}
        <Link href="/blog/5-marketing-tasks-automate-ai-this-week-2026">
          five tasks I&apos;d automate first
        </Link>
        . The judgment about what to change still sits with you.
      </p>
      <p>
        I run campaigns against these numbers at{" "}
        <a href="https://www.anarchylabs.in/team/mueed-nazir-bhat">Anarchy Labs</a>.{" "}
        <Link href="/services/performance-marketing">See performance marketing services</Link>{" "}
        or <Link href="/#contact">send me a campaign to review</Link>.
      </p>
    </>
  ),
};
