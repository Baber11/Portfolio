"use client";

import { memo, useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/** Lightweight galaxy atmosphere — reduced particles on mobile / reduced-motion. */
function GalaxyBackgroundComponent() {
  const reduceMotion = useReducedMotion();
  const [ready, setReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    setReady(true);
    return () => mq.removeEventListener("change", update);
  }, []);

  const starCount = reduceMotion ? 0 : isMobile ? 18 : 42;
  const particleCount = reduceMotion ? 0 : isMobile ? 0 : 10;

  const stars = useMemo(
    () =>
      Array.from({ length: starCount }, (_, i) => ({
        id: i,
        x: (i * 47) % 100,
        y: (i * 83) % 100,
        size: (i % 3) + 1,
        delay: (i % 10) * 0.35,
        duration: 2 + (i % 5),
      })),
    [starCount],
  );

  const particles = useMemo(
    () =>
      Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        x: 8 + ((i * 37) % 84),
        y: 10 + ((i * 53) % 80),
        duration: 12 + (i % 8) * 2,
      })),
    [particleCount],
  );

  if (!ready) {
    return (
      <div
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#030712]"
        aria-hidden
      >
        <div className="absolute -left-1/4 top-[-10%] h-[70vh] w-[70vw] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.22)_0%,transparent_68%)] blur-3xl" />
        <div className="absolute -right-1/4 top-[20%] h-[60vh] w-[55vw] rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.16)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(3,7,18,0.85)_100%)]" />
      </div>
    );
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[#030712]" />

      <div className="absolute -left-1/4 top-[-10%] h-[70vh] w-[70vw] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.22)_0%,transparent_68%)] blur-3xl will-change-transform animate-[pulse_12s_ease-in-out_infinite]" />
      <div className="absolute -right-1/4 top-[20%] h-[60vh] w-[55vw] rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.16)_0%,transparent_70%)] blur-3xl opacity-80" />
      {!isMobile ? (
        <div className="absolute bottom-[-15%] left-[20%] h-[50vh] w-[60vw] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.12)_0%,transparent_65%)] blur-3xl" />
      ) : null}

      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-white opacity-40"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            animation: reduceMotion
              ? undefined
              : `pulse ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}

      {particles.map((p) => (
        <motion.span
          key={`p-${p.id}`}
          className="absolute h-1 w-1 rounded-full bg-cyan-300/70 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
          animate={{
            y: [0, -80, -160],
            opacity: [0, 1, 0],
            x: [0, p.id % 2 === 0 ? 20 : -20, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.id * 0.6,
            ease: "linear",
          }}
        />
      ))}

      {!isMobile && !reduceMotion ? (
        <div className="absolute right-[-8%] top-[8%] h-[420px] w-[420px] opacity-30 sm:right-[2%] sm:top-[12%]">
          <svg viewBox="0 0 400 400" className="h-full w-full">
            <defs>
              <linearGradient id="ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#2dd4bf" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#818cf8" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <ellipse
              cx="200"
              cy="200"
              rx="170"
              ry="70"
              fill="none"
              stroke="url(#ring-grad)"
              strokeWidth="1.2"
              strokeDasharray="6 8"
              className="origin-center animate-[spin_40s_linear_infinite]"
            />
            <circle
              cx="200"
              cy="200"
              r="28"
              fill="none"
              stroke="rgba(34,211,238,0.5)"
              strokeWidth="1"
            />
          </svg>
        </div>
      ) : null}

      {!isMobile ? (
        <div className="galaxy-floor absolute inset-x-0 bottom-0 h-[42vh] opacity-20" />
      ) : null}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(3,7,18,0.85)_100%)]" />
    </div>
  );
}

export const GalaxyBackground = memo(GalaxyBackgroundComponent);
