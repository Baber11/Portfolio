"use client";

import { memo, useMemo } from "react";
import { motion } from "framer-motion";

/** Animated galaxy + tech atmosphere: stars, nebula, circuit grid, orbit rings. */
function GalaxyBackgroundComponent() {
  const stars = useMemo(
    () =>
      Array.from({ length: 80 }, (_, i) => ({
        id: i,
        x: (i * 47) % 100,
        y: (i * 83) % 100,
        size: (i % 3) + 1,
        delay: (i % 10) * 0.35,
        duration: 2 + (i % 5),
      })),
    [],
  );

  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        x: 8 + ((i * 37) % 84),
        y: 10 + ((i * 53) % 80),
        duration: 12 + (i % 8) * 2,
      })),
    [],
  );

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {/* Deep space base */}
      <div className="absolute inset-0 bg-[#030712]" />

      {/* Nebula blobs */}
      <motion.div
        className="absolute -left-1/4 top-[-10%] h-[70vh] w-[70vw] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.22)_0%,transparent_68%)] blur-3xl"
        animate={{ x: [0, 40, -20, 0], y: [0, 30, 10, 0], scale: [1, 1.08, 0.96, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-1/4 top-[20%] h-[60vh] w-[55vw] rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.16)_0%,transparent_70%)] blur-3xl"
        animate={{ x: [0, -50, 20, 0], y: [0, -25, 35, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-15%] left-[20%] h-[50vh] w-[60vw] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.12)_0%,transparent_65%)] blur-3xl"
        animate={{ opacity: [0.45, 0.75, 0.45], scale: [1, 1.12, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Twinkling stars */}
      {stars.map((s) => (
        <motion.span
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
          }}
          animate={{ opacity: [0.15, 0.95, 0.2], scale: [1, 1.4, 1] }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating tech particles */}
      {particles.map((p) => (
        <motion.span
          key={`p-${p.id}`}
          className="absolute h-1 w-1 rounded-full bg-cyan-300/70 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
          animate={{
            y: [0, -80, -160],
            opacity: [0, 1, 0],
            x: [0, (p.id % 2 === 0 ? 20 : -20), 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.id * 0.6,
            ease: "linear",
          }}
        />
      ))}

      {/* Circuit / hex SVG overlay */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.14]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="hex-tech"
            width="56"
            height="100"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(1.2)"
          >
            <path
              d="M28 0 L56 16 L56 48 L28 64 L0 48 L0 16 Z"
              fill="none"
              stroke="rgba(34,211,238,0.45)"
              strokeWidth="0.6"
            />
          </pattern>
          <linearGradient id="scan-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(34,211,238,0)" />
            <stop offset="50%" stopColor="rgba(34,211,238,0.35)" />
            <stop offset="100%" stopColor="rgba(34,211,238,0)" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex-tech)" />
      </svg>

      {/* Animated orbit rings (SVG) */}
      <div className="absolute right-[-8%] top-[8%] h-[420px] w-[420px] opacity-40 sm:right-[2%] sm:top-[12%]">
        <svg viewBox="0 0 400 400" className="h-full w-full">
          <defs>
            <linearGradient id="ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#2dd4bf" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#818cf8" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            style={{ originX: "200px", originY: "200px" }}
          >
            <ellipse
              cx="200"
              cy="200"
              rx="170"
              ry="70"
              fill="none"
              stroke="url(#ring-grad)"
              strokeWidth="1.2"
              strokeDasharray="6 8"
            />
          </motion.g>
          <motion.g
            animate={{ rotate: -360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            style={{ originX: "200px", originY: "200px" }}
          >
            <ellipse
              cx="200"
              cy="200"
              rx="140"
              ry="140"
              fill="none"
              stroke="rgba(45,212,191,0.35)"
              strokeWidth="0.8"
            />
            <circle cx="340" cy="200" r="4" fill="#22d3ee">
              <animate
                attributeName="opacity"
                values="0.3;1;0.3"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
          </motion.g>
          <circle
            cx="200"
            cy="200"
            r="28"
            fill="none"
            stroke="rgba(34,211,238,0.5)"
            strokeWidth="1"
          />
          <circle cx="200" cy="200" r="6" fill="#22d3ee" opacity="0.7" />
        </svg>
      </div>

      {/* Horizontal scan line */}
      <motion.div
        className="absolute left-0 right-0 h-24 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent"
        animate={{ top: ["-10%", "110%"] }}
        transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
      />

      {/* Perspective floor grid */}
      <div className="galaxy-floor absolute inset-x-0 bottom-0 h-[42vh] opacity-30" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(3,7,18,0.85)_100%)]" />
    </div>
  );
}

export const GalaxyBackground = memo(GalaxyBackgroundComponent);
