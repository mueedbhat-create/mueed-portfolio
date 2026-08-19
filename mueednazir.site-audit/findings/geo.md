# AI Search Readiness (GEO) — mueednazir.site

## Signals

- robots.txt **explicitly allows** every major AI crawler: `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `ClaudeBot`, `anthropic-ai`, `PerplexityBot`, `Google-Extended`. Best-in-class posture.
- **llms.txt exists** (HTTP 200) with a clean, well-structured markdown file: title, one-line description, section links (About/Services/Projects/Skills/Experience/Contact) and 5 "Key facts" lines.
- Content is highly citable: FAQ with direct answers, quantified results (35% / 28% / 25% / 20% / 40%), named employer + tenure, education, city, contact.
- Clear single-entity identity: name, jobTitle, sameAs profiles, PostalAddress — strong for entity resolution in LLM retrieval.

## Findings

| Severity | Finding |
|----------|---------|
| High | llms.txt links point to `https://mueed-portfolio-dusky.vercel.app/#...` instead of `https://www.mueednazir.site/#...` — AI crawlers will attribute/cite the wrong host. |
| High | Sitemap + canonical mismatch (see technical) means AI crawlers that verify canonical identity will split authority between the live domain and the Vercel host. |
| Low | llms.txt lacks a `## Contact` key-facts row (email/phone appear only inside section descriptions); adding email/LinkedIn to the facts block improves verifiability. |
| Info | No `X-Robots-Tag` header-level directives, but meta robots `index, follow` + explicit AI-bot Allow rules are sufficient. |
