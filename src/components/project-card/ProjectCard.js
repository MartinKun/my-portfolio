import styles from "./ProjectCard.module.css";
import ProjectParking from "../../assets/parkingapp.png";
import GitHubLogo from "./GitHubLogo";
import { useState } from "react";

const ProjectCard = (props) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseOver = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  return (
    <div className={styles.card}>
      <div
        className={styles.container}
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={props?.name === "parking" && ProjectParking}
          className={styles.image}
        ></img>
        {isMouseOver && props?.title && (
          <div className={styles.description}>
            <div>
              <h3>{props?.title}</h3>
              <p>
                {props?.languages && "("}
                {props?.languages?.map(
                  (x, index, array) =>
                    `${x}` + (index !== array.length - 1 ? ", " : "")
                )}
                {props?.languages && ")"}
              </p>
            </div>
            <a href={props?.link}>
              <GitHubLogo />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
