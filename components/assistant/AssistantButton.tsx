"use client";

import { memo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, MessageCircle } from "lucide-react";
import { useAssistant } from "@/context/AssistantContext";

function AssistantButtonComponent() {
  const { toggle, isOpen } = useAssistant();

  return (
    <motion.div
      className="fixed bottom-5 right-4 z-50 flex items-center gap-3 sm:bottom-6 sm:right-6"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35 }}
    >
      <AnimatePresence>
        {!isOpen ? (
          <motion.button
            type="button"
            key="assistant-label"
            onClick={toggle}
            initial={{ opacity: 0, x: 16, scale: 0.9 }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
              y: [0, -5, 0],
            }}
            exit={{ opacity: 0, x: 10, scale: 0.92 }}
            transition={{
              opacity: { duration: 0.25 },
              x: { type: "spring", stiffness: 320, damping: 22 },
              y: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="relative max-w-[220px] overflow-hidden rounded-2xl border border-white/40 bg-white px-3.5 py-2.5 text-left shadow-[0_0_36px_rgba(255,255,255,0.35),0_8px_28px_rgba(0,0,0,0.4)] sm:max-w-none"
            aria-label="Open Baber's AI Portfolio Assistant"
          >
            <motion.span
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent"
              animate={{ x: ["-120%", "120%"] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 0.8,
              }}
            />
            <motion.span
              className="pointer-events-none absolute -inset-1 rounded-2xl border border-white/50"
              animate={{ opacity: [0.9, 0.2, 0.9], scale: [1, 1.06, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-10 flex items-start gap-2">
              <motion.span
                className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#030712] text-cyan-300"
                animate={{ rotate: [0, -12, 12, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <MessageCircle className="h-4 w-4" />
              </motion.span>
              <div>
                <p className="font-display text-xs font-bold tracking-wide text-[#030712] sm:text-[13px]">
                  Ask Baber's AI
                </p>
                <p className="mt-0.5 text-[10px] font-semibold leading-snug text-slate-600">
                  Chat about experience, apps & skills
                </p>
              </div>
            </div>
          </motion.button>
        ) : null}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={toggle}
        aria-label={
          isOpen
            ? "Close Baber's AI Portfolio Assistant"
            : "Open Baber's AI Portfolio Assistant"
        }
        className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.span
          className="absolute inset-0 rounded-full bg-white/50"
          animate={{ scale: [1, 1.7, 1], opacity: [0.75, 0, 0.75] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
        <motion.span
          className="absolute -inset-1 rounded-full bg-cyan-200/40"
          animate={{ scale: [1, 1.45, 1], opacity: [0.55, 0, 0.55] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: 0.35 }}
        />
        <span className="absolute -inset-[3px] rounded-full bg-white opacity-95 blur-[1px]" />
        <span className="relative flex h-16 w-16 items-center justify-center rounded-full border-2 border-white bg-white text-[#030712] shadow-[0_0_40px_rgba(255,255,255,0.55)]">
          <motion.span
            animate={
              isOpen
                ? { rotate: 90 }
                : { rotate: [0, -15, 15, 0], scale: [1, 1.12, 1] }
            }
            transition={
              isOpen
                ? { type: "spring", stiffness: 260, damping: 18 }
                : { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }
          >
            <Sparkles className="h-7 w-7 text-cyan-600 drop-shadow-sm" />
          </motion.span>
        </span>
      </motion.button>
    </motion.div>
  );
}

export const AssistantButton = memo(AssistantButtonComponent);
