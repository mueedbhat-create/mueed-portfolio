import type { CSSProperties, ReactNode } from "react";

/*
 * Server-rendered figures for blog posts. Every value is real text in the HTML,
 * so readers, crawlers and AI engines all see the same numbers.
 * Colors: --viz-1 (primary series) and --viz-2 (comparison series), validated
 * for CVD separation and 3:1 contrast against the card surface.
 */

type FigureProps = {
  title: string;
  caption?: ReactNode;
  children: ReactNode;
};

export function Figure({ title, caption, children }: FigureProps) {
  return (
    <figure className="viz-figure">
      <p className="viz-title">{title}</p>
      <div className="mt-4">{children}</div>
      {caption && <figcaption className="viz-caption">{caption}</figcaption>}
    </figure>
  );
}

/* ---------- Horizontal bar chart ---------- */

export type Bar = {
  label: string;
  value: number;
  /** Text shown at the end of the bar. Defaults to the value + unit. */
  display?: string;
  /** 2 = comparison series (e.g. "before"). */
  series?: 1 | 2;
  note?: string;
};

type BarChartProps = {
  title: string;
  bars: Bar[];
  unit?: string;
  max?: number;
  caption?: ReactNode;
  /** Legend labels when the chart uses two series. */
  legend?: [string, string];
};

export function BarChart({ title, bars, unit = "", max, caption, legend }: BarChartProps) {
  const top = max ?? Math.max(...bars.map((b) => b.value));
  return (
    <Figure title={title} caption={caption}>
      {legend && (
        <div className="viz-legend">
          <span>
            <i style={{ background: "var(--viz-1)" }} />
            {legend[0]}
          </span>
          <span>
            <i style={{ background: "var(--viz-2)" }} />
            {legend[1]}
          </span>
        </div>
      )}
      <div
        className="viz-bars"
        style={
          {
            "--viz-val-w": `${Math.max(...bars.map((b) => (b.display ?? `${b.value}${unit}`).length)) * 0.62 + 0.3}em`,
          } as CSSProperties
        }
      >
        {bars.map((b, i) => {
          const text = b.display ?? `${b.value}${unit}`;
          const pct = Math.max(1.5, (b.value / top) * 100);
          return (
            <div className="viz-row" key={i} title={`${b.label}: ${text}`}>
              <span className="viz-label">
                {b.label}
                {b.note && <span className="viz-note">{b.note}</span>}
              </span>
              <span className="viz-track">
                <span className="viz-bar-area">
                  <span
                    className="viz-bar"
                    style={{
                      width: `${pct}%`,
                      background: b.series === 2 ? "var(--viz-2)" : "var(--viz-1)",
                    }}
                  />
                </span>
                <span className="viz-value">{text}</span>
              </span>
            </div>
          );
        })}
      </div>
    </Figure>
  );
}

/* ---------- Single stacked bar (part of a whole) ---------- */

type StackProps = {
  title: string;
  parts: { label: string; value: number; display?: string }[];
  caption?: ReactNode;
};

export function StackBar({ title, parts, caption }: StackProps) {
  const total = parts.reduce((s, p) => s + p.value, 0);
  return (
    <Figure title={title} caption={caption}>
      <div className="viz-stack" role="img" aria-label={parts.map((p) => `${p.label} ${p.display ?? p.value}`).join(", ")}>
        {parts.map((p, i) => (
          <span
            key={i}
            title={`${p.label}: ${p.display ?? p.value}`}
            style={{
              width: `${(p.value / total) * 100}%`,
              background: i === 0 ? "var(--viz-1)" : i === 1 ? "var(--viz-2)" : "var(--viz-3)",
            }}
          />
        ))}
      </div>
      <div className="viz-legend mt-3">
        {parts.map((p, i) => (
          <span key={i}>
            <i
              style={{
                background: i === 0 ? "var(--viz-1)" : i === 1 ? "var(--viz-2)" : "var(--viz-3)",
              }}
            />
            {p.label}: <strong>{p.display ?? p.value}</strong>
          </span>
        ))}
      </div>
    </Figure>
  );
}

