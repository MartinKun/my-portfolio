import { useContext, useEffect, useState } from 'react';
import LanguageContext from '../../context/LanguageContext';
import styles from './style.module.css';

const ResumePdf = () => {

  const [isMovile, setIsMovile] = useState(false);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    if(!isMovile && typeof window.orientation !== "undefined"){
      setIsMovile(true);
    }
  }, [])

  return (
    <div className={styles.wrapper}>
      <object
      data={language.english ? require('../../docs/martin-kun-resume.pdf') : require('../../docs/martin-kun-cv.pdf')}
      type="application/pdf"
      width="100%"
      height="100%"
      >
        <br />
        {isMovile &&
        <a href={language.english ? require('../../docs/martin-kun-resume.pdf') : require('../../docs/martin-kun-cv.pdf')}
        download={language.english ? "martin-kun-resume.pdf" : "martin-kun-cv.pdf"}>{language.english ? "Download Martín Kun Resume" : "Descargar Currículum Vitae de Martín Kun"}</a>}

      </object>
    </div>
  )
}

export default ResumePdf