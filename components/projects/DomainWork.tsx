"use client";

import Image from "next/image";
import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";
import {
  AnimatePresence,
  m,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { ArrowLeft, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import type { Project } from "@/data/types";
import { PhoneFrame } from "@/components/projects/DeviceFrames";
import { ProjectCard } from "@/components/projects/ProjectCard";

/** Horizontal chip / pill scroller — wheel + drag + buttons. */
function HorizontalChipScroll({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (el.scrollWidth <= el.clientWidth) return;
      // Prefer horizontal intent; map vertical wheel to sideways scroll.
      const delta =
        Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (delta === 0) return;
      const atStart = el.scrollLeft <= 0 && delta < 0;
      const atEnd =
        el.scrollLeft + el.clientWidth >= el.scrollWidth - 1 && delta > 0;
      if (atStart || atEnd) return;
      el.scrollLeft += delta;
      e.preventDefault();
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const scrollBy = (dir: -1 | 1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(280, el.clientWidth * 0.7), behavior: "smooth" });
  };

  return (
    <div className="relative mb-10 w-full min-w-0">
      <button
        type="button"
        aria-label="Scroll apps left"
        onClick={() => scrollBy(-1)}
        className="absolute -left-1 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#0a1220]/95 text-slate-300 shadow-lg backdrop-blur-sm transition hover:border-cyan-400/40 hover:text-cyan-100 sm:flex"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        type="button"
        aria-label="Scroll apps right"
        onClick={() => scrollBy(1)}
        className="absolute -right-1 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#0a1220]/95 text-slate-300 shadow-lg backdrop-blur-sm transition hover:border-cyan-400/40 hover:text-cyan-100 sm:flex"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
      <div
        ref={ref}
        className="app-chip-scroll flex w-full min-w-0 max-w-full gap-2 overflow-x-auto overscroll-x-contain px-1 pb-2 touch-pan-x sm:px-8"
      >
        {children}
      </div>
    </div>
  );
}

const MARQUEE_TOP = [
  "React Native",
  "Next.js",
  "Logistics",
  "Healthcare",
  "Ride-hailing",
  "POS",
  "AI",
  "E-commerce",
  "Fintech",
  "Social",
];

const MARQUEE_BOTTOM = [
  "TypeScript",
  "Firebase",
  "Maps",
  "Payments",
  "Realtime",
  "Enterprise",
  "Mobile",
  "Web",
  "Architecture",
  "Team Lead",
];

const STAGE_SLOTS = [
  { x: "-18vw", y: "-1vh", rotate: -5, scale: 1 },
  { x: "18vw", y: "2vh", rotate: 4, scale: 1 },
  { x: "-14vw", y: "5vh", rotate: -3, scale: 0.96 },
  { x: "14vw", y: "-4vh", rotate: 3, scale: 0.97 },
] as const;

function MarqueeBand({
  items,
  reverse,
  tone,
}: {
  items: string[];
  reverse?: boolean;
  tone: "light" | "accent";
}) {
  const doubled = [...items, ...items];
  return (
    <div
      className={`work-marquee overflow-hidden whitespace-nowrap py-3 sm:py-3.5 ${
        tone === "light"
          ? "bg-white text-slate-950"
          : "bg-cyan-400 text-slate-950"
      }`}
    >
      <div
        className={`work-marquee-track inline-flex min-w-full items-center gap-8 sm:gap-12 ${
          reverse ? "work-marquee-reverse" : ""
        }`}
      >
        {doubled.map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="inline-flex shrink-0 items-center gap-8 font-display text-sm font-bold uppercase tracking-[0.08em] sm:gap-12 sm:text-base md:text-lg"
          >
            {label}
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                tone === "light" ? "bg-slate-950/40" : "bg-slate-950/35"
              }`}
              aria-hidden
            />
          </span>
        ))}
      </div>
    </div>
  );
}

/**
 * Track scroll through the tall stage via getBoundingClientRect.
 * More reliable than useScroll when a parent has overflow-x clipping.
 */
function useStageProgress(stageRef: RefObject<HTMLDivElement | null>) {
  const progress = useMotionValue(0);

  useEffect(() => {
    const update = () => {
      const el = stageRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewportH = window.visualViewport?.height ?? window.innerHeight;
      const scrollable = el.offsetHeight - viewportH;
      if (scrollable <= 1) {
        progress.set(0);
        return;
      }
      const raw = -rect.top / scrollable;
      progress.set(Math.min(1, Math.max(0, raw)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    window.visualViewport?.addEventListener("resize", update);
    window.visualViewport?.addEventListener("scroll", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.visualViewport?.removeEventListener("resize", update);
      window.visualViewport?.removeEventListener("scroll", update);
    };
  }, [stageRef, progress]);

  return progress;
}

/** Mobile-only WORK scrubber — sticky title + phone appear/disappear. */
function MobileWorkStage({
  phones,
  reduced,
  onOpen,
  onActiveChange,
  onViewDetails,
}: {
  phones: Project[];
  reduced: boolean;
  onOpen: (project: Project) => void;
  onActiveChange: (index: number) => void;
  onViewDetails: () => void;
}) {
  const stageRef = useRef<HTMLDivElement>(null);
  const progress = useStageProgress(stageRef);
  const [activeIndex, setActiveIndex] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  useMotionValueEvent(progress, "change", (v) => {
    if (phones.length <= 0) return;
    // Slight bias so the next card engages a bit earlier while scrolling down.
    const next = Math.min(
      phones.length - 1,
      Math.max(0, Math.floor(v * phones.length + 0.05)),
    );
    setActiveIndex((prev) => (prev === next ? prev : next));
  });

  useEffect(() => {
    onActiveChange(activeIndex);
  }, [activeIndex, onActiveChange]);

  const activePhone = phones[activeIndex] ?? null;
  const stageVh = Math.max(phones.length * 70, 200);

  const titleScale = useTransform(
    progress,
    [0, 0.35, 0.7, 1],
    reduced ? [1, 1, 1, 1] : [0.92, 1.14, 1.06, 0.86],
  );
  const titleOpacity = useTransform(
    progress,
    [0, 0.15, 0.85, 1],
    reduced ? [1, 1, 1, 1] : [0.85, 1, 0.95, 0.55],
  );

  return (
    <div
      ref={stageRef}
      className="work-full-bleed relative mt-2"
      style={{ height: `${stageVh}vh` }}
    >
      <div className="sticky top-0 flex h-[100dvh] flex-col items-center overflow-hidden px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-8">
        <m.h2
          style={{ scale: titleScale, opacity: titleOpacity }}
          className="work-giant-title work-giant-title--mobile pointer-events-none absolute left-1/2 top-[12%] z-0 -translate-x-1/2 select-none font-display font-black uppercase leading-none text-white"
          aria-label="Work"
        >
          Work
        </m.h2>

        <div className="relative z-20 flex min-h-0 w-full flex-1 flex-col items-center justify-center">
          <AnimatePresence mode="wait" initial={false}>
            {activePhone?.imageUrls?.[0] ? (
              <m.button
                key={activePhone.id}
                type="button"
                onClick={() => onOpen(activePhone)}
                initial={
                  !ready || reduced
                    ? false
                    : { opacity: 0, y: 36, scale: 0.92 }
                }
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={
                  reduced
                    ? undefined
                    : { opacity: 0, y: -28, scale: 0.94 }
                }
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto block"
                aria-label={`Open ${activePhone.name}`}
              >
                <p className="mb-3 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-200/90">
                  {activePhone.name}
                </p>
                <PhoneFrame
                  src={activePhone.imageUrls[0]}
                  alt={activePhone.name}
                  priority
                  size="lg"
                  className="work-phone-mobile"
                />
              </m.button>
            ) : null}
          </AnimatePresence>
        </div>

        <div className="relative z-30 flex w-full flex-col items-center gap-3 pb-2">
          <div className="flex gap-1.5">
            {phones.map((p, i) => (
              <span
                key={p.id}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "w-5 bg-cyan-300" : "w-1.5 bg-white/25"
                }`}
              />
            ))}
          </div>
          <p className="font-mono text-[10px] tracking-wider text-slate-500">
            {activeIndex + 1} / {phones.length} · scroll to change
          </p>
          <button
            type="button"
            onClick={onViewDetails}
            className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-slate-200"
          >
            <span
              className="h-px w-8 bg-gradient-to-r from-cyan-300 to-transparent"
              aria-hidden
            />
            View details
            <ArrowUpRight className="h-3.5 w-3.5 text-cyan-300" />
          </button>
        </div>
      </div>
    </div>
  );
}

