# Action Plan — mueednazir.site

Prioritized by severity. Estimated effort: **S** = <1 hr, **M** = half day, **L** = 1–3 days.

## Status: as of 2026-08-19

All Phase 1–2 source-level items are **implemented** in the repo. Remaining work is deployment/verification (redeploy to Vercel, resubmit sitemap in Search Console) and the long-term items below.

## Phase 1 — Critical fixes (Week 1)

| # | Item | Effort | Status |
|---|------|--------|--------|
| 1 | Fix `metadataBase` / absolute URL in Next.js to `https://www.mueednazir.site` and redeploy | S | ✅ Done (`lib/site.ts` + `app/layout.tsx`) — redeploy pending |
| 2 | Regenerate `sitemap.xml` from canonical domain | S | ✅ Done (`app/sitemap.ts`, includes image sitemap) |
| 3 | Update `robots.txt` `Sitemap:` line | S | ✅ Done (`app/robots.ts`) |
| 4 | Regenerate `llms.txt` with correct URLs | S | ✅ Done (`public/llms.txt`) |
| 5 | Resubmit sitemap in Google Search Console | S | ⏳ User action — verify `www.mueednazir.site` property |

## Phase 2 — High-impact improvements (Weeks 2–3)

| # | Item | Effort | Status |
|---|------|--------|--------|
| 6 | Add `FAQPage` JSON-LD | S | ✅ Done (5 Q&As from `data/resume.ts`) |
| 7 | Add `Service` JSON-LD | S | ✅ Done (`ItemList` of 4 Services) |
| 8 | Strengthen H1: name + value prop | S | ✅ Done |
| 9 | Add optimized, alt-tagged content images / work previews | M | ✅ Done (4 SVGs + `next/image` + image sitemap; og-image 256→75 KB) |
| 10 | Reduce JS payload | L | ⚠️ Partial — code-split below-fold sections; largest chunk 499→337 KB (85 KB gz). Full refactor optional |
| 11 | Run keyed PSI/CrUX validation | S | ⏳ Requires Google API key — validate real LCP/INP/CLS post-deploy |

## Phase 3 — Content & authority (Month 2)

| # | Item | Effort | Status |
|---|------|--------|--------|
| 12 | Improve readability | M | ✅ Done (sentences split; retest with FRE after deploy) |
| 13 | Add service pages or case studies | L | ⏳ Future — only long-tail growth path |
| 14 | Add Contact key-fact row to llms.txt | S | ✅ Done |
| 15 | External authority building | L | ⏳ Ongoing |

## Phase 4 — Monitoring & iteration (Ongoing)

| # | Item | Effort | Status |
|---|------|--------|--------|
| 16 | Add security headers | S | ✅ Done (CSP + 4 more via `next.config.ts`) |
| 17 | Verify indexation in GSC | S | ⏳ After redeploy + resubmit |
| 18 | Re-run this audit in 30 days | S | ⏳ After deploy |
