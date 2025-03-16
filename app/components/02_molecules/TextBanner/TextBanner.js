"use client"
import styles from "./textbanner.module.scss";
import {useEffect} from "react";

export const TextBanner = (props) => {
    useEffect(() => {
        console.log("Banner requested at:", performance.now());
    }, []);
    return (
        <div className={styles.container}>
            <p className={styles.text}>{props.text}</p>
        </div>
    );
};

export default TextBanner;
