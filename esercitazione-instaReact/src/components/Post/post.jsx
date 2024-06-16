import styles from "./post.module.scss";

const Post = ({ title, image }) => {
  return (
    <div className={styles.post}>
      <img className={styles.image} src={image} alt={title} />
    </div>
  );
};

export default Post;
