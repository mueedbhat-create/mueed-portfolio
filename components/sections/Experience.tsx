import { resume } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border py-24">
      <div className="mx-auto max-w-4xl px-5">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
          Career
        </p>
        <h2
          className="mt-4 text-3xl tracking-tight sm:text-5xl"
          style={{
            fontFamily: "var(--font-fraunces), Georgia, serif",
            fontWeight: 560,
          }}
        >
          Experience
        </h2>

        <div className="mt-14">
          {resume.experience.map((e, i) => (
            <div
              key={e.company}
              className={`py-10 ${i > 0 ? "border-t border-border" : "pt-0"}`}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3
                  className="text-2xl tracking-tight"
                  style={{
                    fontFamily: "var(--font-fraunces), Georgia, serif",
                    fontWeight: 600,
                  }}
                >
                  {e.link ? (
                    <a
                      href={e.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline"
                    >
                      {e.company}
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="ml-1.5 inline h-3.5 w-3.5 text-primary"
                        aria-hidden
                      >
                        <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  ) : (
                    e.company
                  )}
                </h3>
                <span className="font-mono text-xs tracking-[0.14em] text-muted-foreground">
                  {e.period}
                </span>
              </div>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-primary">
                {e.role}
              </p>
              <ul className="mt-5 list-disc space-y-2 pl-5 leading-relaxed text-muted-foreground marker:text-primary">
                {e.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 border-t border-border pt-12">
          <h3
            className="text-2xl tracking-tight"
            style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontWeight: 600,
            }}
          >
            Education
          </h3>
          <div className="mt-8">
            {resume.education.map((ed, i) => (
              <div
                key={ed.institution}
                className={`flex flex-wrap items-baseline justify-between gap-2 py-5 ${
                  i < resume.education.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div>
                  <p className="font-medium">{ed.degree}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {ed.institution}
                  </p>
                </div>
                <span className="font-mono text-xs tracking-[0.14em] text-muted-foreground">
                  {ed.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
