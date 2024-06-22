import PostCarousel from "../PostCarousel/PostCarousel";
import styles from "./modal.module.scss";

const Modal = ({ handleCloseClick }) => {
  return (
    <div className={styles.modalContainer}>
      <PostCarousel className={styles.modalCarousel} />
      <button onClick={handleCloseClick} className={styles.closeButton}>
        X
      </button>
    </div>
  );
};

export default Modal;
