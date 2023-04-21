import styles from './DulucLearning.module.scss'

export default function DulucLearning() {
    return (
        <>
            <a className={styles.link} href="https://www.duluclearning.com/" target="_blank" rel="noopener noreferrer">
                <img className={styles.dulucLearning} src="https://i.imgur.com/GxTECvr.jpg" alt='' />
            </a>
            <span className={styles.app}>Duluc Learning Center.<br />
                <p className={styles.text}>
                    Freelance production application created for a client's tutoring company. App was created using React, NodeJS, SCSS and CSS. Application is viewable on both desktop and mobile. Deployed on Netlify.
                </p>
                <a className={styles.githubLink} href="https://github.com/kennethpresedo/duluc_learning_center" target="_blank" rel="noopener noreferrer">View Github.</a>
            </span>
        </>
    )
}