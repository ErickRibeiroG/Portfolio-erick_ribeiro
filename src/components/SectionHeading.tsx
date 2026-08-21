import { Reveal } from "./Reveal";

/** Selo + título usados no topo de cada seção, com animação de entrada. */
export function SectionHeading({
  kicker,
  title,
  align = "center",
  className = "",
}: {
  kicker: string;
  title: string;
  align?: "center" | "left";
  className?: string;
}) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <Reveal className={`mb-[55px] flex flex-col ${alignClass} ${className}`}>
      <span className="mb-[10px] inline-flex items-center gap-[8px] rounded-full border border-brand/30 bg-brand/10 px-[14px] py-[5px] text-[0.75rem] font-semibold tracking-[0.08em] text-brand uppercase">
        <span className="h-[6px] w-[6px] rounded-full bg-brand" />
        {kicker}
      </span>
      <h1 className="text-[40px] font-bold">{title}</h1>
    </Reveal>
  );
}
