import { CV_PATH } from "../data/site";
import { useTypewriter } from "../hooks/useTypewriter";
import { useLanguage } from "../i18n/useLanguage";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

const BUTTON_BASE =
  "group m-[5px] inline-flex cursor-pointer items-center gap-[8px] rounded-[10px] px-[18px] py-[10px] text-[18px] font-normal transition-all duration-500 hover:scale-105";
const BUTTON_PRIMARY = `${BUTTON_BASE} border-0 bg-brand text-black hover:shadow-[0_0_8px_#3CA6A6]`;
const BUTTON_SECONDARY = `${BUTTON_BASE} border border-brand/50 bg-transparent text-text hover:border-brand hover:bg-brand/10`;

export function Hero() {
  const { t } = useLanguage();
  const animatedText = useTypewriter(t.topo.animado);

  return (
    <section id="topo" className="scroll-mt-20 px-[5%] py-[180px] max-[855px]:pt-[50px]">
      <Container>
        <div className="flex items-center justify-center gap-[200px] max-[1050px]:gap-[50px] max-[855px]:flex-col-reverse max-[855px]:gap-[50px]">
          <div>
            <Reveal delay={0}>
              <h1 className="mb-[30px] text-[40px] leading-[35px] font-bold">
                <span className="leading-[35px] font-semibold">{t.topo.ola}</span>
                <span className="font-bold text-brand">.</span>
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative my-[15px] h-[1.5em] text-[20px]">
                <span className="relative z-[1]">{t.topo.estatico}</span>
                <span className="absolute top-0 left-[62px] w-[500px] overflow-hidden whitespace-nowrap">
                  {animatedText}
                  <span className="ml-[2px] inline-block animate-blink">|</span>
                </span>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <p className="my-[25px] text-[20px]">{t.topo.texto}</p>
            </Reveal>

            <Reveal delay={360}>
              <div className="max-[855px]:flex max-[855px]:justify-center">
                <a href={encodeURI(CV_PATH)} target="_blank" rel="noreferrer" download>
                  <button type="button" className={BUTTON_SECONDARY}>
                    <i className="bi bi-download" />
                    {t.topo.btnCv}
                  </button>
                </a>
                <a href="#contato">
                  <button type="button" className={BUTTON_PRIMARY}>
                    {t.topo.btnCtt}
                    <i className="bi bi-arrow-right transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal direction="right" delay={120}>
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-full bg-brand/20 blur-[60px]" />
              <img
                src="/assets/images/foto_retangular.png"
                alt=""
                className="h-[390px] w-[390px] animate-float rounded-[15px] border-r-[3px] border-b-[3px] border-brand object-cover max-[570px]:h-[300px] max-[570px]:w-[300px]"
              />

              <div className="absolute -right-4 -bottom-4 flex items-center gap-[8px] rounded-full border border-border bg-surface-1 px-[16px] py-[8px] text-[13px] font-semibold whitespace-nowrap text-text shadow-[0_10px_25px_var(--shadow-elevated)] backdrop-blur-[18px]">
                <span className="relative flex h-[8px] w-[8px] shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-[8px] w-[8px] rounded-full bg-green-500" />
                </span>
                {t.topo.status}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
