import styles from "./animatednote.module.scss";
import Note from '@/public/img/music-note.svg'

export const AnimatedNote = () => {
    return (
        <div className={styles.noteWrapper}>
            <Note/>
        </div>
    );
};

export default AnimatedNote;
