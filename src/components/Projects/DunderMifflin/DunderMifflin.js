import styles from './DunderMifflin.module.scss'

export default function DunderMifflin() {
    return (
        <>
            <span className={styles.app}>Dunder Mifflin Game.<br />
                <p className={styles.text}>
                    Frontend Game App using JavaScript, CSS, HTML. Game was created using DOM Manipulation and Object Oriented Programming (OOP). Deployed using Github-Pages. 
                </p>
                <a className={styles.githubLink} href="https://github.com/kennethpresedo/Dunder-Mifflin-Game" target="_blank" rel="noopener noreferrer">View Github.</a>
            </span>
            <a className={styles.link} href="https://kennethpresedo.github.io/Dunder-Mifflin-Game/#" target="_blank" rel="noopener noreferrer">
                <img className={styles.dunderMifflin} src="https://i.imgur.com/Rf5Kz3e.jpg" alt='' />
            </a>
        </>
    )
}