import { resume } from "@/data/resume";

export default function TechStack() {
  const skills = Object.entries(resume.skills);

  return (
    <section id="skills" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-5">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
          Skills
        </p>
        <h2
          className="mt-4 text-3xl tracking-tight sm:text-5xl"
          style={{
            fontFamily: "var(--font-fraunces), Georgia, serif",
            fontWeight: 560,
          }}
        >
          Skills &amp; <span className="text-gradient">expertise</span>
        </h2>

        <div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-3">
          {skills.map(([group, items]) => (
            <div key={group} className="border-t border-border pt-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-primary">
                {group}
              </h3>
              <p className="mt-4 leading-loose text-muted-foreground">
                {items.join(" · ")}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-border pt-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Tools
          </p>
          <p className="mt-4 flex flex-wrap gap-x-3 gap-y-2 font-mono text-sm text-muted-foreground">
            {resume.tech.map((t, i) => (
              <span key={t} className="transition-colors hover:text-primary">
                {t}
                {i < resume.tech.length - 1 && (
                  <span className="ml-3 text-border" aria-hidden>
                    /
                  </span>
                )}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
