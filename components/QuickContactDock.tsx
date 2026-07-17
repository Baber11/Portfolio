"use client";

import { memo, type CSSProperties, type ReactNode } from "react";
import { knowledge } from "@/data/knowledge";

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <path
        d="M4 6.5A1.5 1.5 0 0 1 5.5 5h13A1.5 1.5 0 0 1 20 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5v-11Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m5 7 7 5.5L19 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <path
        d="M8.2 3.8c.5-.5 1.3-.6 1.9-.2l2 1.4c.6.4.8 1.2.5 1.9l-.8 1.8c-.2.4-.1.9.2 1.2l2.9 2.9c.3.3.8.4 1.2.2l1.8-.8c.7-.3 1.5-.1 1.9.5l1.4 2c.4.6.3 1.4-.2 1.9l-1.1 1.1c-.6.6-1.4.9-2.2.8-2.1-.3-5.1-1.7-7.9-4.5-2.8-2.8-4.2-5.8-4.5-7.9-.1-.8.2-1.6.8-2.2l1.1-1.1Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Official GitHub mark */
function IconGithub() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.586 2 12.253c0 4.53 2.865 8.367 6.839 9.72.5.094.682-.222.682-.482 0-.237-.009-.866-.014-1.7-2.782.617-3.369-1.37-3.369-1.37-.455-1.18-1.11-1.494-1.11-1.494-.908-.635.069-.622.069-.622 1.003.072 1.53 1.053 1.53 1.053.892 1.563 2.341 1.111 2.91.85.091-.662.35-1.111.636-1.367-2.22-.258-4.555-1.137-4.555-5.062 0-1.118.39-2.033 1.03-2.75-.103-.259-.447-1.302.098-2.714 0 0 .84-.275 2.75 1.05A9.35 9.35 0 0 1 12 6.844c.85.004 1.705.117 2.504.343 1.909-1.325 2.747-1.05 2.747-1.05.547 1.412.203 2.455.1 2.714.64.717 1.028 1.632 1.028 2.75 0 3.938-2.339 4.801-4.566 5.054.359.316.679.942.679 1.9 0 1.371-.012 2.477-.012 2.813 0 .263.18.58.688.48A10.27 10.27 0 0 0 22 12.253C22 6.586 17.523 2 12 2Z" />
    </svg>
  );
}

/** Official LinkedIn mark */
function IconLinkedin() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.985 1.985 0 1 1 0-3.97 1.985 1.985 0 0 1 0 3.97zM7.119 20.452H3.552V9h3.567v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

type DockItem = {
  id: string;
  label: string;
  href: string;
  external?: boolean;
  tone: string;
  glow: string;
  icon: ReactNode;
  delay: string;
};

const items: DockItem[] = [
  {
    id: "email",
    label: "Email",
    href: `mailto:${knowledge.contact.email}`,
    tone: "from-cyan-400 to-teal-500",
    glow: "rgba(34,211,238,0.55)",
    icon: <IconMail />,
    delay: "0s",
  },
  {
    id: "phone",
    label: "Phone / WhatsApp",
    href: `tel:${knowledge.contact.phone.replace(/\s/g, "")}`,
    tone: "from-emerald-400 to-teal-600",
    glow: "rgba(52,211,153,0.5)",
    icon: <IconPhone />,
    delay: "0.35s",
  },
  {
    id: "github",
    label: "GitHub",
    href: knowledge.social.github,
    external: true,
    tone: "from-slate-100 to-slate-400",
    glow: "rgba(226,232,240,0.4)",
    icon: <IconGithub />,
    delay: "0.7s",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: knowledge.social.linkedin,
    external: true,
    tone: "from-[#5B9BD5] to-[#0A66C2]",
    glow: "rgba(10,102,194,0.55)",
    icon: <IconLinkedin />,
    delay: "1.05s",
  },
];

function QuickContactDockComponent() {
  return (
    <nav
      aria-label="Quick contact"
      className="fixed bottom-24 left-3 z-40 flex flex-col gap-4 sm:bottom-auto sm:left-5 sm:top-1/2 sm:-translate-y-1/2"
    >
      {items.map((item) => (
        <a
          key={item.id}
          href={item.href}
          {...(item.external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          aria-label={item.label}
          title={item.label}
          className="quick-dock-orb group relative flex h-12 w-12 items-center justify-center rounded-full text-slate-950"
          style={
            {
              "--dock-delay": item.delay,
              "--dock-glow": item.glow,
            } as CSSProperties
          }
        >
          <span
            className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.tone}`}
          />
          <span className="absolute inset-[2px] rounded-full bg-gradient-to-b from-white/35 via-transparent to-black/25" />
          <span className="absolute -inset-1 -z-10 rounded-full opacity-70 blur-md transition duration-300 group-hover:opacity-100 group-hover:blur-lg" style={{ background: item.glow }} />
          <span className="relative z-10 drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]">
            {item.icon}
          </span>
          <span className="pointer-events-none absolute left-full ml-3.5 hidden whitespace-nowrap rounded-lg border border-white/10 bg-[#0a1220]/95 px-2.5 py-1.5 font-mono text-[10px] tracking-wider text-slate-100 opacity-0 shadow-[0_8px_24px_rgba(0,0,0,0.45)] backdrop-blur-sm transition duration-200 group-hover:opacity-100 sm:block">
            {item.label}
          </span>
        </a>
      ))}
    </nav>
  );
}

export const QuickContactDock = memo(QuickContactDockComponent);
