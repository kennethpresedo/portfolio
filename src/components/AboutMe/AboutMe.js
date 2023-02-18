import styles from './AboutMe.module.scss'

export default function AboutMe() {
    return (
        <>
            <div className={styles.ptA}>
                <div className={styles.pro}>Professional.
                    <p className={styles.proText}>Kenneth Presedo is a dedicated and skillful full stack web developer with 8 years of experience in the airline industry. He has completed General Assembly's Software Engineering Immersive program where he developed projects using various programming languages and frameworks such as HTML, CSS, JavaScript, Node.js, Express, Mongoose, React, MongoDB, Microsoft Azure and more. Kenneth is dedicated and skillful individual with a proactive and spontaneous approach to his work. He has demonstrated attention to detail, meeting deadlines, and working collaboratively in a team environment. In his current role at American Airlines, he collaborates with cross-functional teams to ensure the safe and efficient dispatch of aircraft and meet the needs of customers. Overall, Kenneth's experience, education, and skillset make him a strong candidate for an entry-level web developer position.</p>
                </div>
            </div>
            
            <div className={styles.ptB}>
                <div className={styles.depend}>Dependable.
                    <p className={styles.dependText}>My experience as a gate agent has taught me valuable skills that are transferable to any profession. These skills include the ability to work under pressure, communicate effectively, empathize with others, and collaborate with a team. I believe that these skills will serve me well in any future career endeavor.</p>
                </div>

                <div className={styles.skill}>Skillful.
                    <p className={styles.skillText}>In addition to working under pressure, my job has also taught me the importance of clear and effective communication. As a gate agent, I am responsible for relaying important information to both customers and other staff members. This has allowed me to develop strong communication skills and the ability to clearly and effectively convey information in a timely manner.</p>
                </div>
            </div>
        </>

    )
}