/* ---------- Flow / pipeline diagram ---------- */

export type Step = { title: string; detail?: string; human?: boolean };

type FlowProps = {
  title: string;
  steps: Step[];
  caption?: ReactNode;
};

export function Flow({ title, steps, caption }: FlowProps) {
  return (
    <Figure title={title} caption={caption}>
      <FlowRow steps={steps} />
      {steps.some((s) => s.human) && <StepKey />}
    </Figure>
  );
}

function StepKey() {
  return (
    <div className="viz-legend mt-4">
      <span>
        <i className="viz-key-human" />
        Human step
      </span>
      <span>
        <i className="viz-key-auto" />
        Automated step
      </span>
    </div>
  );
}

function FlowRow({ steps }: { steps: Step[] }) {
  return (
    <div className="viz-flow">
      {steps.map((s, i) => (
        <div className="viz-flow-item" key={i}>
          <div className={s.human ? "viz-node viz-node-human" : "viz-node"}>
            <span className="viz-node-num">{String(i + 1).padStart(2, "0")}</span>
            <span className="viz-node-title">{s.title}</span>
            {s.detail && <span className="viz-node-detail">{s.detail}</span>}
          </div>
          {i < steps.length - 1 && (
            <span className="viz-arrow" aria-hidden="true">
              →
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

type LanesProps = {
  title: string;
  lanes: { label: string; steps: Step[] }[];
  caption?: ReactNode;
};

export function Lanes({ title, lanes, caption }: LanesProps) {
  return (
    <Figure title={title} caption={caption}>
      <div className="space-y-5">
        {lanes.map((l) => (
          <div key={l.label}>
            <p className="viz-lane-label">{l.label}</p>
            <FlowRow steps={l.steps} />
          </div>
        ))}
      </div>
      {lanes.some((l) => l.steps.some((s) => s.human)) && <StepKey />}
    </Figure>
  );
}

/* ---------- Decision guide ---------- */

type DecisionProps = {
  title: string;
  rows: { question: string; answer: string; tone?: "a" | "b" | "both" }[];
  caption?: ReactNode;
};

export function Decision({ title, rows, caption }: DecisionProps) {
  return (
    <Figure title={title} caption={caption}>
      <div className="viz-decision">
        {rows.map((r, i) => (
          <div className="viz-decision-row" key={i}>
            <span className="viz-decision-q">{r.question}</span>
            <span
              className={
                r.tone === "b"
                  ? "viz-pill viz-pill-b"
                  : r.tone === "both"
                    ? "viz-pill viz-pill-both"
                    : "viz-pill"
              }
            >
              {r.answer}
            </span>
          </div>
        ))}
      </div>
    </Figure>
  );
}

/* ---------- Stat tiles ---------- */

type StatsProps = {
  title: string;
  stats: { value: string; label: string }[];
  caption?: ReactNode;
};

export function Stats({ title, stats, caption }: StatsProps) {
  return (
    <Figure title={title} caption={caption}>
      <div className="viz-stats">
        {stats.map((s) => (
          <div className="viz-stat" key={s.label}>
            <span className="viz-stat-value">{s.value}</span>
            <span className="viz-stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </Figure>
  );
}

/* ---------- Funnel (narrowing counts) ---------- */

type FunnelProps = {
  title: string;
  stages: { label: string; value: number; display?: string }[];
  caption?: ReactNode;
};

export function Funnel({ title, stages, caption }: FunnelProps) {
  const top = stages[0]?.value || 1;
  return (
    <Figure title={title} caption={caption}>
      <div className="viz-funnel">
        {stages.map((s, i) => (
          <div className="viz-funnel-row" key={i} title={`${s.label}: ${s.display ?? s.value}`}>
            <span
              className="viz-funnel-bar"
              style={{ width: `${Math.max(18, (s.value / top) * 100)}%` }}
            >
              {s.display ?? s.value}
            </span>
            <span className="viz-funnel-label">{s.label}</span>
          </div>
        ))}
      </div>
    </Figure>
  );
}
