"use client"
import style from "./eventslider.module.scss";
import {useEffect, useState} from "react";
import Event from "@/app/components/01_atoms/Event/Event";
import SliderArrows from "@/app/components/01_atoms/SliderArrows/SliderArrows";

export const EventSlider = (props) => {
    const [events, setEvents] = useState([]);
    const [shownEvents, setShownEvents] = useState([]);
    const [forwardArrow, setForwardArrow] = useState(false);
    const [backArrow, setBackArrow] = useState(false);
    const indexInc = 2;
    const [index, setIndex] = useState(0);

    useEffect(() => {
        console.log("index: " + index)
        if(props.data.length > index) {
            setShownEvents(props.data.slice(index, index + indexInc));
        }
        setForwardArrow(false);
        setBackArrow(false);
        if(props.data.length > index && props.data.length > (index + indexInc)) {
            setForwardArrow(true)
        }

        if(index >= indexInc) {
            setBackArrow(true)
        }
    }, [index]);

    function increaseIndex() {
        setIndex(index + indexInc);
    }

    function decreaseIndex() {
        setIndex(index - indexInc);
    }

    return (
        <div>
            <div className={style.wrapper}>
                {
                    shownEvents ?
                        shownEvents.map((event, key) =>
                            <Event key={key} headline={event.name} text={event.description} date={event.date} link={event.link} linkText={event.link_name} location={event.location}/>
                        )
                        :
                        <div/>
                }
            </div>
            <SliderArrows increase={increaseIndex} decrease={decreaseIndex} forwardActive={forwardArrow} backActive={backArrow}/>
        </div>

    );
};

export default EventSlider;