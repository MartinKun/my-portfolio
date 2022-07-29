import { useContext, useState } from "react";
import LanguageContext from "../../context/LanguageContext";
import ThemeContext from "../../context/ThemeContext";
import styles from "./style.module.css";

const Footer = () => {
  const { isLightOn } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  const [isMouseEnterLinkedinIcon, setIsMouseEnterLinkedinIcon] =
    useState(false);
  const [isMouseEnterGitHubIcon, setIsMouseEnterGitHubIcon] = useState(false);

  return (
    <div
      className={
        isLightOn
          ? `${styles.footer} ${styles.footerLightMode}`
          : `${styles.footer} ${styles.footerDarkMode}`
      }
    >
      <ul>
        <li
          onMouseEnter={() => setIsMouseEnterLinkedinIcon(true)}
          onMouseLeave={() => setIsMouseEnterLinkedinIcon(false)}
        >
          <a
            href="https://www.linkedin.com/in/mart%C3%ADn-kun-b13620209/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-linkedin"
            >
              <title>LinkedIn</title>
              <path
                className={
                  isMouseEnterLinkedinIcon
                    ? styles.logoHover
                    : isLightOn
                    ? styles.logoLightMode
                    : styles.logoDarkMode
                }
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
              ></path>
              <rect
                className={
                  isMouseEnterLinkedinIcon
                    ? styles.logoHover
                    : isLightOn
                    ? styles.logoLightMode
                    : styles.logoDarkMode
                }
                x="2"
                y="9"
                width="4"
                height="12"
              ></rect>
              <circle
                className={
                  isMouseEnterLinkedinIcon
                    ? styles.logoHover
                    : isLightOn
                    ? styles.logoLightMode
                    : styles.logoDarkMode
                }
                cx="4"
                cy="4"
                r="2"
              ></circle>
            </svg>
          </a>
        </li>
        <li
          onMouseEnter={() => setIsMouseEnterGitHubIcon(true)}
          onMouseLeave={() => setIsMouseEnterGitHubIcon(false)}
        >
          <a href="https://github.com/MartinKun" target="_blank">
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
      </ul>

      <div>
        {language.english
          ? "Designed & Developed by Martín Kun"
          : "Diseñado y Desarrollado por Martín Kun"}
      </div>
    </div>
  );
};

export default Footer;
