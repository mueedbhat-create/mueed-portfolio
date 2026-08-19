# On-Page SEO — mueednazir.site

## Observations

- **Title (60 chars):** "Mueed Nazir Bhat — AI Automation & Performance Marketing" — keyword-rich, appropriate length, includes primary service terms.
- **Meta description (171 chars):** compelling, includes service keywords and a value hook; under the ~160 display threshold concern is minor but it will truncate on desktop SERPs.
- **H1:** "Mueed Nazir Bhat" (name only). Fine for a personal brand, but adding the value prop ("AI Automation & Performance Marketing") would reinforce primary keywords in the top heading.
- **Heading hierarchy:** clean H1 → H2 (7) → H3 (19) tree; all major sections have headings.
- **Internal links:** anchor navigation (`#about`, `#services`, `#projects`, `#skills`, `#experience`, `#contact`) + `href="/"`. No deep internal pages exist (single-page site).
- **External links:** LinkedIn, GitHub, mailto, tel — relevant, non-spammy.
- **Social/Open Graph:** `og:title`, `og:description`, `og:image` (2400×1260, with width/height/alt), `twitter:card=summary_large_image` — all present but ALL point to the Vercel preview host (see technical).
- **Images:** 0 `<img>` tags on the page — no image-search presence, nothing to capture "AI automation portfolio" visual queries; og-image is 262 KB.
- **favicon:** served correctly.

## Findings

| Severity | Finding |
|----------|---------|
| Critical | All social meta URLs (`og:url`, `og:image`, `twitter:image`) reference the Vercel preview host; social shares and crawler signals resolve to the wrong domain. |
| Medium | H1 is name-only; missing value proposition in the top heading. |
| Medium | 0 content images — no visual break in a long single page and zero image-search opportunity. og-image 262 KB should be re-compressed. |
| Low | Meta description (171 chars) will truncate; tighten to ≤155–160. |
