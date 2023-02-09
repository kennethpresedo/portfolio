import React from 'react';
import styles from './Footer.module.scss'

export default function Footer() {
    return (
        <main className={styles.Footer}>
            {/* <h1>Footer!</h1><br/> */}
            <div className={styles.footList}>
                <a className={styles.link} href="/">Homepage</a> 
                <a className={styles.link} href="/about">About Me</a> 
                <a className={styles.link} href="/contact">Contact</a> 
                <a className={styles.link} href="/portfolio">Portfolio</a>
            </div>
            <div className={styles.socials}>
                <a className={styles.socialsLink} href="https://www.linkedin.com/in/kenneth-presedo/">Linkedin</a> 
                <a className={styles.socialsLink} href="https://www.github.com/kennethpresedo">Github</a> 
                <a className={styles.socialsLink} href="mailto:kennethpresedo@live.com?subject=Just saw your portfolio!&body=Just wanted to let you know that, YOU ROCK!">Email Me</a>
            </div>
        </main>
    )
}