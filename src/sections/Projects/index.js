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
  const [works, setWorks] = useState({ array: [], page: 0, limitItems: 3 });
  const [isShowMore, setIsShowMore] = useState(false);
  const [callbacks, setCallBacks] = useState({
    error: false,
    loadingFirstWorks: false,
    loadingMoreWorks: false,
  });

  const handleClick = () => {
    setCallBacks((prevState) => ({ ...prevState, loadingMoreWorks: true }));
    getFeaturedWorks(works.page)
      .then((response) => {
        if (response.data.length + works.array.length === works.limitItems) {
          setWorks((prevState) => ({
            array: [...prevState.array, ...response.data],
            page: works.page + 1,
            limitItems: works.limitItems + 3,
          }));
          setIsShowMore(true);
          setCallBacks((prevState) => ({
            ...prevState,
            loadingMoreWorks: false,
          }));
        } else {
          setWorks((prevState) => ({
            array: [...prevState.array, ...response.data],
            page: works.page + 1,
            limitItems: works.limitItems + 3,
          }));
          setIsShowMore(false);
          setCallBacks((prevState) => ({
            ...prevState,
            loadingMoreWorks: false,
          }));
        }
      })
      .catch((error) => {
        console.log(error);
        setCallBacks((prevState) => ({
          ...prevState,
          loadingMoreWorks: false,
          error: true,
        }));
      });
  };

  useEffect(() => {
    setCallBacks((prevState) => ({ ...prevState, loadingFirstWorks: true }));
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
          setCallBacks((prevState) => ({
            ...prevState,
            loadingFirstWorks: false,
          }));
        } else {
          setWorks((prevState) => ({
            ...prevState,
            array: response.data,
            page: works.page + 1,
            limitItems: works.limitItems + 3,
          }));
          setIsShowMore(false);
          setCallBacks((prevState) => ({
            ...prevState,
            loadingFirstWorks: false,
          }));
        }
      })
      .catch((error) => {
        console.log(error);
        setCallBacks((prevState) => ({
          ...prevState,
          loadingFirstWorks: false,
          error: true,
        }));
      });
  }, []);

  return (
    <div className={styles.projects}>
      <TitleSection
        title={language.english ? "Works" : "Trabajos"}
        icon={"portfolio"}
      />
      <Container>
        { reveal.works &&
        <div className={styles.works}>
          {callbacks.loadingFirstWorks && (
            <div style={{ margin: "auto" }}>
              <Loader type={"page"} />
            </div>
          )}
          {works.array.map((project, index) => (
            <ProjectCard
              project={project}
              orientation={(index + 1) % 2 === 0 ? "left" : "right"}
              key={project.id}
            />
          ))}

          {isShowMore && (
            <button
              className={
                isLightOn
                  ? styles.showMoreBtnLightMode
                  : styles.showMoreBtnDarkMode
              }
              onClick={handleClick}
            >
              {callbacks.loadingMoreWorks && (
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "0 auto",
                  }}
                >
                  <Loader type={"button"} />
                  {language.english ? "Loading..." : "Cargando..."}
                </span>
              )}
              {!callbacks.loadingMoreWorks &&
                (language.english ? "Show More" : "Mostrar Más")}
            </button>
          )}
          {callbacks.error && <ErrorMessage />}
        </div>
        }
      </Container>
    </div>
  );
};

export default Projects;
