import styles from './Sushi.module.scss'

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
                <span className={styles.partA} data-aos="fade-right" >Taste of Tokyo<br />
                    <span className={styles.text}>
                        Sushi ordering service on a single-page HTML and CSS designed site. Developed with Vits.js, animations added with AOS (Animate On Scroll Library).
                    </span>
                    <a data-aos="flip-up" className={styles.githubLink} href="https://github.com/kennethpresedo/sushi" target="_blank" rel="noopener noreferrer">View Github</a>
                </span>
                <span className={styles.partB} data-aos="fade-left">
                    <a className={styles.link} href="https://tasteoftokyo.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <img className={styles.pic} src="https://i.imgur.com/PtT74vm.png" alt='' />
                    </a>
                </span>

            </div>

        </>
    )
}