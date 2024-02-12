import css from "./ReturnTopBtn.module.css";
import { FaArrowUp } from "react-icons/fa6";

const ReturnTopBtn = ({ scrollToTop }) => {
  return (
    <button className={css.returnTopBtn} onClick={() => scrollToTop()}>
      <FaArrowUp size={30} color="#fff" />
    </button>
  );
};

export default ReturnTopBtn;
