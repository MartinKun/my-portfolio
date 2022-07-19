import styles from "./style.module.css";
import { ReactComponent as RoomSprites } from "../../assets/room-sprites1.svg";
import { useContext, useEffect, useState } from "react";
import ThemeContext from "../../context/ThemeContext";
import AnimationContext from "../../context/AnimationContext";

const Room = () => {
  const { isLightOn, setIsLightOn } = useContext(ThemeContext);
  const { isAnimatedFinished } = useContext(AnimationContext);
  const [clickCount, setClickCount] = useState({ clicks: 0 });
  const [isClickOnSwitch, setIsClickOnSwitch] = useState(false);

  const handleClick = () => {
    setClickCount({ clicks: clickCount.clicks + 1 });

    if (clickCount.clicks === 0 || clickCount.clicks % 2 === 0) {
      setIsLightOn(true);
      setIsClickOnSwitch(true);
    } else {
      setIsLightOn(false);
      setIsClickOnSwitch(true);
    }
  };

  useEffect(() => {
    if (isClickOnSwitch) {
      setTimeout(() => {
        setIsClickOnSwitch(false);
      }, 200);
    }
  }, [isClickOnSwitch]);

  return (
    <div className={styles.roomContainer}>
      <RoomSprites
        className={
          isClickOnSwitch
            ? isLightOn
              ? `${styles.room} ${styles.lightAnimatedOn}`
              : `${styles.room} ${styles.lightAnimatedOff}`
            : isLightOn
            ? `${styles.room}  ${styles.lightOn}`
            : `${isAnimatedFinished ? styles.room : styles.roomAppear}  ${styles.lightOff}`
        }
      />
      <div className={styles.clickArea} onClick={handleClick}></div>
    </div>
  );
};

export default Room;
