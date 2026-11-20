import Link from "next/link";
import { BarChart, StackBar } from "@/components/blog/figures";
import type { BlogPost } from "./types";

export const post: BlogPost = {
  slug: "optimize-website-for-ai-search-geo-2026",
  title: "How to optimize your website for AI search (GEO): a 2026 playbook",
  description:
    "GEO (Generative Engine Optimization) done right: citable passages, brand mentions, freshness and schema. How AI Overviews, ChatGPT and Perplexity choose sources.",
  intro:
    "Generative Engine Optimization (GEO) is the work of making your site the source an AI answer cites. Google's position is that this is still SEO: the quality, structure and authority that earn rankings also earn citations in AI Overviews. The research I've seen points to a handful of levers. Brand mentions correlate about 3x more strongly with AI citations than backlinks do. Self-contained passages of roughly 134 to 167 words get lifted into answers, and nearly half of all citations come from the first 30% of a page. Freshness counts too: content updated in the last three months is around 3x more likely to be cited, and pages left alone for six months drop out. Pages with images and clear structure get selected more often. And only about 11% of domains are cited by both ChatGPT and Google AI Overviews, so the same page can do well on one surface and badly on another.",
  date: "2026-08-11",
  updated: "2026-11-10",
  keywords: [
    "optimize for AI search",
    "GEO optimization",
    "AI search visibility",
    "AI Overviews optimization",
  ],
  category: "SEO & GEO",
  readingMinutes: 8,
  content: (
    <>
      <h2>What GEO is, and what it isn&apos;t</h2>
      <p>
        Google says optimizing for generative AI search is still SEO. Clear
        answers, good structure, authority and fresh content are what AI
        systems use to pick sources, so GEO isn&apos;t a separate discipline
        with its own tricks. You&apos;re making your content easy to quote,
        current and credible enough that an AI answering a question picks your
        page over a competitor&apos;s.
      </p>

      <h2>What the evidence says drives AI citations</h2>
      <BarChart
        title="Relative lift in AI citation likelihood"
        bars={[
          { label: "Brand mentions", note: "vs backlinks", value: 3, display: "~3x" },
          { label: "Updated in last 3 months", note: "vs older content", value: 3, display: "~3x" },
          { label: "Images and structure", note: "vs plain text", value: 2.56, display: "~2.6x (+156%)" },
          { label: "Baseline", value: 1, display: "1x", series: 2 },
        ]}
        caption="Multipliers from the studies summarized in the table below. Treat them as directional: they are correlations across large samples, not guarantees for any single page."
      />
      <table>
        <thead>
          <tr>
            <th>Signal</th>
            <th>Impact on AI visibility</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Brand mentions (social, YouTube, press)</td>
            <td>~3x stronger correlation than backlinks</td>
          </tr>
          <tr>
            <td>Citable, self-contained answer passages</td>
            <td>~44% of citations come from the first 30% of a page</td>
          </tr>
          <tr>
            <td>Content freshness (&lt;3 months)</td>
            <td>~3x more likely to be cited</td>
          </tr>
          <tr>
            <td>Multi-modal content (images, structure)</td>
            <td>~156% higher selection rate</td>
          </tr>
          <tr>
            <td>Cross-platform overlap (ChatGPT + Google AIO)</td>
            <td>Only ~11% of domains cited by both</td>
          </tr>
        </tbody>
      </table>

      <h2>Write self-contained answer blocks</h2>
      <p>
        AI systems pull passages, not whole pages. The biggest single change
        you can make is a direct answer at the top: 134 to 167 words that
        define or answer the question and still make sense if someone reads
        nothing else. Below that, use headings phrased as questions so each
        section works as a small answer of its own.
      </p>

      <h2>Front-load the answer</h2>
      <StackBar
        title="Where on the page AI citations come from"
        parts={[
          { label: "First 30% of the page", value: 44, display: "~44%" },
          { label: "Remaining 70%", value: 56, display: "~56%" },
        ]}
        caption="Nearly half of all citations come from the top third of a page. An answer buried under a long intro is competing for the smaller share."
      />
      <p>
        Don&apos;t hide the answer under an introduction, a hero image and a
        table of contents. Say it in the first 40 to 60 words, then expand.
      </p>

      <h2>Keep content fresh</h2>
      <p>
        Pages nobody has touched in six months stop getting cited. A refresh
        schedule where you update stats, dates and examples every quarter is
        one of the cheapest ways to stay in AI answers, and it&apos;s what
        Google&apos;s AI search rewards anyway. Show the update date on the
        page so readers and crawlers can both see it.
      </p>

      <h2>Make the technical layer AI-friendly</h2>
      <ul>
        <li>
          Server-side rendering. Most AI crawlers don&apos;t run JavaScript, so
          your content has to be in the raw HTML.
        </li>
        <li>
          Allow AI crawlers. Let GPTBot, OAI-SearchBot, ClaudeBot and
          PerplexityBot in through robots.txt.
        </li>
        <li>
          Schema. Person, Organization, Article and FAQ structured data help
          machines work out who wrote what and what it&apos;s about.
        </li>
        <li>
          Bylines and dates. A named author with credentials and visible
          publish and update dates are strong authority signals.
        </li>
      </ul>
      <p>
        About llms.txt: keeping one is fine for non-Google AI services, but
        Google says it ignores llms.txt for Search and its AI features. It&apos;s
        optional and doesn&apos;t help rankings.
      </p>

      <h2>AI surfaces pick sources differently</h2>
      <p>
        Google AI Overviews mostly cite pages that already rank. Google AI Mode
        draws from a wider pool where freshness and entity authority count for
        more than position. ChatGPT leans on Wikipedia and Reddit, and
        Perplexity favors sources the community has already vouched for. In
        practice the same work covers all of them: build a presence on
        LinkedIn, YouTube and relevant communities, keep content fresh, and
        write answer blocks.
      </p>

      <h2>Your GEO checklist</h2>
      <ul>
        <li>Direct answer in the first 40 to 60 words.</li>
        <li>A self-contained 134 to 167 word answer block per topic.</li>
        <li>H2 headings phrased as questions.</li>
        <li>Named author, credentials, publish date and update date.</li>
        <li>A quarterly refresh schedule.</li>
        <li>AI crawlers allowed, server-side rendering, schema present.</li>
        <li>Brand presence on LinkedIn, YouTube and communities.</li>
      </ul>
      <p>
        I use this playbook on the sites I run at{" "}
        <a href="https://www.anarchylabs.in/team/mueed-nazir-bhat">Anarchy Labs</a>,
        including this one. For more on what AI content can and can&apos;t do,
        read{" "}
        <Link href="/blog/honest-truth-ai-content-six-months-2026">
          what I learned after six months of AI content
        </Link>{" "}
        and{" "}
        <Link href="/blog/will-ai-replace-marketers-what-changes-2026">
          will AI replace marketers
        </Link>
        . <Link href="/services/ai-strategy">See AI strategy services</Link> or{" "}
        <Link href="/#contact">book a GEO audit</Link>.
      </p>
    </>
  ),
};
