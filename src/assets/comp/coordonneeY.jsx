import { useState, useEffect, useRef } from "react";
import useBackgroundColor from "../utils/useBackgroundColor";

export default function CoordonneeY() {
  const coordRef = useRef(null);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const isDark = useBackgroundColor();
  const isTouch = window.matchMedia("(pointer: coarse)").matches;

  useEffect(() => {
    if (isTouch) return;

    const handleMouseMove = (e) => {
      if (coordRef.current) {
        coordRef.current.textContent = `${e.clientY} / ${windowHeight}`;
      }
    };

    const handleResize = () => setWindowHeight(window.innerHeight);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [windowHeight, isTouch]);

  return (
    <div
      className={`coordonnee z-10 fixed top-2/3 -left-6 rotate-270 text-md font-ibm transition-all duration-400 ${
        isTouch ? "hidden" : ""
      } ${isDark ? "text-white" : "text-tertiary"}`}
      ref={coordRef}
    />
  );
}
