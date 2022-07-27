import styles from "./style.module.css";

import React, { useContext } from "react";
import Container from "../Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faContactCard, faUser } from "@fortawesome/free-solid-svg-icons";
import ThemeContext from "../../context/ThemeContext";

const TitleSection = ({ title, icon }) => {

  const { isLightOn } = useContext(ThemeContext);

  return (
    <Container>
      <div className={isLightOn ? `${styles.titleSection} ${styles.titleSectionLightMode}` : `${styles.titleSection} ${styles.titleSectionDarkMode}`}>
        <FontAwesomeIcon className={styles.icon} icon={ icon === "portfolio" && faBriefcase || icon === 'contact' && faContactCard || icon === 'about' && faUser} />
        <h2>{title}</h2>
        <div className={styles.lineWrapper}>
          <div className={isLightOn ? `${styles.line} ${styles.lineLightMode}` : `${styles.line} ${styles.lineDarkMode}`}></div>
        </div>
      </div>
    </Container>
  );
};

export default TitleSection;
