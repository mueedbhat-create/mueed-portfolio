import Link from "next/link";
import { Flow } from "@/components/blog/figures";
import type { BlogPost } from "./types";

export const post: BlogPost = {
  slug: "honest-truth-ai-content-six-months-2026",
  title: "What I've learned about AI content after 6 months",
  description:
    "What works with AI content, what does not, and the lessons I have learned building and publishing AI assisted content for clients and my own site.",
  intro:
    "After about six months of building AI content workflows for clients and using them on my own site, my conclusion is that AI content works when a person stays in control and fails when they step away. AI did cut production time roughly in half, as I expected. Quality wasn't as good as human-only writing, though, and AI content didn't rank as well at first. AI is very good at research and outlines (saving 2 to 3 hours per piece), first drafts that are 60 to 70% there, repurposing content into other formats, and consistent on-page SEO. It's bad at persuasion, original ideas, holding a brand voice through a long piece, and anything that needs original data. Drafts published without an editor read generic and got little engagement. If I started over, I'd build the editorial process and the brand voice guide before generating anything, and I'd track engagement instead of how many pieces we published.",
  date: "2026-07-30",
  updated: "2026-11-07",
  keywords: [
    "AI content honest review",
    "AI content what works",
    "AI content writing experience",
    "AI content results",
  ],
  category: "AI Strategy",
  readingMinutes: 5,
  content: (
    <>
      <h2>What I expected</h2>
      <table>
        <thead>
          <tr>
            <th>I expected</th>
            <th>What happened</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Production time cut in half</td>
            <td>It was</td>
          </tr>
          <tr>
            <td>Quality on par with human-only writing</td>
            <td>It wasn&apos;t</td>
          </tr>
          <tr>
            <td>AI content ranking like human content</td>
            <td>Not at first</td>
          </tr>
        </tbody>
      </table>

      <h2>What works well</h2>
      <p>
        Research and outlining is where AI helps most. It pulls information
        together, spots patterns in competitor content and produces structured
        outlines, which saves me 2 to 3 hours per piece. I wouldn&apos;t go
        back to doing that by hand.
      </p>
      <p>
        First drafts come out faster than any human writer can manage, and
        they&apos;re usually 60 to 70% there. They still need editing for
        voice, accuracy and persuasion, but the structure and research are
        done.
      </p>
      <p>
        Repurposing works well too. Turning a blog post into social captions,
        an email sequence and a video script used to take hours, and AI does
        the conversion in minutes while keeping the core message.
      </p>
      <p>
        On-page SEO is the last one. AI handles keyword placement, meta
        descriptions, internal link suggestions and structure more
        consistently than people do. Human writers forget alt text or
        overstuff keywords; the AI follows the rules every time.
      </p>

      <h2>What does not work</h2>
      <p>
        Publishing straight from AI without an editor. Those drafts read
        generic, with the same phrases, structure and rhythm every time.
        Readers notice, search engines notice, and the content ranks poorly and
        gets no engagement.
      </p>
      <p>
        Persuasion and originality. AI writes competent prose but not
        persuasive prose. It has no point of view and takes no risks, and the
        content that converts has a human perspective behind it.
      </p>
      <p>
        Brand voice over a whole piece. AI can follow a brand voice guide if
        you give it one, but it drifts. Paragraph one sounds like your brand
        and paragraph five sounds like everyone else. An editor catches that.
        The AI doesn&apos;t.
      </p>
      <p>
        Original data and insight. AI works with what already exists. It
        can&apos;t run a survey, analyze your client results or share an
        experience only you have. The content that gets cited by AI engines and
        linked by other sites usually has original data. AI can help you
        present it, but it can&apos;t produce it.
      </p>

      <h2>The workflow that works</h2>
      <Flow
        title="The three-stage content workflow"
        steps={[
          { title: "AI research + draft", detail: "Repetitive parts, 60 to 70% there" },
          { title: "Human edit", detail: "Voice, accuracy, persuasion", human: true },
          { title: "Human publish", detail: "Final call on what ships", human: true },
        ]}
      />
      <p>
        AI saves time on the repetitive parts and a person adds value where
        judgment is needed. The result is better content, produced faster and
        at lower cost than either human-only or AI-only.
      </p>

      <h2>What I would do differently</h2>
      <p>
        I&apos;d build the editorial workflow before generating any content.
        I spent the first month generating with AI before I had a clear brief,
        a brand voice guide or a quality bar. The process should come first,
        with AI added to it second.
      </p>
      <p>
        I&apos;d write the brand voice guide early. A detailed one is the
        difference between AI content that sounds like your brand and AI
        content that sounds like everyone else&apos;s, so write it before you
        generate a single piece. I put together a guide on{" "}
        <Link href="/blog/brand-voice-guide-ai-can-follow-2026">
          writing a brand voice guide AI can follow
        </Link>
        .
      </p>
      <p>
        I&apos;d measure engagement instead of output. I tracked how many
        pieces we published when I should have tracked how many people read,
        shared and commented on them. Publishing more doesn&apos;t mean the
        content is any good.
      </p>

      <h2>The bottom line</h2>
      <p>
        AI content works when a person stays in control and fails when they
        step away. The AI drafts and a person decides what gets published. For
        a worked example, see my{" "}
        <Link href="/blog/ai-editorial-engine-revision-cycles-2026">
          editorial engine case study
        </Link>
        , and for where AI copy specifically works and fails, read the{" "}
        <Link href="/blog/ai-copywriting-where-it-works-2026">
          AI copywriting breakdown
        </Link>
        . <Link href="/services/ai-copy-content">See copy and content services</Link>.
      </p>
    </>
  ),
};
