import { devicon } from "../data/tech";
import type { Project } from "../data/projects";
import { useLanguage } from "../i18n/useLanguage";

const THIN_SCROLLBAR =
  "[scrollbar-width:thin] [scrollbar-color:rgba(180,180,180,0.24)_transparent]";

export function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage();

  return (
    <div className="group flex min-h-[470px] w-[420px] flex-col overflow-hidden rounded-[20px] bg-linear-to-b from-surface-1 to-surface-2 shadow-[0_30px_60px_var(--shadow-elevated),inset_0_1px_0_var(--shadow-highlight)] backdrop-blur-[18px] transition-[translate,box-shadow] duration-1000 ease-out hover:-translate-y-[10px] hover:shadow-[0_35px_65px_var(--shadow-elevated),inset_0_1px_0_var(--shadow-highlight)] max-[520px]:w-[300px]">
      <div
        className="relative h-[230px] shrink-0 overflow-hidden bg-top bg-cover transition-[background-position] duration-[4000ms] ease-in-out group-hover:bg-bottom"
        style={{ backgroundImage: `url("${project.image}")` }}
      />

      <div className="flex flex-1 flex-col px-[24px] py-[20px] text-left">
        <h2 className="mb-[8px] text-2xl font-bold">{project.title}</h2>

        <p className="line-clamp-3 min-h-[61px] text-[15px] leading-[1.35] text-muted">
          {project.description}
        </p>

        <div
          className={`mt-[12px] flex max-h-[90px] flex-wrap items-center gap-[8px] overflow-y-auto ${THIN_SCROLLBAR}`}
        >
          {project.techs.map((tech) => (
            <span
              key={tech.name}
              className="flex h-[28px] items-center gap-[5px] rounded-[5px] border border-brand/20 bg-brand/10 px-[10px] text-[12px] font-medium"
            >
              <img
                src={devicon(tech.icon)}
                alt=""
                aria-hidden="true"
                className="h-[20px] w-[20px]"
              />
              {tech.name}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-[20px] pt-[16px]">
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="group/code inline-flex cursor-pointer items-center gap-[8px] text-[15px] font-medium text-text transition-colors duration-300 hover:text-brand"
          >
            <span className="flex h-[20px] w-[20px] items-center justify-center transition-transform duration-300 group-hover/code:scale-105">
              <svg
                className="lucide lucide-github"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </span>
            {t.proj.code}
          </a>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex cursor-pointer items-center gap-[8px] text-[15px] font-medium text-text transition-colors duration-300 hover:text-brand"
            >
              <i className="bi bi-box-arrow-up-right text-[16px]" />
              {t.proj.deploy}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
