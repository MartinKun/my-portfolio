import styles from './style.module.css';

const LogoContainer = (props) => {
  return (
    <div className={styles.container}>{props.children}</div>
  )
}

export default LogoContainer