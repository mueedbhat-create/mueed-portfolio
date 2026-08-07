"use client";

import { useEffect, useState } from "react";

type TypingAnimationProps = {
  text: string;
  className?: string;
  speed?: number;
};

export function TypingAnimation({
  text,
  className,
  speed = 50,
}: TypingAnimationProps) {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (shown >= text.length) return;
    const t = setTimeout(() => setShown((s) => s + 1), speed);
    return () => clearTimeout(t);
  }, [shown, text, speed]);

  return (
    <span className={className}>
      {text.slice(0, shown)}
      <span className="text-blue-400">▍</span>
    </span>
  );
}