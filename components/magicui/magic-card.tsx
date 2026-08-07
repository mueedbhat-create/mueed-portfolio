"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type MagicCardProps = {
  children: React.ReactNode;
  className?: string;
  gradientColor?: string;
  delay?: number;
};

export function MagicCard({
  children,
  className,
  gradientColor = "#1e40af",
  delay = 0,
}: MagicCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-6 hover:shadow-lg hover:shadow-blue-900/30 transition-shadow ${className ?? ""}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), ${gradientColor}22, transparent 40%)`,
        }}
      />
      {children}
    </motion.div>
  );
}