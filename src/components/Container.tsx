import type { ReactNode } from "react";

/** Equivalente à antiga `.interface`: limita a largura e centraliza o conteúdo. */
export function Container({
  children,
  maxWidth = "max-w-[1280px]",
  className = "",
}: {
  children: ReactNode;
  /** Classe de largura máxima — substitui a padrão em vez de competir com ela. */
  maxWidth?: string;
  className?: string;
}) {
  return (
    <div className={`mx-auto ${maxWidth} ${className}`}>{children}</div>
  );
}
