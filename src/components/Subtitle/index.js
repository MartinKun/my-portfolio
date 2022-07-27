import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import styles from "./style.module.css";

const Subtitle = ({ title }) => {
  const { isLightOn } = useContext(ThemeContext);
  return (
    <div className={isLightOn ? `${styles.subtitle} ${styles.subtitleLightMod}` : `${styles.subtitle} ${styles.subtitleDarkMode}`}>
      <div className={styles.lineOneWrapper}>
        <div className={isLightOn ? `${styles.lineOne} ${styles.lineOneLightMode}` : `${styles.lineOne} ${styles.lineOneDarkmode}`}></div>
      </div>
      <h2>{title}</h2>
      <div className={styles.lineTwoWrapper}>
        <div className={isLightOn ? `${styles.lineTwo} ${styles.lineTwoLightMode}` : `${styles.lineTwo} ${styles.lineTwoDarkmode}`}></div>
      </div>
    </div>
  );
};

export default Subtitle;
