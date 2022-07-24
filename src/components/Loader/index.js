import { useContext } from 'react';
import LanguageContext from '../../context/LanguageContext';
import styles from './style.module.css';

const Loader = ({type}) => {
  const { language } = useContext(LanguageContext);
  return (
    <div>
        <div class={type === "button" ? `${styles.loader} ${styles.button}` : `${styles.loader} ${styles.page}`}></div>
        <br />
        { type === "page" && <h1>{language.english ? "Loading..." : "Cargando..."}</h1>}
    </div>
  )
}

export default Loader