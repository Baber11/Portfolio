"use client";

import {
  memo,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

/**
 * Mounts children only when near the viewport — keeps below-fold DOM light on mobile.
 */
function LazySectionComponent({
  children,
  rootMargin = "280px 0px",
  minHeight = 240,
  className = "",
  id,
}: {
  children: ReactNode;
  rootMargin?: string;
  minHeight?: number;
  className?: string;
  id?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Deep-link / hash: mount immediately so scroll targets exist
    if (id && typeof window !== "undefined") {
      const hash = window.location.hash.replace(/^#/, "");
      if (hash === id) {
        setShow(true);
        return;
      }
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin, threshold: 0.01 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin, id]);

  return (
    <section
      ref={ref}
      id={id}
      className={className}
      style={show ? undefined : { minHeight }}
    >
      {show ? children : null}
    </section>
  );
}

export const LazySection = memo(LazySectionComponent);
