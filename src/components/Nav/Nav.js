import styles from './Nav.module.scss';
import React from 'react';

export default function Nav() {
    return (
        <main className={styles.Nav}>
            <span className={styles.logo}>
                <span className={styles.KP}>Kenneth Presedo,</span>
                <span className={styles.FSSE}>Full Stack Software Engineer</span>
            </span>
            <aside className={styles.navList}>
                <a className={styles.link} href="/home">Home</a> &nbsp;
                <a className={styles.link} href="/about">About Me</a> &nbsp;
                <a className={styles.link} href="/contact">Contact Me</a> &nbsp;
                <a className={styles.link} href="/portfolio">My Portfolio</a> &nbsp;
            </aside>
        </main>
    )
}
