"use client"
import styles from "./navigation.module.scss";
import MenuList from "@/app/components/02_molecules/MenuList/MenuList";
import MenuButton from "@/app/components/01_atoms/MenuButton/MenuButton";
import {useEffect, useState} from "react";
import MenuBackground from "@/app/components/01_atoms/MenuBackground/MenuBackground";
import {usePathname} from "next/navigation";

export const Navigation = () => {
    const [open, setOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const pathname = usePathname();
    let scrollPos = 0;

    function toggleMenu() {
        setOpen(!open);
    }

    useEffect(() => {
        window.addEventListener('scroll', onscroll, true);
    }, []);

    //disappear when scrolling and appear at top of page
    function onscroll() {
        setHidden(false);
        if(window.scrollY > 100 && !checkScrollDirectionIsDown()) {
            setHidden(true);
        }
    }

    //get scroll direction
    function checkScrollDirectionIsDown() {
        let isUp = (document.body.getBoundingClientRect()).top > scrollPos;
        scrollPos = (document.body.getBoundingClientRect()).top;
        return isUp;
    }
    return (
        <div className={styles.wrapper}>
            <nav id='header' className={` ${styles.navigation} ${hidden ? styles.navigationHidden : ''}`}>
                <MenuButton action={toggleMenu}/>
                <div className={` ${styles.listWrapper} ${open ? styles.showNavi : ''}`}>
                    <MenuList toggle={toggleMenu} trigger={open}/>
                    <MenuBackground trigger={open}/>
                    <div className={styles.overlay}/>
                </div>
            </nav>
            <MenuButton open={open} close={true} action={toggleMenu}/>
        </div>
    );
};

export default Navigation;
