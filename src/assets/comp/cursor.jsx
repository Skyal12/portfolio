import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./cursor.css";

export default function Cursor() {
  const cursorRef = useRef(null);
  const mouse = useRef({ x: -100, y: -100 });
  const pos = useRef({ x: -100, y: -100 });
  const raf = useRef(null);

  useEffect(() => {
    const move = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const handleOver = (e) => {
      const target = e.target.closest("a, button, [data-cursor-hover]");
      if (target) {
        cursorRef.current?.classList.add("is-hovering");
      } else {
        cursorRef.current?.classList.remove("is-hovering");
      }
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const loop = () => {
      pos.current.x = lerp(pos.current.x, mouse.current.x, 0.12);
      pos.current.y = lerp(pos.current.y, mouse.current.y, 0.12);

      if (cursorRef.current) {
        cursorRef.current.style.left = `${pos.current.x}px`;
        cursorRef.current.style.top = `${pos.current.y}px`;
      }

      raf.current = requestAnimationFrame(loop);
    };

    raf.current = requestAnimationFrame(loop);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleOver);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleOver);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return createPortal(
    <div ref={cursorRef} className="cursor">
      <span className="cursor__h" />
      <span className="cursor__v" />
    </div>,
    document.body,
  );
}
