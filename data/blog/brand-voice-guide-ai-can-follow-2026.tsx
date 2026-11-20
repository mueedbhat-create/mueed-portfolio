import Link from "next/link";
import { Flow } from "@/components/blog/figures";
import type { BlogPost } from "./types";

export const post: BlogPost = {
  slug: "brand-voice-guide-ai-can-follow-2026",
  title: "How to write a brand voice guide that AI can actually follow",
  description:
    "Most brand voice guides are adjectives a model can't act on. How to write one with rules, banned words, sample sentences and before-and-after rewrites, then test it.",
  intro:
    "A brand voice guide that AI can follow describes the voice as instructions and examples rather than adjectives. Telling a model to be \"friendly but professional\" gives it nothing to act on, because every brand claims those words. What works is a short guide with four parts: three voice traits, each with a do and a don't; concrete rules about sentence length, person, contractions and formatting; a list of banned words and phrases; and several real sample sentences plus before-and-after rewrites that show the voice in action. Models copy examples far more reliably than they follow descriptions, so the samples carry most of the weight. Then test the guide: generate a few pieces with it, have an editor mark where the voice drifts, and turn each repeated drift into a new rule. Keep the core guide to about one page so it fits in every prompt, and keep longer reference material in a separate document the AI can retrieve when needed.",
  date: "2026-10-08",
  keywords: [
    "brand voice guide for AI",
    "AI brand voice",
    "brand voice prompt",
    "keep brand voice with AI",
  ],
  category: "Copy & Content",
  readingMinutes: 6,
  content: (
    <>
      <h2>Why most brand voice guides fail with AI</h2>
      <p>
        The typical guide says the brand is &quot;bold, warm and
        trustworthy.&quot; A person who has worked with the brand for a year
        knows what that means in practice. A model doesn&apos;t, and it falls
        back to its default voice, which is the polished, slightly generic tone
        you see everywhere. Adjectives describe a feeling. A model needs rules
        and examples it can copy.
      </p>
      <table>
        <thead>
          <tr>
            <th>Adjective (model can&apos;t act on it)</th>
            <th>Instruction (model can follow it)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Friendly</td>
            <td>Use &quot;you&quot; and &quot;we&quot;. Use contractions. No exclamation marks.</td>
          </tr>
          <tr>
            <td>Confident</td>
            <td>State claims without &quot;might&quot; or &quot;could potentially&quot;. One hedge per piece at most.</td>
          </tr>
          <tr>
            <td>Clear</td>
            <td>Sentences under 20 words on average. One idea per paragraph.</td>
          </tr>
          <tr>
            <td>Premium</td>
            <td>No discounts language, no urgency phrases, no emojis.</td>
          </tr>
        </tbody>
      </table>

      <h2>The four parts of a guide AI can use</h2>
      <h3>1. Three voice traits, each with a do and a don&apos;t</h3>
      <p>
        Pick three traits, not eight. For each one, write a line about what it
        means in practice and a line about what it doesn&apos;t mean. For
        example: &quot;Direct: lead with the answer. Not blunt: never dismiss
        the reader&apos;s question.&quot; The don&apos;t line matters as much
        as the do line, because it stops the model from overshooting.
      </p>
      <h3>2. Concrete writing rules</h3>
      <p>
        First or third person, contractions or not, average sentence length,
        how to format numbers and dates, whether to use headings and lists,
        British or American spelling. These are boring, and they&apos;re the
        rules a model follows most reliably.
      </p>
      <h3>3. Banned words and phrases</h3>
      <p>
        Every brand has words that make it sound like someone else. Add the
        stock phrases models lean on too, like &quot;unlock&quot;, &quot;in
        today&apos;s fast-paced world&quot; and &quot;elevate&quot;. A banned
        list is short to write and removes a lot of generic text.
      </p>
      <h3>4. Samples and before-and-after rewrites</h3>
      <p>
        This is the part that does most of the work. Include five to ten real
        sentences that sound exactly like the brand, taken from your best
        copy. Then add two or three pairs: a generic draft and the same text
        rewritten in your voice. Models are much better at copying an example
        than at interpreting a description, so the samples carry the voice
        when the rules run out.
      </p>

      <h2>Test the guide before you trust it</h2>
      <Flow
        title="Voice guide test loop"
        steps={[
          { title: "Generate", detail: "3 to 5 pieces using the guide" },
          { title: "Mark drift", detail: "Editor highlights off-voice lines", human: true },
          { title: "Find patterns", detail: "Which drifts repeat?" },
          { title: "Add a rule", detail: "Each repeat becomes a rule or example", human: true },
        ]}
        caption="Run the loop two or three times. After that, most drift comes from new topics, not gaps in the guide."
      />
      <p>
        Write a few pieces with the guide in the prompt, then have an editor
        mark every line that doesn&apos;t sound right. Look for repeats. If the
        model keeps opening with a rhetorical question, add a rule. If it keeps
        getting a product description wrong, add a sample. Drift tends to get
        worse later in long pieces, so check the last third of each piece most
        carefully.
      </p>

      <h2>Keep it short enough to fit in every prompt</h2>
      <p>
        The core guide should fit on about one page, because it goes into
        every prompt. Longer material, like full product details, past
        campaigns and the complete style manual, belongs in a separate
        knowledge base that the AI can search when it needs it. That&apos;s
        what{" "}
        <Link href="/blog/rag-for-marketing-2026">RAG for marketing</Link> is
        for.
      </p>

      <h2>A template to start from</h2>
      <blockquote>
        Voice traits: [Trait]: [what it means]. Not [what it doesn&apos;t
        mean]. (x3). Rules: [person], [contractions], [sentence length],
        [formatting], [spelling]. Never use: [banned words]. Sounds like us:
        [5 to 10 real sentences]. Rewrite example: Before: [generic draft].
        After: [same text in our voice].
      </blockquote>
      <p>
        A good guide is still not a substitute for an editor. It gets the first
        draft closer, which is what cut revision rounds in my{" "}
        <Link href="/blog/ai-editorial-engine-revision-cycles-2026">
          editorial engine
        </Link>
        . I wrote more about the limits in{" "}
        <Link href="/blog/honest-truth-ai-content-six-months-2026">
          what I learned after six months of AI content
        </Link>
        . <Link href="/services/ai-copy-content">See copy and content services</Link>{" "}
        or <Link href="/#contact">ask me to build your voice guide</Link>.
      </p>
    </>
  ),
};