function ScrollPhone({
  project,
  index,
  total,
  progress,
  onOpen,
  reduced,
}: {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
  onOpen: (project: Project) => void;
  reduced: boolean;
}) {
  const cover = project.imageUrls?.[0];
  const slot = STAGE_SLOTS[index % STAGE_SLOTS.length]!;
  const n = Math.max(total, 1);
  const span = 1 / n;

  // Tighter windows — prefer one primary phone on screen at a time.
  const start = index === 0 ? 0 : Math.max(0, index * span - span * 0.12);
  const enter = index === 0 ? 0.001 : index * span + span * 0.08;
  const leave = index * span + span * 0.72;
  const end = Math.min(1, (index + 1) * span + span * 0.12);

  const opacity = useTransform(
    progress,
    [start, enter, leave, end],
    reduced
      ? [1, 1, 1, 1]
      : index === 0
        ? [1, 1, 1, 0]
        : [0, 1, 1, 0],
  );
  const scale = useTransform(
    progress,
    [start, enter, leave, end],
    reduced
      ? [1, 1, 1, 1]
      : index === 0
        ? [1, 1, 1, 0.85]
        : [0.82, 1, 1, 0.85],
  );
  const driftY = useTransform(
    progress,
    [start, enter, leave, end],
    reduced
      ? [0, 0, 0, 0]
      : index === 0
        ? [0, 0, 0, -120]
        : [120, 0, 0, -120],
  );
  // Invisible phones still sat on top and stole clicks (same slot reuse).
  const pointerEvents = useTransform(opacity, (o) =>
    o > 0.2 ? "auto" : "none",
  );
  const zIndex = useTransform(opacity, (o) => (o > 0.2 ? 40 : 1));

  if (!cover) return null;

  return (
    <div
      className="pointer-events-none absolute left-1/2 top-[48%]"
      style={{
        transform: `translate(-50%, -50%) translate(${slot.x}, ${slot.y})`,
      }}
    >
      <m.button
        type="button"
        onClick={() => onOpen(project)}
        style={{
          opacity,
          scale,
          y: driftY,
          rotate: slot.rotate,
          pointerEvents,
          zIndex,
        }}
        className="work-scroll-phone relative cursor-pointer text-left"
        aria-label={`Open ${project.name}`}
      >
        <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.22em] text-cyan-200/90 sm:text-xs">
          {project.name}
        </span>
        <span className="block" style={{ transform: `scale(${slot.scale})` }}>
          <PhoneFrame
            src={cover}
            alt={project.name}
            priority={index < 2}
            size="lg"
          />
        </span>
      </m.button>
    </div>
  );
}

