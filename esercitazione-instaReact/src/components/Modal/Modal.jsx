import styles from "./modal.module.scss";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Post from "../Post/post";
import { useContext } from "react";
import { globalApp } from "../../Layouts/layouts";

const Modal = ({ handleCloseClick }) => {
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
              <Link
                to={`/modalPage/${item.id}`}
                onClick={() => navigate(`/modalPage/${item.id}`)}
              >
                <Post
                  key={index}
                  image={item.urls.small}
                  title={item.alt_description.title}
                  alt={item.alt_description.title || "Image description"}
                />
                <div>
                  <p>{item.user.username}</p> <p>{item.likes}</p>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>

      <button onClick={handleCloseClick} className={styles.closeButton}>
        X
      </button>
      <button onClick={handleClick} className={styles.homeButton}>
        Home
      </button>
    </div>
  );
};

export default Modal;
