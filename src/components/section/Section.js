import styles from "./Section.module.css";

const Section = ({ background, children }) => {
  const setBackground = (background) => {
    if (background === "hero") {
      return {
        "backgroundImage": "linear-gradient(315deg, #4a6a83 0%, #09203f 74%)",
        "min-height": "840px",
        "max-height": "920px",
        "height": "100vh",
      };
      /*return {"background": "linear-gradient(90deg, #183da4 0%, #08174a 50% )"};*/
    } else if (background === "about") {
      return {
        "background": "#FFFFFF",
        "min-height": "600px",
        "height": "600px",
        "padding": "5rem var(--padding-h-container-l)",
        "max-height": "600px",
        "zIndex": "1",
      };
    } else if (background === "skills") {
      return {
        "background": "#3e5f8a",
        "min-height": "400px",
        "height": "52vh",
        "padding": "5rem var(--padding-h-container-l)",
        "max-height": "500px",
        "zIndex": "1",
      };
    } else if (background === "projects") {
      return {
        "background": "#F0F0F3",
        "padding": "5rem var(--padding-h-container-l)",
        "height": "100vh",
      };
    } else if (background === "contact") {
      return {
        "background": "#2a4f50",
        "min-height": "200px",
        "padding": "5rem var(--padding-h-container-l)",
        "max-height": "500px",
        "zIndex": "1",
      };
    }
  };

  return (
    <section className={styles.section} style={setBackground(background)}>
      {children}
    </section>
  );
};

export default Section;
