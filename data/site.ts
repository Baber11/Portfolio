import type {
  ContactInfo,
  Experience,
  Project,
  SocialLinks,
} from "./types";

/** Slim site content for the portfolio UI (keeps client bundle light). */

export const about = {
    name: "Baber",
    fullName: "Syed Baber Ali",
    title: "Senior Mobile Application Developer | Team Lead",
    tagline: "Cross-Platform · React Native · Next.js · AI · 6+ Years",
    introduction:
      "Syed Baber Ali is a results-driven Senior Mobile Application Developer and Team Lead with over six years of experience building cross-platform mobile applications with React Native, modern web platforms with Next.js, and enterprise Angular systems. He has delivered production software across fintech, healthcare, ride-hailing, logistics, e-commerce, facilities management, retail POS, AI surveillance, and enterprise platforms. From Karachi, Pakistan, Baber leads teams, designs scalable architectures, integrates third-party services, and ships App Store and Play Store products from concept to deployment.",
    heroSummary:
      "Senior Mobile Application Developer & Team Lead with 6+ years of experience. Specialized in React Native, Next.js, and Angular — delivering 20+ commercial apps, App Store & Play Store releases, multi-brand POS systems, and AI surveillance deployed for real venues and brands.",
    yearsExperience: 6,
    location: "Karachi, Pakistan",
  };

export const experience: Experience[] = [
    {
      id: "exp-team-lead",
      title: "Team Lead - Mobile Applications",
      company: "VirtueXolutions",
      startDate: "Dec 2023",
      endDate: "Present",
      description:
        "Leads React Native and full-product engineering teams across multiple client projects, owning architecture, planning, code reviews, and deployments.",
      highlights: [
        "Owns project architecture, development planning, code reviews and deployments",
        "Coordinates directly with stakeholders and clients for successful delivery",
        "Mentors developers and establishes team-wide development standards",
      ],
    },
    {
      id: "exp-senior-rn",
      title: "Senior React Native Developer",
      company: "VirtueXolutions",
      startDate: "Dec 2022",
      endDate: "Dec 2023",
      description:
        "Developed and deployed multiple production-grade mobile applications with end-to-end architecture ownership.",
      highlights: [
        "Designed system workflows and end-to-end application architecture",
        "Integrated payment gateways, chat systems, streaming and mapping solutions",
      ],
    },
    {
      id: "exp-rn-tafsol",
      title: "React Native Developer",
      company: "TAFSOL",
      startDate: "Mar 2022",
      endDate: "Dec 2022",
      description:
        "Built fintech, healthcare, multilingual and e-commerce applications with Firebase and third-party APIs.",
      highlights: [
        "Integrated Firebase services, authentication, notifications and third-party APIs",
      ],
    },
    {
      id: "exp-associate",
      title: "Associate Developer",
      company: "SAS Solution",
      startDate: "Nov 2020",
      endDate: "Feb 2022",
      description:
        "Progressed from intern to a professional mobile development role, contributing to hybrid mobile application development and maintenance.",
      highlights: [
        "Contributed to hybrid mobile application development and maintenance",
      ],
    },
  ];

export const skills = {
    primary: [
      "React Native",
      "TypeScript",
      "JavaScript",
      "React.js",
      "Next.js",
      "Angular",
      "Redux Toolkit",
      "Firebase",
      "REST APIs",
      "AI / Computer Vision",
    ],
    secondary: [
      "Google Maps",
      "Agora",
      "CometChat",
      "Payment Gateways",
      "Electron",
      "Tailwind CSS",
      "Framer Motion",
    ],
    tools: [
      "Git / GitHub",
      "Android Studio",
      "Xcode",
      "Agile Development",
      "Vercel",
    ],
  };

