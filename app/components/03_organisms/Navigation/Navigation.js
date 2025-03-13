"use client"
import styles from "./navigation.module.scss";
import MenuList from "@/app/components/02_molecules/MenuList/MenuList";
import MenuButton from "@/app/components/01_atoms/MenuButton/MenuButton";
import {useEffect, useState} from "react";
import MenuBackground from "@/app/components/01_atoms/MenuBackground/MenuBackground";

export const Navigation = () => {
    const [open, setOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    let navHeight;
    let scrollPos = 0;
    function toggleMenu() {
        setOpen(!open);
    }
    useEffect(() => {
        // calcVH();
        window.addEventListener('scroll', onscroll, true);
        // window.addEventListener('resize', calcVH, true);
    }, []);

    //calculate header height
    function calcVH() {
        const header = document.getElementsByTagName('header');
        navHeight = document.querySelector('#header').clientHeight;
        header[0].style.setProperty("--nav-height", navHeight + "px");
    }

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
                    <MenuList/>
                    <MenuBackground/>
                    <div className={styles.overlay}/>
                </div>
            </nav>
            <MenuButton open={open} close={true} action={toggleMenu}/>
        </div>
    );
};

export default Navigation;
