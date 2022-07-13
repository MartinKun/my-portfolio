import styles from "./style.module.css";

const Layout = (props) => {
  return (
    <div className={styles.layout}>
      {props.children}
    </div>
  );
};

export default Layout;
