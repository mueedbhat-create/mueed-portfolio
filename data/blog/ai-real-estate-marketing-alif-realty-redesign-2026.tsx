import Link from "next/link";
import { Lanes } from "@/components/blog/figures";
import type { BlogPost } from "./types";

export const post: BlogPost = {
  slug: "ai-real-estate-marketing-alif-realty-redesign-2026",
  title: "AI for real estate marketing: how we redesigned Alif Realty",
  description:
    "How the team at Anarchy Labs redesigned a luxury real estate website with Next.js, IDX Broker API integration, admin portal, and AI-friendly architecture.",
  intro:
    "Alif Realty is a luxury real estate brokerage, and our team at Anarchy Labs rebuilt its website from scratch in Next.js and TypeScript. The new site has an editorial homepage covering both the brokerage and development arms, an about page with founder profiles, a projects grid, a simpler contact form, live Buy, Rent and Sell listings pulled from the IDX Broker API, and an admin portal backed by PostgreSQL so the client can change settings without a developer. My part was the homepage redesign, the projects grid, the contact form updates, a WhatsApp button the client configures from the admin, and the settings page with its database migrations. The IDX integration also lays the groundwork for AI features real estate marketing is heading toward, like answering a plain-language property search with filtered live listings.",
  date: "2026-08-24",
  updated: "2026-11-14",
  keywords: [
    "AI real estate marketing",
    "real estate website redesign",
    "IDX Broker integration",
    "luxury real estate website",
  ],
  category: "AI Automation",
  readingMinutes: 5,
  content: (
    <>
      <h2>The brief</h2>
      <p>
        Alif Realty needed a site that fit the brand: luxury real estate with a
        Mediterranean look. The old one had stock photos, confusing navigation
        and no way for the client to edit anything. Every text change meant
        calling a developer.
      </p>

      <h2>What we built</h2>
      <p>
        A full-stack site, rebuilt from the ground up to match the Alif brand
        and give the client control of their own content.
      </p>
      <p>
        The homepage introduces both the brokerage and the development side
        with a clean editorial layout, animated metrics and clear routes to get
        in touch. The about page shows the team with interactive profiles, and
        the projects section lays out the portfolio in a grid that adapts to
        any screen.
      </p>
      <Lanes
        title="How the site is wired"
        lanes={[
          {
            label: "Listings",
            steps: [
              { title: "IDX Broker API", detail: "Buy, Rent, Sell feeds" },
              { title: "Next.js", detail: "Fetch + render in Alif branding" },
              { title: "Listing tabs", detail: "One tab per IDX feed" },
            ],
          },
          {
            label: "Client control",
            steps: [
              { title: "Admin portal", detail: "Auth-protected", human: true },
              { title: "API routes", detail: "Protected admin endpoints" },
              { title: "PostgreSQL", detail: "site_settings with migrations" },
              { title: "Live site", detail: "WhatsApp button, business settings" },
            ],
          },
        ]}
      />

      <h3>IDX Broker integration</h3>
      <p>
        Live listings come from the IDX Broker API and render in Alif&apos;s
        branding. Buy, Rent and Sell each have their own tab, matching how IDX
        structures the data.
      </p>

      <h3>Admin portal</h3>
      <p>
        A settings page lets the client manage site configuration without
        touching code. It sits behind authentication and stores everything in
        PostgreSQL, so the client controls their own content and business
        settings.
      </p>

      <h2>My role</h2>
      <p>
        I was part of the Anarchy Labs team on this project. I worked on the
        homepage redesign, the projects grid, the contact form updates, the
        WhatsApp button and its admin settings, and the settings page with its
        database migrations.
      </p>

      <h2>The AI angle</h2>
      <p>
        Real estate marketing is moving toward AI property matching, chatbots
        that qualify leads, and automatically written listing descriptions.
        The IDX integration is the base for that. The next step would be an AI
        layer that can take a request like &quot;Show me 3-bedroom apartments
        under 500K near downtown&quot; and return filtered IDX results. The
        website gets people in, and the AI layer would help them find the
        right listing once they&apos;re there. For more on getting a site like
        this cited by AI search, see my{" "}
        <Link href="/blog/optimize-website-for-ai-search-geo-2026">GEO playbook</Link>
        . The full case study is on the{" "}
        <Link href="/projects/alif-realty">Alif Realty project page</Link>.
      </p>

      <h2>Tech stack</h2>
      <ul>
        <li>Next.js with TypeScript</li>
        <li>IDX Broker API for property listings</li>
        <li>PostgreSQL with migrations for site_settings</li>
        <li>Auth-protected admin API routes</li>
        <li>Floating WhatsApp button configured from the admin</li>
      </ul>

      <h2>Results</h2>
      <p>
        The new site launched on Netlify with a clean, luxury look that fits
        the Alif brand. The client now manages their own content and WhatsApp
        settings without touching code, and the IDX integration pulls live
        listings straight into the site.
      </p>
    </>
  ),
};
