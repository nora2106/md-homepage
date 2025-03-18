"use client"
import style from "./event.module.scss";
import Button from "@/app/components/01_atoms/Button/Button";
import {useEffect, useRef, useState} from "react";
import { IoLocationOutline } from "react-icons/io5";
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
        if(props.linkText) {
            setBtnText(props.linkText);
        }
    }, [props.date]);

    const target = useRef(null);
    const { scrollYProgress } = useScroll({
        target,
        offset: ['start end', 'end start'],
    });
    const parallax = useTransform(scrollYProgress, [0, 1], [-100, 100]);
    useMotionValueEvent(parallax, 'change', (v) => console.log(v));

    let sliderVariants = {
        hide: {
            opacity: 0,
            x: 500
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1.6,
                transition: ["ease-in"],
            }
        },
    }

    return (
        <motion.div ref={target} parallax={parallax}  className={`${style.container} event`}>
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
