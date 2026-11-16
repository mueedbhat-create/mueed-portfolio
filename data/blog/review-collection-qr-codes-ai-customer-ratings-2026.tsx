import Link from "next/link";
import { Flow } from "@/components/blog/figures";
import type { BlogPost } from "./types";

export const post: BlogPost = {
  slug: "review-collection-qr-codes-ai-customer-ratings-2026",
  title: "Review collection at scale: how QR codes + AI drive customer ratings",
  description:
    "How Starboard uses QR code scanning, multiplatform routing, and AI drafted reviews to help Indian businesses collect more customer reviews with less friction.",
  intro:
    "Starboard is a review collection platform I built at Anarchy Labs for local businesses in India. A customer scans a QR code at the counter, with no app and no login, and lands on a short review flow. The system knows the business category and sends the customer to the platform that matters for it: Zomato for restaurants, Practo for clinics, Google or Justdial for retail, TripAdvisor for hotels. Customers who don't know what to write get an AI drafted review based on their own rating, which they can edit or post as it is. Every scan is credited to the staff member on shift, and a live leaderboard shows who is bringing in the most reviews, so collecting reviews becomes something the team actively does. A dashboard tracks reviews by platform, staff member and time. A QR code works better than asking out loud because the customer scans when they're ready, and the steps are just scan, tap and submit.",
  date: "2026-08-27",
  updated: "2026-11-16",
  keywords: [
    "QR code review collection",
    "AI customer reviews",
    "review automation",
    "local business reviews",
  ],
  category: "AI Automation",
  readingMinutes: 5,
  content: (
    <>
      <h2>The problem</h2>
      <p>
        Local businesses in India know reviews bring in customers, but
        collecting them is manual and staff have other things to do. Customers
        aren&apos;t sure which platform to use either. A restaurant customer
        might post on Google when the business needs Zomato reviews, and a
        clinic patient might skip it entirely because they&apos;ve never heard
        of Practo.
      </p>

      <h2>How Starboard works</h2>
      <Flow
        title="From counter to posted review"
        steps={[
          { title: "Scan", detail: "QR at counter, no app or login" },
          { title: "Rate", detail: "Customer picks a rating" },
          { title: "Draft", detail: "AI suggests text from the rating" },
          { title: "Edit + post", detail: "Customer edits or posts as is", human: true },
          { title: "Route", detail: "Opens the right platform" },
        ]}
        caption="The only human step is the customer's. Staff attribution and analytics run in the background on every scan."
      />

      <h3>QR code at the counter</h3>
      <p>
        A printed QR code sits at the checkout or reception desk. The customer
        scans it with their phone and goes straight into the review flow. They
        don&apos;t download an app or log in.
      </p>

      <h3>Multi-platform routing</h3>
      <table>
        <thead>
          <tr>
            <th>Business type</th>
            <th>Where the customer is sent</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Restaurants</td>
            <td>Zomato</td>
          </tr>
          <tr>
            <td>Clinics</td>
            <td>Practo</td>
          </tr>
          <tr>
            <td>Retail shops</td>
            <td>Google or Justdial</td>
          </tr>
          <tr>
            <td>Hotels</td>
            <td>TripAdvisor</td>
          </tr>
        </tbody>
      </table>
      <p>
        The system detects the business category and sends the customer to the
        right platform. The business chooses which platforms matter most and
        Starboard handles the rest.
      </p>

      <h3>Staff attribution and leaderboards</h3>
      <p>
        Each scan is tied to the staff member on shift, and a live leaderboard
        shows who is bringing in the most reviews. Collection stops being an
        afterthought and becomes something the team tracks. Staff push scans
        because they can see their numbers on the board.
      </p>

      <h3>AI drafted reviews</h3>
      <p>
        Some customers want to leave a review but don&apos;t know what to
        write. Starboard suggests a draft based on their rating and the type of
        business, and they can edit it or post it as is. Because the draft
        starts from their own rating of their own visit, it reflects what they
        actually experienced.
      </p>

      <h3>Real-time analytics</h3>
      <p>
        The dashboard shows reviews collected, the split by platform, staff
        performance and trends over time. Owners can see who drives the most
        reviews, which platforms get the most traffic and where the gaps are.
      </p>

      <h2>Why QR works better than asking out loud</h2>
      <p>
        Asking a customer for a review puts them on the spot. They say yes and
        then forget. A QR code waits until they&apos;re ready, and the steps
        are short: scan, tap, submit. In our experience more scans turn into
        reviews than verbal requests do.
      </p>

      <h2>Why the AI draft matters</h2>
      <p>
        Without a draft, only some of the customers who scan go on to write
        anything. With a suggested draft, more of them finish. They read it,
        change a sentence or two and post. The AI takes away the blank page,
        and the review still comes from the customer&apos;s own rating and
        visit.
      </p>

      <h2>Results</h2>
      <p>
        Starboard is live at{" "}
        <a href="https://getbetterreviews.online">getbetterreviews.online</a>{" "}
        and serves businesses across India. The QR flow removes most of the
        friction from collecting reviews, and the leaderboard gives staff a
        reason to keep at it. Businesses using it report review volume rising
        steadily across their connected platforms. For more on AI automation in
        marketing, read my{" "}
        <Link href="/blog/what-is-ai-automation-performance-marketing">
          definition of AI automation and performance marketing
        </Link>{" "}
        and the{" "}
        <Link href="/blog/n8n-vs-zapier-vs-make-marketing">n8n vs Zapier vs Make</Link>{" "}
        comparison.
      </p>
    </>
  ),
};
