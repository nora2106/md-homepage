"use client"
import style from "./event.module.scss";
import Button from "@/app/components/01_atoms/Button/Button";
import {useEffect, useState} from "react";

export const Event = (props) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const dateOptions = {
        day: '2-digit',
        year: 'numeric',
        month: '2-digit',
    };

    useEffect(() => {
        const toDate = new Date(props.date);
        setDate(toDate.toLocaleDateString('de-DE', dateOptions));
        setTime(toDate.toLocaleTimeString('de-DE', {hour: '2-digit', minute: '2-digit'}))
    }, []);
    return (
        <div className={`${style.container} event`}>
            <div className={style.date}>
                <span>{date}</span>
                <span>{time}</span>
            </div>
            <h3 className={style.headline}>{props.headline}</h3>
            {
                props.text ?
                    <p className={style.text}>{props.text}</p>
                :
                    <div/>
            }
            <div className={style.bottomLine}>
                <span>{props.location}</span>
                {
                    props.link ?
                        <Button secondary={true} url={props.link} text='Details ->'/>
                        :
                        <div/>
                }
            </div>

        </div>
    );
};

export default Event;