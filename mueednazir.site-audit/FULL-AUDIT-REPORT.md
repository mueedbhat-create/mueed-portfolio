# SEO Full Audit — mueednazir.site

**Date:** 2026-08-19 · **Crawl limit:** 1 URL (single-page site) · **Business type:** Personal portfolio / freelance services (AI automation & performance marketing)

---

## Post-Fix Status (2026-08-19)

All audit findings have been addressed in the source repo (`mueed-portfolio`). Verified against a production build (`next build` + `next start`):

| Finding | Status |
|---------|--------|
| Canonical / og / twitter / rel=author / schema URLs → Vercel preview host | ✅ `SITE_URL` centralized in `lib/site.ts`; canonical resolves to `https://www.mueednazir.site`; 0 stale references in HTML |
| sitemap.xml listed only the Vercel preview URL | ✅ Now canonical URL + image sitemap for 4 project previews |
| robots.txt `Sitemap:` → Vercel host | ✅ → `https://www.mueednazir.site/sitemap.xml`; added Applebot + Bingbot rules |
| llms.txt links → Vercel host | ✅ All URLs → live domain; added FAQ section, Contact block, +1 key fact |
| Schema URLs on wrong host | ✅ Person / WebSite / ItemList(Service) / FAQPage all point to live domain |
| No FAQPage markup | ✅ `FAQPage` JSON-LD (5 Q&As, single source in `data/resume.ts`) |
| No Service schema | ✅ `ItemList` of 4 `Service` entities |
| H1 name only | ✅ H1 now includes "AI Automation & Performance Marketing" |
| `keywords` meta overstuffed | ✅ Removed |
| Meta description 171 chars | ✅ Trimmed to 159 chars |
| Missing security headers | ✅ CSP, X-Frame-Options: DENY, X-Content-Type-Options, Referrer-Policy, Permissions-Policy via `next.config.ts` |
| Readability college-level | ✅ Long paragraphs/sentences split in About, resume, FAQ |
| 0 content images | ✅ 4 custom project preview SVGs with descriptive alt text (also in image sitemap) |
| og-image 262 KB | ✅ Recompressed to 75 KB at 1200×630 |
| ~1.1 MB JS, 499 KB chunk | ✅ Below-fold sections code-split via `next/dynamic`; largest chunk now 337 KB (85 KB gzipped); all scripts async; HTML 20 KB gzipped |

**Residual note:** ~1.1 MB raw JS total is mostly `framer-motion` + client components; it is non-blocking (async) and LCP remains text-based. A deeper refactor (replacing framer-motion with CSS animations) is a low-priority, higher-effort future option.

---

## Executive Summary

**SEO Health Score: 68 / 100**

The site is a well-built single-page Next.js portfolio with genuinely strong content quality (QRG 90/100), excellent E-E-A-T signals (named employer, degrees, quantified results, FAQ), and best-in-class AI-crawler access (all major bots explicitly allowed, llms.txt present). **However, every absolute URL on the site — canonical, og:url, og:image, rel=author, all JSON-LD, sitemap, robots.txt Sitemap directive and llms.txt — points to the Vercel preview host `mueed-portfolio-dusky.vercel.app` instead of `www.mueednazir.site`.** This single class of bug is the highest-leverage fix in the whole audit.

### Top 5 critical issues
1. Canonical + all schema/og URLs hardcode the Vercel preview host (`mueed-portfolio-dusky.vercel.app`) — Google may index the preview deployment and treat `mueednazir.site` as a duplicate.
2. sitemap.xml contains only the Vercel preview URL — the live domain is absent.
3. robots.txt `Sitemap:` directive points to the Vercel host.
4. llms.txt links all point to the Vercel host — AI crawlers will cite the wrong domain.
5. ~1.1 MB of JavaScript across 10 chunks (largest 499 KB) — interaction/INP risk on mobile.

### Top 5 quick wins
1. Fix `metadataBase`/absolute URLs in Next.js to `https://www.mueednazir.site` → fixes canonical, og, schema, sitemap, robots, llms.txt in one redeploy.
2. Add FAQPage JSON-LD (FAQ content already exists).
3. Add Service JSON-LD for the 4 services.
4. Add the value proposition to the H1 (currently name only).
5. Add optimized, alt-tagged content images (site currently has zero).

---

## Category Scores

