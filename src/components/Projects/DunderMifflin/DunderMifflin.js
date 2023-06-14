import styles from './DunderMifflin.module.scss'
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Sushi() {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <>
            <div className={styles.container}>
                <span className={styles.partA} data-aos="fade-right">Dunder Mifflin Game<br />
                    <span className={styles.text}>
                    Frontend Game App using JavaScript, CSS, HTML. Game was created using DOM Manipulation and Object Oriented Programming (OOP). Deployed using Github-Pages. 
                    </span>
                    <a data-aos="flip-up" className={styles.githubLink} href="https://github.com/kennethpresedo/Dunder-Mifflin-Game" target="_blank" rel="noopener noreferrer">View Github</a>
                </span>
                <span className={styles.partB} data-aos="fade-left">
                    <a className={styles.link} href="https://kennethpresedo.github.io/Dunder-Mifflin-Game/#" target="_blank" rel="noopener noreferrer">
                        <img className={styles.pic} src="https://i.imgur.com/Rf5Kz3e.jpg" alt='' />
                    </a>
                </span>

            </div>

        </>
    )
}