import Link from "next/link";
import { BarChart, Flow, Decision } from "@/components/blog/figures";
import type { BlogPost } from "./types";

export const post: BlogPost = {
  slug: "what-is-performance-marketing-beginners-guide",
  title: "What is performance marketing? A beginner's guide to paying for results",
  description:
    "Part 1 of a 10-part series. What performance marketing is, how it differs from brand marketing, the pricing models (CPM, CPC, CPA), the main channels and the loop every campaign runs on.",
  intro:
    "Performance marketing is advertising where you pay for, and judge, every rupee by a measurable action: a click, a lead, a sale or an install. You set a goal, buy ads on platforms like Google, Meta or LinkedIn, track what each ad produces, and move money toward whatever brings results at a cost you can afford. Brand marketing tries to make people remember you. Performance marketing tries to make them act now, and it can prove whether they did. The whole discipline runs on one loop: launch, measure, learn, reallocate. Everything else in this series (unit economics, tracking, channels, creative, landing pages, scaling and measurement) is a way of running that loop better.",
  date: "2026-09-12",
  keywords: [
    "what is performance marketing",
    "performance marketing for beginners",
    "CPM vs CPC vs CPA",
    "performance marketing vs brand marketing",
  ],
  category: "Performance Marketing",
  readingMinutes: 8,
  series: { id: "performance-marketing", part: 1 },
  content: (
    <>
      <p>
        I wrote this series because most explanations of performance marketing
        start in the middle. They jump into ROAS targets and bidding strategies
        before explaining why any of it matters. This is part 1 of 10. It
        starts with the basics and ends with the measurement questions that
        senior marketers still argue about. Each part builds on the one before,
        so if you&apos;re new, read them in order.
      </p>

      <h2>The one-sentence definition</h2>
      <p>
        Performance marketing is paid advertising that you buy, measure and
        optimize against a specific action. The action might be a purchase, a
        form fill, a booked call, an app install or a phone call. If you
        can&apos;t count it, it isn&apos;t performance marketing yet.
      </p>
      <p>
        That last point trips people up. Running Instagram ads doesn&apos;t make
        you a performance marketer. Running Instagram ads, tracking which ones
        produce leads, knowing what a lead is worth, and moving budget based on
        that does.
      </p>

      <h2>Performance marketing vs brand marketing</h2>
      <p>
        The two aren&apos;t enemies. They do different jobs on different
        timelines, and most healthy businesses need both.
      </p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Performance marketing</th>
            <th>Brand marketing</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Goal</td>
            <td>An action now: sale, lead, install</td>
            <td>Memory and preference later</td>
          </tr>
          <tr>
            <td>Time to see results</td>
            <td>Days to weeks</td>
            <td>Months to years</td>
          </tr>
          <tr>
            <td>How it&apos;s measured</td>
            <td>Conversions, CPA, ROAS</td>
            <td>Reach, recall, search volume for your name</td>
          </tr>
          <tr>
            <td>Typical formats</td>
            <td>Search ads, shopping ads, lead forms, retargeting</td>
            <td>Video, sponsorships, TV, outdoor</td>
          </tr>
          <tr>
            <td>Risk if overdone</td>
            <td>You run out of people who already want to buy</td>
            <td>You spend for a long time without knowing what worked</td>
          </tr>
        </tbody>
      </table>
      <p>
        The risk in the bottom row comes up again in parts 4 and 10.
        Performance channels are very good at finding people who were already
        close to buying. They are much worse at creating new demand, and the
        reports don&apos;t always tell you which of the two is happening.
      </p>

      <h2>How you pay: the four pricing models</h2>
      <p>
        Ad platforms charge in a few standard ways. The model decides who
        carries the risk when an ad doesn&apos;t work.
      </p>
      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>You pay for</th>
            <th>Common on</th>
            <th>Who carries the risk</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CPM</td>
            <td>Every 1,000 impressions</td>
            <td>Meta, YouTube, display</td>
            <td>You. Views don&apos;t guarantee clicks.</td>
          </tr>
          <tr>
            <td>CPC</td>
            <td>Each click</td>
            <td>Google Search, LinkedIn, Bing</td>
            <td>Shared. Clicks don&apos;t guarantee sales.</td>
          </tr>
          <tr>
            <td>CPA / CPL</td>
            <td>Each sale or lead</td>
            <td>Affiliates, some lead-gen networks</td>
            <td>Mostly the seller of the traffic</td>
          </tr>
          <tr>
            <td>Revenue share</td>
            <td>A percentage of each sale</td>
            <td>Affiliates, marketplaces</td>
            <td>Mostly the seller of the traffic</td>
          </tr>
        </tbody>
      </table>
      <p>
        One detail confuses beginners: on Meta and Google you can choose to
        optimize for conversions even though you&apos;re billed per impression
        or per click. The platform uses your conversion data to decide who sees
        the ad. You still carry the risk, but the algorithm is working toward
        the action you care about. That&apos;s why tracking (part 3) matters so
        much. The algorithm can only chase what you report to it.
      </p>

      <h2>The channels, roughly</h2>
      <p>
        Here&apos;s how I think about the main options for a small or mid-sized
        business. The scores are my own rough judgment from working on
        campaigns, not industry data, and they shift by country and category.
      </p>
      <BarChart
        title="How strong each channel's buying intent usually is (1 = low, 10 = high)"
        bars={[
          { label: "Google Search", value: 9, note: "people type what they want" },
          { label: "Shopping / marketplace ads", value: 9, note: "Google Shopping, Amazon" },
          { label: "Retargeting", value: 7, note: "people who already visited" },
          { label: "Meta (Facebook, Instagram)", value: 5, note: "interrupts a feed" },
          { label: "LinkedIn", value: 4, note: "strong for B2B, expensive" },
          { label: "YouTube / display", value: 3, note: "better at reach than action" },
        ]}
        max={10}
        caption="My rough scoring, not measured data. Higher intent usually means higher cost per click and less room to scale."
      />
      <p>
        High intent sounds better, and for a first campaign it often is. But
        search volume is limited: only so many people type &quot;interior
        designer in Srinagar&quot; each month. Lower-intent channels like Meta
        can reach far more people, which is where scaling usually comes from.
        Part 4 goes deeper on this tradeoff.
      </p>

      <h2>The loop every campaign runs on</h2>
      <Flow
        title="The performance marketing loop"
        steps={[
          { title: "Set the goal", detail: "One action, one target cost", human: true },
          { title: "Launch", detail: "Ads, audience, budget, landing page" },
          { title: "Measure", detail: "Tracking reports each conversion" },
          { title: "Learn", detail: "Which ads, audiences, pages win?", human: true },
          { title: "Reallocate", detail: "Move budget, test the next idea", human: true },
        ]}
        caption="The automated steps are what platforms do for you. The human steps are where the job is."
      />
      <p>
        Every part of this series improves one step of that loop. Unit
        economics tell you what target to set. Tracking makes measurement
        trustworthy. Channels, ads, creative and landing pages are what you
        launch. Scaling and incrementality are about learning the right lesson
        and moving money without fooling yourself.
      </p>

      <h2>The five numbers you&apos;ll see everywhere</h2>
      <p>
        You&apos;ll meet these in every part, so here they are once. CTR is
        clicks divided by impressions. CPC is spend divided by clicks.
        Conversion rate is conversions divided by clicks. CPA is spend divided
        by conversions. ROAS is revenue divided by spend. They chain together,
        so a weak CTR shows up as a bad CPA three steps later. I&apos;ve covered
        the arithmetic and a worked example in{" "}
        <Link href="/blog/performance-marketing-metrics-ctr-cpa-roas-2026">
          performance marketing metrics explained
        </Link>
        .
      </p>

      <h2>Is performance marketing right for your business?</h2>
      <Decision
        title="Quick check before you spend"
        rows={[
          { question: "Can you track a sale or lead back to an ad?", answer: "Required", tone: "a" },
          { question: "Do you know roughly what a customer is worth?", answer: "Needed by part 2", tone: "a" },
          { question: "Can you spend for 4 to 6 weeks before judging?", answer: "Strongly advised", tone: "both" },
          { question: "Is your offer something people already search for?", answer: "Start with search", tone: "b" },
          { question: "Is it new, or something people don't know they need?", answer: "Expect a slower start on social", tone: "b" },
        ]}
      />
      <p>
        The 4 to 6 week point is about patience, not rules. Platforms need
        some data before their optimization works, and the first two weeks of
        a new account are usually the most expensive. If the budget only
        covers a week, you&apos;ll judge the campaign at its worst moment.
      </p>

      <h2>What beginners get wrong most often</h2>
      <ul>
        <li>
          Optimizing for the wrong action. Telling Meta to get you
          &quot;link clicks&quot; gets you people who click on everything and
          buy nothing.
        </li>
        <li>
          Judging by the platform&apos;s own report. Google and Meta both
          count the same sale when both ads were involved. Part 3 covers why.
        </li>
        <li>
          Changing everything every day. Each edit can reset the
          platform&apos;s learning. Part 6 explains the learning phase.
        </li>
        <li>
          Not knowing the break-even number. Without it, a ROAS of 3 could be
          a great result or a slow loss. That&apos;s part 2.
        </li>
      </ul>
      <p>
        Next in the series:{" "}
        <Link href="/blog/performance-marketing-unit-economics-cac-ltv-break-even">
          unit economics, or how to work out what you can afford to pay for a
          customer
        </Link>
        . If you&apos;d rather have someone run the loop for you, see my{" "}
        <Link href="/services/performance-marketing">performance marketing services</Link>.
      </p>
    </>
  ),
};
