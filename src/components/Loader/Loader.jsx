import { BeatLoader } from "react-spinners";
import css from "./Loader.module.css";
import { useState, useEffect } from "react";
export default function Loader() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  let size;
  if (width <= 375) {
    size = 15;
  } else if (width <= 768) {
    size = 20;
  } else size = 28;
  return (
    <div className={css.loaderBox}>
      <BeatLoader className={css.loaderDots} size={size} color="#3746a6" />
    </div>
  );
}
