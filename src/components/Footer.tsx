import { EMAIL, socialLinks } from "../data/site";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

export function Footer() {
  return (
    <footer className="border-t border-t-[#3ba5a575] px-[5%] py-[40px]">
      <Container>
        <Reveal>
          <div className="flex justify-between max-[855px]:flex-col max-[855px]:items-center">
            <div>
              <img
                src="/assets/images/iniciais.png"
                alt=""
                className="h-[100px] w-[100px]"
              />
            </div>

            <div className="flex w-[100px] items-center justify-between">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <button
                    type="button"
                    className="cursor-pointer border-none bg-transparent transition-all duration-500 hover:scale-[1.08]"
                  >
                    <i
                      className={`bi ${social.icon} cursor-pointer text-[25px] text-icon-muted`}
                    />
                  </button>
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <div>
          <p className="flex items-center gap-[8px] max-[855px]:justify-center">
            <i className="bi bi-envelope-fill cursor-pointer text-[25px] text-icon-muted" />
            <a href={`mailto:${EMAIL}`} className="text-text">
              {EMAIL}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
