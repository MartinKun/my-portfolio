import { useContext } from "react";
import styles from "./App.module.css";
import Layout from "./components/Layout";
import ScrollDown from "./components/ScrollDown";
import SocialList from "./components/SocialList";
import ThemeContext from "./context/ThemeContext";
import Header from "./sections/Header";
import Hero from "./sections/Hero";

function App() {
  const { isLightOn, setIsLightOn } = useContext(ThemeContext);

  return (
    <div
      className={
        isLightOn
          ? `${styles.app} ${styles.lightMode}`
          : `${styles.app} ${styles.darkMode}`
      }
    >
      <SocialList />
      <ScrollDown />
      <Header />

      <Layout>
        <Hero />
      </Layout>
    </div>
  );
}

export default App;
