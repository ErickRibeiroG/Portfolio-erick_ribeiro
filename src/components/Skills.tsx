import { techGroups } from "../data/tech";
import { useLanguage } from "../i18n/useLanguage";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { TechCard } from "./TechCard";

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="habilidades" className="scroll-mt-20 px-[5%] py-[130px]">
      <Container>
        <SectionHeading kicker={t.hab.kicker} title={t.hab.titulo} />

        <div
          aria-label={t.aria.tecnologias}
          className="mx-auto grid max-w-[900px] grid-cols-2 gap-x-[28px] gap-y-[38px] max-[600px]:grid-cols-1 max-[600px]:gap-[30px]"
        >
          {techGroups.map((group, index) => (
            <Reveal key={group.key} delay={index * 80} className="min-w-0">
              <section>
                <div className="mb-[14px]">
                  <h2 className="mb-[4px] text-[1.1rem] text-text">
                    {t.hab.grid[group.key].titulo}
                  </h2>
                  <p className="text-[0.85rem] text-muted">
                    {t.hab.grid[group.key].subtitulo}
                  </p>
                </div>

                <div className="grid grid-cols-[repeat(auto-fit,minmax(82px,1fr))] gap-[10px]">
                  {group.techs.map((tech) => (
                    <TechCard key={tech.name} tech={tech} />
                  ))}
                </div>
              </section>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
