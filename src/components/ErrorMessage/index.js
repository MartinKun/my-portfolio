import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import ThemeContext from "../../context/ThemeContext";
import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";

const ErrorMessage = () => {
  const { isLightOn } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  return (
    <div
      className={
        isLightOn
          ? `${styles.error} ${styles.errorLightMode}`
          : `${styles.error} ${styles.errorDarkMode}`
      }
    >
      <FontAwesomeIcon icon={faWarning} style={{ marginRight: "10px" }} />
      {language.english ? (
        <span>Connection Error: Could not connect to server.</span>
      ) : (
        <span>
          Error de conexión: No se ha podido conectar con el servidor.
        </span>
      )}
    </div>
  );
};

export default ErrorMessage;
