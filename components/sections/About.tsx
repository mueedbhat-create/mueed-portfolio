import { resume } from "@/data/resume";
import { BlurFade } from "@/components/magicui/blur-fade";
import { NumberTicker } from "@/components/magicui/number-ticker";

export default function About() {
  return (
    <section id="about" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <BlurFade>
              <h2
                className="text-3xl font-bold tracking-tight sm:text-4xl"
                style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}
              >
                Words that <span className="text-gradient">drive decisions.</span>
              </h2>
            </BlurFade>
            <BlurFade delay={0.1}>
              <div className="mt-6 space-y-4 text-muted-foreground">
                {resume.about.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </BlurFade>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {resume.stats.map((s, i) => (
              <BlurFade key={s.label} delay={0.1 * i}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6">
                  <NumberTicker
                    value={s.value}
                    suffix={s.suffix}
                    className="text-4xl font-bold text-gradient"
                  />
                  <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}