import { Badge } from "@/components/ui/badge";
import { resume } from "@/data/resume";
import { Marquee } from "@/components/magicui/marquee";

function SectionLabel({ s }: { s: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
      <span className="h-2 w-2 rounded-full bg-blue-400" />
      {s}
    </span>
  );
}

export default function TechStack() {
  const skills = Object.entries(resume.skills);

  return (
    <section id="skills" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2
          className="text-3xl font-bold tracking-tight sm:text-4xl"
          style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}
        >
          Skills & <span className="text-gradient">expertise</span>
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {skills.map(([group, items]) => (
            <div key={group} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-semibold text-blue-400">{group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <Badge key={item} variant="secondary" className="font-normal">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 space-y-3">
          <Marquee>
            {resume.tech.map((t) => (
              <span key={t} className="rounded-xl border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
                {t}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}