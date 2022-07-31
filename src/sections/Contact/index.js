import { useContext } from "react";
import Container from "../../components/Container";
import TitleSection from "../../components/TitleSection";
import LanguageContext from "../../context/LanguageContext";
import ThemeContext from "../../context/ThemeContext";
import styles from "./style.module.css";
import { ReactComponent as Mail } from "../../assets/mail.svg";
import Form from "../../components/Form";
import ScrollRevealContext from "../../context/ScrollRevealContext";

const Contact = () => {
  const { language } = useContext(LanguageContext);
  const { reveal } = useContext(ScrollRevealContext);

  return (
    <div className={styles.contact}>
      <TitleSection
        title={language.english ? "Contact" : "Contacto"}
        icon={"contact"}
      />
      <Container>
        {reveal.contact && (
          <div className={styles.wrapper}>
            <Mail className={styles.mail} />
            <Form />
          </div>
        )}
      </Container>
    </div>
  );
};

export default Contact;
