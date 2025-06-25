"use client"
import style from "./event.module.scss";
import Button from "@/app/components/01_atoms/Button/Button";
import {useEffect, useRef, useState} from "react";
import {IoLocationOutline} from "react-icons/io5";
import {motion, useScroll, useTransform, useMotionValueEvent} from "motion/react";
import { useMediaQuery } from "@uidotdev/usehooks";

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
    const isMobile = useMediaQuery("only screen and (max-width : 768px)");
    const [scrollProgress, setScrollProgress] = useState("80%");

    useEffect(() => {
        initializeMobileAnim();
        window.addEventListener('resize', initializeMobileAnim);
    }, []);

    function initializeMobileAnim() {
        if(isMobile && props.index % 2 !== 1) {
            setScrollProgress(progress + "%");
        }
    }

    let {scrollYProgress} = useScroll({
        target,
        offset: ['start end', 'end start'],
    });
    let progress = 100;

    let parallax = useTransform(scrollYProgress, [0, .2, .8, 1], [20, 100, 100, 20]);
    useMotionValueEvent(parallax, 'change', (v) => {
        if(isMobile) {
            setScrollProgress('0%');
        }
        else {
            progress = 100 - v;
            setScrollProgress(progress.toFixed(2) + "%")
        }
    });

    return (
        <motion.div ref={target} transition={{ease: "linear", duration: .6}}
                    animate={{x: scrollProgress}} className={ props.shown ? `${style.container} event` : `${style.container} ${style.hidden} event`}>
            <div className={style.date}>
                <span>{date}</span>
                <span>{time}</span>
            </div>
            <h3 className={style.headline  + " headline-4"}>{props.headline}</h3>
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
