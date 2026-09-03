import type { ReactNode } from "react";
import Link from "next/link";

export type CaseStudy = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  date: string;
  tags: string[];
  role: string;
  readingMinutes: number;
  featured?: boolean;
  link?: string;
  content: ReactNode;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "jobtailor",
    title: "JobTailor: AI Job Application Automation",
    description:
      "A full-stack AI pipeline that scrapes 8+ remote job sources, tailors a LaTeX resume per job using LLMs, compiles PDFs, and opens applications for human-in-the-loop submit. Runs daily at 7am.",
    intro:
      "JobTailor is an open-source tool I built to automate the most repetitive part of job hunting: finding roles, rewriting your resume for each one, and preparing the application. It runs every morning, finds 15+ remote jobs, and hands you a stack of tailored PDFs ready to submit.",
    date: "2026-08-19",
    tags: ["Python", "LLMs", "FastAPI", "Next.js", "Scrapling", "LaTeX"],
    role: "Solo build",
    readingMinutes: 6,
    featured: true,
    link: "https://github.com/mueedbhat-create/jobtailor",
    content: (
      <>
        <h2>The problem</h2>
        <p>
          Job hunting means trawling multiple job boards, reading each
          description, rewriting your resume to match, and repeating that for
          every application. Most people either send the same generic resume
          everywhere or spend hours tailoring by hand.
        </p>

        <h2>What it does</h2>
        <p>
          JobTailor is a pipeline with five stages. Each stage does one thing
          and hands the result to the next:
        </p>
        <ul>
          <li>
            <strong>Find jobs</strong> — searches multiple job boards and
            company career pages. Everything is filtered to remote-only.
          </li>
          <li>
            <strong>Read jobs</strong> — pulls the full job description and
            extracts the skills and requirements the employer wants.
          </li>
          <li>
            <strong>Rewrite resume</strong> — an LLM adjusts a LaTeX resume
            to highlight matching skills. Each version lives on its own git
            branch. The original is never touched.
          </li>
          <li>
            <strong>Make PDF</strong> — compiles the rewritten LaTeX into a
            ready-to-upload PDF.
          </li>
          <li>
            <strong>Open applications</strong> — opens each job&apos;s
            application page with the tailored PDF pre-attached. You review
            and click Submit.
          </li>
        </ul>

        <h2>The guardrail</h2>
        <p>
          The AI never invents skills or experience. It only rephrases,
          reorders, and emphasises what is already on the resume. Nothing
          ships that you could not defend in an interview.
        </p>

        <h2>Tech stack</h2>
        <ul>
          <li>Python package with five pipeline stages</li>
          <li>Scrapling for anti-bot job scraping</li>
          <li>LLM API for resume tailoring (OpenAI-compatible)</li>
          <li>Tectonic for LaTeX to PDF compilation</li>
          <li>Next.js + FastAPI dashboard for monitoring runs</li>
          <li>ego-browser for application auto-fill</li>
          <li>macOS LaunchAgent for daily scheduling</li>
        </ul>

        <h2>Results</h2>
        <p>
          The pipeline runs daily and produces a stack of tailored
          applications every morning. What used to take hours of manual work
          now takes minutes of review. Each resume is customised to the
          specific job description, and the human reviews every application
          before it goes out.
        </p>

        <p>
          The project is open source. Anyone can install it, point it at
          their own resume and job keywords, and run their own automated job
          search.
        </p>
      </>
    ),
  },
  {
    slug: "starboard",
    title: "Starboard: Review Collection SaaS for Indian Businesses",
    description:
      "A customer review collection platform with QR-code scanning at counters, multi-platform routing to Google, Zomato, Practo, Justdial and TripAdvisor, staff leaderboards, AI-drafted reviews, and a real-time analytics dashboard.",
    intro:
      "Starboard helps Indian local businesses collect more customer reviews by making it effortless. A QR code at the counter, a quick scan, and the customer is routed to the right review platform for their business category. Staff compete on live leaderboards. The dashboard shows everything in real time.",
    date: "2025-06-01",
    tags: ["Next.js", "TypeScript", "QR Codes", "AI Reviews", "SaaS", "Payments"],
    role: "Built at Anarchy Labs",
    readingMinutes: 5,
    featured: true,
    link: "https://getbetterreviews.online",
    content: (
      <>
        <h2>The problem</h2>
        <p>
          Local businesses in India understand that reviews drive foot traffic,
          but collecting them remains a manual process. Staff have other
          priorities. Customers are unsure which platform to use. The result is
          a low volume of reviews spread thin across Google, Zomato, Practo,
          Justdial, and TripAdvisor.
        </p>

        <h2>What it does</h2>
        <ul>
          <li>
            <strong>QR code at the counter</strong> — customers scan with
            their phone. No app download, no login required.
          </li>
          <li>
            <strong>Multi-platform routing</strong> — the system detects the
            business category and routes the customer to the correct review
            platform. Restaurants go to Zomato. Clinics go to Practo. Retail
            shops go to Google or Justdial.
          </li>
          <li>
            <strong>Staff attribution and leaderboards</strong> — each QR scan
            is tied to the staff member on shift. Live leaderboards surface
            who is generating the most reviews, turning collection into a
            measurable activity.
          </li>
          <li>
            <strong>AI-drafted reviews</strong> — for customers who want to
            leave a review but are unsure what to write, the system generates
            a suggested draft based on their rating. They can edit or post
            as-is.
          </li>
          <li>
            <strong>Real-time analytics dashboard</strong> — track reviews
            collected, platform breakdown, staff performance, and trends
            over time.
          </li>
        </ul>

        <h2>My role</h2>
        <p>
          I worked on this as part of the engineering team at Anarchy Labs. My
          work covered the full stack: Next.js frontend, TypeScript, QR code
          generation and scanning logic, the multi-platform routing system,
          and the analytics dashboard.
        </p>

        <h2>Tech stack</h2>
        <ul>
          <li>Next.js and TypeScript across the stack</li>
          <li>QR code generation and mobile scanning flow</li>
          <li>Multi-platform API integrations (Google, Zomato, Practo)</li>
          <li>Real-time dashboard with live data</li>
          <li>Payment integration for subscription billing</li>
        </ul>

        <h2>Results</h2>
        <p>
          Starboard is live at getbetterreviews.online and serving businesses
          across India. The QR-to-review flow removes the friction from
          review collection, and the leaderboard mechanic gives staff a
          measurable reason to keep driving it.
        </p>
      </>
    ),
  },
  {
    slug: "alif-realty",
    title: "Alif Realty: Luxury Real Estate Website Redesign",
    description:
      "A full website redesign for a luxury real estate brokerage — Next.js, IDX Broker API integration, admin portal with configurable settings, WhatsApp button, and redesigned About, Projects, Home, and Contact pages.",
    intro:
      "Alif Realty is a luxury real estate brokerage. I was part of the team that redesigned their website from the ground up: a new homepage, about page with founder bios, editorial project grid, simplified contact form, IDX Broker integration for live listings, and an admin portal the client can manage themselves.",
    date: "2026-08-13",
    tags: ["Next.js", "IDX Broker", "Admin Portal", "WhatsApp", "Luxury Real Estate"],
    role: "Built at Anarchy Labs",
    readingMinutes: 5,
    link: "https://spiffy-otter-729f8b.netlify.app/#about",
    content: (
      <>
        <h2>The brief</h2>
        <p>
          Alif Realty needed a website that matched their brand: luxury real
          estate with a Mediterranean aesthetic. The old site had stock imagery,
          a confusing navigation, and no way for the client to update content
          themselves.
        </p>

        <h2>What we built</h2>
        <ul>
          <li>
            <strong>Homepage</strong> — brokerage and development split section
            with a pull quote, streamlined CTA, and animated stats counter on
            scroll.
          </li>
          <li>
            <strong>About page</strong> — redesigned team section with compact
            founder portraits and a hover "View Bio" overlay showing specialty,
            markets, and focus. Real founder bios replaced placeholders.
          </li>
          <li>
            <strong>Projects page</strong> — replaced the full-bleed alternating
            layout with a seamless editorial grid. Uniform cards with image,
            gradient overlay, and project details.
          </li>
          <li>
            <strong>Contact form</strong> — simplified to name, email, phone,
            and an optional message. Name, email, and phone are required.
          </li>
          <li>
            <strong>WhatsApp button</strong> — floating button with the Alif
            logo. Number is configurable from the admin portal, not hardcoded.
          </li>
          <li>
            <strong>IDX Broker integration</strong> — live property listings
            fetched via IDX Broker API, rendered in Alif branding.
          </li>
          <li>
            <strong>Admin portal</strong> — settings page where the client can
            configure the WhatsApp number. Protected with auth. Database-backed
            with a new site_settings table.
          </li>
        </ul>

        <h2>My role</h2>
        <p>
          I was part of the team at Anarchy Labs that built this. I worked on
          the homepage redesign, the projects grid, the contact form updates,
          the WhatsApp button with its admin-configurable backend, and the
          settings page with database migrations.
        </p>

        <h2>Tech stack</h2>
        <ul>
          <li>Next.js with TypeScript</li>
          <li>IDX Broker API for property listings</li>
          <li>PostgreSQL with migrations for site_settings</li>
          <li>Auth-protected admin API routes</li>
          <li>Floating WhatsApp button with admin configuration</li>
        </ul>

        <h2>Results</h2>
        <p>
          The redesigned site launched on Netlify with a clean, luxury aesthetic
          that matches the Alif brand. The client can now manage their own
          content and WhatsApp settings without touching code. The IDX
          integration pulls live listings directly into the site.
        </p>
      </>
    ),
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((s) => s.slug === slug);
}
