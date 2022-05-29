import styles from "./Slider.module.css";
import SkillCard from "../skill-card/SkillCard";

const Slider = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.container}>
        <SkillCard name={"java"} />
        <SkillCard name={"spring"} />
        <SkillCard name={"postgresql"} />
        <SkillCard name={"mysql"} />
        <SkillCard name={"html"} />
        <SkillCard name={"css"} />
        <SkillCard name={"javascript"} />
        <SkillCard name={"react"} />

        <SkillCard name={"java"} />
        <SkillCard name={"spring"} />
        <SkillCard name={"postgresql"} />
        <SkillCard name={"mysql"} />
        <SkillCard name={"html"} />
        <SkillCard name={"css"} />
        <SkillCard name={"javascript"} />
        <SkillCard name={"react"} />
      </div>
    </div>
  );
};

export default Slider;
