import { resume } from "@/data/resume";

export default function Faq() {
  return (
    <section id="faq" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2
          className="text-3xl font-bold tracking-tight sm:text-4xl"
          style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}
        >
          Frequently asked <span className="text-gradient">questions</span>
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Straight answers on AI automation, performance marketing and how we&apos;d
          work together.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {resume.faqs.map((f) => (
            <div
              key={f.q}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <h3 className="font-semibold leading-snug">{f.q}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-muted-foreground">
          Have a different question? Ask via the contact form below — I usually
          reply within a day. · {resume.email}
        </p>
      </div>
    </section>
  );
}
