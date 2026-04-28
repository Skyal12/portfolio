import { useLanguage } from "./langue.jsx";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full xl:w-2/3 h-1/2 bg-black rounded-se-3xl flex flex-col items-start justify-between px-12 py-8 border-t border-secondary mt-auto">
      <div className="footer-info flex flex-col lg:flex-row gap-12">
        {/* Contact */}
        <div className="flex flex-col w-full xl:w-1/3">
          <h3 className="text-xl font-ibm text-white mb-6">
            {t("footer.contact")}
          </h3>
          <div className="flex flex-col gap-2">
            <a
              href="mailto:alexis.salmon.ss@gmail.com"
              className="link underline font-syne text-sm md:text-lg lg:text-xl text-primary"
            >
              <div>alexis.salmon.ss@gmail.com</div>
              <div>alexis.salmon.ss@gmail.com</div>
            </a>
            <a
              href="tel:0624440892"
              className="link underline font-syne text-sm md:text-lg lg:text-xl text-primary"
            >
              <div>06 24 44 08 92</div>
              <div>06 24 44 08 92</div>
            </a>
          </div>
        </div>
        {/* navigation */}
        <div className="flex flex-col w-full xl:w-1/3">
          <h3 className="text-xl font-ibm text-white mb-6">
            {t("footer.nav")}
          </h3>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-4">
              <a
                href="#hero"
                className="link underline font-syne text-sm md:text-lg lg:text-xl text-primary"
              >
                <div className="relative">{t("footer.home")}</div>
                <div className="relative">{t("footer.home")}</div>
              </a>
              <a
                href="#about"
                className="link underline w-full font-syne text-sm md:text-lg lg:text-xl text-primary"
              >
                <div className="relative">{t("footer.about")}</div>
                <div className="relative">{t("footer.about")}</div>
              </a>
            </div>
            <div className="flex flex-row gap-4">
              <a
                href="#projects"
                className="link underline font-syne text-sm md:text-lg lg:text-xl text-primary"
              >
                <div className="relative">{t("footer.projects")}</div>
                <div className="relative">{t("footer.projects")}</div>
              </a>
              <a
                href="#stack"
                className="link underline font-syne text-sm md:text-lg lg:text-xl text-primary"
              >
                <div className="relative">{t("footer.competences")}</div>
                <div className="relative">{t("footer.competences")}</div>
              </a>
            </div>
          </div>
        </div>
        {/* note */}
        <div className="flex flex-col w-full xl:w-1/3">
          <h3 className="text-xl font-ibm text-white mb-6">
            {t("footer.note")}
          </h3>
          <p className="font-syne text-sm md:text-lg lg:text-xl text-primary">
            {t("footer.noteText")}
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center w-full mt-12">
        <a
          href="#"
          className="font-syne w-3/5 md:w-auto font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-accent"
        >
          Salmon Alexis
        </a>
        <p className="font-ibm text-sm text-primary">&copy; 2026</p>
      </div>
    </footer>
  );
}
