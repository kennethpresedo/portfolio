import styles from './Sumz.module.scss'

export default function Sumz() {
    return (
        <>
            <span className={styles.app}>Summarize Articles with OpenAI GPT-4.<br />
                <p className={styles.text}>
                    Single page React App created using ViteJS, ReduxJS, ReactRedux, and TailwindCSS. Take any article and summarize it using OpenAI GPT-4. API provided by RapidAPI.
                </p>
                <a className={styles.githubLink} href="https://github.com/kennethpresedo/AI-Summarizer" target="_blank" rel="noopener noreferrer">View Github.</a>
            </span>
            <a className={styles.link} href="https://aesthetic-croquembouche-cc4a76.netlify.app/" target="_blank" rel="noopener noreferrer">
                <img className={styles.Sumz} src="https://i.imgur.com/eqRtnS0.png" alt='' />
            </a>
        </>
    )
}