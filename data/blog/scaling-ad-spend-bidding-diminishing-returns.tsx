import Link from "next/link";
import { LineChart, BarChart, Decision, Lanes } from "@/components/blog/figures";
import type { BlogPost } from "./types";

export const post: BlogPost = {
  slug: "scaling-ad-spend-bidding-diminishing-returns",
  title: "Scaling ad spend: diminishing returns, marginal CPA and bidding strategies",
  description:
    "Part 9 of 10. Why CPA rises as you spend more, the difference between average and marginal CPA, how to choose between Maximize conversions, target CPA and target ROAS, and how to scale budgets vertically and horizontally.",
  intro:
    "Every channel has diminishing returns: the more you spend, the more you pay for each extra customer, because the platform has already reached the people most likely to buy. So the useful number when scaling is marginal CPA, the cost of the next customers, not the average across all of them. A campaign can show a healthy average CPA while the last ₹25,000 you added bought customers at a loss. Scale in steps, watch marginal CPA against your break-even from part 2, and stop when they meet. Bidding strategies set how the platform trades volume for efficiency: Maximize conversions spends the budget for the most results, target CPA and target ROAS hold a cost or return goal and limit volume to do it. Scale vertically by raising budgets, horizontally by adding new audiences, creatives, channels and offers.",
  date: "2026-11-09",
  keywords: [
    "scaling Facebook ads",
    "marginal CPA",
    "diminishing returns ad spend",
    "target CPA vs target ROAS",
    "bidding strategies Google Meta",
  ],
  category: "Performance Marketing",
  readingMinutes: 10,
  series: { id: "performance-marketing", part: 9 },
  content: (
    <>
      <p>
        Parts 4 to 8 were about making a campaign work. This one is about
        what to do when it does. The obvious move is to double the budget,
        and it rarely doubles the results.
      </p>

      <h2>Diminishing returns, drawn out</h2>
      <p>
        At low spend, the platform shows your ads to the people most likely to
        convert. As you spend more, it has to reach people who are a bit less
        likely, then less likely again. Each extra rupee buys a little less.
      </p>
      <LineChart
        title="Monthly conversions as spend increases (illustrative)"
        xLabel="Monthly spend"
        yLabel="Conversions"
        xTicks={[0, 25000, 50000, 75000, 100000, 125000, 150000]}
        yTicks={[0, 50, 100, 150, 200]}
        formatX="rupee"
        series={[
          {
            label: "Conversions",
            points: [
              [0, 0],
              [25000, 60],
              [50000, 100],
              [75000, 130],
              [100000, 150],
              [125000, 165],
              [150000, 175],
            ],
          },
        ]}
        marks={[{ x: 100000, y: 150, label: "Average CPA ₹667 looks fine" }]}
        caption="Made-up but typical shape. The curve flattens as spend rises. Your own curve comes from testing budget levels over time."
      />

      <h2>Average CPA vs marginal CPA</h2>
      <p>
        Read the same numbers a different way. Average CPA is total spend
        divided by total conversions. Marginal CPA is the extra spend divided
        by the extra conversions it bought.
      </p>
      <BarChart
        title="Cost per extra conversion for each added ₹25,000 (same example)"
        bars={[
          { label: "₹0 → ₹25k", value: 417, display: "₹417" },
          { label: "₹25k → ₹50k", value: 625, display: "₹625" },
          { label: "₹50k → ₹75k", value: 833, display: "₹833" },
          { label: "₹75k → ₹100k", value: 1250, display: "₹1,250" },
          { label: "₹100k → ₹125k", value: 1667, display: "₹1,667" },
          { label: "₹125k → ₹150k", value: 2500, display: "₹2,500" },
        ]}
        caption="At ₹1,00,000 the average CPA is ₹667, but the last ₹25,000 bought customers at ₹1,250 each. If break-even CPA is ₹1,000, that step lost money."
      />
      <p>
        This is the single most useful idea for scaling. Your break-even CPA
        from{" "}
        <Link href="/blog/performance-marketing-unit-economics-cac-ltv-break-even">
          part 2
        </Link>{" "}
        should be compared with the marginal CPA of your most recent budget
        increase, not the blended average. Measure it by looking at
        conversions and spend before and after each budget step, with the
        same creative and settings where possible.
      </p>

      <h2>Bidding strategies</h2>
      <table>
        <thead>
          <tr>
            <th>Strategy</th>
            <th>Google</th>
            <th>Meta</th>
            <th>Use when</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Most results for the budget</td>
            <td>Maximize conversions / conversion value</td>
            <td>Highest volume (default)</td>
            <td>Launching, or efficiency is already fine</td>
          </tr>
          <tr>
            <td>Hold a cost per result</td>
            <td>Target CPA</td>
            <td>Cost per result goal</td>
            <td>You know your target CPA and have steady conversion data</td>
          </tr>
          <tr>
            <td>Hold a return on spend</td>
            <td>Target ROAS</td>
            <td>ROAS goal</td>
            <td>Order values vary a lot and you pass revenue</td>
          </tr>
          <tr>
            <td>Cap each auction bid</td>
            <td>Manual CPC / portfolio caps</td>
            <td>Bid cap</td>
            <td>Experienced buyers who want tight control</td>
          </tr>
        </tbody>
      </table>
      <p>
        Targets are a trade. Set a target CPA too low and the platform spends
        less and finds fewer conversions, because it skips auctions it thinks
        are too expensive. That isn&apos;t a failure. It&apos;s the curve
        above, seen from the other side. I usually set the first target close
        to the CPA the campaign is already getting, then tighten or loosen in
        small steps.
      </p>

      <h2>Two ways to scale</h2>
      <Lanes
        title="Vertical vs horizontal scaling"
        lanes={[
          {
            label: "Vertical: more money into what works",
            steps: [
              { title: "Raise budget in steps", detail: "Moderate increases, a few days apart" },
              { title: "Watch marginal CPA", detail: "Compare each step with the one before" },
              { title: "Stop at break-even", detail: "Where marginal CPA meets your limit", human: true },
            ],
          },
          {
            label: "Horizontal: widen what works",
            steps: [
              { title: "New creative and angles", detail: "Reach people the old ads didn't move", human: true },
              { title: "New audiences, regions, placements", detail: "Fresh pockets of demand" },
              { title: "New channels and offers", detail: "Part 4's second channel; bundles; new products", human: true },
            ],
          },
        ]}
        caption="Vertical scaling hits the curve's flat end. Horizontal scaling moves you onto a new curve."
      />
      <p>
        On budget steps: there&apos;s no official percentage, but large
        sudden jumps are more likely to destabilize delivery and, on Meta,
        can restart the learning phase from{" "}
        <Link href="/blog/meta-ads-account-structure-learning-phase">part 6</Link>
        . Moderate steps a few days apart give you cleaner before-and-after
        reads of marginal CPA, which is the main reason I prefer them.
      </p>

      <h2>When to stop scaling</h2>
      <Decision
        title="Scaling decisions"
        rows={[
          { question: "Marginal CPA well below break-even", answer: "Keep scaling in steps", tone: "a" },
          { question: "Marginal CPA near break-even", answer: "Hold budget, scale horizontally", tone: "both" },
          { question: "Marginal CPA above break-even", answer: "Step back to the last profitable level", tone: "b" },
          { question: "Frequency rising, CTR falling", answer: "New creative before more budget", tone: "b" },
        ]}
      />

      <h2>Seasonality and budgets</h2>
      <p>
        Curves move. During festive periods like Diwali, buying intent is
        higher but so is competition, so CPMs and CPCs rise. A budget that was
        past the efficient point in June might be fine in October, or the
        other way round. Re-test your budget levels each season.
      </p>

      <h2>Automating the read</h2>
      <p>
        Calculating marginal CPA by hand after every budget change is tedious,
        so I automate it: a scheduled workflow logs daily spend and
        conversions per campaign, marks budget changes, and reports the
        marginal CPA of each step next to break-even. The decision to scale
        stays with a person. More on that split in{" "}
        <Link href="/blog/ai-agents-vs-workflows-marketing">agents vs workflows</Link>
        .
      </p>
      <p>
        There&apos;s one more problem. Everything in this part assumes the
        conversions your platforms report were caused by the ads.{" "}
        <Link href="/blog/incrementality-testing-mmm-mer-measurement">
          Part 10 questions that assumption
        </Link>
        .
      </p>
    </>
  ),
};
