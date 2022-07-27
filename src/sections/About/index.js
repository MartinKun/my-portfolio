import { useContext } from "react";
import Container from "../../components/Container";
import TitleSection from "../../components/TitleSection";
import LanguageContext from "../../context/LanguageContext";
import ThemeContext from "../../context/ThemeContext";
import styles from "./style.module.css";
import DinamicPortrait from "../../components/DinamicPortrait";
import Subtitle from "../../components/Subtitle";
import JavaLogo from "../../components/Logos/JavaLogo";
import SpringLogo from "../../components/Logos/SpringLogo";
import MySqlLogo from "../../components/Logos/MySqlLogo";
import PostgreSql from "../../components/Logos/PostgreSql";
import HtmlLogo from "../../components/Logos/HtmlLogo";
import CssLogo from "../../components/Logos/CssLogo";
import JsLogo from "../../components/Logos/JsLogo";
import ReactLogo from "../../components/Logos/ReactLogo";
import GitLogo from "../../components/Logos/GitLogo";

const About = () => {
  const { isLightOn } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  return (
    <div className={styles.about}>
      <TitleSection
        title={language.english ? "About" : "Sobre mi"}
        icon={"about"}
      />
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.rowOne}>
            <DinamicPortrait />
            <p
              className={
                isLightOn
                  ? `${styles.description} ${styles.descriptionLightMode}`
                  : `${styles.description} ${styles.descriptionDarkMode}`
              }
            >
              {language.english
                ? "I have always been curious about programming. Thus, I started a technical career in the city of Chivilcoy where I ended up being mainly interested in front-end development. Since then, I am constantly seeking training by taking courses and learning new technologies with the aim of improving both professionally and personally every day."
                : "Siempre sentí curiosidad por el mundo de la programación. Así, comencé una tecnicatura en la ciudad de Chivilcoy donde terminé interesándome, principalmente, por el desarrollo front-end. Desde entonces, busco capacitarme continuamente realizando cursos e incorporando nuevas tecnologías con el objetivo de mejorar tanto profesional como personalmente cada día."}
            </p>
          </div>
          <div className={styles.rowTwo}>
            <Subtitle
              title={language.english ? "Technologies" : "Tecnologías"}
            />
            <div className={styles.techBlock}>
              <h2
                className={
                  isLightOn
                    ? styles.techTitleLightMode
                    : styles.techTitleDarkMode
                }
              >
                Backend :{" "}
              </h2>
              <div className={styles.techs}>
                <JavaLogo />
                <SpringLogo />
                <MySqlLogo />
                <PostgreSql />
              </div>
            </div>
            <div className={styles.techBlock}>
              <h2
                className={
                  isLightOn
                    ? styles.techTitleLightMode
                    : styles.techTitleDarkMode
                }
              >
                {language.english
                  ? "Maybe some Frontend :"
                  : "Quizás algo de Frontend :"}
              </h2>
              <div className={styles.techs}>
                <HtmlLogo />
                <CssLogo />
                <JsLogo />
                <ReactLogo />
              </div>
            </div>
            <div className={styles.techBlock}>
              <h2
                className={
                  isLightOn
                    ? styles.techTitleLightMode
                    : styles.techTitleDarkMode
                }
              >
                {language.english ? "Others :" : "Otros :"}
              </h2>
              <div className={styles.techs}>
                <GitLogo />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
