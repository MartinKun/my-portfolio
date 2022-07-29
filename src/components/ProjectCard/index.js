import { useContext, useState } from "react";
import LanguageContext from "../../context/LanguageContext";
import ThemeContext from "../../context/ThemeContext";
import styles from "./style.module.css";

const ProjectCard = (props) => {
  const { isLightOn } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const [isMouseEnterGitHubIcon, setIsMouseEnterGitHubIcon] = useState(false);
  const [isMouseEnterExternalLinkIcon, setIsMouseEnterExternalLinkIcon] =
    useState(false);

  return (
    <div className={styles.card}>
      <div
        className={`${styles.content} ${
          props.orientation === "right"
            ? `${styles.positionRight} ${styles.alignItemsRight} ${styles.justifyRight}`
            : `${styles.positionLeft} ${styles.alignItemsLeft} ${styles.justifyLeft}`
        }`}
      >
        <span
          className={
            isLightOn
              ? `${styles.title} ${styles.textLightMode}`
              : `${styles.title} ${styles.textDarkMode}`
          }
        >
          <h2>
            {language.english ? props.project.titleEn : props.project.titleEs}
          </h2>
        </span>
        <p>
          {language.english
            ? props.project.descriptionEn
            : props.project.descriptionEs}
        </p>
        <div
          className={
            isLightOn
              ? `${styles.techs} ${styles.textLightMode} ${
                  props.orientation === "right"
                    ? `${styles.justifyRight}`
                    : `${styles.justifyLeft}`
                }`
              : `${styles.techs} ${styles.textDarkMode} ${
                  props.orientation === "right"
                    ? `${styles.justifyRight}`
                    : `${styles.justifyLeft}`
                }`
          }
        >
          <ul>
            {props.project.techs.map((tech, index) => (
              <li>
                {tech}
                {props.project.techs.length !== index + 1 ? "," : "."}
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`${styles.links} ${
            props.orientation === "right"
              ? `${styles.justifyRight}`
              : `${styles.justifyLeft}`
          }`}
        >
          <ul>
            {props.project.github && (
              <li
                onMouseEnter={() => setIsMouseEnterGitHubIcon(true)}
                onMouseLeave={() => setIsMouseEnterGitHubIcon(false)}
              >
                <a href={props.project.github} target="blank_">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-github"
                  >
                    <title>GitHub</title>
                    <path
                      className={
                        isMouseEnterGitHubIcon
                          ? styles.logoHover
                          : isLightOn
                          ? styles.logoLightMode
                          : styles.logoDarkMode
                      }
                      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                    ></path>
                  </svg>
                </a>
              </li>
            )}
            {props.project.path && (
              <li
                onMouseEnter={() => setIsMouseEnterExternalLinkIcon(true)}
                onMouseLeave={() => setIsMouseEnterExternalLinkIcon(false)}
              >
                <a href={props.project.path} target="blank_">
                  <svg
                    className={
                      isMouseEnterExternalLinkIcon
                        ? styles.logoHover
                        : isLightOn
                        ? styles.logoLightMode
                        : styles.logoDarkMode
                    }
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <title>External Link</title>
                    <path
                      className={
                        isMouseEnterExternalLinkIcon
                          ? styles.logoHover
                          : isLightOn
                          ? styles.logoLightMode
                          : styles.logoDarkMode
                      }
                      d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                    ></path>
                    <polyline
                      className={
                        isMouseEnterExternalLinkIcon
                          ? styles.logoHover
                          : isLightOn
                          ? styles.logoLightMode
                          : styles.logoDarkMode
                      }
                      points="15 3 21 3 21 9"
                    ></polyline>
                    <line
                      className={
                        isMouseEnterExternalLinkIcon
                          ? styles.logoHover
                          : isLightOn
                          ? styles.logoLightMode
                          : styles.logoDarkMode
                      }
                      x1="10"
                      y1="14"
                      x2="21"
                      y2="3"
                    ></line>
                  </svg>
                </a>
              </li>
            )}
          </ul>
          <a href=""></a>
        </div>
      </div>
      <div
        className={`${styles.imageWrapper} ${
          props.orientation === "left"
            ? `${styles.justifyRight}`
            : `${styles.justifyLeft}`
        }`}
      >
        <img className={styles.image} src={props.project.image} />
      </div>
    </div>
  );
};

export default ProjectCard;
