import styles from './Fauxbook.module.scss'

export default function Fauxbook() {
    return (
        <>
            <a className={styles.link} href="https://fauxbook.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <img className={styles.fauxbook} src="https://i.imgur.com/ynNU3qe.jpg" alt='' />
            </a>
            <span className={styles.app}>Fauxbook.<br />
                <p className={styles.text}>
                    Group Project - Full Stack MERN React App: MongoDB, Mongoose, Express, React, NodeJS, JavaScript, AJAX, JSX, CSS, HTML. Authentication and Authorization includes Bcrypt, JosnWebToken. Deployed using Heroku.
                </p>
                <a className={styles.githubLink} href="https://github.com/Antonomy/fauxbook" target="_blank" rel="noopener noreferrer">View Github.</a>
            </span>
        </>
    )
}