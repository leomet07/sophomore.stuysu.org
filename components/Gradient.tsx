import styles from "../styles/Gradient.module.css";
import {MouseEventHandler, ReactNode} from "react";

const GradientTitle = (props: {children: ReactNode}) => {
    /*
     * Reusable template <span> for making gradient-colored titles
     * Usage: wrap the targeted text in <GradientTitle> tags
     */
    return (<span className={styles.title}>{props.children}</span>)
}

const GradientPill = (props: {title: string, id?: string, onClick?: MouseEventHandler}) => {
    /*
     * Reusable template <div> for making gradient-bordered "pill" titles
     */
    return (
        <div className={styles.pill} id={props.id} onClick={props.onClick}>
                <span>{props.title}</span>
        </div>
    )
}

export { GradientTitle, GradientPill };
