"use client";

import { memo, useEffect, useRef, useState } from "react";

/**
 * Portrait phone frame for AI demo — video src attaches only when near viewport
 * so mobile does not download ~1–2MB until the AI section is approached.
 */
function PortraitVideoFrameComponent({
  src,
  poster,
  caption,
}: {
  src: string;
  poster?: string;
  caption?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setLoadVideo(true);
          io.disconnect();
        }
      },
      { rootMargin: "120px 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={wrapRef}
      className="mx-auto flex w-full max-w-[280px] flex-col items-center sm:max-w-[300px]"
    >
      <div className="relative">
        <div className="device-glow pointer-events-none absolute -inset-6 hidden rounded-[2.5rem] bg-cyan-400/15 md:block" />

        <div className="holo-phone relative overflow-hidden rounded-[2rem] border border-cyan-200/30 bg-[#020617] p-2 shadow-[0_0_40px_rgba(34,211,238,0.2)]">
          <div className="absolute left-1/2 top-3 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-black/90" />

          <div className="relative aspect-[9/16] overflow-hidden rounded-[1.55rem] bg-black">
            {loadVideo ? (
              <video
                className="h-full w-full object-cover"
                controls
                playsInline
                preload="metadata"
                poster={poster || "/assets/ai-surveillance-poster.webp"}
              >
                <source src={src} type="video/mp4" />
              </video>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={poster || "/assets/ai-surveillance-poster.webp"}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            )}
          </div>

          <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-white/25" />
        </div>
      </div>

      {caption ? (
        <p className="mt-4 text-center font-mono text-[11px] tracking-wider text-cyan-200/70">
          {caption}
        </p>
      ) : null}
    </div>
  );
}

export const PortraitVideoFrame = memo(PortraitVideoFrameComponent);
