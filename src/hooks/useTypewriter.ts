import { useEffect, useState } from "react";

interface TypewriterOptions {
  typingSpeed?: number;
  deletingSpeed?: number;
  /** Pausa antes de começar a apagar a palavra completa. */
  pauseBeforeDelete?: number;
}

/**
 * Digita e apaga as palavras recebidas, em loop.
 * Trocar a lista (ex.: ao mudar de idioma) reinicia a animação.
 */
export function useTypewriter(
  words: readonly string[],
  {
    typingSpeed = 100,
    deletingSpeed = 70,
    pauseBeforeDelete = 1100,
  }: TypewriterOptions = {},
): string {
  const [wordIndex, setWordIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setWordIndex(0);
    setCharCount(0);
    setIsDeleting(false);
  }, [words]);

  const word = words[wordIndex] ?? "";

  useEffect(() => {
    if (!word) return;

    if (!isDeleting && charCount === word.length) {
      const timer = setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
      return () => clearTimeout(timer);
    }

    if (isDeleting && charCount === 0) {
      const timer = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
      }, typingSpeed);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(
      () => setCharCount((count) => count + (isDeleting ? -1 : 1)),
      isDeleting ? deletingSpeed : typingSpeed,
    );
    return () => clearTimeout(timer);
  }, [
    word,
    words,
    charCount,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseBeforeDelete,
  ]);

  return word.slice(0, charCount);
}
