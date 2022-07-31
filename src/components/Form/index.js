import styles from "./style.module.css";
import emailjs from "emailjs-com";
import LanguageContext from "../../context/LanguageContext";
import { useContext, useState } from "react";
import ThemeContext from "../../context/ThemeContext";

const Form = () => {
  const { isLightOn } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const [isSending, setIsSending] = useState(false);

  const sendMail = (e) => {
    e.preventDefault();

    console.log(e.target.name.value === "");

    if (
      e.target.name.value === "" ||
      e.target.email.value === "" ||
      e.target.subject.value === "" ||
      e.target.message.value === ""
    ) {
      alert(
        language.english
          ? "The fields cannot be empty"
          : "Los campos no pueden estar vacíos"
      );
      return;
    }

    setIsSending(true);

    emailjs
      .sendForm(
        "service_0us6ccs",
        "template_21pnagn",
        e.target,
        "7YIo4phA9uWo7W7kN"
      )
      .then((res) => {
        setIsSending(false);
        alert(
          language.english
            ? "The mail was sent successfully"
            : "El correo ha sido enviado exitosamente."
        );
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
        type={"text"}
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
      <div className={styles.button}>
        <button
          type="submit"
          className={
            isLightOn ? styles.btnSubmitLightMode : styles.btnSubmitDarkMode
          }
        >
          {isSending && (language.english ? "SENDING..." : "ENVIANDO...")}
          {!isSending && (language.english ? "SEND MESSAGE" : "ENVIAR")}
        </button>
      </div>
    </form>
  );
};

export default Form;
