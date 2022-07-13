import styles from "./style.module.css";
import { ReactComponent as RoomSprites } from "../../assets/room-sprites.svg";
import { useContext, useState } from "react";
import ThemeContext from "../../context/ThemeContext";

const Room = () => {

  const {isLightOn, setIsLightOn} = useContext(ThemeContext)
  const [clickCount, setClickCount] = useState({ clicks: 0 });

  const handleClick = () => {
    setClickCount({ clicks: clickCount.clicks + 1 });

    if (clickCount.clicks === 0 || clickCount.clicks % 2 === 0) {
      setIsLightOn(true);
    } else {
      setIsLightOn(false);
    }
  };
  return (
    <div className={styles.roomContainer}>
      <RoomSprites
        className={
          isLightOn
            ? `${styles.room}  ${styles.lightOn}`
            : `${styles.room}  ${styles.lightOff}`
        }
      />
      <div className={styles.clickArea} onClick={handleClick}></div>
    </div>
  );
};

export default Room;
