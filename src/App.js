import { useContext, useEffect, useRef } from "react";
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

  const home = useRef(null);
  const about = useRef(null);
  const works = useRef(null);
  const contact = useRef(null);
  const footer = useRef(null);

  const scrollTo = (section) => {
    window.scrollTo({ top: section.current.offsetTop, behavior: "smooth" });
  };

  const selectSection = (section) => {
    switch (section) {
      case "home":
        scrollTo(home);
        break;
      case "about":
        scrollTo(about);
        break;
      case "works":
        scrollTo(works);
        break;
      case "contact":
        scrollTo(contact);
        break;
      case "footer":
        scrollTo(footer);
        break;
    }
  };

  return (
    <div
      className={
        isLightOn
          ? `${styles.app} ${styles.lightMode}`
          : `${styles.app} ${styles.darkMode}`
      }
    >
      <Splash />
      <ScrollDown selectSection={selectSection} />
      <SocialList />
      <div ref={home}>
        <Header selectSection={selectSection} />
      </div>
      <div ref={about}>
        <About />
      </div>
      {
        <div ref={works}>
          <Projects />
        </div>
      }
      <div ref={contact}>
        <Contact />
      </div>
      <div ref={footer}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
