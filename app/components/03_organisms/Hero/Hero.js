"use client"
import Image from 'next/image';
import Heading from "@/app/components/01_atoms/Heading/Heading";
import styles from "./hero.module.scss"
import {useRef, useEffect} from "react";

export const Hero = (props) => {
    const heroRef = useRef(null);

    useEffect(() => {
        calcVH();
        window.addEventListener('onorientationchange', calcVH, true);
        window.addEventListener('resize', calcVH, true);
    }, []);

    //calculate height
    function calcVH() {
        const navHeight = document.querySelector('#header').clientHeight;
        let vH = (window.innerHeight - navHeight);
        heroRef.current.style.setProperty("--hero-height", vH + "px");
        heroRef.current.style.setProperty("--nav-height", navHeight + "px");
    }

    return (
        <div ref={heroRef} className={styles.hero}>
            <div className={styles.headlineWrapper}>
                <Heading tag='h1' type='headline--1' firstLine={props.headline1} secondLine={props.headline2}/>
            </div>
            <div className={styles.imageWrapper}>
                <Image width="500" height="600" src='/img/player1.png' alt=''/>
            </div>
        </div>
    );
};

export default Hero;