import styles from './ContactMe.module.scss'

export default function ContactMe() {
    return (
        <>
            <div className={styles.socials}>
                <a className={styles.socialsLinkedin} href="https://www.linkedin.com/in/kenneth-presedo/" target="_blank" rel="noopener noreferrer">Linkedin.<br /><span className={styles.socialText}>in/kenneth-presedo/</span></a>
                <a className={styles.socialsEmail} href="mailto:kennethpresedo@live.com?subject=Just saw your portfolio!&body=Just wanted to let you know that, YOU ROCK!">Email Me.<br /><span className={styles.socialText}>kennethpresedo@live.com</span></a>
                <span className={styles.socialsPhone}>Call Me.<br /><span className={styles.socialText}>(786)247-3451</span></span>
                <span className={styles.socialsContact}>Dont be shy.</span>
            </div>
        </>
    )
}