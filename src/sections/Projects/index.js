import { useContext, useState, useEffect } from "react";
import Container from "../../components/Container";
import ProjectCard from "../../components/ProjectCard";
import TitleSection from "../../components/TitleSection";
import LanguageContext from "../../context/LanguageContext";
import ThemeContext from "../../context/ThemeContext";
import { getFeaturedWorks } from "../../service/service";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import styles from "./style.module.css";
import ScrollRevealContext from "../../context/ScrollRevealContext";

const Projects = () => {
  const { reveal } = useContext(ScrollRevealContext);
  const { isLightOn } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const [works, setWorks] = useState({
    array: [
      {
        idWork: 1,
        titleEn: "Parking Management System",
        titleEs: "Sistema de Gestión de Parquímetro",
        descriptionEn: "Desktop application for the management of a parking system, realized with Java. The employee would be able to carry out an appropriate register of the vehicles parked, charge the clients the precise amount of parking time used, and do proper cash control.",
        descriptionEs: "Aplicación de escritorio para la administración de un estacionamiento realizado con Java. El empleado podrá llevar a cabo un registro adecuado de los vehículos aparcados, cobrar por tiempo de utilización y hacer un correcto control de caja.",
        image: "https://i.im.ge/2022/07/21/Fdwt9M.jpg",
        techs: ["Java SE 8", "Swing", "SQLite", "Eclipse Photon"],
        github: "https://github.com/MartinKun/ParkingProject",
        path: null
      },
      {
        idWork: 2,
        titleEn: "Qultur Android",
        titleEs: "Qultur Android",
        descriptionEn: "Android application for a tour guide that shows tourists different points of interest in the city they are visiting, offering them a wide variety of proposals in an easy and fast way. This application is private.",
        descriptionEs: "Aplicación de guía de turismo para android que muestra al turista distintos puntos de interés conectados en la ciudad que está visitando, ofreciéndole una amplia variedad de propuestas de una manera fácil y rápida. La aplicación es privada.",
        image: "https://i.im.ge/2022/08/01/FPbTuh.qultur-mobile.jpg",
        techs: ["Java 11", "Spring", "MySQL", "Android Studio"],
        github: null,
        path: null
      },
      {
        idWork: 3,
        titleEn: "Qultur Web",
        titleEs: "	Qultur Web",
        descriptionEn: "Web version of the Qultur Android App. (In process).",
        descriptionEs: "Versión Web de la App Qultur para Android. (En proceso).",
        image: "https://i.im.ge/2022/08/01/FPbX8Y.qultur-page.jpg",
        techs: ["React", "Google Maps Api"],
        github: null,
        path: null
      }

    ],
  });

  return (
    <div className={styles.projects}>
      <TitleSection
        title={language.english ? "Works" : "Trabajos"}
        icon={"portfolio"}
      />
      <Container>
        {reveal.works && (
          <div className={styles.works}>
            {works.array.map((project, index) => (

              works.limitItems === works.array.length && index + 1 === works.limitItems ? <></> :
                <ProjectCard
                  project={project}
                  orientation={(index + 1) % 2 === 0 ? "left" : "right"}
                  key={project.id}
                />
            ))}

          </div>
        )}
      </Container>
    </div>
  );
};

export default Projects;
