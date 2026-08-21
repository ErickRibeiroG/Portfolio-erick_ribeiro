import { projects } from "../data/projects";
import { useLanguage } from "../i18n/useLanguage";
import { Container } from "./Container";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projetos" className="scroll-mt-20 px-[20px] py-[180px]">
      <Container maxWidth="max-w-[1400px]">
        <SectionHeading kicker={t.proj.kicker} title={t.proj.titulo} />

        <div className="flex flex-wrap items-center justify-center gap-[40px] max-[855px]:flex-col">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 100}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
