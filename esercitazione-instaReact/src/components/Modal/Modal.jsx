import PostCarousel from "../PostCarousel/PostCarousel";
import styles from "./modal.module.scss";
import { useNavigate } from "react-router-dom";

const Modal = ({ handleCloseClick }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className={styles.modalContainer}>
      <PostCarousel className={styles.modalCarousel} />
      <button onClick={handleCloseClick} className={styles.closeButton}>
        X
      </button>
      <button onClick={handleClick} className={styles.homeButton}>
        Home
      </button>
    </div>
  );
};

export default Modal;
