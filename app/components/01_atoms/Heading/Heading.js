"use client"
import styles from "./heading.module.scss";
import classnames from "classnames";
import { AnimatePresence, motion } from "motion/react"
import { usePathname } from "next/navigation";
import {useEffect, useState} from "react";

export const Heading = (props) => {
    const Tag = props.tag;

    const pathname = usePathname();
    const [renderKey, setRenderKey] = useState(0);

    // rerender key on every page change to ensure animation firing
    useEffect(() => {
        setRenderKey(Math.random());
    }, [pathname]);

    const headlineVariants = {
        hide: {
            x: -400,
            opacity: 0
        },
        show: {
            x: 0,
            opacity: 1,
            transition: {
                duration: .8,
                ease: ["easeIn"]
            },
        },
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div key={renderKey} initial="hide" whileInView="show" exit="hide" viewport={{ once: true }} variants={headlineVariants}>
                <Tag className={`${styles.heading} ${props.type} `}>
                    <span className={props.reversed ? styles.indented : ''}>{props.firstLine}</span>
                    <br/>
                    <span className={[classnames(styles.secondLine, {
                        [styles.indented]: !props.reversed
                    })].join(" ")}>{props.secondLine}</span>
                </Tag>
            </motion.div>
        </AnimatePresence>
    );
};

export default Heading;
