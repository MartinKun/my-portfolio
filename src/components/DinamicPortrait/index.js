import styles from './style.module.css';
import {ReactComponent as Photo} from "../../assets/photo.svg"
import ThemeContext from '../../context/ThemeContext';
import { useContext } from 'react';


const DinamicPortrait = () => {

  return (
    <div className={styles.box}>
        <Photo className={styles.photo}/>
    </div>
  )
}

export default DinamicPortrait