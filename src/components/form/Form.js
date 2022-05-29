import styles from "./Form.module.css";
import emailjs from 'emailjs-com';

const Form = () => {

    const sendMail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_0us6ccs","template_21pnagn", e.target, "7YIo4phA9uWo7W7kN").then(res => {
            alert("The mail was sent successfully");
            console.log(res);
        })
    }

  return (
    <form className={styles.form} onSubmit={sendMail}>
      <input type={'text'} className={styles.name} id="name" name="name" placeHolder={"Your Name"}/>
      <input type={'email'} className={styles.email} id="email" name="email" placeHolder={"Email adress"}/>
      <input type={'subject'} className={styles.subject} id="subject" name="subject" placeHolder={"Subject"}/>
      <textarea className={styles.message} id="message" name="message" placeHolder={"Message"}/>
      <button type="submit" className={styles.btnSubmit}>SEND MESSAGE</button>
    </form>
  );
};

export default Form;
