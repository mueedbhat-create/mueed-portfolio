import Link from "next/link";
import { BarChart, Flow } from "@/components/blog/figures";
import type { BlogPost } from "./types";

export const post: BlogPost = {
  slug: "ab-testing-ai-ad-copy-sample-size-2026",
  title: "A/B testing AI ad copy: how many variations, and how much traffic you need",
  description:
    "AI can write 50 ad variations in a minute, but your traffic can only test a few. How to calculate sample size, pick variations worth testing, and avoid false winners.",
  intro:
    "AI makes ad variations cheap, but testing them isn't. Each variation needs enough impressions to tell a real difference from noise, and the smaller the difference you want to detect, the more traffic you need. A useful rule of thumb for 80% power at 95% confidence is about 16 × p × (1 − p) ÷ d² impressions per variation, where p is your baseline rate and d is the absolute difference you want to detect. At a 2% CTR, spotting a 20% relative lift (2.0% to 2.4%) takes about 19,600 impressions per variation. Spotting a 10% lift takes about 78,400. So most accounts should test two to four clearly different angles at a time, not fifty small rewrites. Use AI to generate many options, cut them down by hand to a few that test different ideas, decide the sample size before launching, and don't call a winner early just because one variation is ahead on day two.",
  date: "2026-09-24",
  keywords: [
    "A/B testing ad copy",
    "AI ad copy testing",
    "ad test sample size",
    "how many ad variations to test",
  ],
  category: "Performance Marketing",
  readingMinutes: 6,
  content: (
    <>
      <h2>The problem with fifty variations</h2>
      <p>
        Ask a model for ad headlines and you&apos;ll get fifty in a minute. The
        temptation is to put them all live and let the platform sort it out.
        The trouble is that your budget buys a fixed number of impressions, and
        splitting them fifty ways means no single variation gets enough data to
        prove anything. You end up with a &quot;winner&quot; that was just
        lucky that week.
      </p>

      <h2>How much traffic a test needs</h2>
      <p>
        A common rule of thumb (often called Lehr&apos;s rule) gives the sample
        size per variation for 80% power at a 5% significance level:
      </p>
      <blockquote>n ≈ 16 × p × (1 − p) ÷ d²</blockquote>
      <p>
        Here p is your current rate (CTR or conversion rate) and d is the
        absolute difference you want to be able to detect. Small differences
        need a lot more traffic, because d is squared.
      </p>
      <BarChart
        title="Impressions needed per variation at a 2% baseline CTR"
        max={80000}
        bars={[
          { label: "Detect +50% lift", note: "2.0% → 3.0%", value: 3136, display: "~3,100" },
          { label: "Detect +30% lift", note: "2.0% → 2.6%", value: 8711, display: "~8,700" },
          { label: "Detect +20% lift", note: "2.0% → 2.4%", value: 19600, display: "~19,600" },
          { label: "Detect +10% lift", note: "2.0% → 2.2%", value: 78400, display: "~78,400" },
        ]}
        caption="Calculated with n ≈ 16 × p(1 − p) ÷ d². Halving the lift you want to detect roughly quadruples the traffic you need."
      />
      <p>
        Multiply by the number of variations to get the total. Four variations
        aiming to detect a 20% lift need roughly 78,000 impressions between
        them. If your campaign gets 20,000 impressions a week, that test takes
        about four weeks, and fifty variations would take about a year.
      </p>

      <h2>Pick variations that test ideas, not words</h2>
      <p>
        Because traffic is limited, each variation should test a different
        idea. Small wording changes produce small differences, and small
        differences are the expensive ones to detect. Big differences in angle
        are cheaper to test and teach you more.
      </p>
      <table>
        <thead>
          <tr>
            <th>Weak test (word swaps)</th>
            <th>Strong test (different angles)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>&quot;Save time with AI&quot; vs &quot;Save hours with AI&quot;</td>
            <td>Time saved vs money saved vs fewer mistakes</td>
          </tr>
          <tr>
            <td>Same offer, three button colors</td>
            <td>Free audit vs free template vs live demo</td>
          </tr>
          <tr>
            <td>Same hook, different emoji</td>
            <td>Problem-first hook vs result-first hook</td>
          </tr>
        </tbody>
      </table>

      <h2>A testing loop that uses AI properly</h2>
      <Flow
        title="Generate wide, test narrow"
        steps={[
          { title: "Generate", detail: "AI writes 30 to 50 options across angles" },
          { title: "Cluster + cut", detail: "Group by angle, keep the best of each", human: true },
          { title: "Size the test", detail: "Pick the lift to detect, compute n" },
          { title: "Run to n", detail: "No peeking, no early winners" },
          { title: "Feed back", detail: "Winning angle shapes the next brief", human: true },
        ]}
      />
      <ol>
        <li>
          Generate wide. Ask the model for options across several distinct
          angles, not one angle reworded fifty times. Give it the brief, the
          audience and the one promise, as in my{" "}
          <Link href="/blog/ai-copywriting-where-it-works-2026">
            AI copywriting workflow
          </Link>
          .
        </li>
        <li>
          Cut by hand. Group the options by the idea behind them and keep the
          strongest one from each group. Two to four is usually right.
        </li>
        <li>
          Size the test before launch. Decide the smallest lift that would
          change what you do, then work out the impressions needed.
        </li>
        <li>
          Run until you reach that number. Checking daily and stopping when one
          version pulls ahead is the most common way to crown a false winner.
        </li>
        <li>
          Feed the result back. The winning angle goes into the next brief,
          and the next round tests variations within it.
        </li>
      </ol>

      <h2>When CTR isn&apos;t the right thing to test</h2>
      <p>
        A higher CTR only helps if the extra clicks convert. A clickbait
        headline can win on CTR and lose on cost per acquisition. If you have
        enough conversions, judge the test on CPA or conversion rate. If you
        don&apos;t, use CTR to pick a direction and confirm it later on
        conversions. My{" "}
        <Link href="/blog/performance-marketing-metrics-ctr-cpa-roas-2026">
          performance marketing metrics guide
        </Link>{" "}
        explains how those numbers connect.
      </p>
      <p>
        I set up tests like this for clients at{" "}
        <a href="https://www.anarchylabs.in/team/mueed-nazir-bhat">Anarchy Labs</a>.{" "}
        <Link href="/services/performance-marketing">See performance marketing services</Link>{" "}
        or <Link href="/#contact">get in touch</Link>.
      </p>
    </>
  ),
};
