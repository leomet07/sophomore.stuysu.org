import styles from "../styles/GradientTitle.module.css";
import { ReactNode } from "react";

const GradientTitle = (props: {children: ReactNode}) => {
    /*
     * Reusable template <span> for making gradient-colored titles
     */
    return (<span className={styles.gradient}>{props.children}</span>)
}

export default GradientTitle;
