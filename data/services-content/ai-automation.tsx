import Link from "next/link";

export function AiAutomationContent() {
  return (
    <>
      <h2>What is AI workflow automation?</h2>
      <p>
        Classic marketing automation moved data between tools. A form
        submission triggered an email. A new row appeared in a spreadsheet.
        Useful, but blind. AI workflow automation adds judgment to that flow.
        The system reads a lead&apos;s answers, checks their company, drafts a
        reply in your brand voice, routes hot prospects to a human and books
        the meeting, all within minutes of the form submission.
      </p>
      <p>
        I build these systems with n8n, Zapier, Make and large language models
        accessed through the OpenAI API. The workflow platform handles
        triggers, timing and handoffs. The LLM handles the parts that used to
        need a person: understanding context, writing text and making simple
        decisions. When the work depends on your own material, like product
        docs or sales scripts, I wire in retrieval (RAG) so the AI answers
        from your documents instead of guessing.
      </p>

      <h2>Signs your marketing operation needs this</h2>
      <ul>
        <li>
          Leads wait hours or days for a first reply, and hot ones go cold
          before anyone reaches out.
        </li>
        <li>
          Someone spends hours every week copying data between forms, sheets,
          your CRM and your email tool.
        </li>
        <li>
          Content production stalls because research and first drafts eat the
          calendar, even though publishing matters more.
        </li>
        <li>
          Reporting is a Friday ritual of screenshots and manual exports that
          is stale the moment it is done.
        </li>
        <li>
          Follow-up stops when a campaign launches, because nobody has capacity
          for the second, third and fourth touch.
        </li>
      </ul>
      <p>
        If two or more of those sound familiar, the fix is rarely hiring more
        people. It is wiring the steps together so they happen without a human
        pushing each one.
      </p>

      <h2>What I build</h2>
      <ul>
        <li>
          Lead capture and routing. Forms, chatbots and calls feed one
          pipeline. Leads get enriched, scored and assigned to the right owner
          automatically.
        </li>
        <li>
          Automated follow-up. Personalized replies drafted by AI in your
          voice, sent on a schedule that responds to whether the lead engaged,
          replied or went quiet.
        </li>
        <li>
          Voice agents and chat flows. Automated phone and chat assistants
          that qualify leads, answer common questions and book meetings into a
          live calendar.
        </li>
        <li>
          Content engines. Research, outlining, first drafts and scheduling run
          as a pipeline, with a human editor approving anything that ships.
        </li>
        <li>
          Reporting that writes itself. Numbers pulled from your ad and
          analytics accounts, summarized in plain language, delivered where
          your team already works.
        </li>
      </ul>

      <h2>How a project runs</h2>
      <p>
        Every engagement starts with a{" "}
        <Link href="/services/ai-strategy">workflow audit</Link>. We map what
        your team actually does each week, hour by hour, and score each task on
        volume, repetitiveness and rules. The top-scoring tasks become the
        build list, ordered by payback speed. You see the map, the plan and the
        expected hours saved before a single workflow is built.
      </p>
      <p>
        Builds ship in small pieces. First the capture, then the follow-up,
        then the content engine. Each piece goes live behind your team, not
        instead of them, so trust grows with every delivery. Documentation and
        a recorded walkthrough come with every workflow, plus monitoring that
        alerts before things break quietly. Most clients run their first
        meaningful automation inside two weeks.
      </p>

      <h2>Tools I work with</h2>
      <p>
        n8n when you want self-hosted control and complex logic at low cost.
        Zapier and Make when speed to launch matters more than flexibility.
        The OpenAI API for drafting, summarizing, classifying and deciding.
        Python glue where no connector exists. I choose per workflow, not per
        fashion, and I document why each piece was picked so your team can
        maintain it.
      </p>

      <h2>Results from real work</h2>
      <p>
        At <a href="https://www.anarchylabs.in">Anarchy Labs</a>, the systems I
        build run daily: automated voice agents qualify inbound leads, n8n
        workflows move data between the tools the team already uses, and LLM
        pipelines turn client documents into working knowledge bases. On the
        client side, an AI-assisted campaign system lifted brand visibility by
        35% and engagement by 28%. An editorial automation pipeline cut
        revision cycles by 25%, which meant the same team published more
        without working nights.
      </p>
      <p>
        If you want the tooling decision broken down first,{" "}
        <Link href="/blog/n8n-vs-zapier-vs-make-marketing">
          my n8n vs Zapier vs Make comparison
        </Link>{" "}
        covers which platform fits which kind of team.
      </p>
    </>
  );
}
