"use client";

import { memo, type ReactNode } from "react";
import { motion } from "framer-motion";

interface HoloCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/** Glass + chromatic holographic card shell. */
function HoloCardComponent({ children, className = "", delay = 0 }: HoloCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      className={`holo-card group relative overflow-hidden rounded-2xl p-[1px] ${className}`}
    >
      <div className="holo-card-border absolute inset-0 rounded-2xl" />
      <div className="relative h-full rounded-2xl bg-[#060d1a]/80 p-5 backdrop-blur-xl sm:p-6">
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="holo-sheen absolute inset-0" />
        </div>
        <div className="relative z-10">{children}</div>
      </div>
    </motion.article>
  );
}

export const HoloCard = memo(HoloCardComponent);
