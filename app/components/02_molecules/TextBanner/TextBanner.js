import styles from "./textbanner.module.scss";

export const TextBanner = (props) => {
    return (
        <div className={styles.container}>
            <p className={styles.text}>{props.text}</p>
        </div>
    );
};

export default TextBanner;