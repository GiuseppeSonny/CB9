import styles from "./app.module.scss";
import Navbar from "./components/Navbar/Navbar.jsx";
import HeroComponent from "./components/Hero/HeroComponent.jsx";
import { useEffect, useState } from "react";
import Carousel from "./components/carousel/carousel.jsx";
import { API_Key } from "../costant.js";
function App() {
  const [popularList, setPopularList] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular", {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_Key}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPopularList(data.results);
      });
    console.log(popularList);
  }, []);
  return (
    <main className={styles.mainContainer}>
      <Navbar />
      <HeroComponent
        imageUrl={popularList[0]?.backdrop_path}
        title={popularList[0]?.original_title}
      />
      <section className={styles.carouselSection}>
        <Carousel list={popularList} />
      </section>
      <section className={styles.carouselSection}>
        <Carousel list={popularList} />
      </section>
    </main>
  );
}

export default App;
