type SpotlightProps = {
  className?: string;
};

export function Spotlight({ className }: SpotlightProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
    >
      <div
        className="absolute left-1/2 top-0 h-[40rem] w-[60rem] -translate-x-1/2 -translate-y-1/3 animate-spotlight"
        style={{
          background:
            "radial-gradient(600px circle at center, oklch(0.62 0.21 258 / 0.18), transparent 70%)",
        }}
      />
    </div>
  );
}