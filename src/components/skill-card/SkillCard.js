import styles from "./SkillCard.module.css";
import Java from "./logos/Java";
import Javascript from "./logos/Javascript";
import MySql from "./logos/MySql";
import Spring from "./logos/Spring";
import Html from "./logos/Html";
import PostgreSql from "./logos/PostgreSql";
import React from "./logos/React";
import Css from "./logos/Css";

const SkillCard = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.logoImage}>
        {props.name === "java" && <Java />}

        {props.name === "spring" && <Spring />}

        {props.name === "postgresql" && <PostgreSql />}

        {props.name === "mysql" && <MySql />}

        {props.name === "html" && <Html />}

        {props.name === "css" && <Css />}

        {props.name === "javascript" && <Javascript />}

        {props.name === "react" && <React />}
      </div>
    </div>
  );
};

export default SkillCard;
