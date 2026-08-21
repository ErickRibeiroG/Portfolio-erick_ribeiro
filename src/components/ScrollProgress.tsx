import { useScrollProgress } from "../hooks/useScrollProgress";

/** Barra fina no topo da viewport indicando o progresso de leitura da página. */
export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 right-0 left-0 z-[1001] h-[3px] bg-transparent">
      <div
        className="h-full bg-linear-to-r from-brand to-[#53e2e2] transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
