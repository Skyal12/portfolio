import { useState, useEffect, useRef } from "react";

export default function CoordonneeX() {
  const coordRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isDark, setIsDark] = useState(false);
  const isTouch = window.matchMedia("(pointer: coarse)").matches;

  useEffect(() => {
    if (isTouch) return;

    const handleMouseMove = (e) => {
      if (coordRef.current) {
        coordRef.current.textContent = `${e.clientX} / ${windowWidth}`;
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
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth, isTouch]);

  return (
    <div
      className={`coordonnee z-10 fixed bottom-4 left-12 text-md font-imb transition-colors duration-400 ${
        isTouch ? "hidden" : ""
      } ${isDark ? "text-white" : "text-tertiary"}`}
      ref={coordRef}
    />
  );
}
