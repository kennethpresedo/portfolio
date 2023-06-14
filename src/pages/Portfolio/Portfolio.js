import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './Portfolio.module.scss'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
// import TravelLog from '../../components/Projects/TravelLog/TravelLog';
// import Espresso from '../../components/Projects/Espresso/Espresso';
import DunderMifflin from '../../components/Projects/DunderMifflin/DunderMifflin';
import DulucLearning from '../../components/Projects/DulucLearning/DulucLearning';
import Sumz from '../../components/Projects/Sumz/Sumz';
import Codex from '../../components/Projects/Codex/Codex';
import Sushi from '../../components/Projects/Sushi/Sushi';

export default function Portfolio() {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <>
            <Nav />
            <span className={styles.header} data-aos="flip-up">My Portfolio</span>
            <div className={styles.portfolio}>
                <Sushi />
                <Codex />
                <Sumz />
                <DulucLearning />
                      {/* 
                <Espresso />
                <TravelLog />
                 */}
                <DunderMifflin />
            </div>
            <Footer />
        </>
    )
}

