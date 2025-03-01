"use client"
import style from "./textmedia.module.scss";
import Image from "next/image";
import {useEffect, useState, useRef} from "react";
import Media from "@/app/components/01_atoms/Media/Media";
import TextBlock from "@/app/components/02_molecules/TextBlock/TextBlock";

export function TextMedia (props) {
    return (
        <div className={style.wrapper}>
            <TextBlock text={props.text}/>
            <div className={style.media}>
                {
                    props.media ?
                        <Media media={props.media}/>
                        : <div/>
                }
            </div>

        </div>
    );
}

export default TextMedia;
