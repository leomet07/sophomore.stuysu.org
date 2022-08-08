import styles from "../styles/President.module.css";
import Image from "next/image";

const Director = (props: { imgSrc: string, imgAlt: string, description: string }) => {
    /*
     * imgSrc: URI to an image (of 1:1 aspect ratio) representing the profile
     * imgAlt: Alt text describing the image (for screenreaders)
     * description: A short string with a quote or other
     */
    return (
        <div className={`${styles.profile} ${styles.director}`}>
            <div className={styles.image}>
                <Image src={props.imgSrc} alt={props.imgAlt} layout="fill" />
            </div>
            <div className={styles.description}> { props.description } </div>
        </div>
    );
};

export default Director;
