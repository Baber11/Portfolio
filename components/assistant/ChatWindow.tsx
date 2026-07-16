"use client";

import { memo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, X, Radio } from "lucide-react";
import { useAssistant } from "@/context/AssistantContext";
import { ChatInput } from "./ChatInput";
import { MessageList } from "./MessageList";
import { SuggestedChips } from "./SuggestedChips";

function ChatWindowComponent() {
  const { isOpen, close } = useAssistant();

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          key="chat-window"
          initial={{ opacity: 0, y: 32, scale: 0.92, rotateX: 8 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 340, damping: 26 }}
          className="fixed bottom-24 right-4 z-50 flex h-[min(660px,calc(100dvh-7.5rem))] w-[min(410px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl sm:right-6"
          style={{ perspective: 800 }}
          role="dialog"
          aria-label="Baber's Portfolio Assistant"
        >
          {/* Animated gradient border shell */}
          <div className="holo-card-border absolute inset-0 rounded-2xl p-[1px]">
            <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-cyan-400/20 bg-[#040b16]/92 shadow-[0_0_60px_rgba(34,211,238,0.2)] backdrop-blur-2xl">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.12),transparent_55%)]" />
              <motion.div
                className="pointer-events-none absolute inset-x-0 h-20 bg-gradient-to-b from-cyan-400/10 to-transparent"
                animate={{ top: ["-20%", "120%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              />

              <header className="relative z-10 flex items-center justify-between border-b border-cyan-400/15 px-4 py-3">
                <div className="flex items-center gap-2.5">
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-teal-600 shadow-[0_0_20px_rgba(34,211,238,0.45)]">
                    <Bot className="h-5 w-5 text-white" />
                    <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                  </div>
                  <div>
                    <p className="font-display text-sm tracking-wide text-slate-50">
                      Portfolio Assistant
                    </p>
                    <p className="flex items-center gap-1 font-mono text-[10px] text-cyan-300/80">
                      <Radio className="h-3 w-3 animate-pulse" />
                      Baber's holographic uplink
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={close}
                  className="rounded-lg border border-white/10 p-1.5 text-slate-400 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-100"
                  aria-label="Close assistant"
                >
                  <X className="h-4 w-4" />
                </button>
              </header>

              <div className="relative z-10 flex min-h-0 flex-1 flex-col">
                <MessageList />
                <SuggestedChips />
                <ChatInput />
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export const ChatWindow = memo(ChatWindowComponent);
