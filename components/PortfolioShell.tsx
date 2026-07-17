"use client";

import { type MouseEvent } from "react";
import { knowledge } from "@/data/knowledge";
import { domainsWithWork } from "@/data/domains";
import { GalaxyBackground } from "@/components/effects/GalaxyBackground";
import { HeroPortrait } from "@/components/effects/HeroPortrait";
import { HoloCard } from "@/components/effects/HoloCard";
import { PortraitVideoFrame } from "@/components/effects/PortraitVideoFrame";
import { DomainWork } from "@/components/projects/DomainWork";
import { QuickContactDock } from "@/components/QuickContactDock";
import { LazyMount } from "@/components/LazyMount";
import { riseIn, riseInX } from "@/lib/motion";
import { m } from "framer-motion";
import {
  BriefcaseBusiness,
  Code2,
  Download,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Orbit,
  ArrowDown,
} from "lucide-react";

function scrollToSection(e: MouseEvent<HTMLAnchorElement>, href: string) {
  if (!href.startsWith("#")) return;
  e.preventDefault();
  const id = href.slice(1);
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.pushState(null, "", href);
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <m.div className="mx-auto mb-10 max-w-2xl text-center" {...riseInX}>
      <p className="mb-2 flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-cyan-300/90">
        <span className="inline-block h-px w-8 bg-gradient-to-r from-transparent to-cyan-400" />
        {eyebrow}
        <span className="inline-block h-px w-8 bg-gradient-to-l from-transparent to-cyan-400" />
      </p>
      <h2 className="font-display text-2xl font-semibold tracking-wide text-slate-50 sm:text-3xl md:text-4xl">
        <span className="holo-text">{title}</span>
      </h2>
      {subtitle ? (
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </m.div>
  );
}

export function PortfolioShell() {
  const { about, projects, contact, social, resume, experience, skills } =
    knowledge;

  const domainCount = domainsWithWork(projects).length;
  const visualCount = projects.filter(
    (p) => (p.imageUrls?.length ?? 0) > 0,
  ).length;
  const ai = projects.filter((p) => p.categories.includes("ai"));

  const navLinks = [
    ["#ai", "AI"],
    ["#projects", "Work"],
    ["#experience", "Experience"],
    ["#contact", "Contact"],
  ] as const;

  return (
    <div className="relative min-h-full w-full min-w-0 overflow-x-clip text-slate-100">
      <GalaxyBackground />

      <header className="relative z-20 mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <div className="flex items-center gap-2">
          <Orbit className="h-5 w-5 text-cyan-300" />
          <p className="font-display text-xs font-semibold tracking-[0.18em] text-slate-50 sm:text-sm">
            BABER<span className="text-cyan-400">.DEV</span>
          </p>
        </div>
        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1.5 text-sm text-slate-300 md:flex">
          {navLinks.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={(e) => scrollToSection(e, href)}
              className="rounded-full px-3 py-1.5 transition hover:bg-cyan-400/10 hover:text-cyan-100"
            >
              {label}
            </a>
          ))}
          <a
            href={resume.path}
            download={resume.fileName}
            className="btn-holo ml-1 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 px-3 py-1.5 text-xs font-medium text-slate-950"
          >
            <Download className="h-3.5 w-3.5" /> CV
          </a>
        </nav>
      </header>

      <main className="relative z-10 mx-auto w-full min-w-0 max-w-6xl px-5 pb-32 sm:px-8">
        <section className="relative grid min-h-[min(88vh,860px)] items-center gap-10 pb-16 pt-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 sm:pt-14">
          <div className="relative max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-cyan-200">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
              {about.tagline}
            </p>

            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block text-slate-100/90">Syed</span>
              <span className="holo-text block">Baber Ali</span>
            </h1>

            <p className="mt-4 max-w-xl font-mono text-sm text-teal-200/80 sm:text-base">
              {about.title}
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              {about.heroSummary ?? about.introduction}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, "#projects")}
                className="btn-holo inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.35)]"
              >
                Browse work <ArrowDown className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
                className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm text-slate-200 transition hover:border-cyan-300/40 hover:bg-cyan-400/10"
              >
                Hire Baber
              </a>
              <button
                type="button"
                onClick={() =>
                  (
                    document.querySelector(
                      'button[aria-label*="Portfolio Assistant"]',
                    ) as HTMLButtonElement | null
                  )?.click()
                }
                className="inline-flex items-center gap-2 rounded-full border border-teal-400/40 bg-teal-400/10 px-6 py-3 text-sm text-teal-100 transition hover:bg-teal-400/20"
              >
                <Sparkles className="h-4 w-4" /> Ask Baber's AI
              </button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <HeroPortrait />
          </div>
        </section>

        <m.div
          className="mb-2 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4"
          {...riseIn}
        >
          {[
            ["6+", "Years"],
            [String(domainCount), "Industries"],
            [String(visualCount), "Products"],
            ["AI", "Live"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 text-center"
            >
              <p className="font-display text-xl text-cyan-300 sm:text-2xl">
                {value}
              </p>
              <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-slate-500">
                {label}
              </p>
            </div>
          ))}
        </m.div>

        <section id="ai" className="scroll-mt-24 py-14 sm:py-20">
          <SectionHeading
            eyebrow="Neural uplink"
            title="AI Surveillance"
            subtitle="Currently implemented at California and Broadway — portrait field demo"
          />
          <LazyMount minHeight={420} rootMargin="180px 0px">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr]">
              <div className="space-y-5">
                {ai.map((p) => (
                  <HoloCard key={p.id}>
                    <h3 className="font-display text-lg text-slate-50">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-sm text-slate-400">{p.description}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {p.technologies.map((t) => (
                        <span
                          key={t}
                          className="rounded border border-cyan-500/20 bg-cyan-500/5 px-2 py-0.5 font-mono text-[10px] text-cyan-200/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </HoloCard>
                ))}
              </div>
              <PortraitVideoFrame
                src="/assets/ai-surveillance-demo.mp4"
                caption="// AI_SURVEILLANCE · CALIFORNIA · BROADWAY"
              />
              <div className="hidden space-y-4 lg:block">
                {[
                  "Live at California venues",
                  "Live at Broadway venues",
                  "Computer vision monitoring HUD",
                ].map((line) => (
                  <div
                    key={line}
                    className="rounded-xl border border-cyan-400/20 bg-cyan-950/30 px-4 py-3 font-mono text-xs text-cyan-100/80"
                  >
                    <span className="mr-2 text-teal-400">▸</span>
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </LazyMount>
        </section>

        <DomainWork projects={projects} />

        {/* Anchors kept for assistant deep-links */}
        <div id="mobile" className="sr-only" aria-hidden />
        <div id="web" className="sr-only" aria-hidden />
        <div id="healthcare" className="sr-only" aria-hidden />
        <div id="logistics" className="sr-only" aria-hidden />

        <section id="experience" className="scroll-mt-24 py-14 sm:py-20">
          <SectionHeading eyebrow="Timeline" title="Experience" />
          <LazyMount minHeight={360} rootMargin="200px 0px">
            <div className="relative space-y-4 before:absolute before:bottom-2 before:left-4 before:top-2 before:w-px before:bg-gradient-to-b before:from-cyan-400/60 before:via-teal-400/30 before:to-transparent sm:before:left-5">
              {experience.map((e) => (
                <div key={e.id} className="relative pl-10 sm:pl-12">
                  <span className="absolute left-2.5 top-6 h-3 w-3 rounded-full border-2 border-cyan-300 bg-[#030712] shadow-[0_0_12px_rgba(34,211,238,0.8)] sm:left-3.5" />
                  <HoloCard delay={0}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display text-sm tracking-wide text-slate-50 sm:text-base">
                        {e.title}
                      </h3>
                      <span className="font-mono text-[10px] text-cyan-300/70">
                        {e.startDate} – {e.endDate}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-teal-300/90">{e.company}</p>
                    <p className="mt-2 text-sm text-slate-400">{e.description}</p>
                  </HoloCard>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
                Core stack
              </p>
              <div className="flex flex-wrap gap-2">
                {[...skills.primary, ...skills.secondary].map((s) => (
                  <span
                    key={s}
                    className="rounded border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[11px] text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-100"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </LazyMount>
        </section>

        <section id="contact" className="scroll-mt-24 py-14 sm:py-20">
          <SectionHeading
            eyebrow="Comms channel"
            title="Contact"
            subtitle="Available for high-impact mobile, web, POS, and AI product engagements."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <a href={`mailto:${contact.email}`} className="block">
              <HoloCard>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-cyan-300" />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                      Email
                    </p>
                    <p className="text-sm text-slate-100">{contact.email}</p>
                  </div>
                </div>
              </HoloCard>
            </a>
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="block"
            >
              <HoloCard>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-cyan-300" />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                      Phone / WhatsApp
                    </p>
                    <p className="text-sm text-slate-100">{contact.phone}</p>
                  </div>
                </div>
              </HoloCard>
            </a>
            <HoloCard>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-cyan-300" />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                    Location
                  </p>
                  <p className="text-sm text-slate-100">{contact.location}</p>
                </div>
              </div>
            </HoloCard>
            <HoloCard>
              <div className="flex flex-wrap items-center gap-5">
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-slate-200 hover:text-cyan-200"
                >
                  <Code2 className="h-5 w-5" /> GitHub
                </a>
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-slate-200 hover:text-cyan-200"
                >
                  <BriefcaseBusiness className="h-5 w-5" /> LinkedIn
                </a>
                <a
                  href={resume.path}
                  download={resume.fileName}
                  className="inline-flex items-center gap-2 text-sm text-slate-200 hover:text-cyan-200"
                >
                  <Download className="h-5 w-5" /> CV
                </a>
              </div>
            </HoloCard>
          </div>
        </section>
      </main>

      <QuickContactDock />

      <footer className="relative z-10 border-t border-white/10 bg-black/40 py-8 text-center font-mono text-[11px] text-slate-500">
        <span suppressHydrationWarning>
          © {new Date().getFullYear()} {about.fullName} · {domainCount} domains
          · {visualCount} visual case studies
        </span>
      </footer>
    </div>
  );
}
