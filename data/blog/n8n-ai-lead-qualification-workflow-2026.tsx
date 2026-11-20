import Link from "next/link";
import { Flow, Decision } from "@/components/blog/figures";
import type { BlogPost } from "./types";

export const post: BlogPost = {
  slug: "n8n-ai-lead-qualification-workflow-2026",
  title: "How to build an AI lead qualification workflow in n8n",
  description:
    "A step-by-step n8n build that scores inbound leads with an LLM against your ideal customer profile, returns structured JSON, routes hot leads to sales and nurtures the rest.",
  intro:
    "An AI lead qualification workflow reads every inbound lead, scores it against your ideal customer profile and sends it to the right place without anyone triaging the inbox. In n8n the core of it is five nodes. A Webhook receives the form submission. An HTTP Request fetches the lead's company website. An AI step compares the lead's answers and website to a written ideal customer profile and returns structured JSON with a fit score, a hot, warm or cold label, a one-line reason and a suggested next step. A Switch node routes on that label: hot leads go to the CRM with a Slack alert so a person calls them, warm leads get a personal email drafted for review, and cold leads join a nurture sequence. The two things that make it reliable are forcing the model to return JSON against a fixed schema, and writing the ideal customer profile down as explicit rules instead of leaving the model to guess what a good lead looks like.",
  date: "2026-11-04",
  keywords: [
    "AI lead qualification",
    "n8n lead scoring",
    "lead qualification workflow",
    "automate lead routing with AI",
  ],
  category: "AI Automation",
  readingMinutes: 7,
  content: (
    <>
      <h2>What we&apos;re building</h2>
      <Flow
        title="Lead qualification workflow in n8n"
        steps={[
          { title: "Webhook", detail: "Form submission arrives" },
          { title: "HTTP Request", detail: "Fetch company website" },
          { title: "AI score", detail: "JSON: score, label, reason" },
          { title: "Switch", detail: "Route on hot / warm / cold" },
          { title: "Act", detail: "Call, review email, or nurture", human: true },
        ]}
        caption="The human step is the sales call on hot leads and the review of warm-lead emails."
      />

      <h2>Step 1: Write the ideal customer profile as rules</h2>
      <p>
        This is the step most people skip, and it decides whether the scores
        mean anything. Don&apos;t ask the model to judge &quot;good
        leads&quot;. Write down what good looks like in a form the model can
        check:
      </p>
      <ul>
        <li>Who you serve: industry, company size, location.</li>
        <li>Signals of a strong fit: budget range given, timeline under three months, a named problem you solve.</li>
        <li>Signals of a poor fit: students, job seekers, vendors pitching you, competitors.</li>
        <li>Deal-breakers: services you don&apos;t offer, regions you can&apos;t serve.</li>
      </ul>
      <p>
        Keep this in one place, like a Google Doc or an n8n variable, so you can
        update it without editing the workflow.
      </p>

      <h2>Step 2: Receive the lead</h2>
      <p>
        Add a Webhook node and point your form tool (Typeform, Tally, a site
        form) at its URL. Submit a test entry so n8n can see the fields: name,
        email, company, website and whatever questions your form asks.
      </p>

      <h2>Step 3: Enrich with the company website</h2>
      <p>
        Add an HTTP Request node that GETs the website the lead entered. You
        only need the text, so strip the HTML before passing it on, either with
        n8n&apos;s HTML node or a short Code node. If the lead left the field
        empty or used a personal email domain, skip this step with an IF node.
      </p>

      <h2>Step 4: Score with structured output</h2>
      <p>
        This is the AI step. Give the model the ideal customer profile, the
        form answers and the website text, and ask for JSON that matches a
        fixed schema:
      </p>
      <blockquote>
        {`{ "fit_score": 0-100, "label": "hot" | "warm" | "cold", "reason": "one sentence", "next_step": "call" | "email" | "nurture" }`}
      </blockquote>
      <p>
        Forcing a schema matters because the next node routes on the label. If
        the model sometimes writes &quot;Hot&quot;, sometimes &quot;HOT
        lead!&quot; and sometimes a paragraph, the Switch breaks. You can do
        this with n8n&apos;s AI nodes plus a structured output parser, or call
        the API directly with a JSON schema. I covered when to use which in{" "}
        <Link href="/blog/openai-api-vs-n8n-ai-nodes-2026">
          OpenAI API vs n8n AI nodes
        </Link>
        .
      </p>
      <p>
        Tell the model to base its reason only on what the lead wrote and what
        the website says, and to label the lead cold when the information is
        too thin to judge. A cautious cold label costs you a nurture email. A
        confident hot label on a bad lead costs a salesperson&apos;s time.
      </p>

      <h2>Step 5: Route on the label</h2>
      <Decision
        title="What happens to each label"
        rows={[
          { question: "Hot: strong fit, clear need, near-term timeline", answer: "CRM + Slack alert, call today" },
          { question: "Warm: decent fit, missing budget or timeline", answer: "Draft personal email for review", tone: "both" },
          { question: "Cold: poor fit or not enough information", answer: "Nurture sequence", tone: "b" },
        ]}
      />
      <p>
        Add a Switch node on the label field with three outputs. Hot leads go
        to your CRM with the reason attached, plus a Slack message to whoever
        handles sales. Warm leads get an AI-drafted personal email that lands
        in a review queue, not straight in their inbox. Cold leads are tagged
        and added to a nurture sequence in your email tool.
      </p>

      <h2>Step 6: Check it before you trust it</h2>
      <p>
        Before you switch it on, run 20 or 30 past leads through it, where you
        already know which ones turned into customers. Compare the labels with
        what really happened. If good leads are coming out cold, your profile
        rules are too strict or too vague. Keep the reason field in the CRM so
        your sales team can flag scores that look wrong, and use those flags to
        tighten the rules every few weeks.
      </p>

      <h2>Where to take it next</h2>
      <p>
        Once scoring works, you can ground the warm-lead emails in your own
        service and pricing documents with{" "}
        <Link href="/blog/rag-for-marketing-2026">RAG</Link>, or have hot leads
        get a call within minutes from a{" "}
        <Link href="/blog/ai-voice-agents-lead-follow-up-2026">voice agent</Link>{" "}
        that books the meeting. If you&apos;re new to n8n, start with the{" "}
        <Link href="/blog/n8n-beginners-first-ai-automation-30-minutes-2026">
          30-minute beginner tutorial
        </Link>{" "}
        first. I build lead workflows like this at{" "}
        <a href="https://www.anarchylabs.in/team/mueed-nazir-bhat">Anarchy Labs</a>.{" "}
        <Link href="/services/ai-automation">See AI automation services</Link> or{" "}
        <Link href="/#contact">start a workflow audit</Link>.
      </p>
    </>
  ),
};
