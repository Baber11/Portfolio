"use client";

import { memo } from "react";
import { motion } from "framer-motion";

/** Portrait phone frame with holographic bezel for AI demo video. */
function PortraitVideoFrameComponent({
  src,
  caption,
}: {
  src: string;
  caption?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 24 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto flex w-full max-w-[280px] flex-col items-center sm:max-w-[300px]"
    >
      <div className="relative">
        {/* Glow aura */}
        <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-cyan-400/20 blur-2xl" />
        <motion.div
          className="pointer-events-none absolute -inset-3 rounded-[2.2rem] border border-cyan-300/20"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Phone chassis */}
        <div className="holo-phone relative overflow-hidden rounded-[2rem] border border-cyan-200/30 bg-[#020617] p-2 shadow-[0_0_40px_rgba(34,211,238,0.25),inset_0_0_30px_rgba(34,211,238,0.08)]">
          {/* Notch */}
          <div className="absolute left-1/2 top-3 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-black/90" />

          {/* Portrait viewport 9:16 */}
          <div className="relative aspect-[9/16] overflow-hidden rounded-[1.55rem] bg-black">
            <video
              className="h-full w-full object-cover"
              controls
              playsInline
              preload="metadata"
              poster=""
            >
              <source src={src} type="video/mp4" />
            </video>

            {/* Scan overlay */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(34,211,238,0.04)_50%)] bg-[length:100%_4px] mix-blend-overlay" />
            <motion.div
              className="pointer-events-none absolute inset-x-0 h-16 bg-gradient-to-b from-cyan-300/15 to-transparent"
              animate={{ top: ["0%", "100%"] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Home indicator */}
          <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-white/25" />
        </div>

        {/* Floating tech badges */}
        <motion.span
          className="absolute -left-10 top-16 hidden rounded-md border border-cyan-400/40 bg-cyan-950/80 px-2 py-1 font-mono text-[10px] text-cyan-200 backdrop-blur sm:block"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          AI.VISION
        </motion.span>
        <motion.span
          className="absolute -right-12 bottom-24 hidden rounded-md border border-teal-400/40 bg-teal-950/80 px-2 py-1 font-mono text-[10px] text-teal-200 backdrop-blur sm:block"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity }}
        >
          LIVE.FEED
        </motion.span>
      </div>

      {caption ? (
        <p className="mt-4 text-center font-mono text-[11px] tracking-wider text-cyan-200/70">
          {caption}
        </p>
      ) : null}
    </motion.div>
  );
}

export const PortraitVideoFrame = memo(PortraitVideoFrameComponent);
