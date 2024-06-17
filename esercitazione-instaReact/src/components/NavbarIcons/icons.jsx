import { BsList, BsThreads } from "react-icons/bs";
import { FaRegSquarePlus } from "react-icons/fa6";
import styles from "./icons.module.scss";

const TopIcon = () => {
  const handleButtonClick = () => {
    console.log("button clicked");
  };
  return (
    <div className={styles.navbarIcons}>
      <BsThreads className={styles.threadIcon} onClick={handleButtonClick}/>
      <FaRegSquarePlus className={styles.plusIcon} onClick={handleButtonClick} />
      <BsList className={styles.listIcon} onClick={handleButtonClick} />
    </div>
  );
};

export default TopIcon;
