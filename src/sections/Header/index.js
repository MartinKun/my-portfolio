import Logo from "../../components/Logo";
import NavBar from "../../components/NavBar";
import styles from "./style.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
        <Logo />
      <NavBar />
    </div>
  );
};

export default Header;
