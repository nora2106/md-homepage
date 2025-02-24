"use client"
import style from "./textmedia.module.scss";
import Image from "next/image";
import {useEffect, useState, useRef} from "react";
import Media from "@/app/components/01_atoms/Media/Media";

export function TextMedia (props) {
    const textRef = useRef(null);

    useEffect(() => {
        props.text.forEach((text) => {
            createParagraph(text.children[0].text, text.children[0].marks);
        })
    }, []);

    function createParagraph(content, style) {
        const newEl = document.createElement("p");
        newEl.textContent = content;
        if(style.length > 0) {
            style.forEach((s) => {
                switch (s) {
                    case 'strong':
                        newEl.style.fontWeight = 'bold';
                        break;
                    case 'italic': newEl.style.fontStyle = 'italic'
                        break;
                    case 'underline':
                        newEl.style.textDecoration = 'underline'
                        break;
                }
            })
        }
        textRef.current.appendChild(newEl);
    }

    return (
        <div className={style.wrapper}>
            <div ref={textRef} className={style.text}></div>
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
