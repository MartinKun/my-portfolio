import { useContext, useEffect, useRef, useState } from "react";
import styles from "./style.module.css";
import Splash from "../../components/Splash";
import SocialList from "../../components/SocialList";
import ScrollDown from "../../components/ScrollDown";
import ThemeContext from "../../context/ThemeContext";
import About from "../../sections/About";
import Projects from "../../sections/Projects";

import Header from "../../sections/Header";
import AnimationContext from "../../context/AnimationContext";
import Contact from "../../sections/Contact";
import Footer from "../../sections/Footer";
import ScrollRevealContext from "../../context/ScrollRevealContext";

function App() {
  const { reveal, setReveal } = useContext(ScrollRevealContext);

  const [scroll, setScroll] = useState(0);

  const { isLightOn } = useContext(ThemeContext);
  const { isAnimatedFinished, setIsAnimatedFinished } =
    useContext(AnimationContext);

  useEffect(() => {
    if (!isAnimatedFinished) {
      setTimeout(() => {
        setIsAnimatedFinished(true);
      }, 3800);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollReveal);
    return () => {
      window.removeEventListener("scroll", scrollReveal);
    };
  }, []);

  useEffect(() => {
    if (
      !reveal.description &&
      scroll > Math.round(home.current.offsetTop + 200)
    ) {
      setReveal((prevState) => ({ ...prevState, description: true }));
    }

    if (!reveal.techs && scroll > Math.round(about.current.offsetTop / 1.55)) {
      setReveal((prevState) => ({ ...prevState, techs: true }));
    }

    if (!reveal.works && scroll > Math.round(works.current.offsetTop / 1.5)) {
      setReveal((prevState) => ({ ...prevState, works: true }));
    }

    if (
      !reveal.contact &&
      scroll > Math.round(contact.current.offsetTop / 1.5)
    ) {
      console.log("Works Reveal");
      setReveal((prevState) => ({ ...prevState, contact: true }));
    }
  }, [scroll]);

  const scrollReveal = () => {
    setScroll(window.scrollY);
  };

  const home = useRef(null);
  const about = useRef(null);
  const works = useRef(null);
  const contact = useRef(null);
  const footer = useRef(null);

  const scrollTo = (section) => {
    setTimeout(() => {
      window.scrollTo({ top: section.current.offsetTop, behavior: "smooth" });
    }, 100);
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
        if(!reveal.about){
          setReveal((prevState) => ({ ...prevState, about: true }));
        }
          scrollTo(works);
        
        break;
      case "contact":
        if(!reveal.about && !reveal.works){
          setReveal((prevState) => ({ ...prevState, about: true, works: true }));
        }
        scrollTo(contact);
        break;
      case "footer":
        if(!reveal.about && !reveal.works && !reveal.contact){
        setReveal((prevState) => ({
          ...prevState,
          about: true,
          works: true,
          contact: true,
        }));
      }
        scrollTo(footer);
        break;
    }
  };

  useEffect(() => {
    if (!isAnimatedFinished) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isAnimatedFinished]);

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

      <div ref={works}>
        <Projects />
      </div>

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
