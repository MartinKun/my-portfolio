import styles from "./Navbar.module.css";
import Logo from "../logo/Logo";
import HamburguerMenu from "../../components/hamburguer/HamburguerMenu";

const Navbar = (props) => {
  const open = props.open;
  const setOpen = props.setOpen;

  return (
    <nav className={open ? styles.nav : `${styles.nav} ${styles.menu}`}>
      <Logo />
      <ul
        className={open ? styles.navLinks : `${styles.navLinks} ${styles.menu}`}
      >
        <li
          className={`${styles.navLink} + ${styles.current}`}
          onClick={() => props.selectSection("home")}
        >
          <span>HOME</span>
        </li>
        <li
          className={styles.navLink}
          onClick={() => props.selectSection("about")}
        >
          <span>ABOUT</span>
        </li>
        <li
          className={styles.navLink}
          onClick={() => props.selectSection("skills")}
        >
          <span>SKILLS</span>
        </li>
        <li
          className={styles.navLink}
          onClick={() => props.selectSection("projects")}
        >
          <span>PROJECTS</span>
        </li>
        <li
          className={styles.navLink}
          onClick={() => props.selectSection("contact")}
        >
          <span>CONTACT</span>
        </li>
      </ul>
      <HamburguerMenu props={{ open, setOpen }} />
    </nav>
  );
};

export default Navbar;
