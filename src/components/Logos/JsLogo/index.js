import { useContext, useState } from "react";
import ThemeContext from "../../../context/ThemeContext";
import LogoContainer from "../../LogoContainer";
import styles from "./style.module.css";

const JsLogo = () => {
  const { isLightOn } = useContext(ThemeContext);
  const [isMouseEnter, setIsMouseEnter] = useState(false);

  return (
    <LogoContainer>
      <svg
        onMouseEnter={() => setIsMouseEnter(true)}
        onMouseLeave={() => setIsMouseEnter(false)}
        className={styles.jsLogo}
        xmlns="http://www.w3.org/2000/svg"
        width="14em"
        height="14em"
        viewBox="0 0 32 32"
      >
        <path
          className={
            isMouseEnter
              ? styles.pathOneMouseEnter
              : isLightOn
              ? styles.pathOneLightMode
              : styles.pathOneDarkMode
          }
          d="M0 0h32v32h-32zM29.38 24.37c-0.234-1.464-1.188-2.688-4.005-3.833-0.979-0.458-2.073-0.781-2.396-1.521-0.12-0.438-0.141-0.677-0.063-0.938 0.203-0.865 1.219-1.12 2.021-0.88 0.521 0.161 1 0.557 1.302 1.198 1.38-0.901 1.38-0.901 2.339-1.5-0.359-0.557-0.536-0.802-0.781-1.036-0.839-0.943-1.958-1.422-3.776-1.38l-0.943 0.12c-0.901 0.219-1.76 0.698-2.281 1.339-1.516 1.719-1.078 4.719 0.76 5.964 1.818 1.359 4.479 1.656 4.823 2.938 0.318 1.563-1.161 2.063-2.625 1.88-1.078-0.24-1.677-0.781-2.339-1.781l-2.438 1.401c0.276 0.641 0.599 0.917 1.078 1.479 2.318 2.339 8.12 2.219 9.161-1.339 0.036-0.12 0.318-0.943 0.099-2.198zM17.401 14.708h-2.995c0 2.583-0.016 5.151-0.016 7.74 0 1.641 0.083 3.151-0.182 3.615-0.443 0.917-1.573 0.802-2.089 0.641-0.526-0.26-0.797-0.62-1.104-1.141-0.089-0.141-0.151-0.26-0.172-0.26l-2.432 1.5c0.406 0.839 1 1.563 1.766 2.021 1.141 0.682 2.672 0.901 4.276 0.542 1.042-0.302 1.943-0.922 2.411-1.88 0.682-1.24 0.536-2.76 0.531-4.464 0.016-2.74 0-5.479 0-8.24z"
          fill="#ffffff"
        />
      </svg>
    </LogoContainer>
  );
};

export default JsLogo;
