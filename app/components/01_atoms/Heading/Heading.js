import styles from "./heading.module.scss";

export const Heading = (props) => {
    const Tag = props.tag;
    return (
        <Tag className={styles.heading}>
            <span>{props.firstLine}</span>
            <br/>
            <span className={styles.secondLine}>{props.secondLine}</span>
        </Tag>
    );
};

export default Heading;