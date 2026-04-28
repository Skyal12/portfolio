import { useState, useEffect, useRef } from "react";
import useBackgroundColor from "../utils/useBackgroundColor";

export default function CoordonneeX() {
  const coordRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isDark = useBackgroundColor();
  const isTouch = window.matchMedia("(pointer: coarse)").matches;

  useEffect(() => {
    if (isTouch) return;

    const handleMouseMove = (e) => {
      if (coordRef.current) {
        coordRef.current.textContent = `${e.clientX} / ${windowWidth}`;
      }
    };

    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth, isTouch]);

  return (
    <div
      className={`coordonnee z-10 fixed bottom-4 left-12 text-md font-ibm transition-colors duration-400 ${
        isTouch ? "hidden" : ""
      } ${isDark ? "text-white" : "text-tertiary"}`}
      ref={coordRef}
    />
  );
}
