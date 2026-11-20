import Link from "next/link";
import { BarChart, Flow, Decision, Stats } from "@/components/blog/figures";
import type { BlogPost } from "./types";

export const post: BlogPost = {
  slug: "landing-page-cro-paid-traffic-message-match",
  title: "Landing pages for paid traffic: message match, speed and conversion rate",
  description:
    "Part 8 of 10. Why conversion rate is often the cheapest place to lower CPA, what message match means, how page speed and form length affect results, and a checklist for landing pages that run behind ads.",
  intro:
    "A landing page is where you stop paying for attention and start earning a result, and improving it is often the cheapest way to lower CPA. If your conversion rate goes from 2% to 3%, every rupee of ad spend produces 50% more conversions without touching the ads. The biggest factor is message match: the page should repeat the promise of the ad the visitor just clicked, in the first screen, with the same words and offer. After that, look at speed on mobile, the length and friction of forms, proof close to the call to action, and one clear next step. Test changes one at a time, and judge them on downstream quality as well as raw conversion rate, because an easier form can bring more leads and worse customers.",
  date: "2026-10-30",
  keywords: [
    "landing page conversion rate",
    "message match",
    "landing page for ads",
    "CRO for paid traffic",
    "landing page checklist",
  ],
  category: "Performance Marketing",
  readingMinutes: 8,
  series: { id: "performance-marketing", part: 8 },
  content: (
    <>
      <p>
        <Link href="/blog/ad-creative-testing-framework-hooks-angles-fatigue">Part 7</Link>{" "}
        was about earning the click. This part is about what happens next.
        Recall the chain from the{" "}
        <Link href="/blog/performance-marketing-metrics-ctr-cpa-roas-2026">
          metrics post
        </Link>
        : CPA equals CPC divided by conversion rate. Ads mostly move the top
        of that fraction. The page moves the bottom.
      </p>

      <h2>Why conversion rate is the cheapest lever</h2>
      <BarChart
        title="Same ₹1,00,000 spend at ₹20 per click: CPA by conversion rate"
        bars={[
          { label: "1% conversion rate", value: 2000, display: "₹2,000 CPA" },
          { label: "2% conversion rate", value: 1000, display: "₹1,000 CPA" },
          { label: "3% conversion rate", value: 667, display: "₹667 CPA" },
          { label: "4% conversion rate", value: 500, display: "₹500 CPA" },
        ]}
        caption="Simple arithmetic: CPA = CPC ÷ conversion rate. Doubling conversion rate halves CPA at the same click cost."
      />
      <p>
        Lowering CPC by 30% takes a lot of creative and bidding work, and
        competitors push back. Moving conversion rate from 2% to 3% is often a
        matter of fixing a few obvious problems on one page.
      </p>

      <h2>Message match</h2>
      <p>
        Someone clicks an ad that says &quot;Free physiotherapy assessment
        this week&quot; and lands on a home page with a slider about the
        clinic&apos;s history. They have to hunt for the offer they clicked
        on, and most won&apos;t. Message match means the first screen repeats
        the ad&apos;s promise in close to the same words.
      </p>
      <Flow
        title="The thread from search to sign-up"
        steps={[
          { title: "Search or scroll", detail: "\"back pain physio Srinagar\"" },
          { title: "Ad", detail: "\"Back pain? Free assessment this week\"" },
          { title: "Page headline", detail: "\"Free back pain assessment, this week\"" },
          { title: "Form", detail: "\"Book your free assessment\"" },
        ]}
        caption="Each step uses the same words for the same promise. A visitor should never wonder if they're in the right place."
      />
      <p>
        For search ads, this usually means one page per keyword theme. For
        Meta, it means one page per angle. Tools like page builders or a
        simple Next.js template with variables make this manageable.
      </p>

      <h2>Speed on mobile</h2>
      <p>
        Most paid social traffic and much of search traffic is on phones,
        often on mobile data. A page that takes several seconds to show its
        headline loses people who already paid for the click. Google&apos;s
        own landing page experience rating in part 5 also takes page usability
        into account.
      </p>
      <ul>
        <li>Compress images and serve modern formats.</li>
        <li>Remove scripts and widgets the page doesn&apos;t need.</li>
        <li>Put the headline, offer and button in the HTML, not behind an animation.</li>
        <li>Test on a mid-range Android phone over a normal connection, not just on your laptop.</li>
      </ul>

      <h2>Forms: shorter isn&apos;t always better</h2>
      <p>
        Every field you add costs some conversions. But some friction filters
        out people who were never going to buy. The right length depends on
        what happens after the form.
      </p>
      <Decision
        title="How much to ask"
        rows={[
          { question: "Sales team calls every lead, cost per call is high", answer: "Add 1 to 2 qualifying questions", tone: "b" },
          { question: "Automated follow-up, low cost per lead", answer: "Keep it short: name, phone or email", tone: "a" },
          { question: "Ecommerce checkout", answer: "Guest checkout, fewest fields possible", tone: "a" },
          { question: "Leads are cheap but rarely close", answer: "Add friction and measure sales, not leads", tone: "b" },
        ]}
      />

      <h2>A landing page checklist</h2>
      <Stats
        title="Above the fold, on a phone"
        stats={[
          { value: "1", label: "Headline that repeats the ad's promise" },
          { value: "1", label: "Clear call to action" },
          { value: "1+", label: "Piece of proof: rating, review or client logo" },
          { value: "0", label: "Navigation menus pulling people away" },
        ]}
      />
      <p>Below the fold:</p>
      <ul>
        <li>The offer in more detail, written around the customer&apos;s problem</li>
        <li>Objections answered: price, time, trust, what happens next</li>
        <li>Real reviews with names, close to the form or button</li>
        <li>The same call to action repeated, so nobody scrolls back up</li>
        <li>A short FAQ for the questions sales gets asked most</li>
      </ul>

      <h2>Testing pages properly</h2>
      <p>
        Change one meaningful thing at a time: the headline, the offer, the
        form length, the proof. Split traffic evenly, wait for a reasonable
        number of conversions per version, and judge on the result that
        matters downstream. A page change that lifts leads by 40% and drops
        the close rate by half has made things worse. For lead generation,
        track which leads became customers and compare versions on that.
      </p>

      <h2>Where AI fits</h2>
      <p>
        I use AI to draft variants of headlines and sections that match each
        ad angle, and to read through sales call notes or reviews for the
        objections the page should answer. The build itself is fast with
        modern tools. When we{" "}
        <Link href="/blog/ai-real-estate-marketing-alif-realty-redesign-2026">
          redesigned Alif Realty
        </Link>
        , clear structure and speed were as important as the copy.
      </p>
      <p>
        Next:{" "}
        <Link href="/blog/scaling-ad-spend-bidding-diminishing-returns">
          part 9, scaling spend without wrecking efficiency
        </Link>
        .
      </p>
    </>
  ),
};
