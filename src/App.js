import styles from "./App.module.css";

import Header from "./sections/header/Header";
import Hero from "./sections/hero/Hero";
import About from "./sections/about/About";
import Skills from "./sections/skills/Skills";
import Projects from "./sections/projects/Projects";
import Contact from "./sections/contact/Contact";
import { useEffect, useRef } from "react";

function App() {
  const home = useRef(null);
  const about = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  const scrollTo = (section) => {

    console.log(section.current);

    window.scrollTo({top: section.current.offsetTop, behavior: "smooth"})
  }

  const selectSection = (section) => {

    console.log(section)
    
    switch(section){
      case "home": scrollTo(home);
      break;
      case "about": scrollTo(about);
      break;
      case "skills": scrollTo(skills);
      break;
      case "projects": scrollTo(projects);
      break;
      case "contact": scrollTo(contact);
      break;
    }
  }

  return (
    <div className={styles.app}>

      <Header selectSection={selectSection}/>

      <div ref={home}>
        <Hero />
      </div>
      <div ref={about}>
        <About />
      </div>
      <div ref={skills}>
        <Skills />
      </div>
      <div ref={projects}>
        <Projects />
      </div>
      <div ref={contact}>
        <Contact />
      </div>
    </div>
  );
}

export default App;
