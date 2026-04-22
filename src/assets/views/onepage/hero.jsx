import NavBar from "../../utils/navBar";
import { useEffect, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import { useLanguage } from "../../utils/langue.jsx";
import { motion } from "framer-motion";

export default function Hero() {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const navTop = useTransform(scrollY, [0, 300], ["35%", "3%"]);
  const navPosition = useTransform(scrollY, [299, 300], ["absolute", "fixed"]);

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
    <section
      id="hero"
      data-theme="light"
      data-section="hero"
      className="h-screen w-screen relative overflow-hidden"
    >
      {/* NAVBAR animée */}
      <motion.div
        className="absolute grid grid-cols-5 xl:grid-cols-6 w-full h-auto px-4 lg:px-12 z-50"
        style={{
          top: navTop,
          position: navPosition,
        }}
      >
        {/* TEXTE */}
        <h3
          className="hidden lg:block col-span-0 lg:col-span-2 text-xl font-imb w-full text-left font-syne"
          style={{
            color: isDark ? "#F0F0F0" : "#3d3d3d",
            transition: "color 0.4s ease",
          }}
        >
          {t("hero.available")}
        </h3>
        <div className="col-span-4 lg:col-span-3 col-start-2 lg:col-start-4 flex flex-row justify-end">
          <NavBar />
        </div>
      </motion.div>

      {/* CONTENU HERO */}
      <div className="grid grid-cols-1 lg:grid-cols-5 h-auto mt-16 mx-12 lg:mx-12 lg:mb-52 w-full">
        <div className="lg:col-start-1 lg:col-span-1 flex flex-col gap-4">
          <ul className="flex flex-col list-none text-sm lg:text-md font-imb text-tertiary gap-1">
            <li>{t("hero.work")}</li>
            <li>{t("hero.disponible")}</li>
            <li>{t("hero.where")}</li>
          </ul>
          <a
            href="#contact"
            className="link underline font-imb font-medium text-xl"
            style={{ width: "fit-content" }}
          >
            <div className="uppercase">{t("hero.contact")} </div>
            <div className="uppercase">{t("hero.contact")}</div>
          </a>
        </div>
      </div>

      {/* HR */}
      <hr className="w-full border-none h-[2px] bg-secondary my-8" />

      {/* TITRE */}
      <div className="grid grid-cols-1 xl:grid-cols-3 px-12 mb-80">
        <h1 className="col-start-2 col-span-2 text-right text-3xl md:text-4xl lg:text-6xl pr-12 text-accent font-extrabold font-syne">
          Salmon Alexis
        </h1>
      </div>

      {/* SCROLL */}
      <div className="grid place-items-center pt-12 pb-12">
        <h3 className="animate-bounce text-xl font-imb text-secondary">
          [ Scroll ]
        </h3>
      </div>
      <div data-section="hero" className="h-4" data-theme="light"></div>
    </section>
  );
}
