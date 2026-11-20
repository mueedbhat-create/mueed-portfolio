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

/* ---------- Line chart (curves and trends) ---------- */

type LineSeries = { label: string; points: [number, number][]; dashed?: boolean };

type LineChartProps = {
  title: string;
  series: LineSeries[];
  xLabel: string;
  yLabel: string;
  /** Tick values shown on each axis. */
  xTicks: number[];
  yTicks: number[];
  formatX?: "plain" | "k" | "pct" | "rupee";
  formatY?: "plain" | "k" | "pct" | "rupee";
  /** Optional labelled points, e.g. a break-even marker. */
  marks?: { x: number; y: number; label: string }[];
  caption?: ReactNode;
};

function fmt(v: number, f: LineChartProps["formatX"]) {
  if (f === "k") return v >= 1000 ? `${v / 1000}k` : `${v}`;
  if (f === "pct") return `${v}%`;
  if (f === "rupee") return v >= 1000 ? `₹${v / 1000}k` : `₹${v}`;
  return `${v}`;
}

export function LineChart({
  title,
  series,
  xLabel,
  yLabel,
  xTicks,
  yTicks,
  formatX = "plain",
  formatY = "plain",
  marks = [],
  caption,
}: LineChartProps) {
  const W = 640;
  const H = 300;
  const L = 56;
  const R = 16;
  const T = 16;
  const B = 44;
  const xMin = Math.min(...xTicks);
  const xMax = Math.max(...xTicks);
  const yMin = Math.min(...yTicks);
  const yMax = Math.max(...yTicks);
  const sx = (x: number) => L + ((x - xMin) / (xMax - xMin)) * (W - L - R);
  const sy = (y: number) => T + (1 - (y - yMin) / (yMax - yMin)) * (H - T - B);
  const colors = ["var(--viz-1)", "var(--viz-2)", "var(--viz-3)"];
  const summary = series
    .map((s) => `${s.label}: ${s.points.map(([x, y]) => `${fmt(x, formatX)} → ${fmt(y, formatY)}`).join(", ")}`)
    .join("; ");

  return (
    <Figure title={title} caption={caption}>
      {series.length > 1 && (
        <div className="viz-legend mb-3">
          {series.map((s, i) => (
            <span key={s.label}>
              <i style={{ background: colors[i] }} />
              {s.label}
            </span>
          ))}
        </div>
      )}
      <svg viewBox={`0 0 ${W} ${H}`} className="viz-line" role="img" aria-label={`${title}. ${summary}`}>
        {yTicks.map((t) => (
          <g key={`y${t}`}>
            <line x1={L} x2={W - R} y1={sy(t)} y2={sy(t)} className="viz-grid" />
            <text x={L - 8} y={sy(t) + 4} textAnchor="end" className="viz-tick">
              {fmt(t, formatY)}
            </text>
          </g>
        ))}
        {xTicks.map((t) => (
          <text key={`x${t}`} x={sx(t)} y={H - B + 18} textAnchor="middle" className="viz-tick">
            {fmt(t, formatX)}
          </text>
        ))}
        <text x={(L + W - R) / 2} y={H - 6} textAnchor="middle" className="viz-axis">
          {xLabel}
        </text>
        <text x={12} y={(T + H - B) / 2} textAnchor="middle" className="viz-axis" transform={`rotate(-90 12 ${(T + H - B) / 2})`}>
          {yLabel}
        </text>
        {series.map((s, i) => (
          <polyline
            key={s.label}
            fill="none"
            stroke={colors[i]}
            strokeWidth={2.5}
            strokeLinejoin="round"
            strokeDasharray={s.dashed ? "6 5" : undefined}
            points={s.points.map(([x, y]) => `${sx(x)},${sy(y)}`).join(" ")}
          />
        ))}
        {marks.map((m) => (
          <g key={m.label}>
            <circle cx={sx(m.x)} cy={sy(m.y)} r={5} fill="var(--viz-2)" />
            <text
              x={sx(m.x) + (sx(m.x) > W * 0.55 ? -10 : 10)}
              y={sy(m.y) - 10}
              textAnchor={sx(m.x) > W * 0.55 ? "end" : "start"}
              className="viz-mark"
            >
              {m.label}
            </text>
          </g>
        ))}
      </svg>
    </Figure>
  );
}

/* ---------- 2x2 matrix ---------- */

type MatrixProps = {
  title: string;
  xAxis: [string, string];
  yAxis: [string, string];
  /** Quadrants in reading order: top-left, top-right, bottom-left, bottom-right. */
  cells: [MatrixCell, MatrixCell, MatrixCell, MatrixCell];
  caption?: ReactNode;
};
type MatrixCell = { title: string; detail: string; highlight?: boolean };

export function Matrix({ title, xAxis, yAxis, cells, caption }: MatrixProps) {
  return (
    <Figure title={title} caption={caption}>
      <div className="viz-matrix">
        {[0, 1].map((row) => (
          <div className="contents" key={row}>
            <span className="viz-matrix-ylabel">{row === 0 ? yAxis[1] : yAxis[0]}</span>
            {cells.slice(row * 2, row * 2 + 2).map((c) => (
              <div key={c.title} className={c.highlight ? "viz-cell viz-cell-hi" : "viz-cell"}>
                <span className="viz-node-title">{c.title}</span>
                <span className="viz-node-detail">{c.detail}</span>
              </div>
            ))}
          </div>
        ))}
        <span />
        <span className="viz-matrix-xlabel">{xAxis[0]}</span>
        <span className="viz-matrix-xlabel">{xAxis[1]}</span>
      </div>
    </Figure>
  );
}
