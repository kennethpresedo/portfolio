import styles from './TravelLog.module.scss'

export default function TravelLog() {
    return (
        <>
            <a className={styles.link} href="https://travellog.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <img className={styles.travelLog} src="https://i.imgur.com/Fi55bDL.jpg" alt='' />
            </a>
            <span className={styles.app}>Travel Log.<br />
                <p className={styles.text}>
                    Full Stack MERN React App: MongoDB, Mongoose, Express, React, NodeJS, JavaScript, AJAX, JSX, CSS, HTML. Authentication and Authorization includes Google API with OAuth 2.0. Deployed using Heroku.
                </p>
                <a className={styles.githubLink} href="https://github.com/kennethpresedo/travel-log" target="_blank" rel="noopener noreferrer">View Github.</a>
            </span>
        </>
    )
}