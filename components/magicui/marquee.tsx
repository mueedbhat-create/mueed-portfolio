type MarqueeProps = {
  children: React.ReactNode;
  reverse?: boolean;
  className?: string;
};

export function Marquee({ children, reverse, className }: MarqueeProps) {
  return (
    <div className="group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className={`flex shrink-0 gap-4 py-2 pr-4 animate-marquee group-hover:[animation-play-state:paused] ${
          reverse ? "[animation-direction:reverse]" : ""
        } ${className ?? ""}`}
      >
        {children}
      </div>
    </div>
  );
}