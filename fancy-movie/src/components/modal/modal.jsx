import styles from "./modal.module.scss";
import { IoIosCloseCircle } from "react-icons/io";

const Modal = () => {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalWindow}>
        <div className={styles.modalHeader}>
          <h3>Modal Header</h3>
        </div>
        <div className={styles.modalBody}>
          <p>Modal Body</p>
          <img src="https://picsum.photos/200/300" alt="" />
        </div>
        <div className={styles.modalFooter}>
          <IoIosCloseCircle className={styles.modalBtn} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
