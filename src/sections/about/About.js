import styles from "./About.module.css";
import Section from "../../components/section/Section";
import Title from "../../components/title/Title";
import { ReactComponent as Photo } from "../../assets/photo.svg";

const About = () => {
  const about = "about";
  return (
    <Section background={about}>
      <div className={styles.about}>
        <Title color={"#0979b0"} title={"About Me"} />
        <div className={styles.descriptionContainer}>
          <div className={styles.photo}>
            <Photo className={styles.photoSvg}/>
          </div>
          <div className={styles.description}>
            <p>
              Hi, <span>I'm Martín,</span> a self-taught developer. I'm passionate about
              Java, data structures and server side programming.
            </p>

            <p>
              I am seeking a Fresher <span>Back-end/ Full-stack Developer</span> position so
              I can enhance my knowledge of web services development and grow with the
              organization.
            </p>

            <div className={styles.detail}>
              <p><span>Language:</span> Spanish / English Basic</p>
              <p><span>Email:</span> martinkunbrc@hotmail.com</p>
              <p><span>Location:</span> San Carlos de Bariloche - Argentina</p>
              <p><span>Gender:</span> Male &nbsp; <span>Age:</span> 32</p>


            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
