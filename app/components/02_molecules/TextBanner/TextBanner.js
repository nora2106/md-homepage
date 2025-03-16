"use client"
import styles from "./textbanner.module.scss";
import {motion} from "motion/react";

export const TextBanner = (props) => {
    return (
        <div className={styles.container}>
            <motion.p initial={{paddingTop: 0, paddingBottom: 0, opacity: 0}} whileInView={{paddingTop: 50, paddingBottom: 50, opacity: 1}}  transition={{ duration: 1 }} viewport={{once: true}} className={styles.text}>{props.text}</motion.p>
        </div>
    );
};

export default TextBanner;
