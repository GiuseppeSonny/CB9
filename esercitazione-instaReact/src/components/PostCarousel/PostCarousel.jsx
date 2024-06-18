import styles from "./postcarousel.module.scss";
import Post from "../Post/post";

const PostCarousel = ({ list = [] }) => {
  return (
    <>
      <div className={styles.postcarousel}>
        {list.map((item, index) => (
          <div className={styles.post} key={index}>
            <Post
              key={index}
              image={item.urls.small}
              title={item.alt_description.title}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default PostCarousel;
