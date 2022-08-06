import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Contact.module.css";

const Contact: NextPage = () => {
    return (
        <>
            <Head>
                <title>Sophomore Caucus - Contact</title>
                <meta
                    name="description"
                    content="The Sophomore Caucus website - Contact Page"
                />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    CONTACT US
                </h1>

                <div className={styles.prompt}>
                    <p>Let’s Talk!</p>
                    <div className={styles.circle}/>
                </div>

            </main>
        </>
    )
}

export default Contact;
