import type { KnowledgeBase, KnowledgeEntry } from "./types";
import {
  about,
  contact,
  experience,
  projects,
  resume,
  skills,
  social,
} from "./site";

/**
 * Baber's portfolio knowledge base.
 * Add new projects, skills, or links here — the assistant logic stays unchanged.
 */
export const knowledge: KnowledgeBase = {
  about,
  experience,
  skills,
  projects,
  technologies: [
    "React Native",
    "TypeScript",
    "JavaScript",
    "React.js",
    "Next.js",
    "Angular",
    "Electron",
    "Redux Toolkit",
    "Firebase",
    "REST APIs",
    "AI / Computer Vision",
    "Google Maps",
    "Agora",
    "CometChat",
    "Payment Gateways",
    "Tailwind CSS",
    "Framer Motion",
    "Git / GitHub",
    "Android Studio",
    "Xcode",
    "BLE",
  ],

  industries: [
    "Healthcare",
    "Logistics & Freight",
    "Fintech",
    "Ride-hailing",
    "E-commerce",
    "Social Networking",
    "AI Surveillance",
    "Retail / POS",
    "Food & Beverage (Costa Coffee)",
    "Hospitality / Venue Ops",
    "Enterprise Software",
    "Facilities Management",
  ],

  education: [
    {
      degree: "BS Computer Science",
      institution: "Bahria University, Karachi Campus",
      location: "Karachi, Pakistan",
      details: "CGPA: 3.2",
    },
  ],

  achievements: [
    "6+ years of professional mobile development experience",
    "Proven team leadership as Mobile Applications Team Lead",
    "Multiple commercial apps published on Google Play Store and Apple App Store",
    "Delivered software across fintech, healthcare, logistics, e-commerce and social platforms",
    "Built POS for multi-brand retail (Costa Coffee, Broadway, California) with Electron roadmap",
    "AI surveillance currently implemented at California and Broadway",
    "LookClean and Facilitate live on both App Store and Play Store",
  ],

  liveApps: [
    {
      id: "live-fleetex",
      name: "FleetEx Logistics",
      type: "website",
      url: "https://www.fleetexlogistics.com/",
      description: "International freight & supply chain company website.",
    },
    {
      id: "live-rel",
      name: "Rapid Express Logistics",
      type: "website",
      url: "https://www.rapidexpresslogistic.com/",
      description: "Domestic and international logistics company website.",
    },
    {
      id: "live-rel-portal",
      name: "REL Client Portal",
      type: "portal",
      url: "https://www.rapidexpresslogistic.com/portal/login",
      description: "Logistics client portal login and tracking experience.",
    },
    {
      id: "live-pos",
      name: "Order Intel POS",
      type: "pos",
      url: "https://pos-frontend-rdsr.vercel.app/pos",
      description:
        "POS demo — Costa Coffee, Broadway & California rollout; Electron EXE planned.",
    },
  ],

  playStoreApps: [
    {
      id: "ps-facilitate",
      name: "Facilitate",
      platform: "play_store",
      url: "https://play.google.com/store/apps/details?id=com.pedrofacilit8",
      packageId: "com.pedrofacilit8",
      description: "Facilities / work-order management app (Pedro Facilit).",
    },
    {
      id: "ps-ridelink-user",
      name: "RideLynk User",
      platform: "play_store",
      url: "https://play.google.com/store/apps/details?id=com.ridelinkUser",
      packageId: "com.ridelinkUser",
      description: "Ride-hailing user application.",
    },
    {
      id: "ps-ridelink-rider",
      name: "RideLynk Rider",
      platform: "play_store",
      url: "https://play.google.com/store/apps/details?id=com.ridelink_rider",
      packageId: "com.ridelink_rider",
      description: "Ride-hailing rider/driver application.",
    },
    {
      id: "ps-lookclean",
      name: "LookClean",
      platform: "play_store",
      url: "https://play.google.com/store/apps/details?id=com.lookclean",
      packageId: "com.lookclean",
      description: "Barber booking and e-commerce app.",
    },
  ],

  appStoreApps: [
    {
      id: "as-lookclean",
      name: "LookClean",
      platform: "app_store",
      url: "https://apps.apple.com/ca/app/look-clean/id6504813666",
      description: "Barber booking and e-commerce app on the Apple App Store.",
    },
    {
      id: "as-facilitate",
      name: "Facilitate",
      platform: "app_store",
      url: "https://apps.apple.com/sa/app/facilitate/id1494731927",
      description:
        "Facilities management / work-order app by NEST International on the App Store.",
    },
  ],

  certificates: [],

  resume,
  availability: {
    status: "Available for select opportunities",
    message:
      "Baber is open to discussing high-impact mobile, cross-platform, and full-stack product engagements — especially enterprise, logistics, healthcare, and AI-adjacent builds.",
  },

  services: [
    {
      id: "svc-rn",
      title: "React Native App Development",
      description:
        "End-to-end cross-platform mobile apps for iOS and Android with production-ready architecture.",
    },
    {
      id: "svc-enterprise",
      title: "Enterprise Software",
      description:
        "Enterprise-grade mobile and web systems for logistics, healthcare, management, and operations.",
    },
    {
      id: "svc-web",
      title: "Next.js Web Applications",
      description:
        "Modern marketing sites, portals, and operational web apps for logistics and enterprise brands.",
    },
    {
      id: "svc-angular",
      title: "Angular + Electron POS",
      description:
        "Angular point-of-sale systems with Electron packaging for desktop EXE — multi-brand retail deployments.",
    },
    {
      id: "svc-ai",
      title: "AI Surveillance Systems",
      description:
        "Intelligent monitoring and computer-vision assisted surveillance for venue and enterprise deployments.",
    },
    {
      id: "svc-leadership",
      title: "Team Leadership & Architecture",
      description:
        "Technical leadership, code reviews, architecture design, and mentoring for mobile and product teams.",
    },
  ],

  contact,
  social,
  faqs: [
    {
      id: "faq-who",
      question: "Who is Baber?",
      answer:
        "Syed Baber Ali is a Senior Mobile Application Developer and Team Lead based in Karachi, Pakistan, with over six years of experience shipping React Native, Next.js, Angular, and AI surveillance products across healthcare, logistics, fintech, ride-hailing, and enterprise domains.",
      aliases: ["who are you", "about baber", "introduce baber"],
    },
    {
      id: "faq-rn",
      question: "Has Baber worked on React Native?",
      answer:
        "Yes. Baber has over four years of professional React Native experience and has led React Native teams delivering commercial apps across healthcare, logistics, AI surveillance, ride-sharing, and enterprise platforms.",
      aliases: ["react native", "rn experience"],
    },
    {
      id: "faq-apps-count",
      question: "How many apps has he published?",
      answer:
        "Baber has worked on more than twenty commercial applications. Live store apps include RideLynk on Play Store, plus LookClean and Facilitate on both the Apple App Store and Google Play Store.",
      aliases: ["how many apps", "published apps", "play store apps", "app store"],
    },
    {
      id: "faq-pos",
      question: "Can Baber build POS software?",
      answer:
        "Yes. Baber built Order Intel POS in Angular for multi-brand retail rollout — Costa Coffee, Broadway, and California — with a planned Electron wrapper for Windows EXE. A live demo is available online.",
      aliases: ["pos", "point of sale", "point-of-sale", "costa", "electron"],
    },
    {
      id: "faq-angular",
      question: "Has Baber worked on Angular?",
      answer:
        "Yes. Baber built the Order Intel POS frontend in Angular, architected for Electron desktop packaging and multi-brand deployment across Costa Coffee, Broadway, and California.",
      aliases: ["angular", "ng", "has baber worked on angular"],
    },
    {
      id: "faq-backend",
      question: "Can Baber build scalable backend systems?",
      answer:
        "Baber regularly designs end-to-end architectures and integrates REST APIs, Firebase, authentication, notifications, payments, chat, and mapping services. He focuses primarily on mobile and full-product delivery with strong API integration expertise.",
      aliases: ["backend", "scalable backend", "fastapi", "api"],
    },
  ],

  entries: [],
};

