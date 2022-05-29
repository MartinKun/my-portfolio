import styles from "./Title.module.css";

const Title = ({ title, color }) => {
  return (
    <div className={styles.title}>
      <h3 style={{ color: `${color}` }}>{title}</h3>
      <div className={styles.line}>
        <div style={{ background: `${color}` }}></div>
      </div>
    </div>
  );
};

export default Title;
