import { useContext, useEffect } from "react";
import styles from "./App.module.css";
import Splash from "./components/Splash";
import SocialList from "./components/SocialList";
import ScrollDown from "./components/ScrollDown";
import ThemeContext from "./context/ThemeContext";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Header from "./sections/Header";
import AnimationContext from "./context/AnimationContext";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  const { isLightOn } = useContext(ThemeContext);
  const { isAnimatedFinished, setIsAnimatedFinished } =
    useContext(AnimationContext);

  useEffect(() => {
    if (!isAnimatedFinished) {
      setTimeout(() => {
        setIsAnimatedFinished(true);
      }, 4600);
    }
  }, []);

  return (
    <div
      className={
        isLightOn
          ? `${styles.app} ${styles.lightMode}`
          : `${styles.app} ${styles.darkMode}`
      }
    >
      <Splash />
      <ScrollDown />
      <SocialList />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
