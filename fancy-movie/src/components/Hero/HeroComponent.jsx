import styles from "./hero.module.scss";

const HeroComponent = () => {
  return (
    <div className={styles.heroContainer}>
      <img
        className={styles.heroImg}
        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/9p10J9Xp7MuaVac56g8BwAuXEsA.jpg`}
        alt="hero-img"
      />
      <button className={styles.heroBtn}> push here </button>
    </div>
  );
};

export default HeroComponent;

//https://image.tmdb.org/t/p/w600_and_h900_bestv2/9p10J9Xp7MuaVac56g8BwAuXEsA.jpg
