import { BeatLoader } from "react-spinners";
import css from "./Loader.module.css";
export default function Loader() {
  return (
    <div className={css.loaderBox}>
      <BeatLoader size={30} color="#3746a6" />
    </div>
  );
}
