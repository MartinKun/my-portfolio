import Section from '../../components/section/Section';
import styles from './Projects.module.css';
import Title from '../../components/title/Title';
import Grid from '../../components/grid/Grid';
import ProjectCard from '../../components/project-card/ProjectCard';

const Projects = () => {
  return (
    <Section background={'projects'}>
      <Title color={"#3e5f8a"} title={"My projects"}/>
      <Grid>
        <ProjectCard name={'parking'} title={'Parking Project'} languages={['Java Swing', 'SQLite']} link={"https://github.com/MartinKun/ParkingProject"}/>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </Grid>
    </Section>
  )
}

export default Projects