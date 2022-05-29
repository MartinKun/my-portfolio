import styles from "./Contact.module.css";
import Title from "../../components/title/Title";
import Section from "../../components/section/Section";
import Form from "../../components/form/Form";

const Contact = () => {
  return (
    <Section background={"contact"} className={styles.contact}>
      <Title color={"#ffffff"} title={"Contact Me"} />
      <Form />
    </Section>
  );
};

export default Contact;
