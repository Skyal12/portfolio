import { useState, useEffect, useRef } from "react";

export default function CoordonneeY() {
  const coordRef = useRef(null);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (coordRef.current) {
        coordRef.current.textContent = `${e.clientY} / ${windowHeight}`;
      }

      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (el) {
        let target = el;
        let bg = "rgba(0, 0, 0, 0)";

        while (target && (bg === "rgba(0, 0, 0, 0)" || bg === "transparent")) {
          bg = getComputedStyle(target).backgroundColor;
          target = target.parentElement;
        }

        setIsDark(bg === "rgb(0, 0, 0)");
      }
    };

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [windowHeight]);

  return (
    <div
      className={`coordonnee z-10 fixed top-2/3 -left-6 rotate-270 text-md font-imb transition-all duration-400 ${
        isDark ? "text-white" : "text-tertiary"
      }`}
      ref={coordRef}
    />
  );
}
