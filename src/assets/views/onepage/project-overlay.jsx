import { useLanguage } from "../../utils/langue.jsx";
import { useEffect } from "react";
export default function ProjectOverlay({
  activeProject,
  setActiveProject,
  projects,
}) {
  const { t } = useLanguage();
  const project = projects.find((p) => p.id === activeProject);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setActiveProject(null);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [setActiveProject]);

  const handleCloseOverlay = () => {
    setActiveProject(null);
  };

  if (!activeProject) return null;
  return (
    <div
      className={`
    overlay fixed top-0 left-0 w-screen h-screen bg-secondary/20
    flex items-center justify-center z-100 transition-all duration-500
    ${activeProject ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
  `}
    >
      <div
        className={`project-card-text w-3/4 h-6/7 fixed px-8 py-4 flex flex-col gap-4 md:gap-20 justify-around transition-all duration-500`}
        style={{
          background: project.bg,
          color: project.color,
          isolation: "isolate",
        }}
      >
        <div className="h-auto md:h-1/3 w-full flex flex-col">
          <div className="flex justify-between py-4 px-4">
            <h4 className="project-card-title text-md md:text-xl lg:text-2xl font-bold font-ibm">
              {project.title}
            </h4>
            <button
              className={`close-project w-fit justify-self-end pr-2 transition-all duration-300 ${activeProject ? "active" : ""}`}
              id="toggle"
              onClick={handleCloseOverlay}
              aria-expanded={activeProject}
              aria-label={activeProject ? "Fermer le projet" : ""}
              type="button"
            >
              <div
                className="hamburger-line h-[1px] w-6 rotate-45"
                style={{
                  background: project.color,
                }}
              />
              <div
                className="hamburger-line h-[1px] w-6 -rotate-45"
                style={{
                  background: project.color,
                }}
              />
            </button>
          </div>
          <img
            loading="lazy"
            src={project.image}
            alt={t(`projects.${project.key}.alt`)}
            className="hidden md:block h-full w-full self-center object-contain pointer-events-none mb-4"
          />
        </div>
        <div className="project-card-description flex flex-col gap-4 w-full h-auto md:h-1/3">
          <p className="whitespace-pre-line font-ibm text-xs lg:text-md xl:text-xl">
            {project?.description}
          </p>
        </div>
        <div className="project-techno h-auto md:h-1/3 gap-4 md:gap-12">
          <h5 className="font-imb text-xs md:text-md lg:text-lg xl:text-xl mb-4 ">
            {t("projects.techno")}
          </h5>
          <div
            className={`flex justify-around w-full h-auto md:h-1/3 items-center ${project.title == "Seconde Chance" ? "flex-col md:flex-row gap-2" : "flex-row"}`}
          >
            <h5 className="font-imb text-xs md:text-md lg:text-lg xl:text-xl">
              {t(`projects.${project.key}.techno1`)}
            </h5>
            <h5 className="font-imb text-xs md:text-md lg:text-lg xl:text-xl">
              {t(`projects.${project.key}.techno2`)}
            </h5>
            <h5 className="font-imb text-xs md:text-md lg:text-lg xl:text-xl">
              {t(`projects.${project.key}.techno3`)}
            </h5>
          </div>
          <div className="flex flex-row justify-end w-full h-1/3 items-center">
            {project.url && project.url !== false && (
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <button className="seeMore link underline font-ibm font-medium text-xs md:text-md lg:text-xl text-end">
                  <div className="uppercase">{t("projects.seeMore")}</div>
                  <div className="uppercase">{t("projects.seeMore")}</div>
                </button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