| Category | Score | Weight | Weighted |
|----------|------:|-------:|---------:|
| Technical SEO | 45 | 22% | 9.9 |
| Content Quality | 82 | 23% | 18.9 |
| On-Page SEO | 78 | 20% | 15.6 |
| Schema / Structured Data | 62 | 10% | 6.2 |
| Performance (CWV) | 70 | 10% | 7.0 |
| AI Search Readiness | 78 | 10% | 7.8 |
| Images | 60 | 5% | 3.0 |
| **Total** | | | **68.4 → 68** |

---

## 1. Technical SEO — 45

**What works:** 308 apex→www and http→https redirects · robots.txt open to all crawlers · meta robots `index, follow` · proper 404s · full SSR (content crawlable without JS).

| Sev | Finding |
|-----|---------|
| Critical | `rel=canonical` → `https://mueed-portfolio-dusky.vercel.app` (Vercel preview). Confirmed the preview host still serves HTTP 200 with its own self-canonical → live domain risks de-indexation/duplicate treatment. |
| Critical | sitemap.xml single `<loc>` = Vercel preview URL. |
| Critical | robots.txt `Sitemap:` = Vercel preview URL. |
| Medium | Missing security headers: no CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy. Only HSTS. |

## 2. Content Quality — 82

**What works:** QRG quality 90/100 (no filler, no AI patterns) · named employer + tenure (Sadat Paints & Plastics, Feb 2022–Sep 2025) · M.Com/B.Com · quantified results (35%/28%/25%/20%/40%) · 5-question FAQ · ~950–1055 words of original copy.

| Sev | Finding |
|-----|---------|
| Medium | Readability college-level: FRE 40.6, FK grade 11.6, 16.1 words/sentence. Split long sentences for broader reach. |
| Medium | Single page → no long-tail topical footprint for service queries. |
| Low | 180-char `keywords` meta (overstuffed, harmless, droppable). |

## 3. On-Page SEO — 78

**What works:** 60-char keyword-rich title · 171-char meta description · clean H1→H2→H3 hierarchy · author/creator/publisher metas · complete og/twitter cards.

| Sev | Finding |
|-----|---------|
| Critical | og:url, og:image, twitter:image all reference Vercel host. |
| Medium | H1 is name only ("Mueed Nazir Bhat") — add value prop + primary keywords. |
| Medium | 0 content images — no image-search presence; og-image 262 KB. |
| Low | Meta description 171 chars (truncates on desktop). |

## 4. Schema / Structured Data — 62

**What works:** Valid `Person` JSON-LD (address, sameAs, knowsAbout, alumniOf, worksFor) · valid `WebSite` JSON-LD.

| Sev | Finding |
|-----|---------|
| High | All schema URLs reference Vercel host (name/url/image/publisher). |
| Medium | FAQ content not marked up as `FAQPage`. |
| Medium | No `Service`/`ProfessionalService` schema despite 4 defined services. |

## 5. Performance — 70 (lab-based, no field data)

**What works:** SSR → LCP is text-based · fonts preloaded · `fetchPriority=low` hygiene.

| Sev | Finding |
|-----|---------|
| High | ~1.1 MB JS / 10 chunks (largest 499 KB) → INP risk. |
| Medium | PSI/CrUX quota exhausted + no API key → CWV are lab estimates; validate with keyed run. |

## 6. AI Search Readiness — 78

**What works:** GPTBot/OAI-SearchBot/ChatGPT-User/ClaudeBot/anthropic-ai/PerplexityBot/Google-Extended all explicitly allowed · structured llms.txt · citable FAQ + quantified outcomes · strong entity signals.

| Sev | Finding |
|-----|---------|
| High | llms.txt URLs → Vercel host. |
| High | Canonical/sitemap mismatch splits AI authority across two hosts. |
| Low | llms.txt facts block lacks a Contact row (email/LinkedIn). |

## 7. Images — 60

| Sev | Finding |
|-----|---------|
| Medium | Zero content images on the page. |
| Low | og-image 262 KB (re-compress <150 KB). |

---

## Verification Notes

- Crawl: `https://www.mueednazir.site/` (HTTP 200, SSR) — single page, no subpages (all common paths 404).
- No Google/PSI/CrUX/DataForSEO/Moz credentials available → field-data categories are lab estimates.
- Screenshots unavailable (no Chromium in the claude-seo runtime).
