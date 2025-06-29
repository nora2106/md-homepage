"use client"
import Image from 'next/image';
import Heading from "@/app/components/01_atoms/Heading/Heading";
import styles from "./hero.module.scss"
import {useRef, useEffect, useState} from "react";
import {getSettings} from "@/sanity/sanity-query";

export const Hero = (props) => {
    const heroRef = useRef(null);
    const [imgCredit, setImgCredit] = useState("")

    useEffect(() => {
        calcVH();
        window.addEventListener('onorientationchange', calcVH, true);
        window.addEventListener('resize', calcVH, true);
        setImgCredit(props.settings.image_credit);
    }, []);

    //calculate height
    function calcVH() {
        const navHeight = document.querySelector('#header').clientHeight;
        let vH = (window.innerHeight - navHeight);
        if(heroRef.current != null) {
            heroRef.current.style.setProperty("--hero-height", vH + "px");
            heroRef.current.style.setProperty("--nav-height", navHeight + "px");
        }
    }

    return (
        <div ref={heroRef} className={styles.hero}>
            <div className={styles.imageWrapper}>
                <Image loading="eager" className={styles.topFlowers} width="500" height="600" src='/img/top-flowers.webp' alt=''/>
                <div className={styles.playerImageWrapper}>
                    <div className={styles.playerImgs}>
                        <Image loading="eager" className={styles.player} width="500" height="600" src='/img/player1.webp' alt=''/>
                        <Image loading="eager" className={styles.bird} width="400" height="500" src='/img/bird.png' alt=''/>
                        <Image loading="eager" className={styles.flower} width="200" height="200" src='/img/flower.png' alt=''/>
                    </div>
                </div>
                <div className={styles.plants}>
                <Image loading="eager" className={styles.leftPlants} width="500" height="600" src='/img/left-plant.png' alt=''/>
                    <div className={styles.middlePlants}>
                        <Image loading="eager" className={styles.rightPlantThird} width="500" height="600" src='/img/right-plant2.png' alt=''/>
                        <Image loading="eager" className={styles.rightPlantSecond} width="500" height="600" src='/img/right-plant2.png' alt=''/>
                    </div>
                    <Image loading="eager" className={styles.rightPlant} width="500" height="600" src='/img/right-plant.png' alt=''/>
                </div>
                <p className={styles.annotation}>© Bild: {imgCredit}</p>
            </div>
            <div className={styles.headlineWrapper}>
                <Heading hasFallback={true} tag='h1' type='headline-1' firstLine={props.headline1} secondLine={props.headline2}/>
            </div>
        </div>
    );
};

export default Hero;
