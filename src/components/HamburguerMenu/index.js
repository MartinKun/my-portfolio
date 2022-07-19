import styles from "./style.module.css";

const HamburguerMenu = (props) => {

  return (
    <div className={styles.toggleHamburguer}>
      {!props.isMenuOpened && (
        <div
          className={styles.hamburguer}
          onClick={() => props.setIsMenuOpened(true)}
        >
          <div className={styles.firstLineHamburguer}></div>
          <div className={styles.secondLineHamburguer}></div>
          <div className={styles.thirdLineHamburguer}></div>
        </div>
      )}
      {props.isMenuOpened && (
        <div className={styles.hamburguer} onClick={() => props.setIsMenuOpened(false)}>
          <div className={styles.firstLineClosed}></div>
          <div className={styles.secondLineClosed}></div>
          <div className={styles.thirdLineClosed}></div>
        </div>
      )}
    </div>
  );
};

export default HamburguerMenu;
