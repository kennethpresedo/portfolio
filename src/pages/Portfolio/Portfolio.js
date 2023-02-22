import React from 'react';
import styles from './Portfolio.module.scss'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import TravelLog from '../../components/Projects/TravelLog/TravelLog';
import Espresso from '../../components/Projects/Espresso/Espresso';
import DunderMifflin from '../../components/Projects/DunderMifflin/DunderMifflin';
import Fauxbook from '../../components/Projects/Fauxbook/Fauxbook';

export default function Portfolio() {
    return (
        <>
            <Nav />
            <span className={styles.header}>My Portfolio.</span>
            <div className={styles.portfolio}>
                <Espresso />
                <TravelLog />
                <DunderMifflin />
                <Fauxbook />
            </div>
            <Footer />
        </>
    )
}

