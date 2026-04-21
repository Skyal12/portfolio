import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    const timer = setTimeout(() => {
      setLoading(false);
      document.querySelector(".loader").style.transform = "translateX(-100%)";
      document.body.classList.remove("overflow-hidden");
      document.body.classList.add("overflow-scroll");
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`loader bg-black w-screen h-screen fixed top-0 left-0 z-300 transition-all duration-500 ${loading ? "active" : ""}`}
    ></div>
  );
}
