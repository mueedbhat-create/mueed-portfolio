import type { ReactNode } from "react";
import { AiAutomationContent } from "./services-content/ai-automation";
import { PerformanceMarketingContent } from "./services-content/performance-marketing";
import { AiCopyContentContent } from "./services-content/ai-copy-content";
import { AiStrategyContent } from "./services-content/ai-strategy";

export type ServiceFaq = {
  q: string;
  a: string;
};

export type Service = {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  keywords: string[];
  faqs: ServiceFaq[];
  relatedPosts: { slug: string; title: string }[];
  content: ReactNode;
};

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const services: Service[] = [
  {
    slug: "ai-automation",
    name: "AI Workflow Automation",
    title: "AI Workflow Automation for Marketing Teams",
    description:
      "End-to-end marketing automation built with n8n, Zapier, Make and LLMs. Lead capture, follow-up, content workflows and reporting that run without manual work.",
    intro:
      "AI workflow automation connects your marketing tools so repetitive work runs itself. A lead fills a form and gets a researched, personalized reply in minutes instead of days. Content research, drafting, scheduling and reporting happen on triggers, not on someone's to-do list. I design and build these systems with n8n, Zapier, Make and LLMs through the OpenAI API. Every project starts with an audit of where your team loses hours, then automates the highest-leverage tasks first: lead capture, follow-up, content production and reporting. Strategy and brand voice stay human. The busywork disappears. At Anarchy Labs I run these systems daily, from automated voice agents that qualify leads to content engines that draft and publish with a human editor in control.",
    keywords: [
      "AI workflow automation",
      "marketing automation services",
      "n8n automation consultant",
      "lead capture automation",
      "marketing workflow audit",
    ],
    faqs: [
      {
        q: "What does an AI workflow automation service include?",
        a: "It starts with a workflow audit: mapping every repetitive task in your marketing operation, from lead capture and follow-up to content production and reporting. Then the highest-leverage tasks get automated with tools like n8n, Zapier, Make and LLMs. You get documented, working workflows, training for your team, and a roadmap for what to automate next.",
      },
      {
        q: "Which tools do you build automations with?",
        a: "n8n for self-hosted flexibility, Zapier and Make for fast SaaS integrations, and the OpenAI API for the judgment work: reading leads, drafting replies, summarizing documents and routing decisions. I also build RAG pipelines when the workflow needs to answer from your own documents.",
      },
      {
        q: "How long does an automation project take?",
        a: "A focused build, like automated lead capture with AI-personalized follow-up, usually ships in one to two weeks. Larger systems with content engines, CRM sync and reporting take four to six weeks. Everything starts with a scoped audit so you know the timeline before any build begins.",
      },
      {
        q: "Will automation replace my marketing team?",
        a: "No. Automation removes the copy-paste work that keeps your team from doing real marketing. The strategy, brand voice and creative judgment stay with people. In my client work, teams kept the same headcount and shipped noticeably faster because nobody was manually moving data between tools anymore.",
      },
    ],
    relatedPosts: [
      {
        slug: "n8n-vs-zapier-vs-make-marketing",
        title:
          "n8n vs Zapier vs Make in 2026: Which Automation Tool Should Marketers Choose?",
      },
      {
        slug: "ai-agents-vs-workflows-marketing",
        title: "AI Agents vs Workflows: What Marketers Actually Need in 2026",
      },
      {
        slug: "ai-marketing-automation-guide-2026",
        title:
          "AI Marketing Automation: A Practical Guide for Small Teams (2026)",
      },
    ],
    content: <AiAutomationContent />,
  },
  {
    slug: "performance-marketing",
    name: "Performance Marketing",
    title: "Performance Marketing Tuned to CTR, ROAS and Conversion",
    description:
      "Funnels, paid campaigns and analytics tuned to the metrics that matter. CTR, ROAS and conversion rate, backed by market research and relentless testing.",
    intro:
      "Performance marketing is advertising governed entirely by numbers. Every campaign exists to move a metric you can point at: click-through rate, cost per acquisition, return on ad spend, conversion rate. I plan funnels, write the ads, launch across platforms, and read the data until the spend buys results instead of impressions. The approach pairs three skills that usually live in separate people: market research to find the angle worth testing, copywriting strong enough to survive the auction, and analytics discipline to kill losers fast and scale winners faster. In recent client work, campaigns built this way lifted brand visibility by 35% and engagement by 28%. Connect the funnel to automated follow-up through AI workflows and leads stop leaking between click and close.",
    keywords: [
      "performance marketing services",
      "ROAS optimization consultant",
      "paid ads funnel builder",
      "conversion rate optimization",
      "performance marketing freelancer",
    ],
    faqs: [
      {
        q: "What is performance marketing in simple terms?",
        a: "Performance marketing is paid advertising judged only by results you can measure: clicks, leads and sales. Campaigns are planned around a funnel, tracked against CTR, cost per acquisition and ROAS, and adjusted weekly. Budget follows the data instead of habit.",
      },
      {
        q: "How is this different from hiring an ads agency?",
        a: "One person owns research, copy, funnel and analytics instead of four separate specialists who barely talk. That removes the usual failure point where the ad promises one thing, the landing page says another, and nobody notices for a month.",
      },
      {
        q: "What results should I expect?",
        a: "Honest answer: it depends on your starting numbers. Recent client campaigns lifted brand visibility by 35% and engagement by 28%, and freelance funnel projects lifted engagement up to 40%. The first month establishes baseline and fixes; compounding usually shows from month two.",
      },
    ],
    relatedPosts: [
      {
        slug: "what-is-ai-automation-performance-marketing",
        title: "What Is AI Automation in Performance Marketing? (2026 Definition)",
      },
      {
        slug: "optimize-website-for-ai-search-geo-2026",
        title: "Optimize Your Website for AI Search (GEO) in 2026",
      },
    ],
    content: <PerformanceMarketingContent />,
  },
  {
    slug: "ai-copy-content",
    name: "AI-Assisted Copy & Content",
    title: "AI-Assisted Copy & Content That Keeps Your Brand Voice",
    description:
      "Ad copy, landing pages and SEO content produced with AI speed and human editorial skill. Brand voice stays consistent while production time drops.",
    intro:
      "AI-assisted copy and content means research and drafting get machine speed while persuasion stays human. AI handles keyword research, outlines, first drafts and variants. A working copywriter edits every piece for voice, claims and flow before it ships. I have run both sides of this pipeline professionally: three-plus years of copywriting before AI entered the picture, and now automated editorial workflows that cut client revision cycles by 25% while engagement rose as much as 40%. The services cover ad copy, landing pages, SEO articles, email sequences and brand voice systems your own team can reuse. If you want AI content that does not sound like everyone else's AI content, this is the discipline that gets you there.",
    keywords: [
      "AI copywriting services",
      "AI content marketing",
      "brand voice AI",
      "SEO content writer",
      "AI-assisted copywriting",
    ],
    faqs: [
      {
        q: "Will AI-written content hurt my SEO?",
        a: "Google rewards helpful, reliable content regardless of how it was produced. What hurts rankings is unedited, unoriginal output nobody would choose to read. Every piece passes human editing plus a check against what already ranks, which is also how content stays citable inside AI answers.",
      },
      {
        q: "Can you match our existing brand voice?",
        a: "Yes. Voice matching starts from your best existing material: pages, emails and campaigns that performed well. A style guide and prompt set gets built from those examples, so drafts start on-voice and the editing pass keeps them there.",
      },
      {
        q: "How fast can you deliver?",
        a: "A landing page or email sequence typically ships within a week. Blog articles run on a weekly cadence through the editorial pipeline, which keeps volume up without letting quality slip.",
      },
    ],
    relatedPosts: [
      {
        slug: "ai-copywriting-where-it-works-2026",
        title:
          "AI Copywriting in 2026: Where It Works, Where It Fails, and How to Keep Brand Voice",
      },
      {
        slug: "rag-for-marketing-2026",
        title: "RAG for Marketing: Grounding AI in Your Own Content (2026)",
      },
    ],
    content: <AiCopyContentContent />,
  },
  {
    slug: "ai-strategy",
    name: "AI Strategy & Consulting",
    title: "AI Strategy & Workflow Audits for Marketing Teams",
    description:
      "Workflow audits and AI roadmaps that show exactly where automation pays off fastest, which tools fit your team, and what to deliberately leave alone.",
    intro:
      "AI strategy decides where automation actually pays off before anyone builds anything. Most teams skip that step, buy a tool after a demo, wire it into the wrong process and conclude AI does not work for them. My consulting starts with an audit of how work really happens: which tasks repeat, which follow rules, what each costs in hours. Candidates get scored on volume, repetitiveness and risk, and you receive a roadmap ordered by payback speed. Typical outcome: three to five automations worth building immediately, a couple worth scheduling later, and several explicitly not worth touching. Knowing what not to automate is half the value. The roadmap is written to be executed by any builder, including me if you want to continue together.",
    keywords: [
      "AI consulting for marketing",
      "marketing workflow audit",
      "AI automation roadmap",
      "AI readiness assessment",
      "n8n consulting",
    ],
    faqs: [
      {
        q: "How long does an audit take?",
        a: "One to two weeks depending on team size. Small marketing teams are usually mapped inside a week, with the scored roadmap delivered in the same window.",
      },
      {
        q: "Do you implement what you recommend?",
        a: "Often, yes. Most audit clients continue with builds because the roadmap already scoped them. There is no obligation either way; the document stands on its own and can be handed to any developer or agency.",
      },
      {
        q: "We already tried automation and it failed. Can you help?",
        a: "Usually. Failed automation almost always traces back to automating the wrong task or an unmapped process. The audit finds those cases, and the roadmap either fixes the existing workflow or retires it honestly.",
      },
    ],
    relatedPosts: [
      {
        slug: "ai-agents-vs-workflows-marketing",
        title: "AI Agents vs Workflows: What Marketers Actually Need in 2026",
      },
      {
        slug: "optimize-website-for-ai-search-geo-2026",
        title: "Optimize Your Website for AI Search (GEO) in 2026",
      },
      {
        slug: "ai-marketing-automation-guide-2026",
        title:
          "AI Marketing Automation: A Practical Guide for Small Teams (2026)",
      },
    ],
    content: <AiStrategyContent />,
  },
];
