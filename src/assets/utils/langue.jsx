import { createContext, useContext, useState, useEffect } from "react";
import fr from "../lang/fr.json";
import en from "../lang/en.json";

const translations = { fr, en };
const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [currentLang, setCurrentLang] = useState("fr");

  // Fonction t()
  const t = (key) => {
    const keys = key.split(".");
    let result = translations[currentLang];
    for (const k of keys) {
      result = result?.[k];
    }
    return result ?? `[missing: ${key}]`;
  };

  // Détection & récupération localStorage
  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved) {
      setCurrentLang(saved);
      return;
    }

    const browserLang = navigator.language.startsWith("fr") ? "fr" : "en";
    setCurrentLang(browserLang);
  }, []);

  // Mise à jour des metas dynamiques
  useEffect(() => {
    // Mise à jour du <html lang="">
    document.documentElement.lang = currentLang;

    // Sauvegarde
    localStorage.setItem("lang", currentLang);

    // Récupération des textes depuis fr.json / en.json
    const meta = {
      title: t("meta.title"),
      description: t("meta.description"),
      ogTitle: t("meta.ogTitle"),
      ogDescription: t("meta.ogDescription"),
      keywords: t("meta.keywords"),
    };

    // Petite fonction utilitaire propre
    const setMeta = (selector, value) => {
      const tag = document.querySelector(selector);
      if (tag) tag.setAttribute("content", value);
    };

    // Title
    document.title = meta.title;

    // Meta description
    setMeta('meta[name="description"]', meta.description);

    // Keywords
    setMeta('meta[name="keywords"]', meta.keywords);

    // OG metas
    setMeta('meta[property="og:title"]', meta.ogTitle);
    setMeta('meta[property="og:description"]', meta.ogDescription);
  }, [currentLang]);

  return (
    <LanguageContext.Provider value={{ currentLang, setCurrentLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export default function Langue() {
  const { currentLang, setCurrentLang } = useLanguage();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const theme = entry.target.getAttribute("data-theme");
            setIsDark(theme !== "light");
          }
        });
      },
      { threshold: 0.3 },
    );

    const sections = document.querySelectorAll("[data-section]");
    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="langue flex flex-row fixed top-[3%] right-[79%] md:right-[78%] lg:right-1/2 xl:right-2/3 text-sm md:text-lg lg:text-2xl font-syne gap-[2px] md:gap-1 text-tertiary z-50"
      style={{
        color: isDark ? "#F0F0F0" : "#3d3d3d",
        transition: "color 0.4s ease",
      }}
    >
      <button
        className="relative langue-button px-1 h-fit md:h-auto"
        onClick={() => setCurrentLang("fr")}
      >
        {currentLang === "fr" && (
          <>
            <span className="absolute top-0 left-0 w-1 h-1 border-t border-l border-accent" />
            <span className="absolute top-0 right-0 w-1 h-1 border-t border-r border-accent" />
            <span className="absolute bottom-0 left-0 w-1 h-1 border-b border-l border-accent" />
            <span className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-accent" />
          </>
        )}
        <span className="link text-sm md:text-lg lg:text-2xl">
          <div className="uppercase">FR</div>
          <div className="uppercase">FR</div>
        </span>
      </button>

      <p className="langue-separator">/</p>

      <button
        className="relative langue-button px-1 h-fit md:h-auto"
        onClick={() => setCurrentLang("en")}
      >
        {currentLang === "en" && (
          <>
            <span className="absolute top-0 left-0 w-1 h-1 border-t border-l border-accent" />
            <span className="absolute top-0 right-0 w-1 h-1 border-t border-r border-accent" />
            <span className="absolute bottom-0 left-0 w-1 h-1 border-b border-l border-accent" />
            <span className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-accent" />
          </>
        )}
        <span className="link text-sm md:text-lg lg:text-2xl">
          <div className="uppercase">EN</div>
          <div className="uppercase">EN</div>
        </span>
      </button>
    </div>
  );
}
