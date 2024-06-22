import { useState, useEffect, useContext, createContext } from "react";
import { API_KEY } from "../constants/constant";
import styles from "./app.module.scss";
import NavBar from "./components/Navbar/Navbar.jsx";
import PostCarousel from "./components/PostCarousel/PostCarousel.jsx";
import Footer from "./components/Footer/Footer.jsx";
import SearchInput from "./components/SearchBar/SearchBar.jsx";
export const globalApp = createContext();

const BASE_URL = "https://api.unsplash.com/photos/";
function App() {
  const [images, setImages] = useState([]);
  const [filter, setfilter] = useState("");
  const value = {
    filter,
    setfilter,
  };

  useEffect(() => {
    fetch(`${BASE_URL}?client_id=${API_KEY}&per_page=30`)
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  useEffect(() => {
    if (filter.trim()) {
      setImages(
        images.filter((image) =>
          image.alt_description.toLowerCase().startsWith(filter.toLowerCase())
        )
      );
    } else {
      setImages(images);
    }
  }, [images, filter]);

  return (
    <>
      <globalApp.Provider value={value}>
        <main className={styles.mainPage}>
          <NavBar />
          <SearchInput onSearch={setImages} />
          <PostCarousel list={images} />
          <Footer />
        </main>
      </globalApp.Provider>
    </>
  );
}

export default App;
