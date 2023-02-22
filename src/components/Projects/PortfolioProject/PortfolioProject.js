import styles from './PortfolioProject.module.scss'

export default function PortfolioProject() {
    return (
        <>
            <span className={styles.app}>Portfolio.<br />
                <p className={styles.text}>
                    Frontend React App JavaScript, SCSS, CSS, HTML. Deployed using .com.
                </p>
                <a className={styles.githubLink} href="https://github.com/kennethpresedo/portfolio" target="_blank" rel="noopener noreferrer">View Github.</a>
            </span>
                <img className={styles.portfolioProject} src="https://i.imgur.com/FYNH2rw.jpg" alt='' />
        </>
    )
}