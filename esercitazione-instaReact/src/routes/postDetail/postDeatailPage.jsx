import PostCarousel from "../../components/PostCarousel/PostCarousel";
import styles from "./postdetail.module.scss";
export default function PostDetail() {
  return (
    <div className={styles.postdetail}>
      <PostCarousel />
    </div>
  );
}
