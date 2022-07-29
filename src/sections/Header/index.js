import NavBar from "../../components/NavBar";
import Hero from "../../components/Hero";
import styles from "./style.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <NavBar selectSection={props.selectSection}/>
      <Hero />
    </header>
  );
};

export default Header;
