# Performance (lab-based) — mueednazir.site

## Method

No PageSpeed Insights / CrUX API key configured and the anonymous PSI quota was rate-limited, so **no field data** (real LCP/INP/CLS) was obtainable. Assessment below is lab-based from resource measurement. **Recommend verifying with real field data (CrUX/PSI) before prioritizing.**

## Measurements

| Resource | Size |
|----------|------|
| Initial HTML (SSR, includes RSC payload) | 135 KB |
| CSS (single chunk) | 47 KB |
| Fonts (2× woff2, preloaded) | 83 KB (35 KB + 48 KB) |
| Preloaded JS entry | 5.4 KB |
| Total JS (10 chunks) | **~1.1 MB raw** (largest chunk: 499 KB; one other 230 KB, one 133 KB, one 113 KB) |
| og-image.jpg | 262 KB (2400×1260, social-only) |

## Assessment

| Severity | Finding |
|----------|---------|
| High | ~1.1 MB of JavaScript across 10 chunks (largest 499 KB). Content is server-rendered so LCP is not JS-blocked, but this volume of JS hurts interaction (INP) and adds download/parse cost on mobile. Likely worth code-splitting / removing unused deps. |
| Info | No content images on the page → LCP is almost certainly hero text (fast) — a real advantage. |
| Info | Fonts preloaded + `fetchPriority="low"` on the preloaded script: good hygiene. |
| Info | HTML is 135 KB largely due to the Next.js RSC payload inline — normal for Next.js; slight bloat. |
| Low | og-image 262 KB only loads on social crawlers; re-compress to <150 KB with width/height kept. |

## Field-data gap

CrUX/PSI field data was unavailable (no API key, anonymous quota exhausted). Score reflects lab estimates; validate with a keyed PSI run before committing engineering time.
