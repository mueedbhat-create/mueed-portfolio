import Link from "next/link";
import { Flow, BarChart } from "@/components/blog/figures";
import type { BlogPost } from "./types";

export const post: BlogPost = {
  slug: "n8n-beginners-first-ai-automation-30-minutes-2026",
  title: "n8n for beginners: your first AI marketing automation in 30 minutes",
  description:
    "A step-by-step guide to building your first AI powered marketing automation in n8n. From zero to a working workflow in 30 minutes, no coding required.",
  intro:
    "n8n is a visual workflow automation tool: you connect nodes on a canvas, data flows from one to the next, and each node does one job. This tutorial builds a first AI marketing automation in about 30 minutes with no code. The workflow takes a blog post URL, fetches the page, asks an AI model to turn it into three social captions (LinkedIn, Twitter and Instagram) and appends them to a Google Sheet. It uses four nodes: a Manual Trigger, an HTTP Request, a Basic LLM Chain or AI Agent, and Google Sheets. You'll need a free n8n cloud trial, an OpenAI API key and a Google account. Once it works, you can swap the Manual Trigger for a Schedule Trigger so captions are ready every morning, and add a Slack review step before anything gets posted.",
  date: "2026-08-20",
  updated: "2026-11-16",
  keywords: [
    "n8n tutorial beginners",
    "first n8n workflow",
    "n8n AI automation tutorial",
    "build automation with n8n",
  ],
  category: "AI Automation",
  readingMinutes: 5,
  content: (
    <>
      <h2>What we are building</h2>
      <p>
        A workflow that takes a blog post URL, turns it into three social
        captions (LinkedIn, Twitter, Instagram) and saves them to a Google
        Sheet. It runs with one click.
      </p>
      <Flow
        title="The finished workflow"
        steps={[
          { title: "Manual Trigger", detail: "Click to run" },
          { title: "HTTP Request", detail: "GET the blog post" },
          { title: "Basic LLM Chain", detail: "Write 3 captions as JSON" },
          { title: "Google Sheets", detail: "Append one row" },
        ]}
      />
      <BarChart
        title="Time budget for each step"
        unit=" min"
        max={5}
        bars={[
          { label: "Set up n8n", value: 5 },
          { label: "Manual Trigger", value: 1 },
          { label: "HTTP Request", value: 5 },
          { label: "AI node", value: 5 },
          { label: "Google Sheets", value: 5 },
          { label: "Test", value: 5 },
          { label: "Schedule (optional)", value: 4, series: 2 },
        ]}
        caption="Adds up to 30 minutes including the optional scheduling step."
      />

      <h2>Step 1: Set up n8n (5 minutes)</h2>
      <p>
        Go to n8n.io and sign up for a free account. The cloud version is fine
        for this, and the trial gives you enough executions to test without a
        credit card. Open the workflow editor and you&apos;ll see a blank
        canvas.
      </p>

      <h2>Step 2: Add a Manual Trigger (1 minute)</h2>
      <p>
        Search for &quot;Manual Trigger&quot; in the node panel and drag it
        onto the canvas. It lets you start the workflow with a click instead
        of waiting for a webhook or a schedule.
      </p>

      <h2>Step 3: Add an HTTP Request node (5 minutes)</h2>
      <p>
        Add an HTTP Request node, set the method to GET and paste the blog
        post URL you want to summarize. This fetches the page. Public pages
        work with a plain GET; if the page sits behind a login you&apos;ll need
        to add headers.
      </p>

      <h2>Step 4: Add an AI node (5 minutes)</h2>
      <p>
        Add a &quot;Basic LLM Chain&quot; node, or &quot;AI Agent&quot; if you
        want tool access. Connect your OpenAI credentials under Settings, then
        Credentials, then add your OpenAI API key.
      </p>
      <p>In the prompt field, write something like:</p>
      <blockquote>
        Summarize this blog post into 3 social media captions: one for LinkedIn
        (professional, 150 words), one for Twitter (punchy, 280 characters),
        one for Instagram (casual, with hashtag suggestions). Return them as
        JSON with keys: linkedin, twitter, instagram.
      </blockquote>
      <p>Feed the HTTP Request output into the AI node as the text to summarize.</p>

      <h2>Step 5: Add a Google Sheets node (5 minutes)</h2>
      <p>
        Add a Google Sheets node, connect your Google account and set the
        operation to &quot;Append Row&quot;. Map the AI output to your columns:
        LinkedIn in column A, Twitter in B, Instagram in C.
      </p>

      <h2>Step 6: Test it (5 minutes)</h2>
      <p>
        Click &quot;Execute Workflow&quot; and watch each node light up as the
        data moves through. Three captions should appear in your sheet.
      </p>
      <p>
        If a node fails, click it and look at its input and output. The usual
        causes are a wrong API key, sheet column names that don&apos;t match,
        or the URL returning raw HTML instead of readable text.
      </p>

      <h2>Step 7: Schedule it (optional, 4 minutes)</h2>
      <p>
        Swap the Manual Trigger for a Schedule Trigger and set it to run daily
        at 9am. If a new post goes live overnight, its captions are waiting by
        breakfast.
      </p>

      <h2>What to build next</h2>
      <p>
        With this running you have the basic pattern. You can add branches
        (a different prompt per platform), error handling (retry when the API
        fails) or a notification that sends the captions to Slack for review
        before they&apos;re posted. Every addition works the same way: add a
        node, connect it, test it. For a wider comparison of platforms, read
        my{" "}
        <Link href="/blog/n8n-vs-zapier-vs-make-marketing">n8n vs Zapier vs Make</Link>{" "}
        breakdown, and for more quick wins, here are{" "}
        <Link href="/blog/5-marketing-tasks-automate-ai-this-week-2026">
          5 marketing tasks
        </Link>{" "}
        you can automate this week.
      </p>
    </>
  ),
};
