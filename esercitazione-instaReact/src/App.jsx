import { useState, useEffect } from "react";
import { API_KEY } from "../constants/constant";
import styles from "./app.module.scss";
import NavBar from "./components/Navbar/Navbar.jsx";
import PostCarousel from "./components/PostCarousel/PostCarousel.jsx";
import Footer from "./components/Footer/Footer.jsx";

const BASE_URL = "https://api.unsplash.com/photos/";
function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}?client_id=${API_KEY}&per_page=30`)
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  return (
    <main className={styles.mainPage}>
      <NavBar />
      <PostCarousel list={images} />
      <Footer />
    </main>
  );
}

export default App;
