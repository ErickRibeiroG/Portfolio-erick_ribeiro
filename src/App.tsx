import { About } from "./components/About";
import { BackToTop } from "./components/BackToTop";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { ScrollProgress } from "./components/ScrollProgress";
import { Skills } from "./components/Skills";
import { LanguageProvider } from "./i18n/LanguageProvider";

export default function App() {
  return (
    <LanguageProvider>
      <ScrollProgress />
      <Header />

      <main>
        <Hero />
        <Skills />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </LanguageProvider>
  );
}
