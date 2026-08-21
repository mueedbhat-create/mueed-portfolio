import { ArrowDown } from "lucide-react";
import { resume } from "@/data/resume";
import { PixelTypewriter, PixelDesktop } from "@/components/icons/pixel";

const strip = [
  {
    value: "03+",
    label: "Years marketing & copy",
    Icon: null,
  },
  {
    value: "Human",
    label: "Strategy, brand voice & judgment",
    Icon: PixelTypewriter,
  },
  {
    value: "Automated",
    label: "Research, drafts & follow-up",
    Icon: PixelDesktop,
  },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center">
      <div className="mx-auto w-full max-w-6xl px-5 py-24">
        <div className="grid items-end gap-12 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="inline-flex items-center gap-2.5 rounded-sm border border-border bg-card px-4 py-1.5 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {resume.available}
            </p>

            <h1
              className="mt-10 text-5xl leading-[1.02] tracking-tight sm:text-7xl md:text-8xl"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontWeight: 400,
              }}
            >
              <span className="block">{resume.name}</span>
              <span
                className="mt-4 block text-2xl font-normal italic leading-snug text-muted-foreground sm:text-3xl md:text-4xl"
                style={{ fontWeight: 400 }}
              >
                AI Automation &amp; Performance Marketing
              </span>
            </h1>

            <div className="mt-8 h-px w-24 bg-primary" aria-hidden />

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {resume.tagline}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="btn-sweep inline-flex items-center gap-2 rounded-sm bg-foreground px-6 py-3 text-sm font-medium text-background hover:text-primary-foreground"
              >
                View work <ArrowDown className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-sm border border-border bg-transparent px-6 py-3 text-sm font-medium transition-colors hover:border-primary hover:bg-muted hover:text-primary"
              >
                Let&apos;s talk
              </a>
            </div>
          </div>

          <div className="hidden flex-col gap-5 border-l border-border pl-8 pb-1 font-mono text-xs leading-relaxed lg:flex">
            <div>
              <p className="uppercase tracking-[0.14em] text-muted-foreground">
                Location
              </p>
              <p className="mt-1 text-foreground">{resume.location}</p>
            </div>
            <div>
              <p className="uppercase tracking-[0.14em] text-muted-foreground">
                Currently
              </p>
              <a
                href={resume.socials.anarchylabs}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline mt-1 inline-block text-foreground transition-colors hover:text-primary"
              >
                Anarchy Labs
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="ml-1 inline h-3 w-3 text-muted-foreground"
                  aria-hidden
                >
                  <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
            <div>
              <p className="uppercase tracking-[0.14em] text-muted-foreground">
                Say hello
              </p>
              <a
                href={`mailto:${resume.email}`}
                className="link-underline mt-1 inline-block text-foreground transition-colors hover:text-primary"
              >
                {resume.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 grid border-y border-border sm:grid-cols-3 sm:divide-x sm:divide-border">
          {strip.map((s) => {
            const Icon = s.Icon;
            return (
              <div
                key={s.label}
                className="border-b border-border px-6 py-7 last:border-b-0 sm:border-b-0 sm:px-8 sm:first:pl-0"
              >
                <p
                  className="text-4xl tracking-tight sm:text-5xl"
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontWeight: 400,
                  }}
                >
                  {s.value}
                </p>
                <p className="mt-3 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {Icon && (
                    <Icon className="h-[18px] w-[22px] shrink-0 opacity-80" />
                  )}
                  {s.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
