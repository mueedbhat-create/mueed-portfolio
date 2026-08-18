import { resume } from "@/data/resume";
import { BlurFade } from "@/components/magicui/blur-fade";

export default function About() {
  return (
    <section id="about" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <BlurFade>
          <h2
            className="max-w-xl text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}
          >
            Words that <span className="text-gradient">drive decisions.</span>
          </h2>
        </BlurFade>
        <BlurFade delay={0.1}>
          <div className="mt-6 max-w-xl space-y-4 text-muted-foreground">
            {resume.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </BlurFade>
        <BlurFade delay={0.2}>
          <div className="mt-10 max-w-xl rounded-2xl border border-border bg-card/60 p-6">
            <h3
              className="text-lg font-bold tracking-tight"
              style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}
            >
              What does an AI automation &amp; performance marketing specialist do?
            </h3>
            <p className="mt-3 text-muted-foreground">
              An AI automation and performance marketing specialist helps teams
              eliminate busywork and grow with AI. I start by mapping repetitive
              marketing tasks — lead capture, follow-up, content research,
              drafting and publishing — then automate them with LLMs, n8n,
              Zapier and Make, so the workflow runs itself while the strategy
              stays human. On the performance side, I design funnels and paid
              campaigns tuned to the numbers that matter: CTR, ROAS and
              conversion rate. The two skills compound. In recent client work,
              AI-assisted campaigns lifted brand visibility by 35% and
              engagement by 28%, and automated content workflows cut production
              time and revision cycles by 25%. The result is a marketing
              operation that ships faster, spends smarter and scales without
              adding headcount.
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}