import { useEffect, useState } from "react";

/** `true` quando a página passou de `threshold` pixels de scroll vertical. */
export function useScrolled(threshold = 50): boolean {
  const [scrolled, setScrolled] = useState(
    () => window.scrollY > threshold,
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
