import { LazyPortfolioAssistant } from "@/components/assistant/LazyPortfolioAssistant";
import { PortfolioShell } from "@/components/PortfolioShell";

export default function Home() {
  return (
    <>
      <PortfolioShell />
      <LazyPortfolioAssistant />
    </>
  );
}
