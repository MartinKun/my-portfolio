import { useContext, useEffect } from "react";
import LanguageContext from "../../context/LanguageContext";
import ThemeContext from "../../context/ThemeContext";
import AnimationContext from "../../context/AnimationContext";
import HamburguerMenu from "../HamburguerMenu";
import useMediaQuery from "../../hooks/useMediaQuery";
import styles from "./style.module.css";

const NavLinks = (props) => {
  const matches = useMediaQuery("(max-width: 880px)");

  const { isLightOn } = useContext(ThemeContext);
  const { language, setLanguage } = useContext(LanguageContext);

  const { isAnimatedFinished } = useContext(AnimationContext);

  useEffect(() => {
    if (matches) {
      if (props.isMenuOpened) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "visible";
      }
    } else {
      props.setIsMenuOpened(false);
      document.body.style.overflow = "visible";
    }
  }, [window.innerWidth, props.isMenuOpened]);

  const changeLanguage = (language) => {
    if (language === "english") {
      setLanguage((prevLanguage) => ({
        ...prevLanguage,
        english: true,
        spanish: false,
      }));
    } else {
      setLanguage((prevLanguage) => ({
        ...prevLanguage,
        english: false,
        spanish: true,
      }));
    }
  };

  return (
    <div>
      <ul
        className={
          isLightOn
            ? props.isMenuOpened
              ? `${styles.navLinks} ${styles.openedMenu} ${styles.navLinksLightMode}`
              : `${styles.navLinks} ${styles.closedMenu} ${styles.navLinksLightMode}`
            : props.isMenuOpened
            ? `${styles.navLinks} ${styles.openedMenu} ${styles.navLinksDarkMode}`
            : `${styles.navLinks} ${styles.closedMenu} ${styles.navLinksDarkMode}`
        }
      >
        <li>
          {language.english ? (
            <span className={!isAnimatedFinished && styles.homeAnimated}>
              HOME
            </span>
          ) : (
            <span className={!isAnimatedFinished && styles.homeAnimated}>
              INICIO
            </span>
          )}
        </li>
        <li>
          {language.english ? (
            <span className={!isAnimatedFinished && styles.aboutAnimated}>
              ABOUT
            </span>
          ) : (
            <span className={!isAnimatedFinished && styles.aboutAnimated}>
              SOBRE MI
            </span>
          )}
        </li>
        <li>
          {language.english ? (
            <span className={!isAnimatedFinished && styles.projectsAnimated}>
              PROJECTS
            </span>
          ) : (
            <span className={!isAnimatedFinished && styles.projectsAnimated}>
              PROYECTOS
            </span>
          )}
        </li>
        <li>
          {language.english ? (
            <span className={!isAnimatedFinished && styles.contactAnimated}>
              CONTACT
            </span>
          ) : (
            <span className={!isAnimatedFinished && styles.contactAnimated}>
              CONTACTO
            </span>
          )}
        </li>
        <li>
          <span
            className={
              language.english
                ? `${!isAnimatedFinished && styles.englishBtn} ${styles.currentLanguage}`
                : `${!isAnimatedFinished && styles.englishBtn}`
            }
            onClick={() => changeLanguage("english")}
          >
            EN
          </span>
          <span
            className={
              language.spanish
                ? `${!isAnimatedFinished && styles.spanishBtn} ${styles.currentLanguage}`
                : !isAnimatedFinished && styles.spanishBtn
            }
            onClick={() => changeLanguage("spanish")}
          >
            ES
          </span>
        </li>
      </ul>
      <HamburguerMenu
        isMenuOpened={props.isMenuOpened}
        setIsMenuOpened={props.setIsMenuOpened}
      />
    </div>
  );
};

export default NavLinks;
