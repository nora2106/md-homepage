import Image from "next/image";
import styles from "./flowerelement.module.scss";

export const FlowerElement = () => {

    return (
        <div className={styles.wrapper}>
            <Image className={styles.flower1} width="500" height="600" src='/img/flower1.svg' alt=''/>
            <Image className={styles.flower2} width="500" height="600" src='/img/flower2.svg' alt=''/>
        </div>
    );
};

export default FlowerElement;
