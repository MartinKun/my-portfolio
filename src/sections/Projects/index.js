import { useState, useEffect } from "react";
import Container from "../../components/Container";
import ProjectCard from "../../components/ProjectCard";
import { getFeaturedWorks } from "../../service/service";
import styles from "./style.module.css";

const Projects = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);

  useEffect(() => {
    getFeaturedWorks()
      .then((response) => {
        console.log(response.data);
        setFeaturedProjects(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.projects}>
      <Container>
        <div className={styles.featuredProjects}>
          {featuredProjects.map((project, index) => (
            <ProjectCard project={project} index={index} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Projects;
