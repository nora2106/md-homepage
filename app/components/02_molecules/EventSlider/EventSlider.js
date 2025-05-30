"use client"
import style from "./eventslider.module.scss";
import {useEffect, useState, useRef} from "react";
import Event from "@/app/components/01_atoms/Event/Event";
import SliderArrows from "@/app/components/01_atoms/SliderArrows/SliderArrows";
import {motion} from "motion/react";

export const EventSlider = (props) => {
    const [events, setEvents] = useState([]);
    const [forwardArrow, setForwardArrow] = useState(false);
    const [backArrow, setBackArrow] = useState(false);
    const indexInc = 3;
    const [index, setIndex] = useState(0);
    const wrapperRef = useRef(null);

    //get and sort data
    useEffect(() => {
        if(events.length === 0) {
            let data = props.data;
            data.sort(function (a, b) {
                return new Date(a.date) - new Date(b.date);
            });
            setEvents(data);
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

        //set wrapper min height if it's 0
        if(window.getComputedStyle(wrapperRef.current).getPropertyValue('--min-height') === "0") {
            let height = wrapperRef.current.clientHeight;
            wrapperRef.current.style.setProperty('--min-height', height + "px");
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
                            <Event shown={key < indexInc * (index + 1) && key >= (index + indexInc) - indexInc} change={index} index={key} parentRef={wrapperRef}  key={key} headline={event.name} text={event.description} date={event.date} link={event.link} linkText={event.link_name} location={event.location}/>
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
