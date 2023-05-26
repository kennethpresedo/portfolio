import styles from './Codex.module.scss'

export default function Codex() {
    return (
        <>
            <a className={styles.link} href="https://code-x-clone-fu9bkq6qa-kennethpresedo.vercel.app/" target="_blank" rel="noopener noreferrer">
                <img className={styles.codex} src="https://i.imgur.com/7nn3nku.jpg" alt='' />
            </a>
            <span className={styles.app}>Codex Clone App.<br />
                <p className={styles.text}>
                Using OpenAI GPT3's model API you're able to convert plain english into code, or ask it anything! Single page web app created using HTML, CSS, Javascript, Vite.JS, Node.JS, OpenAI. Client-side deployed using Vercel, server-side deployed using Render. (Site is safe to use if you get a "deceptive site" warning in browser)
                </p>
                <a className={styles.githubLink} href="https://github.com/kennethpresedo/code-x_clone" target="_blank" rel="noopener noreferrer">View Github.</a>
            </span>
        </>
    )
}