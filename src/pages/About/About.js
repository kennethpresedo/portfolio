import React from 'react';
import styles from './About.module.scss'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import Linkedin from '../../components/Socials/Linkedin/Linkedin';
import AboutMe from '../../components/AboutMe/AboutMe';
import Github from '../../components/Socials/Github/Github';
import Certificate from '../../components/Socials/Certificate/Certificate';
import Resume from '../../components/Socials/Resume/Resume';

export default function About() {
    return (
        <>
            <Nav />
            <span className={styles.header}>About Me.</span>

            <div className={styles.aboutMe}>
                <span className={styles.about}><AboutMe /></span>
            </div>

            <div className={styles.socials}>
                <a className={styles.socialsLink} href="https://drive.google.com/file/d/1ls4L2JaxQmEUq5iXnN0UO6uKQNRbm7yq/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <span className={styles.linkedin}>Certificate.<Certificate /></span></a>
                <a className={styles.socialsLink} href="https://drive.google.com/file/d/1_KGnQIIqVInclB5zSkAZk-A8_Q9Ma7gR/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <span className={styles.github}>Resume.<Resume /></span></a>
            </div>
            <div className={styles.socials}>
                <a className={styles.socialsLink} href="https://www.linkedin.com/in/kenneth-presedo/" target="_blank" rel="noopener noreferrer">
                    <span className={styles.linkedin}>Linkedin.<Linkedin /></span></a>
                <a className={styles.socialsLink} href="https://www.github.com/kennethpresedo" target="_blank" rel="noopener noreferrer">
                    <span className={styles.github}>Github.<Github /></span></a>
            </div>
            
            <Footer />
        </>
    )
}