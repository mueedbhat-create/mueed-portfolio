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
      </div>
    </section>
  );
}