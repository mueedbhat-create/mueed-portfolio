import { resume } from "@/data/resume";

export default function Services() {
  return (
    <section id="services" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-5">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
          Services
        </p>
        <h2
          className="mt-4 text-3xl tracking-tight sm:text-5xl"
          style={{
            fontFamily: "var(--font-fraunces), Georgia, serif",
            fontWeight: 560,
          }}
        >
          What I <span className="text-gradient">do</span>
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          Automations, funnels and copy — built to move your metrics.
        </p>

        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {resume.services.map((s, i) => (
            <div key={s.title} className="border-t border-border pt-6">
              <p className="font-mono text-xs tracking-[0.14em] text-primary">
                ({String(i + 1).padStart(2, "0")})
              </p>
              <h3
                className="mt-3 text-xl tracking-tight"
                style={{
                  fontFamily: "var(--font-fraunces), Georgia, serif",
                  fontWeight: 600,
                }}
              >
                {s.title}
              </h3>
              <p className="mt-2.5 leading-relaxed text-muted-foreground">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
