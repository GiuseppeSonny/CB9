import styles from "./hero.module.scss";

const HeroComponent = ({ imageUrl = "https://picsum.photos/200/300" }) => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.test}>
        <img src={imageUrl} alt="hero-img" />
      </div>
      <button className={styles.heroBtn}> push here</button>
    </div>
  );
};

export default HeroComponent;
