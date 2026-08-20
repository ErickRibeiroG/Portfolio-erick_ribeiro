import { useEffect } from "react";
import type { RefObject } from "react";

/** Chama `handler` em cliques fora do elemento referenciado, enquanto `enabled`. */
export function useClickOutside(
  ref: RefObject<HTMLElement | null>,
  handler: () => void,
  enabled = true,
): void {
  useEffect(() => {
    if (!enabled) return;

    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (target instanceof Node && !ref.current?.contains(target)) {
        handler();
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [ref, handler, enabled]);
}
