"use client";

import { memo } from "react";

/**
 * Static CSS galaxy — no Framer Motion, no JS particles.
 * Mobile skips heavy blurs; desktop keeps soft nebula only.
 */
function GalaxyBackgroundComponent() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#030712]"
      aria-hidden
    >
      {/* Soft nebula — no blur-3xl on small screens (see globals.css) */}
      <div className="galaxy-nebula galaxy-nebula-a absolute -left-1/4 top-[-10%] h-[55vh] w-[70vw] rounded-full" />
      <div className="galaxy-nebula galaxy-nebula-b absolute -right-1/4 top-[18%] h-[48vh] w-[55vw] rounded-full" />
      <div className="galaxy-nebula galaxy-nebula-c absolute bottom-[-10%] left-[15%] hidden h-[40vh] w-[50vw] rounded-full md:block" />

      {/* Cheap CSS star field (no DOM nodes per star) */}
      <div className="galaxy-stars absolute inset-0 opacity-50 md:opacity-70" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_28%,rgba(3,7,18,0.88)_100%)]" />
    </div>
  );
}

export const GalaxyBackground = memo(GalaxyBackgroundComponent);
