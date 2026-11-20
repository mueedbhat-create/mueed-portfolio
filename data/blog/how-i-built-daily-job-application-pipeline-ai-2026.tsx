import Link from "next/link";
import { Flow, BarChart, Funnel } from "@/components/blog/figures";
import type { BlogPost } from "./types";

export const post: BlogPost = {
  slug: "how-i-built-daily-job-application-pipeline-ai-2026",
  title: "How I built a daily job application pipeline with AI",
  description:
    "A deep dive into JobTailor: an open-source AI pipeline that scrapes 8+ job boards, tailors a resume per job using LLMs, compiles PDFs, and opens applications every morning at 7am.",
  intro:
    "JobTailor is an open-source Python pipeline I built to automate the most repetitive part of job hunting. Every morning at 7am it searches 8+ job sources for remote roles, reads each job description, asks a language model to tailor my LaTeX resume to that job, compiles the result to PDF with Tectonic and opens each application page with the tailored PDF ready. I review every application and click Submit myself. Nothing is submitted automatically. The key rule is that the model may only rephrase and reorder what is already on the resume, never add skills or experience. Each tailored version sits on its own git branch so the original stays untouched. What used to take about 2 hours of manual work each day now takes about 15 minutes of review. The code is on GitHub for anyone who wants to point it at their own resume.",
  date: "2026-08-22",
  updated: "2026-11-13",
  keywords: [
    "AI job application automation",
    "JobTailor open source",
    "automate job applications AI",
    "resume tailoring LLM",
  ],
  category: "AI Automation",
  readingMinutes: 7,
  featured: true,
  content: (
    <>
      <h2>The problem</h2>
      <p>
        Looking for AI automation and performance marketing roles meant going
        through 8+ job boards, reading every description, rewriting my resume
        to match and doing it all again for the next one. Most people either
        send the same resume everywhere or lose hours tailoring by hand, and
        neither works well.
      </p>

      <h2>The architecture</h2>
      <p>
        JobTailor runs like a production line with five stages. Each stage
        does one thing and hands its output to the next.
      </p>
      <Flow
        title="JobTailor pipeline"
        steps={[
          { title: "Find jobs", detail: "8+ sources, remote only, deduped" },
          { title: "Read JDs", detail: "Scrapling pulls skills + requirements" },
          { title: "Tailor resume", detail: "LLM rephrases + reorders, never adds" },
          { title: "Compile PDF", detail: "Tectonic, one branch per job" },
          { title: "Review + submit", detail: "I check and click Submit", human: true },
        ]}
      />

      <h3>Stage 1: Find jobs</h3>
      <p>
        The pipeline searches Adzuna, Wellfound, Glassdoor, foundit,
        SimplyHired, DailyRemote, LinkedIn and company career pages, filtered
        to remote roles only. Each source can be switched on or off in the
        config, and results are deduplicated by URL.
      </p>

      <h3>Stage 2: Read job descriptions</h3>
      <p>
        For each URL it pulls the full description and extracts the skills and
        requirements the employer lists. It uses Scrapling, a Python scraping
        framework with anti-bot handling, for sites that block automated
        access.
      </p>

      <h3>Stage 3: Rewrite the resume</h3>
      <p>
        This is the core of it. A language model reads the job description and
        adjusts a LaTeX resume (the Awesome-CV template) to bring the matching
        skills forward. It reorders skills sections, rephrases experience
        bullets so the relevant keywords show up, and changes the position
        line.
      </p>
      <p>
        The model never invents skills or experience. It can only rephrase and
        reorder what&apos;s already there, so nothing goes out that I
        couldn&apos;t defend in an interview. Every tailored resume lives on
        its own git branch and the original is never touched.
      </p>

      <h3>Stage 4: Compile PDF</h3>
      <p>
        Each rewritten LaTeX file is compiled to PDF with Tectonic, a
        self-contained LaTeX compiler, so there&apos;s no full TeX install to
        manage. The output is a clean PDF ready to upload.
      </p>

      <h3>Stage 5: Open applications</h3>
      <p>
        The pipeline opens each application page with the tailored PDF
        attached, and I review each one before clicking Submit. Keeping a
        person in the loop is the default, partly because auto-submitting is a
        good way to get an account banned.
      </p>

      <h2>The tech stack</h2>
      <ul>
        <li>Python package with five pipeline stages</li>
        <li>Scrapling for job scraping past anti-bot checks</li>
        <li>An OpenAI-compatible LLM API for resume tailoring</li>
        <li>Tectonic for LaTeX to PDF</li>
        <li>Next.js and FastAPI dashboard for monitoring runs</li>
        <li>ego-browser for filling in applications</li>
        <li>A macOS LaunchAgent to run it daily at 7am</li>
      </ul>

      <h2>Results</h2>
      <Funnel
        title="End-to-end verification run"
        stages={[
          { label: "Leads in", value: 10 },
          { label: "Job descriptions matched", value: 2 },
          { label: "Tailored PDFs compiled", value: 2 },
          { label: "Application pages opened", value: 2 },
        ]}
        caption="Every matched job made it all the way through. The drop happens at matching, which is where it should happen."
      />
      <BarChart
        title="Daily time spent on applications"
        unit=" min"
        bars={[
          { label: "Before: tailoring by hand", value: 120, display: "~2 h", series: 2 },
          { label: "After: reviewing JobTailor output", value: 15, display: "~15 min" },
        ]}
        legend={["With JobTailor", "Manual"]}
      />
      <p>
        It runs every day and leaves a stack of applications ready to submit
        each morning.
      </p>

      <h2>The hardest part</h2>
      <p>
        I expected the AI or the scraping to be the hard part. It was the
        resume tailoring. Getting a model to rewrite a resume without inventing
        skills is harder than it sounds, because it keeps trying to make the
        resume sound better by adding claims I never made. The prompt has to
        be blunt (rephrase, reorder, highlight, don&apos;t add, don&apos;t
        embellish), and a validation step
        after it backs that up.
      </p>
      <p>
        The project is open source at{" "}
        <a href="https://github.com/mueedbhat-create/jobtailor">
          github.com/mueedbhat-create/jobtailor
        </a>
        . You can install it, point it at your own resume and keywords, and
        run your own automated search. For more on AI automation in marketing,
        read the{" "}
        <Link href="/blog/ai-marketing-automation-guide-2026">
          AI marketing automation guide
        </Link>{" "}
        and the{" "}
        <Link href="/blog/n8n-beginners-first-ai-automation-30-minutes-2026">
          n8n beginner tutorial
        </Link>
        .
      </p>
    </>
  ),
};
