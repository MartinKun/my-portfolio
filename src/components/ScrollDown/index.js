import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState, useEffect } from "react";
import ThemeContext from "../../context/ThemeContext";
import AnimationContext from "../../context/AnimationContext";
import ScrollRevealContext from "../../context/ScrollRevealContext";

const ScrollDown = (props) => {
  const { isAnimatedFinished } = useContext(AnimationContext);
  const { isLightOn } = useContext(ThemeContext);

  const [scroll, setScroll] = useState(0);
  const [isShowing, setIsShowing] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", controlScroll);
    return () => {
      window.removeEventListener("scroll", controlScroll);
    };
  }, []);

  useEffect(() => {
    if (scroll > 400) {
      setIsShowing(false);
    } else {
      setIsShowing(true);
    }
  }, [scroll]);

  const controlScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <>
      {isShowing && (
        <div className={styles.wrapper}>
          <div
            className={
              isAnimatedFinished ? styles.scrollDown : styles.scrollDownAppear
            }
            onClick={() => props.selectSection("footer")}
          >
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
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className={styles.arrowIcon}
                  />
                </div>
                <div
                  class={`${styles.arrowOne} ${styles.animated} ${styles.hinge} ${styles.zoomIn}`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ScrollDown;
