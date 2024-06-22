import styles from "./postcarousel.module.scss";
import Post from "../Post/post";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_KEY } from "../../../constants/constant";

const BASE_URL = "https://api.unsplash.com/photos/";

const PostCarousel = ({ list = [] }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedImages, setFetchedImages] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${BASE_URL}?client_id=${API_KEY}&per_page=30`
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }
      const data = await response.json();
      setFetchedImages(data);
    } catch (error) {
      //console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
