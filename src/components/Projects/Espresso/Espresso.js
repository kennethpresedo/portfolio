import styles from './Espresso.module.scss'

export default function Espresso() {
    return (
        <>
            <span className={styles.app}>Espresso Bar.<br />
                <p className={styles.text}>
                    Full Stack MERN React App: MongoDB, Azure CosmosDB, Mongoose, Express, React, NodeJS, JavaScript, AJAX, JSX, SCSS, CSS, HTML. Authentication and Authorization includes Bcrypt, JosnWebToken. Deployed using Microsoft Azure Web App Service
                </p>
                <a className={styles.githubLink} href="https://github.com/kennethpresedo/espresso-bar" target="_blank" rel="noopener noreferrer">View Github.</a>
            </span>
            <a className={styles.link} href="https://kennethpresedo.github.io/Dunder-Mifflin-Game/#" target="_blank" rel="noopener noreferrer">
                <img className={styles.espresso} src="https://i.imgur.com/BtRd9ib.jpg" alt='' />
            </a>
        </>
    )
}