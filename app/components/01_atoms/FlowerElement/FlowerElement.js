"use client"
import styles from "./flowerelement.module.scss";
import {motion} from "motion/react";

export const FlowerElement = (props) => {
    const flower1Variants = {
        hide: {
            opacity: [1, 1, 0],
            scale: [1, .2, .2],
            rotate: [90, 0, 0]

        },
        show: {
            opacity: [0, .5, 1],
            scale: [.2, .2, 1],
            rotate: [0, 0, 90],
            transition: {
                duration: 1.6,
                transition: ["ease-in", "ease-out"],
                times: [0, .1, 1]
            }
        },
    }

    const flower2Variants = {
        hide: {
            opacity: [1, 0, 0],
            scale: [1.3, .3, .3],
            rotate: [90, 90, 0]

        },
        show: {
            opacity: [0, 0, 1],
            scale: [.3, .3, 1.3],
            rotate: [0, 90, 90],
            transition: {
                duration: 1.4,
                transition: ["ease-in", "ease-out"],
                delay: .5,
                times: [0, .4, 1]
            }
        },
    }

    return (
        <div className={styles.wrapper}>
                <motion.img animate={props.hasFallback ? "show" : ""}  whileInView="show" exit="hide" variants={flower1Variants} viewport={{once: true}} className={styles.flower1} width="500" height="600" src='/img/flower1.svg' alt=''/>
                <motion.img animate={props.hasFallback ? "show" : ""}  whileInView="show" exit="hide" variants={flower2Variants} viewport={{once: true}} className={styles.flower2} width="500" height="600" src='/img/flower2.svg' alt=''/>
        </div>
    );
};

export default FlowerElement;
