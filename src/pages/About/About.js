import React from 'react';
import styles from './About.module.scss'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import Linkedin from '../../components/Linkedin/Linkedin';
import AboutMe from '../../components/AboutMe/AboutMe';

export default function About() {
    return (
        <>
            <Nav />
            <span className={styles.header}>About Me.</span>
            <div className={styles.aboutMe}>
                <span className={styles.about}><AboutMe /></span>
                {/* <span className={styles.linkedin}><Linkedin /></span> */}
            </div>
            <Footer />
        </>
    )
}

