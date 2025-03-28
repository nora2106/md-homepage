"use client"
import style from "./event.module.scss";
import Button from "@/app/components/01_atoms/Button/Button";
import {useEffect, useRef, useState} from "react";
import {IoLocationOutline} from "react-icons/io5";
import {motion, useScroll, useTransform, useMotionValueEvent} from "motion/react";

export const Event = (props) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [btnText, setBtnText] = useState("Mehr erfahren");
    const dateOptions = {
        day: '2-digit',
        year: 'numeric',
        month: '2-digit',
    };

    useEffect(() => {
        const toDate = new Date(props.date);
        setDate(toDate.toLocaleDateString('de-DE', dateOptions));
        setTime(toDate.toLocaleTimeString('de-DE', {hour: '2-digit', minute: '2-digit'}))
        if (props.linkText) {
            setBtnText(props.linkText);
        }
    }, [props.date]);


    const target = useRef(null);
    const [scrollProgress, setScrollProgress] = useState("100%");

    const {scrollYProgress} = useScroll({
        target,
        offset: ['start end', 'end start'],
    });
    let progress;

    // @todo reassign event listener on state change
    useEffect(() => {
        if(scrollProgress !== "100%") {
            setScrollProgress("0");
        }
    }, [props.change]);

    let parallax = useTransform(scrollYProgress, [0, .2, .8, 1], [0, 100, 100, 0]);
    useMotionValueEvent(parallax, 'change', (v) => {
        progress = 100 - v;
        setScrollProgress(progress.toFixed(2) + "%")
        }
    );

    return (
        <motion.div key={props.change} ref={target} transition={{ease: "linear", duration: .6}} initial={{x: "100%"}}
                    animate={{x: scrollProgress}} className={`${style.container} event`}>
            <div className={style.date}>
                <span>{date}</span>
                <span>{time}</span>
            </div>
            <h4 className={style.headline}>{props.headline}</h4>
            {
                props.text ?
                    <p className={style.text}>{props.text}</p>
                    :
                    <div/>
            }
            <div className={style.bottomLine}>
                {
                    props.location ?
                        <span className={style.locationText}>
                            <IoLocationOutline/>
                            {props.location}
                        </span>
                        :
                        <span/>
                }

                {
                    props.link ?
                        <Button secondary={true} url={props.link} text={btnText} arrow={true}/>
                        :
                        <div/>
                }
            </div>

        </motion.div>
    );
};

export default Event;
