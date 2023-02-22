import styles from './TravelLog.module.scss'

export default function TravelLog() {
    return (
        <>
            <a className={styles.link} href="https://travellog.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <img className={styles.travelLog} src="https://i.imgur.com/k79x3ZP.jpg" alt='' />
            </a>
        </>
    )
}