import styles from "./footer.module.scss";
import { GrHomeRounded } from "react-icons/gr";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegPlusSquare } from "react-icons/fa";
import { BiMoviePlay } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const homeButtonClick = () => {
    navigate("/");
  };
  const handleButtonClick = () => {
    navigate("/");
    console.log("button clicked");
  };
  return (
    <div className={styles.footerContainer}>
      <GrHomeRounded className={styles.iconHome} onClick={homeButtonClick} />
      <IoSearchSharp
        className={styles.iconSearch}
        onClick={handleButtonClick}
      />
      <FaRegPlusSquare
        className={styles.iconPlus}
        onClick={handleButtonClick}
      />
      <BiMoviePlay className={styles.iconPlay} onClick={handleButtonClick} />
    </div>
  );
};

export default Footer;
