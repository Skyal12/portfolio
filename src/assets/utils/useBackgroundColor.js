import { useState, useEffect } from "react";

export default function useBackgroundColor() {
  const [isDark, setIsDark] = useState(false);
  const isTouch = window.matchMedia("(pointer: coarse)").matches;

  useEffect(() => {
    if (isTouch) return;

    const handleMouseMove = (e) => {
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (!el) return;

      let target = el;
      let bg = "rgba(0, 0, 0, 0)";

      while (target && (bg === "rgba(0, 0, 0, 0)" || bg === "transparent")) {
        bg = getComputedStyle(target).backgroundColor;
        target = target.parentElement;
      }

      setIsDark(bg === "rgb(0, 0, 0)");
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isTouch]);

  return isDark;
}
