import styles from './Sumz.module.scss'
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Sumz() {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <>
            <div className={styles.container}>
                <span className={styles.partA} data-aos="fade-right">Summarize Articles with OpenAI GPT-4<br />
                    <span className={styles.text}>
                        Single page React App created using ViteJS, ReduxJS, ReactRedux, and TailwindCSS. Take any article and summarize it using OpenAI GPT-4. API provided by RapidAPI.
                    </span>
                    <a data-aos="flip-up" className={styles.githubLink} href="https://github.com/kennethpresedo/AI-Summarizer" target="_blank" rel="noopener noreferrer">View Github</a>
                </span>
                <span className={styles.partB} data-aos="fade-left">
                    <a className={styles.link} href="https://aesthetic-croquembouche-cc4a76.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <img className={styles.pic} src="https://i.imgur.com/jTZOTvP.png" alt='' />
                    </a>
                </span>

            </div>

        </>
    )
}