import styles from "./postcarousel.module.scss";
import Post from "../Post/post";
import { useContext } from "react";
import { globalApp } from "../../App";

const PostCarousel = ({ list = [] }) => {
  const { filter, setImagesfilter } = useContext(globalApp);
  console.log(filter);
  return (
    <>
      <div>
        <form>
          <input
            type="text"
            placeholder="search"
            className={styles.searchBar}
            value={filter}
            onChange={(e) => {
              setImagesfilter(e.target.value);
            }}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
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
