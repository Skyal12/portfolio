import { useState, useEffect } from "react";
import chevron from "../../img/chevron.png";
import { useLanguage } from "../../utils/langue.jsx";
import { motion } from "framer-motion";

export default function Projects({
  activeProject,
  setActiveProject,
  projects,
}) {
  const [active, setActive] = useState(true);
  const projectList = projects;
  const [index, setIndex] = useState(0);

  const { t } = useLanguage();

  const VISIBLE = 3;
  const DRAG_BUFFER = 50;

  const SPRING_OPTIONS = {
    type: "spring",
    mass: 3,
    stiffness: 400,
    damping: 50,
  };

  const goNext = (e) => {
    e.stopPropagation();
    if (index < projectList.length - VISIBLE) {
      setIndex((prev) => prev + 1);
    }
  };

  const goPrev = (e) => {
    e.stopPropagation();
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  // Ouvre / ferme l'accordéon
  const toggleAccordion = () => {
    setActive((prev) => !prev);
  };

  // Ferme l'accordéon si on clique sur le bouton
  const handleButtonClick = (e) => {
    e.stopPropagation();
    toggleAccordion();
  };

  const handleCloseOverlay = () => {
    setActiveProject(null);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.classList.contains("overlay")) {
        handleCloseOverlay();
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [activeProject]);

  const isMobile = windowWidth <= 640;

  return (
    <section
      id="projects"
      data-section="projects"
      className="h-auto md:h-[230vh] lg:h-[250vh] xl:h-[270vh] flex flex-col bg-primary relative "
      data-theme="light"
    >
      <div className="projects-text w-full px-4 md:px-20 py-12 flex flex-col md:flex-row items-start md:justify-between px-12 py-6 mb-20">
        <div className="block md:hidden projects-title  flex w-full h-auto flex-col gap-4 jusify-end items-end md:text-right ">
          <h3 className="text-3xl font-imb text-secondary mb-12">
            {t("projects.title1")}
          </h3>
        </div>
        <div className="projects-description md:full md:w-2/3 lg:w-1/4 h-auto md:h-[125vh] flex flex-col gap-6 md:gap-12 justify-end">
          <p className="font-imb text-tertiary mb-2 flex flex-col gap-6">
            <span className="font-syne lg:w-[200%] text-4xl lg:text-5xl xl:text-6xl font-extrabold text-tertiary mb-4">
              {t("projects.approach")}
            </span>
            <span className="font-ibm text-xs md:text-sm lg:text-md text-tertiary">
              1.0
            </span>
            <span className="font-syne md:text-lg lg:text-xl xl:text-xl text-tertiary mb-4">
              {t("projects.approachText1")}
            </span>
            <span className="font-ibm text-xs md:text-sm lg:text-md text-tertiary">
              2.0
            </span>
            <span className="font-syne text-xl text-tertiary mb-4">
              {t("projects.approachText2")}
            </span>
            <span className="font-ibm text-xs md:text-sm lg:text-md text-tertiary">
              3.0
            </span>
            <span className="font-syne text-xl text-tertiary">
              {t("projects.approachText3")}
            </span>
          </p>
          <button className="text-right md:text-left lg:text-right">
            <a
              href="#contact"
              className="link underline font-imb font-medium text-xl"
              style={{ width: "fit-content" }}
            >
              <div className="uppercase">{t("projects.contact")}</div>
              <div className="uppercase">{t("projects.contact")}</div>
            </a>
          </button>
        </div>
        <div className="hidden md:block projects-title sticky top-40 flex w-full h-[40vh] flex-col gap-4 jusify-end items-end md:text-right ">
          <h3 className="text-3xl lg:text-4xl xl:text-5xl font-imb text-secondary mb-12">
            {t("projects.title1")}
          </h3>
        </div>
      </div>

      <div className="project-container flex flex-col w-full h-auto px-4 md:px-20 py-12 ">
        <div className="project-title-container grid grid-cols-2 gap-6 w-full mb-20">
          <div className="projects-title col-start-1 md:col-start-2 flex flex-col text-right">
            <h3 className="text-5xl md:text-9xl font-syne font-extrabold w-full text-secondary ">
              '26
            </h3>
            <h3 className=" text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-syne font-extrabold w-full text-secondary">
              {t("projects.title2")}
            </h3>
          </div>
        </div>

        <div className="project-accordion">
          {/* title global */}
          <div className="project-accordion-title grid grid grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-6 mb-6">
            <div className="item-title col-start-1">
              <h4 className="font-imb text-sm md:text-md lg:text-lg xl:text-xl">
                {t("projects.flow")}
              </h4>
            </div>
            <div className="item-title col-start-2">
              <h4 className="font-imb text-sm md:text-md lg:text-lg xl:text-xl">
                {t("projects.date")}
              </h4>
            </div>
            <div className="item-title col-start-4">
              <h4 className="font-imb text-sm md:text-md lg:text-lg xl:text-xl">
                {t("projects.title2")}
              </h4>
            </div>
          </div>
          <div
            className="project-accordion-items"
            onClick={() => setActive(false)}
          >
            {/* items global */}
            <hr />
            <div
              className="project-accordion-items-title grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-6 mt-4 mb-2"
              onClick={handleButtonClick}
              data-cursor-hover
            >
              <div className="item-title col-start-1">
                <h4 className="font-imb text-[10px] md:text-sm lg:text-md xl:text-lg">
                  {t("projects.flow1")}
                </h4>
              </div>
              <div className="item-title col-start-2 col-span-2">
                <h4 className="font-imb text-[10px] md:text-sm lg:text-md xl:text-lg">
                  {t("projects.Date1")}
                </h4>
              </div>
              <div className="item-title col-start-4">
                <h4 className="font-imb text-[10px] md:text-sm lg:text-md xl:text-lg">
                  [ {projectList.length} ]
                </h4>
              </div>
              <button
                className={`item-title col-start-5 w-fit justify-self-end pr-2 transition-all duration-300 ${active ? "active" : ""}`}
                id="toggle"
                onClick={handleButtonClick}
                aria-expanded={active}
                aria-label={
                  active
                    ? "Fermer la liste des projets"
                    : "Ouvrir la liste des projets"
                }
                type="button"
              >
                <div className="hamburger-line h-[1px] w-4 bg-tertiary rotate-90" />
                <div className="hamburger-line h-[1px] w-4 bg-tertiary" />
              </button>
            </div>

            <div
              className={`project-accordion-items-content mb-2  ${active ? "active" : ""}`}
            >
              <div className="project-container flex flex-col gap-4 w-full">
                {/* carrousel */}
                <motion.div
                  animate={{ translateX: `-${index * (100 / VISIBLE)}%` }}
                  transition={SPRING_OPTIONS}
                  className={`project-carrousel flex flex-col md:flex-row w-full`}
                >
                  {projectList.map((project, idx) => (
                    <motion.div
                      key={project.id}
                      className="w-full md:w-1/3 shrink-0"
                      animate={{
                        scale: isMobile ? 0.9 : index === idx ? 0.9 : 0.9,
                      }}
                      transition={SPRING_OPTIONS}
                    >
                      <div
                        className="relative group h-64 w-full cursor-pointer overflow-hidden"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveProject(project.id);
                        }}
                      >
                        {/* IMAGE BACKGROUND */}
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-all duration-300 group-hover:blur-sm group-hover:brightness-75"
                          style={{ backgroundImage: `url(${project.image})` }}
                        />

                        {/* TEXTE QUI APPARAÎT AU HOVER */}
                        <div className="absolute inset-0 flex flex-col justify-center items-center p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <h4 className="text-xl font-bold text-white drop-shadow-lg">
                            {project.title}
                          </h4>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* button */}
                <div className="hidden md:flex project-carrousel-button w-full flex flex-row gap-2 items-center justify-center">
                  {/* gauche */}
                  <div className="relative flex justify-end w-20 overflow-visible">
                    <button
                      onClick={goPrev}
                      className="px-4 py-2 w-12 h-16 flex items-center justify-center overflow-hidden 
                       text-primary border border-tertiary 
                       hover:w-16 transition-all duration-300"
                    >
                      <img
                        loading="lazy"
                        src={chevron}
                        alt="left"
                        className="w-4 h-4 object-contain pointer-events-none rotate-180"
                      />
                    </button>
                  </div>

                  {/* droite */}
                  <div className="relative flex justify-start w-20 overflow-visible">
                    <button
                      onClick={goNext}
                      className="px-4 py-2 w-12 h-16 flex items-center justify-center overflow-hidden 
                       text-primary border border-tertiary 
                       hover:w-16 transition-all duration-300"
                    >
                      <img
                        loading="lazy"
                        src={chevron}
                        alt="right"
                        className="w-4 h-4 object-contain pointer-events-none"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="projet-contact grid grid-cols-2 xl:grid-cols-5 justify-end gap-6 mt-4 mb-2">
              <a
                href="#contact"
                className="col-start-2 xl:col-start-5 link underline font-ibm font-medium text-sm md:text-md lg:text-xl text-right"
              >
                <div className="uppercase">{t("projects.addProject")}</div>
                <div className="uppercase">{t("projects.addProject")}</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
