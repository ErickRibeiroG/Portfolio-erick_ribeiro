import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import type { Project } from "../data/projects";
import { devicon } from "../data/tech";
import { useLanguage } from "../i18n/useLanguage";

const THIN_SCROLLBAR =
  "[scrollbar-width:thin] [scrollbar-color:rgba(180,180,180,0.28)_transparent]";

/** Duração da animação de saída (precisa bater com as classes duration-*). */
const EXIT_MS = 220;

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

interface ProjectModalProps {
  project: Project | null;
  /** Lista visível (já filtrada) — usada para navegar entre projetos. */
  projects?: Project[];
  onNavigate?: (project: Project) => void;
  onClose: () => void;
}

export function ProjectModal({
  project,
  projects = [],
  onNavigate,
  onClose,
}: ProjectModalProps) {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [zoomed, setZoomed] = useState(false);

  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);

  const index = project ? projects.findIndex((p) => p.id === project.id) : -1;
  const canNavigate = !!onNavigate && projects.length > 1 && index !== -1;

  const requestClose = useCallback(() => {
    setVisible(false);
    setZoomed(false);
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(onClose, EXIT_MS);
  }, [onClose]);

  const go = useCallback(
    (dir: 1 | -1) => {
      if (!canNavigate) return;
      const next = projects[(index + dir + projects.length) % projects.length];
      if (!next) return;
      setZoomed(false);
      onNavigate?.(next);
    },
    [canNavigate, index, projects, onNavigate]
  );

  // Abertura: anima entrada, trava scroll do body e guarda o foco anterior
  const isOpen = !!project;
  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow, paddingRight } = document.body.style;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;

    const raf = requestAnimationFrame(() => {
      setVisible(true);
      closeBtnRef.current?.focus({ preventScroll: true });
    });

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(closeTimer.current);
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
      previouslyFocused?.focus?.({ preventScroll: true });
    };
  }, [isOpen]);

  // Ao trocar de projeto, volta o conteúdo para o topo
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [project?.id]);

  // Teclado: Esc fecha (imagem ampliada primeiro), setas navegam, Tab fica preso no modal
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        if (zoomed) setZoomed(false);
        else requestClose();
        return;
      }
      if (event.key === "ArrowRight") return go(1);
      if (event.key === "ArrowLeft") return go(-1);

      if (event.key === "Tab" && dialogRef.current) {
        const items = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)
        ).filter((el) => el.offsetParent !== null);
        const first = items[0];
        const last = items[items.length - 1];
        if (!first || !last) return;
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, zoomed, go, requestClose]);

  if (!project) return null;

  return createPortal(
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) requestClose();
      }}
      className={`fixed inset-0 z-[99999] flex items-end justify-center bg-black/75 backdrop-blur-md transition-opacity duration-200 ease-out sm:items-center sm:p-[24px] ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Setas laterais (desktop) */}
      {canNavigate && (
        <>
          <NavArrow dir="prev" label={t.proj.anterior} onClick={() => go(-1)} />
          <NavArrow dir="next" label={t.proj.proximo} onClick={() => go(1)} />
        </>
      )}

      <div
        className={`relative flex max-h-[92dvh] w-full max-w-[1040px] flex-col overflow-hidden rounded-t-[24px] border border-border bg-bg shadow-[0_30px_80px_rgba(0,0,0,0.6),inset_0_1px_0_var(--shadow-highlight)] transition-[opacity,translate,scale] duration-200 ease-out sm:max-h-[88vh] sm:rounded-[24px] ${
          visible
            ? "translate-y-0 opacity-100 sm:scale-100"
            : "translate-y-[40px] opacity-0 sm:translate-y-[12px] sm:scale-[0.97]"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Brilho sutil de fundo, mesma linguagem visual dos cards */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-linear-to-b from-surface-1 to-surface-2"
        />

        {/* "Alça" do bottom-sheet no mobile */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-[8px] z-20 h-[4px] w-[40px] -translate-x-1/2 rounded-full bg-white/50 sm:hidden"
        />

        <button
          ref={closeBtnRef}
          type="button"
          onClick={requestClose}
          aria-label={t.proj.fecharModal}
          title={`${t.proj.fecharModal} (Esc)`}
          className="absolute right-[14px] top-[14px] z-30 flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-full border border-white/30 bg-black/60 text-white shadow-[0_4px_12px_rgba(0,0,0,0.3)] backdrop-blur-[8px] transition-all duration-300 hover:rotate-90 hover:border-red-500/60 hover:text-red-400 focus-visible:outline-2 focus-visible:outline-brand"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Área rolável: imagem + conteúdo */}
        <div
          ref={scrollRef}
          className={`relative flex-1 overflow-y-auto overscroll-contain ${THIN_SCROLLBAR}`}
        >
          <div key={project.id} className="animate-modal-content">
            {/* Preview do projeto: passa o mouse para "rolar" o print, clique para ampliar */}
            <button
              type="button"
              onClick={() => setZoomed(true)}
              aria-label={`${t.proj.ampliarImagem} - ${project.title}`}
              className="group/img relative block aspect-[16/9] max-h-[440px] w-full cursor-zoom-in overflow-hidden bg-cover bg-top transition-[background-position] duration-[5000ms] ease-in-out hover:bg-bottom sm:aspect-[21/9]"
              style={{ backgroundImage: `url("${project.image}")` }}
            >
              <span className="absolute inset-0 bg-linear-to-t from-bg via-transparent to-black/30" />

              <span className="absolute bottom-[16px] right-[16px] flex items-center gap-[6px] rounded-full border border-white/25 bg-black/60 px-[12px] py-[6px] text-[12px] font-medium text-white opacity-0 backdrop-blur-[6px] transition-opacity duration-300 group-hover/img:opacity-100 group-focus-visible/img:opacity-100">
                <i className="bi bi-arrows-fullscreen text-[12px]" aria-hidden="true" />
                {t.proj.ampliarImagem}
              </span>
            </button>

            <div className="relative px-[20px] pb-[28px] sm:px-[36px]">
              {/* Cabeçalho */}
              <header className="-mt-[8px] mb-[28px]">
                <div className="mb-[10px] flex flex-wrap items-center gap-[6px]">
                  {project.desenvolvimento && (
                    <StatusBadge emDev label={t.proj.emDesenvolvimento} />
                  )}
                  {project.type.map((tKey) => (
                    <span
                      key={tKey}
                      className="rounded-full border border-brand/30 bg-brand/10 px-[10px] py-[3px] text-[12px] font-medium text-brand"
                    >
                      {t.proj.filtros[tKey]}
                    </span>
                  ))}
                </div>
                <h2
                  id="modal-project-title"
                  className="text-[28px] font-bold leading-tight tracking-tight sm:text-[36px]"
                >
                  {project.title}
                </h2>
              </header>

              <div className="grid gap-[32px] md:grid-cols-[minmax(0,1fr)_300px]">
                {/* Descrição */}
                <section>
                  <SectionTitle>{t.proj.sobreProjeto}</SectionTitle>
                  <p className="text-[15px] font-light leading-[1.8] text-text/90 sm:text-[16px]">
                    {project.description}
                  </p>
                </section>

                {/* Lateral: tecnologias + links */}
                <aside className="flex flex-col gap-[24px] md:border-l md:border-border md:pl-[28px]">
                  <section>
                    <SectionTitle>{t.proj.tecnologias}</SectionTitle>
                    <ul className="flex flex-wrap gap-[8px]">
                      {project.techs.map((tech) => (
                        <li
                          key={tech.name}
                          className="flex h-[32px] items-center gap-[7px] rounded-[8px] border border-brand/25 bg-brand/10 px-[11px] text-[13px] font-medium text-text"
                        >
                          <img src={devicon(tech.icon)} alt="" aria-hidden="true" className="h-[18px] w-[18px]" />
                          {tech.name}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <div className="flex flex-col gap-[10px] max-md:hidden">
                    <ProjectLinks project={project} codeLabel={t.proj.code} deployLabel={t.proj.deploy} />
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé: links (mobile) + navegação */}
        <footer className="relative flex items-center gap-[10px] border-t border-border bg-surface-2/80 px-[16px] py-[12px] backdrop-blur-md sm:px-[24px]">
          <div className="flex flex-1 flex-wrap gap-[8px] md:hidden">
            <ProjectLinks project={project} codeLabel={t.proj.code} deployLabel={t.proj.deploy} compact />
          </div>

          {canNavigate && (
            <>
              <span className="hidden flex-1 text-[12px] text-muted md:block">
                {t.proj.atalhos} · Esc
              </span>
              <div className="flex items-center gap-[6px]">
                <FooterNavButton dir="prev" label={t.proj.anterior} onClick={() => go(-1)} />
                <span className="min-w-[44px] text-center text-[13px] font-medium tabular-nums text-muted" aria-live="polite">
                  {index + 1} / {projects.length}
                </span>
                <FooterNavButton dir="next" label={t.proj.proximo} onClick={() => go(1)} />
              </div>
            </>
          )}
        </footer>
      </div>

      {/* Imagem ampliada */}
      {zoomed && (
        <div
          role="presentation"
          onClick={(e) => {
            e.stopPropagation();
            setZoomed(false);
          }}
          className={`animate-modal-content fixed inset-0 z-40 flex cursor-zoom-out justify-center overflow-y-auto bg-black/90 p-[16px] backdrop-blur-sm sm:p-[40px] ${THIN_SCROLLBAR}`}
        >
          <button
            type="button"
            autoFocus
            onClick={(e) => {
              e.stopPropagation();
              setZoomed(false);
            }}
            aria-label={t.proj.fecharImagem}
            className="fixed right-[16px] top-[16px] z-10 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border border-white/30 bg-black/60 text-white backdrop-blur-[8px] transition-colors hover:text-red-400"
          >
            <i className="bi bi-x-lg text-[16px]" aria-hidden="true" />
          </button>
          <img
            src={project.image}
            alt={project.title}
            className="my-auto h-auto w-full max-w-[1400px] rounded-[12px] shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
          />
        </div>
      )}
    </div>,
    document.body
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-[12px] flex items-center gap-[8px] text-[12px] font-semibold uppercase tracking-[0.12em] text-brand">
      <span className="h-[2px] w-[16px] rounded-full bg-brand" aria-hidden="true" />
      {children}
    </h3>
  );
}

function StatusBadge({ emDev, label }: { emDev: boolean; label: string }) {
  return (
    <span
      className={`inline-flex items-center gap-[6px] rounded-full border px-[10px] py-[3px] text-[12px] font-semibold ${
        emDev
          ? "border-amber-500/40 bg-amber-500/10 text-amber-600 dark:text-amber-400"
          : "border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
      }`}
    >
      <span
        aria-hidden="true"
        className={`h-[6px] w-[6px] rounded-full ${emDev ? "animate-pulse bg-amber-500" : "bg-emerald-500"}`}
      />
      {label}
    </span>
  );
}

function ProjectLinks({
  project,
  codeLabel,
  deployLabel,
  compact = false,
}: {
  project: Project;
  codeLabel: string;
  deployLabel: string;
  compact?: boolean;
}) {
  const base =
    "inline-flex cursor-pointer items-center justify-center gap-[8px] rounded-full text-[14px] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";
  const size = compact ? "px-[16px] py-[8px]" : "w-full px-[18px] py-[10px]";

  return (
    <>
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className={`${base} ${size} bg-brand font-semibold text-white shadow-[0_4px_14px_rgba(60,166,166,0.35)] hover:-translate-y-[1px] hover:bg-brand-alt hover:shadow-[0_6px_20px_rgba(60,166,166,0.5)]`}
        >
          <i className="bi bi-box-arrow-up-right text-[15px]" aria-hidden="true" />
          {deployLabel}
        </a>
      )}
      <a
        href={project.repo}
        target="_blank"
        rel="noreferrer"
        className={`${base} ${size} border font-medium ${
          project.demo
            ? "border-border bg-surface-1 text-text hover:border-brand/40 hover:bg-brand/10 hover:text-brand"
            : "border-brand bg-brand font-semibold text-white hover:bg-brand-alt"
        }`}
      >
        <i className="bi bi-github text-[16px]" aria-hidden="true" />
        {codeLabel}
      </a>
    </>
  );
}

function Chevron({ dir }: { dir: "prev" | "next" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points={dir === "prev" ? "15 18 9 12 15 6" : "9 18 15 12 9 6"} />
    </svg>
  );
}

function NavArrow({ dir, label, onClick }: { dir: "prev" | "next"; label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      aria-label={label}
      title={label}
      className={`fixed top-1/2 z-10 hidden h-[48px] w-[48px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-black/50 text-white backdrop-blur-[8px] transition-all duration-300 hover:scale-110 hover:border-brand hover:bg-brand min-[1200px]:flex ${
        dir === "prev" ? "left-[24px]" : "right-[24px]"
      }`}
    >
      <Chevron dir={dir} />
    </button>
  );
}

function FooterNavButton({ dir, label, onClick }: { dir: "prev" | "next"; label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className="flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-full border border-border bg-surface-1 text-text transition-all duration-300 hover:border-brand/50 hover:bg-brand/10 hover:text-brand focus-visible:outline-2 focus-visible:outline-brand"
    >
      <Chevron dir={dir} />
    </button>
  );
}
