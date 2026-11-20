import Link from "next/link";
import { BarChart, Lanes, Decision, StackBar, Flow } from "@/components/blog/figures";
import type { BlogPost } from "./types";

export const post: BlogPost = {
  slug: "incrementality-testing-mmm-mer-measurement",
  title: "Incrementality, MMM and MER: measuring what your ads really caused",
  description:
    "Part 10 of 10. Why attributed conversions aren't the same as caused conversions, how holdout and geo tests measure incrementality, what marketing mix modelling does, how to use MER, and a weekly operating rhythm that ties the series together.",
  intro:
    "Ad platforms report conversions that happened after someone saw or clicked an ad. Some of those people would have bought anyway, so attributed conversions overstate what ads caused. Incrementality is the share that ads truly added. You measure it with experiments: hold back ads from a random group of people or a set of regions, compare them with the group that saw ads, and the difference is the lift. Marketing mix modelling (MMM) estimates each channel's contribution from historical spend and sales data, and is useful once you spend across several channels for a year or more. MER (total revenue divided by total marketing spend) is a simple business-level check that no platform can inflate. Use experiments to calibrate the platforms, MER to watch the whole business, and platform reports for day-to-day steering.",
  date: "2026-11-14",
  keywords: [
    "incrementality testing",
    "marketing mix modelling",
    "MER marketing efficiency ratio",
    "geo holdout test",
    "conversion lift study",
  ],
  category: "Performance Marketing",
  readingMinutes: 10,
  series: { id: "performance-marketing", part: 10 },
  content: (
    <>
      <p>
        This is the last part of the series, and the one that complicates the
        others. Parts 1 to 9 relied on reported conversions. This part asks
        how many of those conversions the ads caused.
      </p>

      <h2>Attributed is not the same as caused</h2>
      <p>
        Picture a returning customer who was going to reorder this week. They
        see a retargeting ad on Instagram, then buy. Meta reports a
        conversion. Google might report one too if they searched your brand
        name first. The business got one order it would have got anyway, and
        two platforms each claimed it.
      </p>
      <StackBar
        title="100 conversions reported by a retargeting campaign (illustrative)"
        parts={[
          { label: "Caused by the ads (incremental)", value: 30, display: "30" },
          { label: "Would have happened anyway", value: 70, display: "70" },
        ]}
        caption="Example split. Retargeting and branded search often have low incrementality; prospecting to new audiences tends to have more. Only a test tells you your own numbers."
      />
      <p>
        This is why the retargeting campaign with the best ROAS in the account
        can be the one you&apos;d lose least by switching off. Its high ROAS
        comes from being close to purchases, not from causing them.
      </p>

      <h2>Three ways to measure, and when to use each</h2>
      <Lanes
        title="Measurement methods, from simplest to most involved"
        lanes={[
          {
            label: "MER: a business-level check",
            steps: [
              { title: "Total revenue", detail: "From your store or CRM, not the ad platforms" },
              { title: "÷ total marketing spend", detail: "All channels, fees included" },
              { title: "Track weekly", detail: "Watch the trend as spend changes", human: true },
            ],
          },
          {
            label: "Incrementality experiments",
            steps: [
              { title: "Split people or regions", detail: "Random test and control groups" },
              { title: "Ads off for control", detail: "Everything else the same" },
              { title: "Compare outcomes", detail: "The difference is the lift", human: true },
            ],
          },
          {
            label: "Marketing mix modelling",
            steps: [
              { title: "Collect history", detail: "Weekly spend, sales, prices, seasons" },
              { title: "Fit a model", detail: "e.g. Meta's Robyn or Google's Meridian" },
              { title: "Read contributions", detail: "Calibrate with experiments", human: true },
            ],
          },
        ]}
      />

      <h2>MER: the number no platform can inflate</h2>
      <p>
        MER (marketing efficiency ratio, sometimes called blended ROAS) is
        total revenue divided by total marketing spend. It ignores
        attribution entirely, which is its strength. If you raise Meta spend by
        40% and MER drops while total revenue barely moves, the extra spend
        mostly bought conversions Meta is claiming but didn&apos;t cause. If
        total revenue rises in line, it&apos;s working.
      </p>
      <p>
        MER is a check, not a steering wheel. It can&apos;t tell you which
        campaign to change. It tells you whether the sum of all your decisions
        is working.
      </p>

      <h2>Holdout and geo experiments</h2>
      <p>
        The cleanest way to measure what ads cause is to stop showing them to
        some people and compare. Meta offers conversion lift studies and
        Google offers conversion lift and other experiments in some accounts.
        You can also run a geo test yourself, which works for any channel.
      </p>
      <Flow
        title="A simple geo holdout test"
        steps={[
          { title: "Pick matched regions", detail: "Similar size and past sales trends", human: true },
          { title: "Split into test and control", detail: "Randomly, not by choice" },
          { title: "Pause the channel in control", detail: "For 3 to 6 weeks" },
          { title: "Compare sales", detail: "Test vs control, adjusted for the pre-period" },
          { title: "Calculate lift and true CPA", detail: "Extra sales ÷ spend in test regions", human: true },
        ]}
        caption="Use enough regions and a long enough window for the difference to stand out from normal week-to-week noise."
      />
      <BarChart
        title="Reading a geo test (illustrative)"
        bars={[
          { label: "Platform-reported CPA", value: 500, display: "₹500" },
          { label: "Incremental CPA from the test", value: 1100, display: "₹1,100" },
        ]}
        caption="If incremental CPA is double the reported CPA, the platform is claiming about twice what it causes. Use that ratio to adjust targets for that channel."
      />
      <p>
        That ratio is the practical output. If Meta&apos;s reported CPA is
        ₹500 but its incremental CPA is ₹1,100, set your in-platform target
        knowing that each reported conversion is worth roughly half a real
        one. Re-run the test every few months or after big changes.
      </p>

      <h2>Marketing mix modelling</h2>
      <p>
        MMM uses statistics on your historical data (weekly spend per
        channel, sales, prices, promotions, seasons) to estimate how much each
        channel contributes and where its returns flatten. Open-source tools
        such as Meta&apos;s Robyn and Google&apos;s Meridian have made it
        reachable for smaller teams. It still needs enough history and enough
        variation in spend to tell channels apart, and its results are
        estimates with wide uncertainty. Experiments are the best way to check
        whether a model is believable.
      </p>
      <Decision
        title="Which method fits your stage"
        rows={[
          { question: "One channel, under a year of data", answer: "MER + one holdout test", tone: "a" },
          { question: "Two or three channels, steady spend", answer: "MER + regular geo or lift tests", tone: "both" },
          { question: "Many channels, offline sales, 2+ years of data", answer: "MMM calibrated with experiments", tone: "b" },
        ]}
      />

      <h2>Putting the whole series together: a weekly rhythm</h2>
      <p>
        Here&apos;s how the ten parts become a working routine.
      </p>
      <table>
        <thead>
          <tr>
            <th>When</th>
            <th>What</th>
            <th>Series part</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Daily (5 minutes)</td>
            <td>Spend pacing, tracking health, anything broken</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Weekly</td>
            <td>CPA vs target, creative fatigue, search terms, new tests</td>
            <td>5, 6, 7</td>
          </tr>
          <tr>
            <td>Weekly</td>
            <td>MER and blended CAC against break-even</td>
            <td>2, 10</td>
          </tr>
          <tr>
            <td>Every budget change</td>
            <td>Marginal CPA of the step</td>
            <td>9</td>
          </tr>
          <tr>
            <td>Monthly</td>
            <td>Landing page tests, channel mix, budget split</td>
            <td>4, 8</td>
          </tr>
          <tr>
            <td>Quarterly</td>
            <td>Refresh unit economics; run or repeat an incrementality test</td>
            <td>2, 10</td>
          </tr>
        </tbody>
      </table>
      <p>
        Most of the daily and weekly checks can be automated into a single
        report that flags what needs a person. That&apos;s the core of how I
        work: the{" "}
        <Link href="/blog/what-is-ai-automation-performance-marketing">
          AI automation and performance marketing
        </Link>{" "}
        overlap is mostly about letting machines gather and check the numbers
        so people have more time for the decisions in this series.
      </p>
      <p>
        If you started at part 1, thanks for reading all ten. If you want help
        applying them to your own account, see my{" "}
        <Link href="/services/performance-marketing">performance marketing services</Link>{" "}
        or <Link href="/#contact">get in touch</Link>. The series starts again{" "}
        <Link href="/blog/what-is-performance-marketing-beginners-guide">here</Link>.
      </p>
    </>
  ),
};
