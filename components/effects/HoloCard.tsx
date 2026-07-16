"use client";

import { memo, type ReactNode } from "react";

interface HoloCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/** Lightweight card shell — no Framer Motion, no backdrop-blur (mobile GPU killer). */
function HoloCardComponent({ children, className = "" }: HoloCardProps) {
  return (
    <article
      className={`holo-card group relative overflow-hidden rounded-2xl border border-white/10 bg-[#060d1a] p-5 sm:p-6 ${className}`}
    >
      <div className="relative z-10">{children}</div>
    </article>
  );
}

export const HoloCard = memo(HoloCardComponent);
