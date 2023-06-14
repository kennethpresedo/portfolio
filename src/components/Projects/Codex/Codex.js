import styles from './Codex.module.scss'
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Codex() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div className={styles.container}>

                <span className={styles.partB} data-aos="fade-left">
                    <a className={styles.link} href="https://code-x-clone-fu9bkq6qa-kennethpresedo.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <img className={styles.pic} src="https://i.imgur.com/7nn3nku.jpg" alt='' />
                    </a>
                </span>
                
                <span className={styles.partA} data-aos="fade-right">Codex AI<br />
                    <span className={styles.text}>
                        Using OpenAI GPT3's model API you're able to convert plain english into code, code to plain english or ask it anything! Single page web app created using HTML, CSS, Javascript, Vite.JS, Node.JS, OpenAI. Client-side deployed using Vercel, server-side deployed using Render. (Site is safe to use if you get a "deceptive site" warning in browser)
                    </span>
                    <a data-aos="flip-up" className={styles.githubLink} href="https://github.com/kennethpresedo/code-x_clone" target="_blank" rel="noopener noreferrer">View Github</a>
                </span>

            </div>

        </>
    )
}