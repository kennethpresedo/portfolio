import styles from './DulucLearning.module.scss'
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function DulucLearning() {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <>
            <div className={styles.container}>

            <span className={styles.partB} data-aos="fade-left">
                    <a className={styles.link} href="https://www.duluclearning.com/" target="_blank" rel="noopener noreferrer">
                        <img className={styles.pic} src="https://i.imgur.com/GxTECvr.jpg" alt='' />
                    </a>
                </span>
                <span className={styles.partA} data-aos="fade-right">Duluc Learning Center<br />
                    <span className={styles.text}>
                    Freelance production application created for a client's tutoring company. App was created using React, NodeJS, SCSS and CSS. Application is viewable on both desktop and mobile. Deployed on Netlify.
                    </span>
                    <a data-aos="flip-up" className={styles.githubLink} href="https://github.com/kennethpresedo/duluc_learning_center" target="_blank" rel="noopener noreferrer">View Github</a>
                </span>

            </div>

        </>
    )
}