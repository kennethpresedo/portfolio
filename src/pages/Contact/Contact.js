import React from 'react';
import styles from './Contact.module.scss'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import ContactMe from '../../components/ContactMe/ContactMe';

export default function Contact() {
    return (
        <>
            <Nav />
            <span className={styles.header}>Contact Me.</span>
            <ContactMe />
            <Footer />
        </>
    )
}

