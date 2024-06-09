import { useState } from "react";
import Modal from "../modal/modal";
import styles from "./moviecard.module.scss";
const MovieCard = ({ title = "Movie Title", imgUrl, refProp, movie }) => {
  const [isModalVisible, setIsModalVisible] = useState();

  const handleClick = () => {
    setIsModalVisible(true);
  };
  return (
    <div className={styles.cardContainer}>
      <div ref={refProp} className={styles.cardInfo} onClick={handleClick}>
        <img
          src={`https://image.tmdb.org/t/p/w500${imgUrl}`}
          alt="movie-card-img"
        />
        <h3>{title}</h3>
      </div>
      {isModalVisible && (
        <Modal
          handleCloseClick={() => {
            setIsModalVisible(false);
          }}
          movie={movie}
        />
      )}
    </div>
  );
};

export default MovieCard;
