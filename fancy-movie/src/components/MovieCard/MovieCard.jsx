import { useState } from "react";
import Modal from "../modal/modal";
import styles from "./moviecard.module.scss";
const MovieCard = ({ title = "Movie Title", imgUrl, refProp }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleClick = () => {
    setIsModalVisible(true);
  };
  return (
    <div className={styles.cardContainer}>
      <img
        src={`https://image.tmdb.org/t/p/w500${imgUrl}`}
        alt="movie-card-img"
      />
      <div ref={refProp} className={styles.cardInfo} onClick={handleClick}>
        <h3>{title}</h3>
      </div>
      {/*  {isModalVisible && (
        <Modal
          movie={movie}
          handleCloseClick={() => {
            setIsModalVisible(false);
          }}
        />
      )} */}
    </div>
  );
};

export default MovieCard;
