import { resume } from "@/data/resume";

export default function Faq() {
  return (
    <section id="faq" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-5">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
          FAQ
        </p>
        <h2
          className="mt-4 text-3xl tracking-tight sm:text-5xl"
          style={{
            fontFamily: "var(--font-fraunces), Georgia, serif",
            fontWeight: 560,
          }}
        >
          Frequently asked <span className="text-gradient">questions</span>
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          Straight answers on AI automation, performance marketing and how
          we&apos;d work together.
        </p>

        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {resume.faqs.map((f) => (
            <div key={f.q} className="border-t border-border pt-6">
              <h3
                className="text-lg leading-snug tracking-tight"
                style={{
                  fontFamily: "var(--font-fraunces), Georgia, serif",
                  fontWeight: 600,
                }}
              >
                {f.q}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 font-mono text-xs tracking-wide text-muted-foreground">
          Have a different question? Ask via the contact form below — I usually
          reply within a day. · {resume.email}
        </p>
      </div>
    </section>
  );
}