function WorkTitle({
  progress,
  reduced,
}: {
  progress: MotionValue<number>;
  reduced: boolean;
}) {
  // Clear grow → shrink, kept within a professional range.
  const scale = useTransform(
    progress,
    [0, 0.2, 0.5, 0.8, 1],
    reduced ? [1, 1, 1, 1, 1] : [0.88, 1.08, 1.16, 0.98, 0.78],
  );
  const y = useTransform(
    progress,
    [0, 0.5, 1],
    reduced ? [0, 0, 0] : [8, -16, 24],
  );
  const opacity = useTransform(
    progress,
    [0, 0.1, 0.75, 1],
    reduced ? [1, 1, 1, 1] : [0.9, 1, 1, 0.65],
  );
  const letterSpacing = useTransform(
    progress,
    [0, 0.5, 1],
    reduced
      ? ["-0.04em", "-0.04em", "-0.04em"]
      : ["-0.05em", "0.04em", "-0.03em"],
  );
  const rotate = useTransform(
    progress,
    [0, 0.5, 1],
    reduced ? [0, 0, 0] : [0, -0.6, 0.4],
  );

  return (
    <m.h2
      style={{ scale, y, opacity, letterSpacing, rotate }}
      className="work-giant-title pointer-events-none absolute z-10 select-none font-display font-black uppercase leading-none text-white"
      aria-label="Work"
    >
      Work
    </m.h2>
  );
}

