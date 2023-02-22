import styles from './Home.module.scss'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import Profile from '../../components/AboutMe/Profile/Profile'
import Bio from '../../components/AboutMe/Bio/Bio'
import Charlie from '../../components/InspoMemes/Charlie/Charlie'
import Frank from '../../components/InspoMemes/Frank/Frank'
import Micheal from '../../components/InspoMemes/Micheal/Micheal'
import Dwight from '../../components/InspoMemes/Dwight/Dwight'
import Patrick from '../../components/InspoMemes/Patrick/Patrick'
import Carousel, { CarouselItem } from '../../components/Carousel/Carousel'

export default function Home() {
    return (
        <>
            <Nav />
            <div className={styles.intro}>
                <span className={styles.bio}><Bio /></span>
                <span className={styles.profile}><Profile /></span>
            </div>
            <span className={styles.while}>While You're Here.</span>
            <span className={styles.shows}>Some motivational quotes from some of my favorite shows.</span> 
            <div className={styles.carousel}>
                <Carousel>
                    <CarouselItem><Charlie /></CarouselItem>
                    <CarouselItem><Frank /></CarouselItem>
                    <CarouselItem><Micheal /></CarouselItem>
                    <CarouselItem><Dwight /></CarouselItem>
                    <CarouselItem><Patrick /></CarouselItem>
                </Carousel>
            </div>
            <Footer />
        </>
    )
}