import { projects } from "../data/projects";
import { useLanguage } from "../i18n/useLanguage";
import { Container } from "./Container";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projetos" className="scroll-mt-20 px-[20px] py-[180px]">
      <Container maxWidth="max-w-[1400px]">
        <h1 className="mb-[50px] text-center text-[40px] font-bold">
          {t.proj.titulo}
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-[40px] max-[855px]:flex-col">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
