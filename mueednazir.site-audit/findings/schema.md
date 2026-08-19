# Schema / Structured Data — mueednazir.site

## Current implementation

Two JSON-LD blocks detected, both valid JSON:

1. **Person** — name, jobTitle, url, image, email, telephone, PostalAddress (Srinagar, Jammu & Kashmir, IN), sameAs (GitHub, LinkedIn), knowsAbout (n8n, OpenAI, RAG, Zapier, Make, SEO, funnels, paid ads, etc.), alumniOf (2 universities), worksFor (Freelance).
2. **WebSite** — name, alternateName, url, description, inLanguage, publisher (Person).

Good entity coverage for a personal brand. **Every URL field in both blocks points to `https://mueed-portfolio-dusky.vercel.app`** (name, url, image, publisher) instead of the live domain.

## Findings

| Severity | Finding |
|----------|---------|
| High | All schema URLs reference the Vercel preview host — schema.google compatibility, entity resolution, and Knowledge-Panel/entity-matching signals are tied to the wrong domain. |
| Medium | FAQ content exists but is NOT marked up as `FAQPage` — a cheap win for rich results and AI answers. |
| Medium | No `Service`/`ProfessionalService` schema (e.g., "AI Automation Services") despite 4 clearly defined services. |
| Low | No `Organization` schema; `WebSite.publisher` is a Person, which is acceptable but a site-level Organization object would strengthen entity clarity. |