function DomainWorkComponent({ projects }: { projects: Project[] }) {
  const reduced = useReducedMotion() ?? false;
  const stageRef = useRef<HTMLDivElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const phones = useMemo(
    () =>
      projects.filter(
        (p) =>
          p.categories.includes("mobile") && (p.imageUrls?.length ?? 0) > 0,
      ),
    [projects],
  );

  const visualAll = useMemo(
    () => projects.filter((p) => (p.imageUrls?.length ?? 0) > 0),
    [projects],
  );

  const progress = useStageProgress(stageRef);

  useMotionValueEvent(progress, "change", (v) => {
    // Desktop stage only — mobile updates via MobileWorkStage.
    if (typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches) {
      return;
    }
    if (phones.length <= 0) return;
    const next = Math.min(
      phones.length - 1,
      Math.max(0, Math.floor(v * phones.length + 0.001)),
    );
    setActiveIndex((prev) => (prev === next ? prev : next));
  });

  const onMobileActiveChange = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const activePhone = phones[activeIndex] ?? null;

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = useMemo(
    () => projects.find((p) => p.id === selectedId) ?? null,
    [projects, selectedId],
  );

  const openProject = useCallback((project: Project) => {
    setSelectedId(project.id);
    requestAnimationFrame(() => {
      detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  const openDetails = useCallback(() => {
    const fallback = activePhone ?? phones[0];
    if (!selectedId && fallback) setSelectedId(fallback.id);
    requestAnimationFrame(() => {
      detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [activePhone, phones, selectedId]);

  const stageVh = Math.max(phones.length * 90, 280);

  return (
    <section id="projects" className="scroll-mt-24 w-full min-w-0 py-10 sm:py-14">
      <div className="work-full-bleed relative z-20 rotate-[-1.2deg]">
        <MarqueeBand items={MARQUEE_TOP} tone="light" />
        <div className="-mt-0.5 rotate-[2.4deg]">
          <MarqueeBand items={MARQUEE_BOTTOM} reverse tone="accent" />
        </div>
      </div>

      <div className="mx-auto mb-8 mt-12 max-w-2xl text-center md:mt-20">
        <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.28em] text-cyan-300/90">
          Mobile products
        </p>
        <h3 className="font-display text-2xl tracking-wide text-slate-50 sm:text-3xl">
          Selected apps
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
          Scroll to move through shipped products — each phone appears and
          fades as you go.
        </p>
      </div>

      {/* Mobile-only WORK scrubber */}
      <div className="md:hidden">
        <MobileWorkStage
          phones={phones}
          reduced={reduced}
          onOpen={openProject}
          onActiveChange={onMobileActiveChange}
          onViewDetails={openDetails}
        />
      </div>

      {/* Desktop WORK stage — unchanged */}
      <div
        ref={stageRef}
        className="work-full-bleed relative mt-4 hidden md:block"
        style={{ height: `${stageVh}vh` }}
      >
        <div className="sticky top-0 flex h-[100svh] flex-col items-center justify-center overflow-hidden">
          <WorkTitle progress={progress} reduced={reduced} />

          <div className="pointer-events-none absolute inset-0 z-30">
            <div className="pointer-events-auto relative h-full w-full">
              {phones.map((project, i) => (
                <ScrollPhone
                  key={project.id}
                  project={project}
                  index={i}
                  total={phones.length}
                  progress={progress}
                  onOpen={openProject}
                  reduced={reduced}
                />
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={openDetails}
            className="absolute bottom-[9%] z-40 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-slate-200 transition hover:text-cyan-200"
          >
            <span
              className="h-px w-10 bg-gradient-to-r from-cyan-300 to-transparent sm:w-14"
              aria-hidden
            />
            View details
            <ArrowUpRight className="h-3.5 w-3.5 text-cyan-300" />
          </button>

          <div className="pointer-events-none absolute bottom-8 left-1/2 z-40 flex -translate-x-1/2 gap-1.5">
            {phones.map((p, i) => (
              <span
                key={p.id}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "w-6 bg-cyan-300" : "w-1.5 bg-white/25"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div
        ref={detailRef}
        id="work-details"
        className="scroll-mt-28 w-full min-w-0 border-t border-white/10 pt-12 sm:pt-16"
      >
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.28em] text-cyan-300/90">
              Case study
            </p>
            <h3 className="font-display text-2xl tracking-wide text-slate-50 sm:text-3xl">
              {selected?.name ?? activePhone?.name ?? "Pick a product"}
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-400">
              {selected?.summary ??
                activePhone?.summary ??
                "Scroll the phones above, then open a case study."}
            </p>
          </div>
          {selected ? (
            <button
              type="button"
              onClick={() => setSelectedId(null)}
              className="inline-flex items-center gap-2 font-mono text-[11px] tracking-wider text-slate-400 transition hover:text-cyan-200"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Clear
            </button>
          ) : null}
        </div>

        <HorizontalChipScroll>
          {[
            ...phones,
            ...visualAll.filter((p) => !phones.some((m) => m.id === p.id)),
          ].map((p) => {
            const isOn = p.id === (selectedId ?? activePhone?.id);
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setSelectedId(p.id)}
                className={`shrink-0 rounded-full border px-3.5 py-1.5 font-mono text-[11px] tracking-wider transition ${
                  isOn
                    ? "border-cyan-400/50 bg-cyan-400/15 text-cyan-100"
                    : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-slate-200"
                }`}
              >
                {p.name}
              </button>
            );
          })}
          <button
            type="button"
            onClick={() => {
              document
                .getElementById("ai")
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="shrink-0 rounded-full border border-cyan-400/35 bg-cyan-400/10 px-3.5 py-1.5 font-mono text-[11px] tracking-wider text-cyan-100 transition hover:bg-cyan-400/20"
          >
            AI Surveillance
          </button>
        </HorizontalChipScroll>

        {selected || activePhone ? (
          <div className="domain-work-panel">
            <ProjectCard
              project={(selected ?? activePhone)!}
              featuredLayout
              priorityCover
            />
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {phones.slice(0, 6).map((p) => {
              const cover = p.imageUrls?.[0];
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setSelectedId(p.id)}
                  className="group overflow-hidden rounded-xl border border-white/10 bg-[#060d1a] text-left transition hover:border-cyan-400/30"
                >
                  {cover ? (
                    <span className="flex justify-center bg-black/40 px-4 py-6">
                      <span className="relative mx-auto block w-[120px] overflow-hidden rounded-[1.2rem] border border-white/15">
                        <span className="relative block aspect-[9/19.5]">
                          <Image
                            src={cover}
                            alt=""
                            fill
                            className="object-cover object-top"
                            sizes="120px"
                            quality={50}
                          />
                        </span>
                      </span>
                    </span>
                  ) : null}
                  <span className="block p-4">
                    <span className="font-display text-base tracking-wide text-slate-100">
                      {p.name}
                    </span>
                    <span className="mt-1 block line-clamp-2 text-xs text-slate-500">
                      {p.summary}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export const DomainWork = memo(DomainWorkComponent);
