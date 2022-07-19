import { useContext } from "react";
import AnimationContext from "../../context/AnimationContext";
import styles from "./style.module.css";

const LetterSpacingBox = ({ string, theme }) => {
  const { isAnimatedFinished } = useContext(AnimationContext);
  const transformString = (string) => {
    let array = [];

    for (let i = 0; i < string.length; i++) {
      if (i !== string.length) {
        array.push(string.substring(i, i + 1));
      }
    }

    return array;
  };

  return (
    <div className={theme === "lightMode" ? `${styles.box} ${styles.lightMode}`: isAnimatedFinished  ? `${styles.box} ${styles.darkMode}` : `${styles.box} ${styles.boxAppear}`}>
      {transformString(string).map((letter, index) => {
        if (letter === " ") {
          return <div key={index}>&nbsp;</div>;
        } else {
          return <div key={index}>{letter}</div>;
        }
      })}
    </div>
  );
};

export default LetterSpacingBox;
