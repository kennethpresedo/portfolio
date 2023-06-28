import styles from './GetSwole.module.scss'
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function GetSwole() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div className={styles.container}>

                <span className={styles.partB} data-aos="fade-left">
                    <a className={styles.link} href="https://get-swole-gym.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <img className={styles.pic} src="https://i.imgur.com/HcLI7iE.png" alt='' />
                    </a>
                </span>
                
                <span className={styles.partA} data-aos="fade-right">Get Swole Fitness App<br />
                    <span className={styles.text}>
                        Front-end React application with the ability to browse, search, and see related exercises from one place. Using <em>MaterialUI</em> for deisign and dual <em>RapidAPI</em> API's for exercise database, and see related exercise videos. Clicking any exercise with show you detail, similar target muscle exercises and similar equipment exercises.
                    </span>
                    <a data-aos="flip-up" className={styles.githubLink} href="https://github.com/kennethpresedo/fitnessApp" target="_blank" rel="noopener noreferrer">View Github</a>
                </span>

            </div>

        </>
    )
}