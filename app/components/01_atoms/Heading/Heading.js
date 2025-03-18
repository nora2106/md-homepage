"use client"
import styles from "./heading.module.scss";
import classnames from "classnames";
import { AnimatePresence, motion } from "motion/react"
import { usePathname } from "next/navigation";
import {useEffect, useState} from "react";

export const Heading = (props) => {
    const Tag = props.tag;

    const headlineVariants = {
        hide: {
            x: -350,
            opacity: 0
        },
        show: {
            x: 0,
            opacity: 1,
        },
    };

    return (
        <AnimatePresence mode="wait">
                <Tag className={`${styles.heading} ${props.type} `}>
                    <motion.div animate={props.hasFallback ? "show" : ""} initial="hide" whileInView="show" exit="hide" viewport={{once: true}}
                                transition={{duration: .8, ease: ['easeIn']}}
                                variants={headlineVariants}>
                        <span className={props.reversed ? styles.indented : ''}>{props.firstLine}</span>
                    </motion.div>
                    <motion.div initial="hide" whileInView="show" exit="hide" viewport={{once: true}}
                                transition={{duration: .8, ease: ['easeIn'], delay: .6}}
                                variants={headlineVariants} animate={props.hasFallback ? "show" : ""}>
                        <span className={[classnames(styles.secondLine, {
                            [styles.indented]: !props.reversed
                        })].join(" ")}>{props.secondLine}
                        </span>
                    </motion.div>
                </Tag>
        // </AnimatePresence>
    );
};

export default Heading;
