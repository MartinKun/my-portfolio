import { useContext, useEffect, useState } from "react";
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

  const [current, setCurrent] = useState({ name: "home" });

  const handleSelection = (section) => {
    props.selectSection(section);
    setCurrent((prevState) => ({ ...prevState, name: section }));
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
        <li onClick={() => handleSelection("home")}>
          {language.english ? (
            <span
              className={
                !isAnimatedFinished
                  ? styles.homeAnimated
                  : current.name === "home" && styles.current
              }
            >
              HOME
            </span>
          ) : (
            <span
              className={
                !isAnimatedFinished
                  ? styles.homeAnimated
                  : current.name === "home" && styles.current
              }
            >
              INICIO
            </span>
          )}
        </li>
        <li onClick={() => handleSelection("about")}>
          {language.english ? (
            <span
              className={
                !isAnimatedFinished
                  ? styles.aboutAnimated
                  : current.name === "about" && styles.current
              }
            >
              ABOUT
            </span>
          ) : (
            <span
              className={
                !isAnimatedFinished
                  ? styles.aboutAnimated
                  : current.name === "about" && styles.current
              }
            >
              SOBRE MI
            </span>
          )}
        </li>
        <li onClick={() => handleSelection("works")}>
          {language.english ? (
            <span
              className={
                !isAnimatedFinished
                  ? styles.worksAnimated
                  : current.name === "works" && styles.current
              }
            >
              WORKS
            </span>
          ) : (
            <span
              className={
                !isAnimatedFinished
                  ? styles.worksAnimated
                  : current.name === "works" && styles.current
              }
            >
              TRABAJOS
            </span>
          )}
        </li>
        <li onClick={() => handleSelection("contact")}>
          {language.english ? (
            <span
              className={
                !isAnimatedFinished
                  ? styles.contactAnimated
                  : current.name === "contact" && styles.current
              }
            >
              CONTACT
            </span>
          ) : (
            <span
              className={
                !isAnimatedFinished
                  ? styles.contactAnimated
                  : current.name === "contact" && styles.current
              }
            >
              CONTACTO
            </span>
          )}
        </li>
        <li>
          <span
            className={
              language.english
                ? `${!isAnimatedFinished && styles.englishBtn} ${
                    styles.currentLanguage
                  }`
                : `${!isAnimatedFinished && styles.englishBtn}`
            }
            onClick={() => changeLanguage("english")}
          >
            EN
          </span>
          <span
            className={
              language.spanish
                ? `${!isAnimatedFinished && styles.spanishBtn} ${
                    styles.currentLanguage
                  }`
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
