import { useEffect, useState } from "react";
import { useLanguage } from "./langue.jsx";

export default function NavBar() {
  const { t } = useLanguage();
  const [currentSection, setCurrentSection] = useState("");
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Lit le data-section de la section visible
            const sectionName = entry.target.getAttribute("data-section");
            setCurrentSection(sectionName);

            // Lit le data-theme de la section visible
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

  const links = [
    { id: "about", label: t("nav.about") },
    { id: "projects", label: t("nav.projects") },
    { id: "contact", label: t("nav.contact") },
  ];

  const getGridCols = () => {
    return links
      .map((l) => (l.id === currentSection ? "0fr" : "1fr"))
      .join(" ");
  };

  return (
    <nav className="w-full h-auto flex items-center justify-end z-50">
      <ul
        className="grid gap-3 list-none w-full h-auto "
        style={{
          gridTemplateColumns: getGridCols(),
          transition: "grid-template-columns 0.4s ease",
        }}
      >
        {links.map(({ id, label }) => (
          <li
            className="flex items-start justify-end h-auto w-full"
            key={id}
            style={{
              overflow: "hidden",
              opacity: currentSection === id ? 0 : 1,
              visibility: currentSection === id ? "hidden" : "visible",
              transition:
                "opacity 0.4s ease, visibility 0.4s ease, color 0.4s ease",
            }}
          >
            <a
              href={`#${id}`}
              className="navbar-link relative text-sm md:text-lg lg:text-2xl bg-transparent flex items-center justify-center h-auto w-full font-ibm"
              style={{
                color: isDark ? "#7b5ea7" : "#3d3d3d",
                transition: "color 0.4s ease",
              }}
            >
              <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-accent" />
              <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-accent" />
              <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-accent" />
              <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-accent" />
              <div className="uppercase">{label}</div>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
