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
        <p>
          A full-stack website for a luxury real estate brokerage — redesigned
          from the ground up to match the Alif brand and give the client full
          control over their content.
        </p>
        <p>
          The homepage introduces both the brokerage and development arms with
          a clean editorial layout, animated metrics, and clear conversion
          paths. The about page showcases the team with interactive profiles.
          The projects section presents the portfolio in a structured grid that
          adapts across devices.
        </p>
        <p>
          On the backend, we integrated live property listings through IDX
          Broker, built an admin portal where the client can manage site
          settings without touching code, and simplified the contact flow to
          reduce friction on inbound leads. The entire stack is built on
          Next.js with TypeScript, backed by PostgreSQL, and deployed on
          Netlify.
        </p>

        <h2>My role</h2>
        <p>
          I was part of the team at Anarchy Labs that built this. My work
          covered the frontend development across the site, from the homepage
          and project pages to the contact form, admin portal, and third-party
          API integrations.
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
  {
    slug: "oculon-product-marketing-strategy",
    title: "Oculon: Product Marketing Strategy & Positioning Research",
    description:
      "Competitive analysis, segment selection, go-to-market positioning, and a 30-day launch plan for an AI-native finance platform.",
    intro:
      "Oculon is an AI-native system of work for finance. The assignment was to pick a segment, map the competitive set, develop a positioning strategy, and deliver a 30-day go-to-market plan. Everything had to be sourced from public data.",
    date: "2026-09-07",
    tags: ["Product Marketing", "Competitive Analysis", "Positioning", "Go-to-Market"],
    role: "Solo project",
    readingMinutes: 5,
    featured: false,
    content: (
      <>
        <h2>The brief</h2>
        <p>
          Oculon needed a product marketing strategy built from scratch. The
          work covered segment selection, competitive mapping, positioning,
          pricing analysis, distribution planning, homepage messaging, and a
          30-day launch plan. Every recommendation had to be sourced from
          public data — the website, pricing page, launch post, job ads, and
          about forty public sources on companies that tried this before.
        </p>

        <h2>The problem</h2>
        <p>
          The company website called Oculon four different things across four
          pages. A buyer who reads two of them does not know what the product
          does. The first job was to fix that before building anything on top
          of it.
        </p>

        <h2>What I delivered</h2>
        <p>
          A complete positioning deck covering segment analysis, competitive
          mapping, go-to-market messaging, pricing review, distribution
          strategy, and a detailed 30-day launch plan with built-in kill
          criteria. The segment analysis identified the right buyer and
          documented two rejected segments with reasoning for each. The
          competitive map ranked competitors by real threat over twelve months.
          The positioning work resulted in a specific day-one messaging
          strategy and a proposed homepage headline focused on the job the
          product does, not the category it belongs to.
        </p>

        <h2>The approach</h2>
        <p>
          I started with what the company already said about itself. Four
          contradictory descriptions on four pages became the opening slide —
          not as criticism, but as proof that the positioning work had not
          been done yet. Every recommendation was backed by a source, every
          number was either linked on the slide it appeared on or tagged as an
          assumption. Six claims were removed during the process because they
          could not be supported.
        </p>

        <h2>What it shows</h2>
        <p>
          This is the kind of work that sits between research and strategy.
          It is not design. It is not code. It is reading everything, mapping
          the landscape, making a call, and being specific enough about what
          would prove the call wrong that the team can act on it without
          waiting for more research.
        </p>
      </>
    ),
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((s) => s.slug === slug);
}
