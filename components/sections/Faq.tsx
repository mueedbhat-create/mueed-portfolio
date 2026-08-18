import { resume } from "@/data/resume";

const faqs = [
  {
    q: "What is AI workflow automation for marketing?",
    a: "AI workflow automation uses AI tools like LLMs, n8n, Zapier and Make to automate repetitive marketing tasks — from lead capture and follow-up to content research and publishing. Instead of a person copying data between tools, an automated workflow triggers, transforms and hands off the work, so marketing teams ship faster with fewer manual hours.",
  },
  {
    q: "How do you combine AI with performance marketing?",
    a: "AI speeds up the testing and content side while performance marketing governs the numbers. I use AI for research, ad copy, landing pages and campaign iteration, then measure everything against CTR, ROAS and conversion rate. In recent client work this combination lifted brand visibility by 35% and engagement by 28%.",
  },
  {
    q: "Which tools and platforms do you work with?",
    a: "I build automations with n8n, Zapier and Make, using LLMs and the OpenAI API for content and reasoning, and RAG for working with a client's own documents. On the marketing side I work with funnels, paid ads, analytics and A/B testing — and I write all the copy myself.",
  },
  {
    q: "What results can AI-assisted copy and content deliver?",
    a: "AI-assisted editorial workflows reduce production time and revision cycles — I've seen revision cycles cut by 25% on blogs, articles and promotional copy. The key is keeping the human editor in control: AI handles research and first drafts, and persuasive brand voice stays with a skilled copywriter.",
  },
  {
    q: "How do we get started with AI automation?",
    a: "Start with a workflow audit. I review the repetitive tasks eating your team's time, pick the highest-leverage automations, and build a roadmap. Contact me via the form below with what's slowing you down, and I'll come back with a plan to automate it.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2
          className="text-3xl font-bold tracking-tight sm:text-4xl"
          style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}
        >
          Frequently asked <span className="text-gradient">questions</span>
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Straight answers on AI automation, performance marketing and how we&apos;d
          work together.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {faqs.map((f) => (
            <div
              key={f.q}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <h3 className="font-semibold leading-snug">{f.q}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-muted-foreground">
          Have a different question? Ask via the contact form below — I usually
          reply within a day. · {resume.email}
        </p>
      </div>
    </section>
  );
}
