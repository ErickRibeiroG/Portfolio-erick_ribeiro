import { useMemo, useState } from "react";
import { projects } from "../data/projects";
import { useLanguage } from "../i18n/useLanguage";
import { Container } from "./Container";
import { ProjectCard } from "./ProjectCard";
import { ProjectFilter, type FilterValue } from "./ProjectFilter";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");

  const counts = useMemo<Record<FilterValue, number>>(() => {
    const res: Record<FilterValue, number> = {
      all: projects.length,
      web: 0,
      backend: 0,
      "data-analysis": 0,
    };
    for (const p of projects) {
      for (const typ of p.type) {
        if (typ in res) {
          res[typ]++;
        }
      }
    }
    return res;
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((project) => project.type.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="projetos" className="scroll-mt-20 px-[20px] py-[180px]">
      <Container maxWidth="max-w-[1400px]">
        <SectionHeading kicker={t.proj.kicker} title={t.proj.titulo} className="!mb-[45px]" />

        <ProjectFilter
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          counts={counts}
        />

        {filteredProjects.length > 0 ? (
          <div className="flex flex-wrap items-center justify-center gap-[40px] max-[855px]:flex-col">
            {filteredProjects.map((project, index) => (
              <Reveal key={`${activeFilter}-${project.id}`} delay={index * 100}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mx-auto flex max-w-[450px] flex-col items-center justify-center rounded-[20px] border border-border bg-surface-1/60 p-[32px] text-center backdrop-blur-[12px]">
            <p className="text-[16px] text-muted">{t.proj.filtros.semProjetos}</p>
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className="mt-[16px] inline-flex cursor-pointer items-center rounded-full bg-brand px-[20px] py-[8px] text-[14px] font-semibold text-white shadow-md transition-transform duration-300 hover:scale-105"
            >
              {t.proj.filtros.limparFiltro}
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}

