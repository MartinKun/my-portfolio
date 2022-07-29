import styles from "./style.module.css";
import emailjs from "emailjs-com";
import LanguageContext from "../../context/LanguageContext";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const Form = () => {
  const { isLightOn } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  const sendMail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0us6ccs",
        "template_21pnagn",
        e.target,
        "7YIo4phA9uWo7W7kN"
      )
      .then((res) => {
        alert(language.english ? "The mail was sent successfully" : "El correo ha sido enviado exitosamente.");
        console.log(res);
      });
  };

  return (
    <form className={styles.form} onSubmit={sendMail}>
      <input
        type={"text"}
        className={styles.name}
        id="name"
        name="name"
        placeHolder={language.english ? "Your Name" : "Nombre"}
      />
      <input
        type={"email"}
        className={styles.email}
        id="email"
        name="email"
        placeHolder={language.english ? "Email adress" : "Dirección de Mail"}
      />
      <input
        type={"subject"}
        className={styles.subject}
        id="subject"
        name="subject"
        placeHolder={language.english ? "Subject" : "Asunto"}
      />
      <textarea
        className={styles.message}
        id="message"
        name="message"
        placeHolder={language.english ? "Message" : "Mensaje"}
      />
      {/*<div className={styles.button}>
        <button type="submit" className={isLightOn ? styles.btnSubmitLightMode : styles.btnSubmitDarkMode}>
          {language.english ? "SEND MESSAGE" : "ENVIAR"}
        </button>
      </div>*/}
    </form>
  );
};

export default Form;
