"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

type NumberTickerProps = {
  value: number;
  suffix?: string;
  className?: string;
};

export function NumberTicker({
  value,
  suffix = "",
  className,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const spring = useSpring(0, { duration: 1500, bounce: 0 });
  const display = useMotionValue(0);
  const [formatted, setFormatted] = useState("0");

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, value, spring]);

  useEffect(() => {
    const unsub = display.on("change", (v) => {
      setFormatted(Math.round(v).toString());
    });
    return unsub;
  }, [display]);

  return (
    <span ref={ref} className={className}>
      {formatted}
      {suffix}
    </span>
  );
}