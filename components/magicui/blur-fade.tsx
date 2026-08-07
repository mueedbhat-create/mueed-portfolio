"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

type BlurFadeProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  inView?: boolean;
};

export function BlurFade({
  children,
  className,
  delay = 0,
  duration = 0.5,
  inView = true,
}: BlurFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const variants: Variants = {
    hidden: { opacity: 0, filter: "blur(8px)", y: 16 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={!inView || isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ delay, duration, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}