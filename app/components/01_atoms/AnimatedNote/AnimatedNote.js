import styles from "./animatednote.module.scss";
import Note from '@/public/img/music-note.svg'
import {motion} from "motion/react";

export const AnimatedNote = () => {
    let noteAnim = {
        hide: {
            rotate: 0,
            y: -300,
            opacity: 0,
        },
        show: {
            rotate: [0, 0, 6, 10],
            y: 0,
            opacity: [0, 0, 1, 1],
            transition: {
                duration: 2,
                transition: ["ease-in", "ease-out"],
                delay: .7,
                times: [0, .2, .8, 1]
            }
        },
    }

    return (
        <motion.div initial="hide"
                    whileInView="show"
                    viewport={{once: true}}
                    variants={noteAnim} className={styles.noteWrapper}>
            <Note/>
        </motion.div>
    );
};

export default AnimatedNote;
