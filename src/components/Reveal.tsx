import type { ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

const OFFSET = {
  up: "translate-y-[28px]",
  left: "-translate-x-[28px]",
  right: "translate-x-[28px]",
  none: "",
} as const;

/** Anima os filhos com fade + deslocamento ao entrarem na viewport. */
export function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  direction?: keyof typeof OFFSET;
  /** Atraso em ms, para escalonar itens de uma lista. */
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`transition-all duration-700 ease-out ${
        visible ? "translate-x-0 translate-y-0 opacity-100" : `${OFFSET[direction]} opacity-0`
      } ${className}`}
    >
      {children}
    </div>
  );
}
