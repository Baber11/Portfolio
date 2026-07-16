"use client";

import Image from "next/image";
import { memo } from "react";

/** Static hero portrait — no float / pulse animations. */
function HeroPortraitComponent() {
  return (
    <div className="relative z-10 mx-auto w-full max-w-[300px] lg:mx-0 lg:max-w-[340px]">
      <div className="hero-portrait-glow pointer-events-none absolute -inset-6 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.22),transparent_70%)]" />

      <div className="relative">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-cyan-300/30 bg-[#060d1a] p-[3px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="holo-card-border absolute inset-0 rounded-[1.75rem] opacity-60" />
          <div className="relative z-10 overflow-hidden rounded-[1.55rem] bg-[#030712]">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/assets/baber.avif"
                alt="Syed Baber Ali"
                fill
                priority
                unoptimized
                className="object-cover object-top"
                sizes="(max-width: 1024px) 280px, 340px"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030712]/55 via-transparent to-cyan-400/10" />
            </div>
          </div>
        </div>

        <span className="absolute -right-3 bottom-12 z-20 select-none font-mono text-[10px] tracking-widest text-cyan-300/85">
          ONLINE
        </span>
      </div>

      <p className="mt-4 text-center font-mono text-[11px] tracking-wider text-cyan-200/70 lg:text-left">
        Syed Baber Ali · Team Lead
      </p>
    </div>
  );
}

export const HeroPortrait = memo(HeroPortraitComponent);
