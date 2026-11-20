import Link from "next/link";
import { Lanes, BarChart, Decision } from "@/components/blog/figures";
import type { BlogPost } from "./types";

export const post: BlogPost = {
  slug: "conversion-tracking-setup-pixel-capi-utm-ga4",
  title: "Conversion tracking for performance marketing: pixels, Conversions API, UTMs and GA4",
  description:
    "Part 3 of 10. How ad tracking works, why browser pixels miss conversions, what server-side tracking and the Conversions API fix, how to tag links with UTMs, and why Google, Meta and GA4 never agree.",
  intro:
    "Ad platforms can only optimize toward conversions they can see. A browser pixel (the Meta Pixel or a Google tag) fires when someone completes an action on your site, but ad blockers, browser privacy rules and consent choices stop a share of those events from arriving. Server-side tracking, such as Meta's Conversions API or Google's enhanced conversions, sends the same event from your server, which recovers some of that loss. Use both, with a shared event ID so the platform can remove duplicates. Tag every ad link with UTM parameters so GA4 can attribute visits, and accept that each tool will report a different number. They count with different rules, so pick one source of truth for decisions and use the platform reports to steer inside each platform.",
  date: "2026-09-27",
  keywords: [
    "conversion tracking setup",
    "Meta Conversions API",
    "UTM parameters",
    "GA4 attribution",
    "server-side tracking",
  ],
  category: "Performance Marketing",
  readingMinutes: 9,
  series: { id: "performance-marketing", part: 3 },
  content: (
    <>
      <p>
        In{" "}
        <Link href="/blog/performance-marketing-unit-economics-cac-ltv-break-even">
          part 2
        </Link>{" "}
        we worked out what a customer is worth. That number is only useful if
        you can count customers correctly. A campaign that looks like it has a creative or budget problem
        sometimes has a tracking problem nobody noticed, so check this first.
      </p>

      <h2>Why tracking matters more than it used to</h2>
      <p>
        Tracking used to be for reporting. Now it also steers the ads. When
        you tell Meta or Google to optimize for purchases, the algorithm looks
        at who bought and finds more people like them. If a third of
        purchases never get reported, the algorithm learns from a smaller and
        skewed sample, and your CPA rises for reasons that look like bad luck.
      </p>

      <h2>Pixels vs server-side tracking</h2>
      <Lanes
        title="Two ways a purchase reaches the ad platform"
        lanes={[
          {
            label: "Browser pixel",
            steps: [
              { title: "Customer buys", detail: "Thank-you page loads" },
              { title: "Pixel fires in browser", detail: "JavaScript sends event" },
              { title: "Can be blocked", detail: "Ad blockers, privacy settings, no consent" },
              { title: "Platform receives it", detail: "If it got through" },
            ],
          },
          {
            label: "Server-side (Conversions API, enhanced conversions)",
            steps: [
              { title: "Customer buys", detail: "Order saved on your server" },
              { title: "Server sends event", detail: "Hashed email or phone, order value" },
              { title: "Not blocked by the browser", detail: "Still respects consent" },
              { title: "Platform matches it", detail: "Deduplicated with the pixel event" },
            ],
          },
        ]}
        caption="Run both. Send the same event ID from browser and server so the platform counts the purchase once."
      />
      <p>
        A pixel is a small piece of JavaScript from the ad platform. It runs
        in the visitor&apos;s browser, which is both its strength and its
        weakness. It can see the page, the cookie and the click ID. It can
        also be stopped by an ad blocker, Safari&apos;s tracking protection,
        Apple&apos;s App Tracking Transparency on iOS apps, or a visitor who
        declines cookies.
      </p>
      <p>
        Server-side tracking sends the event from your own server after the
        order is saved. Meta calls its version the Conversions API. Google has
        enhanced conversions and offline conversion imports. You send hashed
        customer details such as email or phone, and the platform matches them
        to its users. It recovers some of the conversions the pixel missed.
        It doesn&apos;t get around consent: if someone opts out, you
        shouldn&apos;t send their data from the server either.
      </p>
      <BarChart
        title="Purchases each setup reported, from 1,000 real orders (illustrative)"
        bars={[
          { label: "Orders in your store", value: 1000, display: "1,000" },
          { label: "Pixel + server, deduplicated", value: 880, display: "880" },
          { label: "Pixel only", value: 720, display: "720" },
        ]}
        caption="Example only. The gap depends on your audience's devices, browsers, ad-blocker use and consent rates. Measure your own by comparing platform counts to your order database."
      />

      <h2>UTM parameters: labelling every click</h2>
      <p>
        UTMs are tags you add to the end of an ad link. Analytics tools read
        them to tell where a visit came from. Platforms add their own click IDs
        (gclid for Google, fbclid for Meta), but UTMs are the shared language
        that GA4, your CRM and your spreadsheets can all read.
      </p>
      <table>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Meaning</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>utm_source</td>
            <td>The platform</td>
            <td>meta, google, linkedin</td>
          </tr>
          <tr>
            <td>utm_medium</td>
            <td>The type of traffic</td>
            <td>paid_social, cpc</td>
          </tr>
          <tr>
            <td>utm_campaign</td>
            <td>The campaign name</td>
            <td>diwali_sale_2026</td>
          </tr>
          <tr>
            <td>utm_content</td>
            <td>The ad or creative</td>
            <td>video_hook_price</td>
          </tr>
          <tr>
            <td>utm_term</td>
            <td>Keyword or audience</td>
            <td>broad_women_25_44</td>
          </tr>
        </tbody>
      </table>
      <p>
        Pick a naming rule and never break it. Lowercase, underscores, no
        spaces. &quot;Meta&quot;, &quot;meta&quot; and &quot;facebook&quot;
        become three separate sources in GA4, and you&apos;ll spend an
        afternoon merging them. Meta and Google both let you set URL
        parameters at the account or campaign level using dynamic values, so
        you don&apos;t have to type them per ad.
      </p>

      <h2>Why Google, Meta and GA4 never agree</h2>
      <p>
        The numbers will not match, and that isn&apos;t a bug.
      </p>
      <ul>
        <li>
          Each ad platform credits itself. If someone clicked a Google ad on
          Monday and a Meta ad on Wednesday, then bought, both platforms can
          claim the sale.
        </li>
        <li>
          Attribution windows differ. Meta&apos;s default counts conversions
          within 7 days of a click or 1 day of a view. Google Ads uses its own
          windows per conversion action. A view-through conversion means the
          person saw the ad but didn&apos;t click it.
        </li>
        <li>
          GA4 uses its own model and only sees visits it could track, so it
          tends to report fewer paid conversions than the platforms do.
        </li>
        <li>
          Timing differs. Platforms usually credit the conversion to the day
          of the ad click. GA4 credits the day of the purchase.
        </li>
      </ul>
      <Decision
        title="Which number to use for what"
        rows={[
          { question: "Is the business making money from ads overall?", answer: "Your order database + total ad spend", tone: "a" },
          { question: "Which campaign inside Meta is doing better?", answer: "Meta Ads Manager", tone: "b" },
          { question: "Which keyword inside Google Ads is doing better?", answer: "Google Ads", tone: "b" },
          { question: "How do channels compare with each other?", answer: "GA4, then test (part 10)", tone: "both" },
        ]}
      />

      <h2>A tracking checklist before you spend</h2>
      <ol>
        <li>Place a real test order and confirm it appears in each platform&apos;s event tester.</li>
        <li>Confirm the order value and currency come through, not just the event.</li>
        <li>Set up server-side events and check the deduplication rate is healthy.</li>
        <li>Decide on one primary conversion per campaign. Track the rest as secondary.</li>
        <li>Set up a consent banner that actually controls the tags, where the law requires one.</li>
        <li>Add UTMs at account level and check they survive any redirects.</li>
        <li>Compare a week of platform conversions against real orders and write down the gap.</li>
      </ol>
      <p>
        That last step gives you a correction factor you&apos;ll use for the
        rest of the series. If Meta reports 120 purchases and your store shows
        100 from Meta-tagged visits plus some untagged ones, you know roughly
        how much each platform over- or under-claims.
      </p>

      <h2>Automating the boring part</h2>
      <p>
        I build small n8n workflows that send server-side events when an
        order or lead lands in the CRM, and a daily check that compares
        platform conversions with real orders and posts the gap to Slack. The
        setup is a few hours. Without it, a tag breaks after a site update
        and nobody notices for weeks. If you want to try n8n,{" "}
        <Link href="/blog/n8n-beginners-first-ai-automation-30-minutes-2026">
          start with this beginner build
        </Link>
        .
      </p>
      <p>
        Next:{" "}
        <Link href="/blog/choosing-performance-marketing-channels-intent-vs-demand">
          part 4, choosing channels
        </Link>
        .
      </p>
    </>
  ),
};
