"use client"
import style from "./eventslider.module.scss";
import {useEffect, useState} from "react";
import Event from "@/app/components/01_atoms/Event/Event";

export const EventSlider = (props) => {
    const [events, setEvents] = useState([]);

    //@todo show only 3 events, add slider
    useEffect(() => {
        setEvents(props.data);
    }, []);

    return (
        <div className={style.wrapper}>
            {
                events ?
                    events.map((event, key) =>
                        <Event key={key} headline={event.name} text={event.description} date={event.date} link={event.link} location={event.location}/>
                    )
                :
                    <div/>
            }
        </div>
    );
};

export default EventSlider;