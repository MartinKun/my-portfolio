import styles from "./style.module.css";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const NavBar = () => {
  const { isLightOn } = useContext(ThemeContext);
  return (
    <nav className={isLightOn ? styles.navLightMode : styles.navDarkMode}>

      <ul>
        <li className={`${styles.current}`}>
          <span>HOME</span>
        </li>
        <li className={styles.navLink}>
          <span>ABOUT</span>
        </li>
        <li className={styles.navLink}>
          <span>SKILLS</span>
        </li>
        <li className={styles.navLink}>
          <span>PROJECTS</span>
        </li>
        <li className={styles.navLink}>
          <span>CONTACT</span>
        </li>
      </ul>

      {/*
      <ul className={styles.navLinks}>
        <li className={`${styles.navLink} + ${styles.current}`}>
          <span>HOME</span>
        </li>
        <li className={styles.navLink}>
          <span>ABOUT</span>
        </li>
        <li className={styles.navLink}>
          <span>SKILLS</span>
        </li>
        <li className={styles.navLink}>
          <span>PROJECTS</span>
        </li>
        <li className={styles.navLink}>
          <span>CONTACT</span>
        </li>
      </ul>
        
        */}
    </nav>
  );
};

export default NavBar;
