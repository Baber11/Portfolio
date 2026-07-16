"use client";

import Image from "next/image";
import { memo } from "react";
import { motion } from "framer-motion";

/** Playful animated hero portrait — float + giggle wobble. */
function HeroPortraitComponent() {
  return (
    <motion.div
      className="relative z-10 mx-auto w-full max-w-[300px] lg:mx-0 lg:max-w-[340px]"
      initial={{ opacity: 0, x: 40, scale: 0.92 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ delay: 0.25, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-8 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.35),transparent_70%)] blur-2xl"
        animate={{ opacity: [0.45, 0.85, 0.45], scale: [1, 1.08, 1] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="pointer-events-none absolute -inset-4 rounded-[2rem] border border-cyan-400/25"
        animate={{ rotate: [0, 2, -2, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative"
        animate={{
          y: [0, -10, 0, -6, 0],
          rotate: [0, -2.5, 2.2, -1.5, 0],
        }}
        transition={{
          duration: 3.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.04,
          rotate: [0, -4, 4, -3, 0],
          transition: { duration: 0.55 },
        }}
      >
        <div className="relative overflow-hidden rounded-[1.75rem] border border-cyan-300/30 bg-[#060d1a] p-[3px] shadow-[0_25px_60px_rgba(0,0,0,0.55),0_0_40px_rgba(34,211,238,0.25)]">
          <div className="holo-card-border absolute inset-0 rounded-[1.75rem] opacity-90" />
          <div className="relative z-10 overflow-hidden rounded-[1.55rem] bg-[#030712]">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/assets/baber.avif"
                alt="Syed Baber Ali"
                fill
                priority
                unoptimized
                className="object-cover object-top"
                sizes="340px"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030712]/55 via-transparent to-cyan-400/10" />
              <motion.div
                className="pointer-events-none absolute inset-x-0 h-16 bg-gradient-to-b from-cyan-300/15 to-transparent"
                animate={{ top: ["-10%", "110%"] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>
        </div>

        <motion.span
          className="absolute -right-2 top-10 z-20 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]"
          animate={{ y: [0, -14, 0], scale: [1, 1.35, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        />
        <motion.span
          className="absolute -left-3 bottom-20 z-20 h-2.5 w-2.5 rotate-45 border border-teal-300/80 bg-teal-400/40 shadow-[0_0_10px_rgba(45,212,191,0.7)]"
          animate={{ y: [0, -10, 0], rotate: [45, 70, 45], scale: [1, 1.2, 1] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.35 }}
          aria-hidden
        />
        <motion.span
          className="absolute -right-3 bottom-12 z-20 select-none font-mono text-[10px] tracking-widest text-cyan-300/85"
          animate={{ opacity: [0.4, 1, 0.4], x: [0, 4, 0] }}
          transition={{ duration: 2.4, repeat: Infinity }}
        >
          ONLINE
        </motion.span>
      </motion.div>

      <p className="mt-4 text-center font-mono text-[11px] tracking-wider text-cyan-200/70 lg:text-left">
        Syed Baber Ali · Team Lead
      </p>
    </motion.div>
  );
}

export const HeroPortrait = memo(HeroPortraitComponent);
