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
                <span className={styles.partA} data-aos="fade-right"><br />
                    <span className={styles.text}>

                    </span>
                    <a data-aos="flip-up" className={styles.githubLink} href="" target="_blank" rel="noopener noreferrer">View Github</a>
                </span>
                <span className={styles.partB} data-aos="fade-left">
                    <a className={styles.link} href="" target="_blank" rel="noopener noreferrer">
                        <img className={styles.pic} src="" alt='' />
                    </a>
                </span>

            </div>

        </>
    )
}