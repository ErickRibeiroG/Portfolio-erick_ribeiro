import { CV_PATH } from "../data/site";
import { useTypewriter } from "../hooks/useTypewriter";
import { useLanguage } from "../i18n/useLanguage";
import { Container } from "./Container";

const BUTTON =
  "m-[5px] cursor-pointer rounded-[10px] border-0 bg-brand px-[15px] py-[10px] text-[18px] font-normal text-black transition-all duration-500 hover:scale-105 hover:shadow-[0_0_8px_#3CA6A6]";

export function Hero() {
  const { t } = useLanguage();
  const animatedText = useTypewriter(t.topo.animado);

  return (
    <section id="topo" className="scroll-mt-20 px-[5%] py-[180px] max-[855px]:pt-[50px]">
      <Container>
        <div className="flex items-center justify-center gap-[200px] max-[1050px]:gap-[50px] max-[855px]:flex-col-reverse max-[855px]:gap-[50px]">
          <div>
            <h1 className="mb-[30px] text-[40px] leading-[35px] font-bold">
              <span className="leading-[35px] font-semibold">{t.topo.ola}</span>
              <span className="font-bold text-brand">.</span>
            </h1>

            <div className="relative my-[15px] h-[1.5em] text-[20px]">
              <span className="relative z-[1]">{t.topo.estatico}</span>
              <span className="absolute top-0 left-[62px] w-[500px] overflow-hidden whitespace-nowrap">
                {animatedText}
                <span className="ml-[2px] inline-block animate-blink">|</span>
              </span>
            </div>

            <p className="my-[25px] text-[20px]">{t.topo.texto}</p>

            <div className="max-[855px]:flex max-[855px]:justify-center">
              <a href={encodeURI(CV_PATH)} target="_blank" rel="noreferrer" download>
                <button type="button" className={BUTTON}>
                  {t.topo.btnCv}
                </button>
              </a>
              <a href="#contato">
                <button type="button" className={BUTTON}>
                  {t.topo.btnCtt}
                </button>
              </a>
            </div>
          </div>

          <div>
            <img
              src="/assets/images/foto_retangular.png"
              alt=""
              className="h-[390px] w-[390px] rounded-[15px] border-r-[3px] border-b-[3px] border-brand object-cover max-[570px]:h-[300px] max-[570px]:w-[300px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
