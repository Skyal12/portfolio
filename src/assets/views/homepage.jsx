import { useState } from "react";

//Views
import Hero from "./onepage/hero";
import About from "./onepage/about-text";
import Projects from "./onepage/projects";
import Contact from "./onepage/contact";
import Stack from "./onepage/about-stack";
import ProjectOverlay from "./onepage/project-overlay";

//Utils
import Langue from "../utils/langue";
import { useLanguage } from "../utils/langue.jsx";

//Data
import { ProjectData } from "../data/projectData";

export default function Homepage() {
  const [activeProject, setActiveProject] = useState(null);
  const { t } = useLanguage();
  const projects = ProjectData(t);

  return (
    <>
      <div
        className={`site-wrapper z-30 transition-all duration-500 ${activeProject ? "blur-sm" : ""}`}
      >
        <div className="homepage">
          <Hero />
          <Langue />
          <section id="about">
            <div>
              <About />
            </div>
            <Stack />
          </section>
          <Projects
            activeProject={activeProject}
            setActiveProject={setActiveProject}
            projects={projects}
          />

          <Contact />
        </div>
      </div>
      <ProjectOverlay
        activeProject={activeProject}
        setActiveProject={setActiveProject}
        projects={projects}
      />
    </>
  );
}
