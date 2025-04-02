import style from "./menubutton.module.scss";
import { IoClose } from "react-icons/io5";
import {useEffect, useRef} from "react";
import {animate} from "motion";

export const MenuButton = (props) => {
    const buttonRef = useRef(null);

    useEffect(() => {
        if(props.close) {
            if(props.open === true) {
                animate(buttonRef.current, {opacity: 1, scale: 1, x: "60%"}, {duration: .5, ease: "easeInOut"})
            }
            else {
                animate(buttonRef.current, {opacity: 0, scale: .2, x: "60%"}, {duration: .5, ease: "easeInOut"})
            }
        }
    }, [props.open]);

    return (
        <button ref={buttonRef} onClick={props.action} className={` ${style.button} ${props.close ? style.closeButton : ''} ${props.open ? style.open : ''}`}>
            {
                props.close ?
                <IoClose/>
                    :
                <span>Menü</span>
            }
        </button>
    );
};

export default MenuButton;