export const projects: Project[] = [
    {
      id: "proj-daweeye",
      name: "Daweeye",
      summary: "Multilingual healthcare and hospital management platform.",
      description:
        "A multilingual healthcare and hospital management platform designed for clinical workflows, patient coordination, and hospital operations.",
      categories: ["mobile", "healthcare", "enterprise"],
      technologies: ["React Native", "Firebase", "REST APIs", "TypeScript"],
      featured: false,
      highlights: [
        "Multilingual healthcare workflows",
        "Hospital management features",
      ],
    },
    {
      id: "proj-ridelynk",
      name: "RideLynk",
      summary: "Ride-hailing platform with real-time tracking and payments.",
      description:
        "RideLink makes everyday travel simple and convenient with easy ride booking, smart location search, secure payments, and real-time updates in one seamless app — published on the Google Play Store.",
      categories: ["mobile", "ride-sharing", "fintech"],
      technologies: [
        "React Native",
        "Google Maps",
        "Firebase",
        "Payment Gateways",
        "REST APIs",
      ],
      featured: true,
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.ridelinkUser",
      imageUrls: [
        "/assets/screenshots/Ridelynk/01.webp",
        "/assets/screenshots/Ridelynk/02.webp",
        "/assets/screenshots/Ridelynk/03.webp",
        "/assets/screenshots/Ridelynk/04.webp",
        "/assets/screenshots/Ridelynk/05.webp",
      ],
      highlights: [
        "Real-time ride tracking",
        "Payments integration",
        "User and rider apps on Play Store",
      ],
    },
    {
      id: "proj-ridelynk-rider",
      name: "RideLynk Rider",
      summary: "Driver-side ride-hailing application for RideLynk.",
      description:
        "RideLink Rider is a smart driver app that helps riders accept trips, manage bookings, track earnings, and provide safe, reliable transportation with ease — available on the Google Play Store.",
      categories: ["mobile", "ride-sharing"],
      technologies: ["React Native", "Google Maps", "Firebase", "REST APIs"],
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.ridelink_rider",
      imageUrls: [
        "/assets/screenshots/RidelynkRider/01.webp",
        "/assets/screenshots/RidelynkRider/02.webp",
        "/assets/screenshots/RidelynkRider/03.webp",
        "/assets/screenshots/RidelynkRider/04.webp",
        "/assets/screenshots/RidelynkRider/05.webp",
      ],
      highlights: [
        "Trip accept & booking management",
        "Earnings tracking for drivers",
      ],
    },
    {
      id: "proj-lookclean",
      name: "LookClean",
      summary:
        "Beauty & grooming booking + e-commerce app — live on Play Store & App Store.",
      description:
        "LookClean makes beauty and grooming appointments simple and convenient. Book trusted barbers, nail artists, and beauty professionals for home services or salon visits, schedule individual or group bookings, and enjoy a seamless experience — all in one app, published on both the Google Play Store and the Apple App Store.",
      categories: ["mobile", "ecommerce"],
      technologies: ["React Native", "Firebase", "Payment Gateways", "REST APIs"],
      featured: true,
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.lookclean",
      appStoreUrl: "https://apps.apple.com/ca/app/look-clean/id6504813666",
      imageUrls: [
        "/assets/screenshots/Lookclean/01.webp",
        "/assets/screenshots/Lookclean/02.webp",
        "/assets/screenshots/Lookclean/03.webp",
        "/assets/screenshots/Lookclean/04.webp",
        "/assets/screenshots/Lookclean/05.webp",
        "/assets/screenshots/Lookclean/06.webp",
      ],
      highlights: [
        "Barber, nail & beauty booking flows",
        "Home service & salon visit scheduling",
        "Live on iOS App Store and Google Play",
      ],
    },
    {
      id: "proj-facilitate",
      name: "Facilitate",
      summary:
        "Facilities management app for work orders — live on App Store & Play Store.",
      description:
        "Facilitate is a facilities management mobile app that lets managers review work orders, enter new requests, and view locations from anywhere. It is live on the Apple App Store and Google Play Store (Pedro Facilit / com.pedrofacilit8).",
      categories: ["mobile", "enterprise"],
      technologies: ["React Native", "Firebase", "REST APIs"],
      featured: true,
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.pedrofacilit8",
      appStoreUrl: "https://apps.apple.com/sa/app/facilitate/id1494731927",
      highlights: [
        "Work order management",
        "Secure facilities workflows",
        "Live on App Store and Play Store",
      ],
    },
    {
      id: "proj-mbn",
      name: "MBN App",
      summary: "Modern mobile shopping app for browsing, cart & checkout.",
      description:
        "MBNApp is a modern mobile shopping app that makes everyday buying simple and convenient. Browse products, discover categories, save favorites, manage your cart, and complete secure purchases with ease. It offers account management, order tracking, and fast checkout anytime, anywhere.",
      categories: ["mobile", "ecommerce"],
      technologies: ["React Native", "Firebase", "Payment Gateways", "REST APIs"],
      featured: true,
      imageUrls: [
        "/assets/screenshots/MBN/01.webp",
        "/assets/screenshots/MBN/02.webp",
        "/assets/screenshots/MBN/03.webp",
        "/assets/screenshots/MBN/04.webp",
        "/assets/screenshots/MBN/05.webp",
        "/assets/screenshots/MBN/06.webp",
      ],
      highlights: [
        "Product browsing & category discovery",
        "Cart, checkout & order tracking",
        "Account management and fast secure purchases",
      ],
    },
    {
      id: "proj-qbid",
      name: "QBid",
      summary: "Marketplace connecting service seekers with trusted providers.",
      description:
        "QBid is a mobile platform designed to connect people who need help with trusted professionals and service providers. Users can create requests, browse available offers, communicate directly, and complete transactions in a simple and secure experience — making hiring, negotiating, and managing services easier, faster, and more transparent for both customers and service providers.",
      categories: ["mobile", "enterprise"],
      technologies: ["React Native", "Firebase", "REST APIs"],
      featured: true,
      imageUrls: [
        "/assets/screenshots/Qbid/01.webp",
        "/assets/screenshots/Qbid/02.webp",
        "/assets/screenshots/Qbid/03.webp",
        "/assets/screenshots/Qbid/04.webp",
        "/assets/screenshots/Qbid/05.webp",
        "/assets/screenshots/Qbid/06.webp",
      ],
      highlights: [
        "Service request creation & offer browsing",
        "Direct in-app communication",
        "Secure hiring and transaction flows",
      ],
    },
    {
      id: "proj-youarehere",
      name: "YouAreHere",
      summary: "Smart travel companion for discovering and planning trips.",
      description:
        "YouAreHere is a smart travel companion that helps you discover exciting places, save your favorite locations, and plan memorable trips with ease. Whether exploring a new city or organizing the next getaway, YouAreHere makes travel more convenient, inspiring, and enjoyable.",
      categories: ["mobile", "social"],
      technologies: ["React Native", "Google Maps", "Firebase", "REST APIs"],
      imageUrls: [
        "/assets/screenshots/YouAreHere/01.webp",
        "/assets/screenshots/YouAreHere/02.webp",
        "/assets/screenshots/YouAreHere/03.webp",
        "/assets/screenshots/YouAreHere/04.webp",
        "/assets/screenshots/YouAreHere/05.webp",
        "/assets/screenshots/YouAreHere/06.webp",
      ],
      highlights: [
        "Place discovery & favorites",
        "Trip planning tools",
      ],
    },
    {
      id: "proj-disc-music",
      name: "Disc Music",
      summary: "Music streaming app for songs, artists, albums & playlists.",
      description:
        "Discover a world of music with Disc Music. Stream your favorite songs, explore trending artists, albums, and playlists, and enjoy a seamless, high-quality listening experience — at home, at work, or on the go.",
      categories: ["mobile", "social"],
      technologies: ["React Native", "Firebase", "REST APIs"],
      imageUrls: [
        "/assets/screenshots/dicsmusic/01.webp",
        "/assets/screenshots/dicsmusic/02.webp",
        "/assets/screenshots/dicsmusic/03.webp",
        "/assets/screenshots/dicsmusic/04.webp",
        "/assets/screenshots/dicsmusic/05.webp",
      ],
      highlights: [
        "Streaming for songs, artists & albums",
        "Playlist discovery",
      ],
    },
    {
      id: "proj-load-navigator",
      name: "LoadNavigator",
      summary:
        "Logistics & trucking app for loads, routes, permits and payments.",
      description:
        "LoadNavigator is a smart mobile solution designed for the transportation and logistics industry. It helps drivers, carriers, and operators manage loads, routes, payments, and essential documents in one place — with load posting, route planning, permit scanning, job tracking, and profile management, making trucking and freight operations more convenient, faster, and transparent.",
      categories: ["mobile", "logistics"],
      technologies: ["React Native", "Google Maps", "Firebase", "REST APIs"],
      featured: true,
      imageUrls: [
        "/assets/screenshots/loadNavigator/01.webp",
        "/assets/screenshots/loadNavigator/02.webp",
        "/assets/screenshots/loadNavigator/03.webp",
        "/assets/screenshots/loadNavigator/04.webp",
        "/assets/screenshots/loadNavigator/05.webp",
        "/assets/screenshots/loadNavigator/06.webp",
      ],
      highlights: [
        "Load posting & route planning",
        "Permit scanning and document management",
        "Job tracking for drivers & carriers",
      ],
    },
    {
      id: "proj-hatchsocial",
      name: "HatchSocial",
      summary: "Social network with chat and live streaming features.",
      description:
        "A social networking platform featuring chat and live streaming capabilities.",
      categories: ["mobile", "social"],
      technologies: ["React Native", "Agora", "CometChat", "Firebase"],
      highlights: ["Chat", "Live streaming"],
    },
    {
      id: "proj-indoor",
      name: "Indoor Positioning App",
      summary: "BLE-based indoor navigation for Dubai malls.",
      description:
        "A BLE-based indoor navigation solution designed for mall environments in Dubai.",
      categories: ["mobile", "enterprise"],
      technologies: ["React Native", "BLE", "Maps"],
      highlights: ["Indoor BLE navigation", "Dubai mall deployments"],
    },
    {
      id: "proj-endorse",
      name: "EndorseMe",
      summary: "US-based freelance marketplace platform.",
      description:
        "A US-based freelance marketplace platform connecting talent with opportunities.",
      categories: ["mobile", "enterprise", "fintech"],
      technologies: ["React Native", "REST APIs", "Firebase"],
    },
    {
      id: "proj-fleetex",
      name: "FleetEx Logistics",
      summary:
        "Premium international freight & supply chain website for a Pakistan-based logistics firm.",
      description:
        "A polished marketing and company website for FleetEx Logistics, covering air, ocean, and road freight services with global network messaging.",
      categories: ["web", "logistics", "enterprise"],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      featured: true,
      liveUrl: "https://www.fleetexlogistics.com/",
      imageUrls: [
        "/assets/screenshots/fleetexlogistics/01.webp",
        "/assets/screenshots/fleetexlogistics/02.webp",
        "/assets/screenshots/fleetexlogistics/03.webp",
        "/assets/screenshots/fleetexlogistics/04.webp",
      ],
      highlights: [
        "International freight positioning",
        "Services, industries, and global network sections",
      ],
    },
    {
      id: "proj-rel",
      name: "Rapid Express Logistics",
      summary:
        "Pakistan's gateway to global logistics — domestic and international shipping website.",
      description:
        "A full marketing website for Rapid Express Logistics covering domestic shipping, international freight, warehousing, and e-commerce fulfillment.",
      categories: ["web", "logistics", "enterprise"],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      featured: true,
      liveUrl: "https://www.rapidexpresslogistic.com/",
      imageUrls: [
        "/assets/screenshots/rapidexpresslogistics/01.webp",
        "/assets/screenshots/rapidexpresslogistics/02.webp",
        "/assets/screenshots/rapidexpresslogistics/03.webp",
        "/assets/screenshots/rapidexpresslogistics/04.webp",
        "/assets/screenshots/rapidexpresslogistics/05.webp",
      ],
      highlights: [
        "Domestic & international logistics messaging",
        "Shipment tracking entry points",
      ],
    },
    {
      id: "proj-rel-portal",
      name: "Rapid Express Logistics Portal",
      summary: "Client logistics portal for tracking and shipment management.",
      description:
        "A client-facing logistics portal for Rapid Express Logistics with login and shipment visibility.",
      categories: ["web", "logistics", "enterprise"],
      technologies: ["Next.js", "TypeScript", "REST APIs"],
      liveUrl: "https://www.rapidexpresslogistic.com/portal/login",
      imageUrls: [
        "/assets/screenshots/rapidPortal/01.webp",
        "/assets/screenshots/rapidPortal/02.webp",
        "/assets/screenshots/rapidPortal/03.webp",
        "/assets/screenshots/rapidPortal/04.webp",
        "/assets/screenshots/rapidPortal/05.webp",
        "/assets/screenshots/rapidPortal/06.webp",
      ],
    },
    {
      id: "proj-pos",
      name: "Order Intel POS",
      summary:
        "POS for retail brands — Costa Coffee, Broadway & California; Electron desktop EXE planned.",
      description:
        "Order Intel POS is an Angular-based point-of-sale frontend built for retail order intelligence. It is designed for multi-brand rollout including Costa Coffee, Broadway, and California, with a planned Electron wrapper for native Windows EXE deployment. A live demo is available online.",
      categories: ["web", "pos", "enterprise"],
      technologies: ["Angular", "TypeScript", "Electron", "REST APIs"],
      featured: true,
      liveUrl: "https://pos-frontend-rdsr.vercel.app/pos",
      imageUrls: [
        "/assets/screenshots/POS/01.webp",
        "/assets/screenshots/POS/02.webp",
        "/assets/screenshots/POS/03.webp",
        "/assets/screenshots/POS/04.webp",
        "/assets/screenshots/POS/05.webp",
        "/assets/screenshots/POS/06.webp",
        "/assets/screenshots/POS/07.webp",
        "/assets/screenshots/POS/08.webp",
      ],
      highlights: [
        "Built with Angular for Electron desktop packaging",
        "Target brands: Costa Coffee, Broadway, California",
        "POS workflows and order intelligence UI",
      ],
    },
    {
      id: "proj-ai-surveillance",
      name: "AI Surveillance System",
      summary: "AI surveillance live at California and Broadway venues.",
      description:
        "An AI-powered surveillance system with intelligent video monitoring and detection workflows. It is currently implemented at California and Broadway locations. Demo footage is available in the portfolio.",
      categories: ["ai", "mobile", "enterprise"],
      technologies: ["React Native", "AI / Computer Vision", "REST APIs"],
      featured: true,
      videoUrl: "/assets/ai-surveillance-demo.mp4",
      highlights: [
        "Currently implemented at California and Broadway",
        "AI-assisted surveillance and monitoring",
        "Enterprise venue deployment",
      ],
    },
  ];

export const resume = {
    path: "/assets/Syed_Baber_Ali_CV.pdf",
    fileName: "Syed_Baber_Ali_CV.pdf",
  };

export const contact: ContactInfo = {
    email: "syedbaber115@gmail.com",
    phone: "+92 329 2297354",
    location: "Karachi, Pakistan",
    whatsapp: "+923292297354",
  };

export const social: SocialLinks = {
    github: "https://github.com/Baber11",
    linkedin: "https://www.linkedin.com/in/syed-baber-ali-106831222",
  };
