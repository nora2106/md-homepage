import Image from 'next/image';
import Heading from "@/app/components/01_atoms/Heading/Heading";
import styles from "./hero.module.scss"

export const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.headlineWrapper}>
                <Heading tag='h1' firstLine='Marion' secondLine='Dimbath'/>
            </div>
            <div className={styles.imageWrapper}>
                <Image width="500" height="600" src='/img/player1.png' alt=''/>
            </div>
        </div>
    );
};

export default Hero;