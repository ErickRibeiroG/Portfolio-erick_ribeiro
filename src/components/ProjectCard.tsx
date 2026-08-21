import { devicon } from "../data/tech";
import type { Project } from "../data/projects";
import { useLanguage } from "../i18n/useLanguage";

const THIN_SCROLLBAR =
  "[scrollbar-width:thin] [scrollbar-color:rgba(180,180,180,0.24)_transparent]";

export function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage();

  return (
    <div className="group flex h-[450px] w-[420px] flex-col overflow-hidden rounded-[20px] bg-linear-to-b from-surface-1 to-surface-2 shadow-[0_30px_60px_var(--shadow-elevated),inset_0_1px_0_var(--shadow-highlight)] backdrop-blur-[18px] transition-transform duration-500 hover:scale-[1.01] max-[520px]:w-[300px]">
      <div
        className="relative h-[230px] shrink-0 bg-top bg-cover transition-[background-position] duration-[4000ms] ease-in-out group-hover:bg-bottom"
        style={{ backgroundImage: `url("${project.image}")` }}
      >
        <i className="bi bi-box-arrow-up-right absolute top-[15px] right-[15px] cursor-pointer text-[18px] text-[rgba(182,182,182,0.863)] transition-transform duration-300 hover:scale-[1.2]" />
      </div>

      <div className="py-[20px] text-center">
        <h2 className="mb-[10px] text-2xl font-bold">{project.title}</h2>

        <p
          className={`max-h-[30px] overflow-y-auto text-[15px] leading-[1.1] ${THIN_SCROLLBAR}`}
        >
          {project.description}
        </p>

        <div
          className={`flex max-h-[80px] min-h-[80px] flex-wrap items-center justify-center gap-[10px] overflow-y-auto p-[10px] ${THIN_SCROLLBAR}`}
        >
          {project.techs.map((tech) => (
            <span
              key={tech.name}
              className="flex h-[30px] items-center gap-[5px] rounded-[20px] bg-[#3ca6a646] px-[8px] py-[10px] text-[12px] font-medium"
            >
              <img
                src={devicon(tech.icon)}
                alt=""
                aria-hidden="true"
                className="h-[25px] w-[25px]"
              />
              {tech.name}
            </span>
          ))}
        </div>

        <div className="mt-[15px] flex justify-center gap-[5px]">
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="flex cursor-pointer items-center gap-[5px] rounded-[15px] bg-invert-bg px-[5px] py-[3px] text-[15px] text-invert-text transition-transform duration-500 hover:scale-105"
          >
            <i className="bi bi-github text-[20px]" />
            <span className="font-medium">{t.proj.code}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
