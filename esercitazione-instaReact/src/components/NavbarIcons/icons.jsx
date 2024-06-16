import { BsList, BsThreads } from "react-icons/bs";
import { FaRegSquarePlus } from "react-icons/fa6";
import styles from "./icons.module.scss";

const TopIcon = () => {
  return (
    <div className={styles.navbarIcons}>
      <BsThreads className={styles.threadIcon} />
      <FaRegSquarePlus className={styles.plusIcon} />
      <BsList className={styles.listIcon} />
    </div>
  );
};

export default TopIcon;
