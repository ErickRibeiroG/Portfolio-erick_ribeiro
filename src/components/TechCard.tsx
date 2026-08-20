import { devicon } from "../data/tech";
import type { Tech } from "../data/tech";

export function TechCard({ tech }: { tech: Tech }) {
  return (
    <div
      tabIndex={0}
      className="group flex min-h-[96px] flex-col items-center justify-center gap-[8px] rounded-[12px] border border-white/16 bg-[rgba(255,255,255,0.035)] px-[8px] pt-[13px] pb-[10px] text-center text-white/72 transition-[translate,background-color,border-color,box-shadow,color] duration-[250ms] hover:-translate-y-[6px] hover:border-white/38 hover:bg-white/9 hover:text-white hover:shadow-[0_12px_28px_rgba(0,0,0,0.25)] focus-visible:-translate-y-[6px] focus-visible:border-white/38 focus-visible:bg-white/9 focus-visible:text-white focus-visible:shadow-[0_12px_28px_rgba(0,0,0,0.25)] focus-visible:outline-none"
    >
      <img
        src={devicon(tech.icon)}
        alt=""
        aria-hidden="true"
        className="h-[38px] w-[38px] object-contain opacity-[0.82] brightness-[1.75] grayscale transition-[filter,opacity,scale] duration-[250ms] group-hover:scale-[1.08] group-hover:opacity-100 group-hover:brightness-100 group-hover:grayscale-0 group-focus-visible:scale-[1.08] group-focus-visible:opacity-100 group-focus-visible:brightness-100 group-focus-visible:grayscale-0"
      />
      <span className="text-[0.76rem] font-semibold">{tech.name}</span>
    </div>
  );
}
