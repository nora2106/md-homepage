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
        // @todo fix this
        if(heroRef.current != null) {
            heroRef.current.style.setProperty("--hero-height", vH + "px");
        }
    }

    return (
        <div ref={heroRef} className={styles.hero}>
            <div className={styles.imageWrapper}>
                <div className={styles.playerImageWrapper}>
                    <Image className={styles.topFlowers} width="500" height="600" src='/img/top-flowers.png' alt=''/>
                    <div className={styles.playerImgs}>
                        <Image className={styles.player} width="500" height="600" src='/img/player1.png' alt=''/>
                        <Image className={styles.bird} width="400" height="500" src='/img/bird.png' alt=''/>
                        <Image className={styles.flower} width="200" height="200" src='/img/flower.png' alt=''/>
                    </div>
                </div>
                <div className={styles.plants}>
                <Image className={styles.leftPlants} width="500" height="600" src='/img/left-plant.png' alt=''/>
                <Image className={styles.rightPlant} width="500" height="600" src='/img/right-plant.png' alt=''/>
                <Image className={styles.rightPlantSecond} width="500" height="600" src='/img/right-plant2.png' alt=''/>
                <Image className={styles.rightPlantThird} width="500" height="600" src='/img/right-plant2.png' alt=''/>
                </div>
            </div>
            <div className={styles.headlineWrapper}>
                <Heading tag='h1' type='headline--1' firstLine={props.headline1} secondLine={props.headline2}/>
            </div>
        </div>
    );
};

export default Hero;