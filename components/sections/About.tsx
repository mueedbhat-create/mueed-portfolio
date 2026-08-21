import { resume } from "@/data/resume";

export default function About() {
  return (
    <section id="about" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-5">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
          About
        </p>
        <h2
          className="mt-4 max-w-2xl text-3xl leading-tight tracking-tight sm:text-5xl"
          style={{
            fontFamily: "var(--font-fraunces), Georgia, serif",
            fontWeight: 560,
          }}
        >
          Words that <span className="text-gradient">drive decisions.</span>
        </h2>

        <div className="mt-8 max-w-xl space-y-4 leading-relaxed text-muted-foreground">
          {resume.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-14 max-w-xl border-y border-border py-8">
          <h3
            className="text-xl leading-snug tracking-tight"
            style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontWeight: 600,
            }}
          >
            What does an AI automation &amp; performance marketing specialist do?
          </h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            An AI automation and performance marketing specialist helps teams
            eliminate busywork and grow with AI. I start by mapping repetitive
            marketing tasks — lead capture, follow-up, content research,
            drafting and publishing. Then I automate them with LLMs, n8n,
            Zapier and Make. The workflow runs itself while the strategy stays
            human.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            On the performance side, I design funnels and paid campaigns tuned
            to the numbers that matter: CTR, ROAS and conversion rate. The two
            skills compound. In recent client work, AI-assisted campaigns
            lifted brand visibility by 35% and engagement by 28%. Automated
            content workflows cut production time and revision cycles by 25%.
            The result is a marketing operation that ships faster, spends
            smarter and scales without adding headcount.
          </p>
        </div>
      </div>
    </section>
  );
}
