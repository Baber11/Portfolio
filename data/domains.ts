import type { Project, ProjectCategory } from "@/data/types";

export type DomainId =
  | "ride-sharing"
  | "ecommerce"
  | "social"
  | "logistics"
  | "healthcare"
  | "fintech"
  | "pos"
  | "ai"
  | "web";

export interface WorkDomain {
  id: DomainId;
  label: string;
  /** Short positioning line for hiring managers */
  line: string;
  categories: ProjectCategory[];
}

/** Ordered for a senior hiring conversation — strongest commercial signals first. */
export const WORK_DOMAINS: WorkDomain[] = [
  {
    id: "logistics",
    label: "Logistics",
    line: "Freight platforms, carrier tooling, and logistics brand sites",
    categories: ["logistics"],
  },
  {
    id: "ride-sharing",
    label: "Ride-hailing",
    line: "Passenger and rider apps with maps, tracking, and payments",
    categories: ["ride-sharing"],
  },
  {
    id: "pos",
    label: "POS & Retail",
    line: "Multi-brand point-of-sale for Costa, Broadway, and California",
    categories: ["pos"],
  },
  {
    id: "ai",
    label: "AI Surveillance",
    line: "Computer-vision monitoring in live venue deployments",
    categories: ["ai"],
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    line: "Booking, retail, and marketplace experiences on mobile",
    categories: ["ecommerce"],
  },
  {
    id: "healthcare",
    label: "Healthcare",
    line: "Hospital platforms and consumer health & diet apps",
    categories: ["healthcare"],
  },
  {
    id: "social",
    label: "Social",
    line: "Community, media, and location-aware social products",
    categories: ["social"],
  },
  {
    id: "fintech",
    label: "Fintech",
    line: "Payment-adjacent and financial product interfaces",
    categories: ["fintech"],
  },
  {
    id: "web",
    label: "Web Platforms",
    line: "Next.js marketing sites, portals, and operational web apps",
    categories: ["web"],
  },
];

export function projectsForDomain(
  projects: Project[],
  domain: WorkDomain,
): Project[] {
  return projects.filter((p) =>
    domain.categories.some((c) => p.categories.includes(c)),
  );
}

export function domainsWithWork(projects: Project[]): WorkDomain[] {
  return WORK_DOMAINS.filter(
    (d) => projectsForDomain(projects, d).length > 0,
  );
}

export function coverForDomain(
  projects: Project[],
  domain: WorkDomain,
): string | undefined {
  const list = projectsForDomain(projects, domain);
  const withImg = list.find((p) => (p.imageUrls?.length ?? 0) > 0);
  return withImg?.imageUrls?.[0];
}
