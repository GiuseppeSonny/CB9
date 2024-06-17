import styles from "./footer.module.scss"; 
import { GrHomeRounded } from "react-icons/gr";

const Footer = () => {
    const handleButtonClick = () => {
        console.log("button clicked");
      };
    return (
        <div className={styles.footerContainer}>
            <GrHomeRounded className={styles.iconHome} onClick={handleButtonClick}/>

        </div>
    )
}

export default Footer;