# Technical SEO — mueednazir.site

## Crawl results

- Canonical target resolved: `https://www.mueednazir.site/` (HTTP 200, `x-nextjs-prerender: 1`, SSR content in initial HTML)
- Apex `https://mueednazir.site/` → 308 → `https://www.mueednazir.site/` (correct)
- `http://` → 308 → `https://` (correct)
- Site is a single-page Next.js app (1 URL, anchor nav only). No subpages found; `/projects`, `/services`, `/about`, etc. all 404.
- 404s return proper HTTP 404.
- robots.txt permits crawling (`User-Agent: * Allow: /`); meta robots `index, follow`; googlebot meta allows `max-image-preview:large`.

## Findings

| Severity | Finding |
|----------|---------|
| Critical | `rel=canonical` points to `https://mueed-portfolio-dusky.vercel.app` (Vercel preview host), not the live domain. `og:url`, `og:image`, `twitter:image`, `rel=author` all reference the same wrong host. Google is told the preview deployment is the canonical page. |
| Critical | robots.txt `Sitemap:` directive references `https://mueed-portfolio-dusky.vercel.app/sitemap.xml`. |
| Critical | sitemap.xml contains a single `<loc>` for `https://mueed-portfolio-dusky.vercel.app` — no `https://www.mueednazir.site/` URL at all. |
| Medium | Missing security headers: no `Content-Security-Policy`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, or `Permissions-Policy`. Only `strict-transport-security` present. |
| Info | `google-site-verification` meta present. |
| Info | `lang="en"` set; viewport present; single H1; favicon + preloaded woff2 fonts in place. |

## Notes

- `mueed-portfolio-dusky.vercel.app` still serves HTTP 200 with an identical page and its own self-referencing canonical → confirmed duplicate-content risk between the live domain and the Vercel host.
- Because the live page canonicalizes to the Vercel host, Google may index the Vercel URL and treat `www.mueednazir.site` as the duplicate — the single most damaging technical issue found.
