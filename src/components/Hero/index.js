import { useContext } from "react";
import AnimationContext from "../../context/AnimationContext";
import LanguageContext from "../../context/LanguageContext";
import ThemeContext from "../../context/ThemeContext";
import Container from "../Container";
import LetterSpacingBox from "../LetterSpacingBox";
import PdfLogo from "../Logos/PdfLogo";
import Room from "../Room";
import styles from "./style.module.css";
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const { isAnimatedFinished } = useContext(AnimationContext);
  const { isLightOn } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/resume_pdf');
  }

  return (
    <div className={styles.hero}>
      <Container>
        <div className={styles.layout}>
          <div className={styles.columnOne}>
            <div className={styles.presentationTitles}>
              <h2>
                <span
                  className={
                    isLightOn ? styles.nameLightMode : `${isAnimatedFinished ? styles.nameDarkMode : styles.nameAppear}`
                  }
                >
                  MARTÍN
                </span>
                <span className={styles.surName}> KUN</span>
              </h2>

              <LetterSpacingBox
                string={language.english ? "BACKEND DEVELOPER" : "DESARROLLADOR BACKEND"}
                theme={isLightOn ? "lightMode" : "darkMode"}
              />

              <button
              onClick={handleClick}
                className={
                  isLightOn ? styles.resumeLightMode : `${isAnimatedFinished ? styles.resumeDarkMode : styles.resumeAppear}`
                }
              >
                <PdfLogo isLightOn={isLightOn} /> <span>{language.english ? "RESUME" : "CV"}</span>
              </button>
            </div>
          </div>
          <div className={styles.columnTwo}>
            <Room />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
