import styles from "./footer.module.scss"; 
import { GrHomeRounded } from "react-icons/gr";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegPlusSquare } from "react-icons/fa";
import { BiMoviePlay } from "react-icons/bi";

const Footer = () => {
    const handleButtonClick = () => {
        console.log("button clicked");
      };
    return (
        <div className={styles.footerContainer}>
            <GrHomeRounded className={styles.iconHome} onClick={handleButtonClick}/>
            <IoSearchSharp className={styles.iconSearch} onClick={handleButtonClick}/>
            <FaRegPlusSquare className={styles.iconPlus} onClick={handleButtonClick}/>
            <BiMoviePlay className={styles.iconPlay} onClick={handleButtonClick}/>
        </div>
    )
}

export default Footer;