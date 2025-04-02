import style from "./menubackground.module.scss";
import {useEffect, useRef, useState} from "react";
import {animate} from "motion";

export const MenuBackground = (props) => {
    const firstSvg = useRef(null)
    const secondSvg = useRef(null)

    useEffect(() => {
        //enter
        if(props.trigger === true) {
            animate(firstSvg.current, {opacity: 1, scale: 1, y: 0, x: 0}, {duration: 1, ease: "easeInOut"});
            animate(secondSvg.current, {opacity: .8, scale: 1.2, y: 0}, {duration: 1, delay: .5, ease: "easeInOut"});
        }
        //exit
        else {
            animate(firstSvg.current, {opacity: 0, scale: .5, y: -200, x: -100}, {duration: 1, delay: .4, ease: "easeInOut"});
            animate(secondSvg.current, {opacity: 0, scale: .5, y: 0}, {duration: .7, ease: "easeInOut"});
        }
    }, [props.trigger]);

    return (
        <div className={style.container}>
            <svg ref={firstSvg} className={style.ellipse} viewBox="0 0 375 435" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="187.5" cy="217.5" rx="187.5" ry="217.5"/>
            </svg>
            <svg ref={secondSvg} className={style.backgroundEllipse} viewBox="0 0 375 435" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="187.5" cy="217.5" rx="187.5" ry="217.5"/>
            </svg>
        </div>
    );
};

export default MenuBackground;
