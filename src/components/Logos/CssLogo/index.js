import { useContext } from "react";
import ThemeContext from "../../../context/ThemeContext";
import LogoContainer from "../../LogoContainer";
import styles from "./style.module.css";
import Overlay from "../../Overlay";

const CssLogo = () => {
  const { isLightOn } = useContext(ThemeContext);
  return (
    <LogoContainer>
      <svg
      id="css"
        className={isLightOn ? `${styles.cssLogo} ${styles.pathOneLightMode}` : `${styles.cssLogo} ${styles.pathOneDarkMode}`}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4.19202 3.14294H19.807L18.387 19.1769L11.983 20.9889L5.61402 19.1759L4.19202 3.14294ZM16.9 6.42394L7.10002 6.42194L7.25802 8.37094L14.787 8.37294L14.598 10.3929H9.66002L9.83902 12.3059H14.436L14.164 14.9259L12 15.5239L9.80302 14.9209L9.66202 13.3519H7.72202L7.93802 16.2189L12 17.4839L15.995 16.3469L16.9 6.42394Z" />
      </svg>
      <Overlay id={"css"} title={"Css"}/>
    </LogoContainer>
  );
};

export default CssLogo;
