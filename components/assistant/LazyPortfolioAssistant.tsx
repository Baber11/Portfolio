"use client";

import dynamic from "next/dynamic";

const PortfolioAssistant = dynamic(
  () =>
    import("@/components/assistant").then((m) => m.PortfolioAssistant),
  {
    ssr: false,
    loading: () => null,
  },
);

export function LazyPortfolioAssistant() {
  return <PortfolioAssistant />;
}
