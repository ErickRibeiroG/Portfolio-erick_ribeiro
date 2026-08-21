import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS } from "../data/site";
import { useLanguage } from "../i18n/useLanguage";

const FIELD =
  "w-full rounded-[10px] border-none bg-linear-to-b from-input-1 to-input-2 px-[25px] py-[15px] text-[18px] text-text outline-none placeholder:text-muted transition-shadow duration-300 focus:shadow-[0_0_0_2px_var(--color-brand)]";

export function ContactForm() {
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!sent) return;

    const timer = setTimeout(() => setSent(false), 3000);
    return () => clearTimeout(timer);
  }, [sent]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = formRef.current;
    if (!form || sending) return;

    setSending(true);
    try {
      await emailjs.sendForm(EMAILJS.serviceId, EMAILJS.templateId, form, {
        publicKey: EMAILJS.publicKey,
      });
      form.reset();
      setSent(true);
    } catch (error) {
      console.error(error);
      alert(t.cntt.erroEnvio);
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="relative flex h-[500px] w-[600px] flex-col items-center justify-center rounded-tl-[30px] bg-linear-to-b from-surface-1 to-surface-2 shadow-[0_20px_50px_var(--shadow-elevated)] backdrop-blur-[18px] max-[665px]:w-[350px]">
      <h3 className="mb-[25px] text-[1.17em] font-bold">{t.cntt.h3form}</h3>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mx-auto flex w-[70%] flex-col justify-center gap-[10px]"
      >
        <input type="text" name="nome" placeholder={t.cntt.nome} className={FIELD} />
        <input
          type="text"
          name="email"
          placeholder={t.cntt.email}
          className={FIELD}
        />
        <textarea
          name="mensagem"
          placeholder={t.cntt.msg}
          required
          className={`${FIELD} h-[200px] resize-none`}
        />

        <button
          type="submit"
          disabled={sending}
          className={`mt-[15px] flex h-[50px] w-[110px] cursor-pointer items-center justify-center self-center rounded-[10px] border-none bg-brand-alt transition-all duration-500 hover:scale-105 hover:shadow-[0_0_8px_#3CA6A6] ${
            sending ? "cursor-not-allowed opacity-70" : ""
          }`}
        >
          {sending ? (
            <span className="h-[25px] w-[25px] animate-spin rounded-full border-[3px] border-transparent border-t-white" />
          ) : (
            <span className="text-[18px] font-normal text-black">
              {t.cntt.enviar}
            </span>
          )}
        </button>
      </form>

      <div
        className={`absolute inset-0 flex items-center justify-center rounded-tl-[30px] bg-overlay backdrop-blur-[10px] transition-opacity duration-700 ${
          sent ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="rounded-[12px] bg-[#20c464] p-[30px] text-center">
          <h3 className="text-[1.17em] font-bold">{t.cntt.mensEnv}</h3>
          <p>{t.cntt.obg}</p>
        </div>
      </div>
    </div>
  );
}
