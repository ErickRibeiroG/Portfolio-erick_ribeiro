import { useEffect } from "react";
import { createPortal } from "react-dom";
import type { Project } from "../data/projects";
import { devicon } from "../data/tech";
import { useLanguage } from "../i18n/useLanguage";

const THIN_SCROLLBAR =
  "[scrollbar-width:thin] [scrollbar-color:rgba(180,180,180,0.28)_transparent]";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { t } = useLanguage();

  useEffect(() => {
    if (!project) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 p-[16px] backdrop-blur-md transition-opacity duration-300 sm:p-[24px]"
    >
      <div
        className="relative flex max-h-[86vh] w-full max-w-[760px] flex-col overflow-hidden rounded-[24px] border border-border bg-surface-1 shadow-[0_30px_70px_rgba(0,0,0,0.6),inset_0_1px_0_var(--shadow-highlight)] backdrop-blur-[24px] transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner do projeto no topo */}
        <div
          className="relative h-[190px] w-full shrink-0 bg-cover bg-top sm:h-[240px]"
          style={{ backgroundImage: `url("${project.image}")` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/45" />

          {/* Badge Em desenvolvimento */}
          {project.desenvolvimento && (
            <span className="absolute left-[16px] top-[16px] z-10 rounded-[6px] border border-white/30 bg-black/65 px-[10px] py-[6px] text-[12px] font-semibold text-white shadow-[0_4px_12px_rgba(0,0,0,0.3)] backdrop-blur-[6px]">
              {t.proj.emDesenvolvimento}
            </span>
          )}

          {/* Botão Fechar no canto superior direito - Hover apenas no X vermelho */}
          <button
            type="button"
            onClick={onClose}
            aria-label={t.proj.fecharModal}
            className="absolute right-[16px] top-[16px] z-10 flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-full border border-white/30 bg-black/60 text-white shadow-[0_4px_12px_rgba(0,0,0,0.3)] backdrop-blur-[8px] transition-all duration-300 hover:scale-110 hover:border-red-500/50 hover:text-red-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Título e tags sobrepostos na base do banner */}
          <div className="absolute bottom-[16px] left-[20px] right-[20px] z-10 sm:bottom-[20px] sm:left-[28px] sm:right-[28px]">
            <div className="mb-[6px] flex flex-wrap gap-[6px]">
              {project.type.map((tKey) => (
                <span
                  key={tKey}
                  className="rounded-full border border-white/30 bg-black/55 px-[10px] py-[2px] text-[11px] font-medium text-white backdrop-blur-[6px]"
                >
                  {t.proj.filtros[tKey]}
                </span>
              ))}
            </div>
            <h2
              id="modal-project-title"
              className="text-2xl font-bold tracking-tight text-white drop-shadow-md sm:text-3xl"
            >
              {project.title}
            </h2>
          </div>
        </div>

        {/* Corpo com scroll para visualização de todo o conteúdo */}
        <div className={`flex flex-1 flex-col gap-[24px] overflow-y-auto p-[20px] sm:p-[28px] ${THIN_SCROLLBAR}`}>
          {/* Seção da descrição completa */}
          <div>
            <h3 className="mb-[10px] text-[13px] font-semibold uppercase tracking-wider text-brand">
              {t.proj.sobreProjeto}
            </h3>
            <p className="text-[15px] font-normal leading-[1.7] text-text/90 sm:text-[16px]">
              {project.description}
            </p>
          </div>

          {/* Seção das tecnologias */}
          <div>
            <h3 className="mb-[10px] text-[13px] font-semibold uppercase tracking-wider text-brand">
              {t.proj.tecnologias}
            </h3>
            <div className="flex flex-wrap gap-[8px]">
              {project.techs.map((tech) => (
                <span
                  key={tech.name}
                  className="flex h-[32px] items-center gap-[7px] rounded-[6px] border border-brand/25 bg-brand/10 px-[12px] text-[13px] font-medium text-text transition-colors duration-200"
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
          </div>
        </div>

        {/* Rodapé do modal com links diretos */}
        <div className="flex flex-wrap items-center gap-[12px] border-t border-border bg-surface-2/60 px-[20px] py-[16px] backdrop-blur-md sm:px-[28px]">
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="group/code inline-flex cursor-pointer items-center gap-[8px] rounded-full border border-border bg-surface-1 px-[18px] py-[9px] text-[14px] font-medium text-text shadow-sm transition-all duration-300 hover:border-brand/40 hover:bg-brand/10 hover:text-brand"
          >
            <span className="flex h-[18px] w-[18px] items-center justify-center transition-transform duration-300 group-hover/code:scale-110">
              <svg
                className="lucide lucide-github"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
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
              className="inline-flex cursor-pointer items-center gap-[8px] rounded-full bg-brand px-[20px] py-[9px] text-[14px] font-semibold text-white shadow-[0_4px_14px_rgba(60,166,166,0.35)] transition-all duration-300 hover:scale-105 hover:bg-brand-alt"
            >
              <i className="bi bi-box-arrow-up-right text-[15px]" />
              {t.proj.deploy}
            </a>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
