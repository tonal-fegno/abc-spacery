"use client";

import * as React from "react";
import { motion } from "framer-motion";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  /**
   * Delay (seconds) before the reveal starts after the element enters the viewport.
   */
  delay?: number;
  /**
   * Initial Y offset (px). Higher value = more "slide up".
   */
  y?: number;
  /**
   * Animation duration (seconds).
   */
  duration?: number;
  /**
   * Reveal only once.
   */
  once?: boolean;
  /**
   * How much of the element must be visible (0..1) before animating.
   */
  amount?: number;
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 24,
  duration = 0.6,
  once = true,
  amount = 0.25,
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  );
}

