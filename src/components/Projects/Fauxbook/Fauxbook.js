import styles from './Fauxbook.module.scss'

export default function Fauxbook(){
    return(
        <>
            <a className={styles.link} href="https://travellog.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <img className={styles.fauxbook} src="https://i.imgur.com/k79x3ZP.jpg" alt='' />
            </a>
        </>    )
}