import React from 'react';
import Section from '../../components/section/Section';
import Slider from '../../components/slider/Slider';
import Title from '../../components/title/Title';
import styles from './Skills.module.css';

const Skills = () => {
  return (
    <Section background={'skills'}>
        <Title title={'My Skills'} color={'var(--color-primary)'}/>
        <Slider />
    </Section>
  )
}

export default Skills