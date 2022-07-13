import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const ScrollDown = () => {
  const { isLightOn } = useContext(ThemeContext);

  return (
    <div className={styles.scrollDown}>
      <div className={styles.container}>
        <div
          className={
            isLightOn
              ? `${styles.scrollDownText} ${styles.scrollDownTextLightMode}`
              : `${styles.scrollDownText} ${styles.scrollDownTextDarkMode}`
          }
        >
          SCROLL DOWN
        </div>
        <div
          class={`${styles.arrowContainer} ${styles.animated} ${styles.fadeInDown}`}
        >
          <div class={styles.arrowTwo}>
            <FontAwesomeIcon icon={faAngleDown} className={styles.arrowIcon} />
          </div>
          <div
            class={`${styles.arrowOne} ${styles.animated} ${styles.hinge} ${styles.zoomIn}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ScrollDown;
