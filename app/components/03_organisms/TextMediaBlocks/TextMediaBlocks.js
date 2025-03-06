"use client"
// content block with varying media/text sections
import style from "./textmediablocks.module.scss";
import Image from "next/image";
import {useEffect, useState, useRef} from "react";
import Media from "@/app/components/01_atoms/Media/Media";
import TextBlock from "@/app/components/02_molecules/TextBlock/TextBlock";

export function TextMediaBlocks (props) {
    const mediaList = props.media;
    const textList = props.text;

    return (
        <div className={style.wrapper}>
            <TextBlock text={props.text}/>
            <div className={style.media}>
                {
                    props.media ?
                        props.media.map((media, index) =>
                            <Media key={index} media={media}/>
                        )
                        : <div/>
                }
            </div>

        </div>
    );
}

export default TextMediaBlocks;
