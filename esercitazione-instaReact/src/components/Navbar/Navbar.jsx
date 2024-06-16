import styles from "./navbar.module.scss";
import TopIcon from "../NavbarIcons/icons";
import { IoIosArrowDown } from "react-icons/io";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.username}>
        SonnyUma <IoIosArrowDown className={styles.arrowIcon} />
      </h1>

      <TopIcon />
    </nav>
  );
};

export default NavBar;
