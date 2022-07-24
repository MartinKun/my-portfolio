import { useState, useEffect, useContext } from "react";
import { Spinner, Button } from "react-bootstrap";
import Container from "../../components/Container";
import ErrorMessage from "../../components/ErrorMessage";
import Loader from "../../components/Loader";
import ProjectCard from "../../components/ProjectCard";
import TitleSection from "../../components/TitleSection";
import LanguageContext from "../../context/LanguageContext";
import ThemeContext from "../../context/ThemeContext";
import { getFeaturedWorks } from "../../service/service";
import styles from "./style.module.css";

const Projects = () => {
  const { isLightOn } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const [works, setWorks] = useState({ array: [], page: 0, limitItems: 3 });
  const [isShowMore, setIsShowMore] = useState(false);
  const [callbacks, setCallBacks] = useState({
    error: false,
    loadingFirstWorks: false,
    loadingMoreWorks: false,
  });

  useEffect(() => {
    setCallBacks((prevState) => ({...prevState, loadingFirstWorks: true}));
    getFeaturedWorks(works.page)
      .then((response) => {
        if (response.data.length === works.limitItems) {
          setWorks((prevState) => ({
            ...prevState,
            array: response.data,
            page: works.page + 1,
            limitItems: works.limitItems + 3,
          }));
          setIsShowMore(true);
          setCallBacks((prevState) => ({...prevState, loadingFirstWorks: false}));
        } else {
          setWorks((prevState) => ({
            ...prevState,
            array: response.data,
            page: works.page + 1,
            limitItems: works.limitItems + 3,
          }));
          setIsShowMore(false);
          setCallBacks((prevState) => ({...prevState, loadingFirstWorks: false}));
        }
      })
      .catch((error) => {
        console.log(error);
        setCallBacks((prevState) => ({...prevState, loadingFirstWorks: false, error: true}));
      });
  }, []);

  const handleClick = () => {
    setCallBacks((prevState) => ({...prevState, loadingMoreWorks: true}));
    getFeaturedWorks(works.page)
      .then((response) => {
        if (response.data.length + works.array.length === works.limitItems) {
          setWorks((prevState) => ({
            array: [...prevState.array, ...response.data],
            page: works.page + 1,
            limitItems: works.limitItems + 3,
          }));
          setIsShowMore(true);
          setCallBacks((prevState) => ({...prevState, loadingMoreWorks: false}));
        } else {
          setWorks((prevState) => ({
            array: [...prevState.array, ...response.data],
            page: works.page + 1,
            limitItems: works.limitItems + 3,
          }));
          setIsShowMore(false);
          setCallBacks((prevState) => ({...prevState, loadingMoreWorks: false}));
        }
      })
      .catch((error) => {
        console.log(error);
        setCallBacks((prevState) => ({...prevState, loadingMoreWorks: false, error: true}));
      });
  };

  return (
    <div>
      <TitleSection
        title={language.english ? "Works" : "Trabajos"}
        icon={"portfolio"}
      />
      <div className={styles.wrapper}>
        <Container>
          {callbacks.loadingFirstWorks && <Loader type={"page"} />}
          <div className={styles.featuredProjects}>
            {works.array.map((project, index) => (
              <ProjectCard project={project} index={index} key={project.id} />
            ))}
          </div>
          <div className={styles.otherProjects}>
            
            {isShowMore && (
              <button
                className={
                  isLightOn
                    ? styles.showMoreBtnLightMode
                    : styles.showMoreBtnDarkMode
                }
                onClick={handleClick}
              >
                {callbacks.loadingMoreWorks && 
                  <span style={{"display":"flex", "alignItems": "center", "margin": "0 auto"}}>
                    <Loader type={"button"} />
                    {language.english ? "Loading..." : "Cargando..."}
                  </span>}
                  {!callbacks.loadingMoreWorks && (language.english ? (
                  "Show More"
                ) : (
                  "Mostrar Más"
                ))}
                
              </button>
            )}
            {callbacks.error && <ErrorMessage />}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Projects;
