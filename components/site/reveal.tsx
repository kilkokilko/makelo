"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Apple-style scroll reveal: ein kurzes, flaches Fade-Up auf der Easing-Kurve,
 * die Apple über apple.com hinweg benutzt. Bewusst zurückhaltend, der Inhalt führt.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.28, 0.11, 0.32, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
