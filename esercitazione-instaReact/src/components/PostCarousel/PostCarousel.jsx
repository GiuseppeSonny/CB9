import styles from "./postcarousel.module.scss";
import Post from "../Post/post";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { API_KEY } from "../../../constants/constant";
import { globalApp } from "../../Layouts/layouts";
const BASE_URL = "https://api.unsplash.com/photos/";

const PostCarousel = ({ list = [] }) => {
  const navigate = useNavigate();
  const { fetchedImages, isLoading } = useContext(globalApp);

  return (
    <>
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
              </Link>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default PostCarousel;
