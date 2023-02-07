import styles from './Nav.module.scss';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Nav() {
    return (
        <main className={styles.Nav}>
            <div className={styles.navList}>
                <a className={styles.link} href="/">Home</a> 
                <a className={styles.link} href="/about">About Me</a> 
                <a className={styles.link} href="/contact">Contact Me</a> 
                <a className={styles.link} href="/portfolio">My Portfolio</a>
            </div>
        </main>
    )
}
