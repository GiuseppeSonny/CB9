import styles from "./modal.module.scss";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Post from "../Post/post";
import { useContext } from "react";
import { globalApp } from "../../Layouts/layouts";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { TbLocationShare } from "react-icons/tb";
import { GoBookmark } from "react-icons/go";

const Modal = ({}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  const { fetchedImages, isLoading } = useContext(globalApp);
  return (
    <div className={styles.modalContainer}>
      <div className={styles.postcarousel}>
        {isLoading ? (
          <p>Loading images...</p>
        ) : (
          fetchedImages.map((item, index) => (
            <div className={styles.post} key={index}>
              <p className={styles.userName}>{item.user.username}</p>
              <Link
                to={`/modalPage/${item.id}`}
                onClick={() => navigate(`/modalPage/${item.id}`)}
              >
                <div className={styles.postimage}>
                <Post
      
                  key={index}
                  image={item.urls.small}
                  alt={item.alt_description.title || "Image description"}
                />
                </div>
                <div className={styles.mainDetail}>
                  <p className={styles.likes}> Piace a {item.likes} persone</p>
                  <p className={styles.description}>{item.alt_description}</p>
                </div>
                <div className={styles.posticons}>
                  <FaRegHeart />
                  <FaRegComment />
                  <TbLocationShare />
                </div>
                <div className={styles.bookicon}>
                  <GoBookmark />
                </div>
              </Link>
            </div>
          ))
        )}
      </div>

      <button onClick={handleClick} className={styles.closeButton}>
        X
      </button>
    </div>
  );
};

export default Modal;
