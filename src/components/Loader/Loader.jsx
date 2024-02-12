import css from "./Loader.module.css";
import { CirclesWithBar } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className={css.wraper}>
      <CirclesWithBar
        height="150"
        width="150"
        color="#4580bb"
        outerCircleColor="#4580bb"
        innerCircleColor="#1f4469"
        barColor="#4580bb"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
