import styles from "./app.module.scss";
import Navbar from "./components/Navbar/Navbar.jsx";
import HeroComponent from "./components/Hero/HeroComponent.jsx";
import { useEffect, useState } from "react";
import Carousel from "./components/carousel/carousel.jsx";
import { API_Key } from "../costant.js";
function App() {
  const [popularList, setPopularList] = useState([]);
  const [upcoming, setUpcomingList] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular", {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_Key}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPopularList(data.results);
      });
    fetch("https://api.themoviedb.org/3/movie/upcoming", {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_Key}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUpcomingList(data.results);
      });
  }, []);
  return (
    <main className={styles.mainContainer}>
      <Navbar />
      <HeroComponent />
      <section className={styles.carouselSection}>
        <Carousel list={popularList} />
      </section>
      <section className={styles.carouselSection}>
        <Carousel list={upcoming} />
      </section>
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
