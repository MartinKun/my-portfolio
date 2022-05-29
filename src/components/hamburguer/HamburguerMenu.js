import styles from "./HamburguerMenu.module.css";

const HamburguerMenu = ({ props }) => {
  const handleClick = () => {
    if (props.open) {
      props.setOpen(false);
    } else {
      props.setOpen(true);
    }
  };

  return (
    <>
      {props.open ? (
        <div
          className={`${styles.container} ${styles.open}`}
          onClick={handleClick}
        >
          <div className={`${styles.bar1} ${styles.open}`}></div>
          <div className={`${styles.bar2} ${styles.open}`}></div>
          <div className={`${styles.bar3} ${styles.open}`}></div>
        </div>
      ) : (
        <div
          className={`${styles.container} ${styles.close}`}
          onClick={handleClick}
        >
          <div className={`${styles.bar1} ${styles.close}`}></div>
          <div className={`${styles.bar2} ${styles.close}`}></div>
          <div className={`${styles.bar3} ${styles.close}`}></div>
        </div>
      )}
    </>
  );
};

export default HamburguerMenu;
