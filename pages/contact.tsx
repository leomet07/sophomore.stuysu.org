import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Contact.module.css";
import { IconContext } from "react-icons";
import { SiInstagram, SiFacebook, SiGithub } from "react-icons/si";


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
                    <div className={styles.limiter}>
                        <div className={styles.circle}/>
                        <div className={styles.buttons}>
                            <IconContext.Provider value={{color: 'white', className: styles.button}}>
                                <a href={'https://www.instagram.com/sophomorecaucus/'} target={'_blank'} rel="noreferrer">
                                    <SiInstagram />
                                </a>
                                <a href={'https://www.facebook.com/StuySophCaucus'} target={'_blank'} rel="noreferrer">
                                    <SiFacebook />
                                </a>
                                <a href={'https://github.com/leomet07/sophomore.stuysu.org'} target={'_blank'} rel="noreferrer">
                                    <SiGithub />
                                </a>
                            </IconContext.Provider>
                        </div>
                        <p id={styles.feedback}>
                            Got feedback for the caucus? Provide it anonymously <a href={'https://forms.gle/uMz4TydXi1h1biHf8'} target={'_blank'} rel="noreferrer">here</a>.
                        </p>
                    </div>
                </div>

            </main>
        </>
    )
}

export default Contact;
