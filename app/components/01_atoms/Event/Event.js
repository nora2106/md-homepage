"use client"
import style from "./event.module.scss";
import Button from "@/app/components/01_atoms/Button/Button";
import {useEffect, useState} from "react";
import { IoLocationOutline } from "react-icons/io5";

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

        </div>
    );
};

export default Event;