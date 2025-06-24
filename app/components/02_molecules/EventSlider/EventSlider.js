"use client"
import style from "./eventslider.module.scss";
import {useEffect, useState, useRef} from "react";
import Event from "@/app/components/01_atoms/Event/Event";
import SliderArrows from "@/app/components/01_atoms/SliderArrows/SliderArrows";
import {motion} from "motion/react";
import {log} from "next/dist/server/typescript/utils";

export const EventSlider = (props) => {
    const [events, setEvents] = useState([]);
    const [forwardArrow, setForwardArrow] = useState(false);
    const [backArrow, setBackArrow] = useState(false);
    const indexInc = 3;
    const [index, setIndex] = useState(0);
    const wrapperRef = useRef(null);
    const [currentHeight, setCurrentHeight] = useState(0);

    //get and sort data
    useEffect(() => {
        if(events.length === 0) {
            let data = props.data;
            data.sort(function (a, b) {
                return new Date(a.date) - new Date(b.date);
            });
            setEvents(data);
        }
        let height = wrapperRef.current.offsetHeight;
        if(height > currentHeight) {
            setCurrentHeight(height);
            wrapperRef.current.parentElement.style.setProperty('--slider-height', height + "px");
        }
    });

    //slider functionality
    useEffect(() => {
        const data = events;
        setForwardArrow(false);
        setBackArrow(false);
        if(data.length > index && data.length > (index + indexInc)) {
            setForwardArrow(true)
        }

        if(index >= indexInc) {
            setBackArrow(true)
        }

    }, [index, events]);

    function increaseIndex() {
        setIndex(index + indexInc);
    }

    function decreaseIndex() {
        setIndex(index - indexInc);
    }

    return (
        <div className={style.container}>
            <motion.div key={index} transition={{ease: "linear", duration: .8}} initial={{x: "100%"}}
                        animate={{x: "0%"}} ref={wrapperRef} className={style.wrapper}>
                {
                    events ?
                        events.map((event, key) =>
                            <Event shown={key < (index + indexInc) && key >= index} change={index} index={key} parentRef={wrapperRef}  key={key} headline={event.name} text={event.description} date={event.date} link={event.link} linkText={event.link_name} location={event.location}/>
                        )
                        :
                        <div/>
                }
            </motion.div>
            <SliderArrows increase={increaseIndex} decrease={decreaseIndex} forwardActive={forwardArrow} backActive={backArrow}/>
        </div>

    );
};

export default EventSlider;
