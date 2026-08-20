import { socialLinks } from "../data/site";
import { useLanguage } from "../i18n/useLanguage";
import { Container } from "./Container";
import { RichText } from "./RichText";

function LanguageBar({
  name,
  level,
  percent,
}: {
  name: string;
  level: string;
  percent: string;
}) {
  return (
    <div className="flex items-center gap-[10px]">
      <span className="w-[90px] text-right">{name}</span>
      <div className="h-[8px] w-[140px] flex-1 overflow-hidden rounded-[20px] bg-[#2e2e2e]">
        <div
          className="h-full rounded-[20px] bg-brand"
          style={{ width: percent }}
        />
      </div>
      <span className="w-[90px] text-left text-[14px] opacity-90">{level}</span>
    </div>
  );
}

export function About() {
  const { t } = useLanguage();

  return (
    <section id="sobre" className="scroll-mt-20 px-[5%] py-[180px]">
      <Container>
        <div className="flex items-center gap-[60px] max-[855px]:flex-col">
          <div>
            <div className="flex justify-center">
              <img
                src="/assets/images/foto_retangular.png"
                alt=""
                className="h-[300px] w-[300px] rounded-[10px] border-b-[3px] border-l-[3px] border-brand object-cover transition-all duration-500"
              />
            </div>

            <div className="mt-[50px] w-full max-w-[400px]">
              <h2 className="mb-[10px] text-center text-2xl font-bold">
                {t.sobre.idiomas}
              </h2>
              <LanguageBar
                name={t.sobre.pt}
                level={t.sobre.nativo}
                percent="100%"
              />
              <LanguageBar
                name={t.sobre.in}
                level={t.sobre.pro}
                percent="70%"
              />
            </div>
          </div>

          <div className="max-[855px]:text-center">
            <h1 className="mb-[30px] text-[40px] font-bold">{t.sobre.titulo}</h1>

            {[t.sobre.p1, t.sobre.p2, t.sobre.p3].map((paragraph, index) => (
              <p key={index} className="my-[20px] text-justify text-[20px]">
                <RichText text={paragraph} />
              </p>
            ))}

            <div className="mt-[30px]">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                >
                  <button
                    type="button"
                    className="mx-[5px] h-[55px] w-[55px] cursor-pointer rounded-[40%] border-none bg-brand text-[25px] text-black transition-all duration-500 hover:scale-105 hover:shadow-[0_0_8px_#3CA6A6]"
                  >
                    <i className={`bi ${social.icon}`} />
                  </button>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
