import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { resume } from "@/data/resume";
import { BlurFade } from "@/components/magicui/blur-fade";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-4xl px-5">
        <h2
          className="text-3xl font-bold tracking-tight sm:text-4xl"
          style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}
        >
          Experience
        </h2>

        <div className="mt-12 space-y-10">
          {resume.experience.map((e, i) => (
            <BlurFade key={e.company} delay={0.1 * i}>
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold">
                    {e.link ? (
                      <a
                        href={e.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 transition-colors hover:text-blue-400"
                      >
                        {e.company}
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="h-3.5 w-3.5"
                          aria-hidden
                        >
                          <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    ) : (
                      e.company
                    )}
                  </h3>
                  <span className="text-sm text-muted-foreground">{e.period}</span>
                </div>
                <p className="mt-1 text-sm text-blue-400">{e.role}</p>
                <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-muted-foreground">
                  {e.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
              {i < resume.experience.length - 1 && (
                <Separator className="mt-10" />
              )}
            </BlurFade>
          ))}
        </div>

        <div className="mt-14">
          <h3
            className="text-xl font-bold"
            style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}
          >
            Education
          </h3>
          <div className="mt-6 space-y-4">
            {resume.education.map((ed) => (
              <div
                key={ed.institution}
                className="flex flex-wrap items-baseline justify-between gap-2 rounded-2xl border border-border bg-card p-5"
              >
                <div>
                  <p className="font-medium">{ed.degree}</p>
                  <p className="text-sm text-muted-foreground">{ed.institution}</p>
                </div>
                <Badge variant="secondary">{ed.year}</Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}