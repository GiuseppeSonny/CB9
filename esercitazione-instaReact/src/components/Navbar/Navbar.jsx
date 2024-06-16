import styles from "./navbar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.username}>NeriPeppe</h1>
    </nav>
  );
};

export default NavBar;
