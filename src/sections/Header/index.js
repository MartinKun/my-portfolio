import Container from "../../components/Container";
import NavBar from "../../components/NavBar";
import Hero from "../../components/Hero";
import styles from "./style.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <NavBar />
      <Hero />
    </header>
  );
};

export default Header;
