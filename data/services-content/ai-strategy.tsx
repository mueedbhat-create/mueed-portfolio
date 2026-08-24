import Link from "next/link";

export function AiStrategyContent() {
  return (
    <>
      <h2>What is AI strategy and consulting?</h2>
      <p>
        AI strategy is deciding where automation actually pays off in your
        business before anyone builds anything. Most teams skip that step.
        They see a demo, buy a tool, wire it into the wrong process and
        conclude AI does not work for them. The tool was never the problem.
        The problem was picking tasks by novelty instead of by leverage.
      </p>
      <p>
        My consulting starts with an audit of how work really happens: what
        your team does every week, which of those tasks repeat, which follow
        rules, and what each one costs in hours. Then I score the candidates
        on volume, repetitiveness and risk, and hand you a roadmap ordered by
        payback speed. You get a document you can act on with any builder,
        including me if you want to continue together.
      </p>

      <h2>What an engagement covers</h2>
      <ul>
        <li>
          Workflow audit. Hour-by-hour mapping of your marketing and ops
          processes, with the repetitive and rules-based work flagged.
        </li>
        <li>
          Opportunity scoring. Every candidate task rated on hours consumed,
          error cost and how cleanly it can be automated today.
        </li>
        <li>
          Tool selection. Honest picks between n8n, Zapier, Make and custom
          API builds, based on your team&apos;s skills and budget rather than
          hype. The trade-offs are laid out in my{" "}
          <Link href="/blog/n8n-vs-zapier-vs-make-marketing">
            comparison of the three platforms
          </Link>
          .
        </li>
        <li>
          Build-vs-buy roadmap. A sequenced plan: what ships first, what it
          should save, and what to deliberately leave alone.
        </li>
        <li>
          Team enablement. Prompt-writing basics and guardrails so your people
          can use the new systems without becoming engineers.
        </li>
      </ul>

      <h2>The audit process, step by step</h2>
      <p>
        First call: we walk through a typical week and I list every recurring
        task I hear. Second pass: your team estimates hours and annoyance per
        task, which usually surfaces surprises about where time really goes.
        Third: I map data flows between your tools and mark where judgment is
        genuinely needed versus where a model plus rules suffices. The final
        deliverable ranks opportunities with expected monthly hours saved and
        a realistic build order.
      </p>
      <p>
        Typical outcome: three to five automations worth building immediately,
        a couple worth scheduling next quarter, and several explicitly not
        worth touching. Knowing what not to automate is half the value. It is
        also where most DIY attempts burn out, chasing chatbot demos instead
        of fixing lead follow-up.
      </p>

      <h2>How this connects to everything else</h2>
      <p>
        Strategy is the front door to the rest of my work. If the audit says
        your follow-up leaks leads, the fix is{" "}
        <Link href="/services/ai-automation">workflow automation</Link>. If
        your paid channels underperform, the roadmap feeds{" "}
        <Link href="/services/performance-marketing">
          performance marketing
        </Link>
        . If content is the bottleneck, we plan around the{" "}
        <Link href="/services/ai-copy-content">
          editorial pipeline
        </Link>{" "}
        instead of hiring reactively. You can take the roadmap to any builder;
        it is written to be executed, not to lock you in.
      </p>

      <h2>Who this is for</h2>
      <ul>
        <li>
          Leadership teams who keep hearing about AI and want a grounded view
          of what applies to their actual business.
        </li>
        <li>
          Marketing managers with mandate but no bandwidth to evaluate tools
          properly.
        </li>
        <li>
          Owners preparing to scale who need operations documented and
          automated before headcount grows.
        </li>
      </ul>
    </>
  );
}
