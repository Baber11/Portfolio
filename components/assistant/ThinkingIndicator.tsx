"use client";

import { memo } from "react";

function ThinkingIndicatorComponent() {
  return (
    <div className="flex justify-start">
      <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-white/10 bg-white/5 px-3.5 py-2.5">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300/80" />
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300/50" />
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300/30" />
        <span className="ml-1 text-[11px] text-zinc-400">Thinking…</span>
      </div>
    </div>
  );
}

export const ThinkingIndicator = memo(ThinkingIndicatorComponent);
