"use client"
import style from "./menulist.module.scss";
import MenuItem from "@/app/components/01_atoms/MenuItem/MenuItem";
import Button from "@/app/components/01_atoms/Button/Button";
import {getSettings} from "@/sanity/sanity-query";
import {useEffect, useState} from "react";
import {useAnimate} from "motion/react"
import {stagger} from "motion";

export const MenuList = (props) => {
    const [email, setEmail] = useState("")
    const [scope, animate] = useAnimate();

    useEffect( () => {
        async function getData() {
            const pageContent = await getSettings();
            setEmail(pageContent[0].email);
        }
        getData();
    }, []);

    useEffect(() => {
        if(props.trigger === true) {
            animate("a", {opacity: 1, x: 0}, {duration: .8, delay: stagger(.25, {startDelay: .8})})
        }
        else {
            animate("a", {opacity: 0, x: "-100%"}, {duration: .4})
        }
    }, [props.trigger]);

    return (
        <ul ref={scope} className={style.list}>
            <MenuItem toggle={props.toggle} url='/' text='Homepage'/>
            <MenuItem toggle={props.toggle} url='/projekte' text='Projekte'/>
            <MenuItem toggle={props.toggle} url='/galerie' text='Bildergalerie'/>
            <MenuItem toggle={props.toggle} url='/unterricht' text='Unterricht'/>
            <Button slug={'mailto:' + email} text='Kontakt'/>
        </ul>
    );
};

export default MenuList;
