import { useEffect, useState } from "react";

export default function BackTop() {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Scroll vers le bas → cacher
      if (currentScroll > lastScroll) {
        setVisible(false);
      }
      // Scroll vers le haut → montrer
      else {
        setVisible(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <div
      className={`back-top hidden lg:block fixed z-20 right-32 bottom-[-1%] transition-all duration-300
        ${visible ? "bottom-4 opacity-100" : "bottom-[-50px] opacity-0"}
      `}
    >
      <button
        className="bg-accent w-16 h-12 flex justify-center items-center text-white p-2 rounded-md hover:bg-accent/80 hover:scale-110 transition-all duration-300 cursor-none"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 rotate-180"
        >
          <path
            d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
