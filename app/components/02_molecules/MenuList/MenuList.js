import style from "./menulist.module.scss";
import MenuItem from "@/app/components/01_atoms/MenuItem/MenuItem";
import Button from "@/app/components/01_atoms/Button/Button";
import {getSettings} from "@/sanity/sanity-query";
import {useEffect, useState} from "react";

export const Component = () => {
    const [email, setEmail] = useState("")

    useEffect( () => {
        async function getData() {
            const pageContent = await getSettings();
            setEmail(pageContent[0].email);
        }
        getData();
    }, []);

    return (
        <ul className={style.list}>
            <MenuItem url='/' text='Homepage'/>
            <MenuItem url='/projekte' text='Projekte'/>
            <MenuItem url='/galerie' text='Bildergalerie'/>
            <MenuItem url='/unterricht' text='Unterricht'/>
            <Button slug={'mailto:' + email} text='Kontakt'/>
        </ul>
    );
};

export default Component;
