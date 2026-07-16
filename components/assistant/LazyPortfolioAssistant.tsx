"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const PortfolioAssistant = dynamic(
  () =>
    import("@/components/assistant").then((m) => m.PortfolioAssistant),
  {
    ssr: false,
    loading: () => null,
  },
);

/**
 * Defer assistant JS until the browser is idle (or after a short timeout / first interaction).
 * Avoids competing with first paint and image decode on mobile.
 */
export function LazyPortfolioAssistant() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const arm = () => {
      if (cancelled || ready) return;
      setReady(true);
    };

    const onInteract = () => arm();
    window.addEventListener("pointerdown", onInteract, { once: true, passive: true });
    window.addEventListener("keydown", onInteract, { once: true });
    window.addEventListener("scroll", onInteract, { once: true, passive: true });

    if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(arm, { timeout: 3500 });
    } else {
      timeoutId = setTimeout(arm, 2800);
    }

    return () => {
      cancelled = true;
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("keydown", onInteract);
      window.removeEventListener("scroll", onInteract);
      if (idleId !== undefined && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId) clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- mount once
  }, []);

  if (!ready) return null;
  return <PortfolioAssistant />;
}
