import Link from "next/link";
import { BarChart, StackBar, LineChart, Stats } from "@/components/blog/figures";
import type { BlogPost } from "./types";

export const post: BlogPost = {
  slug: "performance-marketing-unit-economics-cac-ltv-break-even",
  title: "Unit economics for performance marketing: CAC, LTV and break-even CPA",
  description:
    "Part 2 of 10. How to work out what you can afford to pay for a customer: contribution margin, break-even CPA and ROAS, LTV, CAC payback and the LTV to CAC ratio, with worked numbers.",
  intro:
    "Before you spend on ads you need one number: the most you can pay to win a customer and still make money. Start with contribution margin, which is the price minus product cost, shipping, payment fees and returns. On a single order, that margin is your break-even CPA, and 1 divided by your margin percentage is your break-even ROAS. If customers buy again, lifetime value (LTV) lets you pay more than one order's margin, but only if you have the cash to wait. CAC payback tells you how long that wait is. Set your target CPA below break-even, judge campaigns against it, and revisit it whenever prices, costs or repeat rates change.",
  date: "2026-09-18",
  keywords: [
    "unit economics performance marketing",
    "break-even CPA",
    "break-even ROAS formula",
    "LTV to CAC ratio",
    "CAC payback period",
  ],
  category: "Performance Marketing",
  readingMinutes: 9,
  series: { id: "performance-marketing", part: 2 },
  content: (
    <>
      <p>
        In{" "}
        <Link href="/blog/what-is-performance-marketing-beginners-guide">part 1</Link>{" "}
        I said the loop starts with setting a goal: one action and one target
        cost. This part is about where that target cost comes from. It&apos;s
        the least exciting topic in the series and the one that decides whether
        everything else makes money.
      </p>

      <h2>Start with contribution margin, not price</h2>
      <p>
        Say you sell a ₹2,000 product. That ₹2,000 isn&apos;t yours to spend
        on ads. Some of it pays for the product, some for shipping, some for
        the payment gateway, and some disappears into returns. What&apos;s left
        is contribution margin, and that&apos;s the pool your ad spend comes
        out of.
      </p>
      <StackBar
        title="Where a ₹2,000 order goes (illustrative D2C product)"
        parts={[
          { label: "Left for ads and profit", value: 800, display: "₹800 (40%)" },
          { label: "Product cost", value: 900, display: "₹900" },
          { label: "Shipping, fees, returns", value: 300, display: "₹300" },
        ]}
        caption="Example numbers. Use your own costs, including packaging, COD charges and the average cost of a return."
      />
      <p>
        That ₹800 is the most you could spend to get this one order and break
        even. Spend ₹600 and you make ₹200. Spend ₹1,000 and you lose ₹200,
        even though the dashboard shows a sale.
      </p>

      <h2>Break-even CPA and break-even ROAS</h2>
      <p>
        Two formulas come straight from that margin:
      </p>
      <ul>
        <li>Break-even CPA = contribution margin per order (here, ₹800)</li>
        <li>
          Break-even ROAS = 1 ÷ margin percentage (here, 1 ÷ 0.40 = 2.5)
        </li>
      </ul>
      <p>
        They say the same thing two ways. With a ₹2,000 order, a ROAS of 2.5
        means you spent ₹800 to get it. Anything above 2.5 is profit on the
        first order. Anything below is a loss unless the customer comes back.
      </p>
      <BarChart
        title="Break-even ROAS by contribution margin"
        bars={[
          { label: "70% margin", value: 1.43, display: "1.43" },
          { label: "50% margin", value: 2, display: "2.0" },
          { label: "40% margin", value: 2.5, display: "2.5" },
          { label: "30% margin", value: 3.33, display: "3.33" },
          { label: "20% margin", value: 5, display: "5.0" },
          { label: "10% margin", value: 10, display: "10.0" },
        ]}
        caption="Break-even ROAS = 1 ÷ margin. Thin-margin products need very high ROAS just to stand still."
      />
      <p>
        This is why I&apos;m wary of anyone who says &quot;a good ROAS is
        4&quot; without asking about margins. For a software product with 70%
        margins, a ROAS of 4 is excellent. For an electronics reseller on 10%
        margins, it loses money on every order.
      </p>

      <h2>Lifetime value: when you can pay more than one order&apos;s margin</h2>
      <p>
        If customers come back, the first order isn&apos;t the whole story.
        Lifetime value (LTV) is the total contribution margin a customer
        brings over their relationship with you. Use margin here, not revenue.
        Revenue-based LTV makes every channel look affordable.
      </p>
      <p>
        A simple way to estimate it from your own order data:
      </p>
      <ul>
        <li>Take customers who first bought 12 months ago</li>
        <li>Add up all the contribution margin they produced in those 12 months</li>
        <li>Divide by the number of customers</li>
      </ul>
      <p>
        That gives you a 12-month LTV based on real behaviour rather than a
        formula with guessed churn rates. If your business is too new for a
        12-month cohort, use 3 or 6 months and say so in the report.
      </p>

      <h2>CAC and the LTV to CAC ratio</h2>
      <p>
        CAC (customer acquisition cost) is what you spend to get one new
        customer. In ad platforms you&apos;ll see this as CPA when the
        conversion is a first purchase. A blended CAC divides all marketing
        spend by all new customers, which is more honest because it includes
        the costs no single platform reports.
      </p>
      <p>
        The LTV to CAC ratio compares the two. People often quote 3:1 as a
        healthy target. Treat it as a starting point for a conversation, not a
        law. It depends on how you calculated LTV, over what time window, and
        how fast you need the cash back.
      </p>
      <Stats
        title="Worked example: a skincare brand with repeat buyers (illustrative)"
        stats={[
          { value: "₹800", label: "Margin on first order" },
          { value: "₹1,900", label: "12-month LTV (margin)" },
          { value: "₹1,200", label: "Blended CAC" },
          { value: "1.6 : 1", label: "12-month LTV to CAC" },
        ]}
        caption="Losing ₹400 on the first order, but profitable over a year. Whether that's acceptable depends on cash, the next point."
      />

      <h2>CAC payback: the question your bank account asks</h2>
      <p>
        A business can be profitable on paper and still run out of money. If
        you pay ₹1,200 today for a customer who returns ₹1,900 over 12
        months, you&apos;re lending that customer money until they pay you
        back. CAC payback is how many months that takes.
      </p>
      <LineChart
        title="Cumulative margin per customer vs ₹1,200 CAC"
        xLabel="Months since first purchase"
        yLabel="₹ margin"
        xTicks={[0, 2, 4, 6, 8, 10, 12]}
        yTicks={[0, 500, 1000, 1500, 2000]}
        formatY="rupee"
        series={[
          {
            label: "Cumulative margin",
            points: [
              [0, 800],
              [2, 1000],
              [4, 1200],
              [6, 1400],
              [8, 1600],
              [10, 1750],
              [12, 1900],
            ],
          },
          {
            label: "CAC paid upfront",
            dashed: true,
            points: [
              [0, 1200],
              [12, 1200],
            ],
          },
        ]}
        marks={[{ x: 4, y: 1200, label: "Payback at month 4" }]}
        caption="Illustrative curve. The earlier the lines cross, the faster you can reinvest and grow."
      />
      <p>
        A 4-month payback is comfortable for most small businesses. If yours
        is 14 months, you can only grow as fast as your cash or funding
        allows, and a slow month of repeat orders hurts badly.
      </p>

      <h2>Setting the target you&apos;ll actually use</h2>
      <p>
        Here&apos;s the process I use before any campaign goes live:
      </p>
      <ol>
        <li>Work out contribution margin per order from real costs.</li>
        <li>
          Decide what you&apos;ll judge on: first-order profit (safest),
          a 90-day LTV, or a 12-month LTV (only if you have the cash and the
          data).
        </li>
        <li>Your break-even CPA is the margin from that window.</li>
        <li>
          Set the target CPA 20 to 30% below break-even. Tracking is never
          perfect, and part 10 shows that some of the conversions ads claim
          would have happened anyway.
        </li>
        <li>Write both numbers at the top of every report.</li>
      </ol>
      <p>
        For lead generation the logic is the same with one extra step:
        multiply lead-to-customer rate by customer value. If 1 in 10 leads
        becomes a ₹50,000-margin client, a lead is worth ₹5,000 before
        targets and buffers.
      </p>

      <h2>Where AI helps here</h2>
      <p>
        This part is mostly spreadsheet work. What I automate is the refresh:
        a weekly job pulls order data, recalculates margin and repeat rates,
        and flags when break-even has moved. It&apos;s the kind of task I
        covered in{" "}
        <Link href="/blog/5-marketing-tasks-automate-ai-this-week-2026">
          five marketing tasks to automate first
        </Link>
        . Prices and costs change more often than people update their targets.
      </p>
      <p>
        Next:{" "}
        <Link href="/blog/conversion-tracking-setup-pixel-capi-utm-ga4">
          part 3, setting up tracking you can trust
        </Link>
        .
      </p>
    </>
  ),
};
