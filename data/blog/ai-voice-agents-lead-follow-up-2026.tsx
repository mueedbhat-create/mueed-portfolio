import Link from "next/link";
import { Flow, Decision } from "@/components/blog/figures";
import type { BlogPost } from "./types";

export const post: BlogPost = {
  slug: "ai-voice-agents-lead-follow-up-2026",
  title: "AI voice agents for lead follow-up: what they handle and where they break",
  description:
    "How AI voice agents work for lead capture and follow-up calls, the speech-to-text, LLM and text-to-speech loop behind them, which calls they handle well, and where a human should take over.",
  intro:
    "An AI voice agent is a phone system that listens, thinks and talks back. It turns the caller's speech into text, sends that text to a language model along with instructions and business data, and turns the model's reply back into speech, in a loop that repeats every turn of the conversation. For lead follow-up it works well on short, structured calls: confirming interest after a form fill, asking a few qualifying questions, booking a slot into a calendar, and sending a summary to the CRM. It struggles with noisy lines, heavy interruptions, unfamiliar accents or mixed languages, emotional or sensitive conversations, and anything off the script. The pause before each reply also has to feel natural, which limits how much the agent can do in a single turn. I build these for lead capture and follow-up at Anarchy Labs, and the rule I use is to give the agent a narrow job, a clear way to hand off to a person, and a call log someone actually reviews.",
  date: "2026-11-16",
  keywords: [
    "AI voice agents",
    "AI voice agent lead follow-up",
    "voice AI for lead qualification",
    "AI phone agent marketing",
  ],
  category: "AI Automation",
  readingMinutes: 7,
  content: (
    <>
      <h2>How a voice agent works</h2>
      <p>
        Under the hood every voice agent runs the same loop. The caller speaks,
        speech-to-text turns it into words, a language model decides what to
        say using its instructions and any business data it can look up, and
        text-to-speech says it back. Then the loop starts again on the
        caller&apos;s next sentence.
      </p>
      <Flow
        title="One turn of a voice agent call"
        steps={[
          { title: "Caller speaks", detail: "Phone or web call" },
          { title: "Speech to text", detail: "Transcribe as they talk" },
          { title: "LLM decides", detail: "Script, CRM data, tools" },
          { title: "Text to speech", detail: "Reply in a natural voice" },
          { title: "Log + hand off", detail: "Summary to CRM, human if needed", human: true },
        ]}
        caption="The first four steps repeat on every turn. The last runs when the call ends or the agent decides it's out of its depth."
      />
      <p>
        Platforms like Vapi and Retell, or a telephony provider such as Twilio
        wired to your own models, handle the plumbing. The parts that decide
        whether the agent is any good are the same as with any AI workflow: the
        instructions, the data it can reach, and what happens when it&apos;s
        unsure.
      </p>

      <h2>Where voice agents do well in lead follow-up</h2>
      <ul>
        <li>
          Calling back a new lead within minutes of a form fill, to confirm
          interest while they still remember filling it in.
        </li>
        <li>
          Asking three or four qualifying questions, like budget range,
          timeline and location, and writing the answers into the CRM.
        </li>
        <li>
          Booking a meeting into a real calendar and confirming it by SMS or
          WhatsApp.
        </li>
        <li>
          Answering a short list of common questions (hours, pricing bands,
          what happens next) from the business&apos;s own documents.
        </li>
        <li>
          Reminder and no-show calls, which are repetitive and follow the same
          script every time.
        </li>
      </ul>
      <p>
        What these have in common is a narrow goal and a predictable shape.
        The agent knows what a successful call looks like and can tell when
        it&apos;s done.
      </p>

      <h2>Where they break</h2>
      <ul>
        <li>
          Bad audio. Background noise, weak connections and speakerphone make
          transcription worse, and every error after that is built on a wrong
          transcript.
        </li>
        <li>
          Interruptions. People talk over each other on real calls. Agents
          that can&apos;t stop mid-sentence when the caller starts talking feel
          robotic fast.
        </li>
        <li>
          Accents and mixed languages. A caller switching between English and
          Hindi or Kashmiri mid-sentence is normal here and still hard for most
          speech models.
        </li>
        <li>
          Emotional or sensitive calls. Complaints, health questions and
          anything involving money disputes need a person.
        </li>
        <li>
          Going off script. The more open the conversation gets, the more room
          the model has to say something wrong with total confidence.
        </li>
      </ul>
      <p>
        Speed matters too. Each turn waits for transcription, the model and
        speech generation, and a long pause before every reply makes callers
        talk over the agent or hang up. That&apos;s one more reason to keep each
        turn&apos;s job small.
      </p>

      <Decision
        title="Should this call go to a voice agent?"
        rows={[
          { question: "Is there a clear goal, like booked, qualified or confirmed?", answer: "Agent" },
          { question: "Does it follow roughly the same script every time?", answer: "Agent" },
          { question: "Could a wrong answer cost money or trust?", answer: "Human, or agent + handoff", tone: "both" },
          { question: "Is the caller likely upset or the topic sensitive?", answer: "Human", tone: "b" },
          { question: "Will it need open-ended negotiation?", answer: "Human", tone: "b" },
        ]}
      />

      <h2>How I set them up</h2>
      <ol>
        <li>
          One job per agent. A follow-up agent qualifies and books. It
          doesn&apos;t also do support.
        </li>
        <li>
          A clear handoff. The agent can transfer to a person or promise a
          callback, and it does so whenever the caller asks or it can&apos;t
          answer.
        </li>
        <li>
          Say it&apos;s an AI. Callers should know who they&apos;re talking to,
          and the opening line should say so. Check the consent and calling
          rules where you operate before running outbound calls.
        </li>
        <li>
          Grounded answers only. Business facts come from the client&apos;s
          own documents, not the model&apos;s memory, using the same approach
          as{" "}
          <Link href="/blog/rag-for-marketing-2026">RAG for marketing</Link>.
        </li>
        <li>
          Review the logs. Every call produces a transcript and a summary. Read
          a sample each week and turn repeated mistakes into new instructions.
        </li>
      </ol>
      <p>
        A voice agent is a workflow with a voice, so the same rules apply as in{" "}
        <Link href="/blog/ai-agents-vs-workflows-marketing">
          AI agents vs workflows
        </Link>
        : narrow scope, a human checkpoint and something you can audit. I
        build voice and chat agents for lead capture and follow-up at{" "}
        <a href="https://www.anarchylabs.in/team/mueed-nazir-bhat">Anarchy Labs</a>.{" "}
        <Link href="/services/ai-automation">See AI automation services</Link> or{" "}
        <Link href="/#contact">tell me about your lead flow</Link>.
      </p>
    </>
  ),
};
