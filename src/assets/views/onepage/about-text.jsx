import { useEffect } from "react";
import { useLanguage } from "../../utils/langue.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  const { t } = useLanguage();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const escapeHtml = (str) =>
      String(str)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

    const wrapWordsInSpan = (element) => {
      if (!element) return;
      const text = element.textContent.trim();
      element.innerHTML = text
        .split(/\s+/)
        .map((w) => `<span class="word">${escapeHtml(w)}</span>`)
        .join(" ");
    };

    const aboutSection = document.querySelector(".section_about");
    const scrollIndicator = document.querySelector(".scroll");
    const paragraph = document.querySelector(".section_about .about-text");
    const pinHeight = document.querySelector(".section_about .pin-height");

    if (!aboutSection || !paragraph || !pinHeight) return;

    // fade du scroll indicator
    if (scrollIndicator) {
      gsap.to(scrollIndicator, {
        autoAlpha: 0,
        duration: 0.02,
        scrollTrigger: {
          trigger: aboutSection,
          start: "top top",
          end: "top top-=1",
          toggleActions: "play none reverse none",
        },
      });
    }

    // wrap des mots
    wrapWordsInSpan(paragraph);

    const words = document.querySelectorAll(".section_about .word");
    if (!words.length) return;

    // position initiale
    gsap.set(words, { x: 1800, opacity: 0 });

    // animation GSAP
    gsap.to(words, {
      x: 0,
      opacity: 1,
      stagger: 0.02,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: pinHeight,
        start: "top 70%",
        end: "bottom bottom",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [t]);

  return (
    <div
      data-section="about"
      className="section_about bg-black "
      data-theme="dark"
    >
      <div className="pin-height h-[300vh] w-full">
        <div className="container-global sticky top-0 h-screen w-full flex flex-col p-12 justify-center overflow-hidden gap-12">
          <div className="about-text text-xl lg:text-2xl xl:text-4xl font-bold text-primary font-syne max-w-full lg:max-w-2/3 text-start leading-tight">
            {t("about.text")}
          </div>
        </div>
      </div>
    </div>
  );
}
