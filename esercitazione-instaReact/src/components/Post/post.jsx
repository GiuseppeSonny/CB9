import { useState, useRef } from "react";
import styles from "./post.module.scss";
import Modal from "../Modal/Modal";

const Post = ({ title, image, newPageUrl }) => {
  //const [isModalVisible, setIsModalVisible] = useState(false);
  const postRef = useRef(null);

  return (
    <div className={styles.postContainer}>
      <div ref={postRef} className={styles.post}>
        <img className={styles.image} src={image} alt={title} />
      </div>
    </div>
  );
};

export default Post;
