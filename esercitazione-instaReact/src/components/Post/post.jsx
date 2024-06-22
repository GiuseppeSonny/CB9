import { useState, useRef } from "react";
import styles from "./post.module.scss";
import Modal from "../Modal/Modal";

const Post = ({ title, image, newPageUrl }) => {
  //const [isModalVisible, setIsModalVisible] = useState(false);
  const postRef = useRef(null);

  /* const handleClick = () => {
    if (newPageUrl) {
      window.open(newPageUrl);
      return;
    }
    setIsModalVisible(true);
  }; */

  return (
    <div className={styles.postContainer}>
      <div ref={postRef} className={styles.post}>
        <img
          className={styles.image}
          src={image}
          alt={title}
          //onClick={handleClick}
        />
      </div>
      {/*  {isModalVisible && (
        <Modal
          handleCloseClick={() => setIsModalVisible(false)}
          postRef={postRef}
        />
      )} */}
    </div>
  );
};

export default Post;
