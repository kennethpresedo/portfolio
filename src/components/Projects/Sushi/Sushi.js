import styles from './Sushi.module.scss'

export default function Sushi() {
    return (
        <>
            <span className={styles.app}>Taste of Tokyo<br />
                <p className={styles.text}>
                Sushi ordering service on a single-page HTML and CSS designed site. Developed with Vits.js, animations added with AOS (Animate On Scroll Library).                </p>
                <a className={styles.githubLink} href="https://github.com/kennethpresedo/sushi" target="_blank" rel="noopener noreferrer">View Github.</a>
            </span>
            <a className={styles.link} href="https://tasteoftokyo.netlify.app/" target="_blank" rel="noopener noreferrer">
                <img className={styles.Sushi} src="https://i.imgur.com/PtT74vm.png" alt='' />
            </a>
        </>
    )
}