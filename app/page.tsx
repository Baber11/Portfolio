import dynamic from "next/dynamic";
import { LazyPortfolioAssistant } from "@/components/assistant/LazyPortfolioAssistant";

const PortfolioShell = dynamic(
  () =>
    import("@/components/PortfolioShell").then((m) => m.PortfolioShell),
  {
    loading: () => (
      <div className="flex min-h-dvh items-center justify-center bg-[#030712] text-cyan-200/70">
        <p className="font-mono text-sm tracking-wider">Loading portfolio…</p>
      </div>
    ),
  },
);

export default function Home() {
  return (
    <>
      <PortfolioShell />
      <LazyPortfolioAssistant />
    </>
  );
}
