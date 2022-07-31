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
import ScrollRevealContext from "../../context/ScrollRevealContext";

const About = () => {
  const { reveal } = useContext(ScrollRevealContext);
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
          { reveal.description &&
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
                ? "I develop backend tasks for web, mobile and desktop applications, mainly programming in Java which was my first programming language that i have learned a few years ago.\nTo a lesser extent, I also do frontend works with the objetive that the user experience will be as complete and satisfying as possible.\nI'm a self-taught developer with the objective of continuously improving myself and learn new skills that lead to professional and personal growth. If you have some interesting idea to share with me, do not hesitate to get in touch!"
                : `Desarrollo tareas de backend para aplicaciones web, móviles y de escritorio programando mayormente en Java, el cual fue mi primer lenguaje de programación aprendido hace ya algunos años.\nAunque en menor medida, también realizo trabajos de frontend siempre buscando que la experiencia de usuario sea lo más completa y satisfactoria posible.\nSoy un programador autodidacta que busca continuamente superarse y aprender nuevas habilidades que me ayuden a crecer tanto profesional como personalmente. Si tienes alguna idea interesante que desees compartir conmigo, no dudes en contactarme!`}
            </p>
          </div>
          }
          { reveal.techs &&
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
          }
        </div>
      </Container>
    </div>
  );
};

export default About;
