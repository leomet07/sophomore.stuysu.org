import styles from "../styles/Gradient.module.css";
import {MouseEventHandler, ReactNode} from "react";

const GradientTitle = (props: {children: ReactNode}) => {
    /*
     * Reusable template <span> for making gradient-colored titles
     * Usage: wrap the targeted text in <GradientTitle> tags
     */
    return (<span className={styles.title}>{props.children}</span>)
}

const GradientShadow = (props: {id?: string, className?: string, onClick?: MouseEventHandler, children: ReactNode}) => {
    /*
     * Reusable template <div> for making elements with gradient shadows.
     * Takes in extra className(s) for external styling.
     */
    return (
        <div className={`${styles.shadow} ${props.className}`} id={props.id} onClick={props.onClick}>
            {props.children}
        </div>
    )
}

const GradientBorder = (props: {id?: string, className?: string, onClick?: MouseEventHandler, children: ReactNode}) => {
    /*
     * Reusable template <div> for making gradient-bordered elements.
     * Takes in extra className(s) for external styling.
     * Padding should be applied to the text children to avoid breaking the border clipping.
     */
    return (
        <div className={`${styles.border} ${props.className}`} id={props.id} onClick={props.onClick}>
            {props.children}
        </div>
    )
}

const GradientPill = (props: {title: string, id?: string, onClick?: MouseEventHandler}) => {
    /*
     * Reusable template <div> for making gradient-bordered "pill" titles.
     */
    return (
        <GradientBorder className={styles.pill} id={props.id} onClick={props.onClick}>
            <span>{props.title}</span>
        </GradientBorder>
    )
}

const GradientBorderShadow = (props: {id?: string, className?: string, onClick?: MouseEventHandler, children: ReactNode}) => {
    /*
     * Reusable template <div> for making gradient-bordered and shadowed elements.
     * Takes in extra className(s) for external styling.
     * Padding should be applied to the text children to avoid breaking the border clipping.
     */
    return (
        <div className={`${styles.border} ${styles.shadow} ${props.className}`} id={props.id} onClick={props.onClick}>
            {props.children}
        </div>
    )
}

const GradientButton = (props: {id?: string, className?: string, href?: string, autofocus?: boolean, onClick?: MouseEventHandler, children: ReactNode}) => {
    /*
     * Reusable template <a> div for making gradient-bordered and shadowed elements with a :hover animation and :focus state.
     *
     * Takes in extra className(s) for external styling,
     * which users should take care to also implement :hover and :focus states for to
     * avoid readability issues with the background,
     * and transition with a 0.35s duration to remain in sync with the button.
     *
     * Note that (auto)focus needs to be implemented using React state functionality, so for simplicity, it is not included here.
     *
     * Padding should be applied to the text children to avoid breaking the border clipping.
     * Optionally takes in a href to point to something else (or just to use the fragment as a state tracker)
     */
    return (
        <a className={`${styles.border} ${styles.shadow} ${props.className}`}
           id={props.id}
           onClick={props.onClick}
           href={(props.href) ? props.href : '#'}
           target={(props.href) ? '_blank' : undefined}
           rel='noreferrer'
        >
            <div className={styles.background} />
            {props.children}
        </a>
    )
}

export { GradientTitle, GradientPill, GradientBorder, GradientShadow, GradientBorderShadow, GradientButton };
