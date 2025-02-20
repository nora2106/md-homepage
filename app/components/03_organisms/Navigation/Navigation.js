"use client"
import styles from "./navigation.module.scss";
import MenuList from "@/app/components/02_molecules/MenuList/MenuList";
import MenuButton from "@/app/components/01_atoms/MenuButton/MenuButton";
import {useRef, useState} from "react";
import MenuBackground from "@/app/components/01_atoms/MenuBackground/MenuBackground";

export const Navigation = () => {
    const [open, setOpen] = useState(true);

    function toggleMenu() {

        if (open) {
           setOpen(false);
        } else {
            setOpen(true);
        }
    }
    return (
        <div className={styles.wrapper}>
            <nav id='header' className={styles.navigation}>
                <MenuButton action={toggleMenu}/>
                <div className={` ${styles.listWrapper} ${open ? styles.showNavi : ''}`}>
                    <MenuList/>
                    <MenuBackground/>
                    <div className={styles.overlay}/>
                </div>
                <MenuButton open={open} close={true} action={toggleMenu}/>
            </nav>
        </div>
    );
};

export default Navigation;