import styles from "./heading.module.scss";
import classnames from "classnames";

export const Heading = (props) => {
    const Tag = props.tag;
    return (
        <Tag className={`${styles.heading} ${props.type} `}>
            <span className={props.reversed ? styles.indented : ''}>{props.firstLine}</span>
            <br/>
            <span className={[classnames(styles.secondLine, {
                [styles.indented]: !props.reversed
            })].join(" ")}>{props.secondLine}</span>
        </Tag>
    );
};

export default Heading;