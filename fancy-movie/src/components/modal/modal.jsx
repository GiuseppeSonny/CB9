import styles from "./modal.module.scss";
import { IoIosCloseCircle } from "react-icons/io";

const Modal = ({ handleCloseClick, movie }) => {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalWindow}>
        <div className={styles.modalHeader}>
          <h3>{movie.title}</h3>
        </div>
        <div className={styles.modalBody}>
<<<<<<< HEAD
          <p>Modal Body</p>
          <img src={movie.backdrop_path} alt="movie-img" />
=======
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt="movie.img"
          />
>>>>>>> 9c26d97293fc90cca1e849913e9590a68180bab4
        </div>
        <div className={styles.modalFooter}>
          <IoIosCloseCircle
            className={styles.modalBtn}
            onClick={handleCloseClick}
          />
        </div>
        <span className={styles.movieDescription}>{movie.overview}</span>
      </div>
    </div>
  );
};

export default Modal;
