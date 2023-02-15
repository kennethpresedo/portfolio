import styles from './Home.module.scss'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import Profile from '../../components/Profile/Profile'
import Bio from '../../components/Bio/Bio'
import Charlie from '../../components/Charlie/Charlie'
import Frank from '../../components/Frank/Frank'
import Micheal from '../../components/Micheal/Micheal'
import Dwight from '../../components/Dwight/Dwight'

export default function Home() {
    return (
        <>
            <Nav />
            <div className={styles.intro}>
                <span className={styles.profile}><Profile /></span>
                <span className={styles.bio}><Bio /></span>
            </div>
            <div className={styles.inspoMemes}>
                <span className={styles.frankHome}><Frank /></span>
                <span className={styles.charlieHome}><Charlie /></span>
                <span className={styles.michealHome}><Micheal /></span>
                <span className={styles.dwightHome}><Dwight /></span>
            </div>
            <Footer />
        </>
    )
}