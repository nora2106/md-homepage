"use client"
import styles from "./textbanner.module.scss";
import {motion} from "motion/react";
import Button from "@/app/components/01_atoms/Button/Button";

export const TextBanner = (props) => {
    return (
        <motion.div initial={{paddingBlock: 0}} whileInView={{paddingBlock: "3em"}} transition={{ duration: 1 }} viewport={{once: true}} className={styles.container}>
            <motion.p initial={{opacity: 0}} whileInView={{ opacity: 1}}  transition={{ duration: 1 }} viewport={{once: true}} className={styles.text}>{props.text}</motion.p>
            <Button text={props.buttonText} url='projekte' arrow={true}/>
        </motion.div>
    );
};

export default TextBanner;
