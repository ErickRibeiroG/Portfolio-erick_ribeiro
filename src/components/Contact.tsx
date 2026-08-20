import { EMAIL, SOCIALS } from "../data/site";
import { useLanguage } from "../i18n/useLanguage";
import { Container } from "./Container";
import { ContactForm } from "./ContactForm";

const ICON_LINK =
  "text-white transition-all duration-[400ms] hover:scale-[1.09]";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contato" className="scroll-mt-20 px-[5%] py-[180px]">
      <Container>
        <h1 className="mb-[30px] text-center text-[40px] font-bold">
          {t.cntt.titulo}
        </h1>

        <div className="flex items-center justify-center max-[855px]:flex-col">
          <ContactForm />

          <div className="flex h-[500px] w-[600px] flex-col items-center rounded-br-[30px] bg-linear-to-b from-white/30 to-white/12 backdrop-blur-[14px] max-[1035px]:px-[5%] max-[1035px]:text-center max-[665px]:w-[350px] max-[665px]:px-[10%]">
            <div className="flex flex-1 flex-col items-center justify-center text-center">
              <p className="mb-[12px] text-left max-[665px]:text-center">
                {t.cntt.p1}
              </p>

              <div className="flex items-center gap-[20px]">
                <p className="text-left">{t.cntt.p2}</p>
                <a
                  href={SOCIALS.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className={ICON_LINK}
                >
                  <i className="bi bi-whatsapp cursor-pointer text-[35px]" />
                </a>
                <a
                  href={SOCIALS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className={ICON_LINK}
                >
                  <i className="bi bi-linkedin cursor-pointer text-[35px]" />
                </a>
                <a
                  href={SOCIALS.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className={ICON_LINK}
                >
                  <i className="bi bi-instagram cursor-pointer text-[35px]" />
                </a>
              </div>

              <div className="flex items-center gap-[20px]">
                <p className="text-left">{t.cntt.p3}</p>
                <a
                  href={`mailto:${EMAIL}`}
                  aria-label={EMAIL}
                  className={ICON_LINK}
                >
                  <i className="bi bi-envelope-fill cursor-pointer text-[35px]" />
                </a>
              </div>
            </div>

            <div className="pb-[25px]">
              <h3 className="text-[1.17em] font-bold">{t.cntt.outros}</h3>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
