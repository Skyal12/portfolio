import { useEffect, useState } from "react";
import { useLanguage } from "../../utils/langue.jsx";
export default function Stack() {
  const [current, setCurrent] = useState("frontend");
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const title = entry.target.getAttribute("data-title");
            setCurrent(title);
          }
        });
      },
      { threshold: 0.5 },
    );

    document.querySelectorAll("[data-title]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      data-section="about"
      className="about-stack h-[600vh] bg-black block p-12"
      data-theme="dark"
    >
      <div className="stack sticky top-0 h-screen grid grid-rows-2 isolate overflow-hidden">
        <div className="stack-top h-full w-full">
          <h3 className=" text-3xl md:text-7xl lg:text-8xl xl:text-9xl z-10 mb-8 text-primary sticky top-1/8 pl-0 lg:pl-20 font-syne">
            {t("about.skills")}
          </h3>
          <div className="stack-separator grid grid-cols-3 md:grid-cols-5 gap-6">
            <h4 className="hidden md:block col-start-2 md:col-start-3 col-span-1 text-lg mb-8 text-primary text-end lg:text-start relative top-16 md:top-0 font-ibm">
              {t("about.stack")}
            </h4>
            <div className="flex flex-col col-span-2 lg:col-span-1 col-start-2 md:col-start-4">
              <h4 className="text-md lg:text-lg text-primary font-syne">
                {t("about.tools")}
              </h4>
              <p className="text-md lg:text-lg pl-2 md:pl-4 lg:pl-6 text-justify font-syne text-secondary">
                {t("about.toolsText")}
              </p>
              <p className="text-md lg:text-lg pl-2 md:pl-4 lg:pl-6 text-justify font-syne text-primary">
                {t("about.toolsText2")}
              </p>
              <p className=" text-md lg:text-lg pl-2 md:pl-4 lg:pl-6 text-justify font-syne text-secondary">
                {t("about.toolsText3")}
              </p>
            </div>
          </div>
        </div>
        <div className="stack-bottom h-full w-full">
          <div className="stack-separator sticky my-auto grid grid-cols-3 md:grid-cols-6 xl:grid-cols-5 gap-6 mb-0 md:mb-24">
            <div className="flex flex-col col-span-2 xl:col-span-1">
              <h4 className="text-md lg:text-lg text-primary font-ibm">
                {t("about.vision")}
              </h4>
              <p className="text-md lg:text-lg pl-2 md:pl-4 lg:pl-6 text-justify font-syne text-secondary">
                {t("about.visionText1")}
              </p>
              <p className="text-md lg:text-lg pl-2 md:pl-4 lg:pl-6 text-justify font-syne text-secondary">
                {t("about.visionText2")}
              </p>
              <p className="text-md lg:text-lg text-primary pl-2 md:pl-4 lg:pl-6 text-justify font-syne">
                {t("about.visionText3")}
              </p>
            </div>
          </div>
          <div className="hidden md:block sticky top-1/8 h-40 overflow-hidden relative pl-20">
            <h3
              className="title-frontend absolute right-12 text-6xl lg:text-7xl xl:text-9xl font-extrabold font-syne text-accent transition-transform duration-500"
              style={{
                transform:
                  current === "frontend"
                    ? "translateY(0)"
                    : current === "backend"
                      ? "translateY(calc(var(--offset-1) * -1))"
                      : "translateY(calc(var(--offset-2) * -1))",
              }}
            >
              Frontend
            </h3>

            <h3
              className="title-backend absolute right-12 text-7xl lg:text-8xl xl:text-9xl font-extrabold font-syne text-accent transition-transform duration-500"
              style={{
                transform:
                  current === "frontend"
                    ? "translateY(var(--offset-1))"
                    : current === "backend"
                      ? "translateY(0)"
                      : "translateY(calc(var(--offset-1) * -1))",
              }}
            >
              Backend
            </h3>

            <h3
              className="title-outils absolute right-12 text-7xl lg:text-8xl xl:text-9xl font-extrabold font-syne text-accent transition-transform duration-500"
              style={{
                transform:
                  current === "frontend"
                    ? "translateY(var(--offset-2))"
                    : current === "backend"
                      ? "translateY(var(--offset-1))"
                      : "translateY(0)",
              }}
            >
              Outils
            </h3>
          </div>
        </div>
      </div>
      <div className="stack-content z-20 flex flex-col gap-24 mt-12">
        {/* FRONTEND */}
        <div
          className="stack-category grid grid-rows-3 gap-90 pt-80"
          data-title="frontend"
        >
          {/* Ligne 1 */}
          <div className="stack-row grid grid-cols-4 lg:grid-cols-5 w-full h-1/5">
            <p className="col-start-1 lg:col-start-2 text-lg md:text-xl lg:text-2xl xl:text-3xl text-tertiary font-syne px-2 lg:px-4 xl:px-8 py-2 xl:py-4 bg-primary w-fit lg:w-full h-fit xl:h-auto text-center font-imb">
              REACT
            </p>
            <p className="col-start-3 text-lg md:text-xl lg:text-2xl xl:text-3xl text-primary relative top-10 lg:top-20 xl:top-40 font-syne px-2 lg:px-4 xl:px-8 py-2 xl:py-4 bg-accent w-fit lg:w-full text-center font-imb">
              HTML
            </p>
          </div>

          {/* Ligne 2 */}
          <div className="stack-row grid grid-cols-4 lg:grid-cols-5 w-full h-1/5">
            <p className="col-start-2 text-lg md:text-xl lg:text-2xl xl:text-3xl text-primary relative left-0 md:left-10 lg:left-24 xl:left-40 font-syne px-2 lg:px-4 xl:px-8 py-2 xl:py-4 bg-quaternary w-fit lg:w-full text-center font-imb">
              JS
            </p>
            <p className="col-start-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-tertiary relative top-10 lg:top-20 xl:top-40 left-0 md:left-10 lg:left-24 xl:left-40 font-syne px-2 lg:px-4 xl:px-8 py-2 xl:py-4 bg-primary w-fit lg:w-full text-center font-imb">
              CSS
            </p>
          </div>
        </div>

        {/* BACKEND */}
        <div
          className="stack-category grid grid-rows-3 gap-90 mt-24"
          data-title="backend"
        >
          {/* Ligne 1 */}
          <div className="stack-row grid grid-cols-4 lg:grid-cols-5 w-full h-1/5">
            <p className="col-start-1 lg:col-start-2 text-lg md:text-xl lg:text-2xl xl:text-3xl text-primary relative -right-8 lg:-right-12 xl:-right-20 font-syne px-2 lg:px-4 xl:px-8 py-2 xl:py-4 w-fit lg:w-full h-fit xl:h-auto bg-quaternary text-center font-imb">
              NODE.JS
            </p>

            <p className="col-start-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-tertiary relative top-8 lg:top-16 xl:top-32 left-0 md:left-4 lg:left-8 xl:left-12 font-syne px-2 lg:px-4 xl:px-8 py-2 xl:py-4 w-fit lg:w-full h-fit xl:h-auto bg-primary text-center font-imb">
              PHP
            </p>
          </div>

          {/* Ligne 2 */}
          <div className="stack-row grid grid-cols-4 lg:grid-cols-5 w-full h-1/5">
            <p className="col-start-2 text-lg md:text-xl lg:text-2xl xl:text-3xl text-primary relative left-0 md:left-16 lg:left-32 xl:left-52 top-0 md:top-4 lg:top-8 xl:top-12 font-syne px-2 lg:px-4 xl:px-8 py-2 xl:py-4 w-fit lg:w-full h-fit xl:h-auto bg-accent text-center font-imb">
              SQL
            </p>
          </div>
        </div>

        {/* OUTILS */}
        <div
          className="stack-category grid grid-rows-3 gap-90 mt-24"
          data-title="outils"
        >
          {/* Ligne 1 */}
          <div className="stack-row grid grid-cols-4 lg:grid-cols-5 w-full h-1/5">
            <p className="col-start-2 text-lg md:text-xl lg:text-2xl xl:text-3xl text-accent relative -top-6 lg:top-12 xl:top-20 left-0 md:left-8 lg:left-16 xl:left-24 font-syne px-2 lg:px-4 xl:px-8 py-2 xl:py-4 w-fit lg:w-full h-fit xl:h-auto bg-primary text-center font-imb">
              GIT
            </p>
            <p className="col-start-3 lg:col-start-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-tertiary relative top-0 md:top-14 lg:top-32 xl:top-52 right-0 md:right-6 lg:right-12 xl:right-20 font-syne py-2 xl:py-4 w-fit lg:w-full h-fit xl:h-auto bg-secondary text-center font-imb">
              WORDPRESS
            </p>
          </div>

          {/* Ligne 2 */}
          <div className="stack-row grid grid-cols-4 lg:grid-cols-5 w-full h-1/5">
            <p className="col-start-1 text-lg md:text-xl lg:text-2xl xl:text-3xl text-primary relative  -right-6 md:left-12 lg:left-24 xl:left-40 top-0 md:top-10 lg:top-20 xl:top-36 font-syne px-2 lg:px-4 xl:px-8 py-2 xl:py-4 w-fit lg:w-full h-fit xl:h-auto bg-accent text-center font-imb">
              TAILWIND
            </p>
            <p className="col-start-3 text-lg md:text-xl lg:text-2xl xl:text-3xl text-tertiary relative -top-20 xl:top-16 left-0 md:left-12 lg:left-24 xl:left-40 font-syne px-2 lg:px-4 xl:px-8 py-2 xl:py-4 w-fit lg:w-full h-fit xl:h-auto bg-primary text-center font-imb">
              FIGMA
            </p>
          </div>
        </div>
      </div>
      <div data-section="about" className="h-4" data-theme="dark"></div>
    </div>
  );
}
