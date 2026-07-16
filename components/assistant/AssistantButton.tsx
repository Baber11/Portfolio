"use client";

import { memo } from "react";
import { MessageCircle, Sparkles } from "lucide-react";
import { useAssistant } from "@/context/AssistantContext";

function AssistantButtonComponent() {
  const { toggle, isOpen } = useAssistant();

  return (
    <div className="fixed bottom-5 right-4 z-50 flex items-center gap-3 sm:bottom-6 sm:right-6">
      {!isOpen ? (
        <button
          type="button"
          onClick={toggle}
          className="relative max-w-[220px] overflow-hidden rounded-2xl border border-white/40 bg-white px-3.5 py-2.5 text-left shadow-[0_8px_28px_rgba(0,0,0,0.4)] sm:max-w-none"
          aria-label="Open Baber's AI Portfolio Assistant"
        >
          <div className="relative z-10 flex items-start gap-2">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#030712] text-cyan-300">
              <MessageCircle className="h-4 w-4" />
            </span>
            <div>
              <p className="font-display text-xs font-bold tracking-wide text-[#030712] sm:text-[13px]">
                Ask Baber's AI
              </p>
              <p className="mt-0.5 text-[10px] font-semibold leading-snug text-slate-600">
                Chat about experience, apps & skills
              </p>
            </div>
          </div>
        </button>
      ) : null}

      <button
        type="button"
        onClick={toggle}
        aria-label={
          isOpen
            ? "Close Baber's AI Portfolio Assistant"
            : "Open Baber's AI Portfolio Assistant"
        }
        className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full sm:h-16 sm:w-16"
      >
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-white text-[#030712] shadow-[0_4px_20px_rgba(0,0,0,0.35)] sm:h-16 sm:w-16">
          <Sparkles className="h-6 w-6 text-cyan-600 sm:h-7 sm:w-7" />
        </span>
      </button>
    </div>
  );
}

export const AssistantButton = memo(AssistantButtonComponent);