/** Build searchable entries from structured knowledge — call once at module load. */
function buildEntries(kb: KnowledgeBase): KnowledgeEntry[] {
  const entries: KnowledgeEntry[] = [];

  entries.push({
    id: "about",
    category: "about",
    title: "About Baber",
    content: kb.about.introduction,
    keywords: [
      "who",
      "about",
      "introduction",
      "profile",
      "baber",
      "syed baber ali",
      "developer",
      "team lead",
    ],
    aliases: ["who is baber", "tell me about baber", "personal introduction"],
    priority: 10,
    actions: [
      { type: "scroll_contact", label: "Contact Baber", targetId: "contact" },
      { type: "download_resume", label: "Download Resume" },
    ],
  });

  entries.push({
    id: "experience",
    category: "experience",
    title: "Professional Experience",
    content: kb.experience
      .map(
        (e) =>
          `${e.title} at ${e.company} (${e.startDate} – ${e.endDate}): ${e.description}`,
      )
      .join(" "),
    keywords: [
      "experience",
      "work",
      "career",
      "job",
      "virtuexolutions",
      "tafsol",
      "sas",
      "team lead",
      "senior",
    ],
    aliases: ["work history", "professional experience", "where did he work"],
    priority: 9,
    actions: [{ type: "download_resume", label: "Download Resume" }],
  });

  entries.push({
    id: "skills",
    category: "skills",
    title: "Skills & Technologies",
    content: `Baber's core skills include ${kb.skills.primary.join(", ")}. He also works with ${kb.skills.secondary.join(", ")}. Tools: ${kb.skills.tools.join(", ")}.`,
    keywords: [
      "skills",
      "technologies",
      "tech stack",
      "stack",
      "know",
      "expertise",
    ],
    aliases: ["what technologies", "tech stack", "what does he know"],
    technologies: [...kb.skills.primary, ...kb.skills.secondary],
    priority: 9,
    actions: [
      { type: "scroll_projects", label: "View Projects", targetId: "projects" },
    ],
  });

  entries.push({
    id: "react-native",
    category: "technologies",
    title: "React Native Experience",
    content:
      "Yes. Baber has over four years of professional React Native experience. He has developed commercial applications across healthcare, logistics, AI surveillance, ride sharing, management systems and enterprise platforms. As Team Lead he also mentors React Native teams and owns architecture decisions.",
    keywords: [
      "react native",
      "rn",
      "mobile apps",
      "mobile development",
      "cross platform",
      "cross-platform",
      "ios",
      "android",
    ],
    aliases: [
      "react native",
      "rn",
      "mobile apps",
      "mobile development",
      "has baber worked on react native",
    ],
    technologies: [
      "React Native",
      "Redux Toolkit",
      "Firebase",
      "REST APIs",
      "TypeScript",
    ],
    projectIds: [
      "proj-daweeye",
      "proj-ridelynk",
      "proj-ridelynk-rider",
      "proj-lookclean",
      "proj-mbn",
      "proj-qbid",
      "proj-youarehere",
      "proj-disc-music",
      "proj-load-navigator",
      "proj-hatchsocial",
      "proj-ai-surveillance",
    ],
    priority: 12,
    actions: [
      { type: "scroll_mobile", label: "View Mobile Apps", targetId: "mobile" },
      { type: "download_resume", label: "Download Resume" },
    ],
  });

  entries.push({
    id: "flutter",
    category: "technologies",
    title: "Flutter",
    content:
      "That information hasn't been added to Baber's current portfolio materials. His publicly listed expertise centers on React Native, Next.js, Angular, Electron, and AI surveillance systems.",
    keywords: ["flutter", "dart"],
    aliases: ["flutter", "dart apps"],
    priority: 4,
  });

  entries.push({
    id: "nextjs",
    category: "technologies",
    title: "Next.js Experience",
    content:
      "Yes. Baber builds modern web applications with Next.js and TypeScript. Live examples include FleetEx Logistics, Rapid Express Logistics, and the REL client portal.",
    keywords: ["nextjs", "next.js", "next", "react", "web", "website"],
    aliases: ["next js", "nextjs", "does baber know next.js"],
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    projectIds: ["proj-fleetex", "proj-rel", "proj-rel-portal"],
    priority: 11,
    actions: [
      { type: "scroll_web", label: "View Web Apps", targetId: "web" },
    ],
  });

  entries.push({
    id: "angular",
    category: "technologies",
    title: "Angular Experience",
    content:
      "Yes. Baber has professional Angular experience. He built Order Intel POS in Angular — designed to connect with Electron later for a native Windows EXE — targeting multi-brand retail deployments for Costa Coffee, Broadway, and California.",
    keywords: [
      "angular",
      "ng",
      "electron",
      "costa",
      "costa coffee",
      "broadway",
      "california",
      "exe",
      "desktop",
    ],
    aliases: [
      "angular",
      "has baber worked on angular",
      "electron",
      "costa coffee",
    ],
    technologies: ["Angular", "TypeScript", "Electron", "REST APIs"],
    projectIds: ["proj-pos"],
    priority: 12,
    actions: [
      {
        type: "open_external",
        label: "Open POS Demo",
        href: "https://pos-frontend-rdsr.vercel.app/pos",
      },
      { type: "scroll_web", label: "View Web Apps", targetId: "web" },
    ],
  });

  entries.push({
    id: "fastapi",
    category: "technologies",
    title: "FastAPI",
    content:
      "That information hasn't been added yet to Baber's public portfolio. He regularly integrates REST APIs and designs end-to-end product architectures. Specific FastAPI project details can be added to the knowledge base when available.",
    keywords: ["fastapi", "fast api", "python backend"],
    aliases: ["fastapi", "has baber worked with fastapi"],
    priority: 5,
  });

  entries.push({
    id: "ai",
    category: "ai",
    title: "AI Projects",
    content:
      "Yes. Baber has worked on AI-powered surveillance systems. The AI Surveillance System is currently implemented at California and Broadway venues, with demo footage available in the portfolio showcasing intelligent monitoring capabilities.",
    keywords: [
      "ai",
      "artificial intelligence",
      "surveillance",
      "computer vision",
      "ml",
      "machine learning",
      "california",
      "broadway",
    ],
    aliases: [
      "ai projects",
      "has baber worked on ai",
      "ai surveillance",
      "california",
      "broadway",
    ],
    technologies: ["React Native", "AI / Computer Vision", "REST APIs"],
    projectIds: ["proj-ai-surveillance"],
    priority: 12,
    actions: [
      { type: "scroll_ai", label: "Open AI Section", targetId: "ai" },
      {
        type: "highlight_ai",
        label: "Highlight AI Projects",
        targetId: "ai",
      },
    ],
  });

  entries.push({
    id: "healthcare",
    category: "industries",
    title: "Healthcare Experience",
    content:
      "Baber has built multilingual healthcare and hospital management software, including Daweeye — a platform designed for clinical workflows and hospital operations.",
    keywords: [
      "healthcare",
      "health",
      "hospital",
      "medical",
      "daweeye",
      "clinical",
    ],
    aliases: ["healthcare projects", "show healthcare", "hospital"],
    technologies: ["React Native", "Firebase", "REST APIs", "TypeScript"],
    projectIds: ["proj-daweeye"],
    priority: 11,
    actions: [
      {
        type: "scroll_healthcare",
        label: "View Healthcare Projects",
        targetId: "healthcare",
      },
      {
        type: "highlight_healthcare",
        label: "Highlight Healthcare",
        targetId: "healthcare",
      },
    ],
  });

  entries.push({
    id: "logistics",
    category: "industries",
    title: "Logistics Experience",
    content:
      "Baber has delivered live logistics products including FleetEx Logistics, Rapid Express Logistics, and the REL client portal — covering international freight, domestic shipping, and operational portals for Pakistan-based logistics companies — plus LoadNavigator, a mobile app for trucking, load posting, and route planning.",
    keywords: [
      "logistics",
      "freight",
      "shipping",
      "supply chain",
      "fleetex",
      "rapid express",
      "courier",
      "loadnavigator",
      "load navigator",
      "trucking",
    ],
    aliases: ["logistics experience", "show logistics", "freight"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    projectIds: ["proj-fleetex", "proj-rel", "proj-rel-portal", "proj-load-navigator"],
    priority: 12,
    actions: [
      {
        type: "scroll_logistics",
        label: "View Logistics Projects",
        targetId: "logistics",
      },
      {
        type: "highlight_logistics",
        label: "Highlight Logistics",
        targetId: "logistics",
      },
    ],
  });

  entries.push({
    id: "pos",
    category: "projects",
    title: "POS Software",
    content:
      "Yes. Baber can build POS software. Order Intel POS is built with Angular for multi-brand retail — Costa Coffee, Broadway, and California — and is designed to connect with Electron later for a native Windows EXE. A live demo is available online.",
    keywords: [
      "pos",
      "point of sale",
      "point-of-sale",
      "retail",
      "order intel",
      "cashier",
      "costa",
      "costa coffee",
      "broadway",
      "california",
      "electron",
      "exe",
    ],
    aliases: [
      "can baber build pos",
      "pos software",
      "point of sale",
      "costa coffee",
      "electron pos",
    ],
    technologies: ["Angular", "TypeScript", "Electron", "REST APIs"],
    projectIds: ["proj-pos"],
    priority: 12,
    actions: [
      {
        type: "open_external",
        label: "Open POS Demo",
        href: "https://pos-frontend-rdsr.vercel.app/pos",
      },
      { type: "scroll_web", label: "View Web Apps", targetId: "web" },
    ],
  });

  entries.push({
    id: "enterprise",
    category: "services",
    title: "Enterprise Software",
    content:
      "Yes. Baber builds enterprise software for logistics, healthcare, AI surveillance, management systems, ride-sharing platforms, and operational tools such as POS and client portals.",
    keywords: [
      "enterprise",
      "scalable",
      "management systems",
      "business software",
    ],
    aliases: ["can baber build enterprise", "enterprise software"],
    projectIds: [
      "proj-daweeye",
      "proj-fleetex",
      "proj-rel",
      "proj-pos",
      "proj-ai-surveillance",
    ],
    priority: 10,
    actions: [
      { type: "scroll_projects", label: "View Projects", targetId: "projects" },
    ],
  });

  entries.push({
    id: "mobile-apps",
    category: "projects",
    title: "Mobile Applications",
    content:
      "Baber specializes in mobile applications. Published and delivered work includes RideLynk (user & rider), LookClean (App Store & Play Store), Facilitate (App Store & Play Store), MBN App, QBid, YouAreHere, Disc Music, LoadNavigator, Daweeye, HatchSocial, EndorseMe, and an indoor positioning app for Dubai malls — plus AI surveillance deployed at California and Broadway.",
    keywords: [
      "mobile",
      "apps",
      "mobile apps",
      "mobile applications",
      "android",
      "ios",
      "play store",
      "app store",
    ],
    aliases: ["show mobile apps", "mobile applications", "phone apps"],
    technologies: ["React Native", "TypeScript", "Firebase", "REST APIs"],
    projectIds: [
      "proj-ridelynk",
      "proj-ridelynk-rider",
      "proj-lookclean",
      "proj-facilitate",
      "proj-mbn",
      "proj-qbid",
      "proj-youarehere",
      "proj-disc-music",
      "proj-load-navigator",
      "proj-daweeye",
      "proj-hatchsocial",
    ],
    priority: 11,
    actions: [
      { type: "scroll_mobile", label: "View Mobile Apps", targetId: "mobile" },
      {
        type: "open_external",
        label: "LookClean on App Store",
        href: "https://apps.apple.com/ca/app/look-clean/id6504813666",
      },
    ],
  });

  entries.push({
    id: "web-apps",
    category: "projects",
    title: "Web Applications",
    content:
      "Baber has built live web applications including FleetEx Logistics and Rapid Express Logistics (Next.js), the REL client portal, and Order Intel POS (Angular) for Costa Coffee, Broadway, and California retail brands.",
    keywords: ["web", "website", "web apps", "web applications", "portal"],
    aliases: ["show web applications", "websites", "web projects"],
    technologies: ["Next.js", "Angular", "TypeScript", "Tailwind CSS"],
    projectIds: ["proj-fleetex", "proj-rel", "proj-rel-portal", "proj-pos"],
    priority: 11,
    actions: [
      { type: "scroll_web", label: "View Web Apps", targetId: "web" },
    ],
  });

  entries.push({
    id: "published-apps",
    category: "achievements",
    title: "Published Apps Count",
    content:
      "Baber has worked on more than twenty commercial applications, including MBN App, QBid, YouAreHere, Disc Music, and LoadNavigator. Live store listings include RideLynk on Google Play, plus LookClean and Facilitate on both the Apple App Store and Google Play Store.",
    keywords: [
      "how many",
      "published",
      "count",
      "number of apps",
      "play store",
      "app store",
    ],
    aliases: ["how many apps", "apps published", "play store count", "app store apps"],
    projectIds: [
      "proj-ridelynk",
      "proj-ridelynk-rider",
      "proj-lookclean",
      "proj-facilitate",
      "proj-mbn",
      "proj-qbid",
      "proj-youarehere",
      "proj-disc-music",
      "proj-load-navigator",
    ],
    priority: 11,
    actions: [
      { type: "scroll_mobile", label: "View Mobile Apps", targetId: "mobile" },
      { type: "download_resume", label: "Download Resume" },
    ],
  });

  entries.push({
    id: "education",
    category: "education",
    title: "Education",
    content: `Baber holds a ${kb.education[0].degree} from ${kb.education[0].institution}${kb.education[0].details ? ` (${kb.education[0].details})` : ""}.`,
    keywords: ["education", "degree", "university", "bahria", "studied"],
    aliases: ["where did he study", "education background"],
    priority: 7,
  });

  entries.push({
    id: "services",
    category: "services",
    title: "Services",
    content: `Baber provides: ${kb.services.map((s) => s.title).join("; ")}. ${kb.services.map((s) => s.description).join(" ")}`,
    keywords: ["services", "offer", "hire", "provide", "what can he do"],
    aliases: ["what services", "services offered", "hire baber"],
    priority: 9,
    actions: [
      { type: "scroll_contact", label: "Contact Baber", targetId: "contact" },
    ],
  });

  entries.push({
    id: "contact",
    category: "contact",
    title: "Contact",
    content: `Visitors can reach Baber at ${kb.contact.email} or ${kb.contact.phone}. He is based in ${kb.contact.location}.`,
    keywords: [
      "contact",
      "email",
      "phone",
      "reach",
      "hire",
      "whatsapp",
      "message",
    ],
    aliases: ["where can i contact", "contact baber", "get in touch"],
    priority: 12,
    actions: [
      { type: "scroll_contact", label: "Open Contact", targetId: "contact" },
      {
        type: "open_external",
        label: "Send Email",
        href: `mailto:${kb.contact.email}`,
      },
    ],
  });

  entries.push({
    id: "resume",
    category: "resume",
    title: "Resume / CV",
    content:
      "Baber's enhanced professional resume is available for download. It covers his experience as Team Lead and Senior Mobile Application Developer, React Native, Next.js, Angular, AI surveillance deployments, App Store / Play Store apps, and selected commercial projects.",
    keywords: ["resume", "cv", "download", "curriculum"],
    aliases: ["download resume", "download cv", "get resume"],
    priority: 12,
    actions: [{ type: "download_resume", label: "Download Resume" }],
  });

  entries.push({
    id: "github",
    category: "social",
    title: "GitHub",
    content: `Baber's GitHub profile is available at ${kb.social.github}.`,
    keywords: ["github", "git", "code", "repositories", "repos"],
    aliases: ["open github", "github profile"],
    priority: 11,
    actions: [
      {
        type: "open_github",
        label: "Open GitHub",
        href: kb.social.github,
      },
    ],
  });

  entries.push({
    id: "linkedin",
    category: "social",
    title: "LinkedIn",
    content: `Baber's LinkedIn profile is available at ${kb.social.linkedin}.`,
    keywords: ["linkedin", "linked in", "professional profile"],
    aliases: ["open linkedin", "linkedin profile"],
    priority: 11,
    actions: [
      {
        type: "open_linkedin",
        label: "Open LinkedIn",
        href: kb.social.linkedin,
      },
    ],
  });

  entries.push({
    id: "availability",
    category: "availability",
    title: "Availability",
    content: `${kb.availability.status}. ${kb.availability.message}`,
    keywords: ["available", "availability", "hire", "open to work", "freelance"],
    aliases: ["is baber available", "availability"],
    priority: 8,
    actions: [
      { type: "scroll_contact", label: "Contact Baber", targetId: "contact" },
    ],
  });

  entries.push({
    id: "industries",
    category: "industries",
    title: "Industries",
    content: `Baber has worked across these industries: ${kb.industries.join(", ")}.`,
    keywords: ["industries", "domains", "sectors", "verticals"],
    aliases: ["what industries", "which domains"],
    priority: 8,
    actions: [
      { type: "scroll_projects", label: "View Projects", targetId: "projects" },
    ],
  });

  entries.push({
    id: "live-apps",
    category: "live",
    title: "Live Applications",
    content: `Live applications include: ${kb.liveApps.map((a) => `${a.name} (${a.url})`).join("; ")}.`,
    keywords: ["live", "demo", "deployed", "production urls", "websites live"],
    aliases: ["live apps", "live websites", "demos"],
    projectIds: ["proj-fleetex", "proj-rel", "proj-rel-portal", "proj-pos"],
    priority: 10,
    actions: [
      { type: "scroll_web", label: "View Web Apps", targetId: "web" },
    ],
  });

  // Per-project entries for granular retrieval
  for (const project of kb.projects) {
    entries.push({
      id: `project-${project.id}`,
      category: "projects",
      title: project.name,
      content: `${project.name}: ${project.description} ${project.highlights?.join(". ") ?? ""}`,
      keywords: [
        project.name.toLowerCase(),
        ...project.categories,
        ...project.technologies.map((t) => t.toLowerCase()),
      ],
      aliases: [project.name.toLowerCase()],
      technologies: project.technologies,
      projectIds: [project.id],
      priority: project.featured ? 9 : 7,
      actions: [
        ...(project.liveUrl
          ? [
              {
                type: "open_external" as const,
                label: `Open ${project.name}`,
                href: project.liveUrl,
              },
            ]
          : []),
        ...(project.playStoreUrl
          ? [
              {
                type: "open_external" as const,
                label: "Open on Play Store",
                href: project.playStoreUrl,
              },
            ]
          : []),
        ...(project.appStoreUrl
          ? [
              {
                type: "open_external" as const,
                label: "Open on App Store",
                href: project.appStoreUrl,
              },
            ]
          : []),
        ...(project.videoUrl
          ? [
              {
                type: "scroll_ai" as const,
                label: "Watch Demo",
                targetId: "ai",
              },
            ]
          : []),
      ],
    });
  }

  for (const faq of kb.faqs) {
    entries.push({
      id: faq.id,
      category: "faq",
      title: faq.question,
      content: faq.answer,
      keywords: faq.question.toLowerCase().split(/\s+/),
      aliases: faq.aliases,
      priority: 8,
    });
  }

  return entries;
}

knowledge.entries = buildEntries(knowledge);

export const SUGGESTED_QUESTIONS = [
  "React Native",
  "Angular",
  "Next.js",
  "AI Projects",
  "Healthcare",
  "Logistics",
  "Mobile Apps",
  "POS",
  "FastAPI",
  "Contact",
  "Download CV",
] as const;

export const WELCOME_MESSAGE = `Hello 👋

I'm Baber's Portfolio Assistant.

You can ask me anything about Baber's experience, projects, skills, technologies or services.

Try asking:
• Has Baber worked on React Native?
• Show AI Projects
• Can Baber build POS software?
• How many apps has he published?`;